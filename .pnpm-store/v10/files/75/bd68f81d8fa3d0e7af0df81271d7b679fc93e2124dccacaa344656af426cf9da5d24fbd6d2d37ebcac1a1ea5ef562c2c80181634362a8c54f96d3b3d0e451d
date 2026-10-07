'use strict';

var test = require('tape');
var forEach = require('../');

test('forEach calls each iterator', function (t) {
    var count = 0;
    t.plan(4);

    forEach({ a: 1, b: 2 }, function (value, key) {
        if (count === 0) {
            t.equal(value, 1);
            t.equal(key, 'a');
        } else {
            t.equal(value, 2);
            t.equal(key, 'b');
        }
        count += 1;
    });
});

test('forEach calls iterator with correct this value', function (t) {
    var thisValue = {};

    t.plan(1);

    forEach([0], function () {
        t.equal(this, thisValue);
    }, thisValue);
});

test('second argument: iterator', function (t) {
    /** @type {unknown[]} */
    var arr = [];

    // @ts-expect-error
    t['throws'](function () { forEach(arr); }, TypeError, 'undefined is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, null); }, TypeError, 'null is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, ''); }, TypeError, 'string is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, /a/); }, TypeError, 'regex is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, true); }, TypeError, 'true is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, false); }, TypeError, 'false is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, NaN); }, TypeError, 'NaN is not a function');
    // @ts-expect-error
    t['throws'](function () { forEach(arr, 42); }, TypeError, '42 is not a function');

    t.doesNotThrow(function () { forEach(arr, function () {}); }, 'function is a function');
    // @ts-expect-error TODO fixme
    t.doesNotThrow(function () { forEach(arr, setTimeout); }, 'setTimeout is a function');

    /* eslint-env browser */
    if (typeof window !== 'undefined') {
        t.doesNotThrow(function () { forEach(arr, window.alert); }, 'alert is a function');
    }

    t.end();
});

test('array', function (t) {
    var arr = /** @type {const} */ ([1, 2, 3]);

    t.test('iterates over every item', function (st) {
        var index = 0;
        forEach(arr, function () { index += 1; });
        st.equal(index, arr.length, 'iterates ' + arr.length + ' times');
        st.end();
    });

    t.test('first iterator argument', function (st) {
        var index = 0;
        st.plan(arr.length);

        forEach(arr, function (item) {
            st.equal(arr[index], item, 'item ' + index + ' is passed as first argument');
            index += 1;
        });

        st.end();
    });

    t.test('second iterator argument', function (st) {
        var counter = 0;
        st.plan(arr.length);

        forEach(arr, function (_item, index) {
            st.equal(counter, index, 'index ' + index + ' is passed as second argument');
            counter += 1;
        });

        st.end();
    });

    t.test('third iterator argument', function (st) {
        st.plan(arr.length);

        forEach(arr, function (_item, _index, array) {
            st.deepEqual(arr, array, 'array is passed as third argument');
        });

        st.end();
    });

    t.test('context argument', function (st) {
        var context = {};

        forEach([], function () {
            st.equal(this, context, '"this" is the passed context');
        }, context);

        st.end();
    });

    t.end();
});

test('object', function (t) {
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    var keys = /** @type {const} */ (['a', 'b', 'c']);

    /** @constructor */
    function F() {
        this.a = 1;
        this.b = 2;
    }
    F.prototype.c = 3;
    var fKeys = /** @type {const} */ (['a', 'b']);

    t.test('iterates over every object literal key', function (st) {
        var counter = 0;

        forEach(obj, function () { counter += 1; });

        st.equal(counter, keys.length, 'iterated ' + counter + ' times');

        st.end();
    });

    t.test('iterates only over own keys', function (st) {
        var counter = 0;

        forEach(new F(), function () { counter += 1; });

        st.equal(counter, fKeys.length, 'iterated ' + fKeys.length + ' times');

        st.end();
    });

    t.test('first iterator argument', function (st) {
        var index = 0;
        st.plan(keys.length);

        forEach(obj, function (item) {
            st.equal(obj[keys[index]], item, 'item at key ' + keys[index] + ' is passed as first argument');
            index += 1;
        });

        st.end();
    });

    t.test('second iterator argument', function (st) {
        var counter = 0;
        st.plan(keys.length);

        forEach(obj, function (_item, key) {
            st.equal(keys[counter], key, 'key ' + key + ' is passed as second argument');
            counter += 1;
        });

        st.end();
    });

    t.test('third iterator argument', function (st) {
        st.plan(keys.length);

        forEach(obj, function (_item, _key, object) {
            st.deepEqual(obj, object, 'object is passed as third argument');
        });

        st.end();
    });

    t.test('context argument', function (st) {
        var context = {};

        forEach({}, function () {
            st.equal(this, context, '"this" is the passed context');
        }, context);

        st.end();
    });

    t.end();
});

test('string', function (t) {
    var str = /** @type {const} */ ('str');

    t.test('second iterator argument', function (st) {
        var counter = 0;
        st.plan((str.length * 2) + 1);

        forEach(str, function (item, index) {
            st.equal(counter, index, 'index ' + index + ' is passed as second argument');
            st.equal(str.charAt(index), item);
            counter += 1;
        });

        st.equal(counter, str.length, 'iterates ' + str.length + ' times');

        st.end();
    });

    t.end();
});
