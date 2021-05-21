const CSSTypes = {
  style: 1,
  import: 3,
  media: 4,
  fontface: 5,
  keyframes: 7
};

// @ts-ignore - top-class coding...
CSSStyleRule.prototype.isDeclaredAfter = function (selector: string) {
  // Could use some clean up...
  // @ts-ignore
  const cssStyleRules = Array.from(this.parentStyleSheet.cssRules)?.filter(
    ele => ele.type === CSSTypes.style
  ) as CSSStyleRule[];
  const previousStyleRule = cssStyleRules.find(
    ele => ele?.selectorText === selector
  );
  // @ts-ignore
  const currPosition = Array.from(this.parentStyleSheet.cssRules).indexOf(this);
  // @ts-ignore
  const prevPosition = Array.from(
    // @ts-ignore
    previousStyleRule?.parentStyleSheet?.cssRules
    // @ts-ignore
  ).indexOf(previousStyleRule);
  return currPosition > prevPosition;
};

class CSSHelp {
  doc: HTMLDocument;
  constructor(doc: HTMLDocument) {
    this.doc = doc;
  }
  getStyleDeclarations(element: string): CSSStyleDeclaration[] | undefined {
    const styleSheet = this.getStyleSheet();
    const styleRule = Array.from(styleSheet.cssRules)?.filter(
      ele => ele.type === CSSTypes.style
    ) as CSSStyleRule[] | undefined;
    return styleRule
      ?.filter(ele => ele?.selectorText === element)
      .map(x => x.style);
  }
  getStyleDeclaration(element: string): CSSStyleDeclaration | undefined {
    const styleSheet = this.getStyleSheet();
    const styleRule = Array.from(styleSheet.cssRules)?.filter(
      ele => ele.type === CSSTypes.style
    ) as CSSStyleRule[] | undefined;
    return styleRule?.find(ele => ele?.selectorText === element)?.style;
  }
  getStyleRule(selector: string): CSSStyleRule | undefined {
    const styleSheet = this.getStyleSheet();
    const styleRule = Array.from(styleSheet.cssRules)?.filter(
      ele => ele.type === CSSTypes.style
    ) as CSSStyleRule[] | undefined;
    return styleRule?.find(ele => ele?.selectorText === selector);
  }
  getCSSRules(element?: string): CSSRule[] | undefined {
    const styleSheet = this.getStyleSheet();
    const cssRules = Array.from(styleSheet.cssRules);
    switch (element) {
      case 'media':
        return cssRules?.filter(ele => ele.type === CSSTypes.media);
      case 'fontface':
        return cssRules?.filter(ele => ele.type === CSSTypes.fontface);
      case 'import':
        return cssRules?.filter(ele => ele.type === CSSTypes.import);
      case 'keyframes':
        return cssRules?.filter(ele => ele.type === CSSTypes.keyframes);
      default:
        return cssRules;
    }
  }
  isPropertyUsed(property: string): boolean {
    const styleSheet = this.getStyleSheet();
    const cssStyleRules = Array.from(styleSheet.cssRules).filter(
      ele => ele.type === CSSTypes.style
    ) as CSSStyleRule[];
    // @ts-ignore
    return cssStyleRules.some(ele => ele?.style?.getPropertyValue(property));
  }
  getRuleListsWithinMedia(conditionText: string): CSSStyleRule[] {
    const medias = this.getCSSRules('media') as CSSMediaRule[] | undefined;
    const cond = medias?.find(x => x.conditionText === conditionText) as
      | CSSMediaRule
      | undefined;
    const cssRules = cond?.cssRules as CSSRuleList;
    return Array.from(cssRules) as CSSStyleRule[];
  }
  getStyleSheet() {
    // TODO: Change selector to match exactly 'styles.css'
    const link = this.doc?.querySelector(
      "link[href*='styles']"
    ) as HTMLLinkElement;
    return link?.sheet as CSSStyleSheet;
  }
}

export default CSSHelp;

/*
Example usage
const a = console.assert;

const t = new CSSHelp(document);
console.log(t.getStyleSheet());
// You should use the * selector
a(t.getStyleDeclarations("*")?.length === 1);

// You should use the 'border' property to style all elements
a(t.isPropertyUsed("height"));

// You should declare the '.bb1a' style after the `.bb1` style declaration
a(t.getStyleRule(".bb1a")?.isDeclaredAfter(".bb1"));
*/
