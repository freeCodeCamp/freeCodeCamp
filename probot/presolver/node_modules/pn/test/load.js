// Just verify that all of the packages can be loaded without errors.
var fs = require('fs'), path = require('path');
// if running on older node, ensure that es6-shim is loaded first
if (/^v0.10/.test(process.version)) { require('es6-shim'); }

describe("Package load tests", function() {
    fs.readdirSync(path.join(__dirname, '..')).forEach(function(file) {
        if (/^_/.test(file) || !/\.js$/.test(file)) { return; }
        var pkgname = file.replace(/\.js$/, '');
        it(pkgname+' should load', function() {
            require('../'+pkgname);
        });
    });
});
