var test = require('tape'),
    wildcard = require('../');

test('general wild card matching tests', function(t) {

    t.plan(8);
    t.ok(wildcard('*', 'test'), '* should match test');
    t.ok(wildcard('foo.*', 'foo.bar'), 'foo.* should match foo.bar');
    t.ok(wildcard('foo.*', 'foo'), 'foo.* should match foo');
    t.ok(wildcard('*.foo.com', 'test.foo.com'), 'test.foo.com should match *.foo.com');
    t.notOk(wildcard('foo.*', 'bar'), 'foo.* should not match bar');
    t.ok(wildcard('a.*.c', 'a.b.c'), 'a.*.c should match a.b.c');
    t.notOk(wildcard('a.*.c', 'a.b'), 'a.*.c should not match a.b');
    t.notOk(wildcard('a', 'a.b.c'), 'a should not match a.b.c');
});

test('regex wildcard matching tests', function(t) {
  t.plan(4);
  t.ok(wildcard('*foo', 'foo'), '*foo should match foo');
  t.ok(wildcard('*foo.b', 'foo.b'), '*foo.b should match foo.b');
  t.ok(wildcard('a.*foo.c', 'a.barfoo.c'), 'a.barfoo.c should match a.*foo.c');
  t.ok(wildcard('a.foo*.c', 'a.foobar.c'), 'a.foobar.c should match a.foo*.c');
});

test('general wild card with separator matching tests', function(t) {

    t.plan(5);
    t.ok(wildcard('foo:*', 'foo:bar', ':'), 'foo:* should match foo:bar');
    t.ok(wildcard('foo:*', 'foo', ':'), 'foo:* should match foo');
    t.notOk(wildcard('foo:*', 'bar', ':'), 'foo:* should not match bar');
    t.ok(wildcard('a:*:c', 'a:b:c', ':'), 'a:*:c should match a:b:c');
    t.notOk(wildcard('a:*:c', 'a:b', ':'), 'a:*:c should not match a:b');
});

test('general wild card with tokens being returned', function(t) {

    t.plan(5);
    var parts = wildcard('foo.*', 'foo.bar');
    t.ok(parts);
    t.equal(parts.length, 2);
    t.equal(parts[0], 'foo');
    t.equal(parts[1], 'bar');

    parts = wildcard('foo.*', 'not.matching');
    t.notOk(parts);
});
