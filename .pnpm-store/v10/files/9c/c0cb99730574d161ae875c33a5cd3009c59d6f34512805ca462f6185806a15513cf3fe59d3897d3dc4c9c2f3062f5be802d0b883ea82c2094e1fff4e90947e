const { parse, inspect } = require('../../lib/index.cjs');

test('name cut off', () => {
  const source = `
    /**
     * @param {{includeWhiteSpace: (boolean|undefined),
     *    ignoreElementOrder: (boolean|undefined)}} [options] The options.
     */`.slice(1);

  const tagSource = [
    {
      number: 1,
      source: '     * @param {{includeWhiteSpace: (boolean|undefined),',
      tokens: {
        start: '     ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '@param',
        postTag: ' ',
        type: '{{includeWhiteSpace: (boolean|undefined),',
        postType: '',
        name: '',
        postName: '',
        description: '',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 2,
      source:
        '     *    ignoreElementOrder: (boolean|undefined)}} [options] The options.',
      tokens: {
        start: '     ',
        delimiter: '*',
        postDelimiter: ' ',
        tag: '',
        postTag: '',
        type: '   ignoreElementOrder: (boolean|undefined)}}',
        postType: ' ',
        name: '[options]',
        postName: ' ',
        description: 'The options.',
        end: '',
        lineEnd: '',
      },
    },
    {
      number: 3,
      source: '     */',
      tokens: {
        start: '     ',
        delimiter: '',
        postDelimiter: '',
        tag: '',
        postTag: '',
        type: '',
        postType: '',
        name: '',
        postName: '',
        description: '',
        end: '*/',
        lineEnd: '',
      },
    },
  ];

  const parsed = parse(source);
  // console.log(inspect(parsed[0]));

  expect(parsed[0]).toMatchObject({
    problems: [],
    tags: [
      {
        tag: 'param',
        type: '{includeWhiteSpace: (boolean|undefined),ignoreElementOrder: (boolean|undefined)}',
        name: 'options',
        optional: true,
        description: 'The options.',
        source: tagSource,
      },
    ],
    source: [
      {
        number: 0,
        source: '    /**',
        tokens: {
          start: '    ',
          delimiter: '/**',
          postDelimiter: '',
          tag: '',
          postTag: '',
          type: '',
          postType: '',
          name: '',
          postName: '',
          description: '',
          end: '',
          lineEnd: '',
        },
      },
      ...tagSource,
    ],
  });
});
