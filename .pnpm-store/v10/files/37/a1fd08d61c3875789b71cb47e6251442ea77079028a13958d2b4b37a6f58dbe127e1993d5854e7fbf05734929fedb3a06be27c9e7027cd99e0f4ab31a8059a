'use strict';

var inspect = require('../');

var test = require('tape');
var globalThis = require('globalthis')();

test('global object', function (t) {
    /* eslint-env browser */
    var expected = typeof window === 'undefined' ? 'globalThis' : 'Window';
    t.equal(
        inspect([globalThis]),
        '[ { [object ' + expected + '] } ]'
    );

    t.end();
});
