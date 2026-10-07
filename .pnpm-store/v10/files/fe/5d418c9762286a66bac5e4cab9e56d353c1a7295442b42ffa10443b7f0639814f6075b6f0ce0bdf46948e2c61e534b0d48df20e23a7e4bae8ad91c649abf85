"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const path_type_1 = require("path-type");
const ExplorerBase_js_1 = require("./ExplorerBase.js");
const loaders_js_1 = require("./loaders.js");
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
        const stopDir = path_1.default.resolve(this.config.stopDir);
        from = path_1.default.resolve(from);
        const search = async () => {
            /* istanbul ignore if -- @preserve */
            if (await (0, path_type_1.isDirectory)(from)) {
                for (const place of this.config.searchPlaces) {
                    const filepath = path_1.default.join(from, place);
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
                    return await (0, util_js_1.emplace)(this.searchCache, from, search);
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
    async #readConfiguration(filepath) {
        const contents = await promises_1.default.readFile(filepath, { encoding: 'utf-8' });
        return this.toCosmiconfigResult(filepath, await this.#loadConfiguration(filepath, contents));
    }
    async #loadConfiguration(filepath, contents) {
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
                // eslint-disable-next-line @typescript-eslint/return-await
                return await loader(filepath, contents);
            }
        }
        catch (error) {
            error.filepath = filepath;
            throw error;
        }
        throw new Error(`No loader specified for ${(0, ExplorerBase_js_1.getExtensionDescription)(extension)}`);
    }
}
exports.Explorer = Explorer;
//# sourceMappingURL=Explorer.js.map