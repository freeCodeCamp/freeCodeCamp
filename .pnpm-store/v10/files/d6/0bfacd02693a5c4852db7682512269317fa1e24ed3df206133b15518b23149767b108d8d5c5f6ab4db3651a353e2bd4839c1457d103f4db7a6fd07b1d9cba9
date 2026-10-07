var inspect = require('../');
var test = require('tape');

test('element', function (t) {
    t.plan(3);
    var elem = {
        nodeName: 'div',
        attributes: [{ name: 'class', value: 'row' }],
        getAttribute: function (key) { return key; },
        childNodes: []
    };
    var obj = [1, elem, 3];
    t.deepEqual(inspect(obj), '[ 1, <div class="row"></div>, 3 ]');
    t.deepEqual(inspect(obj, { quoteStyle: 'single' }), "[ 1, <div class='row'></div>, 3 ]");
    t.deepEqual(inspect(obj, { quoteStyle: 'double' }), '[ 1, <div class="row"></div>, 3 ]');
});

test('element no attr', function (t) {
    t.plan(1);
    var elem = {
        nodeName: 'div',
        getAttribute: function (key) { return key; },
        childNodes: []
    };
    var obj = [1, elem, 3];
    t.deepEqual(inspect(obj), '[ 1, <div></div>, 3 ]');
});

test('element with contents', function (t) {
    t.plan(1);
    var elem = {
        nodeName: 'div',
        getAttribute: function (key) { return key; },
        childNodes: [{ nodeName: 'b' }]
    };
    var obj = [1, elem, 3];
    t.deepEqual(inspect(obj), '[ 1, <div>...</div>, 3 ]');
});

test('element instance', function (t) {
    t.plan(1);
    var h = global.HTMLElement;
    global.HTMLElement = function (name, attr) {
        this.nodeName = name;
        this.attributes = attr;
    };
    global.HTMLElement.prototype.getAttribute = function () {};

    var elem = new global.HTMLElement('div', []);
    var obj = [1, elem, 3];
    t.deepEqual(inspect(obj), '[ 1, <div></div>, 3 ]');
    global.HTMLElement = h;
});
