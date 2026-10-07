"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeBoxValidatorCompiler = exports.Format = void 0;
const compile_1 = require("typebox/compile");
const value_1 = require("typebox/value");
__exportStar(require("typebox"), exports);
var format_1 = require("typebox/format");
Object.defineProperty(exports, "Format", { enumerable: true, get: function () { return __importDefault(format_1).default; } });
const TypeBoxValidatorCompiler = ({ schema, httpPart }) => {
    const typeCheck = (0, compile_1.Compile)(schema);
    return (value) => {
        const converted = httpPart === 'body' ? value : value_1.Value.Convert(schema, value);
        if (typeCheck.Check(converted)) {
            return { value: converted };
        }
        const errors = typeCheck.Errors(converted);
        return {
            error: errors
        };
    };
};
exports.TypeBoxValidatorCompiler = TypeBoxValidatorCompiler;
