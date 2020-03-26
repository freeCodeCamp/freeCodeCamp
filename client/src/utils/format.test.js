/* global expect BigInt */

const { format } = require('./format');

/* eslint-disable no-unused-vars */
function simpleFun() {
  var x = 'y';
}
/* eslint-enable no-unused-vars */

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
    const primitives = [
      'str',
      57,
      BigInt(10),
      true,
      false,
      null,
      // eslint-disable-next-line no-undefined
      undefined,
      Symbol('Sym')
    ];
    expect(format(primitives)).toBe(
      `[ 'str', 57, 10n, true, false, null, undefined, Symbol(Sym) ]`
    );
  });
  it(`outputs NaN as 'NaN'`, () => {
    expect(format(NaN)).toBe('NaN');
  });
});
