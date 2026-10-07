import { getDomNodePagePosition, getClientArea } from '../../../../base/browser/dom.js';
import { createFastDomNode } from '../../../../base/browser/fastDomNode.js';
import { ViewPart, PartFingerprints } from '../../view/viewPart.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * This view part is responsible for rendering the content widgets, which are
 * used for rendering elements that are associated to an editor position,
 * such as suggestions or the parameter hints.
 */
class ViewContentWidgets extends ViewPart {
    constructor(context, viewDomNode) {
        super(context);
        this._viewDomNode = viewDomNode;
        this._widgets = {};
        this.domNode = createFastDomNode(document.createElement('div'));
        PartFingerprints.write(this.domNode, 1 /* PartFingerprint.ContentWidgets */);
        this.domNode.setClassName('contentWidgets');
        this.domNode.setPosition('absolute');
        this.domNode.setTop(0);
        this.overflowingContentWidgetsDomNode = createFastDomNode(document.createElement('div'));
        PartFingerprints.write(this.overflowingContentWidgetsDomNode, 2 /* PartFingerprint.OverflowingContentWidgets */);
        this.overflowingContentWidgetsDomNode.setClassName('overflowingContentWidgets');
    }
    dispose() {
        super.dispose();
        this._widgets = {};
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const keys = Object.keys(this._widgets);
        for (const widgetId of keys) {
            this._widgets[widgetId].onConfigurationChanged(e);
        }
        return true;
    }
    onDecorationsChanged(e) {
        // true for inline decorations that can end up relayouting text
        return true;
    }
    onFlushed(e) {
        return true;
    }
    onLineMappingChanged(e) {
        this._updateAnchorsViewPositions();
        return true;
    }
    onLinesChanged(e) {
        this._updateAnchorsViewPositions();
        return true;
    }
    onLinesDeleted(e) {
        this._updateAnchorsViewPositions();
        return true;
    }
    onLinesInserted(e) {
        this._updateAnchorsViewPositions();
        return true;
    }
    onScrollChanged(e) {
        return true;
    }
    onZonesChanged(e) {
        return true;
    }
    // ---- end view event handlers
    _updateAnchorsViewPositions() {
        const keys = Object.keys(this._widgets);
        for (const widgetId of keys) {
            this._widgets[widgetId].updateAnchorViewPosition();
        }
    }
    addWidget(_widget) {
        const myWidget = new Widget(this._context, this._viewDomNode, _widget);
        this._widgets[myWidget.id] = myWidget;
        if (myWidget.allowEditorOverflow) {
            this.overflowingContentWidgetsDomNode.appendChild(myWidget.domNode);
        }
        else {
            this.domNode.appendChild(myWidget.domNode);
        }
        this.setShouldRender();
    }
    setWidgetPosition(widget, primaryAnchor, secondaryAnchor, preference, affinity) {
        const myWidget = this._widgets[widget.getId()];
        myWidget.setPosition(primaryAnchor, secondaryAnchor, preference, affinity);
        this.setShouldRender();
    }
    removeWidget(widget) {
        const widgetId = widget.getId();
        if (this._widgets.hasOwnProperty(widgetId)) {
            const myWidget = this._widgets[widgetId];
            delete this._widgets[widgetId];
            const domNode = myWidget.domNode.domNode;
            domNode.remove();
            domNode.removeAttribute('monaco-visible-content-widget');
            this.setShouldRender();
        }
    }
    shouldSuppressMouseDownOnWidget(widgetId) {
        if (this._widgets.hasOwnProperty(widgetId)) {
            return this._widgets[widgetId].suppressMouseDown;
        }
        return false;
    }
    onBeforeRender(viewportData) {
        const keys = Object.keys(this._widgets);
        for (const widgetId of keys) {
            this._widgets[widgetId].onBeforeRender(viewportData);
        }
    }
    prepareRender(ctx) {
        const keys = Object.keys(this._widgets);
        for (const widgetId of keys) {
            this._widgets[widgetId].prepareRender(ctx);
        }
    }
    render(ctx) {
        const keys = Object.keys(this._widgets);
        for (const widgetId of keys) {
            this._widgets[widgetId].render(ctx);
        }
    }
}
class Widget {
    constructor(context, viewDomNode, actual) {
        this._primaryAnchor = new PositionPair(null, null);
        this._secondaryAnchor = new PositionPair(null, null);
        this._context = context;
        this._viewDomNode = viewDomNode;
        this._actual = actual;
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        const allowOverflow = options.get(4 /* EditorOption.allowOverflow */);
        this.domNode = createFastDomNode(this._actual.getDomNode());
        this.id = this._actual.getId();
        this.allowEditorOverflow = (this._actual.allowEditorOverflow || false) && allowOverflow;
        this.suppressMouseDown = this._actual.suppressMouseDown || false;
        this._fixedOverflowWidgets = options.get(51 /* EditorOption.fixedOverflowWidgets */);
        this._contentWidth = layoutInfo.contentWidth;
        this._contentLeft = layoutInfo.contentLeft;
        this._affinity = null;
        this._preference = [];
        this._cachedDomNodeOffsetWidth = -1;
        this._cachedDomNodeOffsetHeight = -1;
        this._maxWidth = this._getMaxWidth();
        this._isVisible = false;
        this._renderData = null;
        this.domNode.setPosition((this._fixedOverflowWidgets && this.allowEditorOverflow) ? 'fixed' : 'absolute');
        this.domNode.setDisplay('none');
        this.domNode.setVisibility('hidden');
        this.domNode.setAttribute('widgetId', this.id);
        this.domNode.setMaxWidth(this._maxWidth);
    }
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        if (e.hasChanged(165 /* EditorOption.layoutInfo */)) {
            const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
            this._contentLeft = layoutInfo.contentLeft;
            this._contentWidth = layoutInfo.contentWidth;
            this._maxWidth = this._getMaxWidth();
        }
    }
    updateAnchorViewPosition() {
        this._setPosition(this._affinity, this._primaryAnchor.modelPosition, this._secondaryAnchor.modelPosition);
    }
    _setPosition(affinity, primaryAnchor, secondaryAnchor) {
        this._affinity = affinity;
        this._primaryAnchor = getValidPositionPair(primaryAnchor, this._context.viewModel, this._affinity);
        this._secondaryAnchor = getValidPositionPair(secondaryAnchor, this._context.viewModel, this._affinity);
        function getValidPositionPair(position, viewModel, affinity) {
            if (!position) {
                return new PositionPair(null, null);
            }
            // Do not trust that widgets give a valid position
            const validModelPosition = viewModel.model.validatePosition(position);
            if (viewModel.coordinatesConverter.modelPositionIsVisible(validModelPosition)) {
                const viewPosition = viewModel.coordinatesConverter.convertModelPositionToViewPosition(validModelPosition, affinity ?? undefined);
                return new PositionPair(position, viewPosition);
            }
            return new PositionPair(position, null);
        }
    }
    _getMaxWidth() {
        const elDocument = this.domNode.domNode.ownerDocument;
        const elWindow = elDocument.defaultView;
        return (this.allowEditorOverflow
            ? elWindow?.innerWidth || elDocument.documentElement.offsetWidth || elDocument.body.offsetWidth
            : this._contentWidth);
    }
    setPosition(primaryAnchor, secondaryAnchor, preference, affinity) {
        this._setPosition(affinity, primaryAnchor, secondaryAnchor);
        this._preference = preference;
        if (this._primaryAnchor.viewPosition && this._preference && this._preference.length > 0) {
            // this content widget would like to be visible if possible
            // we change it from `display:none` to `display:block` even if it
            // might be outside the viewport such that we can measure its size
            // in `prepareRender`
            this.domNode.setDisplay('block');
        }
        else {
            this.domNode.setDisplay('none');
        }
        this._cachedDomNodeOffsetWidth = -1;
        this._cachedDomNodeOffsetHeight = -1;
    }
    _layoutBoxInViewport(anchor, width, height, ctx) {
        // Our visible box is split horizontally by the current line => 2 boxes
        // a) the box above the line
        const aboveLineTop = anchor.top;
        const heightAvailableAboveLine = aboveLineTop;
        // b) the box under the line
        const underLineTop = anchor.top + anchor.height;
        const heightAvailableUnderLine = ctx.viewportHeight - underLineTop;
        const aboveTop = aboveLineTop - height;
        const fitsAbove = (heightAvailableAboveLine >= height);
        const belowTop = underLineTop;
        const fitsBelow = (heightAvailableUnderLine >= height);
        // And its left
        let left = anchor.left;
        if (left + width > ctx.scrollLeft + ctx.viewportWidth) {
            left = ctx.scrollLeft + ctx.viewportWidth - width;
        }
        if (left < ctx.scrollLeft) {
            left = ctx.scrollLeft;
        }
        return { fitsAbove, aboveTop, fitsBelow, belowTop, left };
    }
    _layoutHorizontalSegmentInPage(windowSize, domNodePosition, left, width) {
        // Leave some clearance to the left/right
        const LEFT_PADDING = 15;
        const RIGHT_PADDING = 15;
        // Initially, the limits are defined as the dom node limits
        const MIN_LIMIT = Math.max(LEFT_PADDING, domNodePosition.left - width);
        const MAX_LIMIT = Math.min(domNodePosition.left + domNodePosition.width + width, windowSize.width - RIGHT_PADDING);
        const elDocument = this._viewDomNode.domNode.ownerDocument;
        const elWindow = elDocument.defaultView;
        let absoluteLeft = domNodePosition.left + left - (elWindow?.scrollX ?? 0);
        if (absoluteLeft + width > MAX_LIMIT) {
            const delta = absoluteLeft - (MAX_LIMIT - width);
            absoluteLeft -= delta;
            left -= delta;
        }
        if (absoluteLeft < MIN_LIMIT) {
            const delta = absoluteLeft - MIN_LIMIT;
            absoluteLeft -= delta;
            left -= delta;
        }
        return [left, absoluteLeft];
    }
    _layoutBoxInPage(anchor, width, height, ctx) {
        const aboveTop = anchor.top - height;
        const belowTop = anchor.top + anchor.height;
        const domNodePosition = getDomNodePagePosition(this._viewDomNode.domNode);
        const elDocument = this._viewDomNode.domNode.ownerDocument;
        const elWindow = elDocument.defaultView;
        const absoluteAboveTop = domNodePosition.top + aboveTop - (elWindow?.scrollY ?? 0);
        const absoluteBelowTop = domNodePosition.top + belowTop - (elWindow?.scrollY ?? 0);
        const windowSize = getClientArea(elDocument.body);
        const [left, absoluteAboveLeft] = this._layoutHorizontalSegmentInPage(windowSize, domNodePosition, anchor.left - ctx.scrollLeft + this._contentLeft, width);
        // Leave some clearance to the top/bottom
        const TOP_PADDING = 22;
        const BOTTOM_PADDING = 22;
        const fitsAbove = (absoluteAboveTop >= TOP_PADDING);
        const fitsBelow = (absoluteBelowTop + height <= windowSize.height - BOTTOM_PADDING);
        if (this._fixedOverflowWidgets) {
            return {
                fitsAbove,
                aboveTop: Math.max(absoluteAboveTop, TOP_PADDING),
                fitsBelow,
                belowTop: absoluteBelowTop,
                left: absoluteAboveLeft
            };
        }
        return { fitsAbove, aboveTop, fitsBelow, belowTop, left };
    }
    _prepareRenderWidgetAtExactPositionOverflowing(topLeft) {
        return new Coordinate(topLeft.top, topLeft.left + this._contentLeft);
    }
    /**
     * Compute the coordinates above and below the primary and secondary anchors.
     * The content widget *must* touch the primary anchor.
     * The content widget should touch if possible the secondary anchor.
     */
    _getAnchorsCoordinates(ctx) {
        const primary = getCoordinates(this._primaryAnchor.viewPosition, this._affinity);
        const secondaryViewPosition = (this._secondaryAnchor.viewPosition?.lineNumber === this._primaryAnchor.viewPosition?.lineNumber ? this._secondaryAnchor.viewPosition : null);
        const secondary = getCoordinates(secondaryViewPosition, this._affinity);
        return { primary, secondary };
        function getCoordinates(position, affinity) {
            if (!position) {
                return null;
            }
            const horizontalPosition = ctx.visibleRangeForPosition(position);
            if (!horizontalPosition) {
                return null;
            }
            // Left-align widgets that should appear :before content
            const left = (position.column === 1 && affinity === 3 /* PositionAffinity.LeftOfInjectedText */ ? 0 : horizontalPosition.left);
            const top = ctx.getVerticalOffsetForLineNumber(position.lineNumber) - ctx.scrollTop;
            const lineHeight = ctx.getLineHeightForLineNumber(position.lineNumber);
            return new AnchorCoordinate(top, left, lineHeight);
        }
    }
    _reduceAnchorCoordinates(primary, secondary, width) {
        if (!secondary) {
            return primary;
        }
        const fontInfo = this._context.configuration.options.get(59 /* EditorOption.fontInfo */);
        let left = secondary.left;
        if (left < primary.left) {
            left = Math.max(left, primary.left - width + fontInfo.typicalFullwidthCharacterWidth);
        }
        else {
            left = Math.min(left, primary.left + width - fontInfo.typicalFullwidthCharacterWidth);
        }
        return new AnchorCoordinate(primary.top, left, primary.height);
    }
    _prepareRenderWidget(ctx) {
        if (!this._preference || this._preference.length === 0) {
            return null;
        }
        const { primary, secondary } = this._getAnchorsCoordinates(ctx);
        if (!primary) {
            return {
                kind: 'offViewport',
                preserveFocus: this.domNode.domNode.contains(this.domNode.domNode.ownerDocument.activeElement)
            };
            // return null;
        }
        if (this._cachedDomNodeOffsetWidth === -1 || this._cachedDomNodeOffsetHeight === -1) {
            let preferredDimensions = null;
            if (typeof this._actual.beforeRender === 'function') {
                preferredDimensions = safeInvoke(this._actual.beforeRender, this._actual);
            }
            if (preferredDimensions) {
                this._cachedDomNodeOffsetWidth = preferredDimensions.width;
                this._cachedDomNodeOffsetHeight = preferredDimensions.height;
            }
            else {
                const domNode = this.domNode.domNode;
                const clientRect = domNode.getBoundingClientRect();
                this._cachedDomNodeOffsetWidth = Math.round(clientRect.width);
                this._cachedDomNodeOffsetHeight = Math.round(clientRect.height);
            }
        }
        const anchor = this._reduceAnchorCoordinates(primary, secondary, this._cachedDomNodeOffsetWidth);
        let placement;
        if (this.allowEditorOverflow) {
            placement = this._layoutBoxInPage(anchor, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, ctx);
        }
        else {
            placement = this._layoutBoxInViewport(anchor, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, ctx);
        }
        // Do two passes, first for perfect fit, second picks first option
        for (let pass = 1; pass <= 2; pass++) {
            for (const pref of this._preference) {
                // placement
                if (pref === 1 /* ContentWidgetPositionPreference.ABOVE */) {
                    if (!placement) {
                        // Widget outside of viewport
                        return null;
                    }
                    if (pass === 2 || placement.fitsAbove) {
                        return {
                            kind: 'inViewport',
                            coordinate: new Coordinate(placement.aboveTop, placement.left),
                            position: 1 /* ContentWidgetPositionPreference.ABOVE */
                        };
                    }
                }
                else if (pref === 2 /* ContentWidgetPositionPreference.BELOW */) {
                    if (!placement) {
                        // Widget outside of viewport
                        return null;
                    }
                    if (pass === 2 || placement.fitsBelow) {
                        return {
                            kind: 'inViewport',
                            coordinate: new Coordinate(placement.belowTop, placement.left),
                            position: 2 /* ContentWidgetPositionPreference.BELOW */
                        };
                    }
                }
                else {
                    if (this.allowEditorOverflow) {
                        return {
                            kind: 'inViewport',
                            coordinate: this._prepareRenderWidgetAtExactPositionOverflowing(new Coordinate(anchor.top, anchor.left)),
                            position: 0 /* ContentWidgetPositionPreference.EXACT */
                        };
                    }
                    else {
                        return {
                            kind: 'inViewport',
                            coordinate: new Coordinate(anchor.top, anchor.left),
                            position: 0 /* ContentWidgetPositionPreference.EXACT */
                        };
                    }
                }
            }
        }
        return null;
    }
    /**
     * On this first pass, we ensure that the content widget (if it is in the viewport) has the max width set correctly.
     */
    onBeforeRender(viewportData) {
        if (!this._primaryAnchor.viewPosition || !this._preference) {
            return;
        }
        if (this._primaryAnchor.viewPosition.lineNumber < viewportData.startLineNumber || this._primaryAnchor.viewPosition.lineNumber > viewportData.endLineNumber) {
            // Outside of viewport
            return;
        }
        this.domNode.setMaxWidth(this._maxWidth);
    }
    prepareRender(ctx) {
        this._renderData = this._prepareRenderWidget(ctx);
    }
    render(ctx) {
        if (!this._renderData || this._renderData.kind === 'offViewport') {
            // This widget should be invisible
            if (this._isVisible) {
                this.domNode.removeAttribute('monaco-visible-content-widget');
                this._isVisible = false;
                if (this._renderData?.kind === 'offViewport' && this._renderData.preserveFocus) {
                    // widget wants to be shown, but it is outside of the viewport and it
                    // has focus which we need to preserve
                    this.domNode.setTop(-1e3);
                }
                else {
                    this.domNode.setVisibility('hidden');
                }
            }
            if (typeof this._actual.afterRender === 'function') {
                safeInvoke(this._actual.afterRender, this._actual, null, null);
            }
            return;
        }
        // This widget should be visible
        if (this.allowEditorOverflow) {
            this.domNode.setTop(this._renderData.coordinate.top);
            this.domNode.setLeft(this._renderData.coordinate.left);
        }
        else {
            this.domNode.setTop(this._renderData.coordinate.top + ctx.scrollTop - ctx.bigNumbersDelta);
            this.domNode.setLeft(this._renderData.coordinate.left);
        }
        if (!this._isVisible) {
            this.domNode.setVisibility('inherit');
            this.domNode.setAttribute('monaco-visible-content-widget', 'true');
            this._isVisible = true;
        }
        if (typeof this._actual.afterRender === 'function') {
            safeInvoke(this._actual.afterRender, this._actual, this._renderData.position, this._renderData.coordinate);
        }
    }
}
class PositionPair {
    constructor(modelPosition, viewPosition) {
        this.modelPosition = modelPosition;
        this.viewPosition = viewPosition;
    }
}
class Coordinate {
    constructor(top, left) {
        this.top = top;
        this.left = left;
        this._coordinateBrand = undefined;
    }
}
class AnchorCoordinate {
    constructor(top, left, height) {
        this.top = top;
        this.left = left;
        this.height = height;
        this._anchorCoordinateBrand = undefined;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeInvoke(fn, thisArg, ...args) {
    try {
        return fn.call(thisArg, ...args);
    }
    catch {
        // ignore
        return null;
    }
}

export { ViewContentWidgets };
