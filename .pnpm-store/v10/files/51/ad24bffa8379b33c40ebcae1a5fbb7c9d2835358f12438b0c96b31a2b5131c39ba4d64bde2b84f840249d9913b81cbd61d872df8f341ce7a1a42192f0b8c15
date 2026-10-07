"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/scripts/postinstall.ts
var import_debug2 = __toESM(require("@prisma/debug"));
var import_engines_version3 = require("@prisma/engines-version");
var import_fetch_engine2 = require("@prisma/fetch-engine");
var import_fs = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));

// src/index.ts
var import_debug = require("@prisma/debug");
var import_engines_version = require("@prisma/engines-version");
var import_fetch_engine = require("@prisma/fetch-engine");
var import_path = __toESM(require("path"));
var import_engines_version2 = require("@prisma/engines-version");
var debug = (0, import_debug.Debug)("prisma:engines");
var DEFAULT_CLI_QUERY_ENGINE_BINARY_TYPE = import_fetch_engine.BinaryType.QueryEngineLibrary;
function getCliQueryEngineBinaryType(clientEngineType = process.env.PRISMA_CLI_QUERY_ENGINE_TYPE) {
  if (clientEngineType === "binary") {
    return import_fetch_engine.BinaryType.QueryEngineBinary;
  }
  return DEFAULT_CLI_QUERY_ENGINE_BINARY_TYPE;
}
import_path.default.join(__dirname, "../query-engine-darwin");
import_path.default.join(__dirname, "../query-engine-darwin-arm64");
import_path.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
import_path.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
import_path.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
import_path.default.join(__dirname, "../query-engine-linux-static-x64");
import_path.default.join(__dirname, "../query-engine-linux-static-arm64");
import_path.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
import_path.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
import_path.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
import_path.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
import_path.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
import_path.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
import_path.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
import_path.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
import_path.default.join(__dirname, "../query_engine-windows.dll.node");

// src/scripts/postinstall.ts
var debug2 = (0, import_debug2.default)("prisma:download");
var baseDir = import_path2.default.join(__dirname, "../../");
var lockFile = import_path2.default.join(baseDir, "download-lock");
var createdLockFile = false;
async function main() {
  if (import_fs.default.existsSync(lockFile) && parseInt(import_fs.default.readFileSync(lockFile, "utf-8"), 10) > Date.now() - 2e4) {
    debug2(`Lock file already exists, so we're skipping the download of the prisma binaries`);
  } else {
    createLockFile();
    let binaryTargets;
    if (process.env.PRISMA_CLI_BINARY_TARGETS) {
      binaryTargets = process.env.PRISMA_CLI_BINARY_TARGETS.split(",");
    }
    const cliQueryEngineBinaryType = getCliQueryEngineBinaryType();
    const binaries = {
      [cliQueryEngineBinaryType]: baseDir,
      [import_fetch_engine2.BinaryType.SchemaEngineBinary]: baseDir
    };
    await (0, import_fetch_engine2.download)({
      binaries,
      version: import_engines_version3.enginesVersion,
      showProgress: true,
      failSilent: true,
      binaryTargets
    }).catch((e) => debug2(e));
    cleanupLockFile();
  }
}
function createLockFile() {
  createdLockFile = true;
  import_fs.default.writeFileSync(lockFile, Date.now().toString());
}
function cleanupLockFile() {
  if (createdLockFile) {
    try {
      if (import_fs.default.existsSync(lockFile)) {
        import_fs.default.unlinkSync(lockFile);
      }
    } catch (e) {
      debug2(e);
    }
  }
}
main().catch((e) => debug2(e));
process.on("beforeExit", () => {
  cleanupLockFile();
});
process.once("SIGINT", () => {
  cleanupLockFile();
  process.exit();
});
