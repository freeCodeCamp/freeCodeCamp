/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 *   Parser.
 * @param {InitialConstruct} initialize
 *   Construct.
 * @param {Omit<Point, '_bufferIndex' | '_index'> | undefined} [from]
 *   Point (optional).
 * @returns {TokenizeContext}
 *   Context.
 */
export function createTokenizer(parser: ParseContext, initialize: InitialConstruct, from?: Omit<Point, "_bufferIndex" | "_index"> | undefined): TokenizeContext;
/**
 * Restore the state.
 */
export type Restore = () => undefined;
/**
 * Info.
 */
export type Info = {
    /**
     *   Restore.
     */
    restore: Restore;
    /**
     *   From.
     */
    from: number;
};
/**
 * Handle a successful run.
 */
export type ReturnHandle = (construct: Construct, info: Info) => undefined;
import type { ParseContext } from 'micromark-util-types';
import type { InitialConstruct } from 'micromark-util-types';
import type { Point } from 'micromark-util-types';
import type { TokenizeContext } from 'micromark-util-types';
import type { Construct } from 'micromark-util-types';
//# sourceMappingURL=create-tokenizer.d.ts.map