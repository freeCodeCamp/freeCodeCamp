#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the eslint command.
 * @author Nicholas C. Zakas
 */

/* eslint no-console:off */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const useStdIn = (process.argv.indexOf("--stdin") > -1),
    init = (process.argv.indexOf("--init") > -1),
    debug = (process.argv.indexOf("--debug") > -1);

// must do this initialization *before* other requires in order to work
if (debug) {
    require("debug").enable("eslint:*,-eslint:code-path");
}

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// now we can safely include the other modules that use debug
const concat = require("concat-stream"),
    cli = require("../lib/cli"),
    path = require("path"),
    fs = require("fs");

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

process.once("uncaughtException", err => {

    // lazy load
    const lodash = require("lodash");

    if (typeof err.messageTemplate === "string" && err.messageTemplate.length > 0) {
        const template = lodash.template(fs.readFileSync(path.resolve(__dirname, `../messages/${err.messageTemplate}.txt`), "utf-8"));

        console.log("\nOops! Something went wrong! :(");
        console.log(`\n${template(err.messageData || {})}`);
    } else {
        console.log(err.message);
        console.log(err.stack);
    }

    process.exitCode = 1;
});

if (useStdIn) {
    process.stdin.pipe(concat({ encoding: "string" }, text => {
        process.exitCode = cli.execute(process.argv, text);
    }));
} else if (init) {
    const configInit = require("../lib/config/config-initializer");

    configInit.initializeConfig(err => {
        if (err) {
            process.exitCode = 1;
            console.error(err.message);
            console.error(err.stack);
        } else {
            process.exitCode = 0;
        }
    });
} else {
    process.exitCode = cli.execute(process.argv);
}
