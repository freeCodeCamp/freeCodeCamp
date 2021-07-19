import CSSHelp from './css-help';
import strip from '@freecodecamp/strip-comments';

const removeHtmlComments = (str: string): string =>
  str.replace(/<!--[\s\S]*?(-->|$)/g, '');

const removeCssComments = (str: string): string =>
  str.replace(/\/\*[\s\S]+?\*\//g, '');

export const removeJSComments = (codeStr: string): string => {
  // TODO: publish type declarations and reenable eslint
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return strip(codeStr) as string;
  } catch (err) {
    return codeStr;
  }
};

const removeWhiteSpace = (str = ''): string => {
  return str.replace(/\s/g, '');
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
function escapeRegExp(exp: string): string {
  return exp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/*
This helper checks if a function/method is called with no arguments.

Because Safari does not support lookbehinds (as of writing this on
July 14 2021), avoiding false matches on function definitions is done by
checking that only whitespace characters precede the calling name on the line
it is found on. That makes this helper incompatible with
removeWhiteSpace() above, which removes all whitespace characters.
*/
function isCalledWithNoArgs(
  calledFuncName: string,
  callingCode: string
): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const noCommentsCallingCode = strip(callingCode) as string;
  const funcExp = `^\\s*?${escapeRegExp(calledFuncName)}\\(\\s*?\\)`;
  const matches = new RegExp(funcExp, 'gm').exec(noCommentsCallingCode) ?? [];

  return !!matches.length;
}

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace,
  isCalledWithNoArgs,
  CSSHelp
};

export default curriculumHelpers;
