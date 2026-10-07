import hasKey from './hasKey';
/**
 * Copies a list of attributes and their values from a source object to a target object.
 * The attributes are only copied if they exist on the source object.
 * @param {Object} source Object to copy the attributes from
 * @param {Object} target Object to copy the attributes to
 * @param {String[]} attributes List of attributes to copy
 * @returns {Object} The target object, now with the copied attributes
 */

function copyAttributes(source, target, attributes) {
  attributes.forEach(function (attributeName) {
    if (hasKey(source, attributeName)) {
      target[attributeName] = source[attributeName];
    }
  });
  return target;
}

export default copyAttributes;