import { getArgValue } from './get-arg-value';

describe('getArgValue helper', () => {
  it('should throw if there no arguments', () => {
    const args = ['/Path/to/node', '/Path/to/script'];
    expect(() => getArgValue(args)).toThrow('only one argument allowed');
  });

  it('should throw if the argument is not an integer', () => {
    expect.assertions(3);
    const args = ['/Path/to/node', '/Path/to/script', 'num=4'];
    expect(() => getArgValue(args)).toThrow('argument must be an integer');
    const args2 = ['/Path/to/node', '/Path/to/script', '4.1'];
    expect(() => getArgValue(args2)).toThrow('argument must be an integer');
    const args3 = ['/Path/to/node', '/Path/to/script', '4'];
    expect(getArgValue(args3)).toBe(4);
  });
});
