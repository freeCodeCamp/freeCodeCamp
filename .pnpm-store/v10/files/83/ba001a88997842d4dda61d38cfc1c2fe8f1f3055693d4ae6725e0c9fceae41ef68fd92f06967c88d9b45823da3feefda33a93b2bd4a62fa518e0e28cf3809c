var test = require('tape');
var path = require('path');
var resolve = require('../');

test('synchronous pathfilter', function (t) {
    var res;
    var resolverDir = __dirname + '/pathfilter/deep_ref';
    function pathFilter(pkg, x, remainder) {
        t.equal(pkg.version, '1.2.3');
        t.equal(x, path.join(resolverDir, 'node_modules', 'deep', 'ref'));
        t.equal(remainder, 'ref');
        return 'alt';
    }

    res = resolve.sync('deep/ref', { basedir: resolverDir });
    t.equal(res, path.join(resolverDir, 'node_modules', 'deep', 'ref.js'));

    res = resolve.sync('deep/deeper/ref', { basedir: resolverDir });
    t.equal(res, path.join(resolverDir, 'node_modules', 'deep', 'deeper', 'ref.js'));

    res = resolve.sync('deep/ref', { basedir: resolverDir, pathFilter: pathFilter });
    t.equal(res, path.join(resolverDir, 'node_modules', 'deep', 'alt.js'));
    t.end();
});
