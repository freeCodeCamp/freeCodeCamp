"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiveBuffer = void 0;
class ReceiveBuffer {
    constructor(size = 4096) {
        this.buffer = Buffer.allocUnsafe(size);
        this.offset = 0;
        this.originalSize = size;
    }
    get length() {
        return this.offset;
    }
    append(data) {
        if (!Buffer.isBuffer(data)) {
            throw new Error('Attempted to append a non-buffer instance to ReceiveBuffer.');
        }
        if (this.offset + data.length >= this.buffer.length) {
            const tmp = this.buffer;
            this.buffer = Buffer.allocUnsafe(Math.max(this.buffer.length + this.originalSize, this.buffer.length + data.length));
            tmp.copy(this.buffer);
        }
        data.copy(this.buffer, this.offset);
        return (this.offset += data.length);
    }
    peek(length) {
        if (length > this.offset) {
            throw new Error('Attempted to read beyond the bounds of the managed internal data.');
        }
        return this.buffer.slice(0, length);
    }
    get(length) {
        if (length > this.offset) {
            throw new Error('Attempted to read beyond the bounds of the managed internal data.');
        }
        const value = Buffer.allocUnsafe(length);
        this.buffer.slice(0, length).copy(value);
        this.buffer.copyWithin(0, length, length + this.offset - length);
        this.offset -= length;
        return value;
    }
}
exports.ReceiveBuffer = ReceiveBuffer;
//# sourceMappingURL=receivebuffer.js.map