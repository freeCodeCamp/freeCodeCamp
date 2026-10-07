"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBulkSuppress = shouldBulkSuppress;
exports.prune = prune;
exports.write = write;
exports.requireFromPathToLinterJS = requireFromPathToLinterJS;
exports.patchClass = patchClass;
exports.extendVerifyFunction = extendVerifyFunction;
const node_fs_1 = __importDefault(require("node:fs"));
const Guards = __importStar(require("./ast-guards"));
const _patch_base_1 = require("../_patch-base");
const constants_1 = require("./constants");
const bulk_suppressions_file_1 = require("./bulk-suppressions-file");
const ESLINT_CONFIG_FILENAMES = [
    'eslint.config.js',
    'eslint.config.cjs',
    'eslint.config.mjs',
    '.eslintrc.js',
    '.eslintrc.cjs'
    // Several other filenames are allowed, but this patch requires that it be loaded via a JS config file,
    // so we only need to check for the JS-based filenames
];
const SUPPRESSION_SYMBOL = Symbol('suppression');
const ESLINT_BULK_SUPPRESS_ENV_VAR_VALUE = process.env[constants_1.ESLINT_BULK_SUPPRESS_ENV_VAR_NAME];
const SUPPRESS_ALL_RULES = ESLINT_BULK_SUPPRESS_ENV_VAR_VALUE === '*';
const RULES_TO_SUPPRESS = ESLINT_BULK_SUPPRESS_ENV_VAR_VALUE
    ? new Set(ESLINT_BULK_SUPPRESS_ENV_VAR_VALUE.split(','))
    : undefined;
