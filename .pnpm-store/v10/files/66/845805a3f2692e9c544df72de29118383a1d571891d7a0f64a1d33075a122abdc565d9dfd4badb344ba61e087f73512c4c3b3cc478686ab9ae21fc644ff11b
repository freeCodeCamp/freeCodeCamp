"use strict";
// imported from https://github.com/socketio/engine.io-parser/tree/2.2.x
Object.defineProperty(exports, "__esModule", { value: true });
exports.packets = exports.protocol = void 0;
exports.encodePacket = encodePacket;
exports.encodeBase64Packet = encodeBase64Packet;
exports.decodePacket = decodePacket;
exports.decodeBase64Packet = decodeBase64Packet;
exports.encodePayload = encodePayload;
exports.decodePayload = decodePayload;
exports.encodePayloadAsBinary = encodePayloadAsBinary;
exports.decodePayloadAsBinary = decodePayloadAsBinary;
/**
 * Module dependencies.
 */
var utf8 = require('./utf8');
/**
 * Current protocol version.
 */
exports.protocol = 3;
const hasBinary = (packets) => {
    for (const packet of packets) {
        if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
            return true;
        }
    }
    return false;
};
/**
 * Packet types.
 */
exports.packets = {
    open: 0 // non-ws
    ,
    close: 1 // non-ws
    ,
    ping: 2,
    pong: 3,
    message: 4,
    upgrade: 5,
    noop: 6
};
var packetslist = Object.keys(exports.packets);
/**
 * Premade error packet.
 */
var err = { type: 'error', data: 'parser error' };
const EMPTY_BUFFER = Buffer.concat([]);
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */
function encodePacket(packet, supportsBinary, utf8encode, callback) {
    if (typeof supportsBinary === 'function') {
        callback = supportsBinary;
        supportsBinary = null;
    }
    if (typeof utf8encode === 'function') {
        callback = utf8encode;
        utf8encode = null;
    }
    if (Buffer.isBuffer(packet.data)) {
        return encodeBuffer(packet, supportsBinary, callback);
    }
    else if (packet.data && (packet.data.buffer || packet.data) instanceof ArrayBuffer) {
        return encodeBuffer({ type: packet.type, data: arrayBufferToBuffer(packet.data) }, supportsBinary, callback);
    }
    // Sending data as a utf-8 string
    var encoded = exports.packets[packet.type];
    // data fragment is optional
    if (undefined !== packet.data) {
        encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
    }
    return callback('' + encoded);
}
/**
 * Encode Buffer data
 */
function encodeBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
        return encodeBase64Packet(packet, callback);
    }
    var data = packet.data;
    var typeBuffer = Buffer.allocUnsafe(1);
    typeBuffer[0] = exports.packets[packet.type];
    return callback(Buffer.concat([typeBuffer, data]));
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */
function encodeBase64Packet(packet, callback) {
    var data = Buffer.isBuffer(packet.data) ? packet.data : arrayBufferToBuffer(packet.data);
    var message = 'b' + exports.packets[packet.type];
    message += data.toString('base64');
    return callback(message);
}
;
/**
 * Decodes a packet. Data also available as an ArrayBuffer if requested.
 *
 * @return {import('engine.io-parser').Packet} with `type` and `data` (if any)
 * @api private
 */
function decodePacket(data, binaryType, utf8decode) {
    if (data === undefined) {
        return err;
    }
    let type;
    // String data
    if (typeof data === 'string') {
        type = data.charAt(0);
        if (type === 'b') {
            return decodeBase64Packet(data.slice(1), binaryType);
        }
        if (utf8decode) {
            data = tryDecode(data);
            if (data === false) {
                return err;
            }
        }
        // @ts-expect-error
        if (Number(type) != type || !packetslist[type]) {
            return err;
        }
        if (data.length > 1) {
            return { type: packetslist[type], data: data.slice(1) };
        }
        else {
            return { type: packetslist[type] };
        }
    }
    // Binary data
    if (binaryType === 'arraybuffer') {
        // wrap Buffer/ArrayBuffer data into an Uint8Array
        var intArray = new Uint8Array(data);
        type = intArray[0];
        return { type: packetslist[type], data: intArray.buffer.slice(1) };
    }
    if (data instanceof ArrayBuffer) {
        data = arrayBufferToBuffer(data);
    }
    type = data[0];
    return { type: packetslist[type], data: data.slice(1) };
}
;
function tryDecode(data) {
    try {
        data = utf8.decode(data, { strict: false });
    }
    catch (e) {
        return false;
    }
    return data;
}
/**
 * Decodes a packet encoded in a base64 string.
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */
function decodeBase64Packet(msg, binaryType) {
    var type = packetslist[msg.charAt(0)];
    var data = Buffer.from(msg.slice(1), 'base64');
    if (binaryType === 'arraybuffer') {
        var abv = new Uint8Array(data.length);
        for (var i = 0; i < abv.length; i++) {
            abv[i] = data[i];
        }
        // @ts-ignore
        data = abv.buffer;
    }
    return { type: type, data: data };
}
;
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */
function encodePayload(packets, supportsBinary, callback) {
    if (typeof supportsBinary === 'function') {
        callback = supportsBinary;
        supportsBinary = null;
    }
    if (supportsBinary && hasBinary(packets)) {
        return encodePayloadAsBinary(packets, callback);
    }
    if (!packets.length) {
        return callback('0:');
    }
    function encodeOne(packet, doneCallback) {
        encodePacket(packet, supportsBinary, false, function (message) {
            doneCallback(null, setLengthHeader(message));
        });
    }
    map(packets, encodeOne, function (err, results) {
        return callback(results.join(''));
    });
}
;
function setLengthHeader(message) {
    return message.length + ':' + message;
}
/**
 * Async array map using after
 */
