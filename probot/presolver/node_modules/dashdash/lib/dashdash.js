/**
 * dashdash - A light, featureful and explicit option parsing library for
 * node.js.
 */
// vim: set ts=4 sts=4 sw=4 et:

var assert = require('assert-plus');
var format = require('util').format;
var fs = require('fs');
var path = require('path');


var DEBUG = true;
if (DEBUG) {
    var debug = console.warn;
} else {
    var debug = function () {};
}



// ---- internal support stuff

// Replace {{variable}} in `s` with the template data in `d`.
function renderTemplate(s, d) {
    return s.replace(/{{([a-zA-Z]+)}}/g, function (match, key) {
        return d.hasOwnProperty(key) ? d[key] : match;
    });
}

/**
 * Return a shallow copy of the given object;
 */
function shallowCopy(obj) {
    if (!obj) {
        return (obj);
    }
    var copy = {};
    Object.keys(obj).forEach(function (k) {
        copy[k] = obj[k];
    });
    return (copy);
}


function space(n) {
    var s = '';
    for (var i = 0; i < n; i++) {
        s += ' ';
    }
    return s;
}


function makeIndent(arg, deflen, name) {
    if (arg === null || arg === undefined)
        return space(deflen);
    else if (typeof (arg) === 'number')
        return space(arg);
    else if (typeof (arg) === 'string')
        return arg;
    else
        assert.fail('invalid "' + name + '": not a string or number: ' + arg);
}


/**
 * Return an array of lines wrapping the given text to the given width.
 * This splits on whitespace. Single tokens longer than `width` are not
 * broken up.
 */
function textwrap(s, width) {
    var words = s.trim().split(/\s+/);
    var lines = [];
    var line = '';
    words.forEach(function (w) {
        var newLength = line.length + w.length;
        if (line.length > 0)
            newLength += 1;
        if (newLength > width) {
            lines.push(line);
            line = '';
        }
        if (line.length > 0)
            line += ' ';
        line += w;
    });
    lines.push(line);
    return lines;
}


/**
 * Transform an option name to a "key" that is used as the field
 * on the `opts` object returned from `<parser>.parse()`.
 *
 * Transformations:
 * - '-' -> '_': This allow one to use hyphen in option names (common)
 *   but not have to do silly things like `opt["dry-run"]` to access the
 *   parsed results.
 */
function optionKeyFromName(name) {
    return name.replace(/-/g, '_');
}



// ---- Option types

function parseBool(option, optstr, arg) {
    return Boolean(arg);
}

function parseString(option, optstr, arg) {
    assert.string(arg, 'arg');
    return arg;
}

function parseNumber(option, optstr, arg) {
    assert.string(arg, 'arg');
    var num = Number(arg);
    if (isNaN(num)) {
        throw new Error(format('arg for "%s" is not a number: "%s"',
            optstr, arg));
    }
    return num;
}

function parseInteger(option, optstr, arg) {
    assert.string(arg, 'arg');
    var num = Number(arg);
    if (!/^[0-9-]+$/.test(arg) || isNaN(num)) {
        throw new Error(format('arg for "%s" is not an integer: "%s"',
            optstr, arg));
    }
    return num;
}

function parsePositiveInteger(option, optstr, arg) {
    assert.string(arg, 'arg');
    var num = Number(arg);
    if (!/^[0-9]+$/.test(arg) || isNaN(num) || num === 0) {
        throw new Error(format('arg for "%s" is not a positive integer: "%s"',
            optstr, arg));
    }
    return num;
}

/**
 * Supported date args:
 * - epoch second times (e.g. 1396031701)
 * - ISO 8601 format: YYYY-MM-DD[THH:MM:SS[.sss][Z]]
 *      2014-03-28T18:35:01.489Z
 *      2014-03-28T18:35:01.489
 *      2014-03-28T18:35:01Z
 *      2014-03-28T18:35:01
 *      2014-03-28
 */
