import { blocklistedUsernames } from './constants';

describe('constants', () => {
  describe('blocklistedUsernames', () => {
    it('should not contain duplicate values', () => {
      const uniqueValues = new Set(blocklistedUsernames);
      expect(blocklistedUsernames.length).toEqual(uniqueValues.size);
    });

    it('should contain all the letters in the latin alphabet', () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      expect(blocklistedUsernames).toEqual(expect.arrayContaining(alphabet));
    });
  });
});

// Type tests:
type BlocklistedUsernames = (typeof blocklistedUsernames)[number];

type HasString = string extends BlocklistedUsernames ? true : false;

type Expect<T extends true> = T;

// @ts-expect-error - This is intended to fail since we want to ensure that blocklistedUsernames is an array of literals
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Test = Expect<HasString>;
