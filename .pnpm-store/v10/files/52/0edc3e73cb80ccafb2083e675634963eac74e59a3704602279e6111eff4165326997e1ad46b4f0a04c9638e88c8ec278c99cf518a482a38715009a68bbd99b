"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAttributeValue = exports.isAttributeKey = exports.sanitizeAttributes = void 0;
const api_1 = require("@opentelemetry/api");
function sanitizeAttributes(attributes) {
    const out = {};
    if (typeof attributes !== 'object' || attributes == null) {
        return out;
    }
    for (const key in attributes) {
        if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
            continue;
        }
        if (!isAttributeKey(key)) {
            api_1.diag.warn(`Invalid attribute key: ${key}`);
            continue;
        }
        const val = attributes[key];
        if (!isAttributeValue(val)) {
            api_1.diag.warn(`Invalid attribute value set for key: ${key}`);
            continue;
        }
        if (Array.isArray(val)) {
            out[key] = val.slice();
        }
        else {
            out[key] = val;
        }
    }
    return out;
}
exports.sanitizeAttributes = sanitizeAttributes;
function isAttributeKey(key) {
    return typeof key === 'string' && key !== '';
}
exports.isAttributeKey = isAttributeKey;
function isAttributeValue(val) {
    if (val == null) {
        return true;
    }
    if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
    }
    return isValidPrimitiveAttributeValueType(typeof val);
}
exports.isAttributeValue = isAttributeValue;
function isHomogeneousAttributeValueArray(arr) {
    let type;
    for (const element of arr) {
        // null/undefined elements are allowed
        if (element == null)
            continue;
        const elementType = typeof element;
        if (elementType === type) {
            continue;
        }
        if (!type) {
            if (isValidPrimitiveAttributeValueType(elementType)) {
                type = elementType;
                continue;
            }
            // encountered an invalid primitive
            return false;
        }
        return false;
    }
    return true;
}
function isValidPrimitiveAttributeValueType(valType) {
    switch (valType) {
        case 'number':
        case 'boolean':
        case 'string':
            return true;
    }
    return false;
}
//# sourceMappingURL=attributes.js.map