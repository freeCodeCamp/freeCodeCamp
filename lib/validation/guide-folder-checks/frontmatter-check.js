const matter = require('gray-matter');
const _ = require('lodash');

const frontmatterCheck = (fullPath, isTranslation, fileContent) => {
  let errors = [];
  try {
    const { data: frontmatter } = matter(fileContent);
    if (!frontmatter || _.isEmpty(frontmatter) || !frontmatter.title) {
      errors.push({
        msg: `Misplaced or missing \`title\` keyword in the front matter block. Review the [style guide](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-guide-articles.md#title) for more details.`,
        fullPath
      });
    }
    if (isTranslation && !frontmatter.localeTitle) {
      errors.push({
        msg: `Missing \`localeTitle\` keyword in the front matter block. Review the [style guide](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/style-guide-for-guide-articles.md#title) for more details.`,
        fullPath
      });
    }
  } catch (err) {
    errors.push({
      msg: `Unexpected syntax found in the front matter block. Review Travis CI build Details link for more details.`,
      fullPath
    });
  }

  return errors;
};

module.exports = { frontmatterCheck };
