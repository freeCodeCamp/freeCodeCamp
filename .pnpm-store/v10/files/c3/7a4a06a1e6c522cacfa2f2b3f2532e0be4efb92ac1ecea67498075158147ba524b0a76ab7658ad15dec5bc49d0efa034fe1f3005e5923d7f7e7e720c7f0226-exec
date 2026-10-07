'use strict';

const Stream = require('stream');


const internals = {};


module.exports = internals.Payload = class extends Stream.Readable {

    constructor(payload, encoding) {

        super();

        const data = [].concat(payload || '');
        let size = 0;
        for (let i = 0; i < data.length; ++i) {
            const chunk = data[i];
            size = size + chunk.length;
            data[i] = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        }

        this._data = Buffer.concat(data, size);
        this._position = 0;
        this._encoding = encoding || 'utf8';
    }

    _read(size) {

        const chunk = this._data.slice(this._position, this._position + size);
        this.push(chunk, this._encoding);
        this._position = this._position + chunk.length;

        if (this._position >= this._data.length) {
            this.push(null);
        }
    }
};
