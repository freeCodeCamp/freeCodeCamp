var path = require('path');
var test = require('tape');
var resolve = require('../');

test('$NODE_PATH', function (t) {
    t.plan(4);

    resolve('aaa', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname
    }, function (err, res) {
        t.equal(res, path.join(__dirname, '/node_path/x/aaa/index.js'));
    });

    resolve('bbb', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname
    }, function (err, res) {
        t.equal(res, path.join(__dirname, '/node_path/y/bbb/index.js'));
    });

    resolve('ccc', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname
    }, function (err, res) {
        t.equal(res, path.join(__dirname, '/node_path/x/ccc/index.js'));
    });

    // ensure that relative paths still resolve against the
    // regular `node_modules` correctly
    resolve('tap', {
        paths: [
            'node_path'
        ],
        basedir: 'node_path/x'
    }, function (err, res) {
        var root = require('tap/package.json').main;
        t.equal(res, path.resolve(__dirname, '..', 'node_modules/tap', root));
    });
});
