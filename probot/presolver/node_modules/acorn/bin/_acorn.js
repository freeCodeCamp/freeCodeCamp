#!/usr/bin/env node
'use strict';

var path = require('path');
var fs = require('fs');
var acorn = require('../dist/acorn.js');

var infile;
var forceFile;
var silent = false;
var compact = false;
var tokenize = false;
var options = {};

function help(status) {
  var print = (status === 0) ? console.log : console.error;
  print("usage: " + path.basename(process.argv[1]) + " [--ecma3|--ecma5|--ecma6|--ecma7|--ecma8|--ecma9|...|--ecma2015|--ecma2016|--ecma2017|--ecma2018|...]");
  print("        [--tokenize] [--locations] [---allow-hash-bang] [--compact] [--silent] [--module] [--help] [--] [infile]");
  process.exit(status);
}

for (var i = 2; i < process.argv.length; ++i) {
  var arg = process.argv[i];
  if ((arg === "-" || arg[0] !== "-") && !infile) { infile = arg; }
  else if (arg === "--" && !infile && i + 2 === process.argv.length) { forceFile = infile = process.argv[++i]; }
  else if (arg === "--locations") { options.locations = true; }
  else if (arg === "--allow-hash-bang") { options.allowHashBang = true; }
  else if (arg === "--silent") { silent = true; }
  else if (arg === "--compact") { compact = true; }
  else if (arg === "--help") { help(0); }
  else if (arg === "--tokenize") { tokenize = true; }
  else if (arg === "--module") { options.sourceType = "module"; }
  else {
    var match = arg.match(/^--ecma(\d+)$/);
    if (match)
      { options.ecmaVersion = +match[1]; }
    else
      { help(1); }
  }
}

function run(code) {
  var result;
  try {
    if (!tokenize) {
      result = acorn.parse(code, options);
    } else {
      result = [];
      var tokenizer$$1 = acorn.tokenizer(code, options), token;
      do {
        token = tokenizer$$1.getToken();
        result.push(token);
      } while (token.type !== acorn.tokTypes.eof)
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  if (!silent) { console.log(JSON.stringify(result, null, compact ? null : 2)); }
}

if (forceFile || infile && infile !== "-") {
  run(fs.readFileSync(infile, "utf8"));
} else {
  var code = "";
  process.stdin.resume();
  process.stdin.on("data", function (chunk) { return code += chunk; });
  process.stdin.on("end", function () { return run(code); });
}
