import { describe, test, expect } from 'vitest';
import {
  normalizeTwitter,
  normalizeBluesky,
  normalizeProfileUI,
  normalizeChallenges,
  normalizeFlags,
  normalizeDate,
  normalizeChallengeType
} from './normalize.js';

describe('normalize', () => {
  describe('normalizeTwitter', () => {
    test('returns the input if it is a url', () => {
      const url = 'https://twitter.com/a_generic_user';
      expect(normalizeTwitter(url)).toEqual(url);
    });
    test('adds the handle to twitter.com if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeTwitter(handle)).toEqual(
        'https://twitter.com/a_generic_user'
      );
    });
    test('returns undefined  if that is the input', () => {
      expect(normalizeTwitter('')).toBeUndefined();
    });
  });

  describe('normalizeBluesky', () => {
    test('returns the input if it is a url', () => {
      const url = 'https://bsky.app/profile/a_generic_user';
      expect(normalizeBluesky(url)).toEqual(url);
    });
    test('adds the handle to bsky.app if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeBluesky(handle)).toEqual(
        'https://bsky.app/profile/a_generic_user'
      );
    });
    test('returns undefined if that is the input', () => {
      expect(normalizeBluesky('')).toBeUndefined();
    });
  });

  const profileUIInput = {
    isLocked: true,
    showAbout: true,
    showCerts: true,
    showDonation: true,
    showHeatMap: true,
    showLocation: true,
    showName: true,
    showPoints: true,
    showPortfolio: true,
    showTimeLine: true
  };

  const defaultProfileUI = {
    isLocked: true,
    showAbout: false,
    showCerts: false,
    showDonation: false,
    showHeatMap: false,
    showLocation: false,
    showName: false,
    showPoints: false,
    showPortfolio: false,
    showTimeLine: false
  };

  describe('normalizeProfileUI', () => {
    test('should return the input if it is not null', () => {
      expect(normalizeProfileUI(profileUIInput)).toEqual(profileUIInput);
    });

    test('should return the default profileUI if the input is null', () => {
      const input = null;
      expect(normalizeProfileUI(input)).toEqual(defaultProfileUI);
    });

    test('should convert all "null" values to "undefined"', () => {
      const input = {
        isLocked: null,
        showAbout: false,
        showCerts: null,
        showDonation: null,
        showHeatMap: null,
        showLocation: null,
        showName: null,
        showPoints: null,
        showPortfolio: null,
        showTimeLine: null
      };
      expect(normalizeProfileUI(input)).toEqual({
        isLocked: undefined,
        showAbout: false,
        showCerts: undefined,
        showDonation: undefined,
        showHeatMap: undefined,
        showLocation: undefined,
        showName: undefined,
        showPoints: undefined,
        showPortfolio: undefined,
        showTimeLine: undefined
      });
    });
  });

  describe('normalizeChallenges', () => {
    test('should remove null values from the input', () => {
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
              path: null
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
    test('should replace nulls with false', () => {
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

  describe('normalizeDate', () => {
    test('should return the date as a number', () => {
      expect(normalizeDate(1)).toEqual(1);
      expect(normalizeDate({ $date: '2023-10-01T00:00:00Z' })).toEqual(
        1696118400000
      );
    });

    test('should throw an error if the date is not in the expected shape', () => {
      expect(() => normalizeDate('2023-10-01T00:00:00Z')).toThrow(
        'Unexpected date value: "2023-10-01T00:00:00Z"'
      );
      expect(() => normalizeDate({ date: '123' })).toThrow(
        'Unexpected date value: {"date":"123"}'
      );
    });

    test('should handle string numbers', () => {
      expect(normalizeDate('1696118400000')).toEqual(1696118400000);
    });
  });

  describe('normalizeChallengeType', () => {
    test('should return the challenge type as a number or null', () => {
      expect(normalizeChallengeType(10)).toEqual(10);
      expect(normalizeChallengeType('10')).toEqual(10);
      expect(normalizeChallengeType(null)).toEqual(null);
    });

    test('should throw an error if the challenge type is not in the expected shape', () => {
      expect(() => normalizeChallengeType('invalid')).toThrow(
        'Unexpected challengeType value: "invalid"'
      );
      expect(() => normalizeChallengeType({ type: '123' })).toThrow(
        'Unexpected challengeType value: {"type":"123"}'
      );
    });
  });
});
