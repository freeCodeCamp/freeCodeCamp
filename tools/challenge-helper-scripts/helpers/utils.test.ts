import { describe, it, expect } from 'vitest';
import { insertInto } from './utils.js';

describe('insertInto', () => {
  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const result = insertInto(arr, 1, 99);
    expect(arr).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr);
  });

  it('should insert at the end if the index is larger than the original array', () => {
    const arr = [1, 2, 3];
    const result = insertInto(arr, 10, 99);
    expect(result).toEqual([1, 2, 3, 99]);
  });

  it('should insert at the beginning if the index is <= 0', () => {
    const arr = [1, 2, 3];
    const result = insertInto(arr, 0, 99);
    expect(result).toEqual([99, 1, 2, 3]);
    const resultNeg = insertInto(arr, -5, 99);
    expect(resultNeg).toEqual([99, 1, 2, 3]);
  });

  it('should insert at the correct index', () => {
    const arr = [1, 2, 3];
    const result = insertInto(arr, 1, 99);
    expect(result).toEqual([1, 99, 2, 3]);
  });

  it('should work with empty arrays', () => {
    const arr: number[] = [];
    const result = insertInto(arr, 0, 99);
    expect(result).toEqual([99]);
  });
});
