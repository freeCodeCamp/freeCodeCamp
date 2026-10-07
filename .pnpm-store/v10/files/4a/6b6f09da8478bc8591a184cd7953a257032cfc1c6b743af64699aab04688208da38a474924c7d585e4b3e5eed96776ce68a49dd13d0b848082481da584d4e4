"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorerSync = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const path_type_1 = require("path-type");
const ExplorerBase_js_1 = require("./ExplorerBase.js");
const loaders_js_1 = require("./loaders.js");
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
        const stopDir = path_1.default.resolve(this.config.stopDir);
        from = path_1.default.resolve(from);
        const search = () => {
            /* istanbul ignore if -- @preserve */
            if ((0, path_type_1.isDirectorySync)(from)) {
                for (const place of this.config.searchPlaces) {
                    const filepath = path_1.default.join(from, place);
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
                            error.code === 'ENOTDIR') {
                            continue;
                        }
                        throw error;
                    }
                }
            }
            const dir = path_1.default.dirname(from);
            if (from !== stopDir && from !== dir) {
                from = dir;
                if (this.searchCache) {
                    return (0, util_js_1.emplace)(this.searchCache, from, search);
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
    #readConfiguration(filepath) {
        const contents = fs_1.default.readFileSync(filepath, 'utf8');
        return this.toCosmiconfigResult(filepath, this.#loadConfiguration(filepath, contents));
    }
    #loadConfiguration(filepath, contents) {
        if (contents.trim() === '') {
            return;
        }
        if (path_1.default.basename(filepath) === 'package.json') {
            return ((0, util_js_1.getPropertyByPath)((0, loaders_js_1.loadJson)(filepath, contents), this.config.packageProp) ?? null);
        }
        const extension = path_1.default.extname(filepath);
        try {
            const loader = this.config.loaders[extension || 'noExt'] ??
                this.config.loaders['default'];
            if (loader !== undefined) {
                return loader(filepath, contents);
            }
        }
        catch (error) {
            error.filepath = filepath;
            throw error;
        }
        throw new Error(`No loader specified for ${(0, ExplorerBase_js_1.getExtensionDescription)(extension)}`);
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