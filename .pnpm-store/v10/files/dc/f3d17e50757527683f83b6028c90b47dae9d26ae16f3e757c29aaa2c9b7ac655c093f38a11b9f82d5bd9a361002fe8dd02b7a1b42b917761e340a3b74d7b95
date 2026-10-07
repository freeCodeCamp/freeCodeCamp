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
var chunk_QFA3XBMW_exports = {};
__export(chunk_QFA3XBMW_exports, {
  allEngineEnvVarsSet: () => allEngineEnvVarsSet,
  bold: () => bold,
  deprecatedEnvVarMap: () => deprecatedEnvVarMap,
  engineEnvVarMap: () => engineEnvVarMap,
  getBinaryEnvVarPath: () => getBinaryEnvVarPath,
  yellow: () => yellow
});
module.exports = __toCommonJS(chunk_QFA3XBMW_exports);
var import_node_fs = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_debug = __toESM(require("@prisma/debug"));
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var debug = (0, import_debug.default)("prisma:fetch-engine:env");
var engineEnvVarMap = {
  [
    "query-engine"
    /* QueryEngineBinary */
  ]: "PRISMA_QUERY_ENGINE_BINARY",
  [
    "libquery-engine"
    /* QueryEngineLibrary */
  ]: "PRISMA_QUERY_ENGINE_LIBRARY",
  [
    "schema-engine"
    /* SchemaEngineBinary */
  ]: "PRISMA_SCHEMA_ENGINE_BINARY"
};
var deprecatedEnvVarMap = {
  [
    "schema-engine"
    /* SchemaEngineBinary */
  ]: "PRISMA_MIGRATION_ENGINE_BINARY"
};
function getBinaryEnvVarPath(binaryName) {
  const envVar = getEnvVarToUse(binaryName);
  if (process.env[envVar]) {
    const envVarPath = import_node_path.default.resolve(process.cwd(), process.env[envVar]);
    if (!import_node_fs.default.existsSync(envVarPath)) {
      throw new Error(
        `Env var ${bold(envVar)} is provided but provided path ${underline(process.env[envVar])} can't be resolved.`
      );
    }
    debug(
      `Using env var ${bold(envVar)} for binary ${bold(binaryName)}, which points to ${underline(
        process.env[envVar]
      )}`
    );
    return {
      path: envVarPath,
      fromEnvVar: envVar
    };
  }
  return null;
}
function getEnvVarToUse(binaryType) {
  const envVar = engineEnvVarMap[binaryType];
  const deprecatedEnvVar = deprecatedEnvVarMap[binaryType];
  if (deprecatedEnvVar && process.env[deprecatedEnvVar]) {
    if (process.env[envVar]) {
      console.warn(
        `${yellow("prisma:warn")} Both ${bold(envVar)} and ${bold(deprecatedEnvVar)} are specified, ${bold(
          envVar
        )} takes precedence. ${bold(deprecatedEnvVar)} is deprecated.`
      );
      return envVar;
    } else {
      console.warn(
        `${yellow("prisma:warn")} ${bold(deprecatedEnvVar)} environment variable is deprecated, please use ${bold(
          envVar
        )} instead`
      );
      return deprecatedEnvVar;
    }
  }
  return envVar;
}
function allEngineEnvVarsSet(binaries) {
  for (const binaryType of binaries) {
    if (!getBinaryEnvVarPath(binaryType)) {
      return false;
    }
  }
  return true;
}
