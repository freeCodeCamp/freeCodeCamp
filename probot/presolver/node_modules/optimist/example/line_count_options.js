#!/usr/bin/env node
var argv = require('optimist')
    .usage('Count the lines in a file.\nUsage: $0')
    .options({
        file : {
            demand : true,
            alias : 'f',
            description : 'Load a file'
        },
        base : {
            alias : 'b',
            description : 'Numeric base to use for output',
            default : 10,
        },
    })
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
