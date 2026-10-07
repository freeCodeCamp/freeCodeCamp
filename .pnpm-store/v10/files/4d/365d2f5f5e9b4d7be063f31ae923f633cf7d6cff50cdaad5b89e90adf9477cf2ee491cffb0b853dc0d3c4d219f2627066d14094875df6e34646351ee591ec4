"use strict";

const BlobImpl = require("./Blob-impl").implementation;

exports.implementation = class FileImpl extends BlobImpl {
  constructor(globalObject, [fileBits, fileName, options], privateData) {
    super(globalObject, [fileBits, options], privateData);

    this.name = fileName;
    this.lastModified = "lastModified" in options ? options.lastModified : Date.now();
  }
};
