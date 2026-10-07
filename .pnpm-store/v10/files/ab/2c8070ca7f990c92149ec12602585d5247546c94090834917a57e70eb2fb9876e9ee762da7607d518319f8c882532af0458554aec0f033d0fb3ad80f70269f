"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearProgramCache = clearProgramCache;
exports.clearDefaultProjectMatchedFiles = clearDefaultProjectMatchedFiles;
exports.parse = parse;
exports.clearParseAndGenerateServicesCalls = clearParseAndGenerateServicesCalls;
exports.parseAndGenerateServices = parseAndGenerateServices;
const debug_1 = __importDefault(require("debug"));
const ast_converter_1 = require("./ast-converter");
const convert_1 = require("./convert");
const createIsolatedProgram_1 = require("./create-program/createIsolatedProgram");
const createProjectProgram_1 = require("./create-program/createProjectProgram");
const createSourceFile_1 = require("./create-program/createSourceFile");
const getWatchProgramsForProjects_1 = require("./create-program/getWatchProgramsForProjects");
const useProvidedPrograms_1 = require("./create-program/useProvidedPrograms");
const createParserServices_1 = require("./createParserServices");
const createParseSettings_1 = require("./parseSettings/createParseSettings");
const semantic_or_syntactic_errors_1 = require("./semantic-or-syntactic-errors");
const useProgramFromProjectService_1 = require("./useProgramFromProjectService");
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
const defaultProjectMatchedFiles = new Set();
function clearDefaultProjectMatchedFiles() {
    defaultProjectMatchedFiles.clear();
}
/**
 * @param parseSettings Internal settings for parsing the file
 * @param hasFullTypeInformation True if the program should be attempted to be calculated from provided tsconfig files
 * @returns Returns a source file and program corresponding to the linted code
 */
