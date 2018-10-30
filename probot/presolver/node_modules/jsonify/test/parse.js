var test = require('tap').test;
var json = require('../');
var garbage = require('garbage');

test('parse', function (t) {
    for (var i = 0; i < 50; i++) {
        var s = JSON.stringify(garbage(50));
        
        t.deepEqual(
            json.parse(s),
            JSON.parse(s)
        );
    }
    
    t.end();
});
