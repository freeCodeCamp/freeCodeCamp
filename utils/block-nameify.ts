import preFormattedBlockNames from './preformatted-block-names.json';
import preFormattedWords from './preformatted-words.json';

const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with', 'to', 'by', 'a'];

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
      if ((preFormattedWords as Record<string, string>)[word]) {
        return (preFormattedWords as Record<string, string>)[word];
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
