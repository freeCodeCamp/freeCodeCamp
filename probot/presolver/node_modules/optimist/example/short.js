#!/usr/bin/env node
var argv = require('optimist').argv;
console.log('(%d,%d)', argv.x, argv.y);
