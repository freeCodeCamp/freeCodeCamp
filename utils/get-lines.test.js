const { getLines } = require('./get-lines');

const content = 'one\ntwo\nthree';

describe('dasherize', () => {
  it('returns a string', () => {
    expect(getLines('')).toBe('');
  });
  it("returns '' when the second arg is empty", () => {
    expect(getLines(content)).toBe('');
  });
  it("returns '' when the range is negative", () => {
    expect(getLines(content, [1, -1])).toBe('');
  });
  it("returns '' when the range is [n,n]", () => {
    expect(getLines(content, [0, 0])).toBe('');
    expect(getLines(content, [1, 1])).toBe('');
    expect(getLines(content, [2, 2])).toBe('');
  });

  it('returns the first line when the range is [0,2]', () => {
    expect(getLines(content, [0, 2])).toBe('one');
  });
  it('returns the second line when the range is [1,3]', () => {
    expect(getLines(content, [1, 3])).toBe('two');
  });
  it('returns the first and second lines when the range is [0,3]', () => {
    expect(getLines(content, [0, 3])).toBe('one\ntwo');
  });
  it('returns the second and third lines when the range is [1,4]', () => {
    expect(getLines(content, [1, 4])).toBe('two\nthree');
  });
});
