import { PageCoordinates } from '../editorDom.js';
import { PartFingerprints } from '../view/viewPart.js';
import { ViewLine } from '../viewParts/viewLines/viewLine.js';
import { Position } from '../../common/core/position.js';
import { Range } from '../../common/core/range.js';
import { CursorColumns } from '../../common/core/cursorColumns.js';
import { getWindow, getShadowRoot } from '../../../base/browser/dom.js';
import { AtomicTabMoveOperations } from '../../common/cursor/cursorAtomicMoveOperations.js';
import { TextDirection } from '../../common/model.js';
import { Lazy } from '../../../base/common/lazy.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class UnknownHitTestResult {
    constructor(hitTarget = null) {
        this.hitTarget = hitTarget;
        this.type = 0 /* HitTestResultType.Unknown */;
    }
}
class ContentHitTestResult {
    get hitTarget() { return this.spanNode; }
    constructor(position, spanNode, injectedText) {
        this.position = position;
        this.spanNode = spanNode;
        this.injectedText = injectedText;
        this.type = 1 /* HitTestResultType.Content */;
    }
}
var HitTestResult;
(function (HitTestResult) {
    function createFromDOMInfo(ctx, spanNode, offset) {
        const position = ctx.getPositionFromDOMInfo(spanNode, offset);
        if (position) {
            return new ContentHitTestResult(position, spanNode, null);
        }
        return new UnknownHitTestResult(spanNode);
    }
    HitTestResult.createFromDOMInfo = createFromDOMInfo;
})(HitTestResult || (HitTestResult = {}));
class PointerHandlerLastRenderData {
    constructor(lastViewCursorsRenderData, lastTextareaPosition) {
        this.lastViewCursorsRenderData = lastViewCursorsRenderData;
        this.lastTextareaPosition = lastTextareaPosition;
    }
}
class MouseTarget {
    static _deduceRage(position, range = null) {
        if (!range && position) {
            return new Range(position.lineNumber, position.column, position.lineNumber, position.column);
        }
        return range ?? null;
    }
    static createUnknown(element, mouseColumn, position) {
        return { type: 0 /* MouseTargetType.UNKNOWN */, element, mouseColumn, position, range: this._deduceRage(position) };
    }
    static createTextarea(element, mouseColumn) {
        return { type: 1 /* MouseTargetType.TEXTAREA */, element, mouseColumn, position: null, range: null };
    }
    static createMargin(type, element, mouseColumn, position, range, detail) {
        return { type, element, mouseColumn, position, range, detail };
    }
    static createViewZone(type, element, mouseColumn, position, detail) {
        return { type, element, mouseColumn, position, range: this._deduceRage(position), detail };
    }
    static createContentText(element, mouseColumn, position, range, detail) {
        return { type: 6 /* MouseTargetType.CONTENT_TEXT */, element, mouseColumn, position, range: this._deduceRage(position, range), detail };
    }
    static createContentEmpty(element, mouseColumn, position, detail) {
        return { type: 7 /* MouseTargetType.CONTENT_EMPTY */, element, mouseColumn, position, range: this._deduceRage(position), detail };
    }
    static createContentWidget(element, mouseColumn, detail) {
        return { type: 9 /* MouseTargetType.CONTENT_WIDGET */, element, mouseColumn, position: null, range: null, detail };
    }
    static createScrollbar(element, mouseColumn, position) {
        return { type: 11 /* MouseTargetType.SCROLLBAR */, element, mouseColumn, position, range: this._deduceRage(position) };
    }
    static createOverlayWidget(element, mouseColumn, detail) {
        return { type: 12 /* MouseTargetType.OVERLAY_WIDGET */, element, mouseColumn, position: null, range: null, detail };
    }
    static createOutsideEditor(mouseColumn, position, outsidePosition, outsideDistance) {
        return { type: 13 /* MouseTargetType.OUTSIDE_EDITOR */, element: null, mouseColumn, position, range: this._deduceRage(position), outsidePosition, outsideDistance };
    }
    static _typeToString(type) {
        if (type === 1 /* MouseTargetType.TEXTAREA */) {
            return 'TEXTAREA';
        }
        if (type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */) {
            return 'GUTTER_GLYPH_MARGIN';
        }
        if (type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */) {
            return 'GUTTER_LINE_NUMBERS';
        }
        if (type === 4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */) {
            return 'GUTTER_LINE_DECORATIONS';
        }
        if (type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
            return 'GUTTER_VIEW_ZONE';
        }
        if (type === 6 /* MouseTargetType.CONTENT_TEXT */) {
            return 'CONTENT_TEXT';
        }
        if (type === 7 /* MouseTargetType.CONTENT_EMPTY */) {
            return 'CONTENT_EMPTY';
        }
        if (type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */) {
            return 'CONTENT_VIEW_ZONE';
        }
        if (type === 9 /* MouseTargetType.CONTENT_WIDGET */) {
            return 'CONTENT_WIDGET';
        }
        if (type === 10 /* MouseTargetType.OVERVIEW_RULER */) {
            return 'OVERVIEW_RULER';
        }
        if (type === 11 /* MouseTargetType.SCROLLBAR */) {
            return 'SCROLLBAR';
        }
        if (type === 12 /* MouseTargetType.OVERLAY_WIDGET */) {
            return 'OVERLAY_WIDGET';
        }
        return 'UNKNOWN';
    }
    static toString(target) {
        return this._typeToString(target.type) + ': ' + target.position + ' - ' + target.range + ' - ' + JSON.stringify(target.detail);
    }
}
class ElementPath {
    static isTextArea(path) {
        return (path.length === 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 7 /* PartFingerprint.TextArea */);
    }
    static isChildOfViewLines(path) {
        return (path.length >= 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 8 /* PartFingerprint.ViewLines */);
    }
    static isStrictChildOfViewLines(path) {
        return (path.length > 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 8 /* PartFingerprint.ViewLines */);
    }
    static isChildOfScrollableElement(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 6 /* PartFingerprint.ScrollableElement */);
    }
    static isChildOfMinimap(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 9 /* PartFingerprint.Minimap */);
    }
    static isChildOfContentWidgets(path) {
        return (path.length >= 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 1 /* PartFingerprint.ContentWidgets */);
    }
    static isChildOfOverflowGuard(path) {
        return (path.length >= 1
            && path[0] === 3 /* PartFingerprint.OverflowGuard */);
    }
    static isChildOfOverflowingContentWidgets(path) {
        return (path.length >= 1
            && path[0] === 2 /* PartFingerprint.OverflowingContentWidgets */);
    }
    static isChildOfOverlayWidgets(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 4 /* PartFingerprint.OverlayWidgets */);
    }
    static isChildOfOverflowingOverlayWidgets(path) {
        return (path.length >= 1
            && path[0] === 5 /* PartFingerprint.OverflowingOverlayWidgets */);
    }
}
class HitTestContext {
    constructor(context, viewHelper, lastRenderData) {
        this.viewModel = context.viewModel;
        const options = context.configuration.options;
        this.layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this.viewDomNode = viewHelper.viewDomNode;
        this.viewLinesGpu = viewHelper.viewLinesGpu;
        this.lineHeight = options.get(75 /* EditorOption.lineHeight */);
        this.stickyTabStops = options.get(132 /* EditorOption.stickyTabStops */);
        this.typicalHalfwidthCharacterWidth = options.get(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        this.lastRenderData = lastRenderData;
        this._context = context;
        this._viewHelper = viewHelper;
    }
    getZoneAtCoord(mouseVerticalOffset) {
        return HitTestContext.getZoneAtCoord(this._context, mouseVerticalOffset);
    }
    static getZoneAtCoord(context, mouseVerticalOffset) {
        // The target is either a view zone or the empty space after the last view-line
        const viewZoneWhitespace = context.viewLayout.getWhitespaceAtVerticalOffset(mouseVerticalOffset);
        if (viewZoneWhitespace) {
            const viewZoneMiddle = viewZoneWhitespace.verticalOffset + viewZoneWhitespace.height / 2;
            const lineCount = context.viewModel.getLineCount();
            let positionBefore = null;
            let position;
            let positionAfter = null;
            if (viewZoneWhitespace.afterLineNumber !== lineCount) {
                // There are more lines after this view zone
                positionAfter = new Position(viewZoneWhitespace.afterLineNumber + 1, 1);
            }
            if (viewZoneWhitespace.afterLineNumber > 0) {
                // There are more lines above this view zone
                positionBefore = new Position(viewZoneWhitespace.afterLineNumber, context.viewModel.getLineMaxColumn(viewZoneWhitespace.afterLineNumber));
            }
            if (positionAfter === null) {
                position = positionBefore;
            }
            else if (positionBefore === null) {
                position = positionAfter;
            }
            else if (mouseVerticalOffset < viewZoneMiddle) {
                position = positionBefore;
            }
            else {
                position = positionAfter;
            }
            return {
                viewZoneId: viewZoneWhitespace.id,
                afterLineNumber: viewZoneWhitespace.afterLineNumber,
                positionBefore: positionBefore,
                positionAfter: positionAfter,
                position: position
            };
        }
        return null;
    }
    getFullLineRangeAtCoord(mouseVerticalOffset) {
        if (this._context.viewLayout.isAfterLines(mouseVerticalOffset)) {
            // Below the last line
            const lineNumber = this._context.viewModel.getLineCount();
            const maxLineColumn = this._context.viewModel.getLineMaxColumn(lineNumber);
            return {
                range: new Range(lineNumber, maxLineColumn, lineNumber, maxLineColumn),
                isAfterLines: true
            };
        }
        const lineNumber = this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
        const maxLineColumn = this._context.viewModel.getLineMaxColumn(lineNumber);
        return {
            range: new Range(lineNumber, 1, lineNumber, maxLineColumn),
            isAfterLines: false
        };
    }
    getLineNumberAtVerticalOffset(mouseVerticalOffset) {
        return this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
    }
    isAfterLines(mouseVerticalOffset) {
        return this._context.viewLayout.isAfterLines(mouseVerticalOffset);
    }
    isInTopPadding(mouseVerticalOffset) {
        return this._context.viewLayout.isInTopPadding(mouseVerticalOffset);
    }
    isInBottomPadding(mouseVerticalOffset) {
        return this._context.viewLayout.isInBottomPadding(mouseVerticalOffset);
    }
    getVerticalOffsetForLineNumber(lineNumber) {
        return this._context.viewLayout.getVerticalOffsetForLineNumber(lineNumber);
    }
    findAttribute(element, attr) {
        return HitTestContext._findAttribute(element, attr, this._viewHelper.viewDomNode);
    }
    static _findAttribute(element, attr, stopAt) {
        while (element && element !== element.ownerDocument.body) {
            if (element.hasAttribute && element.hasAttribute(attr)) {
                return element.getAttribute(attr);
            }
            if (element === stopAt) {
                return null;
            }
            element = element.parentNode;
        }
        return null;
    }
    getLineWidth(lineNumber) {
        return this._viewHelper.getLineWidth(lineNumber);
    }
    isRtl(lineNumber) {
        return this.viewModel.getTextDirection(lineNumber) === TextDirection.RTL;
    }
    visibleRangeForPosition(lineNumber, column) {
        return this._viewHelper.visibleRangeForPosition(lineNumber, column);
    }
    getPositionFromDOMInfo(spanNode, offset) {
        return this._viewHelper.getPositionFromDOMInfo(spanNode, offset);
    }
    getCurrentScrollTop() {
        return this._context.viewLayout.getCurrentScrollTop();
    }
    getCurrentScrollLeft() {
        return this._context.viewLayout.getCurrentScrollLeft();
    }
}
class BareHitTestRequest {
    constructor(ctx, editorPos, pos, relativePos) {
        this.editorPos = editorPos;
        this.pos = pos;
        this.relativePos = relativePos;
        this.mouseVerticalOffset = Math.max(0, ctx.getCurrentScrollTop() + this.relativePos.y);
        this.mouseContentHorizontalOffset = ctx.getCurrentScrollLeft() + this.relativePos.x - ctx.layoutInfo.contentLeft;
        this.isInMarginArea = (this.relativePos.x < ctx.layoutInfo.contentLeft && this.relativePos.x >= ctx.layoutInfo.glyphMarginLeft);
        this.isInContentArea = !this.isInMarginArea;
        this.mouseColumn = Math.max(0, MouseTargetFactory._getMouseColumn(this.mouseContentHorizontalOffset, ctx.typicalHalfwidthCharacterWidth));
    }
}
class HitTestRequest extends BareHitTestRequest {
    get target() {
        if (this._useHitTestTarget) {
            return this.hitTestResult.value.hitTarget;
        }
        return this._eventTarget;
    }
    get targetPath() {
        if (this._targetPathCacheElement !== this.target) {
            this._targetPathCacheElement = this.target;
            this._targetPathCacheValue = PartFingerprints.collect(this.target, this._ctx.viewDomNode);
        }
        return this._targetPathCacheValue;
    }
    constructor(ctx, editorPos, pos, relativePos, eventTarget) {
        super(ctx, editorPos, pos, relativePos);
        this.hitTestResult = new Lazy(() => MouseTargetFactory.doHitTest(this._ctx, this));
        this._targetPathCacheElement = null;
        this._targetPathCacheValue = new Uint8Array(0);
        this._ctx = ctx;
        this._eventTarget = eventTarget;
        // If no event target is passed in, we will use the hit test target
        const hasEventTarget = Boolean(this._eventTarget);
        this._useHitTestTarget = !hasEventTarget;
    }
    toString() {
        return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}\n\ttarget: ${this.target ? this.target.outerHTML : null}`;
    }
    get wouldBenefitFromHitTestTargetSwitch() {
        return (!this._useHitTestTarget
            && this.hitTestResult.value.hitTarget !== null
            && this.target !== this.hitTestResult.value.hitTarget);
    }
    switchToHitTestTarget() {
        this._useHitTestTarget = true;
    }
    _getMouseColumn(position = null) {
        if (position && position.column < this._ctx.viewModel.getLineMaxColumn(position.lineNumber)) {
            // Most likely, the line contains foreign decorations...
            return CursorColumns.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(position.lineNumber), position.column, this._ctx.viewModel.model.getOptions().tabSize) + 1;
        }
        return this.mouseColumn;
    }
    fulfillUnknown(position = null) {
        return MouseTarget.createUnknown(this.target, this._getMouseColumn(position), position);
    }
    fulfillTextarea() {
        return MouseTarget.createTextarea(this.target, this._getMouseColumn());
    }
    fulfillMargin(type, position, range, detail) {
        return MouseTarget.createMargin(type, this.target, this._getMouseColumn(position), position, range, detail);
    }
    fulfillViewZone(type, position, detail) {
        // Always return the usual mouse column for a view zone.
        return MouseTarget.createViewZone(type, this.target, this._getMouseColumn(), position, detail);
    }
    fulfillContentText(position, range, detail) {
        return MouseTarget.createContentText(this.target, this._getMouseColumn(position), position, range, detail);
    }
    fulfillContentEmpty(position, detail) {
        return MouseTarget.createContentEmpty(this.target, this._getMouseColumn(position), position, detail);
    }
    fulfillContentWidget(detail) {
        return MouseTarget.createContentWidget(this.target, this._getMouseColumn(), detail);
    }
    fulfillScrollbar(position) {
        return MouseTarget.createScrollbar(this.target, this._getMouseColumn(position), position);
    }
    fulfillOverlayWidget(detail) {
        return MouseTarget.createOverlayWidget(this.target, this._getMouseColumn(), detail);
    }
}
const EMPTY_CONTENT_AFTER_LINES = { isAfterLines: true };
function createEmptyContentDataInLines(horizontalDistanceToText) {
    return {
        isAfterLines: false,
        horizontalDistanceToText: horizontalDistanceToText
    };
}
class MouseTargetFactory {
    constructor(context, viewHelper) {
        this._context = context;
        this._viewHelper = viewHelper;
    }
    mouseTargetIsWidget(e) {
        const t = e.target;
        const path = PartFingerprints.collect(t, this._viewHelper.viewDomNode);
        // Is it a content widget?
        if (ElementPath.isChildOfContentWidgets(path) || ElementPath.isChildOfOverflowingContentWidgets(path)) {
            return true;
        }
        // Is it an overlay widget?
        if (ElementPath.isChildOfOverlayWidgets(path) || ElementPath.isChildOfOverflowingOverlayWidgets(path)) {
            return true;
        }
        return false;
    }
    createMouseTarget(lastRenderData, editorPos, pos, relativePos, target) {
        const ctx = new HitTestContext(this._context, this._viewHelper, lastRenderData);
        const request = new HitTestRequest(ctx, editorPos, pos, relativePos, target);
        try {
            const r = MouseTargetFactory._createMouseTarget(ctx, request);
            if (r.type === 6 /* MouseTargetType.CONTENT_TEXT */) {
                // Snap to the nearest soft tab boundary if atomic soft tabs are enabled.
                if (ctx.stickyTabStops && r.position !== null) {
                    const position = MouseTargetFactory._snapToSoftTabBoundary(r.position, ctx.viewModel);
                    const range = Range.fromPositions(position, position).plusRange(r.range);
                    return request.fulfillContentText(position, range, r.detail);
                }
            }
            // console.log(MouseTarget.toString(r));
            return r;
        }
        catch (err) {
            // console.log(err);
            return request.fulfillUnknown();
        }
    }
    static _createMouseTarget(ctx, request) {
        // console.log(`${domHitTestExecuted ? '=>' : ''}CAME IN REQUEST: ${request}`);
        if (request.target === null) {
            // No target
            return request.fulfillUnknown();
        }
        // we know for a fact that request.target is not null
        const resolvedRequest = request;
        let result = null;
        if (!ElementPath.isChildOfOverflowGuard(request.targetPath) && !ElementPath.isChildOfOverflowingContentWidgets(request.targetPath) && !ElementPath.isChildOfOverflowingOverlayWidgets(request.targetPath)) {
            // We only render dom nodes inside the overflow guard or in the overflowing content widgets
            result = result || request.fulfillUnknown();
        }
        result = result || MouseTargetFactory._hitTestContentWidget(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestOverlayWidget(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestMinimap(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestScrollbarSlider(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewZone(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestMargin(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewCursor(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestTextArea(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewLines(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestScrollbar(ctx, resolvedRequest);
        return (result || request.fulfillUnknown());
    }
    static _hitTestContentWidget(ctx, request) {
        // Is it a content widget?
        if (ElementPath.isChildOfContentWidgets(request.targetPath) || ElementPath.isChildOfOverflowingContentWidgets(request.targetPath)) {
            const widgetId = ctx.findAttribute(request.target, 'widgetId');
            if (widgetId) {
                return request.fulfillContentWidget(widgetId);
            }
            else {
                return request.fulfillUnknown();
            }
        }
        return null;
    }
    static _hitTestOverlayWidget(ctx, request) {
        // Is it an overlay widget?
        if (ElementPath.isChildOfOverlayWidgets(request.targetPath) || ElementPath.isChildOfOverflowingOverlayWidgets(request.targetPath)) {
            const widgetId = ctx.findAttribute(request.target, 'widgetId');
            if (widgetId) {
                return request.fulfillOverlayWidget(widgetId);
            }
            else {
                return request.fulfillUnknown();
            }
        }
        return null;
    }
    static _hitTestViewCursor(ctx, request) {
        if (request.target) {
            // Check if we've hit a painted cursor
            const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
            for (const d of lastViewCursorsRenderData) {
                if (request.target === d.domNode) {
                    return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
                }
            }
        }
        if (request.isInContentArea) {
            // Edge has a bug when hit-testing the exact position of a cursor,
            // instead of returning the correct dom node, it returns the
            // first or last rendered view line dom node, therefore help it out
            // and first check if we are on top of a cursor
            const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
            const mouseContentHorizontalOffset = request.mouseContentHorizontalOffset;
            const mouseVerticalOffset = request.mouseVerticalOffset;
            for (const d of lastViewCursorsRenderData) {
                if (mouseContentHorizontalOffset < d.contentLeft) {
                    // mouse position is to the left of the cursor
                    continue;
                }
                if (mouseContentHorizontalOffset > d.contentLeft + d.width) {
                    // mouse position is to the right of the cursor
                    continue;
                }
                const cursorVerticalOffset = ctx.getVerticalOffsetForLineNumber(d.position.lineNumber);
                if (cursorVerticalOffset <= mouseVerticalOffset
                    && mouseVerticalOffset <= cursorVerticalOffset + d.height) {
                    return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
                }
            }
        }
        return null;
    }
    static _hitTestViewZone(ctx, request) {
        const viewZoneData = ctx.getZoneAtCoord(request.mouseVerticalOffset);
        if (viewZoneData) {
            const mouseTargetType = (request.isInContentArea ? 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ : 5 /* MouseTargetType.GUTTER_VIEW_ZONE */);
            return request.fulfillViewZone(mouseTargetType, viewZoneData.position, viewZoneData);
        }
        return null;
    }
    static _hitTestTextArea(ctx, request) {
        // Is it the textarea?
        if (ElementPath.isTextArea(request.targetPath)) {
            if (ctx.lastRenderData.lastTextareaPosition) {
                return request.fulfillContentText(ctx.lastRenderData.lastTextareaPosition, null, { mightBeForeignElement: false, injectedText: null });
            }
            return request.fulfillTextarea();
        }
        return null;
    }
    static _hitTestMargin(ctx, request) {
        if (request.isInMarginArea) {
            const res = ctx.getFullLineRangeAtCoord(request.mouseVerticalOffset);
            const pos = res.range.getStartPosition();
            let offset = Math.abs(request.relativePos.x);
            const detail = {
                isAfterLines: res.isAfterLines,
                glyphMarginLeft: ctx.layoutInfo.glyphMarginLeft,
                glyphMarginWidth: ctx.layoutInfo.glyphMarginWidth,
                lineNumbersWidth: ctx.layoutInfo.lineNumbersWidth,
                offsetX: offset
            };
            offset -= ctx.layoutInfo.glyphMarginLeft;
            if (offset <= ctx.layoutInfo.glyphMarginWidth) {
                // On the glyph margin
                const modelCoordinate = ctx.viewModel.coordinatesConverter.convertViewPositionToModelPosition(res.range.getStartPosition());
                const lanes = ctx.viewModel.glyphLanes.getLanesAtLine(modelCoordinate.lineNumber);
                detail.glyphMarginLane = lanes[Math.floor(offset / ctx.lineHeight)];
                return request.fulfillMargin(2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */, pos, res.range, detail);
            }
            offset -= ctx.layoutInfo.glyphMarginWidth;
            if (offset <= ctx.layoutInfo.lineNumbersWidth) {
                // On the line numbers
                return request.fulfillMargin(3 /* MouseTargetType.GUTTER_LINE_NUMBERS */, pos, res.range, detail);
            }
            offset -= ctx.layoutInfo.lineNumbersWidth;
            // On the line decorations
            return request.fulfillMargin(4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */, pos, res.range, detail);
        }
        return null;
    }
    static _hitTestViewLines(ctx, request) {
        if (!ElementPath.isChildOfViewLines(request.targetPath)) {
            return null;
        }
        if (ctx.isInTopPadding(request.mouseVerticalOffset)) {
            return request.fulfillContentEmpty(new Position(1, 1), EMPTY_CONTENT_AFTER_LINES);
        }
        // Check if it is below any lines and any view zones
        if (ctx.isAfterLines(request.mouseVerticalOffset) || ctx.isInBottomPadding(request.mouseVerticalOffset)) {
            // This most likely indicates it happened after the last view-line
            const lineCount = ctx.viewModel.getLineCount();
            const maxLineColumn = ctx.viewModel.getLineMaxColumn(lineCount);
            return request.fulfillContentEmpty(new Position(lineCount, maxLineColumn), EMPTY_CONTENT_AFTER_LINES);
        }
        // Check if we are hitting a view-line (can happen in the case of inline decorations on empty lines)
        // See https://github.com/microsoft/vscode/issues/46942
        if (ElementPath.isStrictChildOfViewLines(request.targetPath)) {
            const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
            const lineLength = ctx.viewModel.getLineLength(lineNumber);
            const lineWidth = ctx.getLineWidth(lineNumber);
            if (lineLength === 0) {
                const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                return request.fulfillContentEmpty(new Position(lineNumber, 1), detail);
            }
            const isRtl = ctx.isRtl(lineNumber);
            if (isRtl) {
                if (request.mouseContentHorizontalOffset + lineWidth <= ctx.layoutInfo.contentWidth - ctx.layoutInfo.verticalScrollbarWidth) {
                    const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                    const pos = new Position(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
                    return request.fulfillContentEmpty(pos, detail);
                }
            }
            else if (request.mouseContentHorizontalOffset >= lineWidth) {
                const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                const pos = new Position(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
                return request.fulfillContentEmpty(pos, detail);
            }
        }
        else {
            if (ctx.viewLinesGpu) {
                const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
                if (ctx.viewModel.getLineLength(lineNumber) === 0) {
                    const lineWidth = ctx.getLineWidth(lineNumber);
                    const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                    return request.fulfillContentEmpty(new Position(lineNumber, 1), detail);
                }
                const lineWidth = ctx.getLineWidth(lineNumber);
                const isRtl = ctx.isRtl(lineNumber);
                if (isRtl) {
                    if (request.mouseContentHorizontalOffset + lineWidth <= ctx.layoutInfo.contentWidth - ctx.layoutInfo.verticalScrollbarWidth) {
                        const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                        const pos = new Position(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
                        return request.fulfillContentEmpty(pos, detail);
                    }
                }
                else if (request.mouseContentHorizontalOffset >= lineWidth) {
                    const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                    const pos = new Position(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
                    return request.fulfillContentEmpty(pos, detail);
                }
                const position = ctx.viewLinesGpu.getPositionAtCoordinate(lineNumber, request.mouseContentHorizontalOffset);
                if (position) {
                    const detail = {
                        injectedText: null,
                        mightBeForeignElement: false
                    };
                    return request.fulfillContentText(position, Range.fromPositions(position, position), detail);
                }
            }
        }
        // Do the hit test (if not already done)
        const hitTestResult = request.hitTestResult.value;
        if (hitTestResult.type === 1 /* HitTestResultType.Content */) {
            return MouseTargetFactory.createMouseTargetFromHitTestPosition(ctx, request, hitTestResult.spanNode, hitTestResult.position, hitTestResult.injectedText);
        }
        // We didn't hit content...
        if (request.wouldBenefitFromHitTestTargetSwitch) {
            // We actually hit something different... Give it one last change by trying again with this new target
            request.switchToHitTestTarget();
            return this._createMouseTarget(ctx, request);
        }
        // We have tried everything...
        return request.fulfillUnknown();
    }
    static _hitTestMinimap(ctx, request) {
        if (ElementPath.isChildOfMinimap(request.targetPath)) {
            const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
            const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
            return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
        }
        return null;
    }
    static _hitTestScrollbarSlider(ctx, request) {
        if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
            if (request.target && request.target.nodeType === 1) {
                const className = request.target.className;
                if (className && /\b(slider|scrollbar)\b/.test(className)) {
                    const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
                    const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
                    return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
                }
            }
        }
        return null;
    }
    static _hitTestScrollbar(ctx, request) {
        // Is it the overview ruler?
        // Is it a child of the scrollable element?
        if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
            const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
            const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
            return request.fulfillScrollbar(new Position(possibleLineNumber, maxColumn));
        }
        return null;
    }
    getMouseColumn(relativePos) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        const mouseContentHorizontalOffset = this._context.viewLayout.getCurrentScrollLeft() + relativePos.x - layoutInfo.contentLeft;
        return MouseTargetFactory._getMouseColumn(mouseContentHorizontalOffset, options.get(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth);
    }
    static _getMouseColumn(mouseContentHorizontalOffset, typicalHalfwidthCharacterWidth) {
        if (mouseContentHorizontalOffset < 0) {
            return 1;
        }
        const chars = Math.round(mouseContentHorizontalOffset / typicalHalfwidthCharacterWidth);
        return (chars + 1);
    }
    static createMouseTargetFromHitTestPosition(ctx, request, spanNode, pos, injectedText) {
        const lineNumber = pos.lineNumber;
        const column = pos.column;
        const lineWidth = ctx.getLineWidth(lineNumber);
        if (request.mouseContentHorizontalOffset > lineWidth) {
            const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
            return request.fulfillContentEmpty(pos, detail);
        }
        const visibleRange = ctx.visibleRangeForPosition(lineNumber, column);
        if (!visibleRange) {
            return request.fulfillUnknown(pos);
        }
        const columnHorizontalOffset = visibleRange.left;
        if (Math.abs(request.mouseContentHorizontalOffset - columnHorizontalOffset) < 1) {
            return request.fulfillContentText(pos, null, { mightBeForeignElement: !!injectedText, injectedText });
        }
        const points = [];
        points.push({ offset: visibleRange.left, column: column });
        if (column > 1) {
            const visibleRange = ctx.visibleRangeForPosition(lineNumber, column - 1);
            if (visibleRange) {
                points.push({ offset: visibleRange.left, column: column - 1 });
            }
        }
        const lineMaxColumn = ctx.viewModel.getLineMaxColumn(lineNumber);
        if (column < lineMaxColumn) {
            const visibleRange = ctx.visibleRangeForPosition(lineNumber, column + 1);
            if (visibleRange) {
                points.push({ offset: visibleRange.left, column: column + 1 });
            }
        }
        points.sort((a, b) => a.offset - b.offset);
        const mouseCoordinates = request.pos.toClientCoordinates(getWindow(ctx.viewDomNode));
        const spanNodeClientRect = spanNode.getBoundingClientRect();
        const mouseIsOverSpanNode = (spanNodeClientRect.left <= mouseCoordinates.clientX && mouseCoordinates.clientX <= spanNodeClientRect.right);
        let rng = null;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            if (prev.offset <= request.mouseContentHorizontalOffset && request.mouseContentHorizontalOffset <= curr.offset) {
                rng = new Range(lineNumber, prev.column, lineNumber, curr.column);
                // See https://github.com/microsoft/vscode/issues/152819
                // Due to the use of zwj, the browser's hit test result is skewed towards the left
                // Here we try to correct that if the mouse horizontal offset is closer to the right than the left
                const prevDelta = Math.abs(prev.offset - request.mouseContentHorizontalOffset);
                const nextDelta = Math.abs(curr.offset - request.mouseContentHorizontalOffset);
                pos = (prevDelta < nextDelta
                    ? new Position(lineNumber, prev.column)
                    : new Position(lineNumber, curr.column));
                break;
            }
        }
        return request.fulfillContentText(pos, rng, { mightBeForeignElement: !mouseIsOverSpanNode || !!injectedText, injectedText });
    }
    /**
     * Most probably WebKit browsers and Edge
     */
    static _doHitTestWithCaretRangeFromPoint(ctx, request) {
        // In Chrome, especially on Linux it is possible to click between lines,
        // so try to adjust the `hity` below so that it lands in the center of a line
        const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
        const lineStartVerticalOffset = ctx.getVerticalOffsetForLineNumber(lineNumber);
        const lineEndVerticalOffset = lineStartVerticalOffset + ctx.lineHeight;
        const isBelowLastLine = (lineNumber === ctx.viewModel.getLineCount()
            && request.mouseVerticalOffset > lineEndVerticalOffset);
        if (!isBelowLastLine) {
            const lineCenteredVerticalOffset = Math.floor((lineStartVerticalOffset + lineEndVerticalOffset) / 2);
            let adjustedPageY = request.pos.y + (lineCenteredVerticalOffset - request.mouseVerticalOffset);
            if (adjustedPageY <= request.editorPos.y) {
                adjustedPageY = request.editorPos.y + 1;
            }
            if (adjustedPageY >= request.editorPos.y + request.editorPos.height) {
                adjustedPageY = request.editorPos.y + request.editorPos.height - 1;
            }
            const adjustedPage = new PageCoordinates(request.pos.x, adjustedPageY);
            const r = this._actualDoHitTestWithCaretRangeFromPoint(ctx, adjustedPage.toClientCoordinates(getWindow(ctx.viewDomNode)));
            if (r.type === 1 /* HitTestResultType.Content */) {
                return r;
            }
        }
        // Also try to hit test without the adjustment (for the edge cases that we are near the top or bottom)
        return this._actualDoHitTestWithCaretRangeFromPoint(ctx, request.pos.toClientCoordinates(getWindow(ctx.viewDomNode)));
    }
    static _actualDoHitTestWithCaretRangeFromPoint(ctx, coords) {
        const shadowRoot = getShadowRoot(ctx.viewDomNode);
        let range;
        if (shadowRoot) {
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            if (typeof shadowRoot.caretRangeFromPoint === 'undefined') {
                range = shadowCaretRangeFromPoint(shadowRoot, coords.clientX, coords.clientY);
            }
            else {
                // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
                range = shadowRoot.caretRangeFromPoint(coords.clientX, coords.clientY);
            }
        }
        else {
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            range = ctx.viewDomNode.ownerDocument.caretRangeFromPoint(coords.clientX, coords.clientY);
        }
        if (!range || !range.startContainer) {
            return new UnknownHitTestResult();
        }
        // Chrome always hits a TEXT_NODE, while Edge sometimes hits a token span
        const startContainer = range.startContainer;
        if (startContainer.nodeType === startContainer.TEXT_NODE) {
            // startContainer is expected to be the token text
            const parent1 = startContainer.parentNode; // expected to be the token span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line container span
            const parent3 = parent2 ? parent2.parentNode : null; // expected to be the view line div
            const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
            if (parent3ClassName === ViewLine.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, parent1, range.startOffset);
            }
            else {
                return new UnknownHitTestResult(startContainer.parentNode);
            }
        }
        else if (startContainer.nodeType === startContainer.ELEMENT_NODE) {
            // startContainer is expected to be the token span
            const parent1 = startContainer.parentNode; // expected to be the view line container span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line div
            const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
            if (parent2ClassName === ViewLine.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, startContainer, startContainer.textContent.length);
            }
            else {
                return new UnknownHitTestResult(startContainer);
            }
        }
        return new UnknownHitTestResult();
    }
    /**
     * Most probably Gecko
     */
    static _doHitTestWithCaretPositionFromPoint(ctx, coords) {
        // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
        const hitResult = ctx.viewDomNode.ownerDocument.caretPositionFromPoint(coords.clientX, coords.clientY);
        if (hitResult.offsetNode.nodeType === hitResult.offsetNode.TEXT_NODE) {
            // offsetNode is expected to be the token text
            const parent1 = hitResult.offsetNode.parentNode; // expected to be the token span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line container span
            const parent3 = parent2 ? parent2.parentNode : null; // expected to be the view line div
            const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
            if (parent3ClassName === ViewLine.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode.parentNode, hitResult.offset);
            }
            else {
                return new UnknownHitTestResult(hitResult.offsetNode.parentNode);
            }
        }
        // For inline decorations, Gecko sometimes returns the `<span>` of the line and the offset is the `<span>` with the inline decoration
        // Some other times, it returns the `<span>` with the inline decoration
        if (hitResult.offsetNode.nodeType === hitResult.offsetNode.ELEMENT_NODE) {
            const parent1 = hitResult.offsetNode.parentNode;
            const parent1ClassName = parent1 && parent1.nodeType === parent1.ELEMENT_NODE ? parent1.className : null;
            const parent2 = parent1 ? parent1.parentNode : null;
            const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
            if (parent1ClassName === ViewLine.CLASS_NAME) {
                // it returned the `<span>` of the line and the offset is the `<span>` with the inline decoration
                const tokenSpan = hitResult.offsetNode.childNodes[Math.min(hitResult.offset, hitResult.offsetNode.childNodes.length - 1)];
                if (tokenSpan) {
                    return HitTestResult.createFromDOMInfo(ctx, tokenSpan, 0);
                }
            }
            else if (parent2ClassName === ViewLine.CLASS_NAME) {
                // it returned the `<span>` with the inline decoration
                return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode, 0);
            }
        }
        return new UnknownHitTestResult(hitResult.offsetNode);
    }
    static _snapToSoftTabBoundary(position, viewModel) {
        const lineContent = viewModel.getLineContent(position.lineNumber);
        const { tabSize } = viewModel.model.getOptions();
        const newPosition = AtomicTabMoveOperations.atomicPosition(lineContent, position.column - 1, tabSize, 2 /* Direction.Nearest */);
        if (newPosition !== -1) {
            return new Position(position.lineNumber, newPosition + 1);
        }
        return position;
    }
    static doHitTest(ctx, request) {
        let result = new UnknownHitTestResult();
        // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
        if (typeof ctx.viewDomNode.ownerDocument.caretRangeFromPoint === 'function') {
            result = this._doHitTestWithCaretRangeFromPoint(ctx, request);
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
        }
        else if (ctx.viewDomNode.ownerDocument.caretPositionFromPoint) {
            result = this._doHitTestWithCaretPositionFromPoint(ctx, request.pos.toClientCoordinates(getWindow(ctx.viewDomNode)));
        }
        if (result.type === 1 /* HitTestResultType.Content */) {
            const injectedText = ctx.viewModel.getInjectedTextAt(result.position);
            const normalizedPosition = ctx.viewModel.normalizePosition(result.position, 2 /* PositionAffinity.None */);
            if (injectedText || !normalizedPosition.equals(result.position)) {
                result = new ContentHitTestResult(normalizedPosition, result.spanNode, injectedText);
            }
        }
        return result;
    }
}
function shadowCaretRangeFromPoint(shadowRoot, x, y) {
    const range = document.createRange();
    // Get the element under the point
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    let el = shadowRoot.elementFromPoint(x, y);
    // When el is not null, it may be div.monaco-mouse-cursor-text Element, which has not childNodes, we don't need to handle it.
    if (el?.hasChildNodes()) {
        // Get the last child of the element until its firstChild is a text node
        // This assumes that the pointer is on the right of the line, out of the tokens
        // and that we want to get the offset of the last token of the line
        while (el && el.firstChild && el.firstChild.nodeType !== el.firstChild.TEXT_NODE && el.lastChild && el.lastChild.firstChild) {
            el = el.lastChild;
        }
        // Grab its rect
        const rect = el.getBoundingClientRect();
        // And its font (the computed shorthand font property might be empty, see #3217)
        const elWindow = getWindow(el);
        const fontStyle = elWindow.getComputedStyle(el, null).getPropertyValue('font-style');
        const fontVariant = elWindow.getComputedStyle(el, null).getPropertyValue('font-variant');
        const fontWeight = elWindow.getComputedStyle(el, null).getPropertyValue('font-weight');
        const fontSize = elWindow.getComputedStyle(el, null).getPropertyValue('font-size');
        const lineHeight = elWindow.getComputedStyle(el, null).getPropertyValue('line-height');
        const fontFamily = elWindow.getComputedStyle(el, null).getPropertyValue('font-family');
        const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
        // And also its txt content
        const text = el.innerText;
        // Position the pixel cursor at the left of the element
        let pixelCursor = rect.left;
        let offset = 0;
        let step;
        // If the point is on the right of the box put the cursor after the last character
        if (x > rect.left + rect.width) {
            offset = text.length;
        }
        else {
            const charWidthReader = CharWidthReader.getInstance();
            // Goes through all the characters of the innerText, and checks if the x of the point
            // belongs to the character.
            for (let i = 0; i < text.length + 1; i++) {
                // The step is half the width of the character
                step = charWidthReader.getCharWidth(text.charAt(i), font) / 2;
                // Move to the center of the character
                pixelCursor += step;
                // If the x of the point is smaller that the position of the cursor, the point is over that character
                if (x < pixelCursor) {
                    offset = i;
                    break;
                }
                // Move between the current character and the next
                pixelCursor += step;
            }
        }
        // Creates a range with the text node of the element and set the offset found
        range.setStart(el.firstChild, offset);
        range.setEnd(el.firstChild, offset);
    }
    return range;
}
class CharWidthReader {
    static { this._INSTANCE = null; }
    static getInstance() {
        if (!CharWidthReader._INSTANCE) {
            CharWidthReader._INSTANCE = new CharWidthReader();
        }
        return CharWidthReader._INSTANCE;
    }
    constructor() {
        this._cache = {};
        this._canvas = document.createElement('canvas');
    }
    getCharWidth(char, font) {
        const cacheKey = char + font;
        if (this._cache[cacheKey]) {
            return this._cache[cacheKey];
        }
        const context = this._canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(char);
        const width = metrics.width;
        this._cache[cacheKey] = width;
        return width;
    }
}

export { HitTestContext, MouseTarget, MouseTargetFactory, PointerHandlerLastRenderData };
