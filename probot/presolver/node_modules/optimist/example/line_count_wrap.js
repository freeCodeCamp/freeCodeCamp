#!/usr/bin/env node
var argv = require('optimist')
    .usage('Count the lines in a file.\nUsage: $0')
    .wrap(80)
    .demand('f')
    .alias('f', [ 'file', 'filename' ])
    .describe('f',
        "Load a file. It's pretty important."
        + " Required even. So you'd better specify it."
    )
    .alias('b', 'base')
    .describe('b', 'Numeric base to display the number of lines in')
    .default('b', 10)
    .describe('x', 'Super-secret optional parameter which is secret')
    .default('x', '')
    .argv
;

var fs = require('fs');
var s = fs.createReadStream(argv.file);

var lines = 0;
s.on('data', function (buf) {
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function () {
    console.log(lines.toString(argv.base));
});
