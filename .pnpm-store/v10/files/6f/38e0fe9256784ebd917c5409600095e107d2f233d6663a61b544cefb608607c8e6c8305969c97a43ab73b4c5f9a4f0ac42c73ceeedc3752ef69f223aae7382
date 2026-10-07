import getStringifier from '../../src/stringifier/index.js';

const source = [
  {
    number: 1,
    source: '  /**',
    tokens: {
      start: '  ',
      delimiter: '/**',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 2,
    source: '   * Description may go',
    tokens: {
      start: '   ',
      delimiter: '*',
      postDelimiter: ' ',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: 'Description may go',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 3,
    source: '   * over multiple lines followed by @tags',
    tokens: {
      start: '   ',
      delimiter: '*',
      postDelimiter: ' ',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: 'over multiple lines followed by @tags',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 4,
    source: '   *',
    tokens: {
      start: '   ',
      delimiter: '*',
      postDelimiter: ' ',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 5,
    source: '* @my-tag {my.type} my-name description line 1',
    tokens: {
      start: '',
      delimiter: '*',
      postDelimiter: ' ',
      tag: '@my-tag',
      postTag: ' ',
      name: 'my-name',
      postName: ' ',
      type: '{my.type}',
      postType: ' ',
      description: 'description line 1',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 6,
    source: '      description line 2',
    tokens: {
      start: '      ',
      delimiter: '',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: 'description line 2',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 7,
    source: '    * description line 3',
    tokens: {
      start: '    ',
      delimiter: '*',
      postDelimiter: ' ',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: 'description line 3',
      end: '',
      lineEnd: '',
    },
  },
  {
    number: 8,
    source: '   */',
    tokens: {
      start: '   ',
      delimiter: '',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '*/',
      lineEnd: '',
    },
  },
];

const block = {
  description: '',
  tags: [],
  source,
  problems: [],
};

test('default', () => {
  const s = getStringifier()(block);
  const expected = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   * 
* @my-tag {my.type} my-name description line 1
      description line 2
    * description line 3
   */`;
  expect(s).toBe(expected.slice(1));
});
