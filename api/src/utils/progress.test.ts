import { getCalendar, getPoints } from './progress';

describe('utils/progress', () => {
  describe('getCalendar', () => {
    it('should return an empty object if no timestamps are passed', () => {
      expect(getCalendar([])).toEqual({});
    });
    it('should take timestamps and return a calendar object', () => {
      const timestamps = [-1111001, 0, 1111000, 1111500, 1113000, 9999999];

      expect(getCalendar(timestamps)).toEqual({
        '-1112': 1,
        0: 1,
        1111: 1,
        1113: 1,
        9999: 1
      });
    });
  });

  describe('getPoints', () => {
    it('should return 1 if there are no progressTimestamps', () => {
      expect(getPoints([])).toEqual(1);
    });
    it('should return then number of progressTimestamps if there are any', () => {
      expect(getPoints([0, 1, 2])).toEqual(3);
    });
  });
});
