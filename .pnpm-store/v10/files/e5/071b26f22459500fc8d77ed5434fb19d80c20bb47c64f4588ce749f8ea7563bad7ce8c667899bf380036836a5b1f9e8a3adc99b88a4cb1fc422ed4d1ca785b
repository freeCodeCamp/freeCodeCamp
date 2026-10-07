'use strict';

const assert = require('assert');
const { randomFillSync } = require('crypto');
const { inspect } = require('util');

const busboy = require('..');

const { mustCall } = require('./common.js');

const BOUNDARY = 'u2KxIV5yF1y+xUspOQCCZopaVgeV6Jxihv35XQJmuTx8X3sh';

function formDataSection(key, value) {
  return Buffer.from(
    `\r\n--${BOUNDARY}`
      + `\r\nContent-Disposition: form-data; name="${key}"`
      + `\r\n\r\n${value}`
  );
}

function formDataFile(key, filename, contentType) {
  const buf = Buffer.allocUnsafe(100000);
  return Buffer.concat([
    Buffer.from(`\r\n--${BOUNDARY}\r\n`),
    Buffer.from(`Content-Disposition: form-data; name="${key}"`
                  + `; filename="${filename}"\r\n`),
    Buffer.from(`Content-Type: ${contentType}\r\n\r\n`),
    randomFillSync(buf)
  ]);
}

const reqChunks = [
  Buffer.concat([
    formDataFile('file', 'file.bin', 'application/octet-stream'),
    formDataSection('foo', 'foo value'),
  ]),
  formDataSection('bar', 'bar value'),
  Buffer.from(`\r\n--${BOUNDARY}--\r\n`)
];
const bb = busboy({
  headers: {
    'content-type': `multipart/form-data; boundary=${BOUNDARY}`
  }
});
const expected = [
  { type: 'file',
    name: 'file',
    info: {
      filename: 'file.bin',
      encoding: '7bit',
      mimeType: 'application/octet-stream',
    },
  },
  { type: 'field',
    name: 'foo',
    val: 'foo value',
    info: {
      nameTruncated: false,
      valueTruncated: false,
      encoding: '7bit',
      mimeType: 'text/plain',
    },
  },
  { type: 'field',
    name: 'bar',
    val: 'bar value',
    info: {
      nameTruncated: false,
      valueTruncated: false,
      encoding: '7bit',
      mimeType: 'text/plain',
    },
  },
];
const results = [];

bb.on('field', (name, val, info) => {
  results.push({ type: 'field', name, val, info });
});

bb.on('file', (name, stream, info) => {
  results.push({ type: 'file', name, info });
  // Simulate a pipe where the destination is pausing (perhaps due to waiting
  // for file system write to finish)
  setTimeout(() => {
    stream.resume();
  }, 10);
});

bb.on('close', mustCall(() => {
  assert.deepStrictEqual(
    results,
    expected,
    'Results mismatch.\n'
      + `Parsed: ${inspect(results)}\n`
      + `Expected: ${inspect(expected)}`
  );
}));

for (const chunk of reqChunks)
  bb.write(chunk);
bb.end();
