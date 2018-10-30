"use strict";

module.exports = exports;

var path = require('path');
var semver = require('semver');
var url = require('url');
var detect_libc = require('detect-libc');
var napi = require('./napi.js');

var abi_crosswalk;

// This is used for unit testing to provide a fake
// ABI crosswalk that emulates one that is not updated
// for the current version
if (process.env.NODE_PRE_GYP_ABI_CROSSWALK) {
    abi_crosswalk = require(process.env.NODE_PRE_GYP_ABI_CROSSWALK);
} else {
    abi_crosswalk = require('./abi_crosswalk.json');
}

var major_versions = {};
Object.keys(abi_crosswalk).forEach(function(v) {
    var major = v.split('.')[0];
    if (!major_versions[major]) {
        major_versions[major] = v;
    }
});

function get_electron_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error("get_electron_abi requires valid runtime arg");
    }
    if (typeof target_version === 'undefined') {
        // erroneous CLI call
        throw new Error("Empty target version is not supported if electron is the target.");
    }
    // Electron guarantees that patch version update won't break native modules.
    var sem_ver = semver.parse(target_version);
    return runtime + '-v' + sem_ver.major + '.' + sem_ver.minor;
}
module.exports.get_electron_abi = get_electron_abi;

function get_node_webkit_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error("get_node_webkit_abi requires valid runtime arg");
    }
    if (typeof target_version === 'undefined') {
        // erroneous CLI call
        throw new Error("Empty target version is not supported if node-webkit is the target.");
    }
    return runtime + '-v' + target_version;
}
module.exports.get_node_webkit_abi = get_node_webkit_abi;

function get_node_abi(runtime, versions) {
    if (!runtime) {
        throw new Error("get_node_abi requires valid runtime arg");
    }
    if (!versions) {
        throw new Error("get_node_abi requires valid process.versions object");
    }
    var sem_ver = semver.parse(versions.node);
    if (sem_ver.major === 0 && sem_ver.minor % 2) { // odd series
        // https://github.com/mapbox/node-pre-gyp/issues/124
        return runtime+'-v'+versions.node;
    } else {
        // process.versions.modules added in >= v0.10.4 and v0.11.7
        // https://github.com/joyent/node/commit/ccabd4a6fa8a6eb79d29bc3bbe9fe2b6531c2d8e
        return versions.modules ? runtime+'-v' + (+versions.modules) :
            'v8-' + versions.v8.split('.').slice(0,2).join('.');
    }
}
module.exports.get_node_abi = get_node_abi;

