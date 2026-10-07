import { LineTokens } from '../tokens/lineTokens.js';
import { Position } from '../core/position.js';
import { LineInjectedText } from '../textModelEvents.js';
import { ViewLineData } from '../viewModel.js';
import { SingleLineInlineDecoration } from './inlineDecorations.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createModelLineProjection(lineBreakData, isVisible) {
    if (lineBreakData === null) {
        // No mapping needed
        if (isVisible) {
            return IdentityModelLineProjection.INSTANCE;
        }
        return HiddenModelLineProjection.INSTANCE;
    }
    else {
        return new ModelLineProjection(lineBreakData, isVisible);
    }
}
/**
 * This projection is used to
 * * wrap model lines
 * * inject text
 */
class ModelLineProjection {
    constructor(lineBreakData, isVisible) {
        this._projectionData = lineBreakData;
        this._isVisible = isVisible;
    }
    isVisible() {
        return this._isVisible;
    }
    setVisible(isVisible) {
        this._isVisible = isVisible;
        return this;
    }
    getProjectionData() {
        return this._projectionData;
    }
    getViewLineCount() {
        if (!this._isVisible) {
            return 0;
        }
        return this._projectionData.getOutputLineCount();
    }
    getViewLineContent(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        const startOffsetInInputWithInjections = outputLineIndex > 0 ? this._projectionData.breakOffsets[outputLineIndex - 1] : 0;
        const endOffsetInInputWithInjections = this._projectionData.breakOffsets[outputLineIndex];
        let r;
        if (this._projectionData.injectionOffsets !== null) {
            const injectedTexts = this._projectionData.injectionOffsets.map((offset, idx) => new LineInjectedText(0, 0, offset + 1, this._projectionData.injectionOptions[idx], 0));
            const lineWithInjections = LineInjectedText.applyInjectedText(model.getLineContent(modelLineNumber), injectedTexts);
            r = lineWithInjections.substring(startOffsetInInputWithInjections, endOffsetInInputWithInjections);
        }
        else {
            r = model.getValueInRange({
                startLineNumber: modelLineNumber,
                startColumn: startOffsetInInputWithInjections + 1,
                endLineNumber: modelLineNumber,
                endColumn: endOffsetInInputWithInjections + 1
            });
        }
        if (outputLineIndex > 0) {
            r = spaces(this._projectionData.wrappedTextIndentLength) + r;
        }
        return r;
    }
    getViewLineLength(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getLineLength(outputLineIndex);
    }
    getViewLineMinColumn(_model, _modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getMinOutputOffset(outputLineIndex) + 1;
    }
    getViewLineMaxColumn(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getMaxOutputOffset(outputLineIndex) + 1;
    }
    /**
     * Try using {@link getViewLinesData} instead.
    */
    getViewLineData(model, modelLineNumber, outputLineIndex) {
        const arr = new Array();
        this.getViewLinesData(model, modelLineNumber, outputLineIndex, 1, 0, [true], arr);
        return arr[0];
    }
    getViewLinesData(model, modelLineNumber, outputLineIdx, lineCount, globalStartIndex, needed, result) {
        this._assertVisible();
        const lineBreakData = this._projectionData;
        const injectionOffsets = lineBreakData.injectionOffsets;
        const injectionOptions = lineBreakData.injectionOptions;
        let inlineDecorationsPerOutputLine = null;
        if (injectionOffsets) {
            inlineDecorationsPerOutputLine = [];
            let totalInjectedTextLengthBefore = 0;
            let currentInjectedOffset = 0;
            for (let outputLineIndex = 0; outputLineIndex < lineBreakData.getOutputLineCount(); outputLineIndex++) {
                const inlineDecorations = new Array();
                inlineDecorationsPerOutputLine[outputLineIndex] = inlineDecorations;
                const lineStartOffsetInInputWithInjections = outputLineIndex > 0 ? lineBreakData.breakOffsets[outputLineIndex - 1] : 0;
                const lineEndOffsetInInputWithInjections = lineBreakData.breakOffsets[outputLineIndex];
                while (currentInjectedOffset < injectionOffsets.length) {
                    const length = injectionOptions[currentInjectedOffset].content.length;
                    const injectedTextStartOffsetInInputWithInjections = injectionOffsets[currentInjectedOffset] + totalInjectedTextLengthBefore;
                    const injectedTextEndOffsetInInputWithInjections = injectedTextStartOffsetInInputWithInjections + length;
                    if (injectedTextStartOffsetInInputWithInjections > lineEndOffsetInInputWithInjections) {
                        // Injected text only starts in later wrapped lines.
                        break;
                    }
                    if (lineStartOffsetInInputWithInjections < injectedTextEndOffsetInInputWithInjections) {
                        // Injected text ends after or in this line (but also starts in or before this line).
                        const options = injectionOptions[currentInjectedOffset];
                        if (options.inlineClassName) {
                            const offset = (outputLineIndex > 0 ? lineBreakData.wrappedTextIndentLength : 0);
                            const start = offset + Math.max(injectedTextStartOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, 0);
                            const end = offset + Math.min(injectedTextEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, lineEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections);
                            if (start !== end) {
                                inlineDecorations.push(new SingleLineInlineDecoration(start, end, options.inlineClassName, options.inlineClassNameAffectsLetterSpacing));
                            }
                        }
                    }
                    if (injectedTextEndOffsetInInputWithInjections <= lineEndOffsetInInputWithInjections) {
                        totalInjectedTextLengthBefore += length;
                        currentInjectedOffset++;
                    }
                    else {
                        // injected text breaks into next line, process it again
                        break;
                    }
                }
            }
        }
        let lineWithInjections;
        if (injectionOffsets) {
            const tokensToInsert = [];
            for (let idx = 0; idx < injectionOffsets.length; idx++) {
                const offset = injectionOffsets[idx];
                const tokens = injectionOptions[idx].tokens;
                if (tokens) {
                    tokens.forEach((range, info) => {
                        tokensToInsert.push({
                            offset,
                            text: range.substring(injectionOptions[idx].content),
                            tokenMetadata: info.metadata,
                        });
                    });
                }
                else {
                    tokensToInsert.push({
                        offset,
                        text: injectionOptions[idx].content,
                        tokenMetadata: LineTokens.defaultTokenMetadata,
                    });
                }
            }
            lineWithInjections = model.tokenization.getLineTokens(modelLineNumber).withInserted(tokensToInsert);
        }
        else {
            lineWithInjections = model.tokenization.getLineTokens(modelLineNumber);
        }
        for (let outputLineIndex = outputLineIdx; outputLineIndex < outputLineIdx + lineCount; outputLineIndex++) {
            const globalIndex = globalStartIndex + outputLineIndex - outputLineIdx;
            if (!needed[globalIndex]) {
                result[globalIndex] = null;
                continue;
            }
            result[globalIndex] = this._getViewLineData(lineWithInjections, inlineDecorationsPerOutputLine ? inlineDecorationsPerOutputLine[outputLineIndex] : null, outputLineIndex);
        }
    }
    _getViewLineData(lineWithInjections, inlineDecorations, outputLineIndex) {
        this._assertVisible();
        const lineBreakData = this._projectionData;
        const deltaStartIndex = (outputLineIndex > 0 ? lineBreakData.wrappedTextIndentLength : 0);
        const lineStartOffsetInInputWithInjections = outputLineIndex > 0 ? lineBreakData.breakOffsets[outputLineIndex - 1] : 0;
        const lineEndOffsetInInputWithInjections = lineBreakData.breakOffsets[outputLineIndex];
        const tokens = lineWithInjections.sliceAndInflate(lineStartOffsetInInputWithInjections, lineEndOffsetInInputWithInjections, deltaStartIndex);
        let lineContent = tokens.getLineContent();
        if (outputLineIndex > 0) {
            lineContent = spaces(lineBreakData.wrappedTextIndentLength) + lineContent;
        }
        const minColumn = this._projectionData.getMinOutputOffset(outputLineIndex) + 1;
        const maxColumn = lineContent.length + 1;
        const continuesWithWrappedLine = (outputLineIndex + 1 < this.getViewLineCount());
        const startVisibleColumn = (outputLineIndex === 0 ? 0 : lineBreakData.breakOffsetsVisibleColumn[outputLineIndex - 1]);
        return new ViewLineData(lineContent, continuesWithWrappedLine, minColumn, maxColumn, startVisibleColumn, tokens, inlineDecorations);
    }
    getModelColumnOfViewPosition(outputLineIndex, outputColumn) {
        this._assertVisible();
        return this._projectionData.translateToInputOffset(outputLineIndex, outputColumn - 1) + 1;
    }
    getViewPositionOfModelPosition(deltaLineNumber, inputColumn, affinity = 2 /* PositionAffinity.None */) {
        this._assertVisible();
        const r = this._projectionData.translateToOutputPosition(inputColumn - 1, affinity);
        return r.toPosition(deltaLineNumber);
    }
    getViewLineNumberOfModelPosition(deltaLineNumber, inputColumn) {
        this._assertVisible();
        const r = this._projectionData.translateToOutputPosition(inputColumn - 1);
        return deltaLineNumber + r.outputLineIndex;
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        const baseViewLineNumber = outputPosition.lineNumber - outputLineIndex;
        const normalizedOutputPosition = this._projectionData.normalizeOutputPosition(outputLineIndex, outputPosition.column - 1, affinity);
        const result = normalizedOutputPosition.toPosition(baseViewLineNumber);
        return result;
    }
    getInjectedTextAt(outputLineIndex, outputColumn) {
        return this._projectionData.getInjectedText(outputLineIndex, outputColumn - 1);
    }
    _assertVisible() {
        if (!this._isVisible) {
            throw new Error('Not supported');
        }
    }
}
/**
 * This projection does not change the model line.
*/
class IdentityModelLineProjection {
    static { this.INSTANCE = new IdentityModelLineProjection(); }
    constructor() { }
    isVisible() {
        return true;
    }
    setVisible(isVisible) {
        if (isVisible) {
            return this;
        }
        return HiddenModelLineProjection.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 1;
    }
    getViewLineContent(model, modelLineNumber, _outputLineIndex) {
        return model.getLineContent(modelLineNumber);
    }
    getViewLineLength(model, modelLineNumber, _outputLineIndex) {
        return model.getLineLength(modelLineNumber);
    }
    getViewLineMinColumn(model, modelLineNumber, _outputLineIndex) {
        return model.getLineMinColumn(modelLineNumber);
    }
    getViewLineMaxColumn(model, modelLineNumber, _outputLineIndex) {
        return model.getLineMaxColumn(modelLineNumber);
    }
    getViewLineData(model, modelLineNumber, _outputLineIndex) {
        const lineTokens = model.tokenization.getLineTokens(modelLineNumber);
        const lineContent = lineTokens.getLineContent();
        return new ViewLineData(lineContent, false, 1, lineContent.length + 1, 0, lineTokens.inflate(), null);
    }
    getViewLinesData(model, modelLineNumber, _fromOuputLineIndex, _toOutputLineIndex, globalStartIndex, needed, result) {
        if (!needed[globalStartIndex]) {
            result[globalStartIndex] = null;
            return;
        }
        result[globalStartIndex] = this.getViewLineData(model, modelLineNumber, 0);
    }
    getModelColumnOfViewPosition(_outputLineIndex, outputColumn) {
        return outputColumn;
    }
    getViewPositionOfModelPosition(deltaLineNumber, inputColumn) {
        return new Position(deltaLineNumber, inputColumn);
    }
    getViewLineNumberOfModelPosition(deltaLineNumber, _inputColumn) {
        return deltaLineNumber;
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        return outputPosition;
    }
    getInjectedTextAt(_outputLineIndex, _outputColumn) {
        return null;
    }
}
/**
 * This projection hides the model line.
 */
