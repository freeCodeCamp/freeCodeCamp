var test = require('tape');
var wordwrap = require('../');

test('hard', function (t) {
    var s = 'Assert from {"type":"equal","ok":false,"found":1,"wanted":2,'
        + '"stack":[],"id":"b7ddcd4c409de8799542a74d1a04689b",'
        + '"browser":"chrome/6.0"}'
    ;
    var s_ = wordwrap.hard(80)(s);
    
    var lines = s_.split('\n');
    t.equal(lines.length, 2);
    t.ok(lines[0].length < 80);
    t.ok(lines[1].length < 80);
    
    t.equal(s, s_.replace(/\n/g, ''));
    t.end();
});

test('break', function (t) {
    var s = new Array(55+1).join('a');
    var s_ = wordwrap.hard(20)(s);
    
    var lines = s_.split('\n');
    t.equal(lines.length, 3);
    t.ok(lines[0].length === 20);
    t.ok(lines[1].length === 20);
    t.ok(lines[2].length === 15);
    
    t.equal(s, s_.replace(/\n/g, ''));
    t.end();
});
