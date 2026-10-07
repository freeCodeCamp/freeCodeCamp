"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectProgramError = createProjectProgramError;
const node_path_1 = __importDefault(require("node:path"));
const describeFilePath_1 = require("./describeFilePath");
const shared_1 = require("./shared");
function createProjectProgramError(parseSettings, programsForProjects) {
    const describedFilePath = (0, describeFilePath_1.describeFilePath)(parseSettings.filePath, parseSettings.tsconfigRootDir);
    return [
        getErrorStart(describedFilePath, parseSettings),
        ...getErrorDetails(describedFilePath, parseSettings, programsForProjects),
    ];
}
function getErrorStart(describedFilePath, parseSettings) {
    const relativeProjects = [...parseSettings.projects.values()].map(projectFile => (0, describeFilePath_1.describeFilePath)(projectFile, parseSettings.tsconfigRootDir));
    const describedPrograms = relativeProjects.length === 1
        ? ` ${relativeProjects[0]}`
        : `\n${relativeProjects.map(project => `- ${project}`).join('\n')}`;
    return `ESLint was configured to run on \`${describedFilePath}\` using \`parserOptions.project\`:${describedPrograms}`;
}
function getErrorDetails(describedFilePath, parseSettings, programsForProjects) {
    if (programsForProjects.length === 1 &&
        programsForProjects[0].getProjectReferences()?.length) {
        return [
            `That TSConfig uses project "references" and doesn't include \`${describedFilePath}\` directly, which is not supported by \`parserOptions.project\`.`,
            `Either:`,
            `- Switch to \`parserOptions.projectService\``,
            `- Use an ESLint-specific TSConfig`,
            `See the typescript-eslint docs for more info: https://tseslint.com/are-project-references-supported`,
        ];
    }
    const { extraFileExtensions } = parseSettings;
    const details = [];
    for (const extraExtension of extraFileExtensions) {
        if (!extraExtension.startsWith('.')) {
            details.push(`Found unexpected extension \`${extraExtension}\` specified with the \`parserOptions.extraFileExtensions\` option. Did you mean \`.${extraExtension}\`?`);
        }
        if (shared_1.DEFAULT_EXTRA_FILE_EXTENSIONS.has(extraExtension)) {
            details.push(`You unnecessarily included the extension \`${extraExtension}\` with the \`parserOptions.extraFileExtensions\` option. This extension is already handled by the parser by default.`);
        }
    }
    const fileExtension = node_path_1.default.extname(parseSettings.filePath);
    if (!shared_1.DEFAULT_EXTRA_FILE_EXTENSIONS.has(fileExtension)) {
        const nonStandardExt = `The extension for the file (\`${fileExtension}\`) is non-standard`;
        if (extraFileExtensions.length > 0) {
            if (!extraFileExtensions.includes(fileExtension)) {
                return [
                    ...details,
                    `${nonStandardExt}. It should be added to your existing \`parserOptions.extraFileExtensions\`.`,
                ];
            }
        }
        else {
            return [
                ...details,
                `${nonStandardExt}. You should add \`parserOptions.extraFileExtensions\` to your config.`,
            ];
        }
    }
    const [describedInclusions, describedSpecifiers] = parseSettings.projects.size === 1
        ? ['that TSConfig does not', 'that TSConfig']
        : ['none of those TSConfigs', 'one of those TSConfigs'];
    return [
        ...details,
        `However, ${describedInclusions} include this file. Either:`,
        `- Change ESLint's list of included files to not include this file`,
        `- Change ${describedSpecifiers} to include this file`,
        `- Create a new TSConfig that includes this file and include it in your parserOptions.project`,
        `See the typescript-eslint docs for more info: https://tseslint.com/none-of-those-tsconfigs-include-this-file`,
    ];
}
