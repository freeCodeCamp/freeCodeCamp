import getValue from './index';

/**
 * Extractor function for a MemberExpression type value node.
 * A member expression is accessing a property on an object `obj.property`.
 *
 * @param - value - AST Value object with type `MemberExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention.
 */
export default function extractValueFromMemberExpression(value) {
  return `${getValue(value.object)}.${getValue(value.property)}`;
}
