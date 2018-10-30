/**
 * @fileoverview Utility functions for React components detection
 * @author Yannick Croissant
 */
'use strict';

var find = require('array.prototype.find');

/**
 * Search a particular variable in a list
 * @param {Array} variables The variables list.
 * @param {Array} name The name of the variable to search.
 * @returns {Boolean} True if the variable was found, false if not.
 */
function findVariable(variables, name) {
  return variables.some(function (variable) {
    return variable.name === name;
  });
}

/**
 * Find and return a particular variable in a list
 * @param {Array} variables The variables list.
 * @param {Array} name The name of the variable to search.
 * @returns {Object} Variable if the variable was found, null if not.
 */
function getVariable(variables, name) {
  return find(variables, function (variable) {
    return variable.name === name;
  });
}

/**
 * List all variable in a given scope
 *
 * Contain a patch for babel-eslint to avoid https://github.com/babel/babel-eslint/issues/21
 *
 * @param {Object} context The current rule context.
 * @returns {Array} The variables list
 */
function variablesInScope(context) {
  var scope = context.getScope();
  var variables = scope.variables;

  while (scope.type !== 'global') {
    scope = scope.upper;
    variables = scope.variables.concat(variables);
  }
  if (scope.childScopes.length) {
    variables = scope.childScopes[0].variables.concat(variables);
    if (scope.childScopes[0].childScopes.length) {
      variables = scope.childScopes[0].childScopes[0].variables.concat(variables);
    }
  }
  variables.reverse();

  return variables;
}

module.exports = {
  findVariable: findVariable,
  getVariable: getVariable,
  variablesInScope: variablesInScope
};
