var fs = require('fs');
var getHomedir = require('./homedir');
var path = require('path');
var caller = require('./caller');
var nodeModulesPaths = require('./node-modules-paths');
var normalizeOptions = require('./normalize-options');
var isCore = require('is-core-module');
var $Error = require('es-errors');
var $TypeError = require('es-errors/type');

var realpathFS = process.platform !== 'win32' && fs.realpath && typeof fs.realpath.native === 'function' ? fs.realpath.native : fs.realpath;

var relativePathRegex = /^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/;
var windowsDriveRegex = /^\w:[/\\]*$/;
var nodeModulesRegex = /[/\\]node_modules[/\\]*$/;

var homedir = getHomedir();
function defaultPaths() {
    if (!homedir) return [];
    return [
        path.join(homedir, '.node_modules'),
        path.join(homedir, '.node_libraries')
    ];
}

var defaultIsFile = function isFile(file, cb) {
    fs.stat(file, function (err, stat) {
        if (!err) {
            return cb(null, stat.isFile() || stat.isFIFO());
        }
        if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
        return cb(err);
    });
};

var defaultIsDir = function isDirectory(dir, cb) {
    fs.stat(dir, function (err, stat) {
        if (!err) {
            return cb(null, stat.isDirectory());
        }
        if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
        return cb(err);
    });
};

var defaultRealpath = function realpath(x, cb) {
    realpathFS(x, function (realpathErr, realPath) {
        if (realpathErr && realpathErr.code !== 'ENOENT') cb(realpathErr);
        else cb(null, realpathErr ? x : realPath);
    });
};

function maybeRealpath(realpath, x, opts, cb) {
    if (opts && opts.preserveSymlinks === false) {
        realpath(x, cb);
    } else {
        cb(null, x);
    }
}

function defaultReadPackage(readFile, pkgfile, cb) {
    readFile(pkgfile, function (readFileErr, body) {
        if (readFileErr) cb(readFileErr);
        else {
            try {
                var pkg = JSON.parse(body);
                cb(null, pkg);
            } catch (jsonErr) {
                cb(null);
            }
        }
    });
}

function getPackageCandidates(x, start, opts) {
    var dirs = nodeModulesPaths(start, opts, x);
    for (var i = 0; i < dirs.length; i++) {
        dirs[i] = path.join(dirs[i], x);
    }
    return dirs;
}

