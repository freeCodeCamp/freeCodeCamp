import { base64URLEncode, challenge, verifier } from '.';

describe('utils', () => {
  test('base64URLEncode', () => {
    expect(base64URLEncode(Buffer.from('test'))).toEqual('dGVzdA');
  });

  test('verifier', () => {
    expect(verifier).toHaveLength(43);
  });

  test('challenge', () => {
    expect(challenge).toHaveLength(43);
  });
});
