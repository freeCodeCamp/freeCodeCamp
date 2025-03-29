import {
  normalizeTwitter,
  normalizeChallenges,
  normalizeFlags
} from './normalize';

describe('normalize', () => {
  describe('normalizeTwitter', () => {
    it('returns the input if it is a url', () => {
      const url = 'https://twitter.com/a_generic_user';
      expect(normalizeTwitter(url)).toEqual(url);
    });
    it('adds the handle to twitter.com if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeTwitter(handle)).toEqual(
        'https://twitter.com/a_generic_user'
      );
    });
    it('returns undefined  if that is the input', () => {
      expect(normalizeTwitter('')).toBeUndefined();
    });
  });

  describe('normalizeChallenges', () => {
    it('should remove null values from the input', () => {
      const completedChallenges = [
        {
          id: 'a6b0bb188d873cb2c8729495',
          completedDate: 1520002973119,
          challengeType: 5,
          solution: null,
          githubLink: null,
          isManuallyApproved: null,
          examResults: null,
          files: [
            {
              contents: 'test',
              ext: 'js',
              key: 'indexjs',
              name: 'test',
              path: 'path-test'
            },
            {
              contents: 'test2',
              ext: 'html',
              key: 'html-test',
              name: 'test2',
              path: ''
            }
          ]
        }
      ];
      expect(normalizeChallenges(completedChallenges)).toEqual([
        {
          id: 'a6b0bb188d873cb2c8729495',
          completedDate: 1520002973119,
          challengeType: 5,
          files: [
            {
              contents: 'test',
              ext: 'js',
              key: 'indexjs',
              name: 'test',
              path: 'path-test'
            },
            {
              contents: 'test2',
              ext: 'html',
              key: 'html-test',
              name: 'test2'
            }
          ]
        }
      ]);
    });
  });

  describe('normalizeFlags', () => {
    it('should replace nulls with false', () => {
      const flags = {
        isLocked: null,
        showAbout: false,
        showCerts: true,
        showDonation: null
      };
      expect(normalizeFlags(flags)).toEqual({
        isLocked: false,
        showAbout: false,
        showCerts: true,
        showDonation: false
      });
    });
  });
});
