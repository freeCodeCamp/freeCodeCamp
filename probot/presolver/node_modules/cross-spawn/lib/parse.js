'use strict';

var resolveCommand = require('./util/resolveCommand');
var hasEmptyArgumentBug = require('./util/hasEmptyArgumentBug');
var escapeArgument = require('./util/escapeArgument');
var escapeCommand = require('./util/escapeCommand');
var readShebang = require('./util/readShebang');

var isWin = process.platform === 'win32';
var skipShellRegExp = /\.(?:com|exe)$/i;

// Supported in Node >= 6 and >= 4.8
var supportsShellOption = parseInt(process.version.substr(1).split('.')[0], 10) >= 6 ||
 parseInt(process.version.substr(1).split('.')[0], 10) === 4 && parseInt(process.version.substr(1).split('.')[1], 10) >= 8;

function parseNonShell(parsed) {
    var shebang;
    var needsShell;
    var applyQuotes;

    if (!isWin) {
        return parsed;
    }

    // Detect & add support for shebangs
    parsed.file = resolveCommand(parsed.command);
    parsed.file = parsed.file || resolveCommand(parsed.command, true);
    shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(resolveCommand(shebang) || resolveCommand(shebang, true));
    } else {
        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(parsed.file);
    }

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    if (needsShell) {
        // Escape command & arguments
        applyQuotes = (parsed.command !== 'echo');  // Do not quote arguments for the special "echo" command
        parsed.command = escapeCommand(parsed.command);
        parsed.args = parsed.args.map(function (arg) {
            return escapeArgument(arg, applyQuotes);
        });

        // Make use of cmd.exe
        parsed.args = ['/d', '/s', '/c', '"' + parsed.command + (parsed.args.length ? ' ' + parsed.args.join(' ') : '') + '"'];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parseShell(parsed) {
    var shellCommand;

    // If node supports the shell option, there's no need to mimic its behavior
    if (supportsShellOption) {
        return parsed;
    }

    // Mimic node shell option, see: https://github.com/nodejs/node/blob/b9f6a2dc059a1062776133f3d4fd848c4da7d150/lib/child_process.js#L335
    shellCommand = [parsed.command].concat(parsed.args).join(' ');

    if (isWin) {
        parsed.command = typeof parsed.options.shell === 'string' ? parsed.options.shell : process.env.comspec || 'cmd.exe';
        parsed.args = ['/d', '/s', '/c', '"' + shellCommand + '"'];
        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped
    } else {
        if (typeof parsed.options.shell === 'string') {
            parsed.command = parsed.options.shell;
        } else if (process.platform === 'android') {
            parsed.command = '/system/bin/sh';
        } else {
            parsed.command = '/bin/sh';
        }

        parsed.args = ['-c', shellCommand];
    }

    return parsed;
}

// ------------------------------------------------

function parse(command, args, options) {
    var parsed;

    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : [];  // Clone array to avoid changing the original
    options = options || {};

    // Build our parsed object
    parsed = {
        command: command,
        args: args,
        options: options,
        file: undefined,
        original: command,
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parseShell(parsed) : parseNonShell(parsed);
}

module.exports = parse;
