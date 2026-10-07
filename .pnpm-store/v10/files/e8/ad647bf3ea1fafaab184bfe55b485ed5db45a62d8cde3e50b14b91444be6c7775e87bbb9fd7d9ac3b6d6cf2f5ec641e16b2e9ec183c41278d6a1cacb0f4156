/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Hook } from 'require-in-the-middle';
import * as path from 'path';
import { ModuleNameTrie, ModuleNameSeparator } from './ModuleNameTrie';
/**
 * Whether Mocha is running in this process
 * Inspired by https://github.com/AndreasPizsa/detect-mocha
 *
 * @type {boolean}
 */
const isMocha = [
    'afterEach',
    'after',
    'beforeEach',
    'before',
    'describe',
    'it',
].every(fn => {
    // @ts-expect-error TS7053: Element implicitly has an 'any' type
    return typeof global[fn] === 'function';
});
/**
 * Singleton class for `require-in-the-middle`
 * Allows instrumentation plugins to patch modules with only a single `require` patch
 * WARNING: Because this class will create its own `require-in-the-middle` (RITM) instance,
 * we should minimize the number of new instances of this class.
 * Multiple instances of `@opentelemetry/instrumentation` (e.g. multiple versions) in a single process
 * will result in multiple instances of RITM, which will have an impact
 * on the performance of instrumentation hooks being applied.
 */
export class RequireInTheMiddleSingleton {
    _moduleNameTrie = new ModuleNameTrie();
    static _instance;
    constructor() {
        this._initialize();
    }
    _initialize() {
        new Hook(
        // Intercept all `require` calls; we will filter the matching ones below
        null, { internals: true }, (exports, name, basedir) => {
            // For internal files on Windows, `name` will use backslash as the path separator
            const normalizedModuleName = normalizePathSeparators(name);
            const matches = this._moduleNameTrie.search(normalizedModuleName, {
                maintainInsertionOrder: true,
                // For core modules (e.g. `fs`), do not match on sub-paths (e.g. `fs/promises').
                // This matches the behavior of `require-in-the-middle`.
                // `basedir` is always `undefined` for core modules.
                fullOnly: basedir === undefined,
            });
            for (const { onRequire } of matches) {
                exports = onRequire(exports, name, basedir);
            }
            return exports;
        });
    }
    /**
     * Register a hook with `require-in-the-middle`
     *
     * @param {string} moduleName Module name
     * @param {OnRequireFn} onRequire Hook function
     * @returns {Hooked} Registered hook
     */
    register(moduleName, onRequire) {
        const hooked = { moduleName, onRequire };
        this._moduleNameTrie.insert(hooked);
        return hooked;
    }
    /**
     * Get the `RequireInTheMiddleSingleton` singleton
     *
     * @returns {RequireInTheMiddleSingleton} Singleton of `RequireInTheMiddleSingleton`
     */
    static getInstance() {
        // Mocha runs all test suites in the same process
        // This prevents test suites from sharing a singleton
        if (isMocha)
            return new RequireInTheMiddleSingleton();
        return (this._instance =
            this._instance ?? new RequireInTheMiddleSingleton());
    }
}
/**
 * Normalize the path separators to forward slash in a module name or path
 *
 * @param {string} moduleNameOrPath Module name or path
 * @returns {string} Normalized module name or path
 */
function normalizePathSeparators(moduleNameOrPath) {
    return path.sep !== ModuleNameSeparator
        ? moduleNameOrPath.split(path.sep).join(ModuleNameSeparator)
        : moduleNameOrPath;
}
//# sourceMappingURL=RequireInTheMiddleSingleton.js.map