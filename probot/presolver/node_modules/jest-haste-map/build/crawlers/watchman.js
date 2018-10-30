'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _normalize_path_sep;

function _load_normalize_path_sep() {
  return _normalize_path_sep = _interopRequireDefault(require('../lib/normalize_path_sep'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _fbWatchman;

function _load_fbWatchman() {
  return _fbWatchman = _interopRequireDefault(require('fb-watchman'));
}

var _constants;

function _load_constants() {
  return _constants = _interopRequireDefault(require('../constants'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const watchmanURL = 'https://facebook.github.io/watchman/docs/troubleshooting.html';

function WatchmanError(error) {
  error.message = `Watchman error: ${error.message.trim()}. Make sure watchman ` + `is running for this project. See ${watchmanURL}.`;
  return error;
}

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (options) {
    let getWatchmanRoots = (() => {
      var _ref2 = _asyncToGenerator(function* (roots) {
        const watchmanRoots = new Map();
        yield Promise.all(roots.map((() => {
          var _ref3 = _asyncToGenerator(function* (root) {
            const response = yield cmd('watch-project', root);
            const existing = watchmanRoots.get(response.watch);
            // A root can only be filtered if it was never seen with a relative_path before
            const canBeFiltered = !existing || existing.length > 0;

            if (canBeFiltered) {
              if (response.relative_path) {
                watchmanRoots.set(response.watch, (existing || []).concat(response.relative_path));
              } else {
                // Make the filter directories an empty array to signal that this root
                // was already seen and needs to be watched for all files/directories
                watchmanRoots.set(response.watch, []);
              }
            }
          });

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        })()));
        return watchmanRoots;
      });

      return function getWatchmanRoots(_x2) {
        return _ref2.apply(this, arguments);
      };
    })();

    let queryWatchmanForDirs = (() => {
      var _ref4 = _asyncToGenerator(function* (rootProjectDirMappings) {
        const files = new Map();
        let isFresh = false;
        yield Promise.all(Array.from(rootProjectDirMappings).map((() => {
          var _ref6 = _asyncToGenerator(function* (_ref5) {
            var _ref7 = _slicedToArray(_ref5, 2);

            let root = _ref7[0],
                directoryFilters = _ref7[1];

            const expression = Array.from(defaultWatchExpression);
            if (directoryFilters.length > 0) {
              expression.push(['anyof'].concat(_toConsumableArray(directoryFilters.map(function (dir) {
                return ['dirname', dir];
              }))));
            }
            const fields = ['name', 'exists', 'mtime_ms'];

            const query = clocks[root] ? // Use the `since` generator if we have a clock available
            { expression, fields, since: clocks[root] } : // Otherwise use the `suffix` generator
            { expression, fields, suffix: extensions };

            const response = yield cmd('query', root, query);
            if ('warning' in response) {
              console.warn('watchman warning: ', response.warning);
            }
            isFresh = isFresh || response.is_fresh_instance;
            files.set(root, response);
          });

          return function (_x5) {
            return _ref6.apply(this, arguments);
          };
        })()));

        return {
          files,
          isFresh
        };
      });

      return function queryWatchmanForDirs(_x4) {
        return _ref4.apply(this, arguments);
      };
    })();

    const data = options.data,
          extensions = options.extensions,
          ignore = options.ignore,
          roots = options.roots;

    const defaultWatchExpression = ['allof', ['type', 'f'], ['anyof'].concat(extensions.map(function (extension) {
      return ['suffix', extension];
    }))];
    const clocks = data.clocks;

    const client = new (_fbWatchman || _load_fbWatchman()).default.Client();
    let clientError;
    client.on('error', function (error) {
      return clientError = WatchmanError(error);
    });

    const cmd = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve, reject) {
        return client.command(args, function (error, result) {
          return error ? reject(WatchmanError(error)) : resolve(result);
        });
      });
    };

    let files = data.files;
    let watchmanFiles;
    try {
      const watchmanRoots = yield getWatchmanRoots(roots);
      const watchmanFileResults = yield queryWatchmanForDirs(watchmanRoots);
      // Reset the file map if watchman was restarted and sends us a list of files.
      if (watchmanFileResults.isFresh) {
        files = Object.create(null);
      }
      watchmanFiles = watchmanFileResults.files;
    } finally {
      client.end();
    }

    if (clientError) {
      throw clientError;
    }

    for (const _ref8 of watchmanFiles) {
      var _ref9 = _slicedToArray(_ref8, 2);

      const watchRoot = _ref9[0];
      const response = _ref9[1];

      const fsRoot = (0, (_normalize_path_sep || _load_normalize_path_sep()).default)(watchRoot);
      clocks[fsRoot] = response.clock;
      for (const fileData of response.files) {
        const name = fsRoot + (_path || _load_path()).default.sep + (0, (_normalize_path_sep || _load_normalize_path_sep()).default)(fileData.name);
        if (!fileData.exists) {
          delete files[name];
        } else if (!ignore(name)) {
          const mtime = typeof fileData.mtime_ms === 'number' ? fileData.mtime_ms : fileData.mtime_ms.toNumber();
          const existingFileData = data.files[name];
          const isOld = existingFileData && existingFileData[(_constants || _load_constants()).default.MTIME] === mtime;
          if (isOld) {
            files[name] = existingFileData;
          } else {
            // See ../constants.js
            files[name] = ['', mtime, 0, []];
          }
        }
      }
    }

    data.files = files;
    return data;
  });

  function watchmanCrawl(_x) {
    return _ref.apply(this, arguments);
  }

  return watchmanCrawl;
})();