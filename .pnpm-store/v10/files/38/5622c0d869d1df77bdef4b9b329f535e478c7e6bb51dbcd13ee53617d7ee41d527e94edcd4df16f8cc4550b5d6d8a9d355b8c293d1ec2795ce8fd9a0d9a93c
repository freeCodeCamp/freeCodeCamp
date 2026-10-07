"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndConsoleLogPatchPathCli = findAndConsoleLogPatchPathCli;
exports.getPathToLinterJS = getPathToLinterJS;
exports.ensurePathToGeneratedPatch = ensurePathToGeneratedPatch;
const node_fs_1 = __importDefault(require("node:fs"));
const node_os_1 = __importDefault(require("node:os"));
const _patch_base_1 = require("../_patch-base");
const constants_1 = require("./constants");
const package_json_1 = __importDefault(require("../../package.json"));
const CURRENT_PACKAGE_VERSION = package_json_1.default.version;
function findAndConsoleLogPatchPathCli() {
    const eslintBulkDetectEnvVarValue = process.env[constants_1.ESLINT_BULK_DETECT_ENV_VAR_NAME];
    if (eslintBulkDetectEnvVarValue !== 'true' && eslintBulkDetectEnvVarValue !== '1') {
        return;
    }
    const configuration = {
        /**
         * `@rushstack/eslint-bulk` should report an error if its package.json is older than this number
         */
        minCliVersion: '0.0.0',
        /**
         * `@rushstack/eslint-bulk` will invoke this entry point
         */
        cliEntryPoint: require.resolve('../exports/eslint-bulk')
    };
    console.log(constants_1.ESLINT_BULK_STDOUT_START_DELIMETER + JSON.stringify(configuration) + constants_1.ESLINT_BULK_STDOUT_END_DELIMETER);
}
function getPathToLinterJS() {
    if (!_patch_base_1.eslintFolder) {
        throw new Error('Cannot find ESLint installation to patch.');
    }
    return `${_patch_base_1.eslintFolder}/lib/linter/linter.js`;
}
function ensurePathToGeneratedPatch() {
    const patchesFolderPath = `${node_os_1.default.tmpdir()}/rushstack-eslint-bulk-${CURRENT_PACKAGE_VERSION}/patches`;
    node_fs_1.default.mkdirSync(patchesFolderPath, { recursive: true });
    const pathToGeneratedPatch = `${patchesFolderPath}/linter-patch-v${_patch_base_1.eslintPackageVersion}.js`;
    return pathToGeneratedPatch;
}
//# sourceMappingURL=path-utils.js.map