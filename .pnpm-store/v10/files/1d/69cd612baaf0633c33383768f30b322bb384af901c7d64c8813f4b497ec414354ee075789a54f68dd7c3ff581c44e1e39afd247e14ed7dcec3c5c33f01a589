'use strict';

var inspect = require('../');
var test = require('tape');

test('quoteStyle option', function (t) {
    t['throws'](function () { inspect(null, { quoteStyle: false }); }, 'false is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: true }); }, 'true is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: '' }); }, '"" is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: {} }); }, '{} is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: [] }); }, '[] is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: 42 }); }, '42 is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: NaN }); }, 'NaN is not a valid value');
    t['throws'](function () { inspect(null, { quoteStyle: function () {} }); }, 'a function is not a valid value');

    t.equal(inspect('"', { quoteStyle: 'single' }), '\'"\'', 'double quote, quoteStyle: "single"');
    t.equal(inspect('"', { quoteStyle: 'double' }), '"\\""', 'double quote, quoteStyle: "double"');

    t.equal(inspect('\'', { quoteStyle: 'single' }), '\'\\\'\'', 'single quote, quoteStyle: "single"');
    t.equal(inspect('\'', { quoteStyle: 'double' }), '"\'"', 'single quote, quoteStyle: "double"');

    t.equal(inspect('`', { quoteStyle: 'single' }), '\'`\'', 'backtick, quoteStyle: "single"');
    t.equal(inspect('`', { quoteStyle: 'double' }), '"`"', 'backtick, quoteStyle: "double"');

    t.end();
});
