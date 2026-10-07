import getParser from '../../src/parser/index.js';
import { seedTokens } from '../../src/util.js';

test('block with tags', () => {
  const parsed = getParser()(`
  /**
   * Description may go\x20
   * over few lines followed by @tags
   * @param {string} name name parameter
   *
   * @param {any} value value of any type
   */`);
  expect(parsed).toEqual([
    {
      description: 'Description may go over few lines followed by @tags',
      tags: [
        {
          tag: 'param',
          name: 'name',
          type: 'string',
          optional: false,
          description: 'name parameter',
          problems: [],
          source: [
            {
              number: 4,
              source: '   * @param {string} name name parameter',
              tokens: seedTokens({
                start: '   ',
                delimiter: '*',
                postDelimiter: ' ',
                tag: '@param',
                postTag: ' ',
                name: 'name',
                postName: ' ',
                type: '{string}',
                postType: ' ',
                description: 'name parameter',
              }),
            },
            {
              number: 5,
              source: '   *',
              tokens: seedTokens({
                start: '   ',
                delimiter: '*',
              }),
            },
          ],
        },
        {
          tag: 'param',
          name: 'value',
          type: 'any',
          optional: false,
          description: 'value of any type',
          problems: [],
          source: [
            {
              number: 6,
              source: '   * @param {any} value value of any type',
              tokens: seedTokens({
                start: '   ',
                delimiter: '*',
                postDelimiter: ' ',
                tag: '@param',
                postTag: ' ',
                name: 'value',
                postName: ' ',
                type: '{any}',
                postType: ' ',
                description: 'value of any type',
              }),
            },
            {
              number: 7,
              source: '   */',
              tokens: seedTokens({
                start: '   ',
                end: '*/',
              }),
            },
          ],
        },
      ],
      source: [
        {
          number: 1,
          source: '  /**',
          tokens: seedTokens({
            start: '  ',
            delimiter: '/**',
          }),
        },
        {
          number: 2,
          source: '   * Description may go ',
          tokens: seedTokens({
            start: '   ',
            delimiter: '*',
            postDelimiter: ' ',
            description: 'Description may go ',
          }),
        },
        {
          number: 3,
          source: '   * over few lines followed by @tags',
          tokens: seedTokens({
            start: '   ',
            delimiter: '*',
            postDelimiter: ' ',
            description: 'over few lines followed by @tags',
          }),
        },
        {
          number: 4,
          source: '   * @param {string} name name parameter',
          tokens: seedTokens({
            start: '   ',
            delimiter: '*',
            postDelimiter: ' ',
            tag: '@param',
            postTag: ' ',
            name: 'name',
            postName: ' ',
            type: '{string}',
            postType: ' ',
            description: 'name parameter',
            end: '',
          }),
        },
        {
          number: 5,
          source: '   *',
          tokens: seedTokens({
            start: '   ',
            delimiter: '*',
          }),
        },
        {
          number: 6,
          source: '   * @param {any} value value of any type',
          tokens: seedTokens({
            start: '   ',
            delimiter: '*',
            postDelimiter: ' ',
            tag: '@param',
            postTag: ' ',
            name: 'value',
            postName: ' ',
            type: '{any}',
            postType: ' ',
            description: 'value of any type',
          }),
        },
        {
          number: 7,
          source: '   */',
          tokens: seedTokens({
            start: '   ',
            end: '*/',
          }),
        },
      ],
      problems: [],
    },
  ]);
});

test('no source cloning', () => {
  const parsed = getParser()(`
  /**
   * Description may go\x20
   * over few lines followed by @tags
   * @param {string} name name parameter
   *
   * @param {any} value value of any type
   */`);
  expect(parsed[0].tags[0].source[0] === parsed[0].source[3]).toBe(true);
});

test('empty multi-line block', () => {
  const parsed = getParser()(`
  /**
   *
   */`);
  expect(parsed).toEqual([
    {
      description: '',
      tags: [],
      source: [
        {
          number: 1,
          source: '  /**',
          tokens: {
            delimiter: '/**',
            description: '',
            end: '',
            lineEnd: '',
            name: '',
            postDelimiter: '',
            postName: '',
            postTag: '',
            postType: '',
            start: '  ',
            tag: '',
            type: '',
          },
        },
        {
          number: 2,
          source: '   *',
          tokens: {
            delimiter: '*',
            description: '',
            end: '',
            lineEnd: '',
            name: '',
            postDelimiter: '',
            postName: '',
            postTag: '',
            postType: '',
            start: '   ',
            tag: '',
            type: '',
          },
        },
        {
          number: 3,
          source: '   */',
          tokens: {
            delimiter: '',
            description: '',
            end: '*/',
            lineEnd: '',
            name: '',
            postDelimiter: '',
            postName: '',
            postTag: '',
            postType: '',
            start: '   ',
            tag: '',
            type: '',
          },
        },
      ],
      problems: [],
    },
  ]);
});

test('empty one-line block', () => {
  const parsed = getParser()(`
  /** */`);
  expect(parsed).toEqual([
    {
      description: '',
      tags: [],
      source: [
        {
          number: 1,
          source: '  /** */',
          tokens: {
            delimiter: '/**',
            description: '',
            end: '*/',
            lineEnd: '',
            name: '',
            postDelimiter: ' ',
            postName: '',
            postTag: '',
            postType: '',
            start: '  ',
            tag: '',
            type: '',
          },
        },
      ],
      problems: [],
    },
  ]);
});

test.each([
  ['one-star', '/*\n*\n*/'],
  ['three-star', '/***\n*\n*/'],
  ['one-star oneliner', '/* */'],
  ['three-star oneliner', '/*** */'],
])('skip block - %s', (name, source) => {
  expect(getParser()(source)).toEqual([]);
});

test.each([
  ['negative', -1],
  ['float', 1.5],
])('invalid start line - %s', (name, startLine) => {
  expect(() => getParser({ startLine })).toThrow('Invalid startLine');
});
