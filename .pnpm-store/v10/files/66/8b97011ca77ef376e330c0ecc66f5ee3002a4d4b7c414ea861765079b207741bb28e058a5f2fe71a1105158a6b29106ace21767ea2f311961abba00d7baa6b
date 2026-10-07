'use strict';
const convertUnit = require('./convertUnit.js');

/**
 * @param {import('../parser').CalcNode} node
 * @return {node is import('../parser').ValueExpression}
 */
function isValueType(node) {
  switch (node.type) {
    case 'LengthValue':
    case 'AngleValue':
    case 'TimeValue':
    case 'FrequencyValue':
    case 'ResolutionValue':
    case 'EmValue':
    case 'ExValue':
    case 'ChValue':
    case 'RemValue':
    case 'VhValue':
    case 'VwValue':
    case 'VminValue':
    case 'VmaxValue':
    case 'PercentageValue':
    case 'Number':
      return true;
  }
  return false;
}

/** @param {'-'|'+'} operator */
function flip(operator) {
  return operator === '+' ? '-' : '+';
}

/**
 * @param {string} operator
 * @returns {operator is '+'|'-'}
 */
function isAddSubOperator(operator) {
  return operator === '+' || operator === '-';
}

/**
 * @typedef {{preOperator: '+'|'-', node: import('../parser').CalcNode}} Collectible
 */

/**
 * @param {'+'|'-'} preOperator
 * @param {import('../parser').CalcNode} node
 * @param {Collectible[]} collected
 * @param {number} precision
 */
function collectAddSubItems(preOperator, node, collected, precision) {
  if (!isAddSubOperator(preOperator)) {
    throw new Error(`invalid operator ${preOperator}`);
  }
  if (isValueType(node)) {
    const itemIndex = collected.findIndex((x) => x.node.type === node.type);
    if (itemIndex >= 0) {
      if (node.value === 0) {
        return;
      }
      // can cast because of the criterion used to find itemIndex
      const otherValueNode = /** @type import('../parser').ValueExpression*/ (
        collected[itemIndex].node
      );
      const { left: reducedNode, right: current } = convertNodesUnits(
        otherValueNode,
        node,
        precision
      );

      if (collected[itemIndex].preOperator === '-') {
        collected[itemIndex].preOperator = '+';
        reducedNode.value *= -1;
      }
      if (preOperator === '+') {
        reducedNode.value += current.value;
      } else {
        reducedNode.value -= current.value;
      }
      // make sure reducedNode.value >= 0
      if (reducedNode.value >= 0) {
        collected[itemIndex] = { node: reducedNode, preOperator: '+' };
      } else {
        reducedNode.value *= -1;
        collected[itemIndex] = { node: reducedNode, preOperator: '-' };
      }
    } else {
      // make sure node.value >= 0
      if (node.value >= 0) {
        collected.push({ node, preOperator });
      } else {
        node.value *= -1;
        collected.push({ node, preOperator: flip(preOperator) });
      }
    }
  } else if (node.type === 'MathExpression') {
    if (isAddSubOperator(node.operator)) {
      collectAddSubItems(preOperator, node.left, collected, precision);
      const collectRightOperator =
        preOperator === '-' ? flip(node.operator) : node.operator;
      collectAddSubItems(
        collectRightOperator,
        node.right,
        collected,
        precision
      );
    } else {
      // * or /
      const reducedNode = reduce(node, precision);
      // prevent infinite recursive call
      if (
        reducedNode.type !== 'MathExpression' ||
        isAddSubOperator(reducedNode.operator)
      ) {
        collectAddSubItems(preOperator, reducedNode, collected, precision);
      } else {
        collected.push({ node: reducedNode, preOperator });
      }
    }
  } else if (node.type === 'ParenthesizedExpression') {
    collectAddSubItems(preOperator, node.content, collected, precision);
  } else {
    collected.push({ node, preOperator });
  }
}

/**
 * @param {import('../parser').CalcNode} node
 * @param {number} precision
 */
function reduceAddSubExpression(node, precision) {
  /** @type Collectible[] */
  const collected = [];
  collectAddSubItems('+', node, collected, precision);

  const withoutZeroItem = collected.filter(
    (item) => !(isValueType(item.node) && item.node.value === 0)
  );
  const firstNonZeroItem = withoutZeroItem[0]; // could be undefined

  // prevent producing "calc(-var(--a))" or "calc()"
  // which is invalid css
  if (
    !firstNonZeroItem ||
    (firstNonZeroItem.preOperator === '-' &&
      !isValueType(firstNonZeroItem.node))
  ) {
    const firstZeroItem = collected.find(
      (item) => isValueType(item.node) && item.node.value === 0
    );
    if (firstZeroItem) {
      withoutZeroItem.unshift(firstZeroItem);
    }
  }

  // make sure the preOperator of the first item is +
  if (
    withoutZeroItem[0].preOperator === '-' &&
    isValueType(withoutZeroItem[0].node)
  ) {
    withoutZeroItem[0].node.value *= -1;
    withoutZeroItem[0].preOperator = '+';
  }

  let root = withoutZeroItem[0].node;
  for (let i = 1; i < withoutZeroItem.length; i++) {
    root = {
      type: 'MathExpression',
      operator: withoutZeroItem[i].preOperator,
      left: root,
      right: withoutZeroItem[i].node,
    };
  }

  return root;
}
/**
 * @param {import('../parser').MathExpression} node
 */
