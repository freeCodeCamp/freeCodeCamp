import { parse } from '@babel/parser';
import generate from '@babel/generator';

const removeHtmlComments = (str: string): string =>
  str.replace(/<!--[\s\S]*?(-->|$)/g, '');

const removeCssComments = (str: string): string =>
  str.replace(/\/\*[\s\S]+?\*\//g, '');

export const removeJSComments = (codeStr: string): string => {
  // Note: removes trailing new lines and tailing spaces at end of lines
  const options = {
    comments: false,
    retainLines: true,
    compact: false,
    concise: false,
    minified: false
  };
  try {
    const ast = parse(codeStr);
    const { code } = generate(ast, options, codeStr);
    return code;
  } catch (err) {
    return codeStr;
  }
};

const removeWhiteSpace = (str = ''): string => {
  return str.replace(/\s/g, '');
};

const CSSTypes = {
  style: 1,
  import: 3,
  media: 4,
  fontface: 5,
  keyframes: 7
};

class CSSHelp {
  doc: HTMLDocument;
  constructor(doc: HTMLDocument) {
    this.doc = doc;
  }
  getStyle = (element: string): CSSStyleDeclaration | undefined => {
    const styleRule = [...this.doc?.styleSheets?.[1]?.cssRules]?.filter(
      ele => ele.type === CSSTypes.style
    ) as [CSSStyleRule] | undefined;
    return styleRule?.find(ele => ele?.selectorText === element)?.style;
  };
  getCSSRules = (element?: string): CSSRule[] | undefined => {
    switch (element) {
      case 'media':
        return [...this.doc?.styleSheets?.[1]?.cssRules]?.filter(
          ele => ele.type === CSSTypes.media
        );
      case 'fontface':
        return [...this.doc?.styleSheets?.[1]?.cssRules]?.filter(
          ele => ele.type === CSSTypes.fontface
        );
      case 'import':
        return [...this.doc?.styleSheets?.[1]?.cssRules]?.filter(
          ele => ele.type === CSSTypes.import
        );
      case 'keyframes':
        return [...this.doc?.styleSheets?.[1]?.cssRules]?.filter(
          ele => ele.type === CSSTypes.keyframes
        );
      default:
        return [...this.doc?.styleSheets?.[1]?.cssRules];
    }
  };
}

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace,
  CSSHelp,
  CSSTypes
};

export default curriculumHelpers;
