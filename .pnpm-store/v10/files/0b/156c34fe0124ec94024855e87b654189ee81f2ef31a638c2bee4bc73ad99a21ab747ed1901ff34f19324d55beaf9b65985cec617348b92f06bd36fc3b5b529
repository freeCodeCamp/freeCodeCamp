"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var jestSnapshotSerializer_exports = {};
__export(jestSnapshotSerializer_exports, {
  default: () => jestSnapshotSerializer_default
});
module.exports = __toCommonJS(jestSnapshotSerializer_exports);
var import_chunk_IPLRRT6O = require("../chunk-IPLRRT6O.js");
var import_chunk_7MLUNQIZ = require("../chunk-7MLUNQIZ.js");
var import_chunk_2ESYSVXG = require("../chunk-2ESYSVXG.js");
var require_jestSnapshotSerializer = (0, import_chunk_2ESYSVXG.__commonJS)({
  "src/test-utils/jestSnapshotSerializer.js"(exports, module2) {
    var path = (0, import_chunk_2ESYSVXG.__require)("node:path");
    var { stripVTControlCharacters } = (0, import_chunk_2ESYSVXG.__require)("node:util");
    var { binaryTargetRegex } = ((0, import_chunk_IPLRRT6O.init_binaryTargetRegex)(), (0, import_chunk_2ESYSVXG.__toCommonJS)(import_chunk_IPLRRT6O.binaryTargetRegex_exports));
    var pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
    function normalizePrismaPaths(str) {
      return str.replace(/prisma\\([\w-]+)\.prisma/g, "prisma/$1.prisma").replace(/prisma\\seed\.ts/g, "prisma/seed.ts").replace(/custom-folder\\seed\.js/g, "custom-folder/seed.js");
    }
    function normalizeLogs(str) {
      return str.replace(
        /Started query engine http server on http:\/\/127\.0\.0\.1:\d{1,5}/g,
        "Started query engine http server on http://127.0.0.1:00000"
      ).replace(/Starting a postgresql pool with \d+ connections./g, "Starting a postgresql pool with XX connections.");
    }
    function normalizeTmpDir(str) {
      return str.replace(/\/tmp\/([a-z0-9]+)\//g, "/tmp/dir/");
    }
    function trimErrorPaths(str) {
      const parentDir = path.dirname(path.dirname(path.dirname(__dirname)));
      return str.replaceAll(parentDir, "");
    }
    function normalizeToUnixPaths(str) {
      return str.replaceAll(path.sep, "/");
    }
    function normalizeGitHubLinks(str) {
      return str.replace(/https:\/\/github.com\/prisma\/prisma(-client-js)?\/issues\/new\S+/, "TEST_GITHUB_LINK");
    }
    function normalizeTsClientStackTrace(str) {
      return str.replace(/([/\\]client[/\\]src[/\\]__tests__[/\\].*test\.ts)(:\d*:\d*)/, "$1:0:0").replace(/([/\\]client[/\\]tests[/\\]functional[/\\].*\.ts)(:\d*:\d*)/, "$1:0:0");
    }
    function removePlatforms(str) {
      return str.replace(binaryTargetRegex, "TEST_PLATFORM");
    }
    function normalizeNodeApiLibFilePath(str) {
      return str.replace(
        /((lib)?query_engine-TEST_PLATFORM\.)(.*)(\.node)/g,
        "libquery_engine-TEST_PLATFORM.LIBRARY_TYPE.node"
      );
    }
    function normalizeBinaryFilePath(str) {
      return str.replace(/\.exe(\s+)?(\W.*)/g, "$1$2").replace(/\.exe$/g, "");
    }
    function normalizeMigrateTimestamps(str) {
      return str.replace(/(?<!\d)\d{14}(?!\d)/g, "20201231000000");
    }
    function normalizeDbUrl(str) {
      return str.replace(/(localhost|postgres|mysql|mssql|mongodb_migrate|cockroachdb):(\d+)/g, "localhost:$2");
    }
    function normalizeRustError(str) {
      return str.replace(/\/rustc\/(.+)\//g, "/rustc/hash/").replace(/(\[.*)(:\d*:\d*)(\])/g, "[/some/rust/path:0:0$3");
    }
    function normalizeRustCodeLocation(str) {
      return str.replace(/(\w+\.rs):(\d+):(\d+)/g, "$1:0:0");
    }
    function normalizeArtificialPanic(str) {
      return str.replace(/(Command failed with exit code 101:) (.+) /g, "$1 prisma-engines-path ");
    }
    function normalizeTime(str) {
      return str.replace(/ \d+ms/g, " XXXms").replace(/ \d+(\.\d+)?s/g, " XXXms");
    }
    function prepareSchemaForSnapshot(str) {
      if (!str.includes("tmp/prisma-tests/integration-test")) return str;
      const urlRegex = /url\s*=\s*.+/;
      const outputRegex = /output\s*=\s*.+/;
      return str.split("\n").map((line) => {
        const urlMatch = urlRegex.exec(line);
        if (urlMatch) {
          return `${line.slice(0, urlMatch.index)}url = "***"`;
        }
        const outputMatch = outputRegex.exec(line);
        if (outputMatch) {
          return `${line.slice(0, outputMatch.index)}output = "***"`;
        }
        return line;
      }).join("\n");
    }
    function wrapWithQuotes(str) {
      return `"${str}"`;
    }
    module2.exports = {
      // Expected by Jest
      test(value) {
        return typeof value === "string" || value instanceof Error;
      },
      serialize(value) {
        const message = typeof value === "string" ? value : value instanceof Error ? value.message : "";
        return pipe(
          stripVTControlCharacters,
          // integration-tests pkg
          prepareSchemaForSnapshot,
          // Generic
          normalizeTmpDir,
          normalizeTime,
          // From Client package
          normalizeGitHubLinks,
          removePlatforms,
          normalizeNodeApiLibFilePath,
          normalizeBinaryFilePath,
          normalizeTsClientStackTrace,
          trimErrorPaths,
          normalizePrismaPaths,
          normalizeLogs,
          // remove windows \\
          normalizeToUnixPaths,
          // From Migrate/CLI package
          normalizeDbUrl,
          normalizeRustError,
          normalizeRustCodeLocation,
          normalizeMigrateTimestamps,
          // artificial panic
          normalizeArtificialPanic,
          wrapWithQuotes
        )(message);
      }
    };
  }
});
var jestSnapshotSerializer_default = require_jestSnapshotSerializer();
