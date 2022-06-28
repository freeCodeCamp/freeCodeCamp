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
  });
  describe('getFunctions', () => {});
  describe('getCalls', () => {});
});
