#!/usr/bin/env node
/* eslint-disable no-var, unicorn/prefer-node-protocol */

var parser = require("..");
var fs = require("fs");

var filename = process.argv[2];
if (!filename) {
  console.error("no filename specified");
} else {
  var file = fs.readFileSync(filename, "utf8");
  var ast = parser.parse(file);

  console.log(JSON.stringify(ast, null, "  "));
}
