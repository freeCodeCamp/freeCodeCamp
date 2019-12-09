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

const codeToBackticksProcessor = unified()
  .use(markdown)
  .use(codeToBackticks)
  .use(stringify, { fences: true, emphasis: '*' })
  .use(frontmatter, ['yaml']);

// Despite entities defaulting to false, some will still remain, including
// &lt;
const prettifyProcessor = unified()
  .use(markdown)
  .use(stringify, { fences: true, emphasis: '*' })
  .use(frontmatter, ['yaml']);

exports.insertSpaces = createProcessor(insertSpacesProcessor);

exports.codeToBackticks = createProcessor(codeToBackticksProcessor);

exports.prettify = createProcessor(prettifyProcessor);

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
