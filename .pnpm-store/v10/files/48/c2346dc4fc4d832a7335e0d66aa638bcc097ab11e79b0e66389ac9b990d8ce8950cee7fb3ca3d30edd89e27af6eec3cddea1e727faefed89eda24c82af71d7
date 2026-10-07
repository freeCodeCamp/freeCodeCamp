'use strict';

require('core-js');

var inspect = require('./');
var test = require('tape');

test('Maps', function (t) {
    t.equal(inspect(new Map([[1, 2]])), 'Map (1) {1 => 2}');
    t.end();
});

test('WeakMaps', function (t) {
    t.equal(inspect(new WeakMap([[{}, 2]])), 'WeakMap { ? }');
    t.end();
});

test('Sets', function (t) {
    t.equal(inspect(new Set([[1, 2]])), 'Set (1) {[ 1, 2 ]}');
    t.end();
});

test('WeakSets', function (t) {
    t.equal(inspect(new WeakSet([[1, 2]])), 'WeakSet { ? }');
    t.end();
});
