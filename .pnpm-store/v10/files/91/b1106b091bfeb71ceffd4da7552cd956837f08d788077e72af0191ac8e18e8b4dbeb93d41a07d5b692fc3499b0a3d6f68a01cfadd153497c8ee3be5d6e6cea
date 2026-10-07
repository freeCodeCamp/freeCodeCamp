'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractValueFromBindExpression;
/**
 * Extractor function for a BindExpression type value node.
 * A bind expression looks like `::this.foo`
 * This will return `this.foo.bind(this)` as the value to indicate its existence,
 * since we can not execute the function this.foo.bind(this) in a static environment.
 *
 * @param - value - AST Value object with type `BindExpression`
 * @returns - The extracted value converted to correct type.
 */
function extractValueFromBindExpression(value) {
  // eslint-disable-next-line global-require
  var getValue = require('.').default;
  var callee = getValue(value.callee);

  // If value.object === null, the callee must be a MemberExpression.
  // https://github.com/babel/babylon/blob/master/ast/spec.md#bindexpression
  var object = value.object === null ? getValue(value.callee.object) : getValue(value.object);

  if (value.object && value.object.property) {
    return object + '.' + callee + '.bind(' + object + ')';
  }

  return callee + '.bind(' + object + ')';
}