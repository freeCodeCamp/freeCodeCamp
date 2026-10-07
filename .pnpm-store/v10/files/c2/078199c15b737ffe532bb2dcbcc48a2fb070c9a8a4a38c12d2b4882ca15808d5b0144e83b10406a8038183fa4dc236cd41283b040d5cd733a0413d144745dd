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
exports.useProvidedPrograms = useProvidedPrograms;
exports.createProgramFromConfigFile = createProgramFromConfigFile;
const tsconfig_utils_1 = require("@typescript-eslint/tsconfig-utils");
const debug_1 = __importDefault(require("debug"));
const path = __importStar(require("node:path"));
const ts = __importStar(require("typescript"));
const shared_1 = require("./shared");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:create-program:useProvidedPrograms');
function useProvidedPrograms(programInstances, parseSettings) {
    log('Retrieving ast for %s from provided program instance(s)', parseSettings.filePath);
    let astAndProgram;
    for (const programInstance of programInstances) {
        astAndProgram = (0, shared_1.getAstFromProgram)(programInstance, parseSettings.filePath);
        // Stop at the first applicable program instance
        if (astAndProgram) {
            break;
        }
    }
    if (astAndProgram) {
        astAndProgram.program.getTypeChecker(); // ensure parent pointers are set in source files
        return astAndProgram;
    }
    const relativeFilePath = path.relative(parseSettings.tsconfigRootDir, parseSettings.filePath);
    const [typeSource, typeSources] = parseSettings.projects.size > 0
        ? ['project', 'project(s)']
        : ['programs', 'program instance(s)'];
    const errorLines = [
        `"parserOptions.${typeSource}" has been provided for @typescript-eslint/parser.`,
        `The file was not found in any of the provided ${typeSources}: ${relativeFilePath}`,
    ];
    throw new Error(errorLines.join('\n'));
}
/**
 * Utility offered by parser to help consumers construct their own program instance.
 *
 * @param configFile the path to the tsconfig.json file, relative to `projectDirectory`
 * @param projectDirectory the project directory to use as the CWD, defaults to `process.cwd()`
 */
function createProgramFromConfigFile(configFile, projectDirectory) {
    const parsed = (0, tsconfig_utils_1.getParsedConfigFile)(ts, configFile, projectDirectory);
    const host = ts.createCompilerHost(parsed.options, true);
    return ts.createProgram(parsed.fileNames, parsed.options, host);
}
