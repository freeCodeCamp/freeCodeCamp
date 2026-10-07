import descriptionTokenizer from '../../src/parser/tokenizers/description.js';
import nameTokenizer from '../../src/parser/tokenizers/name.js';
import tagTokenizer from '../../src/parser/tokenizers/tag.js';
import typeTokenizer from '../../src/parser/tokenizers/type.js';
import getParser from '../../src/parser/spec-parser.js';
import { seedTokens, seedSpec } from '../../src/util.js';
import { Spec, Problem } from '../../src/primitives.js';

const parse = getParser({
  tokenizers: [
    tagTokenizer(),
    typeTokenizer(),
    nameTokenizer(),
    descriptionTokenizer(),
  ],
});

const tokenizer = (message: string, critical = false) => {
  const problem: Problem = {
    code: 'custom',
    line: 1,
    message,
    critical,
  };
  return (spec: Spec) => ({
    ...spec,
    problems: [...spec.problems, problem],
  });
};

test('all tokens', () => {
  const parsed = parse([
    {
      number: 1,
      source: '...',
      tokens: seedTokens({
        description: '@param {type} [name=value] description',
      }),
    },
  ]);
  expect(parsed).toEqual(
    seedSpec({
      tag: 'param',
      type: 'type',
      name: 'name',
      default: 'value',
      optional: true,
      description: 'description',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            tag: '@param',
            postTag: ' ',
            type: '{type}',
            postType: ' ',
            name: '[name=value]',
            postName: ' ',
            description: 'description',
          }),
        },
      ],
    })
  );
});

test('quotes in description', () => {
  const parsed = parse([
    {
      number: 1,
      source: '...',
      tokens: seedTokens({
        description:
          '@param {type} [name=value] description with "quoted" word',
      }),
    },
  ]);
  expect(parsed).toEqual(
    seedSpec({
      tag: 'param',
      type: 'type',
      name: 'name',
      default: 'value',
      optional: true,
      description: 'description with "quoted" word',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            tag: '@param',
            postTag: ' ',
            type: '{type}',
            postType: ' ',
            name: '[name=value]',
            postName: ' ',
            description: 'description with "quoted" word',
          }),
        },
      ],
    })
  );
});

test('collect non-critical errors', () => {
  const parse = getParser({
    tokenizers: [tokenizer('warning 1'), tokenizer('warning 2')],
  });

  const parsed = parse([
    {
      number: 1,
      source: '...',
      tokens: seedTokens({ description: 'description' }),
    },
  ]);

  expect(parsed).toEqual({
    tag: '',
    name: '',
    optional: false,
    type: '',
    description: '',
    problems: [
      {
        code: 'custom',
        line: 1,
        message: 'warning 1',
        critical: false,
      },
      {
        code: 'custom',
        line: 1,
        message: 'warning 2',
        critical: false,
      },
    ],
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({ description: 'description' }),
      },
    ],
  });
});

test('stop on critical error', () => {
  const parse = getParser({
    tokenizers: [tokenizer('error 1', true), tokenizer('warning 2')],
  });

  const parsed = parse([
    {
      number: 1,
      source: '...',
      tokens: seedTokens({ description: 'description' }),
    },
  ]);

  expect(parsed).toEqual({
    tag: '',
    name: '',
    optional: false,
    type: '',
    description: '',
    problems: [
      {
        code: 'custom',
        line: 1,
        message: 'error 1',
        critical: true,
      },
    ],
    source: [
      {
        number: 1,
        source: '...',
        tokens: seedTokens({ description: 'description' }),
      },
    ],
  });
});
