import { range } from '../../../common/arrays.js';
import { CancellationTokenSource } from '../../../common/cancellation.js';
import { Event } from '../../../common/event.js';
import { DisposableStore, Disposable } from '../../../common/lifecycle.js';
import './list.css';
import { List } from './listWidget.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class PagedRenderer {
    get templateId() { return this.renderer.templateId; }
    constructor(renderer, modelProvider) {
        this.renderer = renderer;
        this.modelProvider = modelProvider;
    }
    renderTemplate(container) {
        const data = this.renderer.renderTemplate(container);
        return { data, disposable: Disposable.None };
    }
    renderElement(index, _, data, details) {
        data.disposable?.dispose();
        if (!data.data) {
            return;
        }
        const model = this.modelProvider();
        if (model.isResolved(index)) {
            return this.renderer.renderElement(model.get(index), index, data.data, details);
        }
        const cts = new CancellationTokenSource();
        const promise = model.resolve(index, cts.token);
        data.disposable = { dispose: () => cts.cancel() };
        this.renderer.renderPlaceholder(index, data.data);
        promise.then(entry => this.renderer.renderElement(entry, index, data.data, details));
    }
    disposeTemplate(data) {
        if (data.disposable) {
            data.disposable.dispose();
            data.disposable = undefined;
        }
        if (data.data) {
            this.renderer.disposeTemplate(data.data);
            data.data = undefined;
        }
    }
}
class PagedAccessibilityProvider {
    constructor(modelProvider, accessibilityProvider) {
        this.modelProvider = modelProvider;
        this.accessibilityProvider = accessibilityProvider;
    }
    getWidgetAriaLabel() {
        return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(index) {
        const model = this.modelProvider();
        if (!model.isResolved(index)) {
            return null;
        }
        return this.accessibilityProvider.getAriaLabel(model.get(index));
    }
}
function fromPagedListOptions(modelProvider, options) {
    return {
        ...options,
        accessibilityProvider: options.accessibilityProvider && new PagedAccessibilityProvider(modelProvider, options.accessibilityProvider)
    };
}
class PagedList {
    constructor(user, container, virtualDelegate, renderers, options = {}) {
        this.modelDisposables = new DisposableStore();
        const modelProvider = () => this.model;
        const pagedRenderers = renderers.map(r => new PagedRenderer(r, modelProvider));
        this.list = new List(user, container, virtualDelegate, pagedRenderers, fromPagedListOptions(modelProvider, options));
    }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    getHTMLElement() {
        return this.list.getHTMLElement();
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get widget() {
        return this.list;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    get onMouseDblClick() {
        return Event.map(this.list.onMouseDblClick, ({ element, index, browserEvent }) => ({ element: element === undefined ? undefined : this._model.get(element), index, browserEvent }));
    }
    get onPointer() {
        return Event.map(this.list.onPointer, ({ element, index, browserEvent }) => ({ element: element === undefined ? undefined : this._model.get(element), index, browserEvent }));
    }
    get onDidChangeSelection() {
        return Event.map(this.list.onDidChangeSelection, ({ elements, indexes, browserEvent }) => ({ elements: elements.map(e => this._model.get(e)), indexes, browserEvent }));
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this.modelDisposables.clear();
        this._model = model;
        this.list.splice(0, this.list.length, range(model.length));
        this.modelDisposables.add(model.onDidIncrementLength(newLength => this.list.splice(this.list.length, 0, range(this.list.length, newLength))));
    }
    getFocus() {
        return this.list.getFocus();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getSelectedElements() {
        return this.getSelection().map(i => this.model.get(i));
    }
    style(styles) {
        this.list.style(styles);
    }
    dispose() {
        this.list.dispose();
        this.modelDisposables.dispose();
    }
}

export { PagedList };
