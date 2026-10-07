"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownParser;

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// double char markdown matchers
const BOLD_REGEX = /\*{2}([^*]+)\*{2}/g;
const UNDERLINE_REGEX = /_{2}([^_]+)_{2}/g;
const STRIKETHROUGH_REGEX = /~{2}([^~]+)~{2}/g; // single char markdown matchers

const ITALIC_REGEX = /(?<!\\)\*(.+)(?<!\\)\*|(?<!\\)_(.+)(?<!\\)_/g;

function markdownParser(input) {
  input = input.replace(BOLD_REGEX, (...args) => _chalk().default.bold(args[1]));
  input = input.replace(UNDERLINE_REGEX, (...args) => _chalk().default.underline(args[1]));
  input = input.replace(STRIKETHROUGH_REGEX, (...args) => _chalk().default.strikethrough(args[1]));
  input = input.replace(ITALIC_REGEX, (...args) => _chalk().default.italic(args[1] || args[2]));
  input = input.replace(/(?<!\\)\\/g, '');
  return input;
}