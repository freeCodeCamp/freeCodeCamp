var path = require('path');
var fs = require('fs');
var test = require('tape');

var resolve = require('../');
var sync = require('../sync');

var requireResolveSupportsPaths = require.resolve.length > 1
    && !(/^v12\.[012]\./).test(process.version); // broken in v12.0-12.2, see https://github.com/nodejs/node/issues/27794

var requireResolveDefaultPathsBroken = (/^v8\.9\.|^v9\.[01]\.0|^v9\.2\./).test(process.version);
// broken in node v8.9.x, v9.0, v9.1, v9.2.x. see https://github.com/nodejs/node/pull/17113

test('`./sync` entry point', function (t) {
    t.equal(resolve.sync, sync, '`./sync` entry point is the same as `.sync` on `main`');
    t.end();
});

test('foo', function (t) {
    var dir = path.join(__dirname, 'resolver');

    t.equal(
        resolve.sync('./foo', { basedir: dir }),
        path.join(dir, 'foo.js'),
        './foo'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./foo', { basedir: dir }),
            require.resolve('./foo', { paths: [dir] }),
            './foo: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync('./foo.js', { basedir: dir }),
        path.join(dir, 'foo.js'),
        './foo.js'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./foo.js', { basedir: dir }),
            require.resolve('./foo.js', { paths: [dir] }),
            './foo.js: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync('./foo.js', { basedir: dir, filename: path.join(dir, 'bar.js') }),
        path.join(dir, 'foo.js')
    );

    t.throws(function () {
        resolve.sync('foo', { basedir: dir });
    });

    // Test that filename is reported as the "from" value when passed.
    t.throws(
        function () {
            resolve.sync('foo', { basedir: dir, filename: path.join(dir, 'bar.js') });
        },
        {
            name: 'Error',
            message: "Cannot find module 'foo' from '" + path.join(dir, 'bar.js') + "'"
        }
    );

    t.end();
});

