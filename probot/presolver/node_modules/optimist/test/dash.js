var optimist = require('../index');
var test = require('tap').test;

test('-', function (t) {
    t.plan(5);
    t.deepEqual(
        fix(optimist.parse([ '-n', '-' ])),
        { n: '-', _: [] }
    );
    t.deepEqual(
        fix(optimist.parse([ '-' ])),
        { _: [ '-' ] }
    );
    t.deepEqual(
        fix(optimist.parse([ '-f-' ])),
        { f: '-', _: [] }
    );
    t.deepEqual(
        fix(optimist([ '-b', '-' ]).boolean('b').argv),
        { b: true, _: [ '-' ] }
    );
    t.deepEqual(
        fix(optimist([ '-s', '-' ]).string('s').argv),
        { s: '-', _: [] }
    );
});

function fix (obj) {
    delete obj.$0;
    return obj;
}
