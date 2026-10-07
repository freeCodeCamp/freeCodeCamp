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
exports.clearWatchCaches = clearWatchCaches;
exports.getWatchProgramsForProjects = getWatchProgramsForProjects;
const debug_1 = __importDefault(require("debug"));
const node_fs_1 = __importDefault(require("node:fs"));
const ts = __importStar(require("typescript"));
const source_files_1 = require("../source-files");
const shared_1 = require("./shared");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:create-program:getWatchProgramsForProjects');
/**
 * Maps tsconfig paths to their corresponding file contents and resulting watches
 */
const knownWatchProgramMap = new Map();
/**
 * Maps file/folder paths to their set of corresponding watch callbacks
 * There may be more than one per file/folder if a file/folder is shared between projects
 */
const fileWatchCallbackTrackingMap = new Map();
const folderWatchCallbackTrackingMap = new Map();
/**
 * Stores the list of known files for each program
 */
const programFileListCache = new Map();
/**
 * Caches the last modified time of the tsconfig files
 */
const tsconfigLastModifiedTimestampCache = new Map();
const parsedFilesSeenHash = new Map();
/**
 * Clear all of the parser caches.
 * This should only be used in testing to ensure the parser is clean between tests.
 */
function clearWatchCaches() {
    knownWatchProgramMap.clear();
    fileWatchCallbackTrackingMap.clear();
    folderWatchCallbackTrackingMap.clear();
    parsedFilesSeenHash.clear();
    programFileListCache.clear();
    tsconfigLastModifiedTimestampCache.clear();
}
function saveWatchCallback(trackingMap) {
    return (fileName, callback) => {
        const normalizedFileName = (0, shared_1.getCanonicalFileName)(fileName);
        const watchers = (() => {
            let watchers = trackingMap.get(normalizedFileName);
            if (!watchers) {
                watchers = new Set();
                trackingMap.set(normalizedFileName, watchers);
            }
            return watchers;
        })();
        watchers.add(callback);
        return {
            close: () => {
                watchers.delete(callback);
            },
        };
    };
}
/**
 * Holds information about the file currently being linted
 */
const currentLintOperationState = {
    code: '',
    filePath: '',
};
/**
 * Appropriately report issues found when reading a config file
 * @param diagnostic The diagnostic raised when creating a program
 */
function diagnosticReporter(diagnostic) {
    throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, ts.sys.newLine));
}
function updateCachedFileList(tsconfigPath, program) {
    const fileList = new Set(program.getRootFileNames().map(f => (0, shared_1.getCanonicalFileName)(f)));
    programFileListCache.set(tsconfigPath, fileList);
    return fileList;
}
/**
 * Calculate project environments using options provided by consumer and paths from config
 * @param parseSettings Internal settings for parsing the file
 * @returns The programs corresponding to the supplied tsconfig paths
 */
