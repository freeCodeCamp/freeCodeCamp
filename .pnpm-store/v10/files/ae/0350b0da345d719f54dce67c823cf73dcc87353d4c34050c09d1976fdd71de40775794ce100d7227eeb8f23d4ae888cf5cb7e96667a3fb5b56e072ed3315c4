import { FloatHorizontalRange } from '../../view/renderingContext.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class RangeUtil {
    static _createRange() {
        if (!this._handyReadyRange) {
            this._handyReadyRange = document.createRange();
        }
        return this._handyReadyRange;
    }
    static _detachRange(range, endNode) {
        // Move range out of the span node, IE doesn't like having many ranges in
        // the same spot and will act badly for lines containing dashes ('-')
        range.selectNodeContents(endNode);
    }
    static _readClientRects(startElement, startOffset, endElement, endOffset, endNode) {
        const range = this._createRange();
        try {
            range.setStart(startElement, startOffset);
            range.setEnd(endElement, endOffset);
            return range.getClientRects();
        }
        catch (e) {
            // This is life ...
            return null;
        }
        finally {
            this._detachRange(range, endNode);
        }
    }
    static _mergeAdjacentRanges(ranges) {
        if (ranges.length === 1) {
            // There is nothing to merge
            return ranges;
        }
        ranges.sort(FloatHorizontalRange.compare);
        const result = [];
        let resultLen = 0;
        let prev = ranges[0];
        for (let i = 1, len = ranges.length; i < len; i++) {
            const range = ranges[i];
            if (prev.left + prev.width + 0.9 /* account for browser's rounding errors*/ >= range.left) {
                prev.width = Math.max(prev.width, range.left + range.width - prev.left);
            }
            else {
                result[resultLen++] = prev;
                prev = range;
            }
        }
        result[resultLen++] = prev;
        return result;
    }
    static _createHorizontalRangesFromClientRects(clientRects, clientRectDeltaLeft, clientRectScale) {
        if (!clientRects || clientRects.length === 0) {
            return null;
        }
        // We go through FloatHorizontalRange because it has been observed in bi-di text
        // that the clientRects are not coming in sorted from the browser
        const result = [];
        for (let i = 0, len = clientRects.length; i < len; i++) {
            const clientRect = clientRects[i];
            result[i] = new FloatHorizontalRange(Math.max(0, (clientRect.left - clientRectDeltaLeft) / clientRectScale), clientRect.width / clientRectScale);
        }
        return this._mergeAdjacentRanges(result);
    }
    static readHorizontalRanges(domNode, startChildIndex, startOffset, endChildIndex, endOffset, context) {
        // Panic check
        const min = 0;
        const max = domNode.children.length - 1;
        if (min > max) {
            return null;
        }
        startChildIndex = Math.min(max, Math.max(min, startChildIndex));
        endChildIndex = Math.min(max, Math.max(min, endChildIndex));
        if (startChildIndex === endChildIndex && startOffset === endOffset && startOffset === 0 && !domNode.children[startChildIndex].firstChild) {
            // We must find the position at the beginning of a <span>
            // To cover cases of empty <span>s, avoid using a range and use the <span>'s bounding box
            const clientRects = domNode.children[startChildIndex].getClientRects();
            context.markDidDomLayout();
            return this._createHorizontalRangesFromClientRects(clientRects, context.clientRectDeltaLeft, context.clientRectScale);
        }
        // If crossing over to a span only to select offset 0, then use the previous span's maximum offset
        // Chrome is buggy and doesn't handle 0 offsets well sometimes.
        if (startChildIndex !== endChildIndex) {
            if (endChildIndex > 0 && endOffset === 0) {
                endChildIndex--;
                endOffset = 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */;
            }
        }
        let startElement = domNode.children[startChildIndex].firstChild;
        let endElement = domNode.children[endChildIndex].firstChild;
        if (!startElement || !endElement) {
            // When having an empty <span> (without any text content), try to move to the previous <span>
            if (!startElement && startOffset === 0 && startChildIndex > 0) {
                startElement = domNode.children[startChildIndex - 1].firstChild;
                startOffset = 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */;
            }
            if (!endElement && endOffset === 0 && endChildIndex > 0) {
                endElement = domNode.children[endChildIndex - 1].firstChild;
                endOffset = 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */;
            }
        }
        if (!startElement || !endElement) {
            return null;
        }
        startOffset = Math.min(startElement.textContent.length, Math.max(0, startOffset));
        endOffset = Math.min(endElement.textContent.length, Math.max(0, endOffset));
        const clientRects = this._readClientRects(startElement, startOffset, endElement, endOffset, context.endNode);
        context.markDidDomLayout();
        return this._createHorizontalRangesFromClientRects(clientRects, context.clientRectDeltaLeft, context.clientRectScale);
    }
}

export { RangeUtil };
