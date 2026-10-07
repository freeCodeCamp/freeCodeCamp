'use strict';

const BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
const hasBlob = typeof Blob !== 'undefined';

if (hasBlob) BINARY_TYPES.push('blob');

module.exports = {
  BINARY_TYPES,
  CLOSE_TIMEOUT: 30000,
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  hasBlob,
  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
  kListener: Symbol('kListener'),
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  NOOP: () => {}
};
