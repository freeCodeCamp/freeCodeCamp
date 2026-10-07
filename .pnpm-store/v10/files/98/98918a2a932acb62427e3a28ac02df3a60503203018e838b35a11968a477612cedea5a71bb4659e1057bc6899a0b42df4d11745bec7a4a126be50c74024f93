"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preprocessor = void 0;
const unicode_js_1 = require("../common/unicode.js");
const error_codes_js_1 = require("../common/error-codes.js");
//Const
const DEFAULT_BUFFER_WATERLINE = 1 << 16;
//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
class Preprocessor {
    constructor(handler) {
        this.handler = handler;
        this.html = '';
        this.pos = -1;
        // NOTE: Initial `lastGapPos` is -2, to ensure `col` on initialisation is 0
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        //NOTE: avoid reporting errors twice on advance/retreat
        this.lastErrOffset = -1;
    }
    /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
    get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(code, cpOffset) {
        const { line, col, offset } = this;
        const startCol = col + cpOffset;
        const startOffset = offset + cpOffset;
        return {
            code,
            startLine: line,
            endLine: line,
            startCol,
            endCol: startCol,
            startOffset,
            endOffset: startOffset,
        };
    }
    _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
            this.lastErrOffset = this.offset;
            this.handler.onParseError(this.getError(code, 0));
        }
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
    }
    _processSurrogate(cp) {
        //NOTE: try to peek a surrogate pair
        if (this.pos !== this.html.length - 1) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if ((0, unicode_js_1.isSurrogatePair)(nextCp)) {
                //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
                this.pos++;
                //NOTE: add a gap that should be avoided during retreat
                this._addGap();
                return (0, unicode_js_1.getSurrogatePairCodePoint)(cp, nextCp);
            }
        }
        //NOTE: we are at the end of a chunk, therefore we can't infer the surrogate pair yet.
        else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return unicode_js_1.CODE_POINTS.EOF;
        }
        //NOTE: isolated surrogate
        this._err(error_codes_js_1.ERR.surrogateInInputStream);
        return cp;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        if (this.willDropParsedChunk()) {
            this.html = this.html.substring(this.pos);
            this.lineStartPos -= this.pos;
            this.droppedBufferSize += this.pos;
            this.pos = 0;
            this.lastGapPos = -2;
            this.gapStack.length = 0;
        }
    }
    write(chunk, isLastChunk) {
        if (this.html.length > 0) {
            this.html += chunk;
        }
        else {
            this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
    }
    insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
    }
    startsWith(pattern, caseSensitive) {
        // Check if our buffer has enough characters
        if (this.pos + pattern.length > this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return false;
        }
        if (caseSensitive) {
            return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
            const cp = this.html.charCodeAt(this.pos + i) | 0x20;
            if (cp !== pattern.charCodeAt(i)) {
                return false;
            }
        }
        return true;
    }
    peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1.CODE_POINTS.EOF;
        }
        const code = this.html.charCodeAt(pos);
        return code === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ? unicode_js_1.CODE_POINTS.LINE_FEED : code;
    }
    advance() {
        this.pos++;
        //NOTE: LF should be in the last column of the line
        if (this.isEol) {
            this.isEol = false;
            this.line++;
            this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1.CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
        if (cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
            this.isEol = true;
            this.skipNextNewLine = true;
            return unicode_js_1.CODE_POINTS.LINE_FEED;
        }
        //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
        //must be ignored.
        if (cp === unicode_js_1.CODE_POINTS.LINE_FEED) {
            this.isEol = true;
            if (this.skipNextNewLine) {
                // `line` will be bumped again in the recursive call.
                this.line--;
                this.skipNextNewLine = false;
                this._addGap();
                return this.advance();
            }
        }
        this.skipNextNewLine = false;
        if ((0, unicode_js_1.isSurrogate)(cp)) {
            cp = this._processSurrogate(cp);
        }
        //OPTIMIZATION: first check if code point is in the common allowed
        //range (ASCII alphanumeric, whitespaces, big chunk of BMP)
        //before going into detailed performance cost validation.
        const isCommonValidRange = this.handler.onParseError === null ||
            (cp > 0x1f && cp < 0x7f) ||
            cp === unicode_js_1.CODE_POINTS.LINE_FEED ||
            cp === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN ||
            (cp > 0x9f && cp < 64976);
        if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
        }
        return cp;
    }
    _checkForProblematicCharacters(cp) {
        if ((0, unicode_js_1.isControlCodePoint)(cp)) {
            this._err(error_codes_js_1.ERR.controlCharacterInInputStream);
        }
        else if ((0, unicode_js_1.isUndefinedCodePoint)(cp)) {
            this._err(error_codes_js_1.ERR.noncharacterInInputStream);
        }
    }
    retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
        }
        this.isEol = false;
    }
}
exports.Preprocessor = Preprocessor;
