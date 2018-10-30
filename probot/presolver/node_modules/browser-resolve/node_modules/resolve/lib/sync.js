var core = require('./core');
var fs = require('fs');
var path = require('path');
var caller = require('./caller.js');
var nodeModulesPaths = require('./node-modules-paths.js');

module.exports = function (x, opts) {
    if (!opts) opts = {};
    var isFile = opts.isFile || function (file) {
        try { var stat = fs.statSync(file) }
        catch (err) { if (err && err.code === 'ENOENT') return false }
        return stat.isFile() || stat.isFIFO();
    };
    var readFileSync = opts.readFileSync || fs.readFileSync;
    
    var extensions = opts.extensions || [ '.js' ];
    var y = opts.basedir || path.dirname(caller());

    opts.paths = opts.paths || [];

    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\\\/])/.test(x)) {
        var res = path.resolve(y, x);
        if (x === '..') res += '/';
        var m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) return m;
    } else {
        var n = loadNodeModulesSync(x, y);
        if (n) return n;
    }
    
    if (core[x]) return x;
    
    throw new Error("Cannot find module '" + x + "' from '" + y + "'");
    
    function loadAsFileSync (x) {
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
    
    function loadAsDirectorySync (x) {
        var pkgfile = path.join(x, '/package.json');
        if (isFile(pkgfile)) {
            var body = readFileSync(pkgfile, 'utf8');
            try {
                var pkg = JSON.parse(body);
                if (opts.packageFilter) {
                    pkg = opts.packageFilter(pkg, x);
                }
                
                if (pkg.main) {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                    var n = loadAsDirectorySync(path.resolve(x, pkg.main));
                    if (n) return n;
                }
            }
            catch (err) {}
        }
        
        return loadAsFileSync(path.join( x, '/index'));
    }
    
    function loadNodeModulesSync (x, start) {
        var dirs = nodeModulesPaths(start, opts);
        for (var i = 0; i < dirs.length; i++) {
            var dir = dirs[i];
            var m = loadAsFileSync(path.join( dir, '/', x));
            if (m) return m;
            var n = loadAsDirectorySync(path.join( dir, '/', x ));
            if (n) return n;
        }
    }
};
