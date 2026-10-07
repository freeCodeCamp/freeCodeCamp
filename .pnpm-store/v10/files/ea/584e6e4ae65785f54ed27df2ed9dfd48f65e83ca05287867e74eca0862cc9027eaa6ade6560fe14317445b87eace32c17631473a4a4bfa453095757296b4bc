'use strict';

var STREAM = require('stream'),
    UTIL = require('util'),
    StringDecoder = require('string_decoder').StringDecoder;

function MemoryReadableStream(data, options) {
    if (!(this instanceof MemoryReadableStream))
        return new MemoryReadableStream(data, options);
    MemoryReadableStream.super_.call(this, options);
    this.init(data, options);
}
UTIL.inherits(MemoryReadableStream, STREAM.Readable);


function MemoryWritableStream(data, options) {
    if (!(this instanceof MemoryWritableStream))
        return new MemoryWritableStream(data, options);
    MemoryWritableStream.super_.call(this, options);
    this.init(data, options);
}
UTIL.inherits(MemoryWritableStream, STREAM.Writable);


function MemoryDuplexStream(data, options) {
    if (!(this instanceof MemoryDuplexStream))
        return new MemoryDuplexStream(data, options);
    MemoryDuplexStream.super_.call(this, options);
    this.init(data, options);
}
UTIL.inherits(MemoryDuplexStream, STREAM.Duplex);


MemoryReadableStream.prototype.init =
MemoryWritableStream.prototype.init =
MemoryDuplexStream.prototype.init = function init (data, options) {
    var self = this;
    this.queue = [];

    if (data) {
        if (!Array.isArray(data)) {
            data = [ data ];
        }

        data.forEach(function (chunk) {
            if (!(chunk instanceof Buffer)) {
                chunk = new Buffer(chunk);
            }
            self.queue.push(chunk);
        });

    }
    
    options = options || {};
    
    this.maxbufsize = options.hasOwnProperty('maxbufsize') ? options.maxbufsize
            : null;
    this.bufoverflow = options.hasOwnProperty('bufoverflow') ? options.bufoverflow
            : null;
    this.frequence = options.hasOwnProperty('frequence') ? options.frequence
            : null;
};

function MemoryStream (data, options) {
    if (!(this instanceof MemoryStream))
        return new MemoryStream(data, options);
    
    options = options || {};
    
    var readable = options.hasOwnProperty('readable') ? options.readable : true,
        writable = options.hasOwnProperty('writable') ? options.writable : true;
    
    if (readable && writable) {
        return new MemoryDuplexStream(data, options);
    } else if (readable) {
        return new MemoryReadableStream(data, options);
    } else if (writable) {
        return new MemoryWritableStream(data, options);
    } else {
        throw new Error("Unknown stream type  Readable, Writable or Duplex ");
    }
}


MemoryStream.createReadStream = function (data, options) {
    options = options || {};
    options.readable = true;
    options.writable = false;

    return new MemoryStream(data, options);
};


MemoryStream.createWriteStream = function (data, options) {
    options = options || {};
    options.readable = false;
    options.writable = true;

    return new MemoryStream(data, options);
};


MemoryReadableStream.prototype._read =
MemoryDuplexStream.prototype._read = function _read (n) {
    var self = this,
        frequence = self.frequence || 0,
        wait_data = this instanceof STREAM.Duplex && ! this._writableState.finished ? true : false;
    if ( ! this.queue.length && ! wait_data) {
        this.push(null);// finish stream
    } else if (this.queue.length) {
        setTimeout(function () {
            if (self.queue.length) {
                var chunk = self.queue.shift();
                if (chunk && ! self._readableState.ended) {
                    if ( ! self.push(chunk) ) {
                        self.queue.unshift(chunk);
                    }
                }
            }
        }, frequence);
    }
};


MemoryWritableStream.prototype._write =
MemoryDuplexStream.prototype._write = function _write (chunk, encoding, cb) {
    var decoder = null;
    try {
        decoder = this.decodeStrings && encoding ? new StringDecoder(encoding) : null;
    } catch (err){
        return cb(err);
    }
    
    var decoded_chunk = decoder ? decoder.write(chunk) : chunk,
        queue_size = this._getQueueSize(),
        chunk_size = decoded_chunk.length;
    
    if (this.maxbufsize && (queue_size + chunk_size) > this.maxbufsize ) {
        if (this.bufoverflow) {
            return cb("Buffer overflowed (" + this.bufoverflow + "/" + queue_size + ")");
        } else {
            return cb();
        }
    }
    
    if (this instanceof STREAM.Duplex) {
        while (this.queue.length) {
            this.push(this.queue.shift());
        }
        this.push(decoded_chunk);
    } else {
        this.queue.push(decoded_chunk);
    }
    cb();
};


MemoryDuplexStream.prototype.end = function (chunk, encoding, cb) {
    var self = this;
    return MemoryDuplexStream.super_.prototype.end.call(this, chunk, encoding, function () {
        self.push(null);//finish readble stream too
        if (cb) cb();
    });
};


MemoryReadableStream.prototype._getQueueSize =  
MemoryWritableStream.prototype._getQueueSize = 
MemoryDuplexStream.prototype._getQueueSize = function () {
    var queuesize = 0, i;
    for (i = 0; i < this.queue.length; i++) {
        queuesize += Array.isArray(this.queue[i]) ? this.queue[i][0].length
                : this.queue[i].length;
    }
    return queuesize;
};


MemoryWritableStream.prototype.toString = 
MemoryDuplexStream.prototype.toString = 
MemoryReadableStream.prototype.toString = 
MemoryWritableStream.prototype.getAll = 
MemoryDuplexStream.prototype.getAll = 
MemoryReadableStream.prototype.getAll = function () {
    var self = this,
        ret = '';
    this.queue.forEach(function (data) {
        ret += data;
    });
    return ret;
};


MemoryWritableStream.prototype.toBuffer = 
MemoryDuplexStream.prototype.toBuffer = 
MemoryReadableStream.prototype.toBuffer = function () {
    var buffer = new Buffer(this._getQueueSize()),
        currentOffset = 0;

    this.queue.forEach(function (data) {
        var data_buffer = data instanceof Buffer ? data : new Buffer(data);
        data_buffer.copy(buffer, currentOffset);
        currentOffset += data.length;
    });
    return buffer;
};


module.exports = MemoryStream;
