const { read } = require('to-vfile');
const remark = require('remark');
const mdx = require('remark-mdx');
const frontmatter = require('remark-frontmatter');
const jsxToHtml = require('../plugins/replace-jsx-with-html');

(async () => {
  const path = './example.mdx';
  const file = await read(path);
  await remark()
    .use(mdx)
    .use(frontmatter, ['yaml'])
    .use(jsxToHtml, ['description', 'instructions', 'hints', 'question'])
    .use(() => tree => console.log(JSON.stringify(tree)))
    .process(file);
})();
