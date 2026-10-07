// @flow strict-local

import assert from 'assert';
import {DefaultMap} from '../src/DefaultMap';

describe('DefaultMap', () => {
  it('constructs with entries just like Map', () => {
    let map = new DefaultMap(
      k => k,
      [
        [1, 3],
        [2, 27],
      ],
    );
    assert.equal(map.get(1), 3);
    assert.deepEqual(Array.from(map.entries()), [
      [1, 3],
      [2, 27],
    ]);
  });

  it("returns a default value based on a key if it doesn't exist", () => {
    let map = new DefaultMap(k => k);
    assert.equal(map.get(3), 3);
  });

  it("sets a default value based on a key if it doesn't exist", () => {
    let map = new DefaultMap(k => k);
    map.get(3);
    assert.deepEqual(Array.from(map.entries()), [[3, 3]]);
  });

  it('respects undefined/null if it already existed in the map', () => {
    let map = new DefaultMap<number, number | void | null>(k => k);
    map.set(3, undefined);
    assert.equal(map.get(3), undefined);

    map.set(4, null);
    assert.equal(map.get(4), null);
  });
});
