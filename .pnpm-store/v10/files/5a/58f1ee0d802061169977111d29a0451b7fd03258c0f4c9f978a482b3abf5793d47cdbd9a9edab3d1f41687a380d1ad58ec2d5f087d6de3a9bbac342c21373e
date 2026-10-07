import { createFastDomNode } from '../../../base/browser/fastDomNode.js';
import { applyFontInfo } from '../config/domFontInfo.js';
import { VisibleLinesCollection } from './viewLayer.js';
import { ViewPart } from './viewPart.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewOverlays extends ViewPart {
    constructor(context) {
        super(context);
        this._dynamicOverlays = [];
        this._isFocused = false;
        this._visibleLines = new VisibleLinesCollection(this._context, {
            createLine: () => new ViewOverlayLine(this._dynamicOverlays)
        });
        this.domNode = this._visibleLines.domNode;
        const options = this._context.configuration.options;
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        applyFontInfo(this.domNode, fontInfo);
        this.domNode.setClassName('view-overlays');
    }
    shouldRender() {
        if (super.shouldRender()) {
            return true;
        }
        for (let i = 0, len = this._dynamicOverlays.length; i < len; i++) {
            const dynamicOverlay = this._dynamicOverlays[i];
            if (dynamicOverlay.shouldRender()) {
                return true;
            }
        }
        return false;
    }
    dispose() {
        super.dispose();
        for (let i = 0, len = this._dynamicOverlays.length; i < len; i++) {
            const dynamicOverlay = this._dynamicOverlays[i];
            dynamicOverlay.dispose();
        }
        this._dynamicOverlays = [];
    }
    getDomNode() {
        return this.domNode;
    }
    addDynamicOverlay(overlay) {
        this._dynamicOverlays.push(overlay);
    }
    // ----- event handlers
    onConfigurationChanged(e) {
        this._visibleLines.onConfigurationChanged(e);
        const options = this._context.configuration.options;
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        applyFontInfo(this.domNode, fontInfo);
        return true;
    }
    onFlushed(e) {
        return this._visibleLines.onFlushed(e);
    }
    onFocusChanged(e) {
        this._isFocused = e.isFocused;
        return true;
    }
    onLinesChanged(e) {
        return this._visibleLines.onLinesChanged(e);
    }
    onLinesDeleted(e) {
        return this._visibleLines.onLinesDeleted(e);
    }
    onLinesInserted(e) {
        return this._visibleLines.onLinesInserted(e);
    }
    onScrollChanged(e) {
        return this._visibleLines.onScrollChanged(e) || true;
    }
    onTokensChanged(e) {
        return this._visibleLines.onTokensChanged(e);
    }
    onZonesChanged(e) {
        return this._visibleLines.onZonesChanged(e);
    }
    // ----- end event handlers
    prepareRender(ctx) {
        const toRender = this._dynamicOverlays.filter(overlay => overlay.shouldRender());
        for (let i = 0, len = toRender.length; i < len; i++) {
            const dynamicOverlay = toRender[i];
            dynamicOverlay.prepareRender(ctx);
            dynamicOverlay.onDidRender();
        }
    }
    render(ctx) {
        // Overwriting to bypass `shouldRender` flag
        this._viewOverlaysRender(ctx);
        this.domNode.toggleClassName('focused', this._isFocused);
    }
    _viewOverlaysRender(ctx) {
        this._visibleLines.renderLines(ctx.viewportData);
    }
}
class ViewOverlayLine {
    constructor(dynamicOverlays) {
        this._dynamicOverlays = dynamicOverlays;
        this._domNode = null;
        this._renderedContent = null;
    }
    getDomNode() {
        if (!this._domNode) {
            return null;
        }
        return this._domNode.domNode;
    }
    setDomNode(domNode) {
        this._domNode = createFastDomNode(domNode);
    }
    onContentChanged() {
        // Nothing
    }
    onTokensChanged() {
        // Nothing
    }
    renderLine(lineNumber, deltaTop, lineHeight, viewportData, sb) {
        let result = '';
        for (let i = 0, len = this._dynamicOverlays.length; i < len; i++) {
            const dynamicOverlay = this._dynamicOverlays[i];
            result += dynamicOverlay.render(viewportData.startLineNumber, lineNumber);
        }
        if (this._renderedContent === result) {
            // No rendering needed
            return false;
        }
        this._renderedContent = result;
        sb.appendString('<div style="top:');
        sb.appendString(String(deltaTop));
        sb.appendString('px;height:');
        sb.appendString(String(lineHeight));
        sb.appendString('px;line-height:');
        sb.appendString(String(lineHeight));
        sb.appendString('px;">');
        sb.appendString(result);
        sb.appendString('</div>');
        return true;
    }
    layoutLine(lineNumber, deltaTop, lineHeight) {
        if (this._domNode) {
            this._domNode.setTop(deltaTop);
            this._domNode.setHeight(lineHeight);
            this._domNode.setLineHeight(lineHeight);
        }
    }
}
class ContentViewOverlays extends ViewOverlays {
    constructor(context) {
        super(context);
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._contentWidth = layoutInfo.contentWidth;
        this.domNode.setHeight(0);
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._contentWidth = layoutInfo.contentWidth;
        return super.onConfigurationChanged(e) || true;
    }
    onScrollChanged(e) {
        return super.onScrollChanged(e) || e.scrollWidthChanged;
    }
    // --- end event handlers
    _viewOverlaysRender(ctx) {
        super._viewOverlaysRender(ctx);
        this.domNode.setWidth(Math.max(ctx.scrollWidth, this._contentWidth));
    }
}
class MarginViewOverlays extends ViewOverlays {
    constructor(context) {
        super(context);
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._contentLeft = layoutInfo.contentLeft;
        this.domNode.setClassName('margin-view-overlays');
        this.domNode.setWidth(1);
        applyFontInfo(this.domNode, options.get(59 /* EditorOption.fontInfo */));
    }
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        applyFontInfo(this.domNode, options.get(59 /* EditorOption.fontInfo */));
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._contentLeft = layoutInfo.contentLeft;
        return super.onConfigurationChanged(e) || true;
    }
    onScrollChanged(e) {
        return super.onScrollChanged(e) || e.scrollHeightChanged;
    }
    _viewOverlaysRender(ctx) {
        super._viewOverlaysRender(ctx);
        const height = Math.min(ctx.scrollHeight, 1000000);
        this.domNode.setHeight(height);
        this.domNode.setWidth(this._contentLeft);
    }
}

export { ContentViewOverlays, MarginViewOverlays, ViewOverlayLine, ViewOverlays };
