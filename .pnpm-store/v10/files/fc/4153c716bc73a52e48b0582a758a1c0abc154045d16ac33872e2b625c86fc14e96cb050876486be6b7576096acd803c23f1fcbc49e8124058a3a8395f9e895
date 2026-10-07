import type { TAG_ID } from './html.js';
export declare enum TokenType {
    CHARACTER = 0,
    NULL_CHARACTER = 1,
    WHITESPACE_CHARACTER = 2,
    START_TAG = 3,
    END_TAG = 4,
    COMMENT = 5,
    DOCTYPE = 6,
    EOF = 7,
    HIBERNATION = 8
}
export interface Location {
    /** One-based line index of the first character. */
    startLine: number;
    /** One-based column index of the first character. */
    startCol: number;
    /** Zero-based first character index. */
    startOffset: number;
    /** One-based line index of the last character. */
    endLine: number;
    /** One-based column index of the last character. Points directly *after* the last character. */
    endCol: number;
    /** Zero-based last character index. Points directly *after* the last character. */
    endOffset: number;
}
export interface LocationWithAttributes extends Location {
    /** Start tag attributes' location info. */
    attrs?: Record<string, Location>;
}
export interface ElementLocation extends LocationWithAttributes {
    /** Element's start tag location info. */
    startTag?: Location;
    /**
     * Element's end tag location info.
     * This property is undefined, if the element has no closing tag.
     */
    endTag?: Location;
}
interface TokenBase {
    readonly type: TokenType;
    location: Location | null;
}
export interface DoctypeToken extends TokenBase {
    readonly type: TokenType.DOCTYPE;
    name: string | null;
    forceQuirks: boolean;
    publicId: string | null;
    systemId: string | null;
}
export interface Attribute {
    /** The name of the attribute. */
    name: string;
    /** The namespace of the attribute. */
    namespace?: string;
    /** The namespace-related prefix of the attribute. */
    prefix?: string;
    /** The value of the attribute. */
    value: string;
}
export interface TagToken extends TokenBase {
    readonly type: TokenType.START_TAG | TokenType.END_TAG;
    tagName: string;
    /** Used to cache the ID of the tag name. */
    tagID: TAG_ID;
    selfClosing: boolean;
    ackSelfClosing: boolean;
    attrs: Attribute[];
    location: LocationWithAttributes | null;
}
export declare function getTokenAttr(token: TagToken, attrName: string): string | null;
export interface CommentToken extends TokenBase {
    readonly type: TokenType.COMMENT;
    data: string;
}
export interface EOFToken extends TokenBase {
    readonly type: TokenType.EOF;
}
export interface CharacterToken extends TokenBase {
    type: TokenType.CHARACTER | TokenType.NULL_CHARACTER | TokenType.WHITESPACE_CHARACTER;
    chars: string;
}
export type Token = DoctypeToken | TagToken | CommentToken | EOFToken | CharacterToken;
export {};
