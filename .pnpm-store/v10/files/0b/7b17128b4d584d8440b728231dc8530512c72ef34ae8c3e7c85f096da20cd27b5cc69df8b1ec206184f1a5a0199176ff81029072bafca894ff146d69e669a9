/**
 * @fileoverview Common propTypes sorting functionality.
 */

'use strict';

const toSorted = require('array.prototype.tosorted');

const astUtil = require('./ast');
const eslintUtil = require('./eslint');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

/**
 * Returns the value name of a node.
 *
 * @param {ASTNode} node the node to check.
 * @returns {string} The name of the node.
 */
function getValueName(node) {
  return node.type === 'Property'
    && node.value.property
    && node.value.property.name;
}

/**
 * Checks if the prop is required or not.
 *
 * @param {ASTNode} node the prop to check.
 * @returns {boolean} true if the prop is required.
 */
function isRequiredProp(node) {
  return getValueName(node) === 'isRequired';
}

/**
 * Checks if the proptype is a callback by checking if it starts with 'on'.
 *
 * @param {string} propName the name of the proptype to check.
 * @returns {boolean} true if the proptype is a callback.
 */
function isCallbackPropName(propName) {
  return /^on[A-Z]/.test(propName);
}

/**
 * Checks if the prop is PropTypes.shape.
 *
 * @param {ASTNode} node the prop to check.
 * @returns {boolean} true if the prop is PropTypes.shape.
 */
function isShapeProp(node) {
  return !!(
    node
    && node.callee
    && node.callee.property
    && node.callee.property.name === 'shape'
  );
}

/**
 * Returns the properties of a PropTypes.shape.
 *
 * @param {ASTNode} node the prop to check.
 * @returns {Array} the properties of the PropTypes.shape node.
 */
function getShapeProperties(node) {
  return node.arguments
    && node.arguments[0]
    && node.arguments[0].properties;
}

/**
 * Compares two elements.
 *
 * @param {ASTNode} a the first element to compare.
 * @param {ASTNode} b the second element to compare.
 * @param {Context} context The context of the two nodes.
 * @param {boolean=} ignoreCase whether or not to ignore case when comparing the two elements.
 * @param {boolean=} requiredFirst whether or not to sort required elements first.
 * @param {boolean=} callbacksLast whether or not to sort callbacks after everything else.
 * @param {boolean=} noSortAlphabetically whether or not to disable alphabetical sorting of the elements.
 * @returns {number} the sort order of the two elements.
 */
function sorter(a, b, context, ignoreCase, requiredFirst, callbacksLast, noSortAlphabetically) {
  const aKey = String(astUtil.getKeyValue(context, a));
  const bKey = String(astUtil.getKeyValue(context, b));

  if (requiredFirst) {
    if (isRequiredProp(a) && !isRequiredProp(b)) {
      return -1;
    }
    if (!isRequiredProp(a) && isRequiredProp(b)) {
      return 1;
    }
  }

  if (callbacksLast) {
    if (isCallbackPropName(aKey) && !isCallbackPropName(bKey)) {
      return 1;
    }
    if (!isCallbackPropName(aKey) && isCallbackPropName(bKey)) {
      return -1;
    }
  }

  if (!noSortAlphabetically) {
    if (ignoreCase) {
      return aKey.localeCompare(bKey);
    }

    if (aKey < bKey) {
      return -1;
    }
    if (aKey > bKey) {
      return 1;
    }
  }
  return 0;
}

const commentnodeMap = new WeakMap(); // all nodes reference WeakMap for start and end range

