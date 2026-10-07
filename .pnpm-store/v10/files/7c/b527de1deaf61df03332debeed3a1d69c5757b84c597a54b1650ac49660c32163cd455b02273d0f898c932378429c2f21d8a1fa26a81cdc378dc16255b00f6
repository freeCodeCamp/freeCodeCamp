'use strict';

/*
 * Trivial convenience methods for parsing Buffers
 */

function asBuffer(body, options) {

  var ret;
  if (Buffer.isBuffer(body)) {
    ret = body;
  } else if (typeof body === 'object') {
    ret = new Buffer(JSON.stringify(body), options.reqBodyEncoding);
  } else if (typeof body === 'string') {
    ret = new Buffer(body, options.reqBodyEncoding);
  }
  return ret;
}

function asBufferOrString(body) {

  var ret;
  if (Buffer.isBuffer(body)) {
    ret = body;
  } else if (typeof body === 'object') {
    ret = JSON.stringify(body);
  } else if (typeof body === 'string') {
    ret = body;
  }
  return ret;
}

module.exports = {
  buffer: asBuffer,
  bufferOrString: asBufferOrString
};
