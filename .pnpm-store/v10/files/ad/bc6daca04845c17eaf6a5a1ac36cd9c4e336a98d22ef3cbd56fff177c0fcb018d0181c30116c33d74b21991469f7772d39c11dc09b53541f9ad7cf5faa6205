import { Disposable } from '../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewEventHandler extends Disposable {
    constructor() {
        super();
        this._shouldRender = true;
    }
    shouldRender() {
        return this._shouldRender;
    }
    forceShouldRender() {
        this._shouldRender = true;
    }
    setShouldRender() {
        this._shouldRender = true;
    }
    onDidRender() {
        this._shouldRender = false;
    }
    // --- begin event handlers
    onCompositionStart(e) {
        return false;
    }
    onCompositionEnd(e) {
        return false;
    }
    onConfigurationChanged(e) {
        return false;
    }
    onCursorStateChanged(e) {
        return false;
    }
    onDecorationsChanged(e) {
        return false;
    }
    onFlushed(e) {
        return false;
    }
    onFocusChanged(e) {
        return false;
    }
    onLanguageConfigurationChanged(e) {
        return false;
    }
    onLineMappingChanged(e) {
        return false;
    }
    onLinesChanged(e) {
        return false;
    }
    onLinesDeleted(e) {
        return false;
    }
    onLinesInserted(e) {
        return false;
    }
    onRevealRangeRequest(e) {
        return false;
    }
    onScrollChanged(e) {
        return false;
    }
    onThemeChanged(e) {
        return false;
    }
    onTokensChanged(e) {
        return false;
    }
    onTokensColorsChanged(e) {
        return false;
    }
    onZonesChanged(e) {
        return false;
    }
    // --- end event handlers
    handleEvents(events) {
        let shouldRender = false;
        for (let i = 0, len = events.length; i < len; i++) {
            const e = events[i];
            switch (e.type) {
                case 0 /* viewEvents.ViewEventType.ViewCompositionStart */:
                    if (this.onCompositionStart(e)) {
                        shouldRender = true;
                    }
                    break;
                case 1 /* viewEvents.ViewEventType.ViewCompositionEnd */:
                    if (this.onCompositionEnd(e)) {
                        shouldRender = true;
                    }
                    break;
                case 2 /* viewEvents.ViewEventType.ViewConfigurationChanged */:
                    if (this.onConfigurationChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 3 /* viewEvents.ViewEventType.ViewCursorStateChanged */:
                    if (this.onCursorStateChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 4 /* viewEvents.ViewEventType.ViewDecorationsChanged */:
                    if (this.onDecorationsChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 5 /* viewEvents.ViewEventType.ViewFlushed */:
                    if (this.onFlushed(e)) {
                        shouldRender = true;
                    }
                    break;
                case 6 /* viewEvents.ViewEventType.ViewFocusChanged */:
                    if (this.onFocusChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 7 /* viewEvents.ViewEventType.ViewLanguageConfigurationChanged */:
                    if (this.onLanguageConfigurationChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 8 /* viewEvents.ViewEventType.ViewLineMappingChanged */:
                    if (this.onLineMappingChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 9 /* viewEvents.ViewEventType.ViewLinesChanged */:
                    if (this.onLinesChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 10 /* viewEvents.ViewEventType.ViewLinesDeleted */:
                    if (this.onLinesDeleted(e)) {
                        shouldRender = true;
                    }
                    break;
                case 11 /* viewEvents.ViewEventType.ViewLinesInserted */:
                    if (this.onLinesInserted(e)) {
                        shouldRender = true;
                    }
                    break;
                case 12 /* viewEvents.ViewEventType.ViewRevealRangeRequest */:
                    if (this.onRevealRangeRequest(e)) {
                        shouldRender = true;
                    }
                    break;
                case 13 /* viewEvents.ViewEventType.ViewScrollChanged */:
                    if (this.onScrollChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 15 /* viewEvents.ViewEventType.ViewTokensChanged */:
                    if (this.onTokensChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 14 /* viewEvents.ViewEventType.ViewThemeChanged */:
                    if (this.onThemeChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 16 /* viewEvents.ViewEventType.ViewTokensColorsChanged */:
                    if (this.onTokensColorsChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 17 /* viewEvents.ViewEventType.ViewZonesChanged */:
                    if (this.onZonesChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                default:
                    console.info('View received unknown event: ');
                    console.info(e);
            }
        }
        if (shouldRender) {
            this._shouldRender = true;
        }
    }
}

export { ViewEventHandler };
