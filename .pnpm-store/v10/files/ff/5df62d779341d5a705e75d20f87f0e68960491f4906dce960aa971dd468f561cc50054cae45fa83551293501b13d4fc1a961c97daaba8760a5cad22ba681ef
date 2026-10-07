import { Composer } from './compose/composer';
import type { Reviver } from './doc/applyReviver';
import type { Replacer } from './doc/Document';
import { Document } from './doc/Document';
import type { Node, ParsedNode } from './nodes/Node';
import type { CreateNodeOptions, DocumentOptions, ParseOptions, SchemaOptions, ToJSOptions, ToStringOptions } from './options';
export interface EmptyStream extends Array<Document.Parsed>, ReturnType<Composer['streamInfo']> {
    empty: true;
}
/**
 * Parse the input as a stream of YAML documents.
 *
 * Documents should be separated from each other by `...` or `---` marker lines.
 *
 * @returns If an empty `docs` array is returned, it will be of type
 *   EmptyStream and contain additional stream information. In
 *   TypeScript, you should use `'empty' in docs` as a type guard for it.
 */
export declare function parseAllDocuments<Contents extends Node = ParsedNode, Strict extends boolean = true>(source: string, options?: ParseOptions & DocumentOptions & SchemaOptions): Array<Contents extends ParsedNode ? Document.Parsed<Contents, Strict> : Document<Contents, Strict>> | EmptyStream;
/** Parse an input string into a single YAML.Document */
export declare function parseDocument<Contents extends Node = ParsedNode, Strict extends boolean = true>(source: string, options?: ParseOptions & DocumentOptions & SchemaOptions): Contents extends ParsedNode ? Document.Parsed<Contents, Strict> : Document<Contents, Strict>;
/**
 * Parse an input string into JavaScript.
 *
 * Only supports input consisting of a single YAML document; for multi-document
 * support you should use `YAML.parseAllDocuments`. May throw on error, and may
 * log warnings using `console.warn`.
 *
 * @param str - A string with YAML formatting.
 * @param reviver - A reviver function, as in `JSON.parse()`
 * @returns The value will match the type of the root value of the parsed YAML
 *   document, so Maps become objects, Sequences arrays, and scalars result in
 *   nulls, booleans, numbers and strings.
 */
export declare function parse(src: string, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any;
export declare function parse(src: string, reviver: Reviver, options?: ParseOptions & DocumentOptions & SchemaOptions & ToJSOptions): any;
/**
 * Stringify a value as a YAML document.
 *
 * @param replacer - A replacer array or function, as in `JSON.stringify()`
 * @returns Will always include `\n` as the last character, as is expected of YAML documents.
 */
export declare function stringify(value: any, options?: DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions & ToStringOptions): string;
export declare function stringify(value: any, replacer?: Replacer | null, options?: string | number | (DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions & ToStringOptions)): string;
