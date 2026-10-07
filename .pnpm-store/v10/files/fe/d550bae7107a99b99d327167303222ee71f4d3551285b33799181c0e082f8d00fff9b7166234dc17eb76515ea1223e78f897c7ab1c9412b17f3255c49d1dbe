"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionDescription = exports.ExplorerBase = void 0;
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
            config = (0, util_js_1.getPropertyByPath)(config, this.config.packageProp);
        }
        if (config === undefined) {
            return { filepath, config: undefined, isEmpty: true };
        }
        return { config, filepath };
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