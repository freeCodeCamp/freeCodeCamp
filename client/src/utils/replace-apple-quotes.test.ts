import { replaceAppleQuotes } from './replace-apple-quotes';

describe('replaceAppleQuotes()', () => {
  it('replaces apple quotes with regular quotes', () => {
    expect(replaceAppleQuotes('“double” quotes and ‘single’ quotes')).toBe(
      `"double" quotes and 'single' quotes`
    );
  });

  it('returns the original string if there are no smart quotes', () => {
    expect(replaceAppleQuotes('No quotes')).toBe('No quotes');
  });
});
