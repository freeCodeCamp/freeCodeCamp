var stream = require("stream");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  Duplex: { enumerable: true, value: stream.Duplex },
  PassThrough: { enumerable: true, value: stream.PassThrough },
  Readable: { enumerable: true, value: stream.Readable },
  Stream: { enumerable: true, value: stream.Stream },
  Transform: { enumerable: true, value: stream.Transform },
  Writable: { enumerable: true, value: stream.Writable },
  //_isUint8Array: // skipping
  //_uint8ArrayToBuffer: // skipping
  //super_: // skipping
});