/**
 * @fileoverview Utility functions for AST
 */

'use strict';

const estraverse = require('estraverse');
const eslintUtil = require('./eslint');

const getFirstTokens = eslintUtil.getFirstTokens;
const getScope = eslintUtil.getScope;
const getSourceCode = eslintUtil.getSourceCode;
// const pragmaUtil = require('./pragma');

/**
 * Wrapper for estraverse.traverse
 *
 * @param {ASTNode} ASTnode The AST node being checked
 * @param {Object} visitor Visitor Object for estraverse
 */
function traverse(ASTnode, visitor) {
  const opts = Object.assign({}, {
    fallback(node) {
      return Object.keys(node).filter((key) => key === 'children' || key === 'argument');
    },
  }, visitor);

  opts.keys = Object.assign({}, visitor.keys, {
    JSXElement: ['children'],
    JSXFragment: ['children'],
  });

  estraverse.traverse(ASTnode, opts);
}

function loopNodes(nodes) {
  for (let i = nodes.length - 1; i >= 0; i--) {
    if (nodes[i].type === 'ReturnStatement') {
      return nodes[i];
    }
    if (nodes[i].type === 'SwitchStatement') {
      const j = nodes[i].cases.length - 1;
      if (j >= 0) {
        return loopNodes(nodes[i].cases[j].consequent);
      }
    }
  }
  return false;
}

/**
 * Find a return statement in the current node
 *
 * @param {ASTNode} node The AST node being checked
 * @returns {ASTNode | false}
 */
function findReturnStatement(node) {
  if (
    (!node.value || !node.value.body || !node.value.body.body)
    && (!node.body || !node.body.body)
  ) {
    return false;
  }

  const bodyNodes = node.value ? node.value.body.body : node.body.body;

  return loopNodes(bodyNodes);
}

// eslint-disable-next-line valid-jsdoc -- valid-jsdoc cannot parse function types.
/**
 * Helper function for traversing "returns" (return statements or the
 * returned expression in the case of an arrow function) of a function
 *
 * @param {ASTNode} ASTNode The AST node being checked
 * @param {Context} context The context of `ASTNode`.
 * @param {(returnValue: ASTNode, breakTraverse: () => void) => void} onReturn
 *   Function to execute for each returnStatement found
 * @returns {undefined}
 */
function traverseReturns(ASTNode, context, onReturn) {
  const nodeType = ASTNode.type;

  if (nodeType === 'ReturnStatement') {
    onReturn(ASTNode.argument, () => {});
    return;
  }

  if (nodeType === 'ArrowFunctionExpression' && ASTNode.expression) {
    onReturn(ASTNode.body, () => {});
    return;
  }

  /* TODO: properly warn on React.forwardRefs having typo properties
  if (astUtil.isCallExpression(ASTNode)) {
    const callee = ASTNode.callee;
    const pragma = pragmaUtil.getFromContext(context);
    if (
      callee.type === 'MemberExpression'
      && callee.object.type === 'Identifier'
      && callee.object.name === pragma
      && callee.property.type === 'Identifier'
      && callee.property.name === 'forwardRef'
      && ASTNode.arguments.length > 0
    ) {
      return enterFunc(ASTNode.arguments[0]);
    }
    return;
  }
  */

  if (
    nodeType !== 'FunctionExpression'
    && nodeType !== 'FunctionDeclaration'
    && nodeType !== 'ArrowFunctionExpression'
    && nodeType !== 'MethodDefinition'
  ) {
    return;
  }

  traverse(ASTNode.body, {
    enter(node) {
      const breakTraverse = () => {
        this.break();
      };
      switch (node.type) {
        case 'ReturnStatement':
          this.skip();
          onReturn(node.argument, breakTraverse);
          return;
        case 'BlockStatement':
        case 'IfStatement':
        case 'ForStatement':
        case 'WhileStatement':
        case 'SwitchStatement':
        case 'SwitchCase':
          return;
        default:
          this.skip();
      }
    },
  });
}

/**
 * Get node with property's name
 * @param {Object} node - Property.
 * @returns {Object} Property name node.
 */
