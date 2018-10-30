// if running on older node, ensure that es6-shim is loaded first
if (/^v0.10/.test(process.version)) { require('es6-shim'); }
var assert= require('../assert');
var timers = require('../timers');

describe('timers module', function() {
    it ('setImmediate()', function() {
        return timers.setImmediate().then(function(result) {
            assert.strictEqual(result, undefined, '');
        });
    });
    it ('setImmediate(<arg>)', function() {
        var obj = {};
        return timers.setImmediate(obj).then(function(result) {
            assert.strictEqual(result, obj, '');
        });
    });
    it ('setTimeout()', function() {
        return timers.setTimeout().then(function(result) {
            assert.strictEqual(result, undefined, '');
        });
    });
    it ('setTimeout(<num>)', function() {
        return timers.setTimeout(15).then(function(result) {
            assert.strictEqual(result, undefined, '');
        });
    });
    it ('setTimeout(<num>, <arg>)', function() {
        var obj = {};
        return timers.setTimeout(25, obj).then(function(result) {
            assert.strictEqual(result, obj, '');
        });
    });
});
