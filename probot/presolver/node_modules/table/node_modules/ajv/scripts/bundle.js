'use strict';

var fs = require('fs')
  , path = require('path')
  , browserify = require('browserify')
  , uglify = require('uglify-js');

var pkg = process.argv[2]
  , standalone = process.argv[3]
  , compress = process.argv[4];

var packageDir = path.join(__dirname, '..');
if (pkg != '.') packageDir = path.join(packageDir, 'node_modules', pkg);

var json = require(path.join(packageDir, 'package.json'));

var distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

var bOpts = {};
if (standalone) bOpts.standalone = standalone;

browserify(bOpts)
.require(path.join(packageDir, json.main), {expose: json.name})
.bundle(function (err, buf) {
  if (err) {
    console.error('browserify error:', err);
    process.exit(1);
  }

  var outputFile = path.join(distDir, json.name);
  var outputBundle = outputFile + '.bundle.js';
  fs.writeFileSync(outputBundle, buf);
  var uglifyOpts = {
    warnings: true,
    compress: {},
    output: {
      preamble: '/* ' + json.name + ' ' + json.version + ': ' + json.description + ' */'
    }
  };
  if (compress) {
    var compressOpts = compress.split(',');
    for (var i=0; i<compressOpts.length; ++i) {
      var pair = compressOpts[i].split('=');
      uglifyOpts.compress[pair[0]] = pair.length < 1 || pair[1] != 'false';
    }
  }
  if (standalone) uglifyOpts.outSourceMap = json.name + '.min.js.map';

  var result = uglify.minify(outputBundle, uglifyOpts);
  fs.writeFileSync(outputFile + '.min.js', result.code);
  if (result.map) fs.writeFileSync(outputFile + '.min.js.map', result.map);
  if (!standalone) fs.unlinkSync(outputBundle);
});
