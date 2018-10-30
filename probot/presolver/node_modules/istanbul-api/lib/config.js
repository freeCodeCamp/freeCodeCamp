/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var path = require('path'),
    fs = require('fs'),
    existsSync = fs.existsSync,
    CAMEL_PATTERN = /([a-z])([A-Z])/g,
    YML_PATTERN = /\.ya?ml$/,
    yaml = require('js-yaml'),
    libReport = require('istanbul-lib-report'),
    inputError = require('./input-error');

function defaultConfig() {
    var ret = {
        verbose: false,
        instrumentation: {
            root: '.',
            extensions: ['.js'],
            'default-excludes': true,
            excludes: [],
            variable: '__coverage__',
            compact: true,
            'preserve-comments': false,
            'complete-copy': false,
            'save-baseline': false,
            'baseline-file': './coverage/coverage-baseline.raw.json',
            'include-all-sources': false,
            'include-pid': false,
            'es-modules': false,
            'auto-wrap': false
        },
        reporting: {
            print: 'summary',
            reports: [ 'lcov' ],
            dir: './coverage',
            summarizer: 'pkg',
            'report-config': {}
        },
        hooks: {
            'hook-run-in-context': false,
            'hook-run-in-this-context': false,
            'post-require-hook': null,
            'handle-sigint': false
        },
        check: {
            global: {
                statements: 0,
                lines: 0,
                branches: 0,
                functions: 0,
                excludes: [] // Currently list of files (root + path). For future, extend to patterns.
            },
            each: {
                statements: 0,
                lines: 0,
                branches: 0,
                functions: 0,
                excludes: []
            }
        }
    };
    ret.reporting.watermarks = libReport.getDefaultWatermarks();
    ret.reporting['report-config'] = {};
    return ret;
}

function dasherize(word) {
    return word.replace(CAMEL_PATTERN, function (match, lch, uch) {
        return lch + '-' + uch.toLowerCase();
    });
}
function isScalar(v) {
    if (v === null) { return true; }
    return v !== undefined && !Array.isArray(v) && typeof v !== 'object';
}