function parseDate(option, optstr, arg) {
    assert.string(arg, 'arg');
    var date;
    if (/^\d+$/.test(arg)) {
        // epoch seconds
        date = new Date(Number(arg) * 1000);
    /* JSSTYLED */
    } else if (/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?Z?)?$/i.test(arg)) {
        // ISO 8601 format
        date = new Date(arg);
    } else {
        throw new Error(format('arg for "%s" is not a valid date format: "%s"',
            optstr, arg));
    }
    if (date.toString() === 'Invalid Date') {
        throw new Error(format('arg for "%s" is an invalid date: "%s"',
            optstr, arg));
    }
    return date;
}

var optionTypes = {
    bool: {
        takesArg: false,
        parseArg: parseBool
    },
    string: {
        takesArg: true,
        helpArg: 'ARG',
        parseArg: parseString
    },
    number: {
        takesArg: true,
        helpArg: 'NUM',
        parseArg: parseNumber
    },
    integer: {
        takesArg: true,
        helpArg: 'INT',
        parseArg: parseInteger
    },
    positiveInteger: {
        takesArg: true,
        helpArg: 'INT',
        parseArg: parsePositiveInteger
    },
    date: {
        takesArg: true,
        helpArg: 'DATE',
        parseArg: parseDate
    },
    arrayOfBool: {
        takesArg: false,
        array: true,
        parseArg: parseBool
    },
    arrayOfString: {
        takesArg: true,
        helpArg: 'ARG',
        array: true,
        parseArg: parseString
    },
    arrayOfNumber: {
        takesArg: true,
        helpArg: 'NUM',
        array: true,
        parseArg: parseNumber
    },
    arrayOfInteger: {
        takesArg: true,
        helpArg: 'INT',
        array: true,
        parseArg: parseInteger
    },
    arrayOfPositiveInteger: {
        takesArg: true,
        helpArg: 'INT',
        array: true,
        parseArg: parsePositiveInteger
    },
    arrayOfDate: {
        takesArg: true,
        helpArg: 'INT',
        array: true,
        parseArg: parseDate
    },
};



// ---- Parser

/**
 * Parser constructor.
 *
 * @param config {Object} The parser configuration
 *      - options {Array} Array of option specs. See the README for how to
 *        specify each option spec.
 *      - allowUnknown {Boolean} Default false. Whether to throw on unknown
 *        options. If false, then unknown args are included in the _args array.
 *      - interspersed {Boolean} Default true. Whether to allow interspersed
 *        arguments (non-options) and options. E.g.:
 *              node tool.js arg1 arg2 -v
 *        '-v' is after some args here. If `interspersed: false` then '-v'
 *        would not be parsed out. Note that regardless of `interspersed`
 *        the presence of '--' will stop option parsing, as all good
 *        option parsers should.
 */
function Parser(config) {
    assert.object(config, 'config');
    assert.arrayOfObject(config.options, 'config.options');
    assert.optionalBool(config.interspersed, 'config.interspersed');
    var self = this;

    // Allow interspersed arguments (true by default).
    this.interspersed = (config.interspersed !== undefined
        ? config.interspersed : true);

    // Don't allow unknown flags (true by default).
    this.allowUnknown = (config.allowUnknown !== undefined
        ? config.allowUnknown : false);

    this.options = config.options.map(function (o) { return shallowCopy(o); });
    this.optionFromName = {};
    this.optionFromEnv = {};
    for (var i = 0; i < this.options.length; i++) {
        var o = this.options[i];
        if (o.group !== undefined && o.group !== null) {
            assert.optionalString(o.group,
                format('config.options.%d.group', i));
            continue;
        }
        assert.ok(optionTypes[o.type],
            format('invalid config.options.%d.type: "%s" in %j',
                   i, o.type, o));
        assert.optionalString(o.name, format('config.options.%d.name', i));
        assert.optionalArrayOfString(o.names,
            format('config.options.%d.names', i));
        assert.ok((o.name || o.names) && !(o.name && o.names),
            format('exactly one of "name" or "names" required: %j', o));
        assert.optionalString(o.help, format('config.options.%d.help', i));
        var env = o.env || [];
        if (typeof (env) === 'string') {
            env = [env];
        }
        assert.optionalArrayOfString(env, format('config.options.%d.env', i));
        assert.optionalString(o.helpGroup,
            format('config.options.%d.helpGroup', i));
        assert.optionalBool(o.helpWrap,
            format('config.options.%d.helpWrap', i));
        assert.optionalBool(o.hidden, format('config.options.%d.hidden', i));

        if (o.name) {
            o.names = [o.name];
        } else {
            assert.string(o.names[0],
                format('config.options.%d.names is empty', i));
        }
        o.key = optionKeyFromName(o.names[0]);
        o.names.forEach(function (n) {
            if (self.optionFromName[n]) {
                throw new Error(format(
                    'option name collision: "%s" used in %j and %j',
                    n, self.optionFromName[n], o));
            }
            self.optionFromName[n] = o;
        });
        env.forEach(function (n) {
            if (self.optionFromEnv[n]) {
                throw new Error(format(
                    'option env collision: "%s" used in %j and %j',
                    n, self.optionFromEnv[n], o));
            }
            self.optionFromEnv[n] = o;
        });
    }
}

