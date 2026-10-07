import { Options as ParserOptions } from './parser/index.js';
import descriptionTokenizer from './parser/tokenizers/description.js';
import nameTokenizer from './parser/tokenizers/name.js';
import tagTokenizer from './parser/tokenizers/tag.js';
import typeTokenizer from './parser/tokenizers/type.js';
import alignTransform from './transforms/align.js';
import indentTransform from './transforms/indent.js';
import crlfTransform from './transforms/crlf.js';
import { flow as flowTransform } from './transforms/index.js';
import { rewireSpecs, rewireSource, seedBlock, seedTokens } from './util.js';
export * from './primitives.js';
export declare function parse(source: string, options?: Partial<ParserOptions>): import("./primitives.js").Block[];
export declare const stringify: import("./stringifier/index.js").Stringifier;
export { default as inspect } from './stringifier/inspect.js';
export declare const transforms: {
    flow: typeof flowTransform;
    align: typeof alignTransform;
    indent: typeof indentTransform;
    crlf: typeof crlfTransform;
};
export declare const tokenizers: {
    tag: typeof tagTokenizer;
    type: typeof typeTokenizer;
    name: typeof nameTokenizer;
    description: typeof descriptionTokenizer;
};
export declare const util: {
    rewireSpecs: typeof rewireSpecs;
    rewireSource: typeof rewireSource;
    seedBlock: typeof seedBlock;
    seedTokens: typeof seedTokens;
};
