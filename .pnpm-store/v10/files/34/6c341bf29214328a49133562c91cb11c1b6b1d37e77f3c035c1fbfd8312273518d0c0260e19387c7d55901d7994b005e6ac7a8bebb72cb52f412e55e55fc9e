import { Emitter } from '../../../../base/common/event.js';
import { FoldingRegions } from './foldingRanges.js';
import { hash } from '../../../../base/common/hash.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class FoldingModel {
    get regions() { return this._regions; }
    get textModel() { return this._textModel; }
    constructor(textModel, decorationProvider) {
        this._updateEventEmitter = new Emitter();
        this.onDidChange = this._updateEventEmitter.event;
        this._textModel = textModel;
        this._decorationProvider = decorationProvider;
        this._regions = new FoldingRegions(new Uint32Array(0), new Uint32Array(0));
        this._editorDecorationIds = [];
    }
    toggleCollapseState(toggledRegions) {
        if (!toggledRegions.length) {
            return;
        }
        toggledRegions = toggledRegions.sort((r1, r2) => r1.regionIndex - r2.regionIndex);
        const processed = {};
        this._decorationProvider.changeDecorations(accessor => {
            let k = 0; // index from [0 ... this.regions.length]
            let dirtyRegionEndLine = -1; // end of the range where decorations need to be updated
            let lastHiddenLine = -1; // the end of the last hidden lines
            const updateDecorationsUntil = (index) => {
                while (k < index) {
                    const endLineNumber = this._regions.getEndLineNumber(k);
                    const isCollapsed = this._regions.isCollapsed(k);
                    if (endLineNumber <= dirtyRegionEndLine) {
                        const isManual = this.regions.getSource(k) !== 0 /* FoldSource.provider */;
                        accessor.changeDecorationOptions(this._editorDecorationIds[k], this._decorationProvider.getDecorationOption(isCollapsed, endLineNumber <= lastHiddenLine, isManual));
                    }
                    if (isCollapsed && endLineNumber > lastHiddenLine) {
                        lastHiddenLine = endLineNumber;
                    }
                    k++;
                }
            };
            for (const region of toggledRegions) {
                const index = region.regionIndex;
                const editorDecorationId = this._editorDecorationIds[index];
                if (editorDecorationId && !processed[editorDecorationId]) {
                    processed[editorDecorationId] = true;
                    updateDecorationsUntil(index); // update all decorations up to current index using the old dirtyRegionEndLine
                    const newCollapseState = !this._regions.isCollapsed(index);
                    this._regions.setCollapsed(index, newCollapseState);
                    dirtyRegionEndLine = Math.max(dirtyRegionEndLine, this._regions.getEndLineNumber(index));
                }
            }
            updateDecorationsUntil(this._regions.length);
        });
        this._updateEventEmitter.fire({ model: this, collapseStateChanged: toggledRegions });
    }
    removeManualRanges(ranges) {
        const newFoldingRanges = new Array();
        const intersects = (foldRange) => {
            for (const range of ranges) {
                if (!(range.startLineNumber > foldRange.endLineNumber || foldRange.startLineNumber > range.endLineNumber)) {
                    return true;
                }
            }
            return false;
        };
        for (let i = 0; i < this._regions.length; i++) {
            const foldRange = this._regions.toFoldRange(i);
            if (foldRange.source === 0 /* FoldSource.provider */ || !intersects(foldRange)) {
                newFoldingRanges.push(foldRange);
            }
        }
        this.updatePost(FoldingRegions.fromFoldRanges(newFoldingRanges));
    }
    update(newRegions, selection) {
        const foldedOrManualRanges = this._currentFoldedOrManualRanges(selection);
        const newRanges = FoldingRegions.sanitizeAndMerge(newRegions, foldedOrManualRanges, this._textModel.getLineCount(), selection);
        this.updatePost(FoldingRegions.fromFoldRanges(newRanges));
    }
    updatePost(newRegions) {
        const newEditorDecorations = [];
        let lastHiddenLine = -1;
        for (let index = 0, limit = newRegions.length; index < limit; index++) {
            const startLineNumber = newRegions.getStartLineNumber(index);
            const endLineNumber = newRegions.getEndLineNumber(index);
            const isCollapsed = newRegions.isCollapsed(index);
            const isManual = newRegions.getSource(index) !== 0 /* FoldSource.provider */;
            const decorationRange = {
                startLineNumber: startLineNumber,
                startColumn: this._textModel.getLineMaxColumn(startLineNumber),
                endLineNumber: endLineNumber,
                endColumn: this._textModel.getLineMaxColumn(endLineNumber) + 1
            };
            newEditorDecorations.push({ range: decorationRange, options: this._decorationProvider.getDecorationOption(isCollapsed, endLineNumber <= lastHiddenLine, isManual) });
            if (isCollapsed && endLineNumber > lastHiddenLine) {
                lastHiddenLine = endLineNumber;
            }
        }
        this._decorationProvider.changeDecorations(accessor => this._editorDecorationIds = accessor.deltaDecorations(this._editorDecorationIds, newEditorDecorations));
        this._regions = newRegions;
        this._updateEventEmitter.fire({ model: this });
    }
    _currentFoldedOrManualRanges(selection) {
        const foldedRanges = [];
        for (let i = 0, limit = this._regions.length; i < limit; i++) {
            let isCollapsed = this.regions.isCollapsed(i);
            const source = this.regions.getSource(i);
            if (isCollapsed || source !== 0 /* FoldSource.provider */) {
                const foldRange = this._regions.toFoldRange(i);
                const decRange = this._textModel.getDecorationRange(this._editorDecorationIds[i]);
                if (decRange) {
                    if (isCollapsed && selection?.startsInside(decRange.startLineNumber + 1, decRange.endLineNumber)) {
                        isCollapsed = false; // uncollapse is the range is blocked
                    }
                    foldedRanges.push({
                        startLineNumber: decRange.startLineNumber,
                        endLineNumber: decRange.endLineNumber,
                        type: foldRange.type,
                        isCollapsed,
                        source
                    });
                }
            }
        }
        return foldedRanges;
    }
    /**
     * Collapse state memento, for persistence only
     */
    getMemento() {
        const foldedOrManualRanges = this._currentFoldedOrManualRanges();
        const result = [];
        const maxLineNumber = this._textModel.getLineCount();
        for (let i = 0, limit = foldedOrManualRanges.length; i < limit; i++) {
            const range = foldedOrManualRanges[i];
            if (range.startLineNumber >= range.endLineNumber || range.startLineNumber < 1 || range.endLineNumber > maxLineNumber) {
                continue;
            }
            const checksum = this._getLinesChecksum(range.startLineNumber + 1, range.endLineNumber);
            result.push({
                startLineNumber: range.startLineNumber,
                endLineNumber: range.endLineNumber,
                isCollapsed: range.isCollapsed,
                source: range.source,
                checksum: checksum
            });
        }
        return (result.length > 0) ? result : undefined;
    }
    /**
     * Apply persisted state, for persistence only
     */
    applyMemento(state) {
        if (!Array.isArray(state)) {
            return;
        }
        const rangesToRestore = [];
        const maxLineNumber = this._textModel.getLineCount();
        for (const range of state) {
            if (range.startLineNumber >= range.endLineNumber || range.startLineNumber < 1 || range.endLineNumber > maxLineNumber) {
                continue;
            }
            const checksum = this._getLinesChecksum(range.startLineNumber + 1, range.endLineNumber);
            if (!range.checksum || checksum === range.checksum) {
                rangesToRestore.push({
                    startLineNumber: range.startLineNumber,
                    endLineNumber: range.endLineNumber,
                    type: undefined,
                    isCollapsed: range.isCollapsed ?? true,
                    source: range.source ?? 0 /* FoldSource.provider */
                });
            }
        }
        const newRanges = FoldingRegions.sanitizeAndMerge(this._regions, rangesToRestore, maxLineNumber);
        this.updatePost(FoldingRegions.fromFoldRanges(newRanges));
    }
    _getLinesChecksum(lineNumber1, lineNumber2) {
        const h = hash(this._textModel.getLineContent(lineNumber1)
            + this._textModel.getLineContent(lineNumber2));
        return h % 1000000; // 6 digits is plenty
    }
    dispose() {
        this._decorationProvider.removeDecorations(this._editorDecorationIds);
    }
    getAllRegionsAtLine(lineNumber, filter) {
        const result = [];
        if (this._regions) {
            let index = this._regions.findRange(lineNumber);
            let level = 1;
            while (index >= 0) {
                const current = this._regions.toRegion(index);
                if (!filter || filter(current, level)) {
                    result.push(current);
                }
                level++;
                index = current.parentIndex;
            }
        }
        return result;
    }
    getRegionAtLine(lineNumber) {
        if (this._regions) {
            const index = this._regions.findRange(lineNumber);
            if (index >= 0) {
                return this._regions.toRegion(index);
            }
        }
        return null;
    }
    getRegionsInside(region, filter) {
        const result = [];
        const index = region ? region.regionIndex + 1 : 0;
        const endLineNumber = region ? region.endLineNumber : Number.MAX_VALUE;
        if (filter && filter.length === 2) {
            const levelStack = [];
            for (let i = index, len = this._regions.length; i < len; i++) {
                const current = this._regions.toRegion(i);
                if (this._regions.getStartLineNumber(i) < endLineNumber) {
                    while (levelStack.length > 0 && !current.containedBy(levelStack[levelStack.length - 1])) {
                        levelStack.pop();
                    }
                    levelStack.push(current);
                    if (filter(current, levelStack.length)) {
                        result.push(current);
                    }
                }
                else {
                    break;
                }
            }
        }
        else {
            for (let i = index, len = this._regions.length; i < len; i++) {
                const current = this._regions.toRegion(i);
                if (this._regions.getStartLineNumber(i) < endLineNumber) {
                    if (!filter || filter(current)) {
                        result.push(current);
                    }
                }
                else {
                    break;
                }
            }
        }
        return result;
    }
}
/**
 * Collapse or expand the regions at the given locations
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand, or if not set, all regions in the model.
 */
