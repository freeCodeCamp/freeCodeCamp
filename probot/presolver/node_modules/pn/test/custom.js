// Verify that custom promises work as advertised.
var PrPromise = require('prfun');
var assert = require('../assert');
var fs = require('../fs');

describe('Verify that custom promises can be used', function() {
    var oldPromise;
    before(function() {
        oldPromise = require('../_promise')();
        require('../_promise')(PrPromise);
    });
    after(function() {
        require('../_promise')(oldPromise);
    });

    it('exists should use the custom promise type', function() {
        var p = fs.exists('abc');
        assert.equal(p instanceof PrPromise, true);
    });
});
