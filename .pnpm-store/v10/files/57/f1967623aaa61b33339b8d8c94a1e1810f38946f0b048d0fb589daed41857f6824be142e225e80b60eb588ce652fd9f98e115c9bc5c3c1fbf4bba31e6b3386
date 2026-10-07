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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageVariant = exports.getScriptKind = void 0;
const path_1 = __importDefault(require("path"));
const ts = __importStar(require("typescript"));
function getScriptKind(filePath, jsx) {
    const extension = path_1.default.extname(filePath).toLowerCase();
    // note - we only respect the user's jsx setting for unknown extensions
    // this is so that we always match TS's internal script kind logic, preventing
    // weird errors due to a mismatch.
    // https://github.com/microsoft/TypeScript/blob/da00ba67ed1182ad334f7c713b8254fba174aeba/src/compiler/utilities.ts#L6948-L6968
    switch (extension) {
        case ts.Extension.Js:
        case ts.Extension.Cjs:
        case ts.Extension.Mjs:
            return ts.ScriptKind.JS;
        case ts.Extension.Jsx:
            return ts.ScriptKind.JSX;
        case ts.Extension.Ts:
        case ts.Extension.Cts:
        case ts.Extension.Mts:
            return ts.ScriptKind.TS;
        case ts.Extension.Tsx:
            return ts.ScriptKind.TSX;
        case ts.Extension.Json:
            return ts.ScriptKind.JSON;
        default:
            // unknown extension, force typescript to ignore the file extension, and respect the user's setting
            return jsx ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    }
}
exports.getScriptKind = getScriptKind;
function getLanguageVariant(scriptKind) {
    // https://github.com/microsoft/TypeScript/blob/d6e483b8dabd8fd37c00954c3f2184bb7f1eb90c/src/compiler/utilities.ts#L6281-L6285
    switch (scriptKind) {
        case ts.ScriptKind.TSX:
        case ts.ScriptKind.JSX:
        case ts.ScriptKind.JS:
        case ts.ScriptKind.JSON:
            return ts.LanguageVariant.JSX;
        default:
            return ts.LanguageVariant.Standard;
    }
}
exports.getLanguageVariant = getLanguageVariant;
//# sourceMappingURL=getScriptKind.js.map