function toggleCollapseState(foldingModel, levels, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const region = foldingModel.getRegionAtLine(lineNumber);
        if (region) {
            const doCollapse = !region.isCollapsed;
            toToggle.push(region);
            if (levels > 1) {
                const regionsInside = foldingModel.getRegionsInside(region, (r, level) => r.isCollapsed !== doCollapse && level < levels);
                toToggle.push(...regionsInside);
            }
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand the regions at the given locations including all children.
 * @param doCollapse Whether to collapse or expand
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand, or if not set, all regions in the model.
 */
function setCollapseStateLevelsDown(foldingModel, doCollapse, levels = Number.MAX_VALUE, lineNumbers) {
    const toToggle = [];
    if (lineNumbers && lineNumbers.length > 0) {
        for (const lineNumber of lineNumbers) {
            const region = foldingModel.getRegionAtLine(lineNumber);
            if (region) {
                if (region.isCollapsed !== doCollapse) {
                    toToggle.push(region);
                }
                if (levels > 1) {
                    const regionsInside = foldingModel.getRegionsInside(region, (r, level) => r.isCollapsed !== doCollapse && level < levels);
                    toToggle.push(...regionsInside);
                }
            }
        }
    }
    else {
        const regionsInside = foldingModel.getRegionsInside(null, (r, level) => r.isCollapsed !== doCollapse && level < levels);
        toToggle.push(...regionsInside);
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand the regions at the given locations including all parents.
 * @param doCollapse Whether to collapse or expand
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand.
 */
function setCollapseStateLevelsUp(foldingModel, doCollapse, levels, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, (region, level) => region.isCollapsed !== doCollapse && level <= levels);
        toToggle.push(...regions);
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand a region at the given locations. If the inner most region is already collapsed/expanded, uses the first parent instead.
 * @param doCollapse Whether to collapse or expand
 * @param lineNumbers the location of the regions to collapse or expand.
 */
function setCollapseStateUp(foldingModel, doCollapse, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, (region) => region.isCollapsed !== doCollapse);
        if (regions.length > 0) {
            toToggle.push(regions[0]);
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds or unfolds all regions that have a given level, except if they contain one of the blocked lines.
 * @param foldLevel level. Level == 1 is the top level
 * @param doCollapse Whether to collapse or expand
*/
function setCollapseStateAtLevel(foldingModel, foldLevel, doCollapse, blockedLineNumbers) {
    const filter = (region, level) => level === foldLevel && region.isCollapsed !== doCollapse && !blockedLineNumbers.some(line => region.containsLine(line));
    const toToggle = foldingModel.getRegionsInside(null, filter);
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds or unfolds all regions, except if they contain or are contained by a region of one of the blocked lines.
 * @param doCollapse Whether to collapse or expand
 * @param blockedLineNumbers the location of regions to not collapse or expand
 */
function setCollapseStateForRest(foldingModel, doCollapse, blockedLineNumbers) {
    const filteredRegions = [];
    for (const lineNumber of blockedLineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, undefined);
        if (regions.length > 0) {
            filteredRegions.push(regions[0]);
        }
    }
    const filter = (region) => filteredRegions.every((filteredRegion) => !filteredRegion.containedBy(region) && !region.containedBy(filteredRegion)) && region.isCollapsed !== doCollapse;
    const toToggle = foldingModel.getRegionsInside(null, filter);
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds all regions for which the lines start with a given regex
 * @param foldingModel the folding model
 */
function setCollapseStateForMatchingLines(foldingModel, regExp, doCollapse) {
    const editorModel = foldingModel.textModel;
    const regions = foldingModel.regions;
    const toToggle = [];
    for (let i = regions.length - 1; i >= 0; i--) {
        if (doCollapse !== regions.isCollapsed(i)) {
            const startLineNumber = regions.getStartLineNumber(i);
            if (regExp.test(editorModel.getLineContent(startLineNumber))) {
                toToggle.push(regions.toRegion(i));
            }
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds all regions of the given type
 * @param foldingModel the folding model
 */
function setCollapseStateForType(foldingModel, type, doCollapse) {
    const regions = foldingModel.regions;
    const toToggle = [];
    for (let i = regions.length - 1; i >= 0; i--) {
        if (doCollapse !== regions.isCollapsed(i) && type === regions.getType(i)) {
            toToggle.push(regions.toRegion(i));
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Get line to go to for parent fold of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Parent fold start line
 */
function getParentFoldLine(lineNumber, foldingModel) {
    let startLineNumber = null;
    const foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    if (foldingRegion !== null) {
        startLineNumber = foldingRegion.startLineNumber;
        // If current line is not the start of the current fold, go to top line of current fold. If not, go to parent fold
        if (lineNumber === startLineNumber) {
            const parentFoldingIdx = foldingRegion.parentIndex;
            if (parentFoldingIdx !== -1) {
                startLineNumber = foldingModel.regions.getStartLineNumber(parentFoldingIdx);
            }
            else {
                startLineNumber = null;
            }
        }
    }
    return startLineNumber;
}
/**
 * Get line to go to for previous fold at the same level of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Previous fold start line
 */
function getPreviousFoldLine(lineNumber, foldingModel) {
    let foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    // If on the folding range start line, go to previous sibling.
    if (foldingRegion !== null && foldingRegion.startLineNumber === lineNumber) {
        // If current line is not the start of the current fold, go to top line of current fold. If not, go to previous fold.
        if (lineNumber !== foldingRegion.startLineNumber) {
            return foldingRegion.startLineNumber;
        }
        else {
            // Find min line number to stay within parent.
            const expectedParentIndex = foldingRegion.parentIndex;
            let minLineNumber = 0;
            if (expectedParentIndex !== -1) {
                minLineNumber = foldingModel.regions.getStartLineNumber(foldingRegion.parentIndex);
            }
            // Find fold at same level.
            while (foldingRegion !== null) {
                if (foldingRegion.regionIndex > 0) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex - 1);
                    // Keep at same level.
                    if (foldingRegion.startLineNumber <= minLineNumber) {
                        return null;
                    }
                    else if (foldingRegion.parentIndex === expectedParentIndex) {
                        return foldingRegion.startLineNumber;
                    }
                }
                else {
                    return null;
                }
            }
        }
    }
    else {
        // Go to last fold that's before the current line.
        if (foldingModel.regions.length > 0) {
            foldingRegion = foldingModel.regions.toRegion(foldingModel.regions.length - 1);
            while (foldingRegion !== null) {
                // Found fold before current line.
                if (foldingRegion.startLineNumber < lineNumber) {
                    return foldingRegion.startLineNumber;
                }
                if (foldingRegion.regionIndex > 0) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex - 1);
                }
                else {
                    foldingRegion = null;
                }
            }
        }
    }
    return null;
}
/**
 * Get line to go to next fold at the same level of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Next fold start line
 */
function getNextFoldLine(lineNumber, foldingModel) {
    let foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    // If on the folding range start line, go to next sibling.
    if (foldingRegion !== null && foldingRegion.startLineNumber === lineNumber) {
        // Find max line number to stay within parent.
        const expectedParentIndex = foldingRegion.parentIndex;
        let maxLineNumber = 0;
        if (expectedParentIndex !== -1) {
            maxLineNumber = foldingModel.regions.getEndLineNumber(foldingRegion.parentIndex);
        }
        else if (foldingModel.regions.length === 0) {
            return null;
        }
        else {
            maxLineNumber = foldingModel.regions.getEndLineNumber(foldingModel.regions.length - 1);
        }
        // Find fold at same level.
        while (foldingRegion !== null) {
            if (foldingRegion.regionIndex < foldingModel.regions.length) {
                foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex + 1);
                // Keep at same level.
                if (foldingRegion.startLineNumber >= maxLineNumber) {
                    return null;
                }
                else if (foldingRegion.parentIndex === expectedParentIndex) {
                    return foldingRegion.startLineNumber;
                }
            }
            else {
                return null;
            }
        }
    }
    else {
        // Go to first fold that's after the current line.
        if (foldingModel.regions.length > 0) {
            foldingRegion = foldingModel.regions.toRegion(0);
            while (foldingRegion !== null) {
                // Found fold after current line.
                if (foldingRegion.startLineNumber > lineNumber) {
                    return foldingRegion.startLineNumber;
                }
                if (foldingRegion.regionIndex < foldingModel.regions.length) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex + 1);
                }
                else {
                    foldingRegion = null;
                }
            }
        }
    }
    return null;
}

export { FoldingModel, getNextFoldLine, getParentFoldLine, getPreviousFoldLine, setCollapseStateAtLevel, setCollapseStateForMatchingLines, setCollapseStateForRest, setCollapseStateForType, setCollapseStateLevelsDown, setCollapseStateLevelsUp, setCollapseStateUp, toggleCollapseState };
