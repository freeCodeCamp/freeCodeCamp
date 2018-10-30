// jscs:disable requireUseStrict

var test = require('tape');

var functionBind = require('../implementation');
var getCurrentContext = function () { return this; };

test('functionBind is a function', function (t) {
    t.equal(typeof functionBind, 'function');
    t.end();
});

test('non-functions', function (t) {
    var nonFunctions = [true, false, [], {}, 42, 'foo', NaN, /a/g];
    t.plan(nonFunctions.length);
    for (var i = 0; i < nonFunctions.length; ++i) {
        try { functionBind.call(nonFunctions[i]); } catch (ex) {
            t.ok(ex instanceof TypeError, 'throws when given ' + String(nonFunctions[i]));
        }
    }
    t.end();
});

test('without a context', function (t) {
    t.test('binds properly', function (st) {
        var args, context;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                context = this;
            })
        };
        namespace.func(1, 2, 3);
        st.deepEqual(args, [1, 2, 3]);
        st.equal(context, getCurrentContext.call());
        st.end();
    });

    t.test('binds properly, and still supplies bound arguments', function (st) {
        var args, context;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                context = this;
            }, undefined, 1, 2, 3)
        };
        namespace.func(4, 5, 6);
        st.deepEqual(args, [1, 2, 3, 4, 5, 6]);
        st.equal(context, getCurrentContext.call());
        st.end();
    });

    t.test('returns properly', function (st) {
        var args;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                return this;
            }, null)
        };
        var context = namespace.func(1, 2, 3);
        st.equal(context, getCurrentContext.call(), 'returned context is namespaced context');
        st.deepEqual(args, [1, 2, 3], 'passed arguments are correct');
        st.end();
    });

    t.test('returns properly with bound arguments', function (st) {
        var args;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                return this;
            }, null, 1, 2, 3)
        };
        var context = namespace.func(4, 5, 6);
        st.equal(context, getCurrentContext.call(), 'returned context is namespaced context');
        st.deepEqual(args, [1, 2, 3, 4, 5, 6], 'passed arguments are correct');
        st.end();
    });

    t.test('called as a constructor', function (st) {
        var thunkify = function (value) {
            return function () { return value; };
        };
        st.test('returns object value', function (sst) {
            var expectedReturnValue = [1, 2, 3];
            var Constructor = functionBind.call(thunkify(expectedReturnValue), null);
            var result = new Constructor();
            sst.equal(result, expectedReturnValue);
            sst.end();
        });

        st.test('does not return primitive value', function (sst) {
            var Constructor = functionBind.call(thunkify(42), null);
            var result = new Constructor();
            sst.notEqual(result, 42);
            sst.end();
        });

        st.test('object from bound constructor is instance of original and bound constructor', function (sst) {
            var A = function (x) {
                this.name = x || 'A';
            };
            var B = functionBind.call(A, null, 'B');

            var result = new B();
            sst.ok(result instanceof B, 'result is instance of bound constructor');
            sst.ok(result instanceof A, 'result is instance of original constructor');
            sst.end();
        });

        st.end();
    });

    t.end();
});

test('with a context', function (t) {
    t.test('with no bound arguments', function (st) {
        var args, context;
        var boundContext = {};
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                context = this;
            }, boundContext)
        };
        namespace.func(1, 2, 3);
        st.equal(context, boundContext, 'binds a context properly');
        st.deepEqual(args, [1, 2, 3], 'supplies passed arguments');
        st.end();
    });

    t.test('with bound arguments', function (st) {
        var args, context;
        var boundContext = {};
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                context = this;
            }, boundContext, 1, 2, 3)
        };
        namespace.func(4, 5, 6);
        st.equal(context, boundContext, 'binds a context properly');
        st.deepEqual(args, [1, 2, 3, 4, 5, 6], 'supplies bound and passed arguments');
        st.end();
    });

    t.test('returns properly', function (st) {
        var boundContext = {};
        var args;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                return this;
            }, boundContext)
        };
        var context = namespace.func(1, 2, 3);
        st.equal(context, boundContext, 'returned context is bound context');
        st.notEqual(context, getCurrentContext.call(), 'returned context is not lexical context');
        st.deepEqual(args, [1, 2, 3], 'passed arguments are correct');
        st.end();
    });

    t.test('returns properly with bound arguments', function (st) {
        var boundContext = {};
        var args;
        var namespace = {
            func: functionBind.call(function () {
                args = Array.prototype.slice.call(arguments);
                return this;
            }, boundContext, 1, 2, 3)
        };
        var context = namespace.func(4, 5, 6);
        st.equal(context, boundContext, 'returned context is bound context');
        st.notEqual(context, getCurrentContext.call(), 'returned context is not lexical context');
        st.deepEqual(args, [1, 2, 3, 4, 5, 6], 'passed arguments are correct');
        st.end();
    });

    t.test('passes the correct arguments when called as a constructor', function (st) {
        var expected = { name: 'Correct' };
        var namespace = {
            Func: functionBind.call(function (arg) {
                return arg;
            }, { name: 'Incorrect' })
        };
        var returned = new namespace.Func(expected);
        st.equal(returned, expected, 'returns the right arg when called as a constructor');
        st.end();
    });

    t.test('has the new instance\'s context when called as a constructor', function (st) {
        var actualContext;
        var expectedContext = { foo: 'bar' };
        var namespace = {
            Func: functionBind.call(function () {
                actualContext = this;
            }, expectedContext)
        };
        var result = new namespace.Func();
        st.equal(result instanceof namespace.Func, true);
        st.notEqual(actualContext, expectedContext);
        st.end();
    });

    t.end();
});

test('bound function length', function (t) {
    t.test('sets a correct length without thisArg', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; });
        st.equal(subject.length, 3);
        st.equal(subject(1, 2, 3), 6);
        st.end();
    });

    t.test('sets a correct length with thisArg', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; }, {});
        st.equal(subject.length, 3);
        st.equal(subject(1, 2, 3), 6);
        st.end();
    });

    t.test('sets a correct length without thisArg and first argument', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; }, undefined, 1);
        st.equal(subject.length, 2);
        st.equal(subject(2, 3), 6);
        st.end();
    });

    t.test('sets a correct length with thisArg and first argument', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; }, {}, 1);
        st.equal(subject.length, 2);
        st.equal(subject(2, 3), 6);
        st.end();
    });

    t.test('sets a correct length without thisArg and too many arguments', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; }, undefined, 1, 2, 3, 4);
        st.equal(subject.length, 0);
        st.equal(subject(), 6);
        st.end();
    });

    t.test('sets a correct length with thisArg and too many arguments', function (st) {
        var subject = functionBind.call(function (a, b, c) { return a + b + c; }, {}, 1, 2, 3, 4);
        st.equal(subject.length, 0);
        st.equal(subject(), 6);
        st.end();
    });
});
