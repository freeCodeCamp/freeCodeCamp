const acorn = require('acorn');
const jsx = require('acorn-jsx');
const { commentToData } = require('./comment-to-data');

const parser = acorn.Parser.extend(jsx());

function extractComments(jsx) {
  let comments = [];
  const file = { data: {} };
  parser.parse(jsx, { onComment: comments, ecmaVersion: 2020 });

  comments
    .map(({ value }) => value.trim())
    .forEach(comment => commentToData(file, comment));
  return file.data;
}

module.exports = extractComments;
