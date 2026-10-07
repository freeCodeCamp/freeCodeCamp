/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
const MapShim = (() => {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        let result = -1;

        arr.some((entry, index) => {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return class {
        constructor() {
            this.__entries__ = [];
        }

        /**
         * @returns {boolean}
         */
        get size() {
            return this.__entries__.length;
        }

        /**
         * @param {*} key
         * @returns {*}
         */
        get(key) {
            const index = getIndex(this.__entries__, key);
            const entry = this.__entries__[index];

            return entry && entry[1];
        }

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        set(key, value) {
            const index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        }

        /**
         * @param {*} key
         * @returns {void}
         */
        delete(key) {
            const entries = this.__entries__;
            const index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        }

        /**
         * @param {*} key
         * @returns {void}
         */
        has(key) {
            return !!~getIndex(this.__entries__, key);
        }

        /**
         * @returns {void}
         */
        clear() {
            this.__entries__.splice(0);
        }

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        forEach(callback, ctx = null) {
            for (const entry of this.__entries__) {
                callback.call(ctx, entry[1], entry[0]);
            }
        }
    };
})();

export {MapShim as Map};
