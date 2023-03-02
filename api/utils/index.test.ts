import assert from 'node:assert';
// eslint-disable-next-line import/no-unresolved
import { describe, it } from 'node:test';
import { base64URLEncode, challenge, verifier } from '.';

describe('utils', { only: true }, () => {
  it('base64URLEncode', () => {
    assert.strictEqual(base64URLEncode(Buffer.from('test')), 'dGVzdA');
  });
  it('verifier', () => {
    const v = verifier;
    assert.strictEqual(v.length, 43);
  });
  it('challenge', () => {
    const c = challenge;
    assert.strictEqual(c.length, 43);
  });
});