function getNodeName(node) {
    if (Guards.isClassDeclarationWithName(node)) {
        return node.id.name;
    }
    else if (Guards.isFunctionDeclarationWithName(node)) {
        return node.id.name;
    }
    else if (Guards.isClassExpressionWithName(node)) {
        return node.id.name;
    }
    else if (Guards.isFunctionExpressionWithName(node)) {
        return node.id.name;
    }
    else if (Guards.isNormalVariableDeclaratorWithAnonymousExpressionAssigned(node)) {
        return node.id.name;
    }
    else if (Guards.isNormalObjectPropertyWithAnonymousExpressionAssigned(node)) {
        return node.key.name;
    }
    else if (Guards.isNormalClassPropertyDefinitionWithAnonymousExpressionAssigned(node)) {
        return node.key.name;
    }
    else if (Guards.isNormalAssignmentPatternWithAnonymousExpressionAssigned(node)) {
        return node.left.name;
    }
    else if (Guards.isNormalMethodDefinition(node)) {
        return node.key.name;
    }
    else if (Guards.isTSEnumDeclaration(node)) {
        return node.id.name;
    }
    else if (Guards.isTSInterfaceDeclaration(node)) {
        return node.id.name;
    }
    else if (Guards.isTSTypeAliasDeclaration(node)) {
        return node.id.name;
    }
}
function calculateScopeId(node) {
    const scopeIds = [];
    for (let current = node; current; current = current.parent) {
        const scopeIdForASTNode = getNodeName(current);
        if (scopeIdForASTNode !== undefined) {
            scopeIds.unshift(scopeIdForASTNode);
        }
    }
    if (scopeIds.length === 0) {
        return '.';
    }
    else {
        return '.' + scopeIds.join('.');
    }
}
const eslintConfigPathByFileOrFolderPath = new Map();
function findEslintConfigFolderPathForNormalizedFileAbsolutePath(normalizedFilePath) {
    const cachedFolderPathForFilePath = eslintConfigPathByFileOrFolderPath.get(normalizedFilePath);
    if (cachedFolderPathForFilePath) {
        return cachedFolderPathForFilePath;
    }
    const normalizedFileFolderPath = normalizedFilePath.substring(0, normalizedFilePath.lastIndexOf('/'));
    const pathsToCache = [normalizedFilePath];
    let eslintConfigFolderPath;
    findEslintConfigFileLoop: for (let currentFolder = normalizedFileFolderPath; currentFolder; // 'something'.substring(0, -1) is ''
     currentFolder = currentFolder.substring(0, currentFolder.lastIndexOf('/'))) {
        const cachedEslintrcFolderPath = eslintConfigPathByFileOrFolderPath.get(currentFolder);
        if (cachedEslintrcFolderPath) {
            // Need to cache this result into the intermediate paths
            eslintConfigFolderPath = cachedEslintrcFolderPath;
            break;
        }
        pathsToCache.push(currentFolder);
        for (const eslintConfigFilename of ESLINT_CONFIG_FILENAMES) {
            if (node_fs_1.default.existsSync(`${currentFolder}/${eslintConfigFilename}`)) {
                eslintConfigFolderPath = currentFolder;
                break findEslintConfigFileLoop;
            }
        }
    }
    if (eslintConfigFolderPath) {
        for (const checkedFolder of pathsToCache) {
            eslintConfigPathByFileOrFolderPath.set(checkedFolder, eslintConfigFolderPath);
        }
        return eslintConfigFolderPath;
    }
    else {
        throw new Error(`Cannot locate an ESLint configuration file for ${normalizedFilePath}`);
    }
}
// One-line insert into the ruleContext report method to prematurely exit if the ESLint problem has been suppressed
function shouldBulkSuppress(params) {
    // Use this ENV variable to turn off eslint-bulk-suppressions functionality, default behavior is on
    if (process.env[constants_1.ESLINT_BULK_ENABLE_ENV_VAR_NAME] === 'false') {
        return false;
    }
    const { filename: fileAbsolutePath, currentNode, ruleId: rule, problem } = params;
    const normalizedFileAbsolutePath = fileAbsolutePath.replace(/\\/g, '/');
    const eslintConfigDirectory = findEslintConfigFolderPathForNormalizedFileAbsolutePath(normalizedFileAbsolutePath);
    const fileRelativePath = normalizedFileAbsolutePath.substring(eslintConfigDirectory.length + 1);
    const scopeId = calculateScopeId(currentNode);
    const suppression = { file: fileRelativePath, scopeId, rule };
    const config = (0, bulk_suppressions_file_1.getSuppressionsConfigForEslintConfigFolderPath)(eslintConfigDirectory);
    const serializedSuppression = (0, bulk_suppressions_file_1.serializeSuppression)(suppression);
    const currentNodeIsSuppressed = config.serializedSuppressions.has(serializedSuppression);
    if (currentNodeIsSuppressed || SUPPRESS_ALL_RULES || (RULES_TO_SUPPRESS === null || RULES_TO_SUPPRESS === void 0 ? void 0 : RULES_TO_SUPPRESS.has(suppression.rule))) {
        problem[SUPPRESSION_SYMBOL] = {
            suppression,
            serializedSuppression,
            config
        };
    }
    return process.env[constants_1.ESLINT_BULK_PRUNE_ENV_VAR_NAME] !== '1' && currentNodeIsSuppressed;
}
function prune() {
    for (const [eslintConfigFolderPath, suppressionsConfig] of (0, bulk_suppressions_file_1.getAllBulkSuppressionsConfigsByEslintConfigFolderPath)()) {
        if (suppressionsConfig) {
            const { newSerializedSuppressions, newJsonObject } = suppressionsConfig;
            const newSuppressionsConfig = {
                serializedSuppressions: newSerializedSuppressions,
                jsonObject: newJsonObject,
                newSerializedSuppressions: new Set(),
                newJsonObject: { suppressions: [] }
            };
            (0, bulk_suppressions_file_1.writeSuppressionsJsonToFile)(eslintConfigFolderPath, newSuppressionsConfig);
        }
    }
}
function write() {
    for (const [eslintrcFolderPath, suppressionsConfig] of (0, bulk_suppressions_file_1.getAllBulkSuppressionsConfigsByEslintConfigFolderPath)()) {
        if (suppressionsConfig) {
            (0, bulk_suppressions_file_1.writeSuppressionsJsonToFile)(eslintrcFolderPath, suppressionsConfig);
        }
    }
}
// utility function for linter-patch.js to make require statements that use relative paths in linter.js work in linter-patch.js
function requireFromPathToLinterJS(importPath) {
    if (!_patch_base_1.eslintFolder) {
        return require(importPath);
    }
    const pathToLinterFolder = `${_patch_base_1.eslintFolder}/lib/linter`;
    const moduleAbsolutePath = require.resolve(importPath, { paths: [pathToLinterFolder] });
    return require(moduleAbsolutePath);
}
function patchClass(originalClass, patchedClass) {
    // Get all the property names of the patched class prototype
    const patchedProperties = Object.getOwnPropertyNames(patchedClass.prototype);
    // Loop through all the properties
    for (const prop of patchedProperties) {
        // Override the property in the original class
        originalClass.prototype[prop] = patchedClass.prototype[prop];
    }
    // Handle getters and setters
    for (const [prop, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(patchedClass.prototype))) {
        if (descriptor.get || descriptor.set) {
            Object.defineProperty(originalClass.prototype, prop, descriptor);
        }
    }
}
/**
 * This returns a wrapped version of the "verify" function from ESLint's Linter class
 * that postprocesses rule violations that weren't suppressed by comments. This postprocessing
 * records suppressions that weren't otherwise suppressed by comments to be used
 * by the "suppress" and "prune" commands.
 */
function extendVerifyFunction(originalFn) {
    return function (...args) {
        const problems = originalFn.apply(this, args);
        if (problems) {
            for (const problem of problems) {
                if (problem[SUPPRESSION_SYMBOL]) {
                    const { serializedSuppression, suppression, config: { newSerializedSuppressions, jsonObject: { suppressions }, newJsonObject: { suppressions: newSuppressions } } } = problem[SUPPRESSION_SYMBOL];
                    if (!newSerializedSuppressions.has(serializedSuppression)) {
                        newSerializedSuppressions.add(serializedSuppression);
                        newSuppressions.push(suppression);
                        suppressions.push(suppression);
                    }
                }
            }
        }
        return problems;
    };
}
//# sourceMappingURL=bulk-suppressions-patch.js.map