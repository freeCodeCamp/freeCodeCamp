var test = require('tape');
var inspect = require('../');

var xs = ['a', 'b'];
xs[5] = 'f';
xs[7] = 'j';
xs[8] = 'k';

test('holes', function (t) {
    t.plan(1);
    t.equal(
        inspect(xs),
        "[ 'a', 'b', , , , 'f', , 'j', 'k' ]"
    );
});
