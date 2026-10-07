"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearParseAndGenerateServicesCalls = exports.clearProgramCache = exports.parseWithNodeMaps = exports.parseAndGenerateServices = exports.parse = void 0;
const debug_1 = __importDefault(require("debug"));
const ast_converter_1 = require("./ast-converter");
const convert_1 = require("./convert");
const createDefaultProgram_1 = require("./create-program/createDefaultProgram");
const createIsolatedProgram_1 = require("./create-program/createIsolatedProgram");
const createProjectProgram_1 = require("./create-program/createProjectProgram");
const createSourceFile_1 = require("./create-program/createSourceFile");
const useProvidedPrograms_1 = require("./create-program/useProvidedPrograms");
const createParseSettings_1 = require("./parseSettings/createParseSettings");
const semantic_or_syntactic_errors_1 = require("./semantic-or-syntactic-errors");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:parser');
/**
 * Cache existing programs for the single run use-case.
 *
 * clearProgramCache() is only intended to be used in testing to ensure the parser is clean between tests.
 */
const existingPrograms = new Map();
function clearProgramCache() {
    existingPrograms.clear();
}
exports.clearProgramCache = clearProgramCache;
/**
 * @param parseSettings Internal settings for parsing the file
 * @param shouldProvideParserServices True if the program should be attempted to be calculated from provided tsconfig files
 * @returns Returns a source file and program corresponding to the linted code
 */
