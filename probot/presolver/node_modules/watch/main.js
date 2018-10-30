// Copyright 2010-2011 Mikeal Rogers
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var sys = require('util')
  , fs = require('fs')
  , path = require('path')
  , events = require('events')
  ;

function walk (dir, options, callback) {
  if (!callback) {callback = options; options = {}}
  if (!callback.files) callback.files = {};
  if (!callback.pending) callback.pending = 0;
  callback.pending += 1;
  fs.stat(dir, function (err, stat) {
    if (err) return callback(err);
    callback.files[dir] = stat;
    fs.readdir(dir, function (err, files) {
      if (err) {
        if(err.code === 'EACCES' && options.ignoreUnreadableDir) return callback();
        return callback(err);
      }
      callback.pending -= 1;
      files.forEach(function (f, index) {
        f = path.join(dir, f);
        callback.pending += 1;
        fs.stat(f, function (err, stat) {
          var enoent = false
            , done = false;

          if (err) {
            if (err.code !== 'ENOENT' && (err.code !== 'EPERM' && options.ignoreNotPermitted)) {
              return callback(err);
            } else {
              enoent = true;
            }
          }
          callback.pending -= 1;
          done = callback.pending === 0;
          if (!enoent) {
            if (options.ignoreDotFiles && path.basename(f)[0] === '.') return done && callback(null, callback.files);
            if (options.filter && !options.filter(f, stat)) return done && callback(null, callback.files);
            callback.files[f] = stat;
            if (stat.isDirectory() && !(options.ignoreDirectoryPattern && options.ignoreDirectoryPattern.test(f))) walk(f, options, callback);
            done = callback.pending === 0;
            if (done) callback(null, callback.files);
          }
        })
      })
      if (callback.pending === 0) callback(null, callback.files);
    })
    if (callback.pending === 0) callback(null, callback.files);
  })

}

var watchedFiles = Object.create(null);

exports.watchTree = function ( root, options, callback ) {
  if (!callback) {callback = options; options = {}}
  walk(root, options, function (err, files) {
    if (err) throw err;
    var fileWatcher = function (f) {
      fs.watchFile(f, options, function (c, p) {
        // Check if anything actually changed in stat
        if (files[f] && !files[f].isDirectory() && c.nlink !== 0 && files[f].mtime.getTime() == c.mtime.getTime()) return;
        files[f] = c;
        if (!files[f].isDirectory()) callback(f, c, p);
        else {
          fs.readdir(f, function (err, nfiles) {
            if (err) return;
            nfiles.forEach(function (b) {
              var file = path.join(f, b);
              if (!files[file] && (options.ignoreDotFiles !== true || b[0] != '.')) {
                fs.stat(file, function (err, stat) {
                  if (options.filter && !options.filter(file, stat)) return;
                  callback(file, stat, null);
                  files[file] = stat;
                  fileWatcher(file);
                })
              }
            })
          })
        }
        if (c.nlink === 0) {
          // unwatch removed files.
          delete files[f]
          fs.unwatchFile(f);
        }
      })
    }
    fileWatcher(root);
    for (var i in files) {
      fileWatcher(i);
    }
    watchedFiles[root] = files;
    callback(files, null, null);
  })
}

exports.unwatchTree = function (root) {
  if (!watchedFiles[root]) return;
  Object.keys(watchedFiles[root]).forEach(fs.unwatchFile);
  watchedFiles[root] = false;
};

exports.createMonitor = function (root, options, cb) {
  if (!cb) {cb = options; options = {}}
  var monitor = new events.EventEmitter();
  monitor.stop = exports.unwatchTree.bind(null, root);

  var prevFile = {file: null,action: null,stat: null};
  exports.watchTree(root, options, function (f, curr, prev) {
    // if not curr, prev, but f is an object
    if (typeof f == "object" && prev == null && curr === null) {
      monitor.files = f;
      return cb(monitor);
    }

    // if not prev and either prevFile.file is not f or prevFile.action is not created
    if (!prev) {
      if (prevFile.file != f || prevFile.action != "created") {
        prevFile = { file: f, action: "created", stat: curr };
        return monitor.emit("created", f, curr);
      }
    }

    // if curr.nlink is 0 and either prevFile.file is not f or prevFile.action is not removed
    if (curr) {
      if (curr.nlink === 0) {
        if (prevFile.file != f || prevFile.action != "removed") {
          prevFile = { file: f, action: "removed", stat: curr };
          return monitor.emit("removed", f, curr);
        }
      }
    }

    // if prevFile.file is null or prevFile.stat.mtime is not the same as curr.mtime
    if (prevFile.file === null) {
      return monitor.emit("changed", f, curr, prev);
    }
    // stat might return null, so catch errors
    try {
      if (prevFile.stat.mtime.getTime() !== curr.mtime.getTime()) {
        return monitor.emit("changed", f, curr, prev);
      }
    } catch(e) {
      return monitor.emit("changed", f, curr, prev);
    }
  })
}

exports.walk = walk;
