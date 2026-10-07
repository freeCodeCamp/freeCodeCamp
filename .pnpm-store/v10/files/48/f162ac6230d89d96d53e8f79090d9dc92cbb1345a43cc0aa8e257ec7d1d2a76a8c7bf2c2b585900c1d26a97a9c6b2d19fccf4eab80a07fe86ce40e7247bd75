'use strict';

const Transform = require('stream').Transform;

class LastNewline extends Transform {
    constructor() {
        super();
        this.lastByte = false;
    }

    _transform(chunk, encoding, done) {
        if (chunk.length) {
            this.lastByte = chunk[chunk.length - 1];
        }

        this.push(chunk);
        done();
    }

    _flush(done) {
        if (this.lastByte === 0x0a) {
            return done();
        }
        if (this.lastByte === 0x0d) {
            this.push(Buffer.from('\n'));
            return done();
        }
        this.push(Buffer.from('\r\n'));
        return done();
    }
}

module.exports = LastNewline;
