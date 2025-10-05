const remark = require('remark');
const directive = require('remark-directive');
const frontmatter = require('remark-frontmatter');
const { read } = require('to-vfile');

(async () => {
  const path = './example.md';
  const file = await read(path);
  const out = await remark()
    .use(directive)
    .use(frontmatter, ['yaml'])
    .parse(file);

  console.log(out);
})();
