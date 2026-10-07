const { default: getParser } = require('../../lib/parser/index.cjs');

test('fenced description', () => {
  const parsed = getParser({ spacing: 'preserve' })(`
  /**
   * @example "" \`\`\`ts
@transient()
class Foo { }
\`\`\`
  */`);

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
      source: '   * @example "" ```ts',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@example',
        postTag: ' ',
        name: '""',
        postName: ' ',
        type: '',
        postType: '',
        description: '```ts',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 3,
      source: '@transient()',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '@transient()',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
      source: 'class Foo { }',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: 'class Foo { }',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 5,
      source: '```',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '```',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 6,
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
  ];

  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'example',
          name: '',
          type: '',
          optional: false,
          description: '```ts\n@transient()\nclass Foo { }\n```',
          problems: [],
          source: source.slice(1),
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('fenced one-liner', () => {
  const parsed = getParser({ spacing: 'preserve' })(
    '/** @example "" ```ts @transient() class Foo { } ```*/'
  );

  const source = [
    {
      number: 0,
      source: '/** @example "" ```ts @transient() class Foo { } ```*/',
      tokens: {
        start: '',
        delimiter: '/**',
        postDelimiter: ' ',
        tag: '@example',
        postTag: ' ',
        name: '""',
        postName: ' ',
        type: '',
        postType: '',
        description: '```ts @transient() class Foo { } ```',
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
          tag: 'example',
          name: '',
          type: '',
          optional: false,
          description: '```ts @transient() class Foo { } ```',
          problems: [],
          source,
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('multiple fences', () => {
  const parsed = getParser({ spacing: 'preserve' })(`
  /**
   * @example "" \`\`\`ts
@one
\`\`\`
text
\`\`\`
@two
\`\`\`
  */`);

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
      source: '   * @example "" ```ts',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@example',
        postTag: ' ',
        name: '""',
        postName: ' ',
        type: '',
        postType: '',
        description: '```ts',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 3,
      source: '@one',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '@one',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
      source: '```',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '```',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 5,
      source: 'text',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: 'text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 6,
      source: '```',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '```',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 7,
      source: '@two',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '@two',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 8,
      source: '```',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '```',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 9,
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
  ];

  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'example',
          name: '',
          type: '',
          optional: false,
          description: '```ts\n@one\n```\ntext\n```\n@two\n```',
          source: source.slice(1),
          problems: [],
        },
      ],
      source,
      problems: [],
    },
  ]);
});

test('custom fences', () => {
  const parsed = getParser({ spacing: 'preserve', fence: '###' })(`
  /**
   * @example "" ###ts
@one
###
text
###
@two
###
  */`);

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
      source: '   * @example "" ###ts',
      tokens: {
        start: '   ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@example',
        postTag: ' ',
        name: '""',
        postName: ' ',
        type: '',
        postType: '',
        description: '###ts',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 3,
      source: '@one',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '@one',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 4,
      source: '###',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '###',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 5,
      source: 'text',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: 'text',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 6,
      source: '###',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '###',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 7,
      source: '@two',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '@two',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 8,
      source: '###',
      tokens: {
        start: '',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        name: '',
        postName: '',
        type: '',
        postType: '',
        description: '###',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 9,
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
  ];

  expect(parsed).toEqual([
    {
      description: '',
      tags: [
        {
          tag: 'example',
          name: '',
          type: '',
          optional: false,
          description: '###ts\n@one\n###\ntext\n###\n@two\n###',
          source: source.slice(1),
          problems: [],
        },
      ],
      source,
      problems: [],
    },
  ]);
});
