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
    it('should convert <code> to `', () => {
      const expected = 'Code `code` test\n';
      return codeToBackticks('Code <code>code</code> test').then(actual => {
        expect(actual).toEqual(expected);
      });
    });
    it('should convert html entities', () => {
      const expected =
        'a `<input type="text" placeholder="this is placeholder text">` test\n';
      return codeToBackticks(
        // eslint-disable-next-line max-len
        'a <code>&#60;input type="text" placeholder="this is placeholder text"&#62;</code> test\n'
      ).then(actual => {
        expect(actual).toEqual(expected);
      });
    });
  });
});