class HiddenModelLineProjection {
    static { this.INSTANCE = new HiddenModelLineProjection(); }
    constructor() { }
    isVisible() {
        return false;
    }
    setVisible(isVisible) {
        if (!isVisible) {
            return this;
        }
        return IdentityModelLineProjection.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 0;
    }
    getViewLineContent(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineLength(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineMinColumn(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineMaxColumn(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineData(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLinesData(_model, _modelLineNumber, _fromOuputLineIndex, _toOutputLineIndex, _globalStartIndex, _needed, _result) {
        throw new Error('Not supported');
    }
    getModelColumnOfViewPosition(_outputLineIndex, _outputColumn) {
        throw new Error('Not supported');
    }
    getViewPositionOfModelPosition(_deltaLineNumber, _inputColumn) {
        throw new Error('Not supported');
    }
    getViewLineNumberOfModelPosition(_deltaLineNumber, _inputColumn) {
        throw new Error('Not supported');
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        throw new Error('Not supported');
    }
    getInjectedTextAt(_outputLineIndex, _outputColumn) {
        throw new Error('Not supported');
    }
}
const _spaces = [''];
function spaces(count) {
    if (count >= _spaces.length) {
        for (let i = 1; i <= count; i++) {
            _spaces[i] = _makeSpaces(i);
        }
    }
    return _spaces[count];
}
function _makeSpaces(count) {
    return new Array(count + 1).join(' ');
}

export { createModelLineProjection };
