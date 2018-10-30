#!/usr/bin/env node
'use strict';

var sane = require('../');
var argv = require('minimist')(process.argv.slice(2));
var execshell = require('exec-sh');

if (argv._.length === 0) {
  var msg =
    'Usage: sane <command> [...directory] [--glob=<filePattern>] ' +
    '[--ignored=<filePattern>] [--poll] [--watchman] [--watchman-path=<watchmanBinaryPath>] [--dot] ' +
    '[--wait=<seconds>]';
  console.error(msg);
  process.exit();
}

var opts = {};
var command = argv._[0];
var dir = argv._[1] || process.cwd();
var waitTime = Number(argv.wait || argv.w);
var dot = argv.dot || argv.d;
var glob = argv.glob || argv.g;
var ignored = argv.ignored || argv.i;
var poll = argv.poll || argv.p;
var watchman = argv.watchman || argv.w;
var watchmanPath = argv['watchman-path'];

if (dot) {
  opts.dot = true;
}
if (glob) {
  opts.glob = glob;
}
if (ignored) {
  opts.ignored = ignored;
}
if (poll) {
  opts.poll = true;
}
if (watchman) {
  opts.watchman = true;
}
if (watchmanPath) {
  opts.watchmanPath = watchmanPath;
}

var wait = false;
var watcher = sane(dir, opts);

watcher.on('ready', function() {
  console.log('Watching: ', dir + '/' + (opts.glob || ''));
  execshell(command);
});

watcher.on('change', function(filepath) {
  if (wait) {
    return;
  }
  console.log('Change detected in:', filepath);
  execshell(command);

  if (waitTime > 0) {
    wait = true;
    setTimeout(function() {
      wait = false;
    }, waitTime * 1000);
  }
});