test('bar', function (t) {
    var dir = path.join(__dirname, 'resolver');

    var basedir = path.join(dir, 'bar');

    t.equal(
        resolve.sync('foo', { basedir: basedir }),
        path.join(dir, 'bar/node_modules/foo/index.js'),
        'foo in bar'
    );
    if (!requireResolveDefaultPathsBroken && requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('foo', { basedir: basedir }),
            require.resolve('foo', { paths: [basedir] }),
            'foo in bar: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('baz', function (t) {
    var dir = path.join(__dirname, 'resolver');

    t.equal(
        resolve.sync('./baz', { basedir: dir }),
        path.join(dir, 'baz/quux.js'),
        './baz'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./baz', { basedir: dir }),
            require.resolve('./baz', { paths: [dir] }),
            './baz: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('biz', function (t) {
    var dir = path.join(__dirname, 'resolver/biz/node_modules');

    t.equal(
        resolve.sync('./grux', { basedir: dir }),
        path.join(dir, 'grux/index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./grux', { basedir: dir }),
            require.resolve('./grux', { paths: [dir] }),
            './grux: resolve.sync === require.resolve'
        );
    }

    var tivDir = path.join(dir, 'grux');
    t.equal(
        resolve.sync('tiv', { basedir: tivDir }),
        path.join(dir, 'tiv/index.js')
    );
    if (!requireResolveDefaultPathsBroken && requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('tiv', { basedir: tivDir }),
            require.resolve('tiv', { paths: [tivDir] }),
            'tiv: resolve.sync === require.resolve'
        );
    }

    var gruxDir = path.join(dir, 'tiv');
    t.equal(
        resolve.sync('grux', { basedir: gruxDir }),
        path.join(dir, 'grux/index.js')
    );
    if (!requireResolveDefaultPathsBroken && requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('grux', { basedir: gruxDir }),
            require.resolve('grux', { paths: [gruxDir] }),
            'grux: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('normalize', function (t) {
    var dir = path.join(__dirname, 'resolver/biz/node_modules/grux');

    t.equal(
        resolve.sync('../grux', { basedir: dir }),
        path.join(dir, 'index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('../grux', { basedir: dir }),
            require.resolve('../grux', { paths: [dir] }),
            '../grux: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('cup', function (t) {
    var dir = path.join(__dirname, 'resolver');

    t.equal(
        resolve.sync('./cup', {
            basedir: dir,
            extensions: ['.js', '.coffee']
        }),
        path.join(dir, 'cup.coffee'),
        './cup -> ./cup.coffee'
    );

    t.equal(
        resolve.sync('./cup.coffee', { basedir: dir }),
        path.join(dir, 'cup.coffee'),
        './cup.coffee'
    );

    t.throws(function () {
        resolve.sync('./cup', {
            basedir: dir,
            extensions: ['.js']
        });
    });

    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./cup.coffee', { basedir: dir, extensions: ['.js', '.coffee'] }),
            require.resolve('./cup.coffee', { paths: [dir] }),
            './cup.coffee: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('mug', function (t) {
    var dir = path.join(__dirname, 'resolver');

    t.equal(
        resolve.sync('./mug', { basedir: dir }),
        path.join(dir, 'mug.js'),
        './mug -> ./mug.js'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./mug', { basedir: dir }),
            require.resolve('./mug', { paths: [dir] }),
            './mug: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync('./mug', {
            basedir: dir,
            extensions: ['.coffee', '.js']
        }),
        path.join(dir, 'mug.coffee'),
        './mug -> ./mug.coffee'
    );

    t.equal(
        resolve.sync('./mug', {
            basedir: dir,
            extensions: ['.js', '.coffee']
        }),
        path.join(dir, 'mug.js'),
        './mug -> ./mug.js'
    );

    t.end();
});

test('other path', function (t) {
    var resolverDir = path.join(__dirname, 'resolver');
    var dir = path.join(resolverDir, 'bar');
    var otherDir = path.join(resolverDir, 'other_path');

    t.equal(
        resolve.sync('root', {
            basedir: dir,
            paths: [otherDir]
        }),
        path.join(resolverDir, 'other_path/root.js')
    );

    t.equal(
        resolve.sync('lib/other-lib', {
            basedir: dir,
            paths: [otherDir]
        }),
        path.join(resolverDir, 'other_path/lib/other-lib.js')
    );

    t.throws(function () {
        resolve.sync('root', { basedir: dir });
    });

    t.throws(function () {
        resolve.sync('zzz', {
            basedir: dir,
            paths: [otherDir]
        });
    });

    t.end();
});

test('path iterator', function (t) {
    var resolverDir = path.join(__dirname, 'resolver');

    var exactIterator = function (x, start, getPackageCandidates, opts) {
        return [path.join(resolverDir, x)];
    };

    t.equal(
        resolve.sync('baz', { packageIterator: exactIterator }),
        path.join(resolverDir, 'baz/quux.js')
    );

    t.end();
});

test('incorrect main', function (t) {
    var resolverDir = path.join(__dirname, 'resolver');
    var dir = path.join(resolverDir, 'incorrect_main');

    t.equal(
        resolve.sync('./incorrect_main', { basedir: resolverDir }),
        path.join(dir, 'index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./incorrect_main', { basedir: resolverDir }),
            require.resolve('./incorrect_main', { paths: [resolverDir] }),
            './incorrect_main: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('missing index', function (t) {
    t.plan(requireResolveSupportsPaths ? 2 : 1);

    var resolverDir = path.join(__dirname, 'resolver');
    try {
        resolve.sync('./missing_index', { basedir: resolverDir });
        t.fail('did not fail');
    } catch (err) {
        t.equal(err && err.code, 'INCORRECT_PACKAGE_MAIN', 'error has correct error code');
    }
    if (requireResolveSupportsPaths) {
        try {
            require.resolve('./missing_index', { basedir: resolverDir });
            t.fail('require.resolve did not fail');
        } catch (err) {
            t.equal(err && err.code, 'MODULE_NOT_FOUND', 'error has correct error code');
        }
    }
});

test('missing main', function (t) {
    var resolverDir = path.join(__dirname, 'resolver');
    var dir = path.join(resolverDir, 'missing_main');

    t.equal(
        resolve.sync('./missing_main', { basedir: resolverDir }),
        path.join(dir, 'index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./missing_main', { basedir: resolverDir }),
            require.resolve('./missing_main', { paths: [resolverDir] }),
            '"main" missing: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('null main', function (t) {
    var resolverDir = path.join(__dirname, 'resolver');
    var dir = path.join(resolverDir, 'null_main');

    t.equal(
        resolve.sync('./null_main', { basedir: resolverDir }),
        path.join(dir, 'index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./null_main', { basedir: resolverDir }),
            require.resolve('./null_main', { paths: [resolverDir] }),
            '`"main": null`: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('main: false', function (t) {
    var basedir = path.join(__dirname, 'resolver');
    var dir = path.join(basedir, 'false_main');
    t.equal(
        resolve.sync('./false_main', { basedir: basedir }),
        path.join(dir, 'index.js'),
        '`"main": false`: resolves to `index.js`'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./false_main', { basedir: basedir }),
            require.resolve('./false_main', { paths: [basedir] }),
            '`"main": false`: resolve.sync === require.resolve'
        );
    }

    t.end();
});

var stubStatSync = function stubStatSync(fn) {
    var statSync = fs.statSync;
    try {
        fs.statSync = function () {
            throw new EvalError('Unknown Error');
        };
        return fn();
    } finally {
        fs.statSync = statSync;
    }
};

test('#79 - re-throw non ENOENT errors from stat', function (t) {
    var dir = path.join(__dirname, 'resolver');

    stubStatSync(function () {
        t.throws(function () {
            resolve.sync('foo', { basedir: dir });
        }, /Unknown Error/);
    });

    t.end();
});

test('#52 - incorrectly resolves module-paths like "./someFolder/" when there is a file of the same name', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var basedir = path.join(dir, 'same_names');

    t.equal(
        resolve.sync('./foo', { basedir: basedir }),
        path.join(dir, 'same_names/foo.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./foo', { basedir: basedir }),
            require.resolve('./foo', { paths: [basedir] }),
            './foo: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync('./foo/', { basedir: basedir }),
        path.join(dir, 'same_names/foo/index.js')
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./foo/', { basedir: basedir }),
            require.resolve('./foo/', { paths: [basedir] }),
            './foo/: resolve.sync === require.resolve'
        );
    }

    t.end();
});

test('#211 - incorrectly resolves module-paths like "." when from inside a folder with a sibling file of the same name', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var basedir = path.join(dir, 'same_names/foo');

    t.equal(
        resolve.sync('./', { basedir: basedir }),
        path.join(dir, 'same_names/foo/index.js'),
        './'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./', { basedir: basedir }),
            require.resolve('./', { paths: [basedir] }),
            './: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync('.', { basedir: basedir }),
        path.join(dir, 'same_names/foo/index.js'),
        '.'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('.', { basedir: basedir }),
            require.resolve('.', { paths: [basedir] }),
            '.: resolve.sync === require.resolve',
            { todo: true }
        );
    }

    t.end();
});

