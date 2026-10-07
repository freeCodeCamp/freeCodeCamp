import { Position } from '../../core/position.js';
import { Range } from '../../core/range.js';
import { FindMatch } from '../../model.js';
import { SENTINEL, rbDelete, updateTreeMetadata, TreeNode, leftest, fixInsert, righttest } from './rbTreeBase.js';
import { createFindMatch, Searcher, isValidMatch } from '../textModelSearch.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// const lfRegex = new RegExp(/\r\n|\r|\n/g);
const AverageBufferSize = 65535;
function createUintArray(arr) {
    let r;
    if (arr[arr.length - 1] < 65536) {
        r = new Uint16Array(arr.length);
    }
    else {
        r = new Uint32Array(arr.length);
    }
    r.set(arr, 0);
    return r;
}
class LineStarts {
    constructor(lineStarts, cr, lf, crlf, isBasicASCII) {
        this.lineStarts = lineStarts;
        this.cr = cr;
        this.lf = lf;
        this.crlf = crlf;
        this.isBasicASCII = isBasicASCII;
    }
}
function createLineStartsFast(str, readonly = true) {
    const r = [0];
    let rLength = 1;
    for (let i = 0, len = str.length; i < len; i++) {
        const chr = str.charCodeAt(i);
        if (chr === 13 /* CharCode.CarriageReturn */) {
            if (i + 1 < len && str.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                // \r\n... case
                r[rLength++] = i + 2;
                i++; // skip \n
            }
            else {
                // \r... case
                r[rLength++] = i + 1;
            }
        }
        else if (chr === 10 /* CharCode.LineFeed */) {
            r[rLength++] = i + 1;
        }
    }
    if (readonly) {
        return createUintArray(r);
    }
    else {
        return r;
    }
}
function createLineStarts(r, str) {
    r.length = 0;
    r[0] = 0;
    let rLength = 1;
    let cr = 0, lf = 0, crlf = 0;
    let isBasicASCII = true;
    for (let i = 0, len = str.length; i < len; i++) {
        const chr = str.charCodeAt(i);
        if (chr === 13 /* CharCode.CarriageReturn */) {
            if (i + 1 < len && str.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                // \r\n... case
                crlf++;
                r[rLength++] = i + 2;
                i++; // skip \n
            }
            else {
                cr++;
                // \r... case
                r[rLength++] = i + 1;
            }
        }
        else if (chr === 10 /* CharCode.LineFeed */) {
            lf++;
            r[rLength++] = i + 1;
        }
        else {
            if (isBasicASCII) {
                if (chr !== 9 /* CharCode.Tab */ && (chr < 32 || chr > 126)) {
                    isBasicASCII = false;
                }
            }
        }
    }
    const result = new LineStarts(createUintArray(r), cr, lf, crlf, isBasicASCII);
    r.length = 0;
    return result;
}
class Piece {
    constructor(bufferIndex, start, end, lineFeedCnt, length) {
        this.bufferIndex = bufferIndex;
        this.start = start;
        this.end = end;
        this.lineFeedCnt = lineFeedCnt;
        this.length = length;
    }
}
class StringBuffer {
    constructor(buffer, lineStarts) {
        this.buffer = buffer;
        this.lineStarts = lineStarts;
    }
}
/**
 * Readonly snapshot for piece tree.
 * In a real multiple thread environment, to make snapshot reading always work correctly, we need to
 * 1. Make TreeNode.piece immutable, then reading and writing can run in parallel.
 * 2. TreeNode/Buffers normalization should not happen during snapshot reading.
 */