function getWatchProgramsForProjects(parseSettings) {
    const filePath = (0, shared_1.getCanonicalFileName)(parseSettings.filePath);
    const results = [];
    // preserve reference to code and file being linted
    currentLintOperationState.code = parseSettings.code;
    currentLintOperationState.filePath = filePath;
    // Update file version if necessary
    const fileWatchCallbacks = fileWatchCallbackTrackingMap.get(filePath);
    const codeHash = (0, shared_1.createHash)((0, source_files_1.getCodeText)(parseSettings.code));
    if (parsedFilesSeenHash.get(filePath) !== codeHash &&
        fileWatchCallbacks &&
        fileWatchCallbacks.size > 0) {
        fileWatchCallbacks.forEach(cb => cb(filePath, ts.FileWatcherEventKind.Changed));
    }
    const currentProjectsFromSettings = new Map(parseSettings.projects);
    /*
     * before we go into the process of attempting to find and update every program
     * see if we know of a program that contains this file
     */
    for (const [tsconfigPath, existingWatch] of knownWatchProgramMap.entries()) {
        if (!currentProjectsFromSettings.has(tsconfigPath)) {
            // the current parser run doesn't specify this tsconfig in parserOptions.project
            // so we don't want to consider it for caching purposes.
            //
            // if we did consider it we might return a program for a project
            // that wasn't specified in the current parser run (which is obv bad!).
            continue;
        }
        let fileList = programFileListCache.get(tsconfigPath);
        let updatedProgram = null;
        if (!fileList) {
            updatedProgram = existingWatch.getProgram().getProgram();
            fileList = updateCachedFileList(tsconfigPath, updatedProgram);
        }
        if (fileList.has(filePath)) {
            log('Found existing program for file. %s', filePath);
            updatedProgram ??= existingWatch.getProgram().getProgram();
            // sets parent pointers in source files
            updatedProgram.getTypeChecker();
            return [updatedProgram];
        }
    }
    log('File did not belong to any existing programs, moving to create/update. %s', filePath);
    /*
     * We don't know of a program that contains the file, this means that either:
     * - the required program hasn't been created yet, or
     * - the file is new/renamed, and the program hasn't been updated.
     */
    for (const tsconfigPath of parseSettings.projects) {
        const existingWatch = knownWatchProgramMap.get(tsconfigPath[0]);
        if (existingWatch) {
            const updatedProgram = maybeInvalidateProgram(existingWatch, filePath, tsconfigPath[0]);
            if (!updatedProgram) {
                continue;
            }
            // sets parent pointers in source files
            updatedProgram.getTypeChecker();
            // cache and check the file list
            const fileList = updateCachedFileList(tsconfigPath[0], updatedProgram);
            if (fileList.has(filePath)) {
                log('Found updated program for file. %s', filePath);
                // we can return early because we know this program contains the file
                return [updatedProgram];
            }
            results.push(updatedProgram);
            continue;
        }
        const programWatch = createWatchProgram(tsconfigPath[1], parseSettings);
        knownWatchProgramMap.set(tsconfigPath[0], programWatch);
        const program = programWatch.getProgram().getProgram();
        // sets parent pointers in source files
        program.getTypeChecker();
        // cache and check the file list
        const fileList = updateCachedFileList(tsconfigPath[0], program);
        if (fileList.has(filePath)) {
            log('Found program for file. %s', filePath);
            // we can return early because we know this program contains the file
            return [program];
        }
        results.push(program);
    }
    return results;
}
function createWatchProgram(tsconfigPath, parseSettings) {
    log('Creating watch program for %s.', tsconfigPath);
    // create compiler host
    const watchCompilerHost = ts.createWatchCompilerHost(tsconfigPath, (0, shared_1.createDefaultCompilerOptionsFromExtra)(parseSettings), ts.sys, ts.createAbstractBuilder, diagnosticReporter, 
    // TODO: file issue on TypeScript to suggest making optional?
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    /*reportWatchStatus*/ () => { });
    watchCompilerHost.jsDocParsingMode = parseSettings.jsDocParsingMode;
    // ensure readFile reads the code being linted instead of the copy on disk
    const oldReadFile = watchCompilerHost.readFile;
    watchCompilerHost.readFile = (filePathIn, encoding) => {
        const filePath = (0, shared_1.getCanonicalFileName)(filePathIn);
        const fileContent = filePath === currentLintOperationState.filePath
            ? (0, source_files_1.getCodeText)(currentLintOperationState.code)
            : oldReadFile(filePath, encoding);
        if (fileContent != null) {
            parsedFilesSeenHash.set(filePath, (0, shared_1.createHash)(fileContent));
        }
        return fileContent;
    };
    // ensure process reports error on failure instead of exiting process immediately
    watchCompilerHost.onUnRecoverableConfigFileDiagnostic = diagnosticReporter;
    // ensure process doesn't emit programs
    watchCompilerHost.afterProgramCreate = (program) => {
        // report error if there are any errors in the config file
        const configFileDiagnostics = program
            .getConfigFileParsingDiagnostics()
            .filter(diag => diag.category === ts.DiagnosticCategory.Error && diag.code !== 18003);
        if (configFileDiagnostics.length > 0) {
            diagnosticReporter(configFileDiagnostics[0]);
        }
    };
    /*
     * From the CLI, the file watchers won't matter, as the files will be parsed once and then forgotten.
     * When running from an IDE, these watchers will let us tell typescript about changes.
     *
     * ESLint IDE plugins will send us unfinished file content as the user types (before it's saved to disk).
     * We use the file watchers to tell typescript about this latest file content.
     *
     * When files are created (or renamed), we won't know about them because we have no filesystem watchers attached.
     * We use the folder watchers to tell typescript it needs to go and find new files in the project folders.
     */
    watchCompilerHost.watchFile = saveWatchCallback(fileWatchCallbackTrackingMap);
    watchCompilerHost.watchDirectory = saveWatchCallback(folderWatchCallbackTrackingMap);
    // allow files with custom extensions to be included in program (uses internal ts api)
    const oldOnDirectoryStructureHostCreate = watchCompilerHost.onCachedDirectoryStructureHostCreate;
    watchCompilerHost.onCachedDirectoryStructureHostCreate = (host) => {
        const oldReadDirectory = host.readDirectory;
        host.readDirectory = (path, extensions, exclude, include, depth) => oldReadDirectory(path, !extensions
            ? undefined
            : [...extensions, ...parseSettings.extraFileExtensions], exclude, include, depth);
        oldOnDirectoryStructureHostCreate(host);
    };
    // This works only on 3.9
    watchCompilerHost.extraFileExtensions = parseSettings.extraFileExtensions.map(extension => ({
        extension,
        isMixedContent: true,
        scriptKind: ts.ScriptKind.Deferred,
    }));
    watchCompilerHost.trace = log;
    // Since we don't want to asynchronously update program we want to disable timeout methods
    // So any changes in the program will be delayed and updated when getProgram is called on watch
    watchCompilerHost.setTimeout = undefined;
    watchCompilerHost.clearTimeout = undefined;
    return ts.createWatchProgram(watchCompilerHost);
}
function hasTSConfigChanged(tsconfigPath) {
    const stat = node_fs_1.default.statSync(tsconfigPath);
    const lastModifiedAt = stat.mtimeMs;
    const cachedLastModifiedAt = tsconfigLastModifiedTimestampCache.get(tsconfigPath);
    tsconfigLastModifiedTimestampCache.set(tsconfigPath, lastModifiedAt);
    if (cachedLastModifiedAt == null) {
        return false;
    }
    return Math.abs(cachedLastModifiedAt - lastModifiedAt) > Number.EPSILON;
}
function maybeInvalidateProgram(existingWatch, filePath, tsconfigPath) {
    /*
     * By calling watchProgram.getProgram(), it will trigger a resync of the program based on
     * whatever new file content we've given it from our input.
     */
    let updatedProgram = existingWatch.getProgram().getProgram();
    // In case this change causes problems in larger real world codebases
    // Provide an escape hatch so people don't _have_ to revert to an older version
    if (process.env.TSESTREE_NO_INVALIDATION === 'true') {
        return updatedProgram;
    }
    if (hasTSConfigChanged(tsconfigPath)) {
        /*
         * If the stat of the tsconfig has changed, that could mean the include/exclude/files lists has changed
         * We need to make sure typescript knows this so it can update appropriately
         */
        log('tsconfig has changed - triggering program update. %s', tsconfigPath);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        fileWatchCallbackTrackingMap
            .get(tsconfigPath)
            .forEach(cb => cb(tsconfigPath, ts.FileWatcherEventKind.Changed));
        // tsconfig change means that the file list more than likely changed, so clear the cache
        programFileListCache.delete(tsconfigPath);
    }
    let sourceFile = updatedProgram.getSourceFile(filePath);
    if (sourceFile) {
        return updatedProgram;
    }
    /*
     * Missing source file means our program's folder structure might be out of date.
     * So we need to tell typescript it needs to update the correct folder.
     */
    log('File was not found in program - triggering folder update. %s', filePath);
    // Find the correct directory callback by climbing the folder tree
    const currentDir = (0, shared_1.canonicalDirname)(filePath);
    let current = null;
    let next = currentDir;
    let hasCallback = false;
    while (current !== next) {
        current = next;
        const folderWatchCallbacks = folderWatchCallbackTrackingMap.get(current);
        if (folderWatchCallbacks) {
            for (const cb of folderWatchCallbacks) {
                if (currentDir !== current) {
                    cb(currentDir, ts.FileWatcherEventKind.Changed);
                }
                cb(current, ts.FileWatcherEventKind.Changed);
            }
            hasCallback = true;
        }
        next = (0, shared_1.canonicalDirname)(current);
    }
    if (!hasCallback) {
        /*
         * No callback means the paths don't matchup - so no point returning any program
         * this will signal to the caller to skip this program
         */
        log('No callback found for file, not part of this program. %s', filePath);
        return null;
    }
    // directory update means that the file list more than likely changed, so clear the cache
    programFileListCache.delete(tsconfigPath);
    // force the immediate resync
    updatedProgram = existingWatch.getProgram().getProgram();
    sourceFile = updatedProgram.getSourceFile(filePath);
    if (sourceFile) {
        return updatedProgram;
    }
    /*
     * At this point we're in one of two states:
     * - The file isn't supposed to be in this program due to exclusions
     * - The file is new, and was renamed from an old, included filename
     *
     * For the latter case, we need to tell typescript that the old filename is now deleted
     */
    log('File was still not found in program after directory update - checking file deletions. %s', filePath);
    const rootFilenames = updatedProgram.getRootFileNames();
    // use find because we only need to "delete" one file to cause typescript to do a full resync
    const deletedFile = rootFilenames.find(file => !node_fs_1.default.existsSync(file));
    if (!deletedFile) {
        // There are no deleted files, so it must be the former case of the file not belonging to this program
        return null;
    }
    const fileWatchCallbacks = fileWatchCallbackTrackingMap.get((0, shared_1.getCanonicalFileName)(deletedFile));
    if (!fileWatchCallbacks) {
        // shouldn't happen, but just in case
        log('Could not find watch callbacks for root file. %s', deletedFile);
        return updatedProgram;
    }
    log('Marking file as deleted. %s', deletedFile);
    fileWatchCallbacks.forEach(cb => cb(deletedFile, ts.FileWatcherEventKind.Deleted));
    // deleted files means that the file list _has_ changed, so clear the cache
    programFileListCache.delete(tsconfigPath);
    updatedProgram = existingWatch.getProgram().getProgram();
    sourceFile = updatedProgram.getSourceFile(filePath);
    if (sourceFile) {
        return updatedProgram;
    }
    log('File was still not found in program after deletion check, assuming it is not part of this program. %s', filePath);
    return null;
}
