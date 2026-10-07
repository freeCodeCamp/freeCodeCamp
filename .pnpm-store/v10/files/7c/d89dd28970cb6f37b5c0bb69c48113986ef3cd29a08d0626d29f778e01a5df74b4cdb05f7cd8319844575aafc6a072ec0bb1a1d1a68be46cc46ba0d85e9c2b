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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScriptKind = getScriptKind;
exports.getLanguageVariant = getLanguageVariant;
const node_path_1 = __importDefault(require("node:path"));
const ts = __importStar(require("typescript"));
function getScriptKind(filePath, jsx) {
    const extension = node_path_1.default.extname(filePath).toLowerCase();
    // note - we only respect the user's jsx setting for unknown extensions
    // this is so that we always match TS's internal script kind logic, preventing
    // weird errors due to a mismatch.
    // https://github.com/microsoft/TypeScript/blob/da00ba67ed1182ad334f7c713b8254fba174aeba/src/compiler/utilities.ts#L6948-L6968
    switch (extension) {
        case ts.Extension.Cjs:
        case ts.Extension.Js:
        case ts.Extension.Mjs:
            return ts.ScriptKind.JS;
        case ts.Extension.Cts:
        case ts.Extension.Mts:
        case ts.Extension.Ts:
            return ts.ScriptKind.TS;
        case ts.Extension.Json:
            return ts.ScriptKind.JSON;
        case ts.Extension.Jsx:
            return ts.ScriptKind.JSX;
        case ts.Extension.Tsx:
            return ts.ScriptKind.TSX;
        default:
            // unknown extension, force typescript to ignore the file extension, and respect the user's setting
            return jsx ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    }
}
function getLanguageVariant(scriptKind) {
    // https://github.com/microsoft/TypeScript/blob/d6e483b8dabd8fd37c00954c3f2184bb7f1eb90c/src/compiler/utilities.ts#L6281-L6285
    switch (scriptKind) {
        case ts.ScriptKind.JS:
        case ts.ScriptKind.JSON:
        case ts.ScriptKind.JSX:
        case ts.ScriptKind.TSX:
            return ts.LanguageVariant.JSX;
        default:
            return ts.LanguageVariant.Standard;
    }
}