function getProgramAndAST(parseSettings, hasFullTypeInformation) {
    if (parseSettings.projectService) {
        const fromProjectService = (0, useProgramFromProjectService_1.useProgramFromProjectService)(parseSettings.projectService, parseSettings, hasFullTypeInformation, defaultProjectMatchedFiles);
        if (fromProjectService) {
            return fromProjectService;
        }
    }
    if (parseSettings.programs) {
        return (0, useProvidedPrograms_1.useProvidedPrograms)(parseSettings.programs, parseSettings);
    }
    // no need to waste time creating a program as the caller didn't want parser services
    // so we can save time and just create a lonesome source file
    if (!hasFullTypeInformation) {
        return (0, createSourceFile_1.createNoProgram)(parseSettings);
    }
    return (0, createProjectProgram_1.createProjectProgram)(parseSettings, (0, getWatchProgramsForProjects_1.getWatchProgramsForProjects)(parseSettings));
}
function parse(code, options) {
    const { ast } = parseWithNodeMapsInternal(code, options, false);
    return ast;
}
function parseWithNodeMapsInternal(code, options, shouldPreserveNodeMaps) {
    /**
     * Reset the parse configuration
     */
    const parseSettings = (0, createParseSettings_1.createParseSettings)(code, options);
    /**
     * Ensure users do not attempt to use parse() when they need parseAndGenerateServices()
     */
    if (options?.errorOnTypeScriptSyntacticAndSemanticIssues) {
        throw new Error(`"errorOnTypeScriptSyntacticAndSemanticIssues" is only supported for parseAndGenerateServices()`);
    }
    /**
     * Create a ts.SourceFile directly, no ts.Program is needed for a simple parse
     */
    const ast = (0, createSourceFile_1.createSourceFile)(parseSettings);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one
     */
    const { astMaps, estree } = (0, ast_converter_1.astConverter)(ast, parseSettings, shouldPreserveNodeMaps);
    return {
        ast: estree,
        esTreeNodeToTSNodeMap: astMaps.esTreeNodeToTSNodeMap,
        tsNodeToESTreeNodeMap: astMaps.tsNodeToESTreeNodeMap,
    };
}
let parseAndGenerateServicesCalls = {};
// Privately exported utility intended for use in typescript-eslint unit tests only
function clearParseAndGenerateServicesCalls() {
    parseAndGenerateServicesCalls = {};
}
function parseAndGenerateServices(code, tsestreeOptions) {
    /**
     * Reset the parse configuration
     */
    const parseSettings = (0, createParseSettings_1.createParseSettings)(code, tsestreeOptions);
    /**
     * If this is a single run in which the user has not provided any existing programs but there
     * are programs which need to be created from the provided "project" option,
     * create an Iterable which will lazily create the programs as needed by the iteration logic
     */
    if (parseSettings.singleRun &&
        !parseSettings.programs &&
        parseSettings.projects.size > 0) {
        parseSettings.programs = {
            *[Symbol.iterator]() {
                for (const configFile of parseSettings.projects) {
                    const existingProgram = existingPrograms.get(configFile[0]);
                    if (existingProgram) {
                        yield existingProgram;
                    }
                    else {
                        log('Detected single-run/CLI usage, creating Program once ahead of time for project: %s', configFile);
                        const newProgram = (0, useProvidedPrograms_1.createProgramFromConfigFile)(configFile[1]);
                        existingPrograms.set(configFile[0], newProgram);
                        yield newProgram;
                    }
                }
            },
        };
    }
    const hasFullTypeInformation = parseSettings.programs != null ||
        parseSettings.projects.size > 0 ||
        !!parseSettings.projectService;
    if (typeof tsestreeOptions.errorOnTypeScriptSyntacticAndSemanticIssues ===
        'boolean' &&
        tsestreeOptions.errorOnTypeScriptSyntacticAndSemanticIssues) {
        parseSettings.errorOnTypeScriptSyntacticAndSemanticIssues = true;
    }
    if (parseSettings.errorOnTypeScriptSyntacticAndSemanticIssues &&
        !hasFullTypeInformation) {
        throw new Error('Cannot calculate TypeScript semantic issues without a valid project.');
    }
    /**
     * If we are in singleRun mode but the parseAndGenerateServices() function has been called more than once for the current file,
     * it must mean that we are in the middle of an ESLint automated fix cycle (in which parsing can be performed up to an additional
     * 10 times in order to apply all possible fixes for the file).
     *
     * In this scenario we cannot rely upon the singleRun AOT compiled programs because the SourceFiles will not contain the source
     * with the latest fixes applied. Therefore we fallback to creating the quickest possible isolated program from the updated source.
     *
     * Note: This fallback is only needed for the legacy `project` option which uses AOT compiled programs.
     * When `projectService` is used, the TypeScript language service always provides up-to-date programs,
     * so no fallback is necessary. Additionally, external parsers like vue-eslint-parser may call
     * parseAndGenerateServices() multiple times for the same file in a single lint pass, which would
     * incorrectly trigger this fallback.
     */
    if (parseSettings.singleRun && tsestreeOptions.filePath) {
        parseAndGenerateServicesCalls[tsestreeOptions.filePath] =
            (parseAndGenerateServicesCalls[tsestreeOptions.filePath] || 0) + 1;
    }
    const { ast, program } = parseSettings.singleRun &&
        tsestreeOptions.filePath &&
        parseAndGenerateServicesCalls[tsestreeOptions.filePath] > 1 &&
        !parseSettings.projectService
        ? (0, createIsolatedProgram_1.createIsolatedProgram)(parseSettings)
        : getProgramAndAST(parseSettings, hasFullTypeInformation);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one, and optionally preserve
     * mappings between converted and original AST nodes
     */
    const shouldPreserveNodeMaps = typeof parseSettings.preserveNodeMaps === 'boolean'
        ? parseSettings.preserveNodeMaps
        : true;
    const { astMaps, estree } = (0, ast_converter_1.astConverter)(ast, parseSettings, shouldPreserveNodeMaps);
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
        services: (0, createParserServices_1.createParserServices)(astMaps, program),
    };
}
