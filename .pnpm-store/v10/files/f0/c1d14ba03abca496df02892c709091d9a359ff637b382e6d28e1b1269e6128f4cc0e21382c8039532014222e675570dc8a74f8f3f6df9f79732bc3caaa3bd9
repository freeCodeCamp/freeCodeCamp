import { numberComparator } from '../../../../../../../base/common/arrays.js';
import { findFirstMin } from '../../../../../../../base/common/arraysFind.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { splitLines } from '../../../../../../../base/common/strings.js';
import { observableCodeEditor } from '../../../../../../browser/observableCodeEditor.js';
import { Rect } from '../../../../../../common/core/2d/rect.js';
import { OffsetRange } from '../../../../../../common/core/ranges/offsetRange.js';
import { Position } from '../../../../../../common/core/position.js';
import { Range } from '../../../../../../common/core/range.js';
import { TextReplacement, TextEdit } from '../../../../../../common/core/edits/textEdit.js';
import { RangeMapping } from '../../../../../../common/diff/rangeMapping.js';
import { indentOfLine } from '../../../../../../common/model/textModel.js';
import { BugIndicatingError } from '../../../../../../../base/common/errors.js';
import { DebugLocation } from '../../../../../../../base/common/observableInternal/debugLocation.js';
import { derivedObservableWithCache } from '../../../../../../../base/common/observableInternal/utils/utils.js';
import { derivedOpts, derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';

function maxContentWidthInRange(editor, range, reader) {
    editor.layoutInfo.read(reader);
    editor.value.read(reader);
    const model = editor.model.read(reader);
    if (!model) {
        return 0;
    }
    let maxContentWidth = 0;
    editor.scrollTop.read(reader);
    for (let i = range.startLineNumber; i < range.endLineNumberExclusive; i++) {
        const column = model.getLineMaxColumn(i);
        let lineContentWidth = editor.editor.getOffsetForColumn(i, column);
        if (lineContentWidth === -1) {
            // approximation
            const typicalHalfwidthCharacterWidth = editor.editor.getOption(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
            const approximation = column * typicalHalfwidthCharacterWidth;
            lineContentWidth = approximation;
        }
        maxContentWidth = Math.max(maxContentWidth, lineContentWidth);
    }
    const lines = range.mapToLineArray(l => model.getLineContent(l));
    if (maxContentWidth < 5 && lines.some(l => l.length > 0) && model.uri.scheme !== 'file') {
        console.error('unexpected width');
    }
    return maxContentWidth;
}
function getOffsetForPos(editor, pos, reader) {
    editor.layoutInfo.read(reader);
    editor.value.read(reader);
    const model = editor.model.read(reader);
    if (!model) {
        return 0;
    }
    editor.scrollTop.read(reader);
    const lineContentWidth = editor.editor.getOffsetForColumn(pos.lineNumber, pos.column);
    return lineContentWidth;
}
function getPrefixTrim(diffRanges, originalLinesRange, modifiedLines, editor, reader = undefined) {
    const textModel = editor.getModel();
    if (!textModel) {
        return { prefixTrim: 0, prefixLeftOffset: 0 };
    }
    const replacementStart = diffRanges.map(r => r.isSingleLine() ? r.startColumn - 1 : 0);
    const originalIndents = originalLinesRange.mapToLineArray(line => indentOfLine(textModel.getLineContent(line)));
    const modifiedIndents = modifiedLines.filter(line => line !== '').map(line => indentOfLine(line));
    const prefixTrim = Math.min(...replacementStart, ...originalIndents, ...modifiedIndents);
    let prefixLeftOffset;
    const startLineIndent = textModel.getLineIndentColumn(originalLinesRange.startLineNumber);
    if (startLineIndent >= prefixTrim + 1) {
        // We can use the editor to get the offset
        // TODO go through other usages of getOffsetForColumn and come up with a robust reactive solution to read it
        observableCodeEditor(editor).scrollTop.read(reader); // getOffsetForColumn requires the line number to be visible. This might change on scroll top.
        prefixLeftOffset = editor.getOffsetForColumn(originalLinesRange.startLineNumber, prefixTrim + 1);
    }
    else if (modifiedLines.length > 0) {
        // Content is not in the editor, we can use the content width to calculate the offset
        prefixLeftOffset = getContentRenderWidth(modifiedLines[0].slice(0, prefixTrim), editor, textModel);
    }
    else {
        // unable to approximate the offset
        return { prefixTrim: 0, prefixLeftOffset: 0 };
    }
    return { prefixTrim, prefixLeftOffset };
}
function getContentRenderWidth(content, editor, textModel) {
    const w = editor.getOption(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
    const tabSize = textModel.getOptions().tabSize * w;
    const numTabs = content.split('\t').length - 1;
    const numNoneTabs = content.length - numTabs;
    return numNoneTabs * w + numTabs * tabSize;
}
function getEditorValidOverlayRect(editor) {
    const contentLeft = editor.layoutInfoContentLeft;
    const width = derived({ name: 'editor.validOverlay.width' }, r => {
        const hasMinimapOnTheRight = editor.layoutInfoMinimap.read(r).minimapLeft !== 0;
        const editorWidth = editor.layoutInfoWidth.read(r) - contentLeft.read(r);
        if (hasMinimapOnTheRight) {
            const minimapAndScrollbarWidth = editor.layoutInfoMinimap.read(r).minimapWidth + editor.layoutInfoVerticalScrollbarWidth.read(r);
            return editorWidth - minimapAndScrollbarWidth;
        }
        return editorWidth;
    });
    const height = derived({ name: 'editor.validOverlay.height' }, r => editor.layoutInfoHeight.read(r) + editor.contentHeight.read(r));
    return derived({ name: 'editor.validOverlay' }, r => Rect.fromLeftTopWidthHeight(contentLeft.read(r), 0, width.read(r), height.read(r)));
}
function applyEditToModifiedRangeMappings(rangeMapping, edit) {
    const updatedMappings = [];
    for (const m of rangeMapping) {
        const updatedRange = edit.mapRange(m.modifiedRange);
        updatedMappings.push(new RangeMapping(m.originalRange, updatedRange));
    }
    return updatedMappings;
}
function classNames(...classes) {
    return classes.filter(c => typeof c === 'string').join(' ');
}
function offsetRangeToRange(columnOffsetRange, startPos) {
    return new Range(startPos.lineNumber, startPos.column + columnOffsetRange.start, startPos.lineNumber, startPos.column + columnOffsetRange.endExclusive);
}
/**
 * Calculates the indentation size (in spaces) of a given line,
 * interpreting tabs as the specified tab size.
 */
function getIndentationSize(line, tabSize) {
    let currentSize = 0;
    loop: for (let i = 0, len = line.length; i < len; i++) {
        switch (line.charCodeAt(i)) {
            case 9 /* CharCode.Tab */:
                currentSize += tabSize;
                break;
            case 32 /* CharCode.Space */:
                currentSize++;
                break;
            default: break loop;
        }
    }
    // if currentSize % tabSize !== 0,
    // then there are spaces which are not part of the indentation
    return currentSize - (currentSize % tabSize);
}
/**
 * Calculates the number of characters at the start of a line that correspond to a given indentation size,
 * taking into account both tabs and spaces.
 */
function indentSizeToIndentLength(line, indentSize, tabSize) {
    let remainingSize = indentSize - (indentSize % tabSize);
    let i = 0;
    for (; i < line.length; i++) {
        if (remainingSize === 0) {
            break;
        }
        switch (line.charCodeAt(i)) {
            case 9 /* CharCode.Tab */:
                remainingSize -= tabSize;
                break;
            case 32 /* CharCode.Space */:
                remainingSize--;
                break;
            default: throw new BugIndicatingError('Unexpected character found while calculating indent length');
        }
    }
    return i;
}
function createReindentEdit(text, range, tabSize) {
    const newLines = splitLines(text);
    const edits = [];
    const minIndentSize = findFirstMin(range.mapToLineArray(l => getIndentationSize(newLines[l - 1], tabSize)), numberComparator);
    range.forEach(lineNumber => {
        const indentLength = indentSizeToIndentLength(newLines[lineNumber - 1], minIndentSize, tabSize);
        edits.push(new TextReplacement(offsetRangeToRange(new OffsetRange(0, indentLength), new Position(lineNumber, 1)), ''));
    });
    return new TextEdit(edits);
}
class PathBuilder {
    constructor() {
        this._data = '';
    }
    moveTo(point) {
        this._data += `M ${point.x} ${point.y} `;
        return this;
    }
    lineTo(point) {
        this._data += `L ${point.x} ${point.y} `;
        return this;
    }
    build() {
        return this._data;
    }
}
function mapOutFalsy(obs) {
    const nonUndefinedObs = derivedObservableWithCache(undefined, (reader, lastValue) => obs.read(reader) || lastValue);
    return derivedOpts({
        debugName: () => `${obs.debugName}.mapOutFalsy`
    }, reader => {
        nonUndefinedObs.read(reader);
        const val = obs.read(reader);
        if (!val) {
            return undefined;
        }
        return nonUndefinedObs;
    });
}
function rectToProps(fn, debugLocation = DebugLocation.ofCaller()) {
    return {
        left: derived({ name: 'editor.validOverlay.left' }, reader => /** @description left */ fn(reader).left, debugLocation),
        top: derived({ name: 'editor.validOverlay.top' }, reader => /** @description top */ fn(reader).top, debugLocation),
        width: derived({ name: 'editor.validOverlay.width' }, reader => /** @description width */ fn(reader).right - fn(reader).left, debugLocation),
        height: derived({ name: 'editor.validOverlay.height' }, reader => /** @description height */ fn(reader).bottom - fn(reader).top, debugLocation),
    };
}

export { PathBuilder, applyEditToModifiedRangeMappings, classNames, createReindentEdit, getContentRenderWidth, getEditorValidOverlayRect, getOffsetForPos, getPrefixTrim, mapOutFalsy, maxContentWidthInRange, rectToProps };
