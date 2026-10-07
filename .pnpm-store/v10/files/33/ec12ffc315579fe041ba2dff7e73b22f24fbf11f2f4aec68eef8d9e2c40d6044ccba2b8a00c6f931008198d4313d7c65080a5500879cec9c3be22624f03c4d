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
exports.$ZodFunction = void 0;
exports.function = _function;
const api_js_1 = require("./api.cjs");
const parse_js_1 = require("./parse.cjs");
const schemas = __importStar(require("./schemas.cjs"));
const schemas_js_1 = require("./schemas.cjs");
class $ZodFunction {
    constructor(def) {
        this._def = def;
        this.def = def;
    }
    implement(func) {
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        const impl = ((...args) => {
            const parsedArgs = this._def.input ? (0, parse_js_1.parse)(this._def.input, args, undefined, { callee: impl }) : args;
            if (!Array.isArray(parsedArgs)) {
                throw new Error("Invalid arguments schema: not an array or tuple schema.");
            }
            const output = func(...parsedArgs);
            return this._def.output ? (0, parse_js_1.parse)(this._def.output, output, undefined, { callee: impl }) : output;
        });
        return impl;
    }
    implementAsync(func) {
        if (typeof func !== "function") {
            throw new Error("implement() must be called with a function");
        }
        const impl = (async (...args) => {
            const parsedArgs = this._def.input ? await (0, parse_js_1.parseAsync)(this._def.input, args, undefined, { callee: impl }) : args;
            if (!Array.isArray(parsedArgs)) {
                throw new Error("Invalid arguments schema: not an array or tuple schema.");
            }
            const output = await func(...parsedArgs);
            return this._def.output ? (0, parse_js_1.parseAsync)(this._def.output, output, undefined, { callee: impl }) : output;
        });
        return impl;
    }
    input(...args) {
        const F = this.constructor;
        if (Array.isArray(args[0])) {
            return new F({
                type: "function",
                input: new schemas_js_1.$ZodTuple({
                    type: "tuple",
                    items: args[0],
                    rest: args[1],
                }),
                output: this._def.output,
            });
        }
        return new F({
            type: "function",
            input: args[0],
            output: this._def.output,
        });
    }
    output(output) {
        const F = this.constructor;
        return new F({
            type: "function",
            input: this._def.input,
            output,
        });
    }
}
exports.$ZodFunction = $ZodFunction;
function _function(params) {
    return new $ZodFunction({
        type: "function",
        input: Array.isArray(params?.input)
            ? (0, api_js_1._tuple)(schemas.$ZodTuple, params?.input)
            : (params?.input ?? (0, api_js_1._array)(schemas.$ZodArray, (0, api_js_1._unknown)(schemas.$ZodUnknown))),
        output: params?.output ?? (0, api_js_1._unknown)(schemas.$ZodUnknown),
    });
}
