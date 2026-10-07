const extractValueFromThisExpression = require('./ThisExpression').default;
const extractValueFromCallExpression = require('./CallExpression').default;

function navigate(obj, prop, value) {
  if (value.computed) {
    return value.optional ? `${obj}?.[${prop}]` : `${obj}[${prop}]`;
  }
  return value.optional ? `${obj}?.${prop}` : `${obj}.${prop}`;
}

/**
 * Extractor function for a TSNonNullExpression type value node.
 * A TSNonNullExpression is accessing a TypeScript Non-Null Assertion
 * Operator !
 *
 * @param - value - AST Value object with type `TSNonNullExpression`
 * @returns - The extracted value converted to correct type
 *  and maintaing `obj.property` convention.
 */
export default function extractValueFromTSNonNullExpression(value) {
  // eslint-disable-next-line global-require
  // const getValue = require('.').default;
  const errorMessage = 'The prop value with an expression type of TSNonNullExpression could not be resolved. Please file an issue ( https://github.com/jsx-eslint/jsx-ast-utils/issues/new ) to get this fixed immediately.';

  // it's just the name
  if (value.type === 'Identifier') {
    const { name } = value;
    return name;
  }

  if (value.type === 'Literal') {
    return value.value;
  }

  if (value.type === 'TSAsExpression') {
    return extractValueFromTSNonNullExpression(value.expression);
  }

  if (value.type === 'CallExpression') {
    return extractValueFromCallExpression(value);
  }

  if (value.type === 'ThisExpression') {
    return extractValueFromThisExpression();
  }

  // does not contains properties & is not parenthesized
  if (value.type === 'TSNonNullExpression' && (!value.extra || value.extra.parenthesized === false)) {
    const { expression } = value;
    return `${extractValueFromTSNonNullExpression(expression)}${'!'}`;
  }

  // does not contains properties & is parenthesized
  if (value.type === 'TSNonNullExpression' && value.extra && value.extra.parenthesized === true) {
    const { expression } = value;
    return `${'('}${extractValueFromTSNonNullExpression(expression)}${'!'}${')'}`;
  }

  if (value.type === 'MemberExpression') {
    // contains a property & is not parenthesized
    if ((!value.extra || value.extra.parenthesized === false)) {
      return navigate(
        extractValueFromTSNonNullExpression(value.object),
        extractValueFromTSNonNullExpression(value.property),
        value,
      );
    }

    // contains a property & is parenthesized
    if (value.extra && value.extra.parenthesized === true) {
      const result = navigate(
        extractValueFromTSNonNullExpression(value.object),
        extractValueFromTSNonNullExpression(value.property),
        value,
      );
      return `(${result})`;
    }
  }

  // try to fail silently, if specs for TSNonNullExpression change
  // not throw, only log error. Similar to how it was done previously
  if (value.expression) {
    let { expression } = value;
    while (expression) {
      if (expression.type === 'Identifier') {
        // eslint-disable-next-line no-console
        console.error(errorMessage);
        return expression.name;
      }
      ({ expression } = expression);
    }
  }

  // eslint-disable-next-line no-console
  console.error(errorMessage);
  return '';
}
