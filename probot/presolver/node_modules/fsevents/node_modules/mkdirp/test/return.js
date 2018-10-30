var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var test = require('tap').test;

test('return value', function (t) {
    t.plan(4);
    var x = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var y = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
    var z = Math.floor(Math.random() * Math.pow(16,4)).toString(16);

    var file = '/tmp/' + [x,y,z].join('/');

    // should return the first dir created.
    // By this point, it would be profoundly surprising if /tmp didn't
    // already exist, since every other test makes things in there.
    mkdirp(file, function (err, made) {
        t.ifError(err);
        t.equal(made, '/tmp/' + x);
        mkdirp(file, function (err, made) {
          t.ifError(err);
          t.equal(made, null);
        });
    });
});
