#!/usr/bin/env node

var lint = require("./lint/lint");

lint.checkDir("mode");
lint.checkDir("lib");
lint.checkDir("addon");
lint.checkDir("keymap");

var ok = lint.success();

var files = new (require('node-static').Server)();

var server = require('http').createServer(function (req, res) {
  req.addListener('end', function () {
    files.serve(req, res, function (err/*, result */) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }).resume();
}).addListener('error', function (err) {
  throw err;
}).listen(3000, function () {
  var childProcess = require('child_process');
  var phantomjs = require("phantomjs");
  var childArgs = [
    require("path").join(__dirname, 'phantom_driver.js')
  ];
  childProcess.execFile(phantomjs.path, childArgs, function (err, stdout, stderr) {
    server.close();
    console.log(stdout);
    if (err) console.error(err);
    if (stderr) console.error(stderr);
    process.exit(err || stderr || !ok ? 1 : 0);
  });
});
