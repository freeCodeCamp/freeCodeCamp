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
exports.createIsolatedProgram = createIsolatedProgram;
const debug_1 = __importDefault(require("debug"));
const ts = __importStar(require("typescript"));
const getScriptKind_1 = require("./getScriptKind");
const shared_1 = require("./shared");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:create-program:createIsolatedProgram');
/**
 * @returns Returns a new source file and program corresponding to the linted code
 */
function createIsolatedProgram(parseSettings) {
    log('Getting isolated program in %s mode for: %s', parseSettings.jsx ? 'TSX' : 'TS', parseSettings.filePath);
    const compilerHost = {
        fileExists() {
            return true;
        },
        getCanonicalFileName() {
            return parseSettings.filePath;
        },
        getCurrentDirectory() {
            return '';
        },
        getDefaultLibFileName() {
            return 'lib.d.ts';
        },
        getDirectories() {
            return [];
        },
        // TODO: Support Windows CRLF
        getNewLine() {
            return '\n';
        },
        getSourceFile(filename) {
            return ts.createSourceFile(filename, parseSettings.codeFullText, ts.ScriptTarget.Latest, 
            /* setParentNodes */ true, (0, getScriptKind_1.getScriptKind)(parseSettings.filePath, parseSettings.jsx));
        },
        readFile() {
            return undefined;
        },
        useCaseSensitiveFileNames() {
            return true;
        },
        writeFile() {
            return null;
        },
    };
    const program = ts.createProgram([parseSettings.filePath], {
        jsDocParsingMode: parseSettings.jsDocParsingMode,
        jsx: parseSettings.jsx ? ts.JsxEmit.Preserve : undefined,
        noResolve: true,
        target: ts.ScriptTarget.Latest,
        ...(0, shared_1.createDefaultCompilerOptionsFromExtra)(parseSettings),
    }, compilerHost);
    const ast = program.getSourceFile(parseSettings.filePath);
    if (!ast) {
        throw new Error('Expected an ast to be returned for the single-file isolated program.');
    }
    return { ast, program };
}
