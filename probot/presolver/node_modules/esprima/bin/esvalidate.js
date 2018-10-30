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

/*jslint sloppy:true plusplus:true node:true rhino:true */
/*global phantom:true */

var fs, system, esprima, options, fnames, forceFile, count;

if (typeof esprima === 'undefined') {
    // PhantomJS can only require() relative files
    if (typeof phantom === 'object') {
        fs = require('fs');
        system = require('system');
        esprima = require('./esprima');
    } else if (typeof require === 'function') {
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
}

// Shims to Node.js objects when running under PhantomJS 1.7+.
if (typeof phantom === 'object') {
    fs.readFileSync = fs.read;
    process = {
        argv: [].slice.call(system.args),
        exit: phantom.exit,
        on: function (evt, callback) {
            callback();
        }
    };
    process.argv.unshift('phantomjs');
}

// Shims to Node.js objects when running under Rhino.
if (typeof console === 'undefined' && typeof process === 'undefined') {
    console = { log: print };
    fs = { readFileSync: readFile };
    process = {
        argv: arguments,
        exit: quit,
        on: function (evt, callback) {
            callback();
        }
    };
    process.argv.unshift('esvalidate.js');
    process.argv.unshift('rhino');
}

function showUsage() {
    console.log('Usage:');
    console.log('   esvalidate [options] [file.js...]');
    console.log();
    console.log('Available options:');
    console.log();
    console.log('  --format=type  Set the report format, plain (default) or junit');
    console.log('  -v, --version  Print program version');
    console.log();
    process.exit(1);
}

options = {
    format: 'plain'
};

fnames = [];

process.argv.splice(2).forEach(function (entry) {

    if (forceFile || entry === '-' || entry.slice(0, 1) !== '-') {
        fnames.push(entry);
    } else if (entry === '-h' || entry === '--help') {
        showUsage();
    } else if (entry === '-v' || entry === '--version') {
        console.log('ECMAScript Validator (using Esprima version', esprima.version, ')');
        console.log();
        process.exit(0);
    } else if (entry.slice(0, 9) === '--format=') {
        options.format = entry.slice(9);
        if (options.format !== 'plain' && options.format !== 'junit') {
            console.log('Error: unknown report format ' + options.format + '.');
            process.exit(1);
        }
    } else if (entry === '--') {
        forceFile = true;
    } else {
        console.log('Error: unknown option ' + entry + '.');
        process.exit(1);
    }
});

if (fnames.length === 0) {
    fnames.push('');
}

if (options.format === 'junit') {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<testsuites>');
}

count = 0;

function run(fname, content) {
    var timestamp, syntax, name;
    try {
        if (typeof content !== 'string') {
            throw content;
        }

        if (content[0] === '#' && content[1] === '!') {
            content = '//' + content.substr(2, content.length);
        }

        timestamp = Date.now();
        syntax = esprima.parse(content, { tolerant: true });

        if (options.format === 'junit') {

            name = fname;
            if (name.lastIndexOf('/') >= 0) {
                name = name.slice(name.lastIndexOf('/') + 1);
            }

            console.log('<testsuite name="' + fname + '" errors="0" ' +
                ' failures="' + syntax.errors.length + '" ' +
                ' tests="' + syntax.errors.length + '" ' +
                ' time="' + Math.round((Date.now() - timestamp) / 1000) +
                '">');

            syntax.errors.forEach(function (error) {
                var msg = error.message;
                msg = msg.replace(/^Line\ [0-9]*\:\ /, '');
                console.log('  <testcase name="Line ' + error.lineNumber + ': ' + msg + '" ' +
                    ' time="0">');
                console.log('    <error type="SyntaxError" message="' + error.message + '">' +
                    error.message + '(' + name + ':' + error.lineNumber + ')' +
                    '</error>');
                console.log('  </testcase>');
            });

            console.log('</testsuite>');

        } else if (options.format === 'plain') {

            syntax.errors.forEach(function (error) {
                var msg = error.message;
                msg = msg.replace(/^Line\ [0-9]*\:\ /, '');
                msg = fname + ':' + error.lineNumber + ': ' + msg;
                console.log(msg);
                ++count;
            });

        }
    } catch (e) {
        ++count;
        if (options.format === 'junit') {
            console.log('<testsuite name="' + fname + '" errors="1" failures="0" tests="1" ' +
                ' time="' + Math.round((Date.now() - timestamp) / 1000) + '">');
            console.log(' <testcase name="' + e.message + '" ' + ' time="0">');
            console.log(' <error type="ParseError" message="' + e.message + '">' +
                e.message + '(' + fname + ((e.lineNumber) ? ':' + e.lineNumber : '') +
                ')</error>');
            console.log(' </testcase>');
            console.log('</testsuite>');
        } else {
            console.log(fname + ':' + e.lineNumber + ': ' + e.message.replace(/^Line\ [0-9]*\:\ /, ''));
        }
    }
}

fnames.forEach(function (fname) {
    var content = '';
    try {
        if (fname && (fname !== '-' || forceFile)) {
            content = fs.readFileSync(fname, 'utf-8');
        } else {
            fname = '';
            process.stdin.resume();
            process.stdin.on('data', function(chunk) {
                content += chunk;
            });
            process.stdin.on('end', function() {
                run(fname, content);
            });
            return;
        }
    } catch (e) {
        content = e;
    }
    run(fname, content);
});

process.on('exit', function () {
    if (options.format === 'junit') {
        console.log('</testsuites>');
    }

    if (count > 0) {
        process.exit(1);
    }

    if (count === 0 && typeof phantom === 'object') {
        process.exit(0);
    }
});
