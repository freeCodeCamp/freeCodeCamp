var test = require('tape');
var path = require('path');
var parse = path.parse || require('path-parse');
var keys = require('object-keys');

var nodeModulesPaths = require('../lib/node-modules-paths');

var verifyDirs = function verifyDirs(t, start, dirs, moduleDirectories, paths) {
    var moduleDirs = [].concat(moduleDirectories || 'node_modules');

    var foundModuleDirs = {};
    var uniqueDirs = {};
    var parsedDirs = {};
    for (var i = 0; i < dirs.length; ++i) {
        var parsed = parse(dirs[i]);
        if (!foundModuleDirs[parsed.base]) { foundModuleDirs[parsed.base] = 0; }
        foundModuleDirs[parsed.base] += 1;
        parsedDirs[parsed.dir] = true;
        uniqueDirs[dirs[i]] = true;
    }
    t.equal(keys(parsedDirs).length >= start.split(path.sep).length, true, 'there are >= dirs than "start" has');
    var foundModuleDirNames = keys(foundModuleDirs);
    t.deepEqual(foundModuleDirNames, moduleDirs.concat(paths || []), 'all desired module dirs were found');
    t.equal(keys(uniqueDirs).length, dirs.length, 'all dirs provided were unique');

    var counts = {};
    for (var j = 0; j < foundModuleDirNames.length; ++j) {
        counts[foundModuleDirs[j]] = true;
    }
    t.equal(keys(counts).length, 1, 'all found module directories had the same count');
};

test('node-modules-paths', function (t) {
    t.test('no options', function (t) {
        var start = path.join(__dirname, 'resolver');
        var dirs = nodeModulesPaths(start);

        verifyDirs(t, start, dirs);

        t.end();
    });

    t.test('empty options', function (t) {
        var start = path.join(__dirname, 'resolver');
        var dirs = nodeModulesPaths(start, {});

        verifyDirs(t, start, dirs);

        t.end();
    });

    t.test('with paths option', function (t) {
        var start = path.join(__dirname, 'resolver');
        var paths = ['a', 'b'];
        var dirs = nodeModulesPaths(start, { paths: paths });

        verifyDirs(t, start, dirs, null, paths);

        t.end();
    });

    t.test('with moduleDirectory option', function (t) {
        var start = path.join(__dirname, 'resolver');
        var moduleDirectory = 'not node modules';
        var dirs = nodeModulesPaths(start, { moduleDirectory: moduleDirectory });

        verifyDirs(t, start, dirs, moduleDirectory);

        t.end();
    });

    t.test('with 1 moduleDirectory and paths options', function (t) {
        var start = path.join(__dirname, 'resolver');
        var paths = ['a', 'b'];
        var moduleDirectory = 'not node modules';
        var dirs = nodeModulesPaths(start, { paths: paths, moduleDirectory: moduleDirectory });

        verifyDirs(t, start, dirs, moduleDirectory, paths);

        t.end();
    });

    t.test('with 1+ moduleDirectory and paths options', function (t) {
        var start = path.join(__dirname, 'resolver');
        var paths = ['a', 'b'];
        var moduleDirectories = ['not node modules', 'other modules'];
        var dirs = nodeModulesPaths(start, { paths: paths, moduleDirectory: moduleDirectories });

        verifyDirs(t, start, dirs, moduleDirectories, paths);

        t.end();
    });
});
