"use strict";

module.exports = exports = rebuild;

exports.usage = 'Runs "clean" and "install" at once';

var fs = require('fs');
var napi = require('./util/napi.js');

function rebuild (gyp, argv, callback) {
  var package_json = JSON.parse(fs.readFileSync('./package.json'));
  var installArgs = [];
  var napi_build_version = napi.get_best_napi_version(package_json);
  if (napi_build_version != null) installArgs = [ napi.get_command_arg (napi_build_version) ];
  gyp.todo.unshift(
      { name: 'clean', args: [] },
      { name: 'install', args: installArgs }
  );
  process.nextTick(callback);
}
