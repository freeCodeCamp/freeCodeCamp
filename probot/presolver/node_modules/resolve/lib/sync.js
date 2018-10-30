var core = require('./core');
var fs = require('fs');
var path = require('path');
var caller = require('./caller.js');
var nodeModulesPaths = require('./node-modules-paths.js');

var defaultIsFile = function isFile(file) {
    try {
        var stat = fs.statSync(file);
    } catch (e) {
        if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
        throw e;
    }
    return stat.isFile() || stat.isFIFO();
};

module.exports = function (x, options) {
    if (typeof x !== 'string') {
        throw new TypeError('Path must be a string.');
    }
    var opts = options || {};
    var isFile = opts.isFile || defaultIsFile;
    var readFileSync = opts.readFileSync || fs.readFileSync;

    var extensions = opts.extensions || ['.js'];
    var basedir = opts.basedir || path.dirname(caller());
    var parent = opts.filename || basedir;

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
        var res = path.resolve(basedir, x);
        if (x === '..' || x.slice(-1) === '/') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return m;
    } else {
        var n = loadNodeModulesSync(x, basedir);
        if (n) return n;
    }

    if (core[x]) return x;

    var err = new Error("Cannot find module '" + x + "' from '" + parent + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;

    function loadAsFileSync(x) {
        var pkg = loadpkg(path.dirname(x));

        if (pkg && pkg.dir && pkg.pkg && opts.pathFilter) {
            var rfile = path.relative(pkg.dir, x);
            var r = opts.pathFilter(pkg.pkg, x, rfile);
            if (r) {
                x = path.resolve(pkg.dir, r); // eslint-disable-line no-param-reassign
            }
        }

        if (isFile(x)) {
            return x;
        }

        for (var i = 0; i < extensions.length; i++) {
            var file = x + extensions[i];
            if (isFile(file)) {
                return file;
            }
        }
    }

    function loadpkg(dir) {
        if (dir === '' || dir === '/') return;
        if (process.platform === 'win32' && (/^\w:[/\\]*$/).test(dir)) {
            return;
        }
        if (/[/\\]node_modules[/\\]*$/.test(dir)) return;

        var pkgfile = path.join(dir, 'package.json');

        if (!isFile(pkgfile)) {
            return loadpkg(path.dirname(dir));
        }

        var body = readFileSync(pkgfile);

        try {
            var pkg = JSON.parse(body);
        } catch (jsonErr) {}

        if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(pkg, dir);
        }

        return { pkg: pkg, dir: dir };
    }

    function loadAsDirectorySync(x) {
        var pkgfile = path.join(x, '/package.json');
        if (isFile(pkgfile)) {
            try {
                var body = readFileSync(pkgfile, 'UTF8');
                var pkg = JSON.parse(body);

                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, x);
                }

                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './') {
                        pkg.main = 'index';
                    }
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                }
            } catch (e) {}
        }

        return loadAsFileSync(path.join(x, '/index'));
    }

    function loadNodeModulesSync(x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join(dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join(dir, '/', x));
            if (n) return n;
        }
    }
};
