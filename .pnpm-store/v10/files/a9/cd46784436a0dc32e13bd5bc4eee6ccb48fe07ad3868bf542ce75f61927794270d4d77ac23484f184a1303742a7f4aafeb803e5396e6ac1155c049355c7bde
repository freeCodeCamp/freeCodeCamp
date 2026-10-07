'use strict';

var inspect = require('../');
var test = require('tape');
var hasToStringTag = require('has-tostringtag/shams')();

test('bigint', { skip: typeof BigInt === 'undefined' }, function (t) {
    t.test('primitives', function (st) {
        st.plan(3);

        st.equal(inspect(BigInt(-256)), '-256n');
        st.equal(inspect(BigInt(0)), '0n');
        st.equal(inspect(BigInt(256)), '256n');
    });

    t.test('objects', function (st) {
        st.plan(3);

        st.equal(inspect(Object(BigInt(-256))), 'Object(-256n)');
        st.equal(inspect(Object(BigInt(0))), 'Object(0n)');
        st.equal(inspect(Object(BigInt(256))), 'Object(256n)');
    });

    t.test('syntactic primitives', function (st) {
        st.plan(3);

        /* eslint-disable no-new-func */
        st.equal(inspect(Function('return -256n')()), '-256n');
        st.equal(inspect(Function('return 0n')()), '0n');
        st.equal(inspect(Function('return 256n')()), '256n');
    });

    t.test('toStringTag', { skip: !hasToStringTag }, function (st) {
        st.plan(1);

        var faker = {};
        faker[Symbol.toStringTag] = 'BigInt';
        st.equal(
            inspect(faker),
            '{ [Symbol(Symbol.toStringTag)]: \'BigInt\' }',
            'object lying about being a BigInt inspects as an object'
        );
    });

    t.test('numericSeparator', function (st) {
        st.equal(inspect(BigInt(0), { numericSeparator: false }), '0n', '0n, numericSeparator false');
        st.equal(inspect(BigInt(0), { numericSeparator: true }), '0n', '0n, numericSeparator true');

        st.equal(inspect(BigInt(1234), { numericSeparator: false }), '1234n', '1234n, numericSeparator false');
        st.equal(inspect(BigInt(1234), { numericSeparator: true }), '1_234n', '1234n, numericSeparator true');
        st.equal(inspect(BigInt(-1234), { numericSeparator: false }), '-1234n', '1234n, numericSeparator false');
        st.equal(inspect(BigInt(-1234), { numericSeparator: true }), '-1_234n', '1234n, numericSeparator true');

        st.end();
    });

    t.end();
});
