"use strict";

module.exports = exports = testbinary;

exports.usage = 'Tests that the binary.node can be required';

var fs = require('fs');
var path = require('path');
var log = require('npmlog');
var cp = require('child_process');
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var path = require('path');

function testbinary(gyp, argv, callback) {
    var args = [];
    var options = {};
    var shell_cmd = process.execPath;
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    // skip validation for runtimes we don't explicitly support (like electron)
    if (opts.runtime &&
        opts.runtime !== 'node-webkit' &&
        opts.runtime !== 'node') {
        return callback();
    }
    var nw = (opts.runtime && opts.runtime === 'node-webkit');
    // ensure on windows that / are used for require path
    var binary_module = opts.module.replace(/\\/g, '/');
    if ((process.arch != opts.target_arch) ||
        (process.platform != opts.target_platform)) {
        var msg = "skipping validation since host platform/arch (";
        msg += process.platform+'/'+process.arch+")";
        msg += " does not match target (";
        msg += opts.target_platform+'/'+opts.target_arch+")";
        log.info('validate', msg);
        return callback();
    }
    if (nw) {
        options.timeout = 5000;
        if (process.platform === 'darwin') {
            shell_cmd = 'node-webkit';
        } else if (process.platform === 'win32') {
            shell_cmd = 'nw.exe';
        } else {
            shell_cmd = 'nw';
        }
        var modulePath = path.resolve(binary_module);
        var appDir = path.join(__dirname, 'util', 'nw-pre-gyp');
        args.push(appDir);
        args.push(modulePath);
        log.info("validate","Running test command: '" + shell_cmd + ' ' + args.join(' ') + "'");
        cp.execFile(shell_cmd, args, options, function(err, stdout, stderr) {
            // check for normal timeout for node-webkit
            if (err) {
                if (err.killed === true && err.signal && err.signal.indexOf('SIG') > -1) {
                    return callback();
                }
                var stderrLog = stderr.toString();
                log.info('stderr', stderrLog);
                if( /^\s*Xlib:\s*extension\s*"RANDR"\s*missing\s*on\s*display\s*":\d+\.\d+"\.\s*$/.test(stderrLog) ){
                    log.info('RANDR', 'stderr contains only RANDR error, ignored');
                    return callback();
                }
                return callback(err);
            }
            return callback();
        });
        return;
    }
    args.push('--eval');
    args.push("require('" + binary_module.replace(/'/g, '\'') +"')");
    log.info("validate","Running test command: '" + shell_cmd + ' ' + args.join(' ') + "'");
    cp.execFile(shell_cmd, args, options, function(err, stdout, stderr) {
        if (err) {
            return callback(err, { stdout:stdout, stderr:stderr});
        }
        return callback();
    });
}
