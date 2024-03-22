/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAccessToken } from './tokens';

describe('createAccessToken', () => {
  it('creates an object with id, ttl, created and userId', () => {
    const userId = 'abc';

    const actual = createAccessToken(userId);

    expect(actual).toStrictEqual({
      id: expect.stringMatching(/[a-zA-Z0-9]{64}/),
      ttl: 77760000000,
      created: expect.stringMatching(
        /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/
      ),
      userId
    });
  });

  it('sets the ttl, defaulting to 77760000000 ms', () => {
    const userId = 'abc';
    const ttl = 123;
    const actual = createAccessToken(userId, ttl);

    expect(actual.ttl).toBe(ttl);
    expect(createAccessToken(userId).ttl).toBe(77760000000);
  });
});
