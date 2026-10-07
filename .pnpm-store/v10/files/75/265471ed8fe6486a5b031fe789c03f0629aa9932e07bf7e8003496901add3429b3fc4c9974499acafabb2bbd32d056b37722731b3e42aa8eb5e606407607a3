import { localize } from '../../../nls.js';
import { containsRTL, firstNonWhitespaceIndex, lastNonWhitespaceIndex, isFullWidthCharacter } from '../../../base/common/strings.js';
import { StringBuilder } from '../core/stringBuilder.js';
import { LineDecoration, LineDecorationsNormalizer } from './lineDecorations.js';
import { LinePart } from './linePart.js';
import { TextDirection } from '../model.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class RenderLineInput {
    get isLTR() {
        return !this.containsRTL && this.textDirection !== TextDirection.RTL;
    }
    constructor(useMonospaceOptimizations, canUseHalfwidthRightwardsArrow, lineContent, continuesWithWrappedLine, isBasicASCII, containsRTL, fauxIndentLength, lineTokens, lineDecorations, tabSize, startVisibleColumn, spaceWidth, middotWidth, wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, selectionsOnLine, textDirection, verticalScrollbarSize, renderNewLineWhenEmpty = false) {
        this.useMonospaceOptimizations = useMonospaceOptimizations;
        this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
        this.lineContent = lineContent;
        this.continuesWithWrappedLine = continuesWithWrappedLine;
        this.isBasicASCII = isBasicASCII;
        this.containsRTL = containsRTL;
        this.fauxIndentLength = fauxIndentLength;
        this.lineTokens = lineTokens;
        this.lineDecorations = lineDecorations.sort(LineDecoration.compare);
        this.tabSize = tabSize;
        this.startVisibleColumn = startVisibleColumn;
        this.spaceWidth = spaceWidth;
        this.stopRenderingLineAfter = stopRenderingLineAfter;
        this.renderWhitespace = (renderWhitespace === 'all'
            ? 4 /* RenderWhitespace.All */
            : renderWhitespace === 'boundary'
                ? 1 /* RenderWhitespace.Boundary */
                : renderWhitespace === 'selection'
                    ? 2 /* RenderWhitespace.Selection */
                    : renderWhitespace === 'trailing'
                        ? 3 /* RenderWhitespace.Trailing */
                        : 0 /* RenderWhitespace.None */);
        this.renderControlCharacters = renderControlCharacters;
        this.fontLigatures = fontLigatures;
        this.selectionsOnLine = selectionsOnLine && selectionsOnLine.sort((a, b) => a.start < b.start ? -1 : 1);
        this.renderNewLineWhenEmpty = renderNewLineWhenEmpty;
        this.textDirection = textDirection;
        this.verticalScrollbarSize = verticalScrollbarSize;
        const wsmiddotDiff = Math.abs(wsmiddotWidth - spaceWidth);
        const middotDiff = Math.abs(middotWidth - spaceWidth);
        if (wsmiddotDiff < middotDiff) {
            this.renderSpaceWidth = wsmiddotWidth;
            this.renderSpaceCharCode = 0x2E31; // U+2E31 - WORD SEPARATOR MIDDLE DOT
        }
        else {
            this.renderSpaceWidth = middotWidth;
            this.renderSpaceCharCode = 0xB7; // U+00B7 - MIDDLE DOT
        }
    }
    sameSelection(otherSelections) {
        if (this.selectionsOnLine === null) {
            return otherSelections === null;
        }
        if (otherSelections === null) {
            return false;
        }
        if (otherSelections.length !== this.selectionsOnLine.length) {
            return false;
        }
        for (let i = 0; i < this.selectionsOnLine.length; i++) {
            if (!this.selectionsOnLine[i].equals(otherSelections[i])) {
                return false;
            }
        }
        return true;
    }
    equals(other) {
        return (this.useMonospaceOptimizations === other.useMonospaceOptimizations
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.lineContent === other.lineContent
            && this.continuesWithWrappedLine === other.continuesWithWrappedLine
            && this.isBasicASCII === other.isBasicASCII
            && this.containsRTL === other.containsRTL
            && this.fauxIndentLength === other.fauxIndentLength
            && this.tabSize === other.tabSize
            && this.startVisibleColumn === other.startVisibleColumn
            && this.spaceWidth === other.spaceWidth
            && this.renderSpaceWidth === other.renderSpaceWidth
            && this.renderSpaceCharCode === other.renderSpaceCharCode
            && this.stopRenderingLineAfter === other.stopRenderingLineAfter
            && this.renderWhitespace === other.renderWhitespace
            && this.renderControlCharacters === other.renderControlCharacters
            && this.fontLigatures === other.fontLigatures
            && LineDecoration.equalsArr(this.lineDecorations, other.lineDecorations)
            && this.lineTokens.equals(other.lineTokens)
            && this.sameSelection(other.selectionsOnLine)
            && this.textDirection === other.textDirection
            && this.verticalScrollbarSize === other.verticalScrollbarSize
            && this.renderNewLineWhenEmpty === other.renderNewLineWhenEmpty);
    }
}
class DomPosition {
    constructor(partIndex, charIndex) {
        this.partIndex = partIndex;
        this.charIndex = charIndex;
    }
}
/**
 * Provides a both direction mapping between a line's character and its rendered position.
 */
