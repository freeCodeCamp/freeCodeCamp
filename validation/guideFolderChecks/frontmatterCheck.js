const matter = require('gray-matter');
const _ = require('lodash');

const frontmatterCheck = (fullPath, isTranslation, fileContent) => {
  const { data: frontmatter } = matter(fileContent);
  let errors = [];
  if (!frontmatter || _.isEmpty(frontmatter) || !frontmatter.title) {
    errors.push({
      msg: `Missing \`title key\` frontmatter.`,
      fullPath
    });
  }
  if (isTranslation && !frontmatter.localeTitle) {
    errors.push({
      msg: `Missing \`localeTitle key\`frontmatter.`,
      fullPath
    });
  }
  return errors;
};

module.exports = { frontmatterCheck };
