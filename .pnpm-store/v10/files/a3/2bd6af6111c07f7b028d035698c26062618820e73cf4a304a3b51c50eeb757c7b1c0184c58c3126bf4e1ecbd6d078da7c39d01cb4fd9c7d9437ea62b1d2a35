import { append, $, EventType, addDisposableListener, EventHelper, isMouseEvent } from '../../dom.js';
import { StandardKeyboardEvent } from '../../keyboardEvent.js';
import { EventType as EventType$1, Gesture } from '../../touch.js';
import { ActionRunner } from '../../../common/actions.js';
import { Emitter } from '../../../common/event.js';
import './dropdown.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class BaseDropdown extends ActionRunner {
    constructor(container, options) {
        super();
        this._onDidChangeVisibility = this._register(new Emitter());
        this.onDidChangeVisibility = this._onDidChangeVisibility.event;
        this._element = append(container, $('.monaco-dropdown'));
        this._label = append(this._element, $('.dropdown-label'));
        let labelRenderer = options.labelRenderer;
        if (!labelRenderer) {
            labelRenderer = (container) => {
                container.textContent = options.label || '';
                return null;
            };
        }
        for (const event of [EventType.CLICK, EventType.MOUSE_DOWN, EventType$1.Tap]) {
            this._register(addDisposableListener(this.element, event, e => EventHelper.stop(e, true))); // prevent default click behaviour to trigger
        }
        for (const event of [EventType.MOUSE_DOWN, EventType$1.Tap]) {
            this._register(addDisposableListener(this._label, event, e => {
                if (isMouseEvent(e) && e.button !== 0) {
                    // prevent right click trigger to allow separate context menu (https://github.com/microsoft/vscode/issues/151064)
                    return;
                }
                if (this.visible) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }));
        }
        this._register(addDisposableListener(this._label, EventType.KEY_DOWN, e => {
            const event = new StandardKeyboardEvent(e);
            if (event.equals(3 /* KeyCode.Enter */) || event.equals(10 /* KeyCode.Space */)) {
                EventHelper.stop(e, true); // https://github.com/microsoft/vscode/issues/57997
                if (this.visible) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }
        }));
        const cleanupFn = labelRenderer(this._label);
        if (cleanupFn) {
            this._register(cleanupFn);
        }
        this._register(Gesture.addTarget(this._label));
    }
    get element() {
        return this._element;
    }
    show() {
        if (!this.visible) {
            this.visible = true;
            this._onDidChangeVisibility.fire(true);
        }
    }
    hide() {
        if (this.visible) {
            this.visible = false;
            this._onDidChangeVisibility.fire(false);
        }
    }
    dispose() {
        super.dispose();
        this.hide();
        if (this.boxContainer) {
            this.boxContainer.remove();
            this.boxContainer = undefined;
        }
        if (this.contents) {
            this.contents.remove();
            this.contents = undefined;
        }
        if (this._label) {
            this._label.remove();
            this._label = undefined;
        }
    }
}
class DropdownMenu extends BaseDropdown {
    constructor(container, _options) {
        super(container, _options);
        this._options = _options;
        this._actions = [];
        this.actions = _options.actions || [];
    }
    set menuOptions(options) {
        this._menuOptions = options;
    }
    get menuOptions() {
        return this._menuOptions;
    }
    get actions() {
        if (this._options.actionProvider) {
            return this._options.actionProvider.getActions();
        }
        return this._actions;
    }
    set actions(actions) {
        this._actions = actions;
    }
    show() {
        super.show();
        this.element.classList.add('active');
        this._options.contextMenuProvider.showContextMenu({
            getAnchor: () => this.element,
            getActions: () => this.actions,
            getActionsContext: () => this.menuOptions ? this.menuOptions.context : null,
            getActionViewItem: (action, options) => this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(action, options) : undefined,
            getKeyBinding: action => this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(action) : undefined,
            getMenuClassName: () => this._options.menuClassName || '',
            onHide: () => this.onHide(),
            actionRunner: this.menuOptions ? this.menuOptions.actionRunner : undefined,
            anchorAlignment: this.menuOptions ? this.menuOptions.anchorAlignment : 0 /* AnchorAlignment.LEFT */,
            domForShadowRoot: this._options.menuAsChild ? this.element : undefined,
            skipTelemetry: this._options.skipTelemetry
        });
    }
    hide() {
        super.hide();
    }
    onHide() {
        this.hide();
        this.element.classList.remove('active');
    }
}

export { BaseDropdown, DropdownMenu };
