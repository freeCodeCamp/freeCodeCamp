#! /usr/bin/env node
var rc = require('./index')

console.log(JSON.stringify(rc(process.argv[2]), false, 2))
