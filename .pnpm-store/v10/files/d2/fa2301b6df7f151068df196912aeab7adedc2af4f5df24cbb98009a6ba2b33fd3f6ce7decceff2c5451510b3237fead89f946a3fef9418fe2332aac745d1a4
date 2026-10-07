import { clearNode } from '../../dom.js';
import './aria.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Use a max length since we are inserting the whole msg in the DOM and that can cause browsers to freeze for long messages #94233
const MAX_MESSAGE_LENGTH = 20000;
let ariaContainer;
let alertContainer;
let alertContainer2;
let statusContainer;
let statusContainer2;
function setARIAContainer(parent) {
    ariaContainer = document.createElement('div');
    ariaContainer.className = 'monaco-aria-container';
    const createAlertContainer = () => {
        const element = document.createElement('div');
        element.className = 'monaco-alert';
        element.setAttribute('role', 'alert');
        element.setAttribute('aria-atomic', 'true');
        ariaContainer.appendChild(element);
        return element;
    };
    alertContainer = createAlertContainer();
    alertContainer2 = createAlertContainer();
    const createStatusContainer = () => {
        const element = document.createElement('div');
        element.className = 'monaco-status';
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        ariaContainer.appendChild(element);
        return element;
    };
    statusContainer = createStatusContainer();
    statusContainer2 = createStatusContainer();
    parent.appendChild(ariaContainer);
}
/**
 * Given the provided message, will make sure that it is read as alert to screen readers.
 */
function alert(msg) {
    if (!ariaContainer) {
        return;
    }
    // Use alternate containers such that duplicated messages get read out by screen readers #99466
    if (alertContainer.textContent !== msg) {
        clearNode(alertContainer2);
        insertMessage(alertContainer, msg);
    }
    else {
        clearNode(alertContainer);
        insertMessage(alertContainer2, msg);
    }
}
/**
 * Given the provided message, will make sure that it is read as status to screen readers.
 */
function status(msg) {
    if (!ariaContainer) {
        return;
    }
    if (statusContainer.textContent !== msg) {
        clearNode(statusContainer2);
        insertMessage(statusContainer, msg);
    }
    else {
        clearNode(statusContainer);
        insertMessage(statusContainer2, msg);
    }
}
function insertMessage(target, msg) {
    clearNode(target);
    if (msg.length > MAX_MESSAGE_LENGTH) {
        msg = msg.substr(0, MAX_MESSAGE_LENGTH);
    }
    target.textContent = msg;
    // See https://www.paciellogroup.com/blog/2012/06/html5-accessibility-chops-aria-rolealert-browser-support/
    target.style.visibility = 'hidden';
    target.style.visibility = 'visible';
}

export { alert, setARIAContainer, status };