Parser.prototype.optionTakesArg = function optionTakesArg(option) {
    return optionTypes[option.type].takesArg;
};

/**
 * Parse options from the given argv.
 *
 * @param inputs {Object} Optional.
 *      - argv {Array} Optional. The argv to parse. Defaults to
 *        `process.argv`.
 *      - slice {Number} The index into argv at which options/args begin.
 *        Default is 2, as appropriate for `process.argv`.
 *      - env {Object} Optional. The env to use for 'env' entries in the
 *        option specs. Defaults to `process.env`.
 * @returns {Object} Parsed `opts`. It has special keys `_args` (the
 *      remaining args from `argv`) and `_order` (gives the order that
 *      options were specified).
 */
Parser.prototype.parse = function parse(inputs) {
    var self = this;

    // Old API was `parse([argv, [slice]])`
    if (Array.isArray(arguments[0])) {
        inputs = {argv: arguments[0], slice: arguments[1]};
    }

    assert.optionalObject(inputs, 'inputs');
    if (!inputs) {
        inputs = {};
    }
    assert.optionalArrayOfString(inputs.argv, 'inputs.argv');
    //assert.optionalNumber(slice, 'slice');
    var argv = inputs.argv || process.argv;
    var slice = inputs.slice !== undefined ? inputs.slice : 2;
    var args = argv.slice(slice);
    var env = inputs.env || process.env;
    var opts = {};
    var _order = [];

    function addOpt(option, optstr, key, val, from) {
        var type = optionTypes[option.type];
        var parsedVal = type.parseArg(option, optstr, val);
        if (type.array) {
            if (!opts[key]) {
                opts[key] = [];
            }
            if (type.arrayFlatten && Array.isArray(parsedVal)) {
                for (var i = 0; i < parsedVal.length; i++) {
                    opts[key].push(parsedVal[i]);
                }
            } else {
                opts[key].push(parsedVal);
            }
        } else {
            opts[key] = parsedVal;
        }
        var item = { key: key, value: parsedVal, from: from };
        _order.push(item);
    }

    // Parse args.
    var _args = [];
    var i = 0;
    outer: while (i < args.length) {
        var arg = args[i];

        // End of options marker.
        if (arg === '--') {
            i++;
            break;

        // Long option
        } else if (arg.slice(0, 2) === '--') {
            var name = arg.slice(2);
            var val = null;
            var idx = name.indexOf('=');
            if (idx !== -1) {
                val = name.slice(idx + 1);
                name = name.slice(0, idx);
            }
            var option = this.optionFromName[name];
            if (!option) {
                if (!this.allowUnknown)
                    throw new Error(format('unknown option: "--%s"', name));
                else if (this.interspersed)
                    _args.push(arg);
                else
                    break outer;
            } else {
                var takesArg = this.optionTakesArg(option);
                if (val !== null && !takesArg) {
                    throw new Error(format('argument given to "--%s" option '
                        + 'that does not take one: "%s"', name, arg));
                }
                if (!takesArg) {
                    addOpt(option, '--'+name, option.key, true, 'argv');
                } else if (val !== null) {
                    addOpt(option, '--'+name, option.key, val, 'argv');
                } else if (i + 1 >= args.length) {
                    throw new Error(format('do not have enough args for "--%s" '
                        + 'option', name));
                } else {
                    addOpt(option, '--'+name, option.key, args[i + 1], 'argv');
                    i++;
                }
            }

        // Short option
        } else if (arg[0] === '-' && arg.length > 1) {
            var j = 1;
            var allFound = true;
            while (j < arg.length) {
                var name = arg[j];
                var option = this.optionFromName[name];
                if (!option) {
                    allFound = false;
                    if (this.allowUnknown) {
                        if (this.interspersed) {
                            _args.push(arg);
                            break;
                        } else
                            break outer;
                    } else if (arg.length > 2) {
                        throw new Error(format(
                            'unknown option: "-%s" in "%s" group',
                            name, arg));
                    } else {
                        throw new Error(format('unknown option: "-%s"', name));
                    }
                } else if (this.optionTakesArg(option)) {
                    break;
                }
                j++;
            }

            j = 1;
            while (allFound && j < arg.length) {
                var name = arg[j];
                var val = arg.slice(j + 1);  // option val if it takes an arg
                var option = this.optionFromName[name];
                var takesArg = this.optionTakesArg(option);
                if (!takesArg) {
                    addOpt(option, '-'+name, option.key, true, 'argv');
                } else if (val) {
                    addOpt(option, '-'+name, option.key, val, 'argv');
                    break;
                } else {
                    if (i + 1 >= args.length) {
                        throw new Error(format('do not have enough args '
                            + 'for "-%s" option', name));
                    }
                    addOpt(option, '-'+name, option.key, args[i + 1], 'argv');
                    i++;
                    break;
                }
                j++;
            }

        // An interspersed arg
        } else if (this.interspersed) {
            _args.push(arg);

        // An arg and interspersed args are not allowed, so done options.
        } else {
            break outer;
        }
        i++;
    }
    _args = _args.concat(args.slice(i));

    // Parse environment.
    Object.keys(this.optionFromEnv).forEach(function (envname) {
        var val = env[envname];
        if (val === undefined)
            return;
        var option = self.optionFromEnv[envname];
        if (opts[option.key] !== undefined)
            return;
        var takesArg = self.optionTakesArg(option);
        if (takesArg) {
            addOpt(option, envname, option.key, val, 'env');
        } else if (val !== '') {
            // Boolean envvar handling:
            // - VAR=<empty-string>     not set (as if the VAR was not set)
            // - VAR=0                  false
            // - anything else          true
            addOpt(option, envname, option.key, (val !== '0'), 'env');
        }
    });

    // Apply default values.
    this.options.forEach(function (o) {
        if (opts[o.key] === undefined) {
            if (o.default !== undefined) {
                opts[o.key] = o.default;
            } else if (o.type && optionTypes[o.type].default !== undefined) {
                opts[o.key] = optionTypes[o.type].default;
            }
        }
    });

    opts._order = _order;
    opts._args = _args;
    return opts;
};


