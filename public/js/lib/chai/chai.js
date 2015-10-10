
(function(){

    /**
     * Require the module at `name`.
     *
     * @param {String} name
     * @return {Object} exports
     * @api public
     */

    function require(name) {
        var module = require.modules[name];
        if (!module) throw new Error('failed to require "' + name + '"');

        if (!('exports' in module) && typeof module.definition === 'function') {
            module.client = module.component = true;
            module.definition.call(this, module.exports = {}, module);
            delete module.definition;
        }

        return module.exports;
    }

    /**
     * Meta info, accessible in the global scope unless you use AMD option.
     */

    require.loader = 'component';

    /**
     * Internal helper object, contains a sorting function for semantiv versioning
     */
    require.helper = {};
    require.helper.semVerSort = function(a, b) {
        var aArray = a.version.split('.');
        var bArray = b.version.split('.');
        for (var i=0; i<aArray.length; ++i) {
            var aInt = parseInt(aArray[i], 10);
            var bInt = parseInt(bArray[i], 10);
            if (aInt === bInt) {
                var aLex = aArray[i].substr((""+aInt).length);
                var bLex = bArray[i].substr((""+bInt).length);
                if (aLex === '' && bLex !== '') return 1;
                if (aLex !== '' && bLex === '') return -1;
                if (aLex !== '' && bLex !== '') return aLex > bLex ? 1 : -1;
                continue;
            } else if (aInt > bInt) {
                return 1;
            } else {
                return -1;
            }
        }
        return 0;
    }

    /**
     * Find and require a module which name starts with the provided name.
     * If multiple modules exists, the highest semver is used.
     * This function can only be used for remote dependencies.

     * @param {String} name - module name: `user~repo`
     * @param {Boolean} returnPath - returns the canonical require path if true,
     *                               otherwise it returns the epxorted module
     */
    require.latest = function (name, returnPath) {
        function showError(name) {
            throw new Error('failed to find latest module of "' + name + '"');
        }
        // only remotes with semvers, ignore local files conataining a '/'
        var versionRegexp = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;
        var remoteRegexp = /(.*)~(.*)/;
        if (!remoteRegexp.test(name)) showError(name);
        var moduleNames = Object.keys(require.modules);
        var semVerCandidates = [];
        var otherCandidates = []; // for instance: name of the git branch
        for (var i=0; i<moduleNames.length; i++) {
            var moduleName = moduleNames[i];
            if (new RegExp(name + '@').test(moduleName)) {
                var version = moduleName.substr(name.length+1);
                var semVerMatch = versionRegexp.exec(moduleName);
                if (semVerMatch != null) {
                    semVerCandidates.push({version: version, name: moduleName});
                } else {
                    otherCandidates.push({version: version, name: moduleName});
                }
            }
        }
        if (semVerCandidates.concat(otherCandidates).length === 0) {
            showError(name);
        }
        if (semVerCandidates.length > 0) {
            var module = semVerCandidates.sort(require.helper.semVerSort).pop().name;
            if (returnPath === true) {
                return module;
            }
            return require(module);
        }
        // if the build contains more than one branch of the same module
        // you should not use this funciton
        var module = otherCandidates.pop().name;
        if (returnPath === true) {
            return module;
        }
        return require(module);
    }

    /**
     * Registered modules.
     */

    require.modules = {};

    /**
     * Register module at `name` with callback `definition`.
     *
     * @param {String} name
     * @param {Function} definition
     * @api private
     */

    require.register = function (name, definition) {
        require.modules[name] = {
            definition: definition
        };
    };

    /**
     * Define a module's exports immediately with `exports`.
     *
     * @param {String} name
     * @param {Generic} exports
     * @api private
     */

    require.define = function (name, exports) {
        require.modules[name] = {
            exports: exports
        };
    };
    require.register("chaijs~assertion-error@1.0.0", function (exports, module) {
        /*!
         * assertion-error
         * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
         * MIT Licensed
         */

        /*!
         * Return a function that will copy properties from
         * one object to another excluding any originally
         * listed. Returned function will create a new `{}`.
         *
         * @param {String} excluded properties ...
         * @return {Function}
         */

        function exclude () {
            var excludes = [].slice.call(arguments);

            function excludeProps (res, obj) {
                Object.keys(obj).forEach(function (key) {
                    if (!~excludes.indexOf(key)) res[key] = obj[key];
                });
            }

            return function extendExclude () {
                var args = [].slice.call(arguments)
                    , i = 0
                    , res = {};

                for (; i < args.length; i++) {
                    excludeProps(res, args[i]);
                }

                return res;
            };
        };

        /*!
         * Primary Exports
         */

        module.exports = AssertionError;

        /**
         * ### AssertionError
         *
         * An extension of the JavaScript `Error` constructor for
         * assertion and validation scenarios.
         *
         * @param {String} message
         * @param {Object} properties to include (optional)
         * @param {callee} start stack function (optional)
         */

        function AssertionError (message, _props, ssf) {
            var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
                , props = extend(_props || {});

            // default values
            this.message = message || 'Unspecified AssertionError';
            this.showDiff = false;

            // copy from properties
            for (var key in props) {
                this[key] = props[key];
            }

            // capture stack trace
            ssf = ssf || arguments.callee;
            if (ssf && Error.captureStackTrace) {
                Error.captureStackTrace(this, ssf);
            }
        }

        /*!
         * Inherit from Error.prototype
         */

        AssertionError.prototype = Object.create(Error.prototype);

        /*!
         * Statically set name
         */

        AssertionError.prototype.name = 'AssertionError';

        /*!
         * Ensure correct constructor
         */

        AssertionError.prototype.constructor = AssertionError;

        /**
         * Allow errors to be converted to JSON for static transfer.
         *
         * @param {Boolean} include stack (default: `true`)
         * @return {Object} object that can be `JSON.stringify`
         */

        AssertionError.prototype.toJSON = function (stack) {
            var extend = exclude('constructor', 'toJSON', 'stack')
                , props = extend({ name: this.name }, this);

            // include stack if exists and not turned off
            if (false !== stack && this.stack) {
                props.stack = this.stack;
            }

            return props;
        };

    });

    require.register("chaijs~type-detect@0.1.1", function (exports, module) {
        /*!
         * type-detect
         * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Primary Exports
         */

        var exports = module.exports = getType;

        /*!
         * Detectable javascript natives
         */

        var natives = {
            '[object Array]': 'array'
            , '[object RegExp]': 'regexp'
            , '[object Function]': 'function'
            , '[object Arguments]': 'arguments'
            , '[object Date]': 'date'
        };

        /**
         * ### typeOf (obj)
         *
         * Use several different techniques to determine
         * the type of object being tested.
         *
         *
         * @param {Mixed} object
         * @return {String} object type
         * @api public
         */

        function getType (obj) {
            var str = Object.prototype.toString.call(obj);
            if (natives[str]) return natives[str];
            if (obj === null) return 'null';
            if (obj === undefined) return 'undefined';
            if (obj === Object(obj)) return 'object';
            return typeof obj;
        }

        exports.Library = Library;

        /**
         * ### Library
         *
         * Create a repository for custom type detection.
         *
         * ```js
         * var lib = new type.Library;
         * ```
         *
         */

        function Library () {
            this.tests = {};
        }

        /**
         * #### .of (obj)
         *
         * Expose replacement `typeof` detection to the library.
         *
         * ```js
         * if ('string' === lib.of('hello world')) {
 *   // ...
 * }
         * ```
         *
         * @param {Mixed} object to test
         * @return {String} type
         */

        Library.prototype.of = getType;

        /**
         * #### .define (type, test)
         *
         * Add a test to for the `.test()` assertion.
         *
         * Can be defined as a regular expression:
         *
         * ```js
         * lib.define('int', /^[0-9]+$/);
         * ```
         *
         * ... or as a function:
         *
         * ```js
         * lib.define('bln', function (obj) {
 *   if ('boolean' === lib.of(obj)) return true;
 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
 *   return !! ~blns.indexOf(obj);
 * });
         * ```
         *
         * @param {String} type
         * @param {RegExp|Function} test
         * @api public
         */

        Library.prototype.define = function (type, test) {
            if (arguments.length === 1) return this.tests[type];
            this.tests[type] = test;
            return this;
        };

        /**
         * #### .test (obj, test)
         *
         * Assert that an object is of type. Will first
         * check natives, and if that does not pass it will
         * use the user defined custom tests.
         *
         * ```js
         * assert(lib.test('1', 'int'));
         * assert(lib.test('yes', 'bln'));
         * ```
         *
         * @param {Mixed} object
         * @param {String} type
         * @return {Boolean} result
         * @api public
         */

        Library.prototype.test = function (obj, type) {
            if (type === getType(obj)) return true;
            var test = this.tests[type];

            if (test && 'regexp' === getType(test)) {
                return test.test(obj);
            } else if (test && 'function' === getType(test)) {
                return test(obj);
            } else {
                throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
            }
        };

    });

    require.register("chaijs~deep-eql@0.1.3", function (exports, module) {
        /*!
         * deep-eql
         * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependencies
         */

        var type = require('chaijs~type-detect@0.1.1');

        /*!
         * Buffer.isBuffer browser shim
         */

        var Buffer;
        try { Buffer = require('buffer').Buffer; }
        catch(ex) {
            Buffer = {};
            Buffer.isBuffer = function() { return false; }
        }

        /*!
         * Primary Export
         */

        module.exports = deepEqual;

        /**
         * Assert super-strict (egal) equality between
         * two objects of any type.
         *
         * @param {Mixed} a
         * @param {Mixed} b
         * @param {Array} memoised (optional)
         * @return {Boolean} equal match
         */

        function deepEqual(a, b, m) {
            if (sameValue(a, b)) {
                return true;
            } else if ('date' === type(a)) {
                return dateEqual(a, b);
            } else if ('regexp' === type(a)) {
                return regexpEqual(a, b);
            } else if (Buffer.isBuffer(a)) {
                return bufferEqual(a, b);
            } else if ('arguments' === type(a)) {
                return argumentsEqual(a, b, m);
            } else if (!typeEqual(a, b)) {
                return false;
            } else if (('object' !== type(a) && 'object' !== type(b))
                && ('array' !== type(a) && 'array' !== type(b))) {
                return sameValue(a, b);
            } else {
                return objectEqual(a, b, m);
            }
        }

        /*!
         * Strict (egal) equality test. Ensures that NaN always
         * equals NaN and `-0` does not equal `+0`.
         *
         * @param {Mixed} a
         * @param {Mixed} b
         * @return {Boolean} equal match
         */

        function sameValue(a, b) {
            if (a === b) return a !== 0 || 1 / a === 1 / b;
            return a !== a && b !== b;
        }

        /*!
         * Compare the types of two given objects and
         * return if they are equal. Note that an Array
         * has a type of `array` (not `object`) and arguments
         * have a type of `arguments` (not `array`/`object`).
         *
         * @param {Mixed} a
         * @param {Mixed} b
         * @return {Boolean} result
         */

        function typeEqual(a, b) {
            return type(a) === type(b);
        }

        /*!
         * Compare two Date objects by asserting that
         * the time values are equal using `saveValue`.
         *
         * @param {Date} a
         * @param {Date} b
         * @return {Boolean} result
         */

        function dateEqual(a, b) {
            if ('date' !== type(b)) return false;
            return sameValue(a.getTime(), b.getTime());
        }

        /*!
         * Compare two regular expressions by converting them
         * to string and checking for `sameValue`.
         *
         * @param {RegExp} a
         * @param {RegExp} b
         * @return {Boolean} result
         */

        function regexpEqual(a, b) {
            if ('regexp' !== type(b)) return false;
            return sameValue(a.toString(), b.toString());
        }

        /*!
         * Assert deep equality of two `arguments` objects.
         * Unfortunately, these must be sliced to arrays
         * prior to test to ensure no bad behavior.
         *
         * @param {Arguments} a
         * @param {Arguments} b
         * @param {Array} memoize (optional)
         * @return {Boolean} result
         */

        function argumentsEqual(a, b, m) {
            if ('arguments' !== type(b)) return false;
            a = [].slice.call(a);
            b = [].slice.call(b);
            return deepEqual(a, b, m);
        }

        /*!
         * Get enumerable properties of a given object.
         *
         * @param {Object} a
         * @return {Array} property names
         */

        function enumerable(a) {
            var res = [];
            for (var key in a) res.push(key);
            return res;
        }

        /*!
         * Simple equality for flat iterable objects
         * such as Arrays or Node.js buffers.
         *
         * @param {Iterable} a
         * @param {Iterable} b
         * @return {Boolean} result
         */

        function iterableEqual(a, b) {
            if (a.length !==  b.length) return false;

            var i = 0;
            var match = true;

            for (; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    match = false;
                    break;
                }
            }

            return match;
        }

        /*!
         * Extension to `iterableEqual` specifically
         * for Node.js Buffers.
         *
         * @param {Buffer} a
         * @param {Mixed} b
         * @return {Boolean} result
         */

        function bufferEqual(a, b) {
            if (!Buffer.isBuffer(b)) return false;
            return iterableEqual(a, b);
        }

        /*!
         * Block for `objectEqual` ensuring non-existing
         * values don't get in.
         *
         * @param {Mixed} object
         * @return {Boolean} result
         */

        function isValue(a) {
            return a !== null && a !== undefined;
        }

        /*!
         * Recursively check the equality of two objects.
         * Once basic sameness has been established it will
         * defer to `deepEqual` for each enumerable key
         * in the object.
         *
         * @param {Mixed} a
         * @param {Mixed} b
         * @return {Boolean} result
         */

        function objectEqual(a, b, m) {
            if (!isValue(a) || !isValue(b)) {
                return false;
            }

            if (a.prototype !== b.prototype) {
                return false;
            }

            var i;
            if (m) {
                for (i = 0; i < m.length; i++) {
                    if ((m[i][0] === a && m[i][1] === b)
                        ||  (m[i][0] === b && m[i][1] === a)) {
                        return true;
                    }
                }
            } else {
                m = [];
            }

            try {
                var ka = enumerable(a);
                var kb = enumerable(b);
            } catch (ex) {
                return false;
            }

            ka.sort();
            kb.sort();

            if (!iterableEqual(ka, kb)) {
                return false;
            }

            m.push([ a, b ]);

            var key;
            for (i = ka.length - 1; i >= 0; i--) {
                key = ka[i];
                if (!deepEqual(a[key], b[key], m)) {
                    return false;
                }
            }

            return true;
        }

    });

    require.register("chai", function (exports, module) {
        module.exports = require('chai/lib/chai.js');

    });

    require.register("chai/lib/chai.js", function (exports, module) {
        /*!
         * chai
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        var used = []
            , exports = module.exports = {};

        /*!
         * Chai version
         */

        exports.version = '1.10.0';

        /*!
         * Assertion Error
         */

        exports.AssertionError = require('chaijs~assertion-error@1.0.0');

        /*!
         * Utils for plugins (not exported)
         */

        var util = require('chai/lib/chai/utils/index.js');

        /**
         * # .use(function)
         *
         * Provides a way to extend the internals of Chai
         *
         * @param {Function}
         * @returns {this} for chaining
         * @api public
         */

        exports.use = function (fn) {
            if (!~used.indexOf(fn)) {
                fn(this, util);
                used.push(fn);
            }

            return this;
        };

        /*!
         * Configuration
         */

        var config = require('chai/lib/chai/config.js');
        exports.config = config;

        /*!
         * Primary `Assertion` prototype
         */

        var assertion = require('chai/lib/chai/assertion.js');
        exports.use(assertion);

        /*!
         * Core Assertions
         */

        var core = require('chai/lib/chai/core/assertions.js');
        exports.use(core);

        /*!
         * Expect interface
         */

        var expect = require('chai/lib/chai/interface/expect.js');
        exports.use(expect);

        /*!
         * Should interface
         */

        var should = require('chai/lib/chai/interface/should.js');
        exports.use(should);

        /*!
         * Assert interface
         */

        var assert = require('chai/lib/chai/interface/assert.js');
        exports.use(assert);

    });

    require.register("chai/lib/chai/assertion.js", function (exports, module) {
        /*!
         * chai
         * http://chaijs.com
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        var config = require('chai/lib/chai/config.js');
        var NOOP = function() { };

        module.exports = function (_chai, util) {
            /*!
             * Module dependencies.
             */

            var AssertionError = _chai.AssertionError
                , flag = util.flag;

            /*!
             * Module export.
             */

            _chai.Assertion = Assertion;

            /*!
             * Assertion Constructor
             *
             * Creates object for chaining.
             *
             * @api private
             */

            function Assertion (obj, msg, stack) {
                flag(this, 'ssfi', stack || arguments.callee);
                flag(this, 'object', obj);
                flag(this, 'message', msg);
            }

            Object.defineProperty(Assertion, 'includeStack', {
                get: function() {
                    console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
                    return config.includeStack;
                },
                set: function(value) {
                    console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
                    config.includeStack = value;
                }
            });

            Object.defineProperty(Assertion, 'showDiff', {
                get: function() {
                    console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
                    return config.showDiff;
                },
                set: function(value) {
                    console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
                    config.showDiff = value;
                }
            });

            Assertion.addProperty = function (name, fn) {
                util.addProperty(this.prototype, name, fn);
            };

            Assertion.addMethod = function (name, fn) {
                util.addMethod(this.prototype, name, fn);
            };

            Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
                util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
            };

            Assertion.addChainableNoop = function(name, fn) {
                util.addChainableMethod(this.prototype, name, NOOP, fn);
            };

            Assertion.overwriteProperty = function (name, fn) {
                util.overwriteProperty(this.prototype, name, fn);
            };

            Assertion.overwriteMethod = function (name, fn) {
                util.overwriteMethod(this.prototype, name, fn);
            };

            Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
                util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
            };

            /*!
             * ### .assert(expression, message, negateMessage, expected, actual)
             *
             * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
             *
             * @name assert
             * @param {Philosophical} expression to be tested
             * @param {String or Function} message or function that returns message to display if fails
             * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
             * @param {Mixed} expected value (remember to check for negation)
             * @param {Mixed} actual (optional) will default to `this.obj`
             * @api private
             */

            Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
                var ok = util.test(this, arguments);
                if (true !== showDiff) showDiff = false;
                if (true !== config.showDiff) showDiff = false;

                if (!ok) {
                    var msg = util.getMessage(this, arguments)
                        , actual = util.getActual(this, arguments);
                    throw new AssertionError(msg, {
                        actual: actual
                        , expected: expected
                        , showDiff: showDiff
                    }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
                }
            };

            /*!
             * ### ._obj
             *
             * Quick reference to stored `actual` value for plugin developers.
             *
             * @api private
             */

            Object.defineProperty(Assertion.prototype, '_obj',
                { get: function () {
                    return flag(this, 'object');
                }
                    , set: function (val) {
                    flag(this, 'object', val);
                }
                });
        };

    });

    require.register("chai/lib/chai/config.js", function (exports, module) {
        module.exports = {

            /**
             * ### config.includeStack
             *
             * User configurable property, influences whether stack trace
             * is included in Assertion error message. Default of false
             * suppresses stack trace in the error message.
             *
             *     chai.config.includeStack = true;  // enable stack on error
             *
             * @param {Boolean}
             * @api public
             */

            includeStack: false,

            /**
             * ### config.showDiff
             *
             * User configurable property, influences whether or not
             * the `showDiff` flag should be included in the thrown
             * AssertionErrors. `false` will always be `false`; `true`
             * will be true when the assertion has requested a diff
             * be shown.
             *
             * @param {Boolean}
             * @api public
             */

            showDiff: true,

            /**
             * ### config.truncateThreshold
             *
             * User configurable property, sets length threshold for actual and
             * expected values in assertion errors. If this threshold is exceeded,
             * the value is truncated.
             *
             * Set it to zero if you want to disable truncating altogether.
             *
             *     chai.config.truncateThreshold = 0;  // disable truncating
             *
             * @param {Number}
             * @api public
             */

            truncateThreshold: 40

        };

    });

    require.register("chai/lib/chai/core/assertions.js", function (exports, module) {
        /*!
         * chai
         * http://chaijs.com
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, _) {
            var Assertion = chai.Assertion
                , toString = Object.prototype.toString
                , flag = _.flag;

            /**
             * ### Language Chains
             *
             * The following are provided as chainable getters to
             * improve the readability of your assertions. They
             * do not provide testing capabilities unless they
             * have been overwritten by a plugin.
             *
             * **Chains**
             *
             * - to
             * - be
             * - been
             * - is
             * - that
             * - and
             * - has
             * - have
             * - with
             * - at
             * - of
             * - same
             *
             * @name language chains
             * @api public
             */

            [ 'to', 'be', 'been'
                , 'is', 'and', 'has', 'have'
                , 'with', 'that', 'at'
                , 'of', 'same' ].forEach(function (chain) {
                    Assertion.addProperty(chain, function () {
                        return this;
                    });
                });

            /**
             * ### .not
             *
             * Negates any of assertions following in the chain.
             *
             *     expect(foo).to.not.equal('bar');
             *     expect(goodFn).to.not.throw(Error);
             *     expect({ foo: 'baz' }).to.have.property('foo')
             *       .and.not.equal('bar');
             *
             * @name not
             * @api public
             */

            Assertion.addProperty('not', function () {
                flag(this, 'negate', true);
            });

            /**
             * ### .deep
             *
             * Sets the `deep` flag, later used by the `equal` and
             * `property` assertions.
             *
             *     expect(foo).to.deep.equal({ bar: 'baz' });
             *     expect({ foo: { bar: { baz: 'quux' } } })
             *       .to.have.deep.property('foo.bar.baz', 'quux');
             *
             * @name deep
             * @api public
             */

            Assertion.addProperty('deep', function () {
                flag(this, 'deep', true);
            });

            /**
             * ### .a(type)
             *
             * The `a` and `an` assertions are aliases that can be
             * used either as language chains or to assert a value's
             * type.
             *
             *     // typeof
             *     expect('test').to.be.a('string');
             *     expect({ foo: 'bar' }).to.be.an('object');
             *     expect(null).to.be.a('null');
             *     expect(undefined).to.be.an('undefined');
             *
             *     // language chain
             *     expect(foo).to.be.an.instanceof(Foo);
             *
             * @name a
             * @alias an
             * @param {String} type
             * @param {String} message _optional_
             * @api public
             */

            function an (type, msg) {
                if (msg) flag(this, 'message', msg);
                type = type.toLowerCase();
                var obj = flag(this, 'object')
                    , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

                this.assert(
                    type === _.type(obj)
                    , 'expected #{this} to be ' + article + type
                    , 'expected #{this} not to be ' + article + type
                );
            }

            Assertion.addChainableMethod('an', an);
            Assertion.addChainableMethod('a', an);

            /**
             * ### .include(value)
             *
             * The `include` and `contain` assertions can be used as either property
             * based language chains or as methods to assert the inclusion of an object
             * in an array or a substring in a string. When used as language chains,
             * they toggle the `contain` flag for the `keys` assertion.
             *
             *     expect([1,2,3]).to.include(2);
             *     expect('foobar').to.contain('foo');
             *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
             *
             * @name include
             * @alias contain
             * @param {Object|String|Number} obj
             * @param {String} message _optional_
             * @api public
             */

            function includeChainingBehavior () {
                flag(this, 'contains', true);
            }

            function include (val, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                var expected = false;
                if (_.type(obj) === 'array' && _.type(val) === 'object') {
                    for (var i in obj) {
                        if (_.eql(obj[i], val)) {
                            expected = true;
                            break;
                        }
                    }
                } else if (_.type(val) === 'object') {
                    if (!flag(this, 'negate')) {
                        for (var k in val) new Assertion(obj).property(k, val[k]);
                        return;
                    }
                    var subset = {}
                    for (var k in val) subset[k] = obj[k]
                    expected = _.eql(subset, val);
                } else {
                    expected = obj && ~obj.indexOf(val)
                }
                this.assert(
                    expected
                    , 'expected #{this} to include ' + _.inspect(val)
                    , 'expected #{this} to not include ' + _.inspect(val));
            }

            Assertion.addChainableMethod('include', include, includeChainingBehavior);
            Assertion.addChainableMethod('contain', include, includeChainingBehavior);

            /**
             * ### .ok
             *
             * Asserts that the target is truthy.
             *
             *     expect('everthing').to.be.ok;
             *     expect(1).to.be.ok;
             *     expect(false).to.not.be.ok;
             *     expect(undefined).to.not.be.ok;
             *     expect(null).to.not.be.ok;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect('everthing').to.be.ok();
             *
             * @name ok
             * @api public
             */

            Assertion.addChainableNoop('ok', function () {
                this.assert(
                    flag(this, 'object')
                    , 'expected #{this} to be truthy'
                    , 'expected #{this} to be falsy');
            });

            /**
             * ### .true
             *
             * Asserts that the target is `true`.
             *
             *     expect(true).to.be.true;
             *     expect(1).to.not.be.true;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect(true).to.be.true();
             *
             * @name true
             * @api public
             */

            Assertion.addChainableNoop('true', function () {
                this.assert(
                    true === flag(this, 'object')
                    , 'expected #{this} to be true'
                    , 'expected #{this} to be false'
                    , this.negate ? false : true
                );
            });

            /**
             * ### .false
             *
             * Asserts that the target is `false`.
             *
             *     expect(false).to.be.false;
             *     expect(0).to.not.be.false;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect(false).to.be.false();
             *
             * @name false
             * @api public
             */

            Assertion.addChainableNoop('false', function () {
                this.assert(
                    false === flag(this, 'object')
                    , 'expected #{this} to be false'
                    , 'expected #{this} to be true'
                    , this.negate ? true : false
                );
            });

            /**
             * ### .null
             *
             * Asserts that the target is `null`.
             *
             *     expect(null).to.be.null;
             *     expect(undefined).not.to.be.null;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect(null).to.be.null();
             *
             * @name null
             * @api public
             */

            Assertion.addChainableNoop('null', function () {
                this.assert(
                    null === flag(this, 'object')
                    , 'expected #{this} to be null'
                    , 'expected #{this} not to be null'
                );
            });

            /**
             * ### .undefined
             *
             * Asserts that the target is `undefined`.
             *
             *     expect(undefined).to.be.undefined;
             *     expect(null).to.not.be.undefined;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect(undefined).to.be.undefined();
             *
             * @name undefined
             * @api public
             */

            Assertion.addChainableNoop('undefined', function () {
                this.assert(
                    undefined === flag(this, 'object')
                    , 'expected #{this} to be undefined'
                    , 'expected #{this} not to be undefined'
                );
            });

            /**
             * ### .exist
             *
             * Asserts that the target is neither `null` nor `undefined`.
             *
             *     var foo = 'hi'
             *       , bar = null
             *       , baz;
             *
             *     expect(foo).to.exist;
             *     expect(bar).to.not.exist;
             *     expect(baz).to.not.exist;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect(foo).to.exist();
             *
             * @name exist
             * @api public
             */

            Assertion.addChainableNoop('exist', function () {
                this.assert(
                    null != flag(this, 'object')
                    , 'expected #{this} to exist'
                    , 'expected #{this} to not exist'
                );
            });


            /**
             * ### .empty
             *
             * Asserts that the target's length is `0`. For arrays, it checks
             * the `length` property. For objects, it gets the count of
             * enumerable keys.
             *
             *     expect([]).to.be.empty;
             *     expect('').to.be.empty;
             *     expect({}).to.be.empty;
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     expect([]).to.be.empty();
             *
             * @name empty
             * @api public
             */

            Assertion.addChainableNoop('empty', function () {
                var obj = flag(this, 'object')
                    , expected = obj;

                if (Array.isArray(obj) || 'string' === typeof object) {
                    expected = obj.length;
                } else if (typeof obj === 'object') {
                    expected = Object.keys(obj).length;
                }

                this.assert(
                    !expected
                    , 'expected #{this} to be empty'
                    , 'expected #{this} not to be empty'
                );
            });

            /**
             * ### .arguments
             *
             * Asserts that the target is an arguments object.
             *
             *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
             *
             * Can also be used as a function, which prevents some linter errors.
             *
             *     function test () {
   *       expect(arguments).to.be.arguments();
   *     }
             *
             * @name arguments
             * @alias Arguments
             * @api public
             */

            function checkArguments () {
                var obj = flag(this, 'object')
                    , type = Object.prototype.toString.call(obj);
                this.assert(
                    '[object Arguments]' === type
                    , 'expected #{this} to be arguments but got ' + type
                    , 'expected #{this} to not be arguments'
                );
            }

            Assertion.addChainableNoop('arguments', checkArguments);
            Assertion.addChainableNoop('Arguments', checkArguments);

            /**
             * ### .equal(value)
             *
             * Asserts that the target is strictly equal (`===`) to `value`.
             * Alternately, if the `deep` flag is set, asserts that
             * the target is deeply equal to `value`.
             *
             *     expect('hello').to.equal('hello');
             *     expect(42).to.equal(42);
             *     expect(1).to.not.equal(true);
             *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
             *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
             *
             * @name equal
             * @alias equals
             * @alias eq
             * @alias deep.equal
             * @param {Mixed} value
             * @param {String} message _optional_
             * @api public
             */

            function assertEqual (val, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'deep')) {
                    return this.eql(val);
                } else {
                    this.assert(
                        val === obj
                        , 'expected #{this} to equal #{exp}'
                        , 'expected #{this} to not equal #{exp}'
                        , val
                        , this._obj
                        , true
                    );
                }
            }

            Assertion.addMethod('equal', assertEqual);
            Assertion.addMethod('equals', assertEqual);
            Assertion.addMethod('eq', assertEqual);

            /**
             * ### .eql(value)
             *
             * Asserts that the target is deeply equal to `value`.
             *
             *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
             *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
             *
             * @name eql
             * @alias eqls
             * @param {Mixed} value
             * @param {String} message _optional_
             * @api public
             */

            function assertEql(obj, msg) {
                if (msg) flag(this, 'message', msg);
                this.assert(
                    _.eql(obj, flag(this, 'object'))
                    , 'expected #{this} to deeply equal #{exp}'
                    , 'expected #{this} to not deeply equal #{exp}'
                    , obj
                    , this._obj
                    , true
                );
            }

            Assertion.addMethod('eql', assertEql);
            Assertion.addMethod('eqls', assertEql);

            /**
             * ### .above(value)
             *
             * Asserts that the target is greater than `value`.
             *
             *     expect(10).to.be.above(5);
             *
             * Can also be used in conjunction with `length` to
             * assert a minimum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.above(2);
             *     expect([ 1, 2, 3 ]).to.have.length.above(2);
             *
             * @name above
             * @alias gt
             * @alias greaterThan
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertAbove (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len > n
                        , 'expected #{this} to have a length above #{exp} but got #{act}'
                        , 'expected #{this} to not have a length above #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj > n
                        , 'expected #{this} to be above ' + n
                        , 'expected #{this} to be at most ' + n
                    );
                }
            }

            Assertion.addMethod('above', assertAbove);
            Assertion.addMethod('gt', assertAbove);
            Assertion.addMethod('greaterThan', assertAbove);

            /**
             * ### .least(value)
             *
             * Asserts that the target is greater than or equal to `value`.
             *
             *     expect(10).to.be.at.least(10);
             *
             * Can also be used in conjunction with `length` to
             * assert a minimum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.of.at.least(2);
             *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
             *
             * @name least
             * @alias gte
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertLeast (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len >= n
                        , 'expected #{this} to have a length at least #{exp} but got #{act}'
                        , 'expected #{this} to have a length below #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj >= n
                        , 'expected #{this} to be at least ' + n
                        , 'expected #{this} to be below ' + n
                    );
                }
            }

            Assertion.addMethod('least', assertLeast);
            Assertion.addMethod('gte', assertLeast);

            /**
             * ### .below(value)
             *
             * Asserts that the target is less than `value`.
             *
             *     expect(5).to.be.below(10);
             *
             * Can also be used in conjunction with `length` to
             * assert a maximum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.below(4);
             *     expect([ 1, 2, 3 ]).to.have.length.below(4);
             *
             * @name below
             * @alias lt
             * @alias lessThan
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertBelow (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len < n
                        , 'expected #{this} to have a length below #{exp} but got #{act}'
                        , 'expected #{this} to not have a length below #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj < n
                        , 'expected #{this} to be below ' + n
                        , 'expected #{this} to be at least ' + n
                    );
                }
            }

            Assertion.addMethod('below', assertBelow);
            Assertion.addMethod('lt', assertBelow);
            Assertion.addMethod('lessThan', assertBelow);

            /**
             * ### .most(value)
             *
             * Asserts that the target is less than or equal to `value`.
             *
             *     expect(5).to.be.at.most(5);
             *
             * Can also be used in conjunction with `length` to
             * assert a maximum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.of.at.most(4);
             *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
             *
             * @name most
             * @alias lte
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertMost (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len <= n
                        , 'expected #{this} to have a length at most #{exp} but got #{act}'
                        , 'expected #{this} to have a length above #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj <= n
                        , 'expected #{this} to be at most ' + n
                        , 'expected #{this} to be above ' + n
                    );
                }
            }

            Assertion.addMethod('most', assertMost);
            Assertion.addMethod('lte', assertMost);

            /**
             * ### .within(start, finish)
             *
             * Asserts that the target is within a range.
             *
             *     expect(7).to.be.within(5,10);
             *
             * Can also be used in conjunction with `length` to
             * assert a length range. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.within(2,4);
             *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
             *
             * @name within
             * @param {Number} start lowerbound inclusive
             * @param {Number} finish upperbound inclusive
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('within', function (start, finish, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object')
                    , range = start + '..' + finish;
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len >= start && len <= finish
                        , 'expected #{this} to have a length within ' + range
                        , 'expected #{this} to not have a length within ' + range
                    );
                } else {
                    this.assert(
                        obj >= start && obj <= finish
                        , 'expected #{this} to be within ' + range
                        , 'expected #{this} to not be within ' + range
                    );
                }
            });

            /**
             * ### .instanceof(constructor)
             *
             * Asserts that the target is an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , Chai = new Tea('chai');
             *
             *     expect(Chai).to.be.an.instanceof(Tea);
             *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
             *
             * @name instanceof
             * @param {Constructor} constructor
             * @param {String} message _optional_
             * @alias instanceOf
             * @api public
             */

            function assertInstanceOf (constructor, msg) {
                if (msg) flag(this, 'message', msg);
                var name = _.getName(constructor);
                this.assert(
                    flag(this, 'object') instanceof constructor
                    , 'expected #{this} to be an instance of ' + name
                    , 'expected #{this} to not be an instance of ' + name
                );
            };

            Assertion.addMethod('instanceof', assertInstanceOf);
            Assertion.addMethod('instanceOf', assertInstanceOf);

            /**
             * ### .property(name, [value])
             *
             * Asserts that the target has a property `name`, optionally asserting that
             * the value of that property is strictly equal to  `value`.
             * If the `deep` flag is set, you can use dot- and bracket-notation for deep
             * references into objects and arrays.
             *
             *     // simple referencing
             *     var obj = { foo: 'bar' };
             *     expect(obj).to.have.property('foo');
             *     expect(obj).to.have.property('foo', 'bar');
             *
             *     // deep referencing
             *     var deepObj = {
   *         green: { tea: 'matcha' }
   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
   *     };

             *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
             *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
             *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
             *
             * You can also use an array as the starting point of a `deep.property`
             * assertion, or traverse nested arrays.
             *
             *     var arr = [
             *         [ 'chai', 'matcha', 'konacha' ]
             *       , [ { tea: 'chai' }
             *         , { tea: 'matcha' }
             *         , { tea: 'konacha' } ]
             *     ];
             *
             *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
             *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
             *
             * Furthermore, `property` changes the subject of the assertion
             * to be the value of that property from the original object. This
             * permits for further chainable assertions on that property.
             *
             *     expect(obj).to.have.property('foo')
             *       .that.is.a('string');
             *     expect(deepObj).to.have.property('green')
             *       .that.is.an('object')
             *       .that.deep.equals({ tea: 'matcha' });
             *     expect(deepObj).to.have.property('teas')
             *       .that.is.an('array')
             *       .with.deep.property('[2]')
             *         .that.deep.equals({ tea: 'konacha' });
             *
             * @name property
             * @alias deep.property
             * @param {String} name
             * @param {Mixed} value (optional)
             * @param {String} message _optional_
             * @returns value of property for chaining
             * @api public
             */

            Assertion.addMethod('property', function (name, val, msg) {
                if (msg) flag(this, 'message', msg);

                var descriptor = flag(this, 'deep') ? 'deep property ' : 'property '
                    , negate = flag(this, 'negate')
                    , obj = flag(this, 'object')
                    , value = flag(this, 'deep')
                        ? _.getPathValue(name, obj)
                        : obj[name];

                if (negate && undefined !== val) {
                    if (undefined === value) {
                        msg = (msg != null) ? msg + ': ' : '';
                        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
                    }
                } else {
                    this.assert(
                        undefined !== value
                        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
                        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
                }

                if (undefined !== val) {
                    this.assert(
                        val === value
                        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
                        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
                        , val
                        , value
                    );
                }

                flag(this, 'object', value);
            });


            /**
             * ### .ownProperty(name)
             *
             * Asserts that the target has an own property `name`.
             *
             *     expect('test').to.have.ownProperty('length');
             *
             * @name ownProperty
             * @alias haveOwnProperty
             * @param {String} name
             * @param {String} message _optional_
             * @api public
             */

            function assertOwnProperty (name, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    obj.hasOwnProperty(name)
                    , 'expected #{this} to have own property ' + _.inspect(name)
                    , 'expected #{this} to not have own property ' + _.inspect(name)
                );
            }

            Assertion.addMethod('ownProperty', assertOwnProperty);
            Assertion.addMethod('haveOwnProperty', assertOwnProperty);

            /**
             * ### .length(value)
             *
             * Asserts that the target's `length` property has
             * the expected value.
             *
             *     expect([ 1, 2, 3]).to.have.length(3);
             *     expect('foobar').to.have.length(6);
             *
             * Can also be used as a chain precursor to a value
             * comparison for the length property.
             *
             *     expect('foo').to.have.length.above(2);
             *     expect([ 1, 2, 3 ]).to.have.length.above(2);
             *     expect('foo').to.have.length.below(4);
             *     expect([ 1, 2, 3 ]).to.have.length.below(4);
             *     expect('foo').to.have.length.within(2,4);
             *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
             *
             * @name length
             * @alias lengthOf
             * @param {Number} length
             * @param {String} message _optional_
             * @api public
             */

            function assertLengthChain () {
                flag(this, 'doLength', true);
            }

            function assertLength (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).to.have.property('length');
                var len = obj.length;

                this.assert(
                    len == n
                    , 'expected #{this} to have a length of #{exp} but got #{act}'
                    , 'expected #{this} to not have a length of #{act}'
                    , n
                    , len
                );
            }

            Assertion.addChainableMethod('length', assertLength, assertLengthChain);
            Assertion.addMethod('lengthOf', assertLength);

            /**
             * ### .match(regexp)
             *
             * Asserts that the target matches a regular expression.
             *
             *     expect('foobar').to.match(/^foo/);
             *
             * @name match
             * @param {RegExp} RegularExpression
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('match', function (re, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    re.exec(obj)
                    , 'expected #{this} to match ' + re
                    , 'expected #{this} not to match ' + re
                );
            });

            /**
             * ### .string(string)
             *
             * Asserts that the string target contains another string.
             *
             *     expect('foobar').to.have.string('bar');
             *
             * @name string
             * @param {String} string
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('string', function (str, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).is.a('string');

                this.assert(
                    ~obj.indexOf(str)
                    , 'expected #{this} to contain ' + _.inspect(str)
                    , 'expected #{this} to not contain ' + _.inspect(str)
                );
            });


            /**
             * ### .keys(key1, [key2], [...])
             *
             * Asserts that the target has exactly the given keys, or
             * asserts the inclusion of some keys when using the
             * `include` or `contain` modifiers.
             *
             *     expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
             *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
             *
             * @name keys
             * @alias key
             * @param {String...|Array} keys
             * @api public
             */

            function assertKeys (keys) {
                var obj = flag(this, 'object')
                    , str
                    , ok = true;

                keys = keys instanceof Array
                    ? keys
                    : Array.prototype.slice.call(arguments);

                if (!keys.length) throw new Error('keys required');

                var actual = Object.keys(obj)
                    , expected = keys
                    , len = keys.length;

                // Inclusion
                ok = keys.every(function(key){
                    return ~actual.indexOf(key);
                });

                // Strict
                if (!flag(this, 'negate') && !flag(this, 'contains')) {
                    ok = ok && keys.length == actual.length;
                }

                // Key string
                if (len > 1) {
                    keys = keys.map(function(key){
                        return _.inspect(key);
                    });
                    var last = keys.pop();
                    str = keys.join(', ') + ', and ' + last;
                } else {
                    str = _.inspect(keys[0]);
                }

                // Form
                str = (len > 1 ? 'keys ' : 'key ') + str;

                // Have / include
                str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

                // Assertion
                this.assert(
                    ok
                    , 'expected #{this} to ' + str
                    , 'expected #{this} to not ' + str
                    , expected.sort()
                    , actual.sort()
                    , true
                );
            }

            Assertion.addMethod('keys', assertKeys);
            Assertion.addMethod('key', assertKeys);

            /**
             * ### .throw(constructor)
             *
             * Asserts that the function target will throw a specific error, or specific type of error
             * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
             * for the error's message.
             *
             *     var err = new ReferenceError('This is a bad function.');
             *     var fn = function () { throw err; }
             *     expect(fn).to.throw(ReferenceError);
             *     expect(fn).to.throw(Error);
             *     expect(fn).to.throw(/bad function/);
             *     expect(fn).to.not.throw('good function');
             *     expect(fn).to.throw(ReferenceError, /bad function/);
             *     expect(fn).to.throw(err);
             *     expect(fn).to.not.throw(new RangeError('Out of range.'));
             *
             * Please note that when a throw expectation is negated, it will check each
             * parameter independently, starting with error constructor type. The appropriate way
             * to check for the existence of a type of error but for a message that does not match
             * is to use `and`.
             *
             *     expect(fn).to.throw(ReferenceError)
             *        .and.not.throw(/good function/);
             *
             * @name throw
             * @alias throws
             * @alias Throw
             * @param {ErrorConstructor} constructor
             * @param {String|RegExp} expected error message
             * @param {String} message _optional_
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @returns error for chaining (null if no error)
             * @api public
             */

            function assertThrows (constructor, errMsg, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).is.a('function');

                var thrown = false
                    , desiredError = null
                    , name = null
                    , thrownError = null;

                if (arguments.length === 0) {
                    errMsg = null;
                    constructor = null;
                } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
                    errMsg = constructor;
                    constructor = null;
                } else if (constructor && constructor instanceof Error) {
                    desiredError = constructor;
                    constructor = null;
                    errMsg = null;
                } else if (typeof constructor === 'function') {
                    name = constructor.prototype.name || constructor.name;
                    if (name === 'Error' && constructor !== Error) {
                        name = (new constructor()).name;
                    }
                } else {
                    constructor = null;
                }

                try {
                    obj();
                } catch (err) {
                    // first, check desired error
                    if (desiredError) {
                        this.assert(
                            err === desiredError
                            , 'expected #{this} to throw #{exp} but #{act} was thrown'
                            , 'expected #{this} to not throw #{exp}'
                            , (desiredError instanceof Error ? desiredError.toString() : desiredError)
                            , (err instanceof Error ? err.toString() : err)
                        );

                        flag(this, 'object', err);
                        return this;
                    }

                    // next, check constructor
                    if (constructor) {
                        this.assert(
                            err instanceof constructor
                            , 'expected #{this} to throw #{exp} but #{act} was thrown'
                            , 'expected #{this} to not throw #{exp} but #{act} was thrown'
                            , name
                            , (err instanceof Error ? err.toString() : err)
                        );

                        if (!errMsg) {
                            flag(this, 'object', err);
                            return this;
                        }
                    }

                    // next, check message
                    var message = 'object' === _.type(err) && "message" in err
                        ? err.message
                        : '' + err;

                    if ((message != null) && errMsg && errMsg instanceof RegExp) {
                        this.assert(
                            errMsg.exec(message)
                            , 'expected #{this} to throw error matching #{exp} but got #{act}'
                            , 'expected #{this} to throw error not matching #{exp}'
                            , errMsg
                            , message
                        );

                        flag(this, 'object', err);
                        return this;
                    } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
                        this.assert(
                            ~message.indexOf(errMsg)
                            , 'expected #{this} to throw error including #{exp} but got #{act}'
                            , 'expected #{this} to throw error not including #{act}'
                            , errMsg
                            , message
                        );

                        flag(this, 'object', err);
                        return this;
                    } else {
                        thrown = true;
                        thrownError = err;
                    }
                }

                var actuallyGot = ''
                    , expectedThrown = name !== null
                        ? name
                        : desiredError
                        ? '#{exp}' //_.inspect(desiredError)
                        : 'an error';

                if (thrown) {
                    actuallyGot = ' but #{act} was thrown'
                }

                this.assert(
                    thrown === true
                    , 'expected #{this} to throw ' + expectedThrown + actuallyGot
                    , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
                    , (desiredError instanceof Error ? desiredError.toString() : desiredError)
                    , (thrownError instanceof Error ? thrownError.toString() : thrownError)
                );

                flag(this, 'object', thrownError);
            };

            Assertion.addMethod('throw', assertThrows);
            Assertion.addMethod('throws', assertThrows);
            Assertion.addMethod('Throw', assertThrows);

            /**
             * ### .respondTo(method)
             *
             * Asserts that the object or class target will respond to a method.
             *
             *     Klass.prototype.bar = function(){};
             *     expect(Klass).to.respondTo('bar');
             *     expect(obj).to.respondTo('bar');
             *
             * To check if a constructor will respond to a static function,
             * set the `itself` flag.
             *
             *     Klass.baz = function(){};
             *     expect(Klass).itself.to.respondTo('baz');
             *
             * @name respondTo
             * @param {String} method
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('respondTo', function (method, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object')
                    , itself = flag(this, 'itself')
                    , context = ('function' === _.type(obj) && !itself)
                        ? obj.prototype[method]
                        : obj[method];

                this.assert(
                    'function' === typeof context
                    , 'expected #{this} to respond to ' + _.inspect(method)
                    , 'expected #{this} to not respond to ' + _.inspect(method)
                );
            });

            /**
             * ### .itself
             *
             * Sets the `itself` flag, later used by the `respondTo` assertion.
             *
             *     function Foo() {}
             *     Foo.bar = function() {}
             *     Foo.prototype.baz = function() {}
             *
             *     expect(Foo).itself.to.respondTo('bar');
             *     expect(Foo).itself.not.to.respondTo('baz');
             *
             * @name itself
             * @api public
             */

            Assertion.addProperty('itself', function () {
                flag(this, 'itself', true);
            });

            /**
             * ### .satisfy(method)
             *
             * Asserts that the target passes a given truth test.
             *
             *     expect(1).to.satisfy(function(num) { return num > 0; });
             *
             * @name satisfy
             * @param {Function} matcher
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('satisfy', function (matcher, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                var result = matcher(obj);
                this.assert(
                    result
                    , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
                    , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
                    , this.negate ? false : true
                    , result
                );
            });

            /**
             * ### .closeTo(expected, delta)
             *
             * Asserts that the target is equal `expected`, to within a +/- `delta` range.
             *
             *     expect(1.5).to.be.closeTo(1, 0.5);
             *
             * @name closeTo
             * @param {Number} expected
             * @param {Number} delta
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('closeTo', function (expected, delta, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');

                new Assertion(obj, msg).is.a('number');
                if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
                    throw new Error('the arguments to closeTo must be numbers');
                }

                this.assert(
                    Math.abs(obj - expected) <= delta
                    , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
                    , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
                );
            });

            function isSubsetOf(subset, superset, cmp) {
                return subset.every(function(elem) {
                    if (!cmp) return superset.indexOf(elem) !== -1;

                    return superset.some(function(elem2) {
                        return cmp(elem, elem2);
                    });
                })
            }

            /**
             * ### .members(set)
             *
             * Asserts that the target is a superset of `set`,
             * or that the target and `set` have the same strictly-equal (===) members.
             * Alternately, if the `deep` flag is set, set members are compared for deep
             * equality.
             *
             *     expect([1, 2, 3]).to.include.members([3, 2]);
             *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
             *
             *     expect([4, 2]).to.have.members([2, 4]);
             *     expect([5, 2]).to.not.have.members([5, 2, 1]);
             *
             *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
             *
             * @name members
             * @param {Array} set
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('members', function (subset, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');

                new Assertion(obj).to.be.an('array');
                new Assertion(subset).to.be.an('array');

                var cmp = flag(this, 'deep') ? _.eql : undefined;

                if (flag(this, 'contains')) {
                    return this.assert(
                        isSubsetOf(subset, obj, cmp)
                        , 'expected #{this} to be a superset of #{act}'
                        , 'expected #{this} to not be a superset of #{act}'
                        , obj
                        , subset
                    );
                }

                this.assert(
                    isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
                    , 'expected #{this} to have the same members as #{act}'
                    , 'expected #{this} to not have the same members as #{act}'
                    , obj
                    , subset
                );
            });
        };

    });

    require.register("chai/lib/chai/interface/assert.js", function (exports, module) {
        /*!
         * chai
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */


        module.exports = function (chai, util) {

            /*!
             * Chai dependencies.
             */

            var Assertion = chai.Assertion
                , flag = util.flag;

            /*!
             * Module export.
             */

            /**
             * ### assert(expression, message)
             *
             * Write your own test expressions.
             *
             *     assert('foo' !== 'bar', 'foo is not bar');
             *     assert(Array.isArray([]), 'empty arrays are arrays');
             *
             * @param {Mixed} expression to test for truthiness
             * @param {String} message to display on error
             * @name assert
             * @api public
             */

            var assert = chai.assert = function (express, errmsg) {
                var test = new Assertion(null, null, chai.assert);
                test.assert(
                    express
                    , errmsg
                    , '[ negation message unavailable ]'
                );
            };

            /**
             * ### .fail(actual, expected, [message], [operator])
             *
             * Throw a failure. Node.js `assert` module-compatible.
             *
             * @name fail
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @param {String} operator
             * @api public
             */

            assert.fail = function (actual, expected, message, operator) {
                message = message || 'assert.fail()';
                throw new chai.AssertionError(message, {
                    actual: actual
                    , expected: expected
                    , operator: operator
                }, assert.fail);
            };

            /**
             * ### .ok(object, [message])
             *
             * Asserts that `object` is truthy.
             *
             *     assert.ok('everything', 'everything is ok');
             *     assert.ok(false, 'this will fail');
             *
             * @name ok
             * @param {Mixed} object to test
             * @param {String} message
             * @api public
             */

            assert.ok = function (val, msg) {
                new Assertion(val, msg).is.ok;
            };

            /**
             * ### .notOk(object, [message])
             *
             * Asserts that `object` is falsy.
             *
             *     assert.notOk('everything', 'this will fail');
             *     assert.notOk(false, 'this will pass');
             *
             * @name notOk
             * @param {Mixed} object to test
             * @param {String} message
             * @api public
             */

            assert.notOk = function (val, msg) {
                new Assertion(val, msg).is.not.ok;
            };

            /**
             * ### .equal(actual, expected, [message])
             *
             * Asserts non-strict equality (`==`) of `actual` and `expected`.
             *
             *     assert.equal(3, '3', '== coerces values to strings');
             *
             * @name equal
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.equal = function (act, exp, msg) {
                var test = new Assertion(act, msg, assert.equal);

                test.assert(
                    exp == flag(test, 'object')
                    , 'expected #{this} to equal #{exp}'
                    , 'expected #{this} to not equal #{act}'
                    , exp
                    , act
                );
            };

            /**
             * ### .notEqual(actual, expected, [message])
             *
             * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
             *
             *     assert.notEqual(3, 4, 'these numbers are not equal');
             *
             * @name notEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notEqual = function (act, exp, msg) {
                var test = new Assertion(act, msg, assert.notEqual);

                test.assert(
                    exp != flag(test, 'object')
                    , 'expected #{this} to not equal #{exp}'
                    , 'expected #{this} to equal #{act}'
                    , exp
                    , act
                );
            };

            /**
             * ### .strictEqual(actual, expected, [message])
             *
             * Asserts strict equality (`===`) of `actual` and `expected`.
             *
             *     assert.strictEqual(true, true, 'these booleans are strictly equal');
             *
             * @name strictEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.strictEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.equal(exp);
            };

            /**
             * ### .notStrictEqual(actual, expected, [message])
             *
             * Asserts strict inequality (`!==`) of `actual` and `expected`.
             *
             *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
             *
             * @name notStrictEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notStrictEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.not.equal(exp);
            };

            /**
             * ### .deepEqual(actual, expected, [message])
             *
             * Asserts that `actual` is deeply equal to `expected`.
             *
             *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
             *
             * @name deepEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.deepEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.eql(exp);
            };

            /**
             * ### .notDeepEqual(actual, expected, [message])
             *
             * Assert that `actual` is not deeply equal to `expected`.
             *
             *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
             *
             * @name notDeepEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notDeepEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.not.eql(exp);
            };

            /**
             * ### .isTrue(value, [message])
             *
             * Asserts that `value` is true.
             *
             *     var teaServed = true;
             *     assert.isTrue(teaServed, 'the tea has been served');
             *
             * @name isTrue
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isTrue = function (val, msg) {
                new Assertion(val, msg).is['true'];
            };

            /**
             * ### .isFalse(value, [message])
             *
             * Asserts that `value` is false.
             *
             *     var teaServed = false;
             *     assert.isFalse(teaServed, 'no tea yet? hmm...');
             *
             * @name isFalse
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isFalse = function (val, msg) {
                new Assertion(val, msg).is['false'];
            };

            /**
             * ### .isNull(value, [message])
             *
             * Asserts that `value` is null.
             *
             *     assert.isNull(err, 'there was no error');
             *
             * @name isNull
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNull = function (val, msg) {
                new Assertion(val, msg).to.equal(null);
            };

            /**
             * ### .isNotNull(value, [message])
             *
             * Asserts that `value` is not null.
             *
             *     var tea = 'tasty chai';
             *     assert.isNotNull(tea, 'great, time for tea!');
             *
             * @name isNotNull
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotNull = function (val, msg) {
                new Assertion(val, msg).to.not.equal(null);
            };

            /**
             * ### .isUndefined(value, [message])
             *
             * Asserts that `value` is `undefined`.
             *
             *     var tea;
             *     assert.isUndefined(tea, 'no tea defined');
             *
             * @name isUndefined
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isUndefined = function (val, msg) {
                new Assertion(val, msg).to.equal(undefined);
            };

            /**
             * ### .isDefined(value, [message])
             *
             * Asserts that `value` is not `undefined`.
             *
             *     var tea = 'cup of chai';
             *     assert.isDefined(tea, 'tea has been defined');
             *
             * @name isDefined
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isDefined = function (val, msg) {
                new Assertion(val, msg).to.not.equal(undefined);
            };

            /**
             * ### .isFunction(value, [message])
             *
             * Asserts that `value` is a function.
             *
             *     function serveTea() { return 'cup of tea'; };
             *     assert.isFunction(serveTea, 'great, we can have tea now');
             *
             * @name isFunction
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isFunction = function (val, msg) {
                new Assertion(val, msg).to.be.a('function');
            };

            /**
             * ### .isNotFunction(value, [message])
             *
             * Asserts that `value` is _not_ a function.
             *
             *     var serveTea = [ 'heat', 'pour', 'sip' ];
             *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
             *
             * @name isNotFunction
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotFunction = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('function');
            };

            /**
             * ### .isObject(value, [message])
             *
             * Asserts that `value` is an object (as revealed by
             * `Object.prototype.toString`).
             *
             *     var selection = { name: 'Chai', serve: 'with spices' };
             *     assert.isObject(selection, 'tea selection is an object');
             *
             * @name isObject
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isObject = function (val, msg) {
                new Assertion(val, msg).to.be.a('object');
            };

            /**
             * ### .isNotObject(value, [message])
             *
             * Asserts that `value` is _not_ an object.
             *
             *     var selection = 'chai'
             *     assert.isNotObject(selection, 'tea selection is not an object');
             *     assert.isNotObject(null, 'null is not an object');
             *
             * @name isNotObject
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotObject = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('object');
            };

            /**
             * ### .isArray(value, [message])
             *
             * Asserts that `value` is an array.
             *
             *     var menu = [ 'green', 'chai', 'oolong' ];
             *     assert.isArray(menu, 'what kind of tea do we want?');
             *
             * @name isArray
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isArray = function (val, msg) {
                new Assertion(val, msg).to.be.an('array');
            };

            /**
             * ### .isNotArray(value, [message])
             *
             * Asserts that `value` is _not_ an array.
             *
             *     var menu = 'green|chai|oolong';
             *     assert.isNotArray(menu, 'what kind of tea do we want?');
             *
             * @name isNotArray
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotArray = function (val, msg) {
                new Assertion(val, msg).to.not.be.an('array');
            };

            /**
             * ### .isString(value, [message])
             *
             * Asserts that `value` is a string.
             *
             *     var teaOrder = 'chai';
             *     assert.isString(teaOrder, 'order placed');
             *
             * @name isString
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isString = function (val, msg) {
                new Assertion(val, msg).to.be.a('string');
            };

            /**
             * ### .isNotString(value, [message])
             *
             * Asserts that `value` is _not_ a string.
             *
             *     var teaOrder = 4;
             *     assert.isNotString(teaOrder, 'order placed');
             *
             * @name isNotString
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotString = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('string');
            };

            /**
             * ### .isNumber(value, [message])
             *
             * Asserts that `value` is a number.
             *
             *     var cups = 2;
             *     assert.isNumber(cups, 'how many cups');
             *
             * @name isNumber
             * @param {Number} value
             * @param {String} message
             * @api public
             */

            assert.isNumber = function (val, msg) {
                new Assertion(val, msg).to.be.a('number');
            };

            /**
             * ### .isNotNumber(value, [message])
             *
             * Asserts that `value` is _not_ a number.
             *
             *     var cups = '2 cups please';
             *     assert.isNotNumber(cups, 'how many cups');
             *
             * @name isNotNumber
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotNumber = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('number');
            };

            /**
             * ### .isBoolean(value, [message])
             *
             * Asserts that `value` is a boolean.
             *
             *     var teaReady = true
             *       , teaServed = false;
             *
             *     assert.isBoolean(teaReady, 'is the tea ready');
             *     assert.isBoolean(teaServed, 'has tea been served');
             *
             * @name isBoolean
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isBoolean = function (val, msg) {
                new Assertion(val, msg).to.be.a('boolean');
            };

            /**
             * ### .isNotBoolean(value, [message])
             *
             * Asserts that `value` is _not_ a boolean.
             *
             *     var teaReady = 'yep'
             *       , teaServed = 'nope';
             *
             *     assert.isNotBoolean(teaReady, 'is the tea ready');
             *     assert.isNotBoolean(teaServed, 'has tea been served');
             *
             * @name isNotBoolean
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotBoolean = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('boolean');
            };

            /**
             * ### .typeOf(value, name, [message])
             *
             * Asserts that `value`'s type is `name`, as determined by
             * `Object.prototype.toString`.
             *
             *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
             *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
             *     assert.typeOf('tea', 'string', 'we have a string');
             *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
             *     assert.typeOf(null, 'null', 'we have a null');
             *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
             *
             * @name typeOf
             * @param {Mixed} value
             * @param {String} name
             * @param {String} message
             * @api public
             */

            assert.typeOf = function (val, type, msg) {
                new Assertion(val, msg).to.be.a(type);
            };

            /**
             * ### .notTypeOf(value, name, [message])
             *
             * Asserts that `value`'s type is _not_ `name`, as determined by
             * `Object.prototype.toString`.
             *
             *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
             *
             * @name notTypeOf
             * @param {Mixed} value
             * @param {String} typeof name
             * @param {String} message
             * @api public
             */

            assert.notTypeOf = function (val, type, msg) {
                new Assertion(val, msg).to.not.be.a(type);
            };

            /**
             * ### .instanceOf(object, constructor, [message])
             *
             * Asserts that `value` is an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , chai = new Tea('chai');
             *
             *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
             *
             * @name instanceOf
             * @param {Object} object
             * @param {Constructor} constructor
             * @param {String} message
             * @api public
             */

            assert.instanceOf = function (val, type, msg) {
                new Assertion(val, msg).to.be.instanceOf(type);
            };

            /**
             * ### .notInstanceOf(object, constructor, [message])
             *
             * Asserts `value` is not an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , chai = new String('chai');
             *
             *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
             *
             * @name notInstanceOf
             * @param {Object} object
             * @param {Constructor} constructor
             * @param {String} message
             * @api public
             */

            assert.notInstanceOf = function (val, type, msg) {
                new Assertion(val, msg).to.not.be.instanceOf(type);
            };

            /**
             * ### .include(haystack, needle, [message])
             *
             * Asserts that `haystack` includes `needle`. Works
             * for strings and arrays.
             *
             *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
             *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
             *
             * @name include
             * @param {Array|String} haystack
             * @param {Mixed} needle
             * @param {String} message
             * @api public
             */

            assert.include = function (exp, inc, msg) {
                new Assertion(exp, msg, assert.include).include(inc);
            };

            /**
             * ### .notInclude(haystack, needle, [message])
             *
             * Asserts that `haystack` does not include `needle`. Works
             * for strings and arrays.
             *i
             *     assert.notInclude('foobar', 'baz', 'string not include substring');
             *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
             *
             * @name notInclude
             * @param {Array|String} haystack
             * @param {Mixed} needle
             * @param {String} message
             * @api public
             */

            assert.notInclude = function (exp, inc, msg) {
                new Assertion(exp, msg, assert.notInclude).not.include(inc);
            };

            /**
             * ### .match(value, regexp, [message])
             *
             * Asserts that `value` matches the regular expression `regexp`.
             *
             *     assert.match('foobar', /^foo/, 'regexp matches');
             *
             * @name match
             * @param {Mixed} value
             * @param {RegExp} regexp
             * @param {String} message
             * @api public
             */

            assert.match = function (exp, re, msg) {
                new Assertion(exp, msg).to.match(re);
            };

            /**
             * ### .notMatch(value, regexp, [message])
             *
             * Asserts that `value` does not match the regular expression `regexp`.
             *
             *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
             *
             * @name notMatch
             * @param {Mixed} value
             * @param {RegExp} regexp
             * @param {String} message
             * @api public
             */

            assert.notMatch = function (exp, re, msg) {
                new Assertion(exp, msg).to.not.match(re);
            };

            /**
             * ### .property(object, property, [message])
             *
             * Asserts that `object` has a property named by `property`.
             *
             *     assert.property({ tea: { green: 'matcha' }}, 'tea');
             *
             * @name property
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.property = function (obj, prop, msg) {
                new Assertion(obj, msg).to.have.property(prop);
            };

            /**
             * ### .notProperty(object, property, [message])
             *
             * Asserts that `object` does _not_ have a property named by `property`.
             *
             *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
             *
             * @name notProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.notProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.property(prop);
            };

            /**
             * ### .deepProperty(object, property, [message])
             *
             * Asserts that `object` has a property named by `property`, which can be a
             * string using dot- and bracket-notation for deep reference.
             *
             *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
             *
             * @name deepProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.deepProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop);
            };

            /**
             * ### .notDeepProperty(object, property, [message])
             *
             * Asserts that `object` does _not_ have a property named by `property`, which
             * can be a string using dot- and bracket-notation for deep reference.
             *
             *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
             *
             * @name notDeepProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.notDeepProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop);
            };

            /**
             * ### .propertyVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property` with value given
             * by `value`.
             *
             *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
             *
             * @name propertyVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.propertyVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.property(prop, val);
            };

            /**
             * ### .propertyNotVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property`, but with a value
             * different from that given by `value`.
             *
             *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
             *
             * @name propertyNotVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.propertyNotVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.property(prop, val);
            };

            /**
             * ### .deepPropertyVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property` with value given
             * by `value`. `property` can use dot- and bracket-notation for deep
             * reference.
             *
             *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
             *
             * @name deepPropertyVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.deepPropertyVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop, val);
            };

            /**
             * ### .deepPropertyNotVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property`, but with a value
             * different from that given by `value`. `property` can use dot- and
             * bracket-notation for deep reference.
             *
             *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
             *
             * @name deepPropertyNotVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.deepPropertyNotVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop, val);
            };

            /**
             * ### .lengthOf(object, length, [message])
             *
             * Asserts that `object` has a `length` property with the expected value.
             *
             *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
             *     assert.lengthOf('foobar', 5, 'string has length of 6');
             *
             * @name lengthOf
             * @param {Mixed} object
             * @param {Number} length
             * @param {String} message
             * @api public
             */

            assert.lengthOf = function (exp, len, msg) {
                new Assertion(exp, msg).to.have.length(len);
            };

            /**
             * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
             *
             * Asserts that `function` will throw an error that is an instance of
             * `constructor`, or alternately that it will throw an error with message
             * matching `regexp`.
             *
             *     assert.throw(fn, 'function throws a reference error');
             *     assert.throw(fn, /function throws a reference error/);
             *     assert.throw(fn, ReferenceError);
             *     assert.throw(fn, ReferenceError, 'function throws a reference error');
             *     assert.throw(fn, ReferenceError, /function throws a reference error/);
             *
             * @name throws
             * @alias throw
             * @alias Throw
             * @param {Function} function
             * @param {ErrorConstructor} constructor
             * @param {RegExp} regexp
             * @param {String} message
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @api public
             */

            assert.Throw = function (fn, errt, errs, msg) {
                if ('string' === typeof errt || errt instanceof RegExp) {
                    errs = errt;
                    errt = null;
                }

                var assertErr = new Assertion(fn, msg).to.Throw(errt, errs);
                return flag(assertErr, 'object');
            };

            /**
             * ### .doesNotThrow(function, [constructor/regexp], [message])
             *
             * Asserts that `function` will _not_ throw an error that is an instance of
             * `constructor`, or alternately that it will not throw an error with message
             * matching `regexp`.
             *
             *     assert.doesNotThrow(fn, Error, 'function does not throw');
             *
             * @name doesNotThrow
             * @param {Function} function
             * @param {ErrorConstructor} constructor
             * @param {RegExp} regexp
             * @param {String} message
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @api public
             */

            assert.doesNotThrow = function (fn, type, msg) {
                if ('string' === typeof type) {
                    msg = type;
                    type = null;
                }

                new Assertion(fn, msg).to.not.Throw(type);
            };

            /**
             * ### .operator(val1, operator, val2, [message])
             *
             * Compares two values using `operator`.
             *
             *     assert.operator(1, '<', 2, 'everything is ok');
             *     assert.operator(1, '>', 2, 'this will fail');
             *
             * @name operator
             * @param {Mixed} val1
             * @param {String} operator
             * @param {Mixed} val2
             * @param {String} message
             * @api public
             */

            assert.operator = function (val, operator, val2, msg) {
                if (!~['==', '===', '>', '>=', '<', '<=', '!=', '!=='].indexOf(operator)) {
                    throw new Error('Invalid operator "' + operator + '"');
                }
                var test = new Assertion(eval(val + operator + val2), msg);
                test.assert(
                    true === flag(test, 'object')
                    , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
                    , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
            };

            /**
             * ### .closeTo(actual, expected, delta, [message])
             *
             * Asserts that the target is equal `expected`, to within a +/- `delta` range.
             *
             *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
             *
             * @name closeTo
             * @param {Number} actual
             * @param {Number} expected
             * @param {Number} delta
             * @param {String} message
             * @api public
             */

            assert.closeTo = function (act, exp, delta, msg) {
                new Assertion(act, msg).to.be.closeTo(exp, delta);
            };

            /**
             * ### .sameMembers(set1, set2, [message])
             *
             * Asserts that `set1` and `set2` have the same members.
             * Order is not taken into account.
             *
             *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
             *
             * @name sameMembers
             * @param {Array} set1
             * @param {Array} set2
             * @param {String} message
             * @api public
             */

            assert.sameMembers = function (set1, set2, msg) {
                new Assertion(set1, msg).to.have.same.members(set2);
            }

            /**
             * ### .includeMembers(superset, subset, [message])
             *
             * Asserts that `subset` is included in `superset`.
             * Order is not taken into account.
             *
             *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
             *
             * @name includeMembers
             * @param {Array} superset
             * @param {Array} subset
             * @param {String} message
             * @api public
             */

            assert.includeMembers = function (superset, subset, msg) {
                new Assertion(superset, msg).to.include.members(subset);
            }

            /*!
             * Undocumented / untested
             */

            assert.ifError = function (val, msg) {
                new Assertion(val, msg).to.not.be.ok;
            };

            /*!
             * Aliases.
             */

            (function alias(name, as){
                assert[as] = assert[name];
                return alias;
            })
            ('Throw', 'throw')
            ('Throw', 'throws');
        };

    });

    require.register("chai/lib/chai/interface/expect.js", function (exports, module) {
        /*!
         * chai
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, util) {
            chai.expect = function (val, message) {
                return new chai.Assertion(val, message);
            };
        };


    });

    require.register("chai/lib/chai/interface/should.js", function (exports, module) {
        /*!
         * chai
         * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, util) {
            var Assertion = chai.Assertion;

            function loadShould () {
                // explicitly define this method as function as to have it's name to include as `ssfi`
                function shouldGetter() {
                    if (this instanceof String || this instanceof Number) {
                        return new Assertion(this.constructor(this), null, shouldGetter);
                    } else if (this instanceof Boolean) {
                        return new Assertion(this == true, null, shouldGetter);
                    }
                    return new Assertion(this, null, shouldGetter);
                }
                function shouldSetter(value) {
                    // See https://github.com/chaijs/chai/issues/86: this makes
                    // `whatever.should = someValue` actually set `someValue`, which is
                    // especially useful for `global.should = require('chai').should()`.
                    //
                    // Note that we have to use [[DefineProperty]] instead of [[Put]]
                    // since otherwise we would trigger this very setter!
                    Object.defineProperty(this, 'should', {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                }
                // modify Object.prototype to have `should`
                Object.defineProperty(Object.prototype, 'should', {
                    set: shouldSetter
                    , get: shouldGetter
                    , configurable: true
                });

                var should = {};

                should.equal = function (val1, val2, msg) {
                    new Assertion(val1, msg).to.equal(val2);
                };

                should.Throw = function (fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.Throw(errt, errs);
                };

                should.exist = function (val, msg) {
                    new Assertion(val, msg).to.exist;
                }

                // negation
                should.not = {}

                should.not.equal = function (val1, val2, msg) {
                    new Assertion(val1, msg).to.not.equal(val2);
                };

                should.not.Throw = function (fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.not.Throw(errt, errs);
                };

                should.not.exist = function (val, msg) {
                    new Assertion(val, msg).to.not.exist;
                }

                should['throw'] = should['Throw'];
                should.not['throw'] = should.not['Throw'];

                return should;
            };

            chai.should = loadShould;
            chai.Should = loadShould;
        };

    });

    require.register("chai/lib/chai/utils/addChainableMethod.js", function (exports, module) {
        /*!
         * Chai - addChainingMethod utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependencies
         */

        var transferFlags = require('chai/lib/chai/utils/transferFlags.js');
        var flag = require('chai/lib/chai/utils/flag.js');
        var config = require('chai/lib/chai/config.js');

        /*!
         * Module variables
         */

// Check whether `__proto__` is supported
        var hasProtoSupport = '__proto__' in Object;

// Without `__proto__` support, this module will need to add properties to a function.
// However, some Function.prototype methods cannot be overwritten,
// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
        var excludeNames = /^(?:length|name|arguments|caller)$/;

// Cache `Function` properties
        var call  = Function.prototype.call,
            apply = Function.prototype.apply;

        /**
         * ### addChainableMethod (ctx, name, method, chainingBehavior)
         *
         * Adds a method to an object, such that the method can also be chained.
         *
         *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
         *
         * The result can then be used as both a method assertion, executing both `method` and
         * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
         *
         *     expect(fooStr).to.be.foo('bar');
         *     expect(fooStr).to.be.foo.equal('foo');
         *
         * @param {Object} ctx object to which the method is added
         * @param {String} name of method to add
         * @param {Function} method function to be used for `name`, when called
         * @param {Function} chainingBehavior function to be called every time the property is accessed
         * @name addChainableMethod
         * @api public
         */

        module.exports = function (ctx, name, method, chainingBehavior) {
            if (typeof chainingBehavior !== 'function') {
                chainingBehavior = function () { };
            }

            var chainableBehavior = {
                method: method
                , chainingBehavior: chainingBehavior
            };

            // save the methods so we can overwrite them later, if we need to.
            if (!ctx.__methods) {
                ctx.__methods = {};
            }
            ctx.__methods[name] = chainableBehavior;

            Object.defineProperty(ctx, name,
                { get: function () {
                    chainableBehavior.chainingBehavior.call(this);

                    var assert = function assert() {
                        var old_ssfi = flag(this, 'ssfi');
                        if (old_ssfi && config.includeStack === false)
                            flag(this, 'ssfi', assert);
                        var result = chainableBehavior.method.apply(this, arguments);
                        return result === undefined ? this : result;
                    };

                    // Use `__proto__` if available
                    if (hasProtoSupport) {
                        // Inherit all properties from the object by replacing the `Function` prototype
                        var prototype = assert.__proto__ = Object.create(this);
                        // Restore the `call` and `apply` methods from `Function`
                        prototype.call = call;
                        prototype.apply = apply;
                    }
                    // Otherwise, redefine all properties (slow!)
                    else {
                        var asserterNames = Object.getOwnPropertyNames(ctx);
                        asserterNames.forEach(function (asserterName) {
                            if (!excludeNames.test(asserterName)) {
                                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                                Object.defineProperty(assert, asserterName, pd);
                            }
                        });
                    }

                    transferFlags(this, assert);
                    return assert;
                }
                    , configurable: true
                });
        };

    });

    require.register("chai/lib/chai/utils/addMethod.js", function (exports, module) {
        /*!
         * Chai - addMethod utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        var config = require('chai/lib/chai/config.js');

        /**
         * ### .addMethod (ctx, name, method)
         *
         * Adds a method to the prototype of an object.
         *
         *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addMethod('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(fooStr).to.be.foo('bar');
         *
         * @param {Object} ctx object to which the method is added
         * @param {String} name of method to add
         * @param {Function} method function to be used for name
         * @name addMethod
         * @api public
         */
        var flag = require('chai/lib/chai/utils/flag.js');

        module.exports = function (ctx, name, method) {
            ctx[name] = function () {
                var old_ssfi = flag(this, 'ssfi');
                if (old_ssfi && config.includeStack === false)
                    flag(this, 'ssfi', ctx[name]);
                var result = method.apply(this, arguments);
                return result === undefined ? this : result;
            };
        };

    });

    require.register("chai/lib/chai/utils/addProperty.js", function (exports, module) {
        /*!
         * Chai - addProperty utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### addProperty (ctx, name, getter)
         *
         * Adds a property to the prototype of an object.
         *
         *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addProperty('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.be.foo;
         *
         * @param {Object} ctx object to which the property is added
         * @param {String} name of property to add
         * @param {Function} getter function to be used for name
         * @name addProperty
         * @api public
         */

        module.exports = function (ctx, name, getter) {
            Object.defineProperty(ctx, name,
                { get: function () {
                    var result = getter.call(this);
                    return result === undefined ? this : result;
                }
                    , configurable: true
                });
        };

    });

    require.register("chai/lib/chai/utils/flag.js", function (exports, module) {
        /*!
         * Chai - flag utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### flag(object ,key, [value])
         *
         * Get or set a flag value on an object. If a
         * value is provided it will be set, else it will
         * return the currently set value or `undefined` if
         * the value is not set.
         *
         *     utils.flag(this, 'foo', 'bar'); // setter
         *     utils.flag(this, 'foo'); // getter, returns `bar`
         *
         * @param {Object} object (constructed Assertion
         * @param {String} key
         * @param {Mixed} value (optional)
         * @name flag
         * @api private
         */

        module.exports = function (obj, key, value) {
            var flags = obj.__flags || (obj.__flags = Object.create(null));
            if (arguments.length === 3) {
                flags[key] = value;
            } else {
                return flags[key];
            }
        };

    });

    require.register("chai/lib/chai/utils/getActual.js", function (exports, module) {
        /*!
         * Chai - getActual utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * # getActual(object, [actual])
         *
         * Returns the `actual` value for an Assertion
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         */

        module.exports = function (obj, args) {
            return args.length > 4 ? args[4] : obj._obj;
        };

    });

    require.register("chai/lib/chai/utils/getEnumerableProperties.js", function (exports, module) {
        /*!
         * Chai - getEnumerableProperties utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### .getEnumerableProperties(object)
         *
         * This allows the retrieval of enumerable property names of an object,
         * inherited or not.
         *
         * @param {Object} object
         * @returns {Array}
         * @name getEnumerableProperties
         * @api public
         */

        module.exports = function getEnumerableProperties(object) {
            var result = [];
            for (var name in object) {
                result.push(name);
            }
            return result;
        };

    });

    require.register("chai/lib/chai/utils/getMessage.js", function (exports, module) {
        /*!
         * Chai - message composition utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var flag = require('chai/lib/chai/utils/flag.js')
            , getActual = require('chai/lib/chai/utils/getActual.js')
            , inspect = require('chai/lib/chai/utils/inspect.js')
            , objDisplay = require('chai/lib/chai/utils/objDisplay.js');

        /**
         * ### .getMessage(object, message, negateMessage)
         *
         * Construct the error message based on flags
         * and template tags. Template tags will return
         * a stringified inspection of the object referenced.
         *
         * Message template tags:
         * - `#{this}` current asserted object
         * - `#{act}` actual value
         * - `#{exp}` expected value
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         * @name getMessage
         * @api public
         */

        module.exports = function (obj, args) {
            var negate = flag(obj, 'negate')
                , val = flag(obj, 'object')
                , expected = args[3]
                , actual = getActual(obj, args)
                , msg = negate ? args[2] : args[1]
                , flagMsg = flag(obj, 'message');

            if(typeof msg === "function") msg = msg();
            msg = msg || '';
            msg = msg
                .replace(/#{this}/g, objDisplay(val))
                .replace(/#{act}/g, objDisplay(actual))
                .replace(/#{exp}/g, objDisplay(expected));

            return flagMsg ? flagMsg + ': ' + msg : msg;
        };

    });

    require.register("chai/lib/chai/utils/getName.js", function (exports, module) {
        /*!
         * Chai - getName utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * # getName(func)
         *
         * Gets the name of a function, in a cross-browser way.
         *
         * @param {Function} a function (usually a constructor)
         */

        module.exports = function (func) {
            if (func.name) return func.name;

            var match = /^\s?function ([^(]*)\(/.exec(func);
            return match && match[1] ? match[1] : "";
        };

    });

    require.register("chai/lib/chai/utils/getPathValue.js", function (exports, module) {
        /*!
         * Chai - getPathValue utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * @see https://github.com/logicalparadox/filtr
         * MIT Licensed
         */

        /**
         * ### .getPathValue(path, object)
         *
         * This allows the retrieval of values in an
         * object given a string path.
         *
         *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
         *
         * The following would be the results.
         *
         *     getPathValue('prop1.str', obj); // Hello
         *     getPathValue('prop1.att[2]', obj); // b
         *     getPathValue('prop2.arr[0].nested', obj); // Universe
         *
         * @param {String} path
         * @param {Object} object
         * @returns {Object} value or `undefined`
         * @name getPathValue
         * @api public
         */

        var getPathValue = module.exports = function (path, obj) {
            var parsed = parsePath(path);
            return _getPathValue(parsed, obj);
        };

        /*!
         * ## parsePath(path)
         *
         * Helper function used to parse string object
         * paths. Use in conjunction with `_getPathValue`.
         *
         *      var parsed = parsePath('myobject.property.subprop');
         *
         * ### Paths:
         *
         * * Can be as near infinitely deep and nested
         * * Arrays are also valid using the formal `myobject.document[3].property`.
         *
         * @param {String} path
         * @returns {Object} parsed
         * @api private
         */

        function parsePath (path) {
            var str = path.replace(/\[/g, '.[')
                , parts = str.match(/(\\\.|[^.]+?)+/g);
            return parts.map(function (value) {
                var re = /\[(\d+)\]$/
                    , mArr = re.exec(value)
                if (mArr) return { i: parseFloat(mArr[1]) };
                else return { p: value };
            });
        };

        /*!
         * ## _getPathValue(parsed, obj)
         *
         * Helper companion function for `.parsePath` that returns
         * the value located at the parsed address.
         *
         *      var value = getPathValue(parsed, obj);
         *
         * @param {Object} parsed definition from `parsePath`.
         * @param {Object} object to search against
         * @returns {Object|Undefined} value
         * @api private
         */

        function _getPathValue (parsed, obj) {
            var tmp = obj
                , res;
            for (var i = 0, l = parsed.length; i < l; i++) {
                var part = parsed[i];
                if (tmp) {
                    if ('undefined' !== typeof part.p)
                        tmp = tmp[part.p];
                    else if ('undefined' !== typeof part.i)
                        tmp = tmp[part.i];
                    if (i == (l - 1)) res = tmp;
                } else {
                    res = undefined;
                }
            }
            return res;
        };

    });

    require.register("chai/lib/chai/utils/getProperties.js", function (exports, module) {
        /*!
         * Chai - getProperties utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### .getProperties(object)
         *
         * This allows the retrieval of property names of an object, enumerable or not,
         * inherited or not.
         *
         * @param {Object} object
         * @returns {Array}
         * @name getProperties
         * @api public
         */

        module.exports = function getProperties(object) {
            var result = Object.getOwnPropertyNames(subject);

            function addProperty(property) {
                if (result.indexOf(property) === -1) {
                    result.push(property);
                }
            }

            var proto = Object.getPrototypeOf(subject);
            while (proto !== null) {
                Object.getOwnPropertyNames(proto).forEach(addProperty);
                proto = Object.getPrototypeOf(proto);
            }

            return result;
        };

    });

    require.register("chai/lib/chai/utils/index.js", function (exports, module) {
        /*!
         * chai
         * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Main exports
         */

        var exports = module.exports = {};

        /*!
         * test utility
         */

        exports.test = require('chai/lib/chai/utils/test.js');

        /*!
         * type utility
         */

        exports.type = require('chai/lib/chai/utils/type.js');

        /*!
         * message utility
         */

        exports.getMessage = require('chai/lib/chai/utils/getMessage.js');

        /*!
         * actual utility
         */

        exports.getActual = require('chai/lib/chai/utils/getActual.js');

        /*!
         * Inspect util
         */

        exports.inspect = require('chai/lib/chai/utils/inspect.js');

        /*!
         * Object Display util
         */

        exports.objDisplay = require('chai/lib/chai/utils/objDisplay.js');

        /*!
         * Flag utility
         */

        exports.flag = require('chai/lib/chai/utils/flag.js');

        /*!
         * Flag transferring utility
         */

        exports.transferFlags = require('chai/lib/chai/utils/transferFlags.js');

        /*!
         * Deep equal utility
         */

        exports.eql = require('chaijs~deep-eql@0.1.3');

        /*!
         * Deep path value
         */

        exports.getPathValue = require('chai/lib/chai/utils/getPathValue.js');

        /*!
         * Function name
         */

        exports.getName = require('chai/lib/chai/utils/getName.js');

        /*!
         * add Property
         */

        exports.addProperty = require('chai/lib/chai/utils/addProperty.js');

        /*!
         * add Method
         */

        exports.addMethod = require('chai/lib/chai/utils/addMethod.js');

        /*!
         * overwrite Property
         */

        exports.overwriteProperty = require('chai/lib/chai/utils/overwriteProperty.js');

        /*!
         * overwrite Method
         */

        exports.overwriteMethod = require('chai/lib/chai/utils/overwriteMethod.js');

        /*!
         * Add a chainable method
         */

        exports.addChainableMethod = require('chai/lib/chai/utils/addChainableMethod.js');

        /*!
         * Overwrite chainable method
         */

        exports.overwriteChainableMethod = require('chai/lib/chai/utils/overwriteChainableMethod.js');


    });

    require.register("chai/lib/chai/utils/inspect.js", function (exports, module) {
// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

        var getName = require('chai/lib/chai/utils/getName.js');
        var getProperties = require('chai/lib/chai/utils/getProperties.js');
        var getEnumerableProperties = require('chai/lib/chai/utils/getEnumerableProperties.js');

        module.exports = inspect;

        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
         *    properties of objects.
         * @param {Number} depth Depth in which to descend in object. Default is 2.
         * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
         *    output. Default is false (no coloring).
         */
        function inspect(obj, showHidden, depth, colors) {
            var ctx = {
                showHidden: showHidden,
                seen: [],
                stylize: function (str) { return str; }
            };
            return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
        }

// Returns true if object is a DOM element.
        var isDOMElement = function (object) {
            if (typeof HTMLElement === 'object') {
                return object instanceof HTMLElement;
            } else {
                return object &&
                    typeof object === 'object' &&
                    object.nodeType === 1 &&
                    typeof object.nodeName === 'string';
            }
        };

        function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (value && typeof value.inspect === 'function' &&
                    // Filter out the util module, it's inspect function is special
                value.inspect !== exports.inspect &&
                    // Also filter out any prototype objects using the circular check.
                !(value.constructor && value.constructor.prototype === value)) {
                var ret = value.inspect(recurseTimes);
                if (typeof ret !== 'string') {
                    ret = formatValue(ctx, ret, recurseTimes);
                }
                return ret;
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
                return primitive;
            }

            // If this is a DOM element, try to get the outer HTML.
            if (isDOMElement(value)) {
                if ('outerHTML' in value) {
                    return value.outerHTML;
                    // This value does not have an outerHTML attribute,
                    //   it could still be an XML element
                } else {
                    // Attempt to serialize it
                    try {
                        if (document.xmlVersion) {
                            var xmlSerializer = new XMLSerializer();
                            return xmlSerializer.serializeToString(value);
                        } else {
                            // Firefox 11- do not support outerHTML
                            //   It does, however, support innerHTML
                            //   Use the following to render the element
                            var ns = "http://www.w3.org/1999/xhtml";
                            var container = document.createElementNS(ns, '_');

                            container.appendChild(value.cloneNode(false));
                            html = container.innerHTML
                                .replace('><', '>' + value.innerHTML + '<');
                            container.innerHTML = '';
                            return html;
                        }
                    } catch (err) {
                        // This could be a non-native DOM implementation,
                        //   continue with the normal flow:
                        //   printing the element as if it is an object.
                    }
                }
            }

            // Look up the keys of the object.
            var visibleKeys = getEnumerableProperties(value);
            var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

            // Some type of object without properties can be shortcutted.
            // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
            // a `stack` plus `description` property; ignore those for consistency.
            if (keys.length === 0 || (isError(value) && (
                (keys.length === 1 && keys[0] === 'stack') ||
                (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
                ))) {
                if (typeof value === 'function') {
                    var name = getName(value);
                    var nameSuffix = name ? ': ' + name : '';
                    return ctx.stylize('[Function' + nameSuffix + ']', 'special');
                }
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                }
                if (isDate(value)) {
                    return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
                }
                if (isError(value)) {
                    return formatError(value);
                }
            }

            var base = '', array = false, braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
                array = true;
                braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (typeof value === 'function') {
                var name = getName(value);
                var nameSuffix = name ? ': ' + name : '';
                base = ' [Function' + nameSuffix + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
                base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
                base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
                return formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                } else {
                    return ctx.stylize('[Object]', 'special');
                }
            }

            ctx.seen.push(value);

            var output;
            if (array) {
                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
                output = keys.map(function(key) {
                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                });
            }

            ctx.seen.pop();

            return reduceToSingleString(output, base, braces);
        }


        function formatPrimitive(ctx, value) {
            switch (typeof value) {
                case 'undefined':
                    return ctx.stylize('undefined', 'undefined');

                case 'string':
                    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                            .replace(/'/g, "\\'")
                            .replace(/\\"/g, '"') + '\'';
                    return ctx.stylize(simple, 'string');

                case 'number':
                    if (value === 0 && (1/value) === -Infinity) {
                        return ctx.stylize('-0', 'number');
                    }
                    return ctx.stylize('' + value, 'number');

                case 'boolean':
                    return ctx.stylize('' + value, 'boolean');
            }
            // For some reason typeof null is "object", so special case here.
            if (value === null) {
                return ctx.stylize('null', 'null');
            }
        }


        function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
        }


        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
                if (Object.prototype.hasOwnProperty.call(value, String(i))) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        String(i), true));
                } else {
                    output.push('');
                }
            }
            keys.forEach(function(key) {
                if (!key.match(/^\d+$/)) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        key, true));
                }
            });
            return output;
        }


        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str;
            if (value.__lookupGetter__) {
                if (value.__lookupGetter__(key)) {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize('[Getter/Setter]', 'special');
                    } else {
                        str = ctx.stylize('[Getter]', 'special');
                    }
                } else {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize('[Setter]', 'special');
                    }
                }
            }
            if (visibleKeys.indexOf(key) < 0) {
                name = '[' + key + ']';
            }
            if (!str) {
                if (ctx.seen.indexOf(value[key]) < 0) {
                    if (recurseTimes === null) {
                        str = formatValue(ctx, value[key], null);
                    } else {
                        str = formatValue(ctx, value[key], recurseTimes - 1);
                    }
                    if (str.indexOf('\n') > -1) {
                        if (array) {
                            str = str.split('\n').map(function(line) {
                                return '  ' + line;
                            }).join('\n').substr(2);
                        } else {
                            str = '\n' + str.split('\n').map(function(line) {
                                return '   ' + line;
                            }).join('\n');
                        }
                    }
                } else {
                    str = ctx.stylize('[Circular]', 'special');
                }
            }
            if (typeof name === 'undefined') {
                if (array && key.match(/^\d+$/)) {
                    return str;
                }
                name = JSON.stringify('' + key);
                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                    name = name.substr(1, name.length - 2);
                    name = ctx.stylize(name, 'name');
                } else {
                    name = name.replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'");
                    name = ctx.stylize(name, 'string');
                }
            }

            return name + ': ' + str;
        }


        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
                numLinesEst++;
                if (cur.indexOf('\n') >= 0) numLinesEst++;
                return prev + cur.length + 1;
            }, 0);

            if (length > 60) {
                return braces[0] +
                    (base === '' ? '' : base + '\n ') +
                    ' ' +
                    output.join(',\n  ') +
                    ' ' +
                    braces[1];
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        function isArray(ar) {
            return Array.isArray(ar) ||
                (typeof ar === 'object' && objectToString(ar) === '[object Array]');
        }

        function isRegExp(re) {
            return typeof re === 'object' && objectToString(re) === '[object RegExp]';
        }

        function isDate(d) {
            return typeof d === 'object' && objectToString(d) === '[object Date]';
        }

        function isError(e) {
            return typeof e === 'object' && objectToString(e) === '[object Error]';
        }

        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }

    });

    require.register("chai/lib/chai/utils/objDisplay.js", function (exports, module) {
        /*!
         * Chai - flag utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var inspect = require('chai/lib/chai/utils/inspect.js');
        var config = require('chai/lib/chai/config.js');

        /**
         * ### .objDisplay (object)
         *
         * Determines if an object or an array matches
         * criteria to be inspected in-line for error
         * messages or should be truncated.
         *
         * @param {Mixed} javascript object to inspect
         * @name objDisplay
         * @api public
         */

        module.exports = function (obj) {
            var str = inspect(obj)
                , type = Object.prototype.toString.call(obj);

            if (config.truncateThreshold && str.length >= config.truncateThreshold) {
                if (type === '[object Function]') {
                    return !obj.name || obj.name === ''
                        ? '[Function]'
                        : '[Function: ' + obj.name + ']';
                } else if (type === '[object Array]') {
                    return '[ Array(' + obj.length + ') ]';
                } else if (type === '[object Object]') {
                    var keys = Object.keys(obj)
                        , kstr = keys.length > 2
                            ? keys.splice(0, 2).join(', ') + ', ...'
                            : keys.join(', ');
                    return '{ Object (' + kstr + ') }';
                } else {
                    return str;
                }
            } else {
                return str;
            }
        };

    });

    require.register("chai/lib/chai/utils/overwriteMethod.js", function (exports, module) {
        /*!
         * Chai - overwriteMethod utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### overwriteMethod (ctx, name, fn)
         *
         * Overwites an already existing method and provides
         * access to previous function. Must return function
         * to be used for name.
         *
         *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.overwriteMethod('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.equal('bar');
         *
         * @param {Object} ctx object whose method is to be overwritten
         * @param {String} name of method to overwrite
         * @param {Function} method function that returns a function to be used for name
         * @name overwriteMethod
         * @api public
         */

        module.exports = function (ctx, name, method) {
            var _method = ctx[name]
                , _super = function () { return this; };

            if (_method && 'function' === typeof _method)
                _super = _method;

            ctx[name] = function () {
                var result = method(_super).apply(this, arguments);
                return result === undefined ? this : result;
            }
        };

    });

    require.register("chai/lib/chai/utils/overwriteProperty.js", function (exports, module) {
        /*!
         * Chai - overwriteProperty utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### overwriteProperty (ctx, name, fn)
         *
         * Overwites an already existing property getter and provides
         * access to previous value. Must return function to use as getter.
         *
         *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
         *
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.overwriteProperty('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.be.ok;
         *
         * @param {Object} ctx object whose property is to be overwritten
         * @param {String} name of property to overwrite
         * @param {Function} getter function that returns a getter function to be used for name
         * @name overwriteProperty
         * @api public
         */

        module.exports = function (ctx, name, getter) {
            var _get = Object.getOwnPropertyDescriptor(ctx, name)
                , _super = function () {};

            if (_get && 'function' === typeof _get.get)
                _super = _get.get

            Object.defineProperty(ctx, name,
                { get: function () {
                    var result = getter(_super).call(this);
                    return result === undefined ? this : result;
                }
                    , configurable: true
                });
        };

    });

    require.register("chai/lib/chai/utils/overwriteChainableMethod.js", function (exports, module) {
        /*!
         * Chai - overwriteChainableMethod utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### overwriteChainableMethod (ctx, name, fn)
         *
         * Overwites an already existing chainable method
         * and provides access to the previous function or
         * property.  Must return functions to be used for
         * name.
         *
         *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
         *       function (_super) {
 *       }
         *     , function (_super) {
 *       }
         *     );
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.have.length(3);
         *     expect(myFoo).to.have.length.above(3);
         *
         * @param {Object} ctx object whose method / property is to be overwritten
         * @param {String} name of method / property to overwrite
         * @param {Function} method function that returns a function to be used for name
         * @param {Function} chainingBehavior function that returns a function to be used for property
         * @name overwriteChainableMethod
         * @api public
         */

        module.exports = function (ctx, name, method, chainingBehavior) {
            var chainableBehavior = ctx.__methods[name];

            var _chainingBehavior = chainableBehavior.chainingBehavior;
            chainableBehavior.chainingBehavior = function () {
                var result = chainingBehavior(_chainingBehavior).call(this);
                return result === undefined ? this : result;
            };

            var _method = chainableBehavior.method;
            chainableBehavior.method = function () {
                var result = method(_method).apply(this, arguments);
                return result === undefined ? this : result;
            };
        };

    });

    require.register("chai/lib/chai/utils/test.js", function (exports, module) {
        /*!
         * Chai - test utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var flag = require('chai/lib/chai/utils/flag.js');

        /**
         * # test(object, expression)
         *
         * Test and object for expression.
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         */

        module.exports = function (obj, args) {
            var negate = flag(obj, 'negate')
                , expr = args[0];
            return negate ? !expr : expr;
        };

    });

    require.register("chai/lib/chai/utils/transferFlags.js", function (exports, module) {
        /*!
         * Chai - transferFlags utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### transferFlags(assertion, object, includeAll = true)
         *
         * Transfer all the flags for `assertion` to `object`. If
         * `includeAll` is set to `false`, then the base Chai
         * assertion flags (namely `object`, `ssfi`, and `message`)
         * will not be transferred.
         *
         *
         *     var newAssertion = new Assertion();
         *     utils.transferFlags(assertion, newAssertion);
         *
         *     var anotherAsseriton = new Assertion(myObj);
         *     utils.transferFlags(assertion, anotherAssertion, false);
         *
         * @param {Assertion} assertion the assertion to transfer the flags from
         * @param {Object} object the object to transfer the flags too; usually a new assertion
         * @param {Boolean} includeAll
         * @name getAllFlags
         * @api private
         */

        module.exports = function (assertion, object, includeAll) {
            var flags = assertion.__flags || (assertion.__flags = Object.create(null));

            if (!object.__flags) {
                object.__flags = Object.create(null);
            }

            includeAll = arguments.length === 3 ? includeAll : true;

            for (var flag in flags) {
                if (includeAll ||
                    (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
                    object.__flags[flag] = flags[flag];
                }
            }
        };

    });

    require.register("chai/lib/chai/utils/type.js", function (exports, module) {
        /*!
         * Chai - type utility
         * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Detectable javascript natives
         */

        var natives = {
            '[object Arguments]': 'arguments'
            , '[object Array]': 'array'
            , '[object Date]': 'date'
            , '[object Function]': 'function'
            , '[object Number]': 'number'
            , '[object RegExp]': 'regexp'
            , '[object String]': 'string'
        };

        /**
         * ### type(object)
         *
         * Better implementation of `typeof` detection that can
         * be used cross-browser. Handles the inconsistencies of
         * Array, `null`, and `undefined` detection.
         *
         *     utils.type({}) // 'object'
         *     utils.type(null) // `null'
         *     utils.type(undefined) // `undefined`
         *     utils.type([]) // `array`
         *
         * @param {Mixed} object to detect type of
         * @name type
         * @api private
         */

        module.exports = function (obj) {
            var str = Object.prototype.toString.call(obj);
            if (natives[str]) return natives[str];
            if (obj === null) return 'null';
            if (obj === undefined) return 'undefined';
            if (obj === Object(obj)) return 'object';
            return typeof obj;
        };

    });

    if (typeof exports == "object") {
        module.exports = require("chai");
    } else if (typeof define == "function" && define.amd) {
        define("chai", [], function(){ return require("chai"); });
    } else {
        (this || window)["chai"] = require("chai");
    }
})();
