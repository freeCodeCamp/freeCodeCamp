var inspect = require('../../');
var test = require('tape');

test('dom element', function (t) {
    t.plan(1);

    var d = document.createElement('div');
    d.setAttribute('id', 'beep');
    d.innerHTML = '<b>wooo</b><i>iiiii</i>';

    t.equal(
        inspect([d, { a: 3, b: 4, c: [5, 6, [7, [8, [9]]]] }]),
        '[ <div id="beep">...</div>, { a: 3, b: 4, c: [ 5, 6, [ 7, [ 8, [Object] ] ] ] } ]'
    );
});
