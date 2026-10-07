var fs = require('fs');
var path = require('path');
var test = require('tape');
var resolve = require('../');

test('$NODE_PATH', function (t) {
    t.plan(8);

    var isDir = function (dir, cb) {
        if (dir === '/node_path' || dir === 'node_path/x') {
            return cb(null, true);
        }
        fs.stat(dir, function (err, stat) {
            if (!err) {
                return cb(null, stat.isDirectory());
            }
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
            return cb(err);
        });
    };

    resolve('aaa', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/x/aaa/index.js'), 'aaa resolves');
    });

    resolve('bbb', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/y/bbb/index.js'), 'bbb resolves');
    });

    resolve('ccc', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/x/ccc/index.js'), 'ccc resolves');
    });

    // ensure that relative paths still resolve against the regular `node_modules` correctly
    resolve('tap', {
        paths: [
            'node_path'
        ],
        basedir: path.join(__dirname, 'node_path/x'),
        isDirectory: isDir
    }, function (err, res) {
        var root = require('tap/package.json').main; // eslint-disable-line global-require
        t.error(err);
        t.equal(res, path.resolve(__dirname, '..', 'node_modules/tap', root), 'tap resolves');
    });
});
