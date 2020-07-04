/* global describe expect it */

const slugs = require('./slugs');

describe('dasherize', () => {
  const { dasherize } = slugs;
  it('returns a string', () => {
    expect(dasherize('')).toBe('');
  });
  it('converts characters to lower case', () => {
    expect(dasherize('UPPERCASE')).toBe('uppercase');
  });
  it('converts spaces to dashes', () => {
    expect(dasherize('the space  between')).toBe('the-space--between');
  });

  it('converts dots to dashes', () => {
    expect(dasherize('the..dots.. between')).toBe('the--dots---between');
  });

  it('trims off surrounding whitespace', () => {
    expect(dasherize('  the space  between    ')).toBe('the-space--between');
  });

  it('removes everything except letters, numbers and -', () => {
    expect(dasherize('1a!"£$%^*()_+=-.b2')).toBe('1a--b2');
  });
});

describe('nameify', () => {
  const { nameify } = slugs;
  it('returns a string', () => {
    expect(nameify('')).toBe('');
  });
  it('removes everything except letters, numbers and spaces', () => {
    expect(nameify('1A !"£$%^*()_+=-.b  2')).toBe('1A b  2');
  });
});

describe('unDasherize', () => {
  const { unDasherize } = slugs;
  it('returns a string', () => {
    expect(unDasherize('')).toBe('');
  });
  it('converts dashes to spaces', () => {
    expect(unDasherize('the-space--between')).toBe('the space  between');
  });
  it('removes everything except letters, numbers and spaces', () => {
    expect(unDasherize('1A !"£$%^*()_+=-.b  2')).toBe('1A  b  2');
  });
  it('trims off surrounding whitespace', () => {
    expect(unDasherize('--the-space--between----')).toBe('the space  between');
  });
});
