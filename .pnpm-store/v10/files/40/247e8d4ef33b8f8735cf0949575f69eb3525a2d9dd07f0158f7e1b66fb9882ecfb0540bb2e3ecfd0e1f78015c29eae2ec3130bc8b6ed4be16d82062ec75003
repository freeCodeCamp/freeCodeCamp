"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeFileLoader = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const utils_1 = require("@graphql-tools/utils");
const graphql_tag_pluck_1 = require("@graphql-tools/graphql-tag-pluck");
const globby_1 = tslib_1.__importDefault(require("globby"));
const unixify_1 = tslib_1.__importDefault(require("unixify"));
const load_from_module_js_1 = require("./load-from-module.js");
const path_1 = require("path");
const process_1 = require("process");
const fs_1 = require("fs");
const module_1 = require("module");
const { readFile, access } = fs_1.promises;
const FILE_EXTENSIONS = ['.ts', '.mts', '.cts', '.tsx', '.js', '.mjs', 'cjs', '.jsx', '.vue', '.svelte'];
function createGlobbyOptions(options) {
    return { absolute: true, ...options, ignore: [] };
}
const buildIgnoreGlob = (path) => `!${path}`;
/**
 * This loader loads GraphQL documents and type definitions from code files
 * using `graphql-tag-pluck`.
 *
 * ```js
 * const documents = await loadDocuments('queries/*.js', {
 *   loaders: [
 *     new CodeFileLoader()
 *   ]
 * });
 * ```
 *
 * Supported extensions include: `.ts`, `.mts`, `.cts`, `.tsx`, `.js`, `.mjs`,
 * `.cjs`, `.jsx`, `.vue`, `.svelte`
 */
