import tagTokenizer from '../../src/parser/tokenizers/tag.js';
import { seedTokens, seedSpec } from '../../src/util.js';

const tokenize = tagTokenizer();

test('ok', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: '@param {string} value value description 0',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      tag: 'param',
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            tag: '@param',
            postTag: ' ',
            description: '{string} value value description 0',
          }),
        },
      ],
    })
  );
});

test('require @', () => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 42,
            source: '...',
            tokens: seedTokens({
              description: 'param {string} value value description 0',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      problems: [
        {
          code: 'spec:tag:prefix',
          message: 'tag should start with "@" symbol',
          critical: true,
          line: 42,
        },
      ],
      source: [
        {
          number: 42,
          source: '...',
          tokens: seedTokens({
            description: 'param {string} value value description 0',
          }),
        },
      ],
    })
  );
});

test.each([
  ['@+tag', '+tag'],
  ['@-tag', '-tag'],
  ['@.tag', '.tag'],
])('loose tag - %s', (token, tag) => {
  expect(
    tokenize(
      seedSpec({
        source: [
          {
            number: 1,
            source: '...',
            tokens: seedTokens({
              description: token + ' name description',
            }),
          },
        ],
      })
    )
  ).toEqual(
    seedSpec({
      tag,
      source: [
        {
          number: 1,
          source: '...',
          tokens: seedTokens({
            tag: token,
            postTag: ' ',
            description: 'name description',
          }),
        },
      ],
    })
  );
});
