/**
 * @fileoverview Utility functions for React components detection
 * @author Yannick Croissant
 */

'use strict';

const getScope = require('./eslint').getScope;

/**
 * Search a particular variable in a list
 * @param {Array} variables The variables list.
 * @param {string} name The name of the variable to search.
 * @returns {boolean} True if the variable was found, false if not.
 */
function findVariable(variables, name) {
  return variables.some((variable) => variable.name === name);
}

/**
 * Find and return a particular variable in a list
 * @param {Array} variables The variables list.
 * @param {string} name The name of the variable to search.
 * @returns {Object} Variable if the variable was found, null if not.
 */
function getVariable(variables, name) {
  return variables.find((variable) => variable.name === name);
}

/**
 * Searches for a variable in the given scope.
 *
 * @param {Object} context The current rule context.
 * @param {ASTNode} node The node to start looking from.
 * @param {string} name The name of the variable to search.
 * @returns {Object | undefined} Variable if the variable was found, undefined if not.
 */
function getVariableFromContext(context, node, name) {
  let scope = getScope(context, node);

  while (scope) {
    let variable = getVariable(scope.variables, name);

    if (!variable && scope.childScopes.length) {
      variable = getVariable(scope.childScopes[0].variables, name);

      if (!variable && scope.childScopes[0].childScopes.length) {
        variable = getVariable(scope.childScopes[0].childScopes[0].variables, name);
      }
    }

    if (variable) {
      return variable;
    }
    scope = scope.upper;
  }
  return undefined;
}

/**
 * Find a variable by name in the current scope.
 * @param {Object} context The current rule context.
 * @param {ASTNode} node The node to check. Must be an Identifier node.
 * @param  {string} name Name of the variable to look for.
 * @returns {ASTNode|null} Return null if the variable could not be found, ASTNode otherwise.
 */
function findVariableByName(context, node, name) {
  const variable = getVariableFromContext(context, node, name);

  if (!variable || !variable.defs[0] || !variable.defs[0].node) {
    return null;
  }

  if (variable.defs[0].node.type === 'TypeAlias') {
    return variable.defs[0].node.right;
  }

  if (variable.defs[0].type === 'ImportBinding') {
    return variable.defs[0].node;
  }

  return variable.defs[0].node.init;
}

/**
 * Returns the latest definition of the variable.
 * @param {Object} variable
 * @returns {Object | undefined} The latest variable definition or undefined.
 */
function getLatestVariableDefinition(variable) {
  return variable.defs[variable.defs.length - 1];
}

module.exports = {
  findVariable,
  findVariableByName,
  getVariable,
  getVariableFromContext,
  getLatestVariableDefinition,
};
