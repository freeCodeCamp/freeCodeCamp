import { blockNameify } from './block-nameify';

describe('blockNameify', () => {
  it('should return a preformatted name when it exists', () => {
    const result = blockNameify('back-end-development-and-apis');
    expect(result).toBe('Back End Development and APIs');
  });

  it('should not format prepositions', () => {
    const result = blockNameify('basic-html-and-html5');
    expect(result).toBe('Basic Html and Html5');
  });

  it('should format javascript to JavaScript', () => {
    const result = blockNameify('basic-javascript-rpg-game');
    expect(result).toBe('Basic JavaScript RPG Game');
  });

  it('should transform "-" to " " and uppercase each word', () => {
    const result = blockNameify(
      'learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet'
    );
    expect(result).toBe(
      'Learn More About CSS Pseudo Selectors By Building A Balance Sheet'
    );
  });
});
