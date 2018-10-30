/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SKIP_TIME = 5000

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A class of cache.
 * The cache will dispose of each value if the value has not been accessed
 * during 5 seconds.
 *
 * @constructor
 */
const Cache = module.exports = function Cache() {
    this.map = Object.create(null)
}

Object.defineProperties(Cache.prototype, {
    get: {
        value: function get(key) {
            const entry = this.map[key]
            const now = Date.now()

            if (entry && entry.expire - now > 0) {
                entry.expire = now + SKIP_TIME
                return entry.value
            }
            return null
        },
        configurable: true,
        writable: true,
    },

    put: {
        value: function put(key, value) {
            const entry = this.map[key]
            const now = Date.now()

            if (entry) {
                entry.value = value
                entry.expire = now + SKIP_TIME
            }
            else {
                this.map[key] = {
                    value,
                    expire: now + SKIP_TIME,
                }
            }
        },
        configurable: true,
        writable: true,
    },
})
