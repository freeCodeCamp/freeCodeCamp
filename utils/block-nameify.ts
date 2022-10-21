import preFormattedBlockNames from './preformatted-block-names.json';

export type BlockNames = keyof typeof preFormattedBlockNames;

export function blockNameify(phrase: BlockNames): string {
  return preFormattedBlockNames[phrase];
}
