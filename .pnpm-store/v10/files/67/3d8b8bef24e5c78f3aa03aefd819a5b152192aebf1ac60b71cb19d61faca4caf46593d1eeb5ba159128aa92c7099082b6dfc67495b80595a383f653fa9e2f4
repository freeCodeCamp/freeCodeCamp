var test = require('tape');
var table = require('../');

test('table', function (t) {
    t.plan(1);
    var s = table([
        [ 'master', '0123456789abcdef' ],
        [ 'staging', 'fedcba9876543210' ]
    ]);
    t.equal(s, [
        'master   0123456789abcdef',
        'staging  fedcba9876543210'
    ].join('\n'));
});
