import { reset, $, EventType, isEventLike, EventHelper } from '../../../base/browser/dom.js';
import { createCSSRule } from '../../../base/browser/domStylesheets.js';
import { asCSSUrl } from '../../../base/browser/cssValue.js';
import { DomEmitter } from '../../../base/browser/event.js';
import { Event } from '../../../base/common/event.js';
import { StandardKeyboardEvent } from '../../../base/browser/keyboardEvent.js';
import { Gesture, EventType as EventType$1 } from '../../../base/browser/touch.js';
import { renderLabelWithIcons } from '../../../base/browser/ui/iconLabel/iconLabels.js';
import { IdGenerator } from '../../../base/common/idGenerator.js';
import { parseLinkedText } from '../../../base/common/linkedText.js';
import './media/quickInput.css';
import { localize } from '../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const iconPathToClass = {};
const iconClassGenerator = new IdGenerator('quick-input-button-icon-');
function getIconClass(iconPath) {
    if (!iconPath) {
        return undefined;
    }
    let iconClass;
    const key = iconPath.dark.toString();
    if (iconPathToClass[key]) {
        iconClass = iconPathToClass[key];
    }
    else {
        iconClass = iconClassGenerator.nextId();
        createCSSRule(`.${iconClass}, .hc-light .${iconClass}`, `background-image: ${asCSSUrl(iconPath.light || iconPath.dark)}`);
        createCSSRule(`.vs-dark .${iconClass}, .hc-black .${iconClass}`, `background-image: ${asCSSUrl(iconPath.dark)}`);
        iconPathToClass[key] = iconClass;
    }
    return iconClass;
}
function quickInputButtonToAction(button, id, run) {
    let cssClasses = button.iconClass || getIconClass(button.iconPath);
    if (button.alwaysVisible) {
        cssClasses = cssClasses ? `${cssClasses} always-visible` : 'always-visible';
    }
    return {
        id,
        label: '',
        tooltip: button.tooltip || '',
        class: cssClasses,
        enabled: true,
        run
    };
}
function renderQuickInputDescription(description, container, actionHandler) {
    reset(container);
    const parsed = parseLinkedText(description);
    let tabIndex = 0;
    for (const node of parsed.nodes) {
        if (typeof node === 'string') {
            container.append(...renderLabelWithIcons(node));
        }
        else {
            let title = node.title;
            if (!title && node.href.startsWith('command:')) {
                title = localize(1771, "Click to execute command '{0}'", node.href.substring('command:'.length));
            }
            else if (!title) {
                title = node.href;
            }
            const anchor = $('a', { href: node.href, title, tabIndex: tabIndex++ }, node.label);
            anchor.style.textDecoration = 'underline';
            const handleOpen = (e) => {
                if (isEventLike(e)) {
                    EventHelper.stop(e, true);
                }
                actionHandler.callback(node.href);
            };
            const onClick = actionHandler.disposables.add(new DomEmitter(anchor, EventType.CLICK)).event;
            const onKeydown = actionHandler.disposables.add(new DomEmitter(anchor, EventType.KEY_DOWN)).event;
            const onSpaceOrEnter = Event.chain(onKeydown, $ => $.filter(e => {
                const event = new StandardKeyboardEvent(e);
                return event.equals(10 /* KeyCode.Space */) || event.equals(3 /* KeyCode.Enter */);
            }));
            actionHandler.disposables.add(Gesture.addTarget(anchor));
            const onTap = actionHandler.disposables.add(new DomEmitter(anchor, EventType$1.Tap)).event;
            Event.any(onClick, onTap, onSpaceOrEnter)(handleOpen, null, actionHandler.disposables);
            container.appendChild(anchor);
        }
    }
}

export { quickInputButtonToAction, renderQuickInputDescription };
