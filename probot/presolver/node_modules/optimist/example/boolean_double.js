#!/usr/bin/env node
var argv = require('optimist')
    .boolean(['x','y','z'])
    .argv
;
console.dir([ argv.x, argv.y, argv.z ]);
console.dir(argv._);
