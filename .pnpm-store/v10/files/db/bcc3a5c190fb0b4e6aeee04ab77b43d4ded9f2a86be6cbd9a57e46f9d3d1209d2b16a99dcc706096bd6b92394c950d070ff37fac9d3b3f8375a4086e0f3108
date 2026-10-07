/**
 * Extractor function for a MemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `MemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention.
 */
export default function extractValueFromMemberExpression(value) {
  // eslint-disable-next-line global-require
  const getValue = require('.').default;
  return `${getValue(value.object)}${value.optional ? '?.' : '.'}${getValue(value.property)}`;
}