/**
 * Return help output for the current options.
 *
 * E.g.: if the current options are:
 *      [{names: ['help', 'h'], type: 'bool', help: 'Show help and exit.'}]
 * then this would return:
 *      '  -h, --help     Show help and exit.\n'
 *
 * @param config {Object} Config for controlling the option help output.
 *      - indent {Number|String} Default 4. An indent/prefix to use for
 *        each option line.
 *      - nameSort {String} Default is 'length'. By default the names are
 *        sorted to put the short opts first (i.e. '-h, --help' preferred
 *        to '--help, -h'). Set to 'none' to not do this sorting.
 *      - maxCol {Number} Default 80. Note that long tokens in a help string
 *        can go past this.
 *      - helpCol {Number} Set to specify a specific column at which
 *        option help will be aligned. By default this is determined
 *        automatically.
 *      - minHelpCol {Number} Default 20.
 *      - maxHelpCol {Number} Default 40.
 *      - includeEnv {Boolean} Default false. If true, a note stating the `env`
 *        envvar (if specified for this option) will be appended to the help
 *        output.
 *      - includeDefault {Boolean} Default false. If true, a note stating
 *        the `default` for this option, if any, will be appended to the help
 *        output.
 *      - helpWrap {Boolean} Default true. Wrap help text in helpCol..maxCol
 *        bounds.
 * @returns {String}
 */