test('sync: #121 - treating an existing file as a dir when no basedir', function (t) {
    var testFile = path.basename(__filename);

    t.test('sanity check', function (st) {
        st.equal(
            resolve.sync('./' + testFile),
            __filename,
            'sanity check'
        );
        st.equal(
            resolve.sync('./' + testFile),
            require.resolve('./' + testFile),
            'sanity check: resolve.sync === require.resolve'
        );

        st.end();
    });

    t.test('with a fake directory', function (st) {
        function run() { return resolve.sync('./' + testFile + '/blah'); }

        st.throws(run, 'throws an error');

        try {
            run();
        } catch (e) {
            st.equal(e.code, 'MODULE_NOT_FOUND', 'error code matches require.resolve');
            st.equal(
                e.message,
                'Cannot find module \'./' + testFile + '/blah\' from \'' + __dirname + '\'',
                'can not find nonexistent module'
            );
        }

        st.end();
    });

    t.end();
});

test('sync dot main', function (t) {
    var start = new Date();

    t.equal(
        resolve.sync('./resolver/dot_main'),
        path.join(__dirname, 'resolver/dot_main/index.js'),
        './resolver/dot_main'
    );
    t.equal(
        resolve.sync('./resolver/dot_main'),
        require.resolve('./resolver/dot_main'),
        './resolver/dot_main: resolve.sync === require.resolve'
    );

    t.ok(new Date() - start < 50, 'resolve.sync timedout');

    t.end();
});

test('sync dot slash main', function (t) {
    var start = new Date();

    t.equal(
        resolve.sync('./resolver/dot_slash_main'),
        path.join(__dirname, 'resolver/dot_slash_main/index.js')
    );
    t.equal(
        resolve.sync('./resolver/dot_slash_main'),
        require.resolve('./resolver/dot_slash_main'),
        './resolver/dot_slash_main: resolve.sync === require.resolve'
    );

    t.ok(new Date() - start < 50, 'resolve.sync timedout');

    t.end();
});

test('not a directory', function (t) {
    var path = './foo';
    try {
        resolve.sync(path, { basedir: __filename });
        t.fail();
    } catch (err) {
        t.ok(err, 'a non-directory errors');
        t.equal(err && err.message, 'Provided basedir "' + __filename + '" is not a directory, or a symlink to a directory');
        t.equal(err && err.code, 'INVALID_BASEDIR');
    }
    t.end();
});

