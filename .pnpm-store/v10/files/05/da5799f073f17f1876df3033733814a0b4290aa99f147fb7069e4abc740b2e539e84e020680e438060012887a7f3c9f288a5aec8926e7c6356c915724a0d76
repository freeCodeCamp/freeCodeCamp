'use strict';

/**
 * Logs out a message if there is no format option set.
 * @param {string} message - Message to log.
 */
function error(message) {
  if (!/=-(f|-format)=/.test(process.argv.join('='))) {
    // eslint-disable-next-line no-console
    console.error(message);
  }
}

module.exports = error;
