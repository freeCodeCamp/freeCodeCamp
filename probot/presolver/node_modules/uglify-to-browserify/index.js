'use strict'

var fs = require('fs')
var PassThrough = require('stream').PassThrough
var Transform = require('stream').Transform

if (typeof Transform === 'undefined') {
  throw new Error('UglifyJS only supports browserify when using node >= 0.10.x')
}

var cache = {}
module.exports = transform
function transform(file) {
  if (!/tools\/node\.js$/.test(file.replace(/\\/g,'/'))) return new PassThrough();
  if (cache[file]) return makeStream(cache[file])
  var uglify = require(file)
  var src = 'var sys = require("util");\nvar MOZ_SourceMap = require("source-map");\nvar UglifyJS = exports;\n' + uglify.FILES.map(function (path) { return fs.readFileSync(path, 'utf8') }).join('\n')

  var ast = uglify.parse(src)
  ast.figure_out_scope()

  var variables = ast.variables
    .map(function (node, name) {
      return name
    })

  src += '\n\n' + variables.map(function (v) { return 'exports.' + v + ' = ' + v + ';' }).join('\n') + '\n\n'

  src += 'exports.AST_Node.warn_function = function (txt) { if (typeof console != "undefined" && typeof console.warn === "function") console.warn(txt) }\n\n'

  src += 'exports.minify = ' + uglify.minify.toString() + ';\n\n'
  src += 'exports.describe_ast = ' + uglify.describe_ast.toString() + ';'

  // TODO: remove once https://github.com/substack/node-browserify/issues/631 is resolved
  src = src.replace(/"for"/g, '"fo" + "r"')

  cache[file] = src
  return makeStream(src);
}

function makeStream(src) {
  var res = new Transform();
  res._transform = function (chunk, encoding, callback) { callback() }
  res._flush = function (callback) {
    res.push(src)
    callback()
  }
  return res;
}
