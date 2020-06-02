const visit = require('unist-util-visit');
const YAML = require('js-yaml');
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const raw = require('rehype-raw');

const processor = unified()
  .use(markdown)
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(html);

function mdToHTML(str) {
  return processor.processSync(str).toString();
}

function plugin() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'code', visitor);

    function visitor(node) {
      const { lang, value } = node;
      if (lang === 'yml') {
        const tests = YAML.load(value);
        if (tests.question) {
          // mdToHTML can not parse numbers. If an answer is a number
          // (i.e. 5, not '5') it has to be converted.
          tests.question.answers = tests.question.answers.map(answer =>
            mdToHTML(answer.toString())
          );
          tests.question.text = mdToHTML(tests.question.text);
        }
        file.data = {
          ...file.data,
          ...tests
        };
      }
    }
  }
}

module.exports = plugin;
module.exports.mdToHTML = mdToHTML;
