'use strict';

var inspect = require('../');
var test = require('tape');
var mockProperty = require('mock-property');
var hasSymbols = require('has-symbols/shams')();
var hasToStringTag = require('has-tostringtag/shams')();
var forEach = require('for-each');
var semver = require('semver');

test('values', function (t) {
    t.plan(1);
    var obj = [{}, [], { 'a-b': 5 }];
    t.equal(inspect(obj), '[ {}, [], { \'a-b\': 5 } ]');
});

test('arrays with properties', function (t) {
    t.plan(1);
    var arr = [3];
    arr.foo = 'bar';
    var obj = [1, 2, arr];
    obj.baz = 'quux';
    obj.index = -1;
    t.equal(inspect(obj), '[ 1, 2, [ 3, foo: \'bar\' ], baz: \'quux\', index: -1 ]');
});

test('has', function (t) {
    t.plan(1);
    t.teardown(mockProperty(Object.prototype, 'hasOwnProperty', { 'delete': true }));

    t.equal(inspect({ a: 1, b: 2 }), '{ a: 1, b: 2 }');
});

test('indexOf seen', function (t) {
    t.plan(1);
    var xs = [1, 2, 3, {}];
    xs.push(xs);

    var seen = [];
    seen.indexOf = undefined;

    t.equal(
        inspect(xs, {}, 0, seen),
        '[ 1, 2, 3, {}, [Circular] ]'
    );
});

test('seen seen', function (t) {
    t.plan(1);
    var xs = [1, 2, 3];

    var seen = [xs];
    seen.indexOf = undefined;

    t.equal(
        inspect(xs, {}, 0, seen),
        '[Circular]'
    );
});

test('seen seen seen', function (t) {
    t.plan(1);
    var xs = [1, 2, 3];

    var seen = [5, xs];
    seen.indexOf = undefined;

    t.equal(
        inspect(xs, {}, 0, seen),
        '[Circular]'
    );
});

test('symbols', { skip: !hasSymbols }, function (t) {
    var sym = Symbol('foo');
    t.equal(inspect(sym), 'Symbol(foo)', 'Symbol("foo") should be "Symbol(foo)"');
    if (typeof sym === 'symbol') {
        // Symbol shams are incapable of differentiating boxed from unboxed symbols
        t.equal(inspect(Object(sym)), 'Object(Symbol(foo))', 'Object(Symbol("foo")) should be "Object(Symbol(foo))"');
    }

    t.test('toStringTag', { skip: !hasToStringTag }, function (st) {
        st.plan(1);

        var faker = {};
        faker[Symbol.toStringTag] = 'Symbol';
        st.equal(
            inspect(faker),
            '{ [Symbol(Symbol.toStringTag)]: \'Symbol\' }',
            'object lying about being a Symbol inspects as an object'
        );
    });

    t.end();
});

test('Map', { skip: typeof Map !== 'function' }, function (t) {
    var map = new Map();
    map.set({ a: 1 }, ['b']);
    map.set(3, NaN);
    var expectedString = 'Map (2) {' + inspect({ a: 1 }) + ' => ' + inspect(['b']) + ', 3 => NaN}';
    t.equal(inspect(map), expectedString, 'new Map([[{ a: 1 }, ["b"]], [3, NaN]]) should show size and contents');
    t.equal(inspect(new Map()), 'Map (0) {}', 'empty Map should show as empty');

    var nestedMap = new Map();
    nestedMap.set(nestedMap, map);
    t.equal(inspect(nestedMap), 'Map (1) {[Circular] => ' + expectedString + '}', 'Map containing a Map should work');

    t.end();
});

test('WeakMap', { skip: typeof WeakMap !== 'function' }, function (t) {
    var map = new WeakMap();
    map.set({ a: 1 }, ['b']);
    var expectedString = 'WeakMap { ? }';
    t.equal(inspect(map), expectedString, 'new WeakMap([[{ a: 1 }, ["b"]]]) should not show size or contents');
    t.equal(inspect(new WeakMap()), 'WeakMap { ? }', 'empty WeakMap should not show as empty');

    t.end();
});

test('Set', { skip: typeof Set !== 'function' }, function (t) {
    var set = new Set();
    set.add({ a: 1 });
    set.add(['b']);
    var expectedString = 'Set (2) {' + inspect({ a: 1 }) + ', ' + inspect(['b']) + '}';
    t.equal(inspect(set), expectedString, 'new Set([{ a: 1 }, ["b"]]) should show size and contents');
    t.equal(inspect(new Set()), 'Set (0) {}', 'empty Set should show as empty');

    var nestedSet = new Set();
    nestedSet.add(set);
    nestedSet.add(nestedSet);
    t.equal(inspect(nestedSet), 'Set (2) {' + expectedString + ', [Circular]}', 'Set containing a Set should work');

    t.end();
});