class CodeFileLoader {
    constructor(config) {
        this.config = config !== null && config !== void 0 ? config : {};
    }
    getMergedOptions(options) {
        return {
            ...this.config,
            ...options,
            pluckConfig: { ...(this.config.pluckConfig || {}), ...(options.pluckConfig || {}) },
        };
    }
    async canLoad(pointer, options) {
        options = this.getMergedOptions(options);
        if ((0, utils_1.isValidPath)(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = (0, path_1.isAbsolute)(pointer) ? pointer : (0, path_1.resolve)(options.cwd || (0, process_1.cwd)(), pointer);
                try {
                    await access(normalizedFilePath);
                    return true;
                }
                catch (_a) {
                    return false;
                }
            }
        }
        return false;
    }
    canLoadSync(pointer, options) {
        options = this.getMergedOptions(options);
        if ((0, utils_1.isValidPath)(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = (0, path_1.isAbsolute)(pointer) ? pointer : (0, path_1.resolve)(options.cwd || (0, process_1.cwd)(), pointer);
                return (0, fs_1.existsSync)(normalizedFilePath);
            }
        }
        return false;
    }
    _buildGlobs(glob, options) {
        const ignores = (0, utils_1.asArray)(options.ignore || []);
        const globs = [(0, unixify_1.default)(glob), ...ignores.map(v => buildIgnoreGlob((0, unixify_1.default)(v)))];
        return globs;
    }
    async resolveGlobs(glob, options) {
        options = this.getMergedOptions(options);
        const globs = this._buildGlobs(glob, options);
        return (0, globby_1.default)(globs, createGlobbyOptions(options));
    }
    resolveGlobsSync(glob, options) {
        options = this.getMergedOptions(options);
        const globs = this._buildGlobs(glob, options);
        return globby_1.default.sync(globs, createGlobbyOptions(options));
    }
    async load(pointer, options) {
        options = this.getMergedOptions(options);
        const resolvedPaths = await this.resolveGlobs(pointer, options);
        const finalResult = [];
        const errors = [];
        await Promise.all(resolvedPaths.map(async (path) => {
            try {
                const result = await this.handleSinglePath(path, options);
                result === null || result === void 0 ? void 0 : result.forEach(result => finalResult.push(result));
            }
            catch (e) {
                if (process_1.env['DEBUG']) {
                    console.error(e);
                }
                errors.push(e);
            }
        }));
        if (errors.length > 0 && (options.noSilentErrors || finalResult.length === 0)) {
            if (errors.length === 1) {
                throw errors[0];
            }
            throw new utils_1.AggregateError(errors, `Reading from ${pointer} failed ; \n ` + errors.map((e) => e.message).join('\n'));
        }
        return finalResult;
    }
    loadSync(pointer, options) {
        options = this.getMergedOptions(options);
        const resolvedPaths = this.resolveGlobsSync(pointer, options);
        const finalResult = [];
        const errors = [];
        for (const path of resolvedPaths) {
            if (this.canLoadSync(path, options)) {
                try {
                    const result = this.handleSinglePathSync(path, options);
                    result === null || result === void 0 ? void 0 : result.forEach(result => finalResult.push(result));
                }
                catch (e) {
                    if (process_1.env['DEBUG']) {
                        console.error(e);
                    }
                    errors.push(e);
                }
            }
        }
        if (errors.length > 0 && (options.noSilentErrors || finalResult.length === 0)) {
            if (errors.length === 1) {
                throw errors[0];
            }
            throw new utils_1.AggregateError(errors, `Reading from ${pointer} failed ; \n ` + errors.map((e) => e.message).join('\n'));
        }
        return finalResult;
    }
    async handleSinglePath(location, options) {
        if (!(await this.canLoad(location, options))) {
            return [];
        }
        options = this.getMergedOptions(options);
        const normalizedFilePath = ensureAbsolutePath(location, options);
        const errors = [];
        if (!options.noPluck) {
            try {
                const content = await readFile(normalizedFilePath, { encoding: 'utf-8' });
                const sources = await (0, graphql_tag_pluck_1.gqlPluckFromCodeString)(normalizedFilePath, content, options.pluckConfig);
                if (sources.length) {
                    return sources.map(source => ({
                        rawSDL: source.body,
                        document: (0, graphql_1.parse)(source),
                        location,
                    }));
                }
            }
            catch (e) {
                if (process_1.env['DEBUG']) {
                    console.error(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                }
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    await Promise.all((0, utils_1.asArray)(options.require).map(m => Promise.resolve(`${m}`).then(s => tslib_1.__importStar(require(s)))));
                }
                const loaded = await (0, load_from_module_js_1.tryToLoadFromExport)(normalizedFilePath);
                const sources = (0, utils_1.asArray)(loaded)
                    .map(value => resolveSource(location, value, options))
                    .filter(Boolean);
                if (sources.length) {
                    return sources;
                }
            }
            catch (e) {
                errors.push(e);
            }
        }
        if (errors.length > 0) {
            throw errors[0];
        }
        return [];
    }
    handleSinglePathSync(location, options) {
        if (!this.canLoadSync(location, options)) {
            return [];
        }
        options = this.getMergedOptions(options);
        const normalizedFilePath = ensureAbsolutePath(location, options);
        const errors = [];
        if (!options.noPluck) {
            try {
                const content = (0, fs_1.readFileSync)(normalizedFilePath, { encoding: 'utf-8' });
                const sources = (0, graphql_tag_pluck_1.gqlPluckFromCodeStringSync)(normalizedFilePath, content, options.pluckConfig);
                if (sources.length) {
                    return sources.map(source => ({
                        rawSDL: source.body,
                        document: (0, graphql_1.parse)(source),
                        location,
                    }));
                }
            }
            catch (e) {
                if (process_1.env['DEBUG']) {
                    console.error(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                }
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    const cwdRequire = (0, module_1.createRequire)(options.cwd || (0, process_1.cwd)());
                    for (const m of (0, utils_1.asArray)(options.require)) {
                        cwdRequire(m);
                    }
                }
                const loaded = (0, load_from_module_js_1.tryToLoadFromExportSync)(normalizedFilePath);
                const sources = (0, utils_1.asArray)(loaded)
                    .map(value => resolveSource(location, value, options))
                    .filter(Boolean);
                if (sources.length) {
                    return sources;
                }
            }
            catch (e) {
                errors.push(e);
            }
        }
        if (errors.length > 0) {
            throw errors[0];
        }
        return null;
    }
}
exports.CodeFileLoader = CodeFileLoader;
function resolveSource(pointer, value, options) {
    if (typeof value === 'string') {
        return (0, utils_1.parseGraphQLSDL)(pointer, value, options);
    }
    else if ((0, graphql_1.isSchema)(value)) {
        return {
            location: pointer,
            schema: value,
        };
    }
    else if ((0, utils_1.isDocumentNode)(value)) {
        return {
            location: pointer,
            document: value,
        };
    }
    return null;
}
function ensureAbsolutePath(pointer, options) {
    return (0, path_1.isAbsolute)(pointer) ? pointer : (0, path_1.resolve)(options.cwd || (0, process_1.cwd)(), pointer);
}