class CharacterMapping {
    static getPartIndex(partData) {
        return (partData & 4294901760 /* CharacterMappingConstants.PART_INDEX_MASK */) >>> 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */;
    }
    static getCharIndex(partData) {
        return (partData & 65535 /* CharacterMappingConstants.CHAR_INDEX_MASK */) >>> 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */;
    }
    constructor(length, partCount) {
        this.length = length;
        this._data = new Uint32Array(this.length);
        this._horizontalOffset = new Uint32Array(this.length);
    }
    setColumnInfo(column, partIndex, charIndex, horizontalOffset) {
        const partData = ((partIndex << 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */)
            | (charIndex << 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */)) >>> 0;
        this._data[column - 1] = partData;
        this._horizontalOffset[column - 1] = horizontalOffset;
    }
    getHorizontalOffset(column) {
        if (this._horizontalOffset.length === 0) {
            // No characters on this line
            return 0;
        }
        return this._horizontalOffset[column - 1];
    }
    charOffsetToPartData(charOffset) {
        if (this.length === 0) {
            return 0;
        }
        if (charOffset < 0) {
            return this._data[0];
        }
        if (charOffset >= this.length) {
            return this._data[this.length - 1];
        }
        return this._data[charOffset];
    }
    getDomPosition(column) {
        const partData = this.charOffsetToPartData(column - 1);
        const partIndex = CharacterMapping.getPartIndex(partData);
        const charIndex = CharacterMapping.getCharIndex(partData);
        return new DomPosition(partIndex, charIndex);
    }
    getColumn(domPosition, partLength) {
        const charOffset = this.partDataToCharOffset(domPosition.partIndex, partLength, domPosition.charIndex);
        return charOffset + 1;
    }
    partDataToCharOffset(partIndex, partLength, charIndex) {
        if (this.length === 0) {
            return 0;
        }
        const searchEntry = ((partIndex << 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */)
            | (charIndex << 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */)) >>> 0;
        let min = 0;
        let max = this.length - 1;
        while (min + 1 < max) {
            const mid = ((min + max) >>> 1);
            const midEntry = this._data[mid];
            if (midEntry === searchEntry) {
                return mid;
            }
            else if (midEntry > searchEntry) {
                max = mid;
            }
            else {
                min = mid;
            }
        }
        if (min === max) {
            return min;
        }
        const minEntry = this._data[min];
        const maxEntry = this._data[max];
        if (minEntry === searchEntry) {
            return min;
        }
        if (maxEntry === searchEntry) {
            return max;
        }
        const minPartIndex = CharacterMapping.getPartIndex(minEntry);
        const minCharIndex = CharacterMapping.getCharIndex(minEntry);
        const maxPartIndex = CharacterMapping.getPartIndex(maxEntry);
        let maxCharIndex;
        if (minPartIndex !== maxPartIndex) {
            // sitting between parts
            maxCharIndex = partLength;
        }
        else {
            maxCharIndex = CharacterMapping.getCharIndex(maxEntry);
        }
        const minEntryDistance = charIndex - minCharIndex;
        const maxEntryDistance = maxCharIndex - charIndex;
        if (minEntryDistance <= maxEntryDistance) {
            return min;
        }
        return max;
    }
}
class RenderLineOutput {
    constructor(characterMapping, containsForeignElements) {
        this._renderLineOutputBrand = undefined;
        this.characterMapping = characterMapping;
        this.containsForeignElements = containsForeignElements;
    }
}
function renderViewLine(input, sb) {
    if (input.lineContent.length === 0) {
        if (input.lineDecorations.length > 0) {
            // This line is empty, but it contains inline decorations
            sb.appendString(`<span>`);
            let beforeCount = 0;
            let afterCount = 0;
            let containsForeignElements = 0 /* ForeignElementType.None */;
            for (const lineDecoration of input.lineDecorations) {
                if (lineDecoration.type === 1 /* InlineDecorationType.Before */ || lineDecoration.type === 2 /* InlineDecorationType.After */) {
                    sb.appendString(`<span class="`);
                    sb.appendString(lineDecoration.className);
                    sb.appendString(`"></span>`);
                    if (lineDecoration.type === 1 /* InlineDecorationType.Before */) {
                        containsForeignElements |= 1 /* ForeignElementType.Before */;
                        beforeCount++;
                    }
                    if (lineDecoration.type === 2 /* InlineDecorationType.After */) {
                        containsForeignElements |= 2 /* ForeignElementType.After */;
                        afterCount++;
                    }
                }
            }
            sb.appendString(`</span>`);
            const characterMapping = new CharacterMapping(1, beforeCount + afterCount);
            characterMapping.setColumnInfo(1, beforeCount, 0, 0);
            return new RenderLineOutput(characterMapping, containsForeignElements);
        }
        // completely empty line
        if (input.renderNewLineWhenEmpty) {
            sb.appendString('<span><span>\n</span></span>');
        }
        else {
            sb.appendString('<span><span></span></span>');
        }
        return new RenderLineOutput(new CharacterMapping(0, 0), 0 /* ForeignElementType.None */);
    }
    return _renderLine(resolveRenderLineInput(input), sb);
}
class RenderLineOutput2 {
    constructor(characterMapping, html, containsForeignElements) {
        this.characterMapping = characterMapping;
        this.html = html;
        this.containsForeignElements = containsForeignElements;
    }
}
function renderViewLine2(input) {
    const sb = new StringBuilder(10000);
    const out = renderViewLine(input, sb);
    return new RenderLineOutput2(out.characterMapping, sb.build(), out.containsForeignElements);
}
class ResolvedRenderLineInput {
    constructor(fontIsMonospace, canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, parts, containsForeignElements, fauxIndentLength, tabSize, startVisibleColumn, spaceWidth, renderSpaceCharCode, renderWhitespace, renderControlCharacters) {
        this.fontIsMonospace = fontIsMonospace;
        this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
        this.lineContent = lineContent;
        this.len = len;
        this.isOverflowing = isOverflowing;
        this.overflowingCharCount = overflowingCharCount;
        this.parts = parts;
        this.containsForeignElements = containsForeignElements;
        this.fauxIndentLength = fauxIndentLength;
        this.tabSize = tabSize;
        this.startVisibleColumn = startVisibleColumn;
        this.spaceWidth = spaceWidth;
        this.renderSpaceCharCode = renderSpaceCharCode;
        this.renderWhitespace = renderWhitespace;
        this.renderControlCharacters = renderControlCharacters;
        //
    }
}
function resolveRenderLineInput(input) {
    const lineContent = input.lineContent;
    let isOverflowing;
    let overflowingCharCount;
    let len;
    if (input.stopRenderingLineAfter !== -1 && input.stopRenderingLineAfter < lineContent.length) {
        isOverflowing = true;
        overflowingCharCount = lineContent.length - input.stopRenderingLineAfter;
        len = input.stopRenderingLineAfter;
    }
    else {
        isOverflowing = false;
        overflowingCharCount = 0;
        len = lineContent.length;
    }
    let tokens = transformAndRemoveOverflowing(lineContent, input.containsRTL, input.lineTokens, input.fauxIndentLength, len);
    if (input.renderControlCharacters && !input.isBasicASCII) {
        // Calling `extractControlCharacters` before adding (possibly empty) line parts
        // for inline decorations. `extractControlCharacters` removes empty line parts.
        tokens = extractControlCharacters(lineContent, tokens);
    }
    if (input.renderWhitespace === 4 /* RenderWhitespace.All */ ||
        input.renderWhitespace === 1 /* RenderWhitespace.Boundary */ ||
        (input.renderWhitespace === 2 /* RenderWhitespace.Selection */ && !!input.selectionsOnLine) ||
        (input.renderWhitespace === 3 /* RenderWhitespace.Trailing */ && !input.continuesWithWrappedLine)) {
        tokens = _applyRenderWhitespace(input, lineContent, len, tokens);
    }
    let containsForeignElements = 0 /* ForeignElementType.None */;
    if (input.lineDecorations.length > 0) {
        for (let i = 0, len = input.lineDecorations.length; i < len; i++) {
            const lineDecoration = input.lineDecorations[i];
            if (lineDecoration.type === 3 /* InlineDecorationType.RegularAffectingLetterSpacing */) {
                // Pretend there are foreign elements... although not 100% accurate.
                containsForeignElements |= 1 /* ForeignElementType.Before */;
            }
            else if (lineDecoration.type === 1 /* InlineDecorationType.Before */) {
                containsForeignElements |= 1 /* ForeignElementType.Before */;
            }
            else if (lineDecoration.type === 2 /* InlineDecorationType.After */) {
                containsForeignElements |= 2 /* ForeignElementType.After */;
            }
        }
        tokens = _applyInlineDecorations(lineContent, len, tokens, input.lineDecorations);
    }
    if (!input.containsRTL) {
        // We can never split RTL text, as it ruins the rendering
        tokens = splitLargeTokens(lineContent, tokens, !input.isBasicASCII || input.fontLigatures);
    }
    else {
        // Split the first token if it contains both leading whitespace and RTL text
        tokens = splitLeadingWhitespaceFromRTL(lineContent, tokens);
    }
    return new ResolvedRenderLineInput(input.useMonospaceOptimizations, input.canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, tokens, containsForeignElements, input.fauxIndentLength, input.tabSize, input.startVisibleColumn, input.spaceWidth, input.renderSpaceCharCode, input.renderWhitespace, input.renderControlCharacters);
}
/**
 * In the rendering phase, characters are always looped until token.endIndex.
 * Ensure that all tokens end before `len` and the last one ends precisely at `len`.
 */
