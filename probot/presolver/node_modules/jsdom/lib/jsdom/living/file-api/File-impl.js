"use strict";

const BlobImpl = require("./Blob-impl").implementation;

exports.implementation = class FileImpl extends BlobImpl {
  constructor(args, privateData) {
    const fileBits = args[0];
    const fileName = args[1];
    const options = args[2];
    super([fileBits, options], privateData);

    this.name = fileName.replace(/\//g, ":");
    this.lastModified = "lastModified" in options ? options.lastModified : Date.now();
  }
};
