"use strict";

module.exports = exports = testpackage;

exports.usage = 'Tests that the staged package is valid';

var fs = require('fs');
var path = require('path');
var log = require('npmlog');
var existsAsync = fs.exists || path.exists;
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var testbinary = require('./testbinary.js');
var tar = require('tar');
var mkdirp = require('mkdirp');

function testpackage(gyp, argv, callback) {
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    var tarball = opts.staged_tarball;
    existsAsync(tarball, function(found) {
        if (!found) {
            return callback(new Error("Cannot test package because " + tarball + " missing: run `node-pre-gyp package` first"));
        }
        var to = opts.module_path;
        function filter_func(entry) {
            log.info('install','unpacking [' + entry.path + ']');
        }

        mkdirp(to, function(err) {
            if (err) {
                return callback(err);
            } else {
                tar.extract({
                    file: tarball,
                    cwd: to,
                    strip: 1,
                    onentry: filter_func
                }).then(after_extract, callback);
            }
        });

        function after_extract() {
            testbinary(gyp,argv,function(err) {
                if (err) {
                    return callback(err);
                } else {
                    console.log('['+package_json.name+'] Package appears valid');
                    return callback();
                }
            });
        }
    });
}
