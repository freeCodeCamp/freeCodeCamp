import { equals } from './arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Compares two items for equality using strict equality.
*/
const strictEquals = (a, b) => a === b;
/**
 * Checks if the items of two arrays are equal.
 * By default, strict equality is used to compare elements, but a custom equality comparer can be provided.
 */
function itemsEquals(itemEquals = strictEquals) {
    return (a, b) => equals(a, b, itemEquals);
}
/**
 * Uses `item.equals(other)` to determine equality.
 */
function itemEquals() {
    return (a, b) => a.equals(b);
}
function equalsIfDefined(equalsOrV1, v2, equals) {
    if (equals !== undefined) {
        const v1 = equalsOrV1;
        if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
            return v2 === v1;
        }
        return equals(v1, v2);
    }
    else {
        const equals = equalsOrV1;
        return (v1, v2) => {
            if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
                return v2 === v1;
            }
            return equals(v1, v2);
        };
    }
}
/**
 * Drills into arrays (items ordered) and objects (keys unordered) and uses strict equality on everything else.
*/
function structuralEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!structuralEquals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (a && typeof a === 'object' && b && typeof b === 'object') {
        if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) {
            const aObj = a;
            const bObj = b;
            const keysA = Object.keys(aObj);
            const keysB = Object.keys(bObj);
            const keysBSet = new Set(keysB);
            if (keysA.length !== keysB.length) {
                return false;
            }
            for (const key of keysA) {
                if (!keysBSet.has(key)) {
                    return false;
                }
                if (!structuralEquals(aObj[key], bObj[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

export { equalsIfDefined, itemEquals, itemsEquals, strictEquals, structuralEquals };
