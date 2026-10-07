var wildcard = require('../'),
    test = require('tape'),
    testdata = {
        'a.b.c' : {},
        'a.b'   : {},
        'a'     : {},
        'a.b.d' : {}
    },
    testdataSep = {
        'a:b:c' : {},
        'a:b'   : {},
        'a'     : {},
        'a:b:d' : {}
    };

test('object result matching tests', function(t) {
    t.test('should return 4 matches for a.*', function(t) {
        var matches = wildcard('a.*', testdata);

        t.plan(4);
        t.ok(matches['a.b.c']);
        t.ok(matches['a.b']);
        t.ok(matches['a']);
        t.ok(matches['a.b.d']);
        t.end();
    });

    t.test('should return 4 matches for a:*', function(t) {
        var matches = wildcard('a:*', testdataSep, ':');

        t.plan(4);
        t.ok(matches['a:b:c']);
        t.ok(matches['a:b']);
        t.ok(matches['a']);
        t.ok(matches['a:b:d']);
        t.end();
    });

    t.test('should return 3 matches for a.b.*', function(t) {
        var matches = wildcard('a.b.*', testdata);

        t.plan(4);
        t.ok(matches['a.b.c']);
        t.ok(matches['a.b']);
        t.notOk(matches['a']);
        t.ok(matches['a.b.d']);
        t.end();
    });

    t.test('should return 3 matches for a:b:*', function(t) {
        var matches = wildcard('a:b:*', testdataSep, ':');

        t.plan(4);
        t.ok(matches['a:b:c']);
        t.ok(matches['a:b']);
        t.notOk(matches['a']);
        t.ok(matches['a:b:d']);
        t.end();
    });

    t.test('should return 1 matches for a.*.c', function(t) {
        var matches = wildcard('a.*.c', testdata);

        t.plan(4);
        t.ok(matches['a.b.c']);
        t.notOk(matches['a.b']);
        t.notOk(matches['a']);
        t.notOk(matches['a.b.d']);
        t.end();
    });

    t.test('should return 1 matches for a:*:c', function(t) {
        var matches = wildcard('a:*:c', testdataSep, ':');

        t.plan(4);
        t.ok(matches['a:b:c']);
        t.notOk(matches['a:b']);
        t.notOk(matches['a']);
        t.notOk(matches['a:b:d']);
        t.end();
    });

    t.test('should return 0 matches for b.*.d', function(t) {
        var matches = wildcard('b.*.d', testdata);

        t.plan(4);
        t.notOk(matches['a.b.c']);
        t.notOk(matches['a.b']);
        t.notOk(matches['a']);
        t.notOk(matches['a.b.d']);
        t.end();
    });

    t.test('should return 0 matches for b:*:d', function(t) {
        var matches = wildcard('b:*:d', testdataSep, ':');

        t.plan(4);
        t.notOk(matches['a:b:c']);
        t.notOk(matches['a:b']);
        t.notOk(matches['a']);
        t.notOk(matches['a:b:d']);
        t.end();
    });

    t.end();
});
