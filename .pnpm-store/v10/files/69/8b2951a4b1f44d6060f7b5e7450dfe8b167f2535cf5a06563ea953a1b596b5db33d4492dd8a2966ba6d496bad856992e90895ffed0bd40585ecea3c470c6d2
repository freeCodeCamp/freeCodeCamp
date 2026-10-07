"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const defaults_1 = require("./defaults");
const ExplorerBase_js_1 = require("./ExplorerBase.js");
const merge_1 = require("./merge");
const util_js_1 = require("./util.js");
/**
 * @internal
 */
class Explorer extends ExplorerBase_js_1.ExplorerBase {
    async load(filepath) {
        filepath = path_1.default.resolve(filepath);
        const load = async () => {
            return await this.config.transform(await this.#readConfiguration(filepath));
        };
        if (this.loadCache) {
            return await (0, util_js_1.emplace)(this.loadCache, filepath, load);
        }
        return await load();
    }
    async search(from = '') {
        if (this.config.metaConfigFilePath) {
            this.loadingMetaConfig = true;
            const config = await this.load(this.config.metaConfigFilePath);
            this.loadingMetaConfig = false;
            if (config && !config.isEmpty) {
                return config;
            }
        }
        from = path_1.default.resolve(from);
        const dirs = this.#getDirs(from);
        const firstDirIter = await dirs.next();
        /* istanbul ignore if -- @preserve */
        if (firstDirIter.done) {
            // this should never happen
            throw new Error(`Could not find any folders to iterate through (start from ${from})`);
        }
        let currentDir = firstDirIter.value;
        const search = async () => {
            /* istanbul ignore if -- @preserve */
            if (await (0, util_js_1.isDirectory)(currentDir.path)) {
                for (const filepath of this.getSearchPlacesForDir(currentDir, defaults_1.globalConfigSearchPlaces)) {
                    try {
                        const result = await this.#readConfiguration(filepath);
                        if (result !== null &&
                            !(result.isEmpty && this.config.ignoreEmptySearchPlaces)) {
                            return await this.config.transform(result);
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
            const nextDirIter = await dirs.next();
            if (!nextDirIter.done) {
                currentDir = nextDirIter.value;
                if (this.searchCache) {
                    return await (0, util_js_1.emplace)(this.searchCache, currentDir.path, search);
                }
                return await search();
            }
            return await this.config.transform(null);
        };
        if (this.searchCache) {
            return await (0, util_js_1.emplace)(this.searchCache, from, search);
        }
        return await search();
    }
    async #readConfiguration(filepath, importStack = []) {
        const contents = await promises_1.default.readFile(filepath, { encoding: 'utf-8' });
        return this.toCosmiconfigResult(filepath, await this.#loadConfigFileWithImports(filepath, contents, importStack));
    }
    async #loadConfigFileWithImports(filepath, contents, importStack) {
        const loadedContent = await this.#loadConfiguration(filepath, contents);
        if (!loadedContent || !(0, merge_1.hasOwn)(loadedContent, '$import')) {
            return loadedContent;
        }
        const fileDirectory = path_1.default.dirname(filepath);
        const { $import: imports, ...ownContent } = loadedContent;
        const importPaths = Array.isArray(imports) ? imports : [imports];
        const newImportStack = [...importStack, filepath];
        this.validateImports(filepath, importPaths, newImportStack);
        const importedConfigs = await Promise.all(importPaths.map(async (importPath) => {
            const fullPath = path_1.default.resolve(fileDirectory, importPath);
            const result = await this.#readConfiguration(fullPath, newImportStack);
            return result?.config;
        }));
        return (0, merge_1.mergeAll)([...importedConfigs, ownContent], {
            mergeArrays: this.config.mergeImportArrays,
        });
    }
    async #loadConfiguration(filepath, contents) {
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
            const loadedContents = await loader(filepath, contents);
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
    async #fileExists(path) {
        try {
            await promises_1.default.stat(path);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async *#getDirs(startDir) {
        switch (this.config.searchStrategy) {
            case 'none': {
                // only check in the passed directory (defaults to working directory)
                yield { path: startDir, isGlobalConfig: false };
                return;
            }
            case 'project': {
                let currentDir = startDir;
                while (true) {
                    yield { path: currentDir, isGlobalConfig: false };
                    for (const ext of ['json', 'yaml']) {
                        const packageFile = path_1.default.join(currentDir, `package.${ext}`);
                        if (await this.#fileExists(packageFile)) {
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
}
exports.Explorer = Explorer;
//# sourceMappingURL=Explorer.js.map