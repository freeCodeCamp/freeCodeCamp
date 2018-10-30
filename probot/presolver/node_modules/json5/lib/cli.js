#!/usr/bin/env node

// cli.js
// JSON5 command-line interface.
//
// This is pretty minimal for now; just supports compiling files via `-c`.
// TODO More useful functionality, like output path, watch, etc.?

var FS = require('fs');
var JSON5 = require('./json5');
var Path = require('path');

var USAGE = [
    'Usage: json5 -c path/to/file.json5 ...',
    'Compiles JSON5 files into sibling JSON files with the same basenames.',
].join('\n');

// if valid, args look like [node, json5, -c, file1, file2, ...]
var args = process.argv;

if (args.length < 4 || args[2] !== '-c') {
    console.error(USAGE);
    process.exit(1);
}

var cwd = process.cwd();
var files = args.slice(3);

// iterate over each file and convert JSON5 files to JSON:
files.forEach(function (file) {
    var path = Path.resolve(cwd, file);
    var basename = Path.basename(path, '.json5');
    var dirname = Path.dirname(path);

    var json5 = FS.readFileSync(path, 'utf8');
    var obj = JSON5.parse(json5);
    var json = JSON.stringify(obj, null, 4); // 4 spaces; TODO configurable?

    path = Path.join(dirname, basename + '.json');
    FS.writeFileSync(path, json, 'utf8');
});
