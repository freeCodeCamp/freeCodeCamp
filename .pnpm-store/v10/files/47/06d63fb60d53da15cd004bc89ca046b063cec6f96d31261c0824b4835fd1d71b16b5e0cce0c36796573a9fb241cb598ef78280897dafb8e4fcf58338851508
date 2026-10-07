import { computeIndentLevel } from '../../../common/model/utils.js';
import { MAX_LINE_NUMBER, FoldingRegions } from './foldingRanges.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const MAX_FOLDING_REGIONS_FOR_INDENT_DEFAULT = 5000;
const ID_INDENT_PROVIDER = 'indent';
class IndentRangeProvider {
    constructor(editorModel, languageConfigurationService, foldingRangesLimit) {
        this.editorModel = editorModel;
        this.languageConfigurationService = languageConfigurationService;
        this.foldingRangesLimit = foldingRangesLimit;
        this.id = ID_INDENT_PROVIDER;
    }
    dispose() { }
    compute(cancelationToken) {
        const foldingRules = this.languageConfigurationService.getLanguageConfiguration(this.editorModel.getLanguageId()).foldingRules;
        const offSide = foldingRules && !!foldingRules.offSide;
        const markers = foldingRules && foldingRules.markers;
        return Promise.resolve(computeRanges(this.editorModel, offSide, markers, this.foldingRangesLimit));
    }
}
// public only for testing
class RangesCollector {
    constructor(foldingRangesLimit) {
        this._startIndexes = [];
        this._endIndexes = [];
        this._indentOccurrences = [];
        this._length = 0;
        this._foldingRangesLimit = foldingRangesLimit;
    }
    insertFirst(startLineNumber, endLineNumber, indent) {
        if (startLineNumber > MAX_LINE_NUMBER || endLineNumber > MAX_LINE_NUMBER) {
            return;
        }
        const index = this._length;
        this._startIndexes[index] = startLineNumber;
        this._endIndexes[index] = endLineNumber;
        this._length++;
        if (indent < 1000) {
            this._indentOccurrences[indent] = (this._indentOccurrences[indent] || 0) + 1;
        }
    }
    toIndentRanges(model) {
        const limit = this._foldingRangesLimit.limit;
        if (this._length <= limit) {
            this._foldingRangesLimit.update(this._length, false);
            // reverse and create arrays of the exact length
            const startIndexes = new Uint32Array(this._length);
            const endIndexes = new Uint32Array(this._length);
            for (let i = this._length - 1, k = 0; i >= 0; i--, k++) {
                startIndexes[k] = this._startIndexes[i];
                endIndexes[k] = this._endIndexes[i];
            }
            return new FoldingRegions(startIndexes, endIndexes);
        }
        else {
            this._foldingRangesLimit.update(this._length, limit);
            let entries = 0;
            let maxIndent = this._indentOccurrences.length;
            for (let i = 0; i < this._indentOccurrences.length; i++) {
                const n = this._indentOccurrences[i];
                if (n) {
                    if (n + entries > limit) {
                        maxIndent = i;
                        break;
                    }
                    entries += n;
                }
            }
            const tabSize = model.getOptions().tabSize;
            // reverse and create arrays of the exact length
            const startIndexes = new Uint32Array(limit);
            const endIndexes = new Uint32Array(limit);
            for (let i = this._length - 1, k = 0; i >= 0; i--) {
                const startIndex = this._startIndexes[i];
                const lineContent = model.getLineContent(startIndex);
                const indent = computeIndentLevel(lineContent, tabSize);
                if (indent < maxIndent || (indent === maxIndent && entries++ < limit)) {
                    startIndexes[k] = startIndex;
                    endIndexes[k] = this._endIndexes[i];
                    k++;
                }
            }
            return new FoldingRegions(startIndexes, endIndexes);
        }
    }
}
const foldingRangesLimitDefault = {
    limit: MAX_FOLDING_REGIONS_FOR_INDENT_DEFAULT,
    update: () => { }
};
function computeRanges(model, offSide, markers, foldingRangesLimit = foldingRangesLimitDefault) {
    const tabSize = model.getOptions().tabSize;
    const result = new RangesCollector(foldingRangesLimit);
    let pattern = undefined;
    if (markers) {
        pattern = new RegExp(`(${markers.start.source})|(?:${markers.end.source})`);
    }
    const previousRegions = [];
    const line = model.getLineCount() + 1;
    previousRegions.push({ indent: -1, endAbove: line, line }); // sentinel, to make sure there's at least one entry
    for (let line = model.getLineCount(); line > 0; line--) {
        const lineContent = model.getLineContent(line);
        const indent = computeIndentLevel(lineContent, tabSize);
        let previous = previousRegions[previousRegions.length - 1];
        if (indent === -1) {
            if (offSide) {
                // for offSide languages, empty lines are associated to the previous block
                // note: the next block is already written to the results, so this only
                // impacts the end position of the block before
                previous.endAbove = line;
            }
            continue; // only whitespace
        }
        let m;
        if (pattern && (m = lineContent.match(pattern))) {
            // folding pattern match
            if (m[1]) { // start pattern match
                // discard all regions until the folding pattern
                let i = previousRegions.length - 1;
                while (i > 0 && previousRegions[i].indent !== -2) {
                    i--;
                }
                if (i > 0) {
                    previousRegions.length = i + 1;
                    previous = previousRegions[i];
                    // new folding range from pattern, includes the end line
                    result.insertFirst(line, previous.line, indent);
                    previous.line = line;
                    previous.indent = indent;
                    previous.endAbove = line;
                    continue;
                }
            }
            else { // end pattern match
                previousRegions.push({ indent: -2, endAbove: line, line });
                continue;
            }
        }
        if (previous.indent > indent) {
            // discard all regions with larger indent
            do {
                previousRegions.pop();
                previous = previousRegions[previousRegions.length - 1];
            } while (previous.indent > indent);
            // new folding range
            const endLineNumber = previous.endAbove - 1;
            if (endLineNumber - line >= 1) { // needs at east size 1
                result.insertFirst(line, endLineNumber, indent);
            }
        }
        if (previous.indent === indent) {
            previous.endAbove = line;
        }
        else { // previous.indent < indent
            // new region with a bigger indent
            previousRegions.push({ indent, endAbove: line, line });
        }
    }
    return result.toIndentRanges(model);
}

export { IndentRangeProvider, RangesCollector, computeRanges };