function transformAndRemoveOverflowing(lineContent, lineContainsRTL, tokens, fauxIndentLength, len) {
    const result = [];
    let resultLen = 0;
    // The faux indent part of the line should have no token type
    if (fauxIndentLength > 0) {
        result[resultLen++] = new LinePart(fauxIndentLength, '', 0, false);
    }
    let startOffset = fauxIndentLength;
    for (let tokenIndex = 0, tokensLen = tokens.getCount(); tokenIndex < tokensLen; tokenIndex++) {
        const endIndex = tokens.getEndOffset(tokenIndex);
        if (endIndex <= fauxIndentLength) {
            // The faux indent part of the line should have no token type
            continue;
        }
        const type = tokens.getClassName(tokenIndex);
        if (endIndex >= len) {
            const tokenContainsRTL = (lineContainsRTL ? containsRTL(lineContent.substring(startOffset, len)) : false);
            result[resultLen++] = new LinePart(len, type, 0, tokenContainsRTL);
            break;
        }
        const tokenContainsRTL = (lineContainsRTL ? containsRTL(lineContent.substring(startOffset, endIndex)) : false);
        result[resultLen++] = new LinePart(endIndex, type, 0, tokenContainsRTL);
        startOffset = endIndex;
    }
    return result;
}
/**
 * See https://github.com/microsoft/vscode/issues/6885.
 * It appears that having very large spans causes very slow reading of character positions.
 * So here we try to avoid that.
 */
