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
exports.getModuleResolver = exports.getAstFromProgram = exports.getCanonicalFileName = exports.ensureAbsolutePath = exports.createHash = exports.createDefaultCompilerOptionsFromExtra = exports.canonicalDirname = exports.CORE_COMPILER_OPTIONS = void 0;
const path_1 = __importDefault(require("path"));
const ts = __importStar(require("typescript"));
/**
 * Compiler options required to avoid critical functionality issues
 */
const CORE_COMPILER_OPTIONS = {
    noEmit: true,
    /**
     * Flags required to make no-unused-vars work
     */
    noUnusedLocals: true,
    noUnusedParameters: true,
};
exports.CORE_COMPILER_OPTIONS = CORE_COMPILER_OPTIONS;
/**
 * Default compiler options for program generation
 */
const DEFAULT_COMPILER_OPTIONS = Object.assign(Object.assign({}, CORE_COMPILER_OPTIONS), { allowNonTsExtensions: true, allowJs: true, checkJs: true });
function createDefaultCompilerOptionsFromExtra(parseSettings) {
    if (parseSettings.debugLevel.has('typescript')) {
        return Object.assign(Object.assign({}, DEFAULT_COMPILER_OPTIONS), { extendedDiagnostics: true });
    }
    return DEFAULT_COMPILER_OPTIONS;
}
exports.createDefaultCompilerOptionsFromExtra = createDefaultCompilerOptionsFromExtra;
// typescript doesn't provide a ts.sys implementation for browser environments
const useCaseSensitiveFileNames = ts.sys !== undefined ? ts.sys.useCaseSensitiveFileNames : true;
const correctPathCasing = useCaseSensitiveFileNames
    ? (filePath) => filePath
    : (filePath) => filePath.toLowerCase();
function getCanonicalFileName(filePath) {
    let normalized = path_1.default.normalize(filePath);
    if (normalized.endsWith(path_1.default.sep)) {
        normalized = normalized.slice(0, -1);
    }
    return correctPathCasing(normalized);
}
exports.getCanonicalFileName = getCanonicalFileName;
function ensureAbsolutePath(p, tsconfigRootDir) {
    return path_1.default.isAbsolute(p)
        ? p
        : path_1.default.join(tsconfigRootDir || process.cwd(), p);
}
exports.ensureAbsolutePath = ensureAbsolutePath;
function canonicalDirname(p) {
    return path_1.default.dirname(p);
}
exports.canonicalDirname = canonicalDirname;
const DEFINITION_EXTENSIONS = [
    ts.Extension.Dts,
    ts.Extension.Dcts,
    ts.Extension.Dmts,
];
function getExtension(fileName) {
    var _a;
    if (!fileName) {
        return null;
    }
    return ((_a = DEFINITION_EXTENSIONS.find(definitionExt => fileName.endsWith(definitionExt))) !== null && _a !== void 0 ? _a : path_1.default.extname(fileName));
}
function getAstFromProgram(currentProgram, parseSettings) {
    const ast = currentProgram.getSourceFile(parseSettings.filePath);
    // working around https://github.com/typescript-eslint/typescript-eslint/issues/1573
    const expectedExt = getExtension(parseSettings.filePath);
    const returnedExt = getExtension(ast === null || ast === void 0 ? void 0 : ast.fileName);
    if (expectedExt !== returnedExt) {
        return undefined;
    }
    return ast && { ast, program: currentProgram };
}
exports.getAstFromProgram = getAstFromProgram;
function getModuleResolver(moduleResolverPath) {
    let moduleResolver;
    try {
        moduleResolver = require(moduleResolverPath);
    }
    catch (error) {
        const errorLines = [
            'Could not find the provided parserOptions.moduleResolver.',
            'Hint: use an absolute path if you are not in control over where the ESLint instance runs.',
        ];
        throw new Error(errorLines.join('\n'));
    }
    return moduleResolver;
}
exports.getModuleResolver = getModuleResolver;
/**
 * Hash content for compare content.
 * @param content hashed contend
 * @returns hashed result
 */
function createHash(content) {
    var _a;
    // No ts.sys in browser environments.
    if ((_a = ts.sys) === null || _a === void 0 ? void 0 : _a.createHash) {
        return ts.sys.createHash(content);
    }
    return content;
}
exports.createHash = createHash;
//# sourceMappingURL=shared.js.map