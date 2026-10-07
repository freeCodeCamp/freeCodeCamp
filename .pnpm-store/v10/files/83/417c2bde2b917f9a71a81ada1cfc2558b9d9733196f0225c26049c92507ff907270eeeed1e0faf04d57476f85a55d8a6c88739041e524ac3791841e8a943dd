export { createScalarToken, resolveAsScalar, setScalarValue } from './cst-scalar';
export { stringify } from './cst-stringify';
export type { Visitor, VisitPath } from './cst-visit';
export { visit } from './cst-visit';
export interface SourceToken {
    type: 'byte-order-mark' | 'doc-mode' | 'doc-start' | 'space' | 'comment' | 'newline' | 'directive-line' | 'anchor' | 'tag' | 'seq-item-ind' | 'explicit-key-ind' | 'map-value-ind' | 'flow-map-start' | 'flow-map-end' | 'flow-seq-start' | 'flow-seq-end' | 'flow-error-end' | 'comma' | 'block-scalar-header';
    offset: number;
    indent: number;
    source: string;
}
export interface ErrorToken {
    type: 'error';
    offset: number;
    source: string;
    message: string;
}
export interface Directive {
    type: 'directive';
    offset: number;
    source: string;
}
export interface Document {
    type: 'document';
    offset: number;
    start: SourceToken[];
    value?: Token;
    end?: SourceToken[];
}
export interface DocumentEnd {
    type: 'doc-end';
    offset: number;
    source: string;
    end?: SourceToken[];
}
export interface FlowScalar {
    type: 'alias' | 'scalar' | 'single-quoted-scalar' | 'double-quoted-scalar';
    offset: number;
    indent: number;
    source: string;
    end?: SourceToken[];
}
export interface BlockScalar {
    type: 'block-scalar';
    offset: number;
    indent: number;
    props: Token[];
    source: string;
}
export interface BlockMap {
    type: 'block-map';
    offset: number;
    indent: number;
    items: Array<{
        start: SourceToken[];
        explicitKey?: true;
        key?: never;
        sep?: never;
        value?: never;
    } | {
        start: SourceToken[];
        explicitKey?: true;
        key: Token | null;
        sep: SourceToken[];
        value?: Token;
    }>;
}
export interface BlockSequence {
    type: 'block-seq';
    offset: number;
    indent: number;
    items: Array<{
        start: SourceToken[];
        key?: never;
        sep?: never;
        value?: Token;
    }>;
}
export type CollectionItem = {
    start: SourceToken[];
    key?: Token | null;
    sep?: SourceToken[];
    value?: Token;
};
export interface FlowCollection {
    type: 'flow-collection';
    offset: number;
    indent: number;
    start: SourceToken;
    items: CollectionItem[];
    end: SourceToken[];
}
export type Token = SourceToken | ErrorToken | Directive | Document | DocumentEnd | FlowScalar | BlockScalar | BlockMap | BlockSequence | FlowCollection;
export type TokenType = SourceToken['type'] | DocumentEnd['type'] | FlowScalar['type'];
/** The byte order mark */
export declare const BOM = "\uFEFF";
/** Start of doc-mode */
export declare const DOCUMENT = "\u0002";
/** Unexpected end of flow-mode */
export declare const FLOW_END = "\u0018";
/** Next token is a scalar value */
export declare const SCALAR = "\u001F";
/** @returns `true` if `token` is a flow or block collection */
export declare const isCollection: (token: Token | null | undefined) => token is BlockMap | BlockSequence | FlowCollection;
/** @returns `true` if `token` is a flow or block scalar; not an alias */
export declare const isScalar: (token: Token | null | undefined) => token is FlowScalar | BlockScalar;
/** Get a printable representation of a lexer token */
export declare function prettyToken(token: string): string;
/** Identify the type of a lexer token. May return `null` for unknown tokens. */
export declare function tokenType(source: string): TokenType | null;
