"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPruneHelp = printPruneHelp;
exports.printHelp = printHelp;
exports.printSuppressHelp = printSuppressHelp;
const wrap_words_to_lines_1 = require("./wrap-words-to-lines");
function printPruneHelp() {
    const help = `eslint-bulk prune

Usage:

eslint-bulk prune

This command is a thin wrapper around ESLint that communicates with @rushstack/eslint-patch to delete all unused suppression entries in all .eslint-bulk-suppressions.json files under the current working directory.`;
    const wrapped = (0, wrap_words_to_lines_1.wrapWordsToLines)(help);
    for (const line of wrapped) {
        console.log(line);
    }
}
function printHelp() {
    const help = `eslint-bulk <command>

Usage:

eslint-bulk suppress --rule RULENAME1 [--rule RULENAME2...] PATH1 [PATH2...]
eslint-bulk suppress --all PATH1 [PATH2...]
eslint-bulk suppress --help

eslint-bulk prune
eslint-bulk prune --help

eslint-bulk --help

This command line tool is a thin wrapper around ESLint that communicates with @rushstack/eslint-patch to suppress or prune unused suppressions in the local .eslint-bulk-suppressions.json file.

Commands:
  eslint-bulk suppress [options] <path...>
    Use this command to generate a new .eslint-bulk-suppressions.json file or add suppression entries to the existing file. Specify the files and rules you want to suppress.
    Please run "eslint-bulk suppress --help" to learn more.

  eslint-bulk prune
    Use this command to delete all unused suppression entries in all .eslint-bulk-suppressions.json files under the current working directory.
    Please run "eslint-bulk prune --help" to learn more.
`;
    const wrapped = (0, wrap_words_to_lines_1.wrapWordsToLines)(help);
    for (const line of wrapped) {
        console.log(line);
    }
}
function printSuppressHelp() {
    const help = `eslint-bulk suppress [options] <path...>

Usage:

eslint-bulk suppress --rule RULENAME1 [--rule RULENAME2...] PATH1 [PATH2...]
eslint-bulk suppress --all PATH1 [PATH2...]
eslint-bulk suppress --help

This command is a thin wrapper around ESLint that communicates with @rushstack/eslint-patch to either generate a new .eslint-bulk-suppressions.json file or add suppression entries to the existing file. Specify the files and rules you want to suppress.

Argument:
  <path...>
    Glob patterns for paths to suppress, same as eslint files argument. Should be relative to the project root.

Options:
  -h, -H, --help
    Display this help message.

  -R, --rule
    The full name of the ESLint rule you want to bulk-suppress. Specify multiple rules with --rule NAME1 --rule RULENAME2.

  -A, --all
    Bulk-suppress all rules in the specified file patterns.`;
    const wrapped = (0, wrap_words_to_lines_1.wrapWordsToLines)(help);
    for (const line of wrapped) {
        console.log(line);
    }
}
//# sourceMappingURL=print-help.js.map