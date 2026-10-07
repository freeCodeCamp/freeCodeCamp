import getParser, { Options as ParserOptions } from './parser/index.js';
import descriptionTokenizer from './parser/tokenizers/description.js';
import nameTokenizer from './parser/tokenizers/name.js';
import tagTokenizer from './parser/tokenizers/tag.js';
import typeTokenizer from './parser/tokenizers/type.js';
import getStringifier from './stringifier/index.js';
import alignTransform from './transforms/align.js';
import indentTransform from './transforms/indent.js';
import crlfTransform from './transforms/crlf.js';
import { flow as flowTransform } from './transforms/index.js';
import { rewireSpecs, rewireSource, seedBlock, seedTokens } from './util.js';

export * from './primitives.js';

export function parse(source: string, options: Partial<ParserOptions> = {}) {
  return getParser(options)(source);
}

export const stringify = getStringifier();
export { default as inspect } from './stringifier/inspect.js';

export const transforms = {
  flow: flowTransform,
  align: alignTransform,
  indent: indentTransform,
  crlf: crlfTransform,
};

export const tokenizers = {
  tag: tagTokenizer,
  type: typeTokenizer,
  name: nameTokenizer,
  description: descriptionTokenizer,
};

export const util = { rewireSpecs, rewireSource, seedBlock, seedTokens };
