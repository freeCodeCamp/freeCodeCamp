import { NotSupportedError } from '../../../../../base/common/errors.js';
import { TokenMetadata } from '../../../encodedTokenAttributes.js';
import { TextAstNode } from './ast.js';
import { lengthZero, toLength, lengthAdd, lengthToObj, lengthGetColumnCountIfZeroLineCount, lengthDiff } from './length.js';
import { SmallImmutableSet } from './smallImmutableSet.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Token {
    constructor(length, kind, 
    /**
     * If this token is an opening bracket, this is the id of the opening bracket.
     * If this token is a closing bracket, this is the id of the first opening bracket that is closed by this bracket.
     * Otherwise, it is -1.
     */
    bracketId, 
    /**
     * If this token is an opening bracket, this just contains `bracketId`.
     * If this token is a closing bracket, this lists all opening bracket ids, that it closes.
     * Otherwise, it is empty.
     */
    bracketIds, astNode) {
        this.length = length;
        this.kind = kind;
        this.bracketId = bracketId;
        this.bracketIds = bracketIds;
        this.astNode = astNode;
    }
}
class TextBufferTokenizer {
    constructor(textModel, bracketTokens) {
        this.textModel = textModel;
        this.bracketTokens = bracketTokens;
        this.reader = new NonPeekableTextBufferTokenizer(this.textModel, this.bracketTokens);
        this._offset = lengthZero;
        this.didPeek = false;
        this.peeked = null;
        this.textBufferLineCount = textModel.getLineCount();
        this.textBufferLastLineLength = textModel.getLineLength(this.textBufferLineCount);
    }
    get offset() {
        return this._offset;
    }
    get length() {
        return toLength(this.textBufferLineCount - 1, this.textBufferLastLineLength);
    }
    skip(length) {
        this.didPeek = false;
        this._offset = lengthAdd(this._offset, length);
        const obj = lengthToObj(this._offset);
        this.reader.setPosition(obj.lineCount, obj.columnCount);
    }
    read() {
        let token;
        if (this.peeked) {
            this.didPeek = false;
            token = this.peeked;
        }
        else {
            token = this.reader.read();
        }
        if (token) {
            this._offset = lengthAdd(this._offset, token.length);
        }
        return token;
    }
    peek() {
        if (!this.didPeek) {
            this.peeked = this.reader.read();
            this.didPeek = true;
        }
        return this.peeked;
    }
}
/**
 * Does not support peek.
*/
class NonPeekableTextBufferTokenizer {
    constructor(textModel, bracketTokens) {
        this.textModel = textModel;
        this.bracketTokens = bracketTokens;
        this.lineIdx = 0;
        this.line = null;
        this.lineCharOffset = 0;
        this.lineTokens = null;
        this.lineTokenOffset = 0;
        /** Must be a zero line token. The end of the document cannot be peeked. */
        this.peekedToken = null;
        this.textBufferLineCount = textModel.getLineCount();
        this.textBufferLastLineLength = textModel.getLineLength(this.textBufferLineCount);
    }
    setPosition(lineIdx, column) {
        // We must not jump into a token!
        if (lineIdx === this.lineIdx) {
            this.lineCharOffset = column;
            if (this.line !== null) {
                this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
            }
        }
        else {
            this.lineIdx = lineIdx;
            this.lineCharOffset = column;
            this.line = null;
        }
        this.peekedToken = null;
    }
    read() {
        if (this.peekedToken) {
            const token = this.peekedToken;
            this.peekedToken = null;
            this.lineCharOffset += lengthGetColumnCountIfZeroLineCount(token.length);
            return token;
        }
        if (this.lineIdx > this.textBufferLineCount - 1 || (this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength)) {
            // We are after the end
            return null;
        }
        if (this.line === null) {
            this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1);
            this.line = this.lineTokens.getLineContent();
            this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
        }
        const startLineIdx = this.lineIdx;
        const startLineCharOffset = this.lineCharOffset;
        // limits the length of text tokens.
        // If text tokens get too long, incremental updates will be slow
        let lengthHeuristic = 0;
        while (true) {
            const lineTokens = this.lineTokens;
            const tokenCount = lineTokens.getCount();
            let peekedBracketToken = null;
            if (this.lineTokenOffset < tokenCount) {
                const tokenMetadata = lineTokens.getMetadata(this.lineTokenOffset);
                while (this.lineTokenOffset + 1 < tokenCount && tokenMetadata === lineTokens.getMetadata(this.lineTokenOffset + 1)) {
                    // Skip tokens that are identical.
                    // Sometimes, (bracket) identifiers are split up into multiple tokens.
                    this.lineTokenOffset++;
                }
                const isOther = TokenMetadata.getTokenType(tokenMetadata) === 0 /* StandardTokenType.Other */;
                const containsBracketType = TokenMetadata.containsBalancedBrackets(tokenMetadata);
                const endOffset = lineTokens.getEndOffset(this.lineTokenOffset);
                // Is there a bracket token next? Only consume text.
                if (containsBracketType && isOther && this.lineCharOffset < endOffset) {
                    const languageId = lineTokens.getLanguageId(this.lineTokenOffset);
                    const text = this.line.substring(this.lineCharOffset, endOffset);
                    const brackets = this.bracketTokens.getSingleLanguageBracketTokens(languageId);
                    const regexp = brackets.regExpGlobal;
                    if (regexp) {
                        regexp.lastIndex = 0;
                        const match = regexp.exec(text);
                        if (match) {
                            peekedBracketToken = brackets.getToken(match[0]);
                            if (peekedBracketToken) {
                                // Consume leading text of the token
                                this.lineCharOffset += match.index;
                            }
                        }
                    }
                }
                lengthHeuristic += endOffset - this.lineCharOffset;
                if (peekedBracketToken) {
                    // Don't skip the entire token, as a single token could contain multiple brackets.
                    if (startLineIdx !== this.lineIdx || startLineCharOffset !== this.lineCharOffset) {
                        // There is text before the bracket
                        this.peekedToken = peekedBracketToken;
                        break;
                    }
                    else {
                        // Consume the peeked token
                        this.lineCharOffset += lengthGetColumnCountIfZeroLineCount(peekedBracketToken.length);
                        return peekedBracketToken;
                    }
                }
                else {
                    // Skip the entire token, as the token contains no brackets at all.
                    this.lineTokenOffset++;
                    this.lineCharOffset = endOffset;
                }
            }
            else {
                if (this.lineIdx === this.textBufferLineCount - 1) {
                    break;
                }
                this.lineIdx++;
                this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1);
                this.lineTokenOffset = 0;
                this.line = this.lineTokens.getLineContent();
                this.lineCharOffset = 0;
                lengthHeuristic += 33; // max 1000/33 = 30 lines
                // This limits the amount of work to recompute min-indentation
                if (lengthHeuristic > 1000) {
                    // only break (automatically) at the end of line.
                    break;
                }
            }
            if (lengthHeuristic > 1500) {
                // Eventually break regardless of the line length so that
                // very long lines do not cause bad performance.
                // This effective limits max indentation to 500, as
                // indentation is not computed across multiple text nodes.
                break;
            }
        }
        // If a token contains some proper indentation, it also contains \n{INDENTATION+}(?!{INDENTATION}),
        // unless the line is too long.
        // Thus, the min indentation of the document is the minimum min indentation of every text node.
        const length = lengthDiff(startLineIdx, startLineCharOffset, this.lineIdx, this.lineCharOffset);
        return new Token(length, 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(length));
    }
}
class FastTokenizer {
    constructor(text, brackets) {
        this.text = text;
        this._offset = lengthZero;
        this.idx = 0;
        const regExpStr = brackets.getRegExpStr();
        const regexp = regExpStr ? new RegExp(regExpStr + '|\n', 'gi') : null;
        const tokens = [];
        let match;
        let curLineCount = 0;
        let lastLineBreakOffset = 0;
        let lastTokenEndOffset = 0;
        let lastTokenEndLine = 0;
        const smallTextTokens0Line = [];
        for (let i = 0; i < 60; i++) {
            smallTextTokens0Line.push(new Token(toLength(0, i), 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(toLength(0, i))));
        }
        const smallTextTokens1Line = [];
        for (let i = 0; i < 60; i++) {
            smallTextTokens1Line.push(new Token(toLength(1, i), 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(toLength(1, i))));
        }
        if (regexp) {
            regexp.lastIndex = 0;
            // If a token contains indentation, it also contains \n{INDENTATION+}(?!{INDENTATION})
            while ((match = regexp.exec(text)) !== null) {
                const curOffset = match.index;
                const value = match[0];
                if (value === '\n') {
                    curLineCount++;
                    lastLineBreakOffset = curOffset + 1;
                }
                else {
                    if (lastTokenEndOffset !== curOffset) {
                        let token;
                        if (lastTokenEndLine === curLineCount) {
                            const colCount = curOffset - lastTokenEndOffset;
                            if (colCount < smallTextTokens0Line.length) {
                                token = smallTextTokens0Line[colCount];
                            }
                            else {
                                const length = toLength(0, colCount);
                                token = new Token(length, 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(length));
                            }
                        }
                        else {
                            const lineCount = curLineCount - lastTokenEndLine;
                            const colCount = curOffset - lastLineBreakOffset;
                            if (lineCount === 1 && colCount < smallTextTokens1Line.length) {
                                token = smallTextTokens1Line[colCount];
                            }
                            else {
                                const length = toLength(lineCount, colCount);
                                token = new Token(length, 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(length));
                            }
                        }
                        tokens.push(token);
                    }
                    // value is matched by regexp, so the token must exist
                    tokens.push(brackets.getToken(value));
                    lastTokenEndOffset = curOffset + value.length;
                    lastTokenEndLine = curLineCount;
                }
            }
        }
        const offset = text.length;
        if (lastTokenEndOffset !== offset) {
            const length = (lastTokenEndLine === curLineCount)
                ? toLength(0, offset - lastTokenEndOffset)
                : toLength(curLineCount - lastTokenEndLine, offset - lastLineBreakOffset);
            tokens.push(new Token(length, 0 /* TokenKind.Text */, -1, SmallImmutableSet.getEmpty(), new TextAstNode(length)));
        }
        this.length = toLength(curLineCount, offset - lastLineBreakOffset);
        this.tokens = tokens;
    }
    get offset() {
        return this._offset;
    }
    read() {
        return this.tokens[this.idx++] || null;
    }
    peek() {
        return this.tokens[this.idx] || null;
    }
    skip(length) {
        throw new NotSupportedError();
    }
}

export { FastTokenizer, TextBufferTokenizer, Token };
