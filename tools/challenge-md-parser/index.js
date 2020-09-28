const unified = require('unified');
const vfile = require('to-vfile');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const frontmatter = require('remark-frontmatter');
const raw = require('rehype-raw');

const frontmatterToData = require('./frontmatter-to-data');
const textToData = require('./text-to-data');
const testsToData = require('./tests-to-data');
const { challengeSeedToData } = require('./challengeSeed-to-data');
const solutionsToData = require('./solution-to-data');

const processor = unified()
  .use(markdown)
  .use(frontmatter, ['yaml'])
  .use(frontmatterToData)
  .use(testsToData)
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(solutionsToData)
  .use(textToData, ['description', 'instructions'])
  .use(challengeSeedToData)
  // the plugins below are just to stop the processor from throwing
  // we need to write a compiler that can create graphql nodes
  .use(html);

exports.parseMarkdown = function parseMarkdown(filename) {
  return new Promise((resolve, reject) =>
    processor.process(vfile.readSync(filename), function(err, file) {
      if (err) {
        err.message += ' in file ' + filename;
        reject(err);
      }
      delete file.contents;
      return resolve(file.data);
    })
  );
};
