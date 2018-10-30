#!/usr/bin/env node
/*
  Copyright JS Foundation and other contributors, https://js.foundation/

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint sloppy:true node:true rhino:true */

var fs, esprima, fname, forceFile, content, options, syntax;

if (typeof require === 'function') {
    fs = require('fs');
    try {
        esprima = require('esprima');
    } catch (e) {
        esprima = require('../');
    }
} else if (typeof load === 'function') {
    try {
        load('esprima.js');
    } catch (e) {
        load('../esprima.js');
    }
}

// Shims to Node.js objects when running under Rhino.
if (typeof console === 'undefined' && typeof process === 'undefined') {
    console = { log: print };
    fs = { readFileSync: readFile };
    process = { argv: arguments, exit: quit };
    process.argv.unshift('esparse.js');
    process.argv.unshift('rhino');
}

function showUsage() {
    console.log('Usage:');
    console.log('   esparse [options] [file.js]');
    console.log();
    console.log('Available options:');
    console.log();
    console.log('  --comment      Gather all line and block comments in an array');
    console.log('  --loc          Include line-column location info for each syntax node');
    console.log('  --range        Include index-based range for each syntax node');
    console.log('  --raw          Display the raw value of literals');
    console.log('  --tokens       List all tokens in an array');
    console.log('  --tolerant     Tolerate errors on a best-effort basis (experimental)');
    console.log('  -v, --version  Shows program version');
    console.log();
    process.exit(1);
}

options = {};

process.argv.splice(2).forEach(function (entry) {

    if (forceFile || entry === '-' || entry.slice(0, 1) !== '-') {
        if (typeof fname === 'string') {
            console.log('Error: more than one input file.');
            process.exit(1);
        } else {
            fname = entry;
        }
    } else if (entry === '-h' || entry === '--help') {
        showUsage();
    } else if (entry === '-v' || entry === '--version') {
        console.log('ECMAScript Parser (using Esprima version', esprima.version, ')');
        console.log();
        process.exit(0);
    } else if (entry === '--comment') {
        options.comment = true;
    } else if (entry === '--loc') {
        options.loc = true;
    } else if (entry === '--range') {
        options.range = true;
    } else if (entry === '--raw') {
        options.raw = true;
    } else if (entry === '--tokens') {
        options.tokens = true;
    } else if (entry === '--tolerant') {
        options.tolerant = true;
    } else if (entry === '--') {
        forceFile = true;
    } else {
        console.log('Error: unknown option ' + entry + '.');
        process.exit(1);
    }
});

// Special handling for regular expression literal since we need to
// convert it to a string literal, otherwise it will be decoded
// as object "{}" and the regular expression would be lost.
function adjustRegexLiteral(key, value) {
    if (key === 'value' && value instanceof RegExp) {
        value = value.toString();
    }
    return value;
}

function run(content) {
    syntax = esprima.parse(content, options);
    console.log(JSON.stringify(syntax, adjustRegexLiteral, 4));
}

try {
    if (fname && (fname !== '-' || forceFile)) {
        run(fs.readFileSync(fname, 'utf-8'));
    } else {
        var content = '';
        process.stdin.resume();
        process.stdin.on('data', function(chunk) {
            content += chunk;
        });
        process.stdin.on('end', function() {
            run(content);
        });
    }
} catch (e) {
    console.log('Error: ' + e.message);
    process.exit(1);
}
