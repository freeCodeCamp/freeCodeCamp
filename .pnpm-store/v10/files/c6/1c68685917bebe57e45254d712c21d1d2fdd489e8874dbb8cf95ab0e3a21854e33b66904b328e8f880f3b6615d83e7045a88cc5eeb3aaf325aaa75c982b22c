"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function join(tokens) {
  return tokens.start + tokens.delimiter + tokens.postDelimiter + tokens.tag + tokens.postTag + tokens.type + tokens.postType + tokens.name + tokens.postName + tokens.description + tokens.end + tokens.lineEnd;
}

function getStringifier() {
  return block => block.source.map(({
    tokens
  }) => join(tokens)).join('\n');
}

exports.default = getStringifier;
//# sourceMappingURL=index.cjs.map
