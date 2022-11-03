import preFormattedBlockNames from './preformatted-block-names.json';

const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with'];

export function blockNameify(phrase: string): string {
  const preFormatted =
    (preFormattedBlockNames as Record<string, string>)[phrase] || '';
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
}
