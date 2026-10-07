"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var util_exports = {};
__export(util_exports, {
  addSuffixToFilePath: () => addSuffixToFilePath,
  ansiRegex: () => ansiRegex,
  createFileMatcher: () => createFileMatcher,
  createTitleMatcher: () => createTitleMatcher,
  debugTest: () => debugTest,
  errorWithFile: () => errorWithFile,
  expectTypes: () => expectTypes,
  fileExistsAsync: () => fileExistsAsync,
  fileIsModule: () => fileIsModule,
  filterStackFile: () => filterStackFile,
  filterStackTrace: () => filterStackTrace,
  filteredStackTrace: () => filteredStackTrace,
  forceRegExp: () => forceRegExp,
  formatLocation: () => formatLocation,
  getContainedPath: () => getContainedPath,
  getPackageJsonPath: () => getPackageJsonPath,
  mergeObjects: () => mergeObjects,
  normalizeAndSaveAttachment: () => normalizeAndSaveAttachment,
  parseLocationArg: () => parseLocationArg,
  relativeFilePath: () => relativeFilePath,
  removeDirAndLogToConsole: () => removeDirAndLogToConsole,
  resolveImportSpecifierAfterMapping: () => resolveImportSpecifierAfterMapping,
  resolveReporterOutputPath: () => resolveReporterOutputPath,
  sanitizeFilePathBeforeExtension: () => sanitizeFilePathBeforeExtension,
  serializeError: () => serializeError,
  stripAnsiEscapes: () => stripAnsiEscapes,
  takeFirst: () => takeFirst,
  trimLongString: () => trimLongString,
  windowsFilesystemFriendlyLength: () => windowsFilesystemFriendlyLength
});
module.exports = __toCommonJS(util_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_url = __toESM(require("url"));
var import_util = __toESM(require("util"));
const debug = require("playwright-core/lib/utilsBundle").debug;
const mime = require("playwright-core/lib/utilsBundle").mime;
const minimatch = require("playwright-core/lib/utilsBundle").minimatch;
const { calculateSha1 } = require("playwright-core/lib/coreBundle").utils;
const { sanitizeForFilePath } = require("playwright-core/lib/coreBundle").utils;
const { isRegExp } = require("playwright-core/lib/coreBundle").iso;
const { parseStackFrame, stringifyStackFrames } = require("playwright-core/lib/coreBundle").iso;
const { ansiRegex, isString, stripAnsiEscapes } = require("playwright-core/lib/coreBundle").iso;
const PLAYWRIGHT_TEST_PATH = import_path.default.join(__dirname, "..");
const PLAYWRIGHT_CORE_PATH = import_path.default.dirname(require.resolve("playwright-core/package.json"));
function filterStackTrace(e) {
  const name = e.name ? e.name + ": " : "";
  const cause = e.cause instanceof Error ? filterStackTrace(e.cause) : void 0;
  if (process.env.PWDEBUGIMPL)
    return { message: name + e.message, stack: e.stack || "", cause };
  const stackLines = stringifyStackFrames(filteredStackTrace(e.stack?.split("\n") || []));
  return {
    message: name + e.message,
    stack: `${name}${e.message}${stackLines.map((line) => "\n" + line).join("")}`,
    cause
  };
}
function filterStackFile(file) {
  if (process.env.PWDEBUGIMPL)
    return true;
  if (file.startsWith(PLAYWRIGHT_TEST_PATH))
    return false;
  if (file.startsWith(PLAYWRIGHT_CORE_PATH))
    return false;
  return true;
}
function filteredStackTrace(rawStack) {
  const frames = [];
  for (const line of rawStack) {
    const frame = parseStackFrame(line, import_path.default.sep, !!process.env.PWDEBUGIMPL);
    if (!frame || !frame.file)
      continue;
    if (!filterStackFile(frame.file))
      continue;
    frames.push(frame);
  }
  return frames;
}
function serializeError(error) {
  if (error instanceof Error)
    return filterStackTrace(error);
  return {
    value: import_util.default.inspect(error)
  };
}
function parseLocationArg(arg) {
  const match = /^(.*?):(\d+):?(\d+)?$/.exec(arg);
  return {
    file: match ? match[1] : arg,
    line: match ? parseInt(match[2], 10) : null,
    column: match?.[3] ? parseInt(match[3], 10) : null
  };
}
function createFileMatcher(patterns) {
  const reList = [];
  const filePatterns = [];
  for (const pattern of Array.isArray(patterns) ? patterns : [patterns]) {
    if (isRegExp(pattern)) {
      reList.push(pattern);
    } else {
      if (!pattern.startsWith("**/"))
        filePatterns.push("**/" + pattern);
      else
        filePatterns.push(pattern);
    }
  }
  return (filePath) => {
    for (const re of reList) {
      re.lastIndex = 0;
      if (re.test(filePath))
        return true;
    }
    if (import_path.default.sep === "\\") {
      const fileURL = import_url.default.pathToFileURL(filePath).href;
      for (const re of reList) {
        re.lastIndex = 0;
        if (re.test(fileURL))
          return true;
      }
    }
    for (const pattern of filePatterns) {
      if (minimatch(filePath, pattern, { nocase: true, dot: true }))
        return true;
    }
    return false;
  };
}
function createTitleMatcher(patterns) {
  const reList = Array.isArray(patterns) ? patterns : [patterns];
  return (value) => {
    for (const re of reList) {
      re.lastIndex = 0;
      if (re.test(value))
        return true;
    }
    return false;
  };
}
function mergeObjects(a, b, c) {
  const result = { ...a };
  for (const x of [b, c].filter(Boolean)) {
    for (const [name, value] of Object.entries(x)) {
      if (!Object.is(value, void 0))
        result[name] = value;
    }
  }
  return result;
}
function forceRegExp(pattern) {
  const match = pattern.match(/^\/(.*)\/([gi]*)$/);
  if (match)
    return new RegExp(match[1], match[2]);
  return new RegExp(pattern, "gi");
}
function relativeFilePath(file) {
  if (!import_path.default.isAbsolute(file))
    return file;
  return import_path.default.relative(process.cwd(), file);
}
function formatLocation(location) {
  return relativeFilePath(location.file) + ":" + location.line + ":" + location.column;
}
function errorWithFile(file, message) {
  return new Error(`${relativeFilePath(file)}: ${message}`);
}
function expectTypes(receiver, types, matcherName) {
  if (typeof receiver !== "object" || !types.includes(receiver._apiName)) {
    const receiverString = typeof receiver === "object" && receiver !== null ? `${receiver.constructor.name} ${import_util.default.inspect(receiver)}` : String(receiver);
    const commaSeparated = types.slice();
    const lastType = commaSeparated.pop();
    const typesString = commaSeparated.length ? commaSeparated.join(", ") + " or " + lastType : lastType;
    throw new Error(`${matcherName} can be only used with ${typesString} object${types.length > 1 ? "s" : ""}, was called with ${receiverString}`);
  }
}
const windowsFilesystemFriendlyLength = 60;
function trimLongString(s, length = 100) {
  if (s.length <= length)
    return s;
  const hash = calculateSha1(s);
  const middle = `-${hash.substring(0, 5)}-`;
  const start = Math.floor((length - middle.length) / 2);
  const end = length - middle.length - start;
  return s.substring(0, start) + middle + s.slice(-end);
}
function addSuffixToFilePath(filePath, suffix) {
  const ext = import_path.default.extname(filePath);
  const base = filePath.substring(0, filePath.length - ext.length);
  return base + suffix + ext;
}
function sanitizeFilePathBeforeExtension(filePath, ext) {
  ext ??= import_path.default.extname(filePath);
  const base = filePath.substring(0, filePath.length - ext.length);
  return sanitizeForFilePath(base) + ext;
}
function getContainedPath(parentPath, subPath = "") {
  const resolvedPath = import_path.default.resolve(parentPath, subPath);
  if (resolvedPath === parentPath || resolvedPath.startsWith(parentPath + import_path.default.sep))
    return resolvedPath;
  return null;
}
const debugTest = debug("pw:test");
const folderToPackageJsonPath = /* @__PURE__ */ new Map();
function getPackageJsonPath(folderPath) {
  const cached = folderToPackageJsonPath.get(folderPath);
  if (cached !== void 0)
    return cached;
  const packageJsonPath = import_path.default.join(folderPath, "package.json");
  if (import_fs.default.existsSync(packageJsonPath)) {
    folderToPackageJsonPath.set(folderPath, packageJsonPath);
    return packageJsonPath;
  }
  const parentFolder = import_path.default.dirname(folderPath);
  if (folderPath === parentFolder) {
    folderToPackageJsonPath.set(folderPath, "");
    return "";
  }
  const result = getPackageJsonPath(parentFolder);
  folderToPackageJsonPath.set(folderPath, result);
  return result;
}
function resolveReporterOutputPath(defaultValue, configDir, configValue) {
  if (configValue)
    return import_path.default.resolve(configDir, configValue);
  let basePath = getPackageJsonPath(configDir);
  basePath = basePath ? import_path.default.dirname(basePath) : process.cwd();
  return import_path.default.resolve(basePath, defaultValue);
}
async function normalizeAndSaveAttachment(outputPath, name, options = {}) {
  if (options.path === void 0 && options.body === void 0)
    return { name, contentType: "text/plain" };
  if ((options.path !== void 0 ? 1 : 0) + (options.body !== void 0 ? 1 : 0) !== 1)
    throw new Error(`Exactly one of "path" and "body" must be specified`);
  if (options.path !== void 0) {
    const hash = calculateSha1(options.path);
    if (!isString(name))
      throw new Error('"name" should be string.');
    const sanitizedNamePrefix = sanitizeForFilePath(name) + "-";
    const dest = import_path.default.join(outputPath, "attachments", sanitizedNamePrefix + hash + import_path.default.extname(options.path));
    await import_fs.default.promises.mkdir(import_path.default.dirname(dest), { recursive: true });
    await import_fs.default.promises.copyFile(options.path, dest);
    const contentType = options.contentType ?? (mime.getType(import_path.default.basename(options.path)) || "application/octet-stream");
    return { name, contentType, path: dest };
  } else {
    const contentType = options.contentType ?? (typeof options.body === "string" ? "text/plain" : "application/octet-stream");
    return { name, contentType, body: typeof options.body === "string" ? Buffer.from(options.body) : options.body };
  }
}
function fileIsModule(file) {
  if (file.endsWith(".mjs") || file.endsWith(".mts"))
    return true;
  if (file.endsWith(".cjs") || file.endsWith(".cts"))
    return false;
  const folder = import_path.default.dirname(file);
  return folderIsModule(folder);
}
function folderIsModule(folder) {
  const packageJsonPath = getPackageJsonPath(folder);
  if (!packageJsonPath)
    return false;
  return require(packageJsonPath).type === "module";
}
const packageJsonMainFieldCache = /* @__PURE__ */ new Map();
function getMainFieldFromPackageJson(packageJsonPath) {
  if (!packageJsonMainFieldCache.has(packageJsonPath)) {
    let mainField;
    try {
      mainField = JSON.parse(import_fs.default.readFileSync(packageJsonPath, "utf8")).main;
    } catch {
    }
    packageJsonMainFieldCache.set(packageJsonPath, mainField);
  }
  return packageJsonMainFieldCache.get(packageJsonPath);
}
const kExtLookups = /* @__PURE__ */ new Map([
  [".js", [".jsx", ".ts", ".tsx"]],
  [".jsx", [".tsx"]],
  [".cjs", [".cts"]],
  [".mjs", [".mts"]],
  ["", [".js", ".ts", ".jsx", ".tsx", ".cjs", ".mjs", ".cts", ".mts"]]
]);
function resolveImportSpecifierExtension(resolved) {
  if (fileExists(resolved))
    return resolved;
  for (const [ext, others] of kExtLookups) {
    if (!resolved.endsWith(ext))
      continue;
    for (const other of others) {
      const modified = resolved.substring(0, resolved.length - ext.length) + other;
      if (fileExists(modified))
        return modified;
    }
    break;
  }
}
function resolveImportSpecifierAfterMapping(resolved, afterPathMapping) {
  const resolvedFile = resolveImportSpecifierExtension(resolved);
  if (resolvedFile)
    return resolvedFile;
  if (dirExists(resolved)) {
    const packageJsonPath = import_path.default.join(resolved, "package.json");
    if (afterPathMapping) {
      const mainField = getMainFieldFromPackageJson(packageJsonPath);
      const mainFieldResolved = mainField ? resolveImportSpecifierExtension(import_path.default.resolve(resolved, mainField)) : void 0;
      return mainFieldResolved || resolveImportSpecifierExtension(import_path.default.join(resolved, "index"));
    }
    if (fileExists(packageJsonPath))
      return resolved;
    const dirImport = import_path.default.join(resolved, "index");
    return resolveImportSpecifierExtension(dirImport);
  }
}
function fileExists(resolved) {
  return import_fs.default.statSync(resolved, { throwIfNoEntry: false })?.isFile();
}
async function fileExistsAsync(resolved) {
  try {
    const stat = await import_fs.default.promises.stat(resolved);
    return stat.isFile();
  } catch {
    return false;
  }
}
function dirExists(resolved) {
  return import_fs.default.statSync(resolved, { throwIfNoEntry: false })?.isDirectory();
}
async function removeDirAndLogToConsole(dir) {
  try {
    if (!import_fs.default.existsSync(dir))
      return;
    console.log(`Removing ${await import_fs.default.promises.realpath(dir)}`);
    await import_fs.default.promises.rm(dir, { recursive: true, force: true });
  } catch {
  }
}
function takeFirst(...args) {
  for (const arg of args) {
    if (arg !== void 0)
      return arg;
  }
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addSuffixToFilePath,
  ansiRegex,
  createFileMatcher,
  createTitleMatcher,
  debugTest,
  errorWithFile,
  expectTypes,
  fileExistsAsync,
  fileIsModule,
  filterStackFile,
  filterStackTrace,
  filteredStackTrace,
  forceRegExp,
  formatLocation,
  getContainedPath,
  getPackageJsonPath,
  mergeObjects,
  normalizeAndSaveAttachment,
  parseLocationArg,
  relativeFilePath,
  removeDirAndLogToConsole,
  resolveImportSpecifierAfterMapping,
  resolveReporterOutputPath,
  sanitizeFilePathBeforeExtension,
  serializeError,
  stripAnsiEscapes,
  takeFirst,
  trimLongString,
  windowsFilesystemFriendlyLength
});
