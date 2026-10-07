/**
 * @fileoverview Utility functions for props
 */

'use strict';

const astUtil = require('./ast');

/**
 * Checks if the Identifier node passed in looks like a propTypes declaration.
 * @param {ASTNode} node The node to check. Must be an Identifier node.
 * @returns {boolean} `true` if the node is a propTypes declaration, `false` if not
 */
function isPropTypesDeclaration(node) {
  if (node && (node.type === 'ClassProperty' || node.type === 'PropertyDefinition')) {
    // Flow support
    if (node.typeAnnotation && node.key.name === 'props') {
      return true;
    }
  }
  return astUtil.getPropertyName(node) === 'propTypes';
}

/**
 * Checks if the node passed in looks like a contextTypes declaration.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a contextTypes declaration, `false` if not
 */
function isContextTypesDeclaration(node) {
  if (node && (node.type === 'ClassProperty' || node.type === 'PropertyDefinition')) {
    // Flow support
    if (node.typeAnnotation && node.key.name === 'context') {
      return true;
    }
  }
  return astUtil.getPropertyName(node) === 'contextTypes';
}

/**
 * Checks if the node passed in looks like a contextType declaration.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a contextType declaration, `false` if not
 */
function isContextTypeDeclaration(node) {
  return astUtil.getPropertyName(node) === 'contextType';
}

/**
 * Checks if the node passed in looks like a childContextTypes declaration.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a childContextTypes declaration, `false` if not
 */
function isChildContextTypesDeclaration(node) {
  return astUtil.getPropertyName(node) === 'childContextTypes';
}

/**
 * Checks if the Identifier node passed in looks like a defaultProps declaration.
 * @param {ASTNode} node The node to check. Must be an Identifier node.
 * @returns {boolean} `true` if the node is a defaultProps declaration, `false` if not
 */
function isDefaultPropsDeclaration(node) {
  const propName = astUtil.getPropertyName(node);
  return (propName === 'defaultProps' || propName === 'getDefaultProps');
}

/**
 * Checks if we are declaring a display name
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean} True if we are declaring a display name, false if not.
 */
function isDisplayNameDeclaration(node) {
  switch (node.type) {
    case 'ClassProperty':
    case 'PropertyDefinition':
      return node.key && node.key.name === 'displayName';
    case 'Identifier':
      return node.name === 'displayName';
    case 'Literal':
      return node.value === 'displayName';
    default:
      return false;
  }
}

/**
 * Checks if the PropTypes MemberExpression node passed in declares a required propType.
 * @param {ASTNode} propTypeExpression node to check. Must be a `PropTypes` MemberExpression.
 * @returns {boolean} `true` if this PropType is required, `false` if not.
 */
function isRequiredPropType(propTypeExpression) {
  return propTypeExpression.type === 'MemberExpression'
    && propTypeExpression.property.name === 'isRequired';
}

/**
 * Returns the type arguments of a node or type parameters if type arguments are not available.
 * @param {ASTNode} node The node to get the type arguments from.
 * @returns {ASTNode} The type arguments or type parameters of the node.
 */
function getTypeArguments(node) {
  if ('typeArguments' in node) {
    return node.typeArguments;
  }
  return node.typeParameters;
}

/**
 * Returns the super type arguments of a node or super type parameters if type arguments are not available.
 * @param {ASTNode} node The node to get the super type arguments from.
 * @returns {ASTNode} The super type arguments or parameters of the node.
 */
function getSuperTypeArguments(node) {
  if ('superTypeArguments' in node) {
    return node.superTypeArguments;
  }
  return node.superTypeParameters;
}

module.exports = {
  isPropTypesDeclaration,
  isContextTypesDeclaration,
  isContextTypeDeclaration,
  isChildContextTypesDeclaration,
  isDefaultPropsDeclaration,
  isDisplayNameDeclaration,
  isRequiredPropType,
  getTypeArguments,
  getSuperTypeArguments,
};
