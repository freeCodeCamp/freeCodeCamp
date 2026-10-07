const { parse } = require('../../lib/index.cjs');

test('description only', () => {
  const parsed = parse(`
  /**
   * Description
   */`);
  expect(parsed).toEqual([
    {
      description: 'Description',
      tags: [],
      source: [
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
          source: '   * Description',
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
            description: 'Description',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 3,
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
      ],
      problems: [],
    },
  ]);
});

test('description one-liner', () => {
  const parsed = parse(`
  /** Description */
  var a`);
  expect(parsed).toEqual([
    {
      description: 'Description',
      tags: [],
      source: [
        {
          number: 1,
          source: '  /** Description */',
          tokens: {
            start: '  ',
            delimiter: '/**',
            postDelimiter: ' ',
            tag: '',
            postTag: '',
            name: '',
            postName: '',
            type: '',
            postType: '',
            description: 'Description ',
            end: '*/',
            lineEnd: '',
          },
        },
      ],
      problems: [],
    },
  ]);
});

test('block closed on same line', () => {
  const parsed = parse(`
  /**
   * Description */`);
  expect(parsed).toEqual([
    {
      description: 'Description',
      tags: [],
      source: [
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
          source: '   * Description */',
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
            description: 'Description ',
            end: '*/',
            lineEnd: '',
          },
        },
      ],
      problems: [],
    },
  ]);
});

