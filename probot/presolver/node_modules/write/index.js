/*!
 * write <https://github.com/jonschlinkert/write>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var mkdir = require('mkdirp');

/**
 * Asynchronously write a file to disk. Creates any intermediate
 * directories if they don't already exist.
 *
 * ```js
 * var writeFile = require('write');
 * writeFile('foo.txt', 'This is content to write.', function(err) {
 *   if (err) console.log(err);
 * });
 * ```
 *
 * @name  writeFile
 * @param  {String} `dest` Destination file path
 * @param  {String} `str` String to write to disk.
 * @param  {Function} `callback`
 * @api public
 */

module.exports = function writeFile(dest, str, cb) {
  var dir = path.dirname(dest);
  fs.exists(dir, function (exists) {
    if (exists) {
      fs.writeFile(dest, str, cb);
    } else {
      mkdir(dir, function (err) {
        if (err) {
          return cb(err);
        } else {
          fs.writeFile(dest, str, cb);
        }
      });
    }
  });
};

/**
 * Synchronously write files to disk. Creates any intermediate
 * directories if they don't already exist.
 *
 * ```js
 * var writeFile = require('write');
 * writeFile.sync('foo.txt', 'This is content to write.');
 * ```
 *
 * @name  writeFile.sync
 * @param  {String} `dest` Destination file path
 * @param  {String} `str` String to write to disk.
 * @api public
 */

module.exports.sync = function writeFileSync(dest, str) {
  var dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    mkdir.sync(dir);
  }
  fs.writeFileSync(dest, str);
};

/**
 * Uses `fs.createWriteStream`, but also creates any intermediate
 * directories if they don't already exist.
 *
 * ```js
 * var write = require('write');
 * write.stream('foo.txt');
 * ```
 *
 * @name  writeFile.stream
 * @param  {String} `dest` Destination file path
 * @return  {Stream} Returns a write stream.
 * @api public
 */

module.exports.stream = function writeFileStream(dest) {
  var dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    mkdir.sync(dir);
  }
  return fs.createWriteStream(dest);
};
