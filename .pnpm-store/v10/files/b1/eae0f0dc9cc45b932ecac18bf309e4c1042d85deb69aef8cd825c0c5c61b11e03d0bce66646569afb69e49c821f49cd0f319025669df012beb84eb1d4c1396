"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const PassiveFileSystem_1 = require("../file-system/PassiveFileSystem");
const forwardSlash_1 = __importDefault(require("../../utils/path/forwardSlash"));
const RealFileSystem_1 = require("../file-system/RealFileSystem");
const MemFileSystem_1 = require("../file-system/MemFileSystem");
function createControlledTypeScriptSystem(typescript, mode = 'readonly') {
    let artifacts = {
        files: [],
        dirs: [],
        excluded: [],
        extensions: [],
    };
    let isInitialRun = true;
    // watchers
    const fileWatcherCallbacksMap = new Map();
    const directoryWatcherCallbacksMap = new Map();
    const recursiveDirectoryWatcherCallbacksMap = new Map();
    const deletedFiles = new Map();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timeoutCallbacks = new Set();
    // always use case-sensitive as normalization to lower-case can be a problem for some
    // third-party libraries, like fsevents
    const caseSensitive = true;
    const realFileSystem = RealFileSystem_1.createRealFileSystem(caseSensitive);
    const memFileSystem = MemFileSystem_1.createMemFileSystem(realFileSystem);
    const passiveFileSystem = PassiveFileSystem_1.createPassiveFileSystem(memFileSystem, realFileSystem);
    // based on the ts.ignorePaths
    const ignoredPaths = ['/node_modules/.', '/.git', '/.#'];
    function createWatcher(watchersMap, path, callback) {
        const normalizedPath = realFileSystem.normalizePath(path);
        const watchers = watchersMap.get(normalizedPath) || [];
        const nextWatchers = [...watchers, callback];
        watchersMap.set(normalizedPath, nextWatchers);
        return {
            close: () => {
                const watchers = watchersMap.get(normalizedPath) || [];
                const nextWatchers = watchers.filter((watcher) => watcher !== callback);
                if (nextWatchers.length > 0) {
                    watchersMap.set(normalizedPath, nextWatchers);
                }
                else {
                    watchersMap.delete(normalizedPath);
                }
            },
        };
    }
    function invokeFileWatchers(path, event) {
        const normalizedPath = realFileSystem.normalizePath(path);
        if (normalizedPath.endsWith('.js')) {
            // trigger relevant .d.ts file watcher - handles the case, when we have webpack watcher
            // that points to a symlinked package
            invokeFileWatchers(normalizedPath.slice(0, -3) + '.d.ts', event);
        }
        const fileWatcherCallbacks = fileWatcherCallbacksMap.get(normalizedPath);
        if (fileWatcherCallbacks) {
            // typescript expects normalized paths with posix forward slash
            fileWatcherCallbacks.forEach((fileWatcherCallback) => fileWatcherCallback(forwardSlash_1.default(normalizedPath), event));
        }
    }
    function invokeDirectoryWatchers(path) {
        const normalizedPath = realFileSystem.normalizePath(path);
        const directory = path_1.dirname(normalizedPath);
        if (ignoredPaths.some((ignoredPath) => forwardSlash_1.default(normalizedPath).includes(ignoredPath))) {
            return;
        }
        const directoryWatcherCallbacks = directoryWatcherCallbacksMap.get(directory);
        if (directoryWatcherCallbacks) {
            directoryWatcherCallbacks.forEach((directoryWatcherCallback) => directoryWatcherCallback(forwardSlash_1.default(normalizedPath)));
        }
        recursiveDirectoryWatcherCallbacksMap.forEach((recursiveDirectoryWatcherCallbacks, watchedDirectory) => {
            if (watchedDirectory === directory ||
                (directory.startsWith(watchedDirectory) &&
                    forwardSlash_1.default(directory)[watchedDirectory.length] === '/')) {
                recursiveDirectoryWatcherCallbacks.forEach((recursiveDirectoryWatcherCallback) => recursiveDirectoryWatcherCallback(forwardSlash_1.default(normalizedPath)));
            }
        });
    }
    function isArtifact(path) {
        return ((artifacts.dirs.some((dir) => path.includes(dir)) ||
            artifacts.files.some((file) => path === file)) &&
            artifacts.extensions.some((extension) => path.endsWith(extension)));
    }
    function getReadFileSystem(path) {
        if ((mode === 'readonly' || mode === 'write-tsbuildinfo') && isArtifact(path)) {
            if (isInitialRun && !memFileSystem.exists(path) && passiveFileSystem.exists(path)) {
                // copy file to memory on initial run
                const stats = passiveFileSystem.readStats(path);
                if (stats === null || stats === void 0 ? void 0 : stats.isFile()) {
                    const content = passiveFileSystem.readFile(path);
                    if (content) {
                        memFileSystem.writeFile(path, content);
                        memFileSystem.updateTimes(path, stats.atime, stats.mtime);
                    }
                }
            }
            return memFileSystem;
        }
        return passiveFileSystem;
    }
    function getWriteFileSystem(path) {
        if (mode === 'write-references' ||
            (mode === 'write-tsbuildinfo' && path.endsWith('.tsbuildinfo')) ||
            (mode === 'write-dts' &&
                ['.tsbuildinfo', '.d.ts', '.d.ts.map'].some((prefix) => path.endsWith(prefix)))) {
            return realFileSystem;
        }
        return passiveFileSystem;
    }
    const controlledSystem = Object.assign(Object.assign({}, typescript.sys), { useCaseSensitiveFileNames: caseSensitive, realpath(path) {
            return getReadFileSystem(path).realPath(path);
        },
        fileExists(path) {
            const stats = getReadFileSystem(path).readStats(path);
            return !!stats && stats.isFile();
        },
        readFile(path, encoding) {
            return getReadFileSystem(path).readFile(path, encoding);
        },
        getFileSize(path) {
            const stats = getReadFileSystem(path).readStats(path);
            return stats ? stats.size : 0;
        },
        writeFile(path, data) {
            getWriteFileSystem(path).writeFile(path, data);
            controlledSystem.invokeFileChanged(path);
        },
        deleteFile(path) {
            getWriteFileSystem(path).deleteFile(path);
            controlledSystem.invokeFileDeleted(path);
        },
        directoryExists(path) {
            var _a;
            return Boolean((_a = getReadFileSystem(path).readStats(path)) === null || _a === void 0 ? void 0 : _a.isDirectory());
        },
        createDirectory(path) {
            getWriteFileSystem(path).createDir(path);
            invokeDirectoryWatchers(path);
        },
        getDirectories(path) {
            const dirents = getReadFileSystem(path).readDir(path);
            return dirents
                .filter((dirent) => dirent.isDirectory() ||
                (dirent.isSymbolicLink() && controlledSystem.directoryExists(path_1.join(path, dirent.name))))
                .map((dirent) => dirent.name);
        },
        getModifiedTime(path) {
            const stats = getReadFileSystem(path).readStats(path);
            if (stats) {
                return stats.mtime;
            }
        },
        setModifiedTime(path, date) {
            getWriteFileSystem(path).updateTimes(path, date, date);
            invokeDirectoryWatchers(path);
            invokeFileWatchers(path, typescript.FileWatcherEventKind.Changed);
        },
        watchFile(path, callback) {
            return createWatcher(fileWatcherCallbacksMap, path, callback);
        },
        watchDirectory(path, callback, recursive = false) {
            return createWatcher(recursive ? recursiveDirectoryWatcherCallbacksMap : directoryWatcherCallbacksMap, path, callback);
        }, 
        // use immediate instead of timeout to avoid waiting 250ms for batching files changes
        setTimeout: (callback, timeout, ...args) => {
            const timeoutId = setImmediate(() => {
                callback(...args);
                timeoutCallbacks.delete(timeoutId);
            });
            timeoutCallbacks.add(timeoutId);
            return timeoutId;
        }, clearTimeout: (timeoutId) => {
            clearImmediate(timeoutId);
            timeoutCallbacks.delete(timeoutId);
        }, waitForQueued() {
            return __awaiter(this, void 0, void 0, function* () {
                while (timeoutCallbacks.size > 0) {
                    yield new Promise((resolve) => setImmediate(resolve));
                }
                isInitialRun = false;
            });
        },
        invokeFileCreated(path) {
            const normalizedPath = realFileSystem.normalizePath(path);
            invokeFileWatchers(path, typescript.FileWatcherEventKind.Created);
            invokeDirectoryWatchers(normalizedPath);
            deletedFiles.set(normalizedPath, false);
        },
        invokeFileChanged(path) {
            const normalizedPath = realFileSystem.normalizePath(path);
            if (deletedFiles.get(normalizedPath) || !fileWatcherCallbacksMap.has(normalizedPath)) {
                invokeFileWatchers(path, typescript.FileWatcherEventKind.Created);
                invokeDirectoryWatchers(normalizedPath);
                deletedFiles.set(normalizedPath, false);
            }
            else {
                invokeFileWatchers(path, typescript.FileWatcherEventKind.Changed);
            }
        },
        invokeFileDeleted(path) {
            const normalizedPath = realFileSystem.normalizePath(path);
            if (!deletedFiles.get(normalizedPath)) {
                invokeFileWatchers(path, typescript.FileWatcherEventKind.Deleted);
                invokeDirectoryWatchers(path);
                deletedFiles.set(normalizedPath, true);
            }
        },
        clearCache() {
            realFileSystem.clearCache();
            memFileSystem.clearCache();
            passiveFileSystem.clearCache();
        },
        setArtifacts(nextArtifacts) {
            artifacts = nextArtifacts;
        } });
    return controlledSystem;
}
exports.createControlledTypeScriptSystem = createControlledTypeScriptSystem;
