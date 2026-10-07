// @flow
import assert from 'assert';
import objectHash from '../src/objectHash';

describe('objectHash', () => {
  it('calculates the same hash for two different but deep equal objects', () => {
    const obj1 = {
      foo: {foo: 'foo', baz: ['foo', 'baz', 'bar'], bar: 'bar'},
      baz: 'baz',
      bar: 'bar',
    };
    const obj2 = {
      foo: {foo: 'foo', baz: ['foo', 'baz', 'bar'], bar: 'bar'},
      baz: 'baz',
      bar: 'bar',
    };

    assert.equal(objectHash(obj1), objectHash(obj2));
  });

  it('calculates a unique hash for two deep equal objects', () => {
    const obj1 = {
      baz: 'baz',
      bar: 'ba',
    };
    const obj2 = {
      baz: 'baz',
      bar: 'bar',
    };

    assert.notEqual(objectHash(obj1), objectHash(obj2));
  });
});
