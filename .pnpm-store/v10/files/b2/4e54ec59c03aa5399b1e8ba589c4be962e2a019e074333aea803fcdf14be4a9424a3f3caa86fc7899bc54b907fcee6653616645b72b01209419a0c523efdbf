var path = require('path');
var test = require('tape');
var Buffer = require('safe-buffer').Buffer;

var Writable = require('..').Writable;
var inherits = require('inherits');

inherits(TestWritable, Writable);

function TestWritable(opt) {
    if (!(this instanceof TestWritable))
        return new TestWritable(opt);
    Writable.call(this, opt);
    this._written = [];
}

TestWritable.prototype._write = function(chunk, encoding, cb) {
    this._written.push(chunk);
    cb();
};

var buf = Buffer.from([ 88 ]);

test('.writable writing ArrayBuffer', function(t) {
    var writable = new TestWritable();
    
    writable.write(buf);
    writable.end();
    
    t.equal(writable._written.length, 1);
    t.equal(writable._written[0].toString(), 'X')
    t.end()
});
