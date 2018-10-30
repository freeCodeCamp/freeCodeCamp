'use strict';

var test = require('tape');
var qs = require('../');
var utils = require('../lib/utils');
var iconv = require('iconv-lite');
var SaferBuffer = require('safer-buffer').Buffer;

test('parse()', function (t) {
    t.test('parses a simple string', function (st) {
        st.deepEqual(qs.parse('0=foo'), { 0: 'foo' });
        st.deepEqual(qs.parse('foo=c++'), { foo: 'c  ' });
        st.deepEqual(qs.parse('a[>=]=23'), { a: { '>=': '23' } });
        st.deepEqual(qs.parse('a[<=>]==23'), { a: { '<=>': '=23' } });
        st.deepEqual(qs.parse('a[==]=23'), { a: { '==': '23' } });
        st.deepEqual(qs.parse('foo', { strictNullHandling: true }), { foo: null });
        st.deepEqual(qs.parse('foo'), { foo: '' });
        st.deepEqual(qs.parse('foo='), { foo: '' });
        st.deepEqual(qs.parse('foo=bar'), { foo: 'bar' });
        st.deepEqual(qs.parse(' foo = bar = baz '), { ' foo ': ' bar = baz ' });
        st.deepEqual(qs.parse('foo=bar=baz'), { foo: 'bar=baz' });
        st.deepEqual(qs.parse('foo=bar&bar=baz'), { foo: 'bar', bar: 'baz' });
        st.deepEqual(qs.parse('foo2=bar2&baz2='), { foo2: 'bar2', baz2: '' });
        st.deepEqual(qs.parse('foo=bar&baz', { strictNullHandling: true }), { foo: 'bar', baz: null });
        st.deepEqual(qs.parse('foo=bar&baz'), { foo: 'bar', baz: '' });
        st.deepEqual(qs.parse('cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World'), {
            cht: 'p3',
            chd: 't:60,40',
            chs: '250x100',
            chl: 'Hello|World'
        });
        st.end();
    });

    t.test('allows enabling dot notation', function (st) {
        st.deepEqual(qs.parse('a.b=c'), { 'a.b': 'c' });
        st.deepEqual(qs.parse('a.b=c', { allowDots: true }), { a: { b: 'c' } });
        st.end();
    });

    t.deepEqual(qs.parse('a[b]=c'), { a: { b: 'c' } }, 'parses a single nested string');
    t.deepEqual(qs.parse('a[b][c]=d'), { a: { b: { c: 'd' } } }, 'parses a double nested string');
    t.deepEqual(
        qs.parse('a[b][c][d][e][f][g][h]=i'),
        { a: { b: { c: { d: { e: { f: { '[g][h]': 'i' } } } } } } },
        'defaults to a depth of 5'
    );

    t.test('only parses one level when depth = 1', function (st) {
        st.deepEqual(qs.parse('a[b][c]=d', { depth: 1 }), { a: { b: { '[c]': 'd' } } });
        st.deepEqual(qs.parse('a[b][c][d]=e', { depth: 1 }), { a: { b: { '[c][d]': 'e' } } });
        st.end();
    });

    t.deepEqual(qs.parse('a=b&a=c'), { a: ['b', 'c'] }, 'parses a simple array');

    t.test('parses an explicit array', function (st) {
        st.deepEqual(qs.parse('a[]=b'), { a: ['b'] });
        st.deepEqual(qs.parse('a[]=b&a[]=c'), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[]=b&a[]=c&a[]=d'), { a: ['b', 'c', 'd'] });
        st.end();
    });

    t.test('parses a mix of simple and explicit arrays', function (st) {
        st.deepEqual(qs.parse('a=b&a[]=c'), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[]=b&a=c'), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[0]=b&a=c'), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b&a[0]=c'), { a: ['b', 'c'] });

        st.deepEqual(qs.parse('a[1]=b&a=c', { arrayLimit: 20 }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[]=b&a=c', { arrayLimit: 0 }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[]=b&a=c'), { a: ['b', 'c'] });

        st.deepEqual(qs.parse('a=b&a[1]=c', { arrayLimit: 20 }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b&a[]=c', { arrayLimit: 0 }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b&a[]=c'), { a: ['b', 'c'] });

        st.end();
    });

    t.test('parses a nested array', function (st) {
        st.deepEqual(qs.parse('a[b][]=c&a[b][]=d'), { a: { b: ['c', 'd'] } });
        st.deepEqual(qs.parse('a[>=]=25'), { a: { '>=': '25' } });
        st.end();
    });

    t.test('allows to specify array indices', function (st) {
        st.deepEqual(qs.parse('a[1]=c&a[0]=b&a[2]=d'), { a: ['b', 'c', 'd'] });
        st.deepEqual(qs.parse('a[1]=c&a[0]=b'), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[1]=c', { arrayLimit: 20 }), { a: ['c'] });
        st.deepEqual(qs.parse('a[1]=c', { arrayLimit: 0 }), { a: { 1: 'c' } });
        st.deepEqual(qs.parse('a[1]=c'), { a: ['c'] });
        st.end();
    });

    t.test('limits specific array indices to arrayLimit', function (st) {
        st.deepEqual(qs.parse('a[20]=a', { arrayLimit: 20 }), { a: ['a'] });
        st.deepEqual(qs.parse('a[21]=a', { arrayLimit: 20 }), { a: { 21: 'a' } });
        st.end();
    });

    t.deepEqual(qs.parse('a[12b]=c'), { a: { '12b': 'c' } }, 'supports keys that begin with a number');

    t.test('supports encoded = signs', function (st) {
        st.deepEqual(qs.parse('he%3Dllo=th%3Dere'), { 'he=llo': 'th=ere' });
        st.end();
    });

    t.test('is ok with url encoded strings', function (st) {
        st.deepEqual(qs.parse('a[b%20c]=d'), { a: { 'b c': 'd' } });
        st.deepEqual(qs.parse('a[b]=c%20d'), { a: { b: 'c d' } });
        st.end();
    });

    t.test('allows brackets in the value', function (st) {
        st.deepEqual(qs.parse('pets=["tobi"]'), { pets: '["tobi"]' });
        st.deepEqual(qs.parse('operators=[">=", "<="]'), { operators: '[">=", "<="]' });
        st.end();
    });

    t.test('allows empty values', function (st) {
        st.deepEqual(qs.parse(''), {});
        st.deepEqual(qs.parse(null), {});
        st.deepEqual(qs.parse(undefined), {});
        st.end();
    });

    t.test('transforms arrays to objects', function (st) {
        st.deepEqual(qs.parse('foo[0]=bar&foo[bad]=baz'), { foo: { 0: 'bar', bad: 'baz' } });
        st.deepEqual(qs.parse('foo[bad]=baz&foo[0]=bar'), { foo: { bad: 'baz', 0: 'bar' } });
        st.deepEqual(qs.parse('foo[bad]=baz&foo[]=bar'), { foo: { bad: 'baz', 0: 'bar' } });
        st.deepEqual(qs.parse('foo[]=bar&foo[bad]=baz'), { foo: { 0: 'bar', bad: 'baz' } });
        st.deepEqual(qs.parse('foo[bad]=baz&foo[]=bar&foo[]=foo'), { foo: { bad: 'baz', 0: 'bar', 1: 'foo' } });
        st.deepEqual(qs.parse('foo[0][a]=a&foo[0][b]=b&foo[1][a]=aa&foo[1][b]=bb'), { foo: [{ a: 'a', b: 'b' }, { a: 'aa', b: 'bb' }] });

        st.deepEqual(qs.parse('a[]=b&a[t]=u&a[hasOwnProperty]=c', { allowPrototypes: false }), { a: { 0: 'b', t: 'u' } });
        st.deepEqual(qs.parse('a[]=b&a[t]=u&a[hasOwnProperty]=c', { allowPrototypes: true }), { a: { 0: 'b', t: 'u', hasOwnProperty: 'c' } });
        st.deepEqual(qs.parse('a[]=b&a[hasOwnProperty]=c&a[x]=y', { allowPrototypes: false }), { a: { 0: 'b', x: 'y' } });
        st.deepEqual(qs.parse('a[]=b&a[hasOwnProperty]=c&a[x]=y', { allowPrototypes: true }), { a: { 0: 'b', hasOwnProperty: 'c', x: 'y' } });
        st.end();
    });

    t.test('transforms arrays to objects (dot notation)', function (st) {
        st.deepEqual(qs.parse('foo[0].baz=bar&fool.bad=baz', { allowDots: true }), { foo: [{ baz: 'bar' }], fool: { bad: 'baz' } });
        st.deepEqual(qs.parse('foo[0].baz=bar&fool.bad.boo=baz', { allowDots: true }), { foo: [{ baz: 'bar' }], fool: { bad: { boo: 'baz' } } });
        st.deepEqual(qs.parse('foo[0][0].baz=bar&fool.bad=baz', { allowDots: true }), { foo: [[{ baz: 'bar' }]], fool: { bad: 'baz' } });
        st.deepEqual(qs.parse('foo[0].baz[0]=15&foo[0].bar=2', { allowDots: true }), { foo: [{ baz: ['15'], bar: '2' }] });
        st.deepEqual(qs.parse('foo[0].baz[0]=15&foo[0].baz[1]=16&foo[0].bar=2', { allowDots: true }), { foo: [{ baz: ['15', '16'], bar: '2' }] });
        st.deepEqual(qs.parse('foo.bad=baz&foo[0]=bar', { allowDots: true }), { foo: { bad: 'baz', 0: 'bar' } });
        st.deepEqual(qs.parse('foo.bad=baz&foo[]=bar', { allowDots: true }), { foo: { bad: 'baz', 0: 'bar' } });
        st.deepEqual(qs.parse('foo[]=bar&foo.bad=baz', { allowDots: true }), { foo: { 0: 'bar', bad: 'baz' } });
        st.deepEqual(qs.parse('foo.bad=baz&foo[]=bar&foo[]=foo', { allowDots: true }), { foo: { bad: 'baz', 0: 'bar', 1: 'foo' } });
        st.deepEqual(qs.parse('foo[0].a=a&foo[0].b=b&foo[1].a=aa&foo[1].b=bb', { allowDots: true }), { foo: [{ a: 'a', b: 'b' }, { a: 'aa', b: 'bb' }] });
        st.end();
    });

    t.test('correctly prunes undefined values when converting an array to an object', function (st) {
        st.deepEqual(qs.parse('a[2]=b&a[99999999]=c'), { a: { 2: 'b', 99999999: 'c' } });
        st.end();
    });

    t.test('supports malformed uri characters', function (st) {
        st.deepEqual(qs.parse('{%:%}', { strictNullHandling: true }), { '{%:%}': null });
        st.deepEqual(qs.parse('{%:%}='), { '{%:%}': '' });
        st.deepEqual(qs.parse('foo=%:%}'), { foo: '%:%}' });
        st.end();
    });

    t.test('doesn\'t produce empty keys', function (st) {
        st.deepEqual(qs.parse('_r=1&'), { _r: '1' });
        st.end();
    });

    t.test('cannot access Object prototype', function (st) {
        qs.parse('constructor[prototype][bad]=bad');
        qs.parse('bad[constructor][prototype][bad]=bad');
        st.equal(typeof Object.prototype.bad, 'undefined');
        st.end();
    });

    t.test('parses arrays of objects', function (st) {
        st.deepEqual(qs.parse('a[][b]=c'), { a: [{ b: 'c' }] });
        st.deepEqual(qs.parse('a[0][b]=c'), { a: [{ b: 'c' }] });
        st.end();
    });

    t.test('allows for empty strings in arrays', function (st) {
        st.deepEqual(qs.parse('a[]=b&a[]=&a[]=c'), { a: ['b', '', 'c'] });

        st.deepEqual(
            qs.parse('a[0]=b&a[1]&a[2]=c&a[19]=', { strictNullHandling: true, arrayLimit: 20 }),
            { a: ['b', null, 'c', ''] },
            'with arrayLimit 20 + array indices: null then empty string works'
        );
        st.deepEqual(
            qs.parse('a[]=b&a[]&a[]=c&a[]=', { strictNullHandling: true, arrayLimit: 0 }),
            { a: ['b', null, 'c', ''] },
            'with arrayLimit 0 + array brackets: null then empty string works'
        );

        st.deepEqual(
            qs.parse('a[0]=b&a[1]=&a[2]=c&a[19]', { strictNullHandling: true, arrayLimit: 20 }),
            { a: ['b', '', 'c', null] },
            'with arrayLimit 20 + array indices: empty string then null works'
        );
        st.deepEqual(
            qs.parse('a[]=b&a[]=&a[]=c&a[]', { strictNullHandling: true, arrayLimit: 0 }),
            { a: ['b', '', 'c', null] },
            'with arrayLimit 0 + array brackets: empty string then null works'
        );

        st.deepEqual(
            qs.parse('a[]=&a[]=b&a[]=c'),
            { a: ['', 'b', 'c'] },
            'array brackets: empty strings work'
        );
        st.end();
    });

    t.test('compacts sparse arrays', function (st) {
        st.deepEqual(qs.parse('a[10]=1&a[2]=2', { arrayLimit: 20 }), { a: ['2', '1'] });
        st.deepEqual(qs.parse('a[1][b][2][c]=1', { arrayLimit: 20 }), { a: [{ b: [{ c: '1' }] }] });
        st.deepEqual(qs.parse('a[1][2][3][c]=1', { arrayLimit: 20 }), { a: [[[{ c: '1' }]]] });
        st.deepEqual(qs.parse('a[1][2][3][c][1]=1', { arrayLimit: 20 }), { a: [[[{ c: ['1'] }]]] });
        st.end();
    });

    t.test('parses semi-parsed strings', function (st) {
        st.deepEqual(qs.parse({ 'a[b]': 'c' }), { a: { b: 'c' } });
        st.deepEqual(qs.parse({ 'a[b]': 'c', 'a[d]': 'e' }), { a: { b: 'c', d: 'e' } });
        st.end();
    });

    t.test('parses buffers correctly', function (st) {
        var b = SaferBuffer.from('test');
        st.deepEqual(qs.parse({ a: b }), { a: b });
        st.end();
    });

    t.test('continues parsing when no parent is found', function (st) {
        st.deepEqual(qs.parse('[]=&a=b'), { 0: '', a: 'b' });
        st.deepEqual(qs.parse('[]&a=b', { strictNullHandling: true }), { 0: null, a: 'b' });
        st.deepEqual(qs.parse('[foo]=bar'), { foo: 'bar' });
        st.end();
    });

    t.test('does not error when parsing a very long array', function (st) {
        var str = 'a[]=a';
        while (Buffer.byteLength(str) < 128 * 1024) {
            str = str + '&' + str;
        }

        st.doesNotThrow(function () {
            qs.parse(str);
        });

        st.end();
    });

    t.test('should not throw when a native prototype has an enumerable property', { parallel: false }, function (st) {
        Object.prototype.crash = '';
        Array.prototype.crash = '';
        st.doesNotThrow(qs.parse.bind(null, 'a=b'));
        st.deepEqual(qs.parse('a=b'), { a: 'b' });
        st.doesNotThrow(qs.parse.bind(null, 'a[][b]=c'));
        st.deepEqual(qs.parse('a[][b]=c'), { a: [{ b: 'c' }] });
        delete Object.prototype.crash;
        delete Array.prototype.crash;
        st.end();
    });

    t.test('parses a string with an alternative string delimiter', function (st) {
        st.deepEqual(qs.parse('a=b;c=d', { delimiter: ';' }), { a: 'b', c: 'd' });
        st.end();
    });

    t.test('parses a string with an alternative RegExp delimiter', function (st) {
        st.deepEqual(qs.parse('a=b; c=d', { delimiter: /[;,] */ }), { a: 'b', c: 'd' });
        st.end();
    });

    t.test('does not use non-splittable objects as delimiters', function (st) {
        st.deepEqual(qs.parse('a=b&c=d', { delimiter: true }), { a: 'b', c: 'd' });
        st.end();
    });

    t.test('allows overriding parameter limit', function (st) {
        st.deepEqual(qs.parse('a=b&c=d', { parameterLimit: 1 }), { a: 'b' });
        st.end();
    });

    t.test('allows setting the parameter limit to Infinity', function (st) {
        st.deepEqual(qs.parse('a=b&c=d', { parameterLimit: Infinity }), { a: 'b', c: 'd' });
        st.end();
    });

    t.test('allows overriding array limit', function (st) {
        st.deepEqual(qs.parse('a[0]=b', { arrayLimit: -1 }), { a: { 0: 'b' } });
        st.deepEqual(qs.parse('a[-1]=b', { arrayLimit: -1 }), { a: { '-1': 'b' } });
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { arrayLimit: 0 }), { a: { 0: 'b', 1: 'c' } });
        st.end();
    });

    t.test('allows disabling array parsing', function (st) {
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { parseArrays: false }), { a: { 0: 'b', 1: 'c' } });
        st.end();
    });

    t.test('allows for query string prefix', function (st) {
        st.deepEqual(qs.parse('?foo=bar', { ignoreQueryPrefix: true }), { foo: 'bar' });
        st.deepEqual(qs.parse('foo=bar', { ignoreQueryPrefix: true }), { foo: 'bar' });
        st.deepEqual(qs.parse('?foo=bar', { ignoreQueryPrefix: false }), { '?foo': 'bar' });
        st.end();
    });

    t.test('parses an object', function (st) {
        var input = {
            'user[name]': { 'pop[bob]': 3 },
            'user[email]': null
        };

        var expected = {
            user: {
                name: { 'pop[bob]': 3 },
                email: null
            }
        };

        var result = qs.parse(input);

        st.deepEqual(result, expected);
        st.end();
    });

    t.test('parses an object in dot notation', function (st) {
        var input = {
            'user.name': { 'pop[bob]': 3 },
            'user.email.': null
        };

        var expected = {
            user: {
                name: { 'pop[bob]': 3 },
                email: null
            }
        };

        var result = qs.parse(input, { allowDots: true });

        st.deepEqual(result, expected);
        st.end();
    });

    t.test('parses an object and not child values', function (st) {
        var input = {
            'user[name]': { 'pop[bob]': { test: 3 } },
            'user[email]': null
        };

        var expected = {
            user: {
                name: { 'pop[bob]': { test: 3 } },
                email: null
            }
        };

        var result = qs.parse(input);

        st.deepEqual(result, expected);
        st.end();
    });

    t.test('does not blow up when Buffer global is missing', function (st) {
        var tempBuffer = global.Buffer;
        delete global.Buffer;
        var result = qs.parse('a=b&c=d');
        global.Buffer = tempBuffer;
        st.deepEqual(result, { a: 'b', c: 'd' });
        st.end();
    });

    t.test('does not crash when parsing circular references', function (st) {
        var a = {};
        a.b = a;

        var parsed;

        st.doesNotThrow(function () {
            parsed = qs.parse({ 'foo[bar]': 'baz', 'foo[baz]': a });
        });

        st.equal('foo' in parsed, true, 'parsed has "foo" property');
        st.equal('bar' in parsed.foo, true);
        st.equal('baz' in parsed.foo, true);
        st.equal(parsed.foo.bar, 'baz');
        st.deepEqual(parsed.foo.baz, a);
        st.end();
    });

    t.test('does not crash when parsing deep objects', function (st) {
        var parsed;
        var str = 'foo';

        for (var i = 0; i < 5000; i++) {
            str += '[p]';
        }

        str += '=bar';

        st.doesNotThrow(function () {
            parsed = qs.parse(str, { depth: 5000 });
        });

        st.equal('foo' in parsed, true, 'parsed has "foo" property');

        var depth = 0;
        var ref = parsed.foo;
        while ((ref = ref.p)) {
            depth += 1;
        }

        st.equal(depth, 5000, 'parsed is 5000 properties deep');

        st.end();
    });

    t.test('parses null objects correctly', { skip: !Object.create }, function (st) {
        var a = Object.create(null);
        a.b = 'c';

        st.deepEqual(qs.parse(a), { b: 'c' });
        var result = qs.parse({ a: a });
        st.equal('a' in result, true, 'result has "a" property');
        st.deepEqual(result.a, a);
        st.end();
    });

    t.test('parses dates correctly', function (st) {
        var now = new Date();
        st.deepEqual(qs.parse({ a: now }), { a: now });
        st.end();
    });

    t.test('parses regular expressions correctly', function (st) {
        var re = /^test$/;
        st.deepEqual(qs.parse({ a: re }), { a: re });
        st.end();
    });

    t.test('does not allow overwriting prototype properties', function (st) {
        st.deepEqual(qs.parse('a[hasOwnProperty]=b', { allowPrototypes: false }), {});
        st.deepEqual(qs.parse('hasOwnProperty=b', { allowPrototypes: false }), {});

        st.deepEqual(
            qs.parse('toString', { allowPrototypes: false }),
            {},
            'bare "toString" results in {}'
        );

        st.end();
    });

    t.test('can allow overwriting prototype properties', function (st) {
        st.deepEqual(qs.parse('a[hasOwnProperty]=b', { allowPrototypes: true }), { a: { hasOwnProperty: 'b' } });
        st.deepEqual(qs.parse('hasOwnProperty=b', { allowPrototypes: true }), { hasOwnProperty: 'b' });

        st.deepEqual(
            qs.parse('toString', { allowPrototypes: true }),
            { toString: '' },
            'bare "toString" results in { toString: "" }'
        );

        st.end();
    });

    t.test('params starting with a closing bracket', function (st) {
        st.deepEqual(qs.parse(']=toString'), { ']': 'toString' });
        st.deepEqual(qs.parse(']]=toString'), { ']]': 'toString' });
        st.deepEqual(qs.parse(']hello]=toString'), { ']hello]': 'toString' });
        st.end();
    });

    t.test('params starting with a starting bracket', function (st) {
        st.deepEqual(qs.parse('[=toString'), { '[': 'toString' });
        st.deepEqual(qs.parse('[[=toString'), { '[[': 'toString' });
        st.deepEqual(qs.parse('[hello[=toString'), { '[hello[': 'toString' });
        st.end();
    });

    t.test('add keys to objects', function (st) {
        st.deepEqual(
            qs.parse('a[b]=c&a=d'),
            { a: { b: 'c', d: true } },
            'can add keys to objects'
        );

        st.deepEqual(
            qs.parse('a[b]=c&a=toString'),
            { a: { b: 'c' } },
            'can not overwrite prototype'
        );

        st.deepEqual(
            qs.parse('a[b]=c&a=toString', { allowPrototypes: true }),
            { a: { b: 'c', toString: true } },
            'can overwrite prototype with allowPrototypes true'
        );

        st.deepEqual(
            qs.parse('a[b]=c&a=toString', { plainObjects: true }),
            { a: { b: 'c', toString: true } },
            'can overwrite prototype with plainObjects true'
        );

        st.end();
    });

    t.test('can return null objects', { skip: !Object.create }, function (st) {
        var expected = Object.create(null);
        expected.a = Object.create(null);
        expected.a.b = 'c';
        expected.a.hasOwnProperty = 'd';
        st.deepEqual(qs.parse('a[b]=c&a[hasOwnProperty]=d', { plainObjects: true }), expected);
        st.deepEqual(qs.parse(null, { plainObjects: true }), Object.create(null));
        var expectedArray = Object.create(null);
        expectedArray.a = Object.create(null);
        expectedArray.a[0] = 'b';
        expectedArray.a.c = 'd';
        st.deepEqual(qs.parse('a[]=b&a[c]=d', { plainObjects: true }), expectedArray);
        st.end();
    });

    t.test('can parse with custom encoding', function (st) {
        st.deepEqual(qs.parse('%8c%a7=%91%e5%8d%e3%95%7b', {
            decoder: function (str) {
                var reg = /%([0-9A-F]{2})/ig;
                var result = [];
                var parts = reg.exec(str);
                while (parts) {
                    result.push(parseInt(parts[1], 16));
                    parts = reg.exec(str);
                }
                return iconv.decode(SaferBuffer.from(result), 'shift_jis').toString();
            }
        }), { 県: '大阪府' });
        st.end();
    });

    t.test('receives the default decoder as a second argument', function (st) {
        st.plan(1);
        qs.parse('a', {
            decoder: function (str, defaultDecoder) {
                st.equal(defaultDecoder, utils.decode);
            }
        });
        st.end();
    });

    t.test('throws error with wrong decoder', function (st) {
        st['throws'](function () {
            qs.parse({}, { decoder: 'string' });
        }, new TypeError('Decoder has to be a function.'));
        st.end();
    });

    t.test('does not mutate the options argument', function (st) {
        var options = {};
        qs.parse('a[b]=true', options);
        st.deepEqual(options, {});
        st.end();
    });

    t.end();
});
