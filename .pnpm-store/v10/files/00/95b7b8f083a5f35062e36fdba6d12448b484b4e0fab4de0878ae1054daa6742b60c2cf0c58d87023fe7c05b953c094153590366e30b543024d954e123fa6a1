import { Directives } from '../doc/directives';
import { Document } from '../doc/Document';
import type { ErrorCode } from '../errors';
import { YAMLParseError, YAMLWarning } from '../errors';
import type { ParsedNode, Range } from '../nodes/Node';
import type { DocumentOptions, ParseOptions, SchemaOptions } from '../options';
import type { Token } from '../parse/cst';
type ErrorSource = number | [number, number] | Range | {
    offset: number;
    source?: string;
};
export type ComposeErrorHandler = (source: ErrorSource, code: ErrorCode, message: string, warning?: boolean) => void;
/**
 * Compose a stream of CST nodes into a stream of YAML Documents.
 *
 * ```ts
 * import { Composer, Parser } from 'yaml'
 *
 * const src: string = ...
 * const tokens = new Parser().parse(src)
 * const docs = new Composer().compose(tokens)
 * ```
 */
export declare class Composer<Contents extends ParsedNode = ParsedNode, Strict extends boolean = true> {
    private directives;
    private doc;
    private options;
    private atDirectives;
    private prelude;
    private errors;
    private warnings;
    constructor(options?: ParseOptions & DocumentOptions & SchemaOptions);
    private onError;
    private decorate;
    /**
     * Current stream status information.
     *
     * Mostly useful at the end of input for an empty stream.
     */
    streamInfo(): {
        comment: string;
        directives: Directives;
        errors: YAMLParseError[];
        warnings: YAMLWarning[];
    };
    /**
     * Compose tokens into documents.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    compose(tokens: Iterable<Token>, forceDoc?: boolean, endOffset?: number): Generator<Document.Parsed<Contents, Strict>, void, unknown>;
    /** Advance the composer by one CST token. */
    next(token: Token): Generator<Document.Parsed<Contents, Strict>, void, unknown>;
    /**
     * Call at end of input to yield any remaining document.
     *
     * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
     * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
     */
    end(forceDoc?: boolean, endOffset?: number): Generator<Document.Parsed<Contents, Strict>, void, unknown>;
}
export {};
