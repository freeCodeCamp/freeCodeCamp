/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/typingsInstaller/nodeTypingsInstaller.ts
var import_child_process = require("child_process");
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

// src/typescript/typescript.ts
var typescript_exports = {};
__reExport(typescript_exports, require("./typescript.js"));

// src/typingsInstaller/nodeTypingsInstaller.ts
var FileLog = class {
  constructor(logFile) {
    this.logFile = logFile;
    this.isEnabled = () => {
      return typeof this.logFile === "string";
    };
    this.writeLine = (text) => {
      if (typeof this.logFile !== "string") return;
      try {
        fs.appendFileSync(this.logFile, `[${typescript_exports.server.nowString()}] ${text}${typescript_exports.sys.newLine}`);
      } catch {
        this.logFile = void 0;
      }
    };
  }
};
function getDefaultNPMLocation(processName, validateDefaultNpmLocation2, host) {
  if (path.basename(processName).indexOf("node") === 0) {
    const npmPath = path.join(path.dirname(process.argv[0]), "npm");
    if (!validateDefaultNpmLocation2) {
      return npmPath;
    }
    if (host.fileExists(npmPath)) {
      return `"${npmPath}"`;
    }
  }
  return "npm";
}
function loadTypesRegistryFile(typesRegistryFilePath, host, log2) {
  if (!host.fileExists(typesRegistryFilePath)) {
    if (log2.isEnabled()) {
      log2.writeLine(`Types registry file '${typesRegistryFilePath}' does not exist`);
    }
    return /* @__PURE__ */ new Map();
  }
  try {
    const content = JSON.parse(host.readFile(typesRegistryFilePath));
    return new Map(Object.entries(content.entries));
  } catch (e) {
    if (log2.isEnabled()) {
      log2.writeLine(`Error when loading types registry file '${typesRegistryFilePath}': ${e.message}, ${e.stack}`);
    }
    return /* @__PURE__ */ new Map();
  }
}
var typesRegistryPackageName = "types-registry";
function getTypesRegistryFileLocation(globalTypingsCacheLocation2) {
  return (0, typescript_exports.combinePaths)((0, typescript_exports.normalizeSlashes)(globalTypingsCacheLocation2), `node_modules/${typesRegistryPackageName}/index.json`);
}
var NodeTypingsInstaller = class extends typescript_exports.server.typingsInstaller.TypingsInstaller {
  constructor(globalTypingsCacheLocation2, typingSafeListLocation2, typesMapLocation2, npmLocation2, validateDefaultNpmLocation2, throttleLimit, log2) {
    const libDirectory = (0, typescript_exports.getDirectoryPath)((0, typescript_exports.normalizePath)(typescript_exports.sys.getExecutingFilePath()));
    super(
      typescript_exports.sys,
      globalTypingsCacheLocation2,
      typingSafeListLocation2 ? (0, typescript_exports.toPath)(typingSafeListLocation2, "", (0, typescript_exports.createGetCanonicalFileName)(typescript_exports.sys.useCaseSensitiveFileNames)) : (0, typescript_exports.toPath)("typingSafeList.json", libDirectory, (0, typescript_exports.createGetCanonicalFileName)(typescript_exports.sys.useCaseSensitiveFileNames)),
      typesMapLocation2 ? (0, typescript_exports.toPath)(typesMapLocation2, "", (0, typescript_exports.createGetCanonicalFileName)(typescript_exports.sys.useCaseSensitiveFileNames)) : (0, typescript_exports.toPath)("typesMap.json", libDirectory, (0, typescript_exports.createGetCanonicalFileName)(typescript_exports.sys.useCaseSensitiveFileNames)),
      throttleLimit,
      log2
    );
    this.npmPath = npmLocation2 !== void 0 ? npmLocation2 : getDefaultNPMLocation(process.argv[0], validateDefaultNpmLocation2, this.installTypingHost);
    if (this.npmPath.includes(" ") && this.npmPath[0] !== `"`) {
      this.npmPath = `"${this.npmPath}"`;
    }
    if (this.log.isEnabled()) {
      this.log.writeLine(`Process id: ${process.pid}`);
      this.log.writeLine(`NPM location: ${this.npmPath} (explicit '${typescript_exports.server.Arguments.NpmLocation}' ${npmLocation2 === void 0 ? "not " : ""} provided)`);
      this.log.writeLine(`validateDefaultNpmLocation: ${validateDefaultNpmLocation2}`);
    }
    this.ensurePackageDirectoryExists(globalTypingsCacheLocation2);
    try {
      if (this.log.isEnabled()) {
        this.log.writeLine(`Updating ${typesRegistryPackageName} npm package...`);
      }
      this.execSyncAndLog(`${this.npmPath} install --ignore-scripts ${typesRegistryPackageName}@${this.latestDistTag}`, { cwd: globalTypingsCacheLocation2 });
      if (this.log.isEnabled()) {
        this.log.writeLine(`Updated ${typesRegistryPackageName} npm package`);
      }
    } catch (e) {
      if (this.log.isEnabled()) {
        this.log.writeLine(`Error updating ${typesRegistryPackageName} package: ${e.message}`);
      }
      this.delayedInitializationError = {
        kind: "event::initializationFailed",
        message: e.message,
        stack: e.stack
      };
    }
    this.typesRegistry = loadTypesRegistryFile(getTypesRegistryFileLocation(globalTypingsCacheLocation2), this.installTypingHost, this.log);
  }
  handleRequest(req) {
    if (this.delayedInitializationError) {
      this.sendResponse(this.delayedInitializationError);
      this.delayedInitializationError = void 0;
    }
    super.handleRequest(req);
  }
  sendResponse(response) {
    if (this.log.isEnabled()) {
      this.log.writeLine(`Sending response:${typescript_exports.server.stringifyIndented(response)}`);
    }
    process.send(response);
    if (this.log.isEnabled()) {
      this.log.writeLine(`Response has been sent.`);
    }
  }
  installWorker(requestId, packageNames, cwd, onRequestCompleted) {
    if (this.log.isEnabled()) {
      this.log.writeLine(`#${requestId} with cwd: ${cwd} arguments: ${JSON.stringify(packageNames)}`);
    }
    const start = Date.now();
    const hasError = typescript_exports.server.typingsInstaller.installNpmPackages(this.npmPath, typescript_exports.version, packageNames, (command) => this.execSyncAndLog(command, { cwd }));
    if (this.log.isEnabled()) {
      this.log.writeLine(`npm install #${requestId} took: ${Date.now() - start} ms`);
    }
    onRequestCompleted(!hasError);
  }
  /** Returns 'true' in case of error. */
  execSyncAndLog(command, options) {
    if (this.log.isEnabled()) {
      this.log.writeLine(`Exec: ${command}`);
    }
    try {
      const stdout = (0, import_child_process.execSync)(command, { ...options, encoding: "utf-8" });
      if (this.log.isEnabled()) {
        this.log.writeLine(`    Succeeded. stdout:${indent(typescript_exports.sys.newLine, stdout)}`);
      }
      return false;
    } catch (error) {
      const { stdout, stderr } = error;
      this.log.writeLine(`    Failed. stdout:${indent(typescript_exports.sys.newLine, stdout)}${typescript_exports.sys.newLine}    stderr:${indent(typescript_exports.sys.newLine, stderr)}`);
      return true;
    }
  }
};
var logFilePath = typescript_exports.server.findArgument(typescript_exports.server.Arguments.LogFile);
var globalTypingsCacheLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.GlobalCacheLocation);
var typingSafeListLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.TypingSafeListLocation);
var typesMapLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.TypesMapLocation);
var npmLocation = typescript_exports.server.findArgument(typescript_exports.server.Arguments.NpmLocation);
var validateDefaultNpmLocation = typescript_exports.server.hasArgument(typescript_exports.server.Arguments.ValidateDefaultNpmLocation);
var log = new FileLog(logFilePath);
if (log.isEnabled()) {
  process.on("uncaughtException", (e) => {
    log.writeLine(`Unhandled exception: ${e} at ${e.stack}`);
  });
}
process.on("disconnect", () => {
  if (log.isEnabled()) {
    log.writeLine(`Parent process has exited, shutting down...`);
  }
  process.exit(0);
});
var installer;
process.on("message", (req) => {
  installer ?? (installer = new NodeTypingsInstaller(
    globalTypingsCacheLocation,
    typingSafeListLocation,
    typesMapLocation,
    npmLocation,
    validateDefaultNpmLocation,
    /*throttleLimit*/
    5,
    log
  ));
  installer.handleRequest(req);
});
function indent(newline, str) {
  return str && str.length ? `${newline}    ` + str.replace(/\r?\n/, `${newline}    `) : "";
}
//# sourceMappingURL=_typingsInstaller.js.map