test('WeakSet', { skip: typeof WeakSet !== 'function' }, function (t) {
    var map = new WeakSet();
    map.add({ a: 1 });
    var expectedString = 'WeakSet { ? }';
    t.equal(inspect(map), expectedString, 'new WeakSet([{ a: 1 }]) should not show size or contents');
    t.equal(inspect(new WeakSet()), 'WeakSet { ? }', 'empty WeakSet should not show as empty');

    t.end();
});

test('WeakRef', { skip: typeof WeakRef !== 'function' }, function (t) {
    var ref = new WeakRef({ a: 1 });
    var expectedString = 'WeakRef { ? }';
    t.equal(inspect(ref), expectedString, 'new WeakRef({ a: 1 }) should not show contents');

    t.end();
});

test('FinalizationRegistry', { skip: typeof FinalizationRegistry !== 'function' }, function (t) {
    var registry = new FinalizationRegistry(function () {});
    var expectedString = 'FinalizationRegistry [FinalizationRegistry] {}';
    t.equal(inspect(registry), expectedString, 'new FinalizationRegistry(function () {}) should work normallys');

    t.end();
});

test('Strings', function (t) {
    var str = 'abc';

    t.equal(inspect(str), "'" + str + "'", 'primitive string shows as such');
    t.equal(inspect(str, { quoteStyle: 'single' }), "'" + str + "'", 'primitive string shows as such, single quoted');
    t.equal(inspect(str, { quoteStyle: 'double' }), '"' + str + '"', 'primitive string shows as such, double quoted');
    t.equal(inspect(Object(str)), 'Object(' + inspect(str) + ')', 'String object shows as such');
    t.equal(inspect(Object(str), { quoteStyle: 'single' }), 'Object(' + inspect(str, { quoteStyle: 'single' }) + ')', 'String object shows as such, single quoted');
    t.equal(inspect(Object(str), { quoteStyle: 'double' }), 'Object(' + inspect(str, { quoteStyle: 'double' }) + ')', 'String object shows as such, double quoted');

    t.end();
});

test('Numbers', function (t) {
    var num = 42;

    t.equal(inspect(num), String(num), 'primitive number shows as such');
    t.equal(inspect(Object(num)), 'Object(' + inspect(num) + ')', 'Number object shows as such');

    t.end();
});

test('Booleans', function (t) {
    t.equal(inspect(true), String(true), 'primitive true shows as such');
    t.equal(inspect(Object(true)), 'Object(' + inspect(true) + ')', 'Boolean object true shows as such');

    t.equal(inspect(false), String(false), 'primitive false shows as such');
    t.equal(inspect(Object(false)), 'Object(' + inspect(false) + ')', 'Boolean false object shows as such');

    t.end();
});

test('Date', function (t) {
    var now = new Date();
    t.equal(inspect(now), String(now), 'Date shows properly');
    t.equal(inspect(new Date(NaN)), 'Invalid Date', 'Invalid Date shows properly');

    t.end();
});

test('RegExps', function (t) {
    t.equal(inspect(/a/g), '/a/g', 'regex shows properly');
    t.equal(inspect(new RegExp('abc', 'i')), '/abc/i', 'new RegExp shows properly');

    var match = 'abc abc'.match(/[ab]+/);
    delete match.groups; // for node < 10
    t.equal(inspect(match), '[ \'ab\', index: 0, input: \'abc abc\' ]', 'RegExp match object shows properly');

    t.end();
});

test('Proxies', { skip: typeof Proxy !== 'function' || !hasToStringTag }, function (t) {
    var target = { proxy: true };
    var fake = new Proxy(target, { has: function () { return false; } });

    // needed to work around a weird difference in node v6.0 - v6.4 where non-present properties are not logged
    var isNode60 = semver.satisfies(process.version, '6.0 - 6.4');

    forEach([
        'Boolean',
        'Number',
        'String',
        'Symbol',
        'Date'
    ], function (tag) {
        target[Symbol.toStringTag] = tag;

        t.equal(
            inspect(fake),
            '{ ' + (isNode60 ? '' : 'proxy: true, ') + '[Symbol(Symbol.toStringTag)]: \'' + tag + '\' }',
            'Proxy for + ' + tag + ' shows as the target, which has no slots'
        );
    });

    t.end();
});

test('fakers', { skip: !hasToStringTag }, function (t) {
    var target = { proxy: false };

    forEach([
        'Boolean',
        'Number',
        'String',
        'Symbol',
        'Date'
    ], function (tag) {
        target[Symbol.toStringTag] = tag;

        t.equal(
            inspect(target),
            '{ proxy: false, [Symbol(Symbol.toStringTag)]: \'' + tag + '\' }',
            'Object pretending to be ' + tag + ' does not trick us'
        );
    });

    t.end();
});
