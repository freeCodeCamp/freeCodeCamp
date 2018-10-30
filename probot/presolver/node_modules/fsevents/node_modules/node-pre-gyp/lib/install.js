"use strict";

module.exports = exports = install;

exports.usage = 'Attempts to install pre-built binary for module';

var fs = require('fs');
var path = require('path');
var log = require('npmlog');
var existsAsync = fs.exists || path.exists;
var versioning = require('./util/versioning.js');
var napi = require('./util/napi.js');
var mkdirp = require('mkdirp');

var npgVersion = 'unknown';
try {
    // Read own package.json to get the current node-pre-pyp version.
    var ownPackageJSON = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8');
    npgVersion = JSON.parse(ownPackageJSON).version;
} catch (e) {}

function download(uri,opts,callback) {
    log.http('GET', uri);

    var req = null;

    // Try getting version info from the currently running npm.
    var envVersionInfo = process.env.npm_config_user_agent ||
        'node ' + process.version;

    var requestOpts = {
        uri: uri.replace('+','%2B'),
        headers: {
          'User-Agent': 'node-pre-gyp (v' + npgVersion + ', ' + envVersionInfo + ')'
        },
        follow_max: 10,
    };

    if (opts.cafile) {
        try {
            requestOpts.ca = fs.readFileSync(opts.cafile);
        } catch (e) {
            return callback(e);
        }
    } else if (opts.ca) {
        requestOpts.ca = opts.ca;
    }

    var proxyUrl = opts.proxy ||
                    process.env.http_proxy ||
                    process.env.HTTP_PROXY ||
                    process.env.npm_config_proxy;
    if (proxyUrl) {
      if (/^https?:\/\//i.test(proxyUrl)) {
        log.verbose('download', 'using proxy url: "%s"', proxyUrl);
        requestOpts.proxy = proxyUrl;
      } else {
        log.warn('download', 'ignoring invalid "proxy" config setting: "%s"', proxyUrl);
      }
    }
    try {
        req = require('needle').get(requestOpts.uri, requestOpts);
    } catch (e) {
        return callback(e);
    }
    if (req) {
      req.on('response', function (res) {
        log.http(res.statusCode, uri);
      });
    }
    return callback(null,req);
}

function place_binary(from,to,opts,callback) {
    download(from,opts,function(err,req) {
        if (err) return callback(err);
        if (!req) return callback(new Error("empty req"));
        var badDownload = false;
        var extractCount = 0;
        var tar = require('tar');

        function afterTarball(err) {
            if (err) return callback(err);
            if (badDownload) return callback(new Error("bad download"));
            if (extractCount === 0) {
                return callback(new Error('There was a fatal problem while downloading/extracting the tarball'));
            }
            log.info('tarball', 'done parsing tarball');
            callback();
        }

        function filter_func(entry) {
            log.info('install','unpacking ' + entry.path);
            extractCount++;
        }

        req.on('error', function(err) {
            badDownload = true;
            return callback(err);
        });

        req.on('close', function () {
            if (extractCount === 0) {
                return callback(new Error('Connection closed while downloading tarball file'));
            }
        });

      req.on('response', function(res) {
           // ignore redirects, needle handles these automatically.
           if (res.headers.hasOwnProperty('location') && res.headers.location !== '') {
             return;
           }
           if (res.statusCode !== 200) {
                badDownload = true;
                var err = new Error(res.statusCode + ' status code downloading tarball ' + from);
                err.statusCode = res.statusCode;
                return callback(err);
            }
            // start unzipping and untaring
            req.pipe(tar.extract({
              cwd: to,
              strip: 1,
              onentry: filter_func
            }).on('close', afterTarball).on('error', callback));
        });
    });
}

function do_build(gyp,argv,callback) {
  var args = ['rebuild'].concat(argv);
  gyp.todo.push( { name: 'build', args: args } );
  process.nextTick(callback);
}

function print_fallback_error(err,opts,package_json) {
    var fallback_message = ' (falling back to source compile with node-gyp)';
    var full_message = '';
    if (err.statusCode !== undefined) {
        // If we got a network response it but failed to download
        // it means remote binaries are not available, so let's try to help
        // the user/developer with the info to debug why
        full_message = "Pre-built binaries not found for " + package_json.name + "@" + package_json.version;
        full_message += " and " + opts.runtime + "@" + (opts.target || process.versions.node) + " (" + opts.node_abi + " ABI, " + opts.libc + ")";
        full_message += fallback_message;
        log.warn("Tried to download(" + err.statusCode + "): " + opts.hosted_tarball);
        log.warn(full_message);
        log.http(err.message);
    } else {
        // If we do not have a statusCode that means an unexpected error
        // happened and prevented an http response, so we output the exact error
        full_message = "Pre-built binaries not installable for " + package_json.name + "@" + package_json.version;
        full_message += " and " + opts.runtime + "@" + (opts.target || process.versions.node) + " (" + opts.node_abi + " ABI, " + opts.libc + ")";
        full_message += fallback_message;
        log.warn(full_message);
        log.warn("Hit error " + err.message);
    }
}

function install(gyp, argv, callback) {
    var package_json = JSON.parse(fs.readFileSync('./package.json'));
	var napi_build_version = napi.get_napi_build_version_from_command_args(argv);
    var source_build = gyp.opts['build-from-source'] || gyp.opts.build_from_source;
    var update_binary = gyp.opts['update-binary'] || gyp.opts.update_binary;
    var should_do_source_build = source_build === package_json.name || (source_build === true || source_build === 'true');
    if (should_do_source_build) {
        log.info('build','requesting source compile');
        return do_build(gyp,argv,callback);
    } else {
        var fallback_to_build = gyp.opts['fallback-to-build'] || gyp.opts.fallback_to_build;
        var should_do_fallback_build = fallback_to_build === package_json.name || (fallback_to_build === true || fallback_to_build === 'true');
        // but allow override from npm
        if (process.env.npm_config_argv) {
            var cooked = JSON.parse(process.env.npm_config_argv).cooked;
            var match = cooked.indexOf("--fallback-to-build");
            if (match > -1 && cooked.length > match && cooked[match+1] == "false") {
                should_do_fallback_build = false;
                log.info('install','Build fallback disabled via npm flag: --fallback-to-build=false');
            }
        }
        var opts;
        try {
            opts = versioning.evaluate(package_json, gyp.opts, napi_build_version);
        } catch (err) {
            return callback(err);
        }

        opts.ca = gyp.opts.ca;
        opts.cafile = gyp.opts.cafile;

        var from = opts.hosted_tarball;
        var to = opts.module_path;
        var binary_module = path.join(to,opts.module_name + '.node');
        existsAsync(binary_module,function(found) {
            if (found && !update_binary) {
                console.log('['+package_json.name+'] Success: "' + binary_module + '" already installed');
                console.log('Pass --update-binary to reinstall or --build-from-source to recompile');
                return callback();
            } else {
                if (!update_binary) log.info('check','checked for "' + binary_module + '" (not found)');
                mkdirp(to,function(err) {
                    if (err) {
                        after_place(err);
                    } else {
                        place_binary(from,to,opts,after_place);
                    }
                });
            }
            function after_place(err) {
                if (err && should_do_fallback_build) {
                    print_fallback_error(err,opts,package_json);
                    return do_build(gyp,argv,callback);
                } else if (err) {
                    return callback(err);
                } else {
                    console.log('['+package_json.name+'] Success: "' + binary_module + '" is installed via remote');
                    return callback();
                }
            }
        });
    }
}
