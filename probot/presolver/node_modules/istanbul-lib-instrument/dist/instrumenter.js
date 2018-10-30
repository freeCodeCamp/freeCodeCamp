'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyright 2012-2015, Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _babylon = require('babylon');

var babylon = _interopRequireWildcard(_babylon);

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _babelGenerator = require('babel-generator');

var _babelGenerator2 = _interopRequireDefault(_babelGenerator);

var _visitor = require('./visitor');

var _visitor2 = _interopRequireDefault(_visitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function defaultOpts() {
    return {
        coverageVariable: "__coverage__",
        preserveComments: false,
        compact: true,
        esModules: false,
        autoWrap: false,
        produceSourceMap: false,
        sourceMapUrlCallback: null,
        debug: false
    };
}
/**
 * Instrumenter is the public API for the instrument library.
 * It is typically used for ES5 code. For ES6 code that you
 * are already running under `babel` use the coverage plugin
 * instead.
 * @param {Object} opts optional.
 * @param {string} [opts.coverageVariable=__coverage__] name of global coverage variable.
 * @param {boolean} [opts.preserveComments=false] preserve comments in output
 * @param {boolean} [opts.compact=true] generate compact code.
 * @param {boolean} [opts.esModules=false] set to true to instrument ES6 modules.
 * @param {boolean} [opts.autoWrap=false] set to true to allow `return` statements outside of functions.
 * @param {boolean} [opts.produceSourceMap=false] set to true to produce a source map for the instrumented code.
 * @param {Function} [opts.sourceMapUrlCallback=null] a callback function that is called when a source map URL
 *     is found in the original code. This function is called with the source file name and the source map URL.
 * @param {boolean} [opts.debug=false] - turn debugging on
 */

var Instrumenter = function () {
    function Instrumenter() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOpts();

        _classCallCheck(this, Instrumenter);

        this.opts = this.normalizeOpts(opts);
        this.fileCoverage = null;
        this.sourceMap = null;
    }
    /**
     * normalize options passed in and assign defaults.
     * @param opts
     * @private
     */


    _createClass(Instrumenter, [{
        key: 'normalizeOpts',
        value: function normalizeOpts(opts) {
            var normalize = function normalize(name, defaultValue) {
                if (!opts.hasOwnProperty(name)) {
                    opts[name] = defaultValue;
                }
            };
            var defOpts = defaultOpts();
            Object.keys(defOpts).forEach(function (k) {
                normalize(k, defOpts[k]);
            });
            return opts;
        }
        /**
         * instrument the supplied code and track coverage against the supplied
         * filename. It throws if invalid code is passed to it. ES5 and ES6 syntax
         * is supported. To instrument ES6 modules, make sure that you set the
         * `esModules` property to `true` when creating the instrumenter.
         *
         * @param {string} code - the code to instrument
         * @param {string} filename - the filename against which to track coverage.
         * @param {object} [inputSourceMap] - the source map that maps the not instrumented code back to it's original form.
         * Is assigned to the coverage object and therefore, is available in the json output and can be used to remap the
         * coverage to the untranspiled source.
         * @returns {string} the instrumented code.
         */

    }, {
        key: 'instrumentSync',
        value: function instrumentSync(code, filename, inputSourceMap) {
            if (typeof code !== 'string') {
                throw new Error('Code must be a string');
            }
            filename = filename || String(new Date().getTime()) + '.js';
            var opts = this.opts;
            var ast = babylon.parse(code, {
                allowReturnOutsideFunction: opts.autoWrap,
                sourceType: opts.esModules ? "module" : "script",
                plugins: ['asyncGenerators', 'dynamicImport', 'objectRestSpread', 'flow', 'jsx']
            });
            var ee = (0, _visitor2.default)(t, filename, {
                coverageVariable: opts.coverageVariable,
                inputSourceMap: inputSourceMap
            });
            var output = {};
            var visitor = {
                Program: {
                    enter: ee.enter,
                    exit: function exit(path) {
                        output = ee.exit(path);
                    }
                }
            };
            (0, _babelTraverse2.default)(ast, visitor);

            var generateOptions = {
                compact: opts.compact,
                comments: opts.preserveComments,
                sourceMaps: opts.produceSourceMap,
                sourceFileName: filename
            };
            var codeMap = (0, _babelGenerator2.default)(ast, generateOptions, code);
            this.fileCoverage = output.fileCoverage;
            this.sourceMap = codeMap.map;
            var cb = this.opts.sourceMapUrlCallback;
            if (cb && output.sourceMappingURL) {
                cb(filename, output.sourceMappingURL);
            }
            return codeMap.code;
        }
        /**
         * callback-style instrument method that calls back with an error
         * as opposed to throwing one. Note that in the current implementation,
         * the callback will be called in the same process tick and is not asynchronous.
         *
         * @param {string} code - the code to instrument
         * @param {string} filename - the filename against which to track coverage.
         * @param {Function} callback - the callback
         * @param {Object} inputSourceMap - the source map that maps the not instrumented code back to it's original form.
         * Is assigned to the coverage object and therefore, is available in the json output and can be used to remap the
         * coverage to the untranspiled source.
         */

    }, {
        key: 'instrument',
        value: function instrument(code, filename, callback, inputSourceMap) {
            if (!callback && typeof filename === 'function') {
                callback = filename;
                filename = null;
            }
            try {
                var out = this.instrumentSync(code, filename, inputSourceMap);
                callback(null, out);
            } catch (ex) {
                callback(ex);
            }
        }
        /**
         * returns the file coverage object for the last file instrumented.
         * @returns {Object} the file coverage object.
         */

    }, {
        key: 'lastFileCoverage',
        value: function lastFileCoverage() {
            return this.fileCoverage;
        }
        /**
         * returns the source map produced for the last file instrumented.
         * @returns {null|Object} the source map object.
         */

    }, {
        key: 'lastSourceMap',
        value: function lastSourceMap() {
            return this.sourceMap;
        }
    }]);

    return Instrumenter;
}();

exports.default = Instrumenter;