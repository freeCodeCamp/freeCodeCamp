const unified = require('unified');
const vfile = require('to-vfile');
const markdown = require('remark-parse');
const frontmatter = require('remark-frontmatter');

const textToData = require('./plugins/text-to-data');
const testsToData = require('./plugins/tests-to-data');

const textProcessor = unified()
  .use(markdown)
  .use(textToData)
  .use(testsToData)
  .use(frontmatter, ['yaml']);

exports.getText = createProcessor(textProcessor);

function createProcessor(processor) {
  return async msg => {
    const file = typeof msg === 'string' ? vfile.readSync(msg) : msg;
    const tree = processor.parse(file);
    await processor.run(tree, file);
    return file.data;
  };
}
