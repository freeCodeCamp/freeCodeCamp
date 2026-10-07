import { append, $, clearNode } from '../../dom.js';
import { createStyleSheet } from '../../domStylesheets.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';
import { getDefaultHoverDelegate } from '../hover/hoverDelegateFactory.js';
import { List, unthemedListStyles } from '../list/listWidget.js';
import { SplitView } from '../splitview/splitview.js';
import { Event, Emitter } from '../../../common/event.js';
import { DisposableStore, Disposable } from '../../../common/lifecycle.js';
import './table.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TableListRenderer {
    static { this.TemplateId = 'row'; }
    constructor(columns, renderers, getColumnSize) {
        this.columns = columns;
        this.getColumnSize = getColumnSize;
        this.templateId = TableListRenderer.TemplateId;
        this.renderedTemplates = new Set();
        const rendererMap = new Map(renderers.map(r => [r.templateId, r]));
        this.renderers = [];
        for (const column of columns) {
            const renderer = rendererMap.get(column.templateId);
            if (!renderer) {
                throw new Error(`Table cell renderer for template id ${column.templateId} not found.`);
            }
            this.renderers.push(renderer);
        }
    }
    renderTemplate(container) {
        const rowContainer = append(container, $('.monaco-table-tr'));
        const cellContainers = [];
        const cellTemplateData = [];
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            const cellContainer = append(rowContainer, $('.monaco-table-td', { 'data-col-index': i }));
            cellContainer.style.width = `${this.getColumnSize(i)}px`;
            cellContainers.push(cellContainer);
            cellTemplateData.push(renderer.renderTemplate(cellContainer));
        }
        const result = { container, cellContainers, cellTemplateData };
        this.renderedTemplates.add(result);
        return result;
    }
    renderElement(element, index, templateData, renderDetails) {
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            const cell = column.project(element);
            const renderer = this.renderers[i];
            renderer.renderElement(cell, index, templateData.cellTemplateData[i], renderDetails);
        }
    }
    disposeElement(element, index, templateData, renderDetails) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            if (renderer.disposeElement) {
                const column = this.columns[i];
                const cell = column.project(element);
                renderer.disposeElement(cell, index, templateData.cellTemplateData[i], renderDetails);
            }
        }
    }
    disposeTemplate(templateData) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            renderer.disposeTemplate(templateData.cellTemplateData[i]);
        }
        clearNode(templateData.container);
        this.renderedTemplates.delete(templateData);
    }
    layoutColumn(index, size) {
        for (const { cellContainers } of this.renderedTemplates) {
            cellContainers[index].style.width = `${size}px`;
        }
    }
}
function asListVirtualDelegate(delegate) {
    return {
        getHeight(row) { return delegate.getHeight(row); },
        getTemplateId() { return TableListRenderer.TemplateId; },
    };
}
class ColumnHeader extends Disposable {
    get minimumSize() { return this.column.minimumWidth ?? 120; }
    get maximumSize() { return this.column.maximumWidth ?? Number.POSITIVE_INFINITY; }
    get onDidChange() { return this.column.onDidChangeWidthConstraints ?? Event.None; }
    constructor(column, index) {
        super();
        this.column = column;
        this.index = index;
        this._onDidLayout = new Emitter();
        this.onDidLayout = this._onDidLayout.event;
        this.element = $('.monaco-table-th', { 'data-col-index': index }, column.label);
        if (column.tooltip) {
            this._register(getBaseLayerHoverDelegate().setupManagedHover(getDefaultHoverDelegate('mouse'), this.element, column.tooltip));
        }
    }
    layout(size) {
        this._onDidLayout.fire([this.index, size]);
    }
}
class Table {
    static { this.InstanceCount = 0; }
    get onDidChangeFocus() { return this.list.onDidChangeFocus; }
    get onDidChangeSelection() { return this.list.onDidChangeSelection; }
    get onDidScroll() { return this.list.onDidScroll; }
    get onMouseDblClick() { return this.list.onMouseDblClick; }
    get onPointer() { return this.list.onPointer; }
    get onDidFocus() { return this.list.onDidFocus; }
    get scrollTop() { return this.list.scrollTop; }
    set scrollTop(scrollTop) { this.list.scrollTop = scrollTop; }
    get scrollHeight() { return this.list.scrollHeight; }
    get renderHeight() { return this.list.renderHeight; }
    get onDidDispose() { return this.list.onDidDispose; }
    constructor(user, container, virtualDelegate, columns, renderers, _options) {
        this.virtualDelegate = virtualDelegate;
        this.columns = columns;
        this.domId = `table_id_${++Table.InstanceCount}`;
        this.disposables = new DisposableStore();
        this.cachedWidth = 0;
        this.cachedHeight = 0;
        this.domNode = append(container, $(`.monaco-table.${this.domId}`));
        const headers = columns.map((c, i) => this.disposables.add(new ColumnHeader(c, i)));
        const descriptor = {
            size: headers.reduce((a, b) => a + b.column.weight, 0),
            views: headers.map(view => ({ size: view.column.weight, view }))
        };
        this.splitview = this.disposables.add(new SplitView(this.domNode, {
            orientation: 1 /* Orientation.HORIZONTAL */,
            scrollbarVisibility: 2 /* ScrollbarVisibility.Hidden */,
            getSashOrthogonalSize: () => this.cachedHeight,
            descriptor
        }));
        this.splitview.el.style.height = `${virtualDelegate.headerRowHeight}px`;
        this.splitview.el.style.lineHeight = `${virtualDelegate.headerRowHeight}px`;
        const renderer = new TableListRenderer(columns, renderers, i => this.splitview.getViewSize(i));
        this.list = this.disposables.add(new List(user, this.domNode, asListVirtualDelegate(virtualDelegate), [renderer], _options));
        Event.any(...headers.map(h => h.onDidLayout))(([index, size]) => renderer.layoutColumn(index, size), null, this.disposables);
        this.splitview.onDidSashReset(index => {
            const totalWeight = columns.reduce((r, c) => r + c.weight, 0);
            const size = columns[index].weight / totalWeight * this.cachedWidth;
            this.splitview.resizeView(index, size);
        }, null, this.disposables);
        this.styleElement = createStyleSheet(this.domNode);
        this.style(unthemedListStyles);
    }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    splice(start, deleteCount, elements = []) {
        this.list.splice(start, deleteCount, elements);
    }
    getHTMLElement() {
        return this.domNode;
    }
    style(styles) {
        const content = [];
        content.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight + 1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`);
        this.styleElement.textContent = content.join('\n');
        this.list.style(styles);
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getFocus() {
        return this.list.getFocus();
    }
    dispose() {
        this.disposables.dispose();
    }
}

export { Table };
