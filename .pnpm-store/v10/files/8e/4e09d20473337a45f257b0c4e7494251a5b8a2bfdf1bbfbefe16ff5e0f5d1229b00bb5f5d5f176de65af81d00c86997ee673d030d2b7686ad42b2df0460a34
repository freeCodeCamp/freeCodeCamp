import nameTokenizer from '../../src/parser/tokenizers/name.js';
import { seedTokens, seedSpec } from '../../src/util.js';

const tokenize = nameTokenizer();

test('single word', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({ description: 'param param description 0' }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: 'param',
            postName: ' ',
            description: 'param description 0',
          }),
        },
      ],
    })
  );
});

test('dash-delimitered', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({ description: 'param-param description 0' }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param-param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: 'param-param',
            postName: ' ',
            description: 'description 0',
          }),
        },
      ],
    })
  );
});

test('quoted', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({ description: '"param param" description 0' }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '"param param"',
            postName: ' ',
            description: 'description 0',
          }),
        },
      ],
    })
  );
});

test('inconsistent quotes', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({ description: '"param param description 0' }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: '"param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '"param',
            postName: ' ',
            description: 'param description 0',
          }),
        },
      ],
    })
  );
});

test('optional', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({ description: '[param] param description' }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('optional with default', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param=value] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: 'value',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param=value]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('quoted default', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param="value"] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: '"value"',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param="value"]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('loosely quoted default', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param="value] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: '"value',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param="value]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('quoted default with =', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param="value=1"] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: '"value=1"',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param="value=1"]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('non-alphanumeric', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '$param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: '$param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '$param',
            postName: ' ',
            description: 'description',
          }),
        },
      ],
    })
  );
});

test('spread notation', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '...params description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: '...params',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '...params',
            postName: ' ',
            description: 'description',
          }),
        },
      ],
    })
  );
});

test('optionsl spread notation', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[...params] description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: '...params',
      optional: true,
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[...params]',
            postName: ' ',
            description: 'description',
          }),
        },
      ],
    })
  );
});

test('optional multiple words', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param name] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param name',
      optional: true,
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param name]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('name spacing', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[ param = value ] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: 'value',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[ param = value ]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('inconsistent brackets', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:name:unpaired-brackets',
          line: 1,
          critical: true,
          message: 'unpaired brackets',
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '[param param description',
          }),
        },
      ],
    })
  );
});

test('empty name', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[=value] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:name:empty-name',
          line: 1,
          critical: true,
          message: 'empty name',
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '[=value] param description',
          }),
        },
      ],
    })
  );
});

test('empty default value', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param=] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:name:empty-default',
          line: 1,
          critical: true,
          message: 'empty default value',
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '[param=] param description',
          }),
        },
      ],
    })
  );
});

test('empty', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:name:empty-name',
          line: 1,
          critical: true,
          message: 'empty name',
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '[] param description',
          }),
        },
      ],
    })
  );
});

test('default value syntax', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param=value=value] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:name:invalid-default',
          line: 1,
          critical: true,
          message: 'invalid default value syntax',
        },
      ],
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            description: '[param=value=value] param description',
          }),
        },
      ],
    })
  );
});

test('default with arrow', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '[param = value => value] param description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      name: 'param',
      optional: true,
      default: 'value => value',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            name: '[param = value => value]',
            postName: ' ',
            description: 'param description',
          }),
        },
      ],
    })
  );
});

test('after multiline {type}', () => {
  const sourceIn = [
    {
      number: 0,
      source: '...',
      tokens: seedTokens({
        tag: '@aram',
        postTag: ' ',
        type: '{function(',
      }),
    },
    {
      number: 1,
      source: '...',
      tokens: seedTokens({ type: '  number' }),
    },
    {
      number: 2,
      source: '...',
      tokens: seedTokens({
        type: ')}',
        postType: ' ',
        description: 'paramname description text',
      }),
    },
  ];

  const sourceOut = JSON.parse(JSON.stringify(sourceIn));
  Object.assign(sourceOut[2].tokens, {
    name: 'paramname',
    postName: ' ',
    description: 'description text',
  });

  expect(tokenize(seedSpec({ source: sourceIn }))).toEqual(
    seedSpec({
      name: 'paramname',
      source: sourceOut,
    })
  );
});
