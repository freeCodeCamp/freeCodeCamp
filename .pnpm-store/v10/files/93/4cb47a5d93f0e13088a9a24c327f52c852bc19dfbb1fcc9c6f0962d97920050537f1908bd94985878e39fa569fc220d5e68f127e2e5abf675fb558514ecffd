var path = require('path');
var fs = require('fs');
var test = require('tape');
var map = require('array.prototype.map');
var resolve = require('../');

var symlinkDir = path.join(__dirname, 'resolver', 'symlinked', 'symlink');
var packageDir = path.join(__dirname, 'resolver', 'symlinked', '_', 'node_modules', 'package');
var modADir = path.join(__dirname, 'symlinks', 'source', 'node_modules', 'mod-a');
var symlinkModADir = path.join(__dirname, 'symlinks', 'dest', 'node_modules', 'mod-a');
try {
    fs.unlinkSync(symlinkDir);
} catch (err) {}
try {
    fs.unlinkSync(packageDir);
} catch (err) {}
try {
    fs.unlinkSync(modADir);
} catch (err) {}
try {
    fs.unlinkSync(symlinkModADir);
} catch (err) {}

try {
    fs.symlinkSync('./_/symlink_target', symlinkDir, 'dir');
} catch (err) {
    // if fails then it is probably on Windows and lets try to create a junction
    fs.symlinkSync(path.join(__dirname, 'resolver', 'symlinked', '_', 'symlink_target') + '\\', symlinkDir, 'junction');
}
try {
    fs.symlinkSync('../../package', packageDir, 'dir');
} catch (err) {
    // if fails then it is probably on Windows and lets try to create a junction
    fs.symlinkSync(path.join(__dirname, '..', '..', 'package') + '\\', packageDir, 'junction');
}
try {
    fs.symlinkSync('../../source/node_modules/mod-a', symlinkModADir, 'dir');
} catch (err) {
    // if fails then it is probably on Windows and lets try to create a junction
    fs.symlinkSync(path.join(__dirname, '..', '..', 'source', 'node_modules', 'mod-a') + '\\', symlinkModADir, 'junction');
}

test('symlink', function (t) {
    t.plan(2);

    resolve('foo', { basedir: symlinkDir, preserveSymlinks: false }, function (err, res, pkg) {
        t.error(err);
        t.equal(res, path.join(__dirname, 'resolver', 'symlinked', '_', 'node_modules', 'foo.js'));
    });
});

test('sync symlink when preserveSymlinks = true', function (t) {
    t.plan(4);

    resolve('foo', { basedir: symlinkDir }, function (err, res, pkg) {
        t.ok(err, 'there is an error');
        t.notOk(res, 'no result');

        t.equal(err && err.code, 'MODULE_NOT_FOUND', 'error code matches require.resolve');
        t.equal(
            err && err.message,
            'Cannot find module \'foo\' from \'' + symlinkDir + '\'',
            'can not find nonexistent module'
        );
    });
});

test('sync symlink', function (t) {
    var start = new Date();
    t.doesNotThrow(function () {
        t.equal(
            resolve.sync('foo', { basedir: symlinkDir, preserveSymlinks: false }),
            path.join(__dirname, 'resolver', 'symlinked', '_', 'node_modules', 'foo.js')
        );
    });
    t.ok(new Date() - start < 50, 'resolve.sync timedout');
    t.end();
});

test('sync symlink when preserveSymlinks = true', function (t) {
    t.throws(function () {
        resolve.sync('foo', { basedir: symlinkDir });
    }, /Cannot find module 'foo'/);
    t.end();
});

test('sync symlink from node_modules to other dir when preserveSymlinks = false', function (t) {
    var basedir = path.join(__dirname, 'resolver', 'symlinked', '_');
    var fn = resolve.sync('package', { basedir: basedir, preserveSymlinks: false });

    t.equal(fn, path.resolve(__dirname, 'resolver/symlinked/package/bar.js'));
    t.end();
});

test('async symlink from node_modules to other dir when preserveSymlinks = false', function (t) {
    t.plan(2);
    var basedir = path.join(__dirname, 'resolver', 'symlinked', '_');
    resolve('package', { basedir: basedir, preserveSymlinks: false }, function (err, result) {
        t.notOk(err, 'no error');
        t.equal(result, path.resolve(__dirname, 'resolver/symlinked/package/bar.js'));
    });
});

test('packageFilter', function (t) {
    function relative(x) {
        return path.relative(__dirname, x);
    }

    function testPackageFilter(preserveSymlinks) {
        return function (st) {
            st.plan('is 1.x' ? 3 : 5); // eslint-disable-line no-constant-condition

            var destMain = 'symlinks/dest/node_modules/mod-a/index.js';
            var destPkg = 'symlinks/dest/node_modules/mod-a/package.json';
            var sourceMain = 'symlinks/source/node_modules/mod-a/index.js';
            var sourcePkg = 'symlinks/source/node_modules/mod-a/package.json';
            var destDir = path.join(__dirname, 'symlinks', 'dest');

            /* eslint multiline-comment-style: 0 */
            /* v2.x will restore these tests
            var packageFilterPath = [];
            var actualPath = resolve.sync('mod-a', {
                basedir: destDir,
                preserveSymlinks: preserveSymlinks,
                packageFilter: function (pkg, pkgfile, dir) {
                    packageFilterPath.push(pkgfile);
                }
            });
            st.equal(
                relative(actualPath),
                path.normalize(preserveSymlinks ? destMain : sourceMain),
                'sync: actual path is correct'
            );
            st.deepEqual(
                map(packageFilterPath, relative),
                map(preserveSymlinks ? [destPkg, destPkg] : [sourcePkg, sourcePkg], path.normalize),
                'sync: packageFilter pkgfile arg is correct'
            );
            */

            var asyncPackageFilterPath = [];
            resolve(
                'mod-a',
                {
                    basedir: destDir,
                    preserveSymlinks: preserveSymlinks,
                    packageFilter: function (pkg, pkgfile) {
                        asyncPackageFilterPath.push(pkgfile);
                    }
                },
                function (err, actualPath) {
                    st.error(err, 'no error');
                    st.equal(
                        relative(actualPath),
                        path.normalize(preserveSymlinks ? destMain : sourceMain),
                        'async: actual path is correct'
                    );
                    st.deepEqual(
                        map(asyncPackageFilterPath, relative),
                        map(
                            preserveSymlinks ? [destPkg, destPkg, destPkg] : [sourcePkg, sourcePkg, sourcePkg],
                            path.normalize
                        ),
                        'async: packageFilter pkgfile arg is correct'
                    );
                }
            );
        };
    }

    t.test('preserveSymlinks: false', testPackageFilter(false));

    t.test('preserveSymlinks: true', testPackageFilter(true));

    t.end();
});