class PieceTreeSnapshot {
    constructor(tree, BOM) {
        this._pieces = [];
        this._tree = tree;
        this._BOM = BOM;
        this._index = 0;
        if (tree.root !== SENTINEL) {
            tree.iterate(tree.root, node => {
                if (node !== SENTINEL) {
                    this._pieces.push(node.piece);
                }
                return true;
            });
        }
    }
    read() {
        if (this._pieces.length === 0) {
            if (this._index === 0) {
                this._index++;
                return this._BOM;
            }
            else {
                return null;
            }
        }
        if (this._index > this._pieces.length - 1) {
            return null;
        }
        if (this._index === 0) {
            return this._BOM + this._tree.getPieceContent(this._pieces[this._index++]);
        }
        return this._tree.getPieceContent(this._pieces[this._index++]);
    }
}
class PieceTreeSearchCache {
    constructor(limit) {
        this._limit = limit;
        this._cache = [];
    }
    get(offset) {
        for (let i = this._cache.length - 1; i >= 0; i--) {
            const nodePos = this._cache[i];
            if (nodePos.nodeStartOffset <= offset && nodePos.nodeStartOffset + nodePos.node.piece.length >= offset) {
                return nodePos;
            }
        }
        return null;
    }
    get2(lineNumber) {
        for (let i = this._cache.length - 1; i >= 0; i--) {
            const nodePos = this._cache[i];
            if (nodePos.nodeStartLineNumber && nodePos.nodeStartLineNumber < lineNumber && nodePos.nodeStartLineNumber + nodePos.node.piece.lineFeedCnt >= lineNumber) {
                return nodePos;
            }
        }
        return null;
    }
    set(nodePosition) {
        if (this._cache.length >= this._limit) {
            this._cache.shift();
        }
        this._cache.push(nodePosition);
    }
    validate(offset) {
        let hasInvalidVal = false;
        const tmp = this._cache;
        for (let i = 0; i < tmp.length; i++) {
            const nodePos = tmp[i];
            if (nodePos.node.parent === null || nodePos.nodeStartOffset >= offset) {
                tmp[i] = null;
                hasInvalidVal = true;
                continue;
            }
        }
        if (hasInvalidVal) {
            const newArr = [];
            for (const entry of tmp) {
                if (entry !== null) {
                    newArr.push(entry);
                }
            }
            this._cache = newArr;
        }
    }
}
class PieceTreeBase {
    constructor(chunks, eol, eolNormalized) {
        this.create(chunks, eol, eolNormalized);
    }
    create(chunks, eol, eolNormalized) {
        this._buffers = [
            new StringBuffer('', [0])
        ];
        this._lastChangeBufferPos = { line: 0, column: 0 };
        this.root = SENTINEL;
        this._lineCnt = 1;
        this._length = 0;
        this._EOL = eol;
        this._EOLLength = eol.length;
        this._EOLNormalized = eolNormalized;
        let lastNode = null;
        for (let i = 0, len = chunks.length; i < len; i++) {
            if (chunks[i].buffer.length > 0) {
                if (!chunks[i].lineStarts) {
                    chunks[i].lineStarts = createLineStartsFast(chunks[i].buffer);
                }
                const piece = new Piece(i + 1, { line: 0, column: 0 }, { line: chunks[i].lineStarts.length - 1, column: chunks[i].buffer.length - chunks[i].lineStarts[chunks[i].lineStarts.length - 1] }, chunks[i].lineStarts.length - 1, chunks[i].buffer.length);
                this._buffers.push(chunks[i]);
                lastNode = this.rbInsertRight(lastNode, piece);
            }
        }
        this._searchCache = new PieceTreeSearchCache(1);
        this._lastVisitedLine = { lineNumber: 0, value: '' };
        this.computeBufferMetadata();
    }
    normalizeEOL(eol) {
        const averageBufferSize = AverageBufferSize;
        const min = averageBufferSize - Math.floor(averageBufferSize / 3);
        const max = min * 2;
        let tempChunk = '';
        let tempChunkLen = 0;
        const chunks = [];
        this.iterate(this.root, node => {
            const str = this.getNodeContent(node);
            const len = str.length;
            if (tempChunkLen <= min || tempChunkLen + len < max) {
                tempChunk += str;
                tempChunkLen += len;
                return true;
            }
            // flush anyways
            const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
            chunks.push(new StringBuffer(text, createLineStartsFast(text)));
            tempChunk = str;
            tempChunkLen = len;
            return true;
        });
        if (tempChunkLen > 0) {
            const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
            chunks.push(new StringBuffer(text, createLineStartsFast(text)));
        }
        this.create(chunks, eol, true);
    }
    // #region Buffer API
    getEOL() {
        return this._EOL;
    }
    setEOL(newEOL) {
        this._EOL = newEOL;
        this._EOLLength = this._EOL.length;
        this.normalizeEOL(newEOL);
    }
    createSnapshot(BOM) {
        return new PieceTreeSnapshot(this, BOM);
    }
    getOffsetAt(lineNumber, column) {
        let leftLen = 0; // inorder
        let x = this.root;
        while (x !== SENTINEL) {
            if (x.left !== SENTINEL && x.lf_left + 1 >= lineNumber) {
                x = x.left;
            }
            else if (x.lf_left + x.piece.lineFeedCnt + 1 >= lineNumber) {
                leftLen += x.size_left;
                // lineNumber >= 2
                const accumualtedValInCurrentIndex = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                return leftLen += accumualtedValInCurrentIndex + column - 1;
            }
            else {
                lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                leftLen += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        return leftLen;
    }
    getPositionAt(offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        let x = this.root;
        let lfCnt = 0;
        const originalOffset = offset;
        while (x !== SENTINEL) {
            if (x.size_left !== 0 && x.size_left >= offset) {
                x = x.left;
            }
            else if (x.size_left + x.piece.length >= offset) {
                const out = this.getIndexOf(x, offset - x.size_left);
                lfCnt += x.lf_left + out.index;
                if (out.index === 0) {
                    const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
                    const column = originalOffset - lineStartOffset;
                    return new Position(lfCnt + 1, column + 1);
                }
                return new Position(lfCnt + 1, out.remainder + 1);
            }
            else {
                offset -= x.size_left + x.piece.length;
                lfCnt += x.lf_left + x.piece.lineFeedCnt;
                if (x.right === SENTINEL) {
                    // last node
                    const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
                    const column = originalOffset - offset - lineStartOffset;
                    return new Position(lfCnt + 1, column + 1);
                }
                else {
                    x = x.right;
                }
            }
        }
        return new Position(1, 1);
    }
    getValueInRange(range, eol) {
        if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
            return '';
        }
        const startPosition = this.nodeAt2(range.startLineNumber, range.startColumn);
        const endPosition = this.nodeAt2(range.endLineNumber, range.endColumn);
        const value = this.getValueInRange2(startPosition, endPosition);
        if (eol) {
            if (eol !== this._EOL || !this._EOLNormalized) {
                return value.replace(/\r\n|\r|\n/g, eol);
            }
            if (eol === this.getEOL() && this._EOLNormalized) {
                return value;
            }
            return value.replace(/\r\n|\r|\n/g, eol);
        }
        return value;
    }
    getValueInRange2(startPosition, endPosition) {
        if (startPosition.node === endPosition.node) {
            const node = startPosition.node;
            const buffer = this._buffers[node.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
            return buffer.substring(startOffset + startPosition.remainder, startOffset + endPosition.remainder);
        }
        let x = startPosition.node;
        const buffer = this._buffers[x.piece.bufferIndex].buffer;
        const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
        let ret = buffer.substring(startOffset + startPosition.remainder, startOffset + x.piece.length);
        x = x.next();
        while (x !== SENTINEL) {
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
            if (x === endPosition.node) {
                ret += buffer.substring(startOffset, startOffset + endPosition.remainder);
                break;
            }
            else {
                ret += buffer.substr(startOffset, x.piece.length);
            }
            x = x.next();
        }
        return ret;
    }
    getLinesContent() {
        const lines = [];
        let linesLength = 0;
        let currentLine = '';
        let danglingCR = false;
        this.iterate(this.root, node => {
            if (node === SENTINEL) {
                return true;
            }
            const piece = node.piece;
            let pieceLength = piece.length;
            if (pieceLength === 0) {
                return true;
            }
            const buffer = this._buffers[piece.bufferIndex].buffer;
            const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
            const pieceStartLine = piece.start.line;
            const pieceEndLine = piece.end.line;
            let pieceStartOffset = lineStarts[pieceStartLine] + piece.start.column;
            if (danglingCR) {
                if (buffer.charCodeAt(pieceStartOffset) === 10 /* CharCode.LineFeed */) {
                    // pretend the \n was in the previous piece..
                    pieceStartOffset++;
                    pieceLength--;
                }
                lines[linesLength++] = currentLine;
                currentLine = '';
                danglingCR = false;
                if (pieceLength === 0) {
                    return true;
                }
            }
            if (pieceStartLine === pieceEndLine) {
                // this piece has no new lines
                if (!this._EOLNormalized && buffer.charCodeAt(pieceStartOffset + pieceLength - 1) === 13 /* CharCode.CarriageReturn */) {
                    danglingCR = true;
                    currentLine += buffer.substr(pieceStartOffset, pieceLength - 1);
                }
                else {
                    currentLine += buffer.substr(pieceStartOffset, pieceLength);
                }
                return true;
            }
            // add the text before the first line start in this piece
            currentLine += (this._EOLNormalized
                ? buffer.substring(pieceStartOffset, Math.max(pieceStartOffset, lineStarts[pieceStartLine + 1] - this._EOLLength))
                : buffer.substring(pieceStartOffset, lineStarts[pieceStartLine + 1]).replace(/(\r\n|\r|\n)$/, ''));
            lines[linesLength++] = currentLine;
            for (let line = pieceStartLine + 1; line < pieceEndLine; line++) {
                currentLine = (this._EOLNormalized
                    ? buffer.substring(lineStarts[line], lineStarts[line + 1] - this._EOLLength)
                    : buffer.substring(lineStarts[line], lineStarts[line + 1]).replace(/(\r\n|\r|\n)$/, ''));
                lines[linesLength++] = currentLine;
            }
            if (!this._EOLNormalized && buffer.charCodeAt(lineStarts[pieceEndLine] + piece.end.column - 1) === 13 /* CharCode.CarriageReturn */) {
                danglingCR = true;
                if (piece.end.column === 0) {
                    // The last line ended with a \r, let's undo the push, it will be pushed by next iteration
                    linesLength--;
                }
                else {
                    currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column - 1);
                }
            }
            else {
                currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column);
            }
            return true;
        });
        if (danglingCR) {
            lines[linesLength++] = currentLine;
            currentLine = '';
        }
        lines[linesLength++] = currentLine;
        return lines;
    }
    getLength() {
        return this._length;
    }
    getLineCount() {
        return this._lineCnt;
    }
    getLineContent(lineNumber) {
        if (this._lastVisitedLine.lineNumber === lineNumber) {
            return this._lastVisitedLine.value;
        }
        this._lastVisitedLine.lineNumber = lineNumber;
        if (lineNumber === this._lineCnt) {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber);
        }
        else if (this._EOLNormalized) {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber, this._EOLLength);
        }
        else {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber).replace(/(\r\n|\r|\n)$/, '');
        }
        return this._lastVisitedLine.value;
    }
    _getCharCode(nodePos) {
        if (nodePos.remainder === nodePos.node.piece.length) {
            // the char we want to fetch is at the head of next node.
            const matchingNode = nodePos.node.next();
            if (!matchingNode) {
                return 0;
            }
            const buffer = this._buffers[matchingNode.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(matchingNode.piece.bufferIndex, matchingNode.piece.start);
            return buffer.buffer.charCodeAt(startOffset);
        }
        else {
            const buffer = this._buffers[nodePos.node.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(nodePos.node.piece.bufferIndex, nodePos.node.piece.start);
            const targetOffset = startOffset + nodePos.remainder;
            return buffer.buffer.charCodeAt(targetOffset);
        }
    }
    getLineCharCode(lineNumber, index) {
        const nodePos = this.nodeAt2(lineNumber, index + 1);
        return this._getCharCode(nodePos);
    }
    getLineLength(lineNumber) {
        if (lineNumber === this.getLineCount()) {
            const startOffset = this.getOffsetAt(lineNumber, 1);
            return this.getLength() - startOffset;
        }
        return this.getOffsetAt(lineNumber + 1, 1) - this.getOffsetAt(lineNumber, 1) - this._EOLLength;
    }
    getNearestChunk(offset) {
        const nodePos = this.nodeAt(offset);
        if (nodePos.remainder === nodePos.node.piece.length) {
            // the offset is at the head of next node.
            const matchingNode = nodePos.node.next();
            if (!matchingNode || matchingNode === SENTINEL) {
                return '';
            }
            const buffer = this._buffers[matchingNode.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(matchingNode.piece.bufferIndex, matchingNode.piece.start);
            return buffer.buffer.substring(startOffset, startOffset + matchingNode.piece.length);
        }
        else {
            const buffer = this._buffers[nodePos.node.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(nodePos.node.piece.bufferIndex, nodePos.node.piece.start);
            const targetOffset = startOffset + nodePos.remainder;
            const targetEnd = startOffset + nodePos.node.piece.length;
            return buffer.buffer.substring(targetOffset, targetEnd);
        }
    }
    findMatchesInNode(node, searcher, startLineNumber, startColumn, startCursor, endCursor, searchData, captureMatches, limitResultCount, resultLen, result) {
        const buffer = this._buffers[node.piece.bufferIndex];
        const startOffsetInBuffer = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
        const start = this.offsetInBuffer(node.piece.bufferIndex, startCursor);
        const end = this.offsetInBuffer(node.piece.bufferIndex, endCursor);
        let m;
        // Reset regex to search from the beginning
        const ret = { line: 0, column: 0 };
        let searchText;
        let offsetInBuffer;
        if (searcher._wordSeparators) {
            searchText = buffer.buffer.substring(start, end);
            offsetInBuffer = (offset) => offset + start;
            searcher.reset(0);
        }
        else {
            searchText = buffer.buffer;
            offsetInBuffer = (offset) => offset;
            searcher.reset(start);
        }
        do {
            m = searcher.next(searchText);
            if (m) {
                if (offsetInBuffer(m.index) >= end) {
                    return resultLen;
                }
                this.positionInBuffer(node, offsetInBuffer(m.index) - startOffsetInBuffer, ret);
                const lineFeedCnt = this.getLineFeedCnt(node.piece.bufferIndex, startCursor, ret);
                const retStartColumn = ret.line === startCursor.line ? ret.column - startCursor.column + startColumn : ret.column + 1;
                const retEndColumn = retStartColumn + m[0].length;
                result[resultLen++] = createFindMatch(new Range(startLineNumber + lineFeedCnt, retStartColumn, startLineNumber + lineFeedCnt, retEndColumn), m, captureMatches);
                if (offsetInBuffer(m.index) + m[0].length >= end) {
                    return resultLen;
                }
                if (resultLen >= limitResultCount) {
                    return resultLen;
                }
            }
        } while (m);
        return resultLen;
    }
    findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
        const result = [];
        let resultLen = 0;
        const searcher = new Searcher(searchData.wordSeparators, searchData.regex);
        let startPosition = this.nodeAt2(searchRange.startLineNumber, searchRange.startColumn);
        if (startPosition === null) {
            return [];
        }
        const endPosition = this.nodeAt2(searchRange.endLineNumber, searchRange.endColumn);
        if (endPosition === null) {
            return [];
        }
        let start = this.positionInBuffer(startPosition.node, startPosition.remainder);
        const end = this.positionInBuffer(endPosition.node, endPosition.remainder);
        if (startPosition.node === endPosition.node) {
            this.findMatchesInNode(startPosition.node, searcher, searchRange.startLineNumber, searchRange.startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
            return result;
        }
        let startLineNumber = searchRange.startLineNumber;
        let currentNode = startPosition.node;
        while (currentNode !== endPosition.node) {
            const lineBreakCnt = this.getLineFeedCnt(currentNode.piece.bufferIndex, start, currentNode.piece.end);
            if (lineBreakCnt >= 1) {
                // last line break position
                const lineStarts = this._buffers[currentNode.piece.bufferIndex].lineStarts;
                const startOffsetInBuffer = this.offsetInBuffer(currentNode.piece.bufferIndex, currentNode.piece.start);
                const nextLineStartOffset = lineStarts[start.line + lineBreakCnt];
                const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
                resultLen = this.findMatchesInNode(currentNode, searcher, startLineNumber, startColumn, start, this.positionInBuffer(currentNode, nextLineStartOffset - startOffsetInBuffer), searchData, captureMatches, limitResultCount, resultLen, result);
                if (resultLen >= limitResultCount) {
                    return result;
                }
                startLineNumber += lineBreakCnt;
            }
            const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
            // search for the remaining content
            if (startLineNumber === searchRange.endLineNumber) {
                const text = this.getLineContent(startLineNumber).substring(startColumn, searchRange.endColumn - 1);
                resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
                return result;
            }
            resultLen = this._findMatchesInLine(searchData, searcher, this.getLineContent(startLineNumber).substr(startColumn), startLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
            if (resultLen >= limitResultCount) {
                return result;
            }
            startLineNumber++;
            startPosition = this.nodeAt2(startLineNumber, 1);
            currentNode = startPosition.node;
            start = this.positionInBuffer(startPosition.node, startPosition.remainder);
        }
        if (startLineNumber === searchRange.endLineNumber) {
            const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
            const text = this.getLineContent(startLineNumber).substring(startColumn, searchRange.endColumn - 1);
            resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
            return result;
        }
        const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
        resultLen = this.findMatchesInNode(endPosition.node, searcher, startLineNumber, startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
        return result;
    }
    _findMatchesInLine(searchData, searcher, text, lineNumber, deltaOffset, resultLen, result, captureMatches, limitResultCount) {
        const wordSeparators = searchData.wordSeparators;
        if (!captureMatches && searchData.simpleSearch) {
            const searchString = searchData.simpleSearch;
            const searchStringLen = searchString.length;
            const textLength = text.length;
            let lastMatchIndex = -searchStringLen;
            while ((lastMatchIndex = text.indexOf(searchString, lastMatchIndex + searchStringLen)) !== -1) {
                if (!wordSeparators || isValidMatch(wordSeparators, text, textLength, lastMatchIndex, searchStringLen)) {
                    result[resultLen++] = new FindMatch(new Range(lineNumber, lastMatchIndex + 1 + deltaOffset, lineNumber, lastMatchIndex + 1 + searchStringLen + deltaOffset), null);
                    if (resultLen >= limitResultCount) {
                        return resultLen;
                    }
                }
            }
            return resultLen;
        }
        let m;
        // Reset regex to search from the beginning
        searcher.reset(0);
        do {
            m = searcher.next(text);
            if (m) {
                result[resultLen++] = createFindMatch(new Range(lineNumber, m.index + 1 + deltaOffset, lineNumber, m.index + 1 + m[0].length + deltaOffset), m, captureMatches);
                if (resultLen >= limitResultCount) {
                    return resultLen;
                }
            }
        } while (m);
        return resultLen;
    }
    // #endregion
    // #region Piece Table
    insert(offset, value, eolNormalized = false) {
        this._EOLNormalized = this._EOLNormalized && eolNormalized;
        this._lastVisitedLine.lineNumber = 0;
        this._lastVisitedLine.value = '';
        if (this.root !== SENTINEL) {
            const { node, remainder, nodeStartOffset } = this.nodeAt(offset);
            const piece = node.piece;
            const bufferIndex = piece.bufferIndex;
            const insertPosInBuffer = this.positionInBuffer(node, remainder);
            if (node.piece.bufferIndex === 0 &&
                piece.end.line === this._lastChangeBufferPos.line &&
                piece.end.column === this._lastChangeBufferPos.column &&
                (nodeStartOffset + piece.length === offset) &&
                value.length < AverageBufferSize) {
                // changed buffer
                this.appendToNode(node, value);
                this.computeBufferMetadata();
                return;
            }
            if (nodeStartOffset === offset) {
                this.insertContentToNodeLeft(value, node);
                this._searchCache.validate(offset);
            }
            else if (nodeStartOffset + node.piece.length > offset) {
                // we are inserting into the middle of a node.
                const nodesToDel = [];
                let newRightPiece = new Piece(piece.bufferIndex, insertPosInBuffer, piece.end, this.getLineFeedCnt(piece.bufferIndex, insertPosInBuffer, piece.end), this.offsetInBuffer(bufferIndex, piece.end) - this.offsetInBuffer(bufferIndex, insertPosInBuffer));
                if (this.shouldCheckCRLF() && this.endWithCR(value)) {
                    const headOfRight = this.nodeCharCodeAt(node, remainder);
                    if (headOfRight === 10 /** \n */) {
                        const newStart = { line: newRightPiece.start.line + 1, column: 0 };
                        newRightPiece = new Piece(newRightPiece.bufferIndex, newStart, newRightPiece.end, this.getLineFeedCnt(newRightPiece.bufferIndex, newStart, newRightPiece.end), newRightPiece.length - 1);
                        value += '\n';
                    }
                }
                // reuse node for content before insertion point.
                if (this.shouldCheckCRLF() && this.startWithLF(value)) {
                    const tailOfLeft = this.nodeCharCodeAt(node, remainder - 1);
                    if (tailOfLeft === 13 /** \r */) {
                        const previousPos = this.positionInBuffer(node, remainder - 1);
                        this.deleteNodeTail(node, previousPos);
                        value = '\r' + value;
                        if (node.piece.length === 0) {
                            nodesToDel.push(node);
                        }
                    }
                    else {
                        this.deleteNodeTail(node, insertPosInBuffer);
                    }
                }
                else {
                    this.deleteNodeTail(node, insertPosInBuffer);
                }
                const newPieces = this.createNewPieces(value);
                if (newRightPiece.length > 0) {
                    this.rbInsertRight(node, newRightPiece);
                }
                let tmpNode = node;
                for (let k = 0; k < newPieces.length; k++) {
                    tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
                }
                this.deleteNodes(nodesToDel);
            }
            else {
                this.insertContentToNodeRight(value, node);
            }
        }
        else {
            // insert new node
            const pieces = this.createNewPieces(value);
            let node = this.rbInsertLeft(null, pieces[0]);
            for (let k = 1; k < pieces.length; k++) {
                node = this.rbInsertRight(node, pieces[k]);
            }
        }
        // todo, this is too brutal. Total line feed count should be updated the same way as lf_left.
        this.computeBufferMetadata();
    }
    delete(offset, cnt) {
        this._lastVisitedLine.lineNumber = 0;
        this._lastVisitedLine.value = '';
        if (cnt <= 0 || this.root === SENTINEL) {
            return;
        }
        const startPosition = this.nodeAt(offset);
        const endPosition = this.nodeAt(offset + cnt);
        const startNode = startPosition.node;
        const endNode = endPosition.node;
        if (startNode === endNode) {
            const startSplitPosInBuffer = this.positionInBuffer(startNode, startPosition.remainder);
            const endSplitPosInBuffer = this.positionInBuffer(startNode, endPosition.remainder);
            if (startPosition.nodeStartOffset === offset) {
                if (cnt === startNode.piece.length) { // delete node
                    const next = startNode.next();
                    rbDelete(this, startNode);
                    this.validateCRLFWithPrevNode(next);
                    this.computeBufferMetadata();
                    return;
                }
                this.deleteNodeHead(startNode, endSplitPosInBuffer);
                this._searchCache.validate(offset);
                this.validateCRLFWithPrevNode(startNode);
                this.computeBufferMetadata();
                return;
            }
            if (startPosition.nodeStartOffset + startNode.piece.length === offset + cnt) {
                this.deleteNodeTail(startNode, startSplitPosInBuffer);
                this.validateCRLFWithNextNode(startNode);
                this.computeBufferMetadata();
                return;
            }
            // delete content in the middle, this node will be splitted to nodes
            this.shrinkNode(startNode, startSplitPosInBuffer, endSplitPosInBuffer);
            this.computeBufferMetadata();
            return;
        }
        const nodesToDel = [];
        const startSplitPosInBuffer = this.positionInBuffer(startNode, startPosition.remainder);
        this.deleteNodeTail(startNode, startSplitPosInBuffer);
        this._searchCache.validate(offset);
        if (startNode.piece.length === 0) {
            nodesToDel.push(startNode);
        }
        // update last touched node
        const endSplitPosInBuffer = this.positionInBuffer(endNode, endPosition.remainder);
        this.deleteNodeHead(endNode, endSplitPosInBuffer);
        if (endNode.piece.length === 0) {
            nodesToDel.push(endNode);
        }
        // delete nodes in between
        const secondNode = startNode.next();
        for (let node = secondNode; node !== SENTINEL && node !== endNode; node = node.next()) {
            nodesToDel.push(node);
        }
        const prev = startNode.piece.length === 0 ? startNode.prev() : startNode;
        this.deleteNodes(nodesToDel);
        this.validateCRLFWithNextNode(prev);
        this.computeBufferMetadata();
    }
    insertContentToNodeLeft(value, node) {
        // we are inserting content to the beginning of node
        const nodesToDel = [];
        if (this.shouldCheckCRLF() && this.endWithCR(value) && this.startWithLF(node)) {
            // move `\n` to new node.
            const piece = node.piece;
            const newStart = { line: piece.start.line + 1, column: 0 };
            const nPiece = new Piece(piece.bufferIndex, newStart, piece.end, this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end), piece.length - 1);
            node.piece = nPiece;
            value += '\n';
            updateTreeMetadata(this, node, -1, -1);
            if (node.piece.length === 0) {
                nodesToDel.push(node);
            }
        }
        const newPieces = this.createNewPieces(value);
        let newNode = this.rbInsertLeft(node, newPieces[newPieces.length - 1]);
        for (let k = newPieces.length - 2; k >= 0; k--) {
            newNode = this.rbInsertLeft(newNode, newPieces[k]);
        }
        this.validateCRLFWithPrevNode(newNode);
        this.deleteNodes(nodesToDel);
    }
    insertContentToNodeRight(value, node) {
        // we are inserting to the right of this node.
        if (this.adjustCarriageReturnFromNext(value, node)) {
            // move \n to the new node.
            value += '\n';
        }
        const newPieces = this.createNewPieces(value);
        const newNode = this.rbInsertRight(node, newPieces[0]);
        let tmpNode = newNode;
        for (let k = 1; k < newPieces.length; k++) {
            tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
        }
        this.validateCRLFWithPrevNode(newNode);
    }
    positionInBuffer(node, remainder, ret) {
        const piece = node.piece;
        const bufferIndex = node.piece.bufferIndex;
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        const startOffset = lineStarts[piece.start.line] + piece.start.column;
        const offset = startOffset + remainder;
        // binary search offset between startOffset and endOffset
        let low = piece.start.line;
        let high = piece.end.line;
        let mid = 0;
        let midStop = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStart = lineStarts[mid];
            if (mid === high) {
                break;
            }
            midStop = lineStarts[mid + 1];
            if (offset < midStart) {
                high = mid - 1;
            }
            else if (offset >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        if (ret) {
            ret.line = mid;
            ret.column = offset - midStart;
            return null;
        }
        return {
            line: mid,
            column: offset - midStart
        };
    }
    getLineFeedCnt(bufferIndex, start, end) {
        // we don't need to worry about start: abc\r|\n, or abc|\r, or abc|\n, or abc|\r\n doesn't change the fact that, there is one line break after start.
        // now let's take care of end: abc\r|\n, if end is in between \r and \n, we need to add line feed count by 1
        if (end.column === 0) {
            return end.line - start.line;
        }
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        if (end.line === lineStarts.length - 1) { // it means, there is no \n after end, otherwise, there will be one more lineStart.
            return end.line - start.line;
        }
        const nextLineStartOffset = lineStarts[end.line + 1];
        const endOffset = lineStarts[end.line] + end.column;
        if (nextLineStartOffset > endOffset + 1) { // there are more than 1 character after end, which means it can't be \n
            return end.line - start.line;
        }
        // endOffset + 1 === nextLineStartOffset
        // character at endOffset is \n, so we check the character before first
        // if character at endOffset is \r, end.column is 0 and we can't get here.
        const previousCharOffset = endOffset - 1; // end.column > 0 so it's okay.
        const buffer = this._buffers[bufferIndex].buffer;
        if (buffer.charCodeAt(previousCharOffset) === 13) {
            return end.line - start.line + 1;
        }
        else {
            return end.line - start.line;
        }
    }
    offsetInBuffer(bufferIndex, cursor) {
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        return lineStarts[cursor.line] + cursor.column;
    }
    deleteNodes(nodes) {
        for (let i = 0; i < nodes.length; i++) {
            rbDelete(this, nodes[i]);
        }
    }
    createNewPieces(text) {
        if (text.length > AverageBufferSize) {
            // the content is large, operations like substring, charCode becomes slow
            // so here we split it into smaller chunks, just like what we did for CR/LF normalization
            const newPieces = [];
            while (text.length > AverageBufferSize) {
                const lastChar = text.charCodeAt(AverageBufferSize - 1);
                let splitText;
                if (lastChar === 13 /* CharCode.CarriageReturn */ || (lastChar >= 0xD800 && lastChar <= 0xDBFF)) {
                    // last character is \r or a high surrogate => keep it back
                    splitText = text.substring(0, AverageBufferSize - 1);
                    text = text.substring(AverageBufferSize - 1);
                }
                else {
                    splitText = text.substring(0, AverageBufferSize);
                    text = text.substring(AverageBufferSize);
                }
                const lineStarts = createLineStartsFast(splitText);
                newPieces.push(new Piece(this._buffers.length, /* buffer index */ { line: 0, column: 0 }, { line: lineStarts.length - 1, column: splitText.length - lineStarts[lineStarts.length - 1] }, lineStarts.length - 1, splitText.length));
                this._buffers.push(new StringBuffer(splitText, lineStarts));
            }
            const lineStarts = createLineStartsFast(text);
            newPieces.push(new Piece(this._buffers.length, /* buffer index */ { line: 0, column: 0 }, { line: lineStarts.length - 1, column: text.length - lineStarts[lineStarts.length - 1] }, lineStarts.length - 1, text.length));
            this._buffers.push(new StringBuffer(text, lineStarts));
            return newPieces;
        }
        let startOffset = this._buffers[0].buffer.length;
        const lineStarts = createLineStartsFast(text, false);
        let start = this._lastChangeBufferPos;
        if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === startOffset
            && startOffset !== 0
            && this.startWithLF(text)
            && this.endWithCR(this._buffers[0].buffer) // todo, we can check this._lastChangeBufferPos's column as it's the last one
        ) {
            this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line, column: this._lastChangeBufferPos.column + 1 };
            start = this._lastChangeBufferPos;
            for (let i = 0; i < lineStarts.length; i++) {
                lineStarts[i] += startOffset + 1;
            }
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
            this._buffers[0].buffer += '_' + text;
            startOffset += 1;
        }
        else {
            if (startOffset !== 0) {
                for (let i = 0; i < lineStarts.length; i++) {
                    lineStarts[i] += startOffset;
                }
            }
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
            this._buffers[0].buffer += text;
        }
        const endOffset = this._buffers[0].buffer.length;
        const endIndex = this._buffers[0].lineStarts.length - 1;
        const endColumn = endOffset - this._buffers[0].lineStarts[endIndex];
        const endPos = { line: endIndex, column: endColumn };
        const newPiece = new Piece(0, /** todo@peng */ start, endPos, this.getLineFeedCnt(0, start, endPos), endOffset - startOffset);
        this._lastChangeBufferPos = endPos;
        return [newPiece];
    }
    getLineRawContent(lineNumber, endOffset = 0) {
        let x = this.root;
        let ret = '';
        const cache = this._searchCache.get2(lineNumber);
        if (cache) {
            x = cache.node;
            const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber - 1);
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
            if (cache.nodeStartLineNumber + x.piece.lineFeedCnt === lineNumber) {
                ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
            }
            else {
                const accumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber);
                return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
            }
        }
        else {
            let nodeStartOffset = 0;
            const originalLineNumber = lineNumber;
            while (x !== SENTINEL) {
                if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
                    x = x.left;
                }
                else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
                    const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                    const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
                    const buffer = this._buffers[x.piece.bufferIndex].buffer;
                    const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                    nodeStartOffset += x.size_left;
                    this._searchCache.set({
                        node: x,
                        nodeStartOffset,
                        nodeStartLineNumber: originalLineNumber - (lineNumber - 1 - x.lf_left)
                    });
                    return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
                }
                else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
                    const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                    const buffer = this._buffers[x.piece.bufferIndex].buffer;
                    const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                    ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
                    break;
                }
                else {
                    lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                    nodeStartOffset += x.size_left + x.piece.length;
                    x = x.right;
                }
            }
        }
        // search in order, to find the node contains end column
        x = x.next();
        while (x !== SENTINEL) {
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            if (x.piece.lineFeedCnt > 0) {
                const accumulatedValue = this.getAccumulatedValue(x, 0);
                const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                ret += buffer.substring(startOffset, startOffset + accumulatedValue - endOffset);
                return ret;
            }
            else {
                const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                ret += buffer.substr(startOffset, x.piece.length);
            }
            x = x.next();
        }
        return ret;
    }
    computeBufferMetadata() {
        let x = this.root;
        let lfCnt = 1;
        let len = 0;
        while (x !== SENTINEL) {
            lfCnt += x.lf_left + x.piece.lineFeedCnt;
            len += x.size_left + x.piece.length;
            x = x.right;
        }
        this._lineCnt = lfCnt;
        this._length = len;
        this._searchCache.validate(this._length);
    }
    // #region node operations
    getIndexOf(node, accumulatedValue) {
        const piece = node.piece;
        const pos = this.positionInBuffer(node, accumulatedValue);
        const lineCnt = pos.line - piece.start.line;
        if (this.offsetInBuffer(piece.bufferIndex, piece.end) - this.offsetInBuffer(piece.bufferIndex, piece.start) === accumulatedValue) {
            // we are checking the end of this node, so a CRLF check is necessary.
            const realLineCnt = this.getLineFeedCnt(node.piece.bufferIndex, piece.start, pos);
            if (realLineCnt !== lineCnt) {
                // aha yes, CRLF
                return { index: realLineCnt, remainder: 0 };
            }
        }
        return { index: lineCnt, remainder: pos.column };
    }
    getAccumulatedValue(node, index) {
        if (index < 0) {
            return 0;
        }
        const piece = node.piece;
        const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
        const expectedLineStartIndex = piece.start.line + index + 1;
        if (expectedLineStartIndex > piece.end.line) {
            return lineStarts[piece.end.line] + piece.end.column - lineStarts[piece.start.line] - piece.start.column;
        }
        else {
            return lineStarts[expectedLineStartIndex] - lineStarts[piece.start.line] - piece.start.column;
        }
    }
    deleteNodeTail(node, pos) {
        const piece = node.piece;
        const originalLFCnt = piece.lineFeedCnt;
        const originalEndOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const newEnd = pos;
        const newEndOffset = this.offsetInBuffer(piece.bufferIndex, newEnd);
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
        const lf_delta = newLineFeedCnt - originalLFCnt;
        const size_delta = newEndOffset - originalEndOffset;
        const newLength = piece.length + size_delta;
        node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, size_delta, lf_delta);
    }
    deleteNodeHead(node, pos) {
        const piece = node.piece;
        const originalLFCnt = piece.lineFeedCnt;
        const originalStartOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const newStart = pos;
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
        const newStartOffset = this.offsetInBuffer(piece.bufferIndex, newStart);
        const lf_delta = newLineFeedCnt - originalLFCnt;
        const size_delta = originalStartOffset - newStartOffset;
        const newLength = piece.length + size_delta;
        node.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, size_delta, lf_delta);
    }
    shrinkNode(node, start, end) {
        const piece = node.piece;
        const originalStartPos = piece.start;
        const originalEndPos = piece.end;
        // old piece, originalStartPos, start
        const oldLength = piece.length;
        const oldLFCnt = piece.lineFeedCnt;
        const newEnd = start;
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
        const newLength = this.offsetInBuffer(piece.bufferIndex, start) - this.offsetInBuffer(piece.bufferIndex, originalStartPos);
        node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, newLength - oldLength, newLineFeedCnt - oldLFCnt);
        // new right piece, end, originalEndPos
        const newPiece = new Piece(piece.bufferIndex, end, originalEndPos, this.getLineFeedCnt(piece.bufferIndex, end, originalEndPos), this.offsetInBuffer(piece.bufferIndex, originalEndPos) - this.offsetInBuffer(piece.bufferIndex, end));
        const newNode = this.rbInsertRight(node, newPiece);
        this.validateCRLFWithPrevNode(newNode);
    }
    appendToNode(node, value) {
        if (this.adjustCarriageReturnFromNext(value, node)) {
            value += '\n';
        }
        const hitCRLF = this.shouldCheckCRLF() && this.startWithLF(value) && this.endWithCR(node);
        const startOffset = this._buffers[0].buffer.length;
        this._buffers[0].buffer += value;
        const lineStarts = createLineStartsFast(value, false);
        for (let i = 0; i < lineStarts.length; i++) {
            lineStarts[i] += startOffset;
        }
        if (hitCRLF) {
            const prevStartOffset = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
            this._buffers[0].lineStarts.pop();
            // _lastChangeBufferPos is already wrong
            this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line - 1, column: startOffset - prevStartOffset };
        }
        this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
        const endIndex = this._buffers[0].lineStarts.length - 1;
        const endColumn = this._buffers[0].buffer.length - this._buffers[0].lineStarts[endIndex];
        const newEnd = { line: endIndex, column: endColumn };
        const newLength = node.piece.length + value.length;
        const oldLineFeedCnt = node.piece.lineFeedCnt;
        const newLineFeedCnt = this.getLineFeedCnt(0, node.piece.start, newEnd);
        const lf_delta = newLineFeedCnt - oldLineFeedCnt;
        node.piece = new Piece(node.piece.bufferIndex, node.piece.start, newEnd, newLineFeedCnt, newLength);
        this._lastChangeBufferPos = newEnd;
        updateTreeMetadata(this, node, value.length, lf_delta);
    }
    nodeAt(offset) {
        let x = this.root;
        const cache = this._searchCache.get(offset);
        if (cache) {
            return {
                node: cache.node,
                nodeStartOffset: cache.nodeStartOffset,
                remainder: offset - cache.nodeStartOffset
            };
        }
        let nodeStartOffset = 0;
        while (x !== SENTINEL) {
            if (x.size_left > offset) {
                x = x.left;
            }
            else if (x.size_left + x.piece.length >= offset) {
                nodeStartOffset += x.size_left;
                const ret = {
                    node: x,
                    remainder: offset - x.size_left,
                    nodeStartOffset
                };
                this._searchCache.set(ret);
                return ret;
            }
            else {
                offset -= x.size_left + x.piece.length;
                nodeStartOffset += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        return null;
    }
    nodeAt2(lineNumber, column) {
        let x = this.root;
        let nodeStartOffset = 0;
        while (x !== SENTINEL) {
            if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
                x = x.left;
            }
            else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
                const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
                nodeStartOffset += x.size_left;
                return {
                    node: x,
                    remainder: Math.min(prevAccumualtedValue + column - 1, accumulatedValue),
                    nodeStartOffset
                };
            }
            else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
                const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                if (prevAccumualtedValue + column - 1 <= x.piece.length) {
                    return {
                        node: x,
                        remainder: prevAccumualtedValue + column - 1,
                        nodeStartOffset
                    };
                }
                else {
                    column -= x.piece.length - prevAccumualtedValue;
                    break;
                }
            }
            else {
                lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                nodeStartOffset += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        // search in order, to find the node contains position.column
        x = x.next();
        while (x !== SENTINEL) {
            if (x.piece.lineFeedCnt > 0) {
                const accumulatedValue = this.getAccumulatedValue(x, 0);
                const nodeStartOffset = this.offsetOfNode(x);
                return {
                    node: x,
                    remainder: Math.min(column - 1, accumulatedValue),
                    nodeStartOffset
                };
            }
            else {
                if (x.piece.length >= column - 1) {
                    const nodeStartOffset = this.offsetOfNode(x);
                    return {
                        node: x,
                        remainder: column - 1,
                        nodeStartOffset
                    };
                }
                else {
                    column -= x.piece.length;
                }
            }
            x = x.next();
        }
        return null;
    }
    nodeCharCodeAt(node, offset) {
        if (node.piece.lineFeedCnt < 1) {
            return -1;
        }
        const buffer = this._buffers[node.piece.bufferIndex];
        const newOffset = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start) + offset;
        return buffer.buffer.charCodeAt(newOffset);
    }
    offsetOfNode(node) {
        if (!node) {
            return 0;
        }
        let pos = node.size_left;
        while (node !== this.root) {
            if (node.parent.right === node) {
                pos += node.parent.size_left + node.parent.piece.length;
            }
            node = node.parent;
        }
        return pos;
    }
    // #endregion
    // #region CRLF
    shouldCheckCRLF() {
        return !(this._EOLNormalized && this._EOL === '\n');
    }
    startWithLF(val) {
        if (typeof val === 'string') {
            return val.charCodeAt(0) === 10;
        }
        if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
            return false;
        }
        const piece = val.piece;
        const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
        const line = piece.start.line;
        const startOffset = lineStarts[line] + piece.start.column;
        if (line === lineStarts.length - 1) {
            // last line, so there is no line feed at the end of this line
            return false;
        }
        const nextLineOffset = lineStarts[line + 1];
        if (nextLineOffset > startOffset + 1) {
            return false;
        }
        return this._buffers[piece.bufferIndex].buffer.charCodeAt(startOffset) === 10;
    }
    endWithCR(val) {
        if (typeof val === 'string') {
            return val.charCodeAt(val.length - 1) === 13;
        }
        if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
            return false;
        }
        return this.nodeCharCodeAt(val, val.piece.length - 1) === 13;
    }
    validateCRLFWithPrevNode(nextNode) {
        if (this.shouldCheckCRLF() && this.startWithLF(nextNode)) {
            const node = nextNode.prev();
            if (this.endWithCR(node)) {
                this.fixCRLF(node, nextNode);
            }
        }
    }
    validateCRLFWithNextNode(node) {
        if (this.shouldCheckCRLF() && this.endWithCR(node)) {
            const nextNode = node.next();
            if (this.startWithLF(nextNode)) {
                this.fixCRLF(node, nextNode);
            }
        }
    }
    fixCRLF(prev, next) {
        const nodesToDel = [];
        // update node
        const lineStarts = this._buffers[prev.piece.bufferIndex].lineStarts;
        let newEnd;
        if (prev.piece.end.column === 0) {
            // it means, last line ends with \r, not \r\n
            newEnd = { line: prev.piece.end.line - 1, column: lineStarts[prev.piece.end.line] - lineStarts[prev.piece.end.line - 1] - 1 };
        }
        else {
            // \r\n
            newEnd = { line: prev.piece.end.line, column: prev.piece.end.column - 1 };
        }
        const prevNewLength = prev.piece.length - 1;
        const prevNewLFCnt = prev.piece.lineFeedCnt - 1;
        prev.piece = new Piece(prev.piece.bufferIndex, prev.piece.start, newEnd, prevNewLFCnt, prevNewLength);
        updateTreeMetadata(this, prev, -1, -1);
        if (prev.piece.length === 0) {
            nodesToDel.push(prev);
        }
        // update nextNode
        const newStart = { line: next.piece.start.line + 1, column: 0 };
        const newLength = next.piece.length - 1;
        const newLineFeedCnt = this.getLineFeedCnt(next.piece.bufferIndex, newStart, next.piece.end);
        next.piece = new Piece(next.piece.bufferIndex, newStart, next.piece.end, newLineFeedCnt, newLength);
        updateTreeMetadata(this, next, -1, -1);
        if (next.piece.length === 0) {
            nodesToDel.push(next);
        }
        // create new piece which contains \r\n
        const pieces = this.createNewPieces('\r\n');
        this.rbInsertRight(prev, pieces[0]);
        // delete empty nodes
        for (let i = 0; i < nodesToDel.length; i++) {
            rbDelete(this, nodesToDel[i]);
        }
    }
    adjustCarriageReturnFromNext(value, node) {
        if (this.shouldCheckCRLF() && this.endWithCR(value)) {
            const nextNode = node.next();
            if (this.startWithLF(nextNode)) {
                // move `\n` forward
                value += '\n';
                if (nextNode.piece.length === 1) {
                    rbDelete(this, nextNode);
                }
                else {
                    const piece = nextNode.piece;
                    const newStart = { line: piece.start.line + 1, column: 0 };
                    const newLength = piece.length - 1;
                    const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
                    nextNode.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
                    updateTreeMetadata(this, nextNode, -1, -1);
                }
                return true;
            }
        }
        return false;
    }
    // #endregion
    // #endregion
    // #region Tree operations
    iterate(node, callback) {
        if (node === SENTINEL) {
            return callback(SENTINEL);
        }
        const leftRet = this.iterate(node.left, callback);
        if (!leftRet) {
            return leftRet;
        }
        return callback(node) && this.iterate(node.right, callback);
    }
    getNodeContent(node) {
        if (node === SENTINEL) {
            return '';
        }
        const buffer = this._buffers[node.piece.bufferIndex];
        const piece = node.piece;
        const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const currentContent = buffer.buffer.substring(startOffset, endOffset);
        return currentContent;
    }
    getPieceContent(piece) {
        const buffer = this._buffers[piece.bufferIndex];
        const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const currentContent = buffer.buffer.substring(startOffset, endOffset);
        return currentContent;
    }
    /**
     *      node              node
     *     /  \              /  \
     *    a   b    <----   a    b
     *                         /
     *                        z
     */
    rbInsertRight(node, p) {
        const z = new TreeNode(p, 1 /* NodeColor.Red */);
        z.left = SENTINEL;
        z.right = SENTINEL;
        z.parent = SENTINEL;
        z.size_left = 0;
        z.lf_left = 0;
        const x = this.root;
        if (x === SENTINEL) {
            this.root = z;
            z.color = 0 /* NodeColor.Black */;
        }
        else if (node.right === SENTINEL) {
            node.right = z;
            z.parent = node;
        }
        else {
            const nextNode = leftest(node.right);
            nextNode.left = z;
            z.parent = nextNode;
        }
        fixInsert(this, z);
        return z;
    }
    /**
     *      node              node
     *     /  \              /  \
     *    a   b     ---->   a    b
     *                       \
     *                        z
     */
    rbInsertLeft(node, p) {
        const z = new TreeNode(p, 1 /* NodeColor.Red */);
        z.left = SENTINEL;
        z.right = SENTINEL;
        z.parent = SENTINEL;
        z.size_left = 0;
        z.lf_left = 0;
        if (this.root === SENTINEL) {
            this.root = z;
            z.color = 0 /* NodeColor.Black */;
        }
        else if (node.left === SENTINEL) {
            node.left = z;
            z.parent = node;
        }
        else {
            const prevNode = righttest(node.left); // a
            prevNode.right = z;
            z.parent = prevNode;
        }
        fixInsert(this, z);
        return z;
    }
}

export { Piece, PieceTreeBase, StringBuffer, createLineStarts, createLineStartsFast };
