"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withoutProjectParserOptions = exports.version = exports.typescriptVersionIsAtLeast = exports.simpleTraverse = exports.clearCandidateTSConfigRootDirs = exports.addCandidateTSConfigRootDir = exports.parseAndGenerateServices = exports.parse = exports.TSError = exports.createProgram = exports.getCanonicalFileName = void 0;
__exportStar(require("./clear-caches"), exports);
__exportStar(require("./create-program/getScriptKind"), exports);
var shared_1 = require("./create-program/shared");
Object.defineProperty(exports, "getCanonicalFileName", { enumerable: true, get: function () { return shared_1.getCanonicalFileName; } });
var useProvidedPrograms_1 = require("./create-program/useProvidedPrograms");
Object.defineProperty(exports, "createProgram", { enumerable: true, get: function () { return useProvidedPrograms_1.createProgramFromConfigFile; } });
__exportStar(require("./getModifiers"), exports);
var node_utils_1 = require("./node-utils");
Object.defineProperty(exports, "TSError", { enumerable: true, get: function () { return node_utils_1.TSError; } });
var parser_1 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_1.parse; } });
Object.defineProperty(exports, "parseAndGenerateServices", { enumerable: true, get: function () { return parser_1.parseAndGenerateServices; } });
var candidateTSConfigRootDirs_1 = require("./parseSettings/candidateTSConfigRootDirs");
Object.defineProperty(exports, "addCandidateTSConfigRootDir", { enumerable: true, get: function () { return candidateTSConfigRootDirs_1.addCandidateTSConfigRootDir; } });
Object.defineProperty(exports, "clearCandidateTSConfigRootDirs", { enumerable: true, get: function () { return candidateTSConfigRootDirs_1.clearCandidateTSConfigRootDirs; } });
var simple_traverse_1 = require("./simple-traverse");
Object.defineProperty(exports, "simpleTraverse", { enumerable: true, get: function () { return simple_traverse_1.simpleTraverse; } });
__exportStar(require("./ts-estree"), exports);
var version_check_1 = require("./version-check");
Object.defineProperty(exports, "typescriptVersionIsAtLeast", { enumerable: true, get: function () { return version_check_1.typescriptVersionIsAtLeast; } });
var version_1 = require("./version");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return version_1.version; } });
var withoutProjectParserOptions_1 = require("./withoutProjectParserOptions");
Object.defineProperty(exports, "withoutProjectParserOptions", { enumerable: true, get: function () { return withoutProjectParserOptions_1.withoutProjectParserOptions; } });