function getProgramAndAST(parseSettings, shouldProvideParserServices) {
    return ((parseSettings.programs &&
        (0, useProvidedPrograms_1.useProvidedPrograms)(parseSettings.programs, parseSettings)) ||
        (shouldProvideParserServices && (0, createProjectProgram_1.createProjectProgram)(parseSettings)) ||
        (shouldProvideParserServices &&
            parseSettings.createDefaultProgram &&
            (0, createDefaultProgram_1.createDefaultProgram)(parseSettings)) ||
        (0, createIsolatedProgram_1.createIsolatedProgram)(parseSettings));
}
function parse(code, options) {
    const { ast } = parseWithNodeMapsInternal(code, options, false);
    return ast;
}
exports.parse = parse;
function parseWithNodeMapsInternal(code, options, shouldPreserveNodeMaps) {
    /**
     * Reset the parse configuration
     */
    const parseSettings = (0, createParseSettings_1.createParseSettings)(code, options);
    /**
     * Ensure users do not attempt to use parse() when they need parseAndGenerateServices()
     */
    if (options === null || options === void 0 ? void 0 : options.errorOnTypeScriptSyntacticAndSemanticIssues) {
        throw new Error(`"errorOnTypeScriptSyntacticAndSemanticIssues" is only supported for parseAndGenerateServices()`);
    }
    /**
     * Create a ts.SourceFile directly, no ts.Program is needed for a simple parse
     */
    const ast = (0, createSourceFile_1.createSourceFile)(parseSettings);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one
     */
    const { estree, astMaps } = (0, ast_converter_1.astConverter)(ast, parseSettings, shouldPreserveNodeMaps);
    return {
        ast: estree,
        esTreeNodeToTSNodeMap: astMaps.esTreeNodeToTSNodeMap,
        tsNodeToESTreeNodeMap: astMaps.tsNodeToESTreeNodeMap,
    };
}
function parseWithNodeMaps(code, options) {
    return parseWithNodeMapsInternal(code, options, true);
}
exports.parseWithNodeMaps = parseWithNodeMaps;
let parseAndGenerateServicesCalls = {};
// Privately exported utility intended for use in typescript-eslint unit tests only
function clearParseAndGenerateServicesCalls() {
    parseAndGenerateServicesCalls = {};
}
exports.clearParseAndGenerateServicesCalls = clearParseAndGenerateServicesCalls;
function parseAndGenerateServices(code, options) {
    var _a, _b;
    /**
     * Reset the parse configuration
     */
    const parseSettings = (0, createParseSettings_1.createParseSettings)(code, options);
    if (options !== undefined) {
        if (typeof options.errorOnTypeScriptSyntacticAndSemanticIssues ===
            'boolean' &&
            options.errorOnTypeScriptSyntacticAndSemanticIssues) {
            parseSettings.errorOnTypeScriptSyntacticAndSemanticIssues = true;
        }
    }
    /**
     * If this is a single run in which the user has not provided any existing programs but there
     * are programs which need to be created from the provided "project" option,
     * create an Iterable which will lazily create the programs as needed by the iteration logic
     */
    if (parseSettings.singleRun &&
        !parseSettings.programs &&
        ((_a = parseSettings.projects) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        parseSettings.programs = {
            *[Symbol.iterator]() {
                for (const configFile of parseSettings.projects) {
                    const existingProgram = existingPrograms.get(configFile);
                    if (existingProgram) {
                        yield existingProgram;
                    }
                    else {
                        log('Detected single-run/CLI usage, creating Program once ahead of time for project: %s', configFile);
                        const newProgram = (0, useProvidedPrograms_1.createProgramFromConfigFile)(configFile);
                        existingPrograms.set(configFile, newProgram);
                        yield newProgram;
                    }
                }
            },
        };
    }
    /**
     * Generate a full ts.Program or offer provided instances in order to be able to provide parser services, such as type-checking
     */
    const shouldProvideParserServices = parseSettings.programs != null || ((_b = parseSettings.projects) === null || _b === void 0 ? void 0 : _b.length) > 0;
    /**
     * If we are in singleRun mode but the parseAndGenerateServices() function has been called more than once for the current file,
     * it must mean that we are in the middle of an ESLint automated fix cycle (in which parsing can be performed up to an additional
     * 10 times in order to apply all possible fixes for the file).
     *
     * In this scenario we cannot rely upon the singleRun AOT compiled programs because the SourceFiles will not contain the source
     * with the latest fixes applied. Therefore we fallback to creating the quickest possible isolated program from the updated source.
     */
    if (parseSettings.singleRun && options.filePath) {
        parseAndGenerateServicesCalls[options.filePath] =
            (parseAndGenerateServicesCalls[options.filePath] || 0) + 1;
    }
    const { ast, program } = parseSettings.singleRun &&
        options.filePath &&
        parseAndGenerateServicesCalls[options.filePath] > 1
        ? (0, createIsolatedProgram_1.createIsolatedProgram)(parseSettings)
        : getProgramAndAST(parseSettings, shouldProvideParserServices);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one, and optionally preserve
     * mappings between converted and original AST nodes
     */
    const shouldPreserveNodeMaps = typeof parseSettings.preserveNodeMaps === 'boolean'
        ? parseSettings.preserveNodeMaps
        : true;
    const { estree, astMaps } = (0, ast_converter_1.astConverter)(ast, parseSettings, shouldPreserveNodeMaps);
    /**
     * Even if TypeScript parsed the source code ok, and we had no problems converting the AST,
     * there may be other syntactic or semantic issues in the code that we can optionally report on.
     */
    if (program && parseSettings.errorOnTypeScriptSyntacticAndSemanticIssues) {
        const error = (0, semantic_or_syntactic_errors_1.getFirstSemanticOrSyntacticError)(program, ast);
        if (error) {
            throw (0, convert_1.convertError)(error);
        }
    }
    /**
     * Return the converted AST and additional parser services
     */
    return {
        ast: estree,
        services: {
            hasFullTypeInformation: shouldProvideParserServices,
            program,
            esTreeNodeToTSNodeMap: astMaps.esTreeNodeToTSNodeMap,
            tsNodeToESTreeNodeMap: astMaps.tsNodeToESTreeNodeMap,
        },
    };
}
exports.parseAndGenerateServices = parseAndGenerateServices;
//# sourceMappingURL=parser.js.map