var test = require('tape');
var wordwrap = require('../');

var fs = require('fs');
var idleness = fs.readFileSync(__dirname + '/idleness.txt', 'utf8');

test('stop80', function (t) {
    var lines = wordwrap(80)(idleness).split(/\n/);
    var words = idleness.split(/\s+/);
    
    lines.forEach(function (line) {
        t.ok(line.length <= 80, 'line > 80 columns');
        var chunks = line.match(/\S/) ? line.split(/\s+/) : [];
        t.deepEqual(chunks, words.splice(0, chunks.length));
    });
    t.end();
});

test('start20stop60', function (t) {
    var lines = wordwrap(20, 100)(idleness).split(/\n/);
    var words = idleness.split(/\s+/);
    
    lines.forEach(function (line) {
        t.ok(line.length <= 100, 'line > 100 columns');
        var chunks = line
            .split(/\s+/)
            .filter(function (x) { return x.match(/\S/) })
        ;
        t.deepEqual(chunks, words.splice(0, chunks.length));
        t.deepEqual(line.slice(0, 20), new Array(20 + 1).join(' '));
    });
    t.end();
});
