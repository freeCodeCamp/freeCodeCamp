import { addDisposableListener } from '../../../../../../base/browser/dom.js';
import { DisposableStore } from '../../../../../../base/common/lifecycle.js';
import { Range } from '../../../../../common/core/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function enableCopySelection(options) {
    const { domNode, renderLinesResult, diffEntry, originalModel, clipboardService } = options;
    const viewZoneDisposable = new DisposableStore();
    viewZoneDisposable.add(addDisposableListener(domNode, 'copy', (e) => {
        e.preventDefault();
        const selection = domNode.ownerDocument.getSelection();
        if (!selection || selection.rangeCount === 0) {
            return;
        }
        const domRange = selection.getRangeAt(0);
        if (!domRange || domRange.collapsed) {
            return;
        }
        const startElement = domRange.startContainer.nodeType === Node.TEXT_NODE
            ? domRange.startContainer.parentElement
            : domRange.startContainer;
        const endElement = domRange.endContainer.nodeType === Node.TEXT_NODE
            ? domRange.endContainer.parentElement
            : domRange.endContainer;
        if (!startElement || !endElement) {
            return;
        }
        const startPosition = renderLinesResult.getModelPositionAt(startElement, domRange.startOffset);
        const endPosition = renderLinesResult.getModelPositionAt(endElement, domRange.endOffset);
        if (!startPosition || !endPosition) {
            return;
        }
        const adjustedStart = startPosition.delta(diffEntry.original.startLineNumber - 1);
        const adjustedEnd = endPosition.delta(diffEntry.original.startLineNumber - 1);
        const range = adjustedEnd.isBefore(adjustedStart) ?
            Range.fromPositions(adjustedEnd, adjustedStart) :
            Range.fromPositions(adjustedStart, adjustedEnd);
        const selectedText = originalModel.getValueInRange(range);
        clipboardService.writeText(selectedText);
    }));
    return viewZoneDisposable;
}

export { enableCopySelection };
