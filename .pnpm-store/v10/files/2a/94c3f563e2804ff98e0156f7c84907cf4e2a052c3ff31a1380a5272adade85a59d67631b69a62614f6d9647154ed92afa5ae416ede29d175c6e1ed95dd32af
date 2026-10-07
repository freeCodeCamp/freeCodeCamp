import { createFastDomNode } from '../../../../base/browser/fastDomNode.js';
import { ArrayQueue } from '../../../../base/common/arrays.js';
import './glyphMargin.css';
import { DynamicViewOverlay } from '../../view/dynamicViewOverlay.js';
import { ViewPart } from '../../view/viewPart.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { GlyphMarginLane } from '../../../common/model.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents a decoration that should be shown along the lines from `startLineNumber` to `endLineNumber`.
 * This can end up producing multiple `LineDecorationToRender`.
 */
class DecorationToRender {
    constructor(startLineNumber, endLineNumber, className, tooltip, zIndex) {
        this.startLineNumber = startLineNumber;
        this.endLineNumber = endLineNumber;
        this.className = className;
        this.tooltip = tooltip;
        this._decorationToRenderBrand = undefined;
        this.zIndex = zIndex ?? 0;
    }
}
/**
 * A decoration that should be shown along a line.
 */
class LineDecorationToRender {
    constructor(className, zIndex, tooltip) {
        this.className = className;
        this.zIndex = zIndex;
        this.tooltip = tooltip;
    }
}
/**
 * Decorations to render on a visible line.
 */
