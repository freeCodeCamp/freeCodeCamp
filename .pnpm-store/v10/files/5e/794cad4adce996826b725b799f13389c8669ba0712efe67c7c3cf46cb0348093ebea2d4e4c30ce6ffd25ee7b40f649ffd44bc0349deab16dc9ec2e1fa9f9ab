"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruneAsync = pruneAsync;
const node_fs_1 = __importDefault(require("node:fs"));
const print_help_1 = require("./utils/print-help");
const runEslint_1 = require("./runEslint");
const constants_1 = require("../constants");
const bulk_suppressions_file_1 = require("../bulk-suppressions-file");
async function pruneAsync() {
    const args = process.argv.slice(3);
    if (args.includes('--help') || args.includes('-h')) {
        (0, print_help_1.printPruneHelp)();
        process.exit(0);
    }
    if (args.length > 0) {
        throw new Error(`@rushstack/eslint-bulk: Unknown arguments: ${args.join(' ')}`);
    }
    const normalizedCwd = process.cwd().replace(/\\/g, '/');
    const allFiles = await getAllFilesWithExistingSuppressionsForCwdAsync(normalizedCwd);
    if (allFiles.length > 0) {
        process.env[constants_1.ESLINT_BULK_PRUNE_ENV_VAR_NAME] = '1';
        console.log(`Pruning suppressions for ${allFiles.length} files...`);
        await (0, runEslint_1.runEslintAsync)(allFiles, 'prune');
    }
    else {
        console.log('No files with existing suppressions found.');
        (0, bulk_suppressions_file_1.deleteBulkSuppressionsFileInEslintConfigFolder)(normalizedCwd);
    }
}
async function getAllFilesWithExistingSuppressionsForCwdAsync(normalizedCwd) {
    const { jsonObject: bulkSuppressionsConfigJson } = (0, bulk_suppressions_file_1.getSuppressionsConfigForEslintConfigFolderPath)(normalizedCwd);
    const allFiles = new Set();
    for (const { file: filePath } of bulkSuppressionsConfigJson.suppressions) {
        allFiles.add(filePath);
    }
    const allFilesArray = Array.from(allFiles);
    const allExistingFiles = [];
    // TODO: limit parallelism here with something similar to `Async.forEachAsync` from `node-core-library`.
    await Promise.all(allFilesArray.map(async (filePath) => {
        try {
            await node_fs_1.default.promises.access(filePath, node_fs_1.default.constants.F_OK);
            allExistingFiles.push(filePath);
        }
        catch (_a) {
            // Doesn't exist - ignore
        }
    }));
    console.log(`Found ${allExistingFiles.length} files with existing suppressions.`);
    const deletedCount = allFilesArray.length - allExistingFiles.length;
    if (deletedCount > 0) {
        console.log(`${deletedCount} files with suppressions were deleted.`);
    }
    return allExistingFiles;
}
//# sourceMappingURL=prune.js.map