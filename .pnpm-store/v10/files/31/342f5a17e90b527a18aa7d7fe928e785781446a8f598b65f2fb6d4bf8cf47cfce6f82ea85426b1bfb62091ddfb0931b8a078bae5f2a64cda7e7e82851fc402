'use strict';

const flatten = require('flat');
const camelcase = require('camelcase');
const decamelize = require('decamelize');
const isPlainObj = require('is-plain-obj');

function isAlias(key, alias) {
    // TODO Switch to Object.values one Node.js 6 is dropped
    return Object.keys(alias).some((id) => [].concat(alias[id]).indexOf(key) !== -1);
}

function hasDefaultValue(key, value, defaults) {
    return value === defaults[key];
}

function isCamelCased(key, argv) {
    return /[A-Z]/.test(key) && camelcase(key) === key && // Is it camel case?
        argv[decamelize(key, '-')] != null; // Is the standard version defined?
}

function keyToFlag(key) {
    return key.length === 1 ? `-${key}` : `--${key}`;
}

function parseCommand(cmd) {
    const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, ' ');
    const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/);
    const bregex = /\.*[\][<>]/g;
    const firstCommand = splitCommand.shift();

    if (!firstCommand) { throw new Error(`No command found in: ${cmd}`); }
    const parsedCommand = {
        cmd: firstCommand.replace(bregex, ''),
        demanded: [],
        optional: [],
    };

    splitCommand.forEach((cmd, i) => {
        let variadic = false;

        cmd = cmd.replace(/\s/g, '');
        if (/\.+[\]>]/.test(cmd) && i === splitCommand.length - 1) { variadic = true; }
        if (/^\[/.test(cmd)) {
            parsedCommand.optional.push({
                cmd: cmd.replace(bregex, '').split('|'),
                variadic,
            });
        } else {
            parsedCommand.demanded.push({
                cmd: cmd.replace(bregex, '').split('|'),
                variadic,
            });
        }
    });

    return parsedCommand;
}

function unparseOption(key, value, unparsed) {
    if (typeof value === 'string') {
        unparsed.push(keyToFlag(key), value);
    } else if (value === true) {
        unparsed.push(keyToFlag(key));
    } else if (value === false) {
        unparsed.push(`--no-${key}`);
    } else if (Array.isArray(value)) {
        value.forEach((item) => unparseOption(key, item, unparsed));
    } else if (isPlainObj(value)) {
        const flattened = flatten(value, { safe: true });

        for (const flattenedKey in flattened) {
            if (!isCamelCased(flattenedKey, flattened)) {
                unparseOption(`${key}.${flattenedKey}`, flattened[flattenedKey], unparsed);
            }
        }
    // Fallback case (numbers and other types)
    } else if (value != null) {
        unparsed.push(keyToFlag(key), `${value}`);
    }
}

function unparsePositional(argv, options, unparsed) {
    const knownPositional = [];

    // Unparse command if set, collecting all known positional arguments
    // e.g.: build <first> <second> <rest...>
    if (options.command) {
        const { 0: cmd, index } = options.command.match(/[^<[]*/);
        const { demanded, optional } = parseCommand(`foo ${options.command.substr(index + cmd.length)}`);

        // Push command (can be a deep command)
        unparsed.push(...cmd.trim().split(/\s+/));

        // Push positional arguments
        [...demanded, ...optional].forEach(({ cmd: cmds, variadic }) => {
            knownPositional.push(...cmds);

            const cmd = cmds[0];
            const args = (variadic ? argv[cmd] || [] : [argv[cmd]])
            .filter((arg) => arg != null)
            .map((arg) => `${arg}`);

            unparsed.push(...args);
        });
    }

    // Unparse unkown positional arguments
    argv._ && unparsed.push(...argv._.slice(knownPositional.length));

    return knownPositional;
}

function unparseOptions(argv, options, knownPositional, unparsed) {
    for (const key of Object.keys(argv)) {
        const value = argv[key];

        if (
            // Remove positional arguments
            knownPositional.includes(key) ||
            // Remove special _, -- and $0
            ['_', '--', '$0'].includes(key) ||
            // Remove aliases
            isAlias(key, options.alias) ||
            // Remove default values
            hasDefaultValue(key, value, options.default) ||
            // Remove camel-cased
            isCamelCased(key, argv)
        ) {
            continue;
        }

        unparseOption(key, argv[key], unparsed);
    }
}

function unparseEndOfOptions(argv, options, unparsed) {
    // Unparse ending (--) arguments if set
    argv['--'] && unparsed.push('--', ...argv['--']);
}

// ------------------------------------------------------------

function unparser(argv, options) {
    options = Object.assign({
        alias: {},
        default: {},
        command: null,
    }, options);

    const unparsed = [];

    // Unparse known & unknown positional arguments (foo <first> <second> [rest...])
    // All known positional will be returned so that they are not added as flags
    const knownPositional = unparsePositional(argv, options, unparsed);

    // Unparse option arguments (--foo hello --bar hi)
    unparseOptions(argv, options, knownPositional, unparsed);

    // Unparse "end-of-options" arguments (stuff after " -- ")
    unparseEndOfOptions(argv, options, unparsed);

    return unparsed;
}

module.exports = unparser;
