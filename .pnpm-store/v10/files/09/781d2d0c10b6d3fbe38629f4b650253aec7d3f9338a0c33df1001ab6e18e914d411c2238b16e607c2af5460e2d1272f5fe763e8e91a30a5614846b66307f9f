// @flow
import assert from 'assert';
import prettifyTime from '../src/prettifyTime';

describe('prettifyTime', () => {
  it('should format numbers less than 1000 as ms', () => {
    assert.equal(prettifyTime(888), '888ms');
    assert.equal(prettifyTime(50), '50ms');
    assert.equal(prettifyTime(0), '0ms');
  });

  it('should format numbers greater than 1000 as s with 2 fractional digits', () => {
    assert.equal(prettifyTime(4000), '4.00s');
    assert.equal(prettifyTime(90000), '90.00s');
    assert.equal(prettifyTime(45678), '45.68s');
  });
});
