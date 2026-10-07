"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSchemaAst = exports.isSchemaJson = exports.isWrappedSchemaJson = exports.isSchemaText = exports.pick = void 0;
/**
 * @internal
 */
function pick(obj, keys) {
    for (const key of keys) {
        if (obj[key]) {
            return obj[key];
        }
    }
    return obj;
}
exports.pick = pick;
// checkers
/**
 * @internal
 */
function isSchemaText(obj) {
    return typeof obj === 'string';
}
exports.isSchemaText = isSchemaText;
/**
 * @internal
 */
function isWrappedSchemaJson(obj) {
    const json = obj;
    return json.data !== undefined && json.data.__schema !== undefined;
}
exports.isWrappedSchemaJson = isWrappedSchemaJson;
/**
 * @internal
 */
function isSchemaJson(obj) {
    const json = obj;
    return json !== undefined && json.__schema !== undefined;
}
exports.isSchemaJson = isSchemaJson;
/**
 * @internal
 */
function isSchemaAst(obj) {
    return obj.kind !== undefined;
}
exports.isSchemaAst = isSchemaAst;
