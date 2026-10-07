import crlf, { Ending } from '../../src/transforms/crlf.js';
import getParser, { Parser } from '../../src/parser/index.js';
import getStringifier, { Stringifier } from '../../src/stringifier/index.js';

const tests = [
  [
    'no CR',
    'CRLF',
    `
    /**
     * description
     *
     */`,
    `
    /**\r
     * description\r
     *\r
     */\r`,
  ],
  [
    'mixed',
    'CRLF',
    `
    /**
     * description
     *\r
     */`,
    `
    /**\r
     * description\r
     *\r
     */\r`,
  ],
  [
    'no CR',
    'LF',
    `
    /**
     * description
     *
     */`,
    `
    /**
     * description
     *
     */`,
  ],
  [
    'mixed',
    'LF',
    `
    /**
     * description
     *\r
     */`,
    `
    /**
     * description
     *
     */`,
  ],
];

test.each(tests)('CRLF - %s to %s', (name, mode, source, expected) => {
  expected = expected.slice(1);
  const parsed = getParser()(source);
  const normalized = crlf(mode as Ending)(parsed[0]);
  const out = getStringifier()(normalized);
  expect(out).toBe(expected);
});
