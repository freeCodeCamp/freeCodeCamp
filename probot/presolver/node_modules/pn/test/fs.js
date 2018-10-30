// if running on older node, ensure that es6-shim is loaded first
if (/^v0.10/.test(process.version)) { require('es6-shim'); }
var assert= require('../assert');
var fs = require('../fs');
var path = require('../path');

var TESTFILE = '/tmp/hello';

describe('fs module', function() {
    it('write/read/unlink (callbacks)', function(done) {
        fs.exists(TESTFILE, function(exists) {
            if (exists) {
                return done("Pre-existing file "+TESTFILE+"; aborting test.");
            }
            fs.writeFile(TESTFILE, 'hello', 'utf-8', function(err) {
                if (err) { return done(err); }
                fs.exists(TESTFILE, function(exists) {
                    if (!exists) {
                        return done(TESTFILE+" not found");
                    }
                    fs.readFile(TESTFILE, 'utf-8', function(err, contents) {
                        if (err) { return done(err); }
                        if (contents !== 'hello') {
                            return done("File contents are not right");
                        }
                        fs.unlink(TESTFILE, function(err) {
                            if (err) { return done(err); }
                            fs.exists(TESTFILE, function(exists) {
                                if (exists) {
                                    return done("unlink didn't work");
                                }
                                done(/*success!*/);
                            });
                        });
                    });
                });
            });
        });
    });
    it('write/read/unlink (promises)', function() {
        return fs.exists(TESTFILE).then(function(exists) {
            assert.equal(!!exists, false,
                         "Pre-existing file "+TESTFILE+"; aborting test.");
        }).then(function() {
            return fs.writeFile(TESTFILE, 'hello', 'utf-8');
        }).then(function() {
            return fs.exists(TESTFILE);
        }).then(function(exists) {
            assert.equal(!!exists, true);
            return fs.readFile(TESTFILE, 'utf-8');
        }).then(function(contents) {
            assert.equal(contents, 'hello');
            return fs.unlink(TESTFILE);
        }).then(function() {
            return fs.exists(TESTFILE);
        }).then(function(exists) {
            assert.equal(!!exists, false);
        });
    });
});
