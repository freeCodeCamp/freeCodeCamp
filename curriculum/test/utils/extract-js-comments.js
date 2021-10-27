const acorn = require('acorn');
const { commentToData } = require('./comment-to-data');

const parser = acorn.Parser;

function extractComments(js) {
  let comments = [];
  const file = { data: {} };
  try {
    parser.parse(js, { onComment: comments, ecmaVersion: 2020 });
  } catch {
    throw Error(`extract-js-comments could not parse the code below, this challenge has invalid syntax:

${js}
`);
  }
  comments
    .map(({ value }) => value.trim())
    .forEach(comment => commentToData(file, comment));
  return file.data;
}

module.exports = extractComments;
