(function () {
  "use strict"

  // Array.prototype.forEachAsync(next, item, i, collection)
  require('futures/forEachAsync');

  function noop() {}

  var fs = require('fs'),
    path = require('path'),
    EventEmitter = require('events').EventEmitter,
    TypeEmitter = require('./node-type-emitter');

  // 2010-11-25 jorge@jorgechamorro.com
  function create(pathname, cb) {
    var emitter = new EventEmitter(),
      q = [],
      queue = [q],
      curpath;

    function walk() { 
      fs.readdir(curpath, function(err, files) {
        if (err) {
          emitter.emit('directoryError', curpath, { error: err }, noop);
          //emitter.emit('error', curpath, { error: err });
        }
        // XXX bug was here. next() was omitted
        if (!files || 0 == files.length) {
          return next();
        }

        var fnodeGroups = TypeEmitter.createNodeGroups();

        // TODO could allow user to selectively stat
        // and don't stat if there are no stat listeners
        emitter.emit('names', curpath, files, noop);
        files.forEachAsync(function (cont, file) {
          emitter.emit('name', curpath, file, noop);
          fs.lstat(curpath + path.sep + file, function (err, stat) {
            stat = stat || {};
            stat.name = file;
            if (err) {
              stat.error = err;
              //emitter.emit('error', curpath, stat);
              emitter.emit('nodeError', curpath, stat, noop);
              fnodeGroups.errors.push(stat);
              cont();
            } else {
              TypeEmitter.sortFnodesByType(stat, fnodeGroups);
              TypeEmitter.emitNodeType(emitter, curpath, stat, cont);
            }
          });
        }).then(function () {
          if (fnodeGroups.errors.length) {
            emitter.emit('errors', curpath, fnodeGroups.errors, noop);
          }
          TypeEmitter.emitNodeTypeGroups(emitter, curpath, fnodeGroups, function () {
            var dirs = [];
            fnodeGroups.directories.forEach(function (stat) {
              dirs.push(stat.name);
            });
            dirs.forEach(fullPath);
            queue.push(q = dirs);
            next();
          });
        });
      });
    }
    
    function next() {
      if (q.length) {
        curpath = q.pop();
        return walk();
      }
      if (queue.length -= 1) {
        q = queue[queue.length-1];
        return next();
      }
      emitter.emit('end');
    }
    
    function fullPath(v,i,o) {
      o[i]= [curpath, path.sep, v].join('');
    }
    
    curpath = pathname;
    walk();
    
    return emitter;
  }

  module.exports = create;
}());
