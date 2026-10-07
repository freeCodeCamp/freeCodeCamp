var path = require('path');
var test = require('tape');
var resolve = require('../');

test('mock', function (t) {
    t.plan(8);

    var files = {};
    files[path.resolve('/foo/bar/baz.js')] = 'beep';

    var dirs = {};
    dirs[path.resolve('/foo/bar')] = true;

    function opts(basedir) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, path.resolve(file)));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            readFile: function (file, cb) {
                cb(null, files[path.resolve(file)]);
            },
            realpath: function (file, cb) {
                cb(null, file);
            }
        };
    }

    resolve('./baz', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/baz.js'));
        t.equal(pkg, undefined);
    });

    resolve('./baz.js', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/baz.js'));
        t.equal(pkg, undefined);
    });

    resolve('baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module 'baz' from '" + path.resolve('/foo/bar') + "'");
        t.equal(err.code, 'MODULE_NOT_FOUND');
    });

    resolve('../baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module '../baz' from '" + path.resolve('/foo/bar') + "'");
        t.equal(err.code, 'MODULE_NOT_FOUND');
    });
});

test('mock from package', function (t) {
    t.plan(8);

    var files = {};
    files[path.resolve('/foo/bar/baz.js')] = 'beep';

    var dirs = {};
    dirs[path.resolve('/foo/bar')] = true;

    function opts(basedir) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, file));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            'package': { main: 'bar' },
            readFile: function (file, cb) {
                cb(null, files[file]);
            },
            realpath: function (file, cb) {
                cb(null, file);
            }
        };
    }

    resolve('./baz', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/baz.js'));
        t.equal(pkg && pkg.main, 'bar');
    });

    resolve('./baz.js', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/baz.js'));
        t.equal(pkg && pkg.main, 'bar');
    });

    resolve('baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module 'baz' from '" + path.resolve('/foo/bar') + "'");
        t.equal(err.code, 'MODULE_NOT_FOUND');
    });

    resolve('../baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module '../baz' from '" + path.resolve('/foo/bar') + "'");
        t.equal(err.code, 'MODULE_NOT_FOUND');
    });
});

test('mock package', function (t) {
    t.plan(2);

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
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, path.resolve(file)));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            readFile: function (file, cb) {
                cb(null, files[path.resolve(file)]);
            },
            realpath: function (file, cb) {
                cb(null, file);
            }
        };
    }

    resolve('bar', opts('/foo'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/node_modules/bar/baz.js'));
        t.equal(pkg && pkg.main, './baz.js');
    });
});

test('mock package from package', function (t) {
    t.plan(2);

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
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, path.resolve(file)));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            'package': { main: 'bar' },
            readFile: function (file, cb) {
                cb(null, files[path.resolve(file)]);
            },
            realpath: function (file, cb) {
                cb(null, file);
            }
        };
    }

    resolve('bar', opts('/foo'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/node_modules/bar/baz.js'));
        t.equal(pkg && pkg.main, './baz.js');
    });
});

test('symlinked', function (t) {
    t.plan(4);

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
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, path.resolve(file)));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            readFile: function (file, cb) {
                cb(null, files[path.resolve(file)]);
            },
            realpath: function (file, cb) {
                var resolved = path.resolve(file);

                if (resolved.indexOf('symlinked') >= 0) {
                    cb(null, resolved);
                    return;
                }

                var ext = path.extname(resolved);

                if (ext) {
                    var dir = path.dirname(resolved);
                    var base = path.basename(resolved);
                    cb(null, path.join(dir, 'symlinked', base));
                } else {
                    cb(null, path.join(resolved, 'symlinked'));
                }
            }
        };
    }

    resolve('./baz', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/symlinked/baz.js'));
        t.equal(pkg, undefined);
    });

    resolve('./baz.js', opts('/foo/bar'), function (err, res, pkg) {
        if (err) return t.fail(err);
        t.equal(res, path.resolve('/foo/bar/symlinked/baz.js'));
        t.equal(pkg, undefined);
    });
});

test('readPackage', function (t) {
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

    function opts(basedir) {
        return {
            basedir: path.resolve(basedir),
            isFile: function (file, cb) {
                cb(null, Object.prototype.hasOwnProperty.call(files, path.resolve(file)));
            },
            isDirectory: function (dir, cb) {
                cb(null, !!dirs[path.resolve(dir)]);
            },
            'package': { main: 'bar' },
            readFile: function (file, cb) {
                cb(null, files[path.resolve(file)]);
            },
            realpath: function (file, cb) {
                cb(null, file);
            }
        };
    }

    t.test('with readFile', function (st) {
        st.plan(3);

        resolve('bar', opts('/foo'), function (err, res, pkg) {
            st.error(err);
            st.equal(res, path.resolve('/foo/node_modules/bar/baz.js'));
            st.equal(pkg && pkg.main, './baz.js');
        });
    });

    var readPackage = function (readFile, file, cb) {
        var barPackage = path.join('bar', 'package.json');
        if (file.slice(-barPackage.length) === barPackage) {
            cb(null, { main: './something-else.js' });
        } else {
            cb(null, JSON.parse(files[path.resolve(file)]));
        }
    };

    t.test('with readPackage', function (st) {
        st.plan(3);

        var options = opts('/foo');
        delete options.readFile;
        options.readPackage = readPackage;
        resolve('bar', options, function (err, res, pkg) {
            st.error(err);
            st.equal(res, path.resolve('/foo/node_modules/bar/something-else.js'));
            st.equal(pkg && pkg.main, './something-else.js');
        });
    });

    t.test('with readFile and readPackage', function (st) {
        st.plan(1);

        var options = opts('/foo');
        options.readPackage = readPackage;
        resolve('bar', options, function (err) {
            st.throws(function () { throw err; }, TypeError, 'errors when both readFile and readPackage are provided');
        });
    });
});
