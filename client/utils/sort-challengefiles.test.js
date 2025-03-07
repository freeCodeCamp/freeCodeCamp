const { challengeFiles } = require('./__fixtures__/challenges');
const { sortChallengeFiles } = require('./sort-challengefiles');

describe('sort-files', () => {
  describe('sortChallengeFiles', () => {
    it('should return an array', () => {
      const sorted = sortChallengeFiles(challengeFiles);
      expect(Array.isArray(sorted)).toBe(true);
    });
    it('should not modify the challenges', () => {
      const sorted = sortChallengeFiles(challengeFiles);
      const expected = challengeFiles;
      expect(sorted).toEqual(expect.arrayContaining(expected));
      expect(sorted.length).toEqual(expected.length);
    });

    it('should sort the objects into jsx, html, css, js, ts order', () => {
      const sorted = sortChallengeFiles(challengeFiles);
      const sortedKeys = sorted.map(({ fileKey }) => fileKey);
      const expected = [
        'indexjsx',
        'indexhtml',
        'stylescss',
        'scriptjs',
        'indexts'
      ];
      expect(sortedKeys).toStrictEqual(expected);
    });
  });
});
