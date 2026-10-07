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
exports.useProgramFromProjectService = useProgramFromProjectService;
const debug_1 = __importDefault(require("debug"));
const minimatch_1 = require("minimatch");
const node_path_1 = __importDefault(require("node:path"));
const node_util_1 = __importDefault(require("node:util"));
const ts = __importStar(require("typescript"));
const createProjectProgram_1 = require("./create-program/createProjectProgram");
const createSourceFile_1 = require("./create-program/createSourceFile");
const shared_1 = require("./create-program/shared");
const validateDefaultProjectForFilesGlob_1 = require("./create-program/validateDefaultProjectForFilesGlob");
const RELOAD_THROTTLE_MS = 250;
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:useProgramFromProjectService');
const serviceFileExtensions = new WeakMap();
const updateExtraFileExtensions = (service, extraFileExtensions) => {
    const currentServiceFileExtensions = serviceFileExtensions.get(service) ?? [];
    if (!node_util_1.default.isDeepStrictEqual(currentServiceFileExtensions, extraFileExtensions)) {
        log('Updating extra file extensions: before=%s: after=%s', currentServiceFileExtensions, extraFileExtensions);
        service.setHostConfiguration({
            extraFileExtensions: extraFileExtensions.map(extension => ({
                extension,
                isMixedContent: false,
                scriptKind: ts.ScriptKind.Deferred,
            })),
        });
        serviceFileExtensions.set(service, extraFileExtensions);
        log('Extra file extensions updated: %o', extraFileExtensions);
    }
};
function openClientFileFromProjectService(defaultProjectMatchedFiles, isDefaultProjectAllowed, filePathAbsolute, parseSettings, serviceAndSettings) {
    const opened = openClientFileAndMaybeReload();
    log('Result from attempting to open client file: %o', opened);
    log('Default project allowed path: %s, based on config file: %s', isDefaultProjectAllowed, opened.configFileName);
    if (opened.configFileName) {
        if (isDefaultProjectAllowed) {
            throw new Error(`${parseSettings.filePath} was included by allowDefaultProject but also was found in the project service. Consider removing it from allowDefaultProject.`);
        }
    }
    else {
        const wasNotFound = `${parseSettings.filePath} was not found by the project service`;
        const fileExtension = node_path_1.default.extname(parseSettings.filePath);
        const extraFileExtensions = parseSettings.extraFileExtensions;
        if (!shared_1.DEFAULT_EXTRA_FILE_EXTENSIONS.has(fileExtension) &&
            !extraFileExtensions.includes(fileExtension)) {
            const nonStandardExt = `${wasNotFound} because the extension for the file (\`${fileExtension}\`) is non-standard`;
            if (extraFileExtensions.length > 0) {
                throw new Error(`${nonStandardExt}. It should be added to your existing \`parserOptions.extraFileExtensions\`.`);
            }
            else {
                throw new Error(`${nonStandardExt}. You should add \`parserOptions.extraFileExtensions\` to your config.`);
            }
        }
        if (!isDefaultProjectAllowed) {
            const baseMessage = `${wasNotFound}. Consider either including it in the tsconfig.json or including it in allowDefaultProject.`;
            const allowDefaultProject = parseSettings.projectService?.allowDefaultProject;
            if (!allowDefaultProject) {
                throw new Error(baseMessage);
            }
            const relativeFilePath = node_path_1.default.relative(parseSettings.tsconfigRootDir, filePathAbsolute);
            throw new Error([
                baseMessage,
                `allowDefaultProject is set to ${JSON.stringify(allowDefaultProject)}, which does not match '${relativeFilePath}'.`,
            ].join('\n'));
        }
    }
    // No a configFileName indicates this file wasn't included in a TSConfig.
    // That means it must get its type information from the default project.
    if (!opened.configFileName) {
        defaultProjectMatchedFiles.add(filePathAbsolute);
        if (defaultProjectMatchedFiles.size >
            serviceAndSettings.maximumDefaultProjectFileMatchCount) {
            const filePrintLimit = 20;
            const filesToPrint = [...defaultProjectMatchedFiles].slice(0, filePrintLimit);
            const truncatedFileCount = defaultProjectMatchedFiles.size - filesToPrint.length;
            throw new Error(`Too many files (>${serviceAndSettings.maximumDefaultProjectFileMatchCount}) have matched the default project.${validateDefaultProjectForFilesGlob_1.DEFAULT_PROJECT_FILES_ERROR_EXPLANATION}
Matching files:
${filesToPrint.map(file => `- ${file}`).join('\n')}
${truncatedFileCount ? `...and ${truncatedFileCount} more files\n` : ''}
If you absolutely need more files included, set parserOptions.projectService.maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING to a larger value.
`);
        }
    }
    return opened;
    function openClientFile() {
        return serviceAndSettings.service.openClientFile(filePathAbsolute, parseSettings.codeFullText, 
        /* scriptKind */ undefined, parseSettings.tsconfigRootDir);
    }
    function openClientFileAndMaybeReload() {
        log('Opening project service client file at path: %s', filePathAbsolute);
        let opened = openClientFile();
        // If no project included the file and we're not in single-run mode,
        // we might be running in an editor with outdated file info.
        // We can try refreshing the project service - debounced for performance.
        if (!opened.configFileErrors &&
            !opened.configFileName &&
            !parseSettings.singleRun &&
            !isDefaultProjectAllowed &&
            performance.now() - serviceAndSettings.lastReloadTimestamp >
                RELOAD_THROTTLE_MS) {
            log('No config file found; reloading project service and retrying.');
            serviceAndSettings.service.reloadProjects();
            opened = openClientFile();
            serviceAndSettings.lastReloadTimestamp = performance.now();
        }
        return opened;
    }
}
function createNoProgramWithProjectService(filePathAbsolute, parseSettings, service) {
    log('No project service information available. Creating no program.');
    // If the project service knows about this file, this informs if of changes.
    // Doing so ensures that:
    // - if the file is not part of a project, we don't waste time creating a program (fast non-type-aware linting)
    // - otherwise, we refresh the file in the project service (moderately fast, since the project is already loaded)
    if (service.getScriptInfo(filePathAbsolute)) {
        log('Script info available. Opening client file in project service.');
        service.openClientFile(filePathAbsolute, parseSettings.codeFullText, 
        /* scriptKind */ undefined, parseSettings.tsconfigRootDir);
    }
    return (0, createSourceFile_1.createNoProgram)(parseSettings);
}
function retrieveASTAndProgramFor(filePathAbsolute, parseSettings, serviceAndSettings) {
    log('Retrieving script info and then program for: %s', filePathAbsolute);
    const scriptInfo = serviceAndSettings.service.getScriptInfo(filePathAbsolute);
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const program = serviceAndSettings.service
        .getDefaultProjectForFile(scriptInfo.fileName, true)
        .getLanguageService(/*ensureSynchronized*/ true)
        .getProgram();
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    if (!program) {
        log('Could not find project service program for: %s', filePathAbsolute);
        return undefined;
    }
    log('Found project service program for: %s', filePathAbsolute);
    return (0, createProjectProgram_1.createProjectProgram)(parseSettings, [program]);
}
function useProgramFromProjectService(serviceAndSettings, parseSettings, hasFullTypeInformation, defaultProjectMatchedFiles) {
    // NOTE: triggers a full project reload when changes are detected
    updateExtraFileExtensions(serviceAndSettings.service, parseSettings.extraFileExtensions);
    // We don't canonicalize the filename because it caused a performance regression.
    // See https://github.com/typescript-eslint/typescript-eslint/issues/8519
    const filePathAbsolute = absolutify(parseSettings.filePath, serviceAndSettings);
    log('Opening project service file for: %s at absolute path %s', parseSettings.filePath, filePathAbsolute);
    const filePathRelative = node_path_1.default.relative(parseSettings.tsconfigRootDir, filePathAbsolute);
    const isDefaultProjectAllowed = filePathMatchedBy(filePathRelative, serviceAndSettings.allowDefaultProject);
    // Type-aware linting is disabled for this file.
    // However, type-aware lint rules might still rely on its contents.
    if (!hasFullTypeInformation && !isDefaultProjectAllowed) {
        return createNoProgramWithProjectService(filePathAbsolute, parseSettings, serviceAndSettings.service);
    }
    // If type info was requested, we attempt to open it in the project service.
    // By now, the file is known to be one of:
    // - in the project service (valid configuration)
    // - allowlisted in the default project (valid configuration)
    // - neither, which openClientFileFromProjectService will throw an error for
    const opened = hasFullTypeInformation &&
        openClientFileFromProjectService(defaultProjectMatchedFiles, isDefaultProjectAllowed, filePathAbsolute, parseSettings, serviceAndSettings);
    log('Opened project service file: %o', opened);
    return retrieveASTAndProgramFor(filePathAbsolute, parseSettings, serviceAndSettings);
}
function absolutify(filePath, serviceAndSettings) {
    return node_path_1.default.isAbsolute(filePath)
        ? filePath
        : node_path_1.default.join(serviceAndSettings.service.host.getCurrentDirectory(), filePath);
}
function filePathMatchedBy(filePath, allowDefaultProject) {
    return !!allowDefaultProject?.some(pattern => (0, minimatch_1.minimatch)(filePath, pattern, { dot: true }));
}
