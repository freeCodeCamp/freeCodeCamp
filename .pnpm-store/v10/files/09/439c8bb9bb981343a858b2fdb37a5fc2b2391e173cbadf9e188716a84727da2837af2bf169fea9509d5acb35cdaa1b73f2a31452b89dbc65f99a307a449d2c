var inspect = require('../');
var test = require('tape');
var arrow = require('make-arrow-function')();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

test('function', function (t) {
    t.plan(1);
    var obj = [1, 2, function f(n) { return n; }, 4];
    t.equal(inspect(obj), '[ 1, 2, [Function: f], 4 ]');
});

test('function name', function (t) {
    t.plan(1);
    var f = (function () {
        return function () {};
    }());
    f.toString = function toStr() { return 'function xxx () {}'; };
    var obj = [1, 2, f, 4];
    t.equal(inspect(obj), '[ 1, 2, [Function (anonymous)] { toString: [Function: toStr] }, 4 ]');
});

test('anon function', function (t) {
    var f = (function () {
        return function () {};
    }());
    var obj = [1, 2, f, 4];
    t.equal(inspect(obj), '[ 1, 2, [Function (anonymous)], 4 ]');

    t.end();
});

test('arrow function', { skip: !arrow }, function (t) {
    t.equal(inspect(arrow), '[Function (anonymous)]');

    t.end();
});

test('truly nameless function', { skip: !arrow || !functionsHaveConfigurableNames }, function (t) {
    function f() {}
    Object.defineProperty(f, 'name', { value: false });
    t.equal(f.name, false);
    t.equal(
        inspect(f),
        '[Function: f]',
        'named function with falsy `.name` does not hide its original name'
    );

    function g() {}
    Object.defineProperty(g, 'name', { value: true });
    t.equal(g.name, true);
    t.equal(
        inspect(g),
        '[Function: true]',
        'named function with truthy `.name` hides its original name'
    );

    var anon = function () {}; // eslint-disable-line func-style
    Object.defineProperty(anon, 'name', { value: null });
    t.equal(anon.name, null);
    t.equal(
        inspect(anon),
        '[Function (anonymous)]',
        'anon function with falsy `.name` does not hide its anonymity'
    );

    var anon2 = function () {}; // eslint-disable-line func-style
    Object.defineProperty(anon2, 'name', { value: 1 });
    t.equal(anon2.name, 1);
    t.equal(
        inspect(anon2),
        '[Function: 1]',
        'anon function with truthy `.name` hides its anonymity'
    );

    t.end();
});
