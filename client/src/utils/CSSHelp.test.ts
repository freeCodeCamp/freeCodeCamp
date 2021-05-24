/* global describe it expect */
import { cssString } from './__fixtures/curriculum-helpers-css';
import CSSHelp from './CSSHelp';

describe('CSSHelp should pass all tests..', () => {
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  const doc = document;
  let t: CSSHelp;
  beforeAll(() => {
    const style = doc.createElement('style');
    style.innerHTML = cssString as string;
    doc.head.appendChild(style);
    t = new CSSHelp(doc);
  });
  it('should find one `*` selector', () => {
    expect(t.getStyleDeclarations('*')?.length).toEqual(1);
  });
  it('should find the `.bb1` selector', () => {
    expect(t.getStyleDeclaration('.bb1')).toBeTruthy();
  });
  it('should find a `height` property', () => {
    expect(t.isPropertyUsed('height')).toBeTruthy();
  });
  it('should find a `.bb1a` style after a `.bb1` style declaration', () => {
    expect(t.getStyleRule('.bb1a')?.isDeclaredAfter('.bb1')).toBeTruthy();
  });
  it('should find a custom `--building-color1` property', () => {
    expect(t.isPropertyUsed('--building-color1')).toBeTruthy();
  });
  it('should find `--building-color1` to have a value of `#aa80ff`', () => {
    expect(
      t
        .getStyleDeclaration(':root')
        ?.getPropertyValue('--building-color1')
        .trim()
    ).toEqual('#aa80ff');
  });
  it('should find a `.bb4a` selector with a `background-color` property', () => {
    expect(
      t.getStyleDeclaration('.bb4a')?.getPropertyValue('background-color')
    ).toBeTruthy();
  });
  it('should find a `.bb4a` selector with property `var(--building-color4)` to set the `background-color` property', () => {
    expect(
      t.getStyleDeclaration('.bb4a')?.getPropertyValue('background-color')
    ).toEqual('var(--building-color4)');
  });
  it('should find a `media` rule with length 1', () => {
    expect(t.getCSSRules('media')?.length).toEqual(1);
  });
  it('should find a `.sky` selector within the `media` rule with condition `max-width: 1000px`', () => {
    const mediaRule = t.getCSSRules('media')?.[0] as CSSMediaRule;
    const conditionText = mediaRule.media[0];
    mediaRule.conditionText = conditionText;
    expect(
      t
        .getRuleListsWithinMedia('(max-width: 1000px)')
        .find(x => x.selectorText === '.sky')
    ).toBeTruthy();
  });
  it('should find a `.sky` selector within media rule to have a complex `background` property', () => {
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
  afterAll(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });
});
