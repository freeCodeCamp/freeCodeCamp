'use strict';

/**
 * This module should not be in the browser bundle, so it's here.
 * @private
 * @module
 */

/**
 * Deletes a file from the `require` cache.
 * @param {string} file - File
 */
exports.unloadFile = file => {
  delete require.cache[require.resolve(file)];
};
