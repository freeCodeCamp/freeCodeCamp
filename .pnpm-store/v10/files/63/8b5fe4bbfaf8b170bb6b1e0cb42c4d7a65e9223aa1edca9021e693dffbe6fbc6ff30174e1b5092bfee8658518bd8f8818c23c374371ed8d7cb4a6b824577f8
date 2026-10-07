/**
 * @fileoverview Utility functions for propWrapperFunctions setting
 */

'use strict';

const filter = require('es-iterator-helpers/Iterator.prototype.filter');
const some = require('es-iterator-helpers/Iterator.prototype.some');

function searchPropWrapperFunctions(name, propWrapperFunctions) {
  const splitName = name.split('.');
  return some(propWrapperFunctions.values(), (func) => {
    if (splitName.length === 2 && func.object === splitName[0] && func.property === splitName[1]) {
      return true;
    }
    return name === func || func.property === name;
  });
}

function getPropWrapperFunctions(context) {
  return new Set(context.settings.propWrapperFunctions || []);
}

function isPropWrapperFunction(context, name) {
  if (typeof name !== 'string') {
    return false;
  }
  const propWrapperFunctions = getPropWrapperFunctions(context);
  return searchPropWrapperFunctions(name, propWrapperFunctions);
}

function getExactPropWrapperFunctions(context) {
  const propWrapperFunctions = getPropWrapperFunctions(context);
  const exactPropWrappers = filter(propWrapperFunctions.values(), (func) => func.exact === true);
  return new Set(exactPropWrappers);
}

function isExactPropWrapperFunction(context, name) {
  const exactPropWrappers = getExactPropWrapperFunctions(context);
  return searchPropWrapperFunctions(name, exactPropWrappers);
}

function formatPropWrapperFunctions(propWrapperFunctions) {
  return Array.from(propWrapperFunctions, (func) => {
    if (func.object && func.property) {
      return `'${func.object}.${func.property}'`;
    }
    if (func.property) {
      return `'${func.property}'`;
    }
    return `'${func}'`;
  }).join(', ');
}

module.exports = {
  formatPropWrapperFunctions,
  getExactPropWrapperFunctions,
  getPropWrapperFunctions,
  isExactPropWrapperFunction,
  isPropWrapperFunction,
};
