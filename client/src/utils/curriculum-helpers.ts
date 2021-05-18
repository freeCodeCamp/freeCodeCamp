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

const getStyles = (doc = {}, element = '') => {
  return element
    ? Object.values(doc?.styleSheets?.[1]?.cssRules)?.find(
        ele => ele.selectorText === element
      ).style
    : doc?.styleSheets?.[1]?.cssRules;
};

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace,
  getStyles
};

export default curriculumHelpers;
