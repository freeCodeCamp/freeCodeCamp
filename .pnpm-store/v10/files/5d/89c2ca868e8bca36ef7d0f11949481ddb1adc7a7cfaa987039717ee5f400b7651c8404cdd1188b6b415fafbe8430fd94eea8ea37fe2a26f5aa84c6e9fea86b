"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearGlobResolutionCache = exports.resolveProjectList = exports.clearGlobCache = void 0;
const debug_1 = __importDefault(require("debug"));
const globby_1 = require("globby");
const is_glob_1 = __importDefault(require("is-glob"));
const shared_1 = require("../create-program/shared");
const ExpiringCache_1 = require("./ExpiringCache");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:parser:parseSettings:resolveProjectList');
let RESOLUTION_CACHE = null;
function clearGlobCache() {
    RESOLUTION_CACHE === null || RESOLUTION_CACHE === void 0 ? void 0 : RESOLUTION_CACHE.clear();
}
exports.clearGlobCache = clearGlobCache;
/**
 * Normalizes, sanitizes, resolves and filters the provided project paths
 */
function resolveProjectList(options) {
    var _a, _b, _c;
    const sanitizedProjects = [];
    // Normalize and sanitize the project paths
    if (typeof options.project === 'string') {
        sanitizedProjects.push(options.project);
    }
    else if (Array.isArray(options.project)) {
        for (const project of options.project) {
            if (typeof project === 'string') {
                sanitizedProjects.push(project);
            }
        }
    }
    if (sanitizedProjects.length === 0) {
        return [];
    }
    const projectFolderIgnoreList = ((_a = options.projectFolderIgnoreList) !== null && _a !== void 0 ? _a : ['**/node_modules/**'])
        .reduce((acc, folder) => {
        if (typeof folder === 'string') {
            acc.push(folder);
        }
        return acc;
    }, [])
        // prefix with a ! for not match glob
        .map(folder => (folder.startsWith('!') ? folder : `!${folder}`));
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
            : (_c = (_b = options.cacheLifetime) === null || _b === void 0 ? void 0 : _b.glob) !== null && _c !== void 0 ? _c : ExpiringCache_1.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS);
    }
    else {
        const cached = RESOLUTION_CACHE.get(cacheKey);
        if (cached) {
            return cached;
        }
    }
    // Transform glob patterns into paths
    const nonGlobProjects = sanitizedProjects.filter(project => !(0, is_glob_1.default)(project));
    const globProjects = sanitizedProjects.filter(project => (0, is_glob_1.default)(project));
    const uniqueCanonicalProjectPaths = new Set(nonGlobProjects
        .concat(globProjects.length === 0
        ? []
        : (0, globby_1.sync)([...globProjects, ...projectFolderIgnoreList], {
            cwd: options.tsconfigRootDir,
        }))
        .map(project => (0, shared_1.getCanonicalFileName)((0, shared_1.ensureAbsolutePath)(project, options.tsconfigRootDir))));
    log('parserOptions.project (excluding ignored) matched projects: %s', uniqueCanonicalProjectPaths);
    const returnValue = Array.from(uniqueCanonicalProjectPaths);
    RESOLUTION_CACHE.set(cacheKey, returnValue);
    return returnValue;
}
exports.resolveProjectList = resolveProjectList;
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
    RESOLUTION_CACHE === null || RESOLUTION_CACHE === void 0 ? void 0 : RESOLUTION_CACHE.clear();
    RESOLUTION_CACHE = null;
}
exports.clearGlobResolutionCache = clearGlobResolutionCache;
//# sourceMappingURL=resolveProjectList.js.map