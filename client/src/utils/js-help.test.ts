import { jsString } from './__fixtures/curriculum-helpers-javascript';
import JSHelp from './js-help';

describe('css-help', () => {
  let t: JSHelp;
  beforeEach(() => {
    t = new JSHelp(jsString);
  });
  describe('getVariables', () => {
    it('should return a `Variable[]` of length 5', () => {
      expect(t.getVariables().length).toBe(5);
    });
    it('should return a `Variable[]` of length 1', () => {
      expect(t.getVariables('a').length).toBe(1);
    });
    it('should return a `Variable[]` of length 1', () => {
      expect(t.getVariables('a').filterByScope('global').length).toBe(1);
    });
    it('should return a `Variable[]` of length 1', () => {
      // A variable named `a` is declared using `const` in the global scope with a value of `1`.
      expect(t.getVariables('a').filterByScope('global').length === 1);
      const a = t.getVariables('a').filterByScope('global')?.[0];
      expect(a?.kind === 'const');
      expect(a?.value === 1);

      // A variable named `b` is declared using `let` in the global scope with a value of `2`.
      const b = t.getVariables('b').filterByScope('global')?.[0];
      expect(typeof b !== 'undefined');
      expect(b?.kind === 'let');
      expect(b?.value === 2);

      // A variable named `c` is declared using `var` in the global scope with a value of `3`.
      const c = t.getVariables('c').filterByScope('global')?.[0];
      expect(typeof c !== 'undefined');
      expect(c?.kind === 'var');
      expect(c?.value === 3);

      const tot = t.getVariables('tot').filterByScope('add')?.[0];
      expect(typeof tot !== 'undefined');
      expect(tot?.kind === 'const');
      expect(tot?.value === 'param1 + param2');
    });
  });
  describe('getFunctions', () => {
    expect(t.getFunctions().length).toBe(1);
    const add = t.getFunctions('add').filterByScope('global')?.[0];
    expect(typeof add !== 'undefined');
    expect(add?.params.length === 2);
    expect(add?.params[0].name === 'param1');
    expect(add?.params[1].name === 'param2');
  });
  describe('getCalls', () => {
    it('function `add` is called in the global scope with the arguments `a` and `b`', () => {
      const addCall = t.getCalls('add').filterByScope('global')?.[0];
      expect(typeof addCall !== 'undefined');
      expect(addCall?.args.length === 2);
      expect(addCall?.args[0].name === 'a');
      expect(addCall?.args[1].name === 'b');
    });
  });
});