Parser.prototype.help = function help(config) {
    config = config || {};
    assert.object(config, 'config');

    var indent = makeIndent(config.indent, 4, 'config.indent');
    var headingIndent = makeIndent(config.headingIndent,
        Math.round(indent.length / 2), 'config.headingIndent');

    assert.optionalString(config.nameSort, 'config.nameSort');
    var nameSort = config.nameSort || 'length';
    assert.ok(~['length', 'none'].indexOf(nameSort),
        'invalid "config.nameSort"');
    assert.optionalNumber(config.maxCol, 'config.maxCol');
    assert.optionalNumber(config.maxHelpCol, 'config.maxHelpCol');
    assert.optionalNumber(config.minHelpCol, 'config.minHelpCol');
    assert.optionalNumber(config.helpCol, 'config.helpCol');
    assert.optionalBool(config.includeEnv, 'config.includeEnv');
    assert.optionalBool(config.includeDefault, 'config.includeDefault');
    assert.optionalBool(config.helpWrap, 'config.helpWrap');
    var maxCol = config.maxCol || 80;
    var minHelpCol = config.minHelpCol || 20;
    var maxHelpCol = config.maxHelpCol || 40;

    var lines = [];
    var maxWidth = 0;
    this.options.forEach(function (o) {
        if (o.hidden) {
            return;
        }
        if (o.group !== undefined && o.group !== null) {
            // We deal with groups in the next pass
            lines.push(null);
            return;
        }
        var type = optionTypes[o.type];
        var arg = o.helpArg || type.helpArg || 'ARG';
        var line = '';
        var names = o.names.slice();
        if (nameSort === 'length') {
            names.sort(function (a, b) {
                if (a.length < b.length)
                    return -1;
                else if (b.length < a.length)
                    return 1;
                else
                    return 0;
            })
        }
        names.forEach(function (name, i) {
            if (i > 0)
                line += ', ';
            if (name.length === 1) {
                line += '-' + name
                if (type.takesArg)
                    line += ' ' + arg;
            } else {
                line += '--' + name
                if (type.takesArg)
                    line += '=' + arg;
            }
        });
        maxWidth = Math.max(maxWidth, line.length);
        lines.push(line);
    });

    // Add help strings.
    var helpCol = config.helpCol;
    if (!helpCol) {
        helpCol = maxWidth + indent.length + 2;
        helpCol = Math.min(Math.max(helpCol, minHelpCol), maxHelpCol);
    }
    var i = -1;
    this.options.forEach(function (o) {
        if (o.hidden) {
            return;
        }
        i++;

        if (o.group !== undefined && o.group !== null) {
            if (o.group === '') {
                // Support a empty string "group" to have a blank line between
                // sets of options.
                lines[i] = '';
            } else {
                // Render the group heading with the heading-specific indent.
                lines[i] = (i === 0 ? '' : '\n') + headingIndent +
                    o.group + ':';
            }
            return;
        }

        var helpDefault;
        if (config.includeDefault) {
            if (o.default !== undefined) {
                helpDefault = format('Default: %j', o.default);
            } else if (o.type && optionTypes[o.type].default !== undefined) {
                helpDefault = format('Default: %j',
                    optionTypes[o.type].default);
            }
        }

        var line = lines[i] = indent + lines[i];
        if (!o.help && !(config.includeEnv && o.env) && !helpDefault) {
            return;
        }
        var n = helpCol - line.length;
        if (n >= 0) {
            line += space(n);
        } else {
            line += '\n' + space(helpCol);
        }

        var helpEnv = '';
        if (o.env && o.env.length && config.includeEnv) {
            helpEnv += 'Environment: ';
            var type = optionTypes[o.type];
            var arg = o.helpArg || type.helpArg || 'ARG';
            var envs = (Array.isArray(o.env) ? o.env : [o.env]).map(
                function (e) {
                    if (type.takesArg) {
                        return e + '=' + arg;
                    } else {
                        return e + '=1';
                    }
                }
            );
            helpEnv += envs.join(', ');
        }
        var help = (o.help || '').trim();
        if (o.helpWrap !== false && config.helpWrap !== false) {
            // Wrap help description normally.
            if (help.length && !~'.!?"\''.indexOf(help.slice(-1))) {
                help += '.';
            }
            if (help.length) {
                help += ' ';
            }
            help += helpEnv;
            if (helpDefault) {
                if (helpEnv) {
                    help += '. ';
                }
                help += helpDefault;
            }
            line += textwrap(help, maxCol - helpCol).join(
                '\n' + space(helpCol));
        } else {
            // Do not wrap help description, but indent newlines appropriately.
            var helpLines = help.split('\n').filter(
                    function (ln) { return ln.length });
            if (helpEnv !== '') {
                helpLines.push(helpEnv);
            }
            if (helpDefault) {
                helpLines.push(helpDefault);
            }
            line += helpLines.join('\n' + space(helpCol));
        }

        lines[i] = line;
    });

    var rv = '';
    if (lines.length > 0) {
        rv = lines.join('\n') + '\n';
    }
    return rv;
};


