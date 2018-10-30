"use strict";

module.exports = exports = rebuild;

exports.usage = 'Runs "clean" and "build" at once';

var fs = require('fs');
var napi = require('./util/napi.js');

function rebuild (gyp, argv, callback) {
  var package_json = JSON.parse(fs.readFileSync('./package.json'));
  var commands = [
    { name: 'clean', args: [] },
    { name: 'build', args: ['rebuild'] }
    ];
  commands = napi.expand_commands(package_json, commands);
  for (var i = commands.length; i !== 0; i--) {
    gyp.todo.unshift(commands[i-1]);
  }
  process.nextTick(callback);
}