function map(ary, each, done) {
    const results = new Array(ary.length);
    let count = 0;
    for (let i = 0; i < ary.length; i++) {
        each(ary[i], (error, msg) => {
            results[i] = msg;
            if (++count === ary.length) {
                done(null, results);
            }
        });
    }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */
function decodePayload(data, binaryType, callback) {
    if (typeof data !== 'string') {
        return decodePayloadAsBinary(data, binaryType, callback);
    }
    if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
    }
    if (data === '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
    }
    var length = '', n, msg, packet;
    for (var i = 0, l = data.length; i < l; i++) {
        var chr = data.charAt(i);
        if (chr !== ':') {
            length += chr;
            continue;
        }
        // @ts-ignore
        if (length === '' || (length != (n = Number(length)))) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
        }
        msg = data.slice(i + 1, i + 1 + n);
        if (length != msg.length) {
            // parser error - ignoring payload
            return callback(err, 0, 1);
        }
        if (msg.length) {
            packet = decodePacket(msg, binaryType, false);
            if (err.type === packet.type && err.data === packet.data) {
                // parser error in individual packet - ignoring payload
                return callback(err, 0, 1);
            }
            var more = callback(packet, i + n, l);
            if (false === more)
                return;
        }
        // advance cursor
        i += n;
        length = '';
    }
    if (length !== '') {
        // parser error - ignoring payload
        return callback(err, 0, 1);
    }
}
;
/**
 *
 * Converts a buffer to a utf8.js encoded string
 *
 * @api private
 */
function bufferToString(buffer) {
    var str = '';
    for (var i = 0, l = buffer.length; i < l; i++) {
        str += String.fromCharCode(buffer[i]);
    }
    return str;
}
/**
 *
 * Converts a utf8.js encoded string to a buffer
 *
 * @api private
 */
function stringToBuffer(string) {
    var buf = Buffer.allocUnsafe(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
        buf.writeUInt8(string.charCodeAt(i), i);
    }
    return buf;
}
/**
 *
 * Converts an ArrayBuffer to a Buffer
 *
 * @api private
 */
function arrayBufferToBuffer(data) {
    // data is either an ArrayBuffer or ArrayBufferView.
    var length = data.byteLength || data.length;
    var offset = data.byteOffset || 0;
    return Buffer.from(data.buffer || data, offset, length);
}
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {Buffer} encoded payload
 * @api private
 */
function encodePayloadAsBinary(packets, callback) {
    if (!packets.length) {
        return callback(EMPTY_BUFFER);
    }
    map(packets, encodeOneBinaryPacket, function (err, results) {
        return callback(Buffer.concat(results));
    });
}
;
function encodeOneBinaryPacket(p, doneCallback) {
    function onBinaryPacketEncode(packet) {
        var encodingLength = '' + packet.length;
        var sizeBuffer;
        if (typeof packet === 'string') {
            sizeBuffer = Buffer.allocUnsafe(encodingLength.length + 2);
            sizeBuffer[0] = 0; // is a string (not true binary = 0)
            for (var i = 0; i < encodingLength.length; i++) {
                sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
            }
            sizeBuffer[sizeBuffer.length - 1] = 255;
            return doneCallback(null, Buffer.concat([sizeBuffer, stringToBuffer(packet)]));
        }
        sizeBuffer = Buffer.allocUnsafe(encodingLength.length + 2);
        sizeBuffer[0] = 1; // is binary (true binary = 1)
        for (var i = 0; i < encodingLength.length; i++) {
            sizeBuffer[i + 1] = parseInt(encodingLength[i], 10);
        }
        sizeBuffer[sizeBuffer.length - 1] = 255;
        doneCallback(null, Buffer.concat([sizeBuffer, packet]));
    }
    encodePacket(p, true, true, onBinaryPacketEncode);
}
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary

 * @param {Buffer} data, callback method
 * @api public
 */
function decodePayloadAsBinary(data, binaryType, callback) {
    if (typeof binaryType === 'function') {
        callback = binaryType;
        binaryType = null;
    }
    var bufferTail = data;
    var buffers = [];
    var i;
    while (bufferTail.length > 0) {
        var strLen = '';
        var isString = bufferTail[0] === 0;
        for (i = 1;; i++) {
            if (bufferTail[i] === 255)
                break;
            // 310 = char length of Number.MAX_VALUE
            if (strLen.length > 310) {
                return callback(err, 0, 1);
            }
            strLen += '' + bufferTail[i];
        }
        bufferTail = bufferTail.slice(strLen.length + 1);
        var msgLength = parseInt(strLen, 10);
        var msg = bufferTail.slice(1, msgLength + 1);
        if (isString)
            msg = bufferToString(msg);
        buffers.push(msg);
        bufferTail = bufferTail.slice(msgLength + 1);
    }
    var total = buffers.length;
    for (i = 0; i < total; i++) {
        var buffer = buffers[i];
        callback(decodePacket(buffer, binaryType, true), i, total);
    }
}
;
