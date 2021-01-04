const vfile = require('to-vfile');
const frontmatter = require('remark-frontmatter');

const textToData = require('./plugins/text-to-data');
const testsToData = require('./plugins/tests-to-data');
const questionToData = require('./plugins/question-to-data');
const { baseProcessor } = require('./utils');

const textProcessor = baseProcessor()
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