/**
 * Return a string suitable for a Bash completion file for this tool.
 *
 * @param args.name {String} The tool name.
 * @param args.specExtra {String} Optional. Extra Bash code content to add
 *      to the end of the "spec". Typically this is used to append Bash
 *      "complete_TYPE" functions for custom option types. See
 *      "examples/ddcompletion.js" for an example.
 * @param args.argtypes {Array} Optional. Array of completion types for
 *      positional args (i.e. non-options). E.g.
 *          argtypes = ['fruit', 'veggie', 'file']
 *      will result in completion of fruits for the first arg, veggies for the
 *      second, and filenames for the third and subsequent positional args.
 *      If not given, positional args will use Bash's 'default' completion.
 *      See `specExtra` for providing Bash `complete_TYPE` functions, e.g.
 *      `complete_fruit` and `complete_veggie` in this example.
 */
Parser.prototype.bashCompletion = function bashCompletion(args) {
    assert.object(args, 'args');
    assert.string(args.name, 'args.name');
    assert.optionalString(args.specExtra, 'args.specExtra');
    assert.optionalArrayOfString(args.argtypes, 'args.argtypes');

    return bashCompletionFromOptions({
        name: args.name,
        specExtra: args.specExtra,
        argtypes: args.argtypes,
        options: this.options
    });
};


// ---- Bash completion

const BASH_COMPLETION_TEMPLATE_PATH = path.join(
    __dirname, '../etc/dashdash.bash_completion.in');

/**
 * Return the Bash completion "spec" (the string value for the "{{spec}}"
 * var in the "dashdash.bash_completion.in" template) for this tool.
 *
 * The "spec" is Bash code that defines the CLI options and subcmds for
 * the template's completion code. It looks something like this:
 *
 *      local cmd_shortopts="-J ..."
 *      local cmd_longopts="--help ..."
 *      local cmd_optargs="-p=tritonprofile ..."
 *
 * @param args.options {Array} The array of dashdash option specs.
 * @param args.context {String} Optional. A context string for the "local cmd*"
 *      vars in the spec. By default it is the empty string. When used to
 *      scope for completion on a *sub-command* (e.g. for "git log" on a "git"
 *      tool), then it would have a value (e.g. "__log"). See
 *      <http://github.com/trentm/node-cmdln> Bash completion for details.
 * @param opts.includeHidden {Boolean} Optional. Default false. By default
 *      hidden options and subcmds are "excluded". Here excluded means they
 *      won't be offered as a completion, but if used, their argument type
 *      will be completed. "Hidden" options and subcmds are ones with the
 *      `hidden: true` attribute to exclude them from default help output.
 * @param args.argtypes {Array} Optional. Array of completion types for
 *      positional args (i.e. non-options). E.g.
 *          argtypes = ['fruit', 'veggie', 'file']
 *      will result in completion of fruits for the first arg, veggies for the
 *      second, and filenames for the third and subsequent positional args.
 *      If not given, positional args will use Bash's 'default' completion.
 *      See `specExtra` for providing Bash `complete_TYPE` functions, e.g.
 *      `complete_fruit` and `complete_veggie` in this example.
 */
