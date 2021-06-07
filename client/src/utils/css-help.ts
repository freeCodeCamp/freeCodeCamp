export interface ExtendedStyleRule extends CSSStyleRule {
  isDeclaredAfter: (selector: string) => boolean;
}

const getIsDeclaredAfter = (styleRule: CSSStyleRule) => (selector: string) => {
  const cssStyleRules = Array.from(
    styleRule.parentStyleSheet?.cssRules || []
  )?.filter(ele => ele.type === CSSRule.STYLE_RULE) as CSSStyleRule[];
  const previousStyleRule = cssStyleRules.find(
    ele => ele?.selectorText === selector
  );
  if (!previousStyleRule) return false;
  const currPosition = Array.from(
    styleRule.parentStyleSheet?.cssRules || []
  ).indexOf(styleRule);
  const prevPosition = Array.from(
    previousStyleRule?.parentStyleSheet?.cssRules || []
  ).indexOf(previousStyleRule);
  return currPosition > prevPosition;
};

class CSSHelp {
  doc: HTMLDocument;
  constructor(doc: HTMLDocument) {
    this.doc = doc;
  }
  private _getStyleRules() {
    const styleSheet = this.getStyleSheet();
    return this.styleSheetToCssRulesArray(styleSheet).filter(
      ele => ele.type === CSSRule.STYLE_RULE
    ) as CSSStyleRule[];
  }

  getStyleDeclarations(selector: string): CSSStyleDeclaration[] {
    return this._getStyleRules()
      ?.filter(ele => ele?.selectorText === selector)
      .map(x => x.style);
  }
  getStyleDeclaration(selector: string): CSSStyleDeclaration | undefined {
    return this._getStyleRules()?.find(ele => ele?.selectorText === selector)
      ?.style;
  }
  getStyleRule(selector: string): ExtendedStyleRule | null {
    const styleRule = this._getStyleRules()?.find(
      ele => ele?.selectorText === selector
    );
    if (styleRule) {
      return {
        ...styleRule,
        isDeclaredAfter: (selector: string) =>
          getIsDeclaredAfter(styleRule)(selector)
      };
    } else {
      return null;
    }
  }
  getCSSRules(element?: string): CSSRule[] {
    const styleSheet = this.getStyleSheet();
    const cssRules = this.styleSheetToCssRulesArray(styleSheet);
    switch (element) {
      case 'media':
        return cssRules.filter(ele => ele.type === CSSRule.MEDIA_RULE);
      case 'fontface':
        return cssRules.filter(ele => ele.type === CSSRule.FONT_FACE_RULE);
      case 'import':
        return cssRules.filter(ele => ele.type === CSSRule.IMPORT_RULE);
      case 'keyframes':
        return cssRules.filter(ele => ele.type === CSSRule.KEYFRAMES_RULE);
      default:
        return cssRules;
    }
  }
  isPropertyUsed(property: string): boolean {
    return this._getStyleRules().some(ele =>
      ele.style?.getPropertyValue(property)
    );
  }
  getRuleListsWithinMedia(mediaText: string): CSSStyleRule[] {
    const medias = this.getCSSRules('media') as CSSMediaRule[];
    const cond = medias?.find(x => x?.media?.mediaText === mediaText);
    const cssRules = cond?.cssRules;
    return Array.from(cssRules || []) as CSSStyleRule[];
  }
  getStyleSheet(): CSSStyleSheet | null {
    // TODO: Change selector to match exactly 'styles.css'
    const link: HTMLLinkElement | null = this.doc?.querySelector(
      "link[href*='styles']"
    );
    const style: HTMLStyleElement | null = this.doc?.querySelector(
      'style:not([class][media])'
    );
    if (link?.sheet?.cssRules?.length) {
      return link.sheet;
    } else if (style) {
      return style.sheet;
    } else {
      return null;
    }
  }
  styleSheetToCssRulesArray(
    styleSheet: ReturnType<CSSHelp['getStyleSheet']>
  ): CSSRule[] {
    return Array.from(styleSheet?.cssRules || []);
  }
}

export default CSSHelp;
