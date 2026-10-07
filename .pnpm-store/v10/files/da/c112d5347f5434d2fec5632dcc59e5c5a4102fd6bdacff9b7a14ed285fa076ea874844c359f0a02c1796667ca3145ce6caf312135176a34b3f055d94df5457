'use strict';
const order = {
  '*': 0,
  '/': 0,
  '+': 1,
  '-': 1,
};

/**
 * @param {number} value
 * @param {number | false} prec
 */
function round(value, prec) {
  if (prec !== false) {
    const precision = Math.pow(10, prec);
    return Math.round(value * precision) / precision;
  }
  return value;
}

/**
 * @param {number | false} prec
 * @param {import('../parser').CalcNode} node
 *
 * @return {string}
 */
function stringify(node, prec) {
  switch (node.type) {
    case 'MathExpression': {
      const { left, right, operator: op } = node;
      let str = '';
      if (left.type === 'MathExpression' && order[op] < order[left.operator]) {
        str += `(${stringify(left, prec)})`;
      } else {
        str += stringify(left, prec);
      }

      str += order[op] ? ` ${node.operator} ` : node.operator;

      if (
        right.type === 'MathExpression' &&
        order[op] < order[right.operator]
      ) {
        str += `(${stringify(right, prec)})`;
      } else {
        str += stringify(right, prec);
      }

      return str;
    }
    case 'Number':
      return round(node.value, prec).toString();
    case 'Function':
      return node.value.toString();
    case 'ParenthesizedExpression':
      return `(${stringify(node.content, prec)})`;
    default:
      return round(node.value, prec) + node.unit;
  }
}

/**
 * @param {string} calc
 * @param {import('../parser').CalcNode} node
 * @param {string} originalValue
 * @param {{precision: number | false, warnWhenCannotResolve: boolean}} options
 * @param {import("postcss").Result} result
 * @param {import("postcss").ChildNode} item
 *
 * @returns {string}
 */
module.exports = function (calc, node, originalValue, options, result, item) {
  let str = stringify(node, options.precision);

  const shouldPrintCalc =
    node.type === 'MathExpression' || node.type === 'Function';

  if (shouldPrintCalc) {
    // if calc expression couldn't be resolved to a single value, re-wrap it as
    // a calc()
    str = `${calc}(${str})`;

    // if the warnWhenCannotResolve option is on, inform the user that the calc
    // expression could not be resolved to a single value
    if (options.warnWhenCannotResolve) {
      result.warn('Could not reduce expression: ' + originalValue, {
        plugin: 'postcss-calc',
        node: item,
      });
    }
  }
  return str;
};
