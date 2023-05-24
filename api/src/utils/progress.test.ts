import { getCalendar } from './progress';

describe('utils/progress', () => {
  describe('getCalendar', () => {
    it('should return an empty object if no timestamps are passed', () => {
      const calendar = getCalendar([]);
      expect(calendar).toEqual({});
    });
    it('should take timestamps and return a calendar object', () => {
      const timestamps = [-1111001, 0, 1111000, 1111500, 1113000, 9999999];
      const calendar = getCalendar(timestamps);
      expect(calendar).toEqual({
        '-1112': 1,
        0: 1,
        1111: 1,
        1113: 1,
        9999: 1
      });
    });

    it('should handle null, { timestamp: number } and float entries', () => {
      const timestamps = [null, { timestamp: 1113000 }, 1111000.5];
      const calendar = getCalendar(timestamps);
      expect(calendar).toEqual({
        1111: 1,
        1113: 1
      });
    });
  });
});
