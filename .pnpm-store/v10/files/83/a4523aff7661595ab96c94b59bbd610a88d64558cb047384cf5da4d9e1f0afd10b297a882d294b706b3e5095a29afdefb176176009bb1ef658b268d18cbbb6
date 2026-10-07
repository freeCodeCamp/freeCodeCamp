type StringContentsErrorHandlers = EscapedCharErrorHandlers & {
    unterminated(initialPos: number, initialLineStart: number, initialCurLine: number): void;
};
declare function readStringContents(type: "single" | "double" | "template", input: string, pos: number, lineStart: number, curLine: number, errors: StringContentsErrorHandlers): {
    pos: number;
    str: string;
    firstInvalidLoc: {
        pos: number;
        lineStart: number;
        curLine: number;
    } | null;
    lineStart: number;
    curLine: number;
};
type EscapedCharErrorHandlers = HexCharErrorHandlers & CodePointErrorHandlers & {
    strictNumericEscape(pos: number, lineStart: number, curLine: number): void;
};
type HexCharErrorHandlers = IntErrorHandlers & {
    invalidEscapeSequence(pos: number, lineStart: number, curLine: number): void;
};
type IntErrorHandlers = {
    numericSeparatorInEscapeSequence(pos: number, lineStart: number, curLine: number): void;
    unexpectedNumericSeparator(pos: number, lineStart: number, curLine: number): void;
    invalidDigit(pos: number, lineStart: number, curLine: number, radix: number): boolean;
};
declare function readInt(input: string, pos: number, lineStart: number, curLine: number, radix: number, len: number | undefined, forceLen: boolean, allowNumSeparator: boolean | "bail", errors: IntErrorHandlers, bailOnError: boolean): {
    n: null;
    pos: number;
} | {
    n: number;
    pos: number;
};
type CodePointErrorHandlers = HexCharErrorHandlers & {
    invalidCodePoint(pos: number, lineStart: number, curLine: number): void;
};
declare function readCodePoint(input: string, pos: number, lineStart: number, curLine: number, throwOnInvalid: boolean, errors: CodePointErrorHandlers): {
    code: number | null;
    pos: number;
};

export { type CodePointErrorHandlers, type IntErrorHandlers, type StringContentsErrorHandlers, readCodePoint, readInt, readStringContents };
