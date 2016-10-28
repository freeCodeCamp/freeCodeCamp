const preFormattedBlockNames = {
  'html5-and-css': 'HTML5 and CSS',
  jquery: 'jQuery',
  'json-apis-and-ajax': 'JSON APIs and Ajax',
  mongodb: 'MongoDB',
  'api-projects': 'API Projects',
  'the-dom': 'The DOM',
  devops: 'DevOps'
};
const noFormatting = [
  'and',
  'for',
  'of',
  'the',
  'up',
  'with'
];

export default function blockNameify(phrase) {
  const preFormatted = preFormattedBlockNames[phrase] || '';
  if (preFormatted) {
    return preFormatted;
  }
  return phrase.split('-')
    .map((word) => {
      if (noFormatting.includes(word)) {
        return word;
      }
      if (word === 'javascript') {
        return 'JavaScript';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