/**
 * Fixes sort order of prop types.
 *
 * @param {Context} context the second element to compare.
 * @param {Fixer} fixer the first element to compare.
 * @param {Array} declarations The context of the two nodes.
 * @param {boolean=} ignoreCase whether or not to ignore case when comparing the two elements.
 * @param {boolean=} requiredFirst whether or not to sort required elements first.
 * @param {boolean=} callbacksLast whether or not to sort callbacks after everything else.
 * @param {boolean=} noSortAlphabetically whether or not to disable alphabetical sorting of the elements.
 * @param {boolean=} sortShapeProp whether or not to sort propTypes defined in PropTypes.shape.
 * @param {boolean=} checkTypes whether or not sorting of prop type definitions are checked.
 * @returns {Object|*|{range, text}} the sort order of the two elements.
 */
function fixPropTypesSort(
  context,
  fixer,
  declarations,
  ignoreCase,
  requiredFirst,
  callbacksLast,
  noSortAlphabetically,
  sortShapeProp,
  checkTypes
) {
  function sortInSource(allNodes, source) {
    const originalSource = source;
    const sourceCode = getSourceCode(context);
    for (let i = 0; i < allNodes.length; i++) {
      const node = allNodes[i];
      let commentAfter = [];
      let commentBefore = [];
      let newStart = 0;
      let newEnd = 0;
      try {
        commentBefore = sourceCode.getCommentsBefore(node);
        commentAfter = sourceCode.getCommentsAfter(node);
      } catch (e) { /**/ }

      if (commentAfter.length === 0 || commentBefore.length === 0) {
        newStart = node.range[0];
        newEnd = node.range[1];
      }

      const firstCommentBefore = commentBefore[0];
      if (commentBefore.length >= 1) {
        newStart = firstCommentBefore.range[0];
      }
      const lastCommentAfter = commentAfter[commentAfter.length - 1];
      if (commentAfter.length >= 1) {
        newEnd = lastCommentAfter.range[1];
      }
      commentnodeMap.set(node, { start: newStart, end: newEnd, hasComment: true });
    }
    const nodeGroups = allNodes.reduce((acc, curr) => {
      if (curr.type === 'ExperimentalSpreadProperty' || curr.type === 'SpreadElement') {
        acc.push([]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, [[]]);

    nodeGroups.forEach((nodes) => {
      const sortedAttributes = toSorted(
        nodes,
        (a, b) => sorter(a, b, context, ignoreCase, requiredFirst, callbacksLast, noSortAlphabetically)
      );

      const sourceCodeText = getText(context);
      let separator = '';
      source = nodes.reduceRight((acc, attr, index) => {
        const sortedAttr = sortedAttributes[index];
        const commentNode = commentnodeMap.get(sortedAttr);
        let sortedAttrText = sourceCodeText.slice(commentNode.start, commentNode.end);
        const sortedAttrTextLastChar = sortedAttrText[sortedAttrText.length - 1];
        if (!separator && [';', ','].some((allowedSep) => sortedAttrTextLastChar === allowedSep)) {
          separator = sortedAttrTextLastChar;
        }
        if (sortShapeProp && isShapeProp(sortedAttr.value)) {
          const shape = getShapeProperties(sortedAttr.value);
          if (shape) {
            const attrSource = sortInSource(
              shape,
              originalSource
            );
            sortedAttrText = attrSource.slice(sortedAttr.range[0], sortedAttr.range[1]);
          }
        }
        const sortedAttrTextVal = checkTypes && !sortedAttrText.endsWith(separator) ? `${sortedAttrText}${separator}` : sortedAttrText;
        return `${acc.slice(0, commentnodeMap.get(attr).start)}${sortedAttrTextVal}${acc.slice(commentnodeMap.get(attr).end)}`;
      }, source);
    });
    return source;
  }

  const source = sortInSource(declarations, getText(context));

  const rangeStart = commentnodeMap.get(declarations[0]).start;
  const rangeEnd = commentnodeMap.get(declarations[declarations.length - 1]).end;
  return fixer.replaceTextRange([rangeStart, rangeEnd], source.slice(rangeStart, rangeEnd));
}

module.exports = {
  fixPropTypesSort,
  isCallbackPropName,
  isRequiredProp,
  isShapeProp,
};
