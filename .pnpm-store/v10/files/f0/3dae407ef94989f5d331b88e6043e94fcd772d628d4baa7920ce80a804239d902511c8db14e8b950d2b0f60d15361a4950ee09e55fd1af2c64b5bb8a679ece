'use strict';

exports.__esModule = true;

/** @type {import('./contextCompat').getAncestors} */
function getAncestors(context, node) {
  const sourceCode = getSourceCode(context);

  if (sourceCode && sourceCode.getAncestors) {
    return sourceCode.getAncestors(node);
  }

  return context.getAncestors();
}

/** @type {import('./contextCompat').getDeclaredVariables} */
function getDeclaredVariables(context, node) {
  const sourceCode = getSourceCode(context);

  if (sourceCode && sourceCode.getDeclaredVariables) {
    return sourceCode.getDeclaredVariables(node);
  }

  return context.getDeclaredVariables(node);
}

/** @type {import('./contextCompat').getFilename} */
function getFilename(context) {
  if ('filename' in context) {
    return context.filename;
  }

  return context.getFilename();
}

/** @type {import('./contextCompat').getPhysicalFilename} */
function getPhysicalFilename(context) {
  if (context.getPhysicalFilename) {
    return context.getPhysicalFilename();
  }

  return getFilename(context);
}

/** @type {import('./contextCompat').getScope} */
function getScope(context, node) {
  const sourceCode = getSourceCode(context);

  if (sourceCode && sourceCode.getScope) {
    return sourceCode.getScope(node);
  }

  return context.getScope();
}

/** @type {import('./contextCompat').getSourceCode} */
function getSourceCode(context) {
  if ('sourceCode' in context) {
    return context.sourceCode;
  }

  return context.getSourceCode();
}

module.exports = {
  getAncestors,
  getDeclaredVariables,
  getFilename,
  getPhysicalFilename,
  getScope,
  getSourceCode,
};
