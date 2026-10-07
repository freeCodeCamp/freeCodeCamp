import { statSync, promises } from 'node:fs';
import { resolve, join, normalize, isAbsolute, dirname } from 'pathe';
import { parseJSONC, stringifyJSONC, parseJSON, stringifyJSON, parseJSON5, parseYAML, stringifyJSON5, stringifyYAML } from 'confbox';
import { resolveModulePath } from 'exsolve';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';
import { parseINI, stringifyINI } from 'confbox/ini';

const defaultFindOptions = {
  startingFrom: ".",
  rootPattern: /^node_modules$/,
  reverse: false,
  test: (filePath) => {
    try {
      if (statSync(filePath).isFile()) {
        return true;
      }
    } catch {
    }
  }
};
async function findFile(filename, _options = {}) {
  const filenames = Array.isArray(filename) ? filename : [filename];
  const options = { ...defaultFindOptions, ..._options };
  const basePath = resolve(options.startingFrom);
  const leadingSlash = basePath[0] === "/";
  const segments = basePath.split("/").filter(Boolean);
  if (filenames.includes(segments.at(-1)) && await options.test(basePath)) {
    return basePath;
  }
  if (leadingSlash) {
    segments[0] = "/" + segments[0];
  }
  let root = segments.findIndex((r) => r.match(options.rootPattern));
  if (root === -1) {
    root = 0;
  }
  if (options.reverse) {
    for (let index = root + 1; index <= segments.length; index++) {
      for (const filename2 of filenames) {
        const filePath = join(...segments.slice(0, index), filename2);
        if (await options.test(filePath)) {
          return filePath;
        }
      }
    }
  } else {
    for (let index = segments.length; index > root; index--) {
      for (const filename2 of filenames) {
        const filePath = join(...segments.slice(0, index), filename2);
        if (await options.test(filePath)) {
          return filePath;
        }
      }
    }
  }
  throw new Error(
    `Cannot find matching ${filename} in ${options.startingFrom} or parent directories`
  );
}
function findNearestFile(filename, options = {}) {
  return findFile(filename, options);
}
function findFarthestFile(filename, options = {}) {
  return findFile(filename, { ...options, reverse: true });
}

function _resolvePath(id, opts = {}) {
  if (id instanceof URL || id.startsWith("file://")) {
    return normalize(fileURLToPath(id));
  }
  if (isAbsolute(id)) {
    return normalize(id);
  }
  return resolveModulePath(id, {
    ...opts,
    from: opts.from || opts.parent || opts.url
  });
}

const FileCache$1 = /* @__PURE__ */ new Map();
function defineTSConfig(tsconfig) {
  return tsconfig;
}
async function readTSConfig(id, options = {}) {
  const resolvedPath = await resolveTSConfig(id, options);
  const cache = options.cache && typeof options.cache !== "boolean" ? options.cache : FileCache$1;
  if (options.cache && cache.has(resolvedPath)) {
    return cache.get(resolvedPath);
  }
  const text = await promises.readFile(resolvedPath, "utf8");
  const parsed = parseJSONC(text);
  cache.set(resolvedPath, parsed);
  return parsed;
}
async function writeTSConfig(path, tsconfig) {
  await promises.writeFile(path, stringifyJSONC(tsconfig));
}
async function resolveTSConfig(id = process.cwd(), options = {}) {
  return findNearestFile("tsconfig.json", {
    ...options,
    startingFrom: _resolvePath(id, options)
  });
}

