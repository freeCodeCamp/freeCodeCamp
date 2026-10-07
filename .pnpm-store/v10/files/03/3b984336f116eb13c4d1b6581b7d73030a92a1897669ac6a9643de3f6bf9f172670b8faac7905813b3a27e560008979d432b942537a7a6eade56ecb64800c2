"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConstMap = void 0;
/**
 * Creates a const map from the given values
 * @param values - An array of values to be used as keys and values in the map.
 * @returns A populated version of the map with the values and keys derived from the values.
 */
/*#__NO_SIDE_EFFECTS__*/
function createConstMap(values) {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
    let res = {};
    const len = values.length;
    for (let lp = 0; lp < len; lp++) {
        const val = values[lp];
        if (val) {
            res[String(val).toUpperCase().replace(/[-.]/g, '_')] = val;
        }
    }
    return res;
}
exports.createConstMap = createConstMap;
//# sourceMappingURL=utils.js.map