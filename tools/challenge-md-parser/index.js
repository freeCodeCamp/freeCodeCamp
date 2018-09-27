const unified = require('unified');
const vfile = require('to-vfile');
const report = require('vfile-reporter');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const frontmatter = require('remark-frontmatter');
const raw = require('rehype-raw');

const frontmatterToData = require('./frontmatter-to-data');
const textToData = require('./text-to-data');
const testsToData = require('./tests-to-data');

const processor = unified()
  .use(markdown)
  .use(frontmatter, ['yaml'])
  .use(frontmatterToData)
  .use(testsToData)
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(textToData, ['description', 'instructions'])
  // the plugins below are just to stop the processor from throwing
  // we need to write a compiler that can create graphql nodes
  .use(html);

processor.process(vfile.readSync('maybe.md'), function(err, file) {
  if (err) {
    throw err;
  }
  console.error(report(file));
  console.log(JSON.stringify(file.data, null, 2));
});
