"use strict";
// Mediocre shim
var Worker;
var workerAdd = ";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";
try {
    Worker = require('worker_threads').Worker;
}
catch (e) {
}
exports.default = Worker ? function (c, _, msg, transfer, cb) {
    var done = false;
    var w = new Worker(c + workerAdd, { eval: true })
        .on('error', function (e) { return cb(e, null); })
        .on('message', function (m) { return cb(null, m); })
        .on('exit', function (c) {
        if (c && !done)
            cb(new Error('exited with code ' + c), null);
    });
    w.postMessage(msg, transfer);
    w.terminate = function () {
        done = true;
        return Worker.prototype.terminate.call(w);
    };
    return w;
} : function (_, __, ___, ____, cb) {
    setImmediate(function () { return cb(new Error('async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)'), null); });
    var NOP = function () { };
    return {
        terminate: NOP,
        postMessage: NOP
    };
};
