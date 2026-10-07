"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chokidar_1 = __importDefault(require("chokidar"));
const path_1 = require("path");
const reporter_1 = require("../reporter");
const minimatch_1 = __importDefault(require("minimatch"));
const BUILTIN_IGNORED_DIRS = ['node_modules', '.git', '.yarn', '.pnp'];
function createIsIgnored(ignored, excluded) {
    const ignoredPatterns = ignored ? (Array.isArray(ignored) ? ignored : [ignored]) : [];
    const ignoredFunctions = ignoredPatterns.map((pattern) => {
        // ensure patterns are valid - see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/594
        if (typeof pattern === 'string') {
            return (path) => minimatch_1.default(path, pattern);
        }
        else if (typeof pattern === 'function') {
            return pattern;
        }
        else if (pattern instanceof RegExp) {
            return (path) => pattern.test(path);
        }
        else {
            // fallback to no-ignore function
            return () => false;
        }
    });
    ignoredFunctions.push((path) => excluded.some((excludedPath) => path.startsWith(excludedPath)));
    ignoredFunctions.push((path) => BUILTIN_IGNORED_DIRS.some((ignoredDir) => path.includes(`/${ignoredDir}/`) || path.includes(`\\${ignoredDir}\\`)));
    return function isIgnored(path) {
        return ignoredFunctions.some((ignoredFunction) => ignoredFunction(path));
    };
}
class InclusiveNodeWatchFileSystem {
    constructor(watchFileSystem, compiler, pluginState) {
        this.watchFileSystem = watchFileSystem;
        this.compiler = compiler;
        this.pluginState = pluginState;
        this.paused = true;
        this.dirsWatchers = new Map();
    }
    get watcher() {
        var _a;
        return this.watchFileSystem.watcher || ((_a = this.watchFileSystem.wfs) === null || _a === void 0 ? void 0 : _a.watcher);
    }
    watch(files, dirs, missing, startTime, options, callback, callbackUndelayed) {
        var _a, _b, _c, _d;
        reporter_1.clearFilesChange(this.compiler);
        const isIgnored = createIsIgnored(options === null || options === void 0 ? void 0 : options.ignored, ((_a = this.pluginState.lastDependencies) === null || _a === void 0 ? void 0 : _a.excluded) || []);
        // use standard watch file system for files and missing
        const standardWatcher = this.watchFileSystem.watch(files, dirs, missing, startTime, options, callback, callbackUndelayed);
        (_b = this.watcher) === null || _b === void 0 ? void 0 : _b.on('change', (file) => {
            if (typeof file === 'string' && !isIgnored(file)) {
                reporter_1.updateFilesChange(this.compiler, { changedFiles: [file] });
            }
        });
        (_c = this.watcher) === null || _c === void 0 ? void 0 : _c.on('remove', (file) => {
            if (typeof file === 'string' && !isIgnored(file)) {
                reporter_1.updateFilesChange(this.compiler, { deletedFiles: [file] });
            }
        });
        // calculate what to change
        const prevDirs = Array.from(this.dirsWatchers.keys());
        const nextDirs = Array.from(((_d = this.pluginState.lastDependencies) === null || _d === void 0 ? void 0 : _d.dirs) || []);
        const dirsToUnwatch = prevDirs.filter((prevDir) => !nextDirs.includes(prevDir));
        const dirsToWatch = nextDirs.filter((nextDir) => !prevDirs.includes(nextDir) && !isIgnored(nextDir));
        // update dirs watcher
        dirsToUnwatch.forEach((dirToUnwatch) => {
            var _a;
            (_a = this.dirsWatchers.get(dirToUnwatch)) === null || _a === void 0 ? void 0 : _a.close();
            this.dirsWatchers.delete(dirToUnwatch);
        });
        dirsToWatch.forEach((dirToWatch) => {
            const interval = typeof (options === null || options === void 0 ? void 0 : options.poll) === 'number' ? options.poll : undefined;
            const dirWatcher = chokidar_1.default.watch(dirToWatch, {
                ignoreInitial: true,
                ignorePermissionErrors: true,
                ignored: (path) => isIgnored(path),
                usePolling: (options === null || options === void 0 ? void 0 : options.poll) ? true : undefined,
                interval: interval,
                binaryInterval: interval,
                alwaysStat: true,
                atomic: true,
                awaitWriteFinish: true,
            });
            dirWatcher.on('add', (file, stats) => {
                var _a, _b;
                if (this.paused) {
                    return;
                }
                const extension = path_1.extname(file);
                const supportedExtensions = ((_a = this.pluginState.lastDependencies) === null || _a === void 0 ? void 0 : _a.extensions) || [];
                if (!supportedExtensions.includes(extension)) {
                    return;
                }
                reporter_1.updateFilesChange(this.compiler, { changedFiles: [file] });
                const mtime = (stats === null || stats === void 0 ? void 0 : stats.mtimeMs) || (stats === null || stats === void 0 ? void 0 : stats.ctimeMs) || 1;
                (_b = this.watcher) === null || _b === void 0 ? void 0 : _b._onChange(dirToWatch, mtime, file, 'rename');
            });
            dirWatcher.on('unlink', (file) => {
                var _a, _b;
                if (this.paused) {
                    return;
                }
                const extension = path_1.extname(file);
                const supportedExtensions = ((_a = this.pluginState.lastDependencies) === null || _a === void 0 ? void 0 : _a.extensions) || [];
                if (!supportedExtensions.includes(extension)) {
                    return;
                }
                reporter_1.updateFilesChange(this.compiler, { deletedFiles: [file] });
                (_b = this.watcher) === null || _b === void 0 ? void 0 : _b._onRemove(dirToWatch, file, 'rename');
            });
            this.dirsWatchers.set(dirToWatch, dirWatcher);
        });
        this.paused = false;
        return Object.assign(Object.assign({}, standardWatcher), { close: () => {
                reporter_1.clearFilesChange(this.compiler);
                if (standardWatcher) {
                    standardWatcher.close();
                }
                this.dirsWatchers.forEach((dirWatcher) => {
                    dirWatcher === null || dirWatcher === void 0 ? void 0 : dirWatcher.close();
                });
                this.dirsWatchers.clear();
                this.paused = true;
            }, pause: () => {
                if (standardWatcher) {
                    standardWatcher.pause();
                }
                this.paused = true;
            } });
    }
}
exports.InclusiveNodeWatchFileSystem = InclusiveNodeWatchFileSystem;
