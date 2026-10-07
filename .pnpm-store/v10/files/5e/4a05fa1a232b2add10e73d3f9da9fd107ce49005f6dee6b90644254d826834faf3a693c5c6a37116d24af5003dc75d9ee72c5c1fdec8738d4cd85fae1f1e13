var fs = require("fs");
var p = require("path");
var minimatch = require("minimatch");

function patternMatcher(pattern) {
  return function(path, stats) {
    var minimatcher = new minimatch.Minimatch(pattern, { matchBase: true });
    return (!minimatcher.negate || stats.isFile()) && minimatcher.match(path);
  };
}

function toMatcherFunction(ignoreEntry) {
  if (typeof ignoreEntry == "function") {
    return ignoreEntry;
  } else {
    return patternMatcher(ignoreEntry);
  }
}

function readdir(path, ignores, callback) {
  if (typeof ignores == "function") {
    callback = ignores;
    ignores = [];
  }

  if (!callback) {
    return new Promise(function(resolve, reject) {
      readdir(path, ignores || [], function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  ignores = ignores.map(toMatcherFunction);

  var list = [];

  fs.readdir(path, function(err, files) {
    if (err) {
      return callback(err);
    }

    var pending = files.length;
    if (!pending) {
      // we are done, woop woop
      return callback(null, list);
    }

    files.forEach(function(file) {
      var filePath = p.join(path, file);
      fs.stat(filePath, function(_err, stats) {
        if (_err) {
          return callback(_err);
        }

        if (
          ignores.some(function(matcher) {
            return matcher(filePath, stats);
          })
        ) {
          pending -= 1;
          if (!pending) {
            return callback(null, list);
          }
          return null;
        }

        if (stats.isDirectory()) {
          readdir(filePath, ignores, function(__err, res) {
            if (__err) {
              return callback(__err);
            }

            list = list.concat(res);
            pending -= 1;
            if (!pending) {
              return callback(null, list);
            }
          });
        } else {
          list.push(filePath);
          pending -= 1;
          if (!pending) {
            return callback(null, list);
          }
        }
      });
    });
  });
}

module.exports = readdir;
