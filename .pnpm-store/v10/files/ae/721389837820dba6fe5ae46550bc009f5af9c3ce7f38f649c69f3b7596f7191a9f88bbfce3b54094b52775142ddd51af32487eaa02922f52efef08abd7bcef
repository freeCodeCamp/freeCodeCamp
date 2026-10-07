'use strict';

exports.__esModule = true;

const { getScope } = require('./contextCompat');

/** @type {import('./declaredScope').default} */
exports.default = function declaredScope(context, name, node) {
  const references = (node ? getScope(context, node) : context.getScope()).references;
  const reference = references.find((x) => x.identifier.name === name);
  if (!reference || !reference.resolved) { return undefined; }
  return reference.resolved.scope.type;
};
