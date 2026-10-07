"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearGlobCache = clearGlobCache;
exports.resolveProjectList = resolveProjectList;
exports.clearGlobResolutionCache = clearGlobResolutionCache;
const debug_1 = __importDefault(require("debug"));
const tinyglobby_1 = require("tinyglobby");
const shared_1 = require("../create-program/shared");
const ExpiringCache_1 = require("./ExpiringCache");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:parseSettings:resolveProjectList');
let RESOLUTION_CACHE = null;
function clearGlobCache() {
    RESOLUTION_CACHE?.clear();
}
/**
 * Normalizes, sanitizes, resolves and filters the provided project paths
 */
function resolveProjectList(options) {
    const sanitizedProjects = [];
    // Normalize and sanitize the project paths
    if (options.project != null) {
        for (const project of options.project) {
            if (typeof project === 'string') {
                sanitizedProjects.push(project);
            }
        }
    }
    if (sanitizedProjects.length === 0) {
        return new Map();
    }
    const projectFolderIgnoreList = (options.projectFolderIgnoreList ?? ['**/node_modules/**']).filter(folder => typeof folder === 'string');
    const cacheKey = getHash({
        project: sanitizedProjects,
        projectFolderIgnoreList,
        tsconfigRootDir: options.tsconfigRootDir,
    });
    if (RESOLUTION_CACHE == null) {
        // note - we initialize the global cache based on the first config we encounter.
        //        this does mean that you can't have multiple lifetimes set per folder
        //        I doubt that anyone will really bother reconfiguring this, let alone
        //        try to do complicated setups, so we'll deal with this later if ever.
        RESOLUTION_CACHE = new ExpiringCache_1.ExpiringCache(options.singleRun
            ? 'Infinity'
            : (options.cacheLifetime?.glob ??
                ExpiringCache_1.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS));
    }
    else {
        const cached = RESOLUTION_CACHE.get(cacheKey);
        if (cached) {
            return cached;
        }
    }
    // Transform glob patterns into paths
    const nonGlobProjects = sanitizedProjects.filter(project => !(0, tinyglobby_1.isDynamicPattern)(project));
    const globProjects = sanitizedProjects.filter(project => (0, tinyglobby_1.isDynamicPattern)(project));
    let globProjectPaths = [];
    if (globProjects.length > 0) {
        // To ensure the order is correct, we need to glob for each pattern
        // separately and then concatenate the results in patterns' order.
        globProjectPaths = globProjects.flatMap(pattern => (0, tinyglobby_1.globSync)(pattern, {
            cwd: options.tsconfigRootDir,
            expandDirectories: false,
            ignore: projectFolderIgnoreList,
        }));
    }
    const uniqueCanonicalProjectPaths = new Map([...nonGlobProjects, ...globProjectPaths].map(project => [
        (0, shared_1.getCanonicalFileName)((0, shared_1.ensureAbsolutePath)(project, options.tsconfigRootDir)),
        (0, shared_1.ensureAbsolutePath)(project, options.tsconfigRootDir),
    ]));
    log('parserOptions.project (excluding ignored) matched projects: %s', uniqueCanonicalProjectPaths);
    RESOLUTION_CACHE.set(cacheKey, uniqueCanonicalProjectPaths);
    return uniqueCanonicalProjectPaths;
}
function getHash({ project, projectFolderIgnoreList, tsconfigRootDir, }) {
    // create a stable representation of the config
    const hashObject = {
        tsconfigRootDir,
        // the project order does matter and can impact the resolved globs
        project,
        // the ignore order won't doesn't ever matter
        projectFolderIgnoreList: [...projectFolderIgnoreList].sort(),
    };
    return (0, shared_1.createHash)(JSON.stringify(hashObject));
}
/**
 * Exported for testing purposes only
 * @internal
 */
function clearGlobResolutionCache() {
    RESOLUTION_CACHE?.clear();
    RESOLUTION_CACHE = null;
}
