'use strict';

var path = require('path');
var fs = require('fs');
var acorn = require('./acorn.js');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var acorn__namespace = /*#__PURE__*/_interopNamespaceDefault(acorn);

var inputFilePaths = [], forceFileName = false, fileMode = false, silent = false, compact = false, tokenize = false;
var options = {};

function help(status) {
  var print = (status === 0) ? console.log : console.error;
  print("usage: " + path.basename(process.argv[1]) + " [--ecma3|--ecma5|--ecma6|--ecma7|--ecma8|--ecma9|...|--ecma2015|--ecma2016|--ecma2017|--ecma2018|...]");
  print("        [--tokenize] [--locations] [--allow-hash-bang] [--allow-await-outside-function] [--compact] [--silent] [--module] [--help] [--] [<infile>...]");
  process.exit(status);
}

for (var i = 2; i < process.argv.length; ++i) {
  var arg = process.argv[i];
  if (arg[0] !== "-" || arg === "-") { inputFilePaths.push(arg); }
  else if (arg === "--") {
    inputFilePaths.push.apply(inputFilePaths, process.argv.slice(i + 1));
    forceFileName = true;
    break
  } else if (arg === "--locations") { options.locations = true; }
  else if (arg === "--allow-hash-bang") { options.allowHashBang = true; }
  else if (arg === "--allow-await-outside-function") { options.allowAwaitOutsideFunction = true; }
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

function run(codeList) {
  var result = [], fileIdx = 0;
  try {
    codeList.forEach(function (code, idx) {
      fileIdx = idx;
      if (!tokenize) {
        result = acorn__namespace.parse(code, options);
        options.program = result;
      } else {
        var tokenizer = acorn__namespace.tokenizer(code, options), token;
        do {
          token = tokenizer.getToken();
          result.push(token);
        } while (token.type !== acorn__namespace.tokTypes.eof)
      }
    });
  } catch (e) {
    console.error(fileMode ? e.message.replace(/\(\d+:\d+\)$/, function (m) { return m.slice(0, 1) + inputFilePaths[fileIdx] + " " + m.slice(1); }) : e.message);
    process.exit(1);
  }
  if (!silent) { console.log(JSON.stringify(result, function (_, value) { return typeof value === "bigint" ? null : value; }, compact ? null : 2)); }
}

if (fileMode = inputFilePaths.length && (forceFileName || !inputFilePaths.includes("-") || inputFilePaths.length !== 1)) {
  run(inputFilePaths.map(function (path) { return fs.readFileSync(path, "utf8"); }));
} else {
  var code = "";
  process.stdin.resume();
  process.stdin.on("data", function (chunk) { return code += chunk; });
  process.stdin.on("end", function () { return run([code]); });
}
