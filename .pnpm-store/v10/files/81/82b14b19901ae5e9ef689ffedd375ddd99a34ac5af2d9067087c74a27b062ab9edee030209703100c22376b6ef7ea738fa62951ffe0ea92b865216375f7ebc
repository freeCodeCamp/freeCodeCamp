'use strict';

// streams through a message body and calculates relaxed body hash

const Transform = require('stream').Transform;
const crypto = require('crypto');

class RelaxedBody extends Transform {
    constructor(options) {
        super();
        options = options || {};
        this.chunkBuffer = [];
        this.chunkBufferLen = 0;
        this.bodyHash = crypto.createHash(options.hashAlgo || 'sha1');
        this.remainder = '';
        this.byteLength = 0;

        this.debug = options.debug;
        this._debugBody = options.debug ? [] : false;
    }

    updateHash(chunk) {
        let bodyStr;

        // find next remainder
        let nextRemainder = '';

        // This crux finds and removes the spaces from the last line and the newline characters after the last non-empty line
        // If we get another chunk that does not match this description then we can restore the previously processed data
        let state = 'file';
        for (let i = chunk.length - 1; i >= 0; i--) {
            let c = chunk[i];

            if (state === 'file' && (c === 0x0a || c === 0x0d)) {
                // do nothing, found \n or \r at the end of chunk, stil end of file
            } else if (state === 'file' && (c === 0x09 || c === 0x20)) {
                // switch to line ending mode, this is the last non-empty line
                state = 'line';
            } else if (state === 'line' && (c === 0x09 || c === 0x20)) {
                // do nothing, found ' ' or \t at the end of line, keep processing the last non-empty line
            } else if (state === 'file' || state === 'line') {
                // non line/file ending character found, switch to body mode
                state = 'body';
                if (i === chunk.length - 1) {
                    // final char is not part of line end or file end, so do nothing
                    break;
                }
            }

            if (i === 0) {
                // reached to the beginning of the chunk, check if it is still about the ending
                // and if the remainder also matches
                if (
                    (state === 'file' && (!this.remainder || /[\r\n]$/.test(this.remainder))) ||
                    (state === 'line' && (!this.remainder || /[ \t]$/.test(this.remainder)))
                ) {
                    // keep everything
                    this.remainder += chunk.toString('binary');
                    return;
                } else if (state === 'line' || state === 'file') {
                    // process existing remainder as normal line but store the current chunk
                    nextRemainder = chunk.toString('binary');
                    chunk = false;
                    break;
                }
            }

            if (state !== 'body') {
                continue;
            }

            // reached first non ending byte
            nextRemainder = chunk.slice(i + 1).toString('binary');
            chunk = chunk.slice(0, i + 1);
            break;
        }

        let needsFixing = !!this.remainder;
        if (chunk && !needsFixing) {
            // check if we even need to change anything
            for (let i = 0, len = chunk.length; i < len; i++) {
                if (i && chunk[i] === 0x0a && chunk[i - 1] !== 0x0d) {
                    // missing \r before \n
                    needsFixing = true;
                    break;
                } else if (i && chunk[i] === 0x0d && chunk[i - 1] === 0x20) {
                    // trailing WSP found
                    needsFixing = true;
                    break;
                } else if (i && chunk[i] === 0x20 && chunk[i - 1] === 0x20) {
                    // multiple spaces found, needs to be replaced with just one
                    needsFixing = true;
                    break;
                } else if (chunk[i] === 0x09) {
                    // TAB found, needs to be replaced with a space
                    needsFixing = true;
                    break;
                }
            }
        }

        if (needsFixing) {
            bodyStr = this.remainder + (chunk ? chunk.toString('binary') : '');
            this.remainder = nextRemainder;
            bodyStr = bodyStr
                .replace(/\r?\n/g, '\n') // use js line endings
                .replace(/[ \t]*$/gm, '') // remove line endings, rtrim
                .replace(/[ \t]+/gm, ' ') // single spaces
                .replace(/\n/g, '\r\n'); // restore rfc822 line endings
            chunk = Buffer.from(bodyStr, 'binary');
        } else if (nextRemainder) {
            this.remainder = nextRemainder;
        }

        if (this.debug) {
            this._debugBody.push(chunk);
        }
        this.bodyHash.update(chunk);
    }

    _transform(chunk, encoding, callback) {
        if (!chunk || !chunk.length) {
            return callback();
        }

        if (typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
        }

        this.updateHash(chunk);

        this.byteLength += chunk.length;
        this.push(chunk);
        callback();
    }

    _flush(callback) {
        // generate final hash and emit it
        if (/[\r\n]$/.test(this.remainder) && this.byteLength > 2) {
            // add terminating line end
            this.bodyHash.update(Buffer.from('\r\n'));
        }
        if (!this.byteLength) {
            // emit empty line buffer to keep the stream flowing
            this.push(Buffer.from('\r\n'));
            // this.bodyHash.update(Buffer.from('\r\n'));
        }

        this.emit('hash', this.bodyHash.digest('base64'), this.debug ? Buffer.concat(this._debugBody) : false);
        callback();
    }
}

module.exports = RelaxedBody;
