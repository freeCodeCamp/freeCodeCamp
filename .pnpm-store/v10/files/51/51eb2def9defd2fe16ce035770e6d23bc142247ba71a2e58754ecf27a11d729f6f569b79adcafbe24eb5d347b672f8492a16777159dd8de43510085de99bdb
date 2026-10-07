import coreJsData from './_coreJsData.js';
import isFunction from './isFunction.js';
import stubFalse from './stubFalse.js';

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
var isMaskable = coreJsData ? isFunction : stubFalse;

export default isMaskable;
