'use strict';

exports.__esModule = true;

const fs = require('fs');
const Module = require('module');
const path = require('path');
const { getPhysicalFilename } = require('./contextCompat');

const hashObject = require('./hash').hashObject;
const ModuleCache = require('./ModuleCache').default;
const pkgDir = require('./pkgDir').default;

const CASE_SENSITIVE_FS = !fs.existsSync(path.join(__dirname.toUpperCase(), 'reSOLVE.js'));
exports.CASE_SENSITIVE_FS = CASE_SENSITIVE_FS;

const ERROR_NAME = 'EslintPluginImportResolveError';

const fileExistsCache = new ModuleCache();

// Polyfill Node's `Module.createRequireFromPath` if not present (added in Node v10.12.0)
// Use `Module.createRequire` if available (added in Node v12.2.0)
const createRequire = Module.createRequire
  // @ts-expect-error this only exists in older node
  || Module.createRequireFromPath
  || /** @type {(filename: string) => unknown} */ function (filename) {
    const mod = new Module(filename, void null);
    mod.filename = filename;
    // @ts-expect-error _nodeModulePaths is undocumented
    mod.paths = Module._nodeModulePaths(path.dirname(filename));

    // @ts-expect-error _compile is undocumented
    mod._compile(`module.exports = require;`, filename);

    return mod.exports;
  };

/** @type {(resolver: object) => resolver is import('./resolve').Resolver} */
function isResolverValid(resolver) {
  if ('interfaceVersion' in resolver && resolver.interfaceVersion === 2) {
    return 'resolve' in resolver && !!resolver.resolve && typeof resolver.resolve === 'function';
  }
  return 'resolveImport' in resolver && !!resolver.resolveImport && typeof resolver.resolveImport === 'function';
}

/** @type {<T extends string>(target: T, sourceFile?: string | null | undefined) => undefined | ReturnType<typeof require>} */
function tryRequire(target, sourceFile) {
  let resolved;
  try {
    // Check if the target exists
    if (sourceFile != null) {
      try {
        resolved = createRequire(path.resolve(sourceFile)).resolve(target);
      } catch (e) {
        resolved = require.resolve(target);
      }
    } else {
      resolved = require.resolve(target);
    }
  } catch (e) {
    // If the target does not exist then just return undefined
    return undefined;
  }

  // If the target exists then return the loaded module
  return require(resolved);
}

/** @type {<T extends Map<string, unknown>>(resolvers: string[] | string | { [k: string]: string }, map: T) => T} */
function resolverReducer(resolvers, map) {
  if (Array.isArray(resolvers)) {
    resolvers.forEach((r) => resolverReducer(r, map));
    return map;
  }

  if (typeof resolvers === 'string') {
    map.set(resolvers, null);
    return map;
  }

  if (typeof resolvers === 'object') {
    for (const key in resolvers) {
      map.set(key, resolvers[key]);
    }
    return map;
  }

  const err = new Error('invalid resolver config');
  err.name = ERROR_NAME;
  throw err;
}

/** @type {(sourceFile: string) => string} */
function getBaseDir(sourceFile) {
  return pkgDir(sourceFile) || process.cwd();
}

/** @type {(name: string, sourceFile: string) => import('./resolve').Resolver} */
function requireResolver(name, sourceFile) {
  // Try to resolve package with conventional name
  const resolver = tryRequire(`eslint-import-resolver-${name}`, sourceFile)
    || tryRequire(name, sourceFile)
    || tryRequire(path.resolve(getBaseDir(sourceFile), name));

  if (!resolver) {
    const err = new Error(`unable to load resolver "${name}".`);
    err.name = ERROR_NAME;
    throw err;
  }
  if (!isResolverValid(resolver)) {
    const err = new Error(`${name} with invalid interface loaded as resolver`);
    err.name = ERROR_NAME;
    throw err;
  }

  return resolver;
}

