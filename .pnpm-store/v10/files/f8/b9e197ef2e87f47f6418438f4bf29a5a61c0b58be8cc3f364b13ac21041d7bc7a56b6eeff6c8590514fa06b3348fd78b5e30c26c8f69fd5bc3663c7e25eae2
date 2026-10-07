import { isSchema, parse } from 'graphql';
import { asArray, isValidPath, parseGraphQLSDL, isDocumentNode, AggregateError, } from '@graphql-tools/utils';
import { gqlPluckFromCodeString, gqlPluckFromCodeStringSync, } from '@graphql-tools/graphql-tag-pluck';
import globby from 'globby';
import unixify from 'unixify';
import { tryToLoadFromExport, tryToLoadFromExportSync } from './load-from-module.js';
import { isAbsolute, resolve } from 'path';
import { cwd, env } from 'process';
import { readFileSync, promises as fsPromises, existsSync } from 'fs';
import { createRequire } from 'module';
const { readFile, access } = fsPromises;
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
export class CodeFileLoader {
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
        if (isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
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
        if (isValidPath(pointer)) {
            if (FILE_EXTENSIONS.find(extension => pointer.endsWith(extension))) {
                const normalizedFilePath = isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
                return existsSync(normalizedFilePath);
            }
        }
        return false;
    }
    _buildGlobs(glob, options) {
        const ignores = asArray(options.ignore || []);
        const globs = [unixify(glob), ...ignores.map(v => buildIgnoreGlob(unixify(v)))];
        return globs;
    }
    async resolveGlobs(glob, options) {
        options = this.getMergedOptions(options);
        const globs = this._buildGlobs(glob, options);
        return globby(globs, createGlobbyOptions(options));
    }
    resolveGlobsSync(glob, options) {
        options = this.getMergedOptions(options);
        const globs = this._buildGlobs(glob, options);
        return globby.sync(globs, createGlobbyOptions(options));
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
                if (env['DEBUG']) {
                    console.error(e);
                }
                errors.push(e);
            }
        }));
        if (errors.length > 0 && (options.noSilentErrors || finalResult.length === 0)) {
            if (errors.length === 1) {
                throw errors[0];
            }
            throw new AggregateError(errors, `Reading from ${pointer} failed ; \n ` + errors.map((e) => e.message).join('\n'));
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
                    if (env['DEBUG']) {
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
            throw new AggregateError(errors, `Reading from ${pointer} failed ; \n ` + errors.map((e) => e.message).join('\n'));
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
                const sources = await gqlPluckFromCodeString(normalizedFilePath, content, options.pluckConfig);
                if (sources.length) {
                    return sources.map(source => ({
                        rawSDL: source.body,
                        document: parse(source),
                        location,
                    }));
                }
            }
            catch (e) {
                if (env['DEBUG']) {
                    console.error(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                }
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    await Promise.all(asArray(options.require).map(m => import(m)));
                }
                const loaded = await tryToLoadFromExport(normalizedFilePath);
                const sources = asArray(loaded)
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
                const content = readFileSync(normalizedFilePath, { encoding: 'utf-8' });
                const sources = gqlPluckFromCodeStringSync(normalizedFilePath, content, options.pluckConfig);
                if (sources.length) {
                    return sources.map(source => ({
                        rawSDL: source.body,
                        document: parse(source),
                        location,
                    }));
                }
            }
            catch (e) {
                if (env['DEBUG']) {
                    console.error(`Failed to load schema from code file "${normalizedFilePath}": ${e.message}`);
                }
                errors.push(e);
            }
        }
        if (!options.noRequire) {
            try {
                if (options && options.require) {
                    const cwdRequire = createRequire(options.cwd || cwd());
                    for (const m of asArray(options.require)) {
                        cwdRequire(m);
                    }
                }
                const loaded = tryToLoadFromExportSync(normalizedFilePath);
                const sources = asArray(loaded)
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
function resolveSource(pointer, value, options) {
    if (typeof value === 'string') {
        return parseGraphQLSDL(pointer, value, options);
    }
    else if (isSchema(value)) {
        return {
            location: pointer,
            schema: value,
        };
    }
    else if (isDocumentNode(value)) {
        return {
            location: pointer,
            document: value,
        };
    }
    return null;
}
function ensureAbsolutePath(pointer, options) {
    return isAbsolute(pointer) ? pointer : resolve(options.cwd || cwd(), pointer);
}
