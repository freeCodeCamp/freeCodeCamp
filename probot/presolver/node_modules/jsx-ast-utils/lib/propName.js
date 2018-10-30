'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propName;
/**
 * Returns the name of the prop given the JSXAttribute object.
 */
function propName() {
  var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!prop.type || prop.type !== 'JSXAttribute') {
    throw new Error('The prop must be a JSXAttribute collected by the AST parser.');
  }

  switch (prop.name.type) {
    case 'JSXIdentifier':
      return prop.name.name;
    case 'JSXNamespacedName':
      return prop.name.namespace.name + ':' + prop.name.name.name;
    default:
      return undefined;
  }
}