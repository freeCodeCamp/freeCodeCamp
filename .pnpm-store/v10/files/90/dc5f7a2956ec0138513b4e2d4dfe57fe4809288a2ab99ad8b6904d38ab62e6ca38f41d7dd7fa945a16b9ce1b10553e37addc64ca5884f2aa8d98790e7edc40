import { addStandardDisposableListener, $ as $$1, append, getDomNodePagePosition } from '../../../../base/browser/dom.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { IMarkdownRendererService } from '../../../../platform/markdown/browser/markdownRenderer.js';
import { HoverOperation } from './hoverOperation.js';
import { HoverWidget } from '../../../../base/browser/ui/hover/hoverWidget.js';
import { GlyphHoverComputer } from './glyphHoverComputer.js';
import { isMousePositionWithinElement } from './hoverUtils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GlyphHoverWidget_1;
const $ = $$1;
let GlyphHoverWidget = class GlyphHoverWidget extends Disposable {
    static { GlyphHoverWidget_1 = this; }
    static { this.ID = 'editor.contrib.modesGlyphHoverWidget'; }
    constructor(editor, _markdownRendererService) {
        super();
        this._markdownRendererService = _markdownRendererService;
        this.allowEditorOverflow = true;
        this._renderDisposeables = this._register(new DisposableStore());
        this._editor = editor;
        this._isVisible = false;
        this._messages = [];
        this._hover = this._register(new HoverWidget(true));
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        this._hoverOperation = this._register(new HoverOperation(this._editor, new GlyphHoverComputer(this._editor)));
        this._register(this._hoverOperation.onResult((result) => this._withResult(result)));
        this._register(this._editor.onDidChangeModelDecorations(() => this._onModelDecorationsChanged()));
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(59 /* EditorOption.fontInfo */)) {
                this._updateFont();
            }
        }));
        this._register(addStandardDisposableListener(this._hover.containerDomNode, 'mouseleave', (e) => {
            this._onMouseLeave(e);
        }));
        this._editor.addOverlayWidget(this);
    }
    dispose() {
        this._hoverComputerOptions = undefined;
        this._editor.removeOverlayWidget(this);
        super.dispose();
    }
    getId() {
        return GlyphHoverWidget_1.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        return null;
    }
    _updateFont() {
        // eslint-disable-next-line no-restricted-syntax
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach(node => this._editor.applyFontInfo(node));
    }
    _onModelDecorationsChanged() {
        if (this._isVisible && this._hoverComputerOptions) {
            // The decorations have changed and the hover is visible,
            // we need to recompute the displayed text
            this._hoverOperation.cancel();
            this._hoverOperation.start(0 /* HoverStartMode.Delayed */, this._hoverComputerOptions);
        }
    }
    showsOrWillShow(mouseEvent) {
        const target = mouseEvent.target;
        if (target.type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */ && target.detail.glyphMarginLane) {
            this._startShowingAt(target.position.lineNumber, target.detail.glyphMarginLane);
            return true;
        }
        if (target.type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */) {
            this._startShowingAt(target.position.lineNumber, 'lineNo');
            return true;
        }
        return false;
    }
    _startShowingAt(lineNumber, laneOrLine) {
        if (this._hoverComputerOptions
            && this._hoverComputerOptions.lineNumber === lineNumber
            && this._hoverComputerOptions.laneOrLine === laneOrLine) {
            // We have to show the widget at the exact same line number as before, so no work is needed
            return;
        }
        this._hoverOperation.cancel();
        this.hide();
        this._hoverComputerOptions = { lineNumber, laneOrLine };
        this._hoverOperation.start(0 /* HoverStartMode.Delayed */, this._hoverComputerOptions);
    }
    hide() {
        this._hoverComputerOptions = undefined;
        this._hoverOperation.cancel();
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
    }
    _withResult(result) {
        this._messages = result.value;
        if (this._messages.length > 0) {
            this._renderMessages(result.options.lineNumber, result.options.laneOrLine, this._messages);
        }
        else {
            this.hide();
        }
    }
    _renderMessages(lineNumber, laneOrLine, messages) {
        this._renderDisposeables.clear();
        const fragment = document.createDocumentFragment();
        for (const msg of messages) {
            const markdownHoverElement = $('div.hover-row.markdown-hover');
            const hoverContentsElement = append(markdownHoverElement, $('div.hover-contents'));
            const renderedContents = this._renderDisposeables.add(this._markdownRendererService.render(msg.value, { context: this._editor }));
            hoverContentsElement.appendChild(renderedContents.element);
            fragment.appendChild(markdownHoverElement);
        }
        this._updateContents(fragment);
        this._showAt(lineNumber, laneOrLine);
    }
    _updateContents(node) {
        this._hover.contentsDomNode.textContent = '';
        this._hover.contentsDomNode.appendChild(node);
        this._updateFont();
    }
    _showAt(lineNumber, laneOrLine) {
        if (!this._isVisible) {
            this._isVisible = true;
            this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        }
        const editorLayout = this._editor.getLayoutInfo();
        const topForLineNumber = this._editor.getTopForLineNumber(lineNumber);
        const editorScrollTop = this._editor.getScrollTop();
        const lineHeight = this._editor.getOption(75 /* EditorOption.lineHeight */);
        const nodeHeight = this._hover.containerDomNode.clientHeight;
        const top = topForLineNumber - editorScrollTop - ((nodeHeight - lineHeight) / 2);
        const left = editorLayout.glyphMarginLeft + editorLayout.glyphMarginWidth + (laneOrLine === 'lineNo' ? editorLayout.lineNumbersWidth : 0);
        // Constrain the hover widget to stay within the editor bounds
        const editorHeight = editorLayout.height;
        const maxTop = editorHeight - nodeHeight;
        const constrainedTop = Math.max(0, Math.min(Math.round(top), maxTop));
        const fixedOverflowWidgets = this._editor.getOption(51 /* EditorOption.fixedOverflowWidgets */);
        if (fixedOverflowWidgets) {
            // Use fixed positioning relative to the viewport
            const editorDomNode = this._editor.getDomNode();
            if (editorDomNode) {
                const editorRect = getDomNodePagePosition(editorDomNode);
                this._hover.containerDomNode.style.position = 'fixed';
                this._hover.containerDomNode.style.left = `${editorRect.left + left}px`;
                this._hover.containerDomNode.style.top = `${editorRect.top + constrainedTop}px`;
            }
        }
        else {
            // Use absolute positioning relative to the editor
            this._hover.containerDomNode.style.position = 'absolute';
            this._hover.containerDomNode.style.left = `${left}px`;
            this._hover.containerDomNode.style.top = `${constrainedTop}px`;
        }
        this._hover.containerDomNode.style.zIndex = '11'; // 1 more than the zone widget at 10 (#233819)
    }
    _onMouseLeave(e) {
        const editorDomNode = this._editor.getDomNode();
        const isMousePositionOutsideOfEditor = !editorDomNode || !isMousePositionWithinElement(editorDomNode, e.x, e.y);
        if (isMousePositionOutsideOfEditor) {
            this.hide();
        }
    }
};
GlyphHoverWidget = GlyphHoverWidget_1 = __decorate([
    __param(1, IMarkdownRendererService)
], GlyphHoverWidget);

export { GlyphHoverWidget };
