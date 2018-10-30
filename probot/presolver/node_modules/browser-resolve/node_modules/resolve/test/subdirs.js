var test = require('tape');
var resolve = require('../');
var path = require('path');

test('subdirs', function (t) {
    t.plan(2);
    
    var dir = path.join(__dirname, '/subdirs');
    resolve('a/b/c/x.json', { basedir: dir }, function (err, res) {
        t.ifError(err);
        t.equal(res, path.join(dir, 'node_modules/a/b/c/x.json'));
    });
});