function splitLargeTokens(lineContent, tokens, onlyAtSpaces) {
    let lastTokenEndIndex = 0;
    const result = [];
    let resultLen = 0;
    if (onlyAtSpaces) {
        // Split only at spaces => we need to walk each character
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i];
            const tokenEndIndex = token.endIndex;
            if (lastTokenEndIndex + 50 /* Constants.LongToken */ < tokenEndIndex) {
                const tokenType = token.type;
                const tokenMetadata = token.metadata;
                const tokenContainsRTL = token.containsRTL;
                let lastSpaceOffset = -1;
                let currTokenStart = lastTokenEndIndex;
                for (let j = lastTokenEndIndex; j < tokenEndIndex; j++) {
                    if (lineContent.charCodeAt(j) === 32 /* CharCode.Space */) {
                        lastSpaceOffset = j;
                    }
                    if (lastSpaceOffset !== -1 && j - currTokenStart >= 50 /* Constants.LongToken */) {
                        // Split at `lastSpaceOffset` + 1
                        result[resultLen++] = new LinePart(lastSpaceOffset + 1, tokenType, tokenMetadata, tokenContainsRTL);
                        currTokenStart = lastSpaceOffset + 1;
                        lastSpaceOffset = -1;
                    }
                }
                if (currTokenStart !== tokenEndIndex) {
                    result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
                }
            }
            else {
                result[resultLen++] = token;
            }
            lastTokenEndIndex = tokenEndIndex;
        }
    }
    else {
        // Split anywhere => we don't need to walk each character
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i];
            const tokenEndIndex = token.endIndex;
            const diff = (tokenEndIndex - lastTokenEndIndex);
            if (diff > 50 /* Constants.LongToken */) {
                const tokenType = token.type;
                const tokenMetadata = token.metadata;
                const tokenContainsRTL = token.containsRTL;
                const piecesCount = Math.ceil(diff / 50 /* Constants.LongToken */);
                for (let j = 1; j < piecesCount; j++) {
                    const pieceEndIndex = lastTokenEndIndex + (j * 50 /* Constants.LongToken */);
                    result[resultLen++] = new LinePart(pieceEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
                }
                result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
            }
            else {
                result[resultLen++] = token;
            }
            lastTokenEndIndex = tokenEndIndex;
        }
    }
    return result;
}
/**
 * Splits leading whitespace from the first token if it contains RTL text.
 */
