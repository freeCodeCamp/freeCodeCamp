(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.prettier = factory());
}(this, (function () { 'use strict';

var name = "prettier";
var version$1 = "1.15.1";
var description = "Prettier is an opinionated code formatter";
var bin = {
  "prettier": "./bin/prettier.js"
};
var repository = "prettier/prettier";
var homepage = "https://prettier.io";
var author = "James Long";
var license = "MIT";
var main = "./index.js";
var engines = {
  "node": ">=6"
};
var dependencies = {
  "@angular/compiler": "6.1.10",
  "@babel/code-frame": "7.0.0-beta.46",
  "@babel/parser": "7.1.5",
  "@glimmer/syntax": "0.30.3",
  "@iarna/toml": "2.0.0",
  "angular-estree-parser": "1.1.3",
  "angular-html-parser": "1.0.0",
  "camelcase": "4.1.0",
  "chalk": "2.1.0",
  "cjk-regex": "2.0.0",
  "cosmiconfig": "5.0.6",
  "dashify": "0.2.2",
  "dedent": "0.7.0",
  "diff": "3.2.0",
  "editorconfig": "0.15.2",
  "editorconfig-to-prettier": "0.1.0",
  "emoji-regex": "6.5.1",
  "escape-string-regexp": "1.0.5",
  "esutils": "2.0.2",
  "find-parent-dir": "0.3.0",
  "find-project-root": "1.1.1",
  "flow-parser": "0.84.0",
  "get-stream": "3.0.0",
  "globby": "6.1.0",
  "graphql": "0.13.2",
  "html-element-attributes": "2.0.0",
  "html-styles": "1.0.0",
  "html-tag-names": "1.1.2",
  "ignore": "3.3.7",
  "jest-docblock": "23.2.0",
  "json-stable-stringify": "1.0.1",
  "leven": "2.1.0",
  "lines-and-columns": "1.1.6",
  "linguist-languages": "6.2.1-dev.20180706",
  "lodash.uniqby": "4.7.0",
  "mem": "1.1.0",
  "minimatch": "3.0.4",
  "minimist": "1.2.0",
  "n-readlines": "1.0.0",
  "normalize-path": "3.0.0",
  "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee",
  "postcss-less": "1.1.5",
  "postcss-media-query-parser": "0.2.3",
  "postcss-scss": "1.0.6",
  "postcss-selector-parser": "2.2.3",
  "postcss-values-parser": "1.5.0",
  "regexp-util": "1.2.2",
  "remark-math": "1.0.4",
  "remark-parse": "5.0.0",
  "resolve": "1.5.0",
  "semver": "5.4.1",
  "string-width": "2.1.1",
  "typescript": "3.0.1",
  "typescript-estree": "1.0.0",
  "unicode-regex": "2.0.0",
  "unified": "6.1.6",
  "vnopts": "1.0.2",
  "yaml": "1.0.0-rc.8",
  "yaml-unist-parser": "1.0.0-rc.4"
};
var devDependencies = {
  "@babel/cli": "7.1.5",
  "@babel/core": "7.1.5",
  "@babel/preset-env": "7.1.5",
  "babel-loader": "8.0.4",
  "benchmark": "2.1.4",
  "builtin-modules": "2.0.0",
  "codecov": "2.2.0",
  "cross-env": "5.0.5",
  "eslint": "4.18.2",
  "eslint-config-prettier": "2.9.0",
  "eslint-friendly-formatter": "3.0.0",
  "eslint-plugin-import": "2.9.0",
  "eslint-plugin-prettier": "2.6.0",
  "eslint-plugin-react": "7.7.0",
  "execa": "0.10.0",
  "jest": "23.3.0",
  "jest-junit": "5.0.0",
  "jest-snapshot-serializer-ansi": "1.0.0",
  "jest-snapshot-serializer-raw": "1.1.0",
  "jest-watch-typeahead": "0.1.0",
  "mkdirp": "0.5.1",
  "prettier": "1.15.0",
  "prettylint": "1.0.0",
  "rimraf": "2.6.2",
  "rollup": "0.47.6",
  "rollup-plugin-alias": "1.4.0",
  "rollup-plugin-babel": "4.0.0-beta.4",
  "rollup-plugin-commonjs": "8.2.6",
  "rollup-plugin-json": "2.1.1",
  "rollup-plugin-node-builtins": "2.0.0",
  "rollup-plugin-node-globals": "1.1.0",
  "rollup-plugin-node-resolve": "2.0.0",
  "rollup-plugin-replace": "1.2.1",
  "rollup-plugin-uglify": "3.0.0",
  "shelljs": "0.8.1",
  "snapshot-diff": "0.4.0",
  "strip-ansi": "4.0.0",
  "tempy": "0.2.1",
  "webpack": "3.12.0"
};
var resolutions = {
  "@babel/code-frame": "7.0.0-beta.46"
};
var scripts = {
  "prepublishOnly": "echo \"Error: must publish from dist/\" && exit 1",
  "prepare-release": "yarn && yarn build && yarn test:dist",
  "test": "jest",
  "test:dist": "node ./scripts/test-dist.js",
  "test-integration": "jest tests_integration",
  "perf-repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
  "perf-repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
  "perf-benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
  "lint": "cross-env EFF_NO_LINK_RULES=true eslint . --format node_modules/eslint-friendly-formatter",
  "lint-docs": "prettylint {.,docs,website,website/blog}/*.md",
  "build": "node --max-old-space-size=2048 ./scripts/build/build.js",
  "build-docs": "node ./scripts/build-docs.js",
  "check-deps": "node ./scripts/check-deps.js"
};
var _package = {
  name: name,
  version: version$1,
  description: description,
  bin: bin,
  repository: repository,
  homepage: homepage,
  author: author,
  license: license,
  main: main,
  engines: engines,
  dependencies: dependencies,
  devDependencies: devDependencies,
  resolutions: resolutions,
  scripts: scripts
};

var _package$1 = Object.freeze({
	name: name,
	version: version$1,
	description: description,
	bin: bin,
	repository: repository,
	homepage: homepage,
	author: author,
	license: license,
	main: main,
	engines: engines,
	dependencies: dependencies,
	devDependencies: devDependencies,
	resolutions: resolutions,
	scripts: scripts,
	default: _package
});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var base = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports['default'] =
  /*istanbul ignore end*/
  Diff;

  function Diff() {}

  Diff.prototype = {
    /*istanbul ignore start*/

    /*istanbul ignore end*/
    diff: function diff(oldString, newString) {
      /*istanbul ignore start*/
      var
      /*istanbul ignore end*/
      options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath =
          /*istanbul ignore start*/
          void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    equals: function equals(left, right) {
      return left === right;
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    castInput: function castInput(value) {
      return value;
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    tokenize: function tokenize(value) {
      return value.split('');
    },

    /*istanbul ignore start*/

    /*istanbul ignore end*/
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored. For this case we merge the
    // terminal into the prior string and drop the change.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }
});
unwrapExports(base);

var character = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.characterDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffChars = diffChars;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var characterDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  characterDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  function diffChars(oldStr, newStr, callback) {
    return characterDiff.diff(oldStr, newStr, callback);
  }
});
unwrapExports(character);

var params = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  generateOptions = generateOptions;

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }
});
unwrapExports(params);

var word = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.wordDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffWords = diffWords;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWordsWithSpace = diffWordsWithSpace;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);
  /*istanbul ignore end*/

  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/
  // Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF


  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  wordDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  wordDiff.equals = function (left, right) {
    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, callback) {
    var options =
    /*istanbul ignore start*/
    (0, params.generateOptions
    /*istanbul ignore end*/
    )(callback, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }

  function diffWordsWithSpace(oldStr, newStr, callback) {
    return wordDiff.diff(oldStr, newStr, callback);
  }
});
unwrapExports(word);

var line = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.lineDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffLines = diffLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffTrimmedLines = diffTrimmedLines;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);
  /*istanbul ignore end*/

  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var lineDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  lineDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }

  function diffTrimmedLines(oldStr, newStr, callback) {
    var options =
    /*istanbul ignore start*/
    (0, params.generateOptions
    /*istanbul ignore end*/
    )(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }
});
unwrapExports(line);

var sentence = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.sentenceDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffSentences = diffSentences;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var sentenceDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  sentenceDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }
});
unwrapExports(sentence);

var css = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.cssDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffCss = diffCss;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var cssDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  cssDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }
});
unwrapExports(css);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

function _addElementPlacement(element, placements, silent) {
  var keys = placements[element.placement];

  if (!silent && keys.indexOf(element.key) !== -1) {
    throw new TypeError("Duplicated element (" + element.key + ")");
  }

  keys.push(element.key);
}

function _fromElementDescriptor(element) {
  var obj = {
    kind: element.kind,
    key: element.key,
    placement: element.placement,
    descriptor: element.descriptor
  };
  var desc = {
    value: "Descriptor",
    configurable: true
  };
  Object.defineProperty(obj, Symbol.toStringTag, desc);
  if (element.kind === "field") obj.initializer = element.initializer;
  return obj;
}

function _toElementDescriptors(elementObjects) {
  if (elementObjects === undefined) return;
  return _toArray(elementObjects).map(function (elementObject) {
    var element = _toElementDescriptor(elementObject);

    _disallowProperty(elementObject, "finisher", "An element descriptor");

    _disallowProperty(elementObject, "extras", "An element descriptor");

    return element;
  });
}

function _toElementDescriptor(elementObject) {
  var kind = String(elementObject.kind);

  if (kind !== "method" && kind !== "field") {
    throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
  }

  var key = _toPropertyKey(elementObject.key);

  var placement = String(elementObject.placement);

  if (placement !== "static" && placement !== "prototype" && placement !== "own") {
    throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
  }

  var descriptor = elementObject.descriptor;

  _disallowProperty(elementObject, "elements", "An element descriptor");

  var element = {
    kind: kind,
    key: key,
    placement: placement,
    descriptor: Object.assign({}, descriptor)
  };

  if (kind !== "field") {
    _disallowProperty(elementObject, "initializer", "A method descriptor");
  } else {
    _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");

    _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");

    _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");

    element.initializer = elementObject.initializer;
  }

  return element;
}

function _toElementFinisherExtras(elementObject) {
  var element = _toElementDescriptor(elementObject);

  var finisher = _optionalCallableProperty(elementObject, "finisher");

  var extras = _toElementDescriptors(elementObject.extras);

  return {
    element: element,
    finisher: finisher,
    extras: extras
  };
}

function _fromClassDescriptor(elements) {
  var obj = {
    kind: "class",
    elements: elements.map(_fromElementDescriptor)
  };
  var desc = {
    value: "Descriptor",
    configurable: true
  };
  Object.defineProperty(obj, Symbol.toStringTag, desc);
  return obj;
}

function _toClassDescriptor(obj) {
  var kind = String(obj.kind);

  if (kind !== "class") {
    throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
  }

  _disallowProperty(obj, "key", "A class descriptor");

  _disallowProperty(obj, "placement", "A class descriptor");

  _disallowProperty(obj, "descriptor", "A class descriptor");

  _disallowProperty(obj, "initializer", "A class descriptor");

  _disallowProperty(obj, "extras", "A class descriptor");

  var finisher = _optionalCallableProperty(obj, "finisher");

  var elements = _toElementDescriptors(obj.elements);

  return {
    elements: elements,
    finisher: finisher
  };
}

function _disallowProperty(obj, name, objectType) {
  if (obj[name] !== undefined) {
    throw new TypeError(objectType + " can't have a ." + name + " property.");
  }
}

function _optionalCallableProperty(obj, name) {
  var value = obj[name];

  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }

  return value;
}

var json = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.jsonDiff = undefined;

  var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : _typeof(obj);
  };

  exports.
  /*istanbul ignore end*/
  diffJson = diffJson;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  canonicalize = canonicalize;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault$$1(base);
  /*istanbul ignore end*/

  /*istanbul ignore start*/


  function _interopRequireDefault$$1(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  jsonDiff = new
  /*istanbul ignore start*/
  _base2['default'](); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize =
  /*istanbul ignore start*/
  line.lineDiff.
  /*istanbul ignore end*/
  tokenize;

  jsonDiff.castInput = function (value) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    undefinedReplacement = this.options.undefinedReplacement;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), function (k, v) {
      if (typeof v === 'undefined') {
        return undefinedReplacement;
      }

      return v;
    }, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return (
      /*istanbul ignore start*/
      _base2['default'].
      /*istanbul ignore end*/
      prototype.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
    );
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed.


  function canonicalize(obj, stack, replacementStack) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    var i =
    /*istanbul ignore start*/
    void 0;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj =
    /*istanbul ignore start*/
    void 0;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (
    /*istanbul ignore start*/
    (typeof
    /*istanbul ignore end*/
    obj === 'undefined' ? 'undefined' : _typeof$$1(obj)) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [],
          key =
      /*istanbul ignore start*/
      void 0;

      for (key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(key)) {
          sortedKeys.push(key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        key = sortedKeys[i];
        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }
});
unwrapExports(json);

var array = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.arrayDiff = undefined;
  exports.
  /*istanbul ignore end*/
  diffArrays = diffArrays;
  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  var arrayDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  arrayDiff = new
  /*istanbul ignore start*/
  _base2['default']();

  arrayDiff.tokenize = arrayDiff.join = function (value) {
    return value.slice();
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }
});
unwrapExports(array);

var parse = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  parsePatch = parsePatch;

  function parsePatch(uniDiff) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var headerPattern = /^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/;
      var fileHeader = headerPattern.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        index[keyPrefix + 'FileName'] = fileHeader[2];
        index[keyPrefix + 'Header'] = fileHeader[3];
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: +chunkHeader[2] || 1,
        newStart: +chunkHeader[3],
        newLines: +chunkHeader[4] || 1,
        lines: [],
        linedelimiters: []
      };
      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }
});
unwrapExports(parse);

var distanceIterator = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  "use strict";

  exports.__esModule = true;

  exports["default"] =
  /*istanbul ignore end*/
  function (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text lenght, then
      // hunk can't fit on the text. Return undefined

    };
  };
});
unwrapExports(distanceIterator);

var apply = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  applyPatch = applyPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatches = applyPatches;
  /*istanbul ignore start*/

  var _distanceIterator2 = _interopRequireDefault(distanceIterator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }
  /*istanbul ignore end*/


  function applyPatch(source, uniDiff) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    if (typeof uniDiff === 'string') {
      uniDiff =
      /*istanbul ignore start*/
      (0, parse.parsePatch
      /*istanbul ignore end*/
      )(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent)
    /*istanbul ignore start*/
    {
      return (
        /*istanbul ignore end*/
        line === patchContent
      );
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ,
        addEOFNL =
    /*istanbul ignore start*/
    void 0;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line[0],
            content = line.substr(1);

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator =
      /*istanbul ignore start*/
      (0, _distanceIterator2['default']
      /*istanbul ignore end*/
      )(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.offset + _hunk.newStart - 1;

      if (_hunk.newLines == 0) {
        _toPos++;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line[0],
            content = line.substr(1),
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.


  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff =
      /*istanbul ignore start*/
      (0, parse.parsePatch
      /*istanbul ignore end*/
      )(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }
});
unwrapExports(apply);

var create = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  structuredPatch = structuredPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createTwoFilesPatch = createTwoFilesPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createPatch = createPatch;
  /*istanbul ignore start*/

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  /*istanbul ignore end*/


  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff =
    /*istanbul ignore start*/
    (0, line.diffLines
    /*istanbul ignore end*/
    )(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;
    /*istanbul ignore start*/

    var _loop = function _loop(
    /*istanbul ignore end*/
    i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        /*istanbul ignore start*/
        var _curRange;
        /*istanbul ignore end*/
        // If we have previous context, start with that


        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes

        /*istanbul ignore start*/


        (_curRange =
        /*istanbul ignore end*/
        curRange).push.
        /*istanbul ignore start*/
        apply
        /*istanbul ignore end*/
        (
        /*istanbul ignore start*/
        _curRange
        /*istanbul ignore end*/
        ,
        /*istanbul ignore start*/
        _toConsumableArray(
        /*istanbul ignore end*/
        lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            /*istanbul ignore start*/
            var _curRange2;
            /*istanbul ignore end*/
            // Overlapping

            /*istanbul ignore start*/


            (_curRange2 =
            /*istanbul ignore end*/
            curRange).push.
            /*istanbul ignore start*/
            apply
            /*istanbul ignore end*/
            (
            /*istanbul ignore start*/
            _curRange2
            /*istanbul ignore end*/
            ,
            /*istanbul ignore start*/
            _toConsumableArray(
            /*istanbul ignore end*/
            contextLines(lines)));
          } else {
            /*istanbul ignore start*/
            var _curRange3;
            /*istanbul ignore end*/
            // end the range and output


            var contextSize = Math.min(lines.length, options.context);
            /*istanbul ignore start*/

            (_curRange3 =
            /*istanbul ignore end*/
            curRange).push.
            /*istanbul ignore start*/
            apply
            /*istanbul ignore end*/
            (
            /*istanbul ignore start*/
            _curRange3
            /*istanbul ignore end*/
            ,
            /*istanbul ignore start*/
            _toConsumableArray(
            /*istanbul ignore end*/
            contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);

              if (lines.length == 0 && !oldEOFNewline) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              } else if (!oldEOFNewline || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      /*istanbul ignore start*/
      _loop(
      /*istanbul ignore end*/
      i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }

  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    var ret = [];

    if (oldFileName == newFileName) {
      ret.push('Index: ' + oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i];
      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }

  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }
});
unwrapExports(create);

var dmp = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  "use strict";

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  convertChangesToDMP = convertChangesToDMP; // See: http://code.google.com/p/google-diff-match-patch/wiki/API

  function convertChangesToDMP(changes) {
    var ret = [],
        change =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ,
        operation =
    /*istanbul ignore start*/
    void 0;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }
});
unwrapExports(dmp);

var xml = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  convertChangesToXML = convertChangesToXML;

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }
});
unwrapExports(xml);

var lib = createCommonjsModule(function (module, exports) {
  /*istanbul ignore start*/
  'use strict';

  exports.__esModule = true;
  exports.canonicalize = exports.convertChangesToXML = exports.convertChangesToDMP = exports.parsePatch = exports.applyPatches = exports.applyPatch = exports.createPatch = exports.createTwoFilesPatch = exports.structuredPatch = exports.diffArrays = exports.diffJson = exports.diffCss = exports.diffSentences = exports.diffTrimmedLines = exports.diffLines = exports.diffWordsWithSpace = exports.diffWords = exports.diffChars = exports.Diff = undefined;
  /*istanbul ignore end*/

  /*istanbul ignore start*/

  var _base2 = _interopRequireDefault(base);
  /*istanbul ignore end*/

  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      'default': obj
    };
  }

  exports.
  /*istanbul ignore end*/
  Diff = _base2['default'];
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffChars = character.diffChars;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWords = word.diffWords;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffWordsWithSpace = word.diffWordsWithSpace;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffLines = line.diffLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffTrimmedLines = line.diffTrimmedLines;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffSentences = sentence.diffSentences;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffCss = css.diffCss;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffJson = json.diffJson;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  diffArrays = array.diffArrays;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  structuredPatch = create.structuredPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createTwoFilesPatch = create.createTwoFilesPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  createPatch = create.createPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatch = apply.applyPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatches = apply.applyPatches;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  parsePatch = parse.parsePatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  convertChangesToDMP = dmp.convertChangesToDMP;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  convertChangesToXML = xml.convertChangesToXML;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  canonicalize = json.canonicalize;
  /* See LICENSE file for terms of use */

  /*
   * Text diff implementation.
   *
   * This library supports the following APIS:
   * JsDiff.diffChars: Character by character diff
   * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
   * JsDiff.diffLines: Line based diff
   *
   * JsDiff.diffCss: Diff targeted at CSS content
   *
   * These methods are based on the implementation proposed in
   * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
   * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
   */
});
unwrapExports(lib);

var _shim_fs = {};

var _shim_fs$1 = Object.freeze({
	default: _shim_fs
});

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
var normalizePath = function normalizePath(path, stripTrailing) {
  if (typeof path !== 'string') {
    throw new TypeError('expected path to be a string');
  }

  if (path === '\\' || path === '/') return '/';
  var len = path.length;
  if (len <= 1) return path; // ensure that win32 namespaces has two leading slashes, so that the path is
  // handled properly by the win32 version of path.parse() after being normalized
  // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces

  var prefix = '';

  if (len > 4 && path[3] === '\\') {
    var ch = path[2];

    if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
      path = path.slice(2);
      prefix = '//';
    }
  }

  var segs = path.split(/[/\\]+/);

  if (stripTrailing !== false && segs[segs.length - 1] === '') {
    segs.pop();
  }

  return prefix + segs.join('/');
};

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;

function init() {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray(b64) {
  if (!inited) {
    init();
  }

  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice


  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

  arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  if (!inited) {
    init();
  }

  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);
  return parts.join('');
}

function read(buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function write(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;
var isArray$1 = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */

var INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;
function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    // Object.defineProperty(Buffer, Symbol.species, {
    //   value: null,
    //   configurable: true
    // })
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray$1(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}


Buffer.isBuffer = isBuffer;

function internalIsBuffer(b) {
  return !!(b != null && b._isBuffer);
}

Buffer.compare = function compare(a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray$1(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read$$1(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read$$1(arr, i + j) !== read$$1(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write$$1(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf);
  } else {
    return fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
} // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually


function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}

function isFastBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
}

var fs = ( _shim_fs$1 && _shim_fs ) || _shim_fs$1;

/**
 * @class
 */


var LineByLine =
/*#__PURE__*/
function () {
  function LineByLine(file, options) {
    _classCallCheck(this, LineByLine);

    options = options || {};
    if (!options.readChunk) options.readChunk = 1024;

    if (!options.newLineCharacter) {
      options.newLineCharacter = 0x0a; //linux line ending
    } else {
      options.newLineCharacter = options.newLineCharacter.charCodeAt(0);
    }

    if (typeof file === 'number') {
      this.fd = file;
    } else {
      this.fd = fs.openSync(file, 'r');
    }

    this.options = options;
    this.newLineCharacter = options.newLineCharacter;
    this.reset();
  }

  _createClass(LineByLine, [{
    key: "_searchInBuffer",
    value: function _searchInBuffer(buffer, hexNeedle) {
      var found = -1;

      for (var i = 0; i <= buffer.length; i++) {
        var b_byte = buffer[i];

        if (b_byte === hexNeedle) {
          found = i;
          break;
        }
      }

      return found;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.eofReached = false;
      this.linesCache = [];
      this.fdPosition = 0;
    }
  }, {
    key: "close",
    value: function close() {
      fs.closeSync(this.fd);
      this.fd = null;
    }
  }, {
    key: "_extractLines",
    value: function _extractLines(buffer) {
      var line;
      var lines = [];
      var bufferPosition = 0;
      var lastNewLineBufferPosition = 0;

      while (true) {
        var bufferPositionValue = buffer[bufferPosition++];

        if (bufferPositionValue === this.newLineCharacter) {
          line = buffer.slice(lastNewLineBufferPosition, bufferPosition);
          lines.push(line);
          lastNewLineBufferPosition = bufferPosition;
        } else if (!bufferPositionValue) {
          break;
        }
      }

      var leftovers = buffer.slice(lastNewLineBufferPosition, bufferPosition);

      if (leftovers.length) {
        lines.push(leftovers);
      }

      return lines;
    }
  }, {
    key: "_readChunk",
    value: function _readChunk(lineLeftovers) {
      var totalBytesRead = 0;
      var bytesRead;
      var buffers = [];

      do {
        var readBuffer = new Buffer(this.options.readChunk);
        bytesRead = fs.readSync(this.fd, readBuffer, 0, this.options.readChunk, this.fdPosition);
        totalBytesRead = totalBytesRead + bytesRead;
        this.fdPosition = this.fdPosition + bytesRead;
        buffers.push(readBuffer);
      } while (bytesRead && this._searchInBuffer(buffers[buffers.length - 1], this.options.newLineCharacter) === -1);

      var bufferData = Buffer.concat(buffers);

      if (bytesRead < this.options.readChunk) {
        this.eofReached = true;
        bufferData = bufferData.slice(0, totalBytesRead);
      }

      if (totalBytesRead) {
        this.linesCache = this._extractLines(bufferData);

        if (lineLeftovers) {
          this.linesCache[0] = Buffer.concat([lineLeftovers, this.linesCache[0]]);
        }
      }

      return totalBytesRead;
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.fd) return false;
      var line = false;

      if (this.eofReached && this.linesCache.length === 0) {
        return line;
      }

      var bytesRead;

      if (!this.linesCache.length) {
        bytesRead = this._readChunk();
      }

      if (this.linesCache.length) {
        line = this.linesCache.shift();
        var lastLineCharacter = line[line.length - 1];

        if (lastLineCharacter !== 0x0a) {
          bytesRead = this._readChunk(line);

          if (bytesRead) {
            line = this.linesCache.shift();
          }
        }
      }

      if (this.eofReached && this.linesCache.length === 0) {
        this.close();
      }

      if (line && line[line.length - 1] === this.newLineCharacter) {
        line = line.slice(0, line.length - 1);
      }

      return line;
    }
  }]);

  return LineByLine;
}();

var readlines = LineByLine;

var ConfigError =
/*#__PURE__*/
function (_Error) {
  _inherits(ConfigError, _Error);

  function ConfigError() {
    _classCallCheck(this, ConfigError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfigError).apply(this, arguments));
  }

  return ConfigError;
}(_wrapNativeSuper(Error));

var DebugError =
/*#__PURE__*/
function (_Error2) {
  _inherits(DebugError, _Error2);

  function DebugError() {
    _classCallCheck(this, DebugError);

    return _possibleConstructorReturn(this, _getPrototypeOf(DebugError).apply(this, arguments));
  }

  return DebugError;
}(_wrapNativeSuper(Error));

var UndefinedParserError$1 =
/*#__PURE__*/
function (_Error3) {
  _inherits(UndefinedParserError, _Error3);

  function UndefinedParserError() {
    _classCallCheck(this, UndefinedParserError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UndefinedParserError).apply(this, arguments));
  }

  return UndefinedParserError;
}(_wrapNativeSuper(Error));

var errors = {
  ConfigError: ConfigError,
  DebugError: DebugError,
  UndefinedParserError: UndefinedParserError$1
};

// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;

if (typeof global$1.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}

if (typeof global$1.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

function nextTick(fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
} // v8 likes predictible objects

function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version$2 = ''; // empty string to avoid regexp issues

var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error('process.binding is not supported');
}
function cwd() {
  return '/';
}
function chdir(dir) {
  throw new Error('process.chdir is not supported');
}

function umask() {
  return 0;
} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

var performance = global$1.performance || {};

var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime


function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];

    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }

  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}
var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version$2,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var semver = createCommonjsModule(function (module, exports) {
  exports = module.exports = SemVer; // The debug function is excluded entirely from the minified version.

  /* nomin */

  var debug;
  /* nomin */

  if (_typeof(process) === 'object' &&
  /* nomin */
  process.env &&
  /* nomin */
  process.env.NODE_DEBUG &&
  /* nomin */
  /\bsemver\b/i.test(process.env.NODE_DEBUG))
    /* nomin */
    debug = function debug() {
      /* nomin */
      var args = Array.prototype.slice.call(arguments, 0);
      /* nomin */

      args.unshift('SEMVER');
      /* nomin */

      console.log.apply(console, args);
      /* nomin */
    };
    /* nomin */
  else
    /* nomin */
    debug = function debug() {}; // Note: this is the semver.org version of the spec that it implements
  // Not necessarily the package version of this code.

  exports.SEMVER_SPEC_VERSION = '2.0.0';
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // The actual regexps go on exports.re

  var re = exports.re = [];
  var src = exports.src = [];
  var R = 0; // The following Regular Expressions can be used for tokenizing,
  // validating, and parsing SemVer version strings.
  // ## Numeric Identifier
  // A single `0`, or a non-zero digit followed by zero or more digits.

  var NUMERICIDENTIFIER = R++;
  src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
  var NUMERICIDENTIFIERLOOSE = R++;
  src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
  // Zero or more digits, followed by a letter or hyphen, and then zero or
  // more letters, digits, or hyphens.

  var NONNUMERICIDENTIFIER = R++;
  src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
  // Three dot-separated numeric identifiers.

  var MAINVERSION = R++;
  src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
  var MAINVERSIONLOOSE = R++;
  src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
  // A numeric identifier, or a non-numeric identifier.

  var PRERELEASEIDENTIFIER = R++;
  src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
  var PRERELEASEIDENTIFIERLOOSE = R++;
  src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
  // Hyphen, followed by one or more dot-separated pre-release version
  // identifiers.

  var PRERELEASE = R++;
  src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
  var PRERELEASELOOSE = R++;
  src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
  // Any combination of digits, letters, or hyphens.

  var BUILDIDENTIFIER = R++;
  src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
  // Plus sign, followed by one or more period-separated build metadata
  // identifiers.

  var BUILD = R++;
  src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'; // ## Full Version String
  // A main version, followed optionally by a pre-release version and
  // build metadata.
  // Note that the only major, minor, patch, and pre-release sections of
  // the version string are capturing groups.  The build metadata is not a
  // capturing group, because it should not ever be used in version
  // comparison.

  var FULL = R++;
  var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
  src[FULL] = '^' + FULLPLAIN + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
  // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
  // common in the npm registry.

  var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
  var LOOSE = R++;
  src[LOOSE] = '^' + LOOSEPLAIN + '$';
  var GTLT = R++;
  src[GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
  // Note that "x.x" is a valid xRange identifer, meaning "any version"
  // Only the first item is strictly required.

  var XRANGEIDENTIFIERLOOSE = R++;
  src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
  var XRANGEIDENTIFIER = R++;
  src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
  var XRANGEPLAIN = R++;
  src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
  var XRANGEPLAINLOOSE = R++;
  src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
  var XRANGE = R++;
  src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
  var XRANGELOOSE = R++;
  src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'; // Tilde ranges.
  // Meaning is "reasonably at or greater than"

  var LONETILDE = R++;
  src[LONETILDE] = '(?:~>?)';
  var TILDETRIM = R++;
  src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
  re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
  var tildeTrimReplace = '$1~';
  var TILDE = R++;
  src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
  var TILDELOOSE = R++;
  src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'; // Caret ranges.
  // Meaning is "at least and backwards compatible with"

  var LONECARET = R++;
  src[LONECARET] = '(?:\\^)';
  var CARETTRIM = R++;
  src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
  re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
  var caretTrimReplace = '$1^';
  var CARET = R++;
  src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
  var CARETLOOSE = R++;
  src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

  var COMPARATORLOOSE = R++;
  src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
  var COMPARATOR = R++;
  src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
  // it modifies, so that `> 1.2.3` ==> `>1.2.3`

  var COMPARATORTRIM = R++;
  src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'; // this one has to use the /g flag

  re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
  var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
  // Note that these all use the loose form, because they'll be
  // checked against either the strict or loose comparator form
  // later.

  var HYPHENRANGE = R++;
  src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
  var HYPHENRANGELOOSE = R++;
  src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

  var STAR = R++;
  src[STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
  // All are flag-free, unless they were created above with a flag.

  for (var i = 0; i < R; i++) {
    debug(i, src[i]);
    if (!re[i]) re[i] = new RegExp(src[i]);
  }

  exports.parse = parse;

  function parse(version, loose) {
    if (version instanceof SemVer) return version;
    if (typeof version !== 'string') return null;
    if (version.length > MAX_LENGTH) return null;
    var r = loose ? re[LOOSE] : re[FULL];
    if (!r.test(version)) return null;

    try {
      return new SemVer(version, loose);
    } catch (er) {
      return null;
    }
  }

  exports.valid = valid;

  function valid(version, loose) {
    var v = parse(version, loose);
    return v ? v.version : null;
  }

  exports.clean = clean;

  function clean(version, loose) {
    var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
    return s ? s.version : null;
  }

  exports.SemVer = SemVer;

  function SemVer(version, loose) {
    if (version instanceof SemVer) {
      if (version.loose === loose) return version;else version = version.version;
    } else if (typeof version !== 'string') {
      throw new TypeError('Invalid Version: ' + version);
    }

    if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
    if (!(this instanceof SemVer)) return new SemVer(version, loose);
    debug('SemVer', version, loose);
    this.loose = loose;
    var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
    if (!m) throw new TypeError('Invalid Version: ' + version);
    this.raw = version; // these are actually numbers

    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version'); // numberify any prerelease numeric ids

    if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
      }

      return id;
    });
    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  SemVer.prototype.format = function () {
    this.version = this.major + '.' + this.minor + '.' + this.patch;
    if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
    return this.version;
  };

  SemVer.prototype.toString = function () {
    return this.version;
  };

  SemVer.prototype.compare = function (other) {
    debug('SemVer.compare', this.version, this.loose, other);
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
    return this.compareMain(other) || this.comparePre(other);
  };

  SemVer.prototype.compareMain = function (other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  };

  SemVer.prototype.comparePre = function (other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.loose); // NOT having a prerelease is > having one

    if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
    var i = 0;

    do {
      var a = this.prerelease[i];
      var b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
    } while (++i);
  }; // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.


  SemVer.prototype.inc = function (release$$1, identifier) {
    switch (release$$1) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;

      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;

      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.

      case 'prerelease':
        if (this.prerelease.length === 0) this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;

      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
        this.patch = 0;
        this.prerelease = [];
        break;

      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) this.patch++;
        this.prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

      case 'pre':
        if (this.prerelease.length === 0) this.prerelease = [0];else {
          var i = this.prerelease.length;

          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }

          if (i === -1) // didn't increment anything
            this.prerelease.push(0);
        }

        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
          } else this.prerelease = [identifier, 0];
        }

        break;

      default:
        throw new Error('invalid increment argument: ' + release$$1);
    }

    this.format();
    this.raw = this.version;
    return this;
  };

  exports.inc = inc;

  function inc(version, release$$1, loose, identifier) {
    if (typeof loose === 'string') {
      identifier = loose;
      loose = undefined;
    }

    try {
      return new SemVer(version, loose).inc(release$$1, identifier).version;
    } catch (er) {
      return null;
    }
  }

  exports.diff = diff;

  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse(version1);
      var v2 = parse(version2);

      if (v1.prerelease.length || v2.prerelease.length) {
        for (var key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return 'pre' + key;
            }
          }
        }

        return 'prerelease';
      }

      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return key;
          }
        }
      }
    }
  }

  exports.compareIdentifiers = compareIdentifiers;
  var numeric = /^[0-9]+$/;

  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);

    if (anum && bnum) {
      a = +a;
      b = +b;
    }

    return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
  }

  exports.rcompareIdentifiers = rcompareIdentifiers;

  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }

  exports.major = major;

  function major(a, loose) {
    return new SemVer(a, loose).major;
  }

  exports.minor = minor;

  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }

  exports.patch = patch;

  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }

  exports.compare = compare;

  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }

  exports.compareLoose = compareLoose;

  function compareLoose(a, b) {
    return compare(a, b, true);
  }

  exports.rcompare = rcompare;

  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }

  exports.sort = sort;

  function sort(list, loose) {
    return list.sort(function (a, b) {
      return exports.compare(a, b, loose);
    });
  }

  exports.rsort = rsort;

  function rsort(list, loose) {
    return list.sort(function (a, b) {
      return exports.rcompare(a, b, loose);
    });
  }

  exports.gt = gt;

  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }

  exports.lt = lt;

  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }

  exports.eq = eq;

  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }

  exports.neq = neq;

  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }

  exports.gte = gte;

  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }

  exports.lte = lte;

  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }

  exports.cmp = cmp;

  function cmp(a, op, b, loose) {
    var ret;

    switch (op) {
      case '===':
        if (_typeof(a) === 'object') a = a.version;
        if (_typeof(b) === 'object') b = b.version;
        ret = a === b;
        break;

      case '!==':
        if (_typeof(a) === 'object') a = a.version;
        if (_typeof(b) === 'object') b = b.version;
        ret = a !== b;
        break;

      case '':
      case '=':
      case '==':
        ret = eq(a, b, loose);
        break;

      case '!=':
        ret = neq(a, b, loose);
        break;

      case '>':
        ret = gt(a, b, loose);
        break;

      case '>=':
        ret = gte(a, b, loose);
        break;

      case '<':
        ret = lt(a, b, loose);
        break;

      case '<=':
        ret = lte(a, b, loose);
        break;

      default:
        throw new TypeError('Invalid operator: ' + op);
    }

    return ret;
  }

  exports.Comparator = Comparator;

  function Comparator(comp, loose) {
    if (comp instanceof Comparator) {
      if (comp.loose === loose) return comp;else comp = comp.value;
    }

    if (!(this instanceof Comparator)) return new Comparator(comp, loose);
    debug('comparator', comp, loose);
    this.loose = loose;
    this.parse(comp);
    if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
    debug('comp', this);
  }

  var ANY = {};

  Comparator.prototype.parse = function (comp) {
    var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var m = comp.match(r);
    if (!m) throw new TypeError('Invalid comparator: ' + comp);
    this.operator = m[1];
    if (this.operator === '=') this.operator = ''; // if it literally is just '>' or '' then allow anything.

    if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
  };

  Comparator.prototype.toString = function () {
    return this.value;
  };

  Comparator.prototype.test = function (version) {
    debug('Comparator.test', version, this.loose);
    if (this.semver === ANY) return true;
    if (typeof version === 'string') version = new SemVer(version, this.loose);
    return cmp(version, this.operator, this.semver, this.loose);
  };

  Comparator.prototype.intersects = function (comp, loose) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required');
    }

    var rangeTmp;

    if (this.operator === '') {
      rangeTmp = new Range(comp.value, loose);
      return satisfies(this.value, rangeTmp, loose);
    } else if (comp.operator === '') {
      rangeTmp = new Range(this.value, loose);
      return satisfies(comp.semver, rangeTmp, loose);
    }

    var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, loose) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, loose) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };

  exports.Range = Range;

  function Range(range, loose) {
    if (range instanceof Range) {
      if (range.loose === loose) {
        return range;
      } else {
        return new Range(range.raw, loose);
      }
    }

    if (range instanceof Comparator) {
      return new Range(range.value, loose);
    }

    if (!(this instanceof Range)) return new Range(range, loose);
    this.loose = loose; // First, split based on boolean or ||

    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/).map(function (range) {
      return this.parseRange(range.trim());
    }, this).filter(function (c) {
      // throw out any that are not relevant for whatever reason
      return c.length;
    });

    if (!this.set.length) {
      throw new TypeError('Invalid SemVer Range: ' + range);
    }

    this.format();
  }

  Range.prototype.format = function () {
    this.range = this.set.map(function (comps) {
      return comps.join(' ').trim();
    }).join('||').trim();
    return this.range;
  };

  Range.prototype.toString = function () {
    return this.range;
  };

  Range.prototype.parseRange = function (range) {
    var loose = this.loose;
    range = range.trim();
    debug('range', range, loose); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

    var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

    range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
    debug('comparator trim', range, re[COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

    range = range.replace(re[TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

    range = range.replace(re[CARETTRIM], caretTrimReplace); // normalize spaces

    range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var set = range.split(' ').map(function (comp) {
      return parseComparator(comp, loose);
    }).join(' ').split(/\s+/);

    if (this.loose) {
      // in loose mode, throw out any that are not valid comparators
      set = set.filter(function (comp) {
        return !!comp.match(compRe);
      });
    }

    set = set.map(function (comp) {
      return new Comparator(comp, loose);
    });
    return set;
  };

  Range.prototype.intersects = function (range, loose) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required');
    }

    return this.set.some(function (thisComparators) {
      return thisComparators.every(function (thisComparator) {
        return range.set.some(function (rangeComparators) {
          return rangeComparators.every(function (rangeComparator) {
            return thisComparator.intersects(rangeComparator, loose);
          });
        });
      });
    });
  }; // Mostly just for testing and legacy API reasons


  exports.toComparators = toComparators;

  function toComparators(range, loose) {
    return new Range(range, loose).set.map(function (comp) {
      return comp.map(function (c) {
        return c.value;
      }).join(' ').trim().split(' ');
    });
  } // comprised of xranges, tildes, stars, and gtlt's at this point.
  // already replaced the hyphen ranges
  // turn into a set of JUST comparators.


  function parseComparator(comp, loose) {
    debug('comp', comp);
    comp = replaceCarets(comp, loose);
    debug('caret', comp);
    comp = replaceTildes(comp, loose);
    debug('tildes', comp);
    comp = replaceXRanges(comp, loose);
    debug('xrange', comp);
    comp = replaceStars(comp, loose);
    debug('stars', comp);
    return comp;
  }

  function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
  } // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


  function replaceTildes(comp, loose) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceTilde(comp, loose);
    }).join(' ');
  }

  function replaceTilde(comp, loose) {
    var r = loose ? re[TILDELOOSE] : re[TILDE];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('tilde', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) // ~1.2 == >=1.2.0 <1.3.0
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
        debug('replaceTilde pr', pr);
        if (pr.charAt(0) !== '-') pr = '-' + pr;
        ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else // ~1.2.3 == >=1.2.3 <1.3.0
        ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
      debug('tilde return', ret);
      return ret;
    });
  } // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
  // ^1.2.3 --> >=1.2.3 <2.0.0
  // ^1.2.0 --> >=1.2.0 <2.0.0


  function replaceCarets(comp, loose) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceCaret(comp, loose);
    }).join(' ');
  }

  function replaceCaret(comp, loose) {
    debug('caret', comp, loose);
    var r = loose ? re[CARETLOOSE] : re[CARET];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('caret', comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
        if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
      } else if (pr) {
        debug('replaceCaret pr', pr);
        if (pr.charAt(0) !== '-') pr = '-' + pr;

        if (M === '0') {
          if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
        } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
      } else {
        debug('no pr');

        if (M === '0') {
          if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
      }
      debug('caret return', ret);
      return ret;
    });
  }

  function replaceXRanges(comp, loose) {
    debug('replaceXRanges', comp, loose);
    return comp.split(/\s+/).map(function (comp) {
      return replaceXRange(comp, loose);
    }).join(' ');
  }

  function replaceXRange(comp, loose) {
    comp = comp.trim();
    var r = loose ? re[XRANGELOOSE] : re[XRANGE];
    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;
      if (gtlt === '=' && anyX) gtlt = '';

      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          // nothing is allowed
          ret = '<0.0.0';
        } else {
          // nothing is forbidden
          ret = '*';
        }
      } else if (gtlt && anyX) {
        // replace X with 0
        if (xm) m = 0;
        if (xp) p = 0;

        if (gtlt === '>') {
          // >1 => >=2.0.0
          // >1.2 => >=1.3.0
          // >1.2.3 => >= 1.2.4
          gtlt = '>=';

          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else if (xp) {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          // <=0.7.x is actually <0.8.0, since any 0.7.x should
          // pass.  Similarly, <=7.x is actually <8.0.0, etc.
          gtlt = '<';
          if (xm) M = +M + 1;else m = +m + 1;
        }

        ret = gtlt + M + '.' + m + '.' + p;
      } else if (xm) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (xp) {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      }

      debug('xRange return', ret);
      return ret;
    });
  } // Because * is AND-ed with everything else in the comparator,
  // and '' means "any version", just remove the *s entirely.


  function replaceStars(comp, loose) {
    debug('replaceStars', comp, loose); // Looseness is ignored here.  star is always as loose as it gets!

    return comp.trim().replace(re[STAR], '');
  } // This function is passed to string.replace(re[HYPHENRANGE])
  // M, m, patch, prerelease, build
  // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
  // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
  // 1.2 - 3.4 => >=1.2.0 <3.5.0


  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
    if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
    return (from + ' ' + to).trim();
  } // if ANY of the sets match ALL of its comparators, then pass


  Range.prototype.test = function (version) {
    if (!version) return false;
    if (typeof version === 'string') version = new SemVer(version, this.loose);

    for (var i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version)) return true;
    }

    return false;
  };

  function testSet(set, version) {
    for (var i = 0; i < set.length; i++) {
      if (!set[i].test(version)) return false;
    }

    if (version.prerelease.length) {
      // Find the set of versions that are allowed to have prereleases
      // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
      // That should allow `1.2.3-pr.2` to pass.
      // However, `1.2.4-alpha.notready` should NOT be allowed,
      // even though it's within the range set by the comparators.
      for (var i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === ANY) continue;

        if (set[i].semver.prerelease.length > 0) {
          var allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
        }
      } // Version has a -pre, but it's not one of the ones we like.


      return false;
    }

    return true;
  }

  exports.satisfies = satisfies;

  function satisfies(version, range, loose) {
    try {
      range = new Range(range, loose);
    } catch (er) {
      return false;
    }

    return range.test(version);
  }

  exports.maxSatisfying = maxSatisfying;

  function maxSatisfying(versions$$1, range, loose) {
    var max = null;
    var maxSV = null;

    try {
      var rangeObj = new Range(range, loose);
    } catch (er) {
      return null;
    }

    versions$$1.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, loose)
        if (!max || maxSV.compare(v) === -1) {
          // compare(max, v, true)
          max = v;
          maxSV = new SemVer(max, loose);
        }
      }
    });
    return max;
  }

  exports.minSatisfying = minSatisfying;

  function minSatisfying(versions$$1, range, loose) {
    var min = null;
    var minSV = null;

    try {
      var rangeObj = new Range(range, loose);
    } catch (er) {
      return null;
    }

    versions$$1.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, loose)
        if (!min || minSV.compare(v) === 1) {
          // compare(min, v, true)
          min = v;
          minSV = new SemVer(min, loose);
        }
      }
    });
    return min;
  }

  exports.validRange = validRange;

  function validRange(range, loose) {
    try {
      // Return '*' instead of '' so that truthiness works.
      // This will throw if it's invalid anyway
      return new Range(range, loose).range || '*';
    } catch (er) {
      return null;
    }
  } // Determine if version is less than all the versions possible in the range


  exports.ltr = ltr;

  function ltr(version, range, loose) {
    return outside(version, range, '<', loose);
  } // Determine if version is greater than all the versions possible in the range.


  exports.gtr = gtr;

  function gtr(version, range, loose) {
    return outside(version, range, '>', loose);
  }

  exports.outside = outside;

  function outside(version, range, hilo, loose) {
    version = new SemVer(version, loose);
    range = new Range(range, loose);
    var gtfn, ltefn, ltfn, comp, ecomp;

    switch (hilo) {
      case '>':
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = '>';
        ecomp = '>=';
        break;

      case '<':
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = '<';
        ecomp = '<=';
        break;

      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    } // If it satisifes the range it is not outside


    if (satisfies(version, range, loose)) {
      return false;
    } // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.


    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];
      var high = null;
      var low = null;
      comparators.forEach(function (comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator('>=0.0.0');
        }

        high = high || comparator;
        low = low || comparator;

        if (gtfn(comparator.semver, high.semver, loose)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, loose)) {
          low = comparator;
        }
      }); // If the edge version comparator has a operator then our version
      // isn't outside it

      if (high.operator === comp || high.operator === ecomp) {
        return false;
      } // If the lowest version comparator has an operator and our version
      // is less than it then it isn't higher than the range


      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }

    return true;
  }

  exports.prerelease = prerelease;

  function prerelease(version, loose) {
    var parsed = parse(version, loose);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }

  exports.intersects = intersects;

  function intersects(r1, r2, loose) {
    r1 = new Range(r1, loose);
    r2 = new Range(r2, loose);
    return r1.intersects(r2);
  }
});

var arrayify = function arrayify(object, keyName) {
  return Object.keys(object).reduce(function (array, key) {
    return array.concat(Object.assign(_defineProperty({}, keyName, key), object[key]));
  }, []);
};

var dedent_1 = createCommonjsModule(function (module) {
  "use strict";

  function dedent(strings) {
    var raw = void 0;

    if (typeof strings === "string") {
      // dedent can be used as a plain function
      raw = [strings];
    } else {
      raw = strings.raw;
    } // first, perform interpolation


    var result = "";

    for (var i = 0; i < raw.length; i++) {
      result += raw[i]. // join lines when there is a suppressed newline
      replace(/\\\n[ \t]*/g, ""). // handle escaped backticks
      replace(/\\`/g, "`");

      if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
        result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
      }
    } // now strip indentation


    var lines = result.split("\n");
    var mindent = null;
    lines.forEach(function (l) {
      var m = l.match(/^(\s+)\S+/);

      if (m) {
        var indent = m[1].length;

        if (!mindent) {
          // this is the first indented line
          mindent = indent;
        } else {
          mindent = Math.min(mindent, indent);
        }
      }
    });

    if (mindent !== null) {
      result = lines.map(function (l) {
        return l[0] === " " ? l.slice(mindent) : l;
      }).join("\n");
    } // dedent eats leading and trailing whitespace too


    result = result.trim(); // handle escaped newlines at the end to ensure they don't get stripped too

    return result.replace(/\\n/g, "\n");
  }

  {
    module.exports = dedent;
  }
});

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CATEGORY_CONFIG = "Config";
var CATEGORY_EDITOR = "Editor";
var CATEGORY_FORMAT = "Format";
var CATEGORY_OTHER = "Other";
var CATEGORY_OUTPUT = "Output";
var CATEGORY_GLOBAL = "Global";
var CATEGORY_SPECIAL = "Special";
/**
 * @typedef {Object} OptionInfo
 * @property {string} since - available since version
 * @property {string} category
 * @property {'int' | 'boolean' | 'choice' | 'path'} type
 * @property {boolean} array - indicate it's an array of the specified type
 * @property {boolean?} deprecated - deprecated since version
 * @property {OptionRedirectInfo?} redirect - redirect deprecated option
 * @property {string} description
 * @property {string?} oppositeDescription - for `false` option
 * @property {OptionValueInfo} default
 * @property {OptionRangeInfo?} range - for type int
 * @property {OptionChoiceInfo?} choices - for type choice
 * @property {(value: any) => boolean} exception
 *
 * @typedef {number | boolean | string} OptionValue
 * @typedef {OptionValue | [{ value: OptionValue[] }] | Array<{ since: string, value: OptionValue}>} OptionValueInfo
 *
 * @typedef {Object} OptionRedirectInfo
 * @property {string} option
 * @property {OptionValue} value
 *
 * @typedef {Object} OptionRangeInfo
 * @property {number} start - recommended range start
 * @property {number} end - recommended range end
 * @property {number} step - recommended range step
 *
 * @typedef {Object} OptionChoiceInfo
 * @property {boolean | string} value - boolean for the option that is originally boolean type
 * @property {string?} description - undefined if redirect
 * @property {string?} since - undefined if available since the first version of the option
 * @property {string?} deprecated - deprecated since version
 * @property {OptionValueInfo?} redirect - redirect deprecated value
 *
 * @property {string?} cliName
 * @property {string?} cliCategory
 * @property {string?} cliDescription
 */

/** @type {{ [name: string]: OptionInfo } */

var options$2 = {
  cursorOffset: {
    since: "1.4.0",
    category: CATEGORY_SPECIAL,
    type: "int",
    default: -1,
    range: {
      start: -1,
      end: Infinity,
      step: 1
    },
    description: dedent_1(_templateObject()),
    cliCategory: CATEGORY_EDITOR
  },
  endOfLine: {
    since: "1.15.0",
    category: CATEGORY_GLOBAL,
    type: "choice",
    default: "auto",
    description: "Which end of line characters to apply.",
    choices: [{
      value: "auto",
      description: dedent_1(_templateObject2())
    }, {
      value: "lf",
      description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
    }, {
      value: "crlf",
      description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
    }, {
      value: "cr",
      description: "Carriage Return character only (\\r), used very rarely"
    }]
  },
  filepath: {
    since: "1.4.0",
    category: CATEGORY_SPECIAL,
    type: "path",
    description: "Specify the input filepath. This will be used to do parser inference.",
    cliName: "stdin-filepath",
    cliCategory: CATEGORY_OTHER,
    cliDescription: "Path to the file to pretend that stdin comes from."
  },
  insertPragma: {
    since: "1.8.0",
    category: CATEGORY_SPECIAL,
    type: "boolean",
    default: false,
    description: "Insert @format pragma into file's first docblock comment.",
    cliCategory: CATEGORY_OTHER
  },
  parser: {
    since: "0.0.10",
    category: CATEGORY_GLOBAL,
    type: "choice",
    default: [{
      since: "0.0.10",
      value: "babylon"
    }, {
      since: "1.13.0",
      value: undefined
    }],
    description: "Which parser to use.",
    exception: function exception(value) {
      return typeof value === "string" || typeof value === "function";
    },
    choices: [{
      value: "flow",
      description: "Flow"
    }, {
      value: "babylon",
      description: "JavaScript"
    }, {
      value: "typescript",
      since: "1.4.0",
      description: "TypeScript"
    }, {
      value: "css",
      since: "1.7.1",
      description: "CSS"
    }, {
      value: "postcss",
      since: "1.4.0",
      description: "CSS/Less/SCSS",
      deprecated: "1.7.1",
      redirect: "css"
    }, {
      value: "less",
      since: "1.7.1",
      description: "Less"
    }, {
      value: "scss",
      since: "1.7.1",
      description: "SCSS"
    }, {
      value: "json",
      since: "1.5.0",
      description: "JSON"
    }, {
      value: "json5",
      since: "1.13.0",
      description: "JSON5"
    }, {
      value: "json-stringify",
      since: "1.13.0",
      description: "JSON.stringify"
    }, {
      value: "graphql",
      since: "1.5.0",
      description: "GraphQL"
    }, {
      value: "markdown",
      since: "1.8.0",
      description: "Markdown"
    }, {
      value: "mdx",
      since: "1.15.0",
      description: "MDX"
    }, {
      value: "vue",
      since: "1.10.0",
      description: "Vue"
    }, {
      value: "yaml",
      since: "1.14.0",
      description: "YAML"
    }, {
      value: "glimmer",
      since: null,
      description: "Handlebars"
    }, {
      value: "html",
      since: "1.15.0",
      description: "HTML"
    }, {
      value: "angular",
      since: "1.15.0",
      description: "Angular"
    }]
  },
  plugins: {
    since: "1.10.0",
    type: "path",
    array: true,
    default: [{
      value: []
    }],
    category: CATEGORY_GLOBAL,
    description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
    exception: function exception(value) {
      return typeof value === "string" || _typeof(value) === "object";
    },
    cliName: "plugin",
    cliCategory: CATEGORY_CONFIG
  },
  pluginSearchDirs: {
    since: "1.13.0",
    type: "path",
    array: true,
    default: [{
      value: []
    }],
    category: CATEGORY_GLOBAL,
    description: dedent_1(_templateObject3()),
    exception: function exception(value) {
      return typeof value === "string" || _typeof(value) === "object";
    },
    cliName: "plugin-search-dir",
    cliCategory: CATEGORY_CONFIG
  },
  printWidth: {
    since: "0.0.0",
    category: CATEGORY_GLOBAL,
    type: "int",
    default: 80,
    description: "The line length where Prettier will try wrap.",
    range: {
      start: 0,
      end: Infinity,
      step: 1
    }
  },
  rangeEnd: {
    since: "1.4.0",
    category: CATEGORY_SPECIAL,
    type: "int",
    default: Infinity,
    range: {
      start: 0,
      end: Infinity,
      step: 1
    },
    description: dedent_1(_templateObject4()),
    cliCategory: CATEGORY_EDITOR
  },
  rangeStart: {
    since: "1.4.0",
    category: CATEGORY_SPECIAL,
    type: "int",
    default: 0,
    range: {
      start: 0,
      end: Infinity,
      step: 1
    },
    description: dedent_1(_templateObject5()),
    cliCategory: CATEGORY_EDITOR
  },
  requirePragma: {
    since: "1.7.0",
    category: CATEGORY_SPECIAL,
    type: "boolean",
    default: false,
    description: dedent_1(_templateObject6()),
    cliCategory: CATEGORY_OTHER
  },
  tabWidth: {
    type: "int",
    category: CATEGORY_GLOBAL,
    default: 2,
    description: "Number of spaces per indentation level.",
    range: {
      start: 0,
      end: Infinity,
      step: 1
    }
  },
  useFlowParser: {
    since: "0.0.0",
    category: CATEGORY_GLOBAL,
    type: "boolean",
    default: [{
      since: "0.0.0",
      value: false
    }, {
      since: "1.15.0",
      value: undefined
    }],
    deprecated: "0.0.10",
    description: "Use flow parser.",
    redirect: {
      option: "parser",
      value: "flow"
    },
    cliName: "flow-parser"
  },
  useTabs: {
    since: "1.0.0",
    category: CATEGORY_GLOBAL,
    type: "boolean",
    default: false,
    description: "Indent with tabs instead of spaces."
  }
};
var coreOptions$1 = {
  CATEGORY_CONFIG: CATEGORY_CONFIG,
  CATEGORY_EDITOR: CATEGORY_EDITOR,
  CATEGORY_FORMAT: CATEGORY_FORMAT,
  CATEGORY_OTHER: CATEGORY_OTHER,
  CATEGORY_OUTPUT: CATEGORY_OUTPUT,
  CATEGORY_GLOBAL: CATEGORY_GLOBAL,
  CATEGORY_SPECIAL: CATEGORY_SPECIAL,
  options: options$2
};

var require$$0 = ( _package$1 && _package ) || _package$1;

var currentVersion = require$$0.version;
var coreOptions = coreOptions$1.options;

function getSupportInfo$2(version, opts) {
  opts = Object.assign({
    plugins: [],
    showUnreleased: false,
    showDeprecated: false,
    showInternal: false
  }, opts);

  if (!version) {
    // pre-release version is smaller than the normal version in semver,
    // we need to treat it as the normal one so as to test new features.
    version = currentVersion.split("-", 1)[0];
  }

  var plugins = opts.plugins;
  var options = arrayify(Object.assign(plugins.reduce(function (currentOptions, plugin) {
    return Object.assign(currentOptions, plugin.options);
  }, {}), coreOptions), "name").sort(function (a, b) {
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  }).filter(filterSince).filter(filterDeprecated).map(mapDeprecated).map(mapInternal).map(function (option) {
    var newOption = Object.assign({}, option);

    if (Array.isArray(newOption.default)) {
      newOption.default = newOption.default.length === 1 ? newOption.default[0].value : newOption.default.filter(filterSince).sort(function (info1, info2) {
        return semver.compare(info2.since, info1.since);
      })[0].value;
    }

    if (Array.isArray(newOption.choices)) {
      newOption.choices = newOption.choices.filter(filterSince).filter(filterDeprecated).map(mapDeprecated);
    }

    return newOption;
  }).map(function (option) {
    var filteredPlugins = plugins.filter(function (plugin) {
      return plugin.defaultOptions && plugin.defaultOptions[option.name];
    });
    var pluginDefaults = filteredPlugins.reduce(function (reduced, plugin) {
      reduced[plugin.name] = plugin.defaultOptions[option.name];
      return reduced;
    }, {});
    return Object.assign(option, {
      pluginDefaults: pluginDefaults
    });
  });
  var usePostCssParser = semver.lt(version, "1.7.1");
  var languages = plugins.reduce(function (all, plugin) {
    return all.concat(plugin.languages || []);
  }, []).filter(filterSince).map(function (language) {
    // Prevent breaking changes
    if (language.name === "Markdown") {
      return Object.assign({}, language, {
        parsers: ["markdown"]
      });
    }

    if (language.name === "TypeScript") {
      return Object.assign({}, language, {
        parsers: ["typescript"]
      });
    }

    if (usePostCssParser && (language.name === "CSS" || language.group === "CSS")) {
      return Object.assign({}, language, {
        parsers: ["postcss"]
      });
    }

    return language;
  });
  return {
    languages: languages,
    options: options
  };

  function filterSince(object) {
    return opts.showUnreleased || !("since" in object) || object.since && semver.gte(version, object.since);
  }

  function filterDeprecated(object) {
    return opts.showDeprecated || !("deprecated" in object) || object.deprecated && semver.lt(version, object.deprecated);
  }

  function mapDeprecated(object) {
    if (!object.deprecated || opts.showDeprecated) {
      return object;
    }

    var newObject = Object.assign({}, object);
    delete newObject.deprecated;
    delete newObject.redirect;
    return newObject;
  }

  function mapInternal(object) {
    if (opts.showInternal) {
      return object;
    }

    var newObject = Object.assign({}, object);
    delete newObject.cliName;
    delete newObject.cliCategory;
    delete newObject.cliDescription;
    return newObject;
  }
}

var support = {
  getSupportInfo: getSupportInfo$2
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

var tslib_1 = Object.freeze({
	__extends: __extends,
	get __assign () { return _assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault
});

var api = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.apiDescriptor = {
    key: function key(_key) {
      return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(_key) ? _key : JSON.stringify(_key);
    },
    value: function value(_value) {
      if (_value === null || _typeof(_value) !== 'object') {
        return JSON.stringify(_value);
      }

      if (Array.isArray(_value)) {
        return "[".concat(_value.map(function (subValue) {
          return exports.apiDescriptor.value(subValue);
        }).join(', '), "]");
      }

      var keys = Object.keys(_value);
      return keys.length === 0 ? '{}' : "{ ".concat(keys.map(function (key) {
        return "".concat(exports.apiDescriptor.key(key), ": ").concat(exports.apiDescriptor.value(_value[key]));
      }).join(', '), " }");
    },
    pair: function pair(_ref) {
      var key = _ref.key,
          value = _ref.value;
      return exports.apiDescriptor.value(_defineProperty({}, key, value));
    }
  };
});
unwrapExports(api);

var descriptors = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(api, exports);
});
unwrapExports(descriptors);

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

var escapeStringRegexp = function escapeStringRegexp(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperatorsRe, '\\$&');
};

var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
  /* MIT license */
  // NOTE: conversions should only return primitive values (i.e. arrays, or
  //       values that give correct `typeof` results).
  //       do not use box values types (i.e. Number(), String(), etc.)
  var reverseKeywords = {};

  for (var key in colorName) {
    if (colorName.hasOwnProperty(key)) {
      reverseKeywords[colorName[key]] = key;
    }
  }

  var convert = module.exports = {
    rgb: {
      channels: 3,
      labels: 'rgb'
    },
    hsl: {
      channels: 3,
      labels: 'hsl'
    },
    hsv: {
      channels: 3,
      labels: 'hsv'
    },
    hwb: {
      channels: 3,
      labels: 'hwb'
    },
    cmyk: {
      channels: 4,
      labels: 'cmyk'
    },
    xyz: {
      channels: 3,
      labels: 'xyz'
    },
    lab: {
      channels: 3,
      labels: 'lab'
    },
    lch: {
      channels: 3,
      labels: 'lch'
    },
    hex: {
      channels: 1,
      labels: ['hex']
    },
    keyword: {
      channels: 1,
      labels: ['keyword']
    },
    ansi16: {
      channels: 1,
      labels: ['ansi16']
    },
    ansi256: {
      channels: 1,
      labels: ['ansi256']
    },
    hcg: {
      channels: 3,
      labels: ['h', 'c', 'g']
    },
    apple: {
      channels: 3,
      labels: ['r16', 'g16', 'b16']
    },
    gray: {
      channels: 1,
      labels: ['gray']
    }
  }; // hide .channels and .labels properties

  for (var model in convert) {
    if (convert.hasOwnProperty(model)) {
      if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
      }

      if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
      }

      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
      }

      var channels = convert[model].channels;
      var labels = convert[model].labels;
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], 'channels', {
        value: channels
      });
      Object.defineProperty(convert[model], 'labels', {
        value: labels
      });
    }
  }

  convert.rgb.hsl = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    l = (min + max) / 2;

    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
  };

  convert.rgb.hsv = function (rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var v;

    if (max === 0) {
      s = 0;
    } else {
      s = delta / max * 1000 / 10;
    }

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    v = max / 255 * 1000 / 10;
    return [h, s, v];
  };

  convert.rgb.hwb = function (rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h = convert.rgb.hsl(rgb)[0];
    var w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };

  convert.rgb.cmyk = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m;
    var y;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  /**
   * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
   * */


  function comparativeDistance(x, y) {
    return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
  }

  convert.rgb.keyword = function (rgb) {
    var reversed = reverseKeywords[rgb];

    if (reversed) {
      return reversed;
    }

    var currentClosestDistance = Infinity;
    var currentClosestKeyword;

    for (var keyword in colorName) {
      if (colorName.hasOwnProperty(keyword)) {
        var value = colorName[keyword]; // Compute comparative distance

        var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
    }

    return currentClosestKeyword;
  };

  convert.keyword.rgb = function (keyword) {
    return colorName[keyword];
  };

  convert.rgb.xyz = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255; // assume sRGB

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };

  convert.rgb.lab = function (rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };

  convert.hsl.rgb = function (hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    t1 = 2 * l - t2;
    rgb = [0, 0, 0];

    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);

      if (t3 < 0) {
        t3++;
      }

      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = val * 255;
    }

    return rgb;
  };

  convert.hsl.hsv = function (hsl) {
    var h = hsl[0];
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var smin = s;
    var lmin = Math.max(l, 0.01);
    var sv;
    var v;
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    v = (l + s) / 2;
    sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };

  convert.hsv.rgb = function (hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - s * f);
    var t = 255 * v * (1 - s * (1 - f));
    v *= 255;

    switch (hi) {
      case 0:
        return [v, t, p];

      case 1:
        return [q, v, p];

      case 2:
        return [p, v, t];

      case 3:
        return [p, q, v];

      case 4:
        return [t, p, v];

      case 5:
        return [v, p, q];
    }
  };

  convert.hsv.hsl = function (hsv) {
    var h = hsv[0];
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var vmin = Math.max(v, 0.01);
    var lmin;
    var sl;
    var l;
    l = (2 - s) * v;
    lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  }; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


  convert.hwb.rgb = function (hwb) {
    var h = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n; // wh + bl cant be > 1

    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }

    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;

    if ((i & 0x01) !== 0) {
      f = 1 - f;
    }

    n = wh + f * (v - wh); // linear interpolation

    var r;
    var g;
    var b;

    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;

      case 1:
        r = n;
        g = v;
        b = wh;
        break;

      case 2:
        r = wh;
        g = v;
        b = n;
        break;

      case 3:
        r = wh;
        g = n;
        b = v;
        break;

      case 4:
        r = n;
        g = wh;
        b = v;
        break;

      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }

    return [r * 255, g * 255, b * 255];
  };

  convert.cmyk.rgb = function (cmyk) {
    var c = cmyk[0] / 100;
    var m = cmyk[1] / 100;
    var y = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };

  convert.xyz.rgb = function (xyz) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };

  convert.xyz.lab = function (xyz) {
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    l = 116 * y - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };

  convert.lab.xyz = function (lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y;
    var z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    var y2 = Math.pow(y, 3);
    var x2 = Math.pow(x, 3);
    var z2 = Math.pow(z, 3);
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };

  convert.lab.lch = function (lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h;
    var c;
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;

    if (h < 0) {
      h += 360;
    }

    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };

  convert.lch.lab = function (lch) {
    var l = lch[0];
    var c = lch[1];
    var h = lch[2];
    var a;
    var b;
    var hr;
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };

  convert.rgb.ansi16 = function (args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

    value = Math.round(value / 50);

    if (value === 0) {
      return 30;
    }

    var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

    if (value === 2) {
      ansi += 60;
    }

    return ansi;
  };

  convert.hsv.ansi16 = function (args) {
    // optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };

  convert.rgb.ansi256 = function (args) {
    var r = args[0];
    var g = args[1];
    var b = args[2]; // we use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.

    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }

      if (r > 248) {
        return 231;
      }

      return Math.round((r - 8) / 247 * 24) + 232;
    }

    var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };

  convert.ansi16.rgb = function (args) {
    var color = args % 10; // handle greyscale

    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }

      color = color / 10.5 * 255;
      return [color, color, color];
    }

    var mult = (~~(args > 50) + 1) * 0.5;
    var r = (color & 1) * mult * 255;
    var g = (color >> 1 & 1) * mult * 255;
    var b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };

  convert.ansi256.rgb = function (args) {
    // handle greyscale
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }

    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = rem % 6 / 5 * 255;
    return [r, g, b];
  };

  convert.rgb.hex = function (args) {
    var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    var string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert.hex.rgb = function (args) {
    var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

    if (!match) {
      return [0, 0, 0];
    }

    var colorString = match[0];

    if (match[0].length === 3) {
      colorString = colorString.split('').map(function (char) {
        return char + char;
      }).join('');
    }

    var integer = parseInt(colorString, 16);
    var r = integer >> 16 & 0xFF;
    var g = integer >> 8 & 0xFF;
    var b = integer & 0xFF;
    return [r, g, b];
  };

  convert.rgb.hcg = function (rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var max = Math.max(Math.max(r, g), b);
    var min = Math.min(Math.min(r, g), b);
    var chroma = max - min;
    var grayscale;
    var hue;

    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }

    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma + 4;
    }

    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };

  convert.hsl.hcg = function (hsl) {
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var c = 1;
    var f = 0;

    if (l < 0.5) {
      c = 2.0 * s * l;
    } else {
      c = 2.0 * s * (1.0 - l);
    }

    if (c < 1.0) {
      f = (l - 0.5 * c) / (1.0 - c);
    }

    return [hsl[0], c * 100, f * 100];
  };

  convert.hsv.hcg = function (hsv) {
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var c = s * v;
    var f = 0;

    if (c < 1.0) {
      f = (v - c) / (1 - c);
    }

    return [hsv[0], c * 100, f * 100];
  };

  convert.hcg.rgb = function (hcg) {
    var h = hcg[0] / 360;
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;

    if (c === 0.0) {
      return [g * 255, g * 255, g * 255];
    }

    var pure = [0, 0, 0];
    var hi = h % 1 * 6;
    var v = hi % 1;
    var w = 1 - v;
    var mg = 0;

    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;

      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;

      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;

      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;

      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;

      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }

    mg = (1.0 - c) * g;
    return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
  };

  convert.hcg.hsv = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1.0 - c);
    var f = 0;

    if (v > 0.0) {
      f = c / v;
    }

    return [hcg[0], f * 100, v * 100];
  };

  convert.hcg.hsl = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var l = g * (1.0 - c) + 0.5 * c;
    var s = 0;

    if (l > 0.0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
      s = c / (2 * (1 - l));
    }

    return [hcg[0], s * 100, l * 100];
  };

  convert.hcg.hwb = function (hcg) {
    var c = hcg[1] / 100;
    var g = hcg[2] / 100;
    var v = c + g * (1.0 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };

  convert.hwb.hcg = function (hwb) {
    var w = hwb[1] / 100;
    var b = hwb[2] / 100;
    var v = 1 - b;
    var c = v - w;
    var g = 0;

    if (c < 1) {
      g = (v - c) / (1 - c);
    }

    return [hwb[0], c * 100, g * 100];
  };

  convert.apple.rgb = function (apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };

  convert.rgb.apple = function (rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };

  convert.gray.rgb = function (args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };

  convert.gray.hsl = convert.gray.hsv = function (args) {
    return [0, 0, args[0]];
  };

  convert.gray.hwb = function (gray) {
    return [0, 100, gray[0]];
  };

  convert.gray.cmyk = function (gray) {
    return [0, 0, 0, gray[0]];
  };

  convert.gray.lab = function (gray) {
    return [gray[0], 0, 0];
  };

  convert.gray.hex = function (gray) {
    var val = Math.round(gray[0] / 100 * 255) & 0xFF;
    var integer = (val << 16) + (val << 8) + val;
    var string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert.rgb.gray = function (rgb) {
    var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };
});

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/
// https://jsperf.com/object-keys-vs-for-in-with-closure/3

var models$1 = Object.keys(conversions);

function buildGraph() {
  var graph = {};

  for (var len = models$1.length, i = 0; i < len; i++) {
    graph[models$1[i]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  }

  return graph;
} // https://en.wikipedia.org/wiki/Breadth-first_search


function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel]; // unshift -> queue -> pop

  graph[fromModel].distance = 0;

  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions[current]);

    for (var len = adjacents.length, i = 0; i < len; i++) {
      var adjacent = adjacents[i];
      var node = graph[adjacent];

      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }

  return graph;
}

function link(from, to) {
  return function (args) {
    return to(from(args));
  };
}

function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;

  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }

  fn.conversion = path;
  return fn;
}

var route = function route(fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models = Object.keys(graph);

  for (var len = models.length, i = 0; i < len; i++) {
    var toModel = models[i];
    var node = graph[toModel];

    if (node.parent === null) {
      // no possible conversion, or this node is the source model.
      continue;
    }

    conversion[toModel] = wrapConversion(toModel, graph);
  }

  return conversion;
};

var convert = {};
var models = Object.keys(conversions);

function wrapRaw(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    return fn(args);
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

function wrapRounded(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    var result = fn(args); // we're assuming the result is an array here.
    // see notice in conversions.js; don't use box types
    // in conversion functions.

    if (_typeof(result) === 'object') {
      for (var len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }

    return result;
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

models.forEach(function (fromModel) {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], 'channels', {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], 'labels', {
    value: conversions[fromModel].labels
  });
  var routes = route(fromModel);
  var routeModels = Object.keys(routes);
  routeModels.forEach(function (toModel) {
    var fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert;

var ansiStyles = createCommonjsModule(function (module) {
  'use strict';

  var wrapAnsi16 = function wrapAnsi16(fn, offset) {
    return function () {
      var code = fn.apply(colorConvert, arguments);
      return "\x1B[".concat(code + offset, "m");
    };
  };

  var wrapAnsi256 = function wrapAnsi256(fn, offset) {
    return function () {
      var code = fn.apply(colorConvert, arguments);
      return "\x1B[".concat(38 + offset, ";5;").concat(code, "m");
    };
  };

  var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
    return function () {
      var rgb = fn.apply(colorConvert, arguments);
      return "\x1B[".concat(38 + offset, ";2;").concat(rgb[0], ";").concat(rgb[1], ";").concat(rgb[2], "m");
    };
  };

  function assembleStyles() {
    var codes = new Map();
    var styles = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        // Bright color
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    }; // Fix humans

    styles.color.grey = styles.color.gray;

    var _arr = Object.keys(styles);

    for (var _i = 0; _i < _arr.length; _i++) {
      var groupName = _arr[_i];
      var group = styles[groupName];

      var _arr3 = Object.keys(group);

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        var styleName = _arr3[_i3];
        var style = group[styleName];
        styles[styleName] = {
          open: "\x1B[".concat(style[0], "m"),
          close: "\x1B[".concat(style[1], "m")
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }

      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
      Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
      });
    }

    var ansi2ansi = function ansi2ansi(n) {
      return n;
    };

    var rgb2rgb = function rgb2rgb(r, g, b) {
      return [r, g, b];
    };

    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 0)
    };
    styles.color.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 0)
    };
    styles.color.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 0)
    };
    styles.bgColor.ansi = {
      ansi: wrapAnsi16(ansi2ansi, 10)
    };
    styles.bgColor.ansi256 = {
      ansi256: wrapAnsi256(ansi2ansi, 10)
    };
    styles.bgColor.ansi16m = {
      rgb: wrapAnsi16m(rgb2rgb, 10)
    };

    var _arr2 = Object.keys(colorConvert);

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var key = _arr2[_i2];

      if (_typeof(colorConvert[key]) !== 'object') {
        continue;
      }

      var suite = colorConvert[key];

      if (key === 'ansi16') {
        key = 'ansi';
      }

      if ('ansi16' in suite) {
        styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
        styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
      }

      if ('ansi256' in suite) {
        styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
        styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
      }

      if ('rgb' in suite) {
        styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
        styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
      }
    }

    return styles;
  } // Make the export immutable


  Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: assembleStyles
  });
});

var os = {
  EOL: "\n"
};

var os$1 = Object.freeze({
	default: os
});

var hasFlag = createCommonjsModule(function (module) {
  'use strict';

  module.exports = function (flag, argv$$1) {
    argv$$1 = argv$$1 || process.argv;
    var prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    var pos = argv$$1.indexOf(prefix + flag);
    var terminatorPos = argv$$1.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

var require$$1$1 = ( os$1 && os ) || os$1;

var env$1 = process.env;
var forceColor;

if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
  forceColor = true;
}

if ('FORCE_COLOR' in env$1) {
  forceColor = env$1.FORCE_COLOR.length === 0 || parseInt(env$1.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
    // release that supports 256 colors. Windows 10 build 14931 is the first release
    // that supports 16m/TrueColor.
    var osRelease = require$$1$1.release().split('.');

    if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env$1) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
      return sign in env$1;
    }) || env$1.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env$1) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$1.TEAMCITY_VERSION) ? 1 : 0;
  }

  if (env$1.COLORTERM === 'truecolor') {
    return 3;
  }

  if ('TERM_PROGRAM' in env$1) {
    var version = parseInt((env$1.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env$1.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;

      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env$1.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env$1.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env$1) {
    return 1;
  }

  if (env$1.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

var supportsColor_1 = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr)
};

var templates = createCommonjsModule(function (module) {
  'use strict';

  var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([['n', '\n'], ['r', '\r'], ['t', '\t'], ['b', '\b'], ['f', '\f'], ['v', '\v'], ['0', '\0'], ['\\', '\\'], ['e', "\x1B"], ['a', "\x07"]]);

  function unescape(c) {
    if (c[0] === 'u' && c.length === 5 || c[0] === 'x' && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }

    return ESCAPES.get(c) || c;
  }

  function parseArguments(name, args) {
    var results = [];
    var chunks = args.trim().split(/\s*,\s*/g);
    var matches;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chunk = _step.value;

        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, function (m, escape, chr) {
            return escape ? unescape(escape) : chr;
          }));
        } else {
          throw new Error("Invalid Chalk template style argument: ".concat(chunk, " (in style '").concat(name, "')"));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return results;
  }

  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    var results = [];
    var matches;

    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      var name = matches[1];

      if (matches[2]) {
        var args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }

    return results;
  }

  function buildStyle(chalk, styles) {
    var enabled = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var layer = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = layer.styles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var style = _step3.value;
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var current = chalk;

    var _arr = Object.keys(enabled);

    for (var _i = 0; _i < _arr.length; _i++) {
      var styleName = _arr[_i];

      if (Array.isArray(enabled[styleName])) {
        if (!(styleName in current)) {
          throw new Error("Unknown Chalk style: ".concat(styleName));
        }

        if (enabled[styleName].length > 0) {
          current = current[styleName].apply(current, enabled[styleName]);
        } else {
          current = current[styleName];
        }
      }
    }

    return current;
  }

  module.exports = function (chalk, tmp) {
    var styles = [];
    var chunks = [];
    var chunk = []; // eslint-disable-next-line max-params

    tmp.replace(TEMPLATE_REGEX, function (m, escapeChar, inverse, style, close, chr) {
      if (escapeChar) {
        chunk.push(unescape(escapeChar));
      } else if (style) {
        var str = chunk.join('');
        chunk = [];
        chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
        styles.push({
          inverse: inverse,
          styles: parseStyle(style)
        });
      } else if (close) {
        if (styles.length === 0) {
          throw new Error('Found extraneous } in Chalk template literal');
        }

        chunks.push(buildStyle(chalk, styles)(chunk.join('')));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(chr);
      }
    });
    chunks.push(chunk.join(''));

    if (styles.length > 0) {
      var errMsg = "Chalk template literal is missing ".concat(styles.length, " closing bracket").concat(styles.length === 1 ? '' : 's', " (`}`)");
      throw new Error(errMsg);
    }

    return chunks.join('');
  };
});

var chalk = createCommonjsModule(function (module) {
  'use strict';

  var stdoutColor = supportsColor_1.stdout;
  var isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm'); // `supportsColor.level` → `ansiStyles.color[name]` mapping

  var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']; // `color-convert` models to exclude from the Chalk API due to conflicts and such

  var skipModels = new Set(['gray']);
  var styles = Object.create(null);

  function applyOptions(obj, options) {
    options = options || {}; // Detect level if not set manually

    var scLevel = stdoutColor ? stdoutColor.level : 0;
    obj.level = options.level === undefined ? scLevel : options.level;
    obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
  }

  function Chalk(options) {
    // We check for this.template here since calling `chalk.constructor()`
    // by itself will have a `this` of a previously constructed chalk object
    if (!this || !(this instanceof Chalk) || this.template) {
      var _chalk = {};
      applyOptions(_chalk, options);

      _chalk.template = function () {
        var args = [].slice.call(arguments);
        return chalkTag.apply(null, [_chalk.template].concat(args));
      };

      Object.setPrototypeOf(_chalk, Chalk.prototype);
      Object.setPrototypeOf(_chalk.template, _chalk);
      _chalk.template.constructor = Chalk;
      return _chalk.template;
    }

    applyOptions(this, options);
  } // Use bright blue on Windows as the normal blue color is illegible


  if (isSimpleWindowsTerm) {
    ansiStyles.blue.open = "\x1B[94m";
  }

  var _arr = Object.keys(ansiStyles);

  var _loop = function _loop() {
    var key = _arr[_i];
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    styles[key] = {
      get: function get() {
        var codes = ansiStyles[key];
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
      }
    };
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  styles.visible = {
    get: function get() {
      return build.call(this, this._styles || [], true, 'visible');
    }
  };
  ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');

  var _arr2 = Object.keys(ansiStyles.color.ansi);

  var _loop2 = function _loop2() {
    var model = _arr2[_i2];

    if (skipModels.has(model)) {
      return "continue";
    }

    styles[model] = {
      get: function get() {
        var level = this.level;
        return function () {
          var open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
          var codes = {
            open: open,
            close: ansiStyles.color.close,
            closeRe: ansiStyles.color.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  };

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _ret = _loop2();

    if (_ret === "continue") continue;
  }

  ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');

  var _arr3 = Object.keys(ansiStyles.bgColor.ansi);

  var _loop3 = function _loop3() {
    var model = _arr3[_i3];

    if (skipModels.has(model)) {
      return "continue";
    }

    var bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get: function get() {
        var level = this.level;
        return function () {
          var open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
          var codes = {
            open: open,
            close: ansiStyles.bgColor.close,
            closeRe: ansiStyles.bgColor.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  };

  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var _ret2 = _loop3();

    if (_ret2 === "continue") continue;
  }

  var proto = Object.defineProperties(function () {}, styles);

  function build(_styles, _empty, key) {
    var builder = function builder() {
      return applyStyle.apply(builder, arguments);
    };

    builder._styles = _styles;
    builder._empty = _empty;
    var self = this;
    Object.defineProperty(builder, 'level', {
      enumerable: true,
      get: function get() {
        return self.level;
      },
      set: function set(level) {
        self.level = level;
      }
    });
    Object.defineProperty(builder, 'enabled', {
      enumerable: true,
      get: function get() {
        return self.enabled;
      },
      set: function set(enabled) {
        self.enabled = enabled;
      }
    }); // See below for fix regarding invisible grey/dim combination on Windows

    builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey'; // `__proto__` is used because we must return a function, but there is
    // no way to create a function with a different prototype

    builder.__proto__ = proto; // eslint-disable-line no-proto

    return builder;
  }

  function applyStyle() {
    // Support varags, but simply cast to string in case there's only one arg
    var args = arguments;
    var argsLen = args.length;
    var str = String(arguments[0]);

    if (argsLen === 0) {
      return '';
    }

    if (argsLen > 1) {
      // Don't slice `arguments`, it prevents V8 optimizations
      for (var a = 1; a < argsLen; a++) {
        str += ' ' + args[a];
      }
    }

    if (!this.enabled || this.level <= 0 || !str) {
      return this._empty ? '' : str;
    } // Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
    // see https://github.com/chalk/chalk/issues/58
    // If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.


    var originalDim = ansiStyles.dim.open;

    if (isSimpleWindowsTerm && this.hasGrey) {
      ansiStyles.dim.open = '';
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._styles.slice().reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var code = _step.value;
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        str = code.open + str.replace(code.closeRe, code.open) + code.close; // Close the styling before a linebreak and reopen
        // after next line to fix a bleed issue on macOS
        // https://github.com/chalk/chalk/pull/92

        str = str.replace(/\r?\n/g, "".concat(code.close, "$&").concat(code.open));
      } // Reset the original `dim` if we changed it to work around the Windows dimmed gray issue

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    ansiStyles.dim.open = originalDim;
    return str;
  }

  function chalkTag(chalk, strings) {
    if (!Array.isArray(strings)) {
      // If chalk() was called by itself or with a string,
      // return the string itself as a string.
      return [].slice.call(arguments, 1).join(' ');
    }

    var args = [].slice.call(arguments, 2);
    var parts = [strings.raw[0]];

    for (var i = 1; i < strings.length; i++) {
      parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
      parts.push(String(strings.raw[i]));
    }

    return templates(chalk, parts.join(''));
  }

  Object.defineProperties(Chalk.prototype, styles);
  module.exports = Chalk(); // eslint-disable-line new-cap

  module.exports.supportsColor = stdoutColor;
  module.exports.default = module.exports; // For TypeScript
});

var common = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.commonDeprecatedHandler = function (keyOrPair, redirectTo, _ref) {
    var descriptor = _ref.descriptor;
    var messages = ["".concat(chalk.default.yellow(typeof keyOrPair === 'string' ? descriptor.key(keyOrPair) : descriptor.pair(keyOrPair)), " is deprecated")];

    if (redirectTo) {
      messages.push("we now treat it as ".concat(chalk.default.blue(typeof redirectTo === 'string' ? descriptor.key(redirectTo) : descriptor.pair(redirectTo))));
    }

    return messages.join('; ') + '.';
  };
});
unwrapExports(common);

var deprecated = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(common, exports);
});
unwrapExports(deprecated);

var common$2 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.commonInvalidHandler = function (key, value, utils) {
    return ["Invalid ".concat(chalk.default.red(utils.descriptor.key(key)), " value."), "Expected ".concat(chalk.default.blue(utils.schemas[key].expected(utils)), ","), "but received ".concat(chalk.default.red(utils.descriptor.value(value)), ".")].join(' ');
  };
});
unwrapExports(common$2);

var invalid = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(common$2, exports);
});
unwrapExports(invalid);

/* eslint-disable no-nested-ternary */
var arr = [];
var charCodeCache = [];

var leven$1 = function leven(a, b) {
  if (a === b) {
    return 0;
  }

  var swap = a; // Swapping the strings if `a` is longer than `b` so we know which one is the
  // shortest & which one is the longest

  if (a.length > b.length) {
    a = b;
    b = swap;
  }

  var aLen = a.length;
  var bLen = b.length;

  if (aLen === 0) {
    return bLen;
  }

  if (bLen === 0) {
    return aLen;
  } // Performing suffix trimming:
  // We can linearly drop suffix common to both strings since they
  // don't increase distance at all
  // Note: `~-` is the bitwise way to perform a `- 1` operation


  while (aLen > 0 && a.charCodeAt(~-aLen) === b.charCodeAt(~-bLen)) {
    aLen--;
    bLen--;
  }

  if (aLen === 0) {
    return bLen;
  } // Performing prefix trimming
  // We can linearly drop prefix common to both strings since they
  // don't increase distance at all


  var start = 0;

  while (start < aLen && a.charCodeAt(start) === b.charCodeAt(start)) {
    start++;
  }

  aLen -= start;
  bLen -= start;

  if (aLen === 0) {
    return bLen;
  }

  var bCharCode;
  var ret;
  var tmp;
  var tmp2;
  var i = 0;
  var j = 0;

  while (i < aLen) {
    charCodeCache[start + i] = a.charCodeAt(start + i);
    arr[i] = ++i;
  }

  while (j < bLen) {
    bCharCode = b.charCodeAt(start + j);
    tmp = j++;
    ret = j;

    for (i = 0; i < aLen; i++) {
      tmp2 = bCharCode === charCodeCache[start + i] ? tmp : tmp + 1;
      tmp = arr[i];
      ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
    }
  }

  return ret;
};

var leven_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.levenUnknownHandler = function (key, value, _ref) {
    var descriptor = _ref.descriptor,
        logger = _ref.logger,
        schemas = _ref.schemas;
    var messages = ["Ignored unknown option ".concat(chalk.default.yellow(descriptor.pair({
      key: key,
      value: value
    })), ".")];
    var suggestion = Object.keys(schemas).sort().find(function (knownKey) {
      return leven$1(key, knownKey) < 3;
    });

    if (suggestion) {
      messages.push("Did you mean ".concat(chalk.default.blue(descriptor.key(suggestion)), "?"));
    }

    logger.warn(messages.join(' '));
  };
});
unwrapExports(leven_1);

var unknown = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(leven_1, exports);
});
unwrapExports(unknown);

var handlers = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(deprecated, exports);

  tslib_1.__exportStar(invalid, exports);

  tslib_1.__exportStar(unknown, exports);
});
unwrapExports(handlers);

var schema = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var HANDLER_KEYS = ['default', 'expected', 'validate', 'deprecated', 'forward', 'redirect', 'overlap', 'preprocess', 'postprocess'];

  function createSchema(SchemaConstructor, parameters) {
    var schema = new SchemaConstructor(parameters);
    var subSchema = Object.create(schema);

    for (var _i = 0; _i < HANDLER_KEYS.length; _i++) {
      var handlerKey = HANDLER_KEYS[_i];

      if (handlerKey in parameters) {
        subSchema[handlerKey] = normalizeHandler(parameters[handlerKey], schema, Schema.prototype[handlerKey].length);
      }
    }

    return subSchema;
  }

  exports.createSchema = createSchema;

  var Schema =
  /*#__PURE__*/
  function () {
    function Schema(parameters) {
      _classCallCheck(this, Schema);

      this.name = parameters.name;
    }

    _createClass(Schema, [{
      key: "default",
      value: function _default(_utils) {
        return undefined;
      } // istanbul ignore next: this is actually an abstract method but we need a placeholder to get `function.length`

    }, {
      key: "expected",
      value: function expected(_utils) {
        return 'nothing';
      } // istanbul ignore next: this is actually an abstract method but we need a placeholder to get `function.length`

    }, {
      key: "validate",
      value: function validate(_value, _utils) {
        return false;
      }
    }, {
      key: "deprecated",
      value: function deprecated(_value, _utils) {
        return false;
      }
    }, {
      key: "forward",
      value: function forward(_value, _utils) {
        return undefined;
      }
    }, {
      key: "redirect",
      value: function redirect(_value, _utils) {
        return undefined;
      }
    }, {
      key: "overlap",
      value: function overlap(currentValue, _newValue, _utils) {
        return currentValue;
      }
    }, {
      key: "preprocess",
      value: function preprocess(value, _utils) {
        return value;
      }
    }, {
      key: "postprocess",
      value: function postprocess(value, _utils) {
        return value;
      }
    }], [{
      key: "create",
      value: function create(parameters) {
        // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/5863
        return createSchema(this, parameters);
      }
    }]);

    return Schema;
  }();

  exports.Schema = Schema;

  function normalizeHandler(handler, superSchema, handlerArgumentsLength) {
    return typeof handler === 'function' ? function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return handler.apply(void 0, _toConsumableArray(args.slice(0, handlerArgumentsLength - 1)).concat([superSchema], _toConsumableArray(args.slice(handlerArgumentsLength - 1))));
    } : function () {
      return handler;
    };
  }
});
unwrapExports(schema);

var alias = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AliasSchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(AliasSchema, _schema_1$Schema);

    function AliasSchema(parameters) {
      var _this;

      _classCallCheck(this, AliasSchema);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AliasSchema).call(this, parameters));
      _this._sourceName = parameters.sourceName;
      return _this;
    }

    _createClass(AliasSchema, [{
      key: "expected",
      value: function expected(utils) {
        return utils.schemas[this._sourceName].expected(utils);
      }
    }, {
      key: "validate",
      value: function validate(value, utils) {
        return utils.schemas[this._sourceName].validate(value, utils);
      }
    }, {
      key: "redirect",
      value: function redirect(_value, _utils) {
        return this._sourceName;
      }
    }]);

    return AliasSchema;
  }(schema.Schema);

  exports.AliasSchema = AliasSchema;
});
unwrapExports(alias);

var any = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AnySchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(AnySchema, _schema_1$Schema);

    function AnySchema() {
      _classCallCheck(this, AnySchema);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnySchema).apply(this, arguments));
    }

    _createClass(AnySchema, [{
      key: "expected",
      value: function expected() {
        return 'anything';
      }
    }, {
      key: "validate",
      value: function validate() {
        return true;
      }
    }]);

    return AnySchema;
  }(schema.Schema);

  exports.AnySchema = AnySchema;
});
unwrapExports(any);

var array$2 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ArraySchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(ArraySchema, _schema_1$Schema);

    function ArraySchema(_a) {
      var _this;

      _classCallCheck(this, ArraySchema);

      var valueSchema = _a.valueSchema,
          _a$name = _a.name,
          name = _a$name === void 0 ? valueSchema.name : _a$name,
          handlers = tslib_1.__rest(_a, ["valueSchema", "name"]);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ArraySchema).call(this, Object.assign({}, handlers, {
        name: name
      })));
      _this._valueSchema = valueSchema;
      return _this;
    }

    _createClass(ArraySchema, [{
      key: "expected",
      value: function expected(utils) {
        return "an array of ".concat(this._valueSchema.expected(utils));
      }
    }, {
      key: "validate",
      value: function validate(value, utils) {
        if (!Array.isArray(value)) {
          return false;
        }

        var invalidValues = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var subValue = _step.value;
            var subValidateResult = utils.normalizeValidateResult(this._valueSchema.validate(subValue, utils), subValue);

            if (subValidateResult !== true) {
              invalidValues.push(subValidateResult.value);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return invalidValues.length === 0 ? true : {
          value: invalidValues
        };
      }
    }, {
      key: "deprecated",
      value: function deprecated(value, utils) {
        var deprecatedResult = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var subValue = _step2.value;
            var subDeprecatedResult = utils.normalizeDeprecatedResult(this._valueSchema.deprecated(subValue, utils), subValue);

            if (subDeprecatedResult !== false) {
              deprecatedResult.push.apply(deprecatedResult, _toConsumableArray(subDeprecatedResult.map(function (_ref) {
                var deprecatedValue = _ref.value;
                return {
                  value: [deprecatedValue]
                };
              })));
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return deprecatedResult;
      }
    }, {
      key: "forward",
      value: function forward(value, utils) {
        var forwardResult = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var subValue = _step3.value;
            var subForwardResult = utils.normalizeForwardResult(this._valueSchema.forward(subValue, utils), subValue);
            forwardResult.push.apply(forwardResult, _toConsumableArray(subForwardResult.map(wrapTransferResult)));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return forwardResult;
      }
    }, {
      key: "redirect",
      value: function redirect(value, utils) {
        var remain = [];
        var redirect = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = value[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var subValue = _step4.value;
            var subRedirectResult = utils.normalizeRedirectResult(this._valueSchema.redirect(subValue, utils), subValue);

            if ('remain' in subRedirectResult) {
              remain.push(subRedirectResult.remain);
            }

            redirect.push.apply(redirect, _toConsumableArray(subRedirectResult.redirect.map(wrapTransferResult)));
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return remain.length === 0 ? {
          redirect: redirect
        } : {
          redirect: redirect,
          remain: remain
        };
      }
    }, {
      key: "overlap",
      value: function overlap(currentValue, newValue) {
        return currentValue.concat(newValue);
      }
    }]);

    return ArraySchema;
  }(schema.Schema);

  exports.ArraySchema = ArraySchema;

  function wrapTransferResult(_ref2) {
    var from = _ref2.from,
        to = _ref2.to;
    return {
      from: [from],
      to: to
    };
  }
});
unwrapExports(array$2);

var boolean_1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var BooleanSchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(BooleanSchema, _schema_1$Schema);

    function BooleanSchema() {
      _classCallCheck(this, BooleanSchema);

      return _possibleConstructorReturn(this, _getPrototypeOf(BooleanSchema).apply(this, arguments));
    }

    _createClass(BooleanSchema, [{
      key: "expected",
      value: function expected() {
        return 'true or false';
      }
    }, {
      key: "validate",
      value: function validate(value) {
        return typeof value === 'boolean';
      }
    }]);

    return BooleanSchema;
  }(schema.Schema);

  exports.BooleanSchema = BooleanSchema;
});
unwrapExports(boolean_1);

var utils = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function recordFromArray(array, mainKey) {
    var record = Object.create(null);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;
        var key = value[mainKey]; // istanbul ignore next

        if (record[key]) {
          throw new Error("Duplicate ".concat(mainKey, " ").concat(JSON.stringify(key)));
        } // @ts-ignore


        record[key] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return record;
  }

  exports.recordFromArray = recordFromArray;

  function mapFromArray(array, mainKey) {
    var map = new Map();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var value = _step2.value;
        var key = value[mainKey]; // istanbul ignore next

        if (map.has(key)) {
          throw new Error("Duplicate ".concat(mainKey, " ").concat(JSON.stringify(key)));
        }

        map.set(key, value);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return map;
  }

  exports.mapFromArray = mapFromArray;

  function createAutoChecklist() {
    var map = Object.create(null);
    return function (id) {
      var idString = JSON.stringify(id);

      if (map[idString]) {
        return true;
      }

      map[idString] = true;
      return false;
    };
  }

  exports.createAutoChecklist = createAutoChecklist;

  function partition(array, predicate) {
    var trueArray = [];
    var falseArray = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = _step3.value;

        if (predicate(value)) {
          trueArray.push(value);
        } else {
          falseArray.push(value);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return [trueArray, falseArray];
  }

  exports.partition = partition;

  function isInt(value) {
    return value === Math.floor(value);
  }

  exports.isInt = isInt;

  function comparePrimitive(a, b) {
    if (a === b) {
      return 0;
    }

    var typeofA = _typeof(a);

    var typeofB = _typeof(b);

    var orders = ['undefined', 'object', 'boolean', 'number', 'string'];

    if (typeofA !== typeofB) {
      return orders.indexOf(typeofA) - orders.indexOf(typeofB);
    }

    if (typeofA !== 'string') {
      return Number(a) - Number(b);
    }

    return a.localeCompare(b);
  }

  exports.comparePrimitive = comparePrimitive;

  function normalizeDefaultResult(result) {
    return result === undefined ? {} : result;
  }

  exports.normalizeDefaultResult = normalizeDefaultResult;

  function normalizeValidateResult(result, value) {
    return result === true ? true : result === false ? {
      value: value
    } : result;
  }

  exports.normalizeValidateResult = normalizeValidateResult;

  function normalizeDeprecatedResult(result, value) {
    var doNotNormalizeTrue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return result === false ? false : result === true ? doNotNormalizeTrue ? true : [{
      value: value
    }] : 'value' in result ? [result] : result.length === 0 ? false : result;
  }

  exports.normalizeDeprecatedResult = normalizeDeprecatedResult;

  function normalizeTransferResult(result, value) {
    return typeof result === 'string' || 'key' in result ? {
      from: value,
      to: result
    } : 'from' in result ? {
      from: result.from,
      to: result.to
    } : {
      from: value,
      to: result.to
    };
  }

  exports.normalizeTransferResult = normalizeTransferResult;

  function normalizeForwardResult(result, value) {
    return result === undefined ? [] : Array.isArray(result) ? result.map(function (transferResult) {
      return normalizeTransferResult(transferResult, value);
    }) : [normalizeTransferResult(result, value)];
  }

  exports.normalizeForwardResult = normalizeForwardResult;

  function normalizeRedirectResult(result, value) {
    var redirect = normalizeForwardResult(_typeof(result) === 'object' && 'redirect' in result ? result.redirect : result, value);
    return redirect.length === 0 ? {
      remain: value,
      redirect: redirect
    } : _typeof(result) === 'object' && 'remain' in result ? {
      remain: result.remain,
      redirect: redirect
    } : {
      redirect: redirect
    };
  }

  exports.normalizeRedirectResult = normalizeRedirectResult;
});
unwrapExports(utils);

var choice = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ChoiceSchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(ChoiceSchema, _schema_1$Schema);

    function ChoiceSchema(parameters) {
      var _this;

      _classCallCheck(this, ChoiceSchema);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ChoiceSchema).call(this, parameters));
      _this._choices = utils.mapFromArray(parameters.choices.map(function (choice) {
        return choice && _typeof(choice) === 'object' ? choice : {
          value: choice
        };
      }), 'value');
      return _this;
    }

    _createClass(ChoiceSchema, [{
      key: "expected",
      value: function expected(_ref) {
        var _this2 = this;

        var descriptor = _ref.descriptor;
        var choiceValues = Array.from(this._choices.keys()).map(function (value) {
          return _this2._choices.get(value);
        }).filter(function (choiceInfo) {
          return !choiceInfo.deprecated;
        }).map(function (choiceInfo) {
          return choiceInfo.value;
        }).sort(utils.comparePrimitive).map(descriptor.value);
        var head = choiceValues.slice(0, -2);
        var tail = choiceValues.slice(-2);
        return head.concat(tail.join(' or ')).join(', ');
      }
    }, {
      key: "validate",
      value: function validate(value) {
        return this._choices.has(value);
      }
    }, {
      key: "deprecated",
      value: function deprecated(value) {
        var choiceInfo = this._choices.get(value);

        return choiceInfo && choiceInfo.deprecated ? {
          value: value
        } : false;
      }
    }, {
      key: "forward",
      value: function forward(value) {
        var choiceInfo = this._choices.get(value);

        return choiceInfo ? choiceInfo.forward : undefined;
      }
    }, {
      key: "redirect",
      value: function redirect(value) {
        var choiceInfo = this._choices.get(value);

        return choiceInfo ? choiceInfo.redirect : undefined;
      }
    }]);

    return ChoiceSchema;
  }(schema.Schema);

  exports.ChoiceSchema = ChoiceSchema;
});
unwrapExports(choice);

var number = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var NumberSchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(NumberSchema, _schema_1$Schema);

    function NumberSchema() {
      _classCallCheck(this, NumberSchema);

      return _possibleConstructorReturn(this, _getPrototypeOf(NumberSchema).apply(this, arguments));
    }

    _createClass(NumberSchema, [{
      key: "expected",
      value: function expected() {
        return 'a number';
      }
    }, {
      key: "validate",
      value: function validate(value, _utils) {
        return typeof value === 'number';
      }
    }]);

    return NumberSchema;
  }(schema.Schema);

  exports.NumberSchema = NumberSchema;
});
unwrapExports(number);

var integer = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IntegerSchema =
  /*#__PURE__*/
  function (_number_1$NumberSchem) {
    _inherits(IntegerSchema, _number_1$NumberSchem);

    function IntegerSchema() {
      _classCallCheck(this, IntegerSchema);

      return _possibleConstructorReturn(this, _getPrototypeOf(IntegerSchema).apply(this, arguments));
    }

    _createClass(IntegerSchema, [{
      key: "expected",
      value: function expected() {
        return 'an integer';
      }
    }, {
      key: "validate",
      value: function validate(value, utils$$2) {
        return utils$$2.normalizeValidateResult(_get(_getPrototypeOf(IntegerSchema.prototype), "validate", this).call(this, value, utils$$2), value) === true && utils.isInt(value);
      }
    }]);

    return IntegerSchema;
  }(number.NumberSchema);

  exports.IntegerSchema = IntegerSchema;
});
unwrapExports(integer);

var string = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var StringSchema =
  /*#__PURE__*/
  function (_schema_1$Schema) {
    _inherits(StringSchema, _schema_1$Schema);

    function StringSchema() {
      _classCallCheck(this, StringSchema);

      return _possibleConstructorReturn(this, _getPrototypeOf(StringSchema).apply(this, arguments));
    }

    _createClass(StringSchema, [{
      key: "expected",
      value: function expected() {
        return 'a string';
      }
    }, {
      key: "validate",
      value: function validate(value) {
        return typeof value === 'string';
      }
    }]);

    return StringSchema;
  }(schema.Schema);

  exports.StringSchema = StringSchema;
});
unwrapExports(string);

var schemas = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(alias, exports);

  tslib_1.__exportStar(any, exports);

  tslib_1.__exportStar(array$2, exports);

  tslib_1.__exportStar(boolean_1, exports);

  tslib_1.__exportStar(choice, exports);

  tslib_1.__exportStar(integer, exports);

  tslib_1.__exportStar(number, exports);

  tslib_1.__exportStar(string, exports);
});
unwrapExports(schemas);

var defaults = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultDescriptor = api.apiDescriptor;
  exports.defaultUnknownHandler = leven_1.levenUnknownHandler;
  exports.defaultInvalidHandler = invalid.commonInvalidHandler;
  exports.defaultDeprecatedHandler = common.commonDeprecatedHandler;
});
unwrapExports(defaults);

var normalize$1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.normalize = function (options, schemas, opts) {
    return new Normalizer(schemas, opts).normalize(options);
  };

  var Normalizer =
  /*#__PURE__*/
  function () {
    function Normalizer(schemas, opts) {
      _classCallCheck(this, Normalizer);

      // istanbul ignore next
      var _ref = opts || {},
          _ref$logger = _ref.logger,
          logger = _ref$logger === void 0 ? console : _ref$logger,
          _ref$descriptor = _ref.descriptor,
          descriptor = _ref$descriptor === void 0 ? defaults.defaultDescriptor : _ref$descriptor,
          _ref$unknown = _ref.unknown,
          unknown = _ref$unknown === void 0 ? defaults.defaultUnknownHandler : _ref$unknown,
          _ref$invalid = _ref.invalid,
          invalid = _ref$invalid === void 0 ? defaults.defaultInvalidHandler : _ref$invalid,
          _ref$deprecated = _ref.deprecated,
          deprecated = _ref$deprecated === void 0 ? defaults.defaultDeprecatedHandler : _ref$deprecated;

      this._utils = {
        descriptor: descriptor,
        logger:
        /* istanbul ignore next */
        logger || {
          warn: function warn() {}
        },
        schemas: utils.recordFromArray(schemas, 'name'),
        normalizeDefaultResult: utils.normalizeDefaultResult,
        normalizeDeprecatedResult: utils.normalizeDeprecatedResult,
        normalizeForwardResult: utils.normalizeForwardResult,
        normalizeRedirectResult: utils.normalizeRedirectResult,
        normalizeValidateResult: utils.normalizeValidateResult
      };
      this._unknownHandler = unknown;
      this._invalidHandler = invalid;
      this._deprecatedHandler = deprecated;
      this.cleanHistory();
    }

    _createClass(Normalizer, [{
      key: "cleanHistory",
      value: function cleanHistory() {
        this._hasDeprecationWarned = utils.createAutoChecklist();
      }
    }, {
      key: "normalize",
      value: function normalize(options) {
        var _this = this;

        var normalized = {};
        var restOptionsArray = [options];

        var applyNormalization = function applyNormalization() {
          while (restOptionsArray.length !== 0) {
            var currentOptions = restOptionsArray.shift();

            var transferredOptionsArray = _this._applyNormalization(currentOptions, normalized);

            restOptionsArray.push.apply(restOptionsArray, _toConsumableArray(transferredOptionsArray));
          }
        };

        applyNormalization();

        var _arr = Object.keys(this._utils.schemas);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];
          var schema = this._utils.schemas[key];

          if (!(key in normalized)) {
            var defaultResult = utils.normalizeDefaultResult(schema.default(this._utils));

            if ('value' in defaultResult) {
              restOptionsArray.push(_defineProperty({}, key, defaultResult.value));
            }
          }
        }

        applyNormalization();

        var _arr2 = Object.keys(this._utils.schemas);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var _key = _arr2[_i2];
          var _schema = this._utils.schemas[_key];

          if (_key in normalized) {
            normalized[_key] = _schema.postprocess(normalized[_key], this._utils);
          }
        }

        return normalized;
      }
    }, {
      key: "_applyNormalization",
      value: function _applyNormalization(options, normalized) {
        var _this2 = this;

        var transferredOptionsArray = [];

        var _utils_1$partition = utils.partition(Object.keys(options), function (key) {
          return key in _this2._utils.schemas;
        }),
            _utils_1$partition2 = _slicedToArray(_utils_1$partition, 2),
            knownOptionNames = _utils_1$partition2[0],
            unknownOptionNames = _utils_1$partition2[1];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var key = _step.value;
            var schema = _this2._utils.schemas[key];
            var value = schema.preprocess(options[key], _this2._utils);
            var validateResult = utils.normalizeValidateResult(schema.validate(value, _this2._utils), value);

            if (validateResult !== true) {
              var invalidValue = validateResult.value;

              var errorMessageOrError = _this2._invalidHandler(key, invalidValue, _this2._utils);

              throw typeof errorMessageOrError === 'string' ? new Error(errorMessageOrError) :
              /* istanbul ignore next*/
              errorMessageOrError;
            }

            var appendTransferredOptions = function appendTransferredOptions(_ref2) {
              var from = _ref2.from,
                  to = _ref2.to;
              transferredOptionsArray.push(typeof to === 'string' ? _defineProperty({}, to, from) : _defineProperty({}, to.key, to.value));
            };

            var warnDeprecated = function warnDeprecated(_ref5) {
              var currentValue = _ref5.value,
                  redirectTo = _ref5.redirectTo;
              var deprecatedResult = utils.normalizeDeprecatedResult(schema.deprecated(currentValue, _this2._utils), value,
              /* doNotNormalizeTrue */
              true);

              if (deprecatedResult === false) {
                return;
              }

              if (deprecatedResult === true) {
                if (!_this2._hasDeprecationWarned(key)) {
                  _this2._utils.logger.warn(_this2._deprecatedHandler(key, redirectTo, _this2._utils));
                }
              } else {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = deprecatedResult[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var deprecatedValue = _step3.value.value;
                    var pair = {
                      key: key,
                      value: deprecatedValue
                    };

                    if (!_this2._hasDeprecationWarned(pair)) {
                      var redirectToPair = typeof redirectTo === 'string' ? {
                        key: redirectTo,
                        value: deprecatedValue
                      } : redirectTo;

                      _this2._utils.logger.warn(_this2._deprecatedHandler(pair, redirectToPair, _this2._utils));
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }
              }
            };

            var forwardResult = utils.normalizeForwardResult(schema.forward(value, _this2._utils), value);
            forwardResult.forEach(appendTransferredOptions);
            var redirectResult = utils.normalizeRedirectResult(schema.redirect(value, _this2._utils), value);
            redirectResult.redirect.forEach(appendTransferredOptions);

            if ('remain' in redirectResult) {
              var remainingValue = redirectResult.remain;
              normalized[key] = key in normalized ? schema.overlap(normalized[key], remainingValue, _this2._utils) : remainingValue;
              warnDeprecated({
                value: remainingValue
              });
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = redirectResult.redirect[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _step4$value = _step4.value,
                    from = _step4$value.from,
                    to = _step4$value.to;
                warnDeprecated({
                  value: from,
                  redirectTo: to
                });
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          };

          for (var _iterator = knownOptionNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = unknownOptionNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;
            var value = options[key];

            var unknownResult = this._unknownHandler(key, value, this._utils);

            if (unknownResult) {
              var _arr3 = Object.keys(unknownResult);

              for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                var unknownKey = _arr3[_i3];

                var unknownOption = _defineProperty({}, unknownKey, unknownResult[unknownKey]);

                if (unknownKey in this._utils.schemas) {
                  transferredOptionsArray.push(unknownOption);
                } else {
                  Object.assign(normalized, unknownOption);
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return transferredOptionsArray;
      }
    }]);

    return Normalizer;
  }();

  exports.Normalizer = Normalizer;
});
unwrapExports(normalize$1);

var lib$1 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  tslib_1.__exportStar(descriptors, exports);

  tslib_1.__exportStar(handlers, exports);

  tslib_1.__exportStar(schemas, exports);

  tslib_1.__exportStar(normalize$1, exports);

  tslib_1.__exportStar(schema, exports);
});
unwrapExports(lib$1);

var hasFlag$3 = function hasFlag(flag, argv$$1) {
  argv$$1 = argv$$1 || process.argv;
  var terminatorPos = argv$$1.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv$$1.indexOf(prefix + flag);
  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

var supportsColor$1 = createCommonjsModule(function (module) {
  'use strict';

  var env$$1 = process.env;

  var support = function support(level) {
    if (level === 0) {
      return false;
    }

    return {
      level: level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };

  var supportLevel = function () {
    if (hasFlag$3('no-color') || hasFlag$3('no-colors') || hasFlag$3('color=false')) {
      return 0;
    }

    if (hasFlag$3('color=16m') || hasFlag$3('color=full') || hasFlag$3('color=truecolor')) {
      return 3;
    }

    if (hasFlag$3('color=256')) {
      return 2;
    }

    if (hasFlag$3('color') || hasFlag$3('colors') || hasFlag$3('color=true') || hasFlag$3('color=always')) {
      return 1;
    }

    if (process.stdout && !process.stdout.isTTY) {
      return 0;
    }

    if (process.platform === 'win32') {
      // Node.js 7.5.0 is the first version of Node.js to include a patch to
      // libuv that enables 256 color output on Windows. Anything earlier and it
      // won't work. However, here we target Node.js 8 at minimum as it is an LTS
      // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
      // release that supports 256 colors.
      var osRelease = require$$1$1.release().split('.');

      if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return 2;
      }

      return 1;
    }

    if ('CI' in env$$1) {
      if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
        return sign in env$$1;
      }) || env$$1.CI_NAME === 'codeship') {
        return 1;
      }

      return 0;
    }

    if ('TEAMCITY_VERSION' in env$$1) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$$1.TEAMCITY_VERSION) ? 1 : 0;
    }

    if ('TERM_PROGRAM' in env$$1) {
      var version = parseInt((env$$1.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

      switch (env$$1.TERM_PROGRAM) {
        case 'iTerm.app':
          return version >= 3 ? 3 : 2;

        case 'Hyper':
          return 3;

        case 'Apple_Terminal':
          return 2;
        // No default
      }
    }

    if (/-256(color)?$/i.test(env$$1.TERM)) {
      return 2;
    }

    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env$$1.TERM)) {
      return 1;
    }

    if ('COLORTERM' in env$$1) {
      return 1;
    }

    if (env$$1.TERM === 'dumb') {
      return 0;
    }

    return 0;
  }();

  if ('FORCE_COLOR' in env$$1) {
    supportLevel = parseInt(env$$1.FORCE_COLOR, 10) === 0 ? 0 : supportLevel || 1;
  }

  module.exports = process && support(supportLevel);
});

var templates$2 = createCommonjsModule(function (module) {
  'use strict';

  var TEMPLATE_REGEX = /(?:\\(u[a-f0-9]{4}|x[a-f0-9]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u[0-9a-f]{4}|x[0-9a-f]{2}|.)|([^\\])/gi;
  var ESCAPES = {
    n: '\n',
    r: '\r',
    t: '\t',
    b: '\b',
    f: '\f',
    v: '\v',
    0: '\0',
    '\\': '\\',
    e: "\x1B",
    a: "\x07"
  };

  function unescape(c) {
    if (c[0] === 'u' && c.length === 5 || c[0] === 'x' && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }

    return ESCAPES[c] || c;
  }

  function parseArguments(name, args) {
    var results = [];
    var chunks = args.trim().split(/\s*,\s*/g);
    var matches;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chunk = _step.value;

        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, function (m, escape, chr) {
            return escape ? unescape(escape) : chr;
          }));
        } else {
          throw new Error("Invalid Chalk template style argument: ".concat(chunk, " (in style '").concat(name, "')"));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return results;
  }

  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    var results = [];
    var matches;

    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      var name = matches[1];

      if (matches[2]) {
        var args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }

    return results;
  }

  function buildStyle(chalk, styles) {
    var enabled = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var layer = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = layer.styles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var style = _step3.value;
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var current = chalk;

    var _arr = Object.keys(enabled);

    for (var _i = 0; _i < _arr.length; _i++) {
      var styleName = _arr[_i];

      if (Array.isArray(enabled[styleName])) {
        if (!(styleName in current)) {
          throw new Error("Unknown Chalk style: ".concat(styleName));
        }

        if (enabled[styleName].length > 0) {
          current = current[styleName].apply(current, enabled[styleName]);
        } else {
          current = current[styleName];
        }
      }
    }

    return current;
  }

  module.exports = function (chalk, tmp) {
    var styles = [];
    var chunks = [];
    var chunk = []; // eslint-disable-next-line max-params

    tmp.replace(TEMPLATE_REGEX, function (m, escapeChar, inverse, style, close, chr) {
      if (escapeChar) {
        chunk.push(unescape(escapeChar));
      } else if (style) {
        var str = chunk.join('');
        chunk = [];
        chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
        styles.push({
          inverse: inverse,
          styles: parseStyle(style)
        });
      } else if (close) {
        if (styles.length === 0) {
          throw new Error('Found extraneous } in Chalk template literal');
        }

        chunks.push(buildStyle(chalk, styles)(chunk.join('')));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(chr);
      }
    });
    chunks.push(chunk.join(''));

    if (styles.length > 0) {
      var errMsg = "Chalk template literal is missing ".concat(styles.length, " closing bracket").concat(styles.length === 1 ? '' : 's', " (`}`)");
      throw new Error(errMsg);
    }

    return chunks.join('');
  };
});

var isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm'); // `supportsColor.level` → `ansiStyles.color[name]` mapping

var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']; // `color-convert` models to exclude from the Chalk API due to conflicts and such

var skipModels = new Set(['gray']);
var styles = Object.create(null);

function applyOptions(obj, options) {
  options = options || {}; // Detect level if not set manually

  var scLevel = supportsColor$1 ? supportsColor$1.level : 0;
  obj.level = options.level === undefined ? scLevel : options.level;
  obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
  // We check for this.template here since calling `chalk.constructor()`
  // by itself will have a `this` of a previously constructed chalk object
  if (!this || !(this instanceof Chalk) || this.template) {
    var _chalk = {};
    applyOptions(_chalk, options);

    _chalk.template = function () {
      var args = [].slice.call(arguments);
      return chalkTag.apply(null, [_chalk.template].concat(args));
    };

    Object.setPrototypeOf(_chalk, Chalk.prototype);
    Object.setPrototypeOf(_chalk.template, _chalk);
    _chalk.template.constructor = Chalk;
    return _chalk.template;
  }

  applyOptions(this, options);
} // Use bright blue on Windows as the normal blue color is illegible


if (isSimpleWindowsTerm) {
  ansiStyles.blue.open = "\x1B[94m";
}

var _arr = Object.keys(ansiStyles);

var _loop = function _loop() {
  var key = _arr[_i];
  ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
  styles[key] = {
    get: function get() {
      var codes = ansiStyles[key];
      return build.call(this, this._styles ? this._styles.concat(codes) : [codes], key);
    }
  };
};

for (var _i = 0; _i < _arr.length; _i++) {
  _loop();
}

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');

var _arr2 = Object.keys(ansiStyles.color.ansi);

var _loop2 = function _loop2() {
  var model = _arr2[_i2];

  if (skipModels.has(model)) {
    return "continue";
  }

  styles[model] = {
    get: function get() {
      var level = this.level;
      return function () {
        var open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
        var codes = {
          open: open,
          close: ansiStyles.color.close,
          closeRe: ansiStyles.color.closeRe
        };
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
      };
    }
  };
};

for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
  var _ret = _loop2();

  if (_ret === "continue") continue;
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');

var _arr3 = Object.keys(ansiStyles.bgColor.ansi);

var _loop3 = function _loop3() {
  var model = _arr3[_i3];

  if (skipModels.has(model)) {
    return "continue";
  }

  var bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
  styles[bgModel] = {
    get: function get() {
      var level = this.level;
      return function () {
        var open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
        var codes = {
          open: open,
          close: ansiStyles.bgColor.close,
          closeRe: ansiStyles.bgColor.closeRe
        };
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
      };
    }
  };
};

for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
  var _ret2 = _loop3();

  if (_ret2 === "continue") continue;
}

var proto = Object.defineProperties(function () {}, styles);

function build(_styles, key) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };

  builder._styles = _styles;
  var self = this;
  Object.defineProperty(builder, 'level', {
    enumerable: true,
    get: function get() {
      return self.level;
    },
    set: function set(level) {
      self.level = level;
    }
  });
  Object.defineProperty(builder, 'enabled', {
    enumerable: true,
    get: function get() {
      return self.enabled;
    },
    set: function set(enabled) {
      self.enabled = enabled;
    }
  }); // See below for fix regarding invisible grey/dim combination on Windows

  builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey'; // `__proto__` is used because we must return a function, but there is
  // no way to create a function with a different prototype

  builder.__proto__ = proto; // eslint-disable-line no-proto

  return builder;
}

function applyStyle() {
  // Support varags, but simply cast to string in case there's only one arg
  var args = arguments;
  var argsLen = args.length;
  var str = String(arguments[0]);

  if (argsLen === 0) {
    return '';
  }

  if (argsLen > 1) {
    // Don't slice `arguments`, it prevents V8 optimizations
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!this.enabled || this.level <= 0 || !str) {
    return str;
  } // Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
  // see https://github.com/chalk/chalk/issues/58
  // If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.


  var originalDim = ansiStyles.dim.open;

  if (isSimpleWindowsTerm && this.hasGrey) {
    ansiStyles.dim.open = '';
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this._styles.slice().reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var code = _step.value;
      // Replace any instances already present with a re-opening code
      // otherwise only the part of the string until said closing code
      // will be colored, and the rest will simply be 'plain'.
      str = code.open + str.replace(code.closeRe, code.open) + code.close; // Close the styling before a linebreak and reopen
      // after next line to fix a bleed issue on macOS
      // https://github.com/chalk/chalk/pull/92

      str = str.replace(/\r?\n/g, "".concat(code.close, "$&").concat(code.open));
    } // Reset the original `dim` if we changed it to work around the Windows dimmed gray issue

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ansiStyles.dim.open = originalDim;
  return str;
}

function chalkTag(chalk, strings) {
  if (!Array.isArray(strings)) {
    // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return [].slice.call(arguments, 1).join(' ');
  }

  var args = [].slice.call(arguments, 2);
  var parts = [strings.raw[0]];

  for (var i = 1; i < strings.length; i++) {
    parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
    parts.push(String(strings.raw[i]));
  }

  return templates$2(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);
var chalk$2 = Chalk(); // eslint-disable-line new-cap

var supportsColor_1$2 = supportsColor$1;
chalk$2.supportsColor = supportsColor_1$2;

var cliDescriptor = {
  key: function key(_key) {
    return _key.length === 1 ? "-".concat(_key) : "--".concat(_key);
  },
  value: function value(_value) {
    return lib$1.apiDescriptor.value(_value);
  },
  pair: function pair(_ref) {
    var key = _ref.key,
        value = _ref.value;
    return value === false ? "--no-".concat(key) : value === true ? cliDescriptor.key(key) : value === "" ? "".concat(cliDescriptor.key(key), " without an argument") : "".concat(cliDescriptor.key(key), "=").concat(value);
  }
};

var FlagSchema =
/*#__PURE__*/
function (_vnopts$ChoiceSchema) {
  _inherits(FlagSchema, _vnopts$ChoiceSchema);

  function FlagSchema(_ref2) {
    var _this;

    var name = _ref2.name,
        flags = _ref2.flags;

    _classCallCheck(this, FlagSchema);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlagSchema).call(this, {
      name: name,
      choices: flags
    }));
    _this._flags = flags.slice().sort();
    return _this;
  }

  _createClass(FlagSchema, [{
    key: "preprocess",
    value: function preprocess(value, utils) {
      if (typeof value === "string" && value.length !== 0 && this._flags.indexOf(value) === -1) {
        var suggestion = this._flags.find(function (flag) {
          return leven$1(flag, value) < 3;
        });

        if (suggestion) {
          utils.logger.warn(["Unknown flag ".concat(chalk$2.yellow(utils.descriptor.value(value)), ","), "did you mean ".concat(chalk$2.blue(utils.descriptor.value(suggestion)), "?")].join(" "));
          return suggestion;
        }
      }

      return value;
    }
  }, {
    key: "expected",
    value: function expected() {
      return "a flag";
    }
  }]);

  return FlagSchema;
}(lib$1.ChoiceSchema);

function normalizeOptions$1(options, optionInfos) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      logger = _ref3.logger,
      _ref3$isCLI = _ref3.isCLI,
      isCLI = _ref3$isCLI === void 0 ? false : _ref3$isCLI,
      _ref3$passThrough = _ref3.passThrough,
      passThrough = _ref3$passThrough === void 0 ? false : _ref3$passThrough;

  var unknown = !passThrough ? lib$1.levenUnknownHandler : Array.isArray(passThrough) ? function (key, value) {
    return passThrough.indexOf(key) === -1 ? undefined : _defineProperty({}, key, value);
  } : function (key, value) {
    return _defineProperty({}, key, value);
  };
  var descriptor = isCLI ? cliDescriptor : lib$1.apiDescriptor;
  var schemas = optionInfosToSchemas(optionInfos, {
    isCLI: isCLI
  });
  return lib$1.normalize(options, schemas, {
    logger: logger,
    unknown: unknown,
    descriptor: descriptor
  });
}

function optionInfosToSchemas(optionInfos, _ref6) {
  var isCLI = _ref6.isCLI;
  var schemas = [];

  if (isCLI) {
    schemas.push(lib$1.AnySchema.create({
      name: "_"
    }));
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = optionInfos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var optionInfo = _step.value;
      schemas.push(optionInfoToSchema(optionInfo, {
        isCLI: isCLI,
        optionInfos: optionInfos
      }));

      if (optionInfo.alias && isCLI) {
        schemas.push(lib$1.AliasSchema.create({
          name: optionInfo.alias,
          sourceName: optionInfo.name
        }));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return schemas;
}

function optionInfoToSchema(optionInfo, _ref7) {
  var isCLI = _ref7.isCLI,
      optionInfos = _ref7.optionInfos;
  var SchemaConstructor;
  var parameters = {
    name: optionInfo.name
  };
  var handlers = {};

  switch (optionInfo.type) {
    case "int":
      SchemaConstructor = lib$1.IntegerSchema;

      if (isCLI) {
        parameters.preprocess = function (value) {
          return Number(value);
        };
      }

      break;

    case "choice":
      SchemaConstructor = lib$1.ChoiceSchema;
      parameters.choices = optionInfo.choices.map(function (choiceInfo) {
        return _typeof(choiceInfo) === "object" && choiceInfo.redirect ? Object.assign({}, choiceInfo, {
          redirect: {
            to: {
              key: optionInfo.name,
              value: choiceInfo.redirect
            }
          }
        }) : choiceInfo;
      });
      break;

    case "boolean":
      SchemaConstructor = lib$1.BooleanSchema;
      break;

    case "flag":
      SchemaConstructor = FlagSchema;
      parameters.flags = optionInfos.map(function (optionInfo) {
        return [].concat(optionInfo.alias || [], optionInfo.description ? optionInfo.name : [], optionInfo.oppositeDescription ? "no-".concat(optionInfo.name) : []);
      }).reduce(function (a, b) {
        return a.concat(b);
      }, []);
      break;

    case "path":
      SchemaConstructor = lib$1.StringSchema;
      break;

    default:
      throw new Error("Unexpected type ".concat(optionInfo.type));
  }

  if (optionInfo.exception) {
    parameters.validate = function (value, schema, utils) {
      return optionInfo.exception(value) || schema.validate(value, utils);
    };
  } else {
    parameters.validate = function (value, schema, utils) {
      return value === undefined || schema.validate(value, utils);
    };
  }

  if (optionInfo.redirect) {
    handlers.redirect = function (value) {
      return !value ? undefined : {
        to: {
          key: optionInfo.redirect.option,
          value: optionInfo.redirect.value
        }
      };
    };
  }

  if (optionInfo.deprecated) {
    handlers.deprecated = true;
  }

  return optionInfo.array ? lib$1.ArraySchema.create(Object.assign(isCLI ? {
    preprocess: function preprocess(v) {
      return [].concat(v);
    }
  } : {}, handlers, {
    valueSchema: SchemaConstructor.create(parameters)
  })) : SchemaConstructor.create(Object.assign({}, parameters, handlers));
}

function normalizeApiOptions(options, optionInfos, opts) {
  return normalizeOptions$1(options, optionInfos, opts);
}

function normalizeCliOptions(options, optionInfos, opts) {
  return normalizeOptions$1(options, optionInfos, Object.assign({
    isCLI: true
  }, opts));
}

var optionsNormalizer = {
  normalizeApiOptions: normalizeApiOptions,
  normalizeCliOptions: normalizeCliOptions
};

var _shim_path = {};

var _shim_path$1 = Object.freeze({
	default: _shim_path
});

var getLast = function getLast(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : null;
};

function locStart$1(node, opts) {
  opts = opts || {}; // Handle nodes with decorators. They should start at the first decorator

  if (!opts.ignoreDecorators && node.declaration && node.declaration.decorators && node.declaration.decorators.length > 0) {
    return locStart$1(node.declaration.decorators[0]);
  }

  if (!opts.ignoreDecorators && node.decorators && node.decorators.length > 0) {
    return locStart$1(node.decorators[0]);
  }

  if (node.__location) {
    return node.__location.startOffset;
  }

  if (node.range) {
    return node.range[0];
  }

  if (typeof node.start === "number") {
    return node.start;
  }

  if (node.loc) {
    return node.loc.start;
  }

  return null;
}

function locEnd$1(node) {
  var endNode = node.nodes && getLast(node.nodes);

  if (endNode && node.source && !node.source.end) {
    node = endNode;
  }

  if (node.__location) {
    return node.__location.endOffset;
  }

  var loc = node.range ? node.range[1] : typeof node.end === "number" ? node.end : null;

  if (node.typeAnnotation) {
    return Math.max(loc, locEnd$1(node.typeAnnotation));
  }

  if (node.loc && !loc) {
    return node.loc.end;
  }

  return loc;
}

var loc = {
  locStart: locStart$1,
  locEnd: locEnd$1
};

var jsTokens = createCommonjsModule(function (module, exports) {
  // Copyright 2014, 2015, 2016, 2017 Simon Lydell
  // License: MIT. (See LICENSE.)
  Object.defineProperty(exports, "__esModule", {
    value: true
  }); // This regex comes from regex.coffee, and is inserted here by generate-index.js
  // (run `npm run build`).

  exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;

  exports.matchToToken = function (match) {
    var token = {
      type: "invalid",
      value: match[0]
    };
    if (match[1]) token.type = "string", token.closed = !!(match[3] || match[4]);else if (match[5]) token.type = "comment";else if (match[6]) token.type = "comment", token.closed = !!match[7];else if (match[8]) token.type = "regex";else if (match[9]) token.type = "number";else if (match[10]) token.type = "name";else if (match[11]) token.type = "punctuator";else if (match[12]) token.type = "whitespace";
    return token;
  };
});
unwrapExports(jsTokens);

var ast = createCommonjsModule(function (module) {
  /*
    Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>
  
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  (function () {
    'use strict';

    function isExpression(node) {
      if (node == null) {
        return false;
      }

      switch (node.type) {
        case 'ArrayExpression':
        case 'AssignmentExpression':
        case 'BinaryExpression':
        case 'CallExpression':
        case 'ConditionalExpression':
        case 'FunctionExpression':
        case 'Identifier':
        case 'Literal':
        case 'LogicalExpression':
        case 'MemberExpression':
        case 'NewExpression':
        case 'ObjectExpression':
        case 'SequenceExpression':
        case 'ThisExpression':
        case 'UnaryExpression':
        case 'UpdateExpression':
          return true;
      }

      return false;
    }

    function isIterationStatement(node) {
      if (node == null) {
        return false;
      }

      switch (node.type) {
        case 'DoWhileStatement':
        case 'ForInStatement':
        case 'ForStatement':
        case 'WhileStatement':
          return true;
      }

      return false;
    }

    function isStatement(node) {
      if (node == null) {
        return false;
      }

      switch (node.type) {
        case 'BlockStatement':
        case 'BreakStatement':
        case 'ContinueStatement':
        case 'DebuggerStatement':
        case 'DoWhileStatement':
        case 'EmptyStatement':
        case 'ExpressionStatement':
        case 'ForInStatement':
        case 'ForStatement':
        case 'IfStatement':
        case 'LabeledStatement':
        case 'ReturnStatement':
        case 'SwitchStatement':
        case 'ThrowStatement':
        case 'TryStatement':
        case 'VariableDeclaration':
        case 'WhileStatement':
        case 'WithStatement':
          return true;
      }

      return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
      switch (node.type) {
        case 'IfStatement':
          if (node.alternate != null) {
            return node.alternate;
          }

          return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
          return node.body;
      }

      return null;
    }

    function isProblematicIfStatement(node) {
      var current;

      if (node.type !== 'IfStatement') {
        return false;
      }

      if (node.alternate == null) {
        return false;
      }

      current = node.consequent;

      do {
        if (current.type === 'IfStatement') {
          if (current.alternate == null) {
            return true;
          }
        }

        current = trailingStatement(current);
      } while (current);

      return false;
    }

    module.exports = {
      isExpression: isExpression,
      isStatement: isStatement,
      isIterationStatement: isIterationStatement,
      isSourceElement: isSourceElement,
      isProblematicIfStatement: isProblematicIfStatement,
      trailingStatement: trailingStatement
    };
  })();
  /* vim: set sw=4 ts=4 et tw=80 : */

});

var code = createCommonjsModule(function (module) {
  /*
    Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
    Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>
  
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  (function () {
    'use strict';

    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch; // See `tools/generate-identifier-regex.js`.

    ES5Regex = {
      // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
      NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
      NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };
    ES6Regex = {
      // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
      NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
      // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
      NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };

    function isDecimalDigit(ch) {
      return 0x30 <= ch && ch <= 0x39; // 0..9
    }

    function isHexDigit(ch) {
      return 0x30 <= ch && ch <= 0x39 || // 0..9
      0x61 <= ch && ch <= 0x66 || // a..f
      0x41 <= ch && ch <= 0x46; // A..F
    }

    function isOctalDigit(ch) {
      return ch >= 0x30 && ch <= 0x37; // 0..7
    } // 7.2 White Space


    NON_ASCII_WHITESPACES = [0x1680, 0x180E, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF];

    function isWhiteSpace(ch) {
      return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 || ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    } // 7.3 Line Terminators


    function isLineTerminator(ch) {
      return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    } // 7.6 Identifier Names and Identifiers


    function fromCodePoint(cp) {
      if (cp <= 0xFFFF) {
        return String.fromCharCode(cp);
      }

      var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
      var cu2 = String.fromCharCode((cp - 0x10000) % 0x400 + 0xDC00);
      return cu1 + cu2;
    }

    IDENTIFIER_START = new Array(0x80);

    for (ch = 0; ch < 0x80; ++ch) {
      IDENTIFIER_START[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
      ch >= 0x41 && ch <= 0x5A || // A..Z
      ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
    }

    IDENTIFIER_PART = new Array(0x80);

    for (ch = 0; ch < 0x80; ++ch) {
      IDENTIFIER_PART[ch] = ch >= 0x61 && ch <= 0x7A || // a..z
      ch >= 0x41 && ch <= 0x5A || // A..Z
      ch >= 0x30 && ch <= 0x39 || // 0..9
      ch === 0x24 || ch === 0x5F; // $ (dollar) and _ (underscore)
    }

    function isIdentifierStartES5(ch) {
      return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES5(ch) {
      return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    function isIdentifierStartES6(ch) {
      return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES6(ch) {
      return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    module.exports = {
      isDecimalDigit: isDecimalDigit,
      isHexDigit: isHexDigit,
      isOctalDigit: isOctalDigit,
      isWhiteSpace: isWhiteSpace,
      isLineTerminator: isLineTerminator,
      isIdentifierStartES5: isIdentifierStartES5,
      isIdentifierPartES5: isIdentifierPartES5,
      isIdentifierStartES6: isIdentifierStartES6,
      isIdentifierPartES6: isIdentifierPartES6
    };
  })();
  /* vim: set sw=4 ts=4 et tw=80 : */

});

var keyword = createCommonjsModule(function (module) {
  /*
    Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>
  
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  (function () {
    'use strict';

    var code$$1 = code;

    function isStrictModeReservedWordES6(id) {
      switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
          return true;

        default:
          return false;
      }
    }

    function isKeywordES5(id, strict) {
      // yield should not be treated as keyword under non-strict mode.
      if (!strict && id === 'yield') {
        return false;
      }

      return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
      if (strict && isStrictModeReservedWordES6(id)) {
        return true;
      }

      switch (id.length) {
        case 2:
          return id === 'if' || id === 'in' || id === 'do';

        case 3:
          return id === 'var' || id === 'for' || id === 'new' || id === 'try';

        case 4:
          return id === 'this' || id === 'else' || id === 'case' || id === 'void' || id === 'with' || id === 'enum';

        case 5:
          return id === 'while' || id === 'break' || id === 'catch' || id === 'throw' || id === 'const' || id === 'yield' || id === 'class' || id === 'super';

        case 6:
          return id === 'return' || id === 'typeof' || id === 'delete' || id === 'switch' || id === 'export' || id === 'import';

        case 7:
          return id === 'default' || id === 'finally' || id === 'extends';

        case 8:
          return id === 'function' || id === 'continue' || id === 'debugger';

        case 10:
          return id === 'instanceof';

        default:
          return false;
      }
    }

    function isReservedWordES5(id, strict) {
      return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
      return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
      return id === 'eval' || id === 'arguments';
    }

    function isIdentifierNameES5(id) {
      var i, iz, ch;

      if (id.length === 0) {
        return false;
      }

      ch = id.charCodeAt(0);

      if (!code$$1.isIdentifierStartES5(ch)) {
        return false;
      }

      for (i = 1, iz = id.length; i < iz; ++i) {
        ch = id.charCodeAt(i);

        if (!code$$1.isIdentifierPartES5(ch)) {
          return false;
        }
      }

      return true;
    }

    function decodeUtf16(lead, trail) {
      return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }

    function isIdentifierNameES6(id) {
      var i, iz, ch, lowCh, check;

      if (id.length === 0) {
        return false;
      }

      check = code$$1.isIdentifierStartES6;

      for (i = 0, iz = id.length; i < iz; ++i) {
        ch = id.charCodeAt(i);

        if (0xD800 <= ch && ch <= 0xDBFF) {
          ++i;

          if (i >= iz) {
            return false;
          }

          lowCh = id.charCodeAt(i);

          if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
            return false;
          }

          ch = decodeUtf16(ch, lowCh);
        }

        if (!check(ch)) {
          return false;
        }

        check = code$$1.isIdentifierPartES6;
      }

      return true;
    }

    function isIdentifierES5(id, strict) {
      return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
      return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
      isKeywordES5: isKeywordES5,
      isKeywordES6: isKeywordES6,
      isReservedWordES5: isReservedWordES5,
      isReservedWordES6: isReservedWordES6,
      isRestrictedWord: isRestrictedWord,
      isIdentifierNameES5: isIdentifierNameES5,
      isIdentifierNameES6: isIdentifierNameES6,
      isIdentifierES5: isIdentifierES5,
      isIdentifierES6: isIdentifierES6
    };
  })();
  /* vim: set sw=4 ts=4 et tw=80 : */

});

var utils$2 = createCommonjsModule(function (module, exports) {
  /*
    Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>
  
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
  
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */
  (function () {
    'use strict';

    exports.ast = ast;
    exports.code = code;
    exports.keyword = keyword;
  })();
  /* vim: set sw=4 ts=4 et tw=80 : */

});

var hasFlag$6 = createCommonjsModule(function (module) {
  'use strict';

  module.exports = function (flag, argv$$1) {
    argv$$1 = argv$$1 || process.argv;
    var prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    var pos = argv$$1.indexOf(prefix + flag);
    var terminatorPos = argv$$1.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

var env$2 = process.env;
var forceColor$1;

if (hasFlag$6('no-color') || hasFlag$6('no-colors') || hasFlag$6('color=false')) {
  forceColor$1 = false;
} else if (hasFlag$6('color') || hasFlag$6('colors') || hasFlag$6('color=true') || hasFlag$6('color=always')) {
  forceColor$1 = true;
}

if ('FORCE_COLOR' in env$2) {
  forceColor$1 = env$2.FORCE_COLOR.length === 0 || parseInt(env$2.FORCE_COLOR, 10) !== 0;
}

function translateLevel$1(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}

function supportsColor$4(stream) {
  if (forceColor$1 === false) {
    return 0;
  }

  if (hasFlag$6('color=16m') || hasFlag$6('color=full') || hasFlag$6('color=truecolor')) {
    return 3;
  }

  if (hasFlag$6('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor$1 !== true) {
    return 0;
  }

  var min = forceColor$1 ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
    // release that supports 256 colors. Windows 10 build 14931 is the first release
    // that supports 16m/TrueColor.
    var osRelease = require$$1$1.release().split('.');

    if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env$2) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
      return sign in env$2;
    }) || env$2.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env$2) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$2.TEAMCITY_VERSION) ? 1 : 0;
  }

  if (env$2.COLORTERM === 'truecolor') {
    return 3;
  }

  if ('TERM_PROGRAM' in env$2) {
    var version = parseInt((env$2.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env$2.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;

      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env$2.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env$2.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env$2) {
    return 1;
  }

  if (env$2.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel$1(stream) {
  var level = supportsColor$4(stream);
  return translateLevel$1(level);
}

var supportsColor_1$3 = {
  supportsColor: getSupportLevel$1,
  stdout: getSupportLevel$1(process.stdout),
  stderr: getSupportLevel$1(process.stderr)
};

var templates$4 = createCommonjsModule(function (module) {
  'use strict';

  var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
  var ESCAPES = new Map([['n', '\n'], ['r', '\r'], ['t', '\t'], ['b', '\b'], ['f', '\f'], ['v', '\v'], ['0', '\0'], ['\\', '\\'], ['e', "\x1B"], ['a', "\x07"]]);

  function unescape(c) {
    if (c[0] === 'u' && c.length === 5 || c[0] === 'x' && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }

    return ESCAPES.get(c) || c;
  }

  function parseArguments(name, args) {
    var results = [];
    var chunks = args.trim().split(/\s*,\s*/g);
    var matches;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chunk = _step.value;

        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, function (m, escape, chr) {
            return escape ? unescape(escape) : chr;
          }));
        } else {
          throw new Error("Invalid Chalk template style argument: ".concat(chunk, " (in style '").concat(name, "')"));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return results;
  }

  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    var results = [];
    var matches;

    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      var name = matches[1];

      if (matches[2]) {
        var args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }

    return results;
  }

  function buildStyle(chalk, styles) {
    var enabled = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var layer = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = layer.styles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var style = _step3.value;
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var current = chalk;

    var _arr = Object.keys(enabled);

    for (var _i = 0; _i < _arr.length; _i++) {
      var styleName = _arr[_i];

      if (Array.isArray(enabled[styleName])) {
        if (!(styleName in current)) {
          throw new Error("Unknown Chalk style: ".concat(styleName));
        }

        if (enabled[styleName].length > 0) {
          current = current[styleName].apply(current, enabled[styleName]);
        } else {
          current = current[styleName];
        }
      }
    }

    return current;
  }

  module.exports = function (chalk, tmp) {
    var styles = [];
    var chunks = [];
    var chunk = []; // eslint-disable-next-line max-params

    tmp.replace(TEMPLATE_REGEX, function (m, escapeChar, inverse, style, close, chr) {
      if (escapeChar) {
        chunk.push(unescape(escapeChar));
      } else if (style) {
        var str = chunk.join('');
        chunk = [];
        chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
        styles.push({
          inverse: inverse,
          styles: parseStyle(style)
        });
      } else if (close) {
        if (styles.length === 0) {
          throw new Error('Found extraneous } in Chalk template literal');
        }

        chunks.push(buildStyle(chalk, styles)(chunk.join('')));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(chr);
      }
    });
    chunks.push(chunk.join(''));

    if (styles.length > 0) {
      var errMsg = "Chalk template literal is missing ".concat(styles.length, " closing bracket").concat(styles.length === 1 ? '' : 's', " (`}`)");
      throw new Error(errMsg);
    }

    return chunks.join('');
  };
});

var chalk$5 = createCommonjsModule(function (module) {
  'use strict';

  var stdoutColor = supportsColor_1$3.stdout;
  var isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm'); // `supportsColor.level` → `ansiStyles.color[name]` mapping

  var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']; // `color-convert` models to exclude from the Chalk API due to conflicts and such

  var skipModels = new Set(['gray']);
  var styles = Object.create(null);

  function applyOptions(obj, options) {
    options = options || {}; // Detect level if not set manually

    var scLevel = stdoutColor ? stdoutColor.level : 0;
    obj.level = options.level === undefined ? scLevel : options.level;
    obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
  }

  function Chalk(options) {
    // We check for this.template here since calling `chalk.constructor()`
    // by itself will have a `this` of a previously constructed chalk object
    if (!this || !(this instanceof Chalk) || this.template) {
      var _chalk = {};
      applyOptions(_chalk, options);

      _chalk.template = function () {
        var args = [].slice.call(arguments);
        return chalkTag.apply(null, [_chalk.template].concat(args));
      };

      Object.setPrototypeOf(_chalk, Chalk.prototype);
      Object.setPrototypeOf(_chalk.template, _chalk);
      _chalk.template.constructor = Chalk;
      return _chalk.template;
    }

    applyOptions(this, options);
  } // Use bright blue on Windows as the normal blue color is illegible


  if (isSimpleWindowsTerm) {
    ansiStyles.blue.open = "\x1B[94m";
  }

  var _arr = Object.keys(ansiStyles);

  var _loop = function _loop() {
    var key = _arr[_i];
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    styles[key] = {
      get: function get() {
        var codes = ansiStyles[key];
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
      }
    };
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  styles.visible = {
    get: function get() {
      return build.call(this, this._styles || [], true, 'visible');
    }
  };
  ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');

  var _arr2 = Object.keys(ansiStyles.color.ansi);

  var _loop2 = function _loop2() {
    var model = _arr2[_i2];

    if (skipModels.has(model)) {
      return "continue";
    }

    styles[model] = {
      get: function get() {
        var level = this.level;
        return function () {
          var open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
          var codes = {
            open: open,
            close: ansiStyles.color.close,
            closeRe: ansiStyles.color.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  };

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _ret = _loop2();

    if (_ret === "continue") continue;
  }

  ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');

  var _arr3 = Object.keys(ansiStyles.bgColor.ansi);

  var _loop3 = function _loop3() {
    var model = _arr3[_i3];

    if (skipModels.has(model)) {
      return "continue";
    }

    var bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get: function get() {
        var level = this.level;
        return function () {
          var open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
          var codes = {
            open: open,
            close: ansiStyles.bgColor.close,
            closeRe: ansiStyles.bgColor.closeRe
          };
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
        };
      }
    };
  };

  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var _ret2 = _loop3();

    if (_ret2 === "continue") continue;
  }

  var proto = Object.defineProperties(function () {}, styles);

  function build(_styles, _empty, key) {
    var builder = function builder() {
      return applyStyle.apply(builder, arguments);
    };

    builder._styles = _styles;
    builder._empty = _empty;
    var self = this;
    Object.defineProperty(builder, 'level', {
      enumerable: true,
      get: function get() {
        return self.level;
      },
      set: function set(level) {
        self.level = level;
      }
    });
    Object.defineProperty(builder, 'enabled', {
      enumerable: true,
      get: function get() {
        return self.enabled;
      },
      set: function set(enabled) {
        self.enabled = enabled;
      }
    }); // See below for fix regarding invisible grey/dim combination on Windows

    builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey'; // `__proto__` is used because we must return a function, but there is
    // no way to create a function with a different prototype

    builder.__proto__ = proto; // eslint-disable-line no-proto

    return builder;
  }

  function applyStyle() {
    // Support varags, but simply cast to string in case there's only one arg
    var args = arguments;
    var argsLen = args.length;
    var str = String(arguments[0]);

    if (argsLen === 0) {
      return '';
    }

    if (argsLen > 1) {
      // Don't slice `arguments`, it prevents V8 optimizations
      for (var a = 1; a < argsLen; a++) {
        str += ' ' + args[a];
      }
    }

    if (!this.enabled || this.level <= 0 || !str) {
      return this._empty ? '' : str;
    } // Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
    // see https://github.com/chalk/chalk/issues/58
    // If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.


    var originalDim = ansiStyles.dim.open;

    if (isSimpleWindowsTerm && this.hasGrey) {
      ansiStyles.dim.open = '';
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._styles.slice().reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var code = _step.value;
        // Replace any instances already present with a re-opening code
        // otherwise only the part of the string until said closing code
        // will be colored, and the rest will simply be 'plain'.
        str = code.open + str.replace(code.closeRe, code.open) + code.close; // Close the styling before a linebreak and reopen
        // after next line to fix a bleed issue on macOS
        // https://github.com/chalk/chalk/pull/92

        str = str.replace(/\r?\n/g, "".concat(code.close, "$&").concat(code.open));
      } // Reset the original `dim` if we changed it to work around the Windows dimmed gray issue

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    ansiStyles.dim.open = originalDim;
    return str;
  }

  function chalkTag(chalk, strings) {
    if (!Array.isArray(strings)) {
      // If chalk() was called by itself or with a string,
      // return the string itself as a string.
      return [].slice.call(arguments, 1).join(' ');
    }

    var args = [].slice.call(arguments, 2);
    var parts = [strings.raw[0]];

    for (var i = 1; i < strings.length; i++) {
      parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
      parts.push(String(strings.raw[i]));
    }

    return templates$4(chalk, parts.join(''));
  }

  Object.defineProperties(Chalk.prototype, styles);
  module.exports = Chalk(); // eslint-disable-line new-cap

  module.exports.supportsColor = stdoutColor;
  module.exports.default = module.exports; // For TypeScript
});

var lib$3 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shouldHighlight = shouldHighlight;
  exports.getChalk = getChalk;
  exports.default = highlight;

  function _jsTokens() {
    var data = _interopRequireWildcard(jsTokens);

    _jsTokens = function _jsTokens() {
      return data;
    };

    return data;
  }

  function _esutils() {
    var data = _interopRequireDefault(utils$2);

    _esutils = function _esutils() {
      return data;
    };

    return data;
  }

  function _chalk() {
    var data = _interopRequireDefault(chalk$5);

    _chalk = function _chalk() {
      return data;
    };

    return data;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function getDefs(chalk) {
    return {
      keyword: chalk.cyan,
      capitalized: chalk.yellow,
      jsx_tag: chalk.yellow,
      punctuator: chalk.yellow,
      number: chalk.magenta,
      string: chalk.green,
      regex: chalk.magenta,
      comment: chalk.grey,
      invalid: chalk.white.bgRed.bold
    };
  }

  var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
  var JSX_TAG = /^[a-z][\w-]*$/i;
  var BRACKET = /^[()[\]{}]$/;

  function getTokenType(match) {
    var _match$slice = match.slice(-2),
        offset = _match$slice[0],
        text = _match$slice[1];

    var token = (0, _jsTokens().matchToToken)(match);

    if (token.type === "name") {
      if (_esutils().default.keyword.isReservedWordES6(token.value)) {
        return "keyword";
      }

      if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.substr(offset - 2, 2) == "</")) {
        return "jsx_tag";
      }

      if (token.value[0] !== token.value[0].toLowerCase()) {
        return "capitalized";
      }
    }

    if (token.type === "punctuator" && BRACKET.test(token.value)) {
      return "bracket";
    }

    if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
      return "punctuator";
    }

    return token.type;
  }

  function highlightTokens(defs, text) {
    return text.replace(_jsTokens().default, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var type = getTokenType(args);
      var colorize = defs[type];

      if (colorize) {
        return args[0].split(NEWLINE).map(function (str) {
          return colorize(str);
        }).join("\n");
      } else {
        return args[0];
      }
    });
  }

  function shouldHighlight(options) {
    return _chalk().default.supportsColor || options.forceColor;
  }

  function getChalk(options) {
    var chalk = _chalk().default;

    if (options.forceColor) {
      chalk = new (_chalk().default.constructor)({
        enabled: true,
        level: 1
      });
    }

    return chalk;
  }

  function highlight(code, options) {
    if (options === void 0) {
      options = {};
    }

    if (shouldHighlight(options)) {
      var chalk = getChalk(options);
      var defs = getDefs(chalk);
      return highlightTokens(defs, code);
    } else {
      return code;
    }
  }
});
unwrapExports(lib$3);

var lib$2 = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.codeFrameColumns = codeFrameColumns;
  exports.default = _default;

  function _highlight() {
    var data = _interopRequireWildcard(lib$3);

    _highlight = function _highlight() {
      return data;
    };

    return data;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var deprecationWarningShown = false;

  function getDefs(chalk) {
    return {
      gutter: chalk.grey,
      marker: chalk.red.bold,
      message: chalk.red.bold
    };
  }

  var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;

  function getMarkerLines(loc, source, opts) {
    var startLoc = Object.assign({}, {
      column: 0,
      line: -1
    }, loc.start);
    var endLoc = Object.assign({}, startLoc, loc.end);

    var _ref = opts || {},
        _ref$linesAbove = _ref.linesAbove,
        linesAbove = _ref$linesAbove === void 0 ? 2 : _ref$linesAbove,
        _ref$linesBelow = _ref.linesBelow,
        linesBelow = _ref$linesBelow === void 0 ? 3 : _ref$linesBelow;

    var startLine = startLoc.line;
    var startColumn = startLoc.column;
    var endLine = endLoc.line;
    var endColumn = endLoc.column;
    var start = Math.max(startLine - (linesAbove + 1), 0);
    var end = Math.min(source.length, endLine + linesBelow);

    if (startLine === -1) {
      start = 0;
    }

    if (endLine === -1) {
      end = source.length;
    }

    var lineDiff = endLine - startLine;
    var markerLines = {};

    if (lineDiff) {
      for (var i = 0; i <= lineDiff; i++) {
        var lineNumber = i + startLine;

        if (!startColumn) {
          markerLines[lineNumber] = true;
        } else if (i === 0) {
          var sourceLength = source[lineNumber - 1].length;
          markerLines[lineNumber] = [startColumn, sourceLength - startColumn];
        } else if (i === lineDiff) {
          markerLines[lineNumber] = [0, endColumn];
        } else {
          var _sourceLength = source[lineNumber - i].length;
          markerLines[lineNumber] = [0, _sourceLength];
        }
      }
    } else {
      if (startColumn === endColumn) {
        if (startColumn) {
          markerLines[startLine] = [startColumn, 0];
        } else {
          markerLines[startLine] = true;
        }
      } else {
        markerLines[startLine] = [startColumn, endColumn - startColumn];
      }
    }

    return {
      start: start,
      end: end,
      markerLines: markerLines
    };
  }

  function codeFrameColumns(rawLines, loc, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight().shouldHighlight)(opts);
    var chalk = (0, _highlight().getChalk)(opts);
    var defs = getDefs(chalk);

    var maybeHighlight = function maybeHighlight(chalkFn, string) {
      return highlighted ? chalkFn(string) : string;
    };

    if (highlighted) rawLines = (0, _highlight().default)(rawLines, opts);
    var lines = rawLines.split(NEWLINE);

    var _getMarkerLines = getMarkerLines(loc, lines, opts),
        start = _getMarkerLines.start,
        end = _getMarkerLines.end,
        markerLines = _getMarkerLines.markerLines;

    var hasColumns = loc.start && typeof loc.start.column === "number";
    var numberMaxWidth = String(end).length;
    var frame = lines.slice(start, end).map(function (line, index) {
      var number = start + 1 + index;
      var paddedNumber = (" " + number).slice(-numberMaxWidth);
      var gutter = " " + paddedNumber + " | ";
      var hasMarker = markerLines[number];
      var lastMarkerLine = !markerLines[number + 1];

      if (hasMarker) {
        var markerLine = "";

        if (Array.isArray(hasMarker)) {
          var markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
          var numberOfMarkers = hasMarker[1] || 1;
          markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");

          if (lastMarkerLine && opts.message) {
            markerLine += " " + maybeHighlight(defs.message, opts.message);
          }
        }

        return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line, markerLine].join("");
      } else {
        return " " + maybeHighlight(defs.gutter, gutter) + line;
      }
    }).join("\n");

    if (opts.message && !hasColumns) {
      frame = "" + " ".repeat(numberMaxWidth + 1) + opts.message + "\n" + frame;
    }

    if (highlighted) {
      return chalk.reset(frame);
    } else {
      return frame;
    }
  }

  function _default(rawLines, lineNumber, colNumber, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!deprecationWarningShown) {
      deprecationWarningShown = true;
      var message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";

      if (process.emitWarning) {
        process.emitWarning(message, "DeprecationWarning");
      } else {
        var deprecationError = new Error(message);
        deprecationError.name = "DeprecationWarning";
        console.warn(new Error(message));
      }
    }

    colNumber = Math.max(colNumber, 0);
    var location = {
      start: {
        column: colNumber,
        line: lineNumber
      }
    };
    return codeFrameColumns(rawLines, location, opts);
  }
});
unwrapExports(lib$2);

var path = ( _shim_path$1 && _shim_path ) || _shim_path$1;

var ConfigError$1 = errors.ConfigError;
var locStart = loc.locStart;
var locEnd = loc.locEnd; // Use defineProperties()/getOwnPropertyDescriptor() to prevent
// triggering the parsers getters.

var ownNames = Object.getOwnPropertyNames;
var ownDescriptor = Object.getOwnPropertyDescriptor;

function getParsers(options) {
  var parsers = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var plugin = _step.value;

      if (!plugin.parsers) {
        continue;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = ownNames(plugin.parsers)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var name = _step2.value;
          Object.defineProperty(parsers, name, ownDescriptor(plugin.parsers, name));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return parsers;
}

function resolveParser$1(opts, parsers) {
  parsers = parsers || getParsers(opts);

  if (typeof opts.parser === "function") {
    // Custom parser API always works with JavaScript.
    return {
      parse: opts.parser,
      astFormat: "estree",
      locStart: locStart,
      locEnd: locEnd
    };
  }

  if (typeof opts.parser === "string") {
    if (parsers.hasOwnProperty(opts.parser)) {
      return parsers[opts.parser];
    }

    try {
      return {
        parse: require(path.resolve(process.cwd(), opts.parser)),
        astFormat: "estree",
        locStart: locStart,
        locEnd: locEnd
      };
    } catch (err) {
      /* istanbul ignore next */
      throw new ConfigError$1("Couldn't resolve parser \"".concat(opts.parser, "\""));
    }
  }
}

function parse$2(text, opts) {
  var parsers = getParsers(opts); // Create a new object {parserName: parseFn}. Uses defineProperty() to only call
  // the parsers getters when actually calling the parser `parse` function.

  var parsersForCustomParserApi = Object.keys(parsers).reduce(function (object, parserName) {
    return Object.defineProperty(object, parserName, {
      enumerable: true,
      get: function get() {
        return parsers[parserName].parse;
      }
    });
  }, {});
  var parser = resolveParser$1(opts, parsers);

  try {
    if (parser.preprocess) {
      text = parser.preprocess(text, opts);
    }

    return {
      text: text,
      ast: parser.parse(text, parsersForCustomParserApi, opts)
    };
  } catch (error) {
    var loc$$1 = error.loc;

    if (loc$$1) {
      var codeFrame = lib$2;
      error.codeFrame = codeFrame.codeFrameColumns(text, loc$$1, {
        highlightCode: true
      });
      error.message += "\n" + error.codeFrame;
      throw error;
    }
    /* istanbul ignore next */


    throw error.stack;
  }
}

var parser = {
  parse: parse$2,
  resolveParser: resolveParser$1
};

var UndefinedParserError = errors.UndefinedParserError;
var getSupportInfo$1 = support.getSupportInfo;
var resolveParser = parser.resolveParser;
var hiddenDefaults = {
  astFormat: "estree",
  printer: {},
  originalText: undefined,
  locStart: null,
  locEnd: null
}; // Copy options and fill in default values.

function normalize(options, opts) {
  opts = opts || {};
  var rawOptions = Object.assign({}, options);
  var supportOptions = getSupportInfo$1(null, {
    plugins: options.plugins,
    showUnreleased: true,
    showDeprecated: true
  }).options;
  var defaults = supportOptions.reduce(function (reduced, optionInfo) {
    return optionInfo.default !== undefined ? Object.assign(reduced, _defineProperty({}, optionInfo.name, optionInfo.default)) : reduced;
  }, Object.assign({}, hiddenDefaults));

  if (!rawOptions.parser) {
    if (!rawOptions.filepath) {
      var logger = opts.logger || console;
      logger.warn("No parser and no filepath given, using 'babylon' the parser now " + "but this will throw an error in the future. " + "Please specify a parser or a filepath so one can be inferred.");
      rawOptions.parser = "babylon";
    } else {
      rawOptions.parser = inferParser(rawOptions.filepath, rawOptions.plugins);

      if (!rawOptions.parser) {
        throw new UndefinedParserError("No parser could be inferred for file: ".concat(rawOptions.filepath));
      }
    }
  }

  var parser$$1 = resolveParser(optionsNormalizer.normalizeApiOptions(rawOptions, [supportOptions.find(function (x) {
    return x.name === "parser";
  })], {
    passThrough: true,
    logger: false
  }));
  rawOptions.astFormat = parser$$1.astFormat;
  rawOptions.locEnd = parser$$1.locEnd;
  rawOptions.locStart = parser$$1.locStart;
  var plugin = getPlugin(rawOptions);
  rawOptions.printer = plugin.printers[rawOptions.astFormat];
  var pluginDefaults = supportOptions.filter(function (optionInfo) {
    return optionInfo.pluginDefaults && optionInfo.pluginDefaults[plugin.name];
  }).reduce(function (reduced, optionInfo) {
    return Object.assign(reduced, _defineProperty({}, optionInfo.name, optionInfo.pluginDefaults[plugin.name]));
  }, {});
  var mixedDefaults = Object.assign({}, defaults, pluginDefaults);
  Object.keys(mixedDefaults).forEach(function (k) {
    if (rawOptions[k] == null) {
      rawOptions[k] = mixedDefaults[k];
    }
  });

  if (rawOptions.parser === "json") {
    rawOptions.trailingComma = "none";
  }

  return optionsNormalizer.normalizeApiOptions(rawOptions, supportOptions, Object.assign({
    passThrough: Object.keys(hiddenDefaults)
  }, opts));
}

function getPlugin(options) {
  var astFormat = options.astFormat;

  if (!astFormat) {
    throw new Error("getPlugin() requires astFormat to be set");
  }

  var printerPlugin = options.plugins.find(function (plugin) {
    return plugin.printers && plugin.printers[astFormat];
  });

  if (!printerPlugin) {
    throw new Error("Couldn't find plugin for AST format \"".concat(astFormat, "\""));
  }

  return printerPlugin;
}

function getInterpreter(filepath) {
  if (typeof filepath !== "string") {
    return "";
  }

  var fd;

  try {
    fd = fs.openSync(filepath, "r");
  } catch (err) {
    return "";
  }

  try {
    var liner = new readlines(fd);
    var firstLine = liner.next().toString("utf8"); // #!/bin/env node, #!/usr/bin/env node

    var m1 = firstLine.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);

    if (m1) {
      return m1[1];
    } // #!/bin/node, #!/usr/bin/node, #!/usr/local/bin/node


    var m2 = firstLine.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);

    if (m2) {
      return m2[1];
    }

    return "";
  } catch (err) {
    // There are some weird cases where paths are missing, causing Jest
    // failures. It's unclear what these correspond to in the real world.
    return "";
  } finally {
    try {
      // There are some weird cases where paths are missing, causing Jest
      // failures. It's unclear what these correspond to in the real world.
      fs.closeSync(fd);
    } catch (err) {// nop
    }
  }
}

function inferParser(filepath, plugins) {
  var filepathParts = normalizePath(filepath).split("/");
  var filename = filepathParts[filepathParts.length - 1].toLowerCase(); // If the file has no extension, we can try to infer the language from the
  // interpreter in the shebang line, if any; but since this requires FS access,
  // do it last.

  var language = getSupportInfo$1(null, {
    plugins: plugins
  }).languages.find(function (language) {
    return language.since !== null && (language.extensions && language.extensions.some(function (extension) {
      return filename.endsWith(extension);
    }) || language.filenames && language.filenames.find(function (name) {
      return name.toLowerCase() === filename;
    }) || filename.indexOf(".") === -1 && language.interpreters && language.interpreters.indexOf(getInterpreter(filepath)) !== -1);
  });
  return language && language.parsers[0];
}

var options = {
  normalize: normalize,
  hiddenDefaults: hiddenDefaults,
  inferParser: inferParser
};

function massageAST(ast, options, parent) {
  if (Array.isArray(ast)) {
    return ast.map(function (e) {
      return massageAST(e, options, parent);
    }).filter(function (e) {
      return e;
    });
  }

  if (!ast || _typeof(ast) !== "object") {
    return ast;
  }

  var newObj = {};

  var _arr = Object.keys(ast);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];

    if (typeof ast[key] !== "function") {
      newObj[key] = massageAST(ast[key], options, ast);
    }
  }

  if (options.printer.massageAstNode) {
    var result = options.printer.massageAstNode(ast, newObj, parent);

    if (result === null) {
      return undefined;
    }

    if (result) {
      return result;
    }
  }

  return newObj;
}

var massageAst = massageAST;

function assert() {}

assert.ok = function () {};

assert.strictEqual = function () {};



var assert$2 = Object.freeze({
	default: assert
});

function concat$1(parts) {
  return {
    type: "concat",
    parts: parts
  };
}

function indent$1(contents) {
  return {
    type: "indent",
    contents: contents
  };
}

function align(n, contents) {
  return {
    type: "align",
    contents: contents,
    n: n
  };
}

function group(contents, opts) {
  opts = opts || {};

  return {
    type: "group",
    id: opts.id,
    contents: contents,
    break: !!opts.shouldBreak,
    expandedStates: opts.expandedStates
  };
}

function dedentToRoot(contents) {
  return align(-Infinity, contents);
}

function markAsRoot(contents) {
  return align({
    type: "root"
  }, contents);
}

function dedent$1(contents) {
  return align(-1, contents);
}

function conditionalGroup(states, opts) {
  return group(states[0], Object.assign(opts || {}, {
    expandedStates: states
  }));
}

function fill(parts) {
  return {
    type: "fill",
    parts: parts
  };
}

function ifBreak(breakContents, flatContents, opts) {
  opts = opts || {};

  return {
    type: "if-break",
    breakContents: breakContents,
    flatContents: flatContents,
    groupId: opts.groupId
  };
}

function lineSuffix$1(contents) {
  return {
    type: "line-suffix",
    contents: contents
  };
}

var lineSuffixBoundary = {
  type: "line-suffix-boundary"
};
var breakParent$1 = {
  type: "break-parent"
};
var trim = {
  type: "trim"
};
var line$2 = {
  type: "line"
};
var softline = {
  type: "line",
  soft: true
};
var hardline$1 = concat$1([{
  type: "line",
  hard: true
}, breakParent$1]);
var literalline = concat$1([{
  type: "line",
  hard: true,
  literal: true
}, breakParent$1]);
var cursor$1 = {
  type: "cursor",
  placeholder: Symbol("cursor")
};

function join$1(sep, arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (i !== 0) {
      res.push(sep);
    }

    res.push(arr[i]);
  }

  return concat$1(res);
}

function addAlignmentToDoc(doc, size, tabWidth) {
  var aligned = doc;

  if (size > 0) {
    // Use indent to add tabs for all the levels of tabs we need
    for (var i = 0; i < Math.floor(size / tabWidth); ++i) {
      aligned = indent$1(aligned);
    } // Use align for all the spaces that are needed


    aligned = align(size % tabWidth, aligned); // size is absolute from 0 and not relative to the current
    // indentation, so we use -Infinity to reset the indentation to 0

    aligned = align(-Infinity, aligned);
  }

  return aligned;
}

var docBuilders = {
  concat: concat$1,
  join: join$1,
  line: line$2,
  softline: softline,
  hardline: hardline$1,
  literalline: literalline,
  group: group,
  conditionalGroup: conditionalGroup,
  fill: fill,
  lineSuffix: lineSuffix$1,
  lineSuffixBoundary: lineSuffixBoundary,
  cursor: cursor$1,
  breakParent: breakParent$1,
  ifBreak: ifBreak,
  trim: trim,
  indent: indent$1,
  align: align,
  addAlignmentToDoc: addAlignmentToDoc,
  markAsRoot: markAsRoot,
  dedentToRoot: dedentToRoot,
  dedent: dedent$1
};

var ansiRegex = createCommonjsModule(function (module) {
  'use strict';

  module.exports = function () {
    var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'].join('|');
    return new RegExp(pattern, 'g');
  };
});

var stripAnsi = function stripAnsi(input) {
  return typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
};

var isFullwidthCodePoint = createCommonjsModule(function (module) {
  'use strict';
  /* eslint-disable yoda */

  module.exports = function (x) {
    if (Number.isNaN(x)) {
      return false;
    } // code points are derived from:
    // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt


    if (x >= 0x1100 && (x <= 0x115f || // Hangul Jamo
    x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
    x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
    // CJK Radicals Supplement .. Enclosed CJK Letters and Months
    0x2e80 <= x && x <= 0x3247 && x !== 0x303f || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
    0x3250 <= x && x <= 0x4dbf || // CJK Unified Ideographs .. Yi Radicals
    0x4e00 <= x && x <= 0xa4c6 || // Hangul Jamo Extended-A
    0xa960 <= x && x <= 0xa97c || // Hangul Syllables
    0xac00 <= x && x <= 0xd7a3 || // CJK Compatibility Ideographs
    0xf900 <= x && x <= 0xfaff || // Vertical Forms
    0xfe10 <= x && x <= 0xfe19 || // CJK Compatibility Forms .. Small Form Variants
    0xfe30 <= x && x <= 0xfe6b || // Halfwidth and Fullwidth Forms
    0xff01 <= x && x <= 0xff60 || 0xffe0 <= x && x <= 0xffe6 || // Kana Supplement
    0x1b000 <= x && x <= 0x1b001 || // Enclosed Ideographic Supplement
    0x1f200 <= x && x <= 0x1f251 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
    0x20000 <= x && x <= 0x3fffd)) {
      return true;
    }

    return false;
  };
});

var stringWidth = createCommonjsModule(function (module) {
  'use strict';

  module.exports = function (str) {
    if (typeof str !== 'string' || str.length === 0) {
      return 0;
    }

    str = stripAnsi(str);
    var width = 0;

    for (var i = 0; i < str.length; i++) {
      var code = str.codePointAt(i); // Ignore control characters

      if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
        continue;
      } // Ignore combining characters


      if (code >= 0x300 && code <= 0x36F) {
        continue;
      } // Surrogates


      if (code > 0xFFFF) {
        i++;
      }

      width += isFullwidthCodePoint(code) ? 2 : 1;
    }

    return width;
  };
});

var emojiRegex$1 = function emojiRegex() {
  // https://mathiasbynens.be/notes/es-unicode-property-escapes#emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]\uFE0F|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F/g;
};

var emojiRegex = emojiRegex$1(); // eslint-disable-next-line no-control-regex

var notAsciiRegex = /[^\x20-\x7F]/;

function isExportDeclaration(node) {
  if (node) {
    switch (node.type) {
      case "ExportDefaultDeclaration":
      case "ExportDefaultSpecifier":
      case "DeclareExportDeclaration":
      case "ExportNamedDeclaration":
      case "ExportAllDeclaration":
        return true;
    }
  }

  return false;
}

function getParentExportDeclaration(path) {
  var parentNode = path.getParentNode();

  if (path.getName() === "declaration" && isExportDeclaration(parentNode)) {
    return parentNode;
  }

  return null;
}

function getPenultimate(arr) {
  if (arr.length > 1) {
    return arr[arr.length - 2];
  }

  return null;
}

function getLast$3(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  }

  return null;
}

function skip(chars) {
  return function (text, index, opts) {
    var backwards = opts && opts.backwards; // Allow `skip` functions to be threaded together without having
    // to check for failures (did someone say monads?).

    if (index === false) {
      return false;
    }

    var length = text.length;
    var cursor = index;

    while (cursor >= 0 && cursor < length) {
      var c = text.charAt(cursor);

      if (chars instanceof RegExp) {
        if (!chars.test(c)) {
          return cursor;
        }
      } else if (chars.indexOf(c) === -1) {
        return cursor;
      }

      backwards ? cursor-- : cursor++;
    }

    if (cursor === -1 || cursor === length) {
      // If we reached the beginning or end of the file, return the
      // out-of-bounds cursor. It's up to the caller to handle this
      // correctly. We don't want to indicate `false` though if it
      // actually skipped valid characters.
      return cursor;
    }

    return false;
  };
}

var skipWhitespace = skip(/\s/);
var skipSpaces = skip(" \t");
var skipToLineEnd = skip(",; \t");
var skipEverythingButNewLine = skip(/[^\r\n]/);

function skipInlineComment(text, index) {
  if (index === false) {
    return false;
  }

  if (text.charAt(index) === "/" && text.charAt(index + 1) === "*") {
    for (var i = index + 2; i < text.length; ++i) {
      if (text.charAt(i) === "*" && text.charAt(i + 1) === "/") {
        return i + 2;
      }
    }
  }

  return index;
}

function skipTrailingComment(text, index) {
  if (index === false) {
    return false;
  }

  if (text.charAt(index) === "/" && text.charAt(index + 1) === "/") {
    return skipEverythingButNewLine(text, index);
  }

  return index;
} // This one doesn't use the above helper function because it wants to
// test \r\n in order and `skip` doesn't support ordering and we only
// want to skip one newline. It's simple to implement.


function skipNewline$1(text, index, opts) {
  var backwards = opts && opts.backwards;

  if (index === false) {
    return false;
  }

  var atIndex = text.charAt(index);

  if (backwards) {
    if (text.charAt(index - 1) === "\r" && atIndex === "\n") {
      return index - 2;
    }

    if (atIndex === "\n" || atIndex === "\r" || atIndex === "\u2028" || atIndex === "\u2029") {
      return index - 1;
    }
  } else {
    if (atIndex === "\r" && text.charAt(index + 1) === "\n") {
      return index + 2;
    }

    if (atIndex === "\n" || atIndex === "\r" || atIndex === "\u2028" || atIndex === "\u2029") {
      return index + 1;
    }
  }

  return index;
}

function hasNewline$1(text, index, opts) {
  opts = opts || {};
  var idx = skipSpaces(text, opts.backwards ? index - 1 : index, opts);
  var idx2 = skipNewline$1(text, idx, opts);
  return idx !== idx2;
}

function hasNewlineInRange(text, start, end) {
  for (var i = start; i < end; ++i) {
    if (text.charAt(i) === "\n") {
      return true;
    }
  }

  return false;
} // Note: this function doesn't ignore leading comments unlike isNextLineEmpty


function isPreviousLineEmpty$1(text, node, locStart) {
  var idx = locStart(node) - 1;
  idx = skipSpaces(text, idx, {
    backwards: true
  });
  idx = skipNewline$1(text, idx, {
    backwards: true
  });
  idx = skipSpaces(text, idx, {
    backwards: true
  });
  var idx2 = skipNewline$1(text, idx, {
    backwards: true
  });
  return idx !== idx2;
}

function isNextLineEmptyAfterIndex(text, index) {
  var oldIdx = null;
  var idx = index;

  while (idx !== oldIdx) {
    // We need to skip all the potential trailing inline comments
    oldIdx = idx;
    idx = skipToLineEnd(text, idx);
    idx = skipInlineComment(text, idx);
    idx = skipSpaces(text, idx);
  }

  idx = skipTrailingComment(text, idx);
  idx = skipNewline$1(text, idx);
  return hasNewline$1(text, idx);
}

function isNextLineEmpty(text, node, locEnd) {
  return isNextLineEmptyAfterIndex(text, locEnd(node));
}

function getNextNonSpaceNonCommentCharacterIndex(text, node, locEnd) {
  var oldIdx = null;
  var idx = locEnd(node);

  while (idx !== oldIdx) {
    oldIdx = idx;
    idx = skipSpaces(text, idx);
    idx = skipInlineComment(text, idx);
    idx = skipTrailingComment(text, idx);
    idx = skipNewline$1(text, idx);
  }

  return idx;
}

function getNextNonSpaceNonCommentCharacter(text, node, locEnd) {
  return text.charAt(getNextNonSpaceNonCommentCharacterIndex(text, node, locEnd));
}

function hasSpaces(text, index, opts) {
  opts = opts || {};
  var idx = skipSpaces(text, opts.backwards ? index - 1 : index, opts);
  return idx !== index;
}

function setLocStart(node, index) {
  if (node.range) {
    node.range[0] = index;
  } else {
    node.start = index;
  }
}

function setLocEnd(node, index) {
  if (node.range) {
    node.range[1] = index;
  } else {
    node.end = index;
  }
}

var PRECEDENCE = {};
[["|>"], ["||", "??"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach(function (tier, i) {
  tier.forEach(function (op) {
    PRECEDENCE[op] = i;
  });
});

function getPrecedence(op) {
  return PRECEDENCE[op];
}

var equalityOperators = {
  "==": true,
  "!=": true,
  "===": true,
  "!==": true
};
var multiplicativeOperators = {
  "*": true,
  "/": true,
  "%": true
};
var bitshiftOperators = {
  ">>": true,
  ">>>": true,
  "<<": true
};

function shouldFlatten(parentOp, nodeOp) {
  if (getPrecedence(nodeOp) !== getPrecedence(parentOp)) {
    return false;
  } // ** is right-associative
  // x ** y ** z --> x ** (y ** z)


  if (parentOp === "**") {
    return false;
  } // x == y == z --> (x == y) == z


  if (equalityOperators[parentOp] && equalityOperators[nodeOp]) {
    return false;
  } // x * y % z --> (x * y) % z


  if (nodeOp === "%" && multiplicativeOperators[parentOp] || parentOp === "%" && multiplicativeOperators[nodeOp]) {
    return false;
  } // x * y / z --> (x * y) / z
  // x / y * z --> (x / y) * z


  if (nodeOp !== parentOp && multiplicativeOperators[nodeOp] && multiplicativeOperators[parentOp]) {
    return false;
  } // x << y << z --> (x << y) << z


  if (bitshiftOperators[parentOp] && bitshiftOperators[nodeOp]) {
    return false;
  }

  return true;
}

function isBitwiseOperator(operator) {
  return !!bitshiftOperators[operator] || operator === "|" || operator === "^" || operator === "&";
} // Tests if an expression starts with `{`, or (if forbidFunctionClassAndDoExpr
// holds) `function`, `class`, or `do {}`. Will be overzealous if there's
// already necessary grouping parentheses.


function startsWithNoLookaheadToken(node, forbidFunctionClassAndDoExpr) {
  node = getLeftMost(node);

  switch (node.type) {
    case "FunctionExpression":
    case "ClassExpression":
    case "DoExpression":
      return forbidFunctionClassAndDoExpr;

    case "ObjectExpression":
      return true;

    case "MemberExpression":
      return startsWithNoLookaheadToken(node.object, forbidFunctionClassAndDoExpr);

    case "TaggedTemplateExpression":
      if (node.tag.type === "FunctionExpression") {
        // IIFEs are always already parenthesized
        return false;
      }

      return startsWithNoLookaheadToken(node.tag, forbidFunctionClassAndDoExpr);

    case "CallExpression":
      if (node.callee.type === "FunctionExpression") {
        // IIFEs are always already parenthesized
        return false;
      }

      return startsWithNoLookaheadToken(node.callee, forbidFunctionClassAndDoExpr);

    case "ConditionalExpression":
      return startsWithNoLookaheadToken(node.test, forbidFunctionClassAndDoExpr);

    case "UpdateExpression":
      return !node.prefix && startsWithNoLookaheadToken(node.argument, forbidFunctionClassAndDoExpr);

    case "BindExpression":
      return node.object && startsWithNoLookaheadToken(node.object, forbidFunctionClassAndDoExpr);

    case "SequenceExpression":
      return startsWithNoLookaheadToken(node.expressions[0], forbidFunctionClassAndDoExpr);

    case "TSAsExpression":
      return startsWithNoLookaheadToken(node.expression, forbidFunctionClassAndDoExpr);

    default:
      return false;
  }
}

function getLeftMost(node) {
  if (node.left) {
    return getLeftMost(node.left);
  }

  return node;
}

function getAlignmentSize(value, tabWidth, startIndex) {
  startIndex = startIndex || 0;
  var size = 0;

  for (var i = startIndex; i < value.length; ++i) {
    if (value[i] === "\t") {
      // Tabs behave in a way that they are aligned to the nearest
      // multiple of tabWidth:
      // 0 -> 4, 1 -> 4, 2 -> 4, 3 -> 4
      // 4 -> 8, 5 -> 8, 6 -> 8, 7 -> 8 ...
      size = size + tabWidth - size % tabWidth;
    } else {
      size++;
    }
  }

  return size;
}

function getIndentSize(value, tabWidth) {
  var lastNewlineIndex = value.lastIndexOf("\n");

  if (lastNewlineIndex === -1) {
    return 0;
  }

  return getAlignmentSize( // All the leading whitespaces
  value.slice(lastNewlineIndex + 1).match(/^[ \t]*/)[0], tabWidth);
}

function getPreferredQuote(raw, preferredQuote) {
  // `rawContent` is the string exactly like it appeared in the input source
  // code, without its enclosing quotes.
  var rawContent = raw.slice(1, -1);
  var double = {
    quote: '"',
    regex: /"/g
  };
  var single = {
    quote: "'",
    regex: /'/g
  };
  var preferred = preferredQuote === "'" ? single : double;
  var alternate = preferred === single ? double : single;
  var result = preferred.quote; // If `rawContent` contains at least one of the quote preferred for enclosing
  // the string, we might want to enclose with the alternate quote instead, to
  // minimize the number of escaped quotes.

  if (rawContent.includes(preferred.quote) || rawContent.includes(alternate.quote)) {
    var numPreferredQuotes = (rawContent.match(preferred.regex) || []).length;
    var numAlternateQuotes = (rawContent.match(alternate.regex) || []).length;
    result = numPreferredQuotes > numAlternateQuotes ? alternate.quote : preferred.quote;
  }

  return result;
}

function printString(raw, options, isDirectiveLiteral) {
  // `rawContent` is the string exactly like it appeared in the input source
  // code, without its enclosing quotes.
  var rawContent = raw.slice(1, -1); // Check for the alternate quote, to determine if we're allowed to swap
  // the quotes on a DirectiveLiteral.

  var canChangeDirectiveQuotes = !rawContent.includes('"') && !rawContent.includes("'");
  var enclosingQuote = options.parser === "json" ? '"' : options.__isInHtmlAttribute ? "'" : getPreferredQuote(raw, options.singleQuote ? "'" : '"'); // Directives are exact code unit sequences, which means that you can't
  // change the escape sequences they use.
  // See https://github.com/prettier/prettier/issues/1555
  // and https://tc39.github.io/ecma262/#directive-prologue

  if (isDirectiveLiteral) {
    if (canChangeDirectiveQuotes) {
      return enclosingQuote + rawContent + enclosingQuote;
    }

    return raw;
  } // It might sound unnecessary to use `makeString` even if the string already
  // is enclosed with `enclosingQuote`, but it isn't. The string could contain
  // unnecessary escapes (such as in `"\'"`). Always using `makeString` makes
  // sure that we consistently output the minimum amount of escaped quotes.


  return makeString(rawContent, enclosingQuote, !(options.parser === "css" || options.parser === "less" || options.parser === "scss" || options.parentParser === "html" || options.parentParser === "vue" || options.parentParser === "angular"));
}

function makeString(rawContent, enclosingQuote, unescapeUnnecessaryEscapes) {
  var otherQuote = enclosingQuote === '"' ? "'" : '"'; // Matches _any_ escape and unescaped quotes (both single and double).

  var regex = /\\([\s\S])|(['"])/g; // Escape and unescape single and double quotes as needed to be able to
  // enclose `rawContent` with `enclosingQuote`.

  var newContent = rawContent.replace(regex, function (match, escaped, quote) {
    // If we matched an escape, and the escaped character is a quote of the
    // other type than we intend to enclose the string with, there's no need for
    // it to be escaped, so return it _without_ the backslash.
    if (escaped === otherQuote) {
      return escaped;
    } // If we matched an unescaped quote and it is of the _same_ type as we
    // intend to enclose the string with, it must be escaped, so return it with
    // a backslash.


    if (quote === enclosingQuote) {
      return "\\" + quote;
    }

    if (quote) {
      return quote;
    } // Unescape any unnecessarily escaped character.
    // Adapted from https://github.com/eslint/eslint/blob/de0b4ad7bd820ade41b1f606008bea68683dc11a/lib/rules/no-useless-escape.js#L27


    return unescapeUnnecessaryEscapes && /^[^\\nrvtbfux\r\n\u2028\u2029"'0-7]$/.test(escaped) ? escaped : "\\" + escaped;
  });
  return enclosingQuote + newContent + enclosingQuote;
}

function printNumber(rawNumber) {
  return rawNumber.toLowerCase() // Remove unnecessary plus and zeroes from scientific notation.
  .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3") // Remove unnecessary scientific notation (1e0).
  .replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1") // Make sure numbers always start with a digit.
  .replace(/^([+-])?\./, "$10.") // Remove extraneous trailing decimal zeroes.
  .replace(/(\.\d+?)0+(?=e|$)/, "$1") // Remove trailing dot.
  .replace(/\.(?=e|$)/, "");
}

function getMaxContinuousCount(str, target) {
  var results = str.match(new RegExp("(".concat(escapeStringRegexp(target), ")+"), "g"));

  if (results === null) {
    return 0;
  }

  return results.reduce(function (maxCount, result) {
    return Math.max(maxCount, result.length / target.length);
  }, 0);
}

function getStringWidth$1(text) {
  if (!text) {
    return 0;
  } // shortcut to avoid needless string `RegExp`s, replacements, and allocations within `string-width`


  if (!notAsciiRegex.test(text)) {
    return text.length;
  } // emojis are considered 2-char width for consistency
  // see https://github.com/sindresorhus/string-width/issues/11
  // for the reason why not implemented in `string-width`


  return stringWidth(text.replace(emojiRegex, "  "));
}

function hasIgnoreComment(path) {
  var node = path.getValue();
  return hasNodeIgnoreComment(node);
}

function hasNodeIgnoreComment(node) {
  return node && node.comments && node.comments.length > 0 && node.comments.some(function (comment) {
    return comment.value.trim() === "prettier-ignore";
  });
}

function matchAncestorTypes(path, types, index) {
  index = index || 0;
  types = types.slice();

  while (types.length) {
    var parent = path.getParentNode(index);
    var type = types.shift();

    if (!parent || parent.type !== type) {
      return false;
    }

    index++;
  }

  return true;
}

function addCommentHelper(node, comment) {
  var comments = node.comments || (node.comments = []);
  comments.push(comment);
  comment.printed = false; // For some reason, TypeScript parses `// x` inside of JSXText as a comment
  // We already "print" it via the raw text, we don't need to re-print it as a
  // comment

  if (node.type === "JSXText") {
    comment.printed = true;
  }
}

function addLeadingComment$1(node, comment) {
  comment.leading = true;
  comment.trailing = false;
  addCommentHelper(node, comment);
}

function addDanglingComment$1(node, comment) {
  comment.leading = false;
  comment.trailing = false;
  addCommentHelper(node, comment);
}

function addTrailingComment$1(node, comment) {
  comment.leading = false;
  comment.trailing = true;
  addCommentHelper(node, comment);
}

function isWithinParentArrayProperty(path, propertyName) {
  var node = path.getValue();
  var parent = path.getParentNode();

  if (parent == null) {
    return false;
  }

  if (!Array.isArray(parent[propertyName])) {
    return false;
  }

  var key = path.getName();
  return parent[propertyName][key] === node;
}

var util = {
  getStringWidth: getStringWidth$1,
  getMaxContinuousCount: getMaxContinuousCount,
  getPrecedence: getPrecedence,
  shouldFlatten: shouldFlatten,
  isBitwiseOperator: isBitwiseOperator,
  isExportDeclaration: isExportDeclaration,
  getParentExportDeclaration: getParentExportDeclaration,
  getPenultimate: getPenultimate,
  getLast: getLast$3,
  getNextNonSpaceNonCommentCharacterIndex: getNextNonSpaceNonCommentCharacterIndex,
  getNextNonSpaceNonCommentCharacter: getNextNonSpaceNonCommentCharacter,
  skip: skip,
  skipWhitespace: skipWhitespace,
  skipSpaces: skipSpaces,
  skipToLineEnd: skipToLineEnd,
  skipEverythingButNewLine: skipEverythingButNewLine,
  skipInlineComment: skipInlineComment,
  skipTrailingComment: skipTrailingComment,
  skipNewline: skipNewline$1,
  isNextLineEmptyAfterIndex: isNextLineEmptyAfterIndex,
  isNextLineEmpty: isNextLineEmpty,
  isPreviousLineEmpty: isPreviousLineEmpty$1,
  hasNewline: hasNewline$1,
  hasNewlineInRange: hasNewlineInRange,
  hasSpaces: hasSpaces,
  setLocStart: setLocStart,
  setLocEnd: setLocEnd,
  startsWithNoLookaheadToken: startsWithNoLookaheadToken,
  getAlignmentSize: getAlignmentSize,
  getIndentSize: getIndentSize,
  getPreferredQuote: getPreferredQuote,
  printString: printString,
  printNumber: printNumber,
  hasIgnoreComment: hasIgnoreComment,
  hasNodeIgnoreComment: hasNodeIgnoreComment,
  makeString: makeString,
  matchAncestorTypes: matchAncestorTypes,
  addLeadingComment: addLeadingComment$1,
  addDanglingComment: addDanglingComment$1,
  addTrailingComment: addTrailingComment$1,
  isWithinParentArrayProperty: isWithinParentArrayProperty
};

function guessEndOfLine$1(text) {
  var index = text.indexOf("\r");

  if (index >= 0) {
    return text.charAt(index + 1) === "\n" ? "crlf" : "cr";
  }

  return "lf";
}

function convertEndOfLineToChars$2(value) {
  switch (value) {
    case "cr":
      return "\r";

    case "crlf":
      return "\r\n";

    default:
      return "\n";
  }
}

var endOfLine = {
  guessEndOfLine: guessEndOfLine$1,
  convertEndOfLineToChars: convertEndOfLineToChars$2
};

var getStringWidth = util.getStringWidth;
var convertEndOfLineToChars$1 = endOfLine.convertEndOfLineToChars;
var concat$2 = docBuilders.concat;
var fill$1 = docBuilders.fill;
var cursor$2 = docBuilders.cursor;
/** @type {{[groupId: PropertyKey]: MODE}} */

var groupModeMap;
var MODE_BREAK = 1;
var MODE_FLAT = 2;

function rootIndent() {
  return {
    value: "",
    length: 0,
    queue: []
  };
}

function makeIndent(ind, options) {
  return generateInd(ind, {
    type: "indent"
  }, options);
}

function makeAlign(ind, n, options) {
  return n === -Infinity ? ind.root || rootIndent() : n < 0 ? generateInd(ind, {
    type: "dedent"
  }, options) : !n ? ind : n.type === "root" ? Object.assign({}, ind, {
    root: ind
  }) : typeof n === "string" ? generateInd(ind, {
    type: "stringAlign",
    n: n
  }, options) : generateInd(ind, {
    type: "numberAlign",
    n: n
  }, options);
}

function generateInd(ind, newPart, options) {
  var queue = newPart.type === "dedent" ? ind.queue.slice(0, -1) : ind.queue.concat(newPart);
  var value = "";
  var length = 0;
  var lastTabs = 0;
  var lastSpaces = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part = _step.value;

      switch (part.type) {
        case "indent":
          flush();

          if (options.useTabs) {
            addTabs(1);
          } else {
            addSpaces(options.tabWidth);
          }

          break;

        case "stringAlign":
          flush();
          value += part.n;
          length += part.n.length;
          break;

        case "numberAlign":
          lastTabs += 1;
          lastSpaces += part.n;
          break;

        /* istanbul ignore next */

        default:
          throw new Error("Unexpected type '".concat(part.type, "'"));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  flushSpaces();
  return Object.assign({}, ind, {
    value: value,
    length: length,
    queue: queue
  });

  function addTabs(count) {
    value += "\t".repeat(count);
    length += options.tabWidth * count;
  }

  function addSpaces(count) {
    value += " ".repeat(count);
    length += count;
  }

  function flush() {
    if (options.useTabs) {
      flushTabs();
    } else {
      flushSpaces();
    }
  }

  function flushTabs() {
    if (lastTabs > 0) {
      addTabs(lastTabs);
    }

    resetLast();
  }

  function flushSpaces() {
    if (lastSpaces > 0) {
      addSpaces(lastSpaces);
    }

    resetLast();
  }

  function resetLast() {
    lastTabs = 0;
    lastSpaces = 0;
  }
}

function trim$1(out) {
  if (out.length === 0) {
    return 0;
  }

  var trimCount = 0; // Trim whitespace at the end of line

  while (out.length > 0 && typeof out[out.length - 1] === "string" && out[out.length - 1].match(/^[ \t]*$/)) {
    trimCount += out.pop().length;
  }

  if (out.length && typeof out[out.length - 1] === "string") {
    var trimmed = out[out.length - 1].replace(/[ \t]*$/, "");
    trimCount += out[out.length - 1].length - trimmed.length;
    out[out.length - 1] = trimmed;
  }

  return trimCount;
}

function fits(next, restCommands, width, options, mustBeFlat) {
  var restIdx = restCommands.length;
  var cmds = [next]; // `out` is only used for width counting because `trim` requires to look
  // backwards for space characters.

  var out = [];

  while (width >= 0) {
    if (cmds.length === 0) {
      if (restIdx === 0) {
        return true;
      }

      cmds.push(restCommands[restIdx - 1]);
      restIdx--;
      continue;
    }

    var x = cmds.pop();
    var ind = x[0];
    var mode = x[1];
    var doc = x[2];

    if (typeof doc === "string") {
      out.push(doc);
      width -= getStringWidth(doc);
    } else {
      switch (doc.type) {
        case "concat":
          for (var i = doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, doc.parts[i]]);
          }

          break;

        case "indent":
          cmds.push([makeIndent(ind, options), mode, doc.contents]);
          break;

        case "align":
          cmds.push([makeAlign(ind, doc.n, options), mode, doc.contents]);
          break;

        case "trim":
          width += trim$1(out);
          break;

        case "group":
          if (mustBeFlat && doc.break) {
            return false;
          }

          cmds.push([ind, doc.break ? MODE_BREAK : mode, doc.contents]);

          if (doc.id) {
            groupModeMap[doc.id] = cmds[cmds.length - 1][1];
          }

          break;

        case "fill":
          for (var _i = doc.parts.length - 1; _i >= 0; _i--) {
            cmds.push([ind, mode, doc.parts[_i]]);
          }

          break;

        case "if-break":
          {
            var groupMode = doc.groupId ? groupModeMap[doc.groupId] : mode;

            if (groupMode === MODE_BREAK) {
              if (doc.breakContents) {
                cmds.push([ind, mode, doc.breakContents]);
              }
            }

            if (groupMode === MODE_FLAT) {
              if (doc.flatContents) {
                cmds.push([ind, mode, doc.flatContents]);
              }
            }

            break;
          }

        case "line":
          switch (mode) {
            // fallthrough
            case MODE_FLAT:
              if (!doc.hard) {
                if (!doc.soft) {
                  out.push(" ");
                  width -= 1;
                }

                break;
              }

              return true;

            case MODE_BREAK:
              return true;
          }

          break;
      }
    }
  }

  return false;
}

function printDocToString(doc, options) {
  groupModeMap = {};
  var width = options.printWidth;
  var newLine = convertEndOfLineToChars$1(options.endOfLine);
  var pos = 0; // cmds is basically a stack. We've turned a recursive call into a
  // while loop which is much faster. The while loop below adds new
  // cmds to the array instead of recursively calling `print`.

  var cmds = [[rootIndent(), MODE_BREAK, doc]];
  var out = [];
  var shouldRemeasure = false;
  var lineSuffix = [];

  while (cmds.length !== 0) {
    var x = cmds.pop();
    var ind = x[0];
    var mode = x[1];
    var _doc = x[2];

    if (typeof _doc === "string") {
      out.push(_doc);
      pos += getStringWidth(_doc);
    } else {
      switch (_doc.type) {
        case "cursor":
          out.push(cursor$2.placeholder);
          break;

        case "concat":
          for (var i = _doc.parts.length - 1; i >= 0; i--) {
            cmds.push([ind, mode, _doc.parts[i]]);
          }

          break;

        case "indent":
          cmds.push([makeIndent(ind, options), mode, _doc.contents]);
          break;

        case "align":
          cmds.push([makeAlign(ind, _doc.n, options), mode, _doc.contents]);
          break;

        case "trim":
          pos -= trim$1(out);
          break;

        case "group":
          switch (mode) {
            case MODE_FLAT:
              if (!shouldRemeasure) {
                cmds.push([ind, _doc.break ? MODE_BREAK : MODE_FLAT, _doc.contents]);
                break;
              }

            // fallthrough

            case MODE_BREAK:
              {
                shouldRemeasure = false;
                var next = [ind, MODE_FLAT, _doc.contents];
                var rem = width - pos;

                if (!_doc.break && fits(next, cmds, rem, options)) {
                  cmds.push(next);
                } else {
                  // Expanded states are a rare case where a document
                  // can manually provide multiple representations of
                  // itself. It provides an array of documents
                  // going from the least expanded (most flattened)
                  // representation first to the most expanded. If a
                  // group has these, we need to manually go through
                  // these states and find the first one that fits.
                  if (_doc.expandedStates) {
                    var mostExpanded = _doc.expandedStates[_doc.expandedStates.length - 1];

                    if (_doc.break) {
                      cmds.push([ind, MODE_BREAK, mostExpanded]);
                      break;
                    } else {
                      for (var _i2 = 1; _i2 < _doc.expandedStates.length + 1; _i2++) {
                        if (_i2 >= _doc.expandedStates.length) {
                          cmds.push([ind, MODE_BREAK, mostExpanded]);
                          break;
                        } else {
                          var state = _doc.expandedStates[_i2];
                          var cmd = [ind, MODE_FLAT, state];

                          if (fits(cmd, cmds, rem, options)) {
                            cmds.push(cmd);
                            break;
                          }
                        }
                      }
                    }
                  } else {
                    cmds.push([ind, MODE_BREAK, _doc.contents]);
                  }
                }

                break;
              }
          }

          if (_doc.id) {
            groupModeMap[_doc.id] = cmds[cmds.length - 1][1];
          }

          break;
        // Fills each line with as much code as possible before moving to a new
        // line with the same indentation.
        //
        // Expects doc.parts to be an array of alternating content and
        // whitespace. The whitespace contains the linebreaks.
        //
        // For example:
        //   ["I", line, "love", line, "monkeys"]
        // or
        //   [{ type: group, ... }, softline, { type: group, ... }]
        //
        // It uses this parts structure to handle three main layout cases:
        // * The first two content items fit on the same line without
        //   breaking
        //   -> output the first content item and the whitespace "flat".
        // * Only the first content item fits on the line without breaking
        //   -> output the first content item "flat" and the whitespace with
        //   "break".
        // * Neither content item fits on the line without breaking
        //   -> output the first content item and the whitespace with "break".

        case "fill":
          {
            var _rem = width - pos;

            var parts = _doc.parts;

            if (parts.length === 0) {
              break;
            }

            var content = parts[0];
            var contentFlatCmd = [ind, MODE_FLAT, content];
            var contentBreakCmd = [ind, MODE_BREAK, content];
            var contentFits = fits(contentFlatCmd, [], _rem, options, true);

            if (parts.length === 1) {
              if (contentFits) {
                cmds.push(contentFlatCmd);
              } else {
                cmds.push(contentBreakCmd);
              }

              break;
            }

            var whitespace = parts[1];
            var whitespaceFlatCmd = [ind, MODE_FLAT, whitespace];
            var whitespaceBreakCmd = [ind, MODE_BREAK, whitespace];

            if (parts.length === 2) {
              if (contentFits) {
                cmds.push(whitespaceFlatCmd);
                cmds.push(contentFlatCmd);
              } else {
                cmds.push(whitespaceBreakCmd);
                cmds.push(contentBreakCmd);
              }

              break;
            } // At this point we've handled the first pair (context, separator)
            // and will create a new fill doc for the rest of the content.
            // Ideally we wouldn't mutate the array here but coping all the
            // elements to a new array would make this algorithm quadratic,
            // which is unusable for large arrays (e.g. large texts in JSX).


            parts.splice(0, 2);
            var remainingCmd = [ind, mode, fill$1(parts)];
            var secondContent = parts[0];
            var firstAndSecondContentFlatCmd = [ind, MODE_FLAT, concat$2([content, whitespace, secondContent])];
            var firstAndSecondContentFits = fits(firstAndSecondContentFlatCmd, [], _rem, options, true);

            if (firstAndSecondContentFits) {
              cmds.push(remainingCmd);
              cmds.push(whitespaceFlatCmd);
              cmds.push(contentFlatCmd);
            } else if (contentFits) {
              cmds.push(remainingCmd);
              cmds.push(whitespaceBreakCmd);
              cmds.push(contentFlatCmd);
            } else {
              cmds.push(remainingCmd);
              cmds.push(whitespaceBreakCmd);
              cmds.push(contentBreakCmd);
            }

            break;
          }

        case "if-break":
          {
            var groupMode = _doc.groupId ? groupModeMap[_doc.groupId] : mode;

            if (groupMode === MODE_BREAK) {
              if (_doc.breakContents) {
                cmds.push([ind, mode, _doc.breakContents]);
              }
            }

            if (groupMode === MODE_FLAT) {
              if (_doc.flatContents) {
                cmds.push([ind, mode, _doc.flatContents]);
              }
            }

            break;
          }

        case "line-suffix":
          lineSuffix.push([ind, mode, _doc.contents]);
          break;

        case "line-suffix-boundary":
          if (lineSuffix.length > 0) {
            cmds.push([ind, mode, {
              type: "line",
              hard: true
            }]);
          }

          break;

        case "line":
          switch (mode) {
            case MODE_FLAT:
              if (!_doc.hard) {
                if (!_doc.soft) {
                  out.push(" ");
                  pos += 1;
                }

                break;
              } else {
                // This line was forced into the output even if we
                // were in flattened mode, so we need to tell the next
                // group that no matter what, it needs to remeasure
                // because the previous measurement didn't accurately
                // capture the entire expression (this is necessary
                // for nested groups)
                shouldRemeasure = true;
              }

            // fallthrough

            case MODE_BREAK:
              if (lineSuffix.length) {
                cmds.push([ind, mode, _doc]);
                [].push.apply(cmds, lineSuffix.reverse());
                lineSuffix = [];
                break;
              }

              if (_doc.literal) {
                if (ind.root) {
                  out.push(newLine, ind.root.value);
                  pos = ind.root.length;
                } else {
                  out.push(newLine);
                  pos = 0;
                }
              } else {
                pos -= trim$1(out);
                out.push(newLine + ind.value);
                pos = ind.length;
              }

              break;
          }

          break;

        default:
      }
    }
  }

  var cursorPlaceholderIndex = out.indexOf(cursor$2.placeholder);

  if (cursorPlaceholderIndex !== -1) {
    var otherCursorPlaceholderIndex = out.indexOf(cursor$2.placeholder, cursorPlaceholderIndex + 1);
    var beforeCursor = out.slice(0, cursorPlaceholderIndex).join("");
    var aroundCursor = out.slice(cursorPlaceholderIndex + 1, otherCursorPlaceholderIndex).join("");
    var afterCursor = out.slice(otherCursorPlaceholderIndex + 1).join("");
    return {
      formatted: beforeCursor + aroundCursor + afterCursor,
      cursorNodeStart: beforeCursor.length,
      cursorNodeText: aroundCursor
    };
  }

  return {
    formatted: out.join("")
  };
}

var docPrinter = {
  printDocToString: printDocToString
};

var traverseDocOnExitStackMarker = {};

function traverseDoc(doc, onEnter, onExit, shouldTraverseConditionalGroups) {
  var docsStack = [doc];

  while (docsStack.length !== 0) {
    var _doc = docsStack.pop();

    if (_doc === traverseDocOnExitStackMarker) {
      onExit(docsStack.pop());
      continue;
    }

    var shouldRecurse = true;

    if (onEnter) {
      if (onEnter(_doc) === false) {
        shouldRecurse = false;
      }
    }

    if (onExit) {
      docsStack.push(_doc);
      docsStack.push(traverseDocOnExitStackMarker);
    }

    if (shouldRecurse) {
      // When there are multiple parts to process,
      // the parts need to be pushed onto the stack in reverse order,
      // so that they are processed in the original order
      // when the stack is popped.
      if (_doc.type === "concat" || _doc.type === "fill") {
        for (var ic = _doc.parts.length, i = ic - 1; i >= 0; --i) {
          docsStack.push(_doc.parts[i]);
        }
      } else if (_doc.type === "if-break") {
        if (_doc.flatContents) {
          docsStack.push(_doc.flatContents);
        }

        if (_doc.breakContents) {
          docsStack.push(_doc.breakContents);
        }
      } else if (_doc.type === "group" && _doc.expandedStates) {
        if (shouldTraverseConditionalGroups) {
          for (var _ic = _doc.expandedStates.length, _i = _ic - 1; _i >= 0; --_i) {
            docsStack.push(_doc.expandedStates[_i]);
          }
        } else {
          docsStack.push(_doc.contents);
        }
      } else if (_doc.contents) {
        docsStack.push(_doc.contents);
      }
    }
  }
}

function mapDoc(doc, cb) {
  if (doc.type === "concat" || doc.type === "fill") {
    var parts = doc.parts.map(function (part) {
      return mapDoc(part, cb);
    });
    return cb(Object.assign({}, doc, {
      parts: parts
    }));
  } else if (doc.type === "if-break") {
    var breakContents = doc.breakContents && mapDoc(doc.breakContents, cb);
    var flatContents = doc.flatContents && mapDoc(doc.flatContents, cb);
    return cb(Object.assign({}, doc, {
      breakContents: breakContents,
      flatContents: flatContents
    }));
  } else if (doc.contents) {
    var contents = mapDoc(doc.contents, cb);
    return cb(Object.assign({}, doc, {
      contents: contents
    }));
  }

  return cb(doc);
}

function findInDoc(doc, fn, defaultValue) {
  var result = defaultValue;
  var hasStopped = false;

  function findInDocOnEnterFn(doc) {
    var maybeResult = fn(doc);

    if (maybeResult !== undefined) {
      hasStopped = true;
      result = maybeResult;
    }

    if (hasStopped) {
      return false;
    }
  }

  traverseDoc(doc, findInDocOnEnterFn);
  return result;
}

function isEmpty(n) {
  return typeof n === "string" && n.length === 0;
}

function isLineNextFn(doc) {
  if (typeof doc === "string") {
    return false;
  }

  if (doc.type === "line") {
    return true;
  }
}

function isLineNext(doc) {
  return findInDoc(doc, isLineNextFn, false);
}

function willBreakFn(doc) {
  if (doc.type === "group" && doc.break) {
    return true;
  }

  if (doc.type === "line" && doc.hard) {
    return true;
  }

  if (doc.type === "break-parent") {
    return true;
  }
}

function willBreak(doc) {
  return findInDoc(doc, willBreakFn, false);
}

function breakParentGroup(groupStack) {
  if (groupStack.length > 0) {
    var parentGroup = groupStack[groupStack.length - 1]; // Breaks are not propagated through conditional groups because
    // the user is expected to manually handle what breaks.

    if (!parentGroup.expandedStates) {
      parentGroup.break = true;
    }
  }

  return null;
}

function propagateBreaks(doc) {
  var alreadyVisitedSet = new Set();
  var groupStack = [];

  function propagateBreaksOnEnterFn(doc) {
    if (doc.type === "break-parent") {
      breakParentGroup(groupStack);
    }

    if (doc.type === "group") {
      groupStack.push(doc);

      if (alreadyVisitedSet.has(doc)) {
        return false;
      }

      alreadyVisitedSet.add(doc);
    }
  }

  function propagateBreaksOnExitFn(doc) {
    if (doc.type === "group") {
      var group = groupStack.pop();

      if (group.break) {
        breakParentGroup(groupStack);
      }
    }
  }

  traverseDoc(doc, propagateBreaksOnEnterFn, propagateBreaksOnExitFn,
  /* shouldTraverseConditionalGroups */
  true);
}

function removeLinesFn(doc) {
  // Force this doc into flat mode by statically converting all
  // lines into spaces (or soft lines into nothing). Hard lines
  // should still output because there's too great of a chance
  // of breaking existing assumptions otherwise.
  if (doc.type === "line" && !doc.hard) {
    return doc.soft ? "" : " ";
  } else if (doc.type === "if-break") {
    return doc.flatContents || "";
  }

  return doc;
}

function removeLines(doc) {
  return mapDoc(doc, removeLinesFn);
}

function stripTrailingHardline(doc) {
  // HACK remove ending hardline, original PR: #1984
  if (doc.type === "concat" && doc.parts.length !== 0) {
    var lastPart = doc.parts[doc.parts.length - 1];

    if (lastPart.type === "concat") {
      if (lastPart.parts.length === 2 && lastPart.parts[0].hard && lastPart.parts[1].type === "break-parent") {
        return {
          type: "concat",
          parts: doc.parts.slice(0, -1)
        };
      }

      return {
        type: "concat",
        parts: doc.parts.slice(0, -1).concat(stripTrailingHardline(lastPart))
      };
    }
  }

  return doc;
}

var docUtils = {
  isEmpty: isEmpty,
  willBreak: willBreak,
  isLineNext: isLineNext,
  traverseDoc: traverseDoc,
  mapDoc: mapDoc,
  propagateBreaks: propagateBreaks,
  removeLines: removeLines,
  stripTrailingHardline: stripTrailingHardline
};

function flattenDoc(doc) {
  if (doc.type === "concat") {
    var res = [];

    for (var i = 0; i < doc.parts.length; ++i) {
      var doc2 = doc.parts[i];

      if (typeof doc2 !== "string" && doc2.type === "concat") {
        [].push.apply(res, flattenDoc(doc2).parts);
      } else {
        var flattened = flattenDoc(doc2);

        if (flattened !== "") {
          res.push(flattened);
        }
      }
    }

    return Object.assign({}, doc, {
      parts: res
    });
  } else if (doc.type === "if-break") {
    return Object.assign({}, doc, {
      breakContents: doc.breakContents != null ? flattenDoc(doc.breakContents) : null,
      flatContents: doc.flatContents != null ? flattenDoc(doc.flatContents) : null
    });
  } else if (doc.type === "group") {
    return Object.assign({}, doc, {
      contents: flattenDoc(doc.contents),
      expandedStates: doc.expandedStates ? doc.expandedStates.map(flattenDoc) : doc.expandedStates
    });
  } else if (doc.contents) {
    return Object.assign({}, doc, {
      contents: flattenDoc(doc.contents)
    });
  }

  return doc;
}

function printDoc(doc) {
  if (typeof doc === "string") {
    return JSON.stringify(doc);
  }

  if (doc.type === "line") {
    if (doc.literal) {
      return "literalline";
    }

    if (doc.hard) {
      return "hardline";
    }

    if (doc.soft) {
      return "softline";
    }

    return "line";
  }

  if (doc.type === "break-parent") {
    return "breakParent";
  }

  if (doc.type === "trim") {
    return "trim";
  }

  if (doc.type === "concat") {
    return "[" + doc.parts.map(printDoc).join(", ") + "]";
  }

  if (doc.type === "indent") {
    return "indent(" + printDoc(doc.contents) + ")";
  }

  if (doc.type === "align") {
    return doc.n === -Infinity ? "dedentToRoot(" + printDoc(doc.contents) + ")" : doc.n < 0 ? "dedent(" + printDoc(doc.contents) + ")" : doc.n.type === "root" ? "markAsRoot(" + printDoc(doc.contents) + ")" : "align(" + JSON.stringify(doc.n) + ", " + printDoc(doc.contents) + ")";
  }

  if (doc.type === "if-break") {
    return "ifBreak(" + printDoc(doc.breakContents) + (doc.flatContents ? ", " + printDoc(doc.flatContents) : "") + ")";
  }

  if (doc.type === "group") {
    if (doc.expandedStates) {
      return "conditionalGroup(" + "[" + doc.expandedStates.map(printDoc).join(",") + "])";
    }

    return (doc.break ? "wrappedGroup" : "group") + "(" + printDoc(doc.contents) + ")";
  }

  if (doc.type === "fill") {
    return "fill" + "(" + doc.parts.map(printDoc).join(", ") + ")";
  }

  if (doc.type === "line-suffix") {
    return "lineSuffix(" + printDoc(doc.contents) + ")";
  }

  if (doc.type === "line-suffix-boundary") {
    return "lineSuffixBoundary";
  }

  throw new Error("Unknown doc type " + doc.type);
}

var docDebug = {
  printDocToDebug: function printDocToDebug(doc) {
    return printDoc(flattenDoc(doc));
  }
};

var doc = {
  builders: docBuilders,
  printer: docPrinter,
  utils: docUtils,
  debug: docDebug
};

var mapDoc$1 = doc.utils.mapDoc;

function isNextLineEmpty$1(text, node, options) {
  return util.isNextLineEmpty(text, node, options.locEnd);
}

function isPreviousLineEmpty$2(text, node, options) {
  return util.isPreviousLineEmpty(text, node, options.locStart);
}

function getNextNonSpaceNonCommentCharacterIndex$1(text, node, options) {
  return util.getNextNonSpaceNonCommentCharacterIndex(text, node, options.locEnd);
}

var utilShared = {
  getMaxContinuousCount: util.getMaxContinuousCount,
  getStringWidth: util.getStringWidth,
  getAlignmentSize: util.getAlignmentSize,
  getIndentSize: util.getIndentSize,
  skip: util.skip,
  skipWhitespace: util.skipWhitespace,
  skipSpaces: util.skipSpaces,
  skipNewline: util.skipNewline,
  skipToLineEnd: util.skipToLineEnd,
  skipEverythingButNewLine: util.skipEverythingButNewLine,
  skipInlineComment: util.skipInlineComment,
  skipTrailingComment: util.skipTrailingComment,
  hasNewline: util.hasNewline,
  hasNewlineInRange: util.hasNewlineInRange,
  hasSpaces: util.hasSpaces,
  isNextLineEmpty: isNextLineEmpty$1,
  isNextLineEmptyAfterIndex: util.isNextLineEmptyAfterIndex,
  isPreviousLineEmpty: isPreviousLineEmpty$2,
  getNextNonSpaceNonCommentCharacterIndex: getNextNonSpaceNonCommentCharacterIndex$1,
  mapDoc: mapDoc$1,
  // TODO: remove in 2.0, we already exposed it in docUtils
  makeString: util.makeString,
  addLeadingComment: util.addLeadingComment,
  addDanglingComment: util.addDanglingComment,
  addTrailingComment: util.addTrailingComment
};

var assert$3 = ( assert$2 && assert ) || assert$2;

var _require$$0$builders = doc.builders;
var concat = _require$$0$builders.concat;
var hardline = _require$$0$builders.hardline;
var breakParent = _require$$0$builders.breakParent;
var indent = _require$$0$builders.indent;
var lineSuffix = _require$$0$builders.lineSuffix;
var join = _require$$0$builders.join;
var cursor = _require$$0$builders.cursor;
var hasNewline = util.hasNewline;
var skipNewline = util.skipNewline;
var isPreviousLineEmpty = util.isPreviousLineEmpty;
var addLeadingComment = utilShared.addLeadingComment;
var addDanglingComment = utilShared.addDanglingComment;
var addTrailingComment = utilShared.addTrailingComment;
var childNodesCacheKey = Symbol("child-nodes");

function getSortedChildNodes(node, options, resultArray) {
  if (!node) {
    return;
  }

  var printer = options.printer,
      locStart = options.locStart,
      locEnd = options.locEnd;

  if (resultArray) {
    if (node && printer.canAttachComment && printer.canAttachComment(node)) {
      // This reverse insertion sort almost always takes constant
      // time because we almost always (maybe always?) append the
      // nodes in order anyway.
      var i;

      for (i = resultArray.length - 1; i >= 0; --i) {
        if (locStart(resultArray[i]) <= locStart(node) && locEnd(resultArray[i]) <= locEnd(node)) {
          break;
        }
      }

      resultArray.splice(i + 1, 0, node);
      return;
    }
  } else if (node[childNodesCacheKey]) {
    return node[childNodesCacheKey];
  }

  var childNodes;

  if (printer.getCommentChildNodes) {
    childNodes = printer.getCommentChildNodes(node);
  } else if (node && _typeof(node) === "object") {
    childNodes = Object.keys(node).filter(function (n) {
      return n !== "enclosingNode" && n !== "precedingNode" && n !== "followingNode";
    }).map(function (n) {
      return node[n];
    });
  }

  if (!childNodes) {
    return;
  }

  if (!resultArray) {
    Object.defineProperty(node, childNodesCacheKey, {
      value: resultArray = [],
      enumerable: false
    });
  }

  childNodes.forEach(function (childNode) {
    getSortedChildNodes(childNode, options, resultArray);
  });
  return resultArray;
} // As efficiently as possible, decorate the comment object with
// .precedingNode, .enclosingNode, and/or .followingNode properties, at
// least one of which is guaranteed to be defined.


function decorateComment(node, comment, options) {
  var locStart = options.locStart,
      locEnd = options.locEnd;
  var childNodes = getSortedChildNodes(node, options);
  var precedingNode;
  var followingNode; // Time to dust off the old binary search robes and wizard hat.

  var left = 0;
  var right = childNodes.length;

  while (left < right) {
    var middle = left + right >> 1;
    var child = childNodes[middle];

    if (locStart(child) - locStart(comment) <= 0 && locEnd(comment) - locEnd(child) <= 0) {
      // The comment is completely contained by this child node.
      comment.enclosingNode = child;
      decorateComment(child, comment, options);
      return; // Abandon the binary search at this level.
    }

    if (locEnd(child) - locStart(comment) <= 0) {
      // This child node falls completely before the comment.
      // Because we will never consider this node or any nodes
      // before it again, this node must be the closest preceding
      // node we have encountered so far.
      precedingNode = child;
      left = middle + 1;
      continue;
    }

    if (locEnd(comment) - locStart(child) <= 0) {
      // This child node falls completely after the comment.
      // Because we will never consider this node or any nodes after
      // it again, this node must be the closest following node we
      // have encountered so far.
      followingNode = child;
      right = middle;
      continue;
    }
    /* istanbul ignore next */


    throw new Error("Comment location overlaps with node location");
  } // We don't want comments inside of different expressions inside of the same
  // template literal to move to another expression.


  if (comment.enclosingNode && comment.enclosingNode.type === "TemplateLiteral") {
    var quasis = comment.enclosingNode.quasis;
    var commentIndex = findExpressionIndexForComment(quasis, comment, options);

    if (precedingNode && findExpressionIndexForComment(quasis, precedingNode, options) !== commentIndex) {
      precedingNode = null;
    }

    if (followingNode && findExpressionIndexForComment(quasis, followingNode, options) !== commentIndex) {
      followingNode = null;
    }
  }

  if (precedingNode) {
    comment.precedingNode = precedingNode;
  }

  if (followingNode) {
    comment.followingNode = followingNode;
  }
}

function attach(comments, ast, text, options) {
  if (!Array.isArray(comments)) {
    return;
  }

  var tiesToBreak = [];
  var locStart = options.locStart,
      locEnd = options.locEnd;
  comments.forEach(function (comment, i) {
    if (options.parser === "json" || options.parser === "json5" || options.parser === "__js_expression" || options.parser === "__vue_expression") {
      if (locStart(comment) - locStart(ast) <= 0) {
        addLeadingComment(ast, comment);
        return;
      }

      if (locEnd(comment) - locEnd(ast) >= 0) {
        addTrailingComment(ast, comment);
        return;
      }
    }

    decorateComment(ast, comment, options);
    var precedingNode = comment.precedingNode,
        enclosingNode = comment.enclosingNode,
        followingNode = comment.followingNode;
    var pluginHandleOwnLineComment = options.printer.handleComments && options.printer.handleComments.ownLine ? options.printer.handleComments.ownLine : function () {
      return false;
    };
    var pluginHandleEndOfLineComment = options.printer.handleComments && options.printer.handleComments.endOfLine ? options.printer.handleComments.endOfLine : function () {
      return false;
    };
    var pluginHandleRemainingComment = options.printer.handleComments && options.printer.handleComments.remaining ? options.printer.handleComments.remaining : function () {
      return false;
    };
    var isLastComment = comments.length - 1 === i;

    if (hasNewline(text, locStart(comment), {
      backwards: true
    })) {
      // If a comment exists on its own line, prefer a leading comment.
      // We also need to check if it's the first line of the file.
      if (pluginHandleOwnLineComment(comment, text, options, ast, isLastComment)) {// We're good
      } else if (followingNode) {
        // Always a leading comment.
        addLeadingComment(followingNode, comment);
      } else if (precedingNode) {
        addTrailingComment(precedingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        // There are no nodes, let's attach it to the root of the ast

        /* istanbul ignore next */
        addDanglingComment(ast, comment);
      }
    } else if (hasNewline(text, locEnd(comment))) {
      if (pluginHandleEndOfLineComment(comment, text, options, ast, isLastComment)) {// We're good
      } else if (precedingNode) {
        // There is content before this comment on the same line, but
        // none after it, so prefer a trailing comment of the previous node.
        addTrailingComment(precedingNode, comment);
      } else if (followingNode) {
        addLeadingComment(followingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        // There are no nodes, let's attach it to the root of the ast

        /* istanbul ignore next */
        addDanglingComment(ast, comment);
      }
    } else {
      if (pluginHandleRemainingComment(comment, text, options, ast, isLastComment)) {// We're good
      } else if (precedingNode && followingNode) {
        // Otherwise, text exists both before and after the comment on
        // the same line. If there is both a preceding and following
        // node, use a tie-breaking algorithm to determine if it should
        // be attached to the next or previous node. In the last case,
        // simply attach the right node;
        var tieCount = tiesToBreak.length;

        if (tieCount > 0) {
          var lastTie = tiesToBreak[tieCount - 1];

          if (lastTie.followingNode !== comment.followingNode) {
            breakTies(tiesToBreak, text, options);
          }
        }

        tiesToBreak.push(comment);
      } else if (precedingNode) {
        addTrailingComment(precedingNode, comment);
      } else if (followingNode) {
        addLeadingComment(followingNode, comment);
      } else if (enclosingNode) {
        addDanglingComment(enclosingNode, comment);
      } else {
        // There are no nodes, let's attach it to the root of the ast

        /* istanbul ignore next */
        addDanglingComment(ast, comment);
      }
    }
  });
  breakTies(tiesToBreak, text, options);
  comments.forEach(function (comment) {
    // These node references were useful for breaking ties, but we
    // don't need them anymore, and they create cycles in the AST that
    // may lead to infinite recursion if we don't delete them here.
    delete comment.precedingNode;
    delete comment.enclosingNode;
    delete comment.followingNode;
  });
}

function breakTies(tiesToBreak, text, options) {
  var tieCount = tiesToBreak.length;

  if (tieCount === 0) {
    return;
  }

  var _tiesToBreak$ = tiesToBreak[0],
      precedingNode = _tiesToBreak$.precedingNode,
      followingNode = _tiesToBreak$.followingNode;
  var gapEndPos = options.locStart(followingNode); // Iterate backwards through tiesToBreak, examining the gaps
  // between the tied comments. In order to qualify as leading, a
  // comment must be separated from followingNode by an unbroken series of
  // gaps (or other comments). Gaps should only contain whitespace or open
  // parentheses.

  var indexOfFirstLeadingComment;

  for (indexOfFirstLeadingComment = tieCount; indexOfFirstLeadingComment > 0; --indexOfFirstLeadingComment) {
    var comment = tiesToBreak[indexOfFirstLeadingComment - 1];
    assert$3.strictEqual(comment.precedingNode, precedingNode);
    assert$3.strictEqual(comment.followingNode, followingNode);
    var gap = text.slice(options.locEnd(comment), gapEndPos).trim();

    if (gap === "" || /^\(+$/.test(gap)) {
      gapEndPos = options.locStart(comment);
    } else {
      // The gap string contained something other than whitespace or open
      // parentheses.
      break;
    }
  }

  tiesToBreak.forEach(function (comment, i) {
    if (i < indexOfFirstLeadingComment) {
      addTrailingComment(precedingNode, comment);
    } else {
      addLeadingComment(followingNode, comment);
    }
  });
  tiesToBreak.length = 0;
}

function printComment(commentPath, options) {
  var comment = commentPath.getValue();
  comment.printed = true;
  return options.printer.printComment(commentPath, options);
}

function findExpressionIndexForComment(quasis, comment, options) {
  var startPos = options.locStart(comment) - 1;

  for (var i = 1; i < quasis.length; ++i) {
    if (startPos < getQuasiRange(quasis[i]).start) {
      return i - 1;
    }
  } // We haven't found it, it probably means that some of the locations are off.
  // Let's just return the first one.

  /* istanbul ignore next */


  return 0;
}

function getQuasiRange(expr) {
  if (expr.start !== undefined) {
    // Babylon
    return {
      start: expr.start,
      end: expr.end
    };
  } // Flow


  return {
    start: expr.range[0],
    end: expr.range[1]
  };
}

function printLeadingComment(commentPath, print, options) {
  var comment = commentPath.getValue();
  var contents = printComment(commentPath, options);

  if (!contents) {
    return "";
  }

  var isBlock = options.printer.isBlockComment && options.printer.isBlockComment(comment); // Leading block comments should see if they need to stay on the
  // same line or not.

  if (isBlock) {
    return concat([contents, hasNewline(options.originalText, options.locEnd(comment)) ? hardline : " "]);
  }

  return concat([contents, hardline]);
}

function printTrailingComment(commentPath, print, options) {
  var comment = commentPath.getValue();
  var contents = printComment(commentPath, options);

  if (!contents) {
    return "";
  }

  var isBlock = options.printer.isBlockComment && options.printer.isBlockComment(comment); // We don't want the line to break
  // when the parentParentNode is a ClassDeclaration/-Expression
  // And the parentNode is in the superClass property

  var parentNode = commentPath.getNode(1);
  var parentParentNode = commentPath.getNode(2);
  var isParentSuperClass = parentParentNode && (parentParentNode.type === "ClassDeclaration" || parentParentNode.type === "ClassExpression") && parentParentNode.superClass === parentNode;

  if (hasNewline(options.originalText, options.locStart(comment), {
    backwards: true
  })) {
    // This allows comments at the end of nested structures:
    // {
    //   x: 1,
    //   y: 2
    //   // A comment
    // }
    // Those kinds of comments are almost always leading comments, but
    // here it doesn't go "outside" the block and turns it into a
    // trailing comment for `2`. We can simulate the above by checking
    // if this a comment on its own line; normal trailing comments are
    // always at the end of another expression.
    var isLineBeforeEmpty = isPreviousLineEmpty(options.originalText, comment, options.locStart);
    return lineSuffix(concat([hardline, isLineBeforeEmpty ? hardline : "", contents]));
  } else if (isBlock || isParentSuperClass) {
    // Trailing block comments never need a newline
    return concat([" ", contents]);
  }

  return concat([lineSuffix(" " + contents), !isBlock ? breakParent : ""]);
}

function printDanglingComments(path, options, sameIndent, filter) {
  var parts = [];
  var node = path.getValue();

  if (!node || !node.comments) {
    return "";
  }

  path.each(function (commentPath) {
    var comment = commentPath.getValue();

    if (comment && !comment.leading && !comment.trailing && (!filter || filter(comment))) {
      parts.push(printComment(commentPath, options));
    }
  }, "comments");

  if (parts.length === 0) {
    return "";
  }

  if (sameIndent) {
    return join(hardline, parts);
  }

  return indent(concat([hardline, join(hardline, parts)]));
}

function prependCursorPlaceholder(path, options, printed) {
  if (path.getNode() === options.cursorNode && path.getValue()) {
    return concat([cursor, printed, cursor]);
  }

  return printed;
}

function printComments(path, print, options, needsSemi) {
  var value = path.getValue();
  var printed = print(path);
  var comments = value && value.comments;

  if (!comments || comments.length === 0) {
    return prependCursorPlaceholder(path, options, printed);
  }

  var leadingParts = [];
  var trailingParts = [needsSemi ? ";" : "", printed];
  path.each(function (commentPath) {
    var comment = commentPath.getValue();
    var leading = comment.leading,
        trailing = comment.trailing;

    if (leading) {
      var contents = printLeadingComment(commentPath, print, options);

      if (!contents) {
        return;
      }

      leadingParts.push(contents);
      var text = options.originalText;

      if (hasNewline(text, skipNewline(text, options.locEnd(comment)))) {
        leadingParts.push(hardline);
      }
    } else if (trailing) {
      trailingParts.push(printTrailingComment(commentPath, print, options));
    }
  }, "comments");
  return prependCursorPlaceholder(path, options, concat(leadingParts.concat(trailingParts)));
}

var comments = {
  attach: attach,
  printComments: printComments,
  printDanglingComments: printDanglingComments,
  getSortedChildNodes: getSortedChildNodes
};

function FastPath(value) {
  assert$3.ok(this instanceof FastPath);
  this.stack = [value];
} // The name of the current property is always the penultimate element of
// this.stack, and always a String.


FastPath.prototype.getName = function getName() {
  var s = this.stack;
  var len = s.length;

  if (len > 1) {
    return s[len - 2];
  } // Since the name is always a string, null is a safe sentinel value to
  // return if we do not know the name of the (root) value.

  /* istanbul ignore next */


  return null;
}; // The value of the current property is always the final element of
// this.stack.


FastPath.prototype.getValue = function getValue() {
  var s = this.stack;
  return s[s.length - 1];
};

function getNodeHelper(path, count) {
  var s = path.stack;

  for (var i = s.length - 1; i >= 0; i -= 2) {
    var value = s[i];

    if (value && !Array.isArray(value) && --count < 0) {
      return value;
    }
  }

  return null;
}

FastPath.prototype.getNode = function getNode(count) {
  return getNodeHelper(this, ~~count);
};

FastPath.prototype.getParentNode = function getParentNode(count) {
  return getNodeHelper(this, ~~count + 1);
}; // Temporarily push properties named by string arguments given after the
// callback function onto this.stack, then call the callback with a
// reference to this (modified) FastPath object. Note that the stack will
// be restored to its original state after the callback is finished, so it
// is probably a mistake to retain a reference to the path.


FastPath.prototype.call = function call(callback
/*, name1, name2, ... */
) {
  var s = this.stack;
  var origLen = s.length;
  var value = s[origLen - 1];
  var argc = arguments.length;

  for (var i = 1; i < argc; ++i) {
    var name = arguments[i];
    value = value[name];
    s.push(name, value);
  }

  var result = callback(this);
  s.length = origLen;
  return result;
}; // Similar to FastPath.prototype.call, except that the value obtained by
// accessing this.getValue()[name1][name2]... should be array-like. The
// callback will be called with a reference to this path object for each
// element of the array.


FastPath.prototype.each = function each(callback
/*, name1, name2, ... */
) {
  var s = this.stack;
  var origLen = s.length;
  var value = s[origLen - 1];
  var argc = arguments.length;

  for (var i = 1; i < argc; ++i) {
    var name = arguments[i];
    value = value[name];
    s.push(name, value);
  }

  for (var _i = 0; _i < value.length; ++_i) {
    if (_i in value) {
      s.push(_i, value[_i]); // If the callback needs to know the value of i, call
      // path.getName(), assuming path is the parameter name.

      callback(this);
      s.length -= 2;
    }
  }

  s.length = origLen;
}; // Similar to FastPath.prototype.each, except that the results of the
// callback function invocations are stored in an array and returned at
// the end of the iteration.


FastPath.prototype.map = function map(callback
/*, name1, name2, ... */
) {
  var s = this.stack;
  var origLen = s.length;
  var value = s[origLen - 1];
  var argc = arguments.length;

  for (var i = 1; i < argc; ++i) {
    var name = arguments[i];
    value = value[name];
    s.push(name, value);
  }

  var result = new Array(value.length);

  for (var _i2 = 0; _i2 < value.length; ++_i2) {
    if (_i2 in value) {
      s.push(_i2, value[_i2]);
      result[_i2] = callback(this, _i2);
      s.length -= 2;
    }
  }

  s.length = origLen;
  return result;
};

var fastPath = FastPath;

var normalize$3 = options.normalize;

function printSubtree(path, print, options$$1, printAstToDoc) {
  if (options$$1.printer.embed) {
    return options$$1.printer.embed(path, print, function (text, partialNextOptions) {
      return textToDoc(text, partialNextOptions, options$$1, printAstToDoc);
    }, options$$1);
  }
}

function textToDoc(text, partialNextOptions, parentOptions, printAstToDoc) {
  var nextOptions = normalize$3(Object.assign({}, parentOptions, partialNextOptions, {
    parentParser: parentOptions.parser,
    originalText: text
  }), {
    passThrough: true
  });
  var result = parser.parse(text, nextOptions);
  var ast = result.ast;
  text = result.text;
  var astComments = ast.comments;
  delete ast.comments;
  comments.attach(astComments, ast, text, nextOptions);
  return printAstToDoc(ast, nextOptions);
}

var multiparser = {
  printSubtree: printSubtree
};

var doc$2 = doc;
var docBuilders$2 = doc$2.builders;
var concat$3 = docBuilders$2.concat;
var hardline$2 = docBuilders$2.hardline;
var addAlignmentToDoc$1 = docBuilders$2.addAlignmentToDoc;
var docUtils$2 = doc$2.utils;
/**
 * Takes an abstract syntax tree (AST) and recursively converts it to a
 * document (series of printing primitives).
 *
 * This is done by descending down the AST recursively. The recursion
 * involves two functions that call each other:
 *
 * 1. printGenerically(), which is defined as an inner function here.
 *    It basically takes care of node caching.
 * 2. callPluginPrintFunction(), which checks for some options, and
 *    ultimately calls the print() function provided by the plugin.
 *
 * The plugin function will call printGenerically() again for child nodes
 * of the current node, which will do its housekeeping, then call the
 * plugin function again, and so on.
 *
 * All the while, these functions pass a "path" variable around, which
 * is a stack-like data structure (FastPath) that maintains the current
 * state of the recursion. It is called "path", because it represents
 * the path to the current node through the Abstract Syntax Tree.
 */

function printAstToDoc(ast, options) {
  var alignmentSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var printer = options.printer;

  if (printer.preprocess) {
    ast = printer.preprocess(ast, options);
  }

  var cache = new Map();

  function printGenerically(path, args) {
    var node = path.getValue();
    var shouldCache = node && _typeof(node) === "object" && args === undefined;

    if (shouldCache && cache.has(node)) {
      return cache.get(node);
    } // We let JSXElement print its comments itself because it adds () around
    // UnionTypeAnnotation has to align the child without the comments


    var res;

    if (printer.willPrintOwnComments && printer.willPrintOwnComments(path)) {
      res = callPluginPrintFunction(path, options, printGenerically, args);
    } else {
      // printComments will call the plugin print function and check for
      // comments to print
      res = comments.printComments(path, function (p) {
        return callPluginPrintFunction(p, options, printGenerically, args);
      }, options, args && args.needsSemi);
    }

    if (shouldCache) {
      cache.set(node, res);
    }

    return res;
  }

  var doc$$2 = printGenerically(new fastPath(ast));

  if (alignmentSize > 0) {
    // Add a hardline to make the indents take effect
    // It should be removed in index.js format()
    doc$$2 = addAlignmentToDoc$1(docUtils$2.removeLines(concat$3([hardline$2, doc$$2])), alignmentSize, options.tabWidth);
  }

  docUtils$2.propagateBreaks(doc$$2);
  return doc$$2;
}

function callPluginPrintFunction(path, options, printPath, args) {
  assert$3.ok(path instanceof fastPath);
  var node = path.getValue();
  var printer = options.printer; // Escape hatch

  if (printer.hasPrettierIgnore && printer.hasPrettierIgnore(path)) {
    return options.originalText.slice(options.locStart(node), options.locEnd(node));
  }

  if (node) {
    try {
      // Potentially switch to a different parser
      var sub = multiparser.printSubtree(path, printPath, options, printAstToDoc);

      if (sub) {
        return sub;
      }
    } catch (error) {
      /* istanbul ignore if */
      if (commonjsGlobal.PRETTIER_DEBUG) {
        throw error;
      } // Continue with current parser

    }
  }

  return printer.print(path, options, printPath, args);
}

var astToDoc = printAstToDoc;

function findSiblingAncestors(startNodeAndParents, endNodeAndParents, opts) {
  var resultStartNode = startNodeAndParents.node;
  var resultEndNode = endNodeAndParents.node;

  if (resultStartNode === resultEndNode) {
    return {
      startNode: resultStartNode,
      endNode: resultEndNode
    };
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = endNodeAndParents.parentNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var endParent = _step.value;

      if (endParent.type !== "Program" && endParent.type !== "File" && opts.locStart(endParent) >= opts.locStart(startNodeAndParents.node)) {
        resultEndNode = endParent;
      } else {
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = startNodeAndParents.parentNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var startParent = _step2.value;

      if (startParent.type !== "Program" && startParent.type !== "File" && opts.locEnd(startParent) <= opts.locEnd(endNodeAndParents.node)) {
        resultStartNode = startParent;
      } else {
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return {
    startNode: resultStartNode,
    endNode: resultEndNode
  };
}

function findNodeAtOffset(node, offset, options, predicate, parentNodes) {
  predicate = predicate || function () {
    return true;
  };

  parentNodes = parentNodes || [];
  var start = options.locStart(node, options.locStart);
  var end = options.locEnd(node, options.locEnd);

  if (start <= offset && offset <= end) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = comments.getSortedChildNodes(node, options)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var childNode = _step3.value;
        var childResult = findNodeAtOffset(childNode, offset, options, predicate, [node].concat(parentNodes));

        if (childResult) {
          return childResult;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    if (predicate(node)) {
      return {
        node: node,
        parentNodes: parentNodes
      };
    }
  }
} // See https://www.ecma-international.org/ecma-262/5.1/#sec-A.5


function isSourceElement(opts, node) {
  if (node == null) {
    return false;
  } // JS and JS like to avoid repetitions


  var jsSourceElements = ["FunctionDeclaration", "BlockStatement", "BreakStatement", "ContinueStatement", "DebuggerStatement", "DoWhileStatement", "EmptyStatement", "ExpressionStatement", "ForInStatement", "ForStatement", "IfStatement", "LabeledStatement", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "VariableDeclaration", "WhileStatement", "WithStatement", "ClassDeclaration", // ES 2015
  "ImportDeclaration", // Module
  "ExportDefaultDeclaration", // Module
  "ExportNamedDeclaration", // Module
  "ExportAllDeclaration", // Module
  "TypeAlias", // Flow
  "InterfaceDeclaration", // Flow, TypeScript
  "TypeAliasDeclaration", // TypeScript
  "ExportAssignment", // TypeScript
  "ExportDeclaration" // TypeScript
  ];
  var jsonSourceElements = ["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"];
  var graphqlSourceElements = ["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"];

  switch (opts.parser) {
    case "flow":
    case "babylon":
    case "typescript":
      return jsSourceElements.indexOf(node.type) > -1;

    case "json":
      return jsonSourceElements.indexOf(node.type) > -1;

    case "graphql":
      return graphqlSourceElements.indexOf(node.kind) > -1;

    case "vue":
      return node.tag !== "root";
  }

  return false;
}

function calculateRange(text, opts, ast) {
  // Contract the range so that it has non-whitespace characters at its endpoints.
  // This ensures we can format a range that doesn't end on a node.
  var rangeStringOrig = text.slice(opts.rangeStart, opts.rangeEnd);
  var startNonWhitespace = Math.max(opts.rangeStart + rangeStringOrig.search(/\S/), opts.rangeStart);
  var endNonWhitespace;

  for (endNonWhitespace = opts.rangeEnd; endNonWhitespace > opts.rangeStart; --endNonWhitespace) {
    if (text[endNonWhitespace - 1].match(/\S/)) {
      break;
    }
  }

  var startNodeAndParents = findNodeAtOffset(ast, startNonWhitespace, opts, function (node) {
    return isSourceElement(opts, node);
  });
  var endNodeAndParents = findNodeAtOffset(ast, endNonWhitespace, opts, function (node) {
    return isSourceElement(opts, node);
  });

  if (!startNodeAndParents || !endNodeAndParents) {
    return {
      rangeStart: 0,
      rangeEnd: 0
    };
  }

  var siblingAncestors = findSiblingAncestors(startNodeAndParents, endNodeAndParents, opts);
  var startNode = siblingAncestors.startNode,
      endNode = siblingAncestors.endNode;
  var rangeStart = Math.min(opts.locStart(startNode, opts.locStart), opts.locStart(endNode, opts.locStart));
  var rangeEnd = Math.max(opts.locEnd(startNode, opts.locEnd), opts.locEnd(endNode, opts.locEnd));
  return {
    rangeStart: rangeStart,
    rangeEnd: rangeEnd
  };
}

var rangeUtil = {
  calculateRange: calculateRange,
  findNodeAtOffset: findNodeAtOffset
};

var normalizeOptions = options.normalize;
var guessEndOfLine = endOfLine.guessEndOfLine;
var convertEndOfLineToChars = endOfLine.convertEndOfLineToChars;
var _printDocToString = doc.printer.printDocToString;
var printDocToDebug = doc.debug.printDocToDebug;
var UTF8BOM = 0xfeff;
var CURSOR = Symbol("cursor");

function ensureAllCommentsPrinted(astComments) {
  if (!astComments) {
    return;
  }

  for (var i = 0; i < astComments.length; ++i) {
    if (astComments[i].value.trim() === "prettier-ignore") {
      // If there's a prettier-ignore, we're not printing that sub-tree so we
      // don't know if the comments was printed or not.
      return;
    }
  }

  astComments.forEach(function (comment) {
    if (!comment.printed) {
      throw new Error('Comment "' + comment.value.trim() + '" was not printed. Please report this error!');
    }

    delete comment.printed;
  });
}

function attachComments(text, ast, opts) {
  var astComments = ast.comments;

  if (astComments) {
    delete ast.comments;
    comments.attach(astComments, ast, text, opts);
  }

  ast.tokens = [];
  opts.originalText = opts.parser === "yaml" ? text : text.trimRight();
  return astComments;
}

function coreFormat(text, opts, addAlignmentSize) {
  if (!text || !text.trim().length) {
    return {
      formatted: "",
      cursorOffset: 0
    };
  }

  addAlignmentSize = addAlignmentSize || 0;
  var parsed = parser.parse(text, opts);
  var ast = parsed.ast;
  var originalText = text;
  text = parsed.text;

  if (opts.cursorOffset >= 0) {
    var nodeResult = rangeUtil.findNodeAtOffset(ast, opts.cursorOffset, opts);

    if (nodeResult && nodeResult.node) {
      opts.cursorNode = nodeResult.node;
    }
  }

  var astComments = attachComments(text, ast, opts);
  var doc$$1 = astToDoc(ast, opts, addAlignmentSize);

  if (opts.endOfLine === "auto") {
    opts.endOfLine = guessEndOfLine(originalText);
  }

  var result = _printDocToString(doc$$1, opts);

  ensureAllCommentsPrinted(astComments); // Remove extra leading indentation as well as the added indentation after last newline

  if (addAlignmentSize > 0) {
    var trimmed = result.formatted.trim();

    if (result.cursorNodeStart !== undefined) {
      result.cursorNodeStart -= result.formatted.indexOf(trimmed);
    }

    result.formatted = trimmed + convertEndOfLineToChars(opts.endOfLine);
  }

  if (opts.cursorOffset >= 0) {
    var oldCursorNodeStart;
    var oldCursorNodeText;
    var cursorOffsetRelativeToOldCursorNode;
    var newCursorNodeStart;
    var newCursorNodeText;

    if (opts.cursorNode && result.cursorNodeText) {
      oldCursorNodeStart = opts.locStart(opts.cursorNode);
      oldCursorNodeText = text.slice(oldCursorNodeStart, opts.locEnd(opts.cursorNode));
      cursorOffsetRelativeToOldCursorNode = opts.cursorOffset - oldCursorNodeStart;
      newCursorNodeStart = result.cursorNodeStart;
      newCursorNodeText = result.cursorNodeText;
    } else {
      oldCursorNodeStart = 0;
      oldCursorNodeText = text;
      cursorOffsetRelativeToOldCursorNode = opts.cursorOffset;
      newCursorNodeStart = 0;
      newCursorNodeText = result.formatted;
    }

    if (oldCursorNodeText === newCursorNodeText) {
      return {
        formatted: result.formatted,
        cursorOffset: newCursorNodeStart + cursorOffsetRelativeToOldCursorNode
      };
    } // diff old and new cursor node texts, with a special cursor
    // symbol inserted to find out where it moves to


    var oldCursorNodeCharArray = oldCursorNodeText.split("");
    oldCursorNodeCharArray.splice(cursorOffsetRelativeToOldCursorNode, 0, CURSOR);
    var newCursorNodeCharArray = newCursorNodeText.split("");
    var cursorNodeDiff = lib.diffArrays(oldCursorNodeCharArray, newCursorNodeCharArray);
    var cursorOffset = newCursorNodeStart;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cursorNodeDiff[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        if (entry.removed) {
          if (entry.value.indexOf(CURSOR) > -1) {
            break;
          }
        } else {
          cursorOffset += entry.count;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return {
      formatted: result.formatted,
      cursorOffset: cursorOffset
    };
  }

  return {
    formatted: result.formatted
  };
}

function formatRange(text, opts) {
  var parsed = parser.parse(text, opts);
  var ast = parsed.ast;
  text = parsed.text;
  var range = rangeUtil.calculateRange(text, opts, ast);
  var rangeStart = range.rangeStart;
  var rangeEnd = range.rangeEnd;
  var rangeString = text.slice(rangeStart, rangeEnd); // Try to extend the range backwards to the beginning of the line.
  // This is so we can detect indentation correctly and restore it.
  // Use `Math.min` since `lastIndexOf` returns 0 when `rangeStart` is 0

  var rangeStart2 = Math.min(rangeStart, text.lastIndexOf("\n", rangeStart) + 1);
  var indentString = text.slice(rangeStart2, rangeStart);
  var alignmentSize = util.getAlignmentSize(indentString, opts.tabWidth);
  var rangeResult = coreFormat(rangeString, Object.assign({}, opts, {
    rangeStart: 0,
    rangeEnd: Infinity,
    printWidth: opts.printWidth - alignmentSize,
    // track the cursor offset only if it's within our range
    cursorOffset: opts.cursorOffset >= rangeStart && opts.cursorOffset < rangeEnd ? opts.cursorOffset - rangeStart : -1
  }), alignmentSize); // Since the range contracts to avoid trailing whitespace,
  // we need to remove the newline that was inserted by the `format` call.

  var rangeTrimmed = rangeResult.formatted.trimRight();
  var formatted = text.slice(0, rangeStart) + rangeTrimmed + text.slice(rangeEnd);
  var cursorOffset = opts.cursorOffset;

  if (opts.cursorOffset >= rangeEnd) {
    // handle the case where the cursor was past the end of the range
    cursorOffset = opts.cursorOffset - rangeEnd + (rangeStart + rangeTrimmed.length);
  } else if (rangeResult.cursorOffset !== undefined) {
    // handle the case where the cursor was in the range
    cursorOffset = rangeResult.cursorOffset + rangeStart;
  } // keep the cursor as it was if it was before the start of the range


  return {
    formatted: formatted,
    cursorOffset: cursorOffset
  };
}

function format(text, opts) {
  var selectedParser = parser.resolveParser(opts);
  var hasPragma = !selectedParser.hasPragma || selectedParser.hasPragma(text);

  if (opts.requirePragma && !hasPragma) {
    return {
      formatted: text
    };
  }

  if (opts.rangeStart > 0 || opts.rangeEnd < text.length) {
    return formatRange(text, opts);
  }

  var hasUnicodeBOM = text.charCodeAt(0) === UTF8BOM;

  if (hasUnicodeBOM) {
    text = text.substring(1);
  }

  if (opts.insertPragma && opts.printer.insertPragma && !hasPragma) {
    text = opts.printer.insertPragma(text);
  }

  var result = coreFormat(text, opts);

  if (hasUnicodeBOM) {
    result.formatted = String.fromCharCode(UTF8BOM) + result.formatted;
  }

  return result;
}

var core = {
  formatWithCursor: function formatWithCursor(text, opts) {
    opts = normalizeOptions(opts);
    return format(text, opts);
  },
  parse: function parse(text, opts, massage) {
    opts = normalizeOptions(opts);
    var parsed = parser.parse(text, opts);

    if (massage) {
      parsed.ast = massageAst(parsed.ast, opts);
    }

    return parsed;
  },
  formatAST: function formatAST(ast, opts) {
    opts = normalizeOptions(opts);
    var doc$$1 = astToDoc(ast, opts);
    return _printDocToString(doc$$1, opts);
  },
  // Doesn't handle shebang for now
  formatDoc: function formatDoc(doc$$1, opts) {
    var debug = printDocToDebug(doc$$1);
    opts = normalizeOptions(Object.assign({}, opts, {
      parser: "babylon"
    }));
    return format(debug, opts).formatted;
  },
  printToDoc: function printToDoc(text, opts) {
    opts = normalizeOptions(opts);
    var parsed = parser.parse(text, opts);
    var ast = parsed.ast;
    text = parsed.text;
    attachComments(text, ast, opts);
    return astToDoc(ast, opts);
  },
  printDocToString: function printDocToString(doc$$1, opts) {
    return _printDocToString(doc$$1, normalizeOptions(opts));
  }
};

var index$11 = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];

var htmlTagNames = Object.freeze({
	default: index$11
});

var htmlTagNames$1 = ( htmlTagNames && index$11 ) || htmlTagNames;

function clean(ast, newObj, parent) {
  ["raw", // front-matter
  "raws", "sourceIndex", "source", "before", "after", "trailingComma"].forEach(function (name) {
    delete newObj[name];
  });

  if (ast.type === "yaml") {
    delete newObj.value;
  } // --insert-pragma


  if (ast.type === "css-comment" && parent.type === "css-root" && parent.nodes.length !== 0 && ( // first non-front-matter comment
  parent.nodes[0] === ast || (parent.nodes[0].type === "yaml" || parent.nodes[0].type === "toml") && parent.nodes[1] === ast)) {
    /**
     * something
     *
     * @format
     */
    delete newObj.text; // standalone pragma

    if (/^\*\s*@(format|prettier)\s*$/.test(ast.text)) {
      return null;
    }
  }

  if (ast.type === "media-query" || ast.type === "media-query-list" || ast.type === "media-feature-expression") {
    delete newObj.value;
  }

  if (ast.type === "css-rule") {
    delete newObj.params;
  }

  if (ast.type === "selector-combinator") {
    newObj.value = newObj.value.replace(/\s+/g, " ");
  }

  if (ast.type === "media-feature") {
    newObj.value = newObj.value.replace(/ /g, "");
  }

  if (ast.type === "value-word" && (ast.isColor && ast.isHex || ["initial", "inherit", "unset", "revert"].indexOf(newObj.value.replace().toLowerCase()) !== -1) || ast.type === "media-feature" || ast.type === "selector-root-invalid" || ast.type === "selector-pseudo") {
    newObj.value = newObj.value.toLowerCase();
  }

  if (ast.type === "css-decl") {
    newObj.prop = newObj.prop.toLowerCase();
  }

  if (ast.type === "css-atrule" || ast.type === "css-import") {
    newObj.name = newObj.name.toLowerCase();
  }

  if (ast.type === "value-number") {
    newObj.unit = newObj.unit.toLowerCase();
  }

  if ((ast.type === "media-feature" || ast.type === "media-keyword" || ast.type === "media-type" || ast.type === "media-unknown" || ast.type === "media-url" || ast.type === "media-value" || ast.type === "selector-attribute" || ast.type === "selector-string" || ast.type === "selector-class" || ast.type === "selector-combinator" || ast.type === "value-string") && newObj.value) {
    newObj.value = cleanCSSStrings(newObj.value);
  }

  if (ast.type === "selector-attribute") {
    newObj.attribute = newObj.attribute.trim();

    if (newObj.namespace) {
      if (typeof newObj.namespace === "string") {
        newObj.namespace = newObj.namespace.trim();

        if (newObj.namespace.length === 0) {
          newObj.namespace = true;
        }
      }
    }

    if (newObj.value) {
      newObj.value = newObj.value.trim().replace(/^['"]|['"]$/g, "");
      delete newObj.quoted;
    }
  }

  if ((ast.type === "media-value" || ast.type === "media-type" || ast.type === "value-number" || ast.type === "selector-root-invalid" || ast.type === "selector-class" || ast.type === "selector-combinator" || ast.type === "selector-tag") && newObj.value) {
    newObj.value = newObj.value.replace(/([\d.eE+-]+)([a-zA-Z]*)/g, function (match, numStr, unit) {
      var num = Number(numStr);
      return isNaN(num) ? match : num + unit.toLowerCase();
    });
  }

  if (ast.type === "selector-tag") {
    var lowercasedValue = ast.value.toLowerCase();

    if (htmlTagNames$1.indexOf(lowercasedValue) !== -1) {
      newObj.value = lowercasedValue;
    }

    if (["from", "to"].indexOf(lowercasedValue) !== -1) {
      newObj.value = lowercasedValue;
    }
  } // Workaround when `postcss-values-parser` parse `not`, `and` or `or` keywords as `value-func`


  if (ast.type === "css-atrule" && ast.name.toLowerCase() === "supports") {
    delete newObj.value;
  } // Workaround for SCSS nested properties


  if (ast.type === "selector-unknown") {
    delete newObj.value;
  }
}

function cleanCSSStrings(value) {
  return value.replace(/'/g, '"').replace(/\\([^a-fA-F\d])/g, "$1");
}

var clean_1 = clean;

var _require$$0$builders$1 = doc.builders;
var hardline$4 = _require$$0$builders$1.hardline;
var literalline$1 = _require$$0$builders$1.literalline;
var concat$5 = _require$$0$builders$1.concat;
var markAsRoot$1 = _require$$0$builders$1.markAsRoot;
var mapDoc$2 = doc.utils.mapDoc;

function embed(path, print, textToDoc
/*, options */
) {
  var node = path.getValue();

  if (node.type === "yaml") {
    return markAsRoot$1(concat$5(["---", hardline$4, node.value.trim() ? replaceNewlinesWithLiterallines(textToDoc(node.value, {
      parser: "yaml"
    })) : "", "---", hardline$4]));
  }

  return null;

  function replaceNewlinesWithLiterallines(doc$$2) {
    return mapDoc$2(doc$$2, function (currentDoc) {
      return typeof currentDoc === "string" && currentDoc.includes("\n") ? concat$5(currentDoc.split(/(\n)/g).map(function (v, i) {
        return i % 2 === 0 ? v : literalline$1;
      })) : currentDoc;
    });
  }
}

var embed_1 = embed;

var detectNewline = createCommonjsModule(function (module) {
  'use strict';

  module.exports = function (str) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string');
    }

    var newlines = str.match(/(?:\r?\n)/g) || [];

    if (newlines.length === 0) {
      return null;
    }

    var crlf = newlines.filter(function (el) {
      return el === '\r\n';
    }).length;
    var lf = newlines.length - crlf;
    return crlf > lf ? '\r\n' : '\n';
  };

  module.exports.graceful = function (str) {
    return module.exports(str) || '\n';
  };
});

var build$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.extract = extract;
  exports.strip = strip;
  exports.parse = parse;
  exports.parseWithComments = parseWithComments;
  exports.print = print;

  var _detectNewline;

  function _load_detectNewline() {
    return _detectNewline = _interopRequireDefault(detectNewline);
  }

  var _os;

  function _load_os() {
    return _os = require$$1$1;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   *
   */


  var commentEndRe = /\*\/$/;
  var commentStartRe = /^\/\*\*/;
  var docblockRe = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
  var lineCommentRe = /(^|\s+)\/\/([^\r\n]*)/g;
  var ltrimNewlineRe = /^(\r?\n)+/;
  var multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
  var propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
  var stringStartRe = /(\r?\n|^) *\* ?/g;

  function extract(contents) {
    var match = contents.match(docblockRe);
    return match ? match[0].trimLeft() : '';
  }

  function strip(contents) {
    var match = contents.match(docblockRe);
    return match && match[0] ? contents.substring(match[0].length) : contents;
  }

  function parse(docblock) {
    return parseWithComments(docblock).pragmas;
  }

  function parseWithComments(docblock) {
    var line = (0, (_detectNewline || _load_detectNewline()).default)(docblock) || (_os || _load_os()).EOL;

    docblock = docblock.replace(commentStartRe, '').replace(commentEndRe, '').replace(stringStartRe, '$1'); // Normalize multi-line directives

    var prev = '';

    while (prev !== docblock) {
      prev = docblock;
      docblock = docblock.replace(multilineRe, "".concat(line, "$1 $2").concat(line));
    }

    docblock = docblock.replace(ltrimNewlineRe, '').trimRight();
    var result = Object.create(null);
    var comments = docblock.replace(propertyRe, '').replace(ltrimNewlineRe, '').trimRight();
    var match;

    while (match = propertyRe.exec(docblock)) {
      // strip linecomments from pragmas
      var nextPragma = match[2].replace(lineCommentRe, '');

      if (typeof result[match[1]] === 'string' || Array.isArray(result[match[1]])) {
        result[match[1]] = [].concat(result[match[1]], nextPragma);
      } else {
        result[match[1]] = nextPragma;
      }
    }

    return {
      comments: comments,
      pragmas: result
    };
  }

  function print(_ref) {
    var _ref$comments = _ref.comments;
    var comments = _ref$comments === undefined ? '' : _ref$comments;
    var _ref$pragmas = _ref.pragmas;
    var pragmas = _ref$pragmas === undefined ? {} : _ref$pragmas;

    var line = (0, (_detectNewline || _load_detectNewline()).default)(comments) || (_os || _load_os()).EOL;

    var head = '/**';
    var start = ' *';
    var tail = ' */';
    var keys = Object.keys(pragmas);
    var printedObject = keys.map(function (key) {
      return printKeyValues(key, pragmas[key]);
    }).reduce(function (arr, next) {
      return arr.concat(next);
    }, []).map(function (keyValue) {
      return start + ' ' + keyValue + line;
    }).join('');

    if (!comments) {
      if (keys.length === 0) {
        return '';
      }

      if (keys.length === 1 && !Array.isArray(pragmas[keys[0]])) {
        var value = pragmas[keys[0]];
        return "".concat(head, " ").concat(printKeyValues(keys[0], value)[0]).concat(tail);
      }
    }

    var printedComments = comments.split(line).map(function (textLine) {
      return "".concat(start, " ").concat(textLine);
    }).join(line) + line;
    return head + line + (comments ? printedComments : '') + (comments && keys.length ? start + line : '') + printedObject + tail;
  }

  function printKeyValues(key, valueOrArray) {
    return [].concat(valueOrArray).map(function (value) {
      return "@".concat(key, " ").concat(value).trim();
    });
  }
});
unwrapExports(build$1);

function hasPragma$1(text) {
  var pragmas = Object.keys(build$1.parse(build$1.extract(text)));
  return pragmas.indexOf("prettier") !== -1 || pragmas.indexOf("format") !== -1;
}

function insertPragma$2(text) {
  var parsedDocblock = build$1.parseWithComments(build$1.extract(text));
  var pragmas = Object.assign({
    format: ""
  }, parsedDocblock.pragmas);
  var newDocblock = build$1.print({
    pragmas: pragmas,
    comments: parsedDocblock.comments.replace(/^(\s+?\r?\n)+/, "") // remove leading newlines

  }).replace(/(\r\n|\r)/g, "\n"); // normalise newlines (mitigate use of os.EOL by jest-docblock)

  var strippedText = build$1.strip(text);
  var separatingNewlines = strippedText.startsWith("\n") ? "\n" : "\n\n";
  return newDocblock + separatingNewlines + strippedText;
}

var pragma$2 = {
  hasPragma: hasPragma$1,
  insertPragma: insertPragma$2
};

var DELIMITER_MAP = {
  "---": "yaml",
  "+++": "toml"
};

function parse$3(text) {
  var delimiterRegex = Object.keys(DELIMITER_MAP).map(escapeStringRegexp).join("|");
  var match = text.match( // trailing spaces after delimiters are allowed
  new RegExp("^(".concat(delimiterRegex, ")[^\\n\\S]*\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));

  if (match === null) {
    return {
      frontMatter: null,
      content: text
    };
  }

  var raw = match[0].replace(/\n$/, "");
  var delimiter = match[1];
  var value = match[2];
  return {
    frontMatter: {
      type: DELIMITER_MAP[delimiter],
      value: value,
      raw: raw
    },
    content: match[0].replace(/[^\n]/g, " ") + text.slice(match[0].length)
  };
}

var frontMatter = parse$3;

function hasPragma(text) {
  return pragma$2.hasPragma(frontMatter(text).content);
}

function insertPragma$1(text) {
  var _parseFrontMatter = frontMatter(text),
      frontMatter$$1 = _parseFrontMatter.frontMatter,
      content = _parseFrontMatter.content;

  return (frontMatter$$1 ? frontMatter$$1.raw + "\n\n" : "") + pragma$2.insertPragma(content);
}

var pragma = {
  hasPragma: hasPragma,
  insertPragma: insertPragma$1
};

var colorAdjusterFunctions = ["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"];

function getAncestorCounter(path, typeOrTypes) {
  var types = [].concat(typeOrTypes);
  var counter = -1;
  var ancestorNode;

  while (ancestorNode = path.getParentNode(++counter)) {
    if (types.indexOf(ancestorNode.type) !== -1) {
      return counter;
    }
  }

  return -1;
}

function getAncestorNode$1(path, typeOrTypes) {
  var counter = getAncestorCounter(path, typeOrTypes);
  return counter === -1 ? null : path.getParentNode(counter);
}

function getPropOfDeclNode$1(path) {
  var declAncestorNode = getAncestorNode$1(path, "css-decl");
  return declAncestorNode && declAncestorNode.prop && declAncestorNode.prop.toLowerCase();
}

function isSCSS$1(parser, text) {
  var hasExplicitParserChoice = parser === "less" || parser === "scss";
  var IS_POSSIBLY_SCSS = /(\w\s*: [^}:]+|#){|@import[^\n]+(url|,)/;
  return hasExplicitParserChoice ? parser === "scss" : IS_POSSIBLY_SCSS.test(text);
}

function isWideKeywords$1(value) {
  return ["initial", "inherit", "unset", "revert"].indexOf(value.toLowerCase()) !== -1;
}

function isKeyframeAtRuleKeywords$1(path, value) {
  var atRuleAncestorNode = getAncestorNode$1(path, "css-atrule");
  return atRuleAncestorNode && atRuleAncestorNode.name && atRuleAncestorNode.name.toLowerCase().endsWith("keyframes") && ["from", "to"].indexOf(value.toLowerCase()) !== -1;
}

function maybeToLowerCase$1(value) {
  return value.includes("$") || value.includes("@") || value.includes("#") || value.startsWith("%") || value.startsWith("--") || value.startsWith(":--") || value.includes("(") && value.includes(")") ? value : value.toLowerCase();
}

function insideValueFunctionNode$1(path, functionName) {
  var funcAncestorNode = getAncestorNode$1(path, "value-func");
  return funcAncestorNode && funcAncestorNode.value && funcAncestorNode.value.toLowerCase() === functionName;
}

function insideICSSRuleNode$1(path) {
  var ruleAncestorNode = getAncestorNode$1(path, "css-rule");
  return ruleAncestorNode && ruleAncestorNode.raws && ruleAncestorNode.raws.selector && (ruleAncestorNode.raws.selector.startsWith(":import") || ruleAncestorNode.raws.selector.startsWith(":export"));
}

function insideAtRuleNode$1(path, atRuleNameOrAtRuleNames) {
  var atRuleNames = [].concat(atRuleNameOrAtRuleNames);
  var atRuleAncestorNode = getAncestorNode$1(path, "css-atrule");
  return atRuleAncestorNode && atRuleNames.indexOf(atRuleAncestorNode.name.toLowerCase()) !== -1;
}

function insideURLFunctionInImportAtRuleNode$1(path) {
  var node = path.getValue();
  var atRuleAncestorNode = getAncestorNode$1(path, "css-atrule");
  return atRuleAncestorNode && atRuleAncestorNode.name === "import" && node.groups[0].value === "url" && node.groups.length === 2;
}

function isURLFunctionNode$1(node) {
  return node.type === "value-func" && node.value.toLowerCase() === "url";
}

function isLastNode$1(path, node) {
  var parentNode = path.getParentNode();

  if (!parentNode) {
    return false;
  }

  var nodes = parentNode.nodes;
  return nodes && nodes.indexOf(node) === nodes.length - 1;
}

function isHTMLTag$1(value) {
  return htmlTagNames$1.indexOf(value.toLowerCase()) !== -1;
}

function isDetachedRulesetDeclarationNode$1(node) {
  // If a Less file ends up being parsed with the SCSS parser, Less
  // variable declarations will be parsed as atrules with names ending
  // with a colon, so keep the original case then.
  if (!node.selector) {
    return false;
  }

  return typeof node.selector === "string" && /^@.+:.*$/.test(node.selector) || node.selector.value && /^@.+:.*$/.test(node.selector.value);
}

function isForKeywordNode$1(node) {
  return node.type === "value-word" && ["from", "through", "end"].indexOf(node.value) !== -1;
}

function isIfElseKeywordNode$1(node) {
  return node.type === "value-word" && ["and", "or", "not"].indexOf(node.value) !== -1;
}

function isEachKeywordNode$1(node) {
  return node.type === "value-word" && node.value === "in";
}

function isMultiplicationNode$1(node) {
  return node.type === "value-operator" && node.value === "*";
}

function isDivisionNode$1(node) {
  return node.type === "value-operator" && node.value === "/";
}

function isAdditionNode$1(node) {
  return node.type === "value-operator" && node.value === "+";
}

function isSubtractionNode$1(node) {
  return node.type === "value-operator" && node.value === "-";
}

function isModuloNode(node) {
  return node.type === "value-operator" && node.value === "%";
}

function isMathOperatorNode$1(node) {
  return isMultiplicationNode$1(node) || isDivisionNode$1(node) || isAdditionNode$1(node) || isSubtractionNode$1(node) || isModuloNode(node);
}

function isEqualityOperatorNode$1(node) {
  return node.type === "value-word" && ["==", "!="].indexOf(node.value) !== -1;
}

function isRelationalOperatorNode$1(node) {
  return node.type === "value-word" && ["<", ">", "<=", ">="].indexOf(node.value) !== -1;
}

function isSCSSControlDirectiveNode$1(node) {
  return node.type === "css-atrule" && ["if", "else", "for", "each", "while"].indexOf(node.name) !== -1;
}

function isSCSSNestedPropertyNode(node) {
  if (!node.selector) {
    return false;
  }

  return node.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
}

function isDetachedRulesetCallNode$1(node) {
  return node.raws && node.raws.params && /^\(\s*\)$/.test(node.raws.params);
}

function isTemplatePlaceholderNode$1(node) {
  return node.name.startsWith("prettier-placeholder");
}

function isTemplatePropNode$1(node) {
  return node.prop.startsWith("@prettier-placeholder");
}

function isPostcssSimpleVarNode$1(currentNode, nextNode) {
  return currentNode.value === "$$" && currentNode.type === "value-func" && nextNode && nextNode.type === "value-word" && !nextNode.raws.before;
}

function hasComposesNode$1(node) {
  return node.value && node.value.type === "value-root" && node.value.group && node.value.group.type === "value-value" && node.prop.toLowerCase() === "composes";
}

function hasParensAroundNode$1(node) {
  return node.value && node.value.group && node.value.group.group && node.value.group.group.type === "value-paren_group" && node.value.group.group.open !== null && node.value.group.group.close !== null;
}

function hasEmptyRawBefore$1(node) {
  return node.raws && node.raws.before === "";
}

function isKeyValuePairNode$1(node) {
  return node.type === "value-comma_group" && node.groups && node.groups[1] && node.groups[1].type === "value-colon";
}

function isKeyValuePairInParenGroupNode(node) {
  return node.type === "value-paren_group" && node.groups && node.groups[0] && isKeyValuePairNode$1(node.groups[0]);
}

function isSCSSMapItemNode$1(path) {
  var node = path.getValue(); // Ignore empty item (i.e. `$key: ()`)

  if (node.groups.length === 0) {
    return false;
  }

  var parentParentNode = path.getParentNode(1); // Check open parens contain key/value pair (i.e. `(key: value)` and `(key: (value, other-value)`)

  if (!isKeyValuePairInParenGroupNode(node) && !(parentParentNode && isKeyValuePairInParenGroupNode(parentParentNode))) {
    return false;
  }

  var declNode = getAncestorNode$1(path, "css-decl"); // SCSS map declaration (i.e. `$map: (key: value, other-key: other-value)`)

  if (declNode && declNode.prop && declNode.prop.startsWith("$")) {
    return true;
  } // List as value of key inside SCSS map (i.e. `$map: (key: (value other-value other-other-value))`)


  if (isKeyValuePairInParenGroupNode(parentParentNode)) {
    return true;
  } // SCSS Map is argument of function (i.e. `func((key: value, other-key: other-value))`)


  if (parentParentNode.type === "value-func") {
    return true;
  }

  return false;
}

function isInlineValueCommentNode$1(node) {
  return node.type === "value-comment" && node.inline;
}

function isHashNode$1(node) {
  return node.type === "value-word" && node.value === "#";
}

function isLeftCurlyBraceNode$1(node) {
  return node.type === "value-word" && node.value === "{";
}

function isRightCurlyBraceNode$1(node) {
  return node.type === "value-word" && node.value === "}";
}

function isWordNode$1(node) {
  return ["value-word", "value-atword"].indexOf(node.type) !== -1;
}

function isColonNode$1(node) {
  return node.type === "value-colon";
}

function isMediaAndSupportsKeywords$1(node) {
  return node.value && ["not", "and", "or"].indexOf(node.value.toLowerCase()) !== -1;
}

function isColorAdjusterFuncNode$1(node) {
  if (node.type !== "value-func") {
    return false;
  }

  return colorAdjusterFunctions.indexOf(node.value.toLowerCase()) !== -1;
}

var utils$4 = {
  getAncestorCounter: getAncestorCounter,
  getAncestorNode: getAncestorNode$1,
  getPropOfDeclNode: getPropOfDeclNode$1,
  maybeToLowerCase: maybeToLowerCase$1,
  insideValueFunctionNode: insideValueFunctionNode$1,
  insideICSSRuleNode: insideICSSRuleNode$1,
  insideAtRuleNode: insideAtRuleNode$1,
  insideURLFunctionInImportAtRuleNode: insideURLFunctionInImportAtRuleNode$1,
  isKeyframeAtRuleKeywords: isKeyframeAtRuleKeywords$1,
  isHTMLTag: isHTMLTag$1,
  isWideKeywords: isWideKeywords$1,
  isSCSS: isSCSS$1,
  isLastNode: isLastNode$1,
  isSCSSControlDirectiveNode: isSCSSControlDirectiveNode$1,
  isDetachedRulesetDeclarationNode: isDetachedRulesetDeclarationNode$1,
  isRelationalOperatorNode: isRelationalOperatorNode$1,
  isEqualityOperatorNode: isEqualityOperatorNode$1,
  isMultiplicationNode: isMultiplicationNode$1,
  isDivisionNode: isDivisionNode$1,
  isAdditionNode: isAdditionNode$1,
  isSubtractionNode: isSubtractionNode$1,
  isModuloNode: isModuloNode,
  isMathOperatorNode: isMathOperatorNode$1,
  isEachKeywordNode: isEachKeywordNode$1,
  isForKeywordNode: isForKeywordNode$1,
  isURLFunctionNode: isURLFunctionNode$1,
  isIfElseKeywordNode: isIfElseKeywordNode$1,
  hasComposesNode: hasComposesNode$1,
  hasParensAroundNode: hasParensAroundNode$1,
  hasEmptyRawBefore: hasEmptyRawBefore$1,
  isSCSSNestedPropertyNode: isSCSSNestedPropertyNode,
  isDetachedRulesetCallNode: isDetachedRulesetCallNode$1,
  isTemplatePlaceholderNode: isTemplatePlaceholderNode$1,
  isTemplatePropNode: isTemplatePropNode$1,
  isPostcssSimpleVarNode: isPostcssSimpleVarNode$1,
  isKeyValuePairNode: isKeyValuePairNode$1,
  isKeyValuePairInParenGroupNode: isKeyValuePairInParenGroupNode,
  isSCSSMapItemNode: isSCSSMapItemNode$1,
  isInlineValueCommentNode: isInlineValueCommentNode$1,
  isHashNode: isHashNode$1,
  isLeftCurlyBraceNode: isLeftCurlyBraceNode$1,
  isRightCurlyBraceNode: isRightCurlyBraceNode$1,
  isWordNode: isWordNode$1,
  isColonNode: isColonNode$1,
  isMediaAndSupportsKeywords: isMediaAndSupportsKeywords$1,
  isColorAdjusterFuncNode: isColorAdjusterFuncNode$1
};

var insertPragma = pragma.insertPragma;
var printNumber$1 = util.printNumber;
var printString$1 = util.printString;
var hasIgnoreComment$1 = util.hasIgnoreComment;
var hasNewline$2 = util.hasNewline;
var isNextLineEmpty$2 = utilShared.isNextLineEmpty;
var _require$$3$builders = doc.builders;
var concat$4 = _require$$3$builders.concat;
var join$2 = _require$$3$builders.join;
var line$3 = _require$$3$builders.line;
var hardline$3 = _require$$3$builders.hardline;
var softline$1 = _require$$3$builders.softline;
var group$1 = _require$$3$builders.group;
var fill$2 = _require$$3$builders.fill;
var indent$2 = _require$$3$builders.indent;
var dedent$2 = _require$$3$builders.dedent;
var ifBreak$1 = _require$$3$builders.ifBreak;
var removeLines$1 = doc.utils.removeLines;
var getAncestorNode = utils$4.getAncestorNode;
var getPropOfDeclNode = utils$4.getPropOfDeclNode;
var maybeToLowerCase = utils$4.maybeToLowerCase;
var insideValueFunctionNode = utils$4.insideValueFunctionNode;
var insideICSSRuleNode = utils$4.insideICSSRuleNode;
var insideAtRuleNode = utils$4.insideAtRuleNode;
var insideURLFunctionInImportAtRuleNode = utils$4.insideURLFunctionInImportAtRuleNode;
var isKeyframeAtRuleKeywords = utils$4.isKeyframeAtRuleKeywords;
var isHTMLTag = utils$4.isHTMLTag;
var isWideKeywords = utils$4.isWideKeywords;
var isSCSS = utils$4.isSCSS;
var isLastNode = utils$4.isLastNode;
var isSCSSControlDirectiveNode = utils$4.isSCSSControlDirectiveNode;
var isDetachedRulesetDeclarationNode = utils$4.isDetachedRulesetDeclarationNode;
var isRelationalOperatorNode = utils$4.isRelationalOperatorNode;
var isEqualityOperatorNode = utils$4.isEqualityOperatorNode;
var isMultiplicationNode = utils$4.isMultiplicationNode;
var isDivisionNode = utils$4.isDivisionNode;
var isAdditionNode = utils$4.isAdditionNode;
var isSubtractionNode = utils$4.isSubtractionNode;
var isMathOperatorNode = utils$4.isMathOperatorNode;
var isEachKeywordNode = utils$4.isEachKeywordNode;
var isForKeywordNode = utils$4.isForKeywordNode;
var isURLFunctionNode = utils$4.isURLFunctionNode;
var isIfElseKeywordNode = utils$4.isIfElseKeywordNode;
var hasComposesNode = utils$4.hasComposesNode;
var hasParensAroundNode = utils$4.hasParensAroundNode;
var hasEmptyRawBefore = utils$4.hasEmptyRawBefore;
var isKeyValuePairNode = utils$4.isKeyValuePairNode;
var isDetachedRulesetCallNode = utils$4.isDetachedRulesetCallNode;
var isTemplatePlaceholderNode = utils$4.isTemplatePlaceholderNode;
var isTemplatePropNode = utils$4.isTemplatePropNode;
var isPostcssSimpleVarNode = utils$4.isPostcssSimpleVarNode;
var isSCSSMapItemNode = utils$4.isSCSSMapItemNode;
var isInlineValueCommentNode = utils$4.isInlineValueCommentNode;
var isHashNode = utils$4.isHashNode;
var isLeftCurlyBraceNode = utils$4.isLeftCurlyBraceNode;
var isRightCurlyBraceNode = utils$4.isRightCurlyBraceNode;
var isWordNode = utils$4.isWordNode;
var isColonNode = utils$4.isColonNode;
var isMediaAndSupportsKeywords = utils$4.isMediaAndSupportsKeywords;
var isColorAdjusterFuncNode = utils$4.isColorAdjusterFuncNode;

function shouldPrintComma(options) {
  switch (options.trailingComma) {
    case "all":
    case "es5":
      return true;

    case "none":
    default:
      return false;
  }
}

function genericPrint(path, options, print) {
  var node = path.getValue();
  /* istanbul ignore if */

  if (!node) {
    return "";
  }

  if (typeof node === "string") {
    return node;
  }

  switch (node.type) {
    case "yaml":
    case "toml":
      return concat$4([node.raw, hardline$3]);

    case "css-root":
      {
        var nodes = printNodeSequence(path, options, print);

        if (nodes.parts.length) {
          return concat$4([nodes, hardline$3]);
        }

        return nodes;
      }

    case "css-comment":
      {
        if (node.raws.content) {
          return node.raws.content // there's a bug in the less parser that trailing `\r`s are included in inline comments
          .replace(/^(\/\/[^]+)\r+$/, "$1");
        }

        var text = options.originalText.slice(options.locStart(node), options.locEnd(node));
        var rawText = node.raws.text || node.text; // Workaround a bug where the location is off.
        // https://github.com/postcss/postcss-scss/issues/63

        if (text.indexOf(rawText) === -1) {
          if (node.raws.inline) {
            return concat$4(["// ", rawText]);
          }

          return concat$4(["/* ", rawText, " */"]);
        }

        return text;
      }

    case "css-rule":
      {
        return concat$4([path.call(print, "selector"), node.important ? " !important" : "", node.nodes ? concat$4([" {", node.nodes.length > 0 ? indent$2(concat$4([hardline$3, printNodeSequence(path, options, print)])) : "", hardline$3, "}", isDetachedRulesetDeclarationNode(node) ? ";" : ""]) : ";"]);
      }

    case "css-decl":
      {
        var parentNode = path.getParentNode();
        return concat$4([node.raws.before.replace(/[\s;]/g, ""), insideICSSRuleNode(path) ? node.prop : maybeToLowerCase(node.prop), node.raws.between.trim() === ":" ? ":" : node.raws.between.trim(), node.extend ? "" : " ", hasComposesNode(node) ? removeLines$1(path.call(print, "value")) : path.call(print, "value"), node.raws.important ? node.raws.important.replace(/\s*!\s*important/i, " !important") : node.important ? " !important" : "", node.raws.scssDefault ? node.raws.scssDefault.replace(/\s*!default/i, " !default") : node.scssDefault ? " !default" : "", node.raws.scssGlobal ? node.raws.scssGlobal.replace(/\s*!global/i, " !global") : node.scssGlobal ? " !global" : "", node.nodes ? concat$4([" {", indent$2(concat$4([softline$1, printNodeSequence(path, options, print)])), softline$1, "}"]) : isTemplatePropNode(node) && !parentNode.raws.semicolon && options.originalText[options.locEnd(node) - 1] !== ";" ? "" : ";"]);
      }

    case "css-atrule":
      {
        var _parentNode = path.getParentNode();

        return concat$4(["@", // If a Less file ends up being parsed with the SCSS parser, Less
        // variable declarations will be parsed as at-rules with names ending
        // with a colon, so keep the original case then.
        isDetachedRulesetCallNode(node) || node.name.endsWith(":") ? node.name : maybeToLowerCase(node.name), node.params ? concat$4([isDetachedRulesetCallNode(node) ? "" : isTemplatePlaceholderNode(node) ? node.raws.afterName : " ", path.call(print, "params")]) : "", node.selector ? indent$2(concat$4([" ", path.call(print, "selector")])) : "", node.value ? group$1(concat$4([" ", path.call(print, "value"), isSCSSControlDirectiveNode(node) ? hasParensAroundNode(node) ? " " : line$3 : ""])) : node.name === "else" ? " " : "", node.nodes ? concat$4([isSCSSControlDirectiveNode(node) ? "" : " ", "{", indent$2(concat$4([node.nodes.length > 0 ? softline$1 : "", printNodeSequence(path, options, print)])), softline$1, "}"]) : isTemplatePlaceholderNode(node) && !_parentNode.raws.semicolon && options.originalText[options.locEnd(node) - 1] !== ";" ? "" : ";"]);
      }
    // postcss-media-query-parser

    case "media-query-list":
      {
        var parts = [];
        path.each(function (childPath) {
          var node = childPath.getValue();

          if (node.type === "media-query" && node.value === "") {
            return;
          }

          parts.push(childPath.call(print));
        }, "nodes");
        return group$1(indent$2(join$2(line$3, parts)));
      }

    case "media-query":
      {
        return concat$4([join$2(" ", path.map(print, "nodes")), isLastNode(path, node) ? "" : ","]);
      }

    case "media-type":
      {
        return adjustNumbers(adjustStrings(node.value, options));
      }

    case "media-feature-expression":
      {
        if (!node.nodes) {
          return node.value;
        }

        return concat$4(["(", concat$4(path.map(print, "nodes")), ")"]);
      }

    case "media-feature":
      {
        return maybeToLowerCase(adjustStrings(node.value.replace(/ +/g, " "), options));
      }

    case "media-colon":
      {
        return concat$4([node.value, " "]);
      }

    case "media-value":
      {
        return adjustNumbers(adjustStrings(node.value, options));
      }

    case "media-keyword":
      {
        return adjustStrings(node.value, options);
      }

    case "media-url":
      {
        return adjustStrings(node.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), options);
      }

    case "media-unknown":
      {
        return node.value;
      }
    // postcss-selector-parser

    case "selector-root":
      {
        return group$1(concat$4([insideAtRuleNode(path, "custom-selector") ? concat$4([getAncestorNode(path, "css-atrule").customSelector, line$3]) : "", join$2(concat$4([",", insideAtRuleNode(path, ["extend", "custom-selector", "nest"]) ? line$3 : hardline$3]), path.map(print, "nodes"))]));
      }

    case "selector-selector":
      {
        return group$1(indent$2(concat$4(path.map(print, "nodes"))));
      }

    case "selector-comment":
      {
        return node.value;
      }

    case "selector-string":
      {
        return adjustStrings(node.value, options);
      }

    case "selector-tag":
      {
        var _parentNode2 = path.getParentNode();

        var index = _parentNode2 && _parentNode2.nodes.indexOf(node);

        var prevNode = index && _parentNode2.nodes[index - 1];
        return concat$4([node.namespace ? concat$4([node.namespace === true ? "" : node.namespace.trim(), "|"]) : "", prevNode.type === "selector-nesting" ? node.value : adjustNumbers(isHTMLTag(node.value) || isKeyframeAtRuleKeywords(path, node.value) ? node.value.toLowerCase() : node.value)]);
      }

    case "selector-id":
      {
        return concat$4(["#", node.value]);
      }

    case "selector-class":
      {
        return concat$4([".", adjustNumbers(adjustStrings(node.value, options))]);
      }

    case "selector-attribute":
      {
        return concat$4(["[", node.namespace ? concat$4([node.namespace === true ? "" : node.namespace.trim(), "|"]) : "", node.attribute.trim(), node.operator ? node.operator : "", node.value ? quoteAttributeValue(adjustStrings(node.value.trim(), options), options) : "", node.insensitive ? " i" : "", "]"]);
      }

    case "selector-combinator":
      {
        if (node.value === "+" || node.value === ">" || node.value === "~" || node.value === ">>>") {
          var _parentNode3 = path.getParentNode();

          var _leading = _parentNode3.type === "selector-selector" && _parentNode3.nodes[0] === node ? "" : line$3;

          return concat$4([_leading, node.value, isLastNode(path, node) ? "" : " "]);
        }

        var leading = node.value.trim().startsWith("(") ? line$3 : "";
        var value = adjustNumbers(adjustStrings(node.value.trim(), options)) || line$3;
        return concat$4([leading, value]);
      }

    case "selector-universal":
      {
        return concat$4([node.namespace ? concat$4([node.namespace === true ? "" : node.namespace.trim(), "|"]) : "", node.value]);
      }

    case "selector-pseudo":
      {
        return concat$4([maybeToLowerCase(node.value), node.nodes && node.nodes.length > 0 ? concat$4(["(", join$2(", ", path.map(print, "nodes")), ")"]) : ""]);
      }

    case "selector-nesting":
      {
        return node.value;
      }

    case "selector-unknown":
      {
        var ruleAncestorNode = getAncestorNode(path, "css-rule"); // Nested SCSS property

        if (ruleAncestorNode && ruleAncestorNode.isSCSSNesterProperty) {
          return adjustNumbers(adjustStrings(maybeToLowerCase(node.value), options));
        }

        return node.value;
      }
    // postcss-values-parser

    case "value-value":
    case "value-root":
      {
        return path.call(print, "group");
      }

    case "value-comment":
      {
        return concat$4([node.inline ? "//" : "/*", node.value, node.inline ? "" : "*/"]);
      }

    case "value-comma_group":
      {
        var _parentNode4 = path.getParentNode();

        var parentParentNode = path.getParentNode(1);
        var declAncestorProp = getPropOfDeclNode(path);
        var isGridValue = declAncestorProp && _parentNode4.type === "value-value" && (declAncestorProp === "grid" || declAncestorProp.startsWith("grid-template"));
        var atRuleAncestorNode = getAncestorNode(path, "css-atrule");
        var isControlDirective = atRuleAncestorNode && isSCSSControlDirectiveNode(atRuleAncestorNode);
        var printed = path.map(print, "groups");
        var _parts = [];
        var insideURLFunction = insideValueFunctionNode(path, "url");
        var insideSCSSInterpolationInString = false;
        var didBreak = false;

        for (var i = 0; i < node.groups.length; ++i) {
          _parts.push(printed[i]); // Ignore value inside `url()`


          if (insideURLFunction) {
            continue;
          }

          var iPrevNode = node.groups[i - 1];
          var iNode = node.groups[i];
          var iNextNode = node.groups[i + 1];
          var iNextNextNode = node.groups[i + 2]; // Ignore after latest node (i.e. before semicolon)

          if (!iNextNode) {
            continue;
          } // Ignore spaces before/after string interpolation (i.e. `"#{my-fn("_")}"`)


          var isStartSCSSinterpolationInString = iNode.type === "value-string" && iNode.value.startsWith("#{");
          var isEndingSCSSinterpolationInString = insideSCSSInterpolationInString && iNextNode.type === "value-string" && iNextNode.value.endsWith("}");

          if (isStartSCSSinterpolationInString || isEndingSCSSinterpolationInString) {
            insideSCSSInterpolationInString = !insideSCSSInterpolationInString;
            continue;
          }

          if (insideSCSSInterpolationInString) {
            continue;
          } // Ignore colon (i.e. `:`)


          if (isColonNode(iNode) || isColonNode(iNextNode)) {
            continue;
          } // Ignore `@` in Less (i.e. `@@var;`)


          if (iNode.type === "value-atword" && iNode.value === "") {
            continue;
          } // Ignore `~` in Less (i.e. `content: ~"^//* some horrible but needed css hack";`)


          if (iNode.value === "~") {
            continue;
          } // Ignore `\` (i.e. `$variable: \@small;`)


          if (iNode.value === "\\") {
            continue;
          } // Ignore `$$` (i.e. `background-color: $$(style)Color;`)


          if (isPostcssSimpleVarNode(iNode, iNextNode)) {
            continue;
          } // Ignore spaces after `#` and after `{` and before `}` in SCSS interpolation (i.e. `#{variable}`)


          if (isHashNode(iNode) || isLeftCurlyBraceNode(iNode) || isRightCurlyBraceNode(iNextNode) || isLeftCurlyBraceNode(iNextNode) && hasEmptyRawBefore(iNextNode) || isRightCurlyBraceNode(iNode) && hasEmptyRawBefore(iNextNode)) {
            continue;
          } // Ignore css variables and interpolation in SCSS (i.e. `--#{$var}`)


          if (iNode.value === "--" && isHashNode(iNextNode)) {
            continue;
          } // Formatting math operations


          var isMathOperator = isMathOperatorNode(iNode);
          var isNextMathOperator = isMathOperatorNode(iNextNode); // Print spaces before and after math operators beside SCSS interpolation as is
          // (i.e. `#{$var}+5`, `#{$var} +5`, `#{$var}+ 5`, `#{$var} + 5`)
          // (i.e. `5+#{$var}`, `5 +#{$var}`, `5+ #{$var}`, `5 + #{$var}`)

          if ((isMathOperator && isHashNode(iNextNode) || isNextMathOperator && isRightCurlyBraceNode(iNode)) && hasEmptyRawBefore(iNextNode)) {
            continue;
          } // Print spaces before and after addition and subtraction math operators as is in `calc` function
          // due to the fact that it is not valid syntax
          // (i.e. `calc(1px+1px)`, `calc(1px+ 1px)`, `calc(1px +1px)`, `calc(1px + 1px)`)


          if (insideValueFunctionNode(path, "calc") && (isAdditionNode(iNode) || isAdditionNode(iNextNode) || isSubtractionNode(iNode) || isSubtractionNode(iNextNode)) && hasEmptyRawBefore(iNextNode)) {
            continue;
          } // Print spaces after `+` and `-` in color adjuster functions as is (e.g. `color(red l(+ 20%))`)
          // Adjusters with signed numbers (e.g. `color(red l(+20%))`) output as-is.


          var isColorAdjusterNode = (isAdditionNode(iNode) || isSubtractionNode(iNode)) && i === 0 && (iNextNode.type === "value-number" || iNextNode.isHex) && parentParentNode && isColorAdjusterFuncNode(parentParentNode) && !hasEmptyRawBefore(iNextNode);
          var requireSpaceBeforeOperator = iNextNextNode && iNextNextNode.type === "value-func" || iNextNextNode && isWordNode(iNextNextNode) || iNode.type === "value-func" || isWordNode(iNode);
          var requireSpaceAfterOperator = iNextNode.type === "value-func" || isWordNode(iNextNode) || iPrevNode && iPrevNode.type === "value-func" || iPrevNode && isWordNode(iPrevNode); // Formatting `/`, `+`, `-` sign

          if (!(isMultiplicationNode(iNextNode) || isMultiplicationNode(iNode)) && !insideValueFunctionNode(path, "calc") && !isColorAdjusterNode && (isDivisionNode(iNextNode) && !requireSpaceBeforeOperator || isDivisionNode(iNode) && !requireSpaceAfterOperator || isAdditionNode(iNextNode) && !requireSpaceBeforeOperator || isAdditionNode(iNode) && !requireSpaceAfterOperator || isSubtractionNode(iNextNode) || isSubtractionNode(iNode)) && (hasEmptyRawBefore(iNextNode) || isMathOperator && (!iPrevNode || iPrevNode && isMathOperatorNode(iPrevNode)))) {
            continue;
          } // Ignore inline comment, they already contain newline at end (i.e. `// Comment`)
          // Add `hardline` after inline comment (i.e. `// comment\n foo: bar;`)


          var isInlineComment = isInlineValueCommentNode(iNode);

          if (iPrevNode && isInlineValueCommentNode(iPrevNode) || isInlineComment || isInlineValueCommentNode(iNextNode)) {
            if (isInlineComment) {
              _parts.push(hardline$3);
            }

            continue;
          } // Handle keywords in SCSS control directive


          if (isControlDirective && (isEqualityOperatorNode(iNextNode) || isRelationalOperatorNode(iNextNode) || isIfElseKeywordNode(iNextNode) || isEachKeywordNode(iNode) || isForKeywordNode(iNode))) {
            _parts.push(" ");

            continue;
          } // At-rule `namespace` should be in one line


          if (atRuleAncestorNode && atRuleAncestorNode.name.toLowerCase() === "namespace") {
            _parts.push(" ");

            continue;
          } // Formatting `grid` property


          if (isGridValue) {
            if (iNode.source.start.line !== iNextNode.source.start.line) {
              _parts.push(hardline$3);

              didBreak = true;
            } else {
              _parts.push(" ");
            }

            continue;
          } // Add `space` before next math operation
          // Note: `grip` property have `/` delimiter and it is not math operation, so
          // `grid` property handles above


          if (isNextMathOperator) {
            _parts.push(" ");

            continue;
          } // Be default all values go through `line`


          _parts.push(line$3);
        }

        if (didBreak) {
          _parts.unshift(hardline$3);
        }

        if (isControlDirective) {
          return group$1(indent$2(concat$4(_parts)));
        } // Indent is not needed for import url when url is very long
        // and node has two groups
        // when type is value-comma_group
        // example @import url("verylongurl") projection,tv


        if (insideURLFunctionInImportAtRuleNode(path)) {
          return group$1(fill$2(_parts));
        }

        return group$1(indent$2(fill$2(_parts)));
      }

    case "value-paren_group":
      {
        var _parentNode5 = path.getParentNode();

        if (_parentNode5 && isURLFunctionNode(_parentNode5) && (node.groups.length === 1 || node.groups.length > 0 && node.groups[0].type === "value-comma_group" && node.groups[0].groups.length > 0 && node.groups[0].groups[0].type === "value-word" && node.groups[0].groups[0].value.startsWith("data:"))) {
          return concat$4([node.open ? path.call(print, "open") : "", join$2(",", path.map(print, "groups")), node.close ? path.call(print, "close") : ""]);
        }

        if (!node.open) {
          var _printed = path.map(print, "groups");

          var res = [];

          for (var _i = 0; _i < _printed.length; _i++) {
            if (_i !== 0) {
              res.push(concat$4([",", line$3]));
            }

            res.push(_printed[_i]);
          }

          return group$1(indent$2(fill$2(res)));
        }

        var isSCSSMapItem = isSCSSMapItemNode(path);
        return group$1(concat$4([node.open ? path.call(print, "open") : "", indent$2(concat$4([softline$1, join$2(concat$4([",", line$3]), path.map(function (childPath) {
          var node = childPath.getValue();
          var printed = print(childPath); // Key/Value pair in open paren already indented

          if (isKeyValuePairNode(node) && node.type === "value-comma_group" && node.groups && node.groups[2] && node.groups[2].type === "value-paren_group") {
            printed.contents.contents.parts[1] = group$1(printed.contents.contents.parts[1]);
            return group$1(dedent$2(printed));
          }

          return printed;
        }, "groups"))])), ifBreak$1(isSCSS(options.parser, options.originalText) && isSCSSMapItem && shouldPrintComma(options) ? "," : ""), softline$1, node.close ? path.call(print, "close") : ""]), {
          shouldBreak: isSCSSMapItem
        });
      }

    case "value-func":
      {
        return concat$4([node.value, insideAtRuleNode(path, "supports") && isMediaAndSupportsKeywords(node) ? " " : "", path.call(print, "group")]);
      }

    case "value-paren":
      {
        return node.value;
      }

    case "value-number":
      {
        return concat$4([printCssNumber(node.value), maybeToLowerCase(node.unit)]);
      }

    case "value-operator":
      {
        return node.value;
      }

    case "value-word":
      {
        if (node.isColor && node.isHex || isWideKeywords(node.value)) {
          return node.value.toLowerCase();
        }

        return node.value;
      }

    case "value-colon":
      {
        return concat$4([node.value, // Don't add spaces on `:` in `url` function (i.e. `url(fbglyph: cross-outline, fig-white)`)
        insideValueFunctionNode(path, "url") ? "" : line$3]);
      }

    case "value-comma":
      {
        return concat$4([node.value, " "]);
      }

    case "value-string":
      {
        return printString$1(node.raws.quote + node.value + node.raws.quote, options);
      }

    case "value-atword":
      {
        return concat$4(["@", node.value]);
      }

    case "value-unicode-range":
      {
        return node.value;
      }

    case "value-unknown":
      {
        return node.value;
      }

    default:
      /* istanbul ignore next */
      throw new Error("Unknown postcss type ".concat(JSON.stringify(node.type)));
  }
}

function printNodeSequence(path, options, print) {
  var node = path.getValue();
  var parts = [];
  var i = 0;
  path.map(function (pathChild) {
    var prevNode = node.nodes[i - 1];

    if (prevNode && prevNode.type === "css-comment" && prevNode.text.trim() === "prettier-ignore") {
      var childNode = pathChild.getValue();
      parts.push(options.originalText.slice(options.locStart(childNode), options.locEnd(childNode)));
    } else {
      parts.push(pathChild.call(print));
    }

    if (i !== node.nodes.length - 1) {
      if (node.nodes[i + 1].type === "css-comment" && !hasNewline$2(options.originalText, options.locStart(node.nodes[i + 1]), {
        backwards: true
      }) && node.nodes[i].type !== "yaml" && node.nodes[i].type !== "toml" || node.nodes[i + 1].type === "css-atrule" && node.nodes[i + 1].name === "else" && node.nodes[i].type !== "css-comment") {
        parts.push(" ");
      } else {
        parts.push(hardline$3);

        if (isNextLineEmpty$2(options.originalText, pathChild.getValue(), options) && node.nodes[i].type !== "yaml" && node.nodes[i].type !== "toml") {
          parts.push(hardline$3);
        }
      }
    }

    i++;
  }, "nodes");
  return concat$4(parts);
}

var STRING_REGEX = /(['"])(?:(?!\1)[^\\]|\\[\s\S])*\1/g;
var NUMBER_REGEX = /(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g;
var STANDARD_UNIT_REGEX = /[a-zA-Z]+/g;
var WORD_PART_REGEX = /[$@]?[a-zA-Z_\u0080-\uFFFF][\w\-\u0080-\uFFFF]*/g;
var ADJUST_NUMBERS_REGEX = RegExp(STRING_REGEX.source + "|" + "(".concat(WORD_PART_REGEX.source, ")?") + "(".concat(NUMBER_REGEX.source, ")") + "(".concat(STANDARD_UNIT_REGEX.source, ")?"), "g");

function adjustStrings(value, options) {
  return value.replace(STRING_REGEX, function (match) {
    return printString$1(match, options);
  });
}

function quoteAttributeValue(value, options) {
  var quote = options.singleQuote ? "'" : '"';
  return value.includes('"') || value.includes("'") ? value : quote + value + quote;
}

function adjustNumbers(value) {
  return value.replace(ADJUST_NUMBERS_REGEX, function (match, quote, wordPart, number, unit) {
    return !wordPart && number ? (wordPart || "") + printCssNumber(number) + maybeToLowerCase(unit || "") : match;
  });
}

function printCssNumber(rawNumber) {
  return printNumber$1(rawNumber) // Remove trailing `.0`.
  .replace(/\.0(?=$|e)/, "");
}

var printerPostcss = {
  print: genericPrint,
  embed: embed_1,
  insertPragma: insertPragma,
  hasPrettierIgnore: hasIgnoreComment$1,
  massageAstNode: clean_1
};

var CATEGORY_COMMON = "Common"; // format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js

var commonOptions = {
  bracketSpacing: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: true,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets."
  },
  singleQuote: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description: "Use single quotes instead of double quotes."
  },
  proseWrap: {
    since: "1.8.2",
    category: CATEGORY_COMMON,
    type: "choice",
    default: [{
      since: "1.8.2",
      value: true
    }, {
      since: "1.9.0",
      value: "preserve"
    }],
    description: "How to wrap prose.",
    choices: [{
      since: "1.9.0",
      value: "always",
      description: "Wrap prose if it exceeds the print width."
    }, {
      since: "1.9.0",
      value: "never",
      description: "Do not wrap prose."
    }, {
      since: "1.9.0",
      value: "preserve",
      description: "Wrap prose as-is."
    }, {
      value: false,
      deprecated: "1.9.0",
      redirect: "never"
    }, {
      value: true,
      deprecated: "1.9.0",
      redirect: "always"
    }]
  }
};

var options$3 = {
  singleQuote: commonOptions.singleQuote
};

var createLanguage = function createLanguage(linguistData, _ref) {
  var extend = _ref.extend,
      override = _ref.override;
  var language = {};

  for (var key in linguistData) {
    var newKey = key === "languageId" ? "linguistLanguageId" : key;
    language[newKey] = linguistData[key];
  }

  if (extend) {
    for (var _key in extend) {
      language[_key] = (language[_key] || []).concat(extend[_key]);
    }
  }

  for (var _key2 in override) {
    language[_key2] = override[_key2];
  }

  return language;
};

var name$1 = "CSS";
var type = "markup";
var tmScope = "source.css";
var aceMode = "css";
var codemirrorMode = "css";
var codemirrorMimeType = "text/css";
var color = "#563d7c";
var extensions = [".css"];
var languageId = 50;
var css$2 = {
  name: name$1,
  type: type,
  tmScope: tmScope,
  aceMode: aceMode,
  codemirrorMode: codemirrorMode,
  codemirrorMimeType: codemirrorMimeType,
  color: color,
  extensions: extensions,
  languageId: languageId
};

var css$3 = Object.freeze({
	name: name$1,
	type: type,
	tmScope: tmScope,
	aceMode: aceMode,
	codemirrorMode: codemirrorMode,
	codemirrorMimeType: codemirrorMimeType,
	color: color,
	extensions: extensions,
	languageId: languageId,
	default: css$2
});

var name$2 = "PostCSS";
var type$1 = "markup";
var tmScope$1 = "source.postcss";
var group$2 = "CSS";
var extensions$1 = [".pcss"];
var aceMode$1 = "text";
var languageId$1 = 262764437;
var postcss = {
  name: name$2,
  type: type$1,
  tmScope: tmScope$1,
  group: group$2,
  extensions: extensions$1,
  aceMode: aceMode$1,
  languageId: languageId$1
};

var postcss$1 = Object.freeze({
	name: name$2,
	type: type$1,
	tmScope: tmScope$1,
	group: group$2,
	extensions: extensions$1,
	aceMode: aceMode$1,
	languageId: languageId$1,
	default: postcss
});

var name$3 = "Less";
var type$2 = "markup";
var group$3 = "CSS";
var extensions$2 = [".less"];
var tmScope$2 = "source.css.less";
var aceMode$2 = "less";
var codemirrorMode$1 = "css";
var codemirrorMimeType$1 = "text/css";
var languageId$2 = 198;
var less = {
  name: name$3,
  type: type$2,
  group: group$3,
  extensions: extensions$2,
  tmScope: tmScope$2,
  aceMode: aceMode$2,
  codemirrorMode: codemirrorMode$1,
  codemirrorMimeType: codemirrorMimeType$1,
  languageId: languageId$2
};

var less$1 = Object.freeze({
	name: name$3,
	type: type$2,
	group: group$3,
	extensions: extensions$2,
	tmScope: tmScope$2,
	aceMode: aceMode$2,
	codemirrorMode: codemirrorMode$1,
	codemirrorMimeType: codemirrorMimeType$1,
	languageId: languageId$2,
	default: less
});

var name$4 = "SCSS";
var type$3 = "markup";
var tmScope$3 = "source.scss";
var group$4 = "CSS";
var aceMode$3 = "scss";
var codemirrorMode$2 = "css";
var codemirrorMimeType$2 = "text/x-scss";
var extensions$3 = [".scss"];
var languageId$3 = 329;
var scss = {
  name: name$4,
  type: type$3,
  tmScope: tmScope$3,
  group: group$4,
  aceMode: aceMode$3,
  codemirrorMode: codemirrorMode$2,
  codemirrorMimeType: codemirrorMimeType$2,
  extensions: extensions$3,
  languageId: languageId$3
};

var scss$1 = Object.freeze({
	name: name$4,
	type: type$3,
	tmScope: tmScope$3,
	group: group$4,
	aceMode: aceMode$3,
	codemirrorMode: codemirrorMode$2,
	codemirrorMimeType: codemirrorMimeType$2,
	extensions: extensions$3,
	languageId: languageId$3,
	default: scss
});

var require$$0$16 = ( css$3 && css$2 ) || css$3;

var require$$1$9 = ( postcss$1 && postcss ) || postcss$1;

var require$$2$9 = ( less$1 && less ) || less$1;

var require$$3$4 = ( scss$1 && scss ) || scss$1;

var languages = [createLanguage(require$$0$16, {
  override: {
    since: "1.4.0",
    parsers: ["css"],
    vscodeLanguageIds: ["css"]
  }
}), createLanguage(require$$1$9, {
  override: {
    since: "1.4.0",
    parsers: ["css"],
    vscodeLanguageIds: ["postcss"]
  },
  extend: {
    extensions: [".postcss"]
  }
}), createLanguage(require$$2$9, {
  override: {
    since: "1.4.0",
    parsers: ["less"],
    vscodeLanguageIds: ["less"]
  }
}), createLanguage(require$$3$4, {
  override: {
    since: "1.4.0",
    parsers: ["scss"],
    vscodeLanguageIds: ["scss"]
  }
})];
var printers = {
  postcss: printerPostcss
};
var languageCss = {
  languages: languages,
  options: options$3,
  printers: printers
};

function hasPragma$2(text) {
  return /^\s*#[^\n\S]*@(format|prettier)\s*(\n|$)/.test(text);
}

function insertPragma$4(text) {
  return "# @format\n\n" + text;
}

var pragma$4 = {
  hasPragma: hasPragma$2,
  insertPragma: insertPragma$4
};

var _require$$0$builders$2 = doc.builders;
var concat$6 = _require$$0$builders$2.concat;
var join$3 = _require$$0$builders$2.join;
var hardline$5 = _require$$0$builders$2.hardline;
var line$4 = _require$$0$builders$2.line;
var softline$2 = _require$$0$builders$2.softline;
var group$5 = _require$$0$builders$2.group;
var indent$3 = _require$$0$builders$2.indent;
var ifBreak$2 = _require$$0$builders$2.ifBreak;
var hasIgnoreComment$2 = util.hasIgnoreComment;
var isNextLineEmpty$3 = utilShared.isNextLineEmpty;
var insertPragma$3 = pragma$4.insertPragma;

function genericPrint$1(path, options, print) {
  var n = path.getValue();

  if (!n) {
    return "";
  }

  if (typeof n === "string") {
    return n;
  }

  switch (n.kind) {
    case "Document":
      {
        var parts = [];
        path.map(function (pathChild, index) {
          parts.push(concat$6([pathChild.call(print)]));

          if (index !== n.definitions.length - 1) {
            parts.push(hardline$5);

            if (isNextLineEmpty$3(options.originalText, pathChild.getValue(), options)) {
              parts.push(hardline$5);
            }
          }
        }, "definitions");
        return concat$6([concat$6(parts), hardline$5]);
      }

    case "OperationDefinition":
      {
        var hasOperation = options.originalText[options.locStart(n)] !== "{";
        var hasName = !!n.name;
        return concat$6([hasOperation ? n.operation : "", hasOperation && hasName ? concat$6([" ", path.call(print, "name")]) : "", n.variableDefinitions && n.variableDefinitions.length ? group$5(concat$6(["(", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.map(print, "variableDefinitions"))])), softline$2, ")"])) : "", printDirectives(path, print, n), n.selectionSet ? !hasOperation && !hasName ? "" : " " : "", path.call(print, "selectionSet")]);
      }

    case "FragmentDefinition":
      {
        return concat$6(["fragment ", path.call(print, "name"), " on ", path.call(print, "typeCondition"), printDirectives(path, print, n), " ", path.call(print, "selectionSet")]);
      }

    case "SelectionSet":
      {
        return concat$6(["{", indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (selectionsPath) {
          return printSequence(selectionsPath, options, print);
        }, "selections"))])), hardline$5, "}"]);
      }

    case "Field":
      {
        return group$5(concat$6([n.alias ? concat$6([path.call(print, "alias"), ": "]) : "", path.call(print, "name"), n.arguments.length > 0 ? group$5(concat$6(["(", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.call(function (argsPath) {
          return printSequence(argsPath, options, print);
        }, "arguments"))])), softline$2, ")"])) : "", printDirectives(path, print, n), n.selectionSet ? " " : "", path.call(print, "selectionSet")]));
      }

    case "Name":
      {
        return n.value;
      }

    case "StringValue":
      {
        if (n.block) {
          return concat$6(['"""', hardline$5, join$3(hardline$5, n.value.replace(/"""/g, "\\$&").split("\n")), hardline$5, '"""']);
        }

        return concat$6(['"', n.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);
      }

    case "IntValue":
    case "FloatValue":
    case "EnumValue":
      {
        return n.value;
      }

    case "BooleanValue":
      {
        return n.value ? "true" : "false";
      }

    case "NullValue":
      {
        return "null";
      }

    case "Variable":
      {
        return concat$6(["$", path.call(print, "name")]);
      }

    case "ListValue":
      {
        return group$5(concat$6(["[", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.map(print, "values"))])), softline$2, "]"]));
      }

    case "ObjectValue":
      {
        return group$5(concat$6(["{", options.bracketSpacing && n.fields.length > 0 ? " " : "", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.map(print, "fields"))])), softline$2, ifBreak$2("", options.bracketSpacing && n.fields.length > 0 ? " " : ""), "}"]));
      }

    case "ObjectField":
    case "Argument":
      {
        return concat$6([path.call(print, "name"), ": ", path.call(print, "value")]);
      }

    case "Directive":
      {
        return concat$6(["@", path.call(print, "name"), n.arguments.length > 0 ? group$5(concat$6(["(", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.call(function (argsPath) {
          return printSequence(argsPath, options, print);
        }, "arguments"))])), softline$2, ")"])) : ""]);
      }

    case "NamedType":
      {
        return path.call(print, "name");
      }

    case "VariableDefinition":
      {
        return concat$6([path.call(print, "variable"), ": ", path.call(print, "type"), n.defaultValue ? concat$6([" = ", path.call(print, "defaultValue")]) : ""]);
      }

    case "TypeExtensionDefinition":
      {
        return concat$6(["extend ", path.call(print, "definition")]);
      }

    case "ObjectTypeExtension":
    case "ObjectTypeDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", n.kind === "ObjectTypeExtension" ? "extend " : "", "type ", path.call(print, "name"), n.interfaces.length > 0 ? concat$6([" implements ", join$3(determineInterfaceSeparator(options.originalText.substr(options.locStart(n), options.locEnd(n))), path.map(print, "interfaces"))]) : "", printDirectives(path, print, n), n.fields.length > 0 ? concat$6([" {", indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (fieldsPath) {
          return printSequence(fieldsPath, options, print);
        }, "fields"))])), hardline$5, "}"]) : ""]);
      }

    case "FieldDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", path.call(print, "name"), n.arguments.length > 0 ? group$5(concat$6(["(", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.call(function (argsPath) {
          return printSequence(argsPath, options, print);
        }, "arguments"))])), softline$2, ")"])) : "", ": ", path.call(print, "type"), printDirectives(path, print, n)]);
      }

    case "DirectiveDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", "directive ", "@", path.call(print, "name"), n.arguments.length > 0 ? group$5(concat$6(["(", indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", ", "), softline$2]), path.call(function (argsPath) {
          return printSequence(argsPath, options, print);
        }, "arguments"))])), softline$2, ")"])) : "", concat$6([" on ", join$3(" | ", path.map(print, "locations"))])]);
      }

    case "EnumTypeExtension":
    case "EnumTypeDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", n.kind === "EnumTypeExtension" ? "extend " : "", "enum ", path.call(print, "name"), printDirectives(path, print, n), n.values.length > 0 ? concat$6([" {", indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (valuesPath) {
          return printSequence(valuesPath, options, print);
        }, "values"))])), hardline$5, "}"]) : ""]);
      }

    case "EnumValueDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", path.call(print, "name"), printDirectives(path, print, n)]);
      }

    case "InputValueDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? n.description.block ? hardline$5 : line$4 : "", path.call(print, "name"), ": ", path.call(print, "type"), n.defaultValue ? concat$6([" = ", path.call(print, "defaultValue")]) : "", printDirectives(path, print, n)]);
      }

    case "InputObjectTypeExtension":
    case "InputObjectTypeDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", n.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", path.call(print, "name"), printDirectives(path, print, n), n.fields.length > 0 ? concat$6([" {", indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (fieldsPath) {
          return printSequence(fieldsPath, options, print);
        }, "fields"))])), hardline$5, "}"]) : ""]);
      }

    case "SchemaDefinition":
      {
        return concat$6(["schema", printDirectives(path, print, n), " {", n.operationTypes.length > 0 ? indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (opsPath) {
          return printSequence(opsPath, options, print);
        }, "operationTypes"))])) : "", hardline$5, "}"]);
      }

    case "OperationTypeDefinition":
      {
        return concat$6([path.call(print, "operation"), ": ", path.call(print, "type")]);
      }

    case "InterfaceTypeExtension":
    case "InterfaceTypeDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", n.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", path.call(print, "name"), printDirectives(path, print, n), n.fields.length > 0 ? concat$6([" {", indent$3(concat$6([hardline$5, join$3(hardline$5, path.call(function (fieldsPath) {
          return printSequence(fieldsPath, options, print);
        }, "fields"))])), hardline$5, "}"]) : ""]);
      }

    case "FragmentSpread":
      {
        return concat$6(["...", path.call(print, "name"), printDirectives(path, print, n)]);
      }

    case "InlineFragment":
      {
        return concat$6(["...", n.typeCondition ? concat$6([" on ", path.call(print, "typeCondition")]) : "", printDirectives(path, print, n), " ", path.call(print, "selectionSet")]);
      }

    case "UnionTypeExtension":
    case "UnionTypeDefinition":
      {
        return group$5(concat$6([path.call(print, "description"), n.description ? hardline$5 : "", group$5(concat$6([n.kind === "UnionTypeExtension" ? "extend " : "", "union ", path.call(print, "name"), printDirectives(path, print, n), n.types.length > 0 ? concat$6([" =", ifBreak$2("", " "), indent$3(concat$6([ifBreak$2(concat$6([line$4, "  "])), join$3(concat$6([line$4, "| "]), path.map(print, "types"))]))]) : ""]))]));
      }

    case "ScalarTypeExtension":
    case "ScalarTypeDefinition":
      {
        return concat$6([path.call(print, "description"), n.description ? hardline$5 : "", n.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", path.call(print, "name"), printDirectives(path, print, n)]);
      }

    case "NonNullType":
      {
        return concat$6([path.call(print, "type"), "!"]);
      }

    case "ListType":
      {
        return concat$6(["[", path.call(print, "type"), "]"]);
      }

    default:
      /* istanbul ignore next */
      throw new Error("unknown graphql type: " + JSON.stringify(n.kind));
  }
}

function printDirectives(path, print, n) {
  if (n.directives.length === 0) {
    return "";
  }

  return concat$6([" ", group$5(indent$3(concat$6([softline$2, join$3(concat$6([ifBreak$2("", " "), softline$2]), path.map(print, "directives"))])))]);
}

function printSequence(sequencePath, options, print) {
  var count = sequencePath.getValue().length;
  return sequencePath.map(function (path, i) {
    var printed = print(path);

    if (isNextLineEmpty$3(options.originalText, path.getValue(), options) && i < count - 1) {
      return concat$6([printed, hardline$5]);
    }

    return printed;
  });
}

function canAttachComment(node) {
  return node.kind && node.kind !== "Comment";
}

function printComment$1(commentPath) {
  var comment = commentPath.getValue();

  if (comment.kind === "Comment") {
    return "#" + comment.value.trimRight();
  }

  throw new Error("Not a comment: " + JSON.stringify(comment));
}

function determineInterfaceSeparator(originalSource) {
  var start = originalSource.indexOf("implements");

  if (start === -1) {
    throw new Error("Must implement interfaces: " + originalSource);
  }

  var end = originalSource.indexOf("{");

  if (end === -1) {
    end = originalSource.length;
  }

  return originalSource.substr(start, end).includes("&") ? " & " : ", ";
}

function clean$2(node, newNode
/*, parent*/
) {
  delete newNode.loc;
  delete newNode.comments;
}

var printerGraphql = {
  print: genericPrint$1,
  massageAstNode: clean$2,
  hasPrettierIgnore: hasIgnoreComment$2,
  insertPragma: insertPragma$3,
  printComment: printComment$1,
  canAttachComment: canAttachComment
};

var options$6 = {
  bracketSpacing: commonOptions.bracketSpacing
};

var name$5 = "GraphQL";
var type$4 = "data";
var extensions$4 = [".graphql", ".gql"];
var tmScope$4 = "source.graphql";
var aceMode$4 = "text";
var languageId$4 = 139;
var graphql = {
  name: name$5,
  type: type$4,
  extensions: extensions$4,
  tmScope: tmScope$4,
  aceMode: aceMode$4,
  languageId: languageId$4
};

var graphql$1 = Object.freeze({
	name: name$5,
	type: type$4,
	extensions: extensions$4,
	tmScope: tmScope$4,
	aceMode: aceMode$4,
	languageId: languageId$4,
	default: graphql
});

var require$$0$17 = ( graphql$1 && graphql ) || graphql$1;

var languages$1 = [createLanguage(require$$0$17, {
  override: {
    since: "1.5.0",
    parsers: ["graphql"],
    vscodeLanguageIds: ["graphql"]
  }
})];
var printers$1 = {
  graphql: printerGraphql
};
var languageGraphql = {
  languages: languages$1,
  options: options$6,
  printers: printers$1
};

var _require$$0$builders$3 = doc.builders;
var concat$7 = _require$$0$builders$3.concat;
var join$4 = _require$$0$builders$3.join;
var softline$3 = _require$$0$builders$3.softline;
var hardline$6 = _require$$0$builders$3.hardline;
var line$5 = _require$$0$builders$3.line;
var group$6 = _require$$0$builders$3.group;
var indent$4 = _require$$0$builders$3.indent;
var ifBreak$3 = _require$$0$builders$3.ifBreak; // http://w3c.github.io/html/single-page.html#void-elements

var voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]; // Formatter based on @glimmerjs/syntax's built-in test formatter:
// https://github.com/glimmerjs/glimmer-vm/blob/master/packages/%40glimmer/syntax/lib/generation/print.ts

function print(path, options, print) {
  var n = path.getValue();
  /* istanbul ignore if*/

  if (!n) {
    return "";
  }

  switch (n.type) {
    case "Program":
      {
        return group$6(join$4(softline$3, path.map(print, "body").filter(function (text) {
          return text !== "";
        })));
      }

    case "ElementNode":
      {
        var tagFirstChar = n.tag[0];
        var isLocal = n.tag.indexOf(".") !== -1;
        var isGlimmerComponent = tagFirstChar.toUpperCase() === tagFirstChar || isLocal;
        var hasChildren = n.children.length > 0;
        var isVoid = isGlimmerComponent && !hasChildren || voidTags.indexOf(n.tag) !== -1;
        var closeTag = isVoid ? concat$7([" />", softline$3]) : ">";

        var _getParams = function _getParams(path, print) {
          return indent$4(concat$7([n.attributes.length ? line$5 : "", join$4(line$5, path.map(print, "attributes")), n.modifiers.length ? line$5 : "", join$4(line$5, path.map(print, "modifiers")), n.comments.length ? line$5 : "", join$4(line$5, path.map(print, "comments"))]));
        }; // The problem here is that I want to not break at all if the children
        // would not break but I need to force an indent, so I use a hardline.

        /**
         * What happens now:
         * <div>
         *   Hello
         * </div>
         * ==>
         * <div>Hello</div>
         * This is due to me using hasChildren to decide to put the hardline in.
         * I would rather use a {DOES THE WHOLE THING NEED TO BREAK}
         */


        return concat$7([group$6(concat$7(["<", n.tag, _getParams(path, print), n.blockParams.length ? " as |".concat(n.blockParams.join(" "), "|") : "", ifBreak$3(softline$3, ""), closeTag])), group$6(concat$7([indent$4(join$4(softline$3, [""].concat(path.map(print, "children")))), ifBreak$3(hasChildren ? hardline$6 : "", ""), !isVoid ? concat$7(["</", n.tag, ">"]) : ""]))]);
      }

    case "BlockStatement":
      {
        var pp = path.getParentNode(1);
        var isElseIf = pp && pp.inverse && pp.inverse.body[0] === n && pp.inverse.body[0].path.parts[0] === "if";
        var hasElseIf = n.inverse && n.inverse.body[0] && n.inverse.body[0].type === "BlockStatement" && n.inverse.body[0].path.parts[0] === "if";
        var indentElse = hasElseIf ? function (a) {
          return a;
        } : indent$4;

        if (n.inverse) {
          return concat$7([isElseIf ? concat$7(["{{else ", printPathParams(path, print), "}}"]) : printOpenBlock(path, print), indent$4(concat$7([hardline$6, path.call(print, "program")])), n.inverse && !hasElseIf ? concat$7([hardline$6, "{{else}}"]) : "", n.inverse ? indentElse(concat$7([hardline$6, path.call(print, "inverse")])) : "", isElseIf ? "" : concat$7([hardline$6, printCloseBlock(path, print)])]);
        } else if (isElseIf) {
          return concat$7([concat$7(["{{else ", printPathParams(path, print), "}}"]), indent$4(concat$7([hardline$6, path.call(print, "program")]))]);
        }
        /**
         * I want this boolean to be: if params are going to cause a break,
         * not that it has params.
         */


        var hasParams = n.params.length > 0 || n.hash.pairs.length > 0;

        var _hasChildren = n.program.body.length > 0;

        return concat$7([printOpenBlock(path, print), group$6(concat$7([indent$4(concat$7([softline$3, path.call(print, "program")])), hasParams && _hasChildren ? hardline$6 : softline$3, printCloseBlock(path, print)]))]);
      }

    case "ElementModifierStatement":
    case "MustacheStatement":
      {
        var _pp = path.getParentNode(1);

        var isConcat = _pp && _pp.type === "ConcatStatement";
        return group$6(concat$7([n.escaped === false ? "{{{" : "{{", printPathParams(path, print), isConcat ? "" : softline$3, n.escaped === false ? "}}}" : "}}"]));
      }

    case "SubExpression":
      {
        var params = getParams(path, print);
        var printedParams = params.length > 0 ? indent$4(concat$7([line$5, group$6(join$4(line$5, params))])) : "";
        return group$6(concat$7(["(", printPath(path, print), printedParams, softline$3, ")"]));
      }

    case "AttrNode":
      {
        var isText = n.value.type === "TextNode";

        if (isText && n.value.loc.start.column === n.value.loc.end.column) {
          return concat$7([n.name]);
        }

        var quote = isText ? '"' : "";
        return concat$7([n.name, "=", quote, path.call(print, "value"), quote]);
      }

    case "ConcatStatement":
      {
        return concat$7(['"', group$6(indent$4(join$4(softline$3, path.map(function (partPath) {
          return print(partPath);
        }, "parts").filter(function (a) {
          return a !== "";
        })))), '"']);
      }

    case "Hash":
      {
        return concat$7([join$4(line$5, path.map(print, "pairs"))]);
      }

    case "HashPair":
      {
        return concat$7([n.key, "=", path.call(print, "value")]);
      }

    case "TextNode":
      {
        var leadingSpace = "";
        var trailingSpace = ""; // preserve a space inside of an attribute node where whitespace present, when next to mustache statement.

        var inAttrNode = path.stack.indexOf("attributes") >= 0;

        if (inAttrNode) {
          var parentNode = path.getParentNode(0);

          var _isConcat = parentNode.type === "ConcatStatement";

          if (_isConcat) {
            var parts = parentNode.parts;
            var partIndex = parts.indexOf(n);

            if (partIndex > 0) {
              var partType = parts[partIndex - 1].type;
              var isMustache = partType === "MustacheStatement";

              if (isMustache) {
                leadingSpace = " ";
              }
            }

            if (partIndex < parts.length - 1) {
              var _partType = parts[partIndex + 1].type;

              var _isMustache = _partType === "MustacheStatement";

              if (_isMustache) {
                trailingSpace = " ";
              }
            }
          }
        }

        return n.chars.replace(/^\s+/, leadingSpace).replace(/\s+$/, trailingSpace);
      }

    case "MustacheCommentStatement":
      {
        var dashes = n.value.indexOf("}}") > -1 ? "--" : "";
        return concat$7(["{{!", dashes, n.value, dashes, "}}"]);
      }

    case "PathExpression":
      {
        return n.original;
      }

    case "BooleanLiteral":
      {
        return String(n.value);
      }

    case "CommentStatement":
      {
        return concat$7(["<!--", n.value, "-->"]);
      }

    case "StringLiteral":
      {
        return printStringLiteral(n.value, options);
      }

    case "NumberLiteral":
      {
        return String(n.value);
      }

    case "UndefinedLiteral":
      {
        return "undefined";
      }

    case "NullLiteral":
      {
        return "null";
      }

    /* istanbul ignore next */

    default:
      throw new Error("unknown glimmer type: " + JSON.stringify(n.type));
  }
}
/**
 * Prints a string literal with the correct surrounding quotes based on
 * `options.singleQuote` and the number of escaped quotes contained in
 * the string literal. This function is the glimmer equivalent of `printString`
 * in `common/util`, but has differences because of the way escaped characters
 * are treated in hbs string literals.
 * @param {string} stringLiteral - the string literal value
 * @param {object} options - the prettier options object
 */


function printStringLiteral(stringLiteral, options) {
  var double = {
    quote: '"',
    regex: /"/g
  };
  var single = {
    quote: "'",
    regex: /'/g
  };
  var preferred = options.singleQuote ? single : double;
  var alternate = preferred === single ? double : single;
  var shouldUseAlternateQuote = false; // If `stringLiteral` contains at least one of the quote preferred for
  // enclosing the string, we might want to enclose with the alternate quote
  // instead, to minimize the number of escaped quotes.

  if (stringLiteral.includes(preferred.quote) || stringLiteral.includes(alternate.quote)) {
    var numPreferredQuotes = (stringLiteral.match(preferred.regex) || []).length;
    var numAlternateQuotes = (stringLiteral.match(alternate.regex) || []).length;
    shouldUseAlternateQuote = numPreferredQuotes > numAlternateQuotes;
  }

  var enclosingQuote = shouldUseAlternateQuote ? alternate : preferred;
  var escapedStringLiteral = stringLiteral.replace(enclosingQuote.regex, "\\".concat(enclosingQuote.quote));
  return "".concat(enclosingQuote.quote).concat(escapedStringLiteral).concat(enclosingQuote.quote);
}

function printPath(path, print) {
  return path.call(print, "path");
}

function getParams(path, print) {
  var node = path.getValue();
  var parts = [];

  if (node.params.length > 0) {
    parts = parts.concat(path.map(print, "params"));
  }

  if (node.hash && node.hash.pairs.length > 0) {
    parts.push(path.call(print, "hash"));
  }

  return parts;
}

function printPathParams(path, print) {
  var parts = [];
  parts.push(printPath(path, print));
  parts = parts.concat(getParams(path, print));
  return indent$4(group$6(join$4(line$5, parts)));
}

function printBlockParams(path) {
  var block = path.getValue();

  if (!block.program || !block.program.blockParams.length) {
    return "";
  }

  return concat$7([" as |", block.program.blockParams.join(" "), "|"]);
}

function printOpenBlock(path, print) {
  return group$6(concat$7(["{{#", printPathParams(path, print), printBlockParams(path), softline$3, "}}"]));
}

function printCloseBlock(path, print) {
  return concat$7(["{{/", path.call(print, "path"), "}}"]);
}

function clean$3(ast, newObj) {
  delete newObj.loc; // (Glimmer/HTML) ignore TextNode whitespace

  if (ast.type === "TextNode") {
    if (ast.chars.replace(/\s+/, "") === "") {
      return null;
    }

    newObj.chars = ast.chars.replace(/^\s+/, "").replace(/\s+$/, "");
  }
}

var printerGlimmer = {
  print: print,
  massageAstNode: clean$3
};

var name$6 = "Handlebars";
var type$5 = "markup";
var group$7 = "HTML";
var aliases = ["hbs", "htmlbars"];
var extensions$5 = [".handlebars", ".hbs"];
var tmScope$5 = "text.html.handlebars";
var aceMode$5 = "handlebars";
var languageId$5 = 155;
var handlebars = {
  name: name$6,
  type: type$5,
  group: group$7,
  aliases: aliases,
  extensions: extensions$5,
  tmScope: tmScope$5,
  aceMode: aceMode$5,
  languageId: languageId$5
};

var handlebars$1 = Object.freeze({
	name: name$6,
	type: type$5,
	group: group$7,
	aliases: aliases,
	extensions: extensions$5,
	tmScope: tmScope$5,
	aceMode: aceMode$5,
	languageId: languageId$5,
	default: handlebars
});

var require$$0$18 = ( handlebars$1 && handlebars ) || handlebars$1;

var languages$2 = [createLanguage(require$$0$18, {
  override: {
    since: null,
    // unreleased
    parsers: ["glimmer"],
    vscodeLanguageIds: ["handlebars"]
  }
})];
var printers$2 = {
  glimmer: printerGlimmer
};
var languageHandlebars = {
  languages: languages$2,
  printers: printers$2
};

var clean$4 = function clean(ast, newNode) {
  delete newNode.sourceSpan;
  delete newNode.startSourceSpan;
  delete newNode.endSourceSpan;
  delete newNode.nameSpan;
  delete newNode.valueSpan;

  if (ast.type === "text" || ast.type === "comment") {
    return null;
  } // may be formatted by multiparser


  if (ast.type === "yaml" || ast.type === "toml") {
    return null;
  }

  if (ast.type === "attribute") {
    delete newNode.value;
  }

  if (ast.type === "docType") {
    delete newNode.value;
  }
};

var a = ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"];
var abbr = ["title"];
var applet = ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"];
var area = ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"];
var audio = ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"];
var base$2 = ["href", "target"];
var basefont = ["color", "face", "size"];
var bdo = ["dir"];
var blockquote = ["cite"];
var body = ["alink", "background", "bgcolor", "link", "text", "vlink"];
var br = ["clear"];
var button = ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"];
var canvas = ["height", "width"];
var caption = ["align"];
var col = ["align", "char", "charoff", "span", "valign", "width"];
var colgroup = ["align", "char", "charoff", "span", "valign", "width"];
var data = ["value"];
var del = ["cite", "datetime"];
var details = ["open"];
var dfn = ["title"];
var dialog = ["open"];
var dir = ["compact"];
var div = ["align"];
var dl = ["compact"];
var embed$3 = ["height", "src", "type", "width"];
var fieldset = ["disabled", "form", "name"];
var font = ["color", "face", "size"];
var form = ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"];
var frame = ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"];
var frameset = ["cols", "rows"];
var h1 = ["align"];
var h2 = ["align"];
var h3 = ["align"];
var h4 = ["align"];
var h5 = ["align"];
var h6 = ["align"];
var head = ["profile"];
var hr = ["align", "noshade", "size", "width"];
var html = ["manifest", "version"];
var iframe = ["align", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"];
var img = ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"];
var input = ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"];
var ins = ["cite", "datetime"];
var isindex = ["prompt"];
var label = ["accesskey", "for", "form"];
var legend = ["accesskey", "align"];
var li = ["type", "value"];
var link$1 = ["as", "charset", "color", "crossorigin", "href", "hreflang", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"];
var map = ["name"];
var menu = ["compact"];
var meta = ["charset", "content", "http-equiv", "name", "scheme"];
var meter = ["high", "low", "max", "min", "optimum", "value"];
var object = ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"];
var ol = ["compact", "reversed", "start", "type"];
var optgroup = ["disabled", "label"];
var option = ["disabled", "label", "selected", "value"];
var output = ["for", "form", "name"];
var p = ["align"];
var param = ["name", "type", "value", "valuetype"];
var pre = ["width"];
var progress = ["max", "value"];
var q = ["cite"];
var script = ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"];
var select = ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"];
var slot = ["name"];
var source = ["media", "sizes", "src", "srcset", "type"];
var style = ["media", "nonce", "title", "type"];
var table = ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"];
var tbody = ["align", "char", "charoff", "valign"];
var td = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"];
var textarea = ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"];
var tfoot = ["align", "char", "charoff", "valign"];
var th = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"];
var thead = ["align", "char", "charoff", "valign"];
var time = ["datetime"];
var tr = ["align", "bgcolor", "char", "charoff", "valign"];
var track = ["default", "kind", "label", "src", "srclang"];
var ul = ["compact", "type"];
var video = ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"];
var index$13 = {
  a: a,
  abbr: abbr,
  applet: applet,
  area: area,
  audio: audio,
  base: base$2,
  basefont: basefont,
  bdo: bdo,
  blockquote: blockquote,
  body: body,
  br: br,
  button: button,
  canvas: canvas,
  caption: caption,
  col: col,
  colgroup: colgroup,
  data: data,
  del: del,
  details: details,
  dfn: dfn,
  dialog: dialog,
  dir: dir,
  div: div,
  dl: dl,
  embed: embed$3,
  fieldset: fieldset,
  font: font,
  form: form,
  frame: frame,
  frameset: frameset,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  head: head,
  hr: hr,
  html: html,
  iframe: iframe,
  img: img,
  input: input,
  ins: ins,
  isindex: isindex,
  label: label,
  legend: legend,
  li: li,
  link: link$1,
  map: map,
  menu: menu,
  meta: meta,
  meter: meter,
  object: object,
  ol: ol,
  optgroup: optgroup,
  option: option,
  output: output,
  p: p,
  param: param,
  pre: pre,
  progress: progress,
  q: q,
  script: script,
  select: select,
  slot: slot,
  source: source,
  style: style,
  table: table,
  tbody: tbody,
  td: td,
  textarea: textarea,
  tfoot: tfoot,
  th: th,
  thead: thead,
  time: time,
  tr: tr,
  track: track,
  ul: ul,
  video: video,
  "*": ["accesskey", "autocapitalize", "class", "contenteditable", "dir", "draggable", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"]
};

var htmlElementAttributes = Object.freeze({
	a: a,
	abbr: abbr,
	applet: applet,
	area: area,
	audio: audio,
	base: base$2,
	basefont: basefont,
	bdo: bdo,
	blockquote: blockquote,
	body: body,
	br: br,
	button: button,
	canvas: canvas,
	caption: caption,
	col: col,
	colgroup: colgroup,
	data: data,
	del: del,
	details: details,
	dfn: dfn,
	dialog: dialog,
	dir: dir,
	div: div,
	dl: dl,
	embed: embed$3,
	fieldset: fieldset,
	font: font,
	form: form,
	frame: frame,
	frameset: frameset,
	h1: h1,
	h2: h2,
	h3: h3,
	h4: h4,
	h5: h5,
	h6: h6,
	head: head,
	hr: hr,
	html: html,
	iframe: iframe,
	img: img,
	input: input,
	ins: ins,
	isindex: isindex,
	label: label,
	legend: legend,
	li: li,
	link: link$1,
	map: map,
	menu: menu,
	meta: meta,
	meter: meter,
	object: object,
	ol: ol,
	optgroup: optgroup,
	option: option,
	output: output,
	p: p,
	param: param,
	pre: pre,
	progress: progress,
	q: q,
	script: script,
	select: select,
	slot: slot,
	source: source,
	style: style,
	table: table,
	tbody: tbody,
	td: td,
	textarea: textarea,
	tfoot: tfoot,
	th: th,
	thead: thead,
	time: time,
	tr: tr,
	track: track,
	ul: ul,
	video: video,
	default: index$13
});

const json$4 = {"CSS_DISPLAY_TAGS":{"area":"none","base":"none","basefont":"none","datalist":"none","head":"none","link":"none","meta":"none","noembed":"none","noframes":"none","param":"none","rp":"none","script":"none","source":"block","style":"none","template":"inline","track":"block","title":"none","html":"block","body":"block","address":"block","blockquote":"block","center":"block","div":"block","figure":"block","figcaption":"block","footer":"block","form":"block","header":"block","hr":"block","legend":"block","listing":"block","main":"block","p":"block","plaintext":"block","pre":"block","xmp":"block","slot":"contents","ruby":"ruby","rt":"ruby-text","article":"block","aside":"block","h1":"block","h2":"block","h3":"block","h4":"block","h5":"block","h6":"block","hgroup":"block","nav":"block","section":"block","dir":"block","dd":"block","dl":"block","dt":"block","ol":"block","ul":"block","li":"list-item","table":"table","caption":"table-caption","colgroup":"table-column-group","col":"table-column","thead":"table-header-group","tbody":"table-row-group","tfoot":"table-footer-group","tr":"table-row","td":"table-cell","th":"table-cell","fieldset":"block","button":"inline-block","video":"inline-block","audio":"inline-block"},"CSS_DISPLAY_DEFAULT":"inline","CSS_WHITE_SPACE_TAGS":{"listing":"pre","plaintext":"pre","pre":"pre","xmp":"pre","nobr":"nowrap","table":"initial","textarea":"pre-wrap"},"CSS_WHITE_SPACE_DEFAULT":"normal"};

var htmlElementAttributes$1 = ( htmlElementAttributes && index$13 ) || htmlElementAttributes;

var concat$9 = doc.builders.concat;
var mapDoc$4 = doc.utils.mapDoc;
var CSS_DISPLAY_TAGS = json$4.CSS_DISPLAY_TAGS;
var CSS_DISPLAY_DEFAULT = json$4.CSS_DISPLAY_DEFAULT;
var CSS_WHITE_SPACE_TAGS = json$4.CSS_WHITE_SPACE_TAGS;
var CSS_WHITE_SPACE_DEFAULT = json$4.CSS_WHITE_SPACE_DEFAULT;
var HTML_TAGS = arrayToMap(htmlTagNames$1);
var HTML_ELEMENT_ATTRIBUTES = mapObject(htmlElementAttributes$1, arrayToMap);

function arrayToMap(array) {
  var map = Object.create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      map[value] = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return map;
}

function mapObject(object, fn) {
  var newObject = Object.create(null);

  var _arr = Object.keys(object);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    newObject[key] = fn(object[key], key);
  }

  return newObject;
}

function hasPrettierIgnore$1(path) {
  var node = path.getValue();

  if (node.type === "attribute" || node.type === "text") {
    return false;
  } // TODO: handle non-text children in <pre>


  if (isPreLikeNode$1(node) && node.children.some(function (child) {
    return child.type !== "text";
  })) {
    return true;
  }

  var parentNode = path.getParentNode();

  if (!parentNode) {
    return false;
  }

  var index = path.getName();

  if (typeof index !== "number" || index === 0) {
    return false;
  }

  var prevNode = parentNode.children[index - 1];
  return isPrettierIgnore(prevNode);
}

function isPrettierIgnore(node) {
  return node.type === "comment" && node.value.trim() === "prettier-ignore";
}

function getPrettierIgnoreAttributeCommentData$1(value) {
  var match = value.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);

  if (!match) {
    return false;
  }

  if (!match[1]) {
    return true;
  }

  return match[1].split(/\s+/);
}

function isScriptLikeTag$1(node) {
  return node.type === "element" && (node.fullName === "script" || node.fullName === "style" || node.fullName === "svg:style");
}

function isFrontMatterNode(node) {
  return node.type === "yaml" || node.type === "toml";
}

function canHaveInterpolation(node) {
  return node.children && !isScriptLikeTag$1(node);
}

function isWhitespaceSensitiveNode(node) {
  return isScriptLikeTag$1(node) || node.type === "interpolation" || isIndentationSensitiveNode(node);
}

function isIndentationSensitiveNode(node) {
  return getNodeCssStyleWhiteSpace(node).startsWith("pre");
}

function isLeadingSpaceSensitiveNode(node) {
  if (isFrontMatterNode(node)) {
    return false;
  }

  if (!node.parent || node.parent.cssDisplay === "none") {
    return false;
  }

  if (!node.prev && node.parent.type === "element" && node.parent.tagDefinition.ignoreFirstLf) {
    return false;
  }

  if (isPreLikeNode$1(node.parent)) {
    return true;
  }

  if (!node.prev && (node.parent.type === "root" || isScriptLikeTag$1(node.parent) || !isFirstChildLeadingSpaceSensitiveCssDisplay(node.parent.cssDisplay))) {
    return false;
  }

  if (node.prev && !isNextLeadingSpaceSensitiveCssDisplay(node.prev.cssDisplay)) {
    return false;
  }

  return true;
}

function isTrailingSpaceSensitiveNode(node) {
  if (isFrontMatterNode(node)) {
    return false;
  }

  if (!node.parent || node.parent.cssDisplay === "none") {
    return false;
  }

  if (isPreLikeNode$1(node.parent)) {
    return true;
  }

  if (!node.next && (node.parent.type === "root" || isScriptLikeTag$1(node.parent) || !isLastChildTrailingSpaceSensitiveCssDisplay(node.parent.cssDisplay))) {
    return false;
  }

  if (node.next && !isPrevTrailingSpaceSensitiveCssDisplay(node.next.cssDisplay)) {
    return false;
  }

  return true;
}

function isDanglingSpaceSensitiveNode(node) {
  return isDanglingSpaceSensitiveCssDisplay(node.cssDisplay) && !isScriptLikeTag$1(node);
}

function replaceNewlines$1(text, replacement) {
  return text.split(/(\n)/g).map(function (data, index) {
    return index % 2 === 1 ? replacement : data;
  });
}

function replaceDocNewlines$1(doc$$2, replacement) {
  return mapDoc$4(doc$$2, function (currentDoc) {
    return typeof currentDoc === "string" && currentDoc.includes("\n") ? concat$9(replaceNewlines$1(currentDoc, replacement)) : currentDoc;
  });
}

function forceNextEmptyLine$1(node) {
  return isFrontMatterNode(node) || node.next && node.sourceSpan.end.line + 1 < node.next.sourceSpan.start.line;
}
/** firstChild leadingSpaces and lastChild trailingSpaces */


function forceBreakContent$1(node) {
  return forceBreakChildren$1(node) || node.type === "element" && node.children.length !== 0 && (["body", "template", "script", "style"].indexOf(node.name) !== -1 || node.children.some(function (child) {
    return hasNonTextChild(child);
  }));
}
/** spaces between children */


function forceBreakChildren$1(node) {
  return node.type === "element" && node.children.length !== 0 && (["html", "head", "ul", "ol", "select"].indexOf(node.name) !== -1 || node.cssDisplay.startsWith("table") && node.cssDisplay !== "table-cell");
}

function preferHardlineAsLeadingSpaces$1(node) {
  return preferHardlineAsSurroundingSpaces(node) || node.prev && preferHardlineAsTrailingSpaces(node.prev) || isCustomElementWithSurroundingLineBreak(node);
}

function preferHardlineAsTrailingSpaces(node) {
  return preferHardlineAsSurroundingSpaces(node) || node.type === "element" && node.fullName === "br" || isCustomElementWithSurroundingLineBreak(node);
}

function isCustomElementWithSurroundingLineBreak(node) {
  return isCustomElement(node) && hasSurroundingLineBreak(node);
}

function isCustomElement(node) {
  return node.type === "element" && !node.namespace && node.name.includes("-");
}

function hasSurroundingLineBreak(node) {
  return hasLeadingLineBreak(node) && hasTrailingLineBreak(node);
}

function hasLeadingLineBreak(node) {
  return node.hasLeadingSpaces && (node.prev ? node.prev.sourceSpan.end.line < node.sourceSpan.start.line : node.parent.type === "root" || node.parent.startSourceSpan.end.line < node.sourceSpan.start.line);
}

function hasTrailingLineBreak(node) {
  return node.hasTrailingSpaces && (node.next ? node.next.sourceSpan.start.line > node.sourceSpan.end.line : node.parent.type === "root" || node.parent.endSourceSpan.start.line > node.sourceSpan.end.line);
}

function preferHardlineAsSurroundingSpaces(node) {
  switch (node.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;

    case "element":
      return ["script", "select"].indexOf(node.name) !== -1;
  }

  return false;
}

function getLastDescendant$1(node) {
  return node.lastChild ? getLastDescendant$1(node.lastChild) : node;
}

function hasNonTextChild(node) {
  return node.children && node.children.some(function (child) {
    return child.type !== "text";
  });
}

function inferScriptParser$1(node) {
  if (node.name === "script" && !node.attrMap.src) {
    if (!node.attrMap.lang && !node.attrMap.type || node.attrMap.type === "module" || node.attrMap.type === "text/javascript" || node.attrMap.type === "text/babel" || node.attrMap.type === "application/javascript") {
      return "babylon";
    }

    if (node.attrMap.type === "application/x-typescript" || node.attrMap.lang === "ts" || node.attrMap.lang === "tsx") {
      return "typescript";
    }

    if (node.attrMap.type === "text/markdown") {
      return "markdown";
    }
  }

  if (node.name === "style") {
    if (!node.attrMap.lang || node.attrMap.lang === "postcss") {
      return "css";
    }

    if (node.attrMap.lang === "scss") {
      return "scss";
    }

    if (node.attrMap.lang === "less") {
      return "less";
    }
  }

  return null;
}

function isBlockLikeCssDisplay(cssDisplay) {
  return cssDisplay === "block" || cssDisplay === "list-item" || cssDisplay.startsWith("table");
}

function isFirstChildLeadingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isLastChildTrailingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isPrevTrailingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay);
}

function isNextLeadingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay);
}

function isDanglingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isPreLikeNode$1(node) {
  return getNodeCssStyleWhiteSpace(node).startsWith("pre");
}

function countParents$1(path) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  var counter = 0;

  for (var i = path.stack.length - 1; i >= 0; i--) {
    var value = path.stack[i];

    if (value && _typeof(value) === "object" && !Array.isArray(value) && predicate(value)) {
      counter++;
    }
  }

  return counter;
}

function hasParent(node, fn) {
  var current = node;

  while (current) {
    if (fn(current)) {
      return true;
    }

    current = current.parent;
  }

  return false;
}

function getNodeCssStyleDisplay(node, options) {
  if (node.prev && node.prev.type === "comment") {
    // <!-- display: block -->
    var match = node.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);

    if (match) {
      return match[1];
    }
  }

  var isInSvgForeignObject = false;

  if (node.type === "element" && node.namespace === "svg") {
    if (hasParent(node, function (parent) {
      return parent.fullName === "svg:foreignObject";
    })) {
      isInSvgForeignObject = true;
    } else {
      return node.name === "svg" ? "inline-block" : "block";
    }
  }

  switch (options.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";

    case "ignore":
      return "block";

    default:
      return node.type === "element" && (!node.namespace || isInSvgForeignObject) && CSS_DISPLAY_TAGS[node.name] || CSS_DISPLAY_DEFAULT;
  }
}

function getNodeCssStyleWhiteSpace(node) {
  return node.type === "element" && !node.namespace && CSS_WHITE_SPACE_TAGS[node.name] || CSS_WHITE_SPACE_DEFAULT;
}

function getCommentData$1(node) {
  var rightTrimmedValue = node.value.trimRight();
  var hasLeadingEmptyLine = /^[^\S\n]*?\n/.test(node.value);

  if (hasLeadingEmptyLine) {
    /**
     *     <!--
     *     123
     *        456
     *     -->
     */
    return dedentString$1(rightTrimmedValue.replace(/^\s*\n/, ""));
  }
  /**
   *     <!-- 123 -->
   *
   *     <!-- 123
   *     -->
   *
   *     <!-- 123
   *
   *     -->
   */


  if (!rightTrimmedValue.includes("\n")) {
    return rightTrimmedValue.trimLeft();
  }

  var firstNewlineIndex = rightTrimmedValue.indexOf("\n");
  var dataWithoutLeadingLine = rightTrimmedValue.slice(firstNewlineIndex + 1);
  var minIndentationForDataWithoutLeadingLine = getMinIndentation(dataWithoutLeadingLine);
  var leadingSpaces = rightTrimmedValue.match(/^[^\n\S]*/)[0].length;
  var commentDataStartColumn = node.sourceSpan.start.col + "<!--".length + leadingSpaces;
  /**
   *     <!-- 123
   *          456 -->
   */

  if (minIndentationForDataWithoutLeadingLine >= commentDataStartColumn) {
    return dedentString$1(" ".repeat(commentDataStartColumn) + rightTrimmedValue.slice(leadingSpaces));
  }

  var leadingLineValue = rightTrimmedValue.slice(0, firstNewlineIndex);
  /**
   *     <!-- 123
   *     456 -->
   */

  return leadingLineValue.trim() + "\n" + dedentString$1(dataWithoutLeadingLine, minIndentationForDataWithoutLeadingLine);
}

function getMinIndentation(text) {
  var minIndentation = Infinity;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = text.split("\n")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var lineText = _step2.value;

      if (lineText.length === 0) {
        continue;
      }

      if (/\S/.test(lineText[0])) {
        return 0;
      }

      var indentation = lineText.match(/^\s*/)[0].length;

      if (lineText.length === indentation) {
        continue;
      }

      if (indentation < minIndentation) {
        minIndentation = indentation;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return minIndentation === Infinity ? 0 : minIndentation;
}

function dedentString$1(text) {
  var minIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getMinIndentation(text);
  return minIndent === 0 ? text : text.split("\n").map(function (lineText) {
    return lineText.slice(minIndent);
  }).join("\n");
}

function normalizeParts$1(parts) {
  var newParts = [];
  var restParts = parts.slice();

  while (restParts.length !== 0) {
    var part = restParts.shift();

    if (!part) {
      continue;
    }

    if (part.type === "concat") {
      Array.prototype.unshift.apply(restParts, part.parts);
      continue;
    }

    if (newParts.length !== 0 && typeof newParts[newParts.length - 1] === "string" && typeof part === "string") {
      newParts.push(newParts.pop() + part);
      continue;
    }

    newParts.push(part);
  }

  return newParts;
}

function identity(x) {
  return x;
}

var utils_1$3 = {
  HTML_ELEMENT_ATTRIBUTES: HTML_ELEMENT_ATTRIBUTES,
  HTML_TAGS: HTML_TAGS,
  canHaveInterpolation: canHaveInterpolation,
  countParents: countParents$1,
  dedentString: dedentString$1,
  forceBreakChildren: forceBreakChildren$1,
  forceBreakContent: forceBreakContent$1,
  forceNextEmptyLine: forceNextEmptyLine$1,
  getCommentData: getCommentData$1,
  getLastDescendant: getLastDescendant$1,
  getNodeCssStyleDisplay: getNodeCssStyleDisplay,
  getNodeCssStyleWhiteSpace: getNodeCssStyleWhiteSpace,
  getPrettierIgnoreAttributeCommentData: getPrettierIgnoreAttributeCommentData$1,
  hasPrettierIgnore: hasPrettierIgnore$1,
  identity: identity,
  inferScriptParser: inferScriptParser$1,
  isDanglingSpaceSensitiveNode: isDanglingSpaceSensitiveNode,
  isFrontMatterNode: isFrontMatterNode,
  isIndentationSensitiveNode: isIndentationSensitiveNode,
  isLeadingSpaceSensitiveNode: isLeadingSpaceSensitiveNode,
  isPreLikeNode: isPreLikeNode$1,
  isScriptLikeTag: isScriptLikeTag$1,
  isTrailingSpaceSensitiveNode: isTrailingSpaceSensitiveNode,
  isWhitespaceSensitiveNode: isWhitespaceSensitiveNode,
  normalizeParts: normalizeParts$1,
  preferHardlineAsLeadingSpaces: preferHardlineAsLeadingSpaces$1,
  preferHardlineAsTrailingSpaces: preferHardlineAsTrailingSpaces,
  replaceDocNewlines: replaceDocNewlines$1,
  replaceNewlines: replaceNewlines$1
};

var canHaveInterpolation$1 = utils_1$3.canHaveInterpolation;
var getNodeCssStyleDisplay$1 = utils_1$3.getNodeCssStyleDisplay;
var isDanglingSpaceSensitiveNode$1 = utils_1$3.isDanglingSpaceSensitiveNode;
var isIndentationSensitiveNode$1 = utils_1$3.isIndentationSensitiveNode;
var isLeadingSpaceSensitiveNode$1 = utils_1$3.isLeadingSpaceSensitiveNode;
var isTrailingSpaceSensitiveNode$1 = utils_1$3.isTrailingSpaceSensitiveNode;
var isWhitespaceSensitiveNode$1 = utils_1$3.isWhitespaceSensitiveNode;
var PREPROCESS_PIPELINE = [removeIgnorableFirstLf, mergeCdataIntoText, extractInterpolation, extractWhitespaces, addCssDisplay, addIsSelfClosing, addIsSpaceSensitive, mergeSimpleElementIntoText];

function preprocess(ast, options) {
  for (var _i = 0; _i < PREPROCESS_PIPELINE.length; _i++) {
    var fn = PREPROCESS_PIPELINE[_i];
    ast = fn(ast, options);
  }

  return ast;
}

function removeIgnorableFirstLf(ast
/*, options */
) {
  return ast.map(function (node) {
    if (node.type === "element" && node.tagDefinition.ignoreFirstLf && node.children.length !== 0 && node.children[0].type === "text" && node.children[0].value[0] === "\n") {
      var text = node.children[0];
      return node.clone({
        children: text.value.length === 1 ? node.children.slice(1) : [].concat(text.clone({
          value: text.value.slice(1)
        }), node.children.slice(1))
      });
    }

    return node;
  });
}

function mergeNodeIntoText(ast, shouldMerge, getValue) {
  return ast.map(function (node) {
    if (node.children) {
      var shouldMergeResults = node.children.map(shouldMerge);

      if (shouldMergeResults.some(Boolean)) {
        var newChildren = [];

        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];

          if (child.type !== "text" && !shouldMergeResults[i]) {
            newChildren.push(child);
            continue;
          }

          var newChild = child.type === "text" ? child : child.clone({
            type: "text",
            value: getValue(child)
          });

          if (newChildren.length === 0 || newChildren[newChildren.length - 1].type !== "text") {
            newChildren.push(newChild);
            continue;
          }

          var lastChild = newChildren.pop();
          var ParseSourceSpan = lastChild.sourceSpan.constructor;
          newChildren.push(lastChild.clone({
            value: lastChild.value + newChild.value,
            sourceSpan: new ParseSourceSpan(lastChild.sourceSpan.start, newChild.sourceSpan.end)
          }));
        }

        return node.clone({
          children: newChildren
        });
      }
    }

    return node;
  });
}

function mergeCdataIntoText(ast
/*, options */
) {
  return mergeNodeIntoText(ast, function (node) {
    return node.type === "cdata";
  }, function (node) {
    return "<![CDATA[".concat(node.value, "]]>");
  });
}

function mergeSimpleElementIntoText(ast
/*, options */
) {
  var isSimpleElement = function isSimpleElement(node) {
    return node.type === "element" && node.attrs.length === 0 && node.children.length === 1 && node.firstChild.type === "text" && // \xA0: non-breaking whitespace
    !/[^\S\xA0]/.test(node.children[0].value) && !node.firstChild.hasLeadingSpaces && !node.firstChild.hasTrailingSpaces && node.isLeadingSpaceSensitive && !node.hasLeadingSpaces && node.isTrailingSpaceSensitive && !node.hasTrailingSpaces && node.prev && node.prev.type === "text" && node.next && node.next.type === "text";
  };

  return ast.map(function (node) {
    if (node.children) {
      var isSimpleElementResults = node.children.map(isSimpleElement);

      if (isSimpleElementResults.some(Boolean)) {
        var newChildren = [];

        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];

          if (isSimpleElementResults[i]) {
            var lastChild = newChildren.pop();
            var nextChild = node.children[++i];
            var ParseSourceSpan = node.sourceSpan.constructor;
            var isTrailingSpaceSensitive = nextChild.isTrailingSpaceSensitive,
                hasTrailingSpaces = nextChild.hasTrailingSpaces;
            newChildren.push(lastChild.clone({
              value: lastChild.value + "<".concat(child.rawName, ">") + child.firstChild.value + "</".concat(child.rawName, ">") + nextChild.value,
              sourceSpan: new ParseSourceSpan(lastChild.sourceSpan.start, nextChild.sourceSpan.end),
              isTrailingSpaceSensitive: isTrailingSpaceSensitive,
              hasTrailingSpaces: hasTrailingSpaces
            }));
          } else {
            newChildren.push(child);
          }
        }

        return node.clone({
          children: newChildren
        });
      }
    }

    return node;
  });
}

function extractInterpolation(ast, options) {
  if (options.parser === "html") {
    return ast;
  }

  var interpolationRegex = /\{\{([\s\S]+?)\}\}/g;
  return ast.map(function (node) {
    if (!canHaveInterpolation$1(node)) {
      return node;
    }

    var newChildren = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        if (child.type !== "text") {
          newChildren.push(child);
          continue;
        }

        var ParseSourceSpan = child.sourceSpan.constructor;
        var startSourceSpan = child.sourceSpan.start;
        var endSourceSpan = null;
        var components = child.value.split(interpolationRegex);

        for (var i = 0; i < components.length; i++, startSourceSpan = endSourceSpan) {
          var value = components[i];

          if (i % 2 === 0) {
            endSourceSpan = startSourceSpan.moveBy(value.length);

            if (value.length !== 0) {
              newChildren.push({
                type: "text",
                value: value,
                sourceSpan: new ParseSourceSpan(startSourceSpan, endSourceSpan)
              });
            }

            continue;
          }

          endSourceSpan = startSourceSpan.moveBy(value.length + 4); // `{{` + `}}`

          newChildren.push({
            type: "interpolation",
            sourceSpan: new ParseSourceSpan(startSourceSpan, endSourceSpan),
            children: value.length === 0 ? [] : [{
              type: "text",
              value: value,
              sourceSpan: new ParseSourceSpan(startSourceSpan.moveBy(2), endSourceSpan.moveBy(-2))
            }]
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return node.clone({
      children: newChildren
    });
  });
}
/**
 * - add `hasLeadingSpaces` field
 * - add `hasTrailingSpaces` field
 * - add `hasDanglingSpaces` field for parent nodes
 * - add `isWhitespaceSensitive`, `isIndentationSensitive` field for text nodes
 * - remove insensitive whitespaces
 */


function extractWhitespaces(ast
/*, options*/
) {
  var TYPE_WHITESPACE = "whitespace";
  return ast.map(function (node) {
    if (!node.children) {
      return node;
    }

    if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "text" && node.children[0].value.trim().length === 0) {
      return node.clone({
        children: [],
        hasDanglingSpaces: node.children.length !== 0
      });
    }

    var isWhitespaceSensitive = isWhitespaceSensitiveNode$1(node);
    var isIndentationSensitive = isIndentationSensitiveNode$1(node);
    return node.clone({
      children: node.children // extract whitespace nodes
      .reduce(function (newChildren, child) {
        if (child.type !== "text") {
          return newChildren.concat(child);
        }

        if (isWhitespaceSensitive) {
          return newChildren.concat(Object.assign({}, child, {
            isWhitespaceSensitive: isWhitespaceSensitive,
            isIndentationSensitive: isIndentationSensitive
          }));
        }

        var localChildren = [];

        var _child$value$match = child.value.match(/^(\s*)([\s\S]*?)(\s*)$/),
            _child$value$match2 = _slicedToArray(_child$value$match, 4),
            leadingSpaces = _child$value$match2[1],
            text = _child$value$match2[2],
            trailingSpaces = _child$value$match2[3];

        if (leadingSpaces) {
          localChildren.push({
            type: TYPE_WHITESPACE
          });
        }

        var ParseSourceSpan = child.sourceSpan.constructor;

        if (text) {
          localChildren.push({
            type: "text",
            value: text,
            sourceSpan: new ParseSourceSpan(child.sourceSpan.start.moveBy(leadingSpaces.length), child.sourceSpan.end.moveBy(-trailingSpaces.length))
          });
        }

        if (trailingSpaces) {
          localChildren.push({
            type: TYPE_WHITESPACE
          });
        }

        return newChildren.concat(localChildren);
      }, []) // set hasLeadingSpaces/hasTrailingSpaces and filter whitespace nodes
      .reduce(function (newChildren, child, i, children) {
        if (child.type === TYPE_WHITESPACE) {
          return newChildren;
        }

        var hasLeadingSpaces = i !== 0 && children[i - 1].type === TYPE_WHITESPACE;
        var hasTrailingSpaces = i !== children.length - 1 && children[i + 1].type === TYPE_WHITESPACE;
        return newChildren.concat(Object.assign({}, child, {
          hasLeadingSpaces: hasLeadingSpaces,
          hasTrailingSpaces: hasTrailingSpaces
        }));
      }, [])
    });
  });
}

function addIsSelfClosing(ast
/*, options */
) {
  return ast.map(function (node) {
    return Object.assign(node, {
      isSelfClosing: !node.children || node.type === "element" && (node.tagDefinition.isVoid || // self-closing
      node.startSourceSpan === node.endSourceSpan)
    });
  });
}

function addCssDisplay(ast, options) {
  return ast.map(function (node) {
    return Object.assign(node, {
      cssDisplay: getNodeCssStyleDisplay$1(node, options)
    });
  });
}
/**
 * - add `isLeadingSpaceSensitive` field
 * - add `isTrailingSpaceSensitive` field
 * - add `isDanglingSpaceSensitive` field for parent nodes
 */


function addIsSpaceSensitive(ast
/*, options */
) {
  return ast.map(function (node) {
    if (!node.children) {
      return node;
    }

    if (node.children.length === 0) {
      return node.clone({
        isDanglingSpaceSensitive: isDanglingSpaceSensitiveNode$1(node)
      });
    }

    return node.clone({
      children: node.children.map(function (child) {
        return Object.assign({}, child, {
          isLeadingSpaceSensitive: isLeadingSpaceSensitiveNode$1(child),
          isTrailingSpaceSensitive: isTrailingSpaceSensitiveNode$1(child)
        });
      }).map(function (child, index, children) {
        return Object.assign({}, child, {
          isLeadingSpaceSensitive: index === 0 ? child.isLeadingSpaceSensitive : children[index - 1].isTrailingSpaceSensitive && child.isLeadingSpaceSensitive,
          isTrailingSpaceSensitive: index === children.length - 1 ? child.isTrailingSpaceSensitive : children[index + 1].isLeadingSpaceSensitive && child.isTrailingSpaceSensitive
        });
      })
    });
  });
}

var preprocess_1 = preprocess;

function hasPragma$3(text) {
  return /^\s*<!--\s*@(format|prettier)\s*-->/.test(text);
}

function insertPragma$6(text) {
  return "<!-- @format -->\n\n" + text.replace(/^\s*\n/, "");
}

var pragma$6 = {
  hasPragma: hasPragma$3,
  insertPragma: insertPragma$6
};

var _require$$0$builders$4 = doc.builders;
var concat$10 = _require$$0$builders$4.concat;
var group$9 = _require$$0$builders$4.group;
/**
 *     v-for="... in ..."
 *     v-for="... of ..."
 *     v-for="(..., ...) in ..."
 *     v-for="(..., ...) of ..."
 */

function printVueFor$1(value, textToDoc) {
  var _parseVueFor = parseVueFor(value),
      left = _parseVueFor.left,
      operator = _parseVueFor.operator,
      right = _parseVueFor.right;

  return concat$10([group$9(textToDoc("function _(".concat(left, ") {}"), {
    parser: "babylon",
    __isVueForBindingLeft: true
  })), " ", operator, " ", textToDoc(right, {
    parser: "__js_expression"
  })]);
} // modified from https://github.com/vuejs/vue/blob/v2.5.17/src/compiler/parser/index.js#L370-L387


function parseVueFor(value) {
  var forAliasRE = /([^]*?)\s+(in|of)\s+([^]*)/;
  var forIteratorRE = /,([^,}\]]*)(?:,([^,}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var inMatch = value.match(forAliasRE);

  if (!inMatch) {
    return;
  }

  var res = {};
  res.for = inMatch[3].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, "");
  var iteratorMatch = alias.match(forIteratorRE);

  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, "");
    res.iterator1 = iteratorMatch[1].trim();

    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }

  return {
    left: "".concat([res.alias, res.iterator1, res.iterator2].filter(Boolean).join(",")),
    operator: inMatch[2],
    right: res.for
  };
}

function printVueSlotScope$1(value, textToDoc) {
  return textToDoc("function _(".concat(value, ") {}"), {
    parser: "babylon",
    __isVueSlotScope: true
  });
}

var syntaxVue = {
  printVueFor: printVueFor$1,
  printVueSlotScope: printVueSlotScope$1
};

var parseSrcset = createCommonjsModule(function (module) {
  /**
   * Srcset Parser
   *
   * By Alex Bell |  MIT License
   *
   * JS Parser for the string value that appears in markup <img srcset="here">
   *
   * @returns Array [{url: _, d: _, w: _, h:_}, ...]
   *
   * Based super duper closely on the reference algorithm at:
   * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
   *
   * Most comments are copied in directly from the spec
   * (except for comments in parens).
   */
  (function (root, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
      // AMD. Register as an anonymous module.
      undefined([], factory);
    } else if ('object' === 'object' && module.exports) {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    } else {
      // Browser globals (root is window)
      root.parseSrcset = factory();
    }
  })(commonjsGlobal, function () {
    // 1. Let input be the value passed to this algorithm.
    return function (input, options) {
      var logger = options && options.logger || console; // UTILITY FUNCTIONS
      // Manual is faster than RegEx
      // http://bjorn.tipling.com/state-and-regular-expressions-in-javascript
      // http://jsperf.com/whitespace-character/5

      function isSpace(c) {
        return c === " " || // space
        c === "\t" || // horizontal tab
        c === "\n" || // new line
        c === "\f" || // form feed
        c === "\r"; // carriage return
      }

      function collectCharacters(regEx) {
        var chars,
            match = regEx.exec(input.substring(pos));

        if (match) {
          chars = match[0];
          pos += chars.length;
          return chars;
        }
      }

      var inputLength = input.length,
          // (Don't use \s, to avoid matching non-breaking space)
      regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
          regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
          regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
          regexTrailingCommas = /[,]+$/,
          regexNonNegativeInteger = /^\d+$/,
          // ( Positive or negative or unsigned integers or decimals, without or without exponents.
      // Must include at least one digit.
      // According to spec tests any decimal point must be followed by a digit.
      // No leading plus sign is allowed.)
      // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
      regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
          url,
          descriptors,
          currentDescriptor,
          state,
          c,
          // 2. Let position be a pointer into input, initially pointing at the start
      //    of the string.
      pos = 0,
          // 3. Let candidates be an initially empty source set.
      candidates = []; // 4. Splitting loop: Collect a sequence of characters that are space
      //    characters or U+002C COMMA characters. If any U+002C COMMA characters
      //    were collected, that is a parse error.

      while (true) {
        collectCharacters(regexLeadingCommasOrSpaces); // 5. If position is past the end of input, return candidates and abort these steps.

        if (pos >= inputLength) {
          return candidates; // (we're done, this is the sole return path)
        } // 6. Collect a sequence of characters that are not space characters,
        //    and let that be url.


        url = collectCharacters(regexLeadingNotSpaces); // 7. Let descriptors be a new empty list.

        descriptors = []; // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
        //		(1). Remove all trailing U+002C COMMA characters from url. If this removed
        //         more than one character, that is a parse error.

        if (url.slice(-1) === ",") {
          url = url.replace(regexTrailingCommas, ""); // (Jump ahead to step 9 to skip tokenization and just push the candidate).

          parseDescriptors(); //	Otherwise, follow these substeps:
        } else {
          tokenize();
        } // (close else of step 8)
        // 16. Return to the step labeled splitting loop.

      } // (Close of big while loop.)

      /**
       * Tokenizes descriptor properties prior to parsing
       * Returns undefined.
       */


      function tokenize() {
        // 8.1. Descriptor tokeniser: Skip whitespace
        collectCharacters(regexLeadingSpaces); // 8.2. Let current descriptor be the empty string.

        currentDescriptor = ""; // 8.3. Let state be in descriptor.

        state = "in descriptor";

        while (true) {
          // 8.4. Let c be the character at position.
          c = input.charAt(pos); //  Do the following depending on the value of state.
          //  For the purpose of this step, "EOF" is a special character representing
          //  that position is past the end of input.
          // In descriptor

          if (state === "in descriptor") {
            // Do the following, depending on the value of c:
            // Space character
            // If current descriptor is not empty, append current descriptor to
            // descriptors and let current descriptor be the empty string.
            // Set state to after descriptor.
            if (isSpace(c)) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
                currentDescriptor = "";
                state = "after descriptor";
              } // U+002C COMMA (,)
              // Advance position to the next character in input. If current descriptor
              // is not empty, append current descriptor to descriptors. Jump to the step
              // labeled descriptor parser.

            } else if (c === ",") {
              pos += 1;

              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }

              parseDescriptors();
              return; // U+0028 LEFT PARENTHESIS (()
              // Append c to current descriptor. Set state to in parens.
            } else if (c === "(") {
              currentDescriptor = currentDescriptor + c;
              state = "in parens"; // EOF
              // If current descriptor is not empty, append current descriptor to
              // descriptors. Jump to the step labeled descriptor parser.
            } else if (c === "") {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }

              parseDescriptors();
              return; // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor = currentDescriptor + c;
            } // (end "in descriptor"
            // In parens

          } else if (state === "in parens") {
            // U+0029 RIGHT PARENTHESIS ())
            // Append c to current descriptor. Set state to in descriptor.
            if (c === ")") {
              currentDescriptor = currentDescriptor + c;
              state = "in descriptor"; // EOF
              // Append current descriptor to descriptors. Jump to the step labeled
              // descriptor parser.
            } else if (c === "") {
              descriptors.push(currentDescriptor);
              parseDescriptors();
              return; // Anything else
              // Append c to current descriptor.
            } else {
              currentDescriptor = currentDescriptor + c;
            } // After descriptor

          } else if (state === "after descriptor") {
            // Do the following, depending on the value of c:
            // Space character: Stay in this state.
            if (isSpace(c)) {// EOF: Jump to the step labeled descriptor parser.
            } else if (c === "") {
              parseDescriptors();
              return; // Anything else
              // Set state to in descriptor. Set position to the previous character in input.
            } else {
              state = "in descriptor";
              pos -= 1;
            }
          } // Advance position to the next character in input.


          pos += 1; // Repeat this step.
        } // (close while true loop)

      }
      /**
       * Adds descriptor properties to a candidate, pushes to the candidates array
       * @return undefined
       */
      // Declared outside of the while loop so that it's only created once.


      function parseDescriptors() {
        // 9. Descriptor parser: Let error be no.
        var pError = false,
            // 10. Let width be absent.
        // 11. Let density be absent.
        // 12. Let future-compat-h be absent. (We're implementing it now as h)
        w,
            d,
            h,
            i,
            candidate = {},
            desc,
            lastChar,
            value,
            intVal,
            floatVal; // 13. For each descriptor in descriptors, run the appropriate set of steps
        // from the following list:

        for (i = 0; i < descriptors.length; i++) {
          desc = descriptors[i];
          lastChar = desc[desc.length - 1];
          value = desc.substring(0, desc.length - 1);
          intVal = parseInt(value, 10);
          floatVal = parseFloat(value); // If the descriptor consists of a valid non-negative integer followed by
          // a U+0077 LATIN SMALL LETTER W character

          if (regexNonNegativeInteger.test(value) && lastChar === "w") {
            // If width and density are not both absent, then let error be yes.
            if (w || d) {
              pError = true;
            } // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes.
            // Otherwise, let width be the result.


            if (intVal === 0) {
              pError = true;
            } else {
              w = intVal;
            } // If the descriptor consists of a valid floating-point number followed by
            // a U+0078 LATIN SMALL LETTER X character

          } else if (regexFloatingPoint.test(value) && lastChar === "x") {
            // If width, density and future-compat-h are not all absent, then let error
            // be yes.
            if (w || d || h) {
              pError = true;
            } // Apply the rules for parsing floating-point number values to the descriptor.
            // If the result is less than zero, let error be yes. Otherwise, let density
            // be the result.


            if (floatVal < 0) {
              pError = true;
            } else {
              d = floatVal;
            } // If the descriptor consists of a valid non-negative integer followed by
            // a U+0068 LATIN SMALL LETTER H character

          } else if (regexNonNegativeInteger.test(value) && lastChar === "h") {
            // If height and density are not both absent, then let error be yes.
            if (h || d) {
              pError = true;
            } // Apply the rules for parsing non-negative integers to the descriptor.
            // If the result is zero, let error be yes. Otherwise, let future-compat-h
            // be the result.


            if (intVal === 0) {
              pError = true;
            } else {
              h = intVal;
            } // Anything else, Let error be yes.

          } else {
            pError = true;
          }
        } // (close step 13 for loop)
        // 15. If error is still no, then append a new image source to candidates whose
        // URL is url, associated with a width width if not absent and a pixel
        // density density if not absent. Otherwise, there is a parse error.


        if (!pError) {
          candidate.url = url;

          if (w) {
            candidate.w = w;
          }

          if (d) {
            candidate.d = d;
          }

          if (h) {
            candidate.h = h;
          }

          candidates.push(candidate);
        } else if (logger && logger.error) {
          logger.error("Invalid srcset descriptor found in '" + input + "' at '" + desc + "'.");
        }
      } // (close parseDescriptors fn)

    };
  });
});

var _require$$0$builders$5 = doc.builders;
var concat$11 = _require$$0$builders$5.concat;
var ifBreak$5 = _require$$0$builders$5.ifBreak;
var join$6 = _require$$0$builders$5.join;
var line$7 = _require$$0$builders$5.line;

function printImgSrcset$1(value) {
  var srcset = parseSrcset(value, {
    logger: {
      error: function error(message) {
        throw new Error(message);
      }
    }
  });
  var hasW = srcset.some(function (src) {
    return src.w;
  });
  var hasH = srcset.some(function (src) {
    return src.h;
  });
  var hasX = srcset.some(function (src) {
    return src.d;
  });

  if (hasW + hasH + hasX !== 1) {
    throw new Error("Mixed descriptor in srcset is not supported");
  }

  var key = hasW ? "w" : hasH ? "h" : "d";
  var unit = hasW ? "w" : hasH ? "h" : "x";

  var getMax = function getMax(values) {
    return Math.max.apply(Math, values);
  };

  var urls = srcset.map(function (src) {
    return src.url;
  });
  var maxUrlLength = getMax(urls.map(function (url) {
    return url.length;
  }));
  var descriptors = srcset.map(function (src) {
    return src[key];
  }).map(function (descriptor) {
    return descriptor ? descriptor.toString() : "";
  });
  var descriptorLeftLengths = descriptors.map(function (descriptor) {
    var index = descriptor.indexOf(".");
    return index === -1 ? descriptor.length : index;
  });
  var maxDescriptorLeftLength = getMax(descriptorLeftLengths);
  return join$6(concat$11([",", line$7]), urls.map(function (url, index) {
    var parts = [url];
    var descriptor = descriptors[index];

    if (descriptor) {
      var urlPadding = maxUrlLength - url.length + 1;
      var descriptorPadding = maxDescriptorLeftLength - descriptorLeftLengths[index];
      var alignment = " ".repeat(urlPadding + descriptorPadding);
      parts.push(ifBreak$5(alignment, " "), descriptor + unit);
    }

    return concat$11(parts);
  }));
}

var syntaxAttribute = {
  printImgSrcset: printImgSrcset$1
};

var builders = doc.builders;
var _require$$0$utils = doc.utils;
var stripTrailingHardline$1 = _require$$0$utils.stripTrailingHardline;
var mapDoc$3 = _require$$0$utils.mapDoc;
var breakParent$2 = builders.breakParent;
var fill$3 = builders.fill;
var group$8 = builders.group;
var hardline$7 = builders.hardline;
var ifBreak$4 = builders.ifBreak;
var indent$5 = builders.indent;
var join$5 = builders.join;
var line$6 = builders.line;
var literalline$2 = builders.literalline;
var markAsRoot$2 = builders.markAsRoot;
var softline$4 = builders.softline;
var countParents = utils_1$3.countParents;
var dedentString = utils_1$3.dedentString;
var forceBreakChildren = utils_1$3.forceBreakChildren;
var forceBreakContent = utils_1$3.forceBreakContent;
var forceNextEmptyLine = utils_1$3.forceNextEmptyLine;
var getCommentData = utils_1$3.getCommentData;
var getLastDescendant = utils_1$3.getLastDescendant;
var getPrettierIgnoreAttributeCommentData = utils_1$3.getPrettierIgnoreAttributeCommentData;
var hasPrettierIgnore = utils_1$3.hasPrettierIgnore;
var inferScriptParser = utils_1$3.inferScriptParser;
var isPreLikeNode = utils_1$3.isPreLikeNode;
var isScriptLikeTag = utils_1$3.isScriptLikeTag;
var normalizeParts = utils_1$3.normalizeParts;
var preferHardlineAsLeadingSpaces = utils_1$3.preferHardlineAsLeadingSpaces;
var replaceDocNewlines = utils_1$3.replaceDocNewlines;
var replaceNewlines = utils_1$3.replaceNewlines;
var insertPragma$5 = pragma$6.insertPragma;
var printVueFor = syntaxVue.printVueFor;
var printVueSlotScope = syntaxVue.printVueSlotScope;
var printImgSrcset = syntaxAttribute.printImgSrcset;

function concat$8(parts) {
  var newParts = normalizeParts(parts);
  return newParts.length === 0 ? "" : newParts.length === 1 ? newParts[0] : builders.concat(newParts);
}

function embed$2(path, print, textToDoc, options) {
  var node = path.getValue();

  switch (node.type) {
    case "text":
      {
        if (isScriptLikeTag(node.parent)) {
          var parser = inferScriptParser(node.parent);

          if (parser) {
            var value = parser === "markdown" ? dedentString(node.value.replace(/^[^\S\n]*?\n/, "")) : node.value;
            return builders.concat([concat$8([breakParent$2, printOpeningTagPrefix(node), markAsRoot$2(stripTrailingHardline$1(textToDoc(value, {
              parser: parser
            }))), printClosingTagSuffix(node)])]);
          }
        } else if (node.parent.type === "interpolation") {
          return concat$8([indent$5(concat$8([line$6, textToDoc(node.value, options.parser === "angular" ? {
            parser: "__ng_interpolation",
            trailingComma: "none"
          } : options.parser === "vue" ? {
            parser: "__vue_expression"
          } : {
            parser: "__js_expression"
          })])), node.parent.next && needsToBorrowPrevClosingTagEndMarker(node.parent.next) ? " " : line$6]);
        }

        break;
      }

    case "attribute":
      {
        if (!node.value) {
          break;
        }

        var embeddedAttributeValueDoc = printEmbeddedAttributeValue(node, function (code, opts) {
          return (// strictly prefer single quote to avoid unnecessary html entity escape
            textToDoc(code, Object.assign({
              __isInHtmlAttribute: true
            }, opts))
          );
        }, options);

        if (embeddedAttributeValueDoc) {
          return concat$8([node.rawName, '="', mapDoc$3(embeddedAttributeValueDoc, function (doc$$2) {
            return typeof doc$$2 === "string" ? doc$$2.replace(/"/g, "&quot;") : doc$$2;
          }), '"']);
        }

        break;
      }

    case "yaml":
      return markAsRoot$2(concat$8(["---", hardline$7, node.value.trim().length === 0 ? "" : replaceDocNewlines(textToDoc(node.value, {
        parser: "yaml"
      }), literalline$2), "---"]));
  }
}

function genericPrint$2(path, options, print) {
  var node = path.getValue();

  switch (node.type) {
    case "root":
      // use original concat to not break stripTrailingHardline
      return builders.concat([group$8(printChildren(path, options, print)), hardline$7]);

    case "element":
    case "ieConditionalComment":
      {
        /**
         * do not break:
         *
         *     <div>{{
         *         ~
         *       interpolation
         *     }}</div>
         *            ~
         *
         * exception: break if the opening tag breaks
         *
         *     <div
         *       long
         *           ~
         *       >{{
         *         interpolation
         *       }}</div
         *              ~
         *     >
         */
        var shouldHugContent = node.children.length === 1 && node.firstChild.type === "interpolation" && node.firstChild.isLeadingSpaceSensitive && !node.firstChild.hasLeadingSpaces && node.lastChild.isTrailingSpaceSensitive && !node.lastChild.hasTrailingSpaces;
        var attrGroupId = Symbol("element-attr-group-id");
        return concat$8([group$8(concat$8([group$8(printOpeningTag(path, options, print), {
          id: attrGroupId
        }), node.children.length === 0 ? node.hasDanglingSpaces && node.isDanglingSpaceSensitive ? line$6 : "" : concat$8([forceBreakContent(node) ? breakParent$2 : "", function (childrenDoc) {
          return shouldHugContent ? ifBreak$4(indent$5(childrenDoc), childrenDoc, {
            groupId: attrGroupId
          }) : isScriptLikeTag(node) && node.parent.type === "root" && options.parser === "vue" ? childrenDoc : indent$5(childrenDoc);
        }(concat$8([shouldHugContent ? ifBreak$4(softline$4, "", {
          groupId: attrGroupId
        }) : node.firstChild.type === "text" && node.firstChild.isWhitespaceSensitive && node.firstChild.isIndentationSensitive ? node.firstChild.value.indexOf("\n") === -1 ? "" : literalline$2 : node.firstChild.hasLeadingSpaces && node.firstChild.isLeadingSpaceSensitive ? line$6 : softline$4, printChildren(path, options, print)])), (node.next ? needsToBorrowPrevClosingTagEndMarker(node.next) : needsToBorrowLastChildClosingTagEndMarker(node.parent)) ? node.lastChild.hasTrailingSpaces && node.lastChild.isTrailingSpaceSensitive ? " " : "" : shouldHugContent ? ifBreak$4(softline$4, "", {
          groupId: attrGroupId
        }) : node.lastChild.hasTrailingSpaces && node.lastChild.isTrailingSpaceSensitive ? line$6 : node.type === "element" && isPreLikeNode(node) && node.lastChild.type === "text" && (node.lastChild.value.indexOf("\n") === -1 || new RegExp("\\n\\s{".concat(options.tabWidth * countParents(path, function (n) {
          return n.parent && n.parent.type !== "root";
        }), "}$")).test(node.lastChild.value)) ?
        /**
         *     <div>
         *       <pre>
         *         something
         *       </pre>
         *            ~
         *     </div>
         */
        "" : softline$4])])), printClosingTag(node)]);
      }

    case "interpolation":
      return concat$8([printOpeningTagStart(node), concat$8(path.map(print, "children")), printClosingTagEnd(node)]);

    case "text":
      {
        if (node.parent.type === "interpolation") {
          // replace the trailing literalline with hardline for better readability
          var trailingNewlineRegex = /\n[^\S\n]*?$/;
          var hasTrailingNewline = trailingNewlineRegex.test(node.value);
          var value = hasTrailingNewline ? node.value.replace(trailingNewlineRegex, "") : node.value;
          return concat$8([concat$8(replaceNewlines(value, literalline$2)), hasTrailingNewline ? hardline$7 : ""]);
        }

        return fill$3(normalizeParts([].concat(printOpeningTagPrefix(node), getTextValueParts(node), printClosingTagSuffix(node))));
      }

    case "docType":
      return concat$8([group$8(concat$8([printOpeningTagStart(node), " ", node.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), printClosingTagEnd(node)]);

    case "comment":
      {
        var _value = getCommentData(node);

        return concat$8([group$8(concat$8([printOpeningTagStart(node), _value.trim().length === 0 ? "" : concat$8([indent$5(concat$8([node.prev && needsToBorrowNextOpeningTagStartMarker(node.prev) ? breakParent$2 : "", line$6, concat$8(replaceNewlines(_value, hardline$7))])), (node.next ? needsToBorrowPrevClosingTagEndMarker(node.next) : needsToBorrowLastChildClosingTagEndMarker(node.parent)) ? " " : line$6])])), printClosingTagEnd(node)]);
      }

    case "attribute":
      return concat$8([node.rawName, node.value === null ? "" : concat$8(['="', concat$8(replaceNewlines(node.value.replace(/"/g, "&quot;"), literalline$2)), '"'])]);

    case "yaml":
    case "toml":
      return node.raw;

    default:
      throw new Error("Unexpected node type ".concat(node.type));
  }
}

function printChildren(path, options, print) {
  var node = path.getValue();

  if (forceBreakChildren(node)) {
    return concat$8([breakParent$2, concat$8(path.map(function (childPath) {
      var childNode = childPath.getValue();
      var prevBetweenLine = !childNode.prev ? "" : printBetweenLine(childNode.prev, childNode);
      return concat$8([!prevBetweenLine ? "" : concat$8([prevBetweenLine, forceNextEmptyLine(childNode.prev) ? hardline$7 : ""]), printChild(childPath)]);
    }, "children"))]);
  }

  var groupIds = node.children.map(function () {
    return Symbol("");
  });
  return concat$8(path.map(function (childPath, childIndex) {
    var childNode = childPath.getValue();

    if (childNode.type === "text") {
      return printChild(childPath);
    }

    var prevParts = [];
    var leadingParts = [];
    var trailingParts = [];
    var nextParts = [];
    var prevBetweenLine = childNode.prev ? printBetweenLine(childNode.prev, childNode) : "";
    var nextBetweenLine = childNode.next ? printBetweenLine(childNode, childNode.next) : "";

    if (prevBetweenLine) {
      if (forceNextEmptyLine(childNode.prev)) {
        prevParts.push(hardline$7, hardline$7);
      } else if (prevBetweenLine === hardline$7) {
        prevParts.push(hardline$7);
      } else {
        if (childNode.prev.type === "text") {
          leadingParts.push(prevBetweenLine);
        } else {
          leadingParts.push(ifBreak$4("", softline$4, {
            groupId: groupIds[childIndex - 1]
          }));
        }
      }
    }

    if (nextBetweenLine) {
      if (forceNextEmptyLine(childNode)) {
        if (childNode.next.type === "text") {
          nextParts.push(hardline$7, hardline$7);
        }
      } else if (nextBetweenLine === hardline$7) {
        if (childNode.next.type === "text") {
          nextParts.push(hardline$7);
        }
      } else {
        trailingParts.push(nextBetweenLine);
      }
    }

    return concat$8([].concat(prevParts, group$8(concat$8([concat$8(leadingParts), group$8(concat$8([printChild(childPath), concat$8(trailingParts)]), {
      id: groupIds[childIndex]
    })])), nextParts));
  }, "children"));

  function printChild(childPath) {
    if (!hasPrettierIgnore(childPath)) {
      return print(childPath);
    }

    var child = childPath.getValue();
    return concat$8([printOpeningTagPrefix(child), options.originalText.slice(options.locStart(child) + (child.prev && needsToBorrowNextOpeningTagStartMarker(child.prev) ? printOpeningTagStartMarker(child).length : 0), options.locEnd(child) - (child.next && needsToBorrowPrevClosingTagEndMarker(child.next) ? printClosingTagEndMarker(child).length : 0), printClosingTagSuffix(child))]);
  }

  function printBetweenLine(prevNode, nextNode) {
    return needsToBorrowNextOpeningTagStartMarker(prevNode) && (
    /**
     *     123<a
     *          ~
     *       ><b>
     */
    nextNode.firstChild ||
    /**
     *     123<!--
     *            ~
     *     -->
     */
    nextNode.isSelfClosing ||
    /**
     *     123<span
     *             ~
     *       attr
     */
    nextNode.type === "element" && nextNode.attrs.length !== 0) ||
    /**
     *     <img
     *       src="long"
     *                 ~
     *     />123
     */
    prevNode.type === "element" && prevNode.isSelfClosing && needsToBorrowPrevClosingTagEndMarker(nextNode) ? "" : !nextNode.isLeadingSpaceSensitive || preferHardlineAsLeadingSpaces(nextNode) ||
    /**
     *       Want to write us a letter? Use our<a
     *         ><b><a>mailing address</a></b></a
     *                                          ~
     *       >.
     */
    needsToBorrowPrevClosingTagEndMarker(nextNode) && prevNode.lastChild && needsToBorrowParentClosingTagStartMarker(prevNode.lastChild) && prevNode.lastChild.lastChild && needsToBorrowParentClosingTagStartMarker(prevNode.lastChild.lastChild) ? hardline$7 : nextNode.hasLeadingSpaces ? line$6 : softline$4;
  }
}

function printOpeningTag(path, options, print) {
  var node = path.getValue();
  var forceNotToBreakAttrContent = node.type === "element" && node.fullName === "script" && node.attrs.length === 1 && node.attrs[0].fullName === "src" && node.children.length === 0;
  return concat$8([printOpeningTagStart(node), !node.attrs || node.attrs.length === 0 ? node.isSelfClosing ?
  /**
   *     <br />
   *        ^
   */
  " " : "" : concat$8([indent$5(concat$8([forceNotToBreakAttrContent ? " " : line$6, join$5(line$6, function (ignoreAttributeData) {
    var hasPrettierIgnoreAttribute = typeof ignoreAttributeData === "boolean" ? function () {
      return ignoreAttributeData;
    } : Array.isArray(ignoreAttributeData) ? function (attr) {
      return ignoreAttributeData.indexOf(attr.rawName) !== -1;
    } : function () {
      return false;
    };
    return path.map(function (attrPath) {
      var attr = attrPath.getValue();
      return hasPrettierIgnoreAttribute(attr) ? options.originalText.slice(options.locStart(attr), options.locEnd(attr)) : print(attrPath);
    }, "attrs");
  }(node.prev && node.prev.type === "comment" && getPrettierIgnoreAttributeCommentData(node.prev.value)))])),
  /**
   *     123<a
   *       attr
   *           ~
   *       >456
   */
  node.firstChild && needsToBorrowParentOpeningTagEndMarker(node.firstChild) ||
  /**
   *     <span
   *       >123<meta
   *                ~
   *     /></span>
   */
  node.isSelfClosing && needsToBorrowLastChildClosingTagEndMarker(node.parent) ? "" : node.isSelfClosing ? forceNotToBreakAttrContent ? " " : line$6 : forceNotToBreakAttrContent ? "" : softline$4]), node.isSelfClosing ? "" : printOpeningTagEnd(node)]);
}

function printOpeningTagStart(node) {
  return node.prev && needsToBorrowNextOpeningTagStartMarker(node.prev) ? "" : concat$8([printOpeningTagPrefix(node), printOpeningTagStartMarker(node)]);
}

function printOpeningTagEnd(node) {
  return node.firstChild && needsToBorrowParentOpeningTagEndMarker(node.firstChild) ? "" : printOpeningTagEndMarker(node);
}

function printClosingTag(node) {
  return concat$8([node.isSelfClosing ? "" : printClosingTagStart(node), printClosingTagEnd(node)]);
}

function printClosingTagStart(node) {
  return node.lastChild && needsToBorrowParentClosingTagStartMarker(node.lastChild) ? "" : concat$8([printClosingTagPrefix(node), printClosingTagStartMarker(node)]);
}

function printClosingTagEnd(node) {
  return (node.next ? needsToBorrowPrevClosingTagEndMarker(node.next) : needsToBorrowLastChildClosingTagEndMarker(node.parent)) ? "" : concat$8([printClosingTagEndMarker(node), printClosingTagSuffix(node)]);
}

function needsToBorrowNextOpeningTagStartMarker(node) {
  /**
   *     123<p
   *        ^^
   *     >
   */
  return node.next && node.type === "text" && node.isTrailingSpaceSensitive && !node.hasTrailingSpaces;
}

function needsToBorrowParentOpeningTagEndMarker(node) {
  /**
   *     <p
   *       >123
   *       ^
   *
   *     <p
   *       ><a
   *       ^
   */
  return !node.prev && node.isLeadingSpaceSensitive && !node.hasLeadingSpaces;
}

function needsToBorrowPrevClosingTagEndMarker(node) {
  /**
   *     <p></p
   *     >123
   *     ^
   *
   *     <p></p
   *     ><a
   *     ^
   */
  return node.prev && node.isLeadingSpaceSensitive && !node.hasLeadingSpaces;
}

function needsToBorrowLastChildClosingTagEndMarker(node) {
  /**
   *     <p
   *       ><a></a
   *       ></p
   *       ^
   *     >
   */
  return node.lastChild && node.lastChild.isTrailingSpaceSensitive && !node.lastChild.hasTrailingSpaces && getLastDescendant(node.lastChild).type !== "text";
}

function needsToBorrowParentClosingTagStartMarker(node) {
  /**
   *     <p>
   *       123</p
   *          ^^^
   *     >
   *
   *         123</b
   *       ></a
   *        ^^^
   *     >
   */
  return !node.next && !node.hasTrailingSpaces && node.isTrailingSpaceSensitive && getLastDescendant(node).type === "text";
}

function printOpeningTagPrefix(node) {
  return needsToBorrowParentOpeningTagEndMarker(node) ? printOpeningTagEndMarker(node.parent) : needsToBorrowPrevClosingTagEndMarker(node) ? printClosingTagEndMarker(node.prev) : "";
}

function printClosingTagPrefix(node) {
  return needsToBorrowLastChildClosingTagEndMarker(node) ? printClosingTagEndMarker(node.lastChild) : "";
}

function printClosingTagSuffix(node) {
  return needsToBorrowParentClosingTagStartMarker(node) ? printClosingTagStartMarker(node.parent) : needsToBorrowNextOpeningTagStartMarker(node) ? printOpeningTagStartMarker(node.next) : "";
}

function printOpeningTagStartMarker(node) {
  switch (node.type) {
    case "comment":
      return "<!--";

    case "ieConditionalComment":
      return "<!--[if ".concat(node.condition);

    case "interpolation":
      return "{{";

    case "docType":
      return "<!DOCTYPE";

    default:
      return "<".concat(node.rawName);
  }
}

function printOpeningTagEndMarker(node) {
  assert$3(!node.isSelfClosing);

  switch (node.type) {
    case "ieConditionalComment":
      return "]>";

    default:
      return ">";
  }
}

function printClosingTagStartMarker(node) {
  assert$3(!node.isSelfClosing);

  switch (node.type) {
    case "ieConditionalComment":
      return "<!";

    default:
      return "</".concat(node.rawName);
  }
}

function printClosingTagEndMarker(node) {
  switch (node.type) {
    case "comment":
      return "-->";

    case "ieConditionalComment":
      return "[endif]-->";

    case "interpolation":
      return "}}";

    case "element":
      if (node.isSelfClosing) {
        return "/>";
      }

    // fall through

    default:
      return ">";
  }
}

function getTextValueParts(node) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.value;
  return node.isWhitespaceSensitive ? node.isIndentationSensitive ? replaceNewlines(value, literalline$2) : replaceNewlines(dedentString(value.replace(/^\s*?\n|\n\s*?$/g, "")), hardline$7) : // non-breaking whitespace: 0xA0
  join$5(line$6, value.split(/[^\S\xA0]+/)).parts;
}

function printEmbeddedAttributeValue(node, originalTextToDoc, options) {
  var isKeyMatched = function isKeyMatched(patterns) {
    return new RegExp(patterns.join("|")).test(node.fullName);
  };

  var getValue = function getValue() {
    return node.value.replace(/&quot;/g, '"').replace(/&apos;/g, "'");
  };

  var shouldHug = false;

  var __onHtmlBindingRoot = function __onHtmlBindingRoot(root) {
    var rootNode = root.type === "NGRoot" ? root.node.type === "NGMicrosyntax" && root.node.body.length === 1 && root.node.body[0].type === "NGMicrosyntaxExpression" ? root.node.body[0].expression : root.node : root.type === "JsExpressionRoot" ? root.node : root;

    if (rootNode && (rootNode.type === "ObjectExpression" || rootNode.type === "ArrayExpression")) {
      shouldHug = true;
    }
  };

  var printHug = function printHug(doc$$2) {
    return group$8(doc$$2);
  };

  var printExpand = function printExpand(doc$$2) {
    return group$8(concat$8([indent$5(concat$8([softline$4, doc$$2])), softline$4]));
  };

  var printMaybeHug = function printMaybeHug(doc$$2) {
    return shouldHug ? printHug(doc$$2) : printExpand(doc$$2);
  };

  var textToDoc = function textToDoc(code, opts) {
    return originalTextToDoc(code, Object.assign({
      __onHtmlBindingRoot: __onHtmlBindingRoot
    }, opts));
  };

  if (node.fullName === "srcset" && (node.parent.fullName === "img" || node.parent.fullName === "source")) {
    return printExpand(printImgSrcset(getValue()));
  }

  if (options.parser === "vue") {
    if (node.fullName === "v-for") {
      return printVueFor(getValue(), textToDoc);
    }

    if (node.fullName === "slot-scope") {
      return printVueSlotScope(getValue(), textToDoc);
    }
    /**
     *     @click="jsStatement"
     *     @click="jsExpression"
     *     v-on:click="jsStatement"
     *     v-on:click="jsExpression"
     */


    var vueEventBindingPatterns = ["^@", "^v-on:"];
    /**
     *     :class="vueExpression"
     *     v-bind:id="vueExpression"
     */

    var vueExpressionBindingPatterns = ["^:", "^v-bind:"];
    /**
     *     v-if="jsExpression"
     */

    var jsExpressionBindingPatterns = ["^v-"];

    if (isKeyMatched(vueEventBindingPatterns)) {
      // copied from https://github.com/vuejs/vue/blob/v2.5.17/src/compiler/codegen/events.js#L3-L4
      var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
      var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
      var value = getValue();
      return printMaybeHug(simplePathRE.test(value) || fnExpRE.test(value) ? textToDoc(value, {
        parser: "__js_expression"
      }) : stripTrailingHardline$1(textToDoc(value, {
        parser: "babylon"
      })));
    }

    if (isKeyMatched(vueExpressionBindingPatterns)) {
      return printMaybeHug(textToDoc(getValue(), {
        parser: "__vue_expression"
      }));
    }

    if (isKeyMatched(jsExpressionBindingPatterns)) {
      return printMaybeHug(textToDoc(getValue(), {
        parser: "__js_expression"
      }));
    }
  }

  if (options.parser === "angular") {
    var ngTextToDoc = function ngTextToDoc(code, opts) {
      return (// angular does not allow trailing comma
        textToDoc(code, Object.assign({
          trailingComma: "none"
        }, opts))
      );
    };
    /**
     *     *directive="angularDirective"
     */


    var ngDirectiveBindingPatterns = ["^\\*"];
    /**
     *     (click)="angularStatement"
     *     on-click="angularStatement"
     */

    var ngStatementBindingPatterns = ["^\\(.+\\)$", "^on-"];
    /**
     *     [target]="angularExpression"
     *     bind-target="angularExpression"
     *     [(target)]="angularExpression"
     *     bindon-target="angularExpression"
     */

    var ngExpressionBindingPatterns = ["^\\[.+\\]$", "^bind(on)?-"];

    if (isKeyMatched(ngStatementBindingPatterns)) {
      return printMaybeHug(ngTextToDoc(getValue(), {
        parser: "__ng_action"
      }));
    }

    if (isKeyMatched(ngExpressionBindingPatterns)) {
      return printMaybeHug(ngTextToDoc(getValue(), {
        parser: "__ng_binding"
      }));
    }

    if (isKeyMatched(ngDirectiveBindingPatterns)) {
      return printMaybeHug(ngTextToDoc(getValue(), {
        parser: "__ng_directive"
      }));
    }
  }

  return null;
}

var printerHtml = {
  preprocess: preprocess_1,
  print: genericPrint$2,
  insertPragma: insertPragma$5,
  massageAstNode: clean$4,
  embed: embed$2
};

var CATEGORY_HTML = "HTML"; // format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js

var options$9 = {
  htmlWhitespaceSensitivity: {
    since: "1.15.0",
    category: CATEGORY_HTML,
    type: "choice",
    default: "css",
    description: "How to handle whitespaces in HTML.",
    choices: [{
      value: "css",
      description: "Respect the default value of CSS display property."
    }, {
      value: "strict",
      description: "Whitespaces are considered sensitive."
    }, {
      value: "ignore",
      description: "Whitespaces are considered insensitive."
    }]
  }
};

var name$7 = "HTML";
var type$6 = "markup";
var tmScope$6 = "text.html.basic";
var aceMode$6 = "html";
var codemirrorMode$3 = "htmlmixed";
var codemirrorMimeType$3 = "text/html";
var color$1 = "#e34c26";
var aliases$1 = ["xhtml"];
var extensions$6 = [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"];
var languageId$6 = 146;
var html$1 = {
  name: name$7,
  type: type$6,
  tmScope: tmScope$6,
  aceMode: aceMode$6,
  codemirrorMode: codemirrorMode$3,
  codemirrorMimeType: codemirrorMimeType$3,
  color: color$1,
  aliases: aliases$1,
  extensions: extensions$6,
  languageId: languageId$6
};

var html$2 = Object.freeze({
	name: name$7,
	type: type$6,
	tmScope: tmScope$6,
	aceMode: aceMode$6,
	codemirrorMode: codemirrorMode$3,
	codemirrorMimeType: codemirrorMimeType$3,
	color: color$1,
	aliases: aliases$1,
	extensions: extensions$6,
	languageId: languageId$6,
	default: html$1
});

var name$8 = "Vue";
var type$7 = "markup";
var color$2 = "#2c3e50";
var extensions$7 = [".vue"];
var tmScope$7 = "text.html.vue";
var aceMode$7 = "html";
var languageId$7 = 391;
var vue = {
  name: name$8,
  type: type$7,
  color: color$2,
  extensions: extensions$7,
  tmScope: tmScope$7,
  aceMode: aceMode$7,
  languageId: languageId$7
};

var vue$1 = Object.freeze({
	name: name$8,
	type: type$7,
	color: color$2,
	extensions: extensions$7,
	tmScope: tmScope$7,
	aceMode: aceMode$7,
	languageId: languageId$7,
	default: vue
});

var require$$0$20 = ( html$2 && html$1 ) || html$2;

var require$$1$11 = ( vue$1 && vue ) || vue$1;

var languages$3 = [createLanguage(require$$0$20, {
  override: {
    name: "Angular",
    since: "1.15.0",
    parsers: ["angular"],
    vscodeLanguageIds: ["html"],
    extensions: [".component.html"],
    filenames: []
  }
}), createLanguage(require$$0$20, {
  override: {
    since: "1.15.0",
    parsers: ["html"],
    vscodeLanguageIds: ["html"]
  }
}), createLanguage(require$$1$11, {
  override: {
    since: "1.10.0",
    parsers: ["vue"],
    vscodeLanguageIds: ["vue"]
  }
})];
var printers$3 = {
  html: printerHtml
};
var languageHtml = {
  languages: languages$3,
  printers: printers$3,
  options: options$9
};

var _require$$0$builders$6 = doc.builders;
var indent$7 = _require$$0$builders$6.indent;
var join$8 = _require$$0$builders$6.join;
var hardline$9 = _require$$0$builders$6.hardline;
var softline$6 = _require$$0$builders$6.softline;
var literalline$4 = _require$$0$builders$6.literalline;
var concat$13 = _require$$0$builders$6.concat;
var group$11 = _require$$0$builders$6.group;
var dedentToRoot$1 = _require$$0$builders$6.dedentToRoot;
var _require$$0$utils$1 = doc.utils;
var mapDoc$5 = _require$$0$utils$1.mapDoc;
var stripTrailingHardline$2 = _require$$0$utils$1.stripTrailingHardline;

function embed$4(path, print, textToDoc
/*, options */
) {
  var node = path.getValue();
  var parent = path.getParentNode();
  var parentParent = path.getParentNode(1);

  switch (node.type) {
    case "TemplateLiteral":
      {
        var isCss = [isStyledJsx, isStyledComponents, isCssProp, isAngularComponentStyles].some(function (isIt) {
          return isIt(path);
        });

        if (isCss) {
          // Get full template literal with expressions replaced by placeholders
          var rawQuasis = node.quasis.map(function (q) {
            return q.value.raw;
          });
          var placeholderID = 0;
          var text = rawQuasis.reduce(function (prevVal, currVal, idx) {
            return idx == 0 ? currVal : prevVal + "@prettier-placeholder-" + placeholderID++ + "-id" + currVal;
          }, "");
          var doc$$2 = textToDoc(text, {
            parser: "css"
          });
          return transformCssDoc(doc$$2, path, print);
        }
        /*
         * react-relay and graphql-tag
         * graphql`...`
         * graphql.experimental`...`
         * gql`...`
         *
         * This intentionally excludes Relay Classic tags, as Prettier does not
         * support Relay Classic formatting.
         */


        if (isGraphQL(path)) {
          var expressionDocs = node.expressions ? path.map(print, "expressions") : [];
          var numQuasis = node.quasis.length;

          if (numQuasis === 1 && node.quasis[0].value.raw.trim() === "") {
            return "``";
          }

          var parts = [];

          for (var i = 0; i < numQuasis; i++) {
            var templateElement = node.quasis[i];
            var isFirst = i === 0;
            var isLast = i === numQuasis - 1;
            var _text = templateElement.value.cooked; // Bail out if any of the quasis have an invalid escape sequence
            // (which would make the `cooked` value be `null` or `undefined`)

            if (typeof _text !== "string") {
              return null;
            }

            var lines = _text.split("\n");

            var numLines = lines.length;
            var expressionDoc = expressionDocs[i];
            var startsWithBlankLine = numLines > 2 && lines[0].trim() === "" && lines[1].trim() === "";
            var endsWithBlankLine = numLines > 2 && lines[numLines - 1].trim() === "" && lines[numLines - 2].trim() === "";
            var commentsAndWhitespaceOnly = lines.every(function (line) {
              return /^\s*(?:#[^\r\n]*)?$/.test(line);
            }); // Bail out if an interpolation occurs within a comment.

            if (!isLast && /#[^\r\n]*$/.test(lines[numLines - 1])) {
              return null;
            }

            var _doc = null;

            if (commentsAndWhitespaceOnly) {
              _doc = printGraphqlComments(lines);
            } else {
              _doc = stripTrailingHardline$2(textToDoc(_text, {
                parser: "graphql"
              }));
            }

            if (_doc) {
              _doc = escapeTemplateCharacters(_doc, false);

              if (!isFirst && startsWithBlankLine) {
                parts.push("");
              }

              parts.push(_doc);

              if (!isLast && endsWithBlankLine) {
                parts.push("");
              }
            } else if (!isFirst && !isLast && startsWithBlankLine) {
              parts.push("");
            }

            if (expressionDoc) {
              parts.push(concat$13(["${", expressionDoc, "}"]));
            }
          }

          return concat$13(["`", indent$7(concat$13([hardline$9, join$8(hardline$9, parts)])), hardline$9, "`"]);
        }

        if (isHtml(path)) {
          return printHtmlTemplateLiteral(path, print, textToDoc, "html");
        }

        if (isAngularComponentTemplate(path)) {
          return printHtmlTemplateLiteral(path, print, textToDoc, "angular");
        }

        break;
      }

    case "TemplateElement":
      {
        /**
         * md`...`
         * markdown`...`
         */
        if (parentParent && parentParent.type === "TaggedTemplateExpression" && parent.quasis.length === 1 && parentParent.tag.type === "Identifier" && (parentParent.tag.name === "md" || parentParent.tag.name === "markdown")) {
          var _text2 = parent.quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (_, backslashes) {
            return "\\".repeat(backslashes.length / 2) + "`";
          });

          var indentation = getIndentation(_text2);
          var hasIndent = indentation !== "";
          return concat$13([hasIndent ? indent$7(concat$13([softline$6, printMarkdown(_text2.replace(new RegExp("^".concat(indentation), "gm"), ""))])) : concat$13([literalline$4, dedentToRoot$1(printMarkdown(_text2))]), softline$6]);
        }

        break;
      }
  }

  function printMarkdown(text) {
    var doc$$2 = textToDoc(text, {
      parser: "markdown",
      __inJsTemplate: true
    });
    return stripTrailingHardline$2(escapeTemplateCharacters(doc$$2, true));
  }
}

function getIndentation(str) {
  var firstMatchedIndent = str.match(/^([^\S\n]*)\S/m);
  return firstMatchedIndent === null ? "" : firstMatchedIndent[1];
}

function escapeTemplateCharacters(doc$$2, raw) {
  return mapDoc$5(doc$$2, function (currentDoc) {
    if (!currentDoc.parts) {
      return currentDoc;
    }

    var parts = [];
    currentDoc.parts.forEach(function (part) {
      if (typeof part === "string") {
        parts.push(raw ? part.replace(/(\\*)`/g, "$1$1\\`") : part.replace(/([\\`]|\$\{)/g, "\\$1"));
      } else {
        parts.push(part);
      }
    });
    return Object.assign({}, currentDoc, {
      parts: parts
    });
  });
}

function transformCssDoc(quasisDoc, path, print) {
  var parentNode = path.getValue();
  var isEmpty = parentNode.quasis.length === 1 && !parentNode.quasis[0].value.raw.trim();

  if (isEmpty) {
    return "``";
  }

  var expressionDocs = parentNode.expressions ? path.map(print, "expressions") : [];
  var newDoc = replacePlaceholders(quasisDoc, expressionDocs);
  /* istanbul ignore if */

  if (!newDoc) {
    throw new Error("Couldn't insert all the expressions");
  }

  return concat$13(["`", indent$7(concat$13([hardline$9, stripTrailingHardline$2(newDoc)])), softline$6, "`"]);
} // Search all the placeholders in the quasisDoc tree
// and replace them with the expression docs one by one
// returns a new doc with all the placeholders replaced,
// or null if it couldn't replace any expression


function replacePlaceholders(quasisDoc, expressionDocs) {
  if (!expressionDocs || !expressionDocs.length) {
    return quasisDoc;
  }

  var expressions = expressionDocs.slice();
  var replaceCounter = 0;
  var newDoc = mapDoc$5(quasisDoc, function (doc$$2) {
    if (!doc$$2 || !doc$$2.parts || !doc$$2.parts.length) {
      return doc$$2;
    }

    var parts = doc$$2.parts;
    var atIndex = parts.indexOf("@");
    var placeholderIndex = atIndex + 1;

    if (atIndex > -1 && typeof parts[placeholderIndex] === "string" && parts[placeholderIndex].startsWith("prettier-placeholder")) {
      // If placeholder is split, join it
      var at = parts[atIndex];
      var placeholder = parts[placeholderIndex];
      var rest = parts.slice(placeholderIndex + 1);
      parts = parts.slice(0, atIndex).concat([at + placeholder]).concat(rest);
    }

    var atPlaceholderIndex = parts.findIndex(function (part) {
      return typeof part === "string" && part.startsWith("@prettier-placeholder");
    });

    if (atPlaceholderIndex > -1) {
      var _placeholder = parts[atPlaceholderIndex];

      var _rest = parts.slice(atPlaceholderIndex + 1);

      var placeholderMatch = _placeholder.match(/@prettier-placeholder-(.+)-id([\s\S]*)/);

      var placeholderID = placeholderMatch[1]; // When the expression has a suffix appended, like:
      // animation: linear ${time}s ease-out;

      var suffix = placeholderMatch[2];
      var expression = expressions[placeholderID];
      replaceCounter++;
      parts = parts.slice(0, atPlaceholderIndex).concat(["${", expression, "}" + suffix]).concat(_rest);
    }

    return Object.assign({}, doc$$2, {
      parts: parts
    });
  });
  return expressions.length === replaceCounter ? newDoc : null;
}

function printGraphqlComments(lines) {
  var parts = [];
  var seenComment = false;
  lines.map(function (textLine) {
    return textLine.trim();
  }).forEach(function (textLine, i, array) {
    // Lines are either whitespace only, or a comment (with poential whitespace
    // around it). Drop whitespace-only lines.
    if (textLine === "") {
      return;
    }

    if (array[i - 1] === "" && seenComment) {
      // If a non-first comment is preceded by a blank (whitespace only) line,
      // add in a blank line.
      parts.push(concat$13([hardline$9, textLine]));
    } else {
      parts.push(textLine);
    }

    seenComment = true;
  }); // If `lines` was whitespace only, return `null`.

  return parts.length === 0 ? null : join$8(hardline$9, parts);
}
/**
 * Template literal in this context:
 * <style jsx>{`div{color:red}`}</style>
 */


function isStyledJsx(path) {
  var node = path.getValue();
  var parent = path.getParentNode();
  var parentParent = path.getParentNode(1);
  return parentParent && node.quasis && parent.type === "JSXExpressionContainer" && parentParent.type === "JSXElement" && parentParent.openingElement.name.name === "style" && parentParent.openingElement.attributes.some(function (attribute) {
    return attribute.name.name === "jsx";
  });
}
/**
 * Angular Components can have:
 * - Inline HTML template
 * - Inline CSS styles
 *
 * ...which are both within template literals somewhere
 * inside of the Component decorator factory.
 *
 * E.g.
 * @Component({
 *  template: `<div>...</div>`,
 *  styles: [`h1 { color: blue; }`]
 * })
 */


function isAngularComponentStyles(path) {
  return isPathMatch(path, [function (node) {
    return node.type === "TemplateLiteral";
  }, function (node, name) {
    return node.type === "ArrayExpression" && name === "elements";
  }, function (node, name) {
    return node.type === "Property" && node.key.type === "Identifier" && node.key.name === "styles" && name === "value";
  }].concat(getAngularComponentObjectExpressionPredicates()));
}

function isAngularComponentTemplate(path) {
  return isPathMatch(path, [function (node) {
    return node.type === "TemplateLiteral";
  }, function (node, name) {
    return node.type === "Property" && node.key.type === "Identifier" && node.key.name === "template" && name === "value";
  }].concat(getAngularComponentObjectExpressionPredicates()));
}

function getAngularComponentObjectExpressionPredicates() {
  return [function (node, name) {
    return node.type === "ObjectExpression" && name === "properties";
  }, function (node, name) {
    return node.type === "CallExpression" && node.callee.type === "Identifier" && node.callee.name === "Component" && name === "arguments";
  }, function (node, name) {
    return node.type === "Decorator" && name === "expression";
  }];
}
/**
 * styled-components template literals
 */


function isStyledComponents(path) {
  var parent = path.getParentNode();

  if (!parent || parent.type !== "TaggedTemplateExpression") {
    return false;
  }

  var tag = parent.tag;

  switch (tag.type) {
    case "MemberExpression":
      return (// styled.foo``
        isStyledIdentifier(tag.object) || // Component.extend``
        isStyledExtend(tag)
      );

    case "CallExpression":
      return (// styled(Component)``
        isStyledIdentifier(tag.callee) || tag.callee.type === "MemberExpression" && (tag.callee.object.type === "MemberExpression" && ( // styled.foo.attr({})``
        isStyledIdentifier(tag.callee.object.object) || // Component.extend.attr({)``
        isStyledExtend(tag.callee.object)) || // styled(Component).attr({})``
        tag.callee.object.type === "CallExpression" && isStyledIdentifier(tag.callee.object.callee))
      );

    case "Identifier":
      // css``
      return tag.name === "css";

    default:
      return false;
  }
}
/**
 * JSX element with CSS prop
 */


function isCssProp(path) {
  var parent = path.getParentNode();
  var parentParent = path.getParentNode(1);
  return parentParent && parent.type === "JSXExpressionContainer" && parentParent.type === "JSXAttribute" && parentParent.name.type === "JSXIdentifier" && parentParent.name.name === "css";
}

function isStyledIdentifier(node) {
  return node.type === "Identifier" && node.name === "styled";
}

function isStyledExtend(node) {
  return /^[A-Z]/.test(node.object.name) && node.property.name === "extend";
}
/*
 * react-relay and graphql-tag
 * graphql`...`
 * graphql.experimental`...`
 * gql`...`
 * GraphQL comment block
 *
 * This intentionally excludes Relay Classic tags, as Prettier does not
 * support Relay Classic formatting.
 */


function isGraphQL(path) {
  var node = path.getValue();
  var parent = path.getParentNode();
  return hasLanguageComment(node, "GraphQL") || parent && (parent.type === "TaggedTemplateExpression" && (parent.tag.type === "MemberExpression" && parent.tag.object.name === "graphql" && parent.tag.property.name === "experimental" || parent.tag.type === "Identifier" && (parent.tag.name === "gql" || parent.tag.name === "graphql")) || parent.type === "CallExpression" && parent.callee.type === "Identifier" && parent.callee.name === "graphql");
}

function hasLanguageComment(node, languageName) {
  // This checks for a leading comment that is exactly `/* GraphQL */`
  // In order to be in line with other implementations of this comment tag
  // we will not trim the comment value and we will expect exactly one space on
  // either side of the GraphQL string
  // Also see ./clean.js
  return node.leadingComments && node.leadingComments.some(function (comment) {
    return comment.type === "CommentBlock" && comment.value === " ".concat(languageName, " ");
  });
}

function isPathMatch(path, predicateStack) {
  var stack = path.stack.slice();
  var name = null;
  var node = stack.pop();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = predicateStack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var predicate = _step.value;

      if (node === undefined) {
        return false;
      } // skip index/array


      if (typeof name === "number") {
        name = stack.pop();
        node = stack.pop();
      }

      if (!predicate(node, name)) {
        return false;
      }

      name = stack.pop();
      node = stack.pop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}
/**
 *     - html`...`
 *     - HTML comment block
 */


function isHtml(path) {
  var node = path.getValue();
  return hasLanguageComment(node, "HTML") || isPathMatch(path, [function (node) {
    return node.type === "TemplateLiteral";
  }, function (node, name) {
    return node.type === "TaggedTemplateExpression" && node.tag.type === "Identifier" && node.tag.name === "html" && name === "quasi";
  }]);
}

function printHtmlTemplateLiteral(path, print, textToDoc, parser) {
  var node = path.getValue();
  var placeholderPattern = "prettierhtmlplaceholder(\\d+)redlohecalplmthreitterp";
  var placeholders = node.expressions.map(function (_, i) {
    return "prettierhtmlplaceholder".concat(i, "redlohecalplmthreitterp");
  });
  var text = node.quasis.map(function (quasi, index, quasis) {
    return index === quasis.length - 1 ? quasi.value.raw : quasi.value.raw + placeholders[index];
  }).join("");
  var expressionDocs = path.map(print, "expressions");

  if (expressionDocs.length === 0 && text.trim().length === 0) {
    return "``";
  }

  var contentDoc = mapDoc$5(stripTrailingHardline$2(textToDoc(text, {
    parser: parser
  })), function (doc$$2) {
    var placeholderRegex = new RegExp(placeholderPattern, "g");
    var hasPlaceholder = typeof doc$$2 === "string" && placeholderRegex.test(doc$$2);

    if (!hasPlaceholder) {
      return doc$$2;
    }

    var parts = [];
    var components = doc$$2.split(placeholderRegex);

    for (var i = 0; i < components.length; i++) {
      var component = components[i];

      if (i % 2 === 0) {
        if (component) {
          parts.push(component);
        }

        continue;
      }

      var placeholderIndex = +component;
      parts.push(concat$13(["${", group$11(concat$13([indent$7(concat$13([softline$6, expressionDocs[placeholderIndex]])), softline$6])), "}"]));
    }

    return concat$13(parts);
  });
  return group$11(concat$13(["`", indent$7(concat$13([hardline$9, group$11(contentDoc)])), softline$6, "`"]));
}

var embed_1$2 = embed$4;

function clean$7(ast, newObj, parent) {
  ["range", "raw", "comments", "leadingComments", "trailingComments", "extra", "start", "end", "flags"].forEach(function (name) {
    delete newObj[name];
  });

  if (ast.type === "BigIntLiteral") {
    newObj.value = newObj.value.toLowerCase();
  } // We remove extra `;` and add them when needed


  if (ast.type === "EmptyStatement") {
    return null;
  } // We move text around, including whitespaces and add {" "}


  if (ast.type === "JSXText") {
    return null;
  }

  if (ast.type === "JSXExpressionContainer" && ast.expression.type === "Literal" && ast.expression.value === " ") {
    return null;
  } // (TypeScript) Ignore `static` in `constructor(static p) {}`
  // and `export` in `constructor(export p) {}`


  if (ast.type === "TSParameterProperty" && ast.accessibility === null && !ast.readonly) {
    return {
      type: "Identifier",
      name: ast.parameter.name,
      typeAnnotation: newObj.parameter.typeAnnotation,
      decorators: newObj.decorators
    };
  } // (TypeScript) ignore empty `specifiers` array


  if (ast.type === "TSNamespaceExportDeclaration" && ast.specifiers && ast.specifiers.length === 0) {
    delete newObj.specifiers;
  } // (TypeScript) bypass TSParenthesizedType


  if (ast.type === "TSParenthesizedType" && ast.typeAnnotation.type === "TSTypeAnnotation") {
    return newObj.typeAnnotation.typeAnnotation;
  } // We convert <div></div> to <div />


  if (ast.type === "JSXOpeningElement") {
    delete newObj.selfClosing;
  }

  if (ast.type === "JSXElement") {
    delete newObj.closingElement;
  } // We change {'key': value} into {key: value}


  if ((ast.type === "Property" || ast.type === "ObjectProperty" || ast.type === "MethodDefinition" || ast.type === "ClassProperty" || ast.type === "TSPropertySignature" || ast.type === "ObjectTypeProperty") && _typeof(ast.key) === "object" && ast.key && (ast.key.type === "Literal" || ast.key.type === "StringLiteral" || ast.key.type === "Identifier")) {
    delete newObj.key;
  }

  if (ast.type === "OptionalMemberExpression" && ast.optional === false) {
    newObj.type = "MemberExpression";
    delete newObj.optional;
  } // Remove raw and cooked values from TemplateElement when it's CSS
  // styled-jsx


  if (ast.type === "JSXElement" && ast.openingElement.name.name === "style" && ast.openingElement.attributes.some(function (attr) {
    return attr.name.name === "jsx";
  })) {
    var templateLiterals = newObj.children.filter(function (child) {
      return child.type === "JSXExpressionContainer" && child.expression.type === "TemplateLiteral";
    }).map(function (container) {
      return container.expression;
    });
    var quasis = templateLiterals.reduce(function (quasis, templateLiteral) {
      return quasis.concat(templateLiteral.quasis);
    }, []);
    quasis.forEach(function (q) {
      return delete q.value;
    });
  } // CSS template literals in css prop


  if (ast.type === "JSXAttribute" && ast.name.name === "css" && ast.value.type === "JSXExpressionContainer" && ast.value.expression.type === "TemplateLiteral") {
    newObj.value.expression.quasis.forEach(function (q) {
      return delete q.value;
    });
  } // Angular Components: Inline HTML template and Inline CSS styles


  var expression = ast.expression || ast.callee;

  if (ast.type === "Decorator" && expression.type === "CallExpression" && expression.callee.name === "Component" && expression.arguments.length === 1) {
    var astProps = ast.expression.arguments[0].properties;
    newObj.expression.arguments[0].properties.forEach(function (prop, index) {
      var templateLiteral = null;

      switch (astProps[index].key.name) {
        case "styles":
          if (prop.value.type === "ArrayExpression") {
            templateLiteral = prop.value.elements[0];
          }

          break;

        case "template":
          if (prop.value.type === "TemplateLiteral") {
            templateLiteral = prop.value;
          }

          break;
      }

      if (templateLiteral) {
        templateLiteral.quasis.forEach(function (q) {
          return delete q.value;
        });
      }
    });
  } // styled-components, graphql, markdown


  if (ast.type === "TaggedTemplateExpression" && (ast.tag.type === "MemberExpression" || ast.tag.type === "Identifier" && (ast.tag.name === "gql" || ast.tag.name === "graphql" || ast.tag.name === "css" || ast.tag.name === "md" || ast.tag.name === "markdown" || ast.tag.name === "html") || ast.tag.type === "CallExpression")) {
    newObj.quasi.quasis.forEach(function (quasi) {
      return delete quasi.value;
    });
  }

  if (ast.type === "TemplateLiteral") {
    // This checks for a leading comment that is exactly `/* GraphQL */`
    // In order to be in line with other implementations of this comment tag
    // we will not trim the comment value and we will expect exactly one space on
    // either side of the GraphQL string
    // Also see ./embed.js
    var hasLanguageComment = ast.leadingComments && ast.leadingComments.some(function (comment) {
      return comment.type === "CommentBlock" && ["GraphQL", "HTML"].some(function (languageName) {
        return comment.value === " ".concat(languageName, " ");
      });
    });

    if (hasLanguageComment || parent.type === "CallExpression" && parent.callee.name === "graphql") {
      newObj.quasis.forEach(function (quasi) {
        return delete quasi.value;
      });
    }
  }
}

var clean_1$2 = clean$7;

var addLeadingComment$2 = utilShared.addLeadingComment;
var addTrailingComment$2 = utilShared.addTrailingComment;
var addDanglingComment$2 = utilShared.addDanglingComment;

function handleOwnLineComment(comment, text, options, ast, isLastComment) {
  var precedingNode = comment.precedingNode,
      enclosingNode = comment.enclosingNode,
      followingNode = comment.followingNode;

  if (handleLastFunctionArgComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleMemberExpressionComments(enclosingNode, followingNode, comment) || handleIfStatementComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleWhileComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleTryStatementComments(enclosingNode, precedingNode, followingNode, comment) || handleClassComments(enclosingNode, precedingNode, followingNode, comment) || handleImportSpecifierComments(enclosingNode, comment) || handleForComments(enclosingNode, precedingNode, comment) || handleUnionTypeComments(precedingNode, enclosingNode, followingNode, comment) || handleOnlyComments(enclosingNode, ast, comment, isLastComment) || handleImportDeclarationComments(text, enclosingNode, precedingNode, comment, options) || handleAssignmentPatternComments(enclosingNode, comment) || handleMethodNameComments(text, enclosingNode, precedingNode, comment, options)) {
    return true;
  }

  return false;
}

function handleEndOfLineComment(comment, text, options, ast, isLastComment) {
  var precedingNode = comment.precedingNode,
      enclosingNode = comment.enclosingNode,
      followingNode = comment.followingNode;

  if (handleLastFunctionArgComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleConditionalExpressionComments(enclosingNode, precedingNode, followingNode, comment, text, options) || handleImportSpecifierComments(enclosingNode, comment) || handleIfStatementComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleWhileComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleTryStatementComments(enclosingNode, precedingNode, followingNode, comment) || handleClassComments(enclosingNode, precedingNode, followingNode, comment) || handleLabeledStatementComments(enclosingNode, comment) || handleCallExpressionComments(precedingNode, enclosingNode, comment) || handlePropertyComments(enclosingNode, comment) || handleOnlyComments(enclosingNode, ast, comment, isLastComment) || handleTypeAliasComments(enclosingNode, followingNode, comment) || handleVariableDeclaratorComments(enclosingNode, followingNode, comment)) {
    return true;
  }

  return false;
}

function handleRemainingComment(comment, text, options, ast, isLastComment) {
  var precedingNode = comment.precedingNode,
      enclosingNode = comment.enclosingNode,
      followingNode = comment.followingNode;

  if (handleIfStatementComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleWhileComments(text, precedingNode, enclosingNode, followingNode, comment, options) || handleObjectPropertyAssignment(enclosingNode, precedingNode, comment) || handleCommentInEmptyParens(text, enclosingNode, comment, options) || handleMethodNameComments(text, enclosingNode, precedingNode, comment, options) || handleOnlyComments(enclosingNode, ast, comment, isLastComment) || handleCommentAfterArrowParams(text, enclosingNode, comment, options) || handleFunctionNameComments(text, enclosingNode, precedingNode, comment, options) || handleTSMappedTypeComments(text, enclosingNode, precedingNode, followingNode, comment) || handleBreakAndContinueStatementComments(enclosingNode, comment)) {
    return true;
  }

  return false;
}

function addBlockStatementFirstComment(node, comment) {
  var body = node.body.filter(function (n) {
    return n.type !== "EmptyStatement";
  });

  if (body.length === 0) {
    addDanglingComment$2(node, comment);
  } else {
    addLeadingComment$2(body[0], comment);
  }
}

function addBlockOrNotComment(node, comment) {
  if (node.type === "BlockStatement") {
    addBlockStatementFirstComment(node, comment);
  } else {
    addLeadingComment$2(node, comment);
  }
} // There are often comments before the else clause of if statements like
//
//   if (1) { ... }
//   // comment
//   else { ... }
//
// They are being attached as leading comments of the BlockExpression which
// is not well printed. What we want is to instead move the comment inside
// of the block and make it leadingComment of the first element of the block
// or dangling comment of the block if there is nothing inside
//
//   if (1) { ... }
//   else {
//     // comment
//     ...
//   }


function handleIfStatementComments(text, precedingNode, enclosingNode, followingNode, comment, options) {
  if (!enclosingNode || enclosingNode.type !== "IfStatement" || !followingNode) {
    return false;
  } // We unfortunately have no way using the AST or location of nodes to know
  // if the comment is positioned before the condition parenthesis:
  //   if (a /* comment */) {}
  // The only workaround I found is to look at the next character to see if
  // it is a ).


  var nextCharacter = util.getNextNonSpaceNonCommentCharacter(text, comment, options.locEnd);

  if (nextCharacter === ")") {
    addTrailingComment$2(precedingNode, comment);
    return true;
  } // Comments before `else`:
  // - treat as trailing comments of the consequent, if it's a BlockStatement
  // - treat as a dangling comment otherwise


  if (precedingNode === enclosingNode.consequent && followingNode === enclosingNode.alternate) {
    if (precedingNode.type === "BlockStatement") {
      addTrailingComment$2(precedingNode, comment);
    } else {
      addDanglingComment$2(enclosingNode, comment);
    }

    return true;
  }

  if (followingNode.type === "BlockStatement") {
    addBlockStatementFirstComment(followingNode, comment);
    return true;
  }

  if (followingNode.type === "IfStatement") {
    addBlockOrNotComment(followingNode.consequent, comment);
    return true;
  } // For comments positioned after the condition parenthesis in an if statement
  // before the consequent without brackets on, such as
  // if (a) /* comment */ true,
  // we look at the next character to see if the following node
  // is the consequent for the if statement


  if (enclosingNode.consequent === followingNode) {
    addLeadingComment$2(followingNode, comment);
    return true;
  }

  return false;
}

function handleWhileComments(text, precedingNode, enclosingNode, followingNode, comment, options) {
  if (!enclosingNode || enclosingNode.type !== "WhileStatement" || !followingNode) {
    return false;
  } // We unfortunately have no way using the AST or location of nodes to know
  // if the comment is positioned before the condition parenthesis:
  //   while (a /* comment */) {}
  // The only workaround I found is to look at the next character to see if
  // it is a ).


  var nextCharacter = util.getNextNonSpaceNonCommentCharacter(text, comment, options.locEnd);

  if (nextCharacter === ")") {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  if (followingNode.type === "BlockStatement") {
    addBlockStatementFirstComment(followingNode, comment);
    return true;
  }

  return false;
} // Same as IfStatement but for TryStatement


function handleTryStatementComments(enclosingNode, precedingNode, followingNode, comment) {
  if (!enclosingNode || enclosingNode.type !== "TryStatement" && enclosingNode.type !== "CatchClause" || !followingNode) {
    return false;
  }

  if (enclosingNode.type === "CatchClause" && precedingNode) {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  if (followingNode.type === "BlockStatement") {
    addBlockStatementFirstComment(followingNode, comment);
    return true;
  }

  if (followingNode.type === "TryStatement") {
    addBlockOrNotComment(followingNode.finalizer, comment);
    return true;
  }

  if (followingNode.type === "CatchClause") {
    addBlockOrNotComment(followingNode.body, comment);
    return true;
  }

  return false;
}

function handleMemberExpressionComments(enclosingNode, followingNode, comment) {
  if (enclosingNode && enclosingNode.type === "MemberExpression" && followingNode && followingNode.type === "Identifier") {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleConditionalExpressionComments(enclosingNode, precedingNode, followingNode, comment, text, options) {
  var isSameLineAsPrecedingNode = precedingNode && !util.hasNewlineInRange(text, options.locEnd(precedingNode), options.locStart(comment));

  if ((!precedingNode || !isSameLineAsPrecedingNode) && enclosingNode && enclosingNode.type === "ConditionalExpression" && followingNode) {
    addLeadingComment$2(followingNode, comment);
    return true;
  }

  return false;
}

function handleObjectPropertyAssignment(enclosingNode, precedingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "ObjectProperty" || enclosingNode.type === "Property") && enclosingNode.shorthand && enclosingNode.key === precedingNode && enclosingNode.value.type === "AssignmentPattern") {
    addTrailingComment$2(enclosingNode.value.left, comment);
    return true;
  }

  return false;
}

function handleClassComments(enclosingNode, precedingNode, followingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "ClassDeclaration" || enclosingNode.type === "ClassExpression") && enclosingNode.decorators && enclosingNode.decorators.length > 0 && !(followingNode && followingNode.type === "Decorator")) {
    if (!enclosingNode.decorators || enclosingNode.decorators.length === 0) {
      addLeadingComment$2(enclosingNode, comment);
    } else {
      addTrailingComment$2(enclosingNode.decorators[enclosingNode.decorators.length - 1], comment);
    }

    return true;
  }

  return false;
}

function handleMethodNameComments(text, enclosingNode, precedingNode, comment, options) {
  // This is only needed for estree parsers (flow, typescript) to attach
  // after a method name:
  // obj = { fn /*comment*/() {} };
  if (enclosingNode && precedingNode && (enclosingNode.type === "Property" || enclosingNode.type === "MethodDefinition") && precedingNode.type === "Identifier" && enclosingNode.key === precedingNode && // special Property case: { key: /*comment*/(value) };
  // comment should be attached to value instead of key
  util.getNextNonSpaceNonCommentCharacter(text, precedingNode, options.locEnd) !== ":") {
    addTrailingComment$2(precedingNode, comment);
    return true;
  } // Print comments between decorators and class methods as a trailing comment
  // on the decorator node instead of the method node


  if (precedingNode && enclosingNode && precedingNode.type === "Decorator" && (enclosingNode.type === "ClassMethod" || enclosingNode.type === "ClassProperty" || enclosingNode.type === "TSAbstractClassProperty" || enclosingNode.type === "TSAbstractMethodDefinition" || enclosingNode.type === "MethodDefinition")) {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  return false;
}

function handleFunctionNameComments(text, enclosingNode, precedingNode, comment, options) {
  if (util.getNextNonSpaceNonCommentCharacter(text, comment, options.locEnd) !== "(") {
    return false;
  }

  if (precedingNode && enclosingNode && (enclosingNode.type === "FunctionDeclaration" || enclosingNode.type === "FunctionExpression" || enclosingNode.type === "ClassMethod" || enclosingNode.type === "MethodDefinition" || enclosingNode.type === "ObjectMethod")) {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  return false;
}

function handleCommentAfterArrowParams(text, enclosingNode, comment, options) {
  if (!(enclosingNode && enclosingNode.type === "ArrowFunctionExpression")) {
    return false;
  }

  var index = utilShared.getNextNonSpaceNonCommentCharacterIndex(text, comment, options);

  if (text.substr(index, 2) === "=>") {
    addDanglingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleCommentInEmptyParens(text, enclosingNode, comment, options) {
  if (util.getNextNonSpaceNonCommentCharacter(text, comment, options.locEnd) !== ")") {
    return false;
  } // Only add dangling comments to fix the case when no params are present,
  // i.e. a function without any argument.


  if (enclosingNode && ((enclosingNode.type === "FunctionDeclaration" || enclosingNode.type === "FunctionExpression" || enclosingNode.type === "ArrowFunctionExpression" && (enclosingNode.body.type !== "CallExpression" || enclosingNode.body.arguments.length === 0) || enclosingNode.type === "ClassMethod" || enclosingNode.type === "ObjectMethod") && enclosingNode.params.length === 0 || (enclosingNode.type === "CallExpression" || enclosingNode.type === "NewExpression") && enclosingNode.arguments.length === 0)) {
    addDanglingComment$2(enclosingNode, comment);
    return true;
  }

  if (enclosingNode && enclosingNode.type === "MethodDefinition" && enclosingNode.value.params.length === 0) {
    addDanglingComment$2(enclosingNode.value, comment);
    return true;
  }

  return false;
}

function handleLastFunctionArgComments(text, precedingNode, enclosingNode, followingNode, comment, options) {
  // Type definitions functions
  if (precedingNode && precedingNode.type === "FunctionTypeParam" && enclosingNode && enclosingNode.type === "FunctionTypeAnnotation" && followingNode && followingNode.type !== "FunctionTypeParam") {
    addTrailingComment$2(precedingNode, comment);
    return true;
  } // Real functions


  if (precedingNode && (precedingNode.type === "Identifier" || precedingNode.type === "AssignmentPattern") && enclosingNode && (enclosingNode.type === "ArrowFunctionExpression" || enclosingNode.type === "FunctionExpression" || enclosingNode.type === "FunctionDeclaration" || enclosingNode.type === "ObjectMethod" || enclosingNode.type === "ClassMethod") && util.getNextNonSpaceNonCommentCharacter(text, comment, options.locEnd) === ")") {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  if (enclosingNode && enclosingNode.type === "FunctionDeclaration" && followingNode && followingNode.type === "BlockStatement") {
    addBlockStatementFirstComment(followingNode, comment);
    return true;
  }

  return false;
}

function handleImportSpecifierComments(enclosingNode, comment) {
  if (enclosingNode && enclosingNode.type === "ImportSpecifier") {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleLabeledStatementComments(enclosingNode, comment) {
  if (enclosingNode && enclosingNode.type === "LabeledStatement") {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleBreakAndContinueStatementComments(enclosingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "ContinueStatement" || enclosingNode.type === "BreakStatement") && !enclosingNode.label) {
    addTrailingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleCallExpressionComments(precedingNode, enclosingNode, comment) {
  if (enclosingNode && enclosingNode.type === "CallExpression" && precedingNode && enclosingNode.callee === precedingNode && enclosingNode.arguments.length > 0) {
    addLeadingComment$2(enclosingNode.arguments[0], comment);
    return true;
  }

  return false;
}

function handleUnionTypeComments(precedingNode, enclosingNode, followingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "UnionTypeAnnotation" || enclosingNode.type === "TSUnionType")) {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  return false;
}

function handlePropertyComments(enclosingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "Property" || enclosingNode.type === "ObjectProperty")) {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleOnlyComments(enclosingNode, ast, comment, isLastComment) {
  // With Flow the enclosingNode is undefined so use the AST instead.
  if (ast && ast.body && ast.body.length === 0) {
    if (isLastComment) {
      addDanglingComment$2(ast, comment);
    } else {
      addLeadingComment$2(ast, comment);
    }

    return true;
  } else if (enclosingNode && enclosingNode.type === "Program" && enclosingNode.body.length === 0 && enclosingNode.directives && enclosingNode.directives.length === 0) {
    if (isLastComment) {
      addDanglingComment$2(enclosingNode, comment);
    } else {
      addLeadingComment$2(enclosingNode, comment);
    }

    return true;
  }

  return false;
}

function handleForComments(enclosingNode, precedingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "ForInStatement" || enclosingNode.type === "ForOfStatement")) {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleImportDeclarationComments(text, enclosingNode, precedingNode, comment, options) {
  if (precedingNode && precedingNode.type === "ImportSpecifier" && enclosingNode && enclosingNode.type === "ImportDeclaration" && util.hasNewline(text, options.locEnd(comment))) {
    addTrailingComment$2(precedingNode, comment);
    return true;
  }

  return false;
}

function handleAssignmentPatternComments(enclosingNode, comment) {
  if (enclosingNode && enclosingNode.type === "AssignmentPattern") {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleTypeAliasComments(enclosingNode, followingNode, comment) {
  if (enclosingNode && enclosingNode.type === "TypeAlias") {
    addLeadingComment$2(enclosingNode, comment);
    return true;
  }

  return false;
}

function handleVariableDeclaratorComments(enclosingNode, followingNode, comment) {
  if (enclosingNode && (enclosingNode.type === "VariableDeclarator" || enclosingNode.type === "AssignmentExpression") && followingNode && (followingNode.type === "ObjectExpression" || followingNode.type === "ArrayExpression" || followingNode.type === "TemplateLiteral" || followingNode.type === "TaggedTemplateExpression")) {
    addLeadingComment$2(followingNode, comment);
    return true;
  }

  return false;
}

function handleTSMappedTypeComments(text, enclosingNode, precedingNode, followingNode, comment) {
  if (!enclosingNode || enclosingNode.type !== "TSMappedType") {
    return false;
  }

  if (followingNode && followingNode.type === "TSTypeParameter" && followingNode.name) {
    addLeadingComment$2(followingNode.name, comment);
    return true;
  }

  if (precedingNode && precedingNode.type === "TSTypeParameter" && precedingNode.constraint) {
    addTrailingComment$2(precedingNode.constraint, comment);
    return true;
  }

  return false;
}

function isBlockComment(comment) {
  return comment.type === "Block" || comment.type === "CommentBlock";
}

var comments$3 = {
  handleOwnLineComment: handleOwnLineComment,
  handleEndOfLineComment: handleEndOfLineComment,
  handleRemainingComment: handleRemainingComment,
  isBlockComment: isBlockComment
};

// Flow annotation comments cannot be split across lines. For example:
//
// (this /*
// : any */).foo = 5;
//
// is not picked up by Flow (see https://github.com/facebook/flow/issues/7050), so
// removing the newline would create a type annotation that the user did not intend
// to create.

var NON_LINE_TERMINATING_WHITE_SPACE = "(?:(?=.)\\s)";
var FLOW_SHORTHAND_ANNOTATION = new RegExp("^".concat(NON_LINE_TERMINATING_WHITE_SPACE, "*:"));
var FLOW_ANNOTATION = new RegExp("^".concat(NON_LINE_TERMINATING_WHITE_SPACE, "*::"));

function hasFlowShorthandAnnotationComment$2(node) {
  // https://flow.org/en/docs/types/comments/
  // Syntax example: const r = new (window.Request /*: Class<Request> */)("");
  return node.extra && node.extra.parenthesized && node.trailingComments && node.trailingComments[0].value.match(FLOW_SHORTHAND_ANNOTATION);
}

function hasFlowAnnotationComment$1(comments) {
  return comments && comments[0].value.match(FLOW_ANNOTATION);
}

function hasNode$1(node, fn) {
  if (!node || _typeof(node) !== "object") {
    return false;
  }

  if (Array.isArray(node)) {
    return node.some(function (value) {
      return hasNode$1(value, fn);
    });
  }

  var result = fn(node);
  return typeof result === "boolean" ? result : Object.keys(node).some(function (key) {
    return hasNode$1(node[key], fn);
  });
}

var utils$6 = {
  hasNode: hasNode$1,
  hasFlowShorthandAnnotationComment: hasFlowShorthandAnnotationComment$2,
  hasFlowAnnotationComment: hasFlowAnnotationComment$1
};

var hasFlowShorthandAnnotationComment$1 = utils$6.hasFlowShorthandAnnotationComment;

function hasClosureCompilerTypeCastComment(text, path, locStart, locEnd) {
  // https://github.com/google/closure-compiler/wiki/Annotating-Types#type-casts
  // Syntax example: var x = /** @type {string} */ (fruit);
  var n = path.getValue();
  return util.getNextNonSpaceNonCommentCharacter(text, n, locEnd) === ")" && (hasTypeCastComment(n) || hasAncestorTypeCastComment(0)); // for sub-item: /** @type {array} */ (numberOrString).map(x => x);

  function hasAncestorTypeCastComment(index) {
    var ancestor = path.getParentNode(index);
    return ancestor && util.getNextNonSpaceNonCommentCharacter(text, ancestor, locEnd) !== ")" && /^[\s(]*$/.test(text.slice(locStart(ancestor), locStart(n))) ? hasTypeCastComment(ancestor) || hasAncestorTypeCastComment(index + 1) : false;
  }

  function hasTypeCastComment(node) {
    return node.comments && node.comments.some(function (comment) {
      return comment.leading && comments$3.isBlockComment(comment) && comment.value.match(/^\*\s*@type\s*{[^}]+}\s*$/) && util.getNextNonSpaceNonCommentCharacter(text, comment, locEnd) === "(";
    });
  }
}

function needsParens(path, options) {
  var parent = path.getParentNode();

  if (!parent) {
    return false;
  }

  var name = path.getName();
  var node = path.getNode(); // If the value of this path is some child of a Node and not a Node
  // itself, then it doesn't need parentheses. Only Node objects (in
  // fact, only Expression nodes) need parentheses.

  if (path.getValue() !== node) {
    return false;
  } // Only statements don't need parentheses.


  if (isStatement(node)) {
    return false;
  } // Closure compiler requires that type casted expressions to be surrounded by
  // parentheses.


  if (hasClosureCompilerTypeCastComment(options.originalText, path, options.locStart, options.locEnd)) {
    return true;
  }

  if ( // Preserve parens if we have a Flow annotation comment, unless we're using the Flow
  // parser. The Flow parser turns Flow comments into type annotation nodes in its
  // AST, which we handle separately.
  options.parser !== "flow" && hasFlowShorthandAnnotationComment$1(path.getValue())) {
    return true;
  } // Identifiers never need parentheses.


  if (node.type === "Identifier") {
    return false;
  }

  if (parent.type === "ParenthesizedExpression") {
    return false;
  } // Add parens around the extends clause of a class. It is needed for almost
  // all expressions.


  if ((parent.type === "ClassDeclaration" || parent.type === "ClassExpression") && parent.superClass === node && (node.type === "ArrowFunctionExpression" || node.type === "AssignmentExpression" || node.type === "AwaitExpression" || node.type === "BinaryExpression" || node.type === "ConditionalExpression" || node.type === "LogicalExpression" || node.type === "NewExpression" || node.type === "ObjectExpression" || node.type === "ParenthesizedExpression" || node.type === "SequenceExpression" || node.type === "TaggedTemplateExpression" || node.type === "UnaryExpression" || node.type === "UpdateExpression" || node.type === "YieldExpression")) {
    return true;
  }

  if (parent.type === "ArrowFunctionExpression" && parent.body === node && node.type !== "SequenceExpression" && // these have parens added anyway
  util.startsWithNoLookaheadToken(node,
  /* forbidFunctionClassAndDoExpr */
  false) || parent.type === "ExpressionStatement" && util.startsWithNoLookaheadToken(node,
  /* forbidFunctionClassAndDoExpr */
  true)) {
    return true;
  }

  switch (node.type) {
    case "CallExpression":
      {
        var firstParentNotMemberExpression = parent;
        var i = 0;

        while (firstParentNotMemberExpression && firstParentNotMemberExpression.type === "MemberExpression") {
          firstParentNotMemberExpression = path.getParentNode(++i);
        }

        if (firstParentNotMemberExpression.type === "NewExpression" && firstParentNotMemberExpression.callee === path.getParentNode(i - 1)) {
          return true;
        }

        if (parent.type === "BindExpression" && parent.callee === node) {
          return true;
        }

        return false;
      }

    case "SpreadElement":
    case "SpreadProperty":
      return parent.type === "MemberExpression" && name === "object" && parent.object === node;

    case "UpdateExpression":
      if (parent.type === "UnaryExpression") {
        return node.prefix && (node.operator === "++" && parent.operator === "+" || node.operator === "--" && parent.operator === "-");
      }

    // else fallthrough

    case "UnaryExpression":
      switch (parent.type) {
        case "UnaryExpression":
          return node.operator === parent.operator && (node.operator === "+" || node.operator === "-");

        case "BindExpression":
          return true;

        case "MemberExpression":
          return name === "object" && parent.object === node;

        case "TaggedTemplateExpression":
          return true;

        case "NewExpression":
        case "CallExpression":
          return name === "callee" && parent.callee === node;

        case "BinaryExpression":
          return parent.operator === "**" && name === "left";

        case "TSNonNullExpression":
          return true;

        default:
          return false;
      }

    case "BinaryExpression":
      {
        if (parent.type === "UpdateExpression") {
          return true;
        }

        var isLeftOfAForStatement = function isLeftOfAForStatement(node) {
          var i = 0;

          while (node) {
            var _parent = path.getParentNode(i++);

            if (!_parent) {
              return false;
            }

            if (_parent.type === "ForStatement" && _parent.init === node) {
              return true;
            }

            node = _parent;
          }

          return false;
        };

        if (node.operator === "in" && isLeftOfAForStatement(node)) {
          return true;
        }
      }
    // fallthrough

    case "TSTypeAssertionExpression":
    case "TSAsExpression":
    case "LogicalExpression":
      switch (parent.type) {
        case "ConditionalExpression":
          return node.type === "TSAsExpression";

        case "CallExpression":
        case "NewExpression":
          return name === "callee" && parent.callee === node;

        case "ClassExpression":
        case "ClassDeclaration":
        case "TSAbstractClassDeclaration":
          return name === "superClass" && parent.superClass === node;

        case "TSTypeAssertionExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "SpreadProperty":
        case "BindExpression":
        case "AwaitExpression":
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "UpdateExpression":
          return true;

        case "MemberExpression":
          return name === "object" && parent.object === node;

        case "AssignmentExpression":
          return parent.left === node && (node.type === "TSTypeAssertionExpression" || node.type === "TSAsExpression");

        case "Decorator":
          return parent.expression === node && (node.type === "TSTypeAssertionExpression" || node.type === "TSAsExpression");

        case "BinaryExpression":
        case "LogicalExpression":
          {
            if (!node.operator && node.type !== "TSTypeAssertionExpression") {
              return true;
            }

            var po = parent.operator;
            var pp = util.getPrecedence(po);
            var no = node.operator;
            var np = util.getPrecedence(no);

            if (pp > np) {
              return true;
            }

            if ((po === "||" || po === "??") && no === "&&") {
              return true;
            }

            if (pp === np && name === "right") {
              assert$3.strictEqual(parent.right, node);
              return true;
            }

            if (pp === np && !util.shouldFlatten(po, no)) {
              return true;
            }

            if (pp < np && no === "%") {
              return po === "+" || po === "-";
            } // Add parenthesis when working with bitwise operators
            // It's not stricly needed but helps with code understanding


            if (util.isBitwiseOperator(po)) {
              return true;
            }

            return false;
          }

        default:
          return false;
      }

    case "TSParenthesizedType":
      {
        var grandParent = path.getParentNode(1);

        if ((parent.type === "TSTypeParameter" || parent.type === "TypeParameter" || parent.type === "VariableDeclarator" || parent.type === "TSTypeAnnotation" || parent.type === "GenericTypeAnnotation" || parent.type === "TSTypeReference") && node.typeAnnotation.type === "TSTypeAnnotation" && node.typeAnnotation.typeAnnotation.type !== "TSFunctionType" && grandParent.type !== "TSTypeOperator" && grandParent.type !== "TSOptionalType") {
          return false;
        } // Delegate to inner TSParenthesizedType


        if (node.typeAnnotation.type === "TSParenthesizedType") {
          return false;
        }

        return true;
      }

    case "SequenceExpression":
      switch (parent.type) {
        case "ReturnStatement":
          return false;

        case "ForStatement":
          // Although parentheses wouldn't hurt around sequence
          // expressions in the head of for loops, traditional style
          // dictates that e.g. i++, j++ should not be wrapped with
          // parentheses.
          return false;

        case "ExpressionStatement":
          return name !== "expression";

        case "ArrowFunctionExpression":
          // We do need parentheses, but SequenceExpressions are handled
          // specially when printing bodies of arrow functions.
          return name !== "body";

        default:
          // Otherwise err on the side of overparenthesization, adding
          // explicit exceptions above if this proves overzealous.
          return true;
      }

    case "YieldExpression":
      if (parent.type === "UnaryExpression" || parent.type === "AwaitExpression" || parent.type === "TSAsExpression" || parent.type === "TSNonNullExpression") {
        return true;
      }

    // else fallthrough

    case "AwaitExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "BinaryExpression":
        case "LogicalExpression":
        case "SpreadElement":
        case "SpreadProperty":
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "BindExpression":
          return true;

        case "MemberExpression":
          return parent.object === node;

        case "NewExpression":
        case "CallExpression":
          return parent.callee === node;

        case "ConditionalExpression":
          return parent.test === node;

        default:
          return false;
      }

    case "ArrayTypeAnnotation":
      return parent.type === "NullableTypeAnnotation";

    case "IntersectionTypeAnnotation":
    case "UnionTypeAnnotation":
      return parent.type === "ArrayTypeAnnotation" || parent.type === "NullableTypeAnnotation" || parent.type === "IntersectionTypeAnnotation" || parent.type === "UnionTypeAnnotation";

    case "NullableTypeAnnotation":
      return parent.type === "ArrayTypeAnnotation";

    case "FunctionTypeAnnotation":
      {
        var ancestor = parent.type === "NullableTypeAnnotation" ? path.getParentNode(1) : parent;
        return ancestor.type === "UnionTypeAnnotation" || ancestor.type === "IntersectionTypeAnnotation" || ancestor.type === "ArrayTypeAnnotation" || // We should check ancestor's parent to know whether the parentheses
        // are really needed, but since ??T doesn't make sense this check
        // will almost never be true.
        ancestor.type === "NullableTypeAnnotation";
      }

    case "StringLiteral":
    case "NumericLiteral":
    case "Literal":
      if (typeof node.value === "string" && parent.type === "ExpressionStatement" && ( // TypeScript workaround for https://github.com/JamesHenry/typescript-estree/issues/2
      // See corresponding workaround in printer.js case: "Literal"
      options.parser !== "typescript" && !parent.directive || options.parser === "typescript" && options.originalText.substr(options.locStart(node) - 1, 1) === "(")) {
        // To avoid becoming a directive
        var _grandParent = path.getParentNode(1);

        return _grandParent.type === "Program" || _grandParent.type === "BlockStatement";
      }

      return parent.type === "MemberExpression" && typeof node.value === "number" && name === "object" && parent.object === node;

    case "AssignmentExpression":
      {
        var _grandParent2 = path.getParentNode(1);

        if (parent.type === "ArrowFunctionExpression" && parent.body === node) {
          return true;
        } else if (parent.type === "ClassProperty" && parent.key === node && parent.computed) {
          return false;
        } else if (parent.type === "TSPropertySignature" && parent.name === node) {
          return false;
        } else if (parent.type === "ForStatement" && (parent.init === node || parent.update === node)) {
          return false;
        } else if (parent.type === "ExpressionStatement") {
          return node.left.type === "ObjectPattern";
        } else if (parent.type === "TSPropertySignature" && parent.key === node) {
          return false;
        } else if (parent.type === "AssignmentExpression") {
          return false;
        } else if (parent.type === "SequenceExpression" && _grandParent2 && _grandParent2.type === "ForStatement" && (_grandParent2.init === parent || _grandParent2.update === parent)) {
          return false;
        } else if (parent.type === "Property" && parent.value === node) {
          return false;
        } else if (parent.type === "NGChainedExpression") {
          return false;
        }

        return true;
      }

    case "ConditionalExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "SpreadProperty":
        case "BinaryExpression":
        case "LogicalExpression":
        case "ExportDefaultDeclaration":
        case "AwaitExpression":
        case "JSXSpreadAttribute":
        case "TSTypeAssertionExpression":
        case "TypeCastExpression":
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "OptionalMemberExpression":
          return true;

        case "NewExpression":
        case "CallExpression":
          return name === "callee" && parent.callee === node;

        case "ConditionalExpression":
          return name === "test" && parent.test === node;

        case "MemberExpression":
          return name === "object" && parent.object === node;

        default:
          return false;
      }

    case "FunctionExpression":
      switch (parent.type) {
        case "CallExpression":
          return name === "callee";
        // Not strictly necessary, but it's clearer to the reader if IIFEs are wrapped in parentheses.

        case "TaggedTemplateExpression":
          return true;
        // This is basically a kind of IIFE.

        case "ExportDefaultDeclaration":
          return true;

        default:
          return false;
      }

    case "ArrowFunctionExpression":
      switch (parent.type) {
        case "CallExpression":
          return name === "callee";

        case "NewExpression":
          return name === "callee";

        case "MemberExpression":
          return name === "object";

        case "TSAsExpression":
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "BinaryExpression":
        case "AwaitExpression":
        case "TSTypeAssertionExpression":
          return true;

        case "ConditionalExpression":
          return name === "test";

        default:
          return false;
      }

    case "ClassExpression":
      return parent.type === "ExportDefaultDeclaration";

    case "OptionalMemberExpression":
      return parent.type === "MemberExpression";

    case "MemberExpression":
      if (parent.type === "BindExpression" && name === "callee" && parent.callee === node) {
        var object = node.object;

        while (object) {
          if (object.type === "CallExpression") {
            return true;
          }

          if (object.type !== "MemberExpression" && object.type !== "BindExpression") {
            break;
          }

          object = object.object;
        }
      }

      return false;

    case "BindExpression":
      if (parent.type === "BindExpression" && name === "callee" && parent.callee === node || parent.type === "MemberExpression") {
        return true;
      }

      return false;

    case "NGPipeExpression":
      if (parent.type === "NGRoot" || parent.type === "ObjectProperty" || parent.type === "ArrayExpression" || (parent.type === "CallExpression" || parent.type === "OptionalCallExpression") && parent.arguments[name] === node || parent.type === "NGPipeExpression" && name === "right" || parent.type === "MemberExpression" && name === "property" || parent.type === "AssignmentExpression") {
        return false;
      }

      return true;
  }

  return false;
}

function isStatement(node) {
  return node.type === "BlockStatement" || node.type === "BreakStatement" || node.type === "ClassBody" || node.type === "ClassDeclaration" || node.type === "ClassMethod" || node.type === "ClassProperty" || node.type === "ClassPrivateProperty" || node.type === "ContinueStatement" || node.type === "DebuggerStatement" || node.type === "DeclareClass" || node.type === "DeclareExportAllDeclaration" || node.type === "DeclareExportDeclaration" || node.type === "DeclareFunction" || node.type === "DeclareInterface" || node.type === "DeclareModule" || node.type === "DeclareModuleExports" || node.type === "DeclareVariable" || node.type === "DoWhileStatement" || node.type === "ExportAllDeclaration" || node.type === "ExportDefaultDeclaration" || node.type === "ExportNamedDeclaration" || node.type === "ExpressionStatement" || node.type === "ForAwaitStatement" || node.type === "ForInStatement" || node.type === "ForOfStatement" || node.type === "ForStatement" || node.type === "FunctionDeclaration" || node.type === "IfStatement" || node.type === "ImportDeclaration" || node.type === "InterfaceDeclaration" || node.type === "LabeledStatement" || node.type === "MethodDefinition" || node.type === "ReturnStatement" || node.type === "SwitchStatement" || node.type === "ThrowStatement" || node.type === "TryStatement" || node.type === "TSAbstractClassDeclaration" || node.type === "TSEnumDeclaration" || node.type === "TSImportEqualsDeclaration" || node.type === "TSInterfaceDeclaration" || node.type === "TSModuleDeclaration" || node.type === "TSNamespaceExportDeclaration" || node.type === "TypeAlias" || node.type === "VariableDeclaration" || node.type === "WhileStatement" || node.type === "WithStatement";
}

var needsParens_1 = needsParens;

var _require$$0$builders$7 = doc.builders;
var concat$14 = _require$$0$builders$7.concat;
var join$9 = _require$$0$builders$7.join;
var line$9 = _require$$0$builders$7.line;

function printHtmlBinding$1(path, options, print) {
  var node = path.getValue();

  if (options.__onHtmlBindingRoot && path.getName() === null) {
    options.__onHtmlBindingRoot(node);
  }

  if (node.type !== "File") {
    return;
  }

  if (options.__isVueForBindingLeft) {
    return path.call(function (functionDeclarationPath) {
      var _functionDeclarationP = functionDeclarationPath.getValue(),
          params = _functionDeclarationP.params;

      return concat$14([params.length > 1 ? "(" : "", join$9(concat$14([",", line$9]), functionDeclarationPath.map(print, "params")), params.length > 1 ? ")" : ""]);
    }, "program", "body", 0);
  }

  if (options.__isVueSlotScope) {
    return path.call(function (functionDeclarationPath) {
      return join$9(concat$14([",", line$9]), functionDeclarationPath.map(print, "params"));
    }, "program", "body", 0);
  }
}

var htmlBinding = {
  printHtmlBinding: printHtmlBinding$1
};

function preprocess$2(ast, options) {
  switch (options.parser) {
    case "json":
    case "json5":
    case "json-stringify":
    case "__js_expression":
    case "__vue_expression":
      return Object.assign({}, ast, {
        type: options.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
        node: ast,
        comments: []
      });

    default:
      return ast;
  }
}

var preprocess_1$2 = preprocess$2;

var getParentExportDeclaration$1 = util.getParentExportDeclaration;
var isExportDeclaration$1 = util.isExportDeclaration;
var shouldFlatten$1 = util.shouldFlatten;
var getNextNonSpaceNonCommentCharacter$1 = util.getNextNonSpaceNonCommentCharacter;
var hasNewline$3 = util.hasNewline;
var hasNewlineInRange$1 = util.hasNewlineInRange;
var getLast$4 = util.getLast;
var getStringWidth$2 = util.getStringWidth;
var printString$2 = util.printString;
var printNumber$2 = util.printNumber;
var hasIgnoreComment$3 = util.hasIgnoreComment;
var skipWhitespace$1 = util.skipWhitespace;
var hasNodeIgnoreComment$1 = util.hasNodeIgnoreComment;
var getPenultimate$1 = util.getPenultimate;
var startsWithNoLookaheadToken$1 = util.startsWithNoLookaheadToken;
var getIndentSize$1 = util.getIndentSize;
var matchAncestorTypes$1 = util.matchAncestorTypes;
var getPreferredQuote$1 = util.getPreferredQuote;
var isNextLineEmpty$4 = utilShared.isNextLineEmpty;
var isNextLineEmptyAfterIndex$1 = utilShared.isNextLineEmptyAfterIndex;
var getNextNonSpaceNonCommentCharacterIndex$2 = utilShared.getNextNonSpaceNonCommentCharacterIndex;
var isIdentifierName = utils$2.keyword.isIdentifierNameES5;
var insertPragma$7 = pragma$2.insertPragma;
var printHtmlBinding = htmlBinding.printHtmlBinding;
var hasNode = utils$6.hasNode;
var hasFlowAnnotationComment = utils$6.hasFlowAnnotationComment;
var hasFlowShorthandAnnotationComment = utils$6.hasFlowShorthandAnnotationComment;
var _require$$6$builders = doc.builders;
var concat$12 = _require$$6$builders.concat;
var join$7 = _require$$6$builders.join;
var line$8 = _require$$6$builders.line;
var hardline$8 = _require$$6$builders.hardline;
var softline$5 = _require$$6$builders.softline;
var literalline$3 = _require$$6$builders.literalline;
var group$10 = _require$$6$builders.group;
var indent$6 = _require$$6$builders.indent;
var align$1 = _require$$6$builders.align;
var conditionalGroup$1 = _require$$6$builders.conditionalGroup;
var fill$4 = _require$$6$builders.fill;
var ifBreak$6 = _require$$6$builders.ifBreak;
var breakParent$3 = _require$$6$builders.breakParent;
var lineSuffixBoundary$1 = _require$$6$builders.lineSuffixBoundary;
var addAlignmentToDoc$2 = _require$$6$builders.addAlignmentToDoc;
var dedent$3 = _require$$6$builders.dedent;
var _require$$6$utils = doc.utils;
var willBreak$1 = _require$$6$utils.willBreak;
var isLineNext$1 = _require$$6$utils.isLineNext;
var isEmpty$1 = _require$$6$utils.isEmpty;
var removeLines$2 = _require$$6$utils.removeLines;
var printDocToString$1 = doc.printer.printDocToString;
var uid = 0;

function shouldPrintComma$1(options, level) {
  level = level || "es5";

  switch (options.trailingComma) {
    case "all":
      if (level === "all") {
        return true;
      }

    // fallthrough

    case "es5":
      if (level === "es5") {
        return true;
      }

    // fallthrough

    case "none":
    default:
      return false;
  }
}

function genericPrint$3(path, options, printPath, args) {
  var node = path.getValue();
  var needsParens = false;
  var linesWithoutParens = printPathNoParens(path, options, printPath, args);

  if (!node || isEmpty$1(linesWithoutParens)) {
    return linesWithoutParens;
  }

  var parentExportDecl = getParentExportDeclaration$1(path);
  var decorators = [];

  if (node.decorators && node.decorators.length > 0 && // If the parent node is an export declaration and the decorator
  // was written before the export, the export will be responsible
  // for printing the decorators.
  !(parentExportDecl && options.locStart(parentExportDecl, {
    ignoreDecorators: true
  }) > options.locStart(node.decorators[0]))) {
    var shouldBreak = node.type === "ClassDeclaration" || hasNewlineInRange$1(options.originalText, options.locStart(node.decorators[0]), options.locEnd(getLast$4(node.decorators))) || hasNewline$3(options.originalText, options.locEnd(getLast$4(node.decorators)));
    var separator = shouldBreak ? hardline$8 : line$8;
    path.each(function (decoratorPath) {
      var decorator = decoratorPath.getValue();

      if (decorator.expression) {
        decorator = decorator.expression;
      } else {
        decorator = decorator.callee;
      }

      decorators.push(printPath(decoratorPath), separator);
    }, "decorators");

    if (parentExportDecl) {
      decorators.unshift(hardline$8);
    }
  } else if (isExportDeclaration$1(node) && node.declaration && node.declaration.decorators && node.declaration.decorators.length > 0 && // Only print decorators here if they were written before the export,
  // otherwise they are printed by the node.declaration
  options.locStart(node, {
    ignoreDecorators: true
  }) > options.locStart(node.declaration.decorators[0])) {
    // Export declarations are responsible for printing any decorators
    // that logically apply to node.declaration.
    path.each(function (decoratorPath) {
      var decorator = decoratorPath.getValue();
      var prefix = decorator.type === "Decorator" ? "" : "@";
      decorators.push(prefix, printPath(decoratorPath), hardline$8);
    }, "declaration", "decorators");
  } else {
    // Nodes with decorators can't have parentheses, so we can avoid
    // computing pathNeedsParens() except in this case.
    needsParens = needsParens_1(path, options);
  }

  var parts = [];

  if (needsParens) {
    parts.unshift("(");
  }

  parts.push(linesWithoutParens);

  if (needsParens) {
    var _node = path.getValue();

    if (hasFlowShorthandAnnotationComment(_node)) {
      parts.push(" /*");
      parts.push(_node.trailingComments[0].value.trimLeft());
      parts.push("*/");
      _node.trailingComments[0].printed = true;
    }

    parts.push(")");
  }

  if (decorators.length > 0) {
    return group$10(concat$12(decorators.concat(parts)));
  }

  return concat$12(parts);
}

function hasPrettierIgnore$2(path) {
  return hasIgnoreComment$3(path) || hasJsxIgnoreComment(path);
}

function hasJsxIgnoreComment(path) {
  var node = path.getValue();
  var parent = path.getParentNode();

  if (!parent || !node || !isJSXNode(node) || !isJSXNode(parent)) {
    return false;
  } // Lookup the previous sibling, ignoring any empty JSXText elements


  var index = parent.children.indexOf(node);
  var prevSibling = null;

  for (var i = index; i > 0; i--) {
    var candidate = parent.children[i - 1];

    if (candidate.type === "JSXText" && !isMeaningfulJSXText(candidate)) {
      continue;
    }

    prevSibling = candidate;
    break;
  }

  return prevSibling && prevSibling.type === "JSXExpressionContainer" && prevSibling.expression.type === "JSXEmptyExpression" && prevSibling.expression.comments && prevSibling.expression.comments.find(function (comment) {
    return comment.value.trim() === "prettier-ignore";
  });
}
/**
 * The following is the shared logic for
 * ternary operators, namely ConditionalExpression
 * and TSConditionalType
 * @typedef {Object} OperatorOptions
 * @property {() => Array<string | Doc>} beforeParts - Parts to print before the `?`.
 * @property {(breakClosingParen: boolean) => Array<string | Doc>} afterParts - Parts to print after the conditional expression.
 * @property {boolean} shouldCheckJsx - Whether to check for and print in JSX mode.
 * @property {string} conditionalNodeType - The type of the conditional expression node, ie "ConditionalExpression" or "TSConditionalType".
 * @property {string} consequentNodePropertyName - The property at which the consequent node can be found on the main node, eg "consequent".
 * @property {string} alternateNodePropertyName - The property at which the alternate node can be found on the main node, eg "alternate".
 * @property {string} testNodePropertyName - The property at which the test node can be found on the main node, eg "test".
 * @property {boolean} breakNested - Whether to break all nested ternaries when one breaks.
 * @param {FastPath} path - The path to the ConditionalExpression/TSConditionalType node.
 * @param {Options} options - Prettier options
 * @param {Function} print - Print function to call recursively
 * @param {OperatorOptions} operatorOptions
 * @returns Doc
 */


function printTernaryOperator(path, options, print, operatorOptions) {
  var node = path.getValue();
  var testNode = node[operatorOptions.testNodePropertyName];
  var consequentNode = node[operatorOptions.consequentNodePropertyName];
  var alternateNode = node[operatorOptions.alternateNodePropertyName];
  var parts = []; // We print a ConditionalExpression in either "JSX mode" or "normal mode".
  // See tests/jsx/conditional-expression.js for more info.

  var jsxMode = false;
  var parent = path.getParentNode();
  var forceNoIndent = parent.type === operatorOptions.conditionalNodeType; // Find the outermost non-ConditionalExpression parent, and the outermost
  // ConditionalExpression parent. We'll use these to determine if we should
  // print in JSX mode.

  var currentParent;
  var previousParent;
  var i = 0;

  do {
    previousParent = currentParent || node;
    currentParent = path.getParentNode(i);
    i++;
  } while (currentParent && currentParent.type === operatorOptions.conditionalNodeType);

  var firstNonConditionalParent = currentParent || parent;
  var lastConditionalParent = previousParent;

  if (operatorOptions.shouldCheckJsx && (isJSXNode(testNode) || isJSXNode(consequentNode) || isJSXNode(alternateNode) || conditionalExpressionChainContainsJSX(lastConditionalParent))) {
    jsxMode = true;
    forceNoIndent = true; // Even though they don't need parens, we wrap (almost) everything in
    // parens when using ?: within JSX, because the parens are analogous to
    // curly braces in an if statement.

    var wrap = function wrap(doc$$2) {
      return concat$12([ifBreak$6("(", ""), indent$6(concat$12([softline$5, doc$$2])), softline$5, ifBreak$6(")", "")]);
    }; // The only things we don't wrap are:
    // * Nested conditional expressions in alternates
    // * null


    var isNull = function isNull(node) {
      return node.type === "NullLiteral" || node.type === "Literal" && node.value === null;
    };

    parts.push(" ? ", isNull(consequentNode) ? path.call(print, operatorOptions.consequentNodePropertyName) : wrap(path.call(print, operatorOptions.consequentNodePropertyName)), " : ", alternateNode.type === operatorOptions.conditionalNodeType || isNull(alternateNode) ? path.call(print, operatorOptions.alternateNodePropertyName) : wrap(path.call(print, operatorOptions.alternateNodePropertyName)));
  } else {
    // normal mode
    var part = concat$12([line$8, "? ", consequentNode.type === operatorOptions.conditionalNodeType ? ifBreak$6("", "(") : "", align$1(2, path.call(print, operatorOptions.consequentNodePropertyName)), consequentNode.type === operatorOptions.conditionalNodeType ? ifBreak$6("", ")") : "", line$8, ": ", alternateNode.type === operatorOptions.conditionalNodeType ? path.call(print, operatorOptions.alternateNodePropertyName) : align$1(2, path.call(print, operatorOptions.alternateNodePropertyName))]);
    parts.push(parent.type !== operatorOptions.conditionalNodeType || parent[operatorOptions.alternateNodePropertyName] === node ? part : options.useTabs ? dedent$3(indent$6(part)) : align$1(Math.max(0, options.tabWidth - 2), part));
  } // We want a whole chain of ConditionalExpressions to all
  // break if any of them break. That means we should only group around the
  // outer-most ConditionalExpression.


  var maybeGroup = function maybeGroup(doc$$2) {
    return operatorOptions.breakNested ? parent === firstNonConditionalParent ? group$10(doc$$2) : doc$$2 : group$10(doc$$2);
  }; // Break the closing paren to keep the chain right after it:
  // (a
  //   ? b
  //   : c
  // ).call()


  var breakClosingParen = !jsxMode && (parent.type === "MemberExpression" || parent.type === "OptionalMemberExpression") && !parent.computed;
  return maybeGroup(concat$12([].concat(function (testDoc) {
    return (
      /**
       *     a
       *       ? b
       *       : multiline
       *         test
       *         node
       *       ^^ align(2)
       *       ? d
       *       : e
       */
      parent.type === operatorOptions.conditionalNodeType && parent[operatorOptions.alternateNodePropertyName] === node ? align$1(2, testDoc) : testDoc
    );
  }(concat$12(operatorOptions.beforeParts())), forceNoIndent ? concat$12(parts) : indent$6(concat$12(parts)), operatorOptions.afterParts(breakClosingParen))));
}

function getTypeScriptMappedTypeModifier(tokenNode, keyword) {
  if (tokenNode.type === "TSPlusToken") {
    return "+" + keyword;
  } else if (tokenNode.type === "TSMinusToken") {
    return "-" + keyword;
  }

  return keyword;
}

function printPathNoParens(path, options, print, args) {
  var n = path.getValue();
  var semi = options.semi ? ";" : "";

  if (!n) {
    return "";
  }

  if (typeof n === "string") {
    return n;
  }

  var htmlBinding$$1 = printHtmlBinding(path, options, print);

  if (htmlBinding$$1) {
    return htmlBinding$$1;
  }

  var parts = [];

  switch (n.type) {
    case "JsExpressionRoot":
      return path.call(print, "node");

    case "JsonRoot":
      return concat$12([path.call(print, "node"), hardline$8]);

    case "File":
      // Print @babel/parser's InterpreterDirective here so that
      // leading comments on the `Program` node get printed after the hashbang.
      if (n.program && n.program.interpreter) {
        parts.push(path.call(function (programPath) {
          return programPath.call(print, "interpreter");
        }, "program"));
      }

      parts.push(path.call(print, "program"));
      return concat$12(parts);

    case "Program":
      // Babel 6
      if (n.directives) {
        path.each(function (childPath) {
          parts.push(print(childPath), semi, hardline$8);

          if (isNextLineEmpty$4(options.originalText, childPath.getValue(), options)) {
            parts.push(hardline$8);
          }
        }, "directives");
      }

      parts.push(path.call(function (bodyPath) {
        return printStatementSequence(bodyPath, options, print);
      }, "body"));
      parts.push(comments.printDanglingComments(path, options,
      /* sameIndent */
      true)); // Only force a trailing newline if there were any contents.

      if (n.body.length || n.comments) {
        parts.push(hardline$8);
      }

      return concat$12(parts);
    // Babel extension.

    case "EmptyStatement":
      return "";

    case "ExpressionStatement":
      // Detect Flow-parsed directives
      if (n.directive) {
        return concat$12([nodeStr(n.expression, options, true), semi]);
      } // Do not append semicolon after the only JSX element in a program


      return concat$12([path.call(print, "expression"), isTheOnlyJSXElementInMarkdown(options, path) ? "" : semi]);
    // Babel extension.

    case "ParenthesizedExpression":
      return concat$12(["(", path.call(print, "expression"), ")"]);

    case "AssignmentExpression":
      return printAssignment(n.left, path.call(print, "left"), concat$12([" ", n.operator]), n.right, path.call(print, "right"), options);

    case "BinaryExpression":
    case "LogicalExpression":
    case "NGPipeExpression":
      {
        var parent = path.getParentNode();
        var parentParent = path.getParentNode(1);
        var isInsideParenthesis = n !== parent.body && (parent.type === "IfStatement" || parent.type === "WhileStatement" || parent.type === "DoWhileStatement");

        var _parts = printBinaryishExpressions(path, print, options,
        /* isNested */
        false, isInsideParenthesis); //   if (
        //     this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft
        //   ) {
        //
        // looks super weird, we want to break the children if the parent breaks
        //
        //   if (
        //     this.hasPlugin("dynamicImports") &&
        //     this.lookahead().type === tt.parenLeft
        //   ) {


        if (isInsideParenthesis) {
          return concat$12(_parts);
        } // Break between the parens in unaries or in a member expression, i.e.
        //
        //   (
        //     a &&
        //     b &&
        //     c
        //   ).call()


        if (parent.type === "UnaryExpression" || (parent.type === "MemberExpression" || parent.type === "OptionalMemberExpression") && !parent.computed) {
          return group$10(concat$12([indent$6(concat$12([softline$5, concat$12(_parts)])), softline$5]));
        } // Avoid indenting sub-expressions in some cases where the first sub-expression is already
        // indented accordingly. We should indent sub-expressions where the first case isn't indented.


        var shouldNotIndent = parent.type === "ReturnStatement" || parent.type === "JSXExpressionContainer" && parentParent.type === "JSXAttribute" || n.type !== "NGPipeExpression" && (parent.type === "NGRoot" && options.parser === "__ng_binding" || parent.type === "NGMicrosyntaxExpression" && parentParent.type === "NGMicrosyntax" && parentParent.body.length === 1) || n === parent.body && parent.type === "ArrowFunctionExpression" || n !== parent.body && parent.type === "ForStatement" || parent.type === "ConditionalExpression" && parentParent.type !== "ReturnStatement" && parentParent.type !== "CallExpression";
        var shouldIndentIfInlining = parent.type === "AssignmentExpression" || parent.type === "VariableDeclarator" || parent.type === "ClassProperty" || parent.type === "TSAbstractClassProperty" || parent.type === "ClassPrivateProperty" || parent.type === "ObjectProperty" || parent.type === "Property";
        var samePrecedenceSubExpression = isBinaryish(n.left) && shouldFlatten$1(n.operator, n.left.operator);

        if (shouldNotIndent || shouldInlineLogicalExpression(n) && !samePrecedenceSubExpression || !shouldInlineLogicalExpression(n) && shouldIndentIfInlining) {
          return group$10(concat$12(_parts));
        }

        if (_parts.length === 0) {
          return "";
        } // If the right part is a JSX node, we include it in a separate group to
        // prevent it breaking the whole chain, so we can print the expression like:
        //
        //   foo && bar && (
        //     <Foo>
        //       <Bar />
        //     </Foo>
        //   )


        var hasJSX = isJSXNode(n.right);
        var rest = concat$12(hasJSX ? _parts.slice(1, -1) : _parts.slice(1));
        var groupId = Symbol("logicalChain-" + ++uid);
        var chain = group$10(concat$12([// Don't include the initial expression in the indentation
        // level. The first item is guaranteed to be the first
        // left-most expression.
        _parts.length > 0 ? _parts[0] : "", indent$6(rest)]), {
          id: groupId
        });

        if (!hasJSX) {
          return chain;
        }

        var jsxPart = getLast$4(_parts);
        return group$10(concat$12([chain, ifBreak$6(indent$6(jsxPart), jsxPart, {
          groupId: groupId
        })]));
      }

    case "AssignmentPattern":
      return concat$12([path.call(print, "left"), " = ", path.call(print, "right")]);

    case "TSTypeAssertionExpression":
      {
        var shouldBreakAfterCast = !(n.expression.type === "ArrayExpression" || n.expression.type === "ObjectExpression");
        var castGroup = group$10(concat$12(["<", indent$6(concat$12([softline$5, path.call(print, "typeAnnotation")])), softline$5, ">"]));
        var exprContents = concat$12([ifBreak$6("("), indent$6(concat$12([softline$5, path.call(print, "expression")])), softline$5, ifBreak$6(")")]);

        if (shouldBreakAfterCast) {
          return conditionalGroup$1([concat$12([castGroup, path.call(print, "expression")]), concat$12([castGroup, group$10(exprContents, {
            shouldBreak: true
          })]), concat$12([castGroup, path.call(print, "expression")])]);
        }

        return group$10(concat$12([castGroup, path.call(print, "expression")]));
      }

    case "OptionalMemberExpression":
    case "MemberExpression":
      {
        var _parent = path.getParentNode();

        var firstNonMemberParent;
        var i = 0;

        do {
          firstNonMemberParent = path.getParentNode(i);
          i++;
        } while (firstNonMemberParent && (firstNonMemberParent.type === "MemberExpression" || firstNonMemberParent.type === "OptionalMemberExpression" || firstNonMemberParent.type === "TSNonNullExpression"));

        var shouldInline = firstNonMemberParent && (firstNonMemberParent.type === "NewExpression" || firstNonMemberParent.type === "BindExpression" || firstNonMemberParent.type === "VariableDeclarator" && firstNonMemberParent.id.type !== "Identifier" || firstNonMemberParent.type === "AssignmentExpression" && firstNonMemberParent.left.type !== "Identifier") || n.computed || n.object.type === "Identifier" && n.property.type === "Identifier" && _parent.type !== "MemberExpression" && _parent.type !== "OptionalMemberExpression";
        return concat$12([path.call(print, "object"), shouldInline ? printMemberLookup(path, options, print) : group$10(indent$6(concat$12([softline$5, printMemberLookup(path, options, print)])))]);
      }

    case "MetaProperty":
      return concat$12([path.call(print, "meta"), ".", path.call(print, "property")]);

    case "BindExpression":
      if (n.object) {
        parts.push(path.call(print, "object"));
      }

      parts.push(group$10(indent$6(concat$12([softline$5, printBindExpressionCallee(path, options, print)]))));
      return concat$12(parts);

    case "Identifier":
      {
        return concat$12([n.name, printOptionalToken(path), printTypeAnnotation(path, options, print)]);
      }

    case "SpreadElement":
    case "SpreadElementPattern":
    case "RestProperty":
    case "SpreadProperty":
    case "SpreadPropertyPattern":
    case "RestElement":
    case "ObjectTypeSpreadProperty":
      return concat$12(["...", path.call(print, "argument"), printTypeAnnotation(path, options, print)]);

    case "FunctionDeclaration":
    case "FunctionExpression":
      if (isNodeStartingWithDeclare(n, options)) {
        parts.push("declare ");
      }

      parts.push(printFunctionDeclaration(path, print, options));

      if (!n.body) {
        parts.push(semi);
      }

      return concat$12(parts);

    case "ArrowFunctionExpression":
      {
        if (n.async) {
          parts.push("async ");
        }

        if (shouldPrintParamsWithoutParens(path, options)) {
          parts.push(path.call(print, "params", 0));
        } else {
          parts.push(group$10(concat$12([printFunctionParams(path, print, options,
          /* expandLast */
          args && (args.expandLastArg || args.expandFirstArg),
          /* printTypeParams */
          true), printReturnType(path, print, options)])));
        }

        var dangling = comments.printDanglingComments(path, options,
        /* sameIndent */
        true, function (comment) {
          var nextCharacter = getNextNonSpaceNonCommentCharacterIndex$2(options.originalText, comment, options);
          return options.originalText.substr(nextCharacter, 2) === "=>";
        });

        if (dangling) {
          parts.push(" ", dangling);
        }

        parts.push(" =>");
        var body = path.call(function (bodyPath) {
          return print(bodyPath, args);
        }, "body"); // We want to always keep these types of nodes on the same line
        // as the arrow.

        if (!hasLeadingOwnLineComment(options.originalText, n.body, options) && (n.body.type === "ArrayExpression" || n.body.type === "ObjectExpression" || n.body.type === "BlockStatement" || isJSXNode(n.body) || isTemplateOnItsOwnLine(n.body, options.originalText, options) || n.body.type === "ArrowFunctionExpression" || n.body.type === "DoExpression")) {
          return group$10(concat$12([concat$12(parts), " ", body]));
        } // We handle sequence expressions as the body of arrows specially,
        // so that the required parentheses end up on their own lines.


        if (n.body.type === "SequenceExpression") {
          return group$10(concat$12([concat$12(parts), group$10(concat$12([" (", indent$6(concat$12([softline$5, body])), softline$5, ")"]))]));
        } // if the arrow function is expanded as last argument, we are adding a
        // level of indentation and need to add a softline to align the closing )
        // with the opening (, or if it's inside a JSXExpression (e.g. an attribute)
        // we should align the expression's closing } with the line with the opening {.


        var shouldAddSoftLine = (args && args.expandLastArg || path.getParentNode().type === "JSXExpressionContainer") && !(n.comments && n.comments.length);
        var printTrailingComma = args && args.expandLastArg && shouldPrintComma$1(options, "all"); // In order to avoid confusion between
        // a => a ? a : a
        // a <= a ? a : a

        var shouldAddParens = n.body.type === "ConditionalExpression" && !startsWithNoLookaheadToken$1(n.body,
        /* forbidFunctionAndClass */
        false);
        return group$10(concat$12([concat$12(parts), group$10(concat$12([indent$6(concat$12([line$8, shouldAddParens ? ifBreak$6("", "(") : "", body, shouldAddParens ? ifBreak$6("", ")") : ""])), shouldAddSoftLine ? concat$12([ifBreak$6(printTrailingComma ? "," : ""), softline$5]) : ""]))]));
      }

    case "MethodDefinition":
    case "TSAbstractMethodDefinition":
      if (n.accessibility) {
        parts.push(n.accessibility + " ");
      }

      if (n.static) {
        parts.push("static ");
      }

      if (n.type === "TSAbstractMethodDefinition") {
        parts.push("abstract ");
      }

      parts.push(printMethod(path, options, print));
      return concat$12(parts);

    case "YieldExpression":
      parts.push("yield");

      if (n.delegate) {
        parts.push("*");
      }

      if (n.argument) {
        parts.push(" ", path.call(print, "argument"));
      }

      return concat$12(parts);

    case "AwaitExpression":
      return concat$12(["await ", path.call(print, "argument")]);

    case "ImportSpecifier":
      if (n.importKind) {
        parts.push(path.call(print, "importKind"), " ");
      }

      parts.push(path.call(print, "imported"));

      if (n.local && n.local.name !== n.imported.name) {
        parts.push(" as ", path.call(print, "local"));
      }

      return concat$12(parts);

    case "ExportSpecifier":
      parts.push(path.call(print, "local"));

      if (n.exported && n.exported.name !== n.local.name) {
        parts.push(" as ", path.call(print, "exported"));
      }

      return concat$12(parts);

    case "ImportNamespaceSpecifier":
      parts.push("* as ");

      if (n.local) {
        parts.push(path.call(print, "local"));
      } else if (n.id) {
        parts.push(path.call(print, "id"));
      }

      return concat$12(parts);

    case "ImportDefaultSpecifier":
      if (n.local) {
        return path.call(print, "local");
      }

      return path.call(print, "id");

    case "TSExportAssignment":
      return concat$12(["export = ", path.call(print, "expression"), semi]);

    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
      return printExportDeclaration(path, options, print);

    case "ExportAllDeclaration":
      parts.push("export ");

      if (n.exportKind === "type") {
        parts.push("type ");
      }

      parts.push("* from ", path.call(print, "source"), semi);
      return concat$12(parts);

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return path.call(print, "exported");

    case "ImportDeclaration":
      {
        parts.push("import ");

        if (n.importKind && n.importKind !== "value") {
          parts.push(n.importKind + " ");
        }

        var standalones = [];
        var grouped = [];

        if (n.specifiers && n.specifiers.length > 0) {
          path.each(function (specifierPath) {
            var value = specifierPath.getValue();

            if (value.type === "ImportDefaultSpecifier" || value.type === "ImportNamespaceSpecifier") {
              standalones.push(print(specifierPath));
            } else {
              grouped.push(print(specifierPath));
            }
          }, "specifiers");

          if (standalones.length > 0) {
            parts.push(join$7(", ", standalones));
          }

          if (standalones.length > 0 && grouped.length > 0) {
            parts.push(", ");
          }

          if (grouped.length === 1 && standalones.length === 0 && n.specifiers && !n.specifiers.some(function (node) {
            return node.comments;
          })) {
            parts.push(concat$12(["{", options.bracketSpacing ? " " : "", concat$12(grouped), options.bracketSpacing ? " " : "", "}"]));
          } else if (grouped.length >= 1) {
            parts.push(group$10(concat$12(["{", indent$6(concat$12([options.bracketSpacing ? line$8 : softline$5, join$7(concat$12([",", line$8]), grouped)])), ifBreak$6(shouldPrintComma$1(options) ? "," : ""), options.bracketSpacing ? line$8 : softline$5, "}"])));
          }

          parts.push(" from ");
        } else if (n.importKind && n.importKind === "type" || // import {} from 'x'
        /{\s*}/.test(options.originalText.slice(options.locStart(n), options.locStart(n.source)))) {
          parts.push("{} from ");
        }

        parts.push(path.call(print, "source"), semi);
        return concat$12(parts);
      }

    case "Import":
      return "import";

    case "BlockStatement":
      {
        var naked = path.call(function (bodyPath) {
          return printStatementSequence(bodyPath, options, print);
        }, "body");
        var hasContent = n.body.find(function (node) {
          return node.type !== "EmptyStatement";
        });
        var hasDirectives = n.directives && n.directives.length > 0;

        var _parent2 = path.getParentNode();

        var _parentParent = path.getParentNode(1);

        if (!hasContent && !hasDirectives && !hasDanglingComments(n) && (_parent2.type === "ArrowFunctionExpression" || _parent2.type === "FunctionExpression" || _parent2.type === "FunctionDeclaration" || _parent2.type === "ObjectMethod" || _parent2.type === "ClassMethod" || _parent2.type === "ForStatement" || _parent2.type === "WhileStatement" || _parent2.type === "DoWhileStatement" || _parent2.type === "DoExpression" || _parent2.type === "CatchClause" && !_parentParent.finalizer)) {
          return "{}";
        }

        parts.push("{"); // Babel 6

        if (hasDirectives) {
          path.each(function (childPath) {
            parts.push(indent$6(concat$12([hardline$8, print(childPath), semi])));

            if (isNextLineEmpty$4(options.originalText, childPath.getValue(), options)) {
              parts.push(hardline$8);
            }
          }, "directives");
        }

        if (hasContent) {
          parts.push(indent$6(concat$12([hardline$8, naked])));
        }

        parts.push(comments.printDanglingComments(path, options));
        parts.push(hardline$8, "}");
        return concat$12(parts);
      }

    case "ReturnStatement":
      parts.push("return");

      if (n.argument) {
        if (returnArgumentHasLeadingComment(options, n.argument)) {
          parts.push(concat$12([" (", indent$6(concat$12([hardline$8, path.call(print, "argument")])), hardline$8, ")"]));
        } else if (n.argument.type === "LogicalExpression" || n.argument.type === "BinaryExpression" || n.argument.type === "SequenceExpression") {
          parts.push(group$10(concat$12([ifBreak$6(" (", " "), indent$6(concat$12([softline$5, path.call(print, "argument")])), softline$5, ifBreak$6(")")])));
        } else {
          parts.push(" ", path.call(print, "argument"));
        }
      }

      if (hasDanglingComments(n)) {
        parts.push(" ", comments.printDanglingComments(path, options,
        /* sameIndent */
        true));
      }

      parts.push(semi);
      return concat$12(parts);

    case "NewExpression":
    case "OptionalCallExpression":
    case "CallExpression":
      {
        var isNew = n.type === "NewExpression";
        var optional = printOptionalToken(path);

        if ( // We want to keep CommonJS- and AMD-style require calls, and AMD-style
        // define calls, as a unit.
        // e.g. `define(["some/lib", (lib) => {`
        !isNew && n.callee.type === "Identifier" && (n.callee.name === "require" || n.callee.name === "define") || n.callee.type === "Import" || // Template literals as single arguments
        n.arguments.length === 1 && isTemplateOnItsOwnLine(n.arguments[0], options.originalText, options) || // Keep test declarations on a single line
        // e.g. `it('long name', () => {`
        !isNew && isTestCall(n, path.getParentNode())) {
          return concat$12([isNew ? "new " : "", path.call(print, "callee"), optional, printFunctionTypeParameters(path, options, print), concat$12(["(", join$7(", ", path.map(print, "arguments")), ")"])]);
        } // Inline Flow annotation comments following Identifiers in Call nodes need to
        // stay with the Identifier. For example:
        //
        // foo /*:: <SomeGeneric> */(bar);
        //
        // Here, we ensure that such comments stay between the Identifier and the Callee.


        var isIdentifierWithFlowAnnotation = n.callee.type === "Identifier" && hasFlowAnnotationComment(n.callee.trailingComments);

        if (isIdentifierWithFlowAnnotation) {
          n.callee.trailingComments[0].printed = true;
        } // We detect calls on member lookups and possibly print them in a
        // special chain format. See `printMemberChain` for more info.


        if (!isNew && isMemberish(n.callee)) {
          return printMemberChain(path, options, print);
        }

        return concat$12([isNew ? "new " : "", path.call(print, "callee"), optional, isIdentifierWithFlowAnnotation ? "/*:: ".concat(n.callee.trailingComments[0].value.substring(2).trim(), " */") : "", printFunctionTypeParameters(path, options, print), printArgumentsList(path, options, print)]);
      }

    case "TSInterfaceDeclaration":
      if (isNodeStartingWithDeclare(n, options)) {
        parts.push("declare ");
      }

      parts.push(n.abstract ? "abstract " : "", printTypeScriptModifiers(path, options, print), "interface ", path.call(print, "id"), n.typeParameters ? path.call(print, "typeParameters") : "", " ");

      if (n.heritage.length) {
        parts.push(group$10(indent$6(concat$12([softline$5, "extends ", indent$6(join$7(concat$12([",", line$8]), path.map(print, "heritage"))), " "]))));
      }

      parts.push(path.call(print, "body"));
      return concat$12(parts);

    case "ObjectTypeInternalSlot":
      return concat$12([n.static ? "static " : "", "[[", path.call(print, "id"), "]]", printOptionalToken(path), n.method ? "" : ": ", path.call(print, "value")]);

    case "ObjectExpression":
    case "ObjectPattern":
    case "ObjectTypeAnnotation":
    case "TSInterfaceBody":
    case "TSTypeLiteral":
      {
        var propertiesField;

        if (n.type === "TSTypeLiteral") {
          propertiesField = "members";
        } else if (n.type === "TSInterfaceBody") {
          propertiesField = "body";
        } else {
          propertiesField = "properties";
        }

        var isTypeAnnotation = n.type === "ObjectTypeAnnotation";
        var fields = [];

        if (isTypeAnnotation) {
          fields.push("indexers", "callProperties", "internalSlots");
        }

        fields.push(propertiesField);
        var firstProperty = fields.map(function (field) {
          return n[field][0];
        }).sort(function (a, b) {
          return options.locStart(a) - options.locStart(b);
        })[0];

        var _parent3 = path.getParentNode(0);

        var shouldBreak = n.type === "TSInterfaceBody" || n.type === "ObjectPattern" && _parent3.type !== "FunctionDeclaration" && _parent3.type !== "FunctionExpression" && _parent3.type !== "ArrowFunctionExpression" && _parent3.type !== "AssignmentPattern" && _parent3.type !== "CatchClause" && n.properties.some(function (property) {
          return property.value && (property.value.type === "ObjectPattern" || property.value.type === "ArrayPattern");
        }) || n.type !== "ObjectPattern" && firstProperty && hasNewlineInRange$1(options.originalText, options.locStart(n), options.locStart(firstProperty));
        var isFlowInterfaceLikeBody = isTypeAnnotation && _parent3 && (_parent3.type === "InterfaceDeclaration" || _parent3.type === "DeclareInterface" || _parent3.type === "DeclareClass") && path.getName() === "body";
        var separator = isFlowInterfaceLikeBody ? ";" : n.type === "TSInterfaceBody" || n.type === "TSTypeLiteral" ? ifBreak$6(semi, ";") : ",";
        var leftBrace = n.exact ? "{|" : "{";
        var rightBrace = n.exact ? "|}" : "}"; // Unfortunately, things are grouped together in the ast can be
        // interleaved in the source code. So we need to reorder them before
        // printing them.

        var propsAndLoc = [];
        fields.forEach(function (field) {
          path.each(function (childPath) {
            var node = childPath.getValue();
            propsAndLoc.push({
              node: node,
              printed: print(childPath),
              loc: options.locStart(node)
            });
          }, field);
        });
        var separatorParts = [];
        var props = propsAndLoc.sort(function (a, b) {
          return a.loc - b.loc;
        }).map(function (prop) {
          var result = concat$12(separatorParts.concat(group$10(prop.printed)));
          separatorParts = [separator, line$8];

          if ((prop.node.type === "TSPropertySignature" || prop.node.type === "TSMethodSignature") && hasNodeIgnoreComment$1(prop.node)) {
            separatorParts.shift();
          }

          if (isNextLineEmpty$4(options.originalText, prop.node, options)) {
            separatorParts.push(hardline$8);
          }

          return result;
        });

        if (n.inexact) {
          props.push(concat$12(separatorParts.concat(group$10("..."))));
        }

        var lastElem = getLast$4(n[propertiesField]);
        var canHaveTrailingSeparator = !(lastElem && (lastElem.type === "RestProperty" || lastElem.type === "RestElement" || hasNodeIgnoreComment$1(lastElem) || n.inexact));
        var content;

        if (props.length === 0 && !n.typeAnnotation) {
          if (!hasDanglingComments(n)) {
            return concat$12([leftBrace, rightBrace]);
          }

          content = group$10(concat$12([leftBrace, comments.printDanglingComments(path, options), softline$5, rightBrace, printOptionalToken(path)]));
        } else {
          content = concat$12([leftBrace, indent$6(concat$12([options.bracketSpacing ? line$8 : softline$5, concat$12(props)])), ifBreak$6(canHaveTrailingSeparator && (separator !== "," || shouldPrintComma$1(options)) ? separator : ""), concat$12([options.bracketSpacing ? line$8 : softline$5, rightBrace]), printOptionalToken(path), printTypeAnnotation(path, options, print)]);
        } // If we inline the object as first argument of the parent, we don't want
        // to create another group so that the object breaks before the return
        // type


        var parentParentParent = path.getParentNode(2);

        if (n.type === "ObjectPattern" && _parent3 && shouldHugArguments(_parent3) && _parent3.params[0] === n || shouldHugType(n) && parentParentParent && shouldHugArguments(parentParentParent) && parentParentParent.params[0].typeAnnotation && parentParentParent.params[0].typeAnnotation.typeAnnotation === n) {
          return content;
        }

        return group$10(content, {
          shouldBreak: shouldBreak
        });
      }
    // Babel 6

    case "ObjectProperty": // Non-standard AST node type.

    case "Property":
      if (n.method || n.kind === "get" || n.kind === "set") {
        return printMethod(path, options, print);
      }

      if (n.shorthand) {
        parts.push(path.call(print, "value"));
      } else {
        var printedLeft;

        if (n.computed) {
          printedLeft = concat$12(["[", path.call(print, "key"), "]"]);
        } else {
          printedLeft = printPropertyKey(path, options, print);
        }

        parts.push(printAssignment(n.key, printedLeft, ":", n.value, path.call(print, "value"), options));
      }

      return concat$12(parts);
    // Babel 6

    case "ClassMethod":
      if (n.static) {
        parts.push("static ");
      }

      parts = parts.concat(printObjectMethod(path, options, print));
      return concat$12(parts);
    // Babel 6

    case "ObjectMethod":
      return printObjectMethod(path, options, print);

    case "Decorator":
      return concat$12(["@", path.call(print, "expression"), path.call(print, "callee")]);

    case "ArrayExpression":
    case "ArrayPattern":
      if (n.elements.length === 0) {
        if (!hasDanglingComments(n)) {
          parts.push("[]");
        } else {
          parts.push(group$10(concat$12(["[", comments.printDanglingComments(path, options), softline$5, "]"])));
        }
      } else {
        var _lastElem = getLast$4(n.elements);

        var canHaveTrailingComma = !(_lastElem && _lastElem.type === "RestElement"); // JavaScript allows you to have empty elements in an array which
        // changes its length based on the number of commas. The algorithm
        // is that if the last argument is null, we need to force insert
        // a comma to ensure JavaScript recognizes it.
        //   [,].length === 1
        //   [1,].length === 1
        //   [1,,].length === 2
        //
        // Note that getLast returns null if the array is empty, but
        // we already check for an empty array just above so we are safe

        var needsForcedTrailingComma = canHaveTrailingComma && _lastElem === null;
        parts.push(group$10(concat$12(["[", indent$6(concat$12([softline$5, printArrayItems(path, options, "elements", print)])), needsForcedTrailingComma ? "," : "", ifBreak$6(canHaveTrailingComma && !needsForcedTrailingComma && shouldPrintComma$1(options) ? "," : ""), comments.printDanglingComments(path, options,
        /* sameIndent */
        true), softline$5, "]"])));
      }

      parts.push(printOptionalToken(path), printTypeAnnotation(path, options, print));
      return concat$12(parts);

    case "SequenceExpression":
      {
        var _parent4 = path.getParentNode(0);

        if (_parent4.type === "ExpressionStatement" || _parent4.type === "ForStatement") {
          // For ExpressionStatements and for-loop heads, which are among
          // the few places a SequenceExpression appears unparenthesized, we want
          // to indent expressions after the first.
          var _parts2 = [];
          path.each(function (p) {
            if (p.getName() === 0) {
              _parts2.push(print(p));
            } else {
              _parts2.push(",", indent$6(concat$12([line$8, print(p)])));
            }
          }, "expressions");
          return group$10(concat$12(_parts2));
        }

        return group$10(concat$12([join$7(concat$12([",", line$8]), path.map(print, "expressions"))]));
      }

    case "ThisExpression":
      return "this";

    case "Super":
      return "super";

    case "NullLiteral":
      // Babel 6 Literal split
      return "null";

    case "RegExpLiteral":
      // Babel 6 Literal split
      return printRegex(n);

    case "NumericLiteral":
      // Babel 6 Literal split
      return printNumber$2(n.extra.raw);

    case "BigIntLiteral":
      return concat$12([printNumber$2(n.extra.rawValue), "n"]);

    case "BooleanLiteral": // Babel 6 Literal split

    case "StringLiteral": // Babel 6 Literal split

    case "Literal":
      {
        if (n.regex) {
          return printRegex(n.regex);
        }

        if (typeof n.value === "number") {
          return printNumber$2(n.raw);
        }

        if (typeof n.value !== "string") {
          return "" + n.value;
        } // TypeScript workaround for https://github.com/JamesHenry/typescript-estree/issues/2
        // See corresponding workaround in needs-parens.js


        var grandParent = path.getParentNode(1);
        var isTypeScriptDirective = options.parser === "typescript" && typeof n.value === "string" && grandParent && (grandParent.type === "Program" || grandParent.type === "BlockStatement");
        return nodeStr(n, options, isTypeScriptDirective);
      }

    case "Directive":
      return path.call(print, "value");
    // Babel 6

    case "DirectiveLiteral":
      return nodeStr(n, options);

    case "UnaryExpression":
      parts.push(n.operator);

      if (/[a-z]$/.test(n.operator)) {
        parts.push(" ");
      }

      parts.push(path.call(print, "argument"));
      return concat$12(parts);

    case "UpdateExpression":
      parts.push(path.call(print, "argument"), n.operator);

      if (n.prefix) {
        parts.reverse();
      }

      return concat$12(parts);

    case "ConditionalExpression":
      return printTernaryOperator(path, options, print, {
        beforeParts: function beforeParts() {
          return [path.call(print, "test")];
        },
        afterParts: function afterParts(breakClosingParen) {
          return [breakClosingParen ? softline$5 : ""];
        },
        shouldCheckJsx: true,
        conditionalNodeType: "ConditionalExpression",
        consequentNodePropertyName: "consequent",
        alternateNodePropertyName: "alternate",
        testNodePropertyName: "test",
        breakNested: true
      });

    case "VariableDeclaration":
      {
        var printed = path.map(function (childPath) {
          return print(childPath);
        }, "declarations"); // We generally want to terminate all variable declarations with a
        // semicolon, except when they in the () part of for loops.

        var parentNode = path.getParentNode();
        var isParentForLoop = parentNode.type === "ForStatement" || parentNode.type === "ForInStatement" || parentNode.type === "ForOfStatement" || parentNode.type === "ForAwaitStatement";
        var hasValue = n.declarations.some(function (decl) {
          return decl.init;
        });
        var firstVariable;

        if (printed.length === 1 && !n.declarations[0].comments) {
          firstVariable = printed[0];
        } else if (printed.length > 0) {
          // Indent first var to comply with eslint one-var rule
          firstVariable = indent$6(printed[0]);
        }

        parts = [isNodeStartingWithDeclare(n, options) ? "declare " : "", n.kind, firstVariable ? concat$12([" ", firstVariable]) : "", indent$6(concat$12(printed.slice(1).map(function (p) {
          return concat$12([",", hasValue && !isParentForLoop ? hardline$8 : line$8, p]);
        })))];

        if (!(isParentForLoop && parentNode.body !== n)) {
          parts.push(semi);
        }

        return group$10(concat$12(parts));
      }

    case "VariableDeclarator":
      return printAssignment(n.id, concat$12([path.call(print, "id"), path.call(print, "typeParameters")]), " =", n.init, n.init && path.call(print, "init"), options);

    case "WithStatement":
      return group$10(concat$12(["with (", path.call(print, "object"), ")", adjustClause(n.body, path.call(print, "body"))]));

    case "IfStatement":
      {
        var con = adjustClause(n.consequent, path.call(print, "consequent"));
        var opening = group$10(concat$12(["if (", group$10(concat$12([indent$6(concat$12([softline$5, path.call(print, "test")])), softline$5])), ")", con]));
        parts.push(opening);

        if (n.alternate) {
          var commentOnOwnLine = hasTrailingComment(n.consequent) && n.consequent.comments.some(function (comment) {
            return comment.trailing && !comments$3.isBlockComment(comment);
          }) || needsHardlineAfterDanglingComment(n);
          var elseOnSameLine = n.consequent.type === "BlockStatement" && !commentOnOwnLine;
          parts.push(elseOnSameLine ? " " : hardline$8);

          if (hasDanglingComments(n)) {
            parts.push(comments.printDanglingComments(path, options, true), commentOnOwnLine ? hardline$8 : " ");
          }

          parts.push("else", group$10(adjustClause(n.alternate, path.call(print, "alternate"), n.alternate.type === "IfStatement")));
        }

        return concat$12(parts);
      }

    case "ForStatement":
      {
        var _body = adjustClause(n.body, path.call(print, "body")); // We want to keep dangling comments above the loop to stay consistent.
        // Any comment positioned between the for statement and the parentheses
        // is going to be printed before the statement.


        var _dangling = comments.printDanglingComments(path, options,
        /* sameLine */
        true);

        var printedComments = _dangling ? concat$12([_dangling, softline$5]) : "";

        if (!n.init && !n.test && !n.update) {
          return concat$12([printedComments, group$10(concat$12(["for (;;)", _body]))]);
        }

        return concat$12([printedComments, group$10(concat$12(["for (", group$10(concat$12([indent$6(concat$12([softline$5, path.call(print, "init"), ";", line$8, path.call(print, "test"), ";", line$8, path.call(print, "update")])), softline$5])), ")", _body]))]);
      }

    case "WhileStatement":
      return group$10(concat$12(["while (", group$10(concat$12([indent$6(concat$12([softline$5, path.call(print, "test")])), softline$5])), ")", adjustClause(n.body, path.call(print, "body"))]));

    case "ForInStatement":
      // Note: esprima can't actually parse "for each (".
      return group$10(concat$12([n.each ? "for each (" : "for (", path.call(print, "left"), " in ", path.call(print, "right"), ")", adjustClause(n.body, path.call(print, "body"))]));

    case "ForOfStatement":
    case "ForAwaitStatement":
      {
        // Babylon 7 removed ForAwaitStatement in favor of ForOfStatement
        // with `"await": true`:
        // https://github.com/estree/estree/pull/138
        var isAwait = n.type === "ForAwaitStatement" || n.await;
        return group$10(concat$12(["for", isAwait ? " await" : "", " (", path.call(print, "left"), " of ", path.call(print, "right"), ")", adjustClause(n.body, path.call(print, "body"))]));
      }

    case "DoWhileStatement":
      {
        var clause = adjustClause(n.body, path.call(print, "body"));
        var doBody = group$10(concat$12(["do", clause]));
        parts = [doBody];

        if (n.body.type === "BlockStatement") {
          parts.push(" ");
        } else {
          parts.push(hardline$8);
        }

        parts.push("while (");
        parts.push(group$10(concat$12([indent$6(concat$12([softline$5, path.call(print, "test")])), softline$5])), ")", semi);
        return concat$12(parts);
      }

    case "DoExpression":
      return concat$12(["do ", path.call(print, "body")]);

    case "BreakStatement":
      parts.push("break");

      if (n.label) {
        parts.push(" ", path.call(print, "label"));
      }

      parts.push(semi);
      return concat$12(parts);

    case "ContinueStatement":
      parts.push("continue");

      if (n.label) {
        parts.push(" ", path.call(print, "label"));
      }

      parts.push(semi);
      return concat$12(parts);

    case "LabeledStatement":
      if (n.body.type === "EmptyStatement") {
        return concat$12([path.call(print, "label"), ":;"]);
      }

      return concat$12([path.call(print, "label"), ": ", path.call(print, "body")]);

    case "TryStatement":
      return concat$12(["try ", path.call(print, "block"), n.handler ? concat$12([" ", path.call(print, "handler")]) : "", n.finalizer ? concat$12([" finally ", path.call(print, "finalizer")]) : ""]);

    case "CatchClause":
      if (n.param) {
        var hasComments = n.param.comments && n.param.comments.some(function (comment) {
          return !comments$3.isBlockComment(comment) || comment.leading && hasNewline$3(options.originalText, options.locEnd(comment)) || comment.trailing && hasNewline$3(options.originalText, options.locStart(comment), {
            backwards: true
          });
        });
        var param = path.call(print, "param");
        return concat$12(["catch ", hasComments ? concat$12(["(", indent$6(concat$12([softline$5, param])), softline$5, ") "]) : concat$12(["(", param, ") "]), path.call(print, "body")]);
      }

      return concat$12(["catch ", path.call(print, "body")]);

    case "ThrowStatement":
      return concat$12(["throw ", path.call(print, "argument"), semi]);
    // Note: ignoring n.lexical because it has no printing consequences.

    case "SwitchStatement":
      return concat$12([group$10(concat$12(["switch (", indent$6(concat$12([softline$5, path.call(print, "discriminant")])), softline$5, ")"])), " {", n.cases.length > 0 ? indent$6(concat$12([hardline$8, join$7(hardline$8, path.map(function (casePath) {
        var caseNode = casePath.getValue();
        return concat$12([casePath.call(print), n.cases.indexOf(caseNode) !== n.cases.length - 1 && isNextLineEmpty$4(options.originalText, caseNode, options) ? hardline$8 : ""]);
      }, "cases"))])) : "", hardline$8, "}"]);

    case "SwitchCase":
      {
        if (n.test) {
          parts.push("case ", path.call(print, "test"), ":");
        } else {
          parts.push("default:");
        }

        var consequent = n.consequent.filter(function (node) {
          return node.type !== "EmptyStatement";
        });

        if (consequent.length > 0) {
          var cons = path.call(function (consequentPath) {
            return printStatementSequence(consequentPath, options, print);
          }, "consequent");
          parts.push(consequent.length === 1 && consequent[0].type === "BlockStatement" ? concat$12([" ", cons]) : indent$6(concat$12([hardline$8, cons])));
        }

        return concat$12(parts);
      }
    // JSX extensions below.

    case "DebuggerStatement":
      return concat$12(["debugger", semi]);

    case "JSXAttribute":
      parts.push(path.call(print, "name"));

      if (n.value) {
        var res;

        if (isStringLiteral(n.value)) {
          var raw = rawText(n.value); // Unescape all quotes so we get an accurate preferred quote

          var final = raw.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
          var quote = getPreferredQuote$1(final, options.jsxSingleQuote ? "'" : '"');

          var _escape = quote === "'" ? "&apos;" : "&quot;";

          final = final.slice(1, -1).replace(new RegExp(quote, "g"), _escape);
          res = concat$12([quote, final, quote]);
        } else {
          res = path.call(print, "value");
        }

        parts.push("=", res);
      }

      return concat$12(parts);

    case "JSXIdentifier":
      return "" + n.name;

    case "JSXNamespacedName":
      return join$7(":", [path.call(print, "namespace"), path.call(print, "name")]);

    case "JSXMemberExpression":
      return join$7(".", [path.call(print, "object"), path.call(print, "property")]);

    case "TSQualifiedName":
      return join$7(".", [path.call(print, "left"), path.call(print, "right")]);

    case "JSXSpreadAttribute":
    case "JSXSpreadChild":
      {
        return concat$12(["{", path.call(function (p) {
          var printed = concat$12(["...", print(p)]);
          var n = p.getValue();

          if (!n.comments || !n.comments.length) {
            return printed;
          }

          return concat$12([indent$6(concat$12([softline$5, comments.printComments(p, function () {
            return printed;
          }, options)])), softline$5]);
        }, n.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"]);
      }

    case "JSXExpressionContainer":
      {
        var _parent5 = path.getParentNode(0);

        var preventInline = _parent5.type === "JSXAttribute" && n.expression.comments && n.expression.comments.length > 0;

        var _shouldInline = !preventInline && (n.expression.type === "ArrayExpression" || n.expression.type === "ObjectExpression" || n.expression.type === "ArrowFunctionExpression" || n.expression.type === "CallExpression" || n.expression.type === "OptionalCallExpression" || n.expression.type === "FunctionExpression" || n.expression.type === "JSXEmptyExpression" || n.expression.type === "TemplateLiteral" || n.expression.type === "TaggedTemplateExpression" || n.expression.type === "DoExpression" || isJSXNode(_parent5) && (n.expression.type === "ConditionalExpression" || isBinaryish(n.expression)));

        if (_shouldInline) {
          return group$10(concat$12(["{", path.call(print, "expression"), lineSuffixBoundary$1, "}"]));
        }

        return group$10(concat$12(["{", indent$6(concat$12([softline$5, path.call(print, "expression")])), softline$5, lineSuffixBoundary$1, "}"]));
      }

    case "JSXFragment":
    case "TSJsxFragment":
    case "JSXElement":
      {
        var elem = comments.printComments(path, function () {
          return printJSXElement(path, options, print);
        }, options);
        return maybeWrapJSXElementInParens(path, elem);
      }

    case "JSXOpeningElement":
      {
        var _n = path.getValue();

        var nameHasComments = _n.name && _n.name.comments && _n.name.comments.length > 0; // Don't break self-closing elements with no attributes and no comments

        if (_n.selfClosing && !_n.attributes.length && !nameHasComments) {
          return concat$12(["<", path.call(print, "name"), path.call(print, "typeParameters"), " />"]);
        } // don't break up opening elements with a single long text attribute


        if (_n.attributes && _n.attributes.length === 1 && _n.attributes[0].value && isStringLiteral(_n.attributes[0].value) && !_n.attributes[0].value.value.includes("\n") && // We should break for the following cases:
        // <div
        //   // comment
        //   attr="value"
        // >
        // <div
        //   attr="value"
        //   // comment
        // >
        !nameHasComments && (!_n.attributes[0].comments || !_n.attributes[0].comments.length)) {
          return group$10(concat$12(["<", path.call(print, "name"), path.call(print, "typeParameters"), " ", concat$12(path.map(print, "attributes")), _n.selfClosing ? " />" : ">"]));
        }

        var lastAttrHasTrailingComments = _n.attributes.length && hasTrailingComment(getLast$4(_n.attributes));
        var bracketSameLine = // Simple tags (no attributes and no comment in tag name) should be
        // kept unbroken regardless of `jsxBracketSameLine`
        !_n.attributes.length && !nameHasComments || options.jsxBracketSameLine && ( // We should print the bracket in a new line for the following cases:
        // <div
        //   // comment
        // >
        // <div
        //   attr // comment
        // >
        !nameHasComments || _n.attributes.length) && !lastAttrHasTrailingComments; // We should print the opening element expanded if any prop value is a
        // string literal with newlines

        var _shouldBreak = _n.attributes && _n.attributes.some(function (attr) {
          return attr.value && isStringLiteral(attr.value) && attr.value.value.includes("\n");
        });

        return group$10(concat$12(["<", path.call(print, "name"), path.call(print, "typeParameters"), concat$12([indent$6(concat$12(path.map(function (attr) {
          return concat$12([line$8, print(attr)]);
        }, "attributes"))), _n.selfClosing ? line$8 : bracketSameLine ? ">" : softline$5]), _n.selfClosing ? "/>" : bracketSameLine ? "" : ">"]), {
          shouldBreak: _shouldBreak
        });
      }

    case "JSXClosingElement":
      return concat$12(["</", path.call(print, "name"), ">"]);

    case "JSXOpeningFragment":
    case "JSXClosingFragment":
    case "TSJsxOpeningFragment":
    case "TSJsxClosingFragment":
      {
        var hasComment = n.comments && n.comments.length;
        var hasOwnLineComment = hasComment && !n.comments.every(comments$3.isBlockComment);
        var isOpeningFragment = n.type === "JSXOpeningFragment" || n.type === "TSJsxOpeningFragment";
        return concat$12([isOpeningFragment ? "<" : "</", indent$6(concat$12([hasOwnLineComment ? hardline$8 : hasComment && !isOpeningFragment ? " " : "", comments.printDanglingComments(path, options, true)])), hasOwnLineComment ? hardline$8 : "", ">"]);
      }

    case "JSXText":
      /* istanbul ignore next */
      throw new Error("JSXTest should be handled by JSXElement");

    case "JSXEmptyExpression":
      {
        var requiresHardline = n.comments && !n.comments.every(comments$3.isBlockComment);
        return concat$12([comments.printDanglingComments(path, options,
        /* sameIndent */
        !requiresHardline), requiresHardline ? hardline$8 : ""]);
      }

    case "ClassBody":
      if (!n.comments && n.body.length === 0) {
        return "{}";
      }

      return concat$12(["{", n.body.length > 0 ? indent$6(concat$12([hardline$8, path.call(function (bodyPath) {
        return printStatementSequence(bodyPath, options, print);
      }, "body")])) : comments.printDanglingComments(path, options), hardline$8, "}"]);

    case "ClassProperty":
    case "TSAbstractClassProperty":
    case "ClassPrivateProperty":
      {
        if (n.accessibility) {
          parts.push(n.accessibility + " ");
        }

        if (n.static) {
          parts.push("static ");
        }

        if (n.type === "TSAbstractClassProperty") {
          parts.push("abstract ");
        }

        if (n.readonly) {
          parts.push("readonly ");
        }

        var variance = getFlowVariance(n);

        if (variance) {
          parts.push(variance);
        }

        if (n.computed) {
          parts.push("[", path.call(print, "key"), "]");
        } else {
          parts.push(printPropertyKey(path, options, print));
        }

        parts.push(printOptionalToken(path));
        parts.push(printTypeAnnotation(path, options, print));

        if (n.value) {
          parts.push(" =", printAssignmentRight(n.key, n.value, path.call(print, "value"), options));
        }

        parts.push(semi);
        return group$10(concat$12(parts));
      }

    case "ClassDeclaration":
    case "ClassExpression":
    case "TSAbstractClassDeclaration":
      if (isNodeStartingWithDeclare(n, options)) {
        parts.push("declare ");
      }

      parts.push(concat$12(printClass(path, options, print)));
      return concat$12(parts);

    case "TSInterfaceHeritage":
      parts.push(path.call(print, "id"));

      if (n.typeParameters) {
        parts.push(path.call(print, "typeParameters"));
      }

      return concat$12(parts);

    case "TemplateElement":
      return join$7(literalline$3, n.value.raw.split(/\r?\n/g));

    case "TemplateLiteral":
      {
        var expressions = path.map(print, "expressions");

        var _parentNode = path.getParentNode();
        /**
         * describe.each`table`(name, fn)
         * describe.only.each`table`(name, fn)
         * describe.skip.each`table`(name, fn)
         * test.each`table`(name, fn)
         * test.only.each`table`(name, fn)
         * test.skip.each`table`(name, fn)
         *
         * Ref: https://github.com/facebook/jest/pull/6102
         */


        var jestEachTriggerRegex = /^[xf]?(describe|it|test)$/;

        if (_parentNode.type === "TaggedTemplateExpression" && _parentNode.quasi === n && _parentNode.tag.type === "MemberExpression" && _parentNode.tag.property.type === "Identifier" && _parentNode.tag.property.name === "each" && (_parentNode.tag.object.type === "Identifier" && jestEachTriggerRegex.test(_parentNode.tag.object.name) || _parentNode.tag.object.type === "MemberExpression" && _parentNode.tag.object.property.type === "Identifier" && (_parentNode.tag.object.property.name === "only" || _parentNode.tag.object.property.name === "skip") && _parentNode.tag.object.object.type === "Identifier" && jestEachTriggerRegex.test(_parentNode.tag.object.object.name))) {
          /**
           * a    | b    | expected
           * ${1} | ${1} | ${2}
           * ${1} | ${2} | ${3}
           * ${2} | ${1} | ${3}
           */
          var headerNames = n.quasis[0].value.raw.trim().split(/\s*\|\s*/);

          if (headerNames.length > 1 || headerNames.some(function (headerName) {
            return headerName.length !== 0;
          })) {
            var stringifiedExpressions = expressions.map(function (doc$$2) {
              return "${" + printDocToString$1(doc$$2, Object.assign({}, options, {
                printWidth: Infinity
              })).formatted + "}";
            });
            var tableBody = [{
              hasLineBreak: false,
              cells: []
            }];

            for (var _i = 1; _i < n.quasis.length; _i++) {
              var row = tableBody[tableBody.length - 1];
              var correspondingExpression = stringifiedExpressions[_i - 1];
              row.cells.push(correspondingExpression);

              if (correspondingExpression.indexOf("\n") !== -1) {
                row.hasLineBreak = true;
              }

              if (n.quasis[_i].value.raw.indexOf("\n") !== -1) {
                tableBody.push({
                  hasLineBreak: false,
                  cells: []
                });
              }
            }

            var maxColumnCount = tableBody.reduce(function (maxColumnCount, row) {
              return Math.max(maxColumnCount, row.cells.length);
            }, headerNames.length);
            var maxColumnWidths = Array.from(new Array(maxColumnCount), function () {
              return 0;
            });
            var table = [{
              cells: headerNames
            }].concat(tableBody.filter(function (row) {
              return row.cells.length !== 0;
            }));
            table.filter(function (row) {
              return !row.hasLineBreak;
            }).forEach(function (row) {
              row.cells.forEach(function (cell, index) {
                maxColumnWidths[index] = Math.max(maxColumnWidths[index], getStringWidth$2(cell));
              });
            });
            parts.push("`", indent$6(concat$12([hardline$8, join$7(hardline$8, table.map(function (row) {
              return join$7(" | ", row.cells.map(function (cell, index) {
                return row.hasLineBreak ? cell : cell + " ".repeat(maxColumnWidths[index] - getStringWidth$2(cell));
              }));
            }))])), hardline$8, "`");
            return concat$12(parts);
          }
        }

        parts.push("`");
        path.each(function (childPath) {
          var i = childPath.getName();
          parts.push(print(childPath));

          if (i < expressions.length) {
            // For a template literal of the following form:
            //   `someQuery {
            //     ${call({
            //       a,
            //       b,
            //     })}
            //   }`
            // the expression is on its own line (there is a \n in the previous
            // quasi literal), therefore we want to indent the JavaScript
            // expression inside at the beginning of ${ instead of the beginning
            // of the `.
            var tabWidth = options.tabWidth;
            var indentSize = getIndentSize$1(childPath.getValue().value.raw, tabWidth);
            var _printed = expressions[i];

            if (n.expressions[i].comments && n.expressions[i].comments.length || n.expressions[i].type === "MemberExpression" || n.expressions[i].type === "OptionalMemberExpression" || n.expressions[i].type === "ConditionalExpression") {
              _printed = concat$12([indent$6(concat$12([softline$5, _printed])), softline$5]);
            }

            var aligned = addAlignmentToDoc$2(_printed, indentSize, tabWidth);
            parts.push(group$10(concat$12(["${", aligned, lineSuffixBoundary$1, "}"])));
          }
        }, "quasis");
        parts.push("`");
        return concat$12(parts);
      }
    // These types are unprintable because they serve as abstract
    // supertypes for other (printable) types.

    case "TaggedTemplateExpression":
      return concat$12([path.call(print, "tag"), path.call(print, "typeParameters"), path.call(print, "quasi")]);

    case "Node":
    case "Printable":
    case "SourceLocation":
    case "Position":
    case "Statement":
    case "Function":
    case "Pattern":
    case "Expression":
    case "Declaration":
    case "Specifier":
    case "NamedSpecifier":
    case "Comment":
    case "MemberTypeAnnotation": // Flow

    case "Type":
      /* istanbul ignore next */
      throw new Error("unprintable type: " + JSON.stringify(n.type));
    // Type Annotations for Facebook Flow, typically stripped out or
    // transformed away before printing.

    case "TypeAnnotation":
    case "TSTypeAnnotation":
      if (n.typeAnnotation) {
        return path.call(print, "typeAnnotation");
      }
      /* istanbul ignore next */


      return "";

    case "TSTupleType":
    case "TupleTypeAnnotation":
      {
        var typesField = n.type === "TSTupleType" ? "elementTypes" : "types";
        return group$10(concat$12(["[", indent$6(concat$12([softline$5, printArrayItems(path, options, typesField, print)])), // TypeScript doesn't support trailing commas in tuple types
        n.type === "TSTupleType" ? "" : ifBreak$6(shouldPrintComma$1(options) ? "," : ""), comments.printDanglingComments(path, options,
        /* sameIndent */
        true), softline$5, "]"]));
      }

    case "ExistsTypeAnnotation":
      return "*";

    case "EmptyTypeAnnotation":
      return "empty";

    case "AnyTypeAnnotation":
      return "any";

    case "MixedTypeAnnotation":
      return "mixed";

    case "ArrayTypeAnnotation":
      return concat$12([path.call(print, "elementType"), "[]"]);

    case "BooleanTypeAnnotation":
      return "boolean";

    case "BooleanLiteralTypeAnnotation":
      return "" + n.value;

    case "DeclareClass":
      return printFlowDeclaration(path, printClass(path, options, print));

    case "DeclareFunction":
      // For TypeScript the DeclareFunction node shares the AST
      // structure with FunctionDeclaration
      if (n.params) {
        return concat$12(["declare ", printFunctionDeclaration(path, print, options), semi]);
      }

      return printFlowDeclaration(path, ["function ", path.call(print, "id"), n.predicate ? " " : "", path.call(print, "predicate"), semi]);

    case "DeclareModule":
      return printFlowDeclaration(path, ["module ", path.call(print, "id"), " ", path.call(print, "body")]);

    case "DeclareModuleExports":
      return printFlowDeclaration(path, ["module.exports", ": ", path.call(print, "typeAnnotation"), semi]);

    case "DeclareVariable":
      return printFlowDeclaration(path, ["var ", path.call(print, "id"), semi]);

    case "DeclareExportAllDeclaration":
      return concat$12(["declare export * from ", path.call(print, "source")]);

    case "DeclareExportDeclaration":
      return concat$12(["declare ", printExportDeclaration(path, options, print)]);

    case "DeclareOpaqueType":
    case "OpaqueType":
      {
        parts.push("opaque type ", path.call(print, "id"), path.call(print, "typeParameters"));

        if (n.supertype) {
          parts.push(": ", path.call(print, "supertype"));
        }

        if (n.impltype) {
          parts.push(" = ", path.call(print, "impltype"));
        }

        parts.push(semi);

        if (n.type === "DeclareOpaqueType") {
          return printFlowDeclaration(path, parts);
        }

        return concat$12(parts);
      }

    case "FunctionTypeAnnotation":
    case "TSFunctionType":
      {
        // FunctionTypeAnnotation is ambiguous:
        // declare function foo(a: B): void; OR
        // var A: (a: B) => void;
        var _parent6 = path.getParentNode(0);

        var _parentParent2 = path.getParentNode(1);

        var _parentParentParent = path.getParentNode(2);

        var isArrowFunctionTypeAnnotation = n.type === "TSFunctionType" || !((_parent6.type === "ObjectTypeProperty" || _parent6.type === "ObjectTypeInternalSlot") && !getFlowVariance(_parent6) && !_parent6.optional && options.locStart(_parent6) === options.locStart(n) || _parent6.type === "ObjectTypeCallProperty" || _parentParentParent && _parentParentParent.type === "DeclareFunction");
        var needsColon = isArrowFunctionTypeAnnotation && (_parent6.type === "TypeAnnotation" || _parent6.type === "TSTypeAnnotation"); // Sadly we can't put it inside of FastPath::needsColon because we are
        // printing ":" as part of the expression and it would put parenthesis
        // around :(

        var needsParens = needsColon && isArrowFunctionTypeAnnotation && (_parent6.type === "TypeAnnotation" || _parent6.type === "TSTypeAnnotation") && _parentParent2.type === "ArrowFunctionExpression";

        if (isObjectTypePropertyAFunction(_parent6, options)) {
          isArrowFunctionTypeAnnotation = true;
          needsColon = true;
        }

        if (needsParens) {
          parts.push("(");
        }

        parts.push(printFunctionParams(path, print, options,
        /* expandArg */
        false,
        /* printTypeParams */
        true)); // The returnType is not wrapped in a TypeAnnotation, so the colon
        // needs to be added separately.

        if (n.returnType || n.predicate || n.typeAnnotation) {
          parts.push(isArrowFunctionTypeAnnotation ? " => " : ": ", path.call(print, "returnType"), path.call(print, "predicate"), path.call(print, "typeAnnotation"));
        }

        if (needsParens) {
          parts.push(")");
        }

        return group$10(concat$12(parts));
      }

    case "TSRestType":
      return concat$12(["...", path.call(print, "typeAnnotation")]);

    case "TSOptionalType":
      return concat$12([path.call(print, "typeAnnotation"), "?"]);

    case "FunctionTypeParam":
      return concat$12([path.call(print, "name"), printOptionalToken(path), n.name ? ": " : "", path.call(print, "typeAnnotation")]);

    case "GenericTypeAnnotation":
      return concat$12([path.call(print, "id"), path.call(print, "typeParameters")]);

    case "DeclareInterface":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
      {
        if (n.type === "DeclareInterface" || isNodeStartingWithDeclare(n, options)) {
          parts.push("declare ");
        }

        parts.push("interface");

        if (n.type === "DeclareInterface" || n.type === "InterfaceDeclaration") {
          parts.push(" ", path.call(print, "id"), path.call(print, "typeParameters"));
        }

        if (n["extends"].length > 0) {
          parts.push(group$10(indent$6(concat$12([line$8, "extends ", indent$6(join$7(concat$12([",", line$8]), path.map(print, "extends")))]))));
        }

        parts.push(" ", path.call(print, "body"));
        return group$10(concat$12(parts));
      }

    case "ClassImplements":
    case "InterfaceExtends":
      return concat$12([path.call(print, "id"), path.call(print, "typeParameters")]);

    case "TSIntersectionType":
    case "IntersectionTypeAnnotation":
      {
        var types = path.map(print, "types");
        var result = [];
        var wasIndented = false;

        for (var _i2 = 0; _i2 < types.length; ++_i2) {
          if (_i2 === 0) {
            result.push(types[_i2]);
          } else if (isObjectType(n.types[_i2 - 1]) && isObjectType(n.types[_i2])) {
            // If both are objects, don't indent
            result.push(concat$12([" & ", wasIndented ? indent$6(types[_i2]) : types[_i2]]));
          } else if (!isObjectType(n.types[_i2 - 1]) && !isObjectType(n.types[_i2])) {
            // If no object is involved, go to the next line if it breaks
            result.push(indent$6(concat$12([" &", line$8, types[_i2]])));
          } else {
            // If you go from object to non-object or vis-versa, then inline it
            if (_i2 > 1) {
              wasIndented = true;
            }

            result.push(" & ", _i2 > 1 ? indent$6(types[_i2]) : types[_i2]);
          }
        }

        return group$10(concat$12(result));
      }

    case "TSUnionType":
    case "UnionTypeAnnotation":
      {
        // single-line variation
        // A | B | C
        // multi-line variation
        // | A
        // | B
        // | C
        var _parent7 = path.getParentNode();

        var _parentParent3 = path.getParentNode(1); // If there's a leading comment, the parent is doing the indentation


        var shouldIndent = _parent7.type !== "TypeParameterInstantiation" && _parent7.type !== "TSTypeParameterInstantiation" && _parent7.type !== "GenericTypeAnnotation" && _parent7.type !== "TSTypeReference" && !(_parent7.type === "FunctionTypeParam" && !_parent7.name) && _parentParent3.type !== "TSTypeAssertionExpression" && !((_parent7.type === "TypeAlias" || _parent7.type === "VariableDeclarator") && hasLeadingOwnLineComment(options.originalText, n, options)); // {
        //   a: string
        // } | null | void
        // should be inlined and not be printed in the multi-line variant

        var shouldHug = shouldHugType(n); // We want to align the children but without its comment, so it looks like
        // | child1
        // // comment
        // | child2

        var _printed2 = path.map(function (typePath) {
          var printedType = typePath.call(print);

          if (!shouldHug) {
            printedType = align$1(2, printedType);
          }

          return comments.printComments(typePath, function () {
            return printedType;
          }, options);
        }, "types");

        if (shouldHug) {
          return join$7(" | ", _printed2);
        }

        var code = concat$12([ifBreak$6(concat$12([shouldIndent ? line$8 : "", "| "])), join$7(concat$12([line$8, "| "]), _printed2)]);
        var hasParens;

        if (n.type === "TSUnionType") {
          var greatGrandParent = path.getParentNode(2);
          var greatGreatGrandParent = path.getParentNode(3);
          hasParens = greatGrandParent && greatGrandParent.type === "TSParenthesizedType" && greatGreatGrandParent && (greatGreatGrandParent.type === "TSUnionType" || greatGreatGrandParent.type === "TSIntersectionType");
        } else {
          hasParens = needsParens_1(path, options);
        }

        if (hasParens) {
          return group$10(concat$12([indent$6(code), softline$5]));
        }

        return group$10(shouldIndent ? indent$6(code) : code);
      }

    case "NullableTypeAnnotation":
      return concat$12(["?", path.call(print, "typeAnnotation")]);

    case "TSNullKeyword":
    case "NullLiteralTypeAnnotation":
      return "null";

    case "ThisTypeAnnotation":
      return "this";

    case "NumberTypeAnnotation":
      return "number";

    case "ObjectTypeCallProperty":
      if (n.static) {
        parts.push("static ");
      }

      parts.push(path.call(print, "value"));
      return concat$12(parts);

    case "ObjectTypeIndexer":
      {
        var _variance = getFlowVariance(n);

        return concat$12([_variance || "", "[", path.call(print, "id"), n.id ? ": " : "", path.call(print, "key"), "]: ", path.call(print, "value")]);
      }

    case "ObjectTypeProperty":
      {
        var _variance2 = getFlowVariance(n);

        var modifier = "";

        if (n.proto) {
          modifier = "proto ";
        } else if (n.static) {
          modifier = "static ";
        }

        return concat$12([modifier, isGetterOrSetter(n) ? n.kind + " " : "", _variance2 || "", printPropertyKey(path, options, print), printOptionalToken(path), isFunctionNotation(n, options) ? "" : ": ", path.call(print, "value")]);
      }

    case "QualifiedTypeIdentifier":
      return concat$12([path.call(print, "qualification"), ".", path.call(print, "id")]);

    case "StringLiteralTypeAnnotation":
      return nodeStr(n, options);

    case "NumberLiteralTypeAnnotation":
      assert$3.strictEqual(_typeof(n.value), "number");

      if (n.extra != null) {
        return printNumber$2(n.extra.raw);
      }

      return printNumber$2(n.raw);

    case "StringTypeAnnotation":
      return "string";

    case "DeclareTypeAlias":
    case "TypeAlias":
      {
        if (n.type === "DeclareTypeAlias" || isNodeStartingWithDeclare(n, options)) {
          parts.push("declare ");
        }

        var _printed3 = printAssignmentRight(n.id, n.right, path.call(print, "right"), options);

        parts.push("type ", path.call(print, "id"), path.call(print, "typeParameters"), " =", _printed3, semi);
        return group$10(concat$12(parts));
      }

    case "TypeCastExpression":
      {
        var value = path.getValue(); // Flow supports a comment syntax for specifying type annotations: https://flow.org/en/docs/types/comments/.
        // Unfortunately, its parser doesn't differentiate between comment annotations and regular
        // annotations when producing an AST. So to preserve parentheses around type casts that use
        // the comment syntax, we need to hackily read the source itself to see if the code contains
        // a type annotation comment.
        //
        // Note that we're able to use the normal whitespace regex here because the Flow parser has
        // already deemed this AST node to be a type cast. Only the Babylon parser needs the
        // non-line-break whitespace regex, which is why hasFlowShorthandAnnotationComment() is
        // implemented differently.

        var commentSyntax = value && value.typeAnnotation && value.typeAnnotation.range && options.originalText.substring(value.typeAnnotation.range[0]).match(/^\/\*\s*:/);
        return concat$12(["(", path.call(print, "expression"), commentSyntax ? " /*" : "", ": ", path.call(print, "typeAnnotation"), commentSyntax ? " */" : "", ")"]);
      }

    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
      {
        var _value = path.getValue();

        var commentStart = _value.range ? options.originalText.substring(0, _value.range[0]).lastIndexOf("/*") : -1; // As noted in the TypeCastExpression comments above, we're able to use a normal whitespace regex here
        // because we know for sure that this is a type definition.

        var _commentSyntax = commentStart >= 0 && options.originalText.substring(commentStart).match(/^\/\*\s*::/);

        if (_commentSyntax) {
          return concat$12(["/*:: ", printTypeParameters(path, options, print, "params"), " */"]);
        }

        return printTypeParameters(path, options, print, "params");
      }

    case "TSTypeParameterDeclaration":
    case "TSTypeParameterInstantiation":
      return printTypeParameters(path, options, print, "params");

    case "TSTypeParameter":
    case "TypeParameter":
      {
        var _parent8 = path.getParentNode();

        if (_parent8.type === "TSMappedType") {
          parts.push("[", path.call(print, "name"));

          if (n.constraint) {
            parts.push(" in ", path.call(print, "constraint"));
          }

          parts.push("]");
          return concat$12(parts);
        }

        var _variance3 = getFlowVariance(n);

        if (_variance3) {
          parts.push(_variance3);
        }

        parts.push(path.call(print, "name"));

        if (n.bound) {
          parts.push(": ");
          parts.push(path.call(print, "bound"));
        }

        if (n.constraint) {
          parts.push(" extends ", path.call(print, "constraint"));
        }

        if (n["default"]) {
          parts.push(" = ", path.call(print, "default"));
        }

        return concat$12(parts);
      }

    case "TypeofTypeAnnotation":
      return concat$12(["typeof ", path.call(print, "argument")]);

    case "VoidTypeAnnotation":
      return "void";

    case "InferredPredicate":
      return "%checks";
    // Unhandled types below. If encountered, nodes of these types should
    // be either left alone or desugared into AST types that are fully
    // supported by the pretty-printer.

    case "DeclaredPredicate":
      return concat$12(["%checks(", path.call(print, "value"), ")"]);

    case "TSAbstractKeyword":
      return "abstract";

    case "TSAnyKeyword":
      return "any";

    case "TSAsyncKeyword":
      return "async";

    case "TSBooleanKeyword":
      return "boolean";

    case "TSConstKeyword":
      return "const";

    case "TSDeclareKeyword":
      return "declare";

    case "TSExportKeyword":
      return "export";

    case "TSNeverKeyword":
      return "never";

    case "TSNumberKeyword":
      return "number";

    case "TSObjectKeyword":
      return "object";

    case "TSProtectedKeyword":
      return "protected";

    case "TSPrivateKeyword":
      return "private";

    case "TSPublicKeyword":
      return "public";

    case "TSReadonlyKeyword":
      return "readonly";

    case "TSSymbolKeyword":
      return "symbol";

    case "TSStaticKeyword":
      return "static";

    case "TSStringKeyword":
      return "string";

    case "TSUndefinedKeyword":
      return "undefined";

    case "TSUnknownKeyword":
      return "unknown";

    case "TSVoidKeyword":
      return "void";

    case "TSAsExpression":
      return concat$12([path.call(print, "expression"), " as ", path.call(print, "typeAnnotation")]);

    case "TSArrayType":
      return concat$12([path.call(print, "elementType"), "[]"]);

    case "TSPropertySignature":
      {
        if (n.export) {
          parts.push("export ");
        }

        if (n.accessibility) {
          parts.push(n.accessibility + " ");
        }

        if (n.static) {
          parts.push("static ");
        }

        if (n.readonly) {
          parts.push("readonly ");
        }

        if (n.computed) {
          parts.push("[");
        }

        parts.push(printPropertyKey(path, options, print));

        if (n.computed) {
          parts.push("]");
        }

        parts.push(printOptionalToken(path));

        if (n.typeAnnotation) {
          parts.push(": ");
          parts.push(path.call(print, "typeAnnotation"));
        } // This isn't valid semantically, but it's in the AST so we can print it.


        if (n.initializer) {
          parts.push(" = ", path.call(print, "initializer"));
        }

        return concat$12(parts);
      }

    case "TSParameterProperty":
      if (n.accessibility) {
        parts.push(n.accessibility + " ");
      }

      if (n.export) {
        parts.push("export ");
      }

      if (n.static) {
        parts.push("static ");
      }

      if (n.readonly) {
        parts.push("readonly ");
      }

      parts.push(path.call(print, "parameter"));
      return concat$12(parts);

    case "TSTypeReference":
      return concat$12([path.call(print, "typeName"), printTypeParameters(path, options, print, "typeParameters")]);

    case "TSTypeQuery":
      return concat$12(["typeof ", path.call(print, "exprName")]);

    case "TSParenthesizedType":
      {
        return path.call(print, "typeAnnotation");
      }

    case "TSIndexSignature":
      {
        var _parent9 = path.getParentNode();

        return concat$12([n.export ? "export " : "", n.accessibility ? concat$12([n.accessibility, " "]) : "", n.static ? "static " : "", n.readonly ? "readonly " : "", "[", path.call(print, "index"), "]: ", path.call(print, "typeAnnotation"), _parent9.type === "ClassBody" ? semi : ""]);
      }

    case "TSTypePredicate":
      return concat$12([path.call(print, "parameterName"), " is ", path.call(print, "typeAnnotation")]);

    case "TSNonNullExpression":
      return concat$12([path.call(print, "expression"), "!"]);

    case "TSThisType":
      return "this";

    case "TSImportType":
      return concat$12([!n.isTypeOf ? "" : "typeof ", "import(", path.call(print, "parameter"), ")", !n.qualifier ? "" : concat$12([".", path.call(print, "qualifier")]), printTypeParameters(path, options, print, "typeParameters")]);

    case "TSLiteralType":
      return path.call(print, "literal");

    case "TSIndexedAccessType":
      return concat$12([path.call(print, "objectType"), "[", path.call(print, "indexType"), "]"]);

    case "TSConstructSignature":
    case "TSConstructorType":
    case "TSCallSignature":
      {
        if (n.type !== "TSCallSignature") {
          parts.push("new ");
        }

        parts.push(group$10(printFunctionParams(path, print, options,
        /* expandArg */
        false,
        /* printTypeParams */
        true)));

        if (n.typeAnnotation) {
          var isType = n.type === "TSConstructorType";
          parts.push(isType ? " => " : ": ", path.call(print, "typeAnnotation"));
        }

        return concat$12(parts);
      }

    case "TSTypeOperator":
      return concat$12([n.operator, " ", path.call(print, "typeAnnotation")]);

    case "TSMappedType":
      return group$10(concat$12(["{", indent$6(concat$12([options.bracketSpacing ? line$8 : softline$5, n.readonlyToken ? concat$12([getTypeScriptMappedTypeModifier(n.readonlyToken, "readonly"), " "]) : "", printTypeScriptModifiers(path, options, print), path.call(print, "typeParameter"), n.questionToken ? getTypeScriptMappedTypeModifier(n.questionToken, "?") : "", ": ", path.call(print, "typeAnnotation")])), comments.printDanglingComments(path, options,
      /* sameIndent */
      true), options.bracketSpacing ? line$8 : softline$5, "}"]));

    case "TSMethodSignature":
      parts.push(n.accessibility ? concat$12([n.accessibility, " "]) : "", n.export ? "export " : "", n.static ? "static " : "", n.readonly ? "readonly " : "", n.computed ? "[" : "", path.call(print, "key"), n.computed ? "]" : "", printOptionalToken(path), printFunctionParams(path, print, options,
      /* expandArg */
      false,
      /* printTypeParams */
      true));

      if (n.typeAnnotation) {
        parts.push(": ", path.call(print, "typeAnnotation"));
      }

      return group$10(concat$12(parts));

    case "TSNamespaceExportDeclaration":
      parts.push("export as namespace ", path.call(print, "name"));

      if (options.semi) {
        parts.push(";");
      }

      return group$10(concat$12(parts));

    case "TSEnumDeclaration":
      if (isNodeStartingWithDeclare(n, options)) {
        parts.push("declare ");
      }

      if (n.modifiers) {
        parts.push(printTypeScriptModifiers(path, options, print));
      }

      if (n.const) {
        parts.push("const ");
      }

      parts.push("enum ", path.call(print, "id"), " ");

      if (n.members.length === 0) {
        parts.push(group$10(concat$12(["{", comments.printDanglingComments(path, options), softline$5, "}"])));
      } else {
        parts.push(group$10(concat$12(["{", indent$6(concat$12([hardline$8, printArrayItems(path, options, "members", print), shouldPrintComma$1(options, "es5") ? "," : ""])), comments.printDanglingComments(path, options,
        /* sameIndent */
        true), hardline$8, "}"])));
      }

      return concat$12(parts);

    case "TSEnumMember":
      parts.push(path.call(print, "id"));

      if (n.initializer) {
        parts.push(" = ", path.call(print, "initializer"));
      }

      return concat$12(parts);

    case "TSImportEqualsDeclaration":
      parts.push(printTypeScriptModifiers(path, options, print), "import ", path.call(print, "name"), " = ", path.call(print, "moduleReference"));

      if (options.semi) {
        parts.push(";");
      }

      return group$10(concat$12(parts));

    case "TSExternalModuleReference":
      return concat$12(["require(", path.call(print, "expression"), ")"]);

    case "TSModuleDeclaration":
      {
        var _parent10 = path.getParentNode();

        var isExternalModule = isLiteral(n.id);
        var parentIsDeclaration = _parent10.type === "TSModuleDeclaration";
        var bodyIsDeclaration = n.body && n.body.type === "TSModuleDeclaration";

        if (parentIsDeclaration) {
          parts.push(".");
        } else {
          if (n.declare === true) {
            parts.push("declare ");
          }

          parts.push(printTypeScriptModifiers(path, options, print)); // Global declaration looks like this:
          // (declare)? global { ... }

          var isGlobalDeclaration = n.id.type === "Identifier" && n.id.name === "global" && !/namespace|module/.test(options.originalText.slice(options.locStart(n), options.locStart(n.id)));

          if (!isGlobalDeclaration) {
            parts.push(isExternalModule ? "module " : "namespace ");
          }
        }

        parts.push(path.call(print, "id"));

        if (bodyIsDeclaration) {
          parts.push(path.call(print, "body"));
        } else if (n.body) {
          parts.push(" {", indent$6(concat$12([line$8, path.call(function (bodyPath) {
            return comments.printDanglingComments(bodyPath, options, true);
          }, "body"), group$10(path.call(print, "body"))])), line$8, "}");
        } else {
          parts.push(semi);
        }

        return concat$12(parts);
      }

    case "TSModuleBlock":
      return path.call(function (bodyPath) {
        return printStatementSequence(bodyPath, options, print);
      }, "body");

    case "PrivateName":
      return concat$12(["#", path.call(print, "id")]);

    case "TSConditionalType":
      return printTernaryOperator(path, options, print, {
        beforeParts: function beforeParts() {
          return [path.call(print, "checkType"), " ", "extends", " ", path.call(print, "extendsType")];
        },
        afterParts: function afterParts() {
          return [];
        },
        shouldCheckJsx: false,
        conditionalNodeType: "TSConditionalType",
        consequentNodePropertyName: "trueType",
        alternateNodePropertyName: "falseType",
        testNodePropertyName: "checkType",
        breakNested: true
      });

    case "TSInferType":
      return concat$12(["infer", " ", path.call(print, "typeParameter")]);

    case "InterpreterDirective":
      parts.push("#!", n.value, hardline$8);

      if (isNextLineEmpty$4(options.originalText, n, options)) {
        parts.push(hardline$8);
      }

      return concat$12(parts);

    case "NGRoot":
      return concat$12([].concat(path.call(print, "node"), !n.node.comments || n.node.comments.length === 0 ? [] : concat$12([" //", n.node.comments[0].value.trimRight()])));

    case "NGChainedExpression":
      return group$10(join$7(concat$12([";", line$8]), path.map(function (childPath) {
        return hasNgSideEffect(childPath) ? print(childPath) : concat$12(["(", print(childPath), ")"]);
      }, "expressions")));

    case "NGEmptyExpression":
      return "";

    case "NGQuotedExpression":
      return concat$12([n.prefix, ":", n.value]);

    case "NGMicrosyntax":
      return concat$12(path.map(function (childPath, index) {
        return concat$12([index === 0 ? "" : isNgForOf(childPath) ? " " : concat$12([";", line$8]), print(childPath)]);
      }, "body"));

    case "NGMicrosyntaxKey":
      return /^[a-z_$][a-z0-9_$]*(-[a-z_$][a-z0-9_$])*$/i.test(n.name) ? n.name : JSON.stringify(n.name);

    case "NGMicrosyntaxExpression":
      return concat$12([path.call(print, "expression"), n.alias === null ? "" : concat$12([" as ", path.call(print, "alias")])]);

    case "NGMicrosyntaxKeyedExpression":
      return concat$12([path.call(print, "key"), isNgForOf(path) ? " " : ": ", path.call(print, "expression")]);

    case "NGMicrosyntaxLet":
      return concat$12(["let ", path.call(print, "key"), n.value === null ? "" : concat$12([" = ", path.call(print, "value")])]);

    case "NGMicrosyntaxAs":
      return concat$12([path.call(print, "key"), " as ", path.call(print, "alias")]);

    default:
      /* istanbul ignore next */
      throw new Error("unknown type: " + JSON.stringify(n.type));
  }
}
/** prefer `let hero of heros` over `let hero; of: heros` */


function isNgForOf(path) {
  var node = path.getValue();
  var index = path.getName();
  var parentNode = path.getParentNode();
  return node.type === "NGMicrosyntaxKeyedExpression" && node.key.name === "of" && index === 1 && parentNode.body[0].type === "NGMicrosyntaxLet" && parentNode.body[0].value === null;
}
/** identify if an angular expression seems to have side effects */


function hasNgSideEffect(path) {
  return hasNode(path.getValue(), function (node) {
    switch (node.type) {
      case undefined:
        return false;

      case "CallExpression":
      case "OptionalCallExpression":
      case "AssignmentExpression":
        return true;
    }
  });
}

function printStatementSequence(path, options, print) {
  var printed = [];
  var bodyNode = path.getNode();
  var isClass = bodyNode.type === "ClassBody";
  path.map(function (stmtPath, i) {
    var stmt = stmtPath.getValue(); // Just in case the AST has been modified to contain falsy
    // "statements," it's safer simply to skip them.

    /* istanbul ignore if */

    if (!stmt) {
      return;
    } // Skip printing EmptyStatement nodes to avoid leaving stray
    // semicolons lying around.


    if (stmt.type === "EmptyStatement") {
      return;
    }

    var stmtPrinted = print(stmtPath);
    var text = options.originalText;
    var parts = []; // in no-semi mode, prepend statement with semicolon if it might break ASI
    // don't prepend the only JSX element in a program with semicolon

    if (!options.semi && !isClass && !isTheOnlyJSXElementInMarkdown(options, stmtPath) && stmtNeedsASIProtection(stmtPath, options)) {
      if (stmt.comments && stmt.comments.some(function (comment) {
        return comment.leading;
      })) {
        parts.push(print(stmtPath, {
          needsSemi: true
        }));
      } else {
        parts.push(";", stmtPrinted);
      }
    } else {
      parts.push(stmtPrinted);
    }

    if (!options.semi && isClass) {
      if (classPropMayCauseASIProblems(stmtPath)) {
        parts.push(";");
      } else if (stmt.type === "ClassProperty") {
        var nextChild = bodyNode.body[i + 1];

        if (classChildNeedsASIProtection(nextChild)) {
          parts.push(";");
        }
      }
    }

    if (isNextLineEmpty$4(text, stmt, options) && !isLastStatement(stmtPath)) {
      parts.push(hardline$8);
    }

    printed.push(concat$12(parts));
  });
  return join$7(hardline$8, printed);
}

function printPropertyKey(path, options, print) {
  var node = path.getNode();
  var key = node.key;

  if (key.type === "Identifier" && !node.computed && options.parser === "json") {
    // a -> "a"
    return path.call(function (keyPath) {
      return comments.printComments(keyPath, function () {
        return JSON.stringify(key.name);
      }, options);
    }, "key");
  }

  if (isStringLiteral(key) && isIdentifierName(key.value) && !node.computed && options.parser !== "json" && !(options.parser === "typescript" && node.type === "ClassProperty")) {
    // 'a' -> a
    return path.call(function (keyPath) {
      return comments.printComments(keyPath, function () {
        return key.value;
      }, options);
    }, "key");
  }

  return path.call(print, "key");
}

function printMethod(path, options, print) {
  var node = path.getNode();
  var semi = options.semi ? ";" : "";
  var kind = node.kind;
  var parts = [];

  if (node.type === "ObjectMethod" || node.type === "ClassMethod") {
    node.value = node;
  }

  if (node.value.async) {
    parts.push("async ");
  }

  if (!kind || kind === "init" || kind === "method" || kind === "constructor") {
    if (node.value.generator) {
      parts.push("*");
    }
  } else {
    assert$3.ok(kind === "get" || kind === "set");
    parts.push(kind, " ");
  }

  var key = printPropertyKey(path, options, print);

  if (node.computed) {
    key = concat$12(["[", key, "]"]);
  }

  parts.push(key, concat$12(path.call(function (valuePath) {
    return [printFunctionTypeParameters(valuePath, options, print), group$10(concat$12([printFunctionParams(valuePath, print, options), printReturnType(valuePath, print, options)]))];
  }, "value")));

  if (!node.value.body || node.value.body.length === 0) {
    parts.push(semi);
  } else {
    parts.push(" ", path.call(print, "value", "body"));
  }

  return concat$12(parts);
}

function couldGroupArg(arg) {
  return arg.type === "ObjectExpression" && (arg.properties.length > 0 || arg.comments) || arg.type === "ArrayExpression" && (arg.elements.length > 0 || arg.comments) || arg.type === "TSTypeAssertionExpression" || arg.type === "TSAsExpression" || arg.type === "FunctionExpression" || arg.type === "ArrowFunctionExpression" && !arg.returnType && (arg.body.type === "BlockStatement" || arg.body.type === "ArrowFunctionExpression" || arg.body.type === "ObjectExpression" || arg.body.type === "ArrayExpression" || arg.body.type === "CallExpression" || arg.body.type === "OptionalCallExpression" || arg.body.type === "ConditionalExpression" || isJSXNode(arg.body));
}

function shouldGroupLastArg(args) {
  var lastArg = getLast$4(args);
  var penultimateArg = getPenultimate$1(args);
  return !hasLeadingComment(lastArg) && !hasTrailingComment(lastArg) && couldGroupArg(lastArg) && ( // If the last two arguments are of the same type,
  // disable last element expansion.
  !penultimateArg || penultimateArg.type !== lastArg.type);
}

function shouldGroupFirstArg(args) {
  if (args.length !== 2) {
    return false;
  }

  var firstArg = args[0];
  var secondArg = args[1];
  return (!firstArg.comments || !firstArg.comments.length) && (firstArg.type === "FunctionExpression" || firstArg.type === "ArrowFunctionExpression" && firstArg.body.type === "BlockStatement") && secondArg.type !== "FunctionExpression" && secondArg.type !== "ArrowFunctionExpression" && secondArg.type !== "ConditionalExpression" && !couldGroupArg(secondArg);
}

function isSimpleFlowType(node) {
  var flowTypeAnnotations = ["AnyTypeAnnotation", "NullLiteralTypeAnnotation", "GenericTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation", "BooleanTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringTypeAnnotation"];
  return node && flowTypeAnnotations.indexOf(node.type) !== -1 && !(node.type === "GenericTypeAnnotation" && node.typeParameters);
}

var functionCompositionFunctionNames = new Set(["pipe", // RxJS, Ramda
"pipeP", // Ramda
"pipeK", // Ramda
"compose", // Ramda, Redux
"composeFlipped", // Not from any library, but common in Haskell, so supported
"composeP", // Ramda
"composeK", // Ramda
"flow", // Lodash
"flowRight", // Lodash
"connect" // Redux
]);

function isFunctionCompositionFunction(node) {
  switch (node.type) {
    case "OptionalMemberExpression":
    case "MemberExpression":
      {
        return isFunctionCompositionFunction(node.property);
      }

    case "Identifier":
      {
        return functionCompositionFunctionNames.has(node.name);
      }

    case "StringLiteral":
    case "Literal":
      {
        return functionCompositionFunctionNames.has(node.value);
      }
  }
}

function printArgumentsList(path, options, print) {
  var node = path.getValue();
  var args = node.arguments;

  if (args.length === 0) {
    return concat$12(["(", comments.printDanglingComments(path, options,
    /* sameIndent */
    true), ")"]);
  }

  var anyArgEmptyLine = false;
  var hasEmptyLineFollowingFirstArg = false;
  var lastArgIndex = args.length - 1;
  var printedArguments = path.map(function (argPath, index) {
    var arg = argPath.getNode();
    var parts = [print(argPath)];

    if (index === lastArgIndex) {// do nothing
    } else if (isNextLineEmpty$4(options.originalText, arg, options)) {
      if (index === 0) {
        hasEmptyLineFollowingFirstArg = true;
      }

      anyArgEmptyLine = true;
      parts.push(",", hardline$8, hardline$8);
    } else {
      parts.push(",", line$8);
    }

    return concat$12(parts);
  }, "arguments");
  var maybeTrailingComma = shouldPrintComma$1(options, "all") ? "," : "";

  function allArgsBrokenOut() {
    return group$10(concat$12(["(", indent$6(concat$12([line$8, concat$12(printedArguments)])), maybeTrailingComma, line$8, ")"]), {
      shouldBreak: true
    });
  } // We want to get
  //    pipe(
  //      x => x + 1,
  //      x => x - 1
  //    )
  // here, but not
  //    process.stdout.pipe(socket)


  if (isFunctionCompositionFunction(node.callee) && args.length > 1) {
    return allArgsBrokenOut();
  }

  var shouldGroupFirst = shouldGroupFirstArg(args);
  var shouldGroupLast = shouldGroupLastArg(args);

  if (shouldGroupFirst || shouldGroupLast) {
    var shouldBreak = (shouldGroupFirst ? printedArguments.slice(1).some(willBreak$1) : printedArguments.slice(0, -1).some(willBreak$1)) || anyArgEmptyLine; // We want to print the last argument with a special flag

    var printedExpanded;
    var i = 0;
    path.each(function (argPath) {
      if (shouldGroupFirst && i === 0) {
        printedExpanded = [concat$12([argPath.call(function (p) {
          return print(p, {
            expandFirstArg: true
          });
        }), printedArguments.length > 1 ? "," : "", hasEmptyLineFollowingFirstArg ? hardline$8 : line$8, hasEmptyLineFollowingFirstArg ? hardline$8 : ""])].concat(printedArguments.slice(1));
      }

      if (shouldGroupLast && i === args.length - 1) {
        printedExpanded = printedArguments.slice(0, -1).concat(argPath.call(function (p) {
          return print(p, {
            expandLastArg: true
          });
        }));
      }

      i++;
    }, "arguments");
    var somePrintedArgumentsWillBreak = printedArguments.some(willBreak$1);
    return concat$12([somePrintedArgumentsWillBreak ? breakParent$3 : "", conditionalGroup$1([concat$12([ifBreak$6(indent$6(concat$12(["(", softline$5, concat$12(printedExpanded)])), concat$12(["(", concat$12(printedExpanded)])), somePrintedArgumentsWillBreak ? concat$12([ifBreak$6(maybeTrailingComma), softline$5]) : "", ")"]), shouldGroupFirst ? concat$12(["(", group$10(printedExpanded[0], {
      shouldBreak: true
    }), concat$12(printedExpanded.slice(1)), ")"]) : concat$12(["(", concat$12(printedArguments.slice(0, -1)), group$10(getLast$4(printedExpanded), {
      shouldBreak: true
    }), ")"]), allArgsBrokenOut()], {
      shouldBreak: shouldBreak
    })]);
  }

  return group$10(concat$12(["(", indent$6(concat$12([softline$5, concat$12(printedArguments)])), ifBreak$6(shouldPrintComma$1(options, "all") ? "," : ""), softline$5, ")"]), {
    shouldBreak: printedArguments.some(willBreak$1) || anyArgEmptyLine
  });
}

function printTypeAnnotation(path, options, print) {
  var node = path.getValue();

  if (!node.typeAnnotation) {
    return "";
  }

  var parentNode = path.getParentNode();
  var isDefinite = node.definite || parentNode && parentNode.type === "VariableDeclarator" && parentNode.definite;
  var isFunctionDeclarationIdentifier = parentNode.type === "DeclareFunction" && parentNode.id === node;

  if (isFlowAnnotationComment(options.originalText, node.typeAnnotation, options)) {
    return concat$12([" /*: ", path.call(print, "typeAnnotation"), " */"]);
  }

  return concat$12([isFunctionDeclarationIdentifier ? "" : isDefinite ? "!: " : ": ", path.call(print, "typeAnnotation")]);
}

function printFunctionTypeParameters(path, options, print) {
  var fun = path.getValue();

  if (fun.typeArguments) {
    return path.call(print, "typeArguments");
  }

  if (fun.typeParameters) {
    return path.call(print, "typeParameters");
  }

  return "";
}

function printFunctionParams(path, print, options, expandArg, printTypeParams) {
  var fun = path.getValue();
  var paramsField = fun.parameters ? "parameters" : "params";
  var typeParams = printTypeParams ? printFunctionTypeParameters(path, options, print) : "";
  var printed = [];

  if (fun[paramsField]) {
    printed = path.map(print, paramsField);
  }

  if (fun.rest) {
    printed.push(concat$12(["...", path.call(print, "rest")]));
  }

  if (printed.length === 0) {
    return concat$12([typeParams, "(", comments.printDanglingComments(path, options,
    /* sameIndent */
    true, function (comment) {
      return getNextNonSpaceNonCommentCharacter$1(options.originalText, comment, options.locEnd) === ")";
    }), ")"]);
  }

  var lastParam = getLast$4(fun[paramsField]); // If the parent is a call with the first/last argument expansion and this is the
  // params of the first/last argument, we dont want the arguments to break and instead
  // want the whole expression to be on a new line.
  //
  // Good:                 Bad:
  //   verylongcall(         verylongcall((
  //     (a, b) => {           a,
  //     }                     b,
  //   })                    ) => {
  //                         })

  if (expandArg && !(fun[paramsField] && fun[paramsField].some(function (n) {
    return n.comments;
  }))) {
    return group$10(concat$12([removeLines$2(typeParams), "(", join$7(", ", printed.map(removeLines$2)), ")"]));
  } // Single object destructuring should hug
  //
  // function({
  //   a,
  //   b,
  //   c
  // }) {}


  if (shouldHugArguments(fun)) {
    return concat$12([typeParams, "(", join$7(", ", printed), ")"]);
  }

  var parent = path.getParentNode(); // don't break in specs, eg; `it("should maintain parens around done even when long", (done) => {})`

  if (isTestCall(parent)) {
    return concat$12([typeParams, "(", join$7(", ", printed), ")"]);
  }

  var isFlowShorthandWithOneArg = (isObjectTypePropertyAFunction(parent, options) || isTypeAnnotationAFunction(parent, options) || parent.type === "TypeAlias" || parent.type === "UnionTypeAnnotation" || parent.type === "TSUnionType" || parent.type === "IntersectionTypeAnnotation" || parent.type === "FunctionTypeAnnotation" && parent.returnType === fun) && fun[paramsField].length === 1 && fun[paramsField][0].name === null && fun[paramsField][0].typeAnnotation && fun.typeParameters === null && isSimpleFlowType(fun[paramsField][0].typeAnnotation) && !fun.rest;

  if (isFlowShorthandWithOneArg) {
    if (options.arrowParens === "always") {
      return concat$12(["(", concat$12(printed), ")"]);
    }

    return concat$12(printed);
  }

  var canHaveTrailingComma = !(lastParam && lastParam.type === "RestElement") && !fun.rest;
  return concat$12([typeParams, "(", indent$6(concat$12([softline$5, join$7(concat$12([",", line$8]), printed)])), ifBreak$6(canHaveTrailingComma && shouldPrintComma$1(options, "all") ? "," : ""), softline$5, ")"]);
}

function shouldPrintParamsWithoutParens(path, options) {
  if (options.arrowParens === "always") {
    return false;
  }

  if (options.arrowParens === "avoid") {
    var node = path.getValue();
    return canPrintParamsWithoutParens(node);
  } // Fallback default; should be unreachable


  return false;
}

function canPrintParamsWithoutParens(node) {
  return node.params.length === 1 && !node.rest && !node.typeParameters && !hasDanglingComments(node) && node.params[0].type === "Identifier" && !node.params[0].typeAnnotation && !node.params[0].comments && !node.params[0].optional && !node.predicate && !node.returnType;
}

function printFunctionDeclaration(path, print, options) {
  var n = path.getValue();
  var parts = [];

  if (n.async) {
    parts.push("async ");
  }

  parts.push("function");

  if (n.generator) {
    parts.push("*");
  }

  if (n.id) {
    parts.push(" ", path.call(print, "id"));
  }

  parts.push(printFunctionTypeParameters(path, options, print), group$10(concat$12([printFunctionParams(path, print, options), printReturnType(path, print, options)])), n.body ? " " : "", path.call(print, "body"));
  return concat$12(parts);
}

function printObjectMethod(path, options, print) {
  var objMethod = path.getValue();
  var parts = [];

  if (objMethod.async) {
    parts.push("async ");
  }

  if (objMethod.generator) {
    parts.push("*");
  }

  if (objMethod.method || objMethod.kind === "get" || objMethod.kind === "set") {
    return printMethod(path, options, print);
  }

  var key = printPropertyKey(path, options, print);

  if (objMethod.computed) {
    parts.push("[", key, "]");
  } else {
    parts.push(key);
  }

  parts.push(printFunctionTypeParameters(path, options, print), group$10(concat$12([printFunctionParams(path, print, options), printReturnType(path, print, options)])), " ", path.call(print, "body"));
  return concat$12(parts);
}

function printReturnType(path, print, options) {
  var n = path.getValue();
  var returnType = path.call(print, "returnType");

  if (n.returnType && isFlowAnnotationComment(options.originalText, n.returnType, options)) {
    return concat$12([" /*: ", returnType, " */"]);
  }

  var parts = [returnType]; // prepend colon to TypeScript type annotation

  if (n.returnType && n.returnType.typeAnnotation) {
    parts.unshift(": ");
  }

  if (n.predicate) {
    // The return type will already add the colon, but otherwise we
    // need to do it ourselves
    parts.push(n.returnType ? " " : ": ", path.call(print, "predicate"));
  }

  return concat$12(parts);
}

function printExportDeclaration(path, options, print) {
  var decl = path.getValue();
  var semi = options.semi ? ";" : "";
  var parts = ["export "];
  var isDefault = decl["default"] || decl.type === "ExportDefaultDeclaration";

  if (isDefault) {
    parts.push("default ");
  }

  parts.push(comments.printDanglingComments(path, options,
  /* sameIndent */
  true));

  if (needsHardlineAfterDanglingComment(decl)) {
    parts.push(hardline$8);
  }

  if (decl.declaration) {
    parts.push(path.call(print, "declaration"));

    if (isDefault && decl.declaration.type !== "ClassDeclaration" && decl.declaration.type !== "FunctionDeclaration" && decl.declaration.type !== "TSAbstractClassDeclaration" && decl.declaration.type !== "TSInterfaceDeclaration" && decl.declaration.type !== "DeclareClass" && decl.declaration.type !== "DeclareFunction") {
      parts.push(semi);
    }
  } else {
    if (decl.specifiers && decl.specifiers.length > 0) {
      var specifiers = [];
      var defaultSpecifiers = [];
      var namespaceSpecifiers = [];
      path.each(function (specifierPath) {
        var specifierType = path.getValue().type;

        if (specifierType === "ExportSpecifier") {
          specifiers.push(print(specifierPath));
        } else if (specifierType === "ExportDefaultSpecifier") {
          defaultSpecifiers.push(print(specifierPath));
        } else if (specifierType === "ExportNamespaceSpecifier") {
          namespaceSpecifiers.push(concat$12(["* as ", print(specifierPath)]));
        }
      }, "specifiers");
      var isNamespaceFollowed = namespaceSpecifiers.length !== 0 && specifiers.length !== 0;
      var isDefaultFollowed = defaultSpecifiers.length !== 0 && (namespaceSpecifiers.length !== 0 || specifiers.length !== 0);
      parts.push(decl.exportKind === "type" ? "type " : "", concat$12(defaultSpecifiers), concat$12([isDefaultFollowed ? ", " : ""]), concat$12(namespaceSpecifiers), concat$12([isNamespaceFollowed ? ", " : ""]), specifiers.length !== 0 ? group$10(concat$12(["{", indent$6(concat$12([options.bracketSpacing ? line$8 : softline$5, join$7(concat$12([",", line$8]), specifiers)])), ifBreak$6(shouldPrintComma$1(options) ? "," : ""), options.bracketSpacing ? line$8 : softline$5, "}"])) : "");
    } else {
      parts.push("{}");
    }

    if (decl.source) {
      parts.push(" from ", path.call(print, "source"));
    }

    parts.push(semi);
  }

  return concat$12(parts);
}

function printFlowDeclaration(path, parts) {
  var parentExportDecl = getParentExportDeclaration$1(path);

  if (parentExportDecl) {
    assert$3.strictEqual(parentExportDecl.type, "DeclareExportDeclaration");
  } else {
    // If the parent node has type DeclareExportDeclaration, then it
    // will be responsible for printing the "declare" token. Otherwise
    // it needs to be printed with this non-exported declaration node.
    parts.unshift("declare ");
  }

  return concat$12(parts);
}

function getFlowVariance(path) {
  if (!path.variance) {
    return null;
  } // Babylon 7.0 currently uses variance node type, and flow should
  // follow suit soon:
  // https://github.com/babel/babel/issues/4722


  var variance = path.variance.kind || path.variance;

  switch (variance) {
    case "plus":
      return "+";

    case "minus":
      return "-";

    default:
      /* istanbul ignore next */
      return variance;
  }
}

function printTypeScriptModifiers(path, options, print) {
  var n = path.getValue();

  if (!n.modifiers || !n.modifiers.length) {
    return "";
  }

  return concat$12([join$7(" ", path.map(print, "modifiers")), " "]);
}

function printTypeParameters(path, options, print, paramsKey) {
  var n = path.getValue();

  if (!n[paramsKey]) {
    return "";
  } // for TypeParameterDeclaration typeParameters is a single node


  if (!Array.isArray(n[paramsKey])) {
    return path.call(print, paramsKey);
  }

  var grandparent = path.getNode(2);
  var isParameterInTestCall = grandparent != null && isTestCall(grandparent);
  var shouldInline = isParameterInTestCall || n[paramsKey].length === 0 || n[paramsKey].length === 1 && (shouldHugType(n[paramsKey][0]) || n[paramsKey][0].type === "GenericTypeAnnotation" && shouldHugType(n[paramsKey][0].id) || n[paramsKey][0].type === "TSTypeReference" && shouldHugType(n[paramsKey][0].typeName) || n[paramsKey][0].type === "NullableTypeAnnotation");

  if (shouldInline) {
    return concat$12(["<", join$7(", ", path.map(print, paramsKey)), ">"]);
  }

  return group$10(concat$12(["<", indent$6(concat$12([softline$5, join$7(concat$12([",", line$8]), path.map(print, paramsKey))])), ifBreak$6(options.parser !== "typescript" && shouldPrintComma$1(options, "all") ? "," : ""), softline$5, ">"]));
}

function printClass(path, options, print) {
  var n = path.getValue();
  var parts = [];

  if (n.type === "TSAbstractClassDeclaration") {
    parts.push("abstract ");
  }

  parts.push("class");

  if (n.id) {
    parts.push(" ", path.call(print, "id"));
  }

  parts.push(path.call(print, "typeParameters"));
  var partsGroup = [];

  if (n.superClass) {
    var printed = concat$12(["extends ", path.call(print, "superClass"), path.call(print, "superTypeParameters")]); // Keep old behaviour of extends in same line
    // If there is only on extends and there are not comments

    if ((!n.implements || n.implements.length === 0) && (!n.superClass.comments || n.superClass.comments.length === 0)) {
      parts.push(concat$12([" ", path.call(function (superClass) {
        return comments.printComments(superClass, function () {
          return printed;
        }, options);
      }, "superClass")]));
    } else {
      partsGroup.push(group$10(concat$12([line$8, path.call(function (superClass) {
        return comments.printComments(superClass, function () {
          return printed;
        }, options);
      }, "superClass")])));
    }
  } else if (n.extends && n.extends.length > 0) {
    parts.push(" extends ", join$7(", ", path.map(print, "extends")));
  }

  if (n["mixins"] && n["mixins"].length > 0) {
    partsGroup.push(line$8, "mixins ", group$10(indent$6(join$7(concat$12([",", line$8]), path.map(print, "mixins")))));
  }

  if (n["implements"] && n["implements"].length > 0) {
    partsGroup.push(line$8, "implements", group$10(indent$6(concat$12([line$8, join$7(concat$12([",", line$8]), path.map(print, "implements"))]))));
  }

  if (partsGroup.length > 0) {
    parts.push(group$10(indent$6(concat$12(partsGroup))));
  }

  if (n.body && n.body.comments && hasLeadingOwnLineComment(options.originalText, n.body, options)) {
    parts.push(hardline$8);
  } else {
    parts.push(" ");
  }

  parts.push(path.call(print, "body"));
  return parts;
}

function printOptionalToken(path) {
  var node = path.getValue();

  if (!node.optional) {
    return "";
  }

  if (node.type === "OptionalCallExpression" || node.type === "OptionalMemberExpression" && node.computed) {
    return "?.";
  }

  return "?";
}

function printMemberLookup(path, options, print) {
  var property = path.call(print, "property");
  var n = path.getValue();
  var optional = printOptionalToken(path);

  if (!n.computed) {
    return concat$12([optional, ".", property]);
  }

  if (!n.property || isNumericLiteral(n.property)) {
    return concat$12([optional, "[", property, "]"]);
  }

  return group$10(concat$12([optional, "[", indent$6(concat$12([softline$5, property])), softline$5, "]"]));
}

function printBindExpressionCallee(path, options, print) {
  return concat$12(["::", path.call(print, "callee")]);
} // We detect calls on member expressions specially to format a
// common pattern better. The pattern we are looking for is this:
//
// arr
//   .map(x => x + 1)
//   .filter(x => x > 10)
//   .some(x => x % 2)
//
// The way it is structured in the AST is via a nested sequence of
// MemberExpression and CallExpression. We need to traverse the AST
// and make groups out of it to print it in the desired way.


function printMemberChain(path, options, print) {
  // The first phase is to linearize the AST by traversing it down.
  //
  //   a().b()
  // has the following AST structure:
  //   CallExpression(MemberExpression(CallExpression(Identifier)))
  // and we transform it into
  //   [Identifier, CallExpression, MemberExpression, CallExpression]
  var printedNodes = []; // Here we try to retain one typed empty line after each call expression or
  // the first group whether it is in parentheses or not

  function shouldInsertEmptyLineAfter(node) {
    var originalText = options.originalText;
    var nextCharIndex = getNextNonSpaceNonCommentCharacterIndex$2(originalText, node, options);
    var nextChar = originalText.charAt(nextCharIndex); // if it is cut off by a parenthesis, we only account for one typed empty
    // line after that parenthesis

    if (nextChar == ")") {
      return isNextLineEmptyAfterIndex$1(originalText, nextCharIndex + 1, options);
    }

    return isNextLineEmpty$4(originalText, node, options);
  }

  function rec(path) {
    var node = path.getValue();

    if ((node.type === "CallExpression" || node.type === "OptionalCallExpression") && (isMemberish(node.callee) || node.callee.type === "CallExpression" || node.callee.type === "OptionalCallExpression")) {
      printedNodes.unshift({
        node: node,
        printed: concat$12([comments.printComments(path, function () {
          return concat$12([printOptionalToken(path), printFunctionTypeParameters(path, options, print), printArgumentsList(path, options, print)]);
        }, options), shouldInsertEmptyLineAfter(node) ? hardline$8 : ""])
      });
      path.call(function (callee) {
        return rec(callee);
      }, "callee");
    } else if (isMemberish(node)) {
      printedNodes.unshift({
        node: node,
        needsParens: needsParens_1(path, options),
        printed: comments.printComments(path, function () {
          return node.type === "OptionalMemberExpression" || node.type === "MemberExpression" ? printMemberLookup(path, options, print) : printBindExpressionCallee(path, options, print);
        }, options)
      });
      path.call(function (object) {
        return rec(object);
      }, "object");
    } else if (node.type === "TSNonNullExpression") {
      printedNodes.unshift({
        node: node,
        printed: comments.printComments(path, function () {
          return "!";
        }, options)
      });
      path.call(function (expression) {
        return rec(expression);
      }, "expression");
    } else {
      printedNodes.unshift({
        node: node,
        printed: path.call(print)
      });
    }
  } // Note: the comments of the root node have already been printed, so we
  // need to extract this first call without printing them as they would
  // if handled inside of the recursive call.


  var node = path.getValue();
  printedNodes.unshift({
    node: node,
    printed: concat$12([printOptionalToken(path), printFunctionTypeParameters(path, options, print), printArgumentsList(path, options, print)])
  });
  path.call(function (callee) {
    return rec(callee);
  }, "callee"); // Once we have a linear list of printed nodes, we want to create groups out
  // of it.
  //
  //   a().b.c().d().e
  // will be grouped as
  //   [
  //     [Identifier, CallExpression],
  //     [MemberExpression, MemberExpression, CallExpression],
  //     [MemberExpression, CallExpression],
  //     [MemberExpression],
  //   ]
  // so that we can print it as
  //   a()
  //     .b.c()
  //     .d()
  //     .e
  // The first group is the first node followed by
  //   - as many CallExpression as possible
  //       < fn()()() >.something()
  //   - as many array acessors as possible
  //       < fn()[0][1][2] >.something()
  //   - then, as many MemberExpression as possible but the last one
  //       < this.items >.something()

  var groups = [];
  var currentGroup = [printedNodes[0]];
  var i = 1;

  for (; i < printedNodes.length; ++i) {
    if (printedNodes[i].node.type === "TSNonNullExpression" || printedNodes[i].node.type === "OptionalCallExpression" || printedNodes[i].node.type === "CallExpression" || (printedNodes[i].node.type === "MemberExpression" || printedNodes[i].node.type === "OptionalMemberExpression") && printedNodes[i].node.computed && isNumericLiteral(printedNodes[i].node.property)) {
      currentGroup.push(printedNodes[i]);
    } else {
      break;
    }
  }

  if (printedNodes[0].node.type !== "CallExpression" && printedNodes[0].node.type !== "OptionalCallExpression") {
    for (; i + 1 < printedNodes.length; ++i) {
      if (isMemberish(printedNodes[i].node) && isMemberish(printedNodes[i + 1].node)) {
        currentGroup.push(printedNodes[i]);
      } else {
        break;
      }
    }
  }

  groups.push(currentGroup);
  currentGroup = []; // Then, each following group is a sequence of MemberExpression followed by
  // a sequence of CallExpression. To compute it, we keep adding things to the
  // group until we has seen a CallExpression in the past and reach a
  // MemberExpression

  var hasSeenCallExpression = false;

  for (; i < printedNodes.length; ++i) {
    if (hasSeenCallExpression && isMemberish(printedNodes[i].node)) {
      // [0] should be appended at the end of the group instead of the
      // beginning of the next one
      if (printedNodes[i].node.computed && isNumericLiteral(printedNodes[i].node.property)) {
        currentGroup.push(printedNodes[i]);
        continue;
      }

      groups.push(currentGroup);
      currentGroup = [];
      hasSeenCallExpression = false;
    }

    if (printedNodes[i].node.type === "CallExpression" || printedNodes[i].node.type === "OptionalCallExpression") {
      hasSeenCallExpression = true;
    }

    currentGroup.push(printedNodes[i]);

    if (printedNodes[i].node.comments && printedNodes[i].node.comments.some(function (comment) {
      return comment.trailing;
    })) {
      groups.push(currentGroup);
      currentGroup = [];
      hasSeenCallExpression = false;
    }
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  } // There are cases like Object.keys(), Observable.of(), _.values() where
  // they are the subject of all the chained calls and therefore should
  // be kept on the same line:
  //
  //   Object.keys(items)
  //     .filter(x => x)
  //     .map(x => x)
  //
  // In order to detect those cases, we use an heuristic: if the first
  // node is an identifier with the name starting with a capital
  // letter or just a sequence of _$. The rationale is that they are
  // likely to be factories.


  function isFactory(name) {
    return /^[A-Z]|^[_$]+$/.test(name);
  } // In case the Identifier is shorter than tab width, we can keep the
  // first call in a single line, if it's an ExpressionStatement.
  //
  //   d3.scaleLinear()
  //     .domain([0, 100])
  //     .range([0, width]);
  //


  function isShort(name) {
    return name.length <= options.tabWidth;
  }

  function shouldNotWrap(groups) {
    var parent = path.getParentNode();
    var isExpression = parent && parent.type === "ExpressionStatement";
    var hasComputed = groups[1].length && groups[1][0].node.computed;

    if (groups[0].length === 1) {
      var firstNode = groups[0][0].node;
      return firstNode.type === "ThisExpression" || firstNode.type === "Identifier" && (isFactory(firstNode.name) || isExpression && isShort(firstNode.name) || hasComputed);
    }

    var lastNode = getLast$4(groups[0]).node;
    return (lastNode.type === "MemberExpression" || lastNode.type === "OptionalMemberExpression") && lastNode.property.type === "Identifier" && (isFactory(lastNode.property.name) || hasComputed);
  }

  var shouldMerge = groups.length >= 2 && !groups[1][0].node.comments && shouldNotWrap(groups);

  function printGroup(printedGroup) {
    var result = [];

    for (var _i3 = 0; _i3 < printedGroup.length; _i3++) {
      // Checks if the next node (i.e. the parent node) needs parens
      // and print accordingly
      if (printedGroup[_i3 + 1] && printedGroup[_i3 + 1].needsParens) {
        result.push("(", printedGroup[_i3].printed, printedGroup[_i3 + 1].printed, ")");
        _i3++;
      } else {
        result.push(printedGroup[_i3].printed);
      }
    }

    return concat$12(result);
  }

  function printIndentedGroup(groups) {
    if (groups.length === 0) {
      return "";
    }

    return indent$6(group$10(concat$12([hardline$8, join$7(hardline$8, groups.map(printGroup))])));
  }

  var printedGroups = groups.map(printGroup);
  var oneLine = concat$12(printedGroups);
  var cutoff = shouldMerge ? 3 : 2;
  var flatGroups = groups.slice(0, cutoff).reduce(function (res, group) {
    return res.concat(group);
  }, []);
  var hasComment = flatGroups.slice(1, -1).some(function (node) {
    return hasLeadingComment(node.node);
  }) || flatGroups.slice(0, -1).some(function (node) {
    return hasTrailingComment(node.node);
  }) || groups[cutoff] && hasLeadingComment(groups[cutoff][0].node); // If we only have a single `.`, we shouldn't do anything fancy and just
  // render everything concatenated together.

  if (groups.length <= cutoff && !hasComment) {
    return group$10(oneLine);
  } // Find out the last node in the first group and check if it has an
  // empty line after


  var lastNodeBeforeIndent = getLast$4(shouldMerge ? groups.slice(1, 2)[0] : groups[0]).node;
  var shouldHaveEmptyLineBeforeIndent = lastNodeBeforeIndent.type !== "CallExpression" && lastNodeBeforeIndent.type !== "OptionalCallExpression" && shouldInsertEmptyLineAfter(lastNodeBeforeIndent);
  var expanded = concat$12([printGroup(groups[0]), shouldMerge ? concat$12(groups.slice(1, 2).map(printGroup)) : "", shouldHaveEmptyLineBeforeIndent ? hardline$8 : "", printIndentedGroup(groups.slice(shouldMerge ? 2 : 1))]);
  var callExpressions = printedNodes.map(function (_ref) {
    var node = _ref.node;
    return node;
  }).filter(isCallOrOptionalCallExpression); // We don't want to print in one line if there's:
  //  * A comment.
  //  * 3 or more chained calls.
  //  * Any group but the last one has a hard line.
  // If the last group is a function it's okay to inline if it fits.

  if (hasComment || callExpressions.length >= 3 || printedGroups.slice(0, -1).some(willBreak$1) ||
  /**
   *     scopes.filter(scope => scope.value !== '').map((scope, i) => {
   *       // multi line content
   *     })
   */
  function (lastGroupDoc, lastGroupNode) {
    return isCallOrOptionalCallExpression(lastGroupNode) && willBreak$1(lastGroupDoc);
  }(getLast$4(printedGroups), getLast$4(getLast$4(groups)).node) && callExpressions.slice(0, -1).some(function (n) {
    return n.arguments.some(isFunctionOrArrowExpression);
  })) {
    return group$10(expanded);
  }

  return concat$12([// We only need to check `oneLine` because if `expanded` is chosen
  // that means that the parent group has already been broken
  // naturally
  willBreak$1(oneLine) || shouldHaveEmptyLineBeforeIndent ? breakParent$3 : "", conditionalGroup$1([oneLine, expanded])]);
}

function isCallOrOptionalCallExpression(node) {
  return node.type === "CallExpression" || node.type === "OptionalCallExpression";
}

function isJSXNode(node) {
  return node.type === "JSXElement" || node.type === "JSXFragment" || node.type === "TSJsxFragment";
}

function isEmptyJSXElement(node) {
  if (node.children.length === 0) {
    return true;
  }

  if (node.children.length > 1) {
    return false;
  } // if there is one text child and does not contain any meaningful text
  // we can treat the element as empty.


  var child = node.children[0];
  return isLiteral(child) && !isMeaningfulJSXText(child);
} // Only space, newline, carriage return, and tab are treated as whitespace
// inside JSX.


var jsxWhitespaceChars = " \n\r\t";
var containsNonJsxWhitespaceRegex = new RegExp("[^" + jsxWhitespaceChars + "]");
var matchJsxWhitespaceRegex = new RegExp("([" + jsxWhitespaceChars + "]+)"); // Meaningful if it contains non-whitespace characters,
// or it contains whitespace without a new line.

function isMeaningfulJSXText(node) {
  return isLiteral(node) && (containsNonJsxWhitespaceRegex.test(rawText(node)) || !/\n/.test(rawText(node)));
}

function conditionalExpressionChainContainsJSX(node) {
  return Boolean(getConditionalChainContents(node).find(isJSXNode));
} // If we have nested conditional expressions, we want to print them in JSX mode
// if there's at least one JSXElement somewhere in the tree.
//
// A conditional expression chain like this should be printed in normal mode,
// because there aren't JSXElements anywhere in it:
//
// isA ? "A" : isB ? "B" : isC ? "C" : "Unknown";
//
// But a conditional expression chain like this should be printed in JSX mode,
// because there is a JSXElement in the last ConditionalExpression:
//
// isA ? "A" : isB ? "B" : isC ? "C" : <span className="warning">Unknown</span>;
//
// This type of ConditionalExpression chain is structured like this in the AST:
//
// ConditionalExpression {
//   test: ...,
//   consequent: ...,
//   alternate: ConditionalExpression {
//     test: ...,
//     consequent: ...,
//     alternate: ConditionalExpression {
//       test: ...,
//       consequent: ...,
//       alternate: ...,
//     }
//   }
// }
//
// We want to traverse over that shape and convert it into a flat structure so
// that we can find if there's a JSXElement somewhere inside.


function getConditionalChainContents(node) {
  // Given this code:
  //
  // // Using a ConditionalExpression as the consequent is uncommon, but should
  // // be handled.
  // A ? B : C ? D : E ? F ? G : H : I
  //
  // which has this AST:
  //
  // ConditionalExpression {
  //   test: Identifier(A),
  //   consequent: Identifier(B),
  //   alternate: ConditionalExpression {
  //     test: Identifier(C),
  //     consequent: Identifier(D),
  //     alternate: ConditionalExpression {
  //       test: Identifier(E),
  //       consequent: ConditionalExpression {
  //         test: Identifier(F),
  //         consequent: Identifier(G),
  //         alternate: Identifier(H),
  //       },
  //       alternate: Identifier(I),
  //     }
  //   }
  // }
  //
  // we should return this Array:
  //
  // [
  //   Identifier(A),
  //   Identifier(B),
  //   Identifier(C),
  //   Identifier(D),
  //   Identifier(E),
  //   Identifier(F),
  //   Identifier(G),
  //   Identifier(H),
  //   Identifier(I)
  // ];
  //
  // This loses the information about whether each node was the test,
  // consequent, or alternate, but we don't care about that here- we are only
  // flattening this structure to find if there's any JSXElements inside.
  var nonConditionalExpressions = [];

  function recurse(node) {
    if (node.type === "ConditionalExpression") {
      recurse(node.test);
      recurse(node.consequent);
      recurse(node.alternate);
    } else {
      nonConditionalExpressions.push(node);
    }
  }

  recurse(node);
  return nonConditionalExpressions;
} // Detect an expression node representing `{" "}`


function isJSXWhitespaceExpression(node) {
  return node.type === "JSXExpressionContainer" && isLiteral(node.expression) && node.expression.value === " " && !node.expression.comments;
}

function separatorNoWhitespace(isFacebookTranslationTag, child, childNode, nextNode) {
  if (isFacebookTranslationTag) {
    return "";
  }

  if (childNode.type === "JSXElement" && !childNode.closingElement || nextNode && nextNode.type === "JSXElement" && !nextNode.closingElement) {
    return child.length === 1 ? softline$5 : hardline$8;
  }

  return softline$5;
}

function separatorWithWhitespace(isFacebookTranslationTag, child, childNode, nextNode) {
  if (isFacebookTranslationTag) {
    return hardline$8;
  }

  if (child.length === 1) {
    return childNode.type === "JSXElement" && !childNode.closingElement || nextNode && nextNode.type === "JSXElement" && !nextNode.closingElement ? hardline$8 : softline$5;
  }

  return hardline$8;
} // JSX Children are strange, mostly for two reasons:
// 1. JSX reads newlines into string values, instead of skipping them like JS
// 2. up to one whitespace between elements within a line is significant,
//    but not between lines.
//
// Leading, trailing, and lone whitespace all need to
// turn themselves into the rather ugly `{' '}` when breaking.
//
// We print JSX using the `fill` doc primitive.
// This requires that we give it an array of alternating
// content and whitespace elements.
// To ensure this we add dummy `""` content elements as needed.


function printJSXChildren(path, options, print, jsxWhitespace, isFacebookTranslationTag) {
  var n = path.getValue();
  var children = []; // using `map` instead of `each` because it provides `i`

  path.map(function (childPath, i) {
    var child = childPath.getValue();

    if (isLiteral(child)) {
      var text = rawText(child); // Contains a non-whitespace character

      if (isMeaningfulJSXText(child)) {
        var words = text.split(matchJsxWhitespaceRegex); // Starts with whitespace

        if (words[0] === "") {
          children.push("");
          words.shift();

          if (/\n/.test(words[0])) {
            var next = n.children[i + 1];
            children.push(separatorWithWhitespace(isFacebookTranslationTag, words[1], child, next));
          } else {
            children.push(jsxWhitespace);
          }

          words.shift();
        }

        var endWhitespace; // Ends with whitespace

        if (getLast$4(words) === "") {
          words.pop();
          endWhitespace = words.pop();
        } // This was whitespace only without a new line.


        if (words.length === 0) {
          return;
        }

        words.forEach(function (word, i) {
          if (i % 2 === 1) {
            children.push(line$8);
          } else {
            children.push(word);
          }
        });

        if (endWhitespace !== undefined) {
          if (/\n/.test(endWhitespace)) {
            var _next = n.children[i + 1];
            children.push(separatorWithWhitespace(isFacebookTranslationTag, getLast$4(children), child, _next));
          } else {
            children.push(jsxWhitespace);
          }
        } else {
          var _next2 = n.children[i + 1];
          children.push(separatorNoWhitespace(isFacebookTranslationTag, getLast$4(children), child, _next2));
        }
      } else if (/\n/.test(text)) {
        // Keep (up to one) blank line between tags/expressions/text.
        // Note: We don't keep blank lines between text elements.
        if (text.match(/\n/g).length > 1) {
          children.push("");
          children.push(hardline$8);
        }
      } else {
        children.push("");
        children.push(jsxWhitespace);
      }
    } else {
      var printedChild = print(childPath);
      children.push(printedChild);
      var _next3 = n.children[i + 1];

      var directlyFollowedByMeaningfulText = _next3 && isMeaningfulJSXText(_next3);

      if (directlyFollowedByMeaningfulText) {
        var firstWord = rawText(_next3).trim().split(matchJsxWhitespaceRegex)[0];
        children.push(separatorNoWhitespace(isFacebookTranslationTag, firstWord, child, _next3));
      } else {
        children.push(hardline$8);
      }
    }
  }, "children");
  return children;
} // JSX expands children from the inside-out, instead of the outside-in.
// This is both to break children before attributes,
// and to ensure that when children break, their parents do as well.
//
// Any element that is written without any newlines and fits on a single line
// is left that way.
// Not only that, any user-written-line containing multiple JSX siblings
// should also be kept on one line if possible,
// so each user-written-line is wrapped in its own group.
//
// Elements that contain newlines or don't fit on a single line (recursively)
// are fully-split, using hardline and shouldBreak: true.
//
// To support that case properly, all leading and trailing spaces
// are stripped from the list of children, and replaced with a single hardline.


function printJSXElement(path, options, print) {
  var n = path.getValue(); // Turn <div></div> into <div />

  if (n.type === "JSXElement" && isEmptyJSXElement(n)) {
    n.openingElement.selfClosing = true;
    return path.call(print, "openingElement");
  }

  var openingLines = n.type === "JSXElement" ? path.call(print, "openingElement") : path.call(print, "openingFragment");
  var closingLines = n.type === "JSXElement" ? path.call(print, "closingElement") : path.call(print, "closingFragment");

  if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression")) {
    return concat$12([openingLines, concat$12(path.map(print, "children")), closingLines]);
  } // Convert `{" "}` to text nodes containing a space.
  // This makes it easy to turn them into `jsxWhitespace` which
  // can then print as either a space or `{" "}` when breaking.


  n.children = n.children.map(function (child) {
    if (isJSXWhitespaceExpression(child)) {
      return {
        type: "JSXText",
        value: " ",
        raw: " "
      };
    }

    return child;
  });
  var containsTag = n.children.filter(isJSXNode).length > 0;
  var containsMultipleExpressions = n.children.filter(function (child) {
    return child.type === "JSXExpressionContainer";
  }).length > 1;
  var containsMultipleAttributes = n.type === "JSXElement" && n.openingElement.attributes.length > 1; // Record any breaks. Should never go from true to false, only false to true.

  var forcedBreak = willBreak$1(openingLines) || containsTag || containsMultipleAttributes || containsMultipleExpressions;
  var rawJsxWhitespace = options.singleQuote ? "{' '}" : '{" "}';
  var jsxWhitespace = ifBreak$6(concat$12([rawJsxWhitespace, softline$5]), " ");
  var isFacebookTranslationTag = n.openingElement && n.openingElement.name && n.openingElement.name.name === "fbt";
  var children = printJSXChildren(path, options, print, jsxWhitespace, isFacebookTranslationTag);
  var containsText = n.children.filter(function (child) {
    return isMeaningfulJSXText(child);
  }).length > 0; // We can end up we multiple whitespace elements with empty string
  // content between them.
  // We need to remove empty whitespace and softlines before JSX whitespace
  // to get the correct output.

  for (var i = children.length - 2; i >= 0; i--) {
    var isPairOfEmptyStrings = children[i] === "" && children[i + 1] === "";
    var isPairOfHardlines = children[i] === hardline$8 && children[i + 1] === "" && children[i + 2] === hardline$8;
    var isLineFollowedByJSXWhitespace = (children[i] === softline$5 || children[i] === hardline$8) && children[i + 1] === "" && children[i + 2] === jsxWhitespace;
    var isJSXWhitespaceFollowedByLine = children[i] === jsxWhitespace && children[i + 1] === "" && (children[i + 2] === softline$5 || children[i + 2] === hardline$8);
    var isDoubleJSXWhitespace = children[i] === jsxWhitespace && children[i + 1] === "" && children[i + 2] === jsxWhitespace;
    var isPairOfHardOrSoftLines = children[i] === softline$5 && children[i + 1] === "" && children[i + 2] === hardline$8 || children[i] === hardline$8 && children[i + 1] === "" && children[i + 2] === softline$5;

    if (isPairOfHardlines && containsText || isPairOfEmptyStrings || isLineFollowedByJSXWhitespace || isDoubleJSXWhitespace || isPairOfHardOrSoftLines) {
      children.splice(i, 2);
    } else if (isJSXWhitespaceFollowedByLine) {
      children.splice(i + 1, 2);
    }
  } // Trim trailing lines (or empty strings)


  while (children.length && (isLineNext$1(getLast$4(children)) || isEmpty$1(getLast$4(children)))) {
    children.pop();
  } // Trim leading lines (or empty strings)


  while (children.length && (isLineNext$1(children[0]) || isEmpty$1(children[0])) && (isLineNext$1(children[1]) || isEmpty$1(children[1]))) {
    children.shift();
    children.shift();
  } // Tweak how we format children if outputting this element over multiple lines.
  // Also detect whether we will force this element to output over multiple lines.


  var multilineChildren = [];
  children.forEach(function (child, i) {
    // There are a number of situations where we need to ensure we display
    // whitespace as `{" "}` when outputting this element over multiple lines.
    if (child === jsxWhitespace) {
      if (i === 1 && children[i - 1] === "") {
        if (children.length === 2) {
          // Solitary whitespace
          multilineChildren.push(rawJsxWhitespace);
          return;
        } // Leading whitespace


        multilineChildren.push(concat$12([rawJsxWhitespace, hardline$8]));
        return;
      } else if (i === children.length - 1) {
        // Trailing whitespace
        multilineChildren.push(rawJsxWhitespace);
        return;
      } else if (children[i - 1] === "" && children[i - 2] === hardline$8) {
        // Whitespace after line break
        multilineChildren.push(rawJsxWhitespace);
        return;
      }
    }

    multilineChildren.push(child);

    if (willBreak$1(child)) {
      forcedBreak = true;
    }
  }); // If there is text we use `fill` to fit as much onto each line as possible.
  // When there is no text (just tags and expressions) we use `group`
  // to output each on a separate line.

  var content = containsText ? fill$4(multilineChildren) : group$10(concat$12(multilineChildren), {
    shouldBreak: true
  });
  var multiLineElem = group$10(concat$12([openingLines, indent$6(concat$12([hardline$8, content])), hardline$8, closingLines]));

  if (forcedBreak) {
    return multiLineElem;
  }

  return conditionalGroup$1([group$10(concat$12([openingLines, concat$12(children), closingLines])), multiLineElem]);
}

function maybeWrapJSXElementInParens(path, elem) {
  var parent = path.getParentNode();

  if (!parent) {
    return elem;
  }

  var NO_WRAP_PARENTS = {
    ArrayExpression: true,
    JSXAttribute: true,
    JSXElement: true,
    JSXExpressionContainer: true,
    JSXFragment: true,
    TSJsxFragment: true,
    ExpressionStatement: true,
    CallExpression: true,
    OptionalCallExpression: true,
    ConditionalExpression: true,
    JsExpressionRoot: true
  };

  if (NO_WRAP_PARENTS[parent.type]) {
    return elem;
  }

  var shouldBreak = matchAncestorTypes$1(path, ["ArrowFunctionExpression", "CallExpression", "JSXExpressionContainer"]);
  return group$10(concat$12([ifBreak$6("("), indent$6(concat$12([softline$5, elem])), softline$5, ifBreak$6(")")]), {
    shouldBreak: shouldBreak
  });
}

function isBinaryish(node) {
  return node.type === "BinaryExpression" || node.type === "LogicalExpression" || node.type === "NGPipeExpression";
}

function isMemberish(node) {
  return node.type === "MemberExpression" || node.type === "OptionalMemberExpression" || node.type === "BindExpression" && node.object;
}

function shouldInlineLogicalExpression(node) {
  if (node.type !== "LogicalExpression") {
    return false;
  }

  if (node.right.type === "ObjectExpression" && node.right.properties.length !== 0) {
    return true;
  }

  if (node.right.type === "ArrayExpression" && node.right.elements.length !== 0) {
    return true;
  }

  if (isJSXNode(node.right)) {
    return true;
  }

  return false;
} // For binary expressions to be consistent, we need to group
// subsequent operators with the same precedence level under a single
// group. Otherwise they will be nested such that some of them break
// onto new lines but not all. Operators with the same precedence
// level should either all break or not. Because we group them by
// precedence level and the AST is structured based on precedence
// level, things are naturally broken up correctly, i.e. `&&` is
// broken before `+`.


function printBinaryishExpressions(path, print, options, isNested, isInsideParenthesis) {
  var parts = [];
  var node = path.getValue(); // We treat BinaryExpression and LogicalExpression nodes the same.

  if (isBinaryish(node)) {
    // Put all operators with the same precedence level in the same
    // group. The reason we only need to do this with the `left`
    // expression is because given an expression like `1 + 2 - 3`, it
    // is always parsed like `((1 + 2) - 3)`, meaning the `left` side
    // is where the rest of the expression will exist. Binary
    // expressions on the right side mean they have a difference
    // precedence level and should be treated as a separate group, so
    // print them normally. (This doesn't hold for the `**` operator,
    // which is unique in that it is right-associative.)
    if (shouldFlatten$1(node.operator, node.left.operator)) {
      // Flatten them out by recursively calling this function.
      parts = parts.concat(path.call(function (left) {
        return printBinaryishExpressions(left, print, options,
        /* isNested */
        true, isInsideParenthesis);
      }, "left"));
    } else {
      parts.push(path.call(print, "left"));
    }

    var shouldInline = shouldInlineLogicalExpression(node);
    var lineBeforeOperator = (node.operator === "|>" || node.type === "NGPipeExpression" || node.operator === "|" && options.parser === "__vue_expression") && !hasLeadingOwnLineComment(options.originalText, node.right, options);
    var operator = node.type === "NGPipeExpression" ? "|" : node.operator;
    var rightSuffix = node.type === "NGPipeExpression" && node.arguments.length !== 0 ? group$10(indent$6(concat$12([softline$5, ": ", join$7(concat$12([softline$5, ":", ifBreak$6(" ")]), path.map(print, "arguments").map(function (arg) {
      return align$1(2, group$10(arg));
    }))]))) : "";
    var right = shouldInline ? concat$12([operator, " ", path.call(print, "right"), rightSuffix]) : concat$12([lineBeforeOperator ? softline$5 : "", operator, lineBeforeOperator ? " " : line$8, path.call(print, "right"), rightSuffix]); // If there's only a single binary expression, we want to create a group
    // in order to avoid having a small right part like -1 be on its own line.

    var parent = path.getParentNode();
    var shouldGroup = !(isInsideParenthesis && node.type === "LogicalExpression") && parent.type !== node.type && node.left.type !== node.type && node.right.type !== node.type;
    parts.push(" ", shouldGroup ? group$10(right) : right); // The root comments are already printed, but we need to manually print
    // the other ones since we don't call the normal print on BinaryExpression,
    // only for the left and right parts

    if (isNested && node.comments) {
      parts = comments.printComments(path, function () {
        return concat$12(parts);
      }, options);
    }
  } else {
    // Our stopping case. Simply print the node normally.
    parts.push(path.call(print));
  }

  return parts;
}

function printAssignmentRight(leftNode, rightNode, printedRight, options) {
  if (hasLeadingOwnLineComment(options.originalText, rightNode, options)) {
    return indent$6(concat$12([hardline$8, printedRight]));
  }

  var canBreak = isBinaryish(rightNode) && !shouldInlineLogicalExpression(rightNode) || rightNode.type === "ConditionalExpression" && isBinaryish(rightNode.test) && !shouldInlineLogicalExpression(rightNode.test) || rightNode.type === "StringLiteralTypeAnnotation" || rightNode.type === "ClassExpression" && rightNode.decorators && rightNode.decorators.length || (leftNode.type === "Identifier" || isStringLiteral(leftNode) || leftNode.type === "MemberExpression") && (isStringLiteral(rightNode) || isMemberExpressionChain(rightNode)) && // do not put values on a separate line from the key in json
  options.parser !== "json" && options.parser !== "json5";

  if (canBreak) {
    return group$10(indent$6(concat$12([line$8, printedRight])));
  }

  return concat$12([" ", printedRight]);
}

function printAssignment(leftNode, printedLeft, operator, rightNode, printedRight, options) {
  if (!rightNode) {
    return printedLeft;
  }

  var printed = printAssignmentRight(leftNode, rightNode, printedRight, options);
  return group$10(concat$12([printedLeft, operator, printed]));
}

function adjustClause(node, clause, forceSpace) {
  if (node.type === "EmptyStatement") {
    return ";";
  }

  if (node.type === "BlockStatement" || forceSpace) {
    return concat$12([" ", clause]);
  }

  return indent$6(concat$12([line$8, clause]));
}

function nodeStr(node, options, isFlowOrTypeScriptDirectiveLiteral) {
  var raw = rawText(node);
  var isDirectiveLiteral = isFlowOrTypeScriptDirectiveLiteral || node.type === "DirectiveLiteral";
  return printString$2(raw, options, isDirectiveLiteral);
}

function printRegex(node) {
  var flags = node.flags.split("").sort().join("");
  return "/".concat(node.pattern, "/").concat(flags);
}

function isLastStatement(path) {
  var parent = path.getParentNode();

  if (!parent) {
    return true;
  }

  var node = path.getValue();
  var body = (parent.body || parent.consequent).filter(function (stmt) {
    return stmt.type !== "EmptyStatement";
  });
  return body && body[body.length - 1] === node;
}

function hasLeadingComment(node) {
  return node.comments && node.comments.some(function (comment) {
    return comment.leading;
  });
}

function hasTrailingComment(node) {
  return node.comments && node.comments.some(function (comment) {
    return comment.trailing;
  });
}

function hasLeadingOwnLineComment(text, node, options) {
  if (isJSXNode(node)) {
    return hasNodeIgnoreComment$1(node);
  }

  var res = node.comments && node.comments.some(function (comment) {
    return comment.leading && hasNewline$3(text, options.locEnd(comment));
  });
  return res;
}

function hasNakedLeftSide(node) {
  return node.type === "AssignmentExpression" || node.type === "BinaryExpression" || node.type === "LogicalExpression" || node.type === "NGPipeExpression" || node.type === "ConditionalExpression" || node.type === "CallExpression" || node.type === "OptionalCallExpression" || node.type === "MemberExpression" || node.type === "OptionalMemberExpression" || node.type === "SequenceExpression" || node.type === "TaggedTemplateExpression" || node.type === "BindExpression" || node.type === "UpdateExpression" && !node.prefix || node.type === "TSNonNullExpression";
}

function isFlowAnnotationComment(text, typeAnnotation, options) {
  var start = options.locStart(typeAnnotation);
  var end = skipWhitespace$1(text, options.locEnd(typeAnnotation));
  return text.substr(start, 2) === "/*" && text.substr(end, 2) === "*/";
}

function getLeftSide(node) {
  if (node.expressions) {
    return node.expressions[0];
  }

  return node.left || node.test || node.callee || node.object || node.tag || node.argument || node.expression;
}

function getLeftSidePathName(path, node) {
  if (node.expressions) {
    return ["expressions", 0];
  }

  if (node.left) {
    return ["left"];
  }

  if (node.test) {
    return ["test"];
  }

  if (node.object) {
    return ["object"];
  }

  if (node.callee) {
    return ["callee"];
  }

  if (node.tag) {
    return ["tag"];
  }

  if (node.argument) {
    return ["argument"];
  }

  if (node.expression) {
    return ["expression"];
  }

  throw new Error("Unexpected node has no left side", node);
}

function exprNeedsASIProtection(path, options) {
  var node = path.getValue();
  var maybeASIProblem = needsParens_1(path, options) || node.type === "ParenthesizedExpression" || node.type === "TypeCastExpression" || node.type === "ArrowFunctionExpression" && !shouldPrintParamsWithoutParens(path, options) || node.type === "ArrayExpression" || node.type === "ArrayPattern" || node.type === "UnaryExpression" && node.prefix && (node.operator === "+" || node.operator === "-") || node.type === "TemplateLiteral" || node.type === "TemplateElement" || isJSXNode(node) || node.type === "BindExpression" && !node.object || node.type === "RegExpLiteral" || node.type === "Literal" && node.pattern || node.type === "Literal" && node.regex;

  if (maybeASIProblem) {
    return true;
  }

  if (!hasNakedLeftSide(node)) {
    return false;
  }

  return path.call.apply(path, [function (childPath) {
    return exprNeedsASIProtection(childPath, options);
  }].concat(getLeftSidePathName(path, node)));
}

function stmtNeedsASIProtection(path, options) {
  var node = path.getNode();

  if (node.type !== "ExpressionStatement") {
    return false;
  }

  return path.call(function (childPath) {
    return exprNeedsASIProtection(childPath, options);
  }, "expression");
}

function classPropMayCauseASIProblems(path) {
  var node = path.getNode();

  if (node.type !== "ClassProperty") {
    return false;
  }

  var name = node.key && node.key.name; // this isn't actually possible yet with most parsers available today
  // so isn't properly tested yet.

  if ((name === "static" || name === "get" || name === "set") && !node.value && !node.typeAnnotation) {
    return true;
  }
}

function classChildNeedsASIProtection(node) {
  if (!node) {
    return;
  }

  if (node.static || node.accessibility // TypeScript
  ) {
      return false;
    }

  if (!node.computed) {
    var name = node.key && node.key.name;

    if (name === "in" || name === "instanceof") {
      return true;
    }
  }

  switch (node.type) {
    case "ClassProperty":
    case "TSAbstractClassProperty":
      return node.computed;

    case "MethodDefinition": // Flow

    case "TSAbstractMethodDefinition": // TypeScript

    case "ClassMethod":
      {
        // Babylon
        var isAsync = node.value ? node.value.async : node.async;
        var isGenerator = node.value ? node.value.generator : node.generator;

        if (isAsync || node.kind === "get" || node.kind === "set") {
          return false;
        }

        if (node.computed || isGenerator) {
          return true;
        }

        return false;
      }

    default:
      /* istanbul ignore next */
      return false;
  }
} // This recurses the return argument, looking for the first token
// (the leftmost leaf node) and, if it (or its parents) has any
// leadingComments, returns true (so it can be wrapped in parens).


function returnArgumentHasLeadingComment(options, argument) {
  if (hasLeadingOwnLineComment(options.originalText, argument, options)) {
    return true;
  }

  if (hasNakedLeftSide(argument)) {
    var leftMost = argument;
    var newLeftMost;

    while (newLeftMost = getLeftSide(leftMost)) {
      leftMost = newLeftMost;

      if (hasLeadingOwnLineComment(options.originalText, leftMost, options)) {
        return true;
      }
    }
  }

  return false;
}

function isMemberExpressionChain(node) {
  if (node.type !== "MemberExpression" && node.type !== "OptionalMemberExpression") {
    return false;
  }

  if (node.object.type === "Identifier") {
    return true;
  }

  return isMemberExpressionChain(node.object);
} // Hack to differentiate between the following two which have the same ast
// type T = { method: () => void };
// type T = { method(): void };


function isObjectTypePropertyAFunction(node, options) {
  return (node.type === "ObjectTypeProperty" || node.type === "ObjectTypeInternalSlot") && node.value.type === "FunctionTypeAnnotation" && !node.static && !isFunctionNotation(node, options);
} // TODO: This is a bad hack and we need a better way to distinguish between
// arrow functions and otherwise


function isFunctionNotation(node, options) {
  return isGetterOrSetter(node) || sameLocStart(node, node.value, options);
}

function isGetterOrSetter(node) {
  return node.kind === "get" || node.kind === "set";
}

function sameLocStart(nodeA, nodeB, options) {
  return options.locStart(nodeA) === options.locStart(nodeB);
} // Hack to differentiate between the following two which have the same ast
// declare function f(a): void;
// var f: (a) => void;


function isTypeAnnotationAFunction(node, options) {
  return (node.type === "TypeAnnotation" || node.type === "TSTypeAnnotation") && node.typeAnnotation.type === "FunctionTypeAnnotation" && !node.static && !sameLocStart(node, node.typeAnnotation, options);
}

function isNodeStartingWithDeclare(node, options) {
  if (!(options.parser === "flow" || options.parser === "typescript")) {
    return false;
  }

  return options.originalText.slice(0, options.locStart(node)).match(/declare[ \t]*$/) || options.originalText.slice(node.range[0], node.range[1]).startsWith("declare ");
}

function shouldHugType(node) {
  if (isSimpleFlowType(node) || isObjectType(node)) {
    return true;
  }

  if (node.type === "UnionTypeAnnotation" || node.type === "TSUnionType") {
    var voidCount = node.types.filter(function (n) {
      return n.type === "VoidTypeAnnotation" || n.type === "TSVoidKeyword" || n.type === "NullLiteralTypeAnnotation" || n.type === "TSNullKeyword";
    }).length;
    var objectCount = node.types.filter(function (n) {
      return n.type === "ObjectTypeAnnotation" || n.type === "TSTypeLiteral" || // This is a bit aggressive but captures Array<{x}>
      n.type === "GenericTypeAnnotation" || n.type === "TSTypeReference";
    }).length;

    if (node.types.length - 1 === voidCount && objectCount > 0) {
      return true;
    }
  }

  return false;
}

function shouldHugArguments(fun) {
  return fun && fun.params && fun.params.length === 1 && !fun.params[0].comments && (fun.params[0].type === "ObjectPattern" || fun.params[0].type === "ArrayPattern" || fun.params[0].type === "Identifier" && fun.params[0].typeAnnotation && (fun.params[0].typeAnnotation.type === "TypeAnnotation" || fun.params[0].typeAnnotation.type === "TSTypeAnnotation") && isObjectType(fun.params[0].typeAnnotation.typeAnnotation) || fun.params[0].type === "FunctionTypeParam" && isObjectType(fun.params[0].typeAnnotation) || fun.params[0].type === "AssignmentPattern" && (fun.params[0].left.type === "ObjectPattern" || fun.params[0].left.type === "ArrayPattern") && (fun.params[0].right.type === "Identifier" || fun.params[0].right.type === "ObjectExpression" && fun.params[0].right.properties.length === 0 || fun.params[0].right.type === "ArrayExpression" && fun.params[0].right.elements.length === 0)) && !fun.rest;
}

function templateLiteralHasNewLines(template) {
  return template.quasis.some(function (quasi) {
    return quasi.value.raw.includes("\n");
  });
}

function isTemplateOnItsOwnLine(n, text, options) {
  return (n.type === "TemplateLiteral" && templateLiteralHasNewLines(n) || n.type === "TaggedTemplateExpression" && templateLiteralHasNewLines(n.quasi)) && !hasNewline$3(text, options.locStart(n), {
    backwards: true
  });
}

function printArrayItems(path, options, printPath, print) {
  var printedElements = [];
  var separatorParts = [];
  path.each(function (childPath) {
    printedElements.push(concat$12(separatorParts));
    printedElements.push(group$10(print(childPath)));
    separatorParts = [",", line$8];

    if (childPath.getValue() && isNextLineEmpty$4(options.originalText, childPath.getValue(), options)) {
      separatorParts.push(softline$5);
    }
  }, printPath);
  return concat$12(printedElements);
}

function hasDanglingComments(node) {
  return node.comments && node.comments.some(function (comment) {
    return !comment.leading && !comment.trailing;
  });
}

function needsHardlineAfterDanglingComment(node) {
  if (!node.comments) {
    return false;
  }

  var lastDanglingComment = getLast$4(node.comments.filter(function (comment) {
    return !comment.leading && !comment.trailing;
  }));
  return lastDanglingComment && !comments$3.isBlockComment(lastDanglingComment);
}

function isLiteral(node) {
  return node.type === "BooleanLiteral" || node.type === "DirectiveLiteral" || node.type === "Literal" || node.type === "NullLiteral" || node.type === "NumericLiteral" || node.type === "RegExpLiteral" || node.type === "StringLiteral" || node.type === "TemplateLiteral" || node.type === "TSTypeLiteral" || node.type === "JSXText";
}

function isNumericLiteral(node) {
  return node.type === "NumericLiteral" || node.type === "Literal" && typeof node.value === "number";
}

function isStringLiteral(node) {
  return node.type === "StringLiteral" || node.type === "Literal" && typeof node.value === "string";
}

function isObjectType(n) {
  return n.type === "ObjectTypeAnnotation" || n.type === "TSTypeLiteral";
}

var unitTestRe = /^(skip|[fx]?(it|describe|test))$/; // eg; `describe("some string", (done) => {})`

function isTestCall(n, parent) {
  if (n.type !== "CallExpression") {
    return false;
  }

  if (n.arguments.length === 1) {
    if (isAngularTestWrapper(n) && parent && isTestCall(parent)) {
      return isFunctionOrArrowExpression(n.arguments[0]);
    }

    if (isUnitTestSetUp(n)) {
      return isAngularTestWrapper(n.arguments[0]);
    }
  } else if (n.arguments.length === 2 || n.arguments.length === 3) {
    if ((n.callee.type === "Identifier" && unitTestRe.test(n.callee.name) || isSkipOrOnlyBlock(n)) && (isTemplateLiteral(n.arguments[0]) || isStringLiteral(n.arguments[0]))) {
      // it("name", () => { ... }, 2500)
      if (n.arguments[2] && !isNumericLiteral(n.arguments[2])) {
        return false;
      }

      return isFunctionOrArrowExpression(n.arguments[1]) && n.arguments[1].params.length <= 1 || isAngularTestWrapper(n.arguments[1]);
    }
  }

  return false;
}

function isSkipOrOnlyBlock(node) {
  return (node.callee.type === "MemberExpression" || node.callee.type === "OptionalMemberExpression") && node.callee.object.type === "Identifier" && node.callee.property.type === "Identifier" && unitTestRe.test(node.callee.object.name) && (node.callee.property.name === "only" || node.callee.property.name === "skip");
}

function isTemplateLiteral(node) {
  return node.type === "TemplateLiteral";
} // `inject` is used in AngularJS 1.x, `async` in Angular 2+
// example: https://docs.angularjs.org/guide/unit-testing#using-beforeall-


function isAngularTestWrapper(node) {
  return (node.type === "CallExpression" || node.type === "OptionalCallExpression") && node.callee.type === "Identifier" && (node.callee.name === "async" || node.callee.name === "inject" || node.callee.name === "fakeAsync");
}

function isFunctionOrArrowExpression(node) {
  return node.type === "FunctionExpression" || node.type === "ArrowFunctionExpression";
}

function isUnitTestSetUp(n) {
  var unitTestSetUpRe = /^(before|after)(Each|All)$/;
  return n.callee.type === "Identifier" && unitTestSetUpRe.test(n.callee.name) && n.arguments.length === 1;
}

function isTheOnlyJSXElementInMarkdown(options, path) {
  if (options.parentParser !== "markdown") {
    return false;
  }

  var node = path.getNode();

  if (!node.expression || !isJSXNode(node.expression)) {
    return false;
  }

  var parent = path.getParentNode();
  return parent.type === "Program" && parent.body.length == 1;
}

function willPrintOwnComments(path) {
  var node = path.getValue();
  var parent = path.getParentNode();
  return (node && (isJSXNode(node) || hasFlowShorthandAnnotationComment(node) || parent && parent.type === "CallExpression" && (hasFlowAnnotationComment(node.leadingComments) || hasFlowAnnotationComment(node.trailingComments))) || parent && (parent.type === "JSXSpreadAttribute" || parent.type === "JSXSpreadChild" || parent.type === "UnionTypeAnnotation" || parent.type === "TSUnionType" || (parent.type === "ClassDeclaration" || parent.type === "ClassExpression") && parent.superClass === node)) && !hasIgnoreComment$3(path);
}

function canAttachComment$1(node) {
  return node.type && node.type !== "CommentBlock" && node.type !== "CommentLine" && node.type !== "Line" && node.type !== "Block" && node.type !== "EmptyStatement" && node.type !== "TemplateElement" && node.type !== "Import" && !(node.callee && node.callee.type === "Import");
}

function printComment$2(commentPath, options) {
  var comment = commentPath.getValue();

  switch (comment.type) {
    case "CommentBlock":
    case "Block":
      {
        if (isIndentableBlockComment(comment)) {
          var printed = printIndentableBlockComment(comment); // We need to prevent an edge case of a previous trailing comment
          // printed as a `lineSuffix` which causes the comments to be
          // interleaved. See https://github.com/prettier/prettier/issues/4412

          if (comment.trailing && !hasNewline$3(options.originalText, options.locStart(comment), {
            backwards: true
          })) {
            return concat$12([hardline$8, printed]);
          }

          return printed;
        }

        var isInsideFlowComment = options.originalText.substr(options.locEnd(comment) - 3, 3) === "*-/";
        return "/*" + comment.value + (isInsideFlowComment ? "*-/" : "*/");
      }

    case "CommentLine":
    case "Line":
      // Print shebangs with the proper comment characters
      if (options.originalText.slice(options.locStart(comment)).startsWith("#!")) {
        return "#!" + comment.value.trimRight();
      }

      return "//" + comment.value.trimRight();

    default:
      throw new Error("Not a comment: " + JSON.stringify(comment));
  }
}

function isIndentableBlockComment(comment) {
  // If the comment has multiple lines and every line starts with a star
  // we can fix the indentation of each line. The stars in the `/*` and
  // `*/` delimiters are not included in the comment value, so add them
  // back first.
  var lines = "*".concat(comment.value, "*").split("\n");
  return lines.length > 1 && lines.every(function (line) {
    return line.trim()[0] === "*";
  });
}

function printIndentableBlockComment(comment) {
  var lines = comment.value.split("\n");
  return concat$12(["/*", join$7(hardline$8, lines.map(function (line, index) {
    return index === 0 ? line.trimRight() : " " + (index < lines.length - 1 ? line.trim() : line.trimLeft());
  })), "*/"]);
}

function rawText(node) {
  return node.extra ? node.extra.raw : node.raw;
}

var printerEstree = {
  preprocess: preprocess_1$2,
  print: genericPrint$3,
  embed: embed_1$2,
  insertPragma: insertPragma$7,
  massageAstNode: clean_1$2,
  hasPrettierIgnore: hasPrettierIgnore$2,
  willPrintOwnComments: willPrintOwnComments,
  canAttachComment: canAttachComment$1,
  printComment: printComment$2,
  isBlockComment: comments$3.isBlockComment,
  handleComments: {
    ownLine: comments$3.handleOwnLineComment,
    endOfLine: comments$3.handleEndOfLineComment,
    remaining: comments$3.handleRemainingComment
  }
};

var _require$$0$builders$8 = doc.builders;
var concat$15 = _require$$0$builders$8.concat;
var hardline$10 = _require$$0$builders$8.hardline;
var indent$8 = _require$$0$builders$8.indent;
var join$10 = _require$$0$builders$8.join;

function genericPrint$4(path, options, print) {
  var node = path.getValue();

  switch (node.type) {
    case "JsonRoot":
      return concat$15([path.call(print, "node"), hardline$10]);

    case "ArrayExpression":
      return node.elements.length === 0 ? "[]" : concat$15(["[", indent$8(concat$15([hardline$10, join$10(concat$15([",", hardline$10]), path.map(print, "elements"))])), hardline$10, "]"]);

    case "ObjectExpression":
      return node.properties.length === 0 ? "{}" : concat$15(["{", indent$8(concat$15([hardline$10, join$10(concat$15([",", hardline$10]), path.map(print, "properties"))])), hardline$10, "}"]);

    case "ObjectProperty":
      return concat$15([path.call(print, "key"), ": ", path.call(print, "value")]);

    case "UnaryExpression":
      return concat$15([node.operator === "+" ? "" : node.operator, path.call(print, "argument")]);

    case "NullLiteral":
      return "null";

    case "BooleanLiteral":
      return node.value ? "true" : "false";

    case "StringLiteral":
    case "NumericLiteral":
      return JSON.stringify(node.value);

    case "Identifier":
      return JSON.stringify(node.name);

    default:
      /* istanbul ignore next */
      throw new Error("unknown type: " + JSON.stringify(node.type));
  }
}

function clean$9(node, newNode
/*, parent*/
) {
  delete newNode.start;
  delete newNode.end;
  delete newNode.extra;
  delete newNode.loc;
  delete newNode.comments;

  if (node.type === "Identifier") {
    return {
      type: "StringLiteral",
      value: node.name
    };
  }

  if (node.type === "UnaryExpression" && node.operator === "+") {
    return newNode.argument;
  }
}

var printerEstreeJson = {
  preprocess: preprocess_1$2,
  print: genericPrint$4,
  massageAstNode: clean$9
};

var CATEGORY_JAVASCRIPT = "JavaScript"; // format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js

var options$12 = {
  arrowParens: {
    since: "1.9.0",
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: "avoid",
    description: "Include parentheses around a sole arrow function parameter.",
    choices: [{
      value: "avoid",
      description: "Omit parens when possible. Example: `x => x`"
    }, {
      value: "always",
      description: "Always include parens. Example: `(x) => x`"
    }]
  },
  bracketSpacing: commonOptions.bracketSpacing,
  jsxBracketSameLine: {
    since: "0.17.0",
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: false,
    description: "Put > on the last line instead of at a new line."
  },
  semi: {
    since: "1.0.0",
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: true,
    description: "Print semicolons.",
    oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
  },
  singleQuote: commonOptions.singleQuote,
  jsxSingleQuote: {
    since: "1.15.0",
    category: CATEGORY_JAVASCRIPT,
    type: "boolean",
    default: false,
    description: "Use single quotes in JSX."
  },
  trailingComma: {
    since: "0.0.0",
    category: CATEGORY_JAVASCRIPT,
    type: "choice",
    default: [{
      since: "0.0.0",
      value: false
    }, {
      since: "0.19.0",
      value: "none"
    }],
    description: "Print trailing commas wherever possible when multi-line.",
    choices: [{
      value: "none",
      description: "No trailing commas."
    }, {
      value: "es5",
      description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
    }, {
      value: "all",
      description: "Trailing commas wherever possible (including function arguments)."
    }, {
      value: true,
      deprecated: "0.19.0",
      redirect: "es5"
    }, {
      value: false,
      deprecated: "0.19.0",
      redirect: "none"
    }]
  }
};

var name$9 = "JavaScript";
var type$8 = "programming";
var tmScope$8 = "source.js";
var aceMode$8 = "javascript";
var codemirrorMode$4 = "javascript";
var codemirrorMimeType$4 = "text/javascript";
var color$3 = "#f1e05a";
var aliases$2 = ["js", "node"];
var extensions$8 = [".js", "._js", ".bones", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"];
var filenames = ["Jakefile"];
var interpreters = ["node"];
var languageId$8 = 183;
var javascript = {
  name: name$9,
  type: type$8,
  tmScope: tmScope$8,
  aceMode: aceMode$8,
  codemirrorMode: codemirrorMode$4,
  codemirrorMimeType: codemirrorMimeType$4,
  color: color$3,
  aliases: aliases$2,
  extensions: extensions$8,
  filenames: filenames,
  interpreters: interpreters,
  languageId: languageId$8
};

var javascript$1 = Object.freeze({
	name: name$9,
	type: type$8,
	tmScope: tmScope$8,
	aceMode: aceMode$8,
	codemirrorMode: codemirrorMode$4,
	codemirrorMimeType: codemirrorMimeType$4,
	color: color$3,
	aliases: aliases$2,
	extensions: extensions$8,
	filenames: filenames,
	interpreters: interpreters,
	languageId: languageId$8,
	default: javascript
});

var name$10 = "JSX";
var type$9 = "programming";
var group$12 = "JavaScript";
var extensions$9 = [".jsx"];
var tmScope$9 = "source.js.jsx";
var aceMode$9 = "javascript";
var codemirrorMode$5 = "jsx";
var codemirrorMimeType$5 = "text/jsx";
var languageId$9 = 178;
var jsx = {
  name: name$10,
  type: type$9,
  group: group$12,
  extensions: extensions$9,
  tmScope: tmScope$9,
  aceMode: aceMode$9,
  codemirrorMode: codemirrorMode$5,
  codemirrorMimeType: codemirrorMimeType$5,
  languageId: languageId$9
};

var jsx$1 = Object.freeze({
	name: name$10,
	type: type$9,
	group: group$12,
	extensions: extensions$9,
	tmScope: tmScope$9,
	aceMode: aceMode$9,
	codemirrorMode: codemirrorMode$5,
	codemirrorMimeType: codemirrorMimeType$5,
	languageId: languageId$9,
	default: jsx
});

var name$11 = "TypeScript";
var type$10 = "programming";
var color$4 = "#2b7489";
var aliases$3 = ["ts"];
var extensions$10 = [".ts", ".tsx"];
var tmScope$10 = "source.ts";
var aceMode$10 = "typescript";
var codemirrorMode$6 = "javascript";
var codemirrorMimeType$6 = "application/typescript";
var languageId$10 = 378;
var typescript = {
  name: name$11,
  type: type$10,
  color: color$4,
  aliases: aliases$3,
  extensions: extensions$10,
  tmScope: tmScope$10,
  aceMode: aceMode$10,
  codemirrorMode: codemirrorMode$6,
  codemirrorMimeType: codemirrorMimeType$6,
  languageId: languageId$10
};

var typescript$1 = Object.freeze({
	name: name$11,
	type: type$10,
	color: color$4,
	aliases: aliases$3,
	extensions: extensions$10,
	tmScope: tmScope$10,
	aceMode: aceMode$10,
	codemirrorMode: codemirrorMode$6,
	codemirrorMimeType: codemirrorMimeType$6,
	languageId: languageId$10,
	default: typescript
});

var name$12 = "JSON";
var type$11 = "data";
var tmScope$11 = "source.json";
var group$13 = "JavaScript";
var aceMode$11 = "json";
var codemirrorMode$7 = "javascript";
var codemirrorMimeType$7 = "application/json";
var searchable = false;
var extensions$11 = [".json", ".avsc", ".geojson", ".gltf", ".JSON-tmLanguage", ".jsonl", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest"];
var filenames$1 = [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", "composer.lock", "mcmod.info"];
var languageId$11 = 174;
var json$5 = {
  name: name$12,
  type: type$11,
  tmScope: tmScope$11,
  group: group$13,
  aceMode: aceMode$11,
  codemirrorMode: codemirrorMode$7,
  codemirrorMimeType: codemirrorMimeType$7,
  searchable: searchable,
  extensions: extensions$11,
  filenames: filenames$1,
  languageId: languageId$11
};

var json$6 = Object.freeze({
	name: name$12,
	type: type$11,
	tmScope: tmScope$11,
	group: group$13,
	aceMode: aceMode$11,
	codemirrorMode: codemirrorMode$7,
	codemirrorMimeType: codemirrorMimeType$7,
	searchable: searchable,
	extensions: extensions$11,
	filenames: filenames$1,
	languageId: languageId$11,
	default: json$5
});

var name$13 = "JSON with Comments";
var type$12 = "data";
var group$14 = "JSON";
var tmScope$12 = "source.js";
var aceMode$12 = "javascript";
var codemirrorMode$8 = "javascript";
var codemirrorMimeType$8 = "text/javascript";
var aliases$4 = ["jsonc"];
var extensions$12 = [".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"];
var filenames$2 = [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "tsconfig.json"];
var languageId$12 = 423;
var jsonWithComments = {
  name: name$13,
  type: type$12,
  group: group$14,
  tmScope: tmScope$12,
  aceMode: aceMode$12,
  codemirrorMode: codemirrorMode$8,
  codemirrorMimeType: codemirrorMimeType$8,
  aliases: aliases$4,
  extensions: extensions$12,
  filenames: filenames$2,
  languageId: languageId$12
};

var jsonWithComments$1 = Object.freeze({
	name: name$13,
	type: type$12,
	group: group$14,
	tmScope: tmScope$12,
	aceMode: aceMode$12,
	codemirrorMode: codemirrorMode$8,
	codemirrorMimeType: codemirrorMimeType$8,
	aliases: aliases$4,
	extensions: extensions$12,
	filenames: filenames$2,
	languageId: languageId$12,
	default: jsonWithComments
});

var name$14 = "JSON5";
var type$13 = "data";
var extensions$13 = [".json5"];
var tmScope$13 = "source.js";
var aceMode$13 = "javascript";
var codemirrorMode$9 = "javascript";
var codemirrorMimeType$9 = "application/json";
var languageId$13 = 175;
var json5 = {
  name: name$14,
  type: type$13,
  extensions: extensions$13,
  tmScope: tmScope$13,
  aceMode: aceMode$13,
  codemirrorMode: codemirrorMode$9,
  codemirrorMimeType: codemirrorMimeType$9,
  languageId: languageId$13
};

var json5$1 = Object.freeze({
	name: name$14,
	type: type$13,
	extensions: extensions$13,
	tmScope: tmScope$13,
	aceMode: aceMode$13,
	codemirrorMode: codemirrorMode$9,
	codemirrorMimeType: codemirrorMimeType$9,
	languageId: languageId$13,
	default: json5
});

var require$$0$22 = ( javascript$1 && javascript ) || javascript$1;

var require$$1$12 = ( jsx$1 && jsx ) || jsx$1;

var require$$2$11 = ( typescript$1 && typescript ) || typescript$1;

var require$$3$7 = ( json$6 && json$5 ) || json$6;

var require$$4$4 = ( jsonWithComments$1 && jsonWithComments ) || jsonWithComments$1;

var require$$5$1 = ( json5$1 && json5 ) || json5$1;

var languages$4 = [createLanguage(require$$0$22, {
  override: {
    since: "0.0.0",
    parsers: ["babylon", "flow"],
    vscodeLanguageIds: ["javascript"]
  },
  extend: {
    interpreters: ["nodejs"]
  }
}), createLanguage(require$$0$22, {
  override: {
    name: "Flow",
    since: "0.0.0",
    parsers: ["babylon", "flow"],
    vscodeLanguageIds: ["javascript"],
    aliases: [],
    filenames: [],
    extensions: [".js.flow"]
  }
}), createLanguage(require$$1$12, {
  override: {
    since: "0.0.0",
    parsers: ["babylon", "flow"],
    vscodeLanguageIds: ["javascriptreact"]
  }
}), createLanguage(require$$2$11, {
  override: {
    since: "1.4.0",
    parsers: ["typescript"],
    vscodeLanguageIds: ["typescript", "typescriptreact"]
  }
}), createLanguage(require$$3$7, {
  override: {
    name: "JSON.stringify",
    since: "1.13.0",
    parsers: ["json-stringify"],
    vscodeLanguageIds: ["json"],
    extensions: [],
    // .json file defaults to json instead of json-stringify
    filenames: ["package.json", "package-lock.json", "composer.json"]
  }
}), createLanguage(require$$3$7, {
  override: {
    since: "1.5.0",
    parsers: ["json"],
    vscodeLanguageIds: ["json"]
  },
  extend: {
    filenames: [".prettierrc"]
  }
}), createLanguage(require$$4$4, {
  override: {
    since: "1.5.0",
    parsers: ["json"],
    vscodeLanguageIds: ["jsonc"]
  },
  extend: {
    filenames: [".eslintrc"]
  }
}), createLanguage(require$$5$1, {
  override: {
    since: "1.13.0",
    parsers: ["json5"],
    vscodeLanguageIds: ["json5"]
  }
})];
var printers$4 = {
  estree: printerEstree,
  "estree-json": printerEstreeJson
};
var languageJs = {
  languages: languages$4,
  options: options$12,
  printers: printers$4
};

const json$9 = {"cjkPattern":"[\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fd-\\u30ff\\u3105-\\u312e\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u321e\\u3260-\\u327e\\u32d0-\\u32fe\\u3300-\\u3357\\u3400-\\u4db5\\u4e00-\\u9fea\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e]|\\ud83c[\\ude00]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d]","kPattern":"[\\u1100-\\u11ff\\u302e-\\u302f\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]","punctuationPattern":"[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0af0\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166d-\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e49\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc9\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"};

var cjkPattern = json$9.cjkPattern;
var kPattern = json$9.kPattern;
var punctuationPattern$1 = json$9.punctuationPattern;
var getLast$5 = util.getLast;
var kRegex = new RegExp(kPattern);
var punctuationRegex = new RegExp(punctuationPattern$1);
/**
 * split text into whitespaces and words
 * @param {string} text
 * @return {Array<{ type: "whitespace", value: " " | "\n" | "" } | { type: "word", value: string }>}
 */

function splitText$1(text, options) {
  var KIND_NON_CJK = "non-cjk";
  var KIND_CJ_LETTER = "cj-letter";
  var KIND_K_LETTER = "k-letter";
  var KIND_CJK_PUNCTUATION = "cjk-punctuation";
  var nodes = [];
  (options.proseWrap === "preserve" ? text : text.replace(new RegExp("(".concat(cjkPattern, ")\n(").concat(cjkPattern, ")"), "g"), "$1$2")).split(/([ \t\n]+)/).forEach(function (token, index, tokens) {
    // whitespace
    if (index % 2 === 1) {
      nodes.push({
        type: "whitespace",
        value: /\n/.test(token) ? "\n" : " "
      });
      return;
    } // word separated by whitespace


    if ((index === 0 || index === tokens.length - 1) && token === "") {
      return;
    }

    token.split(new RegExp("(".concat(cjkPattern, ")"))).forEach(function (innerToken, innerIndex, innerTokens) {
      if ((innerIndex === 0 || innerIndex === innerTokens.length - 1) && innerToken === "") {
        return;
      } // non-CJK word


      if (innerIndex % 2 === 0) {
        if (innerToken !== "") {
          appendNode({
            type: "word",
            value: innerToken,
            kind: KIND_NON_CJK,
            hasLeadingPunctuation: punctuationRegex.test(innerToken[0]),
            hasTrailingPunctuation: punctuationRegex.test(getLast$5(innerToken))
          });
        }

        return;
      } // CJK character


      appendNode(punctuationRegex.test(innerToken) ? {
        type: "word",
        value: innerToken,
        kind: KIND_CJK_PUNCTUATION,
        hasLeadingPunctuation: true,
        hasTrailingPunctuation: true
      } : {
        type: "word",
        value: innerToken,
        kind: kRegex.test(innerToken) ? KIND_K_LETTER : KIND_CJ_LETTER,
        hasLeadingPunctuation: false,
        hasTrailingPunctuation: false
      });
    });
  });
  return nodes;

  function appendNode(node) {
    var lastNode = getLast$5(nodes);

    if (lastNode && lastNode.type === "word") {
      if (lastNode.kind === KIND_NON_CJK && node.kind === KIND_CJ_LETTER && !lastNode.hasTrailingPunctuation || lastNode.kind === KIND_CJ_LETTER && node.kind === KIND_NON_CJK && !node.hasLeadingPunctuation) {
        nodes.push({
          type: "whitespace",
          value: " "
        });
      } else if (!isBetween(KIND_NON_CJK, KIND_CJK_PUNCTUATION) && // disallow leading/trailing full-width whitespace
      ![lastNode.value, node.value].some(function (value) {
        return /\u3000/.test(value);
      })) {
        nodes.push({
          type: "whitespace",
          value: ""
        });
      }
    }

    nodes.push(node);

    function isBetween(kind1, kind2) {
      return lastNode.kind === kind1 && node.kind === kind2 || lastNode.kind === kind2 && node.kind === kind1;
    }
  }
}

function getOrderedListItemInfo$1(orderListItem, originalText) {
  var _originalText$slice$m = originalText.slice(orderListItem.position.start.offset, orderListItem.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
      _originalText$slice$m2 = _slicedToArray(_originalText$slice$m, 4),
      numberText = _originalText$slice$m2[1],
      marker = _originalText$slice$m2[2],
      leadingSpaces = _originalText$slice$m2[3];

  return {
    numberText: numberText,
    marker: marker,
    leadingSpaces: leadingSpaces
  };
} // workaround for https://github.com/remarkjs/remark/issues/351
// leading and trailing newlines are stripped by remark


function getFencedCodeBlockValue$2(node, originalText) {
  var text = originalText.slice(node.position.start.offset, node.position.end.offset);
  var leadingSpaceCount = text.match(/^\s*/)[0].length;
  var replaceRegex = new RegExp("^\\s{0,".concat(leadingSpaceCount, "}"));
  var lineContents = text.split("\n");
  var markerStyle = text[leadingSpaceCount]; // ` or ~

  var marker = text.slice(leadingSpaceCount).match(new RegExp("^[".concat(markerStyle, "]+")))[0]; // https://spec.commonmark.org/0.28/#example-104: Closing fences may be indented by 0-3 spaces
  // https://spec.commonmark.org/0.28/#example-93: The closing code fence must be at least as long as the opening fence

  var hasEndMarker = new RegExp("^\\s{0,3}".concat(marker)).test(lineContents[lineContents.length - 1].slice(getIndent(lineContents.length - 1)));
  return lineContents.slice(1, hasEndMarker ? -1 : undefined).map(function (x, i) {
    return x.slice(getIndent(i + 1)).replace(replaceRegex, "");
  }).join("\n");

  function getIndent(lineIndex) {
    return node.position.indent[lineIndex - 1] - 1;
  }
}

function mapAst(ast, handler) {
  return function preorder(node, index, parentStack) {
    parentStack = parentStack || [];
    var newNode = Object.assign({}, handler(node, index, parentStack));

    if (newNode.children) {
      newNode.children = newNode.children.map(function (child, index) {
        return preorder(child, index, [newNode].concat(parentStack));
      });
    }

    return newNode;
  }(ast, null, null);
}

var utils$8 = {
  mapAst: mapAst,
  splitText: splitText$1,
  punctuationPattern: punctuationPattern$1,
  getFencedCodeBlockValue: getFencedCodeBlockValue$2,
  getOrderedListItemInfo: getOrderedListItemInfo$1
};

var _require$$0$builders$10 = doc.builders;
var hardline$12 = _require$$0$builders$10.hardline;
var literalline$6 = _require$$0$builders$10.literalline;
var concat$17 = _require$$0$builders$10.concat;
var markAsRoot$4 = _require$$0$builders$10.markAsRoot;
var mapDoc$7 = doc.utils.mapDoc;
var getFencedCodeBlockValue$1 = utils$8.getFencedCodeBlockValue;

function embed$6(path, print, textToDoc, options) {
  var node = path.getValue();

  if (node.type === "code" && node.lang !== null) {
    // only look for the first string so as to support [markdown-preview-enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/code-chunk)
    var langMatch = node.lang.match(/^[A-Za-z0-9_-]+/);
    var lang = langMatch ? langMatch[0] : "";
    var parser = getParserName(lang);

    if (parser) {
      var styleUnit = options.__inJsTemplate ? "~" : "`";
      var style = styleUnit.repeat(Math.max(3, util.getMaxContinuousCount(node.value, styleUnit) + 1));
      var doc$$2 = textToDoc(getFencedCodeBlockValue$1(node, options.originalText), {
        parser: parser
      });
      return markAsRoot$4(concat$17([style, node.lang, hardline$12, replaceNewlinesWithLiterallines(doc$$2), style]));
    }
  }

  if (node.type === "yaml") {
    return markAsRoot$4(concat$17(["---", hardline$12, node.value.trim() ? replaceNewlinesWithLiterallines(textToDoc(node.value, {
      parser: "yaml"
    })) : "", "---"]));
  } // MDX


  switch (node.type) {
    case "importExport":
      return textToDoc(node.value, {
        parser: "babylon"
      });

    case "jsx":
      return textToDoc(node.value, {
        parser: "__js_expression"
      });
  }

  return null;

  function getParserName(lang) {
    var supportInfo = support.getSupportInfo(null, {
      plugins: options.plugins
    });
    var language = supportInfo.languages.find(function (language) {
      return language.name.toLowerCase() === lang || language.aliases && language.aliases.indexOf(lang) !== -1 || language.extensions && language.extensions.find(function (ext) {
        return ext.substring(1) === lang;
      });
    });

    if (language) {
      return language.parsers[0];
    }

    return null;
  }

  function replaceNewlinesWithLiterallines(doc$$2) {
    return mapDoc$7(doc$$2, function (currentDoc) {
      return typeof currentDoc === "string" && currentDoc.includes("\n") ? concat$17(currentDoc.split(/(\n)/g).map(function (v, i) {
        return i % 2 === 0 ? v : literalline$6;
      })) : currentDoc;
    });
  }
}

var embed_1$4 = embed$6;

var pragma$8 = createCommonjsModule(function (module) {
  "use strict";

  var pragmas = ["format", "prettier"];

  function startWithPragma(text) {
    var pragma = "@(".concat(pragmas.join("|"), ")");
    var regex = new RegExp(["<!--\\s*".concat(pragma, "\\s*-->"), "<!--.*\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(pragma, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m");
    var matched = text.match(regex);
    return matched && matched.index === 0;
  }

  module.exports = {
    startWithPragma: startWithPragma,
    hasPragma: function hasPragma(text) {
      return startWithPragma(frontMatter(text).content.trimLeft());
    },
    insertPragma: function insertPragma(text) {
      var extracted = frontMatter(text);
      var pragma = "<!-- @".concat(pragmas[0], " -->");
      return extracted.frontMatter ? "".concat(extracted.frontMatter.raw, "\n\n").concat(pragma, "\n\n").concat(extracted.content) : "".concat(pragma, "\n\n").concat(extracted.content);
    }
  };
});

var getOrderedListItemInfo$2 = utils$8.getOrderedListItemInfo;
var mapAst$1 = utils$8.mapAst;
var splitText$2 = utils$8.splitText; // 0x0 ~ 0x10ffff

var isSingleCharRegex = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;

function preprocess$4(ast, options) {
  ast = restoreUnescapedCharacter(ast, options);
  ast = mergeContinuousTexts(ast);
  ast = transformInlineCode(ast);
  ast = transformIndentedCodeblockAndMarkItsParentList(ast, options);
  ast = markAlignedList(ast, options);
  ast = splitTextIntoSentences(ast, options);
  ast = transformImportExport(ast);
  ast = mergeContinuousImportExport(ast);
  return ast;
}

function transformImportExport(ast) {
  return mapAst$1(ast, function (node) {
    if (node.type !== "import" && node.type !== "export") {
      return node;
    }

    return Object.assign({}, node, {
      type: "importExport"
    });
  });
}

function transformInlineCode(ast) {
  return mapAst$1(ast, function (node) {
    if (node.type !== "inlineCode") {
      return node;
    }

    return Object.assign({}, node, {
      value: node.value.replace(/\s+/g, " ")
    });
  });
}

function restoreUnescapedCharacter(ast, options) {
  return mapAst$1(ast, function (node) {
    return node.type !== "text" ? node : Object.assign({}, node, {
      value: node.value !== "*" && node.value !== "_" && node.value !== "$" && // handle these cases in printer
      isSingleCharRegex.test(node.value) && node.position.end.offset - node.position.start.offset !== node.value.length ? options.originalText.slice(node.position.start.offset, node.position.end.offset) : node.value
    });
  });
}

function mergeContinuousImportExport(ast) {
  return mergeChildren(ast, function (prevNode, node) {
    return prevNode.type === "importExport" && node.type === "importExport";
  }, function (prevNode, node) {
    return {
      type: "importExport",
      value: prevNode.value + "\n\n" + node.value,
      position: {
        start: prevNode.position.start,
        end: node.position.end
      }
    };
  });
}

function mergeChildren(ast, shouldMerge, mergeNode) {
  return mapAst$1(ast, function (node) {
    if (!node.children) {
      return node;
    }

    var children = node.children.reduce(function (current, child) {
      var lastChild = current[current.length - 1];

      if (lastChild && shouldMerge(lastChild, child)) {
        current.splice(-1, 1, mergeNode(lastChild, child));
      } else {
        current.push(child);
      }

      return current;
    }, []);
    return Object.assign({}, node, {
      children: children
    });
  });
}

function mergeContinuousTexts(ast) {
  return mergeChildren(ast, function (prevNode, node) {
    return prevNode.type === "text" && node.type === "text";
  }, function (prevNode, node) {
    return {
      type: "text",
      value: prevNode.value + node.value,
      position: {
        start: prevNode.position.start,
        end: node.position.end
      }
    };
  });
}

function splitTextIntoSentences(ast, options) {
  return mapAst$1(ast, function (node, index, _ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        parentNode = _ref2[0];

    if (node.type !== "text") {
      return node;
    }

    var value = node.value;

    if (parentNode.type === "paragraph") {
      if (index === 0) {
        value = value.trimLeft();
      }

      if (index === parentNode.children.length - 1) {
        value = value.trimRight();
      }
    }

    return {
      type: "sentence",
      position: node.position,
      children: splitText$2(value, options)
    };
  });
}

function transformIndentedCodeblockAndMarkItsParentList(ast, options) {
  return mapAst$1(ast, function (node, index, parentStack) {
    if (node.type === "code") {
      // the first char may point to `\n`, e.g. `\n\t\tbar`, just ignore it
      var isIndented = /^\n?( {4,}|\t)/.test(options.originalText.slice(node.position.start.offset, node.position.end.offset));
      node.isIndented = isIndented;

      if (isIndented) {
        for (var i = 0; i < parentStack.length; i++) {
          var parent = parentStack[i]; // no need to check checked items

          if (parent.hasIndentedCodeblock) {
            break;
          }

          if (parent.type === "list") {
            parent.hasIndentedCodeblock = true;
          }
        }
      }
    }

    return node;
  });
}

function markAlignedList(ast, options) {
  return mapAst$1(ast, function (node, index, parentStack) {
    if (node.type === "list" && node.children.length !== 0) {
      // if one of its parents is not aligned, it's not possible to be aligned in sub-lists
      for (var i = 0; i < parentStack.length; i++) {
        var parent = parentStack[i];

        if (parent.type === "list" && !parent.isAligned) {
          node.isAligned = false;
          return node;
        }
      }

      node.isAligned = isAligned(node);
    }

    return node;
  });

  function getListItemStart(listItem) {
    return listItem.children.length === 0 ? -1 : listItem.children[0].position.start.column - 1;
  }

  function isAligned(list) {
    if (!list.ordered) {
      /**
       * - 123
       * - 123
       */
      return true;
    }

    var _list$children = _slicedToArray(list.children, 2),
        firstItem = _list$children[0],
        secondItem = _list$children[1];

    var firstInfo = getOrderedListItemInfo$2(firstItem, options.originalText);

    if (firstInfo.leadingSpaces.length > 1) {
      /**
       * 1.   123
       *
       * 1.   123
       * 1. 123
       */
      return true;
    }

    var firstStart = getListItemStart(firstItem);

    if (firstStart === -1) {
      /**
       * 1.
       *
       * 1.
       * 1.
       */
      return false;
    }

    if (list.children.length === 1) {
      /**
       * aligned:
       *
       * 11. 123
       *
       * not aligned:
       *
       * 1. 123
       */
      return firstStart % options.tabWidth === 0;
    }

    var secondStart = getListItemStart(secondItem);

    if (firstStart !== secondStart) {
      /**
       * 11. 123
       * 1. 123
       *
       * 1. 123
       * 11. 123
       */
      return false;
    }

    if (firstStart % options.tabWidth === 0) {
      /**
       * 11. 123
       * 12. 123
       */
      return true;
    }
    /**
     * aligned:
     *
     * 11. 123
     * 1.  123
     *
     * not aligned:
     *
     * 1. 123
     * 2. 123
     */


    var secondInfo = getOrderedListItemInfo$2(secondItem, options.originalText);
    return secondInfo.leadingSpaces.length > 1;
  }
}

var preprocess_1$4 = preprocess$4;

var _require$$0$builders$9 = doc.builders;
var concat$16 = _require$$0$builders$9.concat;
var join$11 = _require$$0$builders$9.join;
var line$10 = _require$$0$builders$9.line;
var literalline$5 = _require$$0$builders$9.literalline;
var markAsRoot$3 = _require$$0$builders$9.markAsRoot;
var hardline$11 = _require$$0$builders$9.hardline;
var softline$7 = _require$$0$builders$9.softline;
var fill$5 = _require$$0$builders$9.fill;
var align$2 = _require$$0$builders$9.align;
var indent$9 = _require$$0$builders$9.indent;
var group$15 = _require$$0$builders$9.group;
var mapDoc$6 = doc.utils.mapDoc;
var printDocToString$2 = doc.printer.printDocToString;
var getFencedCodeBlockValue = utils$8.getFencedCodeBlockValue;
var getOrderedListItemInfo = utils$8.getOrderedListItemInfo;
var splitText = utils$8.splitText;
var punctuationPattern = utils$8.punctuationPattern;
var TRAILING_HARDLINE_NODES = ["importExport"];
var SINGLE_LINE_NODE_TYPES = ["heading", "tableCell", "link"];
var SIBLING_NODE_TYPES = ["listItem", "definition", "footnoteDefinition"];
var INLINE_NODE_TYPES = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"];
var INLINE_NODE_WRAPPER_TYPES = INLINE_NODE_TYPES.concat(["tableCell", "paragraph", "heading"]);

function genericPrint$5(path, options, print) {
  var node = path.getValue();

  if (shouldRemainTheSameContent(path)) {
    return concat$16(splitText(options.originalText.slice(node.position.start.offset, node.position.end.offset), options).map(function (node) {
      return node.type === "word" ? node.value : node.value === "" ? "" : printLine(path, node.value, options);
    }));
  }

  switch (node.type) {
    case "root":
      if (node.children.length === 0) {
        return "";
      }

      return concat$16([normalizeDoc(printRoot(path, options, print)), TRAILING_HARDLINE_NODES.indexOf(getLastDescendantNode(node).type) === -1 ? hardline$11 : ""]);

    case "paragraph":
      return printChildren$1(path, options, print, {
        postprocessor: fill$5
      });

    case "sentence":
      return printChildren$1(path, options, print);

    case "word":
      return node.value.replace(/[*$]/g, "\\$&") // escape all `*` and `$` (math)
      .replace(new RegExp(["(^|".concat(punctuationPattern, ")(_+)"), "(_+)(".concat(punctuationPattern, "|$)")].join("|"), "g"), function (_, text1, underscore1, underscore2, text2) {
        return (underscore1 ? "".concat(text1).concat(underscore1) : "".concat(underscore2).concat(text2)).replace(/_/g, "\\_");
      });
    // escape all `_` except concating with non-punctuation, e.g. `1_2_3` is not considered emphasis

    case "whitespace":
      {
        var parentNode = path.getParentNode();
        var index = parentNode.children.indexOf(node);
        var nextNode = parentNode.children[index + 1];
        var proseWrap = // leading char that may cause different syntax
        nextNode && /^>|^([-+*]|#{1,6}|[0-9]+[.)])$/.test(nextNode.value) ? "never" : options.proseWrap;
        return printLine(path, node.value, {
          proseWrap: proseWrap
        });
      }

    case "emphasis":
      {
        var _parentNode = path.getParentNode();

        var _index = _parentNode.children.indexOf(node);

        var prevNode = _parentNode.children[_index - 1];
        var _nextNode = _parentNode.children[_index + 1];
        var hasPrevOrNextWord = // `1*2*3` is considered emphais but `1_2_3` is not
        prevNode && prevNode.type === "sentence" && prevNode.children.length > 0 && util.getLast(prevNode.children).type === "word" && !util.getLast(prevNode.children).hasTrailingPunctuation || _nextNode && _nextNode.type === "sentence" && _nextNode.children.length > 0 && _nextNode.children[0].type === "word" && !_nextNode.children[0].hasLeadingPunctuation;
        var style = hasPrevOrNextWord || getAncestorNode$2(path, "emphasis") ? "*" : "_";
        return concat$16([style, printChildren$1(path, options, print), style]);
      }

    case "strong":
      return concat$16(["**", printChildren$1(path, options, print), "**"]);

    case "delete":
      return concat$16(["~~", printChildren$1(path, options, print), "~~"]);

    case "inlineCode":
      {
        var backtickCount = util.getMaxContinuousCount(node.value, "`");

        var _style = backtickCount === 1 ? "``" : "`";

        var gap = backtickCount ? " " : "";
        return concat$16([_style, gap, node.value, gap, _style]);
      }

    case "link":
      switch (options.originalText[node.position.start.offset]) {
        case "<":
          {
            var mailto = "mailto:";
            var url = // <hello@example.com> is parsed as { url: "mailto:hello@example.com" }
            node.url.startsWith(mailto) && options.originalText.slice(node.position.start.offset + 1, node.position.start.offset + 1 + mailto.length) !== mailto ? node.url.slice(mailto.length) : node.url;
            return concat$16(["<", url, ">"]);
          }

        case "[":
          return concat$16(["[", printChildren$1(path, options, print), "](", printUrl(node.url, ")"), printTitle(node.title, options), ")"]);

        default:
          return options.originalText.slice(node.position.start.offset, node.position.end.offset);
      }

    case "image":
      return concat$16(["![", node.alt || "", "](", printUrl(node.url, ")"), printTitle(node.title, options), ")"]);

    case "blockquote":
      return concat$16(["> ", align$2("> ", printChildren$1(path, options, print))]);

    case "heading":
      return concat$16(["#".repeat(node.depth) + " ", printChildren$1(path, options, print)]);

    case "code":
      {
        if (node.isIndented) {
          // indented code block
          var alignment = " ".repeat(4);
          return align$2(alignment, concat$16([alignment, join$11(hardline$11, node.value.split("\n"))]));
        } // fenced code block


        var styleUnit = options.__inJsTemplate ? "~" : "`";

        var _style2 = styleUnit.repeat(Math.max(3, util.getMaxContinuousCount(node.value, styleUnit) + 1));

        return concat$16([_style2, node.lang || "", hardline$11, join$11(hardline$11, getFencedCodeBlockValue(node, options.originalText).split("\n")), hardline$11, _style2]);
      }

    case "yaml":
    case "toml":
      return options.originalText.slice(node.position.start.offset, node.position.end.offset);

    case "html":
      {
        var _parentNode2 = path.getParentNode();

        var value = _parentNode2.type === "root" && util.getLast(_parentNode2.children) === node ? node.value.trimRight() : node.value;
        var isHtmlComment = /^<!--[\s\S]*-->$/.test(value);
        return replaceNewlinesWith(value, isHtmlComment ? hardline$11 : markAsRoot$3(literalline$5));
      }

    case "list":
      {
        var nthSiblingIndex = getNthListSiblingIndex(node, path.getParentNode());
        var isGitDiffFriendlyOrderedList = node.ordered && node.children.length > 1 && +getOrderedListItemInfo(node.children[1], options.originalText).numberText === 1;
        return printChildren$1(path, options, print, {
          processor: function processor(childPath, index) {
            var prefix = getPrefix();
            return concat$16([prefix, align$2(" ".repeat(prefix.length), printListItem(childPath, options, print, prefix))]);

            function getPrefix() {
              var rawPrefix = node.ordered ? (index === 0 ? node.start : isGitDiffFriendlyOrderedList ? 1 : node.start + index) + (nthSiblingIndex % 2 === 0 ? ". " : ") ") : nthSiblingIndex % 2 === 0 ? "- " : "* ";
              return node.isAligned ||
              /* workaround for https://github.com/remarkjs/remark/issues/315 */
              node.hasIndentedCodeblock ? alignListPrefix(rawPrefix, options) : rawPrefix;
            }
          }
        });
      }

    case "thematicBreak":
      {
        var counter = getAncestorCounter$1(path, "list");

        if (counter === -1) {
          return "---";
        }

        var _nthSiblingIndex = getNthListSiblingIndex(path.getParentNode(counter), path.getParentNode(counter + 1));

        return _nthSiblingIndex % 2 === 0 ? "***" : "---";
      }

    case "linkReference":
      return concat$16(["[", printChildren$1(path, options, print), "]", node.referenceType === "full" ? concat$16(["[", node.identifier, "]"]) : node.referenceType === "collapsed" ? "[]" : ""]);

    case "imageReference":
      switch (node.referenceType) {
        case "full":
          return concat$16(["![", node.alt || "", "][", node.identifier, "]"]);

        default:
          return concat$16(["![", node.alt, "]", node.referenceType === "collapsed" ? "[]" : ""]);
      }

    case "definition":
      {
        var lineOrSpace = options.proseWrap === "always" ? line$10 : " ";
        return group$15(concat$16([concat$16(["[", node.identifier, "]:"]), indent$9(concat$16([lineOrSpace, printUrl(node.url), node.title === null ? "" : concat$16([lineOrSpace, printTitle(node.title, options, false)])]))]));
      }

    case "footnote":
      return concat$16(["[^", printChildren$1(path, options, print), "]"]);

    case "footnoteReference":
      return concat$16(["[^", node.identifier, "]"]);

    case "footnoteDefinition":
      {
        var _nextNode2 = path.getParentNode().children[path.getName() + 1];
        var shouldInlineFootnote = node.children.length === 1 && node.children[0].type === "paragraph" && (options.proseWrap === "never" || options.proseWrap === "preserve" && node.children[0].position.start.line === node.children[0].position.end.line);
        return concat$16(["[^", node.identifier, "]: ", shouldInlineFootnote ? printChildren$1(path, options, print) : group$15(concat$16([align$2(" ".repeat(options.tabWidth), printChildren$1(path, options, print, {
          processor: function processor(childPath, index) {
            return index === 0 ? group$15(concat$16([softline$7, softline$7, childPath.call(print)])) : childPath.call(print);
          }
        })), _nextNode2 && _nextNode2.type === "footnoteDefinition" ? softline$7 : ""]))]);
      }

    case "table":
      return printTable(path, options, print);

    case "tableCell":
      return printChildren$1(path, options, print);

    case "break":
      return /\s/.test(options.originalText[node.position.start.offset]) ? concat$16(["  ", markAsRoot$3(literalline$5)]) : concat$16(["\\", hardline$11]);

    case "liquidNode":
      return replaceNewlinesWith(node.value, hardline$11);
    // MDX

    case "importExport":
    case "jsx":
      return node.value;
    // fallback to the original text if multiparser failed

    case "math":
      return concat$16(["$$", hardline$11, node.value ? concat$16([replaceNewlinesWith(node.value, hardline$11), hardline$11]) : "", "$$"]);

    case "inlineMath":
      {
        // $$math$$ can be block math in some variants
        // see https://github.com/Rokt33r/remark-math#double-dollars-in-inline
        var _style3 = options.originalText[node.position.start.offset + 1] === "$" ? "$$" : "$";

        return concat$16([_style3, node.value, _style3]);
      }

    case "tableRow": // handled in "table"

    case "listItem": // handled in "list"

    default:
      throw new Error("Unknown markdown type ".concat(JSON.stringify(node.type)));
  }
}

function printListItem(path, options, print, listPrefix) {
  var node = path.getValue();
  var prefix = node.checked === null ? "" : node.checked ? "[x] " : "[ ] ";
  return concat$16([prefix, printChildren$1(path, options, print, {
    processor: function processor(childPath, index) {
      if (index === 0 && childPath.getValue().type !== "list") {
        return align$2(" ".repeat(prefix.length), childPath.call(print));
      }

      var alignment = " ".repeat(clamp(options.tabWidth - listPrefix.length, 0, 3) // 4+ will cause indented code block
      );
      return concat$16([alignment, align$2(alignment, childPath.call(print))]);
    }
  })]);
}

function alignListPrefix(prefix, options) {
  var additionalSpaces = getAdditionalSpaces();
  return prefix + " ".repeat(additionalSpaces >= 4 ? 0 : additionalSpaces // 4+ will cause indented code block
  );

  function getAdditionalSpaces() {
    var restSpaces = prefix.length % options.tabWidth;
    return restSpaces === 0 ? 0 : options.tabWidth - restSpaces;
  }
}

function getNthListSiblingIndex(node, parentNode) {
  return getNthSiblingIndex(node, parentNode, function (siblingNode) {
    return siblingNode.ordered === node.ordered;
  });
}

function replaceNewlinesWith(str, doc$$2) {
  return join$11(doc$$2, str.split("\n"));
}

function getNthSiblingIndex(node, parentNode, condition) {
  condition = condition || function () {
    return true;
  };

  var index = -1;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parentNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var childNode = _step.value;

      if (childNode.type === node.type && condition(childNode)) {
        index++;
      } else {
        index = -1;
      }

      if (childNode === node) {
        return index;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function getAncestorCounter$1(path, typeOrTypes) {
  var types = [].concat(typeOrTypes);
  var counter = -1;
  var ancestorNode;

  while (ancestorNode = path.getParentNode(++counter)) {
    if (types.indexOf(ancestorNode.type) !== -1) {
      return counter;
    }
  }

  return -1;
}

function getAncestorNode$2(path, typeOrTypes) {
  var counter = getAncestorCounter$1(path, typeOrTypes);
  return counter === -1 ? null : path.getParentNode(counter);
}

function printLine(path, value, options) {
  if (options.proseWrap === "preserve" && value === "\n") {
    return hardline$11;
  }

  var isBreakable = options.proseWrap === "always" && !getAncestorNode$2(path, SINGLE_LINE_NODE_TYPES);
  return value !== "" ? isBreakable ? line$10 : " " : isBreakable ? softline$7 : "";
}

function printTable(path, options, print) {
  var node = path.getValue();
  var contents = []; // { [rowIndex: number]: { [columnIndex: number]: string } }

  path.map(function (rowPath) {
    var rowContents = [];
    rowPath.map(function (cellPath) {
      rowContents.push(printDocToString$2(cellPath.call(print), options).formatted);
    }, "children");
    contents.push(rowContents);
  }, "children");
  var columnMaxWidths = contents.reduce(function (currentWidths, rowContents) {
    return currentWidths.map(function (width, columnIndex) {
      return Math.max(width, util.getStringWidth(rowContents[columnIndex]));
    });
  }, contents[0].map(function () {
    return 3;
  }) // minimum width = 3 (---, :--, :-:, --:)
  );
  return join$11(hardline$11, [printRow(contents[0]), printSeparator(), join$11(hardline$11, contents.slice(1).map(printRow))]);

  function printSeparator() {
    return concat$16(["| ", join$11(" | ", columnMaxWidths.map(function (width, index) {
      switch (node.align[index]) {
        case "left":
          return ":" + "-".repeat(width - 1);

        case "right":
          return "-".repeat(width - 1) + ":";

        case "center":
          return ":" + "-".repeat(width - 2) + ":";

        default:
          return "-".repeat(width);
      }
    })), " |"]);
  }

  function printRow(rowContents) {
    return concat$16(["| ", join$11(" | ", rowContents.map(function (rowContent, columnIndex) {
      switch (node.align[columnIndex]) {
        case "right":
          return alignRight(rowContent, columnMaxWidths[columnIndex]);

        case "center":
          return alignCenter(rowContent, columnMaxWidths[columnIndex]);

        default:
          return alignLeft(rowContent, columnMaxWidths[columnIndex]);
      }
    })), " |"]);
  }

  function alignLeft(text, width) {
    return concat$16([text, " ".repeat(width - util.getStringWidth(text))]);
  }

  function alignRight(text, width) {
    return concat$16([" ".repeat(width - util.getStringWidth(text)), text]);
  }

  function alignCenter(text, width) {
    var spaces = width - util.getStringWidth(text);
    var left = Math.floor(spaces / 2);
    var right = spaces - left;
    return concat$16([" ".repeat(left), text, " ".repeat(right)]);
  }
}

function printRoot(path, options, print) {
  /** @typedef {{ index: number, offset: number }} IgnorePosition */

  /** @type {Array<{start: IgnorePosition, end: IgnorePosition}>} */
  var ignoreRanges = [];
  /** @type {IgnorePosition | null} */

  var ignoreStart = null;
  var children = path.getValue().children;
  children.forEach(function (childNode, index) {
    switch (isPrettierIgnore$1(childNode)) {
      case "start":
        if (ignoreStart === null) {
          ignoreStart = {
            index: index,
            offset: childNode.position.end.offset
          };
        }

        break;

      case "end":
        if (ignoreStart !== null) {
          ignoreRanges.push({
            start: ignoreStart,
            end: {
              index: index,
              offset: childNode.position.start.offset
            }
          });
          ignoreStart = null;
        }

        break;

      default:
        // do nothing
        break;
    }
  });
  return printChildren$1(path, options, print, {
    processor: function processor(childPath, index) {
      if (ignoreRanges.length !== 0) {
        var ignoreRange = ignoreRanges[0];

        if (index === ignoreRange.start.index) {
          return concat$16([children[ignoreRange.start.index].value, options.originalText.slice(ignoreRange.start.offset, ignoreRange.end.offset), children[ignoreRange.end.index].value]);
        }

        if (ignoreRange.start.index < index && index < ignoreRange.end.index) {
          return false;
        }

        if (index === ignoreRange.end.index) {
          ignoreRanges.shift();
          return false;
        }
      }

      return childPath.call(print);
    }
  });
}

function printChildren$1(path, options, print, events) {
  events = events || {};
  var postprocessor = events.postprocessor || concat$16;

  var processor = events.processor || function (childPath) {
    return childPath.call(print);
  };

  var node = path.getValue();
  var parts = [];
  var lastChildNode;
  path.map(function (childPath, index) {
    var childNode = childPath.getValue();
    var result = processor(childPath, index);

    if (result !== false) {
      var data = {
        parts: parts,
        prevNode: lastChildNode,
        parentNode: node,
        options: options
      };

      if (!shouldNotPrePrintHardline(childNode, data)) {
        parts.push(hardline$11);

        if (lastChildNode && TRAILING_HARDLINE_NODES.indexOf(lastChildNode.type) !== -1) {
          if (shouldPrePrintTripleHardline(childNode, data)) {
            parts.push(hardline$11);
          }
        } else {
          if (shouldPrePrintDoubleHardline(childNode, data) || shouldPrePrintTripleHardline(childNode, data)) {
            parts.push(hardline$11);
          }

          if (shouldPrePrintTripleHardline(childNode, data)) {
            parts.push(hardline$11);
          }
        }
      }

      parts.push(result);
      lastChildNode = childNode;
    }
  }, "children");
  return postprocessor(parts);
}

function getLastDescendantNode(node) {
  var current = node;

  while (current.children && current.children.length !== 0) {
    current = current.children[current.children.length - 1];
  }

  return current;
}
/** @return {false | 'next' | 'start' | 'end'} */


function isPrettierIgnore$1(node) {
  if (node.type !== "html") {
    return false;
  }

  var match = node.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
  return match === null ? false : match[1] ? match[1] : "next";
}

function shouldNotPrePrintHardline(node, data) {
  var isFirstNode = data.parts.length === 0;
  var isInlineNode = INLINE_NODE_TYPES.indexOf(node.type) !== -1;
  var isInlineHTML = node.type === "html" && INLINE_NODE_WRAPPER_TYPES.indexOf(data.parentNode.type) !== -1;
  return isFirstNode || isInlineNode || isInlineHTML;
}

function shouldPrePrintDoubleHardline(node, data) {
  var isSequence = (data.prevNode && data.prevNode.type) === node.type;
  var isSiblingNode = isSequence && SIBLING_NODE_TYPES.indexOf(node.type) !== -1;
  var isInTightListItem = data.parentNode.type === "listItem" && !data.parentNode.loose;
  var isPrevNodeLooseListItem = data.prevNode && data.prevNode.type === "listItem" && data.prevNode.loose;
  var isPrevNodePrettierIgnore = isPrettierIgnore$1(data.prevNode) === "next";
  var isBlockHtmlWithoutBlankLineBetweenPrevHtml = node.type === "html" && data.prevNode && data.prevNode.type === "html" && data.prevNode.position.end.line + 1 === node.position.start.line;
  return isPrevNodeLooseListItem || !(isSiblingNode || isInTightListItem || isPrevNodePrettierIgnore || isBlockHtmlWithoutBlankLineBetweenPrevHtml);
}

function shouldPrePrintTripleHardline(node, data) {
  var isPrevNodeList = data.prevNode && data.prevNode.type === "list";
  var isIndentedCode = node.type === "code" && node.isIndented;
  return isPrevNodeList && isIndentedCode;
}

function shouldRemainTheSameContent(path) {
  var ancestorNode = getAncestorNode$2(path, ["linkReference", "imageReference"]);
  return ancestorNode && (ancestorNode.type !== "linkReference" || ancestorNode.referenceType !== "full");
}

function normalizeDoc(doc$$2) {
  return mapDoc$6(doc$$2, function (currentDoc) {
    if (!currentDoc.parts) {
      return currentDoc;
    }

    if (currentDoc.type === "concat" && currentDoc.parts.length === 1) {
      return currentDoc.parts[0];
    }

    var parts = [];
    currentDoc.parts.forEach(function (part) {
      if (part.type === "concat") {
        parts.push.apply(parts, part.parts);
      } else if (part !== "") {
        parts.push(part);
      }
    });
    return Object.assign({}, currentDoc, {
      parts: normalizeParts$2(parts)
    });
  });
}

function printUrl(url, dangerousCharOrChars) {
  var dangerousChars = [" "].concat(dangerousCharOrChars || []);
  return new RegExp(dangerousChars.map(function (x) {
    return "\\".concat(x);
  }).join("|")).test(url) ? "<".concat(url, ">") : url;
}

function printTitle(title, options, printSpace) {
  if (printSpace == null) {
    printSpace = true;
  }

  if (!title) {
    return "";
  }

  if (printSpace) {
    return " " + printTitle(title, options, false);
  }

  if (title.includes('"') && title.includes("'") && !title.includes(")")) {
    return "(".concat(title, ")"); // avoid escaped quotes
  } // faster than using RegExps: https://jsperf.com/performance-of-match-vs-split


  var singleCount = title.split("'").length - 1;
  var doubleCount = title.split('"').length - 1;
  var quote = singleCount > doubleCount ? '"' : doubleCount > singleCount ? "'" : options.singleQuote ? "'" : '"';
  title = title.replace(new RegExp("(".concat(quote, ")"), "g"), "\\$1");
  return "".concat(quote).concat(title).concat(quote);
}

function normalizeParts$2(parts) {
  return parts.reduce(function (current, part) {
    var lastPart = util.getLast(current);

    if (typeof lastPart === "string" && typeof part === "string") {
      current.splice(-1, 1, lastPart + part);
    } else {
      current.push(part);
    }

    return current;
  }, []);
}

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

function clean$10(ast, newObj, parent) {
  delete newObj.position;
  delete newObj.raw; // front-matter
  // for codeblock

  if (ast.type === "code" || ast.type === "yaml" || ast.type === "import" || ast.type === "export" || ast.type === "jsx") {
    delete newObj.value;
  }

  if (ast.type === "list") {
    delete newObj.isAligned;
  } // texts can be splitted or merged


  if (ast.type === "text") {
    return null;
  }

  if (ast.type === "inlineCode") {
    newObj.value = ast.value.replace(/[ \t\n]+/g, " ");
  } // for insert pragma


  if (parent && parent.type === "root" && parent.children.length > 0 && (parent.children[0] === ast || (parent.children[0].type === "yaml" || parent.children[0].type === "toml") && parent.children[1] === ast) && ast.type === "html" && pragma$8.startWithPragma(ast.value)) {
    return null;
  }
}

function hasPrettierIgnore$3(path) {
  var index = +path.getName();

  if (index === 0) {
    return false;
  }

  var prevNode = path.getParentNode().children[index - 1];
  return isPrettierIgnore$1(prevNode) === "next";
}

var printerMarkdown = {
  preprocess: preprocess_1$4,
  print: genericPrint$5,
  embed: embed_1$4,
  massageAstNode: clean$10,
  hasPrettierIgnore: hasPrettierIgnore$3,
  insertPragma: pragma$8.insertPragma
};

var options$15 = {
  proseWrap: commonOptions.proseWrap,
  singleQuote: commonOptions.singleQuote
};

var name$15 = "Markdown";
var type$14 = "prose";
var aliases$5 = ["pandoc"];
var aceMode$14 = "markdown";
var codemirrorMode$10 = "gfm";
var codemirrorMimeType$10 = "text/x-gfm";
var wrap = true;
var extensions$14 = [".md", ".markdown", ".mdown", ".mdwn", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"];
var tmScope$14 = "source.gfm";
var languageId$14 = 222;
var markdown = {
  name: name$15,
  type: type$14,
  aliases: aliases$5,
  aceMode: aceMode$14,
  codemirrorMode: codemirrorMode$10,
  codemirrorMimeType: codemirrorMimeType$10,
  wrap: wrap,
  extensions: extensions$14,
  tmScope: tmScope$14,
  languageId: languageId$14
};

var markdown$1 = Object.freeze({
	name: name$15,
	type: type$14,
	aliases: aliases$5,
	aceMode: aceMode$14,
	codemirrorMode: codemirrorMode$10,
	codemirrorMimeType: codemirrorMimeType$10,
	wrap: wrap,
	extensions: extensions$14,
	tmScope: tmScope$14,
	languageId: languageId$14,
	default: markdown
});

var require$$0$25 = ( markdown$1 && markdown ) || markdown$1;

var languages$5 = [createLanguage(require$$0$25, {
  override: {
    since: "1.8.0",
    parsers: ["remark"],
    vscodeLanguageIds: ["markdown"]
  },
  extend: {
    filenames: ["README"]
  }
}), createLanguage({
  name: "MDX",
  extensions: [".mdx"]
}, // TODO: use linguist data
{
  override: {
    since: "1.15.0",
    parsers: ["mdx"],
    vscodeLanguageIds: ["mdx"]
  }
})];
var printers$5 = {
  mdast: printerMarkdown
};
var languageMarkdown = {
  languages: languages$5,
  options: options$15,
  printers: printers$5
};

function isPragma$1(text) {
  return /^\s*@(prettier|format)\s*$/.test(text);
}

function hasPragma$4(text) {
  return /^\s*#[^\n\S]*@(prettier|format)\s*?(\n|$)/.test(text);
}

function insertPragma$9(text) {
  return "# @format\n\n".concat(text);
}

var pragma$11 = {
  isPragma: isPragma$1,
  hasPragma: hasPragma$4,
  insertPragma: insertPragma$9
};

function getLast$7(array) {
  return array[array.length - 1];
}

function getAncestorCount$1(path, filter) {
  var counter = 0;
  var pathStackLength = path.stack.length - 1;

  for (var i = 0; i < pathStackLength; i++) {
    var value = path.stack[i];

    if (isNode$1(value) && filter(value)) {
      counter++;
    }
  }

  return counter;
}
/**
 * @param {any} value
 * @param {string[]=} types
 */


function isNode$1(value, types) {
  return value && typeof value.type === "string" && (!types || types.indexOf(value.type) !== -1);
}

function mapNode$1(node, callback, parent) {
  return callback("children" in node ? Object.assign({}, node, {
    children: node.children.map(function (childNode) {
      return mapNode$1(childNode, callback, node);
    })
  }) : node, parent);
}

function defineShortcut$1(x, key, getter) {
  Object.defineProperty(x, key, {
    get: getter,
    enumerable: false
  });
}

function isNextLineEmpty$6(node, text) {
  var newlineCount = 0;
  var textLength = text.length;

  for (var i = node.position.end.offset - 1; i < textLength; i++) {
    var char = text[i];

    if (char === "\n") {
      newlineCount++;
    }

    if (newlineCount === 1 && /\S/.test(char)) {
      return false;
    }

    if (newlineCount === 2) {
      return true;
    }
  }

  return false;
}

function isLastDescendantNode$1(path) {
  var node = path.getValue();

  switch (node.type) {
    case "tag":
    case "anchor":
    case "comment":
      return false;
  }

  var pathStackLength = path.stack.length;

  for (var i = 1; i < pathStackLength; i++) {
    var item = path.stack[i];
    var parentItem = path.stack[i - 1];

    if (Array.isArray(parentItem) && typeof item === "number" && item !== parentItem.length - 1) {
      return false;
    }
  }

  return true;
}

function getLastDescendantNode$2(node) {
  return "children" in node && node.children.length !== 0 ? getLastDescendantNode$2(getLast$7(node.children)) : node;
}

function isPrettierIgnore$2(comment) {
  return comment.value.trim() === "prettier-ignore";
}

function hasPrettierIgnore$5(path) {
  var node = path.getValue();

  if (node.type === "documentBody") {
    var document = path.getParentNode();
    return hasEndComments$1(document.head) && isPrettierIgnore$2(getLast$7(document.head.endComments));
  }

  return hasLeadingComments$1(node) && isPrettierIgnore$2(getLast$7(node.leadingComments));
}

function isEmptyNode$1(node) {
  return (!node.children || node.children.length === 0) && !hasComments(node);
}

function hasComments(node) {
  return hasLeadingComments$1(node) || hasMiddleComments$1(node) || hasIndicatorComment$1(node) || hasTrailingComment$2(node) || hasEndComments$1(node);
}

function hasLeadingComments$1(node) {
  return node && node.leadingComments && node.leadingComments.length !== 0;
}

function hasMiddleComments$1(node) {
  return node && node.middleComments && node.middleComments.length !== 0;
}

function hasIndicatorComment$1(node) {
  return node && node.indicatorComment;
}

function hasTrailingComment$2(node) {
  return node && node.trailingComment;
}

function hasEndComments$1(node) {
  return node && node.endComments && node.endComments.length !== 0;
}
/**
 * " a   b c   d e   f " -> [" a   b", "c   d", "e   f "]
 */


function splitWithSingleSpace(text) {
  var parts = [];
  var lastPart = undefined;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = text.split(/( +)/g)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part = _step.value;

      if (part !== " ") {
        if (lastPart === " ") {
          parts.push(part);
        } else {
          parts.push((parts.pop() || "") + part);
        }
      } else if (lastPart === undefined) {
        parts.unshift("");
      }

      lastPart = part;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (lastPart === " ") {
    parts.push((parts.pop() || "") + " ");
  }

  if (parts[0] === "") {
    parts.shift();
    parts.unshift(" " + (parts.shift() || ""));
  }

  return parts;
}

function getFlowScalarLineContents$1(nodeType, content, options) {
  var rawLineContents = content.split("\n").map(function (lineContent, index, lineContents) {
    return index === 0 && index === lineContents.length - 1 ? lineContent : index !== 0 && index !== lineContents.length - 1 ? lineContent.trim() : index === 0 ? lineContent.trimRight() : lineContent.trimLeft();
  });

  if (options.proseWrap === "preserve") {
    return rawLineContents.map(function (lineContent) {
      return lineContent.length === 0 ? [] : [lineContent];
    });
  }

  return rawLineContents.map(function (lineContent) {
    return lineContent.length === 0 ? [] : splitWithSingleSpace(lineContent);
  }).reduce(function (reduced, lineContentWords, index) {
    return index !== 0 && rawLineContents[index - 1].length !== 0 && lineContentWords.length !== 0 && !( // trailing backslash in quoteDouble should be preserved
    nodeType === "quoteDouble" && getLast$7(getLast$7(reduced)).endsWith("\\")) ? reduced.concat([reduced.pop().concat(lineContentWords)]) : reduced.concat([lineContentWords]);
  }, []).map(function (lineContentWords) {
    return options.proseWrap === "never" ? [lineContentWords.join(" ")] : lineContentWords;
  });
}

function getBlockValueLineContents$1(node, _ref) {
  var parentIndent = _ref.parentIndent,
      isLastDescendant = _ref.isLastDescendant,
      options = _ref.options;
  var content = node.position.start.line === node.position.end.line ? "" : options.originalText.slice(node.position.start.offset, node.position.end.offset) // exclude open line `>` or `|`
  .match(/^[^\n]*?\n([\s\S]*)$/)[1];
  var leadingSpaceCount = node.indent === null ? function (match) {
    return match ? match[1].length : Infinity;
  }(content.match(/^( *)\S/m)) : node.indent - 1 + parentIndent;
  var rawLineContents = content.split("\n").map(function (lineContent) {
    return lineContent.slice(leadingSpaceCount);
  });

  if (options.proseWrap === "preserve" || node.type === "blockLiteral") {
    return removeUnnecessaryTrailingNewlines(rawLineContents.map(function (lineContent) {
      return lineContent.length === 0 ? [] : [lineContent];
    }));
  }

  return removeUnnecessaryTrailingNewlines(rawLineContents.map(function (lineContent) {
    return lineContent.length === 0 ? [] : splitWithSingleSpace(lineContent);
  }).reduce(function (reduced, lineContentWords, index) {
    return index !== 0 && rawLineContents[index - 1].length !== 0 && lineContentWords.length !== 0 && !/^\s/.test(lineContentWords[0]) && !/^\s|\s$/.test(getLast$7(reduced)) ? reduced.concat([reduced.pop().concat(lineContentWords)]) : reduced.concat([lineContentWords]);
  }, []).map(function (lineContentWords) {
    return lineContentWords.reduce(function (reduced, word) {
      return (// disallow trailing spaces
        reduced.length !== 0 && /\s$/.test(getLast$7(reduced)) ? reduced.concat(reduced.pop() + " " + word) : reduced.concat(word)
      );
    }, []);
  }).map(function (lineContentWords) {
    return options.proseWrap === "never" ? [lineContentWords.join(" ")] : lineContentWords;
  }));

  function removeUnnecessaryTrailingNewlines(lineContents) {
    if (node.chomping === "keep") {
      return getLast$7(lineContents).length === 0 ? lineContents.slice(0, -1) : lineContents;
    }

    var trailingNewlineCount = 0;

    for (var i = lineContents.length - 1; i >= 0; i--) {
      if (lineContents[i].length === 0) {
        trailingNewlineCount++;
      } else {
        break;
      }
    }

    return trailingNewlineCount === 0 ? lineContents : trailingNewlineCount >= 2 && !isLastDescendant ? // next empty line
    lineContents.slice(0, -(trailingNewlineCount - 1)) : lineContents.slice(0, -trailingNewlineCount);
  }
}

var utils$10 = {
  getLast: getLast$7,
  getAncestorCount: getAncestorCount$1,
  isNode: isNode$1,
  isEmptyNode: isEmptyNode$1,
  mapNode: mapNode$1,
  defineShortcut: defineShortcut$1,
  isNextLineEmpty: isNextLineEmpty$6,
  isLastDescendantNode: isLastDescendantNode$1,
  getBlockValueLineContents: getBlockValueLineContents$1,
  getFlowScalarLineContents: getFlowScalarLineContents$1,
  getLastDescendantNode: getLastDescendantNode$2,
  hasPrettierIgnore: hasPrettierIgnore$5,
  hasLeadingComments: hasLeadingComments$1,
  hasMiddleComments: hasMiddleComments$1,
  hasIndicatorComment: hasIndicatorComment$1,
  hasTrailingComment: hasTrailingComment$2,
  hasEndComments: hasEndComments$1
};

var insertPragma$8 = pragma$11.insertPragma;
var isPragma = pragma$11.isPragma;
var getAncestorCount = utils$10.getAncestorCount;
var getBlockValueLineContents = utils$10.getBlockValueLineContents;
var getFlowScalarLineContents = utils$10.getFlowScalarLineContents;
var getLast$6 = utils$10.getLast;
var getLastDescendantNode$1 = utils$10.getLastDescendantNode;
var hasLeadingComments = utils$10.hasLeadingComments;
var hasMiddleComments = utils$10.hasMiddleComments;
var hasIndicatorComment = utils$10.hasIndicatorComment;
var hasTrailingComment$1 = utils$10.hasTrailingComment;
var hasEndComments = utils$10.hasEndComments;
var hasPrettierIgnore$4 = utils$10.hasPrettierIgnore;
var isLastDescendantNode = utils$10.isLastDescendantNode;
var isNextLineEmpty$5 = utils$10.isNextLineEmpty;
var isNode = utils$10.isNode;
var isEmptyNode = utils$10.isEmptyNode;
var defineShortcut = utils$10.defineShortcut;
var mapNode = utils$10.mapNode;
var docBuilders$3 = doc.builders;
var conditionalGroup$2 = docBuilders$3.conditionalGroup;
var breakParent$4 = docBuilders$3.breakParent;
var concat$18 = docBuilders$3.concat;
var dedent$4 = docBuilders$3.dedent;
var dedentToRoot$2 = docBuilders$3.dedentToRoot;
var fill$6 = docBuilders$3.fill;
var group$16 = docBuilders$3.group;
var hardline$13 = docBuilders$3.hardline;
var ifBreak$7 = docBuilders$3.ifBreak;
var join$12 = docBuilders$3.join;
var line$11 = docBuilders$3.line;
var lineSuffix$2 = docBuilders$3.lineSuffix;
var literalline$7 = docBuilders$3.literalline;
var markAsRoot$5 = docBuilders$3.markAsRoot;
var softline$8 = docBuilders$3.softline;

function preprocess$6(ast) {
  return mapNode(ast, defineShortcuts);
}

function defineShortcuts(node) {
  switch (node.type) {
    case "document":
      defineShortcut(node, "head", function () {
        return node.children[0];
      });
      defineShortcut(node, "body", function () {
        return node.children[1];
      });
      break;

    case "documentBody":
    case "sequenceItem":
    case "flowSequenceItem":
    case "mappingKey":
    case "mappingValue":
      defineShortcut(node, "content", function () {
        return node.children[0];
      });
      break;

    case "mappingItem":
    case "flowMappingItem":
      defineShortcut(node, "key", function () {
        return node.children[0];
      });
      defineShortcut(node, "value", function () {
        return node.children[1];
      });
      break;
  }

  return node;
}

function genericPrint$6(path, options, print) {
  var node = path.getValue();
  var parentNode = path.getParentNode();
  var tag = !node.tag ? "" : path.call(print, "tag");
  var anchor = !node.anchor ? "" : path.call(print, "anchor");
  var nextEmptyLine = isNode(node, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !isLastDescendantNode(path) ? printNextEmptyLine(path, options.originalText) : "";
  return concat$18([node.type !== "mappingValue" && hasLeadingComments(node) ? concat$18([join$12(hardline$13, path.map(print, "leadingComments")), hardline$13]) : "", tag, tag && anchor ? " " : "", anchor, tag || anchor ? isNode(node, ["sequence", "mapping"]) && !hasMiddleComments(node) ? hardline$13 : " " : "", hasMiddleComments(node) ? concat$18([node.middleComments.length === 1 ? "" : hardline$13, join$12(hardline$13, path.map(print, "middleComments")), hardline$13]) : "", hasPrettierIgnore$4(path) ? options.originalText.slice(node.position.start.offset, node.position.end.offset) : group$16(_print(node, parentNode, path, options, print)), hasTrailingComment$1(node) && !isNode(node, ["document", "documentHead"]) ? lineSuffix$2(concat$18([node.type === "mappingValue" && !node.content ? "" : " ", parentNode.type === "mappingKey" && path.getParentNode(2).type === "mapping" && isInlineNode(node) ? "" : breakParent$4, path.call(print, "trailingComment")])) : "", nextEmptyLine, hasEndComments(node) && !isNode(node, ["documentHead", "documentBody"]) ? align$3(node.type === "sequenceItem" ? 2 : 0, concat$18([hardline$13, join$12(hardline$13, path.map(print, "endComments"))])) : ""]);
}

function _print(node, parentNode, path, options, print) {
  switch (node.type) {
    case "root":
      return concat$18([join$12(hardline$13, path.map(function (childPath, index) {
        var document = node.children[index];
        var nextDocument = node.children[index + 1];
        return concat$18([print(childPath), shouldPrintDocumentEndMarker(document, nextDocument) ? concat$18([hardline$13, "...", hasTrailingComment$1(document) ? concat$18([" ", path.call(print, "trailingComment")]) : ""]) : !nextDocument || hasTrailingComment$1(nextDocument.head) ? "" : concat$18([hardline$13, "---"])]);
      }, "children")), node.children.length === 0 || function (lastDescendantNode) {
        return isNode(lastDescendantNode, ["blockLiteral", "blockFolded"]) && lastDescendantNode.chomping === "keep";
      }(getLastDescendantNode$1(node)) ? "" : hardline$13]);

    case "document":
      {
        var nextDocument = parentNode.children[path.getName() + 1];
        return join$12(hardline$13, [shouldPrintDocumentHeadEndMarker(node, nextDocument) === "head" ? join$12(hardline$13, [node.head.children.length === 0 && node.head.endComments.length === 0 ? "" : path.call(print, "head"), concat$18(["---", hasTrailingComment$1(node.head) ? concat$18([" ", path.call(print, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", shouldPrintDocumentBody(node) ? path.call(print, "body") : ""].filter(Boolean));
      }

    case "documentHead":
      return join$12(hardline$13, [].concat(path.map(print, "children"), path.map(print, "endComments")));

    case "documentBody":
      {
        var children = join$12(hardline$13, path.map(print, "children")).parts;
        var endComments = join$12(hardline$13, path.map(print, "endComments")).parts;
        var separator = children.length === 0 || endComments.length === 0 ? "" : function (lastDescendantNode) {
          return isNode(lastDescendantNode, ["blockFolded", "blockLiteral"]) ? lastDescendantNode.chomping === "keep" ? // there's already a newline printed at the end of blockValue (chomping=keep, lastDescendant=true)
          "" : // an extra newline for better readability
          concat$18([hardline$13, hardline$13]) : hardline$13;
        }(getLastDescendantNode$1(node));
        return concat$18([].concat(children, separator, endComments));
      }

    case "directive":
      return concat$18(["%", join$12(" ", [node.name].concat(node.parameters))]);

    case "comment":
      return concat$18(["#", node.value]);

    case "alias":
      return concat$18(["*", node.value]);

    case "tag":
      return options.originalText.slice(node.position.start.offset, node.position.end.offset);

    case "anchor":
      return concat$18(["&", node.value]);

    case "plain":
      return printFlowScalarContent(node.type, options.originalText.slice(node.position.start.offset, node.position.end.offset), options);

    case "quoteDouble":
    case "quoteSingle":
      {
        var singleQuote = "'";
        var doubleQuote = '"';
        var raw = options.originalText.slice(node.position.start.offset + 1, node.position.end.offset - 1);

        if (node.type === "quoteSingle" && raw.includes("\\") || node.type === "quoteDouble" && /\\[^"]/.test(raw)) {
          // only quoteDouble can use escape chars
          // and quoteSingle do not need to escape backslashes
          var originalQuote = node.type === "quoteDouble" ? doubleQuote : singleQuote;
          return concat$18([originalQuote, printFlowScalarContent(node.type, raw, options), originalQuote]);
        } else if (raw.includes(doubleQuote)) {
          return concat$18([singleQuote, printFlowScalarContent(node.type, node.type === "quoteDouble" ? raw // double quote needs to be escaped by backslash in quoteDouble
          .replace(/\\"/g, doubleQuote).replace(/'/g, singleQuote.repeat(2)) : raw, options), singleQuote]);
        }

        if (raw.includes(singleQuote)) {
          return concat$18([doubleQuote, printFlowScalarContent(node.type, node.type === "quoteSingle" ? // single quote needs to be escaped by 2 single quotes in quoteSingle
          raw.replace(/''/g, singleQuote) : raw, options), doubleQuote]);
        }

        var quote = options.singleQuote ? singleQuote : doubleQuote;
        return concat$18([quote, printFlowScalarContent(node.type, raw, options), quote]);
      }

    case "blockFolded":
    case "blockLiteral":
      {
        var parentIndent = getAncestorCount(path, function (ancestorNode) {
          return isNode(ancestorNode, ["sequence", "mapping"]);
        });
        var isLastDescendant = isLastDescendantNode(path);
        return concat$18([node.type === "blockFolded" ? ">" : "|", node.indent === null ? "" : node.indent.toString(), node.chomping === "clip" ? "" : node.chomping === "keep" ? "+" : "-", hasIndicatorComment(node) ? concat$18([" ", path.call(print, "indicatorComment")]) : "", (node.indent === null ? dedent$4 : dedentToRoot$2)(align$3(node.indent === null ? options.tabWidth : node.indent - 1 + parentIndent, concat$18(getBlockValueLineContents(node, {
          parentIndent: parentIndent,
          isLastDescendant: isLastDescendant,
          options: options
        }).reduce(function (reduced, lineWords, index, lineContents) {
          return reduced.concat(index === 0 ? hardline$13 : "", fill$6(join$12(line$11, lineWords).parts), index !== lineContents.length - 1 ? lineWords.length === 0 ? hardline$13 : markAsRoot$5(literalline$7) : node.chomping === "keep" && isLastDescendant ? lineWords.length === 0 ? dedentToRoot$2(hardline$13) : dedentToRoot$2(literalline$7) : "");
        }, []))))]);
      }

    case "sequence":
      return join$12(hardline$13, path.map(print, "children"));

    case "sequenceItem":
      return concat$18(["- ", align$3(2, !node.content ? "" : path.call(print, "content"))]);

    case "mappingKey":
      return !node.content ? "" : path.call(print, "content");

    case "mappingValue":
      return !node.content ? "" : path.call(print, "content");

    case "mapping":
      return join$12(hardline$13, path.map(print, "children"));

    case "mappingItem":
    case "flowMappingItem":
      {
        var isEmptyMappingKey = isEmptyNode(node.key);
        var isEmptyMappingValue = isEmptyNode(node.value);

        if (isEmptyMappingKey && isEmptyMappingValue) {
          return concat$18([": "]);
        }

        var key = path.call(print, "key");
        var value = path.call(print, "value");

        if (isEmptyMappingValue) {
          return node.type === "flowMappingItem" && parentNode.type === "flowMapping" ? key : node.type === "mappingItem" && isAbsolutelyPrintedAsSingleLineNode(node.key.content, options) && !hasTrailingComment$1(node.key.content) && (!parentNode.tag || parentNode.tag.value !== "tag:yaml.org,2002:set") ? concat$18([key, needsSpaceInFrontOfMappingValue(node) ? " " : "", ":"]) : concat$18(["? ", align$3(2, key)]);
        }

        if (isEmptyMappingKey) {
          return concat$18([": ", align$3(2, value)]);
        }

        var groupId = Symbol("mappingKey");
        var forceExplicitKey = hasLeadingComments(node.value) || !isInlineNode(node.key.content);
        return forceExplicitKey ? concat$18(["? ", align$3(2, key), hardline$13, join$12("", path.map(print, "value", "leadingComments").map(function (comment) {
          return concat$18([comment, hardline$13]);
        })), ": ", align$3(2, value)]) : // force singleline
        isSingleLineNode(node.key.content) && !hasLeadingComments(node.key.content) && !hasMiddleComments(node.key.content) && !hasTrailingComment$1(node.key.content) && !hasEndComments(node.key) && !hasLeadingComments(node.value.content) && !hasMiddleComments(node.value.content) && !hasEndComments(node.value) && isAbsolutelyPrintedAsSingleLineNode(node.value.content, options) ? concat$18([key, needsSpaceInFrontOfMappingValue(node) ? " " : "", ": ", value]) : conditionalGroup$2([concat$18([group$16(concat$18([ifBreak$7("? "), group$16(align$3(2, key), {
          id: groupId
        })])), ifBreak$7(concat$18([hardline$13, ": ", align$3(2, value)]), indent(concat$18([needsSpaceInFrontOfMappingValue(node) ? " " : "", ":", hasLeadingComments(node.value.content) || hasEndComments(node.value) && node.value.content && !isNode(node.value.content, ["mapping", "sequence"]) || parentNode.type === "mapping" && hasTrailingComment$1(node.key.content) && isInlineNode(node.value.content) || isNode(node.value.content, ["mapping", "sequence"]) && node.value.content.tag === null && node.value.content.anchor === null ? hardline$13 : !node.value.content ? "" : line$11, value])), {
          groupId: groupId
        })])]);
      }

    case "flowMapping":
    case "flowSequence":
      {
        var openMarker = node.type === "flowMapping" ? "{" : "[";
        var closeMarker = node.type === "flowMapping" ? "}" : "]";
        var bracketSpacing = node.type === "flowMapping" && node.children.length !== 0 && options.bracketSpacing ? line$11 : softline$8;

        var isLastItemEmptyMappingItem = node.children.length !== 0 && function (lastItem) {
          return lastItem.type === "flowMappingItem" && isEmptyNode(lastItem.key) && isEmptyNode(lastItem.value);
        }(getLast$6(node.children));

        return concat$18([openMarker, indent(concat$18([bracketSpacing, concat$18(path.map(function (childPath, index) {
          return concat$18([print(childPath), index === node.children.length - 1 ? "" : concat$18([",", line$11, node.children[index].position.start.line !== node.children[index + 1].position.start.line ? printNextEmptyLine(childPath, options.originalText) : ""])]);
        }, "children")), ifBreak$7(",", "")])), isLastItemEmptyMappingItem ? "" : bracketSpacing, closeMarker]);
      }

    case "flowSequenceItem":
      return path.call(print, "content");
    // istanbul ignore next

    default:
      throw new Error("Unexpected node type ".concat(node.type));
  }

  function indent(doc$$2) {
    return docBuilders$3.align(" ".repeat(options.tabWidth), doc$$2);
  }
}

function align$3(n, doc$$2) {
  return typeof n === "number" && n > 0 ? docBuilders$3.align(" ".repeat(n), doc$$2) : docBuilders$3.align(n, doc$$2);
}

function isInlineNode(node) {
  if (!node) {
    return true;
  }

  switch (node.type) {
    case "plain":
    case "quoteDouble":
    case "quoteSingle":
    case "alias":
    case "flowMapping":
    case "flowSequence":
      return true;

    default:
      return false;
  }
}

function isSingleLineNode(node) {
  if (!node) {
    return true;
  }

  switch (node.type) {
    case "plain":
    case "quoteDouble":
    case "quoteSingle":
      return node.position.start.line === node.position.end.line;

    case "alias":
      return true;

    default:
      return false;
  }
}

function shouldPrintDocumentBody(document) {
  return document.body.children.length !== 0 || hasEndComments(document.body);
}

function shouldPrintDocumentEndMarker(document, nextDocument) {
  return (
    /**
     *... # trailingComment
     */
    hasTrailingComment$1(document) || nextDocument && (
    /**
     * ...
     * %DIRECTIVE
     * ---
     */
    nextDocument.head.children.length !== 0 ||
    /**
     * ...
     * # endComment
     * ---
     */
    hasEndComments(nextDocument.head))
  );
}

function shouldPrintDocumentHeadEndMarker(document, nextDocument) {
  if (
  /**
   * %DIRECTIVE
   * ---
   */
  document.head.children.length !== 0 ||
  /**
   * # end comment
   * ---
   */
  hasEndComments(document.head) ||
  /**
   * --- # trailing comment
   */
  hasTrailingComment$1(document.head)) {
    return "head";
  }

  if (shouldPrintDocumentEndMarker(document, nextDocument)) {
    return false;
  }

  return nextDocument ? "root" : false;
}

function isAbsolutelyPrintedAsSingleLineNode(node, options) {
  if (!node) {
    return true;
  }

  switch (node.type) {
    case "plain":
    case "quoteSingle":
    case "quoteDouble":
      break;

    case "alias":
      return true;

    default:
      return false;
  }

  if (options.proseWrap === "preserve") {
    return node.position.start.line === node.position.end.line;
  }

  if ( // backslash-newline
  /\\$/m.test(options.originalText.slice(node.position.start.offset, node.position.end.offset))) {
    return false;
  }

  switch (options.proseWrap) {
    case "never":
      return node.value.indexOf("\n") === -1;

    case "always":
      return !/[\n ]/.test(node.value);
    // istanbul ignore next

    default:
      return false;
  }
}

function needsSpaceInFrontOfMappingValue(node) {
  return node.key.content && node.key.content.type === "alias";
}

function printNextEmptyLine(path, originalText) {
  var node = path.getValue();
  var root = path.stack[0];
  root.isNextEmptyLinePrintedChecklist = root.isNextEmptyLinePrintedChecklist || [];

  if (!root.isNextEmptyLinePrintedChecklist[node.position.end.line]) {
    if (isNextLineEmpty$5(node, originalText)) {
      root.isNextEmptyLinePrintedChecklist[node.position.end.line] = true;
      return softline$8;
    }
  }

  return "";
}

function printFlowScalarContent(nodeType, content, options) {
  var lineContents = getFlowScalarLineContents(nodeType, content, options);
  return join$12(hardline$13, lineContents.map(function (lineContentWords) {
    return fill$6(join$12(line$11, lineContentWords).parts);
  }));
}

function clean$11(node, newNode
/*, parent */
) {
  if (isNode(newNode)) {
    delete newNode.position;

    switch (newNode.type) {
      case "comment":
        // insert pragma
        if (isPragma(newNode.value)) {
          return null;
        }

        break;

      case "quoteDouble":
      case "quoteSingle":
        newNode.type = "quote";
        break;
    }
  }
}

var printerYaml = {
  preprocess: preprocess$6,
  print: genericPrint$6,
  massageAstNode: clean$11,
  insertPragma: insertPragma$8
};

var options$18 = {
  bracketSpacing: commonOptions.bracketSpacing,
  singleQuote: commonOptions.singleQuote,
  proseWrap: commonOptions.proseWrap
};

var name$16 = "YAML";
var type$15 = "data";
var tmScope$15 = "source.yaml";
var aliases$6 = ["yml"];
var extensions$15 = [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yml.mysql"];
var filenames$3 = [".clang-format", ".clang-tidy", ".gemrc", "glide.lock"];
var aceMode$15 = "yaml";
var codemirrorMode$11 = "yaml";
var codemirrorMimeType$11 = "text/x-yaml";
var languageId$15 = 407;
var yaml = {
  name: name$16,
  type: type$15,
  tmScope: tmScope$15,
  aliases: aliases$6,
  extensions: extensions$15,
  filenames: filenames$3,
  aceMode: aceMode$15,
  codemirrorMode: codemirrorMode$11,
  codemirrorMimeType: codemirrorMimeType$11,
  languageId: languageId$15
};

var yaml$1 = Object.freeze({
	name: name$16,
	type: type$15,
	tmScope: tmScope$15,
	aliases: aliases$6,
	extensions: extensions$15,
	filenames: filenames$3,
	aceMode: aceMode$15,
	codemirrorMode: codemirrorMode$11,
	codemirrorMimeType: codemirrorMimeType$11,
	languageId: languageId$15,
	default: yaml
});

var require$$0$27 = ( yaml$1 && yaml ) || yaml$1;

var languages$6 = [createLanguage(require$$0$27, {
  override: {
    since: "1.14.0",
    parsers: ["yaml"],
    vscodeLanguageIds: ["yaml"]
  }
})];
var languageYaml = {
  languages: languages$6,
  printers: {
    yaml: printerYaml
  },
  options: options$18
};

var version = require$$0.version;
var getSupportInfo = support.getSupportInfo;
var internalPlugins = [languageCss, languageGraphql, languageHandlebars, languageHtml, languageJs, languageMarkdown, languageYaml];

var isArray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}; // Luckily `opts` is always the 2nd argument


function withPlugins(fn) {
  return function () {
    var args = Array.from(arguments);
    var plugins = args[1] && args[1].plugins || [];

    if (!isArray(plugins)) {
      plugins = Object.values(plugins);
    }

    args[1] = Object.assign({}, args[1], {
      plugins: internalPlugins.concat(plugins)
    });
    return fn.apply(null, args);
  };
}

var formatWithCursor = withPlugins(core.formatWithCursor);
var standalone$2 = {
  formatWithCursor: formatWithCursor,
  format: function format(text, opts) {
    return formatWithCursor(text, opts).formatted;
  },
  check: function check(text, opts) {
    var formatted = formatWithCursor(text, opts).formatted;
    return formatted === text;
  },
  doc: doc,
  getSupportInfo: withPlugins(getSupportInfo),
  version: version,
  util: utilShared,
  __debug: {
    parse: withPlugins(core.parse),
    formatAST: withPlugins(core.formatAST),
    formatDoc: withPlugins(core.formatDoc),
    printToDoc: withPlugins(core.printToDoc),
    printDocToString: withPlugins(core.printDocToString)
  }
};

var standalone = standalone$2;

return standalone;

})));
