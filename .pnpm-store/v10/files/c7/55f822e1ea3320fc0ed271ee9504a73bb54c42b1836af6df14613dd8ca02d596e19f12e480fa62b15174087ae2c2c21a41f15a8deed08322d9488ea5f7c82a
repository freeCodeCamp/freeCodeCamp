import {config} from '../config.js';

/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .isProxyEnabled()
 *
 * Helper function to check if Chai's proxy protection feature is enabled. If
 * proxies are unsupported or disabled via the user's Chai config, then return
 * false. Otherwise, return true.
 *
 * @namespace Utils
 * @name isProxyEnabled
 * @returns {boolean}
 */
export function isProxyEnabled() {
  return (
    config.useProxy &&
    typeof Proxy !== 'undefined' &&
    typeof Reflect !== 'undefined'
  );
}
