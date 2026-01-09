import { describe, it, expect } from 'vitest';
import { createTypes, createAsyncTypes } from './create-types';

describe('Create types utility (createTypes)', () => {
  it('should generate an object with action types', () => {
    const types = ['lorem', 'ipsum'];
    const ns = 'namespace';

const expectedTypes = {
  lorem: 'namespace.lorem',
  ipsum: 'namespace.ipsum'
};

expect(createTypes(types, ns)).toEqual(expectedTypes);

});

describe('Create async types utility (createAsyncTypes)', () => {
  it('should generate a list of actions names', () => {
    const action = 'action';

    expect(createAsyncTypes(action)).toEqual([
      'action',
      'actionComplete',
      'actionError'
    ]);
  });
});
