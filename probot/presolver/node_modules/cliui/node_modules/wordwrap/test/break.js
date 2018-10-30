var assert = require('assert');
var wordwrap = require('../');

exports.hard = function () {
    var s = 'Assert from {"type":"equal","ok":false,"found":1,"wanted":2,'
        + '"stack":[],"id":"b7ddcd4c409de8799542a74d1a04689b",'
        + '"browser":"chrome/6.0"}'
    ;
    var s_ = wordwrap.hard(80)(s);
    
    var lines = s_.split('\n');
    assert.equal(lines.length, 2);
    assert.ok(lines[0].length < 80);
    assert.ok(lines[1].length < 80);
    
    assert.equal(s, s_.replace(/\n/g, ''));
};

exports.break = function () {
    var s = new Array(55+1).join('a');
    var s_ = wordwrap.hard(20)(s);
    
    var lines = s_.split('\n');
    assert.equal(lines.length, 3);
    assert.ok(lines[0].length === 20);
    assert.ok(lines[1].length === 20);
    assert.ok(lines[2].length === 15);
    
    assert.equal(s, s_.replace(/\n/g, ''));
};
