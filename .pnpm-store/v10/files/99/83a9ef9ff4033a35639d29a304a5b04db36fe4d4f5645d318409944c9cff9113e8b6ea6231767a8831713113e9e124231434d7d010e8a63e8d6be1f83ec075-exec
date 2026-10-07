'use strict';

const Stream = require('stream');

const Boom = require('@hapi/boom');


const internals = {};


module.exports = internals.Recorder = class extends Stream.Writable {

    constructor(options) {

        super();

        this.settings = options;                // No need to clone since called internally with new object
        this.buffers = [];
        this.length = 0;
    }

    _write(chunk, encoding, next) {

        if (this.settings.maxBytes &&
            this.length + chunk.length > this.settings.maxBytes) {

            return this.emit('error', Boom.entityTooLarge('Payload content length greater than maximum allowed: ' + this.settings.maxBytes));
        }

        this.length = this.length + chunk.length;
        this.buffers.push(chunk);
        next();
    }

    collect() {

        const buffer = (this.buffers.length === 0 ? Buffer.alloc(0) : (this.buffers.length === 1 ? this.buffers[0] : Buffer.concat(this.buffers, this.length)));
        return buffer;
    }
};
