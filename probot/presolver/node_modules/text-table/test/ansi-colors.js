var test = require('tape');
var table = require('../');
var color = require('cli-color');
var ansiTrim = require('cli-color/lib/trim');

test('center', function (t) {
    t.plan(1);
    var opts = {
        align: [ 'l', 'c', 'l' ],
        stringLength: function(s) { return ansiTrim(s).length }
    };
    var s = table([
        [
            color.red('Red'), color.green('Green'), color.blue('Blue')
        ],
        [
            color.bold('Bold'), color.underline('Underline'),
            color.italic('Italic')
        ],
        [
            color.inverse('Inverse'), color.strike('Strike'),
            color.blink('Blink')
        ],
        [ 'bar', '45', 'lmno' ]
    ], opts);
    t.equal(ansiTrim(s), [
        'Red        Green    Blue',
        'Bold     Underline  Italic',
        'Inverse    Strike   Blink',
        'bar          45     lmno'
    ].join('\n'));
});