function reduceDivisionExpression(node) {
  if (!isValueType(node.right)) {
    return node;
  }

  if (node.right.type !== 'Number') {
    throw new Error(`Cannot divide by "${node.right.unit}", number expected`);
  }

  return applyNumberDivision(node.left, node.right.value);
}

/**
 * apply (expr) / number
 *
 * @param {import('../parser').CalcNode} node
 * @param {number} divisor
 * @return {import('../parser').CalcNode}
 */
function applyNumberDivision(node, divisor) {
  if (divisor === 0) {
    throw new Error('Cannot divide by zero');
  }
  if (isValueType(node)) {
    node.value /= divisor;
    return node;
  }
  if (node.type === 'MathExpression' && isAddSubOperator(node.operator)) {
    // turn (a + b) / num into a/num + b/num
    // is good for further reduction
    // checkout the test case
    // "should reduce division before reducing additions"
    return {
      type: 'MathExpression',
      operator: node.operator,
      left: applyNumberDivision(node.left, divisor),
      right: applyNumberDivision(node.right, divisor),
    };
  }
  // it is impossible to reduce it into a single value
  // .e.g the node contains css variable
  // so we just preserve the division and let browser do it
  return {
    type: 'MathExpression',
    operator: '/',
    left: node,
    right: {
      type: 'Number',
      value: divisor,
    },
  };
}
/**
 * @param {import('../parser').MathExpression} node
 */
function reduceMultiplicationExpression(node) {
  // (expr) * number
  if (node.right.type === 'Number') {
    return applyNumberMultiplication(node.left, node.right.value);
  }
  // number * (expr)
  if (node.left.type === 'Number') {
    return applyNumberMultiplication(node.right, node.left.value);
  }
  return node;
}

/**
 * apply (expr) * number
 * @param {number} multiplier
 * @param {import('../parser').CalcNode} node
 * @return {import('../parser').CalcNode}
 */
function applyNumberMultiplication(node, multiplier) {
  if (isValueType(node)) {
    node.value *= multiplier;
    return node;
  }
  if (node.type === 'MathExpression' && isAddSubOperator(node.operator)) {
    // turn (a + b) * num into a*num + b*num
    // is good for further reduction
    // checkout the test case
    // "should reduce multiplication before reducing additions"
    return {
      type: 'MathExpression',
      operator: node.operator,
      left: applyNumberMultiplication(node.left, multiplier),
      right: applyNumberMultiplication(node.right, multiplier),
    };
  }
  // it is impossible to reduce it into a single value
  // .e.g the node contains css variable
  // so we just preserve the division and let browser do it
  return {
    type: 'MathExpression',
    operator: '*',
    left: node,
    right: {
      type: 'Number',
      value: multiplier,
    },
  };
}

/**
 * @param {import('../parser').ValueExpression} left
 * @param {import('../parser').ValueExpression} right
 * @param {number} precision
 */
function convertNodesUnits(left, right, precision) {
  switch (left.type) {
    case 'LengthValue':
    case 'AngleValue':
    case 'TimeValue':
    case 'FrequencyValue':
    case 'ResolutionValue':
      if (right.type === left.type && right.unit && left.unit) {
        const converted = convertUnit(
          right.value,
          right.unit,
          left.unit,
          precision
        );

        right = {
          type: left.type,
          value: converted,
          unit: left.unit,
        };
      }

      return { left, right };
    default:
      return { left, right };
  }
}

/**
 * @param {import('../parser').ParenthesizedExpression} node
 */
function includesNoCssProperties(node) {
  return (
    node.content.type !== 'Function' &&
    (node.content.type !== 'MathExpression' ||
      (node.content.right.type !== 'Function' &&
        node.content.left.type !== 'Function'))
  );
}
/**
 * @param {import('../parser').CalcNode} node
 * @param {number} precision
 * @return {import('../parser').CalcNode}
 */
function reduce(node, precision) {
  if (node.type === 'MathExpression') {
    if (isAddSubOperator(node.operator)) {
      // reduceAddSubExpression will call reduce recursively
      return reduceAddSubExpression(node, precision);
    }
    node.left = reduce(node.left, precision);
    node.right = reduce(node.right, precision);
    switch (node.operator) {
      case '/':
        return reduceDivisionExpression(node);
      case '*':
        return reduceMultiplicationExpression(node);
    }

    return node;
  }

  if (node.type === 'ParenthesizedExpression') {
    if (includesNoCssProperties(node)) {
      return reduce(node.content, precision);
    }
  }

  return node;
}

module.exports = reduce;
