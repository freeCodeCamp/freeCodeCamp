import { clientLocale } from '../config/env.json';
import {
  convertToLocalizedString,
  generateSearchPlaceholder,
  roundDownToNearestHundred
} from './generate-search-placeholder';

describe('Search bar placeholder tests:', () => {
  describe('Number rounding', () => {
    test('Numbers less than 100 return 0', () => {
      const testArr = [0, 1, 50, 99];

      testArr.forEach(num => {
        expect(roundDownToNearestHundred(num)).toEqual(0);
      });
    });

    test('Numbers greater than 100 return a number rounded down to the nearest 100', () => {
      const testArr = [
        {
          num: 100,
          expected: 100
        },
        {
          num: 101,
          expected: 100
        },
        {
          num: 199,
          expected: 100
        },
        {
          num: 999,
          expected: 900
        },
        {
          num: 1000,
          expected: 1000
        },
        {
          num: 1001,
          expected: 1000
        },
        {
          num: 1999,
          expected: 1900
        },
        {
          num: 10000,
          expected: 10000
        },
        {
          num: 10001,
          expected: 10000
        },
        {
          num: 19999,
          expected: 19900
        }
      ];

      testArr.forEach(obj => {
        expect(roundDownToNearestHundred(obj.num)).toEqual(obj.expected);
      });
    });
  });

  describe('Number formatting', () => {
    test('Numbers are converted to the correct decimal or comma format for each locale', () => {
      const testArr = [
        {
          num: 100,
          locale: 'en',
          expected: '100'
        },
        {
          num: 100,
          locale: 'zh',
          expected: '100'
        },
        {
          num: 100,
          locale: 'de',
          expected: '100'
        },
        {
          num: 1000,
          locale: 'en',
          expected: '1,000'
        },
        {
          num: 1000,
          locale: 'zh',
          expected: '1,000'
        },
        {
          num: 1000,
          locale: 'de',
          expected: '1.000'
        },
        {
          num: 10000,
          locale: 'en',
          expected: '10,000'
        },
        {
          num: 10000,
          locale: 'zh',
          expected: '10,000'
        },
        {
          num: 10000,
          locale: 'de',
          expected: '10.000'
        },
        {
          num: 100000,
          locale: 'en',
          expected: '100,000'
        },
        {
          num: 100000,
          locale: 'zh',
          expected: '100,000'
        },
        {
          num: 100000,
          locale: 'de',
          expected: '100.000'
        }
      ];

      testArr.forEach(obj => {
        const { num, locale, expected } = obj;
        expect(convertToLocalizedString(num, locale)).toEqual(expected);
      });
    });
  });

  // Note: Only test the English locale to prevent duplicate tests,
  // and just to ensure the logic is working as expected.
  if (clientLocale === 'english') {
    describe('Placeholder strings', () => {
      test('When the total number of hits is less than 100 the expected placeholder is generated', async () => {
        const expected = 'Search our tutorials';
        const placeholderText = await generateSearchPlaceholder({
          mockRecordsNum: 99,
          locale: 'english'
        });

        expect(placeholderText).toEqual(expected);
      });

      test('When the total number of hits is equal to 100 the expected placeholder is generated', async () => {
        const placeholderText = await generateSearchPlaceholder({
          mockRecordsNum: 100,
          locale: 'english'
        });
        const expected = 'Search 100+ tutorials';

        expect(placeholderText).toEqual(expected);
      });

      test('When the total number of hits is greater than 100 the expected placeholder is generated', async () => {
        const placeholderText = await generateSearchPlaceholder({
          mockRecordsNum: 11000,
          locale: 'english'
        });
        const expected = 'Search 11,000+ tutorials';

        expect(placeholderText).toEqual(expected);
      });
    });
  }
});