function get_runtime_abi(runtime, target_version) {
    if (!runtime) {
        throw new Error("get_runtime_abi requires valid runtime arg");
    }
    if (runtime === 'node-webkit') {
        return get_node_webkit_abi(runtime, target_version || process.versions['node-webkit']);
    } else if (runtime === 'electron') {
        return get_electron_abi(runtime, target_version || process.versions.electron);
    } else {
        if (runtime != 'node') {
            throw new Error("Unknown Runtime: '" + runtime + "'");
        }
        if (!target_version) {
            return get_node_abi(runtime,process.versions);
        } else {
            var cross_obj;
            // abi_crosswalk generated with ./scripts/abi_crosswalk.js
            if (abi_crosswalk[target_version]) {
                cross_obj = abi_crosswalk[target_version];
            } else {
                var target_parts = target_version.split('.').map(function(i) { return +i; });
                if (target_parts.length != 3) { // parse failed
                    throw new Error("Unknown target version: " + target_version);
                }
                /*
                    The below code tries to infer the last known ABI compatible version
                    that we have recorded in the abi_crosswalk.json when an exact match
                    is not possible. The reasons for this to exist are complicated:

                       - We support passing --target to be able to allow developers to package binaries for versions of node
                         that are not the same one as they are running. This might also be used in combination with the
                         --target_arch or --target_platform flags to also package binaries for alternative platforms
                       - When --target is passed we can't therefore determine the ABI (process.versions.modules) from the node
                         version that is running in memory
                       - So, therefore node-pre-gyp keeps an "ABI crosswalk" (lib/util/abi_crosswalk.json) to be able to look
                         this info up for all versions
                       - But we cannot easily predict what the future ABI will be for released versions
                       - And node-pre-gyp needs to be a `bundledDependency` in apps that depend on it in order to work correctly
                         by being fully available at install time.
                       - So, the speed of node releases and the bundled nature of node-pre-gyp mean that a new node-pre-gyp release
                         need to happen for every node.js/io.js/node-webkit/nw.js/atom-shell/etc release that might come online if
                         you want the `--target` flag to keep working for the latest version
                       - Which is impractical ^^
                       - Hence the below code guesses about future ABI to make the need to update node-pre-gyp less demanding.

                    In practice then you can have a dependency of your app like `node-sqlite3` that bundles a `node-pre-gyp` that
                    only knows about node v0.10.33 in the `abi_crosswalk.json` but target node v0.10.34 (which is assumed to be
                    ABI compatible with v0.10.33).

                    TODO: use semver module instead of custom version parsing
                */
                var major = target_parts[0];
                var minor = target_parts[1];
                var patch = target_parts[2];
                // io.js: yeah if node.js ever releases 1.x this will break
                // but that is unlikely to happen: https://github.com/iojs/io.js/pull/253#issuecomment-69432616
                if (major === 1) {
                    // look for last release that is the same major version
                    // e.g. we assume io.js 1.x is ABI compatible with >= 1.0.0
                    while (true) {
                        if (minor > 0) --minor;
                        if (patch > 0) --patch;
                        var new_iojs_target = '' + major + '.' + minor + '.' + patch;
                        if (abi_crosswalk[new_iojs_target]) {
                            cross_obj = abi_crosswalk[new_iojs_target];
                            console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                            console.log('Warning: but node-pre-gyp successfully choose ' + new_iojs_target + ' as ABI compatible target');
                            break;
                        }
                        if (minor === 0 && patch === 0) {
                            break;
                        }
                    }
                } else if (major >= 2) {
                    // look for last release that is the same major version
                    if (major_versions[major]) {
                        cross_obj = abi_crosswalk[major_versions[major]];
                        console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                        console.log('Warning: but node-pre-gyp successfully choose ' + major_versions[major] + ' as ABI compatible target');
                    }
                } else if (major === 0) { // node.js
                    if (target_parts[1] % 2 === 0) { // for stable/even node.js series
                        // look for the last release that is the same minor release
                        // e.g. we assume node 0.10.x is ABI compatible with >= 0.10.0
                        while (--patch > 0) {
                            var new_node_target = '' + major + '.' + minor + '.' + patch;
                            if (abi_crosswalk[new_node_target]) {
                                cross_obj = abi_crosswalk[new_node_target];
                                console.log('Warning: node-pre-gyp could not find exact match for ' + target_version);
                                console.log('Warning: but node-pre-gyp successfully choose ' + new_node_target + ' as ABI compatible target');
                                break;
                            }
                        }
                    }
                }
            }
            if (!cross_obj) {
                throw new Error("Unsupported target version: " + target_version);
            }
            // emulate process.versions
            var versions_obj = {
                node: target_version,
                v8: cross_obj.v8+'.0',
                // abi_crosswalk uses 1 for node versions lacking process.versions.modules
                // process.versions.modules added in >= v0.10.4 and v0.11.7
                modules: cross_obj.node_abi > 1 ? cross_obj.node_abi : undefined
            };
            return get_node_abi(runtime, versions_obj);
        }
    }
}
module.exports.get_runtime_abi = get_runtime_abi;

var required_parameters = [
    'module_name',
    'module_path',
    'host'
];

function validate_config(package_json) {
    var msg = package_json.name + ' package.json is not node-pre-gyp ready:\n';
    var missing = [];
    if (!package_json.main) {
        missing.push('main');
    }
    if (!package_json.version) {
        missing.push('version');
    }
    if (!package_json.name) {
        missing.push('name');
    }
    if (!package_json.binary) {
        missing.push('binary');
    }
    var o = package_json.binary;
    required_parameters.forEach(function(p) {
        if (missing.indexOf('binary') > -1) {
            missing.pop('binary');
        }
        if (!o || o[p] === undefined || o[p] === "") {
            missing.push('binary.' + p);
        }
    });
    if (missing.length >= 1) {
        throw new Error(msg+"package.json must declare these properties: \n" + missing.join('\n'));
    }
    if (o) {
        // enforce https over http
        var protocol = url.parse(o.host).protocol;
        if (protocol === 'http:') {
            throw new Error("'host' protocol ("+protocol+") is invalid - only 'https:' is accepted");
        }
    }
    napi.validate_package_json(package_json);
}

