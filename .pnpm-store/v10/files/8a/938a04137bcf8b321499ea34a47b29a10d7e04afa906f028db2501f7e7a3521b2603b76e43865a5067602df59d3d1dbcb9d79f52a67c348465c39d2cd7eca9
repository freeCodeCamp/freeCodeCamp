import { append, $ as $$1, clearNode } from '../../dom.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';
import { getDefaultHoverDelegate } from '../hover/hoverDelegateFactory.js';
import { UILabelProvider } from '../../../common/keybindingLabels.js';
import { Disposable } from '../../../common/lifecycle.js';
import { equals } from '../../../common/objects.js';
import './keybindingLabel.css';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
const unthemedKeybindingLabelOptions = {
    keybindingLabelBackground: undefined,
    keybindingLabelForeground: undefined,
    keybindingLabelBorder: undefined,
    keybindingLabelBottomBorder: undefined,
    keybindingLabelShadow: undefined
};
class KeybindingLabel extends Disposable {
    constructor(container, os, options) {
        super();
        this.os = os;
        this.keyElements = new Set();
        this.options = options || Object.create(null);
        const labelForeground = this.options.keybindingLabelForeground;
        this.domNode = append(container, $('.monaco-keybinding'));
        if (labelForeground) {
            this.domNode.style.color = labelForeground;
        }
        this.hover = this._register(getBaseLayerHoverDelegate().setupManagedHover(getDefaultHoverDelegate('mouse'), this.domNode, ''));
        this.didEverRender = false;
        container.appendChild(this.domNode);
    }
    set(keybinding, matches) {
        if (this.didEverRender && this.keybinding === keybinding && KeybindingLabel.areSame(this.matches, matches)) {
            return;
        }
        this.keybinding = keybinding;
        this.matches = matches;
        this.render();
    }
    render() {
        this.clear();
        if (this.keybinding) {
            const chords = this.keybinding.getChords();
            if (chords[0]) {
                this.renderChord(this.domNode, chords[0], this.matches ? this.matches.firstPart : null);
            }
            for (let i = 1; i < chords.length; i++) {
                append(this.domNode, $('span.monaco-keybinding-key-chord-separator', undefined, ' '));
                this.renderChord(this.domNode, chords[i], this.matches ? this.matches.chordPart : null);
            }
            const title = (this.options.disableTitle ?? false) ? undefined : this.keybinding.getAriaLabel() || undefined;
            this.hover.update(title);
            this.domNode.setAttribute('aria-label', title || '');
        }
        else if (this.options && this.options.renderUnboundKeybindings) {
            this.renderUnbound(this.domNode);
        }
        this.didEverRender = true;
    }
    clear() {
        clearNode(this.domNode);
        this.keyElements.clear();
    }
    renderChord(parent, chord, match) {
        const modifierLabels = UILabelProvider.modifierLabels[this.os];
        if (chord.ctrlKey) {
            this.renderKey(parent, modifierLabels.ctrlKey, Boolean(match?.ctrlKey), modifierLabels.separator);
        }
        if (chord.shiftKey) {
            this.renderKey(parent, modifierLabels.shiftKey, Boolean(match?.shiftKey), modifierLabels.separator);
        }
        if (chord.altKey) {
            this.renderKey(parent, modifierLabels.altKey, Boolean(match?.altKey), modifierLabels.separator);
        }
        if (chord.metaKey) {
            this.renderKey(parent, modifierLabels.metaKey, Boolean(match?.metaKey), modifierLabels.separator);
        }
        const keyLabel = chord.keyLabel;
        if (keyLabel) {
            this.renderKey(parent, keyLabel, Boolean(match?.keyCode), '');
        }
    }
    renderKey(parent, label, highlight, separator) {
        append(parent, this.createKeyElement(label, highlight ? '.highlight' : ''));
        if (separator) {
            append(parent, $('span.monaco-keybinding-key-separator', undefined, separator));
        }
    }
    renderUnbound(parent) {
        append(parent, this.createKeyElement(localize(15, "Unbound")));
    }
    createKeyElement(label, extraClass = '') {
        const keyElement = $('span.monaco-keybinding-key' + extraClass, undefined, label);
        this.keyElements.add(keyElement);
        if (this.options.keybindingLabelBackground) {
            keyElement.style.backgroundColor = this.options.keybindingLabelBackground;
        }
        if (this.options.keybindingLabelBorder) {
            keyElement.style.borderColor = this.options.keybindingLabelBorder;
        }
        if (this.options.keybindingLabelBottomBorder) {
            keyElement.style.borderBottomColor = this.options.keybindingLabelBottomBorder;
        }
        if (this.options.keybindingLabelShadow) {
            keyElement.style.boxShadow = `inset 0 -1px 0 ${this.options.keybindingLabelShadow}`;
        }
        return keyElement;
    }
    static areSame(a, b) {
        if (a === b || (!a && !b)) {
            return true;
        }
        return !!a && !!b && equals(a.firstPart, b.firstPart) && equals(a.chordPart, b.chordPart);
    }
}

export { KeybindingLabel, unthemedKeybindingLabelOptions };
