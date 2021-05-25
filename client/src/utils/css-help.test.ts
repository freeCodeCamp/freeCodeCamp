/* global describe it expect */
import { cssString } from './__fixtures/curriculum-helpers-css';
import CSSHelp from './css-help';

describe('css-help', () => {
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  const doc = document;
  let t: CSSHelp;
  beforeEach(() => {
    const style = doc.createElement('style');
    style.innerHTML = cssString as string;
    doc.head.appendChild(style);
    t = new CSSHelp(doc);
    // JSDOM does not implement latest CSSOM spec. As such,
    // conditionText property needs to be manually added.
    // REF: https://github.com/freeCodeCamp/freeCodeCamp/pull/42148#issuecomment-847291137
    const mediaRule = t.getCSSRules('media')?.[0] as CSSMediaRule;
    const conditionText = mediaRule.media[0];
    mediaRule.conditionText = conditionText;
  });
  describe('getStyleDeclaration', () => {
    it('should return a CSSStyleDeclartion array of length 1', () => {
      expect(t.getStyleDeclarations('*')?.length).toEqual(1);
    });
    it('should return a non-empty CSSStyleDeclaration array', () => {
      expect(t.getStyleDeclaration('.bb1')).toBeTruthy();
    });
  });
  describe('isPropertyUsed', () => {
    it('should return true on existing properties', () => {
      expect(t.isPropertyUsed('height')).toBeTruthy();
    });
    it('should return true on existing custom properties', () => {
      expect(t.isPropertyUsed('--building-color1')).toBeTruthy();
    });
  });
  describe('isDeclaredAfter', () => {
    it('should return true if existing style is declared after another', () => {
      expect(t.getStyleRule('.bb1a')?.isDeclaredAfter('.bb1')).toBeTruthy();
    });
  });
  describe('getPropertyValue', () => {
    it('should return custom property value needing trim', () => {
      expect(
        t
          .getStyleDeclaration(':root')
          ?.getPropertyValue('--building-color1')
          .trim()
      ).toEqual('#aa80ff');
    });
    it('should return value to existing property', () => {
      expect(
        t.getStyleDeclaration('.bb4a')?.getPropertyValue('background-color')
      ).toBeTruthy();
    });
    it('should return property value without evaluating result', () => {
      expect(
        t.getStyleDeclaration('.bb4a')?.getPropertyValue('background-color')
      ).toEqual('var(--building-color4)');
    });
  });
  describe('getCSSRules', () => {
    it('should return a CSSRules array of length 1', () => {
      expect(t.getCSSRules('media')?.length).toEqual(1);
    });
  });
  describe('getRuleListsWithinMedia', () => {
    it('should return a CSSMediaRule array with a selectable CSSStyleRule', () => {
      expect(
        t
          .getRuleListsWithinMedia('(max-width: 1000px)')
          .find(x => x.selectorText === '.sky')
      ).toBeTruthy();
    });
    it('should return CSSStyleDeclaration property with complex value', () => {
      // NOTE: JSDOM causes value to have tabbed characters, DOM has single-line values.
      expect(
        t
          .getRuleListsWithinMedia('(max-width: 1000px)')
          .find(x => x.selectorText === '.sky')?.style?.background
      ).toEqual(
        `radial-gradient(
      closest-corner circle at 15% 15%,
      #ffcf33,
      #ffcf33 20%,
      #ffff66 21%,
      #bbeeff 100%
    )`
      );
    });
  });
  afterEach(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });
});
