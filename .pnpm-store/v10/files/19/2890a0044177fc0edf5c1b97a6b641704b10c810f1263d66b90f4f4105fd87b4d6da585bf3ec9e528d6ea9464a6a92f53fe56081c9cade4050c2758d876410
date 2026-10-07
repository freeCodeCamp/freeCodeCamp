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

    t.test('arrayFormat: brackets allows only explicit arrays', function (st) {
        st.deepEqual(qs.parse('a[]=b&a[]=c', { arrayFormat: 'brackets' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { arrayFormat: 'brackets' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b,c', { arrayFormat: 'brackets' }), { a: 'b,c' });
        st.deepEqual(qs.parse('a=b&a=c', { arrayFormat: 'brackets' }), { a: ['b', 'c'] });
        st.end();
    });

    t.test('arrayFormat: indices allows only indexed arrays', function (st) {
        st.deepEqual(qs.parse('a[]=b&a[]=c', { arrayFormat: 'indices' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { arrayFormat: 'indices' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b,c', { arrayFormat: 'indices' }), { a: 'b,c' });
        st.deepEqual(qs.parse('a=b&a=c', { arrayFormat: 'indices' }), { a: ['b', 'c'] });
        st.end();
    });

    t.test('arrayFormat: comma allows only comma-separated arrays', function (st) {
        st.deepEqual(qs.parse('a[]=b&a[]=c', { arrayFormat: 'comma' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { arrayFormat: 'comma' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b,c', { arrayFormat: 'comma' }), { a: 'b,c' });
        st.deepEqual(qs.parse('a=b&a=c', { arrayFormat: 'comma' }), { a: ['b', 'c'] });
        st.end();
    });

    t.test('arrayFormat: repeat allows only repeated values', function (st) {
        st.deepEqual(qs.parse('a[]=b&a[]=c', { arrayFormat: 'repeat' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { arrayFormat: 'repeat' }), { a: ['b', 'c'] });
        st.deepEqual(qs.parse('a=b,c', { arrayFormat: 'repeat' }), { a: 'b,c' });
        st.deepEqual(qs.parse('a=b&a=c', { arrayFormat: 'repeat' }), { a: ['b', 'c'] });
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

    t.test('uses original key when depth = 0', function (st) {
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { depth: 0 }), { 'a[0]': 'b', 'a[1]': 'c' });
        st.deepEqual(qs.parse('a[0][0]=b&a[0][1]=c&a[1]=d&e=2', { depth: 0 }), { 'a[0][0]': 'b', 'a[0][1]': 'c', 'a[1]': 'd', e: '2' });
        st.end();
    });

    t.test('uses original key when depth = false', function (st) {
        st.deepEqual(qs.parse('a[0]=b&a[1]=c', { depth: false }), { 'a[0]': 'b', 'a[1]': 'c' });
        st.deepEqual(qs.parse('a[0][0]=b&a[0][1]=c&a[1]=d&e=2', { depth: false }), { 'a[0][0]': 'b', 'a[0][1]': 'c', 'a[1]': 'd', e: '2' });
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

        st.deepEqual(qs.parse('a[20]=a'), { a: ['a'] });
        st.deepEqual(qs.parse('a[21]=a'), { a: { 21: 'a' } });
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

    t.test('parses sparse arrays', function (st) {
        /* eslint no-sparse-arrays: 0 */
        st.deepEqual(qs.parse('a[4]=1&a[1]=2', { allowSparse: true }), { a: [, '2', , , '1'] });
        st.deepEqual(qs.parse('a[1][b][2][c]=1', { allowSparse: true }), { a: [, { b: [, , { c: '1' }] }] });
        st.deepEqual(qs.parse('a[1][2][3][c]=1', { allowSparse: true }), { a: [, [, , [, , , { c: '1' }]]] });
        st.deepEqual(qs.parse('a[1][2][3][c][1]=1', { allowSparse: true }), { a: [, [, , [, , , { c: [, '1'] }]]] });
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

    t.test('parses jquery-param strings', function (st) {
        // readable = 'filter[0][]=int1&filter[0][]==&filter[0][]=77&filter[]=and&filter[2][]=int2&filter[2][]==&filter[2][]=8'
        var encoded = 'filter%5B0%5D%5B%5D=int1&filter%5B0%5D%5B%5D=%3D&filter%5B0%5D%5B%5D=77&filter%5B%5D=and&filter%5B2%5D%5B%5D=int2&filter%5B2%5D%5B%5D=%3D&filter%5B2%5D%5B%5D=8';
        var expected = { filter: [['int1', '=', '77'], 'and', ['int2', '=', '8']] };
        st.deepEqual(qs.parse(encoded), expected);
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

    t.test('should not throw when a native prototype has an enumerable property', function (st) {
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
        var indices = qs.parse('a[0]=b&a[1]=c', { parseArrays: false });
        st.deepEqual(indices, { a: { 0: 'b', 1: 'c' } });
        st.equal(Array.isArray(indices.a), false, 'parseArrays:false, indices case is not an array');

        var emptyBrackets = qs.parse('a[]=b', { parseArrays: false });
        st.deepEqual(emptyBrackets, { a: { 0: 'b' } });
        st.equal(Array.isArray(emptyBrackets.a), false, 'parseArrays:false, empty brackets case is not an array');

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

    t.test('parses string with comma as array divider', function (st) {
        st.deepEqual(qs.parse('foo=bar,tee', { comma: true }), { foo: ['bar', 'tee'] });
        st.deepEqual(qs.parse('foo[bar]=coffee,tee', { comma: true }), { foo: { bar: ['coffee', 'tee'] } });
        st.deepEqual(qs.parse('foo=', { comma: true }), { foo: '' });
        st.deepEqual(qs.parse('foo', { comma: true }), { foo: '' });
        st.deepEqual(qs.parse('foo', { comma: true, strictNullHandling: true }), { foo: null });

        // test cases inversed from from stringify tests
        st.deepEqual(qs.parse('a[0]=c'), { a: ['c'] });
        st.deepEqual(qs.parse('a[]=c'), { a: ['c'] });
        st.deepEqual(qs.parse('a[]=c', { comma: true }), { a: ['c'] });

        st.deepEqual(qs.parse('a[0]=c&a[1]=d'), { a: ['c', 'd'] });
        st.deepEqual(qs.parse('a[]=c&a[]=d'), { a: ['c', 'd'] });
        st.deepEqual(qs.parse('a=c,d', { comma: true }), { a: ['c', 'd'] });

        st.end();
    });

    t.test('parses values with comma as array divider', function (st) {
        st.deepEqual(qs.parse({ foo: 'bar,tee' }, { comma: false }), { foo: 'bar,tee' });
        st.deepEqual(qs.parse({ foo: 'bar,tee' }, { comma: true }), { foo: ['bar', 'tee'] });
        st.end();
    });

    t.test('use number decoder, parses string that has one number with comma option enabled', function (st) {
        var decoder = function (str, defaultDecoder, charset, type) {
            if (!isNaN(Number(str))) {
                return parseFloat(str);
            }
            return defaultDecoder(str, defaultDecoder, charset, type);
        };

        st.deepEqual(qs.parse('foo=1', { comma: true, decoder: decoder }), { foo: 1 });
        st.deepEqual(qs.parse('foo=0', { comma: true, decoder: decoder }), { foo: 0 });

        st.end();
    });

    t.test('parses brackets holds array of arrays when having two parts of strings with comma as array divider', function (st) {
        st.deepEqual(qs.parse('foo[]=1,2,3&foo[]=4,5,6', { comma: true }), { foo: [['1', '2', '3'], ['4', '5', '6']] });
        st.deepEqual(qs.parse('foo[]=1,2,3&foo[]=', { comma: true }), { foo: [['1', '2', '3'], ''] });
        st.deepEqual(qs.parse('foo[]=1,2,3&foo[]=,', { comma: true }), { foo: [['1', '2', '3'], ['', '']] });
        st.deepEqual(qs.parse('foo[]=1,2,3&foo[]=a', { comma: true }), { foo: [['1', '2', '3'], 'a'] });

        st.end();
    });

    t.test('parses comma delimited array while having percent-encoded comma treated as normal text', function (st) {
        st.deepEqual(qs.parse('foo=a%2Cb', { comma: true }), { foo: 'a,b' });
        st.deepEqual(qs.parse('foo=a%2C%20b,d', { comma: true }), { foo: ['a, b', 'd'] });
        st.deepEqual(qs.parse('foo=a%2C%20b,c%2C%20d', { comma: true }), { foo: ['a, b', 'c, d'] });

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
            { __proto__: null, a: { __proto__: null, b: 'c', toString: true } },
            'can overwrite prototype with plainObjects true'
        );

        st.end();
    });

    t.test('dunder proto is ignored', function (st) {
        var payload = 'categories[__proto__]=login&categories[__proto__]&categories[length]=42';
        var result = qs.parse(payload, { allowPrototypes: true });

        st.deepEqual(
            result,
            {
                categories: {
                    length: '42'
                }
            },
            'silent [[Prototype]] payload'
        );

        var plainResult = qs.parse(payload, { allowPrototypes: true, plainObjects: true });

        st.deepEqual(
            plainResult,
            {
                __proto__: null,
                categories: {
                    __proto__: null,
                    length: '42'
                }
            },
            'silent [[Prototype]] payload: plain objects'
        );

        var query = qs.parse('categories[__proto__]=cats&categories[__proto__]=dogs&categories[some][json]=toInject', { allowPrototypes: true });

        st.notOk(Array.isArray(query.categories), 'is not an array');
        st.notOk(query.categories instanceof Array, 'is not instanceof an array');
        st.deepEqual(query.categories, { some: { json: 'toInject' } });
        st.equal(JSON.stringify(query.categories), '{"some":{"json":"toInject"}}', 'stringifies as a non-array');

        st.deepEqual(
            qs.parse('foo[__proto__][hidden]=value&foo[bar]=stuffs', { allowPrototypes: true }),
            {
                foo: {
                    bar: 'stuffs'
                }
            },
            'hidden values'
        );

        st.deepEqual(
            qs.parse('foo[__proto__][hidden]=value&foo[bar]=stuffs', { allowPrototypes: true, plainObjects: true }),
            {
                __proto__: null,
                foo: {
                    __proto__: null,
                    bar: 'stuffs'
                }
            },
            'hidden values: plain objects'
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
                return String(iconv.decode(SaferBuffer.from(result), 'shift_jis'));
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

    t.test('throws if an invalid charset is specified', function (st) {
        st['throws'](function () {
            qs.parse('a=b', { charset: 'foobar' });
        }, new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined'));
        st.end();
    });

    t.test('parses an iso-8859-1 string if asked to', function (st) {
        st.deepEqual(qs.parse('%A2=%BD', { charset: 'iso-8859-1' }), { '¢': '½' });
        st.end();
    });

    var urlEncodedCheckmarkInUtf8 = '%E2%9C%93';
    var urlEncodedOSlashInUtf8 = '%C3%B8';
    var urlEncodedNumCheckmark = '%26%2310003%3B';
    var urlEncodedNumSmiley = '%26%239786%3B';

    t.test('prefers an utf-8 charset specified by the utf8 sentinel to a default charset of iso-8859-1', function (st) {
        st.deepEqual(qs.parse('utf8=' + urlEncodedCheckmarkInUtf8 + '&' + urlEncodedOSlashInUtf8 + '=' + urlEncodedOSlashInUtf8, { charsetSentinel: true, charset: 'iso-8859-1' }), { ø: 'ø' });
        st.end();
    });

    t.test('prefers an iso-8859-1 charset specified by the utf8 sentinel to a default charset of utf-8', function (st) {
        st.deepEqual(qs.parse('utf8=' + urlEncodedNumCheckmark + '&' + urlEncodedOSlashInUtf8 + '=' + urlEncodedOSlashInUtf8, { charsetSentinel: true, charset: 'utf-8' }), { 'Ã¸': 'Ã¸' });
        st.end();
    });

    t.test('does not require the utf8 sentinel to be defined before the parameters whose decoding it affects', function (st) {
        st.deepEqual(qs.parse('a=' + urlEncodedOSlashInUtf8 + '&utf8=' + urlEncodedNumCheckmark, { charsetSentinel: true, charset: 'utf-8' }), { a: 'Ã¸' });
        st.end();
    });

    t.test('should ignore an utf8 sentinel with an unknown value', function (st) {
        st.deepEqual(qs.parse('utf8=foo&' + urlEncodedOSlashInUtf8 + '=' + urlEncodedOSlashInUtf8, { charsetSentinel: true, charset: 'utf-8' }), { ø: 'ø' });
        st.end();
    });

    t.test('uses the utf8 sentinel to switch to utf-8 when no default charset is given', function (st) {
        st.deepEqual(qs.parse('utf8=' + urlEncodedCheckmarkInUtf8 + '&' + urlEncodedOSlashInUtf8 + '=' + urlEncodedOSlashInUtf8, { charsetSentinel: true }), { ø: 'ø' });
        st.end();
    });

    t.test('uses the utf8 sentinel to switch to iso-8859-1 when no default charset is given', function (st) {
        st.deepEqual(qs.parse('utf8=' + urlEncodedNumCheckmark + '&' + urlEncodedOSlashInUtf8 + '=' + urlEncodedOSlashInUtf8, { charsetSentinel: true }), { 'Ã¸': 'Ã¸' });
        st.end();
    });

    t.test('interprets numeric entities in iso-8859-1 when `interpretNumericEntities`', function (st) {
        st.deepEqual(qs.parse('foo=' + urlEncodedNumSmiley, { charset: 'iso-8859-1', interpretNumericEntities: true }), { foo: '☺' });
        st.end();
    });

    t.test('handles a custom decoder returning `null`, in the `iso-8859-1` charset, when `interpretNumericEntities`', function (st) {
        st.deepEqual(qs.parse('foo=&bar=' + urlEncodedNumSmiley, {
            charset: 'iso-8859-1',
            decoder: function (str, defaultDecoder, charset) {
                return str ? defaultDecoder(str, defaultDecoder, charset) : null;
            },
            interpretNumericEntities: true
        }), { foo: null, bar: '☺' });
        st.end();
    });

    t.test('does not interpret numeric entities in iso-8859-1 when `interpretNumericEntities` is absent', function (st) {
        st.deepEqual(qs.parse('foo=' + urlEncodedNumSmiley, { charset: 'iso-8859-1' }), { foo: '&#9786;' });
        st.end();
    });

    t.test('does not interpret numeric entities when the charset is utf-8, even when `interpretNumericEntities`', function (st) {
        st.deepEqual(qs.parse('foo=' + urlEncodedNumSmiley, { charset: 'utf-8', interpretNumericEntities: true }), { foo: '&#9786;' });
        st.end();
    });

    t.test('does not interpret %uXXXX syntax in iso-8859-1 mode', function (st) {
        st.deepEqual(qs.parse('%u263A=%u263A', { charset: 'iso-8859-1' }), { '%u263A': '%u263A' });
        st.end();
    });

    t.test('allows for decoding keys and values differently', function (st) {
        var decoder = function (str, defaultDecoder, charset, type) {
            if (type === 'key') {
                return defaultDecoder(str, defaultDecoder, charset, type).toLowerCase();
            }
            if (type === 'value') {
                return defaultDecoder(str, defaultDecoder, charset, type).toUpperCase();
            }
            throw 'this should never happen! type: ' + type;
        };

        st.deepEqual(qs.parse('KeY=vAlUe', { decoder: decoder }), { key: 'VALUE' });
        st.end();
    });

    t.end();
});
