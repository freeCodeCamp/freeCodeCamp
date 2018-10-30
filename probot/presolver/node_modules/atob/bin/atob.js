#!/usr/bin/env node
'use strict';

var atob = require('../node-atob');
var str = process.argv[2];
console.log(atob(str));
