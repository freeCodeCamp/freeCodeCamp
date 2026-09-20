const { join } = require('path');
const remark = require('remark');
const directive = require('remark-directive');
const frontmatter = require('remark-frontmatter');
const { read } = require('to-vfile');

const parseFixture = async (filename) => remark()
  .use(directive)
  .use(frontmatter, ['yaml'])
  .parse(await read(join(__dirname, filename)));


module.exports = parseFixture;
