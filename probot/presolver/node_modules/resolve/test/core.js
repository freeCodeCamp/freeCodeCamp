var test = require('tape');
var keys = require('object-keys');
var resolve = require('../');

test('core modules', function (t) {
    t.test('isCore()', function (st) {
        st.ok(resolve.isCore('fs'));
        st.ok(resolve.isCore('net'));
        st.ok(resolve.isCore('http'));

        st.ok(!resolve.isCore('seq'));
        st.ok(!resolve.isCore('../'));
        st.end();
    });

    t.test('core list', function (st) {
        var cores = keys(resolve.core);
        st.plan(cores.length);

        for (var i = 0; i < cores.length; ++i) {
            var mod = cores[i];
            if (resolve.core[mod]) {
                st.doesNotThrow(
                    function () { require(mod); }, // eslint-disable-line no-loop-func
                    mod + ' supported; requiring does not throw'
                );
            } else {
                st.throws(
                    function () { require(mod); }, // eslint-disable-line no-loop-func
                    mod + ' not supported; requiring throws'
                );
            }
        }

        st.end();
    });

    t.test('core via repl module', { skip: !resolve.core.repl }, function (st) {
        var libs = require('repl')._builtinLibs; // eslint-disable-line no-underscore-dangle
        if (!libs) {
            st.skip('module.builtinModules does not exist');
            return st.end();
        }
        for (var i = 0; i < libs.length; ++i) {
            var mod = libs[i];
            st.ok(resolve.core[mod], mod + ' is a core module');
            st.doesNotThrow(
                function () { require(mod); }, // eslint-disable-line no-loop-func
                'requiring ' + mod + ' does not throw'
            );
        }
        st.end();
    });

    t.test('core via builtinModules list', { skip: !resolve.core.module }, function (st) {
        var libs = require('module').builtinModules;
        if (!libs) {
            st.skip('module.builtinModules does not exist');
            return st.end();
        }
        var blacklist = [
            '_debug_agent',
            'v8/tools/tickprocessor-driver',
            'v8/tools/SourceMap',
            'v8/tools/tickprocessor',
            'v8/tools/profile'
        ];
        for (var i = 0; i < libs.length; ++i) {
            var mod = libs[i];
            if (blacklist.indexOf(mod) === -1) {
                st.ok(resolve.core[mod], mod + ' is a core module');
                st.doesNotThrow(
                    function () { require(mod); }, // eslint-disable-line no-loop-func
                    'requiring ' + mod + ' does not throw'
                );
            }
        }
        st.end();
    });

    t.end();
});