function bashCompletionSpecFromOptions(args) {
    assert.object(args, 'args');
    assert.object(args.options, 'args.options');
    assert.optionalString(args.context, 'args.context');
    assert.optionalBool(args.includeHidden, 'args.includeHidden');
    assert.optionalArrayOfString(args.argtypes, 'args.argtypes');

    var context = args.context || '';
    var includeHidden = (args.includeHidden === undefined
        ? false : args.includeHidden);

    var spec = [];
    var shortopts = [];
    var longopts = [];
    var optargs = [];
    (args.options || []).forEach(function (o) {
        if (o.group !== undefined && o.group !== null) {
            // Skip group headers.
            return;
        }

        var optNames = o.names || [o.name];
        var optType = getOptionType(o.type);
        if (optType.takesArg) {
            var completionType = o.completionType ||
                optType.completionType || o.type;
            optNames.forEach(function (optName) {
                if (optName.length === 1) {
                    if (includeHidden || !o.hidden) {
                        shortopts.push('-' + optName);
                    }
                    // Include even hidden options in `optargs` so that bash
                    // completion of its arg still works.
                    optargs.push('-' + optName + '=' + completionType);
                } else {
                    if (includeHidden || !o.hidden) {
                        longopts.push('--' + optName);
                    }
                    optargs.push('--' + optName + '=' + completionType);
                }
            });
        } else {
            optNames.forEach(function (optName) {
                if (includeHidden || !o.hidden) {
                    if (optName.length === 1) {
                        shortopts.push('-' + optName);
                    } else {
                        longopts.push('--' + optName);
                    }
                }
            });
        }
    });

    spec.push(format('local cmd%s_shortopts="%s"',
        context, shortopts.sort().join(' ')));
    spec.push(format('local cmd%s_longopts="%s"',
        context, longopts.sort().join(' ')));
    spec.push(format('local cmd%s_optargs="%s"',
        context, optargs.sort().join(' ')));
    if (args.argtypes) {
        spec.push(format('local cmd%s_argtypes="%s"',
            context, args.argtypes.join(' ')));
    }
    return spec.join('\n');
}


/**
 * Return a string suitable for a Bash completion file for this tool.
 *
 * @param args.name {String} The tool name.
 * @param args.options {Array} The array of dashdash option specs.
 * @param args.specExtra {String} Optional. Extra Bash code content to add
 *      to the end of the "spec". Typically this is used to append Bash
 *      "complete_TYPE" functions for custom option types. See
 *      "examples/ddcompletion.js" for an example.
 * @param args.argtypes {Array} Optional. Array of completion types for
 *      positional args (i.e. non-options). E.g.
 *          argtypes = ['fruit', 'veggie', 'file']
 *      will result in completion of fruits for the first arg, veggies for the
 *      second, and filenames for the third and subsequent positional args.
 *      If not given, positional args will use Bash's 'default' completion.
 *      See `specExtra` for providing Bash `complete_TYPE` functions, e.g.
 *      `complete_fruit` and `complete_veggie` in this example.
 */
function bashCompletionFromOptions(args) {
    assert.object(args, 'args');
    assert.object(args.options, 'args.options');
    assert.string(args.name, 'args.name');
    assert.optionalString(args.specExtra, 'args.specExtra');
    assert.optionalArrayOfString(args.argtypes, 'args.argtypes');

    // Gather template data.
    var data = {
        name: args.name,
        date: new Date(),
        spec: bashCompletionSpecFromOptions({
            options: args.options,
            argtypes: args.argtypes
        }),
    };
    if (args.specExtra) {
        data.spec += '\n\n' + args.specExtra;
    }

    // Render template.
    var template = fs.readFileSync(BASH_COMPLETION_TEMPLATE_PATH, 'utf8');
    return renderTemplate(template, data);
}



// ---- exports

function createParser(config) {
    return new Parser(config);
}

/**
 * Parse argv with the given options.
 *
 * @param config {Object} A merge of all the available fields from
 *      `dashdash.Parser` and `dashdash.Parser.parse`: options, interspersed,
 *      argv, env, slice.
 */
