// @flow

import assert from 'assert';
import {
  objectSortedEntries,
  objectSortedEntriesDeep,
  setDifference,
} from '../src/collection';

describe('objectSortedEntries', () => {
  it('returns a sorted list of key/value tuples', () => {
    assert.deepEqual(
      objectSortedEntries({foo: 'foo', baz: 'baz', bar: 'bar'}),
      [
        ['bar', 'bar'],
        ['baz', 'baz'],
        ['foo', 'foo'],
      ],
    );
  });
});

describe('objectSortedEntriesDeep', () => {
  it('returns a deeply sorted list of key/value tuples', () => {
    assert.deepEqual(
      objectSortedEntriesDeep({
        foo: 'foo',
        baz: ['d', 'c'],
        bar: {g: 'g', b: 'b'},
      }),
      [
        [
          'bar',
          [
            ['b', 'b'],
            ['g', 'g'],
          ],
        ],
        ['baz', ['d', 'c']],
        ['foo', 'foo'],
      ],
    );
  });
});
describe('setDifference', () => {
  it('returns a setDifference of two sets of T type', () => {
    assert.deepEqual(
      setDifference(new Set([1, 2, 3]), new Set([3, 4, 5])),
      new Set([1, 2, 4, 5]),
    );
  });
});
