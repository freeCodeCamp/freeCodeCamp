const unified = require('unified');
const vfile = require('to-vfile');
const markdown = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const stringify = require('remark-stringify');

const { insertSpaces } = require('./insert-spaces');
const codeToBackticks = require('./code-to-backticks');

const insertSpacesProcessor = unified()
  .use(markdown)
  .use(insertSpaces)
  .use(stringify, { fences: true, emphasis: '*' })
  .use(frontmatter, ['yaml']);
// ^ Prevents the frontmatter being modified

const getCodeToBackticksProcessor = (shouldThrow, pre) =>
  unified()
    .use(markdown)
    .use(codeToBackticks, { shouldThrow, pre })
    .use(stringify, { fences: true, emphasis: '*' })
    .use(frontmatter, ['yaml']);

// Despite entities defaulting to false, some will still remain, including
// &lt;
const prettifyProcessor = unified()
  .use(markdown)
  .use(stringify, { fences: true, emphasis: '*' })
  .use(frontmatter, ['yaml']);

exports.insertSpaces = createProcessor(insertSpacesProcessor);

exports.codeToBackticks = createProcessor(getCodeToBackticksProcessor());
exports.checkCodeToBackticks = createProcessor(
  getCodeToBackticksProcessor(true)
);

exports.getCodeToBackticksSync = shouldThrow => text =>
  getCodeToBackticksProcessor(shouldThrow, true).processSync(text);

exports.prettify = createProcessor(prettifyProcessor);
exports.prettifySync = prettifyProcessor.processSync;

function createProcessor(processor) {
  return (msg, isFile = false) => {
    const fileOrText = isFile ? vfile.readSync(msg) : msg;
    return new Promise((resolve, reject) =>
      processor.process(fileOrText, function(err, file) {
        if (err) {
          err.message += ' in file ' + msg;
          reject(err);
        }
        return resolve(file.contents);
      })
    );
  };
}