function isObject(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function mergeObjects(explicit, template, bothWays) {

    var ret = {},
        keys = Object.keys(template);

    if (bothWays) {
        keys.push.apply(keys, Object.keys(explicit));
    }
    keys.forEach(function (k) {
        var v1 = template[k],
            v2 = explicit[k];

        if (Array.isArray(v1)) {
            ret[k] = Array.isArray(v2) && v2.length > 0 ? v2 : v1;
        } else if (isObject(v1)) {
            v2 = isObject(v2) ? v2 : {};
            ret[k] = mergeObjects(v2, v1, bothWays);
        } else if (!v1 && v2) {
            ret[k] = v2;
        } else {
            ret[k] = isScalar(v2) ? v2 : v1;
        }
    });
    return ret;
}

function mergeDefaults(explicit, implicit) {
    explicit = explicit || {};
    var initialMerge = mergeObjects(explicit || {}, implicit),
        explicitReportConfig = (explicit.reporting || {})['report-config'] || {},
        implicitReportConfig = initialMerge.reporting['report-config'] || {};
    initialMerge.reporting['report-config'] = mergeObjects(explicitReportConfig, implicitReportConfig, true);
    return initialMerge;
}

function addMethods() {
    var args = Array.prototype.slice.call(arguments),
        cons = args.shift();

    args.forEach(function (arg) {
        var property = dasherize(arg);
        cons.prototype[arg] = function () {
            return this.config[property];
        };
    });
}

/**
 * Object that returns instrumentation options
 * @class InstrumentOptions
 * @module config
 * @constructor
 * @param config the instrumentation part of the config object
 */
function InstrumentOptions(config) {
    this.config = config;
}

/**
 * returns if default excludes should be turned on. Used by the `cover` command.
 * @method defaultExcludes
 * @return {Boolean} true if default excludes should be turned on
 */
/**
 * returns if non-JS files should be copied during instrumentation. Used by the
 * `instrument` command.
 * @method completeCopy
 * @return {Boolean} true if non-JS files should be copied
 */
/**
 * the coverage variable name to use. Used by the `instrument` command.
 * @method variable
 * @return {String} the coverage variable name to use
 */
/**
 * returns if the output should be compact JS. Used by the `instrument` command.
 * @method compact
 * @return {Boolean} true if the output should be compact
 */
/**
 * returns if comments should be preserved in the generated JS. Used by the
 * `cover` and `instrument` commands.
 * @method preserveComments
 * @return {Boolean} true if comments should be preserved in the generated JS
 */
/**
 * returns if a zero-coverage baseline file should be written as part of
 * instrumentation. This allows reporting to display numbers for files that have
 * no tests. Used by the  `instrument` command.
 * @method saveBaseline
 * @return {Boolean} true if a baseline coverage file should be written.
 */
/**
 * Sets the baseline coverage filename. Used by the  `instrument` command.
 * @method baselineFile
 * @return {String} the name of the baseline coverage file.
 */
/**
 * returns if comments the JS to instrument contains es6 Module syntax.
 * @method esModules
 * @return {Boolean} true if code contains es6 import/export statements.
 */
/**
 * returns if the coverage filename should include the PID. Used by the  `instrument` command.
 * @method includePid
 * @return {Boolean} true to include pid in coverage filename.
 */

addMethods(InstrumentOptions,
    'extensions', 'defaultExcludes', 'completeCopy',
    'variable', 'compact', 'preserveComments',
    'saveBaseline', 'baselineFile', 'esModules',
    'includeAllSources', 'includePid', 'autoWrap');

/**
 * returns the root directory used by istanbul which is typically the root of the
 * source tree. Used by the `cover` and `report` commands.
 * @method root
 * @return {String} the root directory used by istanbul.
 */
InstrumentOptions.prototype.root = function () { return path.resolve(this.config.root); };
/**
 * returns an array of fileset patterns that should be excluded for instrumentation.
 * Used by the `instrument` and `cover` commands.
 * @method excludes
 * @return {Array} an array of fileset patterns that should be excluded for
 *  instrumentation.
 */
InstrumentOptions.prototype.excludes = function (excludeTests) {
    var defs;
    if (this.defaultExcludes()) {
        defs = [ '**/node_modules/**' ];
        if (excludeTests) {
            defs = defs.concat(['**/test/**', '**/tests/**']);
        }
        return defs.concat(this.config.excludes);
    }
    return this.config.excludes;
};

InstrumentOptions.prototype.getInstrumenterOpts = function () {
    return {
        coverageVariable: this.variable(),
        compact: this.compact(),
        preserveComments: this.preserveComments(),
        esModules: this.esModules(),
        autoWrap: this.autoWrap()
    };
};

/**
 * Object that returns reporting options
 * @class ReportingOptions
 * @module config
 * @constructor
 * @param config the reporting part of the config object
 */
function ReportingOptions(config) {
    this.config = config;
}

/**
 * returns the kind of information to be printed on the console. May be one
 * of `summary`, `detail`, `both` or `none`. Used by the
 * `cover` command.
 * @method print
 * @return {String} the kind of information to print to the console at the end
 * of the `cover` command execution.
 */
/**
 * returns a list of reports that should be generated at the end of a run. Used
 * by the `cover` and `report` commands.
 * @method reports
 * @return {Array} an array of reports that should be produced
 */
/**
 * returns the directory under which reports should be generated. Used by the
 * `cover` and `report` commands.
 *
 * @method dir
 * @return {String} the directory under which reports should be generated.
 */
/**
 * returns an object that has keys that are report format names and values that are objects
 * containing detailed configuration for each format. Running `istanbul help config`
 * will give you all the keys per report format that can be overridden.
 * Used by the `cover` and `report` commands.
 * @method reportConfig
 * @return {Object} detailed report configuration per report format.
 */
addMethods(ReportingOptions, 'print', 'reports', 'dir', 'reportConfig', 'summarizer');

function isInvalidMark(v, key) {
    var prefix = 'Watermark for [' + key + '] :';

    if (v.length !== 2) {
        return prefix + 'must be an array of length 2';
    }
    v[0] = Number(v[0]);
    v[1] = Number(v[1]);

    if (isNaN(v[0]) || isNaN(v[1])) {
        return prefix + 'must have valid numbers';
    }
    if (v[0] < 0 || v[1] < 0) {
        return prefix + 'must be positive numbers';
    }
    if (v[1] > 100) {
        return prefix + 'cannot exceed 100';
    }
    if (v[1] <= v[0]) {
        return prefix + 'low must be less than high';
    }
    return null;
}

/**
 * returns the low and high watermarks to be used to designate whether coverage
 * is `low`, `medium` or `high`. Statements, functions, branches and lines can
 * have independent watermarks. These are respected by all reports
 * that color for low, medium and high coverage. See the default configuration for exact syntax
 * using `istanbul help config`. Used by the `cover` and `report` commands.
 *
 * @method watermarks
 * @return {Object} an object containing low and high watermarks for statements,
 *  branches, functions and lines.
 */
ReportingOptions.prototype.watermarks = function () {
    var v = this.config.watermarks,
        defs = libReport.getDefaultWatermarks(),
        ret = {};

    Object.keys(defs).forEach(function (k) {
        var mark = v[k], //it will already be a non-zero length array because of the way the merge works
            message = isInvalidMark(mark, k);
        if (message) {
            console.error(message);
            ret[k] = defs[k];
        } else {
            ret[k] = mark;
        }
    });
    return ret;
};

/**
 * Object that returns hook options. Note that istanbul does not provide an
 * option to hook `require`. This is always done by the `cover` command.
 * @class HookOptions
 * @module config
 * @constructor
 * @param config the hooks part of the config object
 */
function HookOptions(config) {
    this.config = config;
}

/**
 * returns if `vm.runInContext` needs to be hooked. Used by the `cover` command.
 * @method hookRunInContext
 * @return {Boolean} true if `vm.runInContext` needs to be hooked for coverage
 */
/**
 * returns if `vm.runInThisContext` needs to be hooked, in addition to the standard
 * `require` hooks added by istanbul. This should be true for code that uses
 * RequireJS for example. Used by the `cover` command.
 * @method hookRunInThisContext
 * @return {Boolean} true if `vm.runInThisContext` needs to be hooked for coverage
 */
/**
 * returns a path to JS file or a dependent module that should be used for
 * post-processing files after they have been required. See the `yui-istanbul` module for
 * an example of a post-require hook. This particular hook modifies the yui loader when
 * that file is required to add istanbul interceptors. Use by the `cover` command
 *
 * @method postRequireHook
 * @return {String} a path to a JS file or the name of a node module that needs
 * to be used as a `require` post-processor
 */
/**
 * returns if istanbul needs to add a SIGINT (control-c, usually) handler to
 * save coverage information. Useful for getting code coverage out of processes
 * that run forever and need a SIGINT to terminate.
 * @method handleSigint
 * @return {Boolean} true if SIGINT needs to be hooked to write coverage information
 */

addMethods(HookOptions, 'hookRunInContext', 'hookRunInThisContext', 'postRequireHook', 'handleSigint');

/**
 * represents the istanbul configuration and provides sub-objects that can
 * return instrumentation, reporting and hook options respectively.
 * Usage
 * -----
 *
 *      var configObj = require('istanbul').config.loadFile();
 *
 *      console.log(configObj.reporting.reports());
 *
 * @class Configuration
 * @module config
 * @param {Object} obj  the base object to use as the configuration
 * @param {Object} overrides optional - override attributes that are merged into
 *  the base config
 * @constructor
 */
function Configuration(obj, overrides) {

    var config = mergeDefaults(obj, defaultConfig(true));
    if (isObject(overrides)) {
        config = mergeDefaults(overrides, config);
    }
    if (config.verbose) {
        console.error('Using configuration');
        console.error('-------------------');
        console.error(yaml.safeDump(config, { indent: 4, flowLevel: 3 }));
        console.error('-------------------\n');
    }
    this.verbose = config.verbose;
    this.instrumentation = new InstrumentOptions(config.instrumentation);
    this.reporting = new ReportingOptions(config.reporting);
    this.hooks = new HookOptions(config.hooks);
    this.check = config.check; // Pass raw config sub-object.
}

/**
 * true if verbose logging is required
 * @property verbose
 * @type Boolean
 */
/**
 * instrumentation options
 * @property instrumentation
 * @type InstrumentOptions
 */
/**
 * reporting options
 * @property reporting
 * @type ReportingOptions
 */
/**
 * hook options
 * @property hooks
 * @type HookOptions
 */


function loadFile(file, overrides) {
    var defaultConfigFile = path.resolve('.istanbul.yml'),
        configObject;

    if (file) {
        if (!existsSync(file)) {
            throw inputError.create('Invalid configuration file specified:' + file);
        }
    } else {
        if (existsSync(defaultConfigFile)) {
            file = defaultConfigFile;
        }
    }

    if (file) {
        if (overrides && overrides.verbose === true) {
            console.error('Loading config: ' + file);
        }
        configObject = file.match(YML_PATTERN) ?
            yaml.safeLoad(fs.readFileSync(file, 'utf8'), { filename: file }) :
            require(path.resolve(file));
    }

    return new Configuration(configObject, overrides);
}

function loadObject(obj, overrides) {
    return new Configuration(obj, overrides);
}

/**
 * methods to load the configuration object.
 * Usage
 * -----
 *
 *      var config = require('istanbul').config,
 *          configObj = config.loadFile();
 *
 *      console.log(configObj.reporting.reports());
 *
 * @class Config
 * @module main
 * @static
 */
module.exports = {
    /**
     * loads the specified configuration file with optional overrides. Throws
     * when a file is specified and it is not found.
     * @method loadFile
     * @static
     * @param {String} file the file to load. If falsy, the default config file, if present, is loaded.
     *  If not a default config is used.
     * @param {Object} overrides - an object with override keys that are merged into the
     *  config object loaded
     * @return {Configuration} the config object with overrides applied
     */
    loadFile: loadFile,
    /**
     * loads the specified configuration object with optional overrides.
     * @method loadObject
     * @static
     * @param {Object} obj the object to use as the base configuration.
     * @param {Object} overrides - an object with override keys that are merged into the
     *  config object
     * @return {Configuration} the config object with overrides applied
     */
    loadObject: loadObject,
    /**
     * returns the default configuration object. Note that this is a plain object
     * and not a `Configuration` instance.
     * @method defaultConfig
     * @static
     * @return {Object} an object that represents the default config
     */
    defaultConfig: defaultConfig
};
