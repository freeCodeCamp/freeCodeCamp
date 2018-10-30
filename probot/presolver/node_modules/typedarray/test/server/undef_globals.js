var test = require('tape');
var vm = require('vm');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/../../index.js', 'utf8');

test('u8a without globals', function (t) {
    var c = {
        module: { exports: {} },
    };
    c.exports = c.module.exports;
    vm.runInNewContext(src, c);
    var TA = c.module.exports;
    var ua = new(TA.Uint8Array)(5);
    
    t.equal(ua.length, 5);
    ua[1] = 256 + 55;
    t.equal(ua[1], 55);
    t.end();
});
