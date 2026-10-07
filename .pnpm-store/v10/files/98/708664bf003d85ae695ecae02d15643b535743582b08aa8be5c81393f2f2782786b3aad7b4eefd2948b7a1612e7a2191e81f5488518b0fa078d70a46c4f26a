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
var reportActions_exports = {};
__export(reportActions_exports, {
  mergeReports: () => mergeReports,
  showReport: () => showReport
});
module.exports = __toCommonJS(reportActions_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_common = require("../common");
var import_runner = require("../runner");
const { gracefullyProcessExitDoNotHang } = require("playwright-core/lib/coreBundle").utils;
async function showReport(report, host, port) {
  await import_runner.html.showHTMLReport(report, host, port);
}
async function mergeReports(reportDir, opts) {
  const configFile = opts.config;
  const config = configFile ? await import_common.configLoader.loadConfigFromFile(configFile) : await import_common.configLoader.loadEmptyConfigForMergeReports();
  const dir = import_path.default.resolve(process.cwd(), reportDir || "");
  const dirStat = await import_fs.default.promises.stat(dir).catch((e) => null);
  if (!dirStat)
    throw new Error("Directory does not exist: " + dir);
  if (!dirStat.isDirectory())
    throw new Error(`"${dir}" is not a directory`);
  let reporterDescriptions = resolveReporterOption(opts.reporter);
  if (!reporterDescriptions && configFile)
    reporterDescriptions = config.config.reporter;
  if (!reporterDescriptions)
    reporterDescriptions = [[import_common.config.defaultReporter]];
  const rootDirOverride = configFile ? config.config.rootDir : void 0;
  await import_runner.merge.createMergedReport(config, dir, reporterDescriptions, rootDirOverride);
  gracefullyProcessExitDoNotHang(0);
}
function resolveReporterOption(reporter) {
  if (!reporter || !reporter.length)
    return void 0;
  return reporter.split(",").map((r) => [resolveReporter(r)]);
}
function resolveReporter(id) {
  if (import_common.builtInReporters.includes(id))
    return id;
  const localPath = import_path.default.resolve(process.cwd(), id);
  if (import_fs.default.existsSync(localPath))
    return localPath;
  return require.resolve(id, { paths: [process.cwd()] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mergeReports,
  showReport
});
