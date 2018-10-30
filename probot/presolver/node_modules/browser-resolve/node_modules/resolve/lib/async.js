var core = require('./core');
var fs = require('fs');
var path = require('path');
var caller = require('./caller.js');
var nodeModulesPaths = require('./node-modules-paths.js');
var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;

module.exports = function resolve (x, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    if (!opts) opts = {};
    if (typeof x !== 'string') {
        return process.nextTick(function () {
            cb(new Error('path must be a string'));
        });
    }
    
    var isFile = opts.isFile || function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (err && err.code === 'ENOENT') cb(null, false)
            else if (err) cb(err)
            else cb(null, stat.isFile() || stat.isFIFO())
        });
    };
    var readFile = opts.readFile || fs.readFile;
    
    var extensions = opts.extensions || [ '.js' ];
    var y = opts.basedir || path.dirname(caller());
    
    opts.paths = opts.paths || [];
    
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..') res += '/';
        if (/\/$/.test(x) && res === y) {
            loadAsDirectory(res, opts.package, onfile);
        }
        else loadAsFile(res, opts.package, onfile);
    }
    else loadNodeModules(x, y, function (err, n, pkg) {
        if (err) cb(err)
        else if (n) cb(null, n, pkg)
        else if (core[x]) return cb(null, x);
        else cb(new Error("Cannot find module '" + x + "' from '" + y + "'"))
    });
    
    function onfile (err, m, pkg) {
        if (err) cb(err)
        else if (m) cb(null, m, pkg)
        else loadAsDirectory(res, function (err, d, pkg) {
            if (err) cb(err)
            else if (d) cb(null, d, pkg)
            else cb(new Error("Cannot find module '" + x + "' from '" + y + "'"))
        })
    }
    
    function loadAsFile (x, pkg, cb) {
        if (typeof pkg === 'function') {
            cb = pkg;
            pkg = undefined;
        }
        
        var exts = [''].concat(extensions);
        load(exts, x, pkg)
		
		function load (exts, x, pkg) {
            if (exts.length === 0) return cb(null, undefined, pkg);
            var file = x + exts[0];
            
            if (pkg) onpkg(null, pkg)
            else loadpkg(path.dirname(file), onpkg);
            
            function onpkg (err, pkg_, dir) {
                pkg = pkg_;
                if (err) return cb(err)
                if (dir && pkg && opts.pathFilter) {
                    var rfile = path.relative(dir, file);
                    var rel = rfile.slice(0, rfile.length - exts[0].length);
                    var r = opts.pathFilter(pkg, x, rel);
                    if (r) return load(
                        [''].concat(extensions.slice()),
                        path.resolve(dir, r),
                        pkg
                    );
                }
                isFile(file, onex);
            }
            function onex (err, ex) {
                if (err) cb(err)
                else if (!ex) load(exts.slice(1), x, pkg)
                else cb(null, file, pkg)
            }
        }
    }
    
    function loadpkg (dir, cb) {
        if (dir === '' || dir === '/') return cb(null);
        if (process.platform === 'win32' && /^\w:[\\\/]*$/.test(dir)) {
            return cb(null);
        }
        if (/[\\\/]node_modules[\\\/]*$/.test(dir)) return cb(null);
        
        var pkgfile = path.join(dir, 'package.json');
        isFile(pkgfile, function (err, ex) {
            // on err, ex is false
            if (!ex) return loadpkg(
                path.dirname(dir), cb
            );
            
            readFile(pkgfile, function (err, body) {
                if (err) cb(err);
                try { var pkg = JSON.parse(body) }
                catch (err) {}
                
                if (pkg && opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                cb(null, pkg, dir);
            });
        });
    }
    
    function loadAsDirectory (x, fpkg, cb) {
        if (typeof fpkg === 'function') {
            cb = fpkg;
            fpkg = opts.package;
        }
        
        var pkgfile = path.join(x, '/package.json');
        isFile(pkgfile, function (err, ex) {
            if (err) return cb(err);
            if (!ex) return loadAsFile(path.join(x, '/index'), fpkg, cb);
            
            readFile(pkgfile, function (err, body) {
                if (err) return cb(err);
                try {
                    var pkg = JSON.parse(body);
                }
                catch (err) {}
                
                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, pkgfile);
                }
                
                if (pkg.main) {
                    if (pkg.main === '.' || pkg.main === './'){
                        pkg.main = 'index'
                    }
                    loadAsFile(path.resolve(x, pkg.main), pkg, function (err, m, pkg) {
                        if (err) return cb(err);
                        if (m) return cb(null, m, pkg);
                        if (!pkg) return loadAsFile(path.join(x, '/index'), pkg, cb);

                        var dir = path.resolve(x, pkg.main);
                        loadAsDirectory(dir, pkg, function (err, n, pkg) {
                            if (err) return cb(err);
                            if (n) return cb(null, n, pkg);
                            loadAsFile(path.join(x, '/index'), pkg, cb);
                        });
                    });
                    return;
                }
                
                loadAsFile(path.join(x, '/index'), pkg, cb);
            });
        });
    }
    
    function loadNodeModules (x, start, cb) {
        (function process (dirs) {
            if (dirs.length === 0) return cb(null, undefined);
            var dir = dirs[0];
            
            var file = path.join(dir, '/', x);
            loadAsFile(file, undefined, onfile);
            
            function onfile (err, m, pkg) {
                if (err) return cb(err);
                if (m) return cb(null, m, pkg);
                loadAsDirectory(path.join(dir, '/', x), undefined, ondir);
            }
            
            function ondir (err, n, pkg) {
                if (err) return cb(err);
                if (n) return cb(null, n, pkg);
                process(dirs.slice(1));
            }
        })(nodeModulesPaths(start, opts));
    }
};
