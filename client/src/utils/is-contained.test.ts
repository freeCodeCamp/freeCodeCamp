import { isContained } from './is-contained';

describe('client/src isContained', () => {
  it('returns true if `arr1` values are contained in `arr2`', () => {
    const arr1 = ['dog', 'cat'];
    const arr2 = ['cat', 'dog'];
    expect(isContained(arr1, arr2)).toEqual(true);
  });

  it('returns true if `arr1` values are not contained in `arr2`', () => {
    const arr1 = ['dog', 'cat'];
    const arr2 = ['cat', 'monkey', 'bird'];
    expect(isContained(arr1, arr2)).toEqual(false);
  });
});
