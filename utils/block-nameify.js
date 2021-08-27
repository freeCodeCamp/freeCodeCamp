const preFormattedBlockNames = require('./preformatted-block-names.json');

const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with'];

exports.blockNameify = function blockNameify(phrase) {
  const preFormatted = preFormattedBlockNames[phrase] || '';
  if (preFormatted) {
    return preFormatted;
  }
  return phrase
    .split('-')
    .map(word => {
      if (noFormatting.indexOf(word) !== -1) {
        return word;
      }
      if (word === 'javascript') {
        return 'JavaScript';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
