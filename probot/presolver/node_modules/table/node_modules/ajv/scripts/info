#!/usr/bin/env node

'use strict';

var fs = require('fs');
var name = process.argv[2] || '.';
var property = process.argv[3] || 'version';
if (name != '.') name = 'node_modules/' + name;
var json = JSON.parse(fs.readFileSync(name + '/package.json', 'utf8'));
console.log(json[property]);
