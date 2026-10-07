import descriptionTokenizer from '../../src/parser/tokenizers/description.js';
import { seedSpec, seedTokens } from '../../src/util.js';

const sourceSingle = [
  {
    number: 1,
    source: '...',
    tokens: seedTokens({ description: '  one  two  ' }),
  },
];

const sourceMultiple = [
  {
    number: 1,
    source: '...',
    tokens: seedTokens({ description: 'one  two  ' }),
  },
  {
    number: 2,
    source: '...',
    tokens: seedTokens({ description: '' }),
  },
  {
    number: 3,
    source: '...',
    tokens: seedTokens({ description: '  three  four' }),
  },
  {
    number: 4,
    source: '...',
    tokens: seedTokens({ description: '' }),
  },
];

test('compact - single line', () => {
  const tokenize = descriptionTokenizer('compact');
  const input = seedSpec({ source: sourceSingle });
  const output = seedSpec({ source: sourceSingle, description: 'one  two' });
  expect(tokenize(input)).toEqual(output);
});

test('compact - multiple lines', () => {
  const tokenize = descriptionTokenizer('compact');
  const input = seedSpec({ source: sourceMultiple });
  const output = seedSpec({
    source: sourceMultiple,
    description: 'one  two three  four',
  });
  expect(tokenize(input)).toEqual(output);
});

test('preserve - multiple lines', () => {
  const tokenize = descriptionTokenizer('preserve');
  const input = seedSpec({ source: sourceMultiple });
  const output = seedSpec({
    source: sourceMultiple,
    description: 'one  two  \n\n  three  four\n',
  });

  expect(tokenize(input)).toEqual(output);
});

test('preserve - one-liner', () => {
  const tokenize = descriptionTokenizer('preserve');
  const input = seedSpec({
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({
          delimiter: '/**',
          postDelimiter: ' ',
          description: 'description',
          end: '*/',
        }),
      },
    ],
  });
  const output = seedSpec({
    description: 'description',
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({
          delimiter: '/**',
          postDelimiter: ' ',
          description: 'description',
          end: '*/',
        }),
      },
    ],
  });

  expect(tokenize(input)).toEqual(output);
});

test('preserve - leading empty lines', () => {
  const source = [
    {
      number: 1,
      source: '...',
      tokens: seedTokens({ delimiter: '/**' }),
    },
    {
      number: 2,
      source: '...',
      tokens: seedTokens(),
    },
    {
      number: 3,
      source: '...',
      tokens: seedTokens({ description: '  line 1  ' }),
    },
    {
      number: 4,
      source: '...',
      tokens: seedTokens({ description: '  line 2  ' }),
    },
    {
      number: 5,
      source: '...',
      tokens: seedTokens({ description: '' }),
    },
  ];

  const tokenize = descriptionTokenizer('preserve');

  const input = seedSpec({ source });
  const output = seedSpec({
    source,
    description: '\n  line 1  \n  line 2  \n',
  });

  expect(tokenize(input)).toEqual(output);
});

test('preserve - leading type lines', () => {
  const source = [
    {
      number: 1,
      source: '...',
      tokens: seedTokens({ delimiter: '/**' }),
    },
    {
      number: 2,
      source: '...',
      tokens: seedTokens(),
    },
    {
      number: 3,
      source: '...',
      tokens: seedTokens({ type: '{function(' }),
    },
    {
      number: 4,
      source: '...',
      tokens: seedTokens({ type: '  number' }),
    },
    {
      number: 5,
      source: '...',
      tokens: seedTokens({
        type: ')}',
        postType: '  ',
        description: 'line 1  ',
      }),
    },
    {
      number: 6,
      source: '...',
      tokens: seedTokens({ description: '  line 2  ' }),
    },
    {
      number: 7,
      source: '...',
      tokens: seedTokens({ description: '' }),
    },
  ];

  const tokenize = descriptionTokenizer('preserve');

  const input = seedSpec({ source });
  const output = seedSpec({
    source,
    description: 'line 1  \n  line 2  \n',
  });

  expect(tokenize(input)).toEqual(output);
});

test('custom joiner - single line', () => {
  const tokenize = descriptionTokenizer((lines) => {
    return lines
      .reduce((str, { tokens: { description } }) => {
        const trimmed = description.trim();
        if (!trimmed) {
          return str;
        }
        return str + ' ' + trimmed;
      }, '')
      .slice(1);
  });
  const input = seedSpec({ source: sourceSingle });
  const output = seedSpec({ source: sourceSingle, description: 'one  two' });
  expect(tokenize(input)).toEqual(output);
});

test('custom joiner - multiple lines', () => {
  const tokenize = descriptionTokenizer((lines) => {
    return lines
      .reduce((str, { tokens: { description } }) => {
        const trimmed = description.trim();
        if (!trimmed) {
          return str;
        }
        return str + ' ' + trimmed;
      }, '')
      .slice(1);
  });
  const input = seedSpec({ source: sourceMultiple });
  const output = seedSpec({
    source: sourceMultiple,
    description: 'one  two three  four',
  });
  expect(tokenize(input)).toEqual(output);
});
