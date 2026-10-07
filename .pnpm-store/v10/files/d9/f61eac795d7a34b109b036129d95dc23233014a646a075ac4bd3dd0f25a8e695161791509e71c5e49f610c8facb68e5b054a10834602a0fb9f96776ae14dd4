import assign from 'object.assign';

/**
 * Extractor function for an ObjectExpression type value node.
 * An object expression is using {}.
 *
 * @returns - a representation of the object
 */
export default function extractValueFromObjectExpression(value) {
  // eslint-disable-next-line global-require
  const getValue = require('.').default;
  return value.properties.reduce((obj, property) => {
    // Support types: SpreadProperty and ExperimentalSpreadProperty
    if (/^(?:Experimental)?Spread(?:Property|Element)$/.test(property.type)) {
      if (property.argument.type === 'ObjectExpression') {
        return assign({}, obj, extractValueFromObjectExpression(property.argument));
      }
    } else {
      return assign({}, obj, { [getValue(property.key)]: getValue(property.value) });
    }
    return obj;
  }, {});
}
