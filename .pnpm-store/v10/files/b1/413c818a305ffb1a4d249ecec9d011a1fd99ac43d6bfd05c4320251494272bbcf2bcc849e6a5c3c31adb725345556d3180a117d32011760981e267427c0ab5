var Stream = require('stream');
if (process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream.Readable;
  Object.assign(module.exports, Stream);
  module.exports.Stream = Stream;
} else {
  exports = module.exports = require('./lib/_stream_readable.js');
  exports.Stream = Stream || exports;
  exports.Readable = exports;
  exports.Writable = require('./lib/_stream_writable.js');
  exports.Duplex = require('./lib/_stream_duplex.js');
  exports.Transform = require('./lib/_stream_transform.js');
  exports.PassThrough = require('./lib/_stream_passthrough.js');
  exports.finished = require('./lib/internal/streams/end-of-stream.js');
  exports.pipeline = require('./lib/internal/streams/pipeline.js');
}
