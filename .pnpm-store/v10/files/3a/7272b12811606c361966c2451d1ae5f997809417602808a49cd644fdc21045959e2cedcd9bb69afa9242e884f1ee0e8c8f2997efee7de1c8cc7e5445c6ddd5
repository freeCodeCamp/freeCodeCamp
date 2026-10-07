/**
 * Sets a constant default value for the property when it is undefined.
 * @template T
 * @template {keyof T} Property
 * @param {T} object An object.
 * @param {Property} property A property of the provided object.
 * @param {T[Property]} [defaultValue] The default value to set for the property.
 * @returns {T[Property]} The defaulted property value.
 */
const d = (object, property, defaultValue) => {
  if (typeof object[property] === 'undefined' && typeof defaultValue !== 'undefined') {
    object[property] = defaultValue;
  }
  return object[property];
};

/**
 * Resolves the value for a nested object option.
 * @template T
 * @template {keyof T} Property
 * @template Result
 * @param {T} object An object.
 * @param {Property} property A property of the provided object.
 * @param {function(T | undefined): Result} fn The handler to resolve the property's value.
 * @returns {Result} The resolved option value.
 */
const n = (object, property, fn) => {
  object[property] = fn(object[property]);
  return object[property];
};

module.exports = { d, n };
