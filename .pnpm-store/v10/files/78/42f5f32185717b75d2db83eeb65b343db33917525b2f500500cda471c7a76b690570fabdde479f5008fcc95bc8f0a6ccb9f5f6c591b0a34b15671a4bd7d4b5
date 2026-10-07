"use strict";
var childProcess = require("child_process");
var os = require("os");

module.exports = function opener(args, options, callback) {
    var platform = process.platform;

    // Attempt to detect Windows Subystem for Linux (WSL). WSL  itself as Linux (which works in most cases), but in
    // this specific case we need to treat it as actually being Windows. The "Windows-way" of opening things through
    // cmd.exe works just fine here, whereas using xdg-open does not, since there is no X Windows in WSL.
    if (platform === "linux" && os.release().indexOf("Microsoft") !== -1) {
        platform = "win32";
    }

    // http://stackoverflow.com/q/1480971/3191, but see below for Windows.
    var command;
    switch (platform) {
        case "win32": {
            command = "cmd.exe";
            break;
        }
        case "darwin": {
            command = "open";
            break;
        }
        default: {
            command = "xdg-open";
            break;
        }
    }

    if (typeof args === "string") {
        args = [args];
    }

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    if (options && typeof options === "object" && options.command) {
        if (platform === "win32") {
            // *always* use cmd on windows
            args = [options.command].concat(args);
        } else {
            command = options.command;
        }
    }

    if (platform === "win32") {
        // On Windows, we really want to use the "start" command. But, the rules regarding arguments with spaces, and
        // escaping them with quotes, can get really arcane. So the easiest way to deal with this is to pass off the
        // responsibility to "cmd /c", which has that logic built in.
        //
        // Furthermore, if "cmd /c" double-quoted the first parameter, then "start" will interpret it as a window title,
        // so we need to add a dummy empty-string window title: http://stackoverflow.com/a/154090/3191
        //
        // Additionally, on Windows ampersand and caret need to be escaped when passed to "start"
        args = args.map(function (value) {
            return value.replace(/[&^]/g, "^$&");
        });
        args = ["/c", "start", "\"\""].concat(args);
    }

    return childProcess.execFile(command, args, options, callback);
};
