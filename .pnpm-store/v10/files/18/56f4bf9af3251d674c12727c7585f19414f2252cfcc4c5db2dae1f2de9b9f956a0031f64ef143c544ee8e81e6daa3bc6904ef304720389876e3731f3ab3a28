"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildValuesAndSeparateKeysToObjectMapper = buildValuesAndSeparateKeysToObjectMapper;
exports.buildValuesAndSeparateKeysToObjectUnmapper = buildValuesAndSeparateKeysToObjectUnmapper;
const globals_1 = require("../../../utils/globals");
const safeObjectCreate = Object.create;
const safeObjectDefineProperty = Object.defineProperty;
const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const safeObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
function buildValuesAndSeparateKeysToObjectMapper(keys, noKeyValue) {
    return function valuesAndSeparateKeysToObjectMapper(definition) {
        const obj = definition[1] ? safeObjectCreate(null) : {};
        for (let idx = 0; idx !== keys.length; ++idx) {
            const valueWrapper = definition[0][idx];
            if (valueWrapper !== noKeyValue) {
                safeObjectDefineProperty(obj, keys[idx], {
                    value: valueWrapper,
                    configurable: true,
                    enumerable: true,
                    writable: true,
                });
            }
        }
        return obj;
    };
}
function buildValuesAndSeparateKeysToObjectUnmapper(keys, noKeyValue) {
    return function valuesAndSeparateKeysToObjectUnmapper(value) {
        if (typeof value !== 'object' || value === null) {
            throw new Error('Incompatible instance received: should be a non-null object');
        }
        const hasNullPrototype = Object.getPrototypeOf(value) === null;
        const hasObjectPrototype = 'constructor' in value && value.constructor === Object;
        if (!hasNullPrototype && !hasObjectPrototype) {
            throw new Error('Incompatible instance received: should be of exact type Object');
        }
        let extractedPropertiesCount = 0;
        const extractedValues = [];
        for (let idx = 0; idx !== keys.length; ++idx) {
            const descriptor = safeObjectGetOwnPropertyDescriptor(value, keys[idx]);
            if (descriptor !== undefined) {
                if (!descriptor.configurable || !descriptor.enumerable || !descriptor.writable) {
                    throw new Error('Incompatible instance received: should contain only c/e/w properties');
                }
                if (descriptor.get !== undefined || descriptor.set !== undefined) {
                    throw new Error('Incompatible instance received: should contain only no get/set properties');
                }
                ++extractedPropertiesCount;
                (0, globals_1.safePush)(extractedValues, descriptor.value);
            }
            else {
                (0, globals_1.safePush)(extractedValues, noKeyValue);
            }
        }
        const namePropertiesCount = safeObjectGetOwnPropertyNames(value).length;
        const symbolPropertiesCount = safeObjectGetOwnPropertySymbols(value).length;
        if (extractedPropertiesCount !== namePropertiesCount + symbolPropertiesCount) {
            throw new Error('Incompatible instance received: should not contain extra properties');
        }
        return [extractedValues, hasNullPrototype];
    };
}
