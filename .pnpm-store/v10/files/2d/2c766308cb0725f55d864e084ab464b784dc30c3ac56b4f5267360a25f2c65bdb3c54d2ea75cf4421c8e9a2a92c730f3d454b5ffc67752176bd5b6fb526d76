'use strict';

var path = require('path');
var test = require('tape');
var mockProperty = require('mock-property');

var homedirPath = require.resolve('../lib/homedir');
var asyncPath = require.resolve('../async');
var libAsyncPath = require.resolve('../lib/async');
var syncPath = require.resolve('../sync');
var libSyncPath = require.resolve('../lib/sync');

function mockNullHomedir(t) {
    t.teardown(mockProperty(require.cache, homedirPath, {
        value: { id: homedirPath, filename: homedirPath, loaded: true, exports: function () { return null; } }
    }));
}

test('async: null homedir does not throw', function (t) {
    t.plan(2);

    mockNullHomedir(t);
    t.teardown(mockProperty(require.cache, asyncPath, { 'delete': true }));
    t.teardown(mockProperty(require.cache, libAsyncPath, { 'delete': true }));

    var resolve = require('../lib/async');

    var dir = path.join(__dirname, 'resolver');

    resolve('./baz', { basedir: dir }, function (err, res) {
        t.error(err, 'no error');
        t.equal(res, path.join(dir, 'baz', 'quux.js'), 'resolves correctly with null homedir');
    });
});

test('sync: null homedir does not throw', function (t) {
    mockNullHomedir(t);
    t.teardown(mockProperty(require.cache, syncPath, { 'delete': true }));
    t.teardown(mockProperty(require.cache, libSyncPath, { 'delete': true }));

    var resolveSync = require('../lib/sync');

    var dir = path.join(__dirname, 'resolver');

    var res = resolveSync('./baz', { basedir: dir });
    t.equal(res, path.join(dir, 'baz', 'quux.js'), 'resolves correctly with null homedir');

    t.end();
});
