'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluralize;
function pluralize(word, count, ending) {
  return `${count} ${word}${count === 1 ? '' : ending}`;
}