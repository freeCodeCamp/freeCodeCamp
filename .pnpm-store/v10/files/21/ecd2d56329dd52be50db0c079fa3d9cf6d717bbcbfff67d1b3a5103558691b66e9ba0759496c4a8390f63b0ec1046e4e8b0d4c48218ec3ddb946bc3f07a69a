var test = require('tape'),
    wildcard = require('../'),
    testdata = [
        'a.b.c',
        'a.b',
        'a',
        'a.b.d'
    ],
    testdataSep = [
        'a:b:c',
        'a:b',
        'a',
        'a:b:d'
    ];

test('array result matching tests', function(t) {
    t.plan(5);

    t.equal(wildcard('*', testdata).length, 4, '* matches all testdata');
    t.equal(wildcard('a.*', testdata).length, 4, '4 matches found');
    t.equal(wildcard('a.b.*', testdata).length, 3, '3 matches found');
    t.equal(wildcard('a.*.c', testdata).length, 1);
    t.equal(wildcard('b.*.d', testdata).length, 0);
});

test('array result with separator matching tests', function(t) {
    t.plan(4);

    t.equal(wildcard('a:*', testdataSep, ':').length, 4, '4 matches found');
    t.equal(wildcard('a:b:*', testdataSep, ':').length, 3, '3 matches found');
    t.equal(wildcard('a:*:c', testdataSep, ':').length, 1);
    t.equal(wildcard('b:*:d', testdataSep, ':').length, 0);
});
