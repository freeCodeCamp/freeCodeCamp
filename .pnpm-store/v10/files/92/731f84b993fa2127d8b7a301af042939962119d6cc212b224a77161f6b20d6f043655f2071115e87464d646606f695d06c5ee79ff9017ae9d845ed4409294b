'use strict';

const doctrine = require('doctrine');
const pragmaUtil = require('./pragma');
const eslintUtil = require('./eslint');

const getScope = eslintUtil.getScope;
const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// eslint-disable-next-line valid-jsdoc
/**
 * @template {(_: object) => any} T
 * @param {T} fn
 * @returns {T}
 */
function memoize(fn) {
  const cache = new WeakMap();
  // @ts-ignore
  return function memoizedFn(arg) {
    const cachedValue = cache.get(arg);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    const v = fn(arg);
    cache.set(arg, v);
    return v;
  };
}

const getPragma = memoize(pragmaUtil.getFromContext);
const getCreateClass = memoize(pragmaUtil.getCreateClassFromContext);

/**
 * @param {ASTNode} node
 * @param {Context} context
 * @returns {boolean}
 */
function isES5Component(node, context) {
  const pragma = getPragma(context);
  const createClass = getCreateClass(context);

  if (!node.parent || !node.parent.callee) {
    return false;
  }
  const callee = node.parent.callee;
  // React.createClass({})
  if (callee.type === 'MemberExpression') {
    return callee.object.name === pragma && callee.property.name === createClass;
  }
  // createClass({})
  if (callee.type === 'Identifier') {
    return callee.name === createClass;
  }
  return false;
}

/**
 * Check if the node is explicitly declared as a descendant of a React Component
 * @param {any} node
 * @param {Context} context
 * @returns {boolean}
 */
function isExplicitComponent(node, context) {
  const sourceCode = getSourceCode(context);
  let comment;
  // Sometimes the passed node may not have been parsed yet by eslint, and this function call crashes.
  // Can be removed when eslint sets "parent" property for all nodes on initial AST traversal: https://github.com/eslint/eslint-scope/issues/27
  // eslint-disable-next-line no-warning-comments
  // FIXME: Remove try/catch when https://github.com/eslint/eslint-scope/issues/27 is implemented.
  try {
    comment = sourceCode.getJSDocComment(node);
  } catch (e) {
    comment = null;
  }

  if (comment === null) {
    return false;
  }

  let commentAst;
  try {
    commentAst = doctrine.parse(comment.value, {
      unwrap: true,
      tags: ['extends', 'augments'],
    });
  } catch (e) {
    // handle a bug in the archived `doctrine`, see #2596
    return false;
  }

  const relevantTags = commentAst.tags.filter((tag) => tag.name === 'React.Component' || tag.name === 'React.PureComponent');

  return relevantTags.length > 0;
}

/**
 * @param {ASTNode} node
 * @param {Context} context
 * @returns {boolean}
 */
function isES6Component(node, context) {
  const pragma = getPragma(context);
  if (isExplicitComponent(node, context)) {
    return true;
  }

  if (!node.superClass) {
    return false;
  }
  if (node.superClass.type === 'MemberExpression') {
    return node.superClass.object.name === pragma
          && /^(Pure)?Component$/.test(node.superClass.property.name);
  }
  if (node.superClass.type === 'Identifier') {
    return /^(Pure)?Component$/.test(node.superClass.name);
  }
  return false;
}

/**
 * Get the parent ES5 component node from the current scope
 * @param {Context} context
 * @param {ASTNode} node
 * @returns {ASTNode|null}
 */
function getParentES5Component(context, node) {
  let scope = getScope(context, node);
  while (scope) {
    // @ts-ignore
    node = scope.block && scope.block.parent && scope.block.parent.parent;
    if (node && isES5Component(node, context)) {
      return node;
    }
    scope = scope.upper;
  }
  return null;
}

/**
 * Get the parent ES6 component node from the current scope
 * @param {Context} context
 * @param {ASTNode} node
 * @returns {ASTNode | null}
 */
function getParentES6Component(context, node) {
  let scope = getScope(context, node);
  while (scope && scope.type !== 'class') {
    scope = scope.upper;
  }
  node = scope && scope.block;
  if (!node || !isES6Component(node, context)) {
    return null;
  }
  return node;
}

/**
 * Checks if a component extends React.PureComponent
 * @param {ASTNode} node
 * @param {Context} context
 * @returns {boolean}
 */
function isPureComponent(node, context) {
  const pragma = getPragma(context);
  if (node.superClass) {
    return new RegExp(`^(${pragma}\\.)?PureComponent$`).test(getText(context, node.superClass));
  }
  return false;
}

/**
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isStateMemberExpression(node) {
  return node.type === 'MemberExpression'
    && node.object.type === 'ThisExpression'
    && node.property.name === 'state';
}

module.exports = {
  isES5Component,
  isES6Component,
  getParentES5Component,
  getParentES6Component,
  isExplicitComponent,
  isPureComponent,
  isStateMemberExpression,
};
