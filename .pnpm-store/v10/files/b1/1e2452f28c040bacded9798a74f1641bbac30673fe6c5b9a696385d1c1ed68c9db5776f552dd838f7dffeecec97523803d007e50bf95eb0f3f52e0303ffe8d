'use strict';

var path = require('path');
var isAbsolute = require('is-absolute');
var pathRoot = require('path-root');
var MapCache = require('map-cache');
var cache = new MapCache();

module.exports = function(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('parse-filepath expects a string');
  }

  if (cache.has(filepath)) {
    return cache.get(filepath);
  }

  var obj = {};
  if (typeof path.parse === 'function') {
    obj = path.parse(filepath);
    obj.extname = obj.ext;
    obj.basename = obj.base;
    obj.dirname = obj.dir;
    obj.stem = obj.name;

  } else {
    define(obj, 'root', function() {
      return pathRoot(this.path);
    });

    define(obj, 'extname', function() {
      return path.extname(filepath);
    });

    define(obj, 'ext', function() {
      return this.extname;
    });

    define(obj, 'name', function() {
      return path.basename(filepath, this.ext);
    });

    define(obj, 'stem', function() {
      return this.name;
    });

    define(obj, 'base', function() {
      return this.name + this.ext;
    });

    define(obj, 'basename', function() {
      return this.base;
    });

    define(obj, 'dir', function() {
      var dir = path.dirname(filepath);
      if (dir === '.') {
        return (filepath[0] === '.') ? dir : '';
      } else {
        return dir;
      }
    });

    define(obj, 'dirname', function() {
      return this.dir;
    });
  }

  obj.path = filepath;

  define(obj, 'absolute', function() {
    return path.resolve(this.path);
  });

  define(obj, 'isAbsolute', function() {
    return isAbsolute(this.path);
  });

  cache.set(filepath, obj);
  return obj;
};

function define(obj, prop, fn) {
  var cached;
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    set: function(val) {
      cached = val;
    },
    get: function() {
      return cached || (cached = fn.call(obj));
    }
  });
}