function parse(config) {
    assert.object(config, 'config');
    assert.optionalArrayOfString(config.argv, 'config.argv');
    assert.optionalObject(config.env, 'config.env');
    var config = shallowCopy(config);
    var argv = config.argv;
    delete config.argv;
    var env = config.env;
    delete config.env;

    var parser = new Parser(config);
    return parser.parse({argv: argv, env: env});
}


/**
 * Add a new option type.
 *
 * @params optionType {Object}:
 *      - name {String} Required.
 *      - takesArg {Boolean} Required. Whether this type of option takes an
 *        argument on process.argv. Typically this is true for all but the
 *        "bool" type.
 *      - helpArg {String} Required iff `takesArg === true`. The string to
 *        show in generated help for options of this type.
 *      - parseArg {Function} Require. `function (option, optstr, arg)` parser
 *        that takes a string argument and returns an instance of the
 *        appropriate type, or throws an error if the arg is invalid.
 *      - array {Boolean} Optional. Set to true if this is an 'arrayOf' type
 *        that collects multiple usages of the option in process.argv and
 *        puts results in an array.
 *      - arrayFlatten {Boolean} Optional. XXX
 *      - default Optional. Default value for options of this type, if no
 *        default is specified in the option type usage.
 */
function addOptionType(optionType) {
    assert.object(optionType, 'optionType');
    assert.string(optionType.name, 'optionType.name');
    assert.bool(optionType.takesArg, 'optionType.takesArg');
    if (optionType.takesArg) {
        assert.string(optionType.helpArg, 'optionType.helpArg');
    }
    assert.func(optionType.parseArg, 'optionType.parseArg');
    assert.optionalBool(optionType.array, 'optionType.array');
    assert.optionalBool(optionType.arrayFlatten, 'optionType.arrayFlatten');

    optionTypes[optionType.name] = {
        takesArg: optionType.takesArg,
        helpArg: optionType.helpArg,
        parseArg: optionType.parseArg,
        array: optionType.array,
        arrayFlatten: optionType.arrayFlatten,
        default: optionType.default
    }
}


function getOptionType(name) {
    assert.string(name, 'name');
    return optionTypes[name];
}


/**
 * Return a synopsis string for the given option spec.
 *
 * Examples:
 *      > synopsisFromOpt({names: ['help', 'h'], type: 'bool'});
 *      '[ --help | -h ]'
 *      > synopsisFromOpt({name: 'file', type: 'string', helpArg: 'FILE'});
 *      '[ --file=FILE ]'
 */
function synopsisFromOpt(o) {
    assert.object(o, 'o');

    if (o.hasOwnProperty('group')) {
        return null;
    }
    var names = o.names || [o.name];
    // `type` here could be undefined if, for example, the command has a
    // dashdash option spec with a bogus 'type'.
    var type = getOptionType(o.type);
    var helpArg = o.helpArg || (type && type.helpArg) || 'ARG';
    var parts = [];
    names.forEach(function (name) {
        var part = (name.length === 1 ? '-' : '--') + name;
        if (type && type.takesArg) {
            part += (name.length === 1 ? ' ' + helpArg : '=' + helpArg);
        }
        parts.push(part);
    });
    return ('[ ' + parts.join(' | ') + ' ]');
};


module.exports = {
    createParser: createParser,
    Parser: Parser,
    parse: parse,
    addOptionType: addOptionType,
    getOptionType: getOptionType,
    synopsisFromOpt: synopsisFromOpt,

    // Bash completion-related exports
    BASH_COMPLETION_TEMPLATE_PATH: BASH_COMPLETION_TEMPLATE_PATH,
    bashCompletionFromOptions: bashCompletionFromOptions,
    bashCompletionSpecFromOptions: bashCompletionSpecFromOptions,

    // Export the parseFoo parsers because they might be useful as primitives
    // for custom option types.
    parseBool: parseBool,
    parseString: parseString,
    parseNumber: parseNumber,
    parseInteger: parseInteger,
    parsePositiveInteger: parsePositiveInteger,
    parseDate: parseDate
};
