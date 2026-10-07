"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTupleTypeReference = exports.isTupleType = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("../2.9/type"), exports);
const ts = require("typescript");
const type_1 = require("../2.9/type");
function isTupleType(type) {
    return (type.flags & ts.TypeFlags.Object && type.objectFlags & ts.ObjectFlags.Tuple) !== 0;
}
exports.isTupleType = isTupleType;
function isTupleTypeReference(type) {
    return type_1.isTypeReference(type) && isTupleType(type.target);
}
exports.isTupleTypeReference = isTupleTypeReference;
//# sourceMappingURL=type.js.map