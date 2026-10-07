'use strict';

const assert = require('assert');
const { inspect } = require('util');

const { mustCall } = require(`${__dirname}/common.js`);

const busboy = require('..');

const input = Buffer.from([
  '-----------------------------paZqsnEHRufoShdX6fh0lUhXBP4k',
 'Content-Disposition: form-data; '
   + 'name="upload_file_0"; filename="テスト.dat"',
 'Content-Type: application/octet-stream',
 '',
 'A'.repeat(1023),
 '-----------------------------paZqsnEHRufoShdX6fh0lUhXBP4k--'
].join('\r\n'));
const boundary = '---------------------------paZqsnEHRufoShdX6fh0lUhXBP4k';
const expected = [
  { type: 'file',
    name: 'upload_file_0',
    data: Buffer.from('A'.repeat(1023)),
    info: {
      filename: 'テスト.dat',
      encoding: '7bit',
      mimeType: 'application/octet-stream',
    },
    limited: false,
  },
];
const bb = busboy({
  defParamCharset: 'utf8',
  headers: {
    'content-type': `multipart/form-data; boundary=${boundary}`,
  }
});
const results = [];

bb.on('field', (name, val, info) => {
  results.push({ type: 'field', name, val, info });
});

bb.on('file', (name, stream, info) => {
  const data = [];
  let nb = 0;
  const file = {
    type: 'file',
    name,
    data: null,
    info,
    limited: false,
  };
  results.push(file);
  stream.on('data', (d) => {
    data.push(d);
    nb += d.length;
  }).on('limit', () => {
    file.limited = true;
  }).on('close', () => {
    file.data = Buffer.concat(data, nb);
    assert.strictEqual(stream.truncated, file.limited);
  }).once('error', (err) => {
    file.err = err.message;
  });
});

bb.on('error', (err) => {
  results.push({ error: err.message });
});

bb.on('partsLimit', () => {
  results.push('partsLimit');
});

bb.on('filesLimit', () => {
  results.push('filesLimit');
});

bb.on('fieldsLimit', () => {
  results.push('fieldsLimit');
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

bb.end(input);
