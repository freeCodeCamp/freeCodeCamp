/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var GraphQLWatchmanClient = require('../core/GraphQLWatchmanClient');

var Profiler = require('../core/GraphQLCompilerProfiler');

var crypto = require('crypto');

var fs = require('fs');

var path = require('path');

var SUBSCRIPTION_NAME = 'graphql-codegen';
var QUERY_RETRIES = 3;

function queryFiles(_x, _x2, _x3) {
  return _queryFiles.apply(this, arguments);
}

function _queryFiles() {
  _queryFiles = _asyncToGenerator(function* (baseDir, expression, filter) {
    return yield Profiler.waitFor('Watchman:query', /*#__PURE__*/_asyncToGenerator(function* () {
      var client = new GraphQLWatchmanClient(QUERY_RETRIES);

      var _await$Promise$all = yield Promise.all([client.watchProject(baseDir), getFields(client)]),
          watchResp = _await$Promise$all[0],
          fields = _await$Promise$all[1];

      var resp = yield client.command('query', watchResp.root, {
        expression: expression,
        fields: fields,
        relative_root: watchResp.relativePath
      });
      client.end();
      return updateFiles(new Set(), baseDir, filter, resp.files);
    }));
  });
  return _queryFiles.apply(this, arguments);
}

function queryDirectories(_x4, _x5) {
  return _queryDirectories.apply(this, arguments);
}

function _queryDirectories() {
  _queryDirectories = _asyncToGenerator(function* (baseDir, expression) {
    return yield Profiler.waitFor('Watchman:query', /*#__PURE__*/_asyncToGenerator(function* () {
      var client = new GraphQLWatchmanClient();
      var watchResp = yield client.watchProject(baseDir);
      var resp = yield client.command('query', watchResp.root, {
        expression: expression,
        fields: ['name'],
        relative_root: watchResp.relativePath
      });
      client.end();
      return resp.files;
    }));
  });
  return _queryDirectories.apply(this, arguments);
}

function getFields(_x6) {
  return _getFields.apply(this, arguments);
} // For use when not using Watchman.


function _getFields() {
  _getFields = _asyncToGenerator(function* (client) {
    var fields = ['name', 'exists'];

    if (yield client.hasCapability('field-content.sha1hex')) {
      fields.push('content.sha1hex');
    }

    return fields;
  });
  return _getFields.apply(this, arguments);
}

function queryFilepaths(_x7, _x8, _x9) {
  return _queryFilepaths.apply(this, arguments);
}
/**
 * Provides a simplified API to the watchman API.
 * Given some base directory and a list of subdirectories it calls the callback
 * with watchman change events on file changes.
 */


function _queryFilepaths() {
  _queryFilepaths = _asyncToGenerator(function* (baseDir, filepaths, filter) {
    // Construct WatchmanChange objects as an intermediate step before
    // calling updateFiles to produce file content.
    var files = filepaths.map(function (filepath) {
      return {
        name: filepath,
        exists: true,
        'content.sha1hex': null
      };
    });
    return updateFiles(new Set(), baseDir, filter, files);
  });
  return _queryFilepaths.apply(this, arguments);
}

function watch(_x10, _x11, _x12) {
  return _watch.apply(this, arguments);
}

function _watch() {
  _watch = _asyncToGenerator(function* (baseDir, expression, callback) {
    return yield Profiler.waitFor('Watchman:subscribe', /*#__PURE__*/_asyncToGenerator(function* () {
      var client = new GraphQLWatchmanClient();
      var watchResp = yield client.watchProject(baseDir);
      yield makeSubscription(client, watchResp.root, watchResp.relativePath, expression, callback);
    }));
  });
  return _watch.apply(this, arguments);
}

function makeSubscription(_x13, _x14, _x15, _x16, _x17) {
  return _makeSubscription.apply(this, arguments);
}
/**
 * Further simplifies `watch` and calls the callback on every change with a
 * full list of files that match the conditions.
 */


function _makeSubscription() {
  _makeSubscription = _asyncToGenerator(function* (client, root, relativePath, expression, callback) {
    client.on('subscription', function (resp) {
      if (resp.subscription === SUBSCRIPTION_NAME) {
        callback(resp);
      }
    });
    var fields = yield getFields(client);
    yield client.command('subscribe', root, SUBSCRIPTION_NAME, {
      expression: expression,
      fields: fields,
      relative_root: relativePath
    });
  });
  return _makeSubscription.apply(this, arguments);
}

function watchFiles(_x18, _x19, _x20, _x21) {
  return _watchFiles.apply(this, arguments);
}
/**
 * Similar to watchFiles, but takes an async function. The `compile` function
 * is awaited and not called in parallel. If multiple changes are triggered
 * before a compile finishes, the latest version is called after the compile
 * finished.
 *
 * TODO: Consider changing from a Promise to abortable, so we can abort mid
 *       compilation.
 */


function _watchFiles() {
  _watchFiles = _asyncToGenerator(function* (baseDir, expression, filter, callback) {
    var files = new Set();
    yield watch(baseDir, expression, function (changes) {
      if (!changes.files) {
        // Watchmen fires a change without files when a watchman state changes,
        // for example during an hg update.
        return;
      }

      files = updateFiles(files, baseDir, filter, changes.files);
      callback(files);
    });
  });
  return _watchFiles.apply(this, arguments);
}

function watchCompile(_x22, _x23, _x24, _x25) {
  return _watchCompile.apply(this, arguments);
}

function _watchCompile() {
  _watchCompile = _asyncToGenerator(function* (baseDir, expression, filter, compile) {
    var compiling = false;
    var needsCompiling = false;
    var latestFiles = null;
    watchFiles(baseDir, expression, filter, /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* (files) {
        needsCompiling = true;
        latestFiles = files;

        if (compiling) {
          return;
        }

        compiling = true;

        while (needsCompiling) {
          needsCompiling = false;
          yield compile(latestFiles);
        }

        compiling = false;
      });

      return function (_x26) {
        return _ref5.apply(this, arguments);
      };
    }());
  });
  return _watchCompile.apply(this, arguments);
}

function updateFiles(files, baseDir, filter, fileChanges) {
  var fileMap = new Map();
  files.forEach(function (file) {
    file.exists && fileMap.set(file.relPath, file);
  });
  fileChanges.forEach(function (_ref) {
    var name = _ref.name,
        exists = _ref.exists,
        hash = _ref['content.sha1hex'];
    var shouldRemove = !exists;

    if (!shouldRemove) {
      var _file = {
        exists: true,
        relPath: name,
        hash: hash || hashFile(path.join(baseDir, name))
      };

      if (filter(_file)) {
        fileMap.set(name, _file);
      } else {
        shouldRemove = true;
      }
    }

    shouldRemove && fileMap.set(name, {
      exists: false,
      relPath: name
    });
  });
  return new Set(fileMap.values());
}

function hashFile(filename) {
  var content = fs.readFileSync(filename);
  return crypto.createHash('sha1').update(content).digest('hex');
}

module.exports = {
  queryDirectories: queryDirectories,
  queryFiles: queryFiles,
  queryFilepaths: queryFilepaths,
  watch: watch,
  watchFiles: watchFiles,
  watchCompile: watchCompile
};