module.exports = function resolve(x, options, callback) {
    var cb = callback;
    var opts = options;
    if (typeof options === 'function') {
        cb = opts;
        opts = {};
    }
    if (typeof x !== 'string') {
        var err = new $TypeError('Path must be a string.');
        return process.nextTick(function () {
            cb(err);
        });
    }

    opts = normalizeOptions(x, opts);

    var isFile = opts.isFile || defaultIsFile;
    var isDirectory = opts.isDirectory || defaultIsDir;
    var readFile = opts.readFile || fs.readFile;
    var realpath = opts.realpath || defaultRealpath;
    var readPackage = opts.readPackage || defaultReadPackage;
    if (opts.readFile && opts.readPackage) {
        var conflictErr = new $TypeError('`readFile` and `readPackage` are mutually exclusive.');
        return process.nextTick(function () {
            cb(conflictErr);
        });
    }
    var packageIterator = opts.packageIterator;

    var extensions = opts.extensions || ['.js'];
    var includeCoreModules = opts.includeCoreModules !== false;
    var basedir = opts.basedir || path.dirname(caller());
    var parent = opts.filename || basedir;

    opts.paths = opts.paths || defaultPaths();

    // ensure that `basedir` is an absolute path at this point, resolving against the process' current working directory
    var absoluteStart = path.resolve(basedir);

    maybeRealpath(
        realpath,
        absoluteStart,
        opts,
        function (err, realStart) {
            if (err) cb(err);
            else init(realStart);
        }
    );

    var res;
    function init(basedir) {
        if (relativePathRegex.test(x)) {
            res = path.resolve(basedir, x);
            if (x === '.' || x === '..' || x.slice(-1) === '/') res += '/';
            if (x.slice(-1) === '/' && res === basedir) {
                loadAsDirectory(res, opts.package, onfile);
            } else loadAsFile(res, opts.package, onfile);
        } else if (includeCoreModules && isCore(x)) {
            return cb(null, x);
        } else loadNodeModules(x, basedir, function (err, n, pkg) {
            if (err) cb(err);
            else if (n) {
                return maybeRealpath(realpath, n, opts, function (err, realN) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, realN, pkg);
                    }
                });
            } else {
                var moduleError = new $Error("Cannot find module '" + x + "' from '" + parent + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }

    function onfile(err, m, pkg) {
        if (err) cb(err);
        else if (m) cb(null, m, pkg);
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err);
            else if (d) {
                maybeRealpath(realpath, d, opts, function (err, realD) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, realD, pkg);
                    }
                });
            } else {
                var moduleError = new $Error("Cannot find module '" + x + "' from '" + parent + "'");
                moduleError.code = 'MODULE_NOT_FOUND';
                cb(moduleError);
            }
        });
    }

    function loadAsFile(x, thePackage, callback) {
        var loadAsFilePackage = thePackage;
        var cb = callback;
        if (typeof loadAsFilePackage === 'function') {
            cb = loadAsFilePackage;
            loadAsFilePackage = undefined;
        }

        var exts = [''].concat(extensions);
        load(exts, x, loadAsFilePackage);

        function load(exts, x, loadPackage) {
            if (exts.length === 0) return cb(null, undefined, loadPackage);
            var file = x + exts[0];

            var pkg = loadPackage;
            if (pkg) onpkg(null, pkg);
            else loadpkg(path.dirname(file), onpkg);

            function onpkg(err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err);
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load(
                        [''].concat(extensions),
                        path.resolve(dir, r),
                        pkg
                    );
                }
                isFile(file, onex);
            }
            function onex(err, ex) {
                if (err) return cb(err);
                if (ex) return cb(null, file, pkg);
                load(exts.slice(1), x, pkg);
            }
        }
    }

    function loadpkg(dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && windowsDriveRegex.test(dir)) {
            return cb(null);
        }
        if (nodeModulesRegex.test(dir)) return cb(null);

        maybeRealpath(realpath, dir, opts, function (unwrapErr, pkgdir) {
            if (unwrapErr) return loadpkg(path.dirname(dir), cb);
            var pkgfile = path.join(pkgdir, 'package.json');
            isFile(pkgfile, function (err, ex) {
                // on err, ex is false
                if (!ex) return loadpkg(path.dirname(dir), cb);

                readPackage(readFile, pkgfile, function (err, pkgParam) {
                    if (err) { return cb(err); }

                    var pkg = pkgParam;

                    if (pkg && opts.packageFilter) {
                        pkg = opts.packageFilter(pkg, pkgfile);
                    }
                    cb(null, pkg, dir);
                });
            });
        });
    }

    function loadAsDirectory(x, loadAsDirectoryPackage, callback) {
        var cb = callback;
        var fpkg = loadAsDirectoryPackage;
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }

        maybeRealpath(realpath, x, opts, function (unwrapErr, pkgdir) {
            if (unwrapErr) return cb(unwrapErr);
            var pkgfile = path.join(pkgdir, 'package.json');
            isFile(pkgfile, function (err, ex) {
                if (err) return cb(err);
                if (!ex) return loadAsFile(path.join(x, 'index'), fpkg, cb);

                readPackage(readFile, pkgfile, function (err, pkgParam) {
                    if (err) return cb(err);

                    var pkg = pkgParam;

                    if (pkg && opts.packageFilter) {
                        pkg = opts.packageFilter(pkg, pkgfile);
                    }

                    if (pkg && pkg.main) {
                        if (typeof pkg.main !== 'string') {
                            var mainError = new $TypeError('package “' + pkg.name + '” `main` must be a string');
                            mainError.code = 'INVALID_PACKAGE_MAIN';
                            return cb(mainError);
                        }
                        if (pkg.main === '.' || pkg.main === './') {
                            pkg.main = 'index';
                        }
                        loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                            if (err) return cb(err);
                            if (m) return cb(null, m, pkg);
                            if (!pkg) return loadAsFile(path.join(x, 'index'), pkg, cb);

                            var dir = path.resolve(x, pkg.main);
                            loadAsDirectory(dir, pkg, function (err, n, pkg) {
                                if (err) return cb(err);
                                if (n) return cb(null, n, pkg);
                                loadAsFile(path.join(x, 'index'), pkg, cb);
                            });
                        });
                        return;
                    }

                    loadAsFile(path.join(x, '/index'), pkg, cb);
                });
            });
        });
    }

    function processDirs(cb, dirs) {
        if (dirs.length === 0) return cb(null, undefined);
        var dir = dirs[0];

        isDirectory(path.dirname(dir), isdir);

        function isdir(err, isdir) {
            if (err) return cb(err);
            if (!isdir) return processDirs(cb, dirs.slice(1));
            loadAsFile(dir, opts.package, onfile);
        }

        function onfile(err, m, pkg) {
            if (err) return cb(err);
            if (m) return cb(null, m, pkg);
            loadAsDirectory(dir, opts.package, ondir);
        }

        function ondir(err, n, pkg) {
            if (err) return cb(err);
            if (n) return cb(null, n, pkg);
            processDirs(cb, dirs.slice(1));
        }
    }
    function loadNodeModules(x, start, cb) {
        var thunk = function () { return getPackageCandidates(x, start, opts); };
        processDirs(
            cb,
            packageIterator ? packageIterator(x, start, thunk, opts) : thunk()
        );
    }
};
