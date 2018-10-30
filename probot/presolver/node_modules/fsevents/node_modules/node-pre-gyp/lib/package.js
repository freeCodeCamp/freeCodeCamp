"use strict";

module.exports = exports = _package;

exports.usage = 'Packs binary (and enclosing directory) into locally staged tarball';

var fs = require('fs');
var path = require('path');
var log = require('npmlog');
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var write = require('fs').createWriteStream;
var existsAsync = fs.exists || path.exists;
var mkdirp = require('mkdirp');
var tar = require('tar');

function _package(gyp, argv, callback) {
    var packlist = require('npm-packlist');
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
    var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
    var from = opts.module_path;
    var binary_module = path.join(from,opts.module_name + '.node');
    existsAsync(binary_module,function(found) {
        if (!found) {
            return callback(new Error("Cannot package because " + binary_module + " missing: run `node-pre-gyp rebuild` first"));
        }
        var tarball = opts.staged_tarball;
        var filter_func = function(entry) {
            // ensure directories are +x
            // https://github.com/mapnik/node-mapnik/issues/262
            log.info('package','packing ' + entry.path);
            return true;
        };
        mkdirp(path.dirname(tarball),function(err) {
            if (err) return callback(err);
            packlist({ path: from }).then(function(files) {
                var base = path.basename(from);
                files = files.map(function(file) {
                    return path.join(base, file);
                });
                tar.create({
                    portable: true,
                    gzip: true,
                    onentry: filter_func,
                    file: tarball,
                    cwd: path.dirname(from)
                }, files, function(err) {
                    if (err)  console.error('['+package_json.name+'] ' + err.message);
                    else log.info('package','Binary staged at "' + tarball + '"');
                    return callback(err);
                });
            }, callback);
        });
    });
}