test('no mid stars', () => {
  const parsed = parse(`
  /**
     Description
  */`);
  expect(parsed).toEqual([
    {
      description: 'Description',
      tags: [],
      source: [
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
          source: '     Description',
          tokens: {
            start: '     ',
            delimiter: '',
            postDelimiter: '',
            tag: '',
            postTag: '',
            name: '',
            postName: '',
            type: '',
            postType: '',
            description: 'Description',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 3,
          source: '  */',
          tokens: {
            start: '  ',
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
      ],
      problems: [],
    },
  ]);
});

test('skip surrounding empty lines while preserving line numbers', () => {
  const parsed = parse(`
  /**
   *
   *
   * Description first line
   *
   * Description second line
   *
   */
  var a`);
  expect(parsed).toEqual([
    {
      description: 'Description first line Description second line',
      tags: [],
      source: [
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
          source: '   *',
          tokens: {
            start: '   ',
            delimiter: '*',
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
          number: 3,
          source: '   *',
          tokens: {
            start: '   ',
            delimiter: '*',
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
          number: 4,
          source: '   * Description first line',
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
            description: 'Description first line',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 5,
          source: '   *',
          tokens: {
            start: '   ',
            delimiter: '*',
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
          number: 6,
          source: '   * Description second line',
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
            description: 'Description second line',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 7,
          source: '   *',
          tokens: {
            start: '   ',
            delimiter: '*',
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
      ],
      problems: [],
    },
  ]);
});

test('description on the first line', () => {
  const parsed = parse(`
  /** Description first line
   *
   * Description second line
   */
  var a`);
  expect(parsed).toEqual([
    {
      description: 'Description first line Description second line',
      tags: [],
      source: [
        {
          number: 1,
          source: '  /** Description first line',
          tokens: {
            start: '  ',
            delimiter: '/**',
            postDelimiter: ' ',
            tag: '',
            postTag: '',
            name: '',
            postName: '',
            type: '',
            postType: '',
            description: 'Description first line',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 2,
          source: '   *',
          tokens: {
            start: '   ',
            delimiter: '*',
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
          number: 3,
          source: '   * Description second line',
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
            description: 'Description second line',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 4,
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
      ],
      problems: [],
    },
  ]);
});

test('multiple blocks', () => {
  const parsed = parse(`
  /**
   * Description first line
   */
  var a

  /**
   * Description second line
   */
  var b`);

  expect(parsed).toHaveLength(2);

  expect(parsed).toEqual([
    {
      description: 'Description first line',
      tags: [],
      source: [
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
          source: '   * Description first line',
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
            description: 'Description first line',
            end: '',
            lineEnd: '',
          },
        },
        {
          number: 3,
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
      ],
      problems: [],
    },
    {
      description: 'Description second line',
      tags: [],
      source: [
        {
          number: 6,
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
          number: 7,
          source: '   * Description second line',
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
            description: 'Description second line',
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
      ],
      problems: [],
    },
  ]);
});

test('skip `/* */` blocks', () => {
  const parsed = parse(`
  /*
   *
   */
  var a`);
  expect(parsed).toHaveLength(0);
});

test('skip `/*** */` blocks', () => {
  const parsed = parse(`
  /***
   *
   */
  var a`);
  expect(parsed).toHaveLength(0);
});

test('tag only one-liner', () => {
  const parsed = parse(`/** @my-tag */`);
  const source = [
    {
      number: 0,
      source: '/** @my-tag */',
      tokens: {
        start: '',
        delimiter: '/**',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: '',
          type: '',
          optional: false,
          description: '',
          problems: [],
          source,
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag only', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
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
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: '',
          type: '',
          optional: false,
          description: '',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag and type only', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type}
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type}',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: '',
        postName: '',
        type: '{my.type}',
        postType: '',
        description: '',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: '',
          type: 'my.type',
          optional: false,
          description: '',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag and name only', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag my-name
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag my-name',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: 'my-name',
        postName: '',
        type: '',
        postType: '',
        description: '',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: '',
          optional: false,
          description: '',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag, type, and name', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type} my-name
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type} my-name',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: 'my-name',
        postName: '',
        type: '{my.type}',
        postType: ' ',
        description: '',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description: '',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag, type, name, and description', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type} my-name description text
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type} my-name description text',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: 'my-name',
        postName: ' ',
        type: '{my.type}',
        postType: ' ',
        description: 'description text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description: 'description text',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('description contains /**', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type} my-name description text /**
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type} my-name description text /**',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: 'my-name',
        postName: ' ',
        type: '{my.type}',
        postType: ' ',
        description: 'description text /**',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description: 'description text /**',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag, type, name, and description separated by mixed spaces', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag\t {my.type}\t my-name\t description text
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag\t {my.type}\t my-name\t description text',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: '\t ',
        name: 'my-name',
        postName: '\t ',
        type: '{my.type}',
        postType: '\t ',
        description: 'description text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description: 'description text',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('tag with multiline description', () => {
  const parsed = parse(`
  /**
   * @my-tag {my.type} my-name description line 1
   * description line 2
   * description line 3
   */
  var a`);
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
      source: '   * @my-tag {my.type} my-name description line 1',
      tokens: {
        start: '   ',
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
      number: 3,
      source: '   * description line 2',
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
        description: 'description line 2',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
      source: '   * description line 3',
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
        description: 'description line 3',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 5,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description:
            'description line 1 description line 2 description line 3',
          problems: [],
          source: source.slice(1),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('optional name', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type} [my-name] description text
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type} [my-name] description text',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: '[my-name]',
        postName: ' ',
        type: '{my.type}',
        postType: ' ',
        description: 'description text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: true,
          description: 'description text',
          problems: [],
          source: source.slice(2),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('report name errors', () => {
  const parsed = parse(`
  /**
   *
   * @my-tag {my.type} [my-name description text
   */
  var a`);
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
      source: '   *',
      tokens: {
        start: '   ',
        delimiter: '*',
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
      number: 3,
      source: '   * @my-tag {my.type} [my-name description text',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@my-tag',
        postTag: ' ',
        name: '',
        postName: '',
        type: '{my.type}',
        postType: ' ',
        description: '[my-name description text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
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
  const problems = [
    {
      code: 'spec:name:unpaired-brackets',
      critical: true,
      message: 'unpaired brackets',
      line: 3,
    },
  ];
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: '',
          type: 'my.type',
          optional: false,
          description: '',
          source: source.slice(2),
          problems,
        },
      ],
      source,
      problems,
    },
  ]);
});

test('misaligned block', () => {
  const parsed = parse(`
  /**
* @my-tag {my.type} my-name description line 1
      description line 2
    * description line 3
   */
  var a`);
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
      number: 3,
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
      number: 4,
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
      number: 5,
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
  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'my-tag',
          name: 'my-name',
          type: 'my.type',
          optional: false,
          description:
            'description line 1 description line 2 description line 3',
          problems: [],
          source: source.slice(1),
        },
      ],
      source,
      problems: [],
    },
  ]);
});