function splitLeadingWhitespaceFromRTL(lineContent, tokens) {
    if (tokens.length === 0) {
        return tokens;
    }
    const firstToken = tokens[0];
    if (!firstToken.containsRTL) {
        return tokens;
    }
    // Check if the first token starts with whitespace
    const firstTokenEndIndex = firstToken.endIndex;
    let firstNonWhitespaceIndex = 0;
    for (let i = 0; i < firstTokenEndIndex; i++) {
        const charCode = lineContent.charCodeAt(i);
        if (charCode !== 32 /* CharCode.Space */ && charCode !== 9 /* CharCode.Tab */) {
            firstNonWhitespaceIndex = i;
            break;
        }
    }
    if (firstNonWhitespaceIndex === 0) {
        // No leading whitespace
        return tokens;
    }
    // Split the first token into leading whitespace and the rest
    const result = [];
    result.push(new LinePart(firstNonWhitespaceIndex, firstToken.type, firstToken.metadata, false));
    result.push(new LinePart(firstTokenEndIndex, firstToken.type, firstToken.metadata, firstToken.containsRTL));
    // Add remaining tokens
    for (let i = 1; i < tokens.length; i++) {
        result.push(tokens[i]);
    }
    return result;
}
function isControlCharacter(charCode) {
    if (charCode < 32) {
        return (charCode !== 9 /* CharCode.Tab */);
    }
    if (charCode === 127) {
        // DEL
        return true;
    }
    if ((charCode >= 0x202A && charCode <= 0x202E)
        || (charCode >= 0x2066 && charCode <= 0x2069)
        || (charCode >= 0x200E && charCode <= 0x200F)
        || charCode === 0x061C) {
        // Unicode Directional Formatting Characters
        // LRE	U+202A	LEFT-TO-RIGHT EMBEDDING
        // RLE	U+202B	RIGHT-TO-LEFT EMBEDDING
        // PDF	U+202C	POP DIRECTIONAL FORMATTING
        // LRO	U+202D	LEFT-TO-RIGHT OVERRIDE
        // RLO	U+202E	RIGHT-TO-LEFT OVERRIDE
        // LRI	U+2066	LEFT-TO-RIGHT ISOLATE
        // RLI	U+2067	RIGHT-TO-LEFT ISOLATE
        // FSI	U+2068	FIRST STRONG ISOLATE
        // PDI	U+2069	POP DIRECTIONAL ISOLATE
        // LRM	U+200E	LEFT-TO-RIGHT MARK
        // RLM	U+200F	RIGHT-TO-LEFT MARK
        // ALM	U+061C	ARABIC LETTER MARK
        return true;
    }
    return false;
}
function extractControlCharacters(lineContent, tokens) {
    const result = [];
    let lastLinePart = new LinePart(0, '', 0, false);
    let charOffset = 0;
    for (const token of tokens) {
        const tokenEndIndex = token.endIndex;
        for (; charOffset < tokenEndIndex; charOffset++) {
            const charCode = lineContent.charCodeAt(charOffset);
            if (isControlCharacter(charCode)) {
                if (charOffset > lastLinePart.endIndex) {
                    // emit previous part if it has text
                    lastLinePart = new LinePart(charOffset, token.type, token.metadata, token.containsRTL);
                    result.push(lastLinePart);
                }
                lastLinePart = new LinePart(charOffset + 1, 'mtkcontrol', token.metadata, false);
                result.push(lastLinePart);
            }
        }
        if (charOffset > lastLinePart.endIndex) {
            // emit previous part if it has text
            lastLinePart = new LinePart(tokenEndIndex, token.type, token.metadata, token.containsRTL);
            result.push(lastLinePart);
        }
    }
    return result;
}
/**
 * Whitespace is rendered by "replacing" tokens with a special-purpose `mtkw` type that is later recognized in the rendering phase.
 * Moreover, a token is created for every visual indent because on some fonts the glyphs used for rendering whitespace (&rarr; or &middot;) do not have the same width as &nbsp;.
 * The rendering phase will generate `style="width:..."` for these tokens.
 */
