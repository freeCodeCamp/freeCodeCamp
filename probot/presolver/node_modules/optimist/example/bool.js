#!/usr/bin/env node
var util = require('util');
var argv = require('optimist').argv;

if (argv.s) {
    util.print(argv.fr ? 'Le chat dit: ' : 'The cat says: ');
}
console.log(
    (argv.fr ? 'miaou' : 'meow') + (argv.p ? '.' : '')
);
