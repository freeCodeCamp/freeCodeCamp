import { seedTokens, rewireSource, rewireSpecs } from '../../src/util.js';

test('source to spec', () => {
  const block = {
    description: '',
    tags: [
      {
        tag: 'my-tag',
        name: '',
        type: '',
        optional: false,
        description: '',
        problems: [],
        source: [
          {
            number: 2,
            source: '...changed in spec...',
            tokens: seedTokens({ name: '...changed in spec...' }),
          },
        ],
      },
    ],
    source: [
      {
        number: 1,
        source: 'source line 1',
        tokens: seedTokens(),
      },
      {
        number: 2,
        source: 'source line 2',
        tokens: seedTokens({ name: 'source' }),
      },
    ],
    problems: [],
  };

  // source is unsynced
  expect(block.source[1] === block.tags[0].source[0]).toBe(false);

  rewireSource(block);

  // source is referenced
  expect(block.source[1] === block.tags[0].source[0]).toBe(true);

  // non-tag line stays unchanged
  expect(block.source[0].source).toEqual('source line 1');
  // tag-holding source line stays unchanged
  expect(block.source[1].source).toEqual('source line 2');
  expect(block.source[1].tokens.name).toEqual('source');
  // tag source inherits block source
  expect(block.tags[0].source[0].source).toEqual('source line 2');
  expect(block.tags[0].source[0].tokens.name).toEqual('source');
});

test('spec to source', () => {
  const block = {
    description: '',
    tags: [
      {
        tag: 'my-tag',
        name: '',
        type: '',
        optional: false,
        description: '',
        problems: [],
        source: [
          {
            number: 2,
            source: '...changed in spec...',
            tokens: seedTokens({ name: '...changed in spec...' }),
          },
        ],
      },
    ],
    source: [
      {
        number: 1,
        source: 'source line 1',
        tokens: seedTokens(),
      },
      {
        number: 2,
        source: 'source line 2',
        tokens: seedTokens({ name: 'source' }),
      },
    ],
    problems: [],
  };

  // source is unsynced
  expect(block.source[1] === block.tags[0].source[0]).toBe(false);

  rewireSpecs(block);

  // source is referenced
  expect(block.source[1] === block.tags[0].source[0]).toBe(true);

  // non-tag line stays unchanged
  expect(block.source[0].source).toEqual('source line 1');
  // tag-holding source line inherits spec source
  expect(block.source[1].source).toEqual('...changed in spec...');
  expect(block.source[1].tokens.name).toEqual('...changed in spec...');
  // tag source inherits block source
  expect(block.tags[0].source[0].source).toEqual('...changed in spec...');
  expect(block.tags[0].source[0].tokens.name).toEqual('...changed in spec...');
});
