'use strict';

const assert = require('assert');

const StreamSearch = require('../lib/sbmh.js');

[
  {
    needle: '\r\n',
    chunks: [
      'foo',
      ' bar',
      '\r',
      '\n',
      'baz, hello\r',
      '\n world.',
      '\r\n Node.JS rules!!\r\n\r\n',
    ],
    expect: [
      [false, 'foo'],
      [false, ' bar'],
      [ true, null],
      [false, 'baz, hello'],
      [ true, null],
      [false, ' world.'],
      [ true, null],
      [ true, ' Node.JS rules!!'],
      [ true, ''],
    ],
  },
  {
    needle: '---foobarbaz',
    chunks: [
      '---foobarbaz',
      'asdf',
      '\r\n',
      '---foobarba',
      '---foobar',
      'ba',
      '\r\n---foobarbaz--\r\n',
    ],
    expect: [
      [ true, null],
      [false, 'asdf'],
      [false, '\r\n'],
      [false, '---foobarba'],
      [false, '---foobarba'],
      [ true, '\r\n'],
      [false, '--\r\n'],
    ],
  },
].forEach((test, i) => {
  console.log(`Running test #${i + 1}`);
  const { needle, chunks, expect } = test;

  const results = [];
  const ss = new StreamSearch(Buffer.from(needle),
                              (isMatch, data, start, end) => {
    if (data)
      data = data.toString('latin1', start, end);
    else
      data = null;
    results.push([isMatch, data]);
  });

  for (const chunk of chunks)
    ss.push(Buffer.from(chunk));

  assert.deepStrictEqual(results, expect);
});
