import baseGet from './_baseGet.js';
import baseSet from './_baseSet.js';

/**
 * The base implementation of `_.update`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to update.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseUpdate(object, path, updater, customizer) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer);
}

export default baseUpdate;
