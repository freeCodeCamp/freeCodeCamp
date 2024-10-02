import moment from 'moment-timezone';

import { dayCount } from './date-utils';

const PST = 'America/Los_Angeles';

describe('date utils', () => {
  describe('dayCount', () => {
    it('should return 1 day given epochs of the same day', () => {
      expect(
        dayCount([
          moment.utc('8/3/2015 3:00', 'M/D/YYYY H:mm').valueOf(),
          moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
        ])
      ).toEqual(1);
    });

    it('should return 1 day given same epochs', () => {
      expect(
        dayCount([
          moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
          moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
        ])
      ).toEqual(1);
    });

    it('should return 2 days when there is a 24 hours difference', () => {
      expect(
        dayCount([
          moment.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
          moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
        ])
      ).toEqual(2);
    });

    it(
      'should return 2 days when the diff is less than 24h but ' +
        'different in UTC',
      () => {
        expect(
          dayCount([
            moment.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
            moment.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()
          ])
        ).toEqual(2);
      }
    );

    it(
      'should return 1 day when the diff is less than 24h ' +
        'and days are different in UTC, but given PST',
      () => {
        expect(
          dayCount(
            [
              moment.utc('8/4/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
              moment.utc('8/3/2015 23:00', 'M/D/YYYY H:mm').valueOf()
            ],
            PST
          )
        ).toEqual(1);
      }
    );

    it('should return correct count when there is very big period', () => {
      expect(
        dayCount([
          moment.utc('10/27/2015 1:00', 'M/D/YYYY H:mm').valueOf(),
          moment.utc('5/12/1982 1:00', 'M/D/YYYY H:mm').valueOf()
        ])
      ).toEqual(12222);
    });

    it(
      'should return 2 days when there is a 24 hours difference ' +
        'between dates given `undefined` timezone',
      () => {
        expect(
          dayCount([
            moment.utc('8/4/2015 2:00', 'M/D/YYYY H:mm').valueOf(),
            moment.utc('8/3/2015 2:00', 'M/D/YYYY H:mm').valueOf()
          ])
        ).toEqual(2);
      }
    );
  });
});