function getPropertyNameNode(node) {
  if (
    node.key
    || node.type === 'MethodDefinition'
    || node.type === 'Property'
  ) {
    return node.key;
  }
  if (node.type === 'MemberExpression') {
    return node.property;
  }
  return null;
}

/**
 * Get properties name
 * @param {Object} node - Property.
 * @returns {string} Property name.
 */
function getPropertyName(node) {
  const nameNode = getPropertyNameNode(node);
  return nameNode ? nameNode.name : '';
}

/**
 * Get properties for a given AST node
 * @param {ASTNode} node The AST node being checked.
 * @returns {Array} Properties array.
 */
function getComponentProperties(node) {
  switch (node.type) {
    case 'ClassDeclaration':
    case 'ClassExpression':
      return node.body.body;
    case 'ObjectExpression':
      return node.properties;
    default:
      return [];
  }
}

/**
 * Gets the first node in a line from the initial node, excluding whitespace.
 * @param {Object} context The node to check
 * @param {ASTNode} node The node to check
 * @return {ASTNode} the first node in the line
 */
function getFirstNodeInLine(context, node) {
  const sourceCode = getSourceCode(context);
  let token = node;
  let lines;
  do {
    token = sourceCode.getTokenBefore(token);
    lines = token.type === 'JSXText'
      ? token.value.split('\n')
      : null;
  } while (
    token.type === 'JSXText'
        && /^\s*$/.test(lines[lines.length - 1])
  );
  return token;
}

/**
 * Checks if the node is the first in its line, excluding whitespace.
 * @param {Object} context The node to check
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's the first node in its line
 */
function isNodeFirstInLine(context, node) {
  const token = getFirstNodeInLine(context, node);
  const startLine = node.loc.start.line;
  const endLine = token ? token.loc.end.line : -1;
  return startLine !== endLine;
}

/**
 * Checks if the node is a function or arrow function expression.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function-like expression
 */
function isFunctionLikeExpression(node) {
  return node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression';
}

/**
 * Checks if the node is a function.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function
 */
function isFunction(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration';
}

/**
 * Checks if node is a function declaration or expression or arrow function.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function-like
 */
function isFunctionLike(node) {
  return node.type === 'FunctionDeclaration' || isFunctionLikeExpression(node);
}

/**
 * Checks if the node is a class.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a class
 */
function isClass(node) {
  return node.type === 'ClassDeclaration' || node.type === 'ClassExpression';
}

/**
 * Check if we are in a class constructor
 * @param {Context} context
 * @param {ASTNode} node The AST node being checked.
 * @return {boolean}
 */
function inConstructor(context, node) {
  let scope = getScope(context, node);
  while (scope) {
    // @ts-ignore
    if (scope.block && scope.block.parent && scope.block.parent.kind === 'constructor') {
      return true;
    }
    scope = scope.upper;
  }
  return false;
}

/**
 * Removes quotes from around an identifier.
 * @param {string} string the identifier to strip
 * @returns {string}
 */
function stripQuotes(string) {
  return string.replace(/^'|'$/g, '');
}

/**
 * Retrieve the name of a key node
 * @param {Context} context The AST node with the key.
 * @param {any} node The AST node with the key.
 * @return {string | undefined} the name of the key
 */
function getKeyValue(context, node) {
  if (node.type === 'ObjectTypeProperty') {
    const tokens = getFirstTokens(context, node, 2);
    return (tokens[0].value === '+' || tokens[0].value === '-'
      ? tokens[1].value
      : stripQuotes(tokens[0].value)
    );
  }
  if (node.type === 'GenericTypeAnnotation') {
    return node.id.name;
  }
  if (node.type === 'ObjectTypeAnnotation') {
    return;
  }
  const key = node.key || node.argument;
  if (!key) {
    return;
  }
  return key.type === 'Identifier' ? key.name : key.value;
}

/**
 * Checks if a node is surrounded by parenthesis.
 *
 * @param {object} context - Context from the rule
 * @param {ASTNode} node - Node to be checked
 * @returns {boolean}
 */
