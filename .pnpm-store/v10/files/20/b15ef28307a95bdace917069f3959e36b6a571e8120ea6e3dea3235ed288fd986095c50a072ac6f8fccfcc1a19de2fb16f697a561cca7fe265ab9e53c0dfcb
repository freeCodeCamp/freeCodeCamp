import { DisposableStore, toDisposable } from '../common/lifecycle.js';
import '../common/observableInternal/index.js';
import { isFirefox } from './browser.js';
import { getWindows, sharedMutationObserver } from './dom.js';
import { mainWindow } from './window.js';
import { autorun } from '../common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const globalStylesheets = new Map();
/**
 * A version of createStyleSheet which has a unified API to initialize/set the style content.
 */
function createStyleSheet2() {
    return new WrappedStyleElement();
}
class WrappedStyleElement {
    constructor() {
        this._currentCssStyle = '';
        this._styleSheet = undefined;
    }
    setStyle(cssStyle) {
        if (cssStyle === this._currentCssStyle) {
            return;
        }
        this._currentCssStyle = cssStyle;
        if (!this._styleSheet) {
            this._styleSheet = createStyleSheet(mainWindow.document.head, (s) => s.textContent = cssStyle);
        }
        else {
            this._styleSheet.textContent = cssStyle;
        }
    }
    dispose() {
        if (this._styleSheet) {
            this._styleSheet.remove();
            this._styleSheet = undefined;
        }
    }
}
function createStyleSheet(container = mainWindow.document.head, beforeAppend, disposableStore) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'screen';
    beforeAppend?.(style);
    container.appendChild(style);
    if (disposableStore) {
        disposableStore.add(toDisposable(() => style.remove()));
    }
    // With <head> as container, the stylesheet becomes global and is tracked
    // to support auxiliary windows to clone the stylesheet.
    if (container === mainWindow.document.head) {
        const globalStylesheetClones = new Set();
        globalStylesheets.set(style, globalStylesheetClones);
        if (disposableStore) {
            disposableStore.add(toDisposable(() => globalStylesheets.delete(style)));
        }
        for (const { window: targetWindow, disposables } of getWindows()) {
            if (targetWindow === mainWindow) {
                continue; // main window is already tracked
            }
            const cloneDisposable = disposables.add(cloneGlobalStyleSheet(style, globalStylesheetClones, targetWindow));
            disposableStore?.add(cloneDisposable);
        }
    }
    return style;
}
function cloneGlobalStyleSheet(globalStylesheet, globalStylesheetClones, targetWindow) {
    const disposables = new DisposableStore();
    const clone = globalStylesheet.cloneNode(true);
    targetWindow.document.head.appendChild(clone);
    disposables.add(toDisposable(() => clone.remove()));
    for (const rule of getDynamicStyleSheetRules(globalStylesheet)) {
        clone.sheet?.insertRule(rule.cssText, clone.sheet?.cssRules.length);
    }
    disposables.add(sharedMutationObserver.observe(globalStylesheet, disposables, { childList: true, subtree: isFirefox, characterData: isFirefox })(() => {
        clone.textContent = globalStylesheet.textContent;
    }));
    globalStylesheetClones.add(clone);
    disposables.add(toDisposable(() => globalStylesheetClones.delete(clone)));
    return disposables;
}
let _sharedStyleSheet = null;
function getSharedStyleSheet() {
    if (!_sharedStyleSheet) {
        _sharedStyleSheet = createStyleSheet();
    }
    return _sharedStyleSheet;
}
function getDynamicStyleSheetRules(style) {
    if (style?.sheet?.rules) {
        // Chrome, IE
        return style.sheet.rules;
    }
    if (style?.sheet?.cssRules) {
        // FF
        return style.sheet.cssRules;
    }
    return [];
}
function createCSSRule(selector, cssText, style = getSharedStyleSheet()) {
    if (!style || !cssText) {
        return;
    }
    style.sheet?.insertRule(`${selector} {${cssText}}`, 0);
    // Apply rule also to all cloned global stylesheets
    for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
        createCSSRule(selector, cssText, clonedGlobalStylesheet);
    }
}
function removeCSSRulesContainingSelector(ruleName, style = getSharedStyleSheet()) {
    if (!style) {
        return;
    }
    const rules = getDynamicStyleSheetRules(style);
    const toDelete = [];
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (isCSSStyleRule(rule) && rule.selectorText.indexOf(ruleName) !== -1) {
            toDelete.push(i);
        }
    }
    for (let i = toDelete.length - 1; i >= 0; i--) {
        style.sheet?.deleteRule(toDelete[i]);
    }
    // Remove rules also from all cloned global stylesheets
    for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
        removeCSSRulesContainingSelector(ruleName, clonedGlobalStylesheet);
    }
}
function isCSSStyleRule(rule) {
    return typeof rule.selectorText === 'string';
}
function createStyleSheetFromObservable(css) {
    const store = new DisposableStore();
    const w = store.add(createStyleSheet2());
    store.add(autorun(reader => {
        w.setStyle(css.read(reader));
    }));
    return store;
}

export { createCSSRule, createStyleSheet, createStyleSheet2, createStyleSheetFromObservable, removeCSSRulesContainingSelector };
