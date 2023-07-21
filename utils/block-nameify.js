'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.blockNameify = void 0;
const preformatted_block_names_json_1 = __importDefault(
  require('./preformatted-block-names.json')
);
const preformatted_words_json_1 = __importDefault(
  require('./preformatted-words.json')
);
const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with', 'to', 'by', 'a'];
function blockNameify(phrase) {
  const preFormatted = preformatted_block_names_json_1.default[phrase] || '';
  if (preFormatted) {
    return preFormatted;
  }
  return phrase
    .split('-')
    .map(word => {
      if (noFormatting.indexOf(word) !== -1) {
        return word;
      }
      if (preformatted_words_json_1.default[word]) {
        return preformatted_words_json_1.default[word];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
exports.blockNameify = blockNameify;
