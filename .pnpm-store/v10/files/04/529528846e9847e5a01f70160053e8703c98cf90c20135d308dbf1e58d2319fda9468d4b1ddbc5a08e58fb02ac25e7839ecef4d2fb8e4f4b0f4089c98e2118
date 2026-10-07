var path = require('path');
var test = require('tape');
var resolve = require('../');

test('filter', function (t) {
    t.plan(5);
    var dir = path.join(__dirname, 'resolver');
    var packageFilterArgs;
    resolve('./baz', {
        basedir: dir,
        packageFilter: function (pkg, pkgfile, dir) {
            pkg.main = 'doom'; // eslint-disable-line no-param-reassign
            packageFilterArgs = [pkg, pkgfile, dir];
            return pkg;
        }
    }, function (err, res, pkg) {
        if (err) t.fail(err);

        t.equal(res, path.join(dir, 'baz/doom.js'), 'changing the package "main" works');

        var packageData = packageFilterArgs[0];
        t.equal(pkg, packageData, 'first packageFilter argument is "pkg"');
        t.equal(packageData.main, 'doom', 'package "main" was altered');

        var packageFile = packageFilterArgs[1];
        t.equal(
            packageFile,
            path.join(dir, 'baz/package.json'),
            'second packageFilter argument is "pkgfile"'
        );

        var packageFileDir = packageFilterArgs[2];
        t.equal(packageFileDir, path.join(dir, 'baz'), 'third packageFilter argument is "dir"');

        t.end();
    });
});
