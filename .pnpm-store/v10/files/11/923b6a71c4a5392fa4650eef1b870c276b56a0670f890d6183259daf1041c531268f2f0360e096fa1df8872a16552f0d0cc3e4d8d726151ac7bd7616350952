"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionDescription = exports.ExplorerBase = void 0;
const env_paths_1 = __importDefault(require("env-paths"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const util_js_1 = require("./util.js");
/**
 * @internal
 */
class ExplorerBase {
    #loadingMetaConfig = false;
    config;
    loadCache;
    searchCache;
    constructor(options) {
        this.config = options;
        if (options.cache) {
            this.loadCache = new Map();
            this.searchCache = new Map();
        }
        this.#validateConfig();
    }
    set loadingMetaConfig(value) {
        this.#loadingMetaConfig = value;
    }
    #validateConfig() {
        const config = this.config;
        for (const place of config.searchPlaces) {
            const extension = path_1.default.extname(place);
            const loader = this.config.loaders[extension || 'noExt'] ??
                this.config.loaders['default'];
            if (loader === undefined) {
                throw new Error(`Missing loader for ${getExtensionDescription(place)}.`);
            }
            if (typeof loader !== 'function') {
                throw new Error(`Loader for ${getExtensionDescription(place)} is not a function: Received ${typeof loader}.`);
            }
        }
    }
    clearLoadCache() {
        if (this.loadCache) {
            this.loadCache.clear();
        }
    }
    clearSearchCache() {
        if (this.searchCache) {
            this.searchCache.clear();
        }
    }
    clearCaches() {
        this.clearLoadCache();
        this.clearSearchCache();
    }
    toCosmiconfigResult(filepath, config) {
        if (config === null) {
            return null;
        }
        if (config === undefined) {
            return { filepath, config: undefined, isEmpty: true };
        }
        if (this.config.applyPackagePropertyPathToConfiguration ||
            this.#loadingMetaConfig) {
            const packageProp = this.config.packageProp ?? this.config.moduleName;
            config = (0, util_js_1.getPropertyByPath)(config, packageProp);
        }
        if (config === undefined) {
            return { filepath, config: undefined, isEmpty: true };
        }
        return { config, filepath };
    }
    validateImports(containingFilePath, imports, importStack) {
        const fileDirectory = path_1.default.dirname(containingFilePath);
        for (const importPath of imports) {
            if (typeof importPath !== 'string') {
                throw new Error(`${containingFilePath}: Key $import must contain a string or a list of strings`);
            }
            const fullPath = path_1.default.resolve(fileDirectory, importPath);
            if (fullPath === containingFilePath) {
                throw new Error(`Self-import detected in ${containingFilePath}`);
            }
            const idx = importStack.indexOf(fullPath);
            if (idx !== -1) {
                throw new Error(`Circular import detected:
${[...importStack, fullPath]
                    .map((path, i) => `${i + 1}. ${path}`)
                    .join('\n')} (same as ${idx + 1}.)`);
            }
        }
    }
    getSearchPlacesForDir(dir, globalConfigPlaces) {
        return (dir.isGlobalConfig ? globalConfigPlaces : this.config.searchPlaces).map((place) => path_1.default.join(dir.path, place));
    }
    getGlobalConfigDir() {
        return (0, env_paths_1.default)(this.config.moduleName, { suffix: '' }).config;
    }
    *getGlobalDirs(startDir) {
        const stopDir = path_1.default.resolve(this.config.stopDir ?? os_1.default.homedir());
        yield { path: startDir, isGlobalConfig: false };
        let currentDir = startDir;
        while (currentDir !== stopDir) {
            const parentDir = path_1.default.dirname(currentDir);
            /* istanbul ignore if -- @preserve */
            if (parentDir === currentDir) {
                // we're probably at the root of the directory structure
                break;
            }
            yield { path: parentDir, isGlobalConfig: false };
            currentDir = parentDir;
        }
        yield { path: this.getGlobalConfigDir(), isGlobalConfig: true };
    }
}
exports.ExplorerBase = ExplorerBase;
/**
 * @internal
 */
function getExtensionDescription(extension) {
    /* istanbul ignore next -- @preserve */
    return extension ? `extension "${extension}"` : 'files without extensions';
}
exports.getExtensionDescription = getExtensionDescription;
//# sourceMappingURL=ExplorerBase.js.map