#!/usr/bin/env node
var argv = require('optimist')
    .boolean('v')
    .argv
;
console.dir(argv.v);
console.dir(argv._);
