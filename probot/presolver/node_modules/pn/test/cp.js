// if running on older node, ensure that es6-shim is loaded first
if (/^v0.10/.test(process.version)) { require('es6-shim'); }
var assert= require('../assert');
var cp = require('../child_process');

describe('child_process module', function() {
    it ('execFile(true)', function() {
        return cp.execFile('true').promise.then(function(result) {
            assert.equal(result.stdout, '');
            assert.equal(result.stderr, '');
        });
    });
});
