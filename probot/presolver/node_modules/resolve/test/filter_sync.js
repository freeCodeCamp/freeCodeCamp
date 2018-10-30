var path = require('path');
var test = require('tape');
var resolve = require('../');

test('filter', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var packageFilterArgs;
    var res = resolve.sync('./baz', {
        basedir: dir,
        packageFilter: function (pkg, dir) {
            pkg.main = 'doom';
            packageFilterArgs = [pkg, dir];
            return pkg;
        }
    });

    t.equal(res, path.join(dir, 'baz/doom.js'), 'changing the package "main" works');

    var packageData = packageFilterArgs[0];
    t.equal(packageData.main, 'doom', 'package "main" was altered');

    var packageFile = packageFilterArgs[1];
    t.equal(packageFile, path.join(dir, 'baz'), 'second packageFilter argument is "dir"');

    t.end();
});
