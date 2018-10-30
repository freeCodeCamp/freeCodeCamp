/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var path = require('path'),
    vm = require('vm'),
    appendTransform = require('append-transform'),
    originalCreateScript = vm.createScript,
    originalRunInThisContext = vm.runInThisContext,
    originalRunInContext = vm.runInContext;

function transformFn(matcher, transformer, verbose) {

    return function (code, filename) {
        var shouldHook = typeof filename === 'string' && matcher(path.resolve(filename)),
            transformed,
            changed = false;

        if (shouldHook) {
            if (verbose) {
                console.error('Module load hook: transform [' + filename + ']');
            }
            try {
                transformed = transformer(code, filename);
                changed = true;
            } catch (ex) {
                console.error('Transformation error for', filename, '; return original code');
                console.error(ex.message || String(ex));
                if (verbose) {
                    console.error(ex.stack);
                }
                transformed = code;
            }
        } else {
            transformed = code;
        }
        return { code: transformed, changed: changed };
    };
}
/**
 * unloads the required caches, removing all files that would have matched
 * the supplied matcher.
 * @param {Function} matcher - the match function that accepts a file name and
 *  returns if that file should be unloaded from the cache.
 */
function unloadRequireCache(matcher) {
    /* istanbul ignore else: impossible to test */
    if (matcher && typeof require !== 'undefined' && require && require.cache) {
        Object.keys(require.cache).forEach(function (filename) {
            if (matcher(filename)) {
                delete require.cache[filename];
            }
        });
    }
}
/**
 * hooks `require` to return transformed code to the node module loader.
 * Exceptions in the transform result in the original code being used instead.
 * @method hookRequire
 * @static
 * @param matcher {Function(filePath)} a function that is called with the absolute path to the file being
 *  `require`-d. Should return a truthy value when transformations need to be applied to the code, a falsy value otherwise
 * @param transformer {Function(code, filePath)} a function called with the original code and the associated path of the file
 *  from where the code was loaded. Should return the transformed code.
 * @param options {Object} options Optional.
 * @param {Boolean} [options.verbose] write a line to standard error every time the transformer is called
 * @param {Function} [options.postLoadHook] a function that is called with the name of the file being
 *  required. This is called after the require is processed irrespective of whether it was transformed.
 * @returns {Function} a reset function that can be called to remove the hook
 */
function hookRequire(matcher, transformer, options) {
    options = options || {};
    var extensions,
        disable = false,
        fn = transformFn(matcher, transformer, options.verbose),
        postLoadHook = options.postLoadHook &&
            typeof options.postLoadHook === 'function' ? options.postLoadHook : null;

    extensions = options.extensions || ['.js'];

    extensions.forEach(function(ext){
        appendTransform(function (code, filename) {
            if (disable) {
                return code;
            }
            var ret = fn(code, filename);
            if (postLoadHook) {
                postLoadHook(filename);
            }
            return ret.code;
        }, ext);
    });

    return function () {
        disable = true;
    };
}
/**
 * hooks `vm.createScript` to return transformed code out of which a `Script` object will be created.
 * Exceptions in the transform result in the original code being used instead.
 * @method hookCreateScript
 * @static
 * @param matcher {Function(filePath)} a function that is called with the filename passed to `vm.createScript`
 *  Should return a truthy value when transformations need to be applied to the code, a falsy value otherwise
 * @param transformer {Function(code, filePath)} a function called with the original code and the filename passed to
 *  `vm.createScript`. Should return the transformed code.
 * @param options {Object} options Optional.
 * @param {Boolean} [options.verbose] write a line to standard error every time the transformer is called
 */
function hookCreateScript(matcher, transformer, opts) {
    opts = opts || {};
    var fn = transformFn(matcher, transformer, opts.verbose);
    vm.createScript = function (code, file) {
        var ret = fn(code, file);
        return originalCreateScript(ret.code, file);
    };
}
/**
 * unhooks vm.createScript, restoring it to its original state.
 * @method unhookCreateScript
 * @static
 */
