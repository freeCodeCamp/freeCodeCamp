"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const prune_1 = require("./prune");
const suppress_1 = require("./suppress");
const is_correct_cwd_1 = require("./utils/is-correct-cwd");
const print_help_1 = require("./utils/print-help");
if (process.argv.includes('-h') || process.argv.includes('-H') || process.argv.includes('--help')) {
    (0, print_help_1.printHelp)();
    process.exit(0);
}
if (process.argv.length < 3) {
    (0, print_help_1.printHelp)();
    process.exit(1);
}
if (!(0, is_correct_cwd_1.isCorrectCwd)(process.cwd())) {
    console.error('@rushstack/eslint-bulk: Please call this command from the directory that contains .eslintrc.js or .eslintrc.cjs');
    process.exit(1);
}
const subcommand = process.argv[2];
let processPromise;
switch (subcommand) {
    case 'suppress': {
        processPromise = (0, suppress_1.suppressAsync)();
        break;
    }
    case 'prune': {
        processPromise = (0, prune_1.pruneAsync)();
        break;
    }
    default: {
        console.error('@rushstack/eslint-bulk: Unknown subcommand: ' + subcommand);
        process.exit(1);
    }
}
processPromise.catch((e) => {
    if (e instanceof Error) {
        console.error(e.message);
        process.exit(1);
    }
    throw e;
});
//# sourceMappingURL=start.js.map