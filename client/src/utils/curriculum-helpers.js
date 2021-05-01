import strip from 'strip-comments';

export const removeJSComments = codeStr => {
  try {
    return strip(codeStr);
  } catch (err) {
    return codeStr;
  }
};

const removeHtmlComments = str => str.replace(/<!--[\s\S]*?(-->|$)/g, '');

const removeCssComments = str => str.replace(/\/\*[\s\S]+?\*\//g, '');

const removeWhiteSpace = (str = '') => {
  return str.replace(/\s/g, '');
};

const curriculumHelpers = {
  removeHtmlComments,
  removeCssComments,
  removeWhiteSpace
};

export default curriculumHelpers;
