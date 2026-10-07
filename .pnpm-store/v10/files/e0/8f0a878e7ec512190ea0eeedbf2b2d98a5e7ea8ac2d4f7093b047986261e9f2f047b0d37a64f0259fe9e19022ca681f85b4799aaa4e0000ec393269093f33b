import {isEqual} from './isEqual';

describe('isEqual', () => {
  [
    ['a', 'a'],
    [100, 100],
    [false, false],
    [undefined, undefined],
    [null, null],
    [{}, {}],
    [{a: 10}, {a: 10}],
    [{a: null}, {a: null}],
    [{a: undefined}, {a: undefined}],
    [[], []],
    [
      ['a', 'b', 'c'],
      ['a', 'b', 'c'],
    ],
    [
      ['a', {inner: [12]}, 'c'],
      ['a', {inner: [12]}, 'c'],
    ],
    [{a: {nested: {more: [1, 2, 3]}}}, {a: {nested: {more: [1, 2, 3]}}}],
  ].forEach(([left, right]) => {
    it(`should should return true for isEqual(${JSON.stringify(
      left
    )}, ${JSON.stringify(right)})`, () => {
      expect(isEqual(left, right)).toBe(true);
      expect(isEqual(right, left)).toBe(true);
    });
  });

  [
    ['a', 'b'],
    ['0', 0],
    [new Date(1), {}],
    [false, ''],
    [false, true],
    [null, undefined],
    [{}, []],
    [/foo/, /foo/],
    [new Date(1), new Date(1)],
    [{a: 10}, {a: 11}],
    [
      ['a', 'b', 'c'],
      ['a', 'b', 'c', 'd'],
    ],
    [
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c'],
    ],
    [
      ['a', {inner: [12]}, 'c'],
      ['a', {inner: [null]}, 'c'],
    ],
    [{a: {nested: {more: [1, 2, 3]}}}, {b: {nested: {more: [1, 2, 3]}}}],
  ].forEach(([left, right]) => {
    it(`should should return false for isEqual(${JSON.stringify(
      left
    )}, ${JSON.stringify(right)})`, () => {
      expect(isEqual(left, right)).toBe(false);
      expect(isEqual(right, left)).toBe(false);
    });
  });
});
