"use strict";
const { EOL } = require("os");
const Blob = require("../generated/Blob");

function convertLineEndingsToNative(s) {
  return s.replace(/\r\n|\r|\n/g, EOL);
}

exports.implementation = class BlobImpl {
  constructor(args) {
    const parts = args[0];
    const properties = args[1];

    const buffers = [];

    if (parts !== undefined) {
      for (const part of parts) {
        let buffer;
        if (part instanceof ArrayBuffer) {
          buffer = Buffer.from(part);
        } else if (ArrayBuffer.isView(part)) {
          buffer = Buffer.from(part.buffer, part.byteOffset, part.byteLength);
        } else if (Blob.isImpl(part)) {
          buffer = part._buffer;
        } else {
          let s = part;
          if (properties.endings === "native") {
            s = convertLineEndingsToNative(part);
          }
          buffer = Buffer.from(s);
        }
        buffers.push(buffer);
      }
    }

    this._buffer = Buffer.concat(buffers);

    this.type = properties.type;
    if (/[^\u0020-\u007E]/.test(this.type)) {
      this.type = "";
    } else {
      this.type = this.type.toLowerCase();
    }
  }

  get size() {
    return this._buffer.length;
  }

  slice(start, end, contentType) {
    const { size } = this;

    let relativeStart;
    let relativeEnd;
    let relativeContentType;

    if (start === undefined) {
      relativeStart = 0;
    } else if (start < 0) {
      relativeStart = Math.max(size + start, 0);
    } else {
      relativeStart = Math.min(start, size);
    }
    if (end === undefined) {
      relativeEnd = size;
    } else if (end < 0) {
      relativeEnd = Math.max(size + end, 0);
    } else {
      relativeEnd = Math.min(end, size);
    }

    if (contentType === undefined) {
      relativeContentType = "";
    } else {
      // sanitization (lower case and invalid char check) is done in the
      // constructor
      relativeContentType = contentType;
    }

    const span = Math.max(relativeEnd - relativeStart, 0);

    const buffer = this._buffer;
    const slicedBuffer = buffer.slice(
      relativeStart,
      relativeStart + span
    );

    const blob = Blob.createImpl([[], { type: relativeContentType }], {});
    blob._buffer = slicedBuffer;
    return blob;
  }
};
