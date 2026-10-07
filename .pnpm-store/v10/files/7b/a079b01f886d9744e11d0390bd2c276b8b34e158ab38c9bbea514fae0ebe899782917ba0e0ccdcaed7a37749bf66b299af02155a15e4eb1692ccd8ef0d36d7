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
exports.DEFAULT_EXTRA_FILE_EXTENSIONS = void 0;
exports.createDefaultCompilerOptionsFromExtra = createDefaultCompilerOptionsFromExtra;
exports.getCanonicalFileName = getCanonicalFileName;
exports.ensureAbsolutePath = ensureAbsolutePath;
exports.canonicalDirname = canonicalDirname;
exports.getAstFromProgram = getAstFromProgram;
exports.createHash = createHash;
const tsconfig_utils_1 = require("@typescript-eslint/tsconfig-utils");
const node_path_1 = __importDefault(require("node:path"));
const ts = __importStar(require("typescript"));
/**
 * Default compiler options for program generation
 */
const DEFAULT_COMPILER_OPTIONS = {
    ...tsconfig_utils_1.CORE_COMPILER_OPTIONS,
    allowJs: true,
    allowNonTsExtensions: true,
    checkJs: true,
};
exports.DEFAULT_EXTRA_FILE_EXTENSIONS = new Set([
    ts.Extension.Cjs,
    ts.Extension.Cts,
    ts.Extension.Js,
    ts.Extension.Jsx,
    ts.Extension.Mjs,
    ts.Extension.Mts,
    ts.Extension.Ts,
    ts.Extension.Tsx,
]);
function createDefaultCompilerOptionsFromExtra(parseSettings) {
    if (parseSettings.debugLevel.has('typescript')) {
        return {
            ...DEFAULT_COMPILER_OPTIONS,
            extendedDiagnostics: true,
        };
    }
    return DEFAULT_COMPILER_OPTIONS;
}
// typescript doesn't provide a ts.sys implementation for browser environments
const useCaseSensitiveFileNames = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/internal/eqeq-nullish
ts.sys !== undefined ? ts.sys.useCaseSensitiveFileNames : true;
const correctPathCasing = useCaseSensitiveFileNames
    ? (filePath) => filePath
    : (filePath) => filePath.toLowerCase();
function getCanonicalFileName(filePath) {
    let normalized = node_path_1.default.normalize(filePath);
    if (normalized.endsWith(node_path_1.default.sep)) {
        normalized = normalized.slice(0, -1);
    }
    return correctPathCasing(normalized);
}
function ensureAbsolutePath(p, tsconfigRootDir) {
    return node_path_1.default.resolve(tsconfigRootDir, p);
}
function canonicalDirname(p) {
    return node_path_1.default.dirname(p);
}
const DEFINITION_EXTENSIONS = [
    ts.Extension.Dts,
    ts.Extension.Dcts,
    ts.Extension.Dmts,
];
function getExtension(fileName) {
    if (!fileName) {
        return null;
    }
    return (DEFINITION_EXTENSIONS.find(definitionExt => fileName.endsWith(definitionExt)) ?? node_path_1.default.extname(fileName));
}
function getAstFromProgram(currentProgram, filePath) {
    const ast = currentProgram.getSourceFile(filePath);
    // working around https://github.com/typescript-eslint/typescript-eslint/issues/1573
    const expectedExt = getExtension(filePath);
    const returnedExt = getExtension(ast?.fileName);
    if (expectedExt !== returnedExt) {
        return undefined;
    }
    return ast && { ast, program: currentProgram };
}
/**
 * Hash content for compare content.
 * @param content hashed contend
 * @returns hashed result
 */
function createHash(content) {
    // No ts.sys in browser environments.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (ts.sys?.createHash) {
        return ts.sys.createHash(content);
    }
    return content;
}
