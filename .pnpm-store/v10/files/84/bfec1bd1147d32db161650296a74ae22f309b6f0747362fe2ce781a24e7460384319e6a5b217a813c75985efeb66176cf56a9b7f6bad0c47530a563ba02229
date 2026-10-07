"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.suppressAsync = suppressAsync;
const print_help_1 = require("./utils/print-help");
const runEslint_1 = require("./runEslint");
const constants_1 = require("../constants");
async function suppressAsync() {
    const args = process.argv.slice(3);
    if (args.includes('--help') || args.includes('-h')) {
        (0, print_help_1.printSuppressHelp)();
        process.exit(0);
    }
    // Use reduce to create an object with all the parsed arguments
    const parsedArgs = args.reduce((acc, arg, index, arr) => {
        if (arg === '--rule') {
            // continue because next arg should be the rule
        }
        else if (index > 0 && arr[index - 1] === '--rule' && arr[index + 1]) {
            acc.rules.push(arg);
        }
        else if (arg === '--all') {
            acc.all = true;
        }
        else if (arg.startsWith('--')) {
            throw new Error(`@rushstack/eslint-bulk: Unknown option: ${arg}`);
        }
        else {
            acc.files.push(arg);
        }
        return acc;
    }, { rules: [], all: false, files: [] });
    if (parsedArgs.files.length === 0) {
        throw new Error('@rushstack/eslint-bulk: Files argument is required. Use glob patterns to specify files or use ' +
            '`.` to suppress all files for the specified rules.');
    }
    if (parsedArgs.rules.length === 0 && !parsedArgs.all) {
        throw new Error('@rushstack/eslint-bulk: Please specify at least one rule to suppress. Use --all to suppress all rules.');
    }
    // Find the index of the last argument that starts with '--'
    const lastOptionIndex = args
        .map((arg, i) => (arg.startsWith('--') ? i : -1))
        .reduce((lastIndex, currentIndex) => Math.max(lastIndex, currentIndex), -1);
    // Check if options come before files
    if (parsedArgs.files.some((file) => args.indexOf(file) < lastOptionIndex)) {
        throw new Error('@rushstack/eslint-bulk: Unable to parse command line arguments. All options should come before files argument.');
    }
    if (parsedArgs.all) {
        process.env[constants_1.ESLINT_BULK_SUPPRESS_ENV_VAR_NAME] = '*';
    }
    else if (parsedArgs.rules.length > 0) {
        process.env[constants_1.ESLINT_BULK_SUPPRESS_ENV_VAR_NAME] = parsedArgs.rules.join(',');
    }
    await (0, runEslint_1.runEslintAsync)(parsedArgs.files, 'suppress');
    if (parsedArgs.all) {
        console.log(`@rushstack/eslint-bulk: Successfully suppressed all rules for file(s) ${parsedArgs.files}`);
    }
    else if (parsedArgs.rules.length > 0) {
        console.log(`@rushstack/eslint-bulk: Successfully suppressed rules ${parsedArgs.rules} for file(s) ${parsedArgs.files}`);
    }
}
//# sourceMappingURL=suppress.js.map