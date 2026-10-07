// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const fs = require('fs');

const LDD_PATH = '/usr/bin/ldd';
const SELF_PATH = '/proc/self/exe';
const MAX_LENGTH = 2048;

/**
 * Read the content of a file synchronous
 *
 * @param {string} path
 * @returns {Buffer}
 */
const readFileSync = (path) => {
  const fd = fs.openSync(path, 'r');
  const buffer = Buffer.alloc(MAX_LENGTH);
  const bytesRead = fs.readSync(fd, buffer, 0, MAX_LENGTH, 0);
  fs.close(fd, () => {});
  return buffer.subarray(0, bytesRead);
};

/**
 * Read the content of a file
 *
 * @param {string} path
 * @returns {Promise<Buffer>}
 */
const readFile = (path) => new Promise((resolve, reject) => {
  fs.open(path, 'r', (err, fd) => {
    if (err) {
      reject(err);
    } else {
      const buffer = Buffer.alloc(MAX_LENGTH);
      fs.read(fd, buffer, 0, MAX_LENGTH, 0, (_, bytesRead) => {
        resolve(buffer.subarray(0, bytesRead));
        fs.close(fd, () => {});
      });
    }
  });
});

module.exports = {
  LDD_PATH,
  SELF_PATH,
  readFileSync,
  readFile
};
