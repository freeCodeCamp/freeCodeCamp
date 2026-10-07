import { append, $ as $$1, addDisposableListener, EventType } from '../../dom.js';
import { StandardKeyboardEvent } from '../../keyboardEvent.js';
import { DomScrollableElement } from '../scrollbar/scrollableElement.js';
import { Disposable } from '../../../common/lifecycle.js';
import './hoverWidget.css';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class HoverWidget extends Disposable {
    constructor(fadeIn) {
        super();
        this.containerDomNode = document.createElement('div');
        this.containerDomNode.className = 'monaco-hover';
        this.containerDomNode.classList.toggle('fade-in', !!fadeIn);
        this.containerDomNode.tabIndex = 0;
        this.containerDomNode.setAttribute('role', 'tooltip');
        this.contentsDomNode = document.createElement('div');
        this.contentsDomNode.className = 'monaco-hover-content';
        this.scrollbar = this._register(new DomScrollableElement(this.contentsDomNode, {
            consumeMouseWheelIfScrollbarIsNeeded: true
        }));
        this.containerDomNode.appendChild(this.scrollbar.getDomNode());
    }
    onContentsChanged() {
        this.scrollbar.scanDomNode();
    }
}
class HoverAction extends Disposable {
    static render(parent, actionOptions, keybindingLabel) {
        return new HoverAction(parent, actionOptions, keybindingLabel);
    }
    constructor(parent, actionOptions, keybindingLabel) {
        super();
        this.actionLabel = actionOptions.label;
        this.actionKeybindingLabel = keybindingLabel;
        this.actionContainer = append(parent, $('div.action-container'));
        this.actionContainer.setAttribute('tabindex', '0');
        this.action = append(this.actionContainer, $('a.action'));
        this.action.setAttribute('role', 'button');
        if (actionOptions.iconClass) {
            const iconElement = append(this.action, $(`span.icon`));
            iconElement.classList.add(...actionOptions.iconClass.split(' '));
        }
        this.actionRenderedLabel = keybindingLabel ? `${actionOptions.label} (${keybindingLabel})` : actionOptions.label;
        const label = append(this.action, $('span'));
        label.textContent = this.actionRenderedLabel;
        this._store.add(new ClickAction(this.actionContainer, actionOptions.run));
        this._store.add(new KeyDownAction(this.actionContainer, actionOptions.run, [3 /* KeyCode.Enter */, 10 /* KeyCode.Space */]));
        this.setEnabled(true);
    }
    setEnabled(enabled) {
        if (enabled) {
            this.actionContainer.classList.remove('disabled');
            this.actionContainer.removeAttribute('aria-disabled');
        }
        else {
            this.actionContainer.classList.add('disabled');
            this.actionContainer.setAttribute('aria-disabled', 'true');
        }
    }
}
function getHoverAccessibleViewHint(shouldHaveHint, keybinding) {
    return shouldHaveHint && keybinding ? localize(7, "Inspect this in the accessible view with {0}.", keybinding) : shouldHaveHint ? localize(8, "Inspect this in the accessible view via the command Open Accessible View which is currently not triggerable via keybinding.") : '';
}
class ClickAction extends Disposable {
    constructor(container, run) {
        super();
        this._register(addDisposableListener(container, EventType.CLICK, e => {
            e.stopPropagation();
            e.preventDefault();
            run(container);
        }));
    }
}
class KeyDownAction extends Disposable {
    constructor(container, run, keyCodes) {
        super();
        this._register(addDisposableListener(container, EventType.KEY_DOWN, e => {
            const event = new StandardKeyboardEvent(e);
            if (keyCodes.some(keyCode => event.equals(keyCode))) {
                e.stopPropagation();
                e.preventDefault();
                run(container);
            }
        }));
    }
}

export { ClickAction, HoverAction, HoverWidget, KeyDownAction, getHoverAccessibleViewHint };