function unhookCreateScript() {
    vm.createScript = originalCreateScript;
}
/**
 * hooks `vm.runInThisContext` to return transformed code.
 * @method hookRunInThisContext
 * @static
 * @param matcher {Function(filePath)} a function that is called with the filename passed to `vm.createScript`
 *  Should return a truthy value when transformations need to be applied to the code, a falsy value otherwise
 * @param transformer {Function(code, filePath)} a function called with the original code and the filename passed to
 *  `vm.createScript`. Should return the transformed code.
 * @param opts {Object} [opts={}] options
 * @param {Boolean} [opts.verbose] write a line to standard error every time the transformer is called
 */
function hookRunInThisContext(matcher, transformer, opts) {
    opts = opts || {};
    var fn = transformFn(matcher, transformer, opts.verbose);
    vm.runInThisContext = function (code, file) {
        var ret = fn(code, file);
        return originalRunInThisContext(ret.code, file);
    };
}
/**
 * unhooks vm.runInThisContext, restoring it to its original state.
 * @method unhookRunInThisContext
 * @static
 */
function unhookRunInThisContext() {
    vm.runInThisContext = originalRunInThisContext;
}
/**
 * hooks `vm.runInContext` to return transformed code.
 * @method hookRunInContext
 * @static
 * @param matcher {Function(filePath)} a function that is called with the filename passed to `vm.createScript`
 *  Should return a truthy value when transformations need to be applied to the code, a falsy value otherwise
 * @param transformer {Function(code, filePath)} a function called with the original code and the filename passed to
 *  `vm.createScript`. Should return the transformed code.
 * @param opts {Object} [opts={}] options
 * @param {Boolean} [options.verbose] write a line to standard error every time the transformer is called
 */
function hookRunInContext(matcher, transformer, opts) {
    opts = opts || {};
    var fn = transformFn(matcher, transformer, opts.verbose);
    vm.runInContext = function (code, context, file) {
        var ret = fn(code, file);
        var coverageVariable = opts.coverageVariable || '__coverage__';
        // Refer coverage variable in context to global coverage variable.
        // So that coverage data will be written in global coverage variable for unit tests run in vm.runInContext.
        // If all unit tests are run in vm.runInContext, no global coverage variable will be generated.
        // Thus initialize a global coverage variable here.
        if (!global[coverageVariable]) {
            global[coverageVariable] = {};
        }
        context[coverageVariable] = global[coverageVariable];
        return originalRunInContext(ret.code, context, file);
    };
    
}
/**
 * unhooks vm.runInContext, restoring it to its original state.
 * @method unhookRunInContext
 * @static
 */
function unhookRunInContext() {
    vm.runInContext = originalRunInContext;
}
/**
 * istanbul-lib-hook provides mechanisms to transform code in the scope of `require`,
 * `vm.createScript`, `vm.runInThisContext` etc.
 *
 * This mechanism is general and relies on a user-supplied `matcher` function that
 * determines when transformations should be performed and a user-supplied `transformer`
 * function that performs the actual transform. Instrumenting code for coverage is
 * one specific example of useful hooking.
 *
 * Note that both the `matcher` and `transformer` must execute synchronously.
 *
 * @module Exports
 * @example
 * var hook = require('istanbul-lib-hook'),
 *     myMatcher = function (file) { return file.match(/foo/); },
 *     myTransformer = function (code, file) {
 *         return 'console.log("' + file + '");' + code;
 *     };
 *
 * hook.hookRequire(myMatcher, myTransformer);
 * var foo = require('foo'); //will now print foo's module path to console
 */
module.exports = {
    hookRequire: hookRequire,
    hookCreateScript: hookCreateScript,
    unhookCreateScript: unhookCreateScript,
    hookRunInThisContext : hookRunInThisContext,
    unhookRunInThisContext : unhookRunInThisContext,
    hookRunInContext : hookRunInContext,
    unhookRunInContext : unhookRunInContext,
    unloadRequireCache: unloadRequireCache
};


