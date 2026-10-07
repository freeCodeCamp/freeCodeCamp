#!/usr/bin/env node
// Simple CLI for KaTeX.
// Reads TeX from stdin, outputs HTML to stdout.
// To run this from the repository, you must first build KaTeX by running
// `yarn` and `yarn build`.

/* eslint no-console:0 */

let katex;
try {
    katex = require("./");
} catch (e) {
    console.error(
        "KaTeX could not import, likely because dist/katex.js is missing.");
    console.error("Please run 'yarn' and 'yarn build' before running");
    console.error("cli.js from the KaTeX repository.");
    console.error();
    throw e;
}
const {version} = require("./package.json");
const fs = require("fs");

const {program} = require("commander");
program.version(version);

for (const prop in katex.SETTINGS_SCHEMA) {
    if (katex.SETTINGS_SCHEMA.hasOwnProperty(prop)) {
        const opt = katex.SETTINGS_SCHEMA[prop];
        if (opt.cli !== false) {
            program.option(opt.cli || "--" + prop, opt.cliDescription ||
                opt.description, opt.cliProcessor, opt.cliDefault);
        }
    }
}
program.option("-f, --macro-file <path>",
        "Read macro definitions, one per line, from the given file.")
    .option("-i, --input <path>", "Read LaTeX input from the given file.")
    .option("-o, --output <path>", "Write html output to the given file.");

let options;

function readMacros() {
    if (options.macroFile) {
        fs.readFile(options.macroFile, "utf-8", function(err, data) {
            if (err) {throw err;}
            splitMacros(data.toString().split('\n'));
        });
    } else {
        splitMacros([]);
    }
}

function splitMacros(macroStrings) {
    // Override macros from macro file (if any)
    // with macros from command line (if any)
    macroStrings = macroStrings.concat(options.macro);

    const macros = {};

    for (const m of macroStrings) {
        const i = m.search(":");
        if (i !== -1) {
            macros[m.substring(0, i).trim()] = m.substring(i + 1).trim();
        }
    }

    options.macros = macros;
    readInput();
}

function readInput() {
    let input = "";

    if (options.input) {
        fs.readFile(options.input, "utf-8", function(err, data) {
            if (err) {throw err;}
            input = data.toString();
            writeOutput(input);
        });
    } else {
        process.stdin.on("data", function(chunk) {
            input += chunk.toString();
        });

        process.stdin.on("end", function() {
            writeOutput(input);
        });
    }
}

function writeOutput(input) {
    // --format specifies the KaTeX output
    const outputFile = options.output;
    options.output = options.format;

    const output = katex.renderToString(input, options) + "\n";

    if (outputFile) {
        fs.writeFile(outputFile, output, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    } else {
        console.log(output);
    }
}

if (require.main !== module) {
    module.exports = program;
} else {
    options = program.parse(process.argv).opts();
    readMacros();
}
