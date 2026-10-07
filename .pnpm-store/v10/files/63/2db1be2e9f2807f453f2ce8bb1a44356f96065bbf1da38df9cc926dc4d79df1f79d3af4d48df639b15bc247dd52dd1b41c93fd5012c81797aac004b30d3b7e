'use strict';

import utils from './../utils.js';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
export default function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}
