#!/usr/bin/env node

var argv = require('optimist')
    .default({ x : 10, y : 10 })
    .argv
;

console.log(argv.x + argv.y);
