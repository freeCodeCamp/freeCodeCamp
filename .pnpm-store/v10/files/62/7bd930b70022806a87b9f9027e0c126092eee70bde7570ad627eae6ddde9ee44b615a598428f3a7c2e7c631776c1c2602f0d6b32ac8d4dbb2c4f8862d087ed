var path = require('path');
var test = require('tape');
var resolve = require('../');

var resolverDir = path.join(__dirname, '/pathfilter/deep_ref');

function pathFilterFactory(t) {
    return function (pkg, x, remainder) {
        t.equal(pkg.version, '1.2.3');
        t.equal(x, path.join(resolverDir, 'node_modules/deep/ref'));
        t.equal(remainder, 'ref');
        return 'alt';
    };
}

test('#62: deep module references and the pathFilter', function (t) {
    t.test('deep/ref.js', function (st) {
        st.plan(3);

        resolve('deep/ref', { basedir: resolverDir }, function (err, res, pkg) {
            if (err) st.fail(err);

            st.equal(pkg.version, '1.2.3');
            st.equal(res, path.join(resolverDir, 'node_modules/deep/ref.js'));
        });

        var res = resolve.sync('deep/ref', { basedir: resolverDir });
        st.equal(res, path.join(resolverDir, 'node_modules/deep/ref.js'));
    });

    t.test('deep/deeper/ref', function (st) {
        st.plan(4);

        resolve(
            'deep/deeper/ref',
            { basedir: resolverDir },
            function (err, res, pkg) {
                if (err) t.fail(err);
                st.notEqual(pkg, undefined);
                st.equal(pkg.version, '1.2.3');
                st.equal(res, path.join(resolverDir, 'node_modules/deep/deeper/ref.js'));
            }
        );

        var res = resolve.sync(
            'deep/deeper/ref',
            { basedir: resolverDir }
        );
        st.equal(res, path.join(resolverDir, 'node_modules/deep/deeper/ref.js'));
    });

    t.test('deep/ref alt', function (st) {
        st.plan(8);

        var pathFilter = pathFilterFactory(st);

        var res = resolve.sync(
            'deep/ref',
            { basedir: resolverDir, pathFilter: pathFilter }
        );
        st.equal(res, path.join(resolverDir, 'node_modules/deep/alt.js'));

        resolve(
            'deep/ref',
            { basedir: resolverDir, pathFilter: pathFilter },
            function (err, res, pkg) {
                if (err) st.fail(err);
                st.equal(res, path.join(resolverDir, 'node_modules/deep/alt.js'));
                st.end();
            }
        );
    });

    t.end();
});
