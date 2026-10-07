'use strict';

var fs = require('fs');
var homedir = require('../lib/homedir');
var path = require('path');

var test = require('tape');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var mv = require('mv');
var copyDir = require('copy-dir');
var tmp = require('tmp');

var HOME = homedir();

var hnm = path.join(HOME, '.node_modules');
var hnl = path.join(HOME, '.node_libraries');

var resolve = require('../sync');

function makeDir(t, dir, cb) {
    mkdirp(dir, function (err) {
        if (err) {
            cb(err);
        } else {
            t.teardown(function cleanup() {
                rimraf.sync(dir);
            });
            cb();
        }
    });
}

function makeTempDir(t, dir, cb) {
    if (fs.existsSync(dir)) {
        var tmpResult = tmp.dirSync();
        t.teardown(tmpResult.removeCallback);
        var backup = path.join(tmpResult.name, path.basename(dir));
        mv(dir, backup, function (err) {
            if (err) {
                cb(err);
            } else {
                t.teardown(function () {
                    mv(backup, dir, cb);
                });
                makeDir(t, dir, cb);
            }
        });
    } else {
        makeDir(t, dir, cb);
    }
}

test('homedir module paths', function (t) {
    t.plan(7);

    makeTempDir(t, hnm, function (err) {
        t.error(err, 'no error with HNM temp dir');
        if (err) {
            return t.end();
        }

        var bazHNMDir = path.join(hnm, 'baz');
        var dotMainDir = path.join(hnm, 'dot_main');
        copyDir.sync(path.join(__dirname, 'resolver/baz'), bazHNMDir);
        copyDir.sync(path.join(__dirname, 'resolver/dot_main'), dotMainDir);

        var bazHNMmain = path.join(bazHNMDir, 'quux.js');
        t.equal(require.resolve('baz'), bazHNMmain, 'sanity check: require.resolve finds HNM `baz`');
        var dotMainMain = path.join(dotMainDir, 'index.js');
        t.equal(require.resolve('dot_main'), dotMainMain, 'sanity check: require.resolve finds `dot_main`');

        makeTempDir(t, hnl, function (err) {
            t.error(err, 'no error with HNL temp dir');
            if (err) {
                return t.end();
            }
            var bazHNLDir = path.join(hnl, 'baz');
            copyDir.sync(path.join(__dirname, 'resolver/baz'), bazHNLDir);

            var dotSlashMainDir = path.join(hnl, 'dot_slash_main');
            var dotSlashMainMain = path.join(dotSlashMainDir, 'index.js');
            copyDir.sync(path.join(__dirname, 'resolver/dot_slash_main'), dotSlashMainDir);

            t.equal(require.resolve('baz'), bazHNMmain, 'sanity check: require.resolve finds HNM `baz`');
            t.equal(require.resolve('dot_slash_main'), dotSlashMainMain, 'sanity check: require.resolve finds HNL `dot_slash_main`');

            t.test('with temp dirs', function (st) {
                st.plan(3);

                st.test('just in `$HOME/.node_modules`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('dot_main');
                    s2t.equal(res, dotMainMain, '`dot_main` resolves in `$HOME/.node_modules`');
                });

                st.test('just in `$HOME/.node_libraries`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('dot_slash_main');
                    s2t.equal(res, dotSlashMainMain, '`dot_slash_main` resolves in `$HOME/.node_libraries`');
                });

                st.test('in `$HOME/.node_libraries` and `$HOME/.node_modules`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('baz');
                    s2t.equal(res, bazHNMmain, '`baz` resolves in `$HOME/.node_modules` when in both');
                });
            });
        });
    });
});
