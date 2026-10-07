"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeErrorParams = exports.typeErrorMessage = exports.typeError = void 0;
const codegen_1 = require("../../compile/codegen");
function typeError(t) {
    return {
        message: (cxt) => typeErrorMessage(cxt, t),
        params: (cxt) => typeErrorParams(cxt, t),
    };
}
exports.typeError = typeError;
function typeErrorMessage({ parentSchema }, t) {
    return (parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.nullable) ? `must be ${t} or null` : `must be ${t}`;
}
exports.typeErrorMessage = typeErrorMessage;
function typeErrorParams({ parentSchema }, t) {
    return (0, codegen_1._) `{type: ${t}, nullable: ${!!(parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.nullable)}}`;
}
exports.typeErrorParams = typeErrorParams;
//# sourceMappingURL=error.js.map