class VisibleLineDecorationsToRender {
    constructor() {
        this.decorations = [];
    }
    add(decoration) {
        this.decorations.push(decoration);
    }
    getDecorations() {
        return this.decorations;
    }
}
class DedupOverlay extends DynamicViewOverlay {
    /**
     * Returns an array with an element for each visible line number.
     */
    _render(visibleStartLineNumber, visibleEndLineNumber, decorations) {
        const output = [];
        for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
            const lineIndex = lineNumber - visibleStartLineNumber;
            output[lineIndex] = new VisibleLineDecorationsToRender();
        }
        if (decorations.length === 0) {
            return output;
        }
        // Sort decorations by className, then by startLineNumber and then by endLineNumber
        decorations.sort((a, b) => {
            if (a.className === b.className) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.endLineNumber - b.endLineNumber;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return (a.className < b.className ? -1 : 1);
        });
        let prevClassName = null;
        let prevEndLineIndex = 0;
        for (let i = 0, len = decorations.length; i < len; i++) {
            const d = decorations[i];
            const className = d.className;
            const zIndex = d.zIndex;
            let startLineIndex = Math.max(d.startLineNumber, visibleStartLineNumber) - visibleStartLineNumber;
            const endLineIndex = Math.min(d.endLineNumber, visibleEndLineNumber) - visibleStartLineNumber;
            if (prevClassName === className) {
                // Here we avoid rendering the same className multiple times on the same line
                startLineIndex = Math.max(prevEndLineIndex + 1, startLineIndex);
                prevEndLineIndex = Math.max(prevEndLineIndex, endLineIndex);
            }
            else {
                prevClassName = className;
                prevEndLineIndex = endLineIndex;
            }
            for (let i = startLineIndex; i <= prevEndLineIndex; i++) {
                output[i].add(new LineDecorationToRender(className, zIndex, d.tooltip));
            }
        }
        return output;
    }
}
class GlyphMarginWidgets extends ViewPart {
    constructor(context) {
        super(context);
        this._widgets = {};
        this._context = context;
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this.domNode = createFastDomNode(document.createElement('div'));
        this.domNode.setClassName('glyph-margin-widgets');
        this.domNode.setPosition('absolute');
        this.domNode.setTop(0);
        this._lineHeight = options.get(75 /* EditorOption.lineHeight */);
        this._glyphMargin = options.get(66 /* EditorOption.glyphMargin */);
        this._glyphMarginLeft = layoutInfo.glyphMarginLeft;
        this._glyphMarginWidth = layoutInfo.glyphMarginWidth;
        this._glyphMarginDecorationLaneCount = layoutInfo.glyphMarginDecorationLaneCount;
        this._managedDomNodes = [];
        this._decorationGlyphsToRender = [];
    }
    dispose() {
        this._managedDomNodes = [];
        this._decorationGlyphsToRender = [];
        this._widgets = {};
        super.dispose();
    }
    getWidgets() {
        return Object.values(this._widgets);
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._lineHeight = options.get(75 /* EditorOption.lineHeight */);
        this._glyphMargin = options.get(66 /* EditorOption.glyphMargin */);
        this._glyphMarginLeft = layoutInfo.glyphMarginLeft;
        this._glyphMarginWidth = layoutInfo.glyphMarginWidth;
        this._glyphMarginDecorationLaneCount = layoutInfo.glyphMarginDecorationLaneCount;
        return true;
    }
    onDecorationsChanged(e) {
        return true;
    }
    onFlushed(e) {
        return true;
    }
    onLinesChanged(e) {
        return true;
    }
    onLinesDeleted(e) {
        return true;
    }
    onLinesInserted(e) {
        return true;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    // --- begin widget management
    addWidget(widget) {
        const domNode = createFastDomNode(widget.getDomNode());
        this._widgets[widget.getId()] = {
            widget: widget,
            preference: widget.getPosition(),
            domNode: domNode,
            renderInfo: null
        };
        domNode.setPosition('absolute');
        domNode.setDisplay('none');
        domNode.setAttribute('widgetId', widget.getId());
        this.domNode.appendChild(domNode);
        this.setShouldRender();
    }
    setWidgetPosition(widget, preference) {
        const myWidget = this._widgets[widget.getId()];
        if (myWidget.preference.lane === preference.lane
            && myWidget.preference.zIndex === preference.zIndex
            && Range.equalsRange(myWidget.preference.range, preference.range)) {
            return false;
        }
        myWidget.preference = preference;
        this.setShouldRender();
        return true;
    }
    removeWidget(widget) {
        const widgetId = widget.getId();
        if (this._widgets[widgetId]) {
            const widgetData = this._widgets[widgetId];
            const domNode = widgetData.domNode.domNode;
            delete this._widgets[widgetId];
            domNode.remove();
            this.setShouldRender();
        }
    }
    // --- end widget management
    _collectDecorationBasedGlyphRenderRequest(ctx, requests) {
        const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
        const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
        const decorations = ctx.getDecorationsInViewport();
        for (const d of decorations) {
            const glyphMarginClassName = d.options.glyphMarginClassName;
            if (!glyphMarginClassName) {
                continue;
            }
            const startLineNumber = Math.max(d.range.startLineNumber, visibleStartLineNumber);
            const endLineNumber = Math.min(d.range.endLineNumber, visibleEndLineNumber);
            const lane = d.options.glyphMargin?.position ?? GlyphMarginLane.Center;
            const zIndex = d.options.zIndex ?? 0;
            for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
                const modelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Position(lineNumber, 0));
                const laneIndex = this._context.viewModel.glyphLanes.getLanesAtLine(modelPosition.lineNumber).indexOf(lane);
                requests.push(new DecorationBasedGlyphRenderRequest(lineNumber, laneIndex, zIndex, glyphMarginClassName));
            }
        }
    }
    _collectWidgetBasedGlyphRenderRequest(ctx, requests) {
        const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
        const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
        for (const widget of Object.values(this._widgets)) {
            const range = widget.preference.range;
            const { startLineNumber, endLineNumber } = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(Range.lift(range));
            if (!startLineNumber || !endLineNumber || endLineNumber < visibleStartLineNumber || startLineNumber > visibleEndLineNumber) {
                // The widget is not in the viewport
                continue;
            }
            // The widget is in the viewport, find a good line for it
            const widgetLineNumber = Math.max(startLineNumber, visibleStartLineNumber);
            const modelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Position(widgetLineNumber, 0));
            const laneIndex = this._context.viewModel.glyphLanes.getLanesAtLine(modelPosition.lineNumber).indexOf(widget.preference.lane);
            requests.push(new WidgetBasedGlyphRenderRequest(widgetLineNumber, laneIndex, widget.preference.zIndex, widget));
        }
    }
    _collectSortedGlyphRenderRequests(ctx) {
        const requests = [];
        this._collectDecorationBasedGlyphRenderRequest(ctx, requests);
        this._collectWidgetBasedGlyphRenderRequest(ctx, requests);
        // sort requests by lineNumber ASC, lane  ASC, zIndex DESC, type DESC (widgets first), className ASC
        // don't change this sort unless you understand `prepareRender` below.
        requests.sort((a, b) => {
            if (a.lineNumber === b.lineNumber) {
                if (a.laneIndex === b.laneIndex) {
                    if (a.zIndex === b.zIndex) {
                        if (b.type === a.type) {
                            if (a.type === 0 /* GlyphRenderRequestType.Decoration */ && b.type === 0 /* GlyphRenderRequestType.Decoration */) {
                                return (a.className < b.className ? -1 : 1);
                            }
                            return 0;
                        }
                        return b.type - a.type;
                    }
                    return b.zIndex - a.zIndex;
                }
                return a.laneIndex - b.laneIndex;
            }
            return a.lineNumber - b.lineNumber;
        });
        return requests;
    }
    /**
     * Will store render information in each widget's renderInfo and in `_decorationGlyphsToRender`.
     */
    prepareRender(ctx) {
        if (!this._glyphMargin) {
            this._decorationGlyphsToRender = [];
            return;
        }
        for (const widget of Object.values(this._widgets)) {
            widget.renderInfo = null;
        }
        const requests = new ArrayQueue(this._collectSortedGlyphRenderRequests(ctx));
        const decorationGlyphsToRender = [];
        while (requests.length > 0) {
            const first = requests.peek();
            if (!first) {
                // not possible
                break;
            }
            // Requests are sorted by lineNumber and lane, so we read all requests for this particular location
            const requestsAtLocation = requests.takeWhile((el) => el.lineNumber === first.lineNumber && el.laneIndex === first.laneIndex);
            if (!requestsAtLocation || requestsAtLocation.length === 0) {
                // not possible
                break;
            }
            const winner = requestsAtLocation[0];
            if (winner.type === 0 /* GlyphRenderRequestType.Decoration */) {
                // combine all decorations with the same z-index
                const classNames = [];
                // requests are sorted by zIndex, type, and className so we can dedup className by looking at the previous one
                for (const request of requestsAtLocation) {
                    if (request.zIndex !== winner.zIndex || request.type !== winner.type) {
                        break;
                    }
                    if (classNames.length === 0 || classNames[classNames.length - 1] !== request.className) {
                        classNames.push(request.className);
                    }
                }
                decorationGlyphsToRender.push(winner.accept(classNames.join(' '))); // TODO@joyceerhl Implement overflow for remaining decorations
            }
            else {
                // widgets cannot be combined
                winner.widget.renderInfo = {
                    lineNumber: winner.lineNumber,
                    laneIndex: winner.laneIndex,
                };
            }
        }
        this._decorationGlyphsToRender = decorationGlyphsToRender;
    }
    render(ctx) {
        if (!this._glyphMargin) {
            for (const widget of Object.values(this._widgets)) {
                widget.domNode.setDisplay('none');
            }
            while (this._managedDomNodes.length > 0) {
                const domNode = this._managedDomNodes.pop();
                domNode?.domNode.remove();
            }
            return;
        }
        const width = (Math.round(this._glyphMarginWidth / this._glyphMarginDecorationLaneCount));
        // Render widgets
        for (const widget of Object.values(this._widgets)) {
            if (!widget.renderInfo) {
                // this widget is not visible
                widget.domNode.setDisplay('none');
            }
            else {
                const top = ctx.viewportData.relativeVerticalOffset[widget.renderInfo.lineNumber - ctx.viewportData.startLineNumber];
                const left = this._glyphMarginLeft + widget.renderInfo.laneIndex * this._lineHeight;
                widget.domNode.setDisplay('block');
                widget.domNode.setTop(top);
                widget.domNode.setLeft(left);
                widget.domNode.setWidth(width);
                widget.domNode.setHeight(this._lineHeight);
            }
        }
        // Render decorations, reusing previous dom nodes as possible
        for (let i = 0; i < this._decorationGlyphsToRender.length; i++) {
            const dec = this._decorationGlyphsToRender[i];
            const decLineNumber = dec.lineNumber;
            const top = ctx.viewportData.relativeVerticalOffset[decLineNumber - ctx.viewportData.startLineNumber];
            const left = this._glyphMarginLeft + dec.laneIndex * this._lineHeight;
            let domNode;
            if (i < this._managedDomNodes.length) {
                domNode = this._managedDomNodes[i];
            }
            else {
                domNode = createFastDomNode(document.createElement('div'));
                this._managedDomNodes.push(domNode);
                this.domNode.appendChild(domNode);
            }
            const lineHeight = this._context.viewLayout.getLineHeightForLineNumber(decLineNumber);
            domNode.setClassName(`cgmr codicon ` + dec.combinedClassName);
            domNode.setPosition(`absolute`);
            domNode.setTop(top);
            domNode.setLeft(left);
            domNode.setWidth(width);
            domNode.setHeight(lineHeight);
        }
        // remove extra dom nodes
        while (this._managedDomNodes.length > this._decorationGlyphsToRender.length) {
            const domNode = this._managedDomNodes.pop();
            domNode?.domNode.remove();
        }
    }
}
/**
 * A request to render a decoration in the glyph margin at a certain location.
 */
class DecorationBasedGlyphRenderRequest {
    constructor(lineNumber, laneIndex, zIndex, className) {
        this.lineNumber = lineNumber;
        this.laneIndex = laneIndex;
        this.zIndex = zIndex;
        this.className = className;
        this.type = 0 /* GlyphRenderRequestType.Decoration */;
    }
    accept(combinedClassName) {
        return new DecorationBasedGlyph(this.lineNumber, this.laneIndex, combinedClassName);
    }
}
/**
 * A request to render a widget in the glyph margin at a certain location.
 */
class WidgetBasedGlyphRenderRequest {
    constructor(lineNumber, laneIndex, zIndex, widget) {
        this.lineNumber = lineNumber;
        this.laneIndex = laneIndex;
        this.zIndex = zIndex;
        this.widget = widget;
        this.type = 1 /* GlyphRenderRequestType.Widget */;
    }
}
class DecorationBasedGlyph {
    constructor(lineNumber, laneIndex, combinedClassName) {
        this.lineNumber = lineNumber;
        this.laneIndex = laneIndex;
        this.combinedClassName = combinedClassName;
    }
}

export { DecorationToRender, DedupOverlay, GlyphMarginWidgets, LineDecorationToRender, VisibleLineDecorationsToRender };
