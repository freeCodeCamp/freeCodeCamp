const matter = require('gray-matter');

const checkFrontmatter = (fullPath, isTranslation, content) => {
  const { data: frontmatter } = matter(content);
  let errors = [];
  if (!frontmatter || _.isEmpty(frontmatter) || !frontmatter.title) {
    errors.push(`${fullPath} is missing \`title key\` frontmatter.`);
  }
  if (isTranslation && !frontmatter.localeTitle) {
    errors.push(`${fullPath} is missing \`localeTitle\`frontmatter.`);
  }
  return errors;
}
