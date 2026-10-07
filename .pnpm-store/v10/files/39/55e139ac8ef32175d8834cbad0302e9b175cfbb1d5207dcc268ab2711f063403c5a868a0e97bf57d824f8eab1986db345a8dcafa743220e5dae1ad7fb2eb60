"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuppressionsConfigForEslintConfigFolderPath = getSuppressionsConfigForEslintConfigFolderPath;
exports.getAllBulkSuppressionsConfigsByEslintConfigFolderPath = getAllBulkSuppressionsConfigsByEslintConfigFolderPath;
exports.writeSuppressionsJsonToFile = writeSuppressionsJsonToFile;
exports.deleteBulkSuppressionsFileInEslintConfigFolder = deleteBulkSuppressionsFileInEslintConfigFolder;
exports.serializeSuppression = serializeSuppression;
const node_fs_1 = __importDefault(require("node:fs"));
const constants_1 = require("./constants");
const IS_RUNNING_IN_VSCODE = process.env[constants_1.VSCODE_PID_ENV_VAR_NAME] !== undefined;
const TEN_SECONDS_MS = 10 * 1000;
const SUPPRESSIONS_JSON_FILENAME = '.eslint-bulk-suppressions.json';
function throwIfAnythingOtherThanNotExistError(e) {
    if ((e === null || e === void 0 ? void 0 : e.code) !== 'ENOENT') {
        // Throw an error if any other error than file not found
        throw e;
    }
}
const suppressionsJsonByFolderPath = new Map();
function getSuppressionsConfigForEslintConfigFolderPath(eslintConfigFolderPath) {
    const cachedSuppressionsConfig = suppressionsJsonByFolderPath.get(eslintConfigFolderPath);
    let shouldLoad;
    let suppressionsConfig;
    if (cachedSuppressionsConfig) {
        shouldLoad = IS_RUNNING_IN_VSCODE && cachedSuppressionsConfig.readTime < Date.now() - TEN_SECONDS_MS;
        suppressionsConfig = cachedSuppressionsConfig.suppressionsConfig;
    }
    else {
        shouldLoad = true;
    }
    if (shouldLoad) {
        const suppressionsPath = `${eslintConfigFolderPath}/${SUPPRESSIONS_JSON_FILENAME}`;
        let rawJsonFile;
        try {
            rawJsonFile = node_fs_1.default.readFileSync(suppressionsPath).toString();
        }
        catch (e) {
            throwIfAnythingOtherThanNotExistError(e);
        }
        if (!rawJsonFile) {
            suppressionsConfig = {
                serializedSuppressions: new Set(),
                jsonObject: { suppressions: [] },
                newSerializedSuppressions: new Set(),
                newJsonObject: { suppressions: [] }
            };
        }
        else {
            const jsonObject = JSON.parse(rawJsonFile);
            validateSuppressionsJson(jsonObject);
            const serializedSuppressions = new Set();
            for (const suppression of jsonObject.suppressions) {
                serializedSuppressions.add(serializeSuppression(suppression));
            }
            suppressionsConfig = {
                serializedSuppressions,
                jsonObject,
                newSerializedSuppressions: new Set(),
                newJsonObject: { suppressions: [] }
            };
        }
        suppressionsJsonByFolderPath.set(eslintConfigFolderPath, { readTime: Date.now(), suppressionsConfig });
    }
    return suppressionsConfig;
}
function getAllBulkSuppressionsConfigsByEslintConfigFolderPath() {
    const result = [];
    for (const [eslintConfigFolderPath, { suppressionsConfig }] of suppressionsJsonByFolderPath) {
        result.push([eslintConfigFolderPath, suppressionsConfig]);
    }
    return result;
}
function writeSuppressionsJsonToFile(eslintConfigFolderPath, suppressionsConfig) {
    suppressionsJsonByFolderPath.set(eslintConfigFolderPath, { readTime: Date.now(), suppressionsConfig });
    const suppressionsPath = `${eslintConfigFolderPath}/${SUPPRESSIONS_JSON_FILENAME}`;
    if (suppressionsConfig.jsonObject.suppressions.length === 0) {
        deleteFile(suppressionsPath);
    }
    else {
        suppressionsConfig.jsonObject.suppressions.sort(compareSuppressions);
        node_fs_1.default.writeFileSync(suppressionsPath, JSON.stringify(suppressionsConfig.jsonObject, undefined, 2));
    }
}
function deleteBulkSuppressionsFileInEslintConfigFolder(eslintConfigFolderPath) {
    const suppressionsPath = `${eslintConfigFolderPath}/${SUPPRESSIONS_JSON_FILENAME}`;
    deleteFile(suppressionsPath);
}
function deleteFile(filePath) {
    try {
        node_fs_1.default.unlinkSync(filePath);
    }
    catch (e) {
        throwIfAnythingOtherThanNotExistError(e);
    }
}
function serializeSuppression({ file, scopeId, rule }) {
    return `${file}|${scopeId}|${rule}`;
}
function compareSuppressions(a, b) {
    if (a.file < b.file) {
        return -1;
    }
    else if (a.file > b.file) {
        return 1;
    }
    else if (a.scopeId < b.scopeId) {
        return -1;
    }
    else if (a.scopeId > b.scopeId) {
        return 1;
    }
    else if (a.rule < b.rule) {
        return -1;
    }
    else if (a.rule > b.rule) {
        return 1;
    }
    else {
        return 0;
    }
}
function validateSuppressionsJson(json) {
    if (typeof json !== 'object') {
        throw new Error(`Invalid JSON object: ${JSON.stringify(json, null, 2)}`);
    }
    if (!json) {
        throw new Error('JSON object is null.');
    }
    const EXPECTED_ROOT_PROPERTY_NAMES = new Set(['suppressions']);
    for (const propertyName of Object.getOwnPropertyNames(json)) {
        if (!EXPECTED_ROOT_PROPERTY_NAMES.has(propertyName)) {
            throw new Error(`Unexpected property name: ${propertyName}`);
        }
    }
    const { suppressions } = json;
    if (!suppressions) {
        throw new Error('Missing "suppressions" property.');
    }
    if (!Array.isArray(suppressions)) {
        throw new Error('"suppressions" property is not an array.');
    }
    const EXPECTED_SUPPRESSION_PROPERTY_NAMES = new Set(['file', 'scopeId', 'rule']);
    for (const suppression of suppressions) {
        if (typeof suppression !== 'object') {
            throw new Error(`Invalid suppression: ${JSON.stringify(suppression, null, 2)}`);
        }
        if (!suppression) {
            throw new Error(`Suppression is null: ${JSON.stringify(suppression, null, 2)}`);
        }
        for (const propertyName of Object.getOwnPropertyNames(suppression)) {
            if (!EXPECTED_SUPPRESSION_PROPERTY_NAMES.has(propertyName)) {
                throw new Error(`Unexpected property name: ${propertyName}`);
            }
        }
        for (const propertyName of EXPECTED_SUPPRESSION_PROPERTY_NAMES) {
            if (!suppression.hasOwnProperty(propertyName)) {
                throw new Error(`Missing "${propertyName}" property in suppression: ${JSON.stringify(suppression, null, 2)}`);
            }
            else if (typeof suppression[propertyName] !== 'string') {
                throw new Error(`"${propertyName}" property in suppression is not a string: ${JSON.stringify(suppression, null, 2)}`);
            }
        }
    }
    return true;
}
//# sourceMappingURL=bulk-suppressions-file.js.map