// https://stackoverflow.com/a/27382838
/** @type {import('./resolve').fileExistsWithCaseSync} */
exports.fileExistsWithCaseSync = function fileExistsWithCaseSync(filepath, cacheSettings, strict) {
  // don't care if the FS is case-sensitive
  if (CASE_SENSITIVE_FS) { return true; }

  // null means it resolved to a builtin
  if (filepath === null) { return true; }
  if (filepath.toLowerCase() === process.cwd().toLowerCase() && !strict) { return true; }
  const parsedPath = path.parse(filepath);
  const dir = parsedPath.dir;

  let result = fileExistsCache.get(filepath, cacheSettings);
  if (result != null) { return result; }

  // base case
  if (dir === '' || parsedPath.root === filepath) {
    result = true;
  } else {
    const filenames = fs.readdirSync(dir);
    if (filenames.indexOf(parsedPath.base) === -1) {
      result = false;
    } else {
      result = fileExistsWithCaseSync(dir, cacheSettings, strict);
    }
  }
  fileExistsCache.set(filepath, result);
  return result;
};

/** @type {import('./types').ESLintSettings | null} */
let prevSettings = null;
let memoizedHash = '';
/** @type {(modulePath: string, sourceFile: string, settings: import('./types').ESLintSettings) => import('./resolve').ResolvedResult} */
function fullResolve(modulePath, sourceFile, settings) {
  // check if this is a bonus core module
  const coreSet = new Set(settings['import/core-modules']);
  if (coreSet.has(modulePath)) { return { found: true, path: null }; }

  const sourceDir = path.dirname(sourceFile);

  if (prevSettings !== settings) {
    memoizedHash = hashObject(settings).digest('hex');
    prevSettings = settings;
  }

  const cacheKey = sourceDir + memoizedHash + modulePath;

  const cacheSettings = ModuleCache.getSettings(settings);

  const cachedPath = fileExistsCache.get(cacheKey, cacheSettings);
  if (cachedPath !== undefined) { return { found: true, path: cachedPath }; }

  /** @type {(resolvedPath: string | null) => void} */
  function cache(resolvedPath) {
    fileExistsCache.set(cacheKey, resolvedPath);
  }

  /** @type {(resolver: import('./resolve').Resolver, config: unknown) => import('./resolve').ResolvedResult} */
  function withResolver(resolver, config) {
    if (resolver.interfaceVersion === 2) {
      return resolver.resolve(modulePath, sourceFile, config);
    }

    try {
      const resolved = resolver.resolveImport(modulePath, sourceFile, config);
      if (resolved === undefined) { return { found: false }; }
      return { found: true, path: resolved };
    } catch (err) {
      return { found: false };
    }
  }

  const configResolvers = settings['import/resolver']
    || { node: settings['import/resolve'] }; // backward compatibility

  const resolvers = resolverReducer(configResolvers, new Map());

  for (const pair of resolvers) {
    const name = pair[0];
    const config = pair[1];
    const resolver = requireResolver(name, sourceFile);
    const resolved = withResolver(resolver, config);

    if (!resolved.found) { continue; }

    // else, counts
    cache(resolved.path);
    return resolved;
  }

  // failed
  // cache(undefined)
  return { found: false };
}

/** @type {import('./resolve').relative} */
function relative(modulePath, sourceFile, settings) {
  return fullResolve(modulePath, sourceFile, settings).path;
}
exports.relative = relative;

/** @type {Set<import('eslint').Rule.RuleContext>} */
const erroredContexts = new Set();

/**
 * Given
 * @param p - module path
 * @param context - ESLint context
 * @return - the full module filesystem path; null if package is core; undefined if not found
 * @type {import('./resolve').default}
 */
function resolve(p, context) {
  try {
    return relative(p, getPhysicalFilename(context), context.settings);
  } catch (err) {
    if (!erroredContexts.has(context)) {
      // The `err.stack` string starts with `err.name` followed by colon and `err.message`.
      // We're filtering out the default `err.name` because it adds little value to the message.
      // @ts-expect-error this might be an Error
      let errMessage = err.message;
      // @ts-expect-error this might be an Error
      if (err.name !== ERROR_NAME && err.stack) {
        // @ts-expect-error this might be an Error
        errMessage = err.stack.replace(/^Error: /, '');
      }
      context.report({
        message: `Resolve error: ${errMessage}`,
        loc: { line: 1, column: 0 },
      });
      erroredContexts.add(context);
    }
  }
}
resolve.relative = relative;
exports.default = resolve;