function isParenthesized(context, node) {
  const sourceCode = getSourceCode(context);
  const previousToken = sourceCode.getTokenBefore(node);
  const nextToken = sourceCode.getTokenAfter(node);

  return !!previousToken && !!nextToken
    && previousToken.value === '(' && previousToken.range[1] <= node.range[0]
    && nextToken.value === ')' && nextToken.range[0] >= node.range[1];
}

/**
 * Checks if a node is being assigned a value: props.bar = 'bar'
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean}
 */
function isAssignmentLHS(node) {
  return (
    node.parent
    && node.parent.type === 'AssignmentExpression'
    && node.parent.left === node
  );
}

function isTSAsExpression(node) {
  return node && node.type === 'TSAsExpression';
}

/**
 * Matcher used to check whether given node is a `CallExpression`
 * @param {ASTNode} node The AST node
 * @returns {boolean} True if node is a `CallExpression`, false if not
 */
function isCallExpression(node) {
  return node && node.type === 'CallExpression';
}

/**
 * Extracts the expression node that is wrapped inside a TS type assertion
 *
 * @param {ASTNode} node - potential TS node
 * @returns {ASTNode} - unwrapped expression node
 */
function unwrapTSAsExpression(node) {
  return isTSAsExpression(node) ? node.expression : node;
}

function isTSTypeReference(node) {
  if (!node) return false;

  return node.type === 'TSTypeReference';
}

function isTSTypeAnnotation(node) {
  if (!node) { return false; }

  return node.type === 'TSTypeAnnotation';
}

function isTSTypeLiteral(node) {
  if (!node) { return false; }

  return node.type === 'TSTypeLiteral';
}

function isTSIntersectionType(node) {
  if (!node) { return false; }

  return node.type === 'TSIntersectionType';
}

function isTSInterfaceHeritage(node) {
  if (!node) { return false; }

  return node.type === 'TSInterfaceHeritage';
}

function isTSInterfaceDeclaration(node) {
  if (!node) { return false; }

  return (node.type === 'ExportNamedDeclaration' && node.declaration
    ? node.declaration.type
    : node.type
  ) === 'TSInterfaceDeclaration';
}

function isTSTypeDeclaration(node) {
  if (!node) { return false; }

  const nodeToCheck = node.type === 'ExportNamedDeclaration' && node.declaration
    ? node.declaration
    : node;

  return nodeToCheck.type === 'VariableDeclaration' && nodeToCheck.kind === 'type';
}

function isTSTypeAliasDeclaration(node) {
  if (!node) { return false; }

  if (node.type === 'ExportNamedDeclaration' && node.declaration) {
    return node.declaration.type === 'TSTypeAliasDeclaration' && node.exportKind === 'type';
  }
  return node.type === 'TSTypeAliasDeclaration';
}

function isTSParenthesizedType(node) {
  if (!node) { return false; }

  return node.type === 'TSTypeAliasDeclaration';
}

function isTSFunctionType(node) {
  if (!node) { return false; }

  return node.type === 'TSFunctionType';
}

function isTSTypeQuery(node) {
  if (!node) { return false; }

  return node.type === 'TSTypeQuery';
}

function isTSTypeParameterInstantiation(node) {
  if (!node) { return false; }

  return node.type === 'TSTypeParameterInstantiation';
}

module.exports = {
  findReturnStatement,
  getComponentProperties,
  getFirstNodeInLine,
  getKeyValue,
  getPropertyName,
  getPropertyNameNode,
  inConstructor,
  isAssignmentLHS,
  isCallExpression,
  isClass,
  isFunction,
  isFunctionLike,
  isFunctionLikeExpression,
  isNodeFirstInLine,
  isParenthesized,
  isTSAsExpression,
  isTSFunctionType,
  isTSInterfaceDeclaration,
  isTSInterfaceHeritage,
  isTSIntersectionType,
  isTSParenthesizedType,
  isTSTypeAliasDeclaration,
  isTSTypeAnnotation,
  isTSTypeDeclaration,
  isTSTypeLiteral,
  isTSTypeParameterInstantiation,
  isTSTypeQuery,
  isTSTypeReference,
  traverse,
  traverseReturns,
  unwrapTSAsExpression,
};