test('non-string "main" field in package.json', function (t) {
    var dir = path.join(__dirname, 'resolver');
    try {
        var result = resolve.sync('./invalid_main', { basedir: dir });
        t.equal(result, undefined, 'result should not exist');
        t.fail('should not get here');
    } catch (err) {
        t.ok(err, 'errors on non-string main');
        t.equal(err.message, 'package “invalid_main” `main` must be a string');
        t.equal(err.code, 'INVALID_PACKAGE_MAIN');
    }
    t.end();
});

test('non-string "main" field in package.json', function (t) {
    var dir = path.join(__dirname, 'resolver');
    try {
        var result = resolve.sync('./invalid_main', { basedir: dir });
        t.equal(result, undefined, 'result should not exist');
        t.fail('should not get here');
    } catch (err) {
        t.ok(err, 'errors on non-string main');
        t.equal(err.message, 'package “invalid_main” `main` must be a string');
        t.equal(err.code, 'INVALID_PACKAGE_MAIN');
    }
    t.end();
});

test('browser field in package.json', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var res = resolve.sync('./browser_field', {
        basedir: dir,
        packageFilter: function packageFilter(pkg) {
            if (pkg.browser) {
                pkg.main = pkg.browser; // eslint-disable-line no-param-reassign
                delete pkg.browser; // eslint-disable-line no-param-reassign
            }
            return pkg;
        }
    });
    t.equal(res, path.join(dir, 'browser_field', 'b.js'));
    t.end();
});

test('absolute paths', function (t) {
    var extensionless = __filename.slice(0, -path.extname(__filename).length);

    t.equal(
        resolve.sync(__filename),
        __filename,
        'absolute path to this file resolves'
    );
    t.equal(
        resolve.sync(__filename),
        require.resolve(__filename),
        'absolute path to this file: resolve.sync === require.resolve'
    );

    t.equal(
        resolve.sync(extensionless),
        __filename,
        'extensionless absolute path to this file resolves'
    );
    t.equal(
        resolve.sync(__filename),
        require.resolve(__filename),
        'absolute path to this file: resolve.sync === require.resolve'
    );

    t.equal(
        resolve.sync(__filename, { basedir: process.cwd() }),
        __filename,
        'absolute path to this file with a basedir resolves'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync(__filename, { basedir: process.cwd() }),
            require.resolve(__filename, { paths: [process.cwd()] }),
            'absolute path to this file + basedir: resolve.sync === require.resolve'
        );
    }

    t.equal(
        resolve.sync(extensionless, { basedir: process.cwd() }),
        __filename,
        'extensionless absolute path to this file with a basedir resolves'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync(extensionless, { basedir: process.cwd() }),
            require.resolve(extensionless, { paths: [process.cwd()] }),
            'extensionless absolute path to this file + basedir: resolve.sync === require.resolve'
        );
    }

    t.end();
});

var malformedDir = path.join(__dirname, 'resolver/malformed_package_json');
test('malformed package.json', { skip: !fs.existsSync(malformedDir) }, function (t) {
    t.plan(5 + (requireResolveSupportsPaths ? 1 : 0));

    var basedir = malformedDir;
    var expected = path.join(basedir, 'index.js');

    t.equal(
        resolve.sync('./index.js', { basedir: basedir }),
        expected,
        'malformed package.json is silently ignored'
    );
    if (requireResolveSupportsPaths) {
        t.equal(
            resolve.sync('./index.js', { basedir: basedir }),
            require.resolve('./index.js', { paths: [basedir] }),
            'malformed package.json: resolve.sync === require.resolve'
        );
    }

    var res1 = resolve.sync(
        './index.js',
        {
            basedir: basedir,
            packageFilter: function (pkg, pkgfile, dir) {
                t.fail('should not reach here');
            }
        }
    );

    t.equal(
        res1,
        expected,
        'with packageFilter: malformed package.json is silently ignored'
    );

    var res2 = resolve.sync(
        './index.js',
        {
            basedir: basedir,
            readPackageSync: function (readFileSync, pkgfile) {
                t.equal(pkgfile, path.join(basedir, 'package.json'), 'readPackageSync: `pkgfile` is package.json path');
                var result = String(readFileSync(pkgfile));
                try {
                    return JSON.parse(result);
                } catch (e) {
                    t.ok(e instanceof SyntaxError, 'readPackageSync: malformed package.json parses as a syntax error');
                    throw e;
                }
            }
        }
    );

    t.equal(
        res2,
        expected,
        'with readPackageSync: malformed package.json is silently ignored'
    );
});
