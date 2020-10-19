const { readSync } = require('to-vfile');
const remark = require('remark-parse');
const mdx = require('remark-mdx');
const frontmatter = require('remark-frontmatter');
const addTests = require('./plugins/add-tests');
const addImports = require('./plugins/add-imports');
const addFrontmatter = require('./plugins/add-frontmatter');
const addText = require('./plugins/add-text');
const addVideoQuestion = require('./plugins/add-video-question');
const addSeed = require('./plugins/add-seed');
const addSolution = require('./plugins/add-solution');
const jsxToHtml = require('./plugins/replace-jsx-with-html');
const tableAndStrikeThrough = require('./plugins/table-and-strikethrough');
const unified = require('unified');

const processor = unified()
  .use(remark)
  .use(tableAndStrikeThrough)
  // TODO: consider checking for syntax errors and providing a message that
  // explains how to work around them. i.e. import -> <p>import</p>
  .use(mdx)
  .use(frontmatter, ['yaml'])
  .use(addFrontmatter)
  // the order of addImports and jsxToHtml matters if we want to allow imports
  // into those sections or not.
  .use(addImports)
  .use(jsxToHtml, ['description', 'instructions', 'hints', 'question'])
  .use(addText, ['description', 'instructions'])
  // TODO: rename test->hint everywhere? It should make things easier to reason
  // about.
  .use(addTests)
  .use(addVideoQuestion)
  .use(addSeed)
  .use(addSolution);

exports.parseMDX = function parseMDX(filename) {
  return new Promise((resolve, reject) => {
    const file = readSync(filename);
    const tree = processor.parse(file);
    processor.run(tree, file, function(err, node, file) {
      if (err) {
        err.message += ' in file ' + filename;
        reject(err);
      }
      delete file.contents;
      return resolve(file.data);
    });
  });
};
