import { removeCSSRulesContainingSelector, createCSSRule } from '../../../../base/browser/domStylesheets.js';
import { Sash } from '../../../../base/browser/ui/sash/sash.js';
import { Color, RGBA } from '../../../../base/common/color.js';
import { IdGenerator } from '../../../../base/common/idGenerator.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { deepClone, mixin } from '../../../../base/common/objects.js';
import './zoneWidget.css';
import { Range } from '../../../common/core/range.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';

const defaultColor = new Color(new RGBA(0, 122, 204));
const defaultOptions = {
    showArrow: true,
    showFrame: true,
    className: '',
    frameColor: defaultColor,
    arrowColor: defaultColor,
    keepEditorSelection: false
};
const WIDGET_ID = 'vs.editor.contrib.zoneWidget';
class ViewZoneDelegate {
    constructor(domNode, afterLineNumber, afterColumn, heightInLines, onDomNodeTop, onComputedHeight, showInHiddenAreas, ordinal) {
        this.id = ''; // A valid zone id should be greater than 0
        this.domNode = domNode;
        this.afterLineNumber = afterLineNumber;
        this.afterColumn = afterColumn;
        this.heightInLines = heightInLines;
        this.showInHiddenAreas = showInHiddenAreas;
        this.ordinal = ordinal;
        this._onDomNodeTop = onDomNodeTop;
        this._onComputedHeight = onComputedHeight;
    }
    onDomNodeTop(top) {
        this._onDomNodeTop(top);
    }
    onComputedHeight(height) {
        this._onComputedHeight(height);
    }
}
class OverlayWidgetDelegate {
    constructor(id, domNode) {
        this._id = id;
        this._domNode = domNode;
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return null;
    }
}
class Arrow {
    static { this._IdGenerator = new IdGenerator('.arrow-decoration-'); }
    constructor(_editor) {
        this._editor = _editor;
        this._ruleName = Arrow._IdGenerator.nextId();
        this._color = null;
        this._height = -1;
        this._decorations = this._editor.createDecorationsCollection();
    }
    dispose() {
        this.hide();
        removeCSSRulesContainingSelector(this._ruleName);
    }
    set color(value) {
        if (this._color !== value) {
            this._color = value;
            this._updateStyle();
        }
    }
    set height(value) {
        if (this._height !== value) {
            this._height = value;
            this._updateStyle();
        }
    }
    _updateStyle() {
        removeCSSRulesContainingSelector(this._ruleName);
        createCSSRule(`.monaco-editor ${this._ruleName}`, `border-style: solid; border-color: transparent; border-bottom-color: ${this._color}; border-width: ${this._height}px; bottom: -${this._height}px !important; margin-left: -${this._height}px; `);
    }
    show(where) {
        if (where.column === 1) {
            // the arrow isn't pretty at column 1 and we need to push it out a little
            where = { lineNumber: where.lineNumber, column: 2 };
        }
        this._decorations.set([{
                range: Range.fromPositions(where),
                options: {
                    description: 'zone-widget-arrow',
                    className: this._ruleName,
                    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
                }
            }]);
    }
    hide() {
        this._decorations.clear();
    }
}
class ZoneWidget {
    constructor(editor, options = {}) {
        this._arrow = null;
        this._overlayWidget = null;
        this._resizeSash = null;
        this._isSashResizeHeight = false;
        this._viewZone = null;
        this._disposables = new DisposableStore();
        this.container = null;
        this._isShowing = false;
        this.editor = editor;
        this._positionMarkerId = this.editor.createDecorationsCollection();
        this.options = deepClone(options);
        mixin(this.options, defaultOptions, false);
        this.domNode = document.createElement('div');
        if (!this.options.isAccessible) {
            this.domNode.setAttribute('aria-hidden', 'true');
            this.domNode.setAttribute('role', 'presentation');
        }
        this._disposables.add(this.editor.onDidLayoutChange((info) => {
            const width = this._getWidth(info);
            this.domNode.style.width = width + 'px';
            this.domNode.style.left = this._getLeft(info) + 'px';
            this._onWidth(width);
        }));
    }
    dispose() {
        if (this._overlayWidget) {
            this.editor.removeOverlayWidget(this._overlayWidget);
            this._overlayWidget = null;
        }
        if (this._viewZone) {
            this.editor.changeViewZones(accessor => {
                if (this._viewZone) {
                    accessor.removeZone(this._viewZone.id);
                }
                this._viewZone = null;
            });
        }
        this._positionMarkerId.clear();
        this._disposables.dispose();
    }
    create() {
        this.domNode.classList.add('zone-widget');
        if (this.options.className) {
            this.domNode.classList.add(this.options.className);
        }
        this.container = document.createElement('div');
        this.container.classList.add('zone-widget-container');
        this.domNode.appendChild(this.container);
        if (this.options.showArrow) {
            this._arrow = new Arrow(this.editor);
            this._disposables.add(this._arrow);
        }
        this._fillContainer(this.container);
        this._initSash();
        this._applyStyles();
    }
    style(styles) {
        if (styles.frameColor) {
            this.options.frameColor = styles.frameColor;
        }
        if (styles.arrowColor) {
            this.options.arrowColor = styles.arrowColor;
        }
        this._applyStyles();
    }
    _applyStyles() {
        if (this.container && this.options.frameColor) {
            const frameColor = this.options.frameColor.toString();
            this.container.style.borderTopColor = frameColor;
            this.container.style.borderBottomColor = frameColor;
        }
        if (this._arrow && this.options.arrowColor) {
            const arrowColor = this.options.arrowColor.toString();
            this._arrow.color = arrowColor;
        }
    }
    _getWidth(info) {
        return info.width - info.minimap.minimapWidth - info.verticalScrollbarWidth;
    }
    _getLeft(info) {
        // If minimap is to the left, we move beyond it
        if (info.minimap.minimapWidth > 0 && info.minimap.minimapLeft === 0) {
            return info.minimap.minimapWidth;
        }
        return 0;
    }
    _onViewZoneTop(top) {
        this.domNode.style.top = top + 'px';
    }
    _onViewZoneHeight(height) {
        this.domNode.style.height = `${height}px`;
        if (this.container) {
            const containerHeight = height - this._decoratingElementsHeight();
            this.container.style.height = `${containerHeight}px`;
            const layoutInfo = this.editor.getLayoutInfo();
            this._doLayout(containerHeight, this._getWidth(layoutInfo));
        }
        this._resizeSash?.layout();
    }
    get position() {
        const range = this._positionMarkerId.getRange(0);
        if (!range) {
            return undefined;
        }
        return range.getStartPosition();
    }
    show(rangeOrPos, heightInLines) {
        const range = Range.isIRange(rangeOrPos) ? Range.lift(rangeOrPos) : Range.fromPositions(rangeOrPos);
        this._isShowing = true;
        this._showImpl(range, heightInLines);
        this._isShowing = false;
        this._positionMarkerId.set([{ range, options: ModelDecorationOptions.EMPTY }]);
    }
    hide() {
        if (this._viewZone) {
            this.editor.changeViewZones(accessor => {
                if (this._viewZone) {
                    accessor.removeZone(this._viewZone.id);
                }
            });
            this._viewZone = null;
        }
        if (this._overlayWidget) {
            this.editor.removeOverlayWidget(this._overlayWidget);
            this._overlayWidget = null;
        }
        this._arrow?.hide();
        this._positionMarkerId.clear();
        this._isSashResizeHeight = false;
    }
    _decoratingElementsHeight() {
        const lineHeight = this.editor.getOption(75 /* EditorOption.lineHeight */);
        let result = 0;
        if (this.options.showArrow) {
            const arrowHeight = Math.round(lineHeight / 3);
            result += 2 * arrowHeight;
        }
        if (this.options.showFrame) {
            const frameThickness = this.options.frameWidth ?? Math.round(lineHeight / 9);
            result += 2 * frameThickness;
        }
        return result;
    }
    /** Gets the maximum widget height in lines. */
    _getMaximumHeightInLines() {
        return Math.max(12, (this.editor.getLayoutInfo().height / this.editor.getOption(75 /* EditorOption.lineHeight */)) * 0.8);
    }
    _showImpl(where, heightInLines) {
        const position = where.getStartPosition();
        const layoutInfo = this.editor.getLayoutInfo();
        const width = this._getWidth(layoutInfo);
        this.domNode.style.width = `${width}px`;
        this.domNode.style.left = this._getLeft(layoutInfo) + 'px';
        // Render the widget as zone (rendering) and widget (lifecycle)
        const viewZoneDomNode = document.createElement('div');
        viewZoneDomNode.style.overflow = 'hidden';
        const lineHeight = this.editor.getOption(75 /* EditorOption.lineHeight */);
        // adjust heightInLines to viewport
        const maxHeightInLines = this._getMaximumHeightInLines();
        if (maxHeightInLines !== undefined) {
            heightInLines = Math.min(heightInLines, maxHeightInLines);
        }
        let arrowHeight = 0;
        let frameThickness = 0;
        // Render the arrow one 1/3 of an editor line height
        if (this._arrow && this.options.showArrow) {
            arrowHeight = Math.round(lineHeight / 3);
            this._arrow.height = arrowHeight;
            this._arrow.show(position);
        }
        // Render the frame as 1/9 of an editor line height
        if (this.options.showFrame) {
            frameThickness = Math.round(lineHeight / 9);
        }
        // insert zone widget
        this.editor.changeViewZones((accessor) => {
            if (this._viewZone) {
                accessor.removeZone(this._viewZone.id);
            }
            if (this._overlayWidget) {
                this.editor.removeOverlayWidget(this._overlayWidget);
                this._overlayWidget = null;
            }
            this.domNode.style.top = '-1000px';
            this._viewZone = new ViewZoneDelegate(viewZoneDomNode, position.lineNumber, position.column, heightInLines, (top) => this._onViewZoneTop(top), (height) => this._onViewZoneHeight(height), this.options.showInHiddenAreas, this.options.ordinal);
            this._viewZone.id = accessor.addZone(this._viewZone);
            this._overlayWidget = new OverlayWidgetDelegate(WIDGET_ID + this._viewZone.id, this.domNode);
            this.editor.addOverlayWidget(this._overlayWidget);
        });
        this._updateSashEnablement();
        if (this.container && this.options.showFrame) {
            const width = this.options.frameWidth ? this.options.frameWidth : frameThickness;
            this.container.style.borderTopWidth = width + 'px';
            this.container.style.borderBottomWidth = width + 'px';
        }
        const containerHeight = heightInLines * lineHeight - this._decoratingElementsHeight();
        if (this.container) {
            this.container.style.top = arrowHeight + 'px';
            this.container.style.height = containerHeight + 'px';
            this.container.style.overflow = 'hidden';
        }
        this._doLayout(containerHeight, width);
        if (!this.options.keepEditorSelection) {
            this.editor.setSelection(where);
        }
        const model = this.editor.getModel();
        if (model) {
            const range = model.validateRange(new Range(where.startLineNumber, 1, where.endLineNumber + 1, 1));
            this.revealRange(range, range.startLineNumber === model.getLineCount());
        }
    }
    revealRange(range, isLastLine) {
        if (isLastLine) {
            this.editor.revealLineNearTop(range.endLineNumber, 0 /* ScrollType.Smooth */);
        }
        else {
            this.editor.revealRange(range, 0 /* ScrollType.Smooth */);
        }
    }
    setCssClass(className, classToReplace) {
        if (!this.container) {
            return;
        }
        if (classToReplace) {
            this.container.classList.remove(classToReplace);
        }
        this.container.classList.add(className);
    }
    _onWidth(widthInPixel) {
        // implement in subclass
    }
    _doLayout(heightInPixel, widthInPixel) {
        // implement in subclass
    }
    _relayout(_newHeightInLines, useMax) {
        const maxHeightInLines = this._getMaximumHeightInLines();
        const newHeightInLines = (useMax && (maxHeightInLines !== undefined)) ? Math.min(maxHeightInLines, _newHeightInLines) : _newHeightInLines;
        if (this._viewZone && this._viewZone.heightInLines !== newHeightInLines) {
            this.editor.changeViewZones(accessor => {
                if (this._viewZone) {
                    this._viewZone.heightInLines = newHeightInLines;
                    accessor.layoutZone(this._viewZone.id);
                }
            });
            this._updateSashEnablement();
        }
    }
    // --- sash
    _initSash() {
        if (this._resizeSash) {
            return;
        }
        this._resizeSash = this._disposables.add(new Sash(this.domNode, this, { orientation: 1 /* Orientation.HORIZONTAL */ }));
        if (!this.options.isResizeable) {
            this._resizeSash.state = 0 /* SashState.Disabled */;
        }
        let data;
        this._disposables.add(this._resizeSash.onDidStart((e) => {
            if (this._viewZone) {
                data = {
                    startY: e.startY,
                    heightInLines: this._viewZone.heightInLines,
                    ...this._getResizeBounds()
                };
            }
        }));
        this._disposables.add(this._resizeSash.onDidEnd(() => {
            data = undefined;
        }));
        this._disposables.add(this._resizeSash.onDidChange((evt) => {
            if (data) {
                const lineDelta = (evt.currentY - data.startY) / this.editor.getOption(75 /* EditorOption.lineHeight */);
                const roundedLineDelta = lineDelta < 0 ? Math.ceil(lineDelta) : Math.floor(lineDelta);
                const newHeightInLines = data.heightInLines + roundedLineDelta;
                if (newHeightInLines > data.minLines && newHeightInLines < data.maxLines) {
                    this._isSashResizeHeight = true;
                    this._relayout(newHeightInLines);
                }
            }
        }));
    }
    _updateSashEnablement() {
        if (this._resizeSash) {
            const { minLines, maxLines } = this._getResizeBounds();
            this._resizeSash.state = minLines === maxLines ? 0 /* SashState.Disabled */ : 3 /* SashState.Enabled */;
        }
    }
    _getResizeBounds() {
        return { minLines: 5, maxLines: 35 };
    }
    getHorizontalSashLeft() {
        return 0;
    }
    getHorizontalSashTop() {
        return (this.domNode.style.height === null ? 0 : parseInt(this.domNode.style.height)) - (this._decoratingElementsHeight() / 2);
    }
    getHorizontalSashWidth() {
        const layoutInfo = this.editor.getLayoutInfo();
        return layoutInfo.width - layoutInfo.minimap.minimapWidth;
    }
}

export { OverlayWidgetDelegate, ZoneWidget };
