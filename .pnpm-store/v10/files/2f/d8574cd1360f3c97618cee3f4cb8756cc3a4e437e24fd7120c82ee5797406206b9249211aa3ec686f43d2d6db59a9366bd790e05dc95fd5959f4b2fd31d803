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
var seed_exports = {};
__export(seed_exports, {
  defaultSeedFile: () => defaultSeedFile,
  ensureSeedFile: () => ensureSeedFile,
  findSeedFile: () => findSeedFile,
  seedFileContent: () => seedFileContent,
  seedProject: () => seedProject
});
module.exports = __toCommonJS(seed_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_runner = require("../../runner");
const { mkdirIfNeeded } = require("playwright-core/lib/coreBundle").utils;
function seedProject(fullConfig, projectName) {
  if (!projectName)
    return import_runner.projectUtils.findTopLevelProjects(fullConfig)[0];
  const project = fullConfig.projects.find((p) => p.project.name === projectName);
  if (!project)
    throw new Error(`Project ${projectName} not found`);
  return project;
}
async function findSeedFile(project) {
  const files = await import_runner.projectUtils.collectFilesForProject(project);
  return files.find((file) => import_path.default.basename(file).includes("seed"));
}
function defaultSeedFile(project) {
  const testDir = project.project.testDir;
  return import_path.default.resolve(testDir, "seed.spec.ts");
}
async function ensureSeedFile(project) {
  const seedFile = await findSeedFile(project);
  if (seedFile)
    return seedFile;
  const seedFilePath = defaultSeedFile(project);
  await mkdirIfNeeded(seedFilePath);
  await import_fs.default.promises.writeFile(seedFilePath, seedFileContent);
  return seedFilePath;
}
const seedFileContent = `import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
  });
});
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultSeedFile,
  ensureSeedFile,
  findSeedFile,
  seedFileContent,
  seedProject
});
