import test from 'tape';

import getSuggestion from '../../../src/util/getSuggestion';

test('spell check suggestion API', (t) => {
  t.deepEqual([], getSuggestion('foo'), 'returns no suggestions given empty word and no dictionary');

  t.deepEqual(
    getSuggestion('foo'),
    [],
    'returns no suggestions given real word and no dictionary',
  );

  t.deepEqual(
    getSuggestion('fo', ['foo', 'bar', 'baz']),
    ['foo'],
    'returns correct suggestion given real word and a dictionary',
  );

  t.deepEqual(
    getSuggestion('theer', ['there', 'their', 'foo', 'bar']),
    ['there', 'their'],
    'returns multiple correct suggestions given real word and a dictionary',
  );

  t.deepEqual(
    getSuggestion('theer', ['there', 'their', 'foo', 'bar'], 1),
    ['there'],
    'returns correct # of suggestions given the limit argument',
  );

  t.end();
});
