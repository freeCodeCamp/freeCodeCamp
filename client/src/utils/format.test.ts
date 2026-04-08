import { describe, it, expect } from 'vitest';
import { format } from './format';

function simpleFun() {
  // eslint-disable-next-line no-var, @typescript-eslint/no-unused-vars
  var x = 'y';
}

/* format uses util.inspect to do almost everything, the tests are just there
to warn us if util.inspect ever changes */
describe('format', () => {
  it('returns a string', () => {
    expect(typeof format('')).toBe('string');
    expect(typeof format({})).toBe('string');
    expect(typeof format([])).toBe('string');
  });
  it('does not modify strings', () => {
    expect(format('')).toBe('');
    expect(format('abcde')).toBe('abcde');
    expect(format('Case Sensitive')).toBe('Case Sensitive');
  });
  it('formats shallow objects nicely', () => {
    expect(format({})).toBe('{}');
    expect(format({ a: 'one', b: 'two' })).toBe(`{ a: 'one', b: 'two' }`);
  });
  it('formats functions the same way as console.log', () => {
    expect(format(simpleFun)).toBe('[Function: simpleFun]');
  });
  it('recurses into arrays', () => {
    const objsInArr = [{ a: 'one' }, 'b', simpleFun];
    expect(format(objsInArr)).toBe(
      `[ { a: 'one' }, 'b', [Function: simpleFun] ]`
    );
  });
  it('handles all primitive values', () => {
    const primitives = ['str', 57, true, false, null, undefined];
    expect(format(primitives)).toBe(
      `[ 'str', 57, true, false, null, undefined ]`
    );
    expect(format(BigInt(10))).toBe(`10n`);
    expect(format(Symbol('Sym'))).toBe(`Symbol(Sym)`);
  });
  it(`outputs NaN as 'NaN'`, () => {
    expect(format(NaN)).toBe('NaN');
  });
  it('formats Set values', () => {
    expect(format(new Set())).toBe('Set(0) {}');
    expect(format(new Set([1, 2, 3]))).toBe('Set(3) {1, 2, 3}');
  });
  it('formats Map values', () => {
    expect(format(new Map())).toBe('Map(0) {}');
    expect(format(new Map([['a', 1]]))).toBe('Map(1) {a => 1}');
    expect(format(new Map([['x', 10], ['y', 20]]))).toBe(
      'Map(2) {x => 10, y => 20}'
    );
  });
});
