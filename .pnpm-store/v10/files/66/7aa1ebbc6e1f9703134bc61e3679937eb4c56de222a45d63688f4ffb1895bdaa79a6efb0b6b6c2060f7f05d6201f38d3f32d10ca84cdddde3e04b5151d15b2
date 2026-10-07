"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const _patch_base_1 = require("../_patch-base");
const path_utils_1 = require("./path-utils");
const bulk_suppressions_patch_1 = require("./bulk-suppressions-patch");
const generate_patched_file_1 = require("./generate-patched-file");
const constants_1 = require("./constants");
if (!_patch_base_1.eslintFolder) {
    console.error('@rushstack/eslint-patch/eslint-bulk-suppressions: Could not find ESLint installation to patch.');
    process.exit(1);
}
const eslintBulkDetectEnvVarValue = process.env[constants_1.ESLINT_BULK_DETECT_ENV_VAR_NAME];
if (eslintBulkDetectEnvVarValue === 'true' || eslintBulkDetectEnvVarValue === '1') {
    (0, path_utils_1.findAndConsoleLogPatchPathCli)();
    process.exit(0);
}
const pathToLinterJS = (0, path_utils_1.getPathToLinterJS)();
process.env[constants_1.ESLINT_BULK_PATCH_PATH_ENV_VAR_NAME] = require.resolve('./bulk-suppressions-patch');
const pathToGeneratedPatch = (0, path_utils_1.ensurePathToGeneratedPatch)();
(0, generate_patched_file_1.generatePatchedLinterJsFileIfDoesNotExist)(pathToLinterJS, pathToGeneratedPatch, _patch_base_1.eslintPackageVersion);
const { Linter: LinterPatch } = require(pathToGeneratedPatch);
LinterPatch.prototype.verify = (0, bulk_suppressions_patch_1.extendVerifyFunction)(LinterPatch.prototype.verify);
const { Linter } = require(pathToLinterJS);
(0, bulk_suppressions_patch_1.patchClass)(Linter, LinterPatch);
//# sourceMappingURL=index.js.map