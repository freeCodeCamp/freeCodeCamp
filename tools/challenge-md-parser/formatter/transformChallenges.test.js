const { codeToBackticks } = require('./transformChallenges');

/* global expect */

describe('transformChallenges', () => {
  describe('codeToBackticks', () => {
    it('should convert <em> to *', () => {
      const expected = 'Some *emphasis* here\n';
      return codeToBackticks('Some <em>emphasis</em> here').then(actual => {
        expect(actual).toEqual(expected);
      });
    });
  });
});
