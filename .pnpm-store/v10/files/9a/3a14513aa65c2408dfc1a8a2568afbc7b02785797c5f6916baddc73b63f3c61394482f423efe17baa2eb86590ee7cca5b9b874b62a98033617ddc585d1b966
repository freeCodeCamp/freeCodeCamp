'use strict';

const astUtil = require('./ast');

/**
 * Checks if the node is a React.createContext call
 * @param {ASTNode} node - The AST node being checked.
 * @returns {boolean} - True if node is a React.createContext call, false if not.
 */
module.exports = function isCreateContext(node) {
  if (
    node.init
    && node.init.callee
  ) {
    if (
      astUtil.isCallExpression(node.init)
      && node.init.callee.name === 'createContext'
    ) {
      return true;
    }

    if (
      node.init.callee.type === 'MemberExpression'
      && node.init.callee.property
      && node.init.callee.property.name === 'createContext'
    ) {
      return true;
    }
  }

  if (
    node.expression
    && node.expression.type === 'AssignmentExpression'
    && node.expression.operator === '='
    && astUtil.isCallExpression(node.expression.right)
    && node.expression.right.callee
  ) {
    const right = node.expression.right;

    if (right.callee.name === 'createContext') {
      return true;
    }

    if (
      right.callee.type === 'MemberExpression'
      && right.callee.property
      && right.callee.property.name === 'createContext'
    ) {
      return true;
    }
  }

  return false;
};
