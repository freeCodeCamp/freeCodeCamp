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
exports.createProjectProgram = void 0;
const debug_1 = __importDefault(require("debug"));
const path_1 = __importDefault(require("path"));
const ts = __importStar(require("typescript"));
const node_utils_1 = require("../node-utils");
const describeFilePath_1 = require("./describeFilePath");
const getWatchProgramsForProjects_1 = require("./getWatchProgramsForProjects");
const shared_1 = require("./shared");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:createProjectProgram');
const DEFAULT_EXTRA_FILE_EXTENSIONS = [
    ts.Extension.Ts,
    ts.Extension.Tsx,
    ts.Extension.Js,
    ts.Extension.Jsx,
    ts.Extension.Mjs,
    ts.Extension.Mts,
    ts.Extension.Cjs,
    ts.Extension.Cts,
];
/**
 * @param parseSettings Internal settings for parsing the file
 * @returns If found, the source file corresponding to the code and the containing program
 */
function createProjectProgram(parseSettings) {
    log('Creating project program for: %s', parseSettings.filePath);
    const programsForProjects = (0, getWatchProgramsForProjects_1.getWatchProgramsForProjects)(parseSettings);
    const astAndProgram = (0, node_utils_1.firstDefined)(programsForProjects, currentProgram => (0, shared_1.getAstFromProgram)(currentProgram, parseSettings));
    // The file was either matched within the tsconfig, or we allow creating a default program
    if (astAndProgram || parseSettings.createDefaultProgram) {
        return astAndProgram;
    }
    const describeProjectFilePath = (projectFile) => (0, describeFilePath_1.describeFilePath)(projectFile, parseSettings.tsconfigRootDir);
    const describedFilePath = (0, describeFilePath_1.describeFilePath)(parseSettings.filePath, parseSettings.tsconfigRootDir);
    const relativeProjects = parseSettings.projects.map(describeProjectFilePath);
    const describedPrograms = relativeProjects.length === 1
        ? relativeProjects[0]
        : `\n${relativeProjects.map(project => `- ${project}`).join('\n')}`;
    const errorLines = [
        `ESLint was configured to run on \`${describedFilePath}\` using \`parserOptions.project\`: ${describedPrograms}`,
    ];
    let hasMatchedAnError = false;
    const extraFileExtensions = parseSettings.extraFileExtensions || [];
    extraFileExtensions.forEach(extraExtension => {
        if (!extraExtension.startsWith('.')) {
            errorLines.push(`Found unexpected extension \`${extraExtension}\` specified with the \`parserOptions.extraFileExtensions\` option. Did you mean \`.${extraExtension}\`?`);
        }
        if (DEFAULT_EXTRA_FILE_EXTENSIONS.includes(extraExtension)) {
            errorLines.push(`You unnecessarily included the extension \`${extraExtension}\` with the \`parserOptions.extraFileExtensions\` option. This extension is already handled by the parser by default.`);
        }
    });
    const fileExtension = path_1.default.extname(parseSettings.filePath);
    if (!DEFAULT_EXTRA_FILE_EXTENSIONS.includes(fileExtension)) {
        const nonStandardExt = `The extension for the file (\`${fileExtension}\`) is non-standard`;
        if (extraFileExtensions.length > 0) {
            if (!extraFileExtensions.includes(fileExtension)) {
                errorLines.push(`${nonStandardExt}. It should be added to your existing \`parserOptions.extraFileExtensions\`.`);
                hasMatchedAnError = true;
            }
        }
        else {
            errorLines.push(`${nonStandardExt}. You should add \`parserOptions.extraFileExtensions\` to your config.`);
            hasMatchedAnError = true;
        }
    }
    if (!hasMatchedAnError) {
        const [describedInclusions, describedSpecifiers] = parseSettings.projects.length === 1
            ? ['that TSConfig does not', 'that TSConfig']
            : ['none of those TSConfigs', 'one of those TSConfigs'];
        errorLines.push(`However, ${describedInclusions} include this file. Either:`, `- Change ESLint's list of included files to not include this file`, `- Change ${describedSpecifiers} to include this file`, `- Create a new TSConfig that includes this file and include it in your parserOptions.project`, `See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file`);
    }
    throw new Error(errorLines.join('\n'));
}
exports.createProjectProgram = createProjectProgram;
//# sourceMappingURL=createProjectProgram.js.map