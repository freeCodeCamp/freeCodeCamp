import { $, reset } from '../../../../base/browser/dom.js';
import { renderLabelWithIcons } from '../../../../base/browser/ui/iconLabel/iconLabels.js';
import './codelensWidget.css';
import { Range } from '../../../common/core/range.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CodeLensViewZone {
    constructor(afterLineNumber, heightInPx, onHeight) {
        /**
         * We want that this view zone, which reserves space for a code lens appears
         * as close as possible to the next line, so we use a very large value here.
         */
        this.afterColumn = 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */;
        this.afterLineNumber = afterLineNumber;
        this.heightInPx = heightInPx;
        this._onHeight = onHeight;
        this.suppressMouseDown = true;
        this.domNode = document.createElement('div');
    }
    onComputedHeight(height) {
        if (this._lastHeight === undefined) {
            this._lastHeight = height;
        }
        else if (this._lastHeight !== height) {
            this._lastHeight = height;
            this._onHeight();
        }
    }
    isVisible() {
        return this._lastHeight !== 0
            && this.domNode.hasAttribute('monaco-visible-view-zone');
    }
}
class CodeLensContentWidget {
    static { this._idPool = 0; }
    constructor(editor, line) {
        // Editor.IContentWidget.allowEditorOverflow
        this.allowEditorOverflow = false;
        this.suppressMouseDown = true;
        this._commands = new Map();
        this._isEmpty = true;
        this._editor = editor;
        this._id = `codelens.widget-${(CodeLensContentWidget._idPool++)}`;
        this.updatePosition(line);
        this._domNode = document.createElement('span');
        this._domNode.className = `codelens-decoration`;
    }
    withCommands(lenses, animate) {
        this._commands.clear();
        const children = [];
        let hasSymbol = false;
        for (let i = 0; i < lenses.length; i++) {
            const lens = lenses[i];
            if (!lens) {
                continue;
            }
            hasSymbol = true;
            if (lens.command) {
                const title = renderLabelWithIcons(lens.command.title.trim());
                if (lens.command.id) {
                    const id = `c${(CodeLensContentWidget._idPool++)}`;
                    children.push($('a', { id, title: lens.command.tooltip, role: 'button' }, ...title));
                    this._commands.set(id, lens.command);
                }
                else {
                    children.push($('span', { title: lens.command.tooltip }, ...title));
                }
                if (i + 1 < lenses.length) {
                    children.push($('span', undefined, '\u00a0|\u00a0'));
                }
            }
        }
        if (!hasSymbol) {
            // symbols but no commands
            reset(this._domNode, $('span', undefined, 'no commands'));
        }
        else {
            // symbols and commands
            reset(this._domNode, ...children);
            if (this._isEmpty && animate) {
                this._domNode.classList.add('fadein');
            }
            this._isEmpty = false;
        }
    }
    getCommand(link) {
        return link.parentElement === this._domNode
            ? this._commands.get(link.id)
            : undefined;
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._domNode;
    }
    updatePosition(line) {
        const column = this._editor.getModel().getLineFirstNonWhitespaceColumn(line);
        this._widgetPosition = {
            position: { lineNumber: line, column: column },
            preference: [1 /* ContentWidgetPositionPreference.ABOVE */]
        };
    }
    getPosition() {
        return this._widgetPosition || null;
    }
}
class CodeLensHelper {
    constructor() {
        this._removeDecorations = [];
        this._addDecorations = [];
        this._addDecorationsCallbacks = [];
    }
    addDecoration(decoration, callback) {
        this._addDecorations.push(decoration);
        this._addDecorationsCallbacks.push(callback);
    }
    removeDecoration(decorationId) {
        this._removeDecorations.push(decorationId);
    }
    commit(changeAccessor) {
        const resultingDecorations = changeAccessor.deltaDecorations(this._removeDecorations, this._addDecorations);
        for (let i = 0, len = resultingDecorations.length; i < len; i++) {
            this._addDecorationsCallbacks[i](resultingDecorations[i]);
        }
    }
}
const codeLensDecorationOptions = ModelDecorationOptions.register({
    collapseOnReplaceEdit: true,
    description: 'codelens'
});
class CodeLensWidget {
    constructor(data, editor, helper, viewZoneChangeAccessor, heightInPx, updateCallback) {
        this._isDisposed = false;
        this._editor = editor;
        this._data = data;
        // create combined range, track all ranges with decorations,
        // check if there is already something to render
        this._decorationIds = [];
        let range;
        const lenses = [];
        this._data.forEach((codeLensData, i) => {
            if (codeLensData.symbol.command) {
                lenses.push(codeLensData.symbol);
            }
            helper.addDecoration({
                range: codeLensData.symbol.range,
                options: codeLensDecorationOptions
            }, id => this._decorationIds[i] = id);
            // the range contains all lenses on this line
            if (!range) {
                range = Range.lift(codeLensData.symbol.range);
            }
            else {
                range = Range.plusRange(range, codeLensData.symbol.range);
            }
        });
        this._viewZone = new CodeLensViewZone(range.startLineNumber - 1, heightInPx, updateCallback);
        this._viewZoneId = viewZoneChangeAccessor.addZone(this._viewZone);
        if (lenses.length > 0) {
            this._createContentWidgetIfNecessary();
            this._contentWidget.withCommands(lenses, false);
        }
    }
    _createContentWidgetIfNecessary() {
        if (!this._contentWidget) {
            this._contentWidget = new CodeLensContentWidget(this._editor, this._viewZone.afterLineNumber + 1);
            this._editor.addContentWidget(this._contentWidget);
        }
        else {
            this._editor.layoutContentWidget(this._contentWidget);
        }
    }
    dispose(helper, viewZoneChangeAccessor) {
        this._decorationIds.forEach(helper.removeDecoration, helper);
        this._decorationIds = [];
        viewZoneChangeAccessor?.removeZone(this._viewZoneId);
        if (this._contentWidget) {
            this._editor.removeContentWidget(this._contentWidget);
            this._contentWidget = undefined;
        }
        this._isDisposed = true;
    }
    isDisposed() {
        return this._isDisposed;
    }
    isValid() {
        return this._decorationIds.some((id, i) => {
            const range = this._editor.getModel().getDecorationRange(id);
            const symbol = this._data[i].symbol;
            return !!(range && Range.isEmpty(symbol.range) === range.isEmpty());
        });
    }
    updateCodeLensSymbols(data, helper) {
        this._decorationIds.forEach(helper.removeDecoration, helper);
        this._decorationIds = [];
        this._data = data;
        this._data.forEach((codeLensData, i) => {
            helper.addDecoration({
                range: codeLensData.symbol.range,
                options: codeLensDecorationOptions
            }, id => this._decorationIds[i] = id);
        });
    }
    updateHeight(height, viewZoneChangeAccessor) {
        this._viewZone.heightInPx = height;
        viewZoneChangeAccessor.layoutZone(this._viewZoneId);
        if (this._contentWidget) {
            this._editor.layoutContentWidget(this._contentWidget);
        }
    }
    computeIfNecessary(model) {
        if (!this._viewZone.isVisible()) {
            return null;
        }
        // Read editor current state
        for (let i = 0; i < this._decorationIds.length; i++) {
            const range = model.getDecorationRange(this._decorationIds[i]);
            if (range) {
                this._data[i].symbol.range = range;
            }
        }
        return this._data;
    }
    updateCommands(symbols) {
        this._createContentWidgetIfNecessary();
        this._contentWidget.withCommands(symbols, true);
        for (let i = 0; i < this._data.length; i++) {
            const resolved = symbols[i];
            if (resolved) {
                const { symbol } = this._data[i];
                symbol.command = resolved.command || symbol.command;
            }
        }
    }
    getCommand(link) {
        return this._contentWidget?.getCommand(link);
    }
    getLineNumber() {
        const range = this._editor.getModel().getDecorationRange(this._decorationIds[0]);
        if (range) {
            return range.startLineNumber;
        }
        return -1;
    }
    update(viewZoneChangeAccessor) {
        if (this.isValid()) {
            const range = this._editor.getModel().getDecorationRange(this._decorationIds[0]);
            if (range) {
                this._viewZone.afterLineNumber = range.startLineNumber - 1;
                viewZoneChangeAccessor.layoutZone(this._viewZoneId);
                if (this._contentWidget) {
                    this._contentWidget.updatePosition(range.startLineNumber);
                    this._editor.layoutContentWidget(this._contentWidget);
                }
            }
        }
    }
}

export { CodeLensHelper, CodeLensWidget };
