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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var CodegenDirectory = require('./CodegenDirectory');

var CodegenWatcher = require('./CodegenWatcher');

var GraphQLWatchmanClient = require('../core/GraphQLWatchmanClient');

var Profiler = require('../core/GraphQLCompilerProfiler');

var invariant = require('invariant');

var path = require('path');

var _require = require('../core/Schema'),
    createSchema = _require.create;
/* $FlowFixMe[untyped-import] - importing immutable, which is untyped (and flow
 * is sad about it) */


var _require2 = require('immutable'),
    ImmutableMap = _require2.Map;

var CodegenRunner = /*#__PURE__*/function () {
  // parser => writers that are affected by it
  function CodegenRunner(options) {
    var _this = this;

    this.parsers = {};
    this.parserConfigs = options.parserConfigs;
    this.writerConfigs = options.writerConfigs;
    this.onlyValidate = options.onlyValidate;
    this.onComplete = options.onComplete;
    this._reporter = options.reporter;
    this._sourceControl = options.sourceControl;
    this.parserWriters = {};

    for (var _parser in options.parserConfigs) {
      this.parserWriters[_parser] = new Set();
    }

    var _loop = function _loop(_writer) {
      var config = options.writerConfigs[_writer];
      config.baseParsers && config.baseParsers.forEach(function (parser) {
        return _this.parserWriters[parser].add(_writer);
      });

      _this.parserWriters[config.parser].add(_writer);
    };

    for (var _writer in options.writerConfigs) {
      _loop(_writer);
    }
  }

  var _proto = CodegenRunner.prototype;

  _proto.compileAll = /*#__PURE__*/function () {
    var _compileAll = _asyncToGenerator(function* () {
      // reset the parsers
      this.parsers = {};

      for (var parserName in this.parserConfigs) {
        try {
          yield this.parseEverything(parserName);
        } catch (e) {
          this._reporter.reportError('CodegenRunner.compileAll', e);

          return 'ERROR';
        }
      }

      var hasChanges = false;

      for (var writerName in this.writerConfigs) {
        var result = yield this.write(writerName);

        if (result === 'ERROR') {
          return 'ERROR';
        }

        if (result === 'HAS_CHANGES') {
          hasChanges = true;
        }
      }

      return hasChanges ? 'HAS_CHANGES' : 'NO_CHANGES';
    });

    function compileAll() {
      return _compileAll.apply(this, arguments);
    }

    return compileAll;
  }();

  _proto.compile = /*#__PURE__*/function () {
    var _compile = _asyncToGenerator(function* (writerName) {
      var _this2 = this;

      var writerConfig = this.writerConfigs[writerName];
      var parsers = [writerConfig.parser];

      if (writerConfig.baseParsers) {
        writerConfig.baseParsers.forEach(function (parser) {
          return parsers.push(parser);
        });
      } // Don't bother resetting the parsers


      yield Profiler.asyncContext('CodegenRunner:parseEverything', function () {
        return Promise.all(parsers.map(function (parser) {
          return _this2.parseEverything(parser);
        }));
      });
      return yield this.write(writerName);
    });

    function compile(_x) {
      return _compile.apply(this, arguments);
    }

    return compile;
  }();

  _proto.getDirtyWriters = function getDirtyWriters(filePaths) {
    var _this3 = this;

    return Profiler.asyncContext('CodegenRunner:getDirtyWriters', /*#__PURE__*/_asyncToGenerator(function* () {
      var dirtyWriters = new Set(); // Check if any files are in the output

      for (var configName in _this3.writerConfigs) {
        var config = _this3.writerConfigs[configName];

        var _iterator = (0, _createForOfIteratorHelper2["default"])(filePaths),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _filePath = _step.value;

            if (config.isGeneratedFile(_filePath)) {
              dirtyWriters.add(configName);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // Check for files in the input


      yield Promise.all(Object.keys(_this3.parserConfigs).map(function (parserConfigName) {
        return Profiler.waitFor('Watchman:query', /*#__PURE__*/_asyncToGenerator(function* () {
          var client = new GraphQLWatchmanClient();
          var config = _this3.parserConfigs[parserConfigName];
          var dirs = yield client.watchProject(config.baseDir);
          var relativeFilePaths = filePaths.map(function (filePath) {
            return path.relative(config.baseDir, filePath);
          });
          var query = {
            expression: ['allof', config.watchmanExpression, ['name', relativeFilePaths, 'wholename']],
            fields: ['exists'],
            relative_root: dirs.relativePath
          };
          var result = yield client.command('query', dirs.root, query);
          client.end();

          if (result.files.length > 0) {
            _this3.parserWriters[parserConfigName].forEach(function (writerName) {
              return dirtyWriters.add(writerName);
            });
          }
        }));
      }));
      return dirtyWriters;
    }));
  };

  _proto.parseEverything = /*#__PURE__*/function () {
    var _parseEverything = _asyncToGenerator(function* (parserName) {
      if (this.parsers[parserName]) {
        // no need to parse
        return;
      }

      var parserConfig = this.parserConfigs[parserName];
      this.parsers[parserName] = parserConfig.getParser(parserConfig.baseDir);
      var filter = parserConfig.getFileFilter ? parserConfig.getFileFilter(parserConfig.baseDir) : anyFileFilter;

      if (parserConfig.filepaths && parserConfig.watchmanExpression) {
        throw new Error('Provide either `watchmanExpression` or `filepaths` but not both.');
      }

      var files;

      if (parserConfig.watchmanExpression) {
        files = yield CodegenWatcher.queryFiles(parserConfig.baseDir, parserConfig.watchmanExpression, filter);
      } else if (parserConfig.filepaths) {
        files = yield CodegenWatcher.queryFilepaths(parserConfig.baseDir, parserConfig.filepaths, filter);
      } else {
        throw new Error('Either `watchmanExpression` or `filepaths` is required to query files');
      }

      this.parseFileChanges(parserName, files);
    });

    function parseEverything(_x2) {
      return _parseEverything.apply(this, arguments);
    }

    return parseEverything;
  }();

  _proto.parseFileChanges = function parseFileChanges(parserName, files) {
    var _this4 = this;

    return Profiler.run('CodegenRunner.parseFileChanges', function () {
      var parser = _this4.parsers[parserName]; // this maybe should be await parser.parseFiles(files);

      parser.parseFiles(files);
    });
  } // We cannot do incremental writes right now.
  // When we can, this could be writeChanges(writerName, parserName, parsedDefinitions)
  ;

  _proto.write = function write(writerName) {
    var _this5 = this;

    return Profiler.asyncContext('CodegenRunner.write', /*#__PURE__*/_asyncToGenerator(function* () {
      try {
        _this5._reporter.reportMessage("\nWriting ".concat(writerName));

        var _this5$writerConfigs$ = _this5.writerConfigs[writerName],
            writeFiles = _this5$writerConfigs$.writeFiles,
            _parser2 = _this5$writerConfigs$.parser,
            baseParsers = _this5$writerConfigs$.baseParsers,
            isGeneratedFile = _this5$writerConfigs$.isGeneratedFile;
        var baseDocuments = ImmutableMap();

        if (baseParsers) {
          baseParsers.forEach(function (baseParserName) {
            !(_this5.parsers[baseParserName] != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Trying to access an uncompiled base parser config: %s', baseParserName) : invariant(false) : void 0;
            baseDocuments = baseDocuments.merge(_this5.parsers[baseParserName].documents());
          });
        }

        var _this5$parserConfigs$ = _this5.parserConfigs[_parser2],
            _baseDir = _this5$parserConfigs$.baseDir,
            generatedDirectoriesWatchmanExpression = _this5$parserConfigs$.generatedDirectoriesWatchmanExpression;
        var generatedDirectories = [];

        if (generatedDirectoriesWatchmanExpression) {
          var relativePaths = yield CodegenWatcher.queryDirectories(_baseDir, generatedDirectoriesWatchmanExpression);
          generatedDirectories = relativePaths.map(function (x) {
            return path.join(_baseDir, x);
          });
        } // always create a new writer: we have to write everything anyways


        var documents = _this5.parsers[_parser2].documents();

        var schema = Profiler.run('getSchema', function () {
          return createSchema(_this5.parserConfigs[_parser2].getSchemaSource(), baseDocuments.toArray(), _this5.parserConfigs[_parser2].schemaExtensions);
        });
        var outputDirectories = yield writeFiles({
          onlyValidate: _this5.onlyValidate,
          schema: schema,
          documents: documents,
          baseDocuments: baseDocuments,
          generatedDirectories: generatedDirectories,
          sourceControl: _this5._sourceControl,
          reporter: _this5._reporter
        });

        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(outputDirectories.values()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var dir = _step2.value;
            var all = [].concat((0, _toConsumableArray2["default"])(dir.changes.created), (0, _toConsumableArray2["default"])(dir.changes.updated), (0, _toConsumableArray2["default"])(dir.changes.deleted), (0, _toConsumableArray2["default"])(dir.changes.unchanged));

            var _iterator3 = (0, _createForOfIteratorHelper2["default"])(all),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var filename = _step3.value;

                var _filePath2 = dir.getPath(filename);

                !isGeneratedFile(_filePath2) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CodegenRunner: %s returned false for isGeneratedFile, ' + 'but was in generated directory', _filePath2) : invariant(false) : void 0;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var onCompleteCallback = _this5.onComplete;

        if (onCompleteCallback != null) {
          onCompleteCallback(Array.from(outputDirectories.values()));
        }

        var combinedChanges = CodegenDirectory.combineChanges(Array.from(outputDirectories.values()));

        _this5._reporter.reportMessage(CodegenDirectory.formatChanges(combinedChanges, {
          onlyValidate: _this5.onlyValidate
        }));

        return CodegenDirectory.hasChanges(combinedChanges) ? 'HAS_CHANGES' : 'NO_CHANGES';
      } catch (e) {
        _this5._reporter.reportError('CodegenRunner.write', e);

        return 'ERROR';
      }
    }));
  };

  _proto.watchAll = /*#__PURE__*/function () {
    var _watchAll = _asyncToGenerator(function* () {
      // get everything set up for watching
      yield this.compileAll();

      for (var parserName in this.parserConfigs) {
        yield this.watch(parserName);
      }
    });

    function watchAll() {
      return _watchAll.apply(this, arguments);
    }

    return watchAll;
  }();

  _proto.watch = /*#__PURE__*/function () {
    var _watch = _asyncToGenerator(function* (parserName) {
      var _this6 = this;

      var parserConfig = this.parserConfigs[parserName];

      if (!parserConfig.watchmanExpression) {
        throw new Error('`watchmanExpression` is required to watch files');
      } // watchCompile starts with a full set of files as the changes
      // But as we need to set everything up due to potential parser dependencies,
      // we should prevent the first watch callback from doing anything.


      var firstChange = true;
      yield CodegenWatcher.watchCompile(parserConfig.baseDir, parserConfig.watchmanExpression, parserConfig.getFileFilter ? parserConfig.getFileFilter(parserConfig.baseDir) : anyFileFilter, /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (files) {
          !(_this6.parsers[parserName] != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'Trying to watch an uncompiled parser config: %s', parserName) : invariant(false) : void 0;

          if (firstChange) {
            firstChange = false;
            return;
          }

          var dependentWriters = [];

          _this6.parserWriters[parserName].forEach(function (writer) {
            return dependentWriters.push(writer);
          });

          try {
            if (!_this6.parsers[parserName]) {
              // have to load the parser and make sure all of its dependents are set
              yield _this6.parseEverything(parserName);
            } else {
              _this6.parseFileChanges(parserName, files);
            }

            yield Promise.all(dependentWriters.map(function (writer) {
              return _this6.write(writer);
            }));
          } catch (error) {
            _this6._reporter.reportError('CodegenRunner.watch', error);
          }

          _this6._reporter.reportMessage("Watching for changes to ".concat(parserName, "..."));
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());

      this._reporter.reportMessage("Watching for changes to ".concat(parserName, "..."));
    });

    function watch(_x3) {
      return _watch.apply(this, arguments);
    }

    return watch;
  }();

  return CodegenRunner;
}();

function anyFileFilter(file) {
  return true;
}

module.exports = CodegenRunner;