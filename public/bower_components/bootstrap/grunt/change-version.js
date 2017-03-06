#!/usr/bin/env node
'use strict';

/* globals Set */
/*!
 * Script to update version number references in the project.
 * Copyright 2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var fs = require('fs');
var path = require('path');
var sh = require('shelljs');
sh.config.fatal = true;
var sed = sh.sed;

// Blame TC39... https://github.com/benjamingr/RegExp.escape/issues/37
RegExp.quote = function (string) {
  return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
};
RegExp.quoteReplacement = function (string) {
  return string.replace(/[$]/g, '$$');
};

var DRY_RUN = false;

function walkAsync(directory, excludedDirectories, fileCallback, errback) {
  if (excludedDirectories.has(path.parse(directory).base)) {
    return;
  }
  fs.readdir(directory, function (err, names) {
    if (err) {
      errback(err);
      return;
    }
    names.forEach(function (name) {
      var filepath = path.join(directory, name);
      fs.lstat(filepath, function (err, stats) {
        if (err) {
          process.nextTick(errback, err);
          return;
        }
        if (stats.isSymbolicLink()) {
          return;
        }
        else if (stats.isDirectory()) {
          process.nextTick(walkAsync, filepath, excludedDirectories, fileCallback, errback);
        }
        else if (stats.isFile()) {
          process.nextTick(fileCallback, filepath);
        }
      });
    });
  });
}

function replaceRecursively(directory, excludedDirectories, allowedExtensions, original, replacement) {
  original = new RegExp(RegExp.quote(original), 'g');
  replacement = RegExp.quoteReplacement(replacement);
  var updateFile = !DRY_RUN ? function (filepath) {
    if (allowedExtensions.has(path.parse(filepath).ext)) {
      sed('-i', original, replacement, filepath);
    }
  } : function (filepath) {
    if (allowedExtensions.has(path.parse(filepath).ext)) {
      console.log('FILE: ' + filepath);
    }
    else {
      console.log('EXCLUDED:' + filepath);
    }
  };
  walkAsync(directory, excludedDirectories, updateFile, function (err) {
    console.error('ERROR while traversing directory!:');
    console.error(err);
    process.exit(1);
  });
}

function main(args) {
  if (args.length !== 2) {
    console.error('USAGE: change-version old_version new_version');
    console.error('Got arguments:', args);
    process.exit(1);
  }
  var oldVersion = args[0];
  var newVersion = args[1];
  var EXCLUDED_DIRS = new Set([
    '.git',
    'node_modules',
    'vendor'
  ]);
  var INCLUDED_EXTENSIONS = new Set([
    // This extension whitelist is how we avoid modifying binary files
    '',
    '.css',
    '.html',
    '.js',
    '.json',
    '.less',
    '.md',
    '.nuspec',
    '.ps1',
    '.scss',
    '.txt',
    '.yml'
  ]);
  replaceRecursively('.', EXCLUDED_DIRS, INCLUDED_EXTENSIONS, oldVersion, newVersion);
}

main(process.argv.slice(2));
