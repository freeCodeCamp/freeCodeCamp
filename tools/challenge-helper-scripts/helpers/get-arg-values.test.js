const { getArgValues } = require('./get-arg-values');

describe('getArgValues helper', () => {
  it('should be able to run if there are no values to process', () => {
    const args = ['/Path/to/node', '/Path/to/script'];
    expect(getArgValues(args)).toEqual({});
    expect(getArgValues()).toEqual({});
  });

  it('should parse the third element (key/value) if provided', () => {
    const args = ['/Path/to/node', '/Path/to/script', 'num=4'];
    expect(getArgValues(args)).toEqual({ num: '4' });
  });

  it('should parse multiple arguments (key/value) if provided', () => {
    const args = ['/Path/to/node', '/Path/to/script', 'num=4', 'another=5'];
    expect(getArgValues(args)).toEqual({ another: '5', num: '4' });
  });

  it('should parse the arguments with spaces (key/value) if provided', () => {
    const args = ['/Path/to/node', '/Path/to/script', 'num = 3'];
    expect(getArgValues(args)).toEqual({ num: '3' });
  });

  it('should throw error on invalid key/value arguments', () => {
    const items = [
      ['/Path/to/node', '/Path/to/script', 'num='],
      ['/Path/to/node', '/Path/to/script', '='],
      ['/Path/to/node', '/Path/to/script', 'num=2', '= 3']
    ];

    items.forEach(item => expect(() => getArgValues(item)).toThrow());
  });
});
