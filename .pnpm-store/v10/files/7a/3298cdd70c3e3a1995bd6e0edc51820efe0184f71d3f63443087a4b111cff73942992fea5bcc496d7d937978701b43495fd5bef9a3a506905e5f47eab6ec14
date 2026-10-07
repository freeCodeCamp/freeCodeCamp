'use strict';

var test = require('tape');
var hasToStringTag = require('has-tostringtag/shams')();

var inspect = require('../');

test('Symbol.toStringTag', { skip: !hasToStringTag }, function (t) {
    t.plan(4);

    var obj = { a: 1 };
    t.equal(inspect(obj), '{ a: 1 }', 'object, no Symbol.toStringTag');

    obj[Symbol.toStringTag] = 'foo';
    t.equal(inspect(obj), '{ a: 1, [Symbol(Symbol.toStringTag)]: \'foo\' }', 'object with Symbol.toStringTag');

    t.test('null objects', { skip: 'toString' in { __proto__: null } }, function (st) {
        st.plan(2);

        var dict = { __proto__: null, a: 1 };
        st.equal(inspect(dict), '[Object: null prototype] { a: 1 }', 'null object with Symbol.toStringTag');

        dict[Symbol.toStringTag] = 'Dict';
        st.equal(inspect(dict), '[Dict: null prototype] { a: 1, [Symbol(Symbol.toStringTag)]: \'Dict\' }', 'null object with Symbol.toStringTag');
    });

    t.test('instances', function (st) {
        st.plan(4);

        function C() {
            this.a = 1;
        }
        st.equal(Object.prototype.toString.call(new C()), '[object Object]', 'instance, no toStringTag, Object.prototype.toString');
        st.equal(inspect(new C()), 'C { a: 1 }', 'instance, no toStringTag');

        C.prototype[Symbol.toStringTag] = 'Class!';
        st.equal(Object.prototype.toString.call(new C()), '[object Class!]', 'instance, with toStringTag, Object.prototype.toString');
        st.equal(inspect(new C()), 'C [Class!] { a: 1 }', 'instance, with toStringTag');
    });
});