function _applyRenderWhitespace(input, lineContent, len, tokens) {
    const continuesWithWrappedLine = input.continuesWithWrappedLine;
    const fauxIndentLength = input.fauxIndentLength;
    const tabSize = input.tabSize;
    const startVisibleColumn = input.startVisibleColumn;
    const useMonospaceOptimizations = input.useMonospaceOptimizations;
    const selections = input.selectionsOnLine;
    const onlyBoundary = (input.renderWhitespace === 1 /* RenderWhitespace.Boundary */);
    const onlyTrailing = (input.renderWhitespace === 3 /* RenderWhitespace.Trailing */);
    const generateLinePartForEachWhitespace = (input.renderSpaceWidth !== input.spaceWidth);
    const result = [];
    let resultLen = 0;
    let tokenIndex = 0;
    let tokenType = tokens[tokenIndex].type;
    let tokenContainsRTL = tokens[tokenIndex].containsRTL;
    let tokenEndIndex = tokens[tokenIndex].endIndex;
    const tokensLength = tokens.length;
    let lineIsEmptyOrWhitespace = false;
    let firstNonWhitespaceIndex$1 = firstNonWhitespaceIndex(lineContent);
    let lastNonWhitespaceIndex$1;
    if (firstNonWhitespaceIndex$1 === -1) {
        lineIsEmptyOrWhitespace = true;
        firstNonWhitespaceIndex$1 = len;
        lastNonWhitespaceIndex$1 = len;
    }
    else {
        lastNonWhitespaceIndex$1 = lastNonWhitespaceIndex(lineContent);
    }
    let wasInWhitespace = false;
    let currentSelectionIndex = 0;
    let currentSelection = selections && selections[currentSelectionIndex];
    let tmpIndent = startVisibleColumn % tabSize;
    for (let charIndex = fauxIndentLength; charIndex < len; charIndex++) {
        const chCode = lineContent.charCodeAt(charIndex);
        if (currentSelection && currentSelection.endExclusive <= charIndex) {
            currentSelectionIndex++;
            currentSelection = selections && selections[currentSelectionIndex];
        }
        let isInWhitespace;
        if (charIndex < firstNonWhitespaceIndex$1 || charIndex > lastNonWhitespaceIndex$1) {
            // in leading or trailing whitespace
            isInWhitespace = true;
        }
        else if (chCode === 9 /* CharCode.Tab */) {
            // a tab character is rendered both in all and boundary cases
            isInWhitespace = true;
        }
        else if (chCode === 32 /* CharCode.Space */) {
            // hit a space character
            if (onlyBoundary) {
                // rendering only boundary whitespace
                if (wasInWhitespace) {
                    isInWhitespace = true;
                }
                else {
                    const nextChCode = (charIndex + 1 < len ? lineContent.charCodeAt(charIndex + 1) : 0 /* CharCode.Null */);
                    isInWhitespace = (nextChCode === 32 /* CharCode.Space */ || nextChCode === 9 /* CharCode.Tab */);
                }
            }
            else {
                isInWhitespace = true;
            }
        }
        else {
            isInWhitespace = false;
        }
        // If rendering whitespace on selection, check that the charIndex falls within a selection
        if (isInWhitespace && selections) {
            isInWhitespace = !!currentSelection && currentSelection.start <= charIndex && charIndex < currentSelection.endExclusive;
        }
        // If rendering only trailing whitespace, check that the charIndex points to trailing whitespace.
        if (isInWhitespace && onlyTrailing) {
            isInWhitespace = lineIsEmptyOrWhitespace || charIndex > lastNonWhitespaceIndex$1;
        }
        if (isInWhitespace && tokenContainsRTL) {
            // If the token contains RTL text, breaking it up into multiple line parts
            // to render whitespace might affect the browser's bidi layout.
            //
            // We render whitespace in such tokens only if the whitespace
            // is the leading or the trailing whitespace of the line,
            // which doesn't affect the browser's bidi layout.
            if (charIndex >= firstNonWhitespaceIndex$1 && charIndex <= lastNonWhitespaceIndex$1) {
                isInWhitespace = false;
            }
        }
        if (wasInWhitespace) {
            // was in whitespace token
            if (!isInWhitespace || (!useMonospaceOptimizations && tmpIndent >= tabSize)) {
                // leaving whitespace token or entering a new indent
                if (generateLinePartForEachWhitespace) {
                    const lastEndIndex = (resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength);
                    for (let i = lastEndIndex + 1; i <= charIndex; i++) {
                        result[resultLen++] = new LinePart(i, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
                    }
                }
                else {
                    result[resultLen++] = new LinePart(charIndex, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
                }
                tmpIndent = tmpIndent % tabSize;
            }
        }
        else {
            // was in regular token
            if (charIndex === tokenEndIndex || (isInWhitespace && charIndex > fauxIndentLength)) {
                result[resultLen++] = new LinePart(charIndex, tokenType, 0, tokenContainsRTL);
                tmpIndent = tmpIndent % tabSize;
            }
        }
        if (chCode === 9 /* CharCode.Tab */) {
            tmpIndent = tabSize;
        }
        else if (isFullWidthCharacter(chCode)) {
            tmpIndent += 2;
        }
        else {
            tmpIndent++;
        }
        wasInWhitespace = isInWhitespace;
        while (charIndex === tokenEndIndex) {
            tokenIndex++;
            if (tokenIndex < tokensLength) {
                tokenType = tokens[tokenIndex].type;
                tokenContainsRTL = tokens[tokenIndex].containsRTL;
                tokenEndIndex = tokens[tokenIndex].endIndex;
            }
            else {
                break;
            }
        }
    }
    let generateWhitespace = false;
    if (wasInWhitespace) {
        // was in whitespace token
        if (continuesWithWrappedLine && onlyBoundary) {
            const lastCharCode = (len > 0 ? lineContent.charCodeAt(len - 1) : 0 /* CharCode.Null */);
            const prevCharCode = (len > 1 ? lineContent.charCodeAt(len - 2) : 0 /* CharCode.Null */);
            const isSingleTrailingSpace = (lastCharCode === 32 /* CharCode.Space */ && (prevCharCode !== 32 /* CharCode.Space */ && prevCharCode !== 9 /* CharCode.Tab */));
            if (!isSingleTrailingSpace) {
                generateWhitespace = true;
            }
        }
        else {
            generateWhitespace = true;
        }
    }
    if (generateWhitespace) {
        if (generateLinePartForEachWhitespace) {
            const lastEndIndex = (resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength);
            for (let i = lastEndIndex + 1; i <= len; i++) {
                result[resultLen++] = new LinePart(i, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
            }
        }
        else {
            result[resultLen++] = new LinePart(len, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
        }
    }
    else {
        result[resultLen++] = new LinePart(len, tokenType, 0, tokenContainsRTL);
    }
    return result;
}
/**
 * Inline decorations are "merged" on top of tokens.
 * Special care must be taken when multiple inline decorations are at play and they overlap.
 */
function _applyInlineDecorations(lineContent, len, tokens, _lineDecorations) {
    _lineDecorations.sort(LineDecoration.compare);
    const lineDecorations = LineDecorationsNormalizer.normalize(lineContent, _lineDecorations);
    const lineDecorationsLen = lineDecorations.length;
    let lineDecorationIndex = 0;
    const result = [];
    let resultLen = 0;
    let lastResultEndIndex = 0;
    for (let tokenIndex = 0, len = tokens.length; tokenIndex < len; tokenIndex++) {
        const token = tokens[tokenIndex];
        const tokenEndIndex = token.endIndex;
        const tokenType = token.type;
        const tokenMetadata = token.metadata;
        const tokenContainsRTL = token.containsRTL;
        while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset < tokenEndIndex) {
            const lineDecoration = lineDecorations[lineDecorationIndex];
            if (lineDecoration.startOffset > lastResultEndIndex) {
                lastResultEndIndex = lineDecoration.startOffset;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
            }
            if (lineDecoration.endOffset + 1 <= tokenEndIndex) {
                // This line decoration ends before this token ends
                lastResultEndIndex = lineDecoration.endOffset + 1;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + ' ' + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
                lineDecorationIndex++;
            }
            else {
                // This line decoration continues on to the next token
                lastResultEndIndex = tokenEndIndex;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + ' ' + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
                break;
            }
        }
        if (tokenEndIndex > lastResultEndIndex) {
            lastResultEndIndex = tokenEndIndex;
            result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
        }
    }
    const lastTokenEndIndex = tokens[tokens.length - 1].endIndex;
    if (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
        while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
            const lineDecoration = lineDecorations[lineDecorationIndex];
            result[resultLen++] = new LinePart(lastResultEndIndex, lineDecoration.className, lineDecoration.metadata, false);
            lineDecorationIndex++;
        }
    }
    return result;
}
/**
 * This function is on purpose not split up into multiple functions to allow runtime type inference (i.e. performance reasons).
 * Notice how all the needed data is fully resolved and passed in (i.e. no other calls).
 */
function _renderLine(input, sb) {
    const fontIsMonospace = input.fontIsMonospace;
    const canUseHalfwidthRightwardsArrow = input.canUseHalfwidthRightwardsArrow;
    const containsForeignElements = input.containsForeignElements;
    const lineContent = input.lineContent;
    const len = input.len;
    const isOverflowing = input.isOverflowing;
    const overflowingCharCount = input.overflowingCharCount;
    const parts = input.parts;
    const fauxIndentLength = input.fauxIndentLength;
    const tabSize = input.tabSize;
    const startVisibleColumn = input.startVisibleColumn;
    const spaceWidth = input.spaceWidth;
    const renderSpaceCharCode = input.renderSpaceCharCode;
    const renderWhitespace = input.renderWhitespace;
    const renderControlCharacters = input.renderControlCharacters;
    const characterMapping = new CharacterMapping(len + 1, parts.length);
    let lastCharacterMappingDefined = false;
    let charIndex = 0;
    let visibleColumn = startVisibleColumn;
    let charOffsetInPart = 0; // the character offset in the current part
    let charHorizontalOffset = 0; // the character horizontal position in terms of chars relative to line start
    let partDisplacement = 0;
    sb.appendString('<span>');
    for (let partIndex = 0, tokensLen = parts.length; partIndex < tokensLen; partIndex++) {
        const part = parts[partIndex];
        const partEndIndex = part.endIndex;
        const partType = part.type;
        const partContainsRTL = part.containsRTL;
        const partRendersWhitespace = (renderWhitespace !== 0 /* RenderWhitespace.None */ && part.isWhitespace());
        const partRendersWhitespaceWithWidth = partRendersWhitespace && !fontIsMonospace && (partType === 'mtkw' /*only whitespace*/ || !containsForeignElements);
        const partIsEmptyAndHasPseudoAfter = (charIndex === partEndIndex && part.isPseudoAfter());
        charOffsetInPart = 0;
        sb.appendString('<span ');
        if (partContainsRTL) {
            sb.appendString('dir="rtl" style="unicode-bidi:isolate" ');
        }
        sb.appendString('class="');
        sb.appendString(partRendersWhitespaceWithWidth ? 'mtkz' : partType);
        sb.appendASCIICharCode(34 /* CharCode.DoubleQuote */);
        if (partRendersWhitespace) {
            let partWidth = 0;
            {
                let _charIndex = charIndex;
                let _visibleColumn = visibleColumn;
                for (; _charIndex < partEndIndex; _charIndex++) {
                    const charCode = lineContent.charCodeAt(_charIndex);
                    const charWidth = (charCode === 9 /* CharCode.Tab */ ? (tabSize - (_visibleColumn % tabSize)) : 1) | 0;
                    partWidth += charWidth;
                    if (_charIndex >= fauxIndentLength) {
                        _visibleColumn += charWidth;
                    }
                }
            }
            if (partRendersWhitespaceWithWidth) {
                sb.appendString(' style="width:');
                sb.appendString(String(spaceWidth * partWidth));
                sb.appendString('px"');
            }
            sb.appendASCIICharCode(62 /* CharCode.GreaterThan */);
            for (; charIndex < partEndIndex; charIndex++) {
                characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
                partDisplacement = 0;
                const charCode = lineContent.charCodeAt(charIndex);
                let producedCharacters;
                let charWidth;
                if (charCode === 9 /* CharCode.Tab */) {
                    producedCharacters = (tabSize - (visibleColumn % tabSize)) | 0;
                    charWidth = producedCharacters;
                    if (!canUseHalfwidthRightwardsArrow || charWidth > 1) {
                        sb.appendCharCode(0x2192); // RIGHTWARDS ARROW
                    }
                    else {
                        sb.appendCharCode(0xFFEB); // HALFWIDTH RIGHTWARDS ARROW
                    }
                    for (let space = 2; space <= charWidth; space++) {
                        sb.appendCharCode(0xA0); // &nbsp;
                    }
                }
                else { // must be CharCode.Space
                    producedCharacters = 2;
                    charWidth = 1;
                    sb.appendCharCode(renderSpaceCharCode); // &middot; or word separator middle dot
                    sb.appendCharCode(0x200C); // ZERO WIDTH NON-JOINER
                }
                charOffsetInPart += producedCharacters;
                charHorizontalOffset += charWidth;
                if (charIndex >= fauxIndentLength) {
                    visibleColumn += charWidth;
                }
            }
        }
        else {
            sb.appendASCIICharCode(62 /* CharCode.GreaterThan */);
            for (; charIndex < partEndIndex; charIndex++) {
                characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
                partDisplacement = 0;
                const charCode = lineContent.charCodeAt(charIndex);
                let producedCharacters = 1;
                let charWidth = 1;
                switch (charCode) {
                    case 9 /* CharCode.Tab */:
                        producedCharacters = (tabSize - (visibleColumn % tabSize));
                        charWidth = producedCharacters;
                        for (let space = 1; space <= producedCharacters; space++) {
                            sb.appendCharCode(0xA0); // &nbsp;
                        }
                        break;
                    case 32 /* CharCode.Space */:
                        sb.appendCharCode(0xA0); // &nbsp;
                        break;
                    case 60 /* CharCode.LessThan */:
                        sb.appendString('&lt;');
                        break;
                    case 62 /* CharCode.GreaterThan */:
                        sb.appendString('&gt;');
                        break;
                    case 38 /* CharCode.Ampersand */:
                        sb.appendString('&amp;');
                        break;
                    case 0 /* CharCode.Null */:
                        if (renderControlCharacters) {
                            // See https://unicode-table.com/en/blocks/control-pictures/
                            sb.appendCharCode(9216);
                        }
                        else {
                            sb.appendString('&#00;');
                        }
                        break;
                    case 65279 /* CharCode.UTF8_BOM */:
                    case 8232 /* CharCode.LINE_SEPARATOR */:
                    case 8233 /* CharCode.PARAGRAPH_SEPARATOR */:
                    case 133 /* CharCode.NEXT_LINE */:
                        sb.appendCharCode(0xFFFD);
                        break;
                    default:
                        if (isFullWidthCharacter(charCode)) {
                            charWidth++;
                        }
                        // See https://unicode-table.com/en/blocks/control-pictures/
                        if (renderControlCharacters && charCode < 32) {
                            sb.appendCharCode(9216 + charCode);
                        }
                        else if (renderControlCharacters && charCode === 127) {
                            // DEL
                            sb.appendCharCode(9249);
                        }
                        else if (renderControlCharacters && isControlCharacter(charCode)) {
                            sb.appendString('[U+');
                            sb.appendString(to4CharHex(charCode));
                            sb.appendString(']');
                            producedCharacters = 8;
                            charWidth = producedCharacters;
                        }
                        else {
                            sb.appendCharCode(charCode);
                        }
                }
                charOffsetInPart += producedCharacters;
                charHorizontalOffset += charWidth;
                if (charIndex >= fauxIndentLength) {
                    visibleColumn += charWidth;
                }
            }
        }
        if (partIsEmptyAndHasPseudoAfter) {
            partDisplacement++;
        }
        else {
            partDisplacement = 0;
        }
        if (charIndex >= len && !lastCharacterMappingDefined && part.isPseudoAfter()) {
            lastCharacterMappingDefined = true;
            characterMapping.setColumnInfo(charIndex + 1, partIndex, charOffsetInPart, charHorizontalOffset);
        }
        sb.appendString('</span>');
    }
    if (!lastCharacterMappingDefined) {
        // When getting client rects for the last character, we will position the
        // text range at the end of the span, insteaf of at the beginning of next span
        characterMapping.setColumnInfo(len + 1, parts.length - 1, charOffsetInPart, charHorizontalOffset);
    }
    if (isOverflowing) {
        sb.appendString('<span class="mtkoverflow">');
        sb.appendString(localize(796, "Show more ({0})", renderOverflowingCharCount(overflowingCharCount)));
        sb.appendString('</span>');
    }
    sb.appendString('</span>');
    return new RenderLineOutput(characterMapping, containsForeignElements);
}
function to4CharHex(n) {
    return n.toString(16).toUpperCase().padStart(4, '0');
}
function renderOverflowingCharCount(n) {
    if (n < 1024) {
        return localize(797, "{0} chars", n);
    }
    if (n < 1024 * 1024) {
        return `${(n / 1024).toFixed(1)} KB`;
    }
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export { CharacterMapping, DomPosition, RenderLineInput, RenderLineOutput, RenderLineOutput2, renderViewLine, renderViewLine2 };
