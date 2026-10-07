"use strict";
// Zod 3 compat layer
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.$brand = exports.ZodIssueCode = void 0;
exports.setErrorMap = setErrorMap;
exports.getErrorMap = getErrorMap;
const core = __importStar(require("../core/index.cjs"));
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
exports.ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
};
var index_js_1 = require("../core/index.cjs");
Object.defineProperty(exports, "$brand", { enumerable: true, get: function () { return index_js_1.$brand; } });
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return index_js_1.config; } });
/** @deprecated Use `z.config(params)` instead. */
function setErrorMap(map) {
    core.config({
        customError: map,
    });
}
/** @deprecated Use `z.config()` instead. */
function getErrorMap() {
    return core.config().customError;
}
