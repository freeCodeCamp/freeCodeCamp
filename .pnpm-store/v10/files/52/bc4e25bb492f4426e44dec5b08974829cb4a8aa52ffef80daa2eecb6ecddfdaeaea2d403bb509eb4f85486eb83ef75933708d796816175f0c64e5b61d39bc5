'use strict';
const stream = require('stream');
const tls = require('tls');

// Really awesome hack.
const JSStreamSocket = (new tls.TLSSocket(new stream.PassThrough()))._handle._parentWrap.constructor;

module.exports = JSStreamSocket;
