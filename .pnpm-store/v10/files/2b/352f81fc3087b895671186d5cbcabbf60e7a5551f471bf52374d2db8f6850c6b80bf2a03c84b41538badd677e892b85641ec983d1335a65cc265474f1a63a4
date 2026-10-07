var path = require('path');
var test = require('tape');
var resolve = require('../');

test('mock', function (t) {
    t.plan(4);

    var files = {};
    files[path.resolve('/foo/bar/baz.js')] = 'beep';

    var dirs = {};
    dirs[path.resolve('/foo/bar')] = true;
    dirs[path.resolve('/foo/node_modules')] = true;

    function opts(basedir) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file) {
                return Object.prototype.hasOwnProperty.call(files, path.resolve(file));
            },
            isDirectory: function (dir) {
                return !!dirs[path.resolve(dir)];
            },
            readFileSync: function (file) {
                return files[path.resolve(file)];
            },
            realpathSync: function (file) {
                return file;
            }
        };
    }

    t.equal(
        resolve.sync('./baz', opts('/foo/bar')),
        path.resolve('/foo/bar/baz.js')
    );

    t.equal(
        resolve.sync('./baz.js', opts('/foo/bar')),
        path.resolve('/foo/bar/baz.js')
    );

    t.throws(function () {
        resolve.sync('baz', opts('/foo/bar'));
    });

    t.throws(function () {
        resolve.sync('../baz', opts('/foo/bar'));
    });
});

test('mock package', function (t) {
    t.plan(1);

    var files = {};
    files[path.resolve('/foo/node_modules/bar/baz.js')] = 'beep';
    files[path.resolve('/foo/node_modules/bar/package.json')] = JSON.stringify({
        main: './baz.js'
    });

    var dirs = {};
    dirs[path.resolve('/foo')] = true;
    dirs[path.resolve('/foo/node_modules')] = true;

    function opts(basedir) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file) {
                return Object.prototype.hasOwnProperty.call(files, path.resolve(file));
            },
            isDirectory: function (dir) {
                return !!dirs[path.resolve(dir)];
            },
            readFileSync: function (file) {
                return files[path.resolve(file)];
            },
            realpathSync: function (file) {
                return file;
            }
        };
    }

    t.equal(
        resolve.sync('bar', opts('/foo')),
        path.resolve('/foo/node_modules/bar/baz.js')
    );
});

test('symlinked', function (t) {
    t.plan(2);

    var files = {};
    files[path.resolve('/foo/bar/baz.js')] = 'beep';
    files[path.resolve('/foo/bar/symlinked/baz.js')] = 'beep';

    var dirs = {};
    dirs[path.resolve('/foo/bar')] = true;
    dirs[path.resolve('/foo/bar/symlinked')] = true;

    function opts(basedir) {
        return {
            preserveSymlinks: false,
            basedir: path.resolve(basedir),
            isFile: function (file) {
                return Object.prototype.hasOwnProperty.call(files, path.resolve(file));
            },
            isDirectory: function (dir) {
                return !!dirs[path.resolve(dir)];
            },
            readFileSync: function (file) {
                return files[path.resolve(file)];
            },
            realpathSync: function (file) {
                var resolved = path.resolve(file);

                if (resolved.indexOf('symlinked') >= 0) {
                    return resolved;
                }

                var ext = path.extname(resolved);

                if (ext) {
                    var dir = path.dirname(resolved);
                    var base = path.basename(resolved);
                    return path.join(dir, 'symlinked', base);
                }
                return path.join(resolved, 'symlinked');
            }
        };
    }

    t.equal(
        resolve.sync('./baz', opts('/foo/bar')),
        path.resolve('/foo/bar/symlinked/baz.js')
    );

    t.equal(
        resolve.sync('./baz.js', opts('/foo/bar')),
        path.resolve('/foo/bar/symlinked/baz.js')
    );
});

test('readPackageSync', function (t) {
    t.plan(3);

    var files = {};
    files[path.resolve('/foo/node_modules/bar/something-else.js')] = 'beep';
    files[path.resolve('/foo/node_modules/bar/package.json')] = JSON.stringify({
        main: './baz.js'
    });
    files[path.resolve('/foo/node_modules/bar/baz.js')] = 'boop';

    var dirs = {};
    dirs[path.resolve('/foo')] = true;
    dirs[path.resolve('/foo/node_modules')] = true;

    function opts(basedir, useReadPackage) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file) {
                return Object.prototype.hasOwnProperty.call(files, path.resolve(file));
            },
            isDirectory: function (dir) {
                return !!dirs[path.resolve(dir)];
            },
            readFileSync: useReadPackage ? null : function (file) {
                return files[path.resolve(file)];
            },
            realpathSync: function (file) {
                return file;
            }
        };
    }
    t.test('with readFile', function (st) {
        st.plan(1);

        st.equal(
            resolve.sync('bar', opts('/foo')),
            path.resolve('/foo/node_modules/bar/baz.js')
        );
    });

    var readPackageSync = function (readFileSync, file) {
        if (file.indexOf(path.join('bar', 'package.json')) >= 0) {
            return { main: './something-else.js' };
        }
        return JSON.parse(files[path.resolve(file)]);
    };

    t.test('with readPackage', function (st) {
        st.plan(1);

        var options = opts('/foo');
        delete options.readFileSync;
        options.readPackageSync = readPackageSync;

        st.equal(
            resolve.sync('bar', options),
            path.resolve('/foo/node_modules/bar/something-else.js')
        );
    });

    t.test('with readFile and readPackage', function (st) {
        st.plan(1);

        var options = opts('/foo');
        options.readPackageSync = readPackageSync;
        st.throws(
            function () { resolve.sync('bar', options); },
            TypeError,
            'errors when both readFile and readPackage are provided'
        );
    });
});

