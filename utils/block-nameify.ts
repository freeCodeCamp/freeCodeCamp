import preFormattedBlockNames from './preformatted-block-names.json';

export function blockNameify(
  phrase: keyof typeof preFormattedBlockNames
): string {
  return preFormattedBlockNames[phrase];
}