const lockFiles = [
  "yarn.lock",
  "package-lock.json",
  "pnpm-lock.yaml",
  "npm-shrinkwrap.json",
  "bun.lockb",
  "bun.lock",
  "deno.lock"
];
const packageFiles = ["package.json", "package.json5", "package.yaml"];
const workspaceFiles = [
  "pnpm-workspace.yaml",
  "lerna.json",
  "turbo.json",
  "rush.json",
  "deno.json",
  "deno.jsonc"
];
const FileCache = /* @__PURE__ */ new Map();
function definePackageJSON(pkg) {
  return pkg;
}
async function findPackage(id = process.cwd(), options = {}) {
  return findNearestFile(packageFiles, {
    ...options,
    startingFrom: _resolvePath(id, options)
  });
}
async function readPackage(id, options = {}) {
  const resolvedPath = await findPackage(id, options);
  const cache = options.cache && typeof options.cache !== "boolean" ? options.cache : FileCache;
  if (options.cache && cache.has(resolvedPath)) {
    return cache.get(resolvedPath);
  }
  const blob = await promises.readFile(resolvedPath, "utf8");
  let parsed;
  if (resolvedPath.endsWith(".json5")) {
    parsed = parseJSON5(blob);
  } else if (resolvedPath.endsWith(".yaml")) {
    parsed = parseYAML(blob);
  } else {
    try {
      parsed = parseJSON(blob);
    } catch {
      parsed = parseJSONC(blob);
    }
  }
  cache.set(resolvedPath, parsed);
  return parsed;
}
async function writePackage(path, pkg) {
  let content;
  if (path.endsWith(".json5")) {
    content = stringifyJSON5(pkg);
  } else if (path.endsWith(".yaml")) {
    content = stringifyYAML(pkg);
  } else {
    content = stringifyJSON(pkg);
  }
  await promises.writeFile(path, content);
}
async function readPackageJSON(id, options = {}) {
  const resolvedPath = await resolvePackageJSON(id, options);
  const cache = options.cache && typeof options.cache !== "boolean" ? options.cache : FileCache;
  if (options.cache && cache.has(resolvedPath)) {
    return cache.get(resolvedPath);
  }
  const blob = await promises.readFile(resolvedPath, "utf8");
  let parsed;
  try {
    parsed = parseJSON(blob);
  } catch {
    parsed = parseJSONC(blob);
  }
  cache.set(resolvedPath, parsed);
  return parsed;
}
async function writePackageJSON(path, pkg) {
  await promises.writeFile(path, stringifyJSON(pkg));
}
async function resolvePackageJSON(id = process.cwd(), options = {}) {
  return findNearestFile("package.json", {
    ...options,
    startingFrom: _resolvePath(id, options)
  });
}
async function resolveLockfile(id = process.cwd(), options = {}) {
  return findNearestFile(lockFiles, {
    ...options,
    startingFrom: _resolvePath(id, options)
  });
}
const workspaceTests = {
  workspaceFile: (opts) => findFile(workspaceFiles, opts).then((r) => dirname(r)),
  gitConfig: (opts) => findFile(".git/config", opts).then((r) => resolve(r, "../..")),
  lockFile: (opts) => findFile(lockFiles, opts).then((r) => dirname(r)),
  packageJson: (opts) => findFile(packageFiles, opts).then((r) => dirname(r))
};
async function findWorkspaceDir(id = process.cwd(), options = {}) {
  const startingFrom = _resolvePath(id, options);
  const tests = options.tests || ["workspaceFile", "gitConfig", "lockFile", "packageJson"];
  for (const testName of tests) {
    const test = workspaceTests[testName];
    if (options[testName] === false || !test) {
      continue;
    }
    const direction = options[testName] || (testName === "gitConfig" ? "closest" : "furthest");
    const detected = await test({
      ...options,
      startingFrom,
      reverse: direction === "furthest"
    }).catch(() => {
    });
    if (detected) {
      return detected;
    }
  }
  throw new Error(`Cannot detect workspace root from ${id}`);
}
async function updatePackage(id, callback, options = {}) {
  const resolvedPath = await findPackage(id, options);
  const pkg = await readPackage(id, options);
  const proxy = new Proxy(pkg, {
    get(target, prop) {
      if (typeof prop === "string" && objectKeys.has(prop) && !Object.hasOwn(target, prop)) {
        target[prop] = {};
      }
      return Reflect.get(target, prop);
    }
  });
  const updated = await callback(proxy) || pkg;
  await writePackage(resolvedPath, updated);
}
function sortPackage(pkg) {
  const sorted = {};
  const originalKeys = Object.keys(pkg);
  const knownKeysPresent = defaultFieldOrder.filter(
    (key) => Object.hasOwn(pkg, key)
  );
  for (const key of originalKeys) {
    const currentIndex = knownKeysPresent.indexOf(key);
    if (currentIndex === -1) {
      sorted[key] = pkg[key];
      continue;
    }
    for (let i = 0; i <= currentIndex; i++) {
      const knownKey = knownKeysPresent[i];
      if (!Object.hasOwn(sorted, knownKey)) {
        sorted[knownKey] = pkg[knownKey];
      }
    }
  }
  for (const key of [...dependencyKeys, "scripts"]) {
    const value = sorted[key];
    if (isObject(value)) {
      sorted[key] = sortObject(value);
    }
  }
  return sorted;
}
function normalizePackage(pkg) {
  const normalized = sortPackage(pkg);
  for (const key of dependencyKeys) {
    if (!Object.hasOwn(normalized, key)) {
      continue;
    }
    const value = normalized[key];
    if (!isObject(value)) {
      delete normalized[key];
    }
  }
  return normalized;
}
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function sortObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
  );
}
const dependencyKeys = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies"
];
const objectKeys = /* @__PURE__ */ new Set([
  "typesVersions",
  "scripts",
  "resolutions",
  "overrides",
  "dependencies",
  "devDependencies",
  "dependenciesMeta",
  "peerDependencies",
  "peerDependenciesMeta",
  "optionalDependencies",
  "engines",
  "publishConfig"
]);
const defaultFieldOrder = [
  "$schema",
  "name",
  "version",
  "private",
  "description",
  "keywords",
  "homepage",
  "bugs",
  "repository",
  "funding",
  "license",
  "author",
  "sideEffects",
  "type",
  "imports",
  "exports",
  "main",
  "module",
  "browser",
  "types",
  "typesVersions",
  "typings",
  "bin",
  "man",
  "files",
  "workspaces",
  "scripts",
  "resolutions",
  "overrides",
  "dependencies",
  "devDependencies",
  "dependenciesMeta",
  "peerDependencies",
  "peerDependenciesMeta",
  "optionalDependencies",
  "bundledDependencies",
  "bundleDependencies",
  "packageManager",
  "engines",
  "publishConfig"
];

function defineGitConfig(config) {
  return config;
}
async function resolveGitConfig(dir, opts) {
  return findNearestFile(".git/config", { ...opts, startingFrom: dir });
}
async function readGitConfig(dir, opts) {
  const path = await resolveGitConfig(dir, opts);
  const ini = await readFile(path, "utf8");
  return parseGitConfig(ini);
}
async function writeGitConfig(path, config) {
  await writeFile(path, stringifyGitConfig(config));
}
function parseGitConfig(ini) {
  return parseINI(ini.replaceAll(/^\[(\w+) "(.+)"\]$/gm, "[$1.$2]"));
}
function stringifyGitConfig(config) {
  return stringifyINI(config).replaceAll(/^\[(\w+)\.(\w+)\]$/gm, '[$1 "$2"]');
}

export { defineGitConfig, definePackageJSON, defineTSConfig, findFarthestFile, findFile, findNearestFile, findPackage, findWorkspaceDir, normalizePackage, parseGitConfig, readGitConfig, readPackage, readPackageJSON, readTSConfig, resolveGitConfig, resolveLockfile, resolvePackageJSON, resolveTSConfig, sortPackage, stringifyGitConfig, updatePackage, writeGitConfig, writePackage, writePackageJSON, writeTSConfig };
