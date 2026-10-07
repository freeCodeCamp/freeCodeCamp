import type { LineCounter } from './parse/line-counter';
export type ErrorCode = 'ALIAS_PROPS' | 'BAD_ALIAS' | 'BAD_DIRECTIVE' | 'BAD_DQ_ESCAPE' | 'BAD_INDENT' | 'BAD_PROP_ORDER' | 'BAD_SCALAR_START' | 'BLOCK_AS_IMPLICIT_KEY' | 'BLOCK_IN_FLOW' | 'DUPLICATE_KEY' | 'IMPOSSIBLE' | 'KEY_OVER_1024_CHARS' | 'MISSING_CHAR' | 'MULTILINE_IMPLICIT_KEY' | 'MULTIPLE_ANCHORS' | 'MULTIPLE_DOCS' | 'MULTIPLE_TAGS' | 'NON_STRING_KEY' | 'RESOURCE_EXHAUSTION' | 'TAB_AS_INDENT' | 'TAG_RESOLVE_FAILED' | 'UNEXPECTED_TOKEN' | 'BAD_COLLECTION_TYPE';
export type LinePos = {
    line: number;
    col: number;
};
export declare class YAMLError extends Error {
    name: 'YAMLParseError' | 'YAMLWarning';
    code: ErrorCode;
    message: string;
    pos: [number, number];
    linePos?: [LinePos] | [LinePos, LinePos];
    constructor(name: YAMLError['name'], pos: [number, number], code: ErrorCode, message: string);
}
export declare class YAMLParseError extends YAMLError {
    constructor(pos: [number, number], code: ErrorCode, message: string);
}
export declare class YAMLWarning extends YAMLError {
    constructor(pos: [number, number], code: ErrorCode, message: string);
}
export declare const prettifyError: (src: string, lc: LineCounter) => (error: YAMLError) => void;
