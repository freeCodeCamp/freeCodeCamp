import { ERR, type ParserError, type ParserErrorHandler } from '../common/error-codes.js';
export declare class Preprocessor {
    private handler;
    html: string;
    pos: number;
    private lastGapPos;
    private gapStack;
    private skipNextNewLine;
    lastChunkWritten: boolean;
    endOfChunkHit: boolean;
    bufferWaterline: number;
    private isEol;
    private lineStartPos;
    droppedBufferSize: number;
    line: number;
    constructor(handler: {
        onParseError?: ParserErrorHandler | null;
    });
    /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
    get col(): number;
    get offset(): number;
    getError(code: ERR, cpOffset: number): ParserError;
    private lastErrOffset;
    private _err;
    private _addGap;
    private _processSurrogate;
    willDropParsedChunk(): boolean;
    dropParsedChunk(): void;
    write(chunk: string, isLastChunk: boolean): void;
    insertHtmlAtCurrentPos(chunk: string): void;
    startsWith(pattern: string, caseSensitive: boolean): boolean;
    peek(offset: number): number;
    advance(): number;
    private _checkForProblematicCharacters;
    retreat(count: number): void;
}