module.exports.validate_config = validate_config;

function eval_template(template,opts) {
    Object.keys(opts).forEach(function(key) {
        var pattern = '{'+key+'}';
        while (template.indexOf(pattern) > -1) {
            template = template.replace(pattern,opts[key]);
        }
    });
    return template;
}

// url.resolve needs single trailing slash
// to behave correctly, otherwise a double slash
// may end up in the url which breaks requests
// and a lacking slash may not lead to proper joining
function fix_slashes(pathname) {
    if (pathname.slice(-1) != '/') {
        return pathname + '/';
    }
    return pathname;
}

// remove double slashes
// note: path.normalize will not work because
// it will convert forward to back slashes
function drop_double_slashes(pathname) {
    return pathname.replace(/\/\//g,'/');
}

function get_process_runtime(versions) {
    var runtime = 'node';
    if (versions['node-webkit']) {
        runtime = 'node-webkit';
    } else if (versions.electron) {
        runtime = 'electron';
    }
    return runtime;
}

module.exports.get_process_runtime = get_process_runtime;

var default_package_name = '{module_name}-v{version}-{node_abi}-{platform}-{arch}.tar.gz';
var default_remote_path = '';

module.exports.evaluate = function(package_json,options,napi_build_version) {
    options = options || {};
    validate_config(package_json);
    var v = package_json.version;
    var module_version = semver.parse(v);
    var runtime = options.runtime || get_process_runtime(process.versions);
    var opts = {
        name: package_json.name,
        configuration: Boolean(options.debug) ? 'Debug' : 'Release',
        debug: options.debug,
        module_name: package_json.binary.module_name,
        version: module_version.version,
        prerelease: module_version.prerelease.length ? module_version.prerelease.join('.') : '',
        build: module_version.build.length ? module_version.build.join('.') : '',
        major: module_version.major,
        minor: module_version.minor,
        patch: module_version.patch,
        runtime: runtime,
        node_abi: get_runtime_abi(runtime,options.target),
        node_abi_napi: napi.get_napi_version() ? 'napi' : get_runtime_abi(runtime,options.target),
        napi_version: napi.get_napi_version(), // non-zero numeric, undefined if unsupported
        napi_build_version: napi_build_version, // undefined if not specified
        target: options.target || '',
        platform: options.target_platform || process.platform,
        target_platform: options.target_platform || process.platform,
        arch: options.target_arch || process.arch,
        target_arch: options.target_arch || process.arch,
        libc: options.target_libc || detect_libc.family || 'unknown',
        module_main: package_json.main,
        toolset : options.toolset || '' // address https://github.com/mapbox/node-pre-gyp/issues/119
    };
    // support host mirror with npm config `--{module_name}_binary_host_mirror`
    // e.g.: https://github.com/node-inspector/v8-profiler/blob/master/package.json#L25
    // > npm install v8-profiler --profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
    var host = process.env['npm_config_' + opts.module_name + '_binary_host_mirror'] || package_json.binary.host;
    opts.host = fix_slashes(eval_template(host,opts));
    opts.module_path = eval_template(package_json.binary.module_path,opts);
    // now we resolve the module_path to ensure it is absolute so that binding.gyp variables work predictably
    if (options.module_root) {
        // resolve relative to known module root: works for pre-binding require
        opts.module_path = path.join(options.module_root,opts.module_path);
    } else {
        // resolve relative to current working directory: works for node-pre-gyp commands
        opts.module_path = path.resolve(opts.module_path);
    }
    opts.module = path.join(opts.module_path,opts.module_name + '.node');
    opts.remote_path = package_json.binary.remote_path ? drop_double_slashes(fix_slashes(eval_template(package_json.binary.remote_path,opts))) : default_remote_path;
    var package_name = package_json.binary.package_name ? package_json.binary.package_name : default_package_name;
    opts.package_name = eval_template(package_name,opts);
    opts.staged_tarball = path.join('build/stage',opts.remote_path,opts.package_name);
    opts.hosted_path = url.resolve(opts.host,opts.remote_path);
    opts.hosted_tarball = url.resolve(opts.hosted_path,opts.package_name);
    return opts;
};
