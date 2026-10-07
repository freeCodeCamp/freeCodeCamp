import typeTokenizer, { Joiner } from '../../src/parser/tokenizers/type.js';
import { seedTokens, seedSpec } from '../../src/util.js';

const tokenize = typeTokenizer();

test('ok', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '{string} param param description 0',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      type: 'string',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            type: '{string}',
            postType: ' ',
            description: 'param param description 0',
          }),
        },
      ],
    })
  );
});

test('inconsistent curlies', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '{string param param description 0',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:type:unpaired-curlies',
          line: 1,
          message: 'unpaired curlies',
          critical: true,
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '{string param param description 0',
          }),
        },
      ],
    })
  );
});

test('object notation', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '{{a: 1}} param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      type: '{a: 1}',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            type: '{{a: 1}}',
            postType: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('omit', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: 'string param param description 0',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: 'string param param description 0',
          }),
        },
      ],
    })
  );
});

test('multiline', () => {
  const spec = seedSpec({
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({
          description: '{function(',
        }),
      },
      {
        number: 2,
        source: '...',
        tokens: seedTokens({
          postDelimiter: '  ',
          description: 'number)} function type',
        }),
      },
      {
        number: 3,
        source: '...',
        tokens: seedTokens(),
      },
      {
        number: 4,
        source: '...',
        tokens: seedTokens({
          end: '*/',
        }),
      },
    ],
  });

  const tokenized = tokenize(spec);
  const expected = seedSpec({
    type: 'function(number)',
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({
          type: '{function(',
        }),
      },
      {
        number: 2,
        source: '...',
        tokens: seedTokens({
          type: '  number)}',
          postType: ' ',
          description: 'function type',
        }),
      },
      {
        number: 3,
        source: '...',
        tokens: seedTokens(),
      },
      {
        number: 4,
        source: '...',
        tokens: seedTokens({
          end: '*/',
        }),
      },
    ],
  });

  expect(tokenized).toEqual(expected);
});

test.each([
  ['default', undefined, 'function(number,string)'],
  ['preserve', 'preserve', 'function(\n  number,\n  string\n)'],
  ['compact', 'compact', 'function(number,string)'],
  [
    'custom',
    (t: string[]) => t.map((x: string) => x.trim()).join(''),
    'function(number,string)',
  ],
])('spacing - %s', (name, spacing, type) => {
  const tokenize =
    spacing === 'preserve' ||
    spacing === 'compact' ||
    typeof spacing === 'function'
      ? typeTokenizer(spacing)
      : typeTokenizer();

  const spec = seedSpec({
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({
          description: '{function(',
        }),
      },
      {
        number: 2,
        source: '...',
        tokens: seedTokens({
          postDelimiter: '  ',
          description: 'number,',
        }),
      },
      {
        number: 2,
        source: '...',
        tokens: seedTokens({
          postDelimiter: '  ',
          description: 'string',
        }),
      },
      {
        number: 3,
        source: '...',
        tokens: seedTokens({
          description: ')} function type',
        }),
      },
    ],
  });

  const tokenized = tokenize(spec);
  expect(tokenized.type).toEqual(type);
});
