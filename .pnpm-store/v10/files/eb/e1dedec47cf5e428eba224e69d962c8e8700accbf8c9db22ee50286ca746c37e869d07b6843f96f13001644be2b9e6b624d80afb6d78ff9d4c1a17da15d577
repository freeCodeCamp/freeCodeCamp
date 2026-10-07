import getParser from '../../src/parser/block-parser.js';
import { Line } from '../../src/primitives.js';
import { seedTokens } from '../../src/util.js';

let source: Line[];

beforeEach(() => {
  source = [
    {
      number: 1,
      source: '    /**',
      tokens: seedTokens({
        start: '    ',
        delimiter: '/**',
        postDelimiter: '',
        description: '',
        end: '',
      }),
    },
    {
      number: 2,
      source: '     * description 0',
      tokens: seedTokens({
        start: '     ',
        delimiter: '*',
        postDelimiter: ' ',
        description: 'description 0',
        end: '',
      }),
    },
    {
      number: 3,
      source: '     *',
      tokens: seedTokens({
        start: '     ',
        delimiter: '*',
        postDelimiter: '',
        description: '',
        end: '',
      }),
    },
    {
      number: 4,
      source: '     * description 1',
      tokens: seedTokens({
        start: '     ',
        delimiter: '*',
        postDelimiter: ' ',
        description: 'description 1',
        end: '',
      }),
    },
    {
      number: 5,
      source: '     *',
      tokens: seedTokens({
        start: '     ',
        delimiter: '*',
        postDelimiter: '',
        description: '',
        end: '',
      }),
    },
    {
      number: 6,
      source: '     * @param {string} value value description 0',
      tokens: seedTokens({
        start: '     ',
        delimiter: '*',
        postDelimiter: ' ',
        description: '@param {string} value value description 0',
        end: '',
      }),
    },
    {
      number: 7,
      source: '    ```',
      tokens: seedTokens({
        start: '    ',
        delimiter: '',
        postDelimiter: '',
        description: '```',
        end: '',
      }),
    },
    {
      number: 8,
      source: '    @sample code',
      tokens: seedTokens({
        start: '    ',
        delimiter: '',
        postDelimiter: '',
        description: '@sample code',
        end: '',
      }),
    },
    {
      number: 9,
      source: '    ```',
      tokens: seedTokens({
        start: '    ',
        delimiter: '',
        postDelimiter: '',
        description: '```',
        end: '',
      }),
    },
    {
      number: 10,
      source: '    * value description 1',
      tokens: seedTokens({
        start: '    ',
        delimiter: '*',
        postDelimiter: ' ',
        description: 'value description 1',
        end: '',
      }),
    },
    {
      number: 11,
      source: '    */',
      tokens: seedTokens({
        start: '    ',
        delimiter: '',
        postDelimiter: '',
        description: '',
        end: '*/',
      }),
    },
  ];
});

test('standard fences', () => {
  const parser = getParser();
  const groups: Line[][] = parser(source);

  expect(groups.length).toBe(2);
  expect(groups).toEqual([source.slice(0, 5), source.slice(5)]);
});

test('custom fence', () => {
  source = source.map((line) => {
    line.tokens.description = line.tokens.description.replace('```', '###');
    return line;
  });

  const parser = getParser({ fence: '###' });
  const groups: Line[][] = parser(source);

  expect(groups.length).toBe(2);
  expect(groups).toEqual([source.slice(0, 5), source.slice(5)]);
});

test('fence function', () => {
  source = source.map((line) => {
    line.tokens.description = line.tokens.description.replace('```', '###');
    return line;
  });

  function isFenced(source: string) {
    return source.split('###').length % 2 === 0;
  }

  const parser = getParser({ fence: isFenced });
  const groups: Line[][] = parser(source);

  expect(groups.length).toBe(2);
  expect(groups).toEqual([source.slice(0, 5), source.slice(5)]);
});
