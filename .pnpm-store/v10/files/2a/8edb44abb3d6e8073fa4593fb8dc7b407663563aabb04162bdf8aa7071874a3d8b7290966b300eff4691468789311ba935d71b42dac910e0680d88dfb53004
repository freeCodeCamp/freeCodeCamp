var test = require('tape');
var resolve = require('../');
var path = require('path');

test('shadowed core modules still return core module', function (t) {
    t.plan(2);

    resolve('util', { basedir: path.join(__dirname, 'shadowed_core') }, function (err, res) {
        t.ifError(err);
        t.equal(res, 'util');
    });
});

test('shadowed core modules still return core module [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util', { basedir: path.join(__dirname, 'shadowed_core') });

    t.equal(res, 'util');
});

test('shadowed core modules return shadow when appending `/`', function (t) {
    t.plan(2);

    resolve('util/', { basedir: path.join(__dirname, 'shadowed_core') }, function (err, res) {
        t.ifError(err);
        t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
    });
});

test('shadowed core modules return shadow when appending `/` [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util/', { basedir: path.join(__dirname, 'shadowed_core') });

    t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
});

test('shadowed core modules return shadow with `includeCoreModules: false`', function (t) {
    t.plan(2);

    resolve('util', { basedir: path.join(__dirname, 'shadowed_core'), includeCoreModules: false }, function (err, res) {
        t.ifError(err);
        t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
    });
});

test('shadowed core modules return shadow with `includeCoreModules: false` [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util', { basedir: path.join(__dirname, 'shadowed_core'), includeCoreModules: false });

    t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
});
