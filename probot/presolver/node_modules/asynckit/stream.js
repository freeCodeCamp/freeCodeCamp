var inherits              = require('util').inherits
  , Readable              = require('stream').Readable
  , ReadableAsyncKit      = require('./lib/readable_asynckit.js')
  , ReadableParallel      = require('./lib/readable_parallel.js')
  , ReadableSerial        = require('./lib/readable_serial.js')
  , ReadableSerialOrdered = require('./lib/readable_serial_ordered.js')
  ;

// API
module.exports =
{
  parallel      : ReadableParallel,
  serial        : ReadableSerial,
  serialOrdered : ReadableSerialOrdered, 
};

inherits(ReadableAsyncKit, Readable);

inherits(ReadableParallel, ReadableAsyncKit);
inherits(ReadableSerial, ReadableAsyncKit);
inherits(ReadableSerialOrdered, ReadableAsyncKit);
