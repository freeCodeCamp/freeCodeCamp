"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorerSync = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const defaults_1 = require("./defaults");
const ExplorerBase_js_1 = require("./ExplorerBase.js");
const merge_1 = require("./merge");
const util_js_1 = require("./util.js");
/**
 * @internal
 */
class ExplorerSync extends ExplorerBase_js_1.ExplorerBase {
    load(filepath) {
        filepath = path_1.default.resolve(filepath);
        const load = () => {
            return this.config.transform(this.#readConfiguration(filepath));
        };
        if (this.loadCache) {
            return (0, util_js_1.emplace)(this.loadCache, filepath, load);
        }
        return load();
    }
    search(from = '') {
        if (this.config.metaConfigFilePath) {
            this.loadingMetaConfig = true;
            const config = this.load(this.config.metaConfigFilePath);
            this.loadingMetaConfig = false;
            if (config && !config.isEmpty) {
                return config;
            }
        }
        from = path_1.default.resolve(from);
        const dirs = this.#getDirs(from);
        const firstDirIter = dirs.next();
        /* istanbul ignore if -- @preserve */
        if (firstDirIter.done) {
            // this should never happen
            throw new Error(`Could not find any folders to iterate through (start from ${from})`);
        }
        let currentDir = firstDirIter.value;
        const search = () => {
            /* istanbul ignore if -- @preserve */
            if ((0, util_js_1.isDirectorySync)(currentDir.path)) {
                for (const filepath of this.getSearchPlacesForDir(currentDir, defaults_1.globalConfigSearchPlacesSync)) {
                    try {
                        const result = this.#readConfiguration(filepath);
                        if (result !== null &&
                            !(result.isEmpty && this.config.ignoreEmptySearchPlaces)) {
                            return this.config.transform(result);
                        }
                    }
                    catch (error) {
                        if (error.code === 'ENOENT' ||
                            error.code === 'EISDIR' ||
                            error.code === 'ENOTDIR' ||
                            error.code === 'EACCES') {
                            continue;
                        }
                        throw error;
                    }
                }
            }
            const nextDirIter = dirs.next();
            if (!nextDirIter.done) {
                currentDir = nextDirIter.value;
                if (this.searchCache) {
                    return (0, util_js_1.emplace)(this.searchCache, currentDir.path, search);
                }
                return search();
            }
            return this.config.transform(null);
        };
        if (this.searchCache) {
            return (0, util_js_1.emplace)(this.searchCache, from, search);
        }
        return search();
    }
    #readConfiguration(filepath, importStack = []) {
        const contents = fs_1.default.readFileSync(filepath, 'utf8');
        return this.toCosmiconfigResult(filepath, this.#loadConfigFileWithImports(filepath, contents, importStack));
    }
    #loadConfigFileWithImports(filepath, contents, importStack) {
        const loadedContent = this.#loadConfiguration(filepath, contents);
        if (!loadedContent || !(0, merge_1.hasOwn)(loadedContent, '$import')) {
            return loadedContent;
        }
        const fileDirectory = path_1.default.dirname(filepath);
        const { $import: imports, ...ownContent } = loadedContent;
        const importPaths = Array.isArray(imports) ? imports : [imports];
        const newImportStack = [...importStack, filepath];
        this.validateImports(filepath, importPaths, newImportStack);
        const importedConfigs = importPaths.map((importPath) => {
            const fullPath = path_1.default.resolve(fileDirectory, importPath);
            const result = this.#readConfiguration(fullPath, newImportStack);
            return result?.config;
        });
        return (0, merge_1.mergeAll)([...importedConfigs, ownContent], {
            mergeArrays: this.config.mergeImportArrays,
        });
    }
    #loadConfiguration(filepath, contents) {
        if (contents.trim() === '') {
            return;
        }
        const extension = path_1.default.extname(filepath);
        const loader = this.config.loaders[extension || 'noExt'] ??
            this.config.loaders['default'];
        if (!loader) {
            throw new Error(`No loader specified for ${(0, ExplorerBase_js_1.getExtensionDescription)(extension)}`);
        }
        try {
            const loadedContents = loader(filepath, contents);
            if (path_1.default.basename(filepath, extension) !== 'package') {
                return loadedContents;
            }
            return ((0, util_js_1.getPropertyByPath)(loadedContents, this.config.packageProp ?? this.config.moduleName) ?? null);
        }
        catch (error) {
            error.filepath = filepath;
            throw error;
        }
    }
    #fileExists(path) {
        try {
            fs_1.default.statSync(path);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    *#getDirs(startDir) {
        switch (this.config.searchStrategy) {
            case 'none': {
                // there is no next dir
                yield { path: startDir, isGlobalConfig: false };
                return;
            }
            case 'project': {
                let currentDir = startDir;
                while (true) {
                    yield { path: currentDir, isGlobalConfig: false };
                    for (const ext of ['json', 'yaml']) {
                        const packageFile = path_1.default.join(currentDir, `package.${ext}`);
                        if (this.#fileExists(packageFile)) {
                            break;
                        }
                    }
                    const parentDir = path_1.default.dirname(currentDir);
                    /* istanbul ignore if -- @preserve */
                    if (parentDir === currentDir) {
                        // we're probably at the root of the directory structure
                        break;
                    }
                    currentDir = parentDir;
                }
                return;
            }
            case 'global': {
                yield* this.getGlobalDirs(startDir);
            }
        }
    }
    /**
     * @deprecated Use {@link ExplorerSync.prototype.load}.
     */
    /* istanbul ignore next */
    loadSync(filepath) {
        return this.load(filepath);
    }
    /**
     * @deprecated Use {@link ExplorerSync.prototype.search}.
     */
    /* istanbul ignore next */
    searchSync(from = '') {
        return this.search(from);
    }
}
exports.ExplorerSync = ExplorerSync;
//# sourceMappingURL=ExplorerSync.js.map