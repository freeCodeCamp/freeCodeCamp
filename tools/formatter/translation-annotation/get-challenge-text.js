const unified = require('unified');
const vfile = require('to-vfile');
const remarkParse = require('remark-parse');
const frontmatter = require('remark-frontmatter');

const textToData = require('./plugins/text-to-data');
const testsToData = require('./plugins/tests-to-data');
const questionToData = require('./plugins/question-to-data');
const tableAndStrikethrough = require('../../challenge-md-parser/mdx/plugins/table-and-strikethrough');

const textProcessor = unified()
  .use(remarkParse)
  .use(tableAndStrikethrough)
  .use(textToData)
  .use(testsToData)
  .use(questionToData)
  .use(frontmatter, ['yaml']);

exports.getText = createProcessor(textProcessor);

function createProcessor(processor) {
  return async vFileOrPath => {
    const file =
      typeof vFileOrPath === 'string'
        ? vfile.readSync(vFileOrPath)
        : vFileOrPath;
    const tree = processor.parse(file);
    await processor.run(tree, file);
    return file.data;
  };
}
