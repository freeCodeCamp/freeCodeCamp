/**
 * @fileoverview Utility functions for JSX
 */

'use strict';

const elementType = require('jsx-ast-utils/elementType');

const astUtil = require('./ast');
const isCreateElement = require('./isCreateElement');
const variableUtil = require('./variable');

// See https://github.com/babel/babel/blob/ce420ba51c68591e057696ef43e028f41c6e04cd/packages/babel-types/src/validators/react/isCompatTag.js
// for why we only test for the first character
const COMPAT_TAG_REGEX = /^[a-z]/;

/**
 * Checks if a node represents a DOM element according to React.
 * @param {object} node - JSXOpeningElement to check.
 * @returns {boolean} Whether or not the node corresponds to a DOM element.
 */
function isDOMComponent(node) {
  const name = elementType(node);
  return COMPAT_TAG_REGEX.test(name);
}

/**
 * Test whether a JSXElement is a fragment
 * @param {JSXElement} node
 * @param {string} reactPragma
 * @param {string} fragmentPragma
 * @returns {boolean}
 */
function isFragment(node, reactPragma, fragmentPragma) {
  const name = node.openingElement.name;

  // <Fragment>
  if (name.type === 'JSXIdentifier' && name.name === fragmentPragma) {
    return true;
  }

  // <React.Fragment>
  if (
    name.type === 'JSXMemberExpression'
    && name.object.type === 'JSXIdentifier'
    && name.object.name === reactPragma
    && name.property.type === 'JSXIdentifier'
    && name.property.name === fragmentPragma
  ) {
    return true;
  }

  return false;
}

/**
 * Checks if a node represents a JSX element or fragment.
 * @param {object} node - node to check.
 * @returns {boolean} Whether or not the node if a JSX element or fragment.
 */
function isJSX(node) {
  return node && ['JSXElement', 'JSXFragment'].indexOf(node.type) >= 0;
}

/**
 * Check if node is like `key={...}` as in `<Foo key={...} />`
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isJSXAttributeKey(node) {
  return node.type === 'JSXAttribute'
    && node.name
    && node.name.type === 'JSXIdentifier'
    && node.name.name === 'key';
}

/**
 * Check if value has only whitespaces
 * @param {unknown} value
 * @returns {boolean}
 */
function isWhiteSpaces(value) {
  return typeof value === 'string' ? /^\s*$/.test(value) : false;
}

/**
 * Check if the node is returning JSX or null
 *
 * @param {Context} context The context of `ASTNode`.
 * @param {ASTNode} ASTnode The AST node being checked
 * @param {boolean} [strict] If true, in a ternary condition the node must return JSX in both cases
 * @param {boolean} [ignoreNull] If true, null return values will be ignored
 * @returns {boolean} True if the node is returning JSX or null, false if not
 */
function isReturningJSX(context, ASTnode, strict, ignoreNull) {
  const isJSXValue = (node) => {
    if (!node) {
      return false;
    }
    switch (node.type) {
      case 'ConditionalExpression':
        if (strict) {
          return isJSXValue(node.consequent) && isJSXValue(node.alternate);
        }
        return isJSXValue(node.consequent) || isJSXValue(node.alternate);
      case 'LogicalExpression':
        if (strict) {
          return isJSXValue(node.left) && isJSXValue(node.right);
        }
        return isJSXValue(node.left) || isJSXValue(node.right);
      case 'SequenceExpression':
        return isJSXValue(node.expressions[node.expressions.length - 1]);
      case 'JSXElement':
      case 'JSXFragment':
        return true;
      case 'CallExpression':
        return isCreateElement(context, node);
      case 'Literal':
        if (!ignoreNull && node.value === null) {
          return true;
        }
        return false;
      case 'Identifier': {
        const variable = variableUtil.findVariableByName(context, node, node.name);
        return isJSX(variable);
      }
      default:
        return false;
    }
  };

  let found = false;
  astUtil.traverseReturns(ASTnode, context, (node, breakTraverse) => {
    if (isJSXValue(node)) {
      found = true;
      breakTraverse();
    }
  });

  return found;
}

/**
 * Check if the node is returning only null values
 *
 * @param {ASTNode} ASTnode The AST node being checked
 * @param {Context} context The context of `ASTNode`.
 * @returns {boolean} True if the node is returning only null values
 */
function isReturningOnlyNull(ASTnode, context) {
  let found = false;
  let foundSomethingElse = false;
  astUtil.traverseReturns(ASTnode, context, (node) => {
    // Traverse return statement
    astUtil.traverse(node, {
      enter(childNode) {
        const setFound = () => {
          found = true;
          this.skip();
        };
        const setFoundSomethingElse = () => {
          foundSomethingElse = true;
          this.skip();
        };
        switch (childNode.type) {
          case 'ReturnStatement':
            break;
          case 'ConditionalExpression':
            if (childNode.consequent.value === null && childNode.alternate.value === null) {
              setFound();
            }
            break;
          case 'Literal':
            if (childNode.value === null) {
              setFound();
            }
            break;
          default:
            setFoundSomethingElse();
        }
      },
    });
  });

  return found && !foundSomethingElse;
}

module.exports = {
  isDOMComponent,
  isFragment,
  isJSX,
  isJSXAttributeKey,
  isWhiteSpaces,
  isReturningJSX,
  isReturningOnlyNull,
};
