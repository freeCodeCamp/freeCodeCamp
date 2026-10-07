import { Emitter } from './event.js';
import { Disposable } from './lifecycle.js';
import { localize } from '../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A concrete implementation of {@link IAction}.
 *
 * Note that in most cases you should use the lighter-weight {@linkcode toAction} function instead.
 */
class Action extends Disposable {
    get onDidChange() { return this._onDidChange.event; }
    constructor(id, label = '', cssClass = '', enabled = true, actionCallback) {
        super();
        this._onDidChange = this._register(new Emitter());
        this._enabled = true;
        this._id = id;
        this._label = label;
        this._cssClass = cssClass;
        this._enabled = enabled;
        this._actionCallback = actionCallback;
    }
    get id() {
        return this._id;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._setLabel(value);
    }
    _setLabel(value) {
        if (this._label !== value) {
            this._label = value;
            this._onDidChange.fire({ label: value });
        }
    }
    get tooltip() {
        return this._tooltip || '';
    }
    set tooltip(value) {
        this._setTooltip(value);
    }
    _setTooltip(value) {
        if (this._tooltip !== value) {
            this._tooltip = value;
            this._onDidChange.fire({ tooltip: value });
        }
    }
    get class() {
        return this._cssClass;
    }
    set class(value) {
        this._setClass(value);
    }
    _setClass(value) {
        if (this._cssClass !== value) {
            this._cssClass = value;
            this._onDidChange.fire({ class: value });
        }
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._setEnabled(value);
    }
    _setEnabled(value) {
        if (this._enabled !== value) {
            this._enabled = value;
            this._onDidChange.fire({ enabled: value });
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._setChecked(value);
    }
    _setChecked(value) {
        if (this._checked !== value) {
            this._checked = value;
            this._onDidChange.fire({ checked: value });
        }
    }
    async run(event, data) {
        if (this._actionCallback) {
            await this._actionCallback(event);
        }
    }
}
class ActionRunner extends Disposable {
    constructor() {
        super(...arguments);
        this._onWillRun = this._register(new Emitter());
        this._onDidRun = this._register(new Emitter());
    }
    get onWillRun() { return this._onWillRun.event; }
    get onDidRun() { return this._onDidRun.event; }
    async run(action, context) {
        if (!action.enabled) {
            return;
        }
        this._onWillRun.fire({ action });
        let error = undefined;
        try {
            await this.runAction(action, context);
        }
        catch (e) {
            error = e;
        }
        this._onDidRun.fire({ action, error });
    }
    async runAction(action, context) {
        await action.run(context);
    }
}
class Separator {
    constructor() {
        this.id = Separator.ID;
        this.label = '';
        this.tooltip = '';
        this.class = 'separator';
        this.enabled = false;
        this.checked = false;
    }
    /**
     * Joins all non-empty lists of actions with separators.
     */
    static join(...actionLists) {
        let out = [];
        for (const list of actionLists) {
            if (!list.length) ;
            else if (out.length) {
                out = [...out, new Separator(), ...list];
            }
            else {
                out = list;
            }
        }
        return out;
    }
    static { this.ID = 'vs.actions.separator'; }
    async run() { }
}
class SubmenuAction {
    get actions() { return this._actions; }
    constructor(id, label, actions, cssClass) {
        this.tooltip = '';
        this.enabled = true;
        this.checked = undefined;
        this.id = id;
        this.label = label;
        this.class = cssClass;
        this._actions = actions;
    }
    async run() { }
}
class EmptySubmenuAction extends Action {
    static { this.ID = 'vs.actions.empty'; }
    constructor() {
        super(EmptySubmenuAction.ID, localize(28, '(empty)'), undefined, false);
    }
}
function toAction(props) {
    return {
        id: props.id,
        label: props.label,
        tooltip: props.tooltip ?? props.label,
        class: props.class,
        enabled: props.enabled ?? true,
        checked: props.checked,
        run: async (...args) => props.run(...args),
    };
}

export { Action, ActionRunner, EmptySubmenuAction, Separator, SubmenuAction, toAction };
