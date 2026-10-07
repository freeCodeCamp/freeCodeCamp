import { TaskQueue } from '../../../../../base/common/async.js';
import { Disposable, toDisposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { setTimeout0 } from '../../../../../base/common/platform.js';
import { ILogService } from '../../../../../platform/log/common/log.js';
import { ITelemetryService } from '../../../../../platform/telemetry/common/telemetry.js';
import { TextLength } from '../../../core/text/textLength.js';
import { gotoParent, getClosestPreviousNodes, nextSiblingOrParentSibling, gotoNthChild } from './cursorUtils.js';
import { Range } from '../../../core/range.js';
import { transaction } from '../../../../../base/common/observableInternal/transaction.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let TreeSitterTree = class TreeSitterTree extends Disposable {
    constructor(languageId, _ranges, 
    // readonly treeSitterLanguage: Language,
    /** Must have the language set! */
    _parser, _parserClass, 
    // private readonly _injectionQuery: TreeSitter.Query,
    textModel, _logService, _telemetryService) {
        super();
        this.languageId = languageId;
        this._ranges = _ranges;
        this._parser = _parser;
        this._parserClass = _parserClass;
        this.textModel = textModel;
        this._logService = _logService;
        this._telemetryService = _telemetryService;
        this._tree = observableValue(this, undefined);
        this.tree = this._tree;
        this._treeLastParsedVersion = observableValue(this, -1);
        this.treeLastParsedVersion = this._treeLastParsedVersion;
        this._onDidChangeContentQueue = new TaskQueue();
        this._tree = observableValue(this, undefined);
        this.tree = this._tree;
        this._register(toDisposable(() => {
            this._tree.get()?.delete();
            this._lastFullyParsed?.delete();
            this._lastFullyParsedWithEdits?.delete();
            this._parser.delete();
        }));
        this.handleContentChange(undefined, this._ranges);
    }
    handleContentChange(e, ranges) {
        const version = this.textModel.getVersionId();
        let newRanges = [];
        if (ranges) {
            newRanges = this._setRanges(ranges);
        }
        if (e) {
            this._applyEdits(e.changes);
        }
        this._onDidChangeContentQueue.clearPending();
        this._onDidChangeContentQueue.schedule(async () => {
            if (this._store.isDisposed) {
                // No need to continue the queue if we are disposed
                return;
            }
            const oldTree = this._lastFullyParsed;
            let changedNodes;
            if (this._lastFullyParsedWithEdits && this._lastFullyParsed) {
                changedNodes = this._findChangedNodes(this._lastFullyParsedWithEdits, this._lastFullyParsed);
            }
            const completed = await this._parseAndUpdateTree(version);
            if (completed) {
                let ranges;
                if (!changedNodes) {
                    if (this._ranges) {
                        ranges = this._ranges.map(r => ({ newRange: new Range(r.startPosition.row + 1, r.startPosition.column + 1, r.endPosition.row + 1, r.endPosition.column + 1), oldRangeLength: r.endIndex - r.startIndex, newRangeStartOffset: r.startIndex, newRangeEndOffset: r.endIndex }));
                    }
                }
                else if (oldTree && changedNodes) {
                    ranges = this._findTreeChanges(completed, changedNodes, newRanges);
                }
                if (!ranges) {
                    ranges = [{ newRange: this.textModel.getFullModelRange(), newRangeStartOffset: 0, newRangeEndOffset: this.textModel.getValueLength() }];
                }
                const previousTree = this._tree.get();
                transaction(tx => {
                    this._tree.set(completed, tx, { ranges, versionId: version });
                    this._treeLastParsedVersion.set(version, tx);
                });
                previousTree?.delete();
            }
        });
    }
    _applyEdits(changes) {
        for (const change of changes) {
            const originalTextLength = TextLength.ofRange(Range.lift(change.range));
            const newTextLength = TextLength.ofText(change.text);
            const summedTextLengths = change.text.length === 0 ? newTextLength : originalTextLength.add(newTextLength);
            const edit = {
                startIndex: change.rangeOffset,
                oldEndIndex: change.rangeOffset + change.rangeLength,
                newEndIndex: change.rangeOffset + change.text.length,
                startPosition: { row: change.range.startLineNumber - 1, column: change.range.startColumn - 1 },
                oldEndPosition: { row: change.range.endLineNumber - 1, column: change.range.endColumn - 1 },
                newEndPosition: { row: change.range.startLineNumber + summedTextLengths.lineCount - 1, column: summedTextLengths.lineCount ? summedTextLengths.columnCount : (change.range.endColumn + summedTextLengths.columnCount) }
            };
            this._tree.get()?.edit(edit);
            this._lastFullyParsedWithEdits?.edit(edit);
        }
    }
    _findChangedNodes(newTree, oldTree) {
        if ((this._ranges && this._ranges.every(range => range.startPosition.row !== newTree.rootNode.startPosition.row)) || newTree.rootNode.startPosition.row !== 0) {
            return [];
        }
        const newCursor = newTree.walk();
        const oldCursor = oldTree.walk();
        const nodes = [];
        let next = true;
        do {
            if (newCursor.currentNode.hasChanges) {
                // Check if only one of the children has changes.
                // If it's only one, then we go to that child.
                // If it's more then, we need to go to each child
                // If it's none, then we've found one of our ranges
                const newChildren = newCursor.currentNode.children;
                const indexChangedChildren = [];
                const changedChildren = newChildren.filter((c, index) => {
                    if (c?.hasChanges || (oldCursor.currentNode.children.length <= index)) {
                        indexChangedChildren.push(index);
                        return true;
                    }
                    return false;
                });
                // If we have changes and we *had* an error, the whole node should be refreshed.
                if ((changedChildren.length === 0) || (newCursor.currentNode.hasError !== oldCursor.currentNode.hasError)) {
                    // walk up again until we get to the first one that's named as unnamed nodes can be too granular
                    while (newCursor.currentNode.parent && next && !newCursor.currentNode.isNamed) {
                        next = gotoParent(newCursor, oldCursor);
                    }
                    // Use the end position of the previous node and the start position of the current node
                    const newNode = newCursor.currentNode;
                    const closestPreviousNode = getClosestPreviousNodes(newCursor, newTree) ?? newNode;
                    nodes.push({
                        startIndex: closestPreviousNode.startIndex,
                        endIndex: newNode.endIndex,
                        startPosition: closestPreviousNode.startPosition,
                        endPosition: newNode.endPosition
                    });
                    next = nextSiblingOrParentSibling(newCursor, oldCursor);
                }
                else if (changedChildren.length >= 1) {
                    next = gotoNthChild(newCursor, oldCursor, indexChangedChildren[0]);
                }
            }
            else {
                next = nextSiblingOrParentSibling(newCursor, oldCursor);
            }
        } while (next);
        newCursor.delete();
        oldCursor.delete();
        return nodes;
    }
    _findTreeChanges(newTree, changedNodes, newRanges) {
        let newRangeIndex = 0;
        const mergedChanges = [];
        // Find the parent in the new tree of the changed node
        for (let nodeIndex = 0; nodeIndex < changedNodes.length; nodeIndex++) {
            const node = changedNodes[nodeIndex];
            if (mergedChanges.length > 0) {
                if ((node.startIndex >= mergedChanges[mergedChanges.length - 1].newRangeStartOffset) && (node.endIndex <= mergedChanges[mergedChanges.length - 1].newRangeEndOffset)) {
                    // This node is within the previous range, skip it
                    continue;
                }
            }
            const cursor = newTree.walk();
            const cursorContainersNode = () => cursor.startIndex < node.startIndex && cursor.endIndex > node.endIndex;
            while (cursorContainersNode()) {
                // See if we can go to a child
                let child = cursor.gotoFirstChild();
                let foundChild = false;
                while (child) {
                    if (cursorContainersNode() && cursor.currentNode.isNamed) {
                        foundChild = true;
                        break;
                    }
                    else {
                        child = cursor.gotoNextSibling();
                    }
                }
                if (!foundChild) {
                    cursor.gotoParent();
                    break;
                }
                if (cursor.currentNode.childCount === 0) {
                    break;
                }
            }
            const startPosition = cursor.currentNode.startPosition;
            const endPosition = cursor.currentNode.endPosition;
            const startIndex = cursor.currentNode.startIndex;
            const endIndex = cursor.currentNode.endIndex;
            const newChange = { newRange: new Range(startPosition.row + 1, startPosition.column + 1, endPosition.row + 1, endPosition.column + 1), newRangeStartOffset: startIndex, newRangeEndOffset: endIndex };
            if ((newRangeIndex < newRanges.length) && rangesIntersect(newRanges[newRangeIndex], { startIndex, endIndex})) {
                // combine the new change with the range
                if (newRanges[newRangeIndex].startIndex < newChange.newRangeStartOffset) {
                    newChange.newRange = newChange.newRange.setStartPosition(newRanges[newRangeIndex].startPosition.row + 1, newRanges[newRangeIndex].startPosition.column + 1);
                    newChange.newRangeStartOffset = newRanges[newRangeIndex].startIndex;
                }
                if (newRanges[newRangeIndex].endIndex > newChange.newRangeEndOffset) {
                    newChange.newRange = newChange.newRange.setEndPosition(newRanges[newRangeIndex].endPosition.row + 1, newRanges[newRangeIndex].endPosition.column + 1);
                    newChange.newRangeEndOffset = newRanges[newRangeIndex].endIndex;
                }
                newRangeIndex++;
            }
            else if (newRangeIndex < newRanges.length && newRanges[newRangeIndex].endIndex < newChange.newRangeStartOffset) {
                // add the full range to the merged changes
                mergedChanges.push({
                    newRange: new Range(newRanges[newRangeIndex].startPosition.row + 1, newRanges[newRangeIndex].startPosition.column + 1, newRanges[newRangeIndex].endPosition.row + 1, newRanges[newRangeIndex].endPosition.column + 1),
                    newRangeStartOffset: newRanges[newRangeIndex].startIndex,
                    newRangeEndOffset: newRanges[newRangeIndex].endIndex
                });
            }
            if ((mergedChanges.length > 0) && (mergedChanges[mergedChanges.length - 1].newRangeEndOffset >= newChange.newRangeStartOffset)) {
                // Merge the changes
                mergedChanges[mergedChanges.length - 1].newRange = Range.fromPositions(mergedChanges[mergedChanges.length - 1].newRange.getStartPosition(), newChange.newRange.getEndPosition());
                mergedChanges[mergedChanges.length - 1].newRangeEndOffset = newChange.newRangeEndOffset;
            }
            else {
                mergedChanges.push(newChange);
            }
        }
        return this._constrainRanges(mergedChanges);
    }
    _constrainRanges(changes) {
        if (!this._ranges) {
            return changes;
        }
        const constrainedChanges = [];
        let changesIndex = 0;
        let rangesIndex = 0;
        while (changesIndex < changes.length && rangesIndex < this._ranges.length) {
            const change = changes[changesIndex];
            const range = this._ranges[rangesIndex];
            if (change.newRangeEndOffset < range.startIndex) {
                // Change is before the range, move to the next change
                changesIndex++;
            }
            else if (change.newRangeStartOffset > range.endIndex) {
                // Change is after the range, move to the next range
                rangesIndex++;
            }
            else {
                // Change is within the range, constrain it
                const newRangeStartOffset = Math.max(change.newRangeStartOffset, range.startIndex);
                const newRangeEndOffset = Math.min(change.newRangeEndOffset, range.endIndex);
                const newRange = change.newRange.intersectRanges(new Range(range.startPosition.row + 1, range.startPosition.column + 1, range.endPosition.row + 1, range.endPosition.column + 1));
                constrainedChanges.push({
                    newRange,
                    newRangeEndOffset,
                    newRangeStartOffset
                });
                // Remove the intersected range from the current change
                if (newRangeEndOffset < change.newRangeEndOffset) {
                    change.newRange = Range.fromPositions(newRange.getEndPosition(), change.newRange.getEndPosition());
                    change.newRangeStartOffset = newRangeEndOffset + 1;
                }
                else {
                    // Move to the next change
                    changesIndex++;
                }
            }
        }
        return constrainedChanges;
    }
    async _parseAndUpdateTree(version) {
        const tree = await this._parse();
        if (tree) {
            this._lastFullyParsed?.delete();
            this._lastFullyParsed = tree.copy();
            this._lastFullyParsedWithEdits?.delete();
            this._lastFullyParsedWithEdits = tree.copy();
            return tree;
        }
        else if (!this._tree.get()) {
            // No tree means this is the initial parse and there were edits
            // parse function doesn't handle this well and we can end up with an incorrect tree, so we reset
            this._parser.reset();
        }
        return undefined;
    }
    _parse() {
        let parseType = "fullParse" /* TelemetryParseType.Full */;
        if (this._tree.get()) {
            parseType = "incrementalParse" /* TelemetryParseType.Incremental */;
        }
        return this._parseAndYield(parseType);
    }
    async _parseAndYield(parseType) {
        let time = 0;
        let passes = 0;
        const inProgressVersion = this.textModel.getVersionId();
        let newTree;
        const progressCallback = newTimeOutProgressCallback();
        do {
            const timer = performance.now();
            newTree = this._parser.parse((index, position) => this._parseCallback(index), this._tree.get(), { progressCallback, includedRanges: this._ranges });
            time += performance.now() - timer;
            passes++;
            // So long as this isn't the initial parse, even if the model changes and edits are applied, the tree parsing will continue correctly after the await.
            await new Promise(resolve => setTimeout0(resolve));
        } while (!this._store.isDisposed && !newTree && inProgressVersion === this.textModel.getVersionId());
        this._sendParseTimeTelemetry(parseType, time, passes);
        return (newTree && (inProgressVersion === this.textModel.getVersionId())) ? newTree : undefined;
    }
    _parseCallback(index) {
        try {
            return this.textModel.getTextBuffer().getNearestChunk(index);
        }
        catch (e) {
            this._logService.debug('Error getting chunk for tree-sitter parsing', e);
        }
        return undefined;
    }
    _setRanges(newRanges) {
        const unKnownRanges = [];
        // If we have existing ranges, find the parts of the new ranges that are not included in the existing ones
        if (this._ranges) {
            for (const newRange of newRanges) {
                let isFullyIncluded = false;
                for (let i = 0; i < this._ranges.length; i++) {
                    const existingRange = this._ranges[i];
                    if (rangesEqual(existingRange, newRange) || rangesIntersect(existingRange, newRange)) {
                        isFullyIncluded = true;
                        break;
                    }
                }
                if (!isFullyIncluded) {
                    unKnownRanges.push(newRange);
                }
            }
        }
        else {
            // No existing ranges, all new ranges are unknown
            unKnownRanges.push(...newRanges);
        }
        this._ranges = newRanges;
        return unKnownRanges;
    }
    _sendParseTimeTelemetry(parseType, time, passes) {
        this._logService.debug(`Tree parsing (${parseType}) took ${time} ms and ${passes} passes.`);
        if (parseType === "fullParse" /* TelemetryParseType.Full */) {
            this._telemetryService.publicLog2(`treeSitter.fullParse`, { languageId: this.languageId, time, passes });
        }
        else {
            this._telemetryService.publicLog2(`treeSitter.incrementalParse`, { languageId: this.languageId, time, passes });
        }
    }
    createParsedTreeSync(src) {
        const parser = new this._parserClass();
        parser.setLanguage(this._parser.language);
        const tree = parser.parse(src);
        parser.delete();
        return tree ?? undefined;
    }
};
TreeSitterTree = __decorate([
    __param(5, ILogService),
    __param(6, ITelemetryService)
], TreeSitterTree);
function newTimeOutProgressCallback() {
    let lastYieldTime = performance.now();
    return function parseProgressCallback(_state) {
        const now = performance.now();
        if (now - lastYieldTime > 50) {
            lastYieldTime = now;
            return true;
        }
        return false;
    };
}
function rangesEqual(a, b) {
    return (a.startPosition.row === b.startPosition.row)
        && (a.startPosition.column === b.startPosition.column)
        && (a.endPosition.row === b.endPosition.row)
        && (a.endPosition.column === b.endPosition.column)
        && (a.startIndex === b.startIndex)
        && (a.endIndex === b.endIndex);
}
function rangesIntersect(a, b) {
    return (a.startIndex <= b.startIndex && a.endIndex >= b.startIndex) ||
        (b.startIndex <= a.startIndex && b.endIndex >= a.startIndex);
}

export { TreeSitterTree, rangesEqual, rangesIntersect };
