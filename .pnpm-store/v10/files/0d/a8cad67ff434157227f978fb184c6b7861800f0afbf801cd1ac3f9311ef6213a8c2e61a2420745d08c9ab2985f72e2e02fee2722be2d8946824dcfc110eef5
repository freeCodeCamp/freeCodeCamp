var test = require('tape');
var pipeline = require('..').pipeline;
var stream = require('..');
var Buffer = require('safe-buffer').Buffer;

test('supports pipeline', function(t) {
    t.plan(4);
    var readable = new stream.Readable({
        read: function () {
            this.push(Buffer.from('chunk', 'ascii'));
        }
    });
    var transform1 = new stream.Transform({
        transform: function (chunk, enc, cb) {
            cb(new Error('fail'));
        }
    });
    var transform2 = new stream.PassThrough();
    transform2.on('close', function () {
        t.pass('transform2.close called');
    });
    var writable = new stream.Writable({
        write: function (chunk, enc, cb) { cb(); }
    });
    writable.on('close', function () {
        t.pass('writable.close called');
    });

    pipeline(
        readable,
        transform1,
        transform2,
        writable,
        function(err) {
            t.ok(err);
            t.equal(err.message, 'fail');
        });
});
