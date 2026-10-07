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
exports.createSourceFile = createSourceFile;
exports.createNoProgram = createNoProgram;
const debug_1 = __importDefault(require("debug"));
const ts = __importStar(require("typescript"));
const source_files_1 = require("../source-files");
const getScriptKind_1 = require("./getScriptKind");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:create-program:createSourceFile');
function createSourceFile(parseSettings) {
    log('Getting AST without type information in %s mode for: %s', parseSettings.jsx ? 'TSX' : 'TS', parseSettings.filePath);
    return (0, source_files_1.isSourceFile)(parseSettings.code)
        ? parseSettings.code
        : ts.createSourceFile(parseSettings.filePath, parseSettings.codeFullText, {
            jsDocParsingMode: parseSettings.jsDocParsingMode,
            languageVersion: ts.ScriptTarget.Latest,
            setExternalModuleIndicator: parseSettings.setExternalModuleIndicator,
        }, 
        /* setParentNodes */ true, (0, getScriptKind_1.getScriptKind)(parseSettings.filePath, parseSettings.jsx));
}
function createNoProgram(parseSettings) {
    return {
        ast: createSourceFile(parseSettings),
        program: null,
    };
}
//# sourceMappingURL=createSourceFile.js.map