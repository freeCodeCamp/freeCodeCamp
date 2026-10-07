'use strict';

const assert = require('assert');
const { transcode } = require('buffer');
const { inspect } = require('util');

const busboy = require('..');

const active = new Map();

const tests = [
  { source: ['foo'],
    expected: [
      ['foo',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Unassigned value'
  },
  { source: ['foo=bar'],
    expected: [
      ['foo',
       'bar',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned value'
  },
  { source: ['foo&bar=baz'],
    expected: [
      ['foo',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['bar',
       'baz',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Unassigned and assigned value'
  },
  { source: ['foo=bar&baz'],
    expected: [
      ['foo',
       'bar',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['baz',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned and unassigned value'
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['foo',
       'bar',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['baz',
       'bla',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Two assigned values'
  },
  { source: ['foo&bar'],
    expected: [
      ['foo',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['bar',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Two unassigned values'
  },
  { source: ['foo&bar&'],
    expected: [
      ['foo',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['bar',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Two unassigned values and ampersand'
  },
  { source: ['foo+1=bar+baz%2Bquux'],
    expected: [
      ['foo 1',
       'bar baz+quux',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned key and value with (plus) space'
  },
  { source: ['foo=bar%20baz%21'],
    expected: [
      ['foo',
       'bar baz!',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned value with encoded bytes'
  },
  { source: ['foo%20bar=baz%20bla%21'],
    expected: [
      ['foo bar',
       'baz bla!',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned value with encoded bytes #2'
  },
  { source: ['foo=bar%20baz%21&num=1000'],
    expected: [
      ['foo',
       'bar baz!',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['num',
       '1000',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Two assigned values, one with encoded bytes'
  },
  { source: [
      Array.from(transcode(Buffer.from('foo'), 'utf8', 'utf16le')).map(
        (n) => `%${n.toString(16).padStart(2, '0')}`
      ).join(''),
      '=',
      Array.from(transcode(Buffer.from('😀!'), 'utf8', 'utf16le')).map(
        (n) => `%${n.toString(16).padStart(2, '0')}`
      ).join(''),
    ],
    expected: [
      ['foo',
       '😀!',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'UTF-16LE',
         mimeType: 'text/plain' },
      ],
    ],
    charset: 'UTF-16LE',
    what: 'Encoded value with multi-byte charset'
  },
  { source: [
      'foo=<',
      Array.from(transcode(Buffer.from('©:^þ'), 'utf8', 'latin1')).map(
        (n) => `%${n.toString(16).padStart(2, '0')}`
      ).join(''),
    ],
    expected: [
      ['foo',
       '<©:^þ',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'ISO-8859-1',
         mimeType: 'text/plain' },
      ],
    ],
    charset: 'ISO-8859-1',
    what: 'Encoded value with single-byte, ASCII-compatible, non-UTF8 charset'
  },
  { source: ['foo=bar&baz=bla'],
    expected: [],
    what: 'Limits: zero fields',
    limits: { fields: 0 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['foo',
       'bar',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: one field',
    limits: { fields: 1 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['foo',
       'bar',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['baz',
       'bla',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: field part lengths match limits',
    limits: { fieldNameSize: 3, fieldSize: 3 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['fo',
       'bar',
       { nameTruncated: true,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['ba',
       'bla',
       { nameTruncated: true,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: truncated field name',
    limits: { fieldNameSize: 2 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['foo',
       'ba',
       { nameTruncated: false,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['baz',
       'bl',
       { nameTruncated: false,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: truncated field value',
    limits: { fieldSize: 2 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['fo',
       'ba',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['ba',
       'bl',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: truncated field name and value',
    limits: { fieldNameSize: 2, fieldSize: 2 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['fo',
       '',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['ba',
       '',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: truncated field name and zero value limit',
    limits: { fieldNameSize: 2, fieldSize: 0 }
  },
  { source: ['foo=bar&baz=bla'],
    expected: [
      ['',
       '',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
      ['',
       '',
       { nameTruncated: true,
         valueTruncated: true,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Limits: truncated zero field name and zero value limit',
    limits: { fieldNameSize: 0, fieldSize: 0 }
  },
  { source: ['&'],
    expected: [],
    what: 'Ampersand'
  },
  { source: ['&&&&&'],
    expected: [],
    what: 'Many ampersands'
  },
  { source: ['='],
    expected: [
      ['',
       '',
       { nameTruncated: false,
         valueTruncated: false,
         encoding: 'utf-8',
         mimeType: 'text/plain' },
      ],
    ],
    what: 'Assigned value, empty name and value'
  },
  { source: [''],
    expected: [],
    what: 'Nothing'
  },
];

for (const test of tests) {
  active.set(test, 1);

  const { what } = test;
  const charset = test.charset || 'utf-8';
  const bb = busboy({
    limits: test.limits,
    headers: {
      'content-type': `application/x-www-form-urlencoded; charset=${charset}`,
    },
  });
  const results = [];

  bb.on('field', (key, val, info) => {
    results.push([key, val, info]);
  });

  bb.on('file', () => {
    throw new Error(`[${what}] Unexpected file`);
  });

  bb.on('close', () => {
    active.delete(test);

    assert.deepStrictEqual(
      results,
      test.expected,
      `[${what}] Results mismatch.\n`
        + `Parsed: ${inspect(results)}\n`
        + `Expected: ${inspect(test.expected)}`
    );
  });

  for (const src of test.source) {
    const buf = (typeof src === 'string' ? Buffer.from(src, 'utf8') : src);
    bb.write(buf);
  }
  bb.end();
}

// Byte-by-byte versions
for (let test of tests) {
  test = { ...test };
  test.what += ' (byte-by-byte)';
  active.set(test, 1);

  const { what } = test;
  const charset = test.charset || 'utf-8';
  const bb = busboy({
    limits: test.limits,
    headers: {
      'content-type': `application/x-www-form-urlencoded; charset="${charset}"`,
    },
  });
  const results = [];

  bb.on('field', (key, val, info) => {
    results.push([key, val, info]);
  });

  bb.on('file', () => {
    throw new Error(`[${what}] Unexpected file`);
  });

  bb.on('close', () => {
    active.delete(test);

    assert.deepStrictEqual(
      results,
      test.expected,
      `[${what}] Results mismatch.\n`
        + `Parsed: ${inspect(results)}\n`
        + `Expected: ${inspect(test.expected)}`
    );
  });

  for (const src of test.source) {
    const buf = (typeof src === 'string' ? Buffer.from(src, 'utf8') : src);
    for (let i = 0; i < buf.length; ++i)
      bb.write(buf.slice(i, i + 1));
  }
  bb.end();
}

{
  let exception = false;
  process.once('uncaughtException', (ex) => {
    exception = true;
    throw ex;
  });
  process.on('exit', () => {
    if (exception || active.size === 0)
      return;
    process.exitCode = 1;
    console.error('==========================');
    console.error(`${active.size} test(s) did not finish:`);
    console.error('==========================');
    console.error(Array.from(active.keys()).map((v) => v.what).join('\n'));
  });
}
