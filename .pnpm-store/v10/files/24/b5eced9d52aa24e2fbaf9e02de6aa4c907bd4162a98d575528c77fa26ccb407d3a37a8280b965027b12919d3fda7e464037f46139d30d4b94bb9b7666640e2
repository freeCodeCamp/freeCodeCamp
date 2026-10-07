'use strict';

var inspect = require('../');
var test = require('tape');
var hasToStringTag = require('has-tostringtag/shams')();
var forEach = require('for-each');

test('fakes', { skip: !hasToStringTag }, function (t) {
    forEach([
        'Array',
        'Boolean',
        'Date',
        'Error',
        'Number',
        'RegExp',
        'String'
    ], function (expected) {
        var faker = {};
        faker[Symbol.toStringTag] = expected;

        t.equal(
            inspect(faker),
            '{ [Symbol(Symbol.toStringTag)]: \'' + expected + '\' }',
            'faker masquerading as ' + expected + ' is not shown as one'
        );
    });

    t.end();
});
