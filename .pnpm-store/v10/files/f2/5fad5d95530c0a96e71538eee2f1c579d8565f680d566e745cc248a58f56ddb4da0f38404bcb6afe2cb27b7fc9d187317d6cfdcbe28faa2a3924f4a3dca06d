import { isFirefox } from '../../../../../base/browser/browser.js';
import { addDisposableListener, getShadowRoot, getActiveElement, getWindow, saveParentsScrollTop, restoreParentsScrollTop } from '../../../../../base/browser/dom.js';
import { DomEmitter } from '../../../../../base/browser/event.js';
import { StandardKeyboardEvent } from '../../../../../base/browser/keyboardEvent.js';
import { inputLatency } from '../../../../../base/browser/performance.js';
import { RunOnceScheduler } from '../../../../../base/common/async.js';
import { Emitter, Event } from '../../../../../base/common/event.js';
import { Disposable, MutableDisposable } from '../../../../../base/common/lifecycle.js';
import { isHighSurrogate } from '../../../../../base/common/strings.js';
import { Selection } from '../../../../common/core/selection.js';
import { IAccessibilityService } from '../../../../../platform/accessibility/common/accessibility.js';
import { ILogService, LogLevel } from '../../../../../platform/log/common/log.js';
import { InMemoryClipboardMetadataManager, ClipboardEventUtils } from '../clipboardUtils.js';
import { TextAreaState } from './textAreaEditContextState.js';
import { generateUuid } from '../../../../../base/common/uuid.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TextAreaSyntethicEvents;
(function (TextAreaSyntethicEvents) {
    TextAreaSyntethicEvents.Tap = '-monaco-textarea-synthetic-tap';
})(TextAreaSyntethicEvents || (TextAreaSyntethicEvents = {}));
class CompositionContext {
    constructor() {
        this._lastTypeTextLength = 0;
    }
    handleCompositionUpdate(text) {
        text = text || '';
        const typeInput = {
            text: text,
            replacePrevCharCnt: this._lastTypeTextLength,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        this._lastTypeTextLength = text.length;
        return typeInput;
    }
}
/**
 * Writes screen reader content to the textarea and is able to analyze its input events to generate:
 *  - onCut
 *  - onPaste
 *  - onType
 *
 * Composition events are generated for presentation purposes (composition input is reflected in onType).
 */
let TextAreaInput = class TextAreaInput extends Disposable {
    get textAreaState() {
        return this._textAreaState;
    }
    constructor(_host, _textArea, _OS, _browser, _accessibilityService, _logService) {
        super();
        this._host = _host;
        this._textArea = _textArea;
        this._OS = _OS;
        this._browser = _browser;
        this._accessibilityService = _accessibilityService;
        this._logService = _logService;
        this._onFocus = this._register(new Emitter());
        this.onFocus = this._onFocus.event;
        this._onBlur = this._register(new Emitter());
        this.onBlur = this._onBlur.event;
        this._onKeyDown = this._register(new Emitter());
        this.onKeyDown = this._onKeyDown.event;
        this._onKeyUp = this._register(new Emitter());
        this.onKeyUp = this._onKeyUp.event;
        this._onCut = this._register(new Emitter());
        this.onCut = this._onCut.event;
        this._onPaste = this._register(new Emitter());
        this.onPaste = this._onPaste.event;
        this._onType = this._register(new Emitter());
        this.onType = this._onType.event;
        this._onCompositionStart = this._register(new Emitter());
        this.onCompositionStart = this._onCompositionStart.event;
        this._onCompositionUpdate = this._register(new Emitter());
        this.onCompositionUpdate = this._onCompositionUpdate.event;
        this._onCompositionEnd = this._register(new Emitter());
        this.onCompositionEnd = this._onCompositionEnd.event;
        this._onSelectionChangeRequest = this._register(new Emitter());
        this.onSelectionChangeRequest = this._onSelectionChangeRequest.event;
        this._asyncFocusGainWriteScreenReaderContent = this._register(new MutableDisposable());
        this._asyncTriggerCut = this._register(new RunOnceScheduler(() => this._onCut.fire(), 0));
        this._textAreaState = TextAreaState.EMPTY;
        this._selectionChangeListener = null;
        if (this._accessibilityService.isScreenReaderOptimized()) {
            this.writeNativeTextAreaContent('ctor');
        }
        this._register(Event.runAndSubscribe(this._accessibilityService.onDidChangeScreenReaderOptimized, () => {
            if (this._accessibilityService.isScreenReaderOptimized() && !this._asyncFocusGainWriteScreenReaderContent.value) {
                this._asyncFocusGainWriteScreenReaderContent.value = this._register(new RunOnceScheduler(() => this.writeNativeTextAreaContent('asyncFocusGain'), 0));
            }
            else {
                this._asyncFocusGainWriteScreenReaderContent.clear();
            }
        }));
        this._hasFocus = false;
        this._currentComposition = null;
        let lastKeyDown = null;
        this._register(this._textArea.onKeyDown((_e) => {
            const e = new StandardKeyboardEvent(_e);
            if (e.keyCode === 114 /* KeyCode.KEY_IN_COMPOSITION */
                || (this._currentComposition && e.keyCode === 1 /* KeyCode.Backspace */)) {
                // Stop propagation for keyDown events if the IME is processing key input
                e.stopPropagation();
            }
            if (e.equals(9 /* KeyCode.Escape */)) {
                // Prevent default always for `Esc`, otherwise it will generate a keypress
                // See https://msdn.microsoft.com/en-us/library/ie/ms536939(v=vs.85).aspx
                e.preventDefault();
            }
            lastKeyDown = e;
            this._onKeyDown.fire(e);
        }));
        this._register(this._textArea.onKeyUp((_e) => {
            const e = new StandardKeyboardEvent(_e);
            this._onKeyUp.fire(e);
        }));
        this._register(this._textArea.onCompositionStart((e) => {
            const currentComposition = new CompositionContext();
            if (this._currentComposition) {
                // simply reset the composition context
                this._currentComposition = currentComposition;
                return;
            }
            this._currentComposition = currentComposition;
            if (this._OS === 2 /* OperatingSystem.Macintosh */
                && lastKeyDown
                && lastKeyDown.equals(114 /* KeyCode.KEY_IN_COMPOSITION */)
                && this._textAreaState.selectionStart === this._textAreaState.selectionEnd
                && this._textAreaState.selectionStart > 0
                && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === e.data
                && (lastKeyDown.code === 'ArrowRight' || lastKeyDown.code === 'ArrowLeft')) {
                // Pretend the previous character was composed (in order to get it removed by subsequent compositionupdate events)
                currentComposition.handleCompositionUpdate('x');
                this._onCompositionStart.fire({ data: e.data });
                return;
            }
            if (this._browser.isAndroid) {
                // when tapping on the editor, Android enters composition mode to edit the current word
                // so we cannot clear the textarea on Android and we must pretend the current word was selected
                this._onCompositionStart.fire({ data: e.data });
                return;
            }
            this._onCompositionStart.fire({ data: e.data });
        }));
        this._register(this._textArea.onCompositionUpdate((e) => {
            const currentComposition = this._currentComposition;
            if (!currentComposition) {
                // should not be possible to receive a 'compositionupdate' without a 'compositionstart'
                return;
            }
            if (this._browser.isAndroid) {
                // On Android, the data sent with the composition update event is unusable.
                // For example, if the cursor is in the middle of a word like Mic|osoft
                // and Microsoft is chosen from the keyboard's suggestions, the e.data will contain "Microsoft".
                // This is not really usable because it doesn't tell us where the edit began and where it ended.
                const newState = TextAreaState.readFromTextArea(this._textArea, this._textAreaState);
                const typeInput = TextAreaState.deduceAndroidCompositionInput(this._textAreaState, newState);
                this._textAreaState = newState;
                this._onType.fire(typeInput);
                this._onCompositionUpdate.fire(e);
                return;
            }
            const typeInput = currentComposition.handleCompositionUpdate(e.data);
            this._textAreaState = TextAreaState.readFromTextArea(this._textArea, this._textAreaState);
            this._onType.fire(typeInput);
            this._onCompositionUpdate.fire(e);
        }));
        this._register(this._textArea.onCompositionEnd((e) => {
            const currentComposition = this._currentComposition;
            if (!currentComposition) {
                // https://github.com/microsoft/monaco-editor/issues/1663
                // On iOS 13.2, Chinese system IME randomly trigger an additional compositionend event with empty data
                return;
            }
            this._currentComposition = null;
            if (this._browser.isAndroid) {
                // On Android, the data sent with the composition update event is unusable.
                // For example, if the cursor is in the middle of a word like Mic|osoft
                // and Microsoft is chosen from the keyboard's suggestions, the e.data will contain "Microsoft".
                // This is not really usable because it doesn't tell us where the edit began and where it ended.
                const newState = TextAreaState.readFromTextArea(this._textArea, this._textAreaState);
                const typeInput = TextAreaState.deduceAndroidCompositionInput(this._textAreaState, newState);
                this._textAreaState = newState;
                this._onType.fire(typeInput);
                this._onCompositionEnd.fire();
                return;
            }
            const typeInput = currentComposition.handleCompositionUpdate(e.data);
            this._textAreaState = TextAreaState.readFromTextArea(this._textArea, this._textAreaState);
            this._onType.fire(typeInput);
            this._onCompositionEnd.fire();
        }));
        this._register(this._textArea.onInput((e) => {
            // Pretend here we touched the text area, as the `input` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received input event');
            if (this._currentComposition) {
                return;
            }
            const newState = TextAreaState.readFromTextArea(this._textArea, this._textAreaState);
            const typeInput = TextAreaState.deduceInput(this._textAreaState, newState, /*couldBeEmojiInput*/ this._OS === 2 /* OperatingSystem.Macintosh */);
            if (typeInput.replacePrevCharCnt === 0 && typeInput.text.length === 1) {
                // one character was typed
                if (isHighSurrogate(typeInput.text.charCodeAt(0))
                    || typeInput.text.charCodeAt(0) === 0x7f /* Delete */) {
                    // Ignore invalid input but keep it around for next time
                    return;
                }
            }
            this._textAreaState = newState;
            if (typeInput.text !== ''
                || typeInput.replacePrevCharCnt !== 0
                || typeInput.replaceNextCharCnt !== 0
                || typeInput.positionDelta !== 0) {
                // https://w3c.github.io/input-events/#interface-InputEvent-Attributes
                if (e.inputType === 'insertFromPaste') {
                    this._onPaste.fire({
                        text: typeInput.text,
                        metadata: InMemoryClipboardMetadataManager.INSTANCE.get(typeInput.text)
                    });
                }
                else {
                    this._onType.fire(typeInput);
                }
            }
        }));
        // --- Clipboard operations
        this._register(this._textArea.onCut((e) => {
            this._logService.trace(`TextAreaInput#onCut`, e);
            // Pretend here we touched the text area, as the `cut` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received cut event');
            this._ensureClipboardGetsEditorSelection(e);
            this._asyncTriggerCut.schedule();
        }));
        this._register(this._textArea.onCopy((e) => {
            this._logService.trace(`TextAreaInput#onCopy`, e);
            this._ensureClipboardGetsEditorSelection(e);
        }));
        this._register(this._textArea.onPaste((e) => {
            this._logService.trace(`TextAreaInput#onPaste`, e);
            // Pretend here we touched the text area, as the `paste` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received paste event');
            e.preventDefault();
            if (!e.clipboardData) {
                return;
            }
            let [text, metadata] = ClipboardEventUtils.getTextData(e.clipboardData);
            this._logService.trace(`TextAreaInput#onPaste with id : `, metadata?.id, ' with text.length: ', text.length);
            if (!text) {
                return;
            }
            // try the in-memory store
            metadata = metadata || InMemoryClipboardMetadataManager.INSTANCE.get(text);
            this._logService.trace(`TextAreaInput#onPaste (before onPaste)`);
            this._onPaste.fire({
                text: text,
                metadata: metadata
            });
        }));
        this._register(this._textArea.onFocus(() => {
            const hadFocus = this._hasFocus;
            this._setHasFocus(true);
            if (this._accessibilityService.isScreenReaderOptimized() && this._browser.isSafari && !hadFocus && this._hasFocus) {
                // When "tabbing into" the textarea, immediately after dispatching the 'focus' event,
                // Safari will always move the selection at offset 0 in the textarea
                if (!this._asyncFocusGainWriteScreenReaderContent.value) {
                    this._asyncFocusGainWriteScreenReaderContent.value = new RunOnceScheduler(() => this.writeNativeTextAreaContent('asyncFocusGain'), 0);
                }
                this._asyncFocusGainWriteScreenReaderContent.value.schedule();
            }
        }));
        this._register(this._textArea.onBlur(() => {
            if (this._currentComposition) {
                // See https://github.com/microsoft/vscode/issues/112621
                // where compositionend is not triggered when the editor
                // is taken off-dom during a composition
                // Clear the flag to be able to write to the textarea
                this._currentComposition = null;
                // Clear the textarea to avoid an unwanted cursor type
                this.writeNativeTextAreaContent('blurWithoutCompositionEnd');
                // Fire artificial composition end
                this._onCompositionEnd.fire();
            }
            this._setHasFocus(false);
        }));
        this._register(this._textArea.onSyntheticTap(() => {
            if (this._browser.isAndroid && this._currentComposition) {
                // on Android, tapping does not cancel the current composition, so the
                // textarea is stuck showing the old composition
                // Clear the flag to be able to write to the textarea
                this._currentComposition = null;
                // Clear the textarea to avoid an unwanted cursor type
                this.writeNativeTextAreaContent('tapWithoutCompositionEnd');
                // Fire artificial composition end
                this._onCompositionEnd.fire();
            }
        }));
    }
    _installSelectionChangeListener() {
        // See https://github.com/microsoft/vscode/issues/27216 and https://github.com/microsoft/vscode/issues/98256
        // When using a Braille display, it is possible for users to reposition the
        // system caret. This is reflected in Chrome as a `selectionchange` event.
        //
        // The `selectionchange` event appears to be emitted under numerous other circumstances,
        // so it is quite a challenge to distinguish a `selectionchange` coming in from a user
        // using a Braille display from all the other cases.
        //
        // The problems with the `selectionchange` event are:
        //  * the event is emitted when the textarea is focused programmatically -- textarea.focus()
        //  * the event is emitted when the selection is changed in the textarea programmatically -- textarea.setSelectionRange(...)
        //  * the event is emitted when the value of the textarea is changed programmatically -- textarea.value = '...'
        //  * the event is emitted when tabbing into the textarea
        //  * the event is emitted asynchronously (sometimes with a delay as high as a few tens of ms)
        //  * the event sometimes comes in bursts for a single logical textarea operation
        // `selectionchange` events often come multiple times for a single logical change
        // so throttle multiple `selectionchange` events that burst in a short period of time.
        let previousSelectionChangeEventTime = 0;
        return addDisposableListener(this._textArea.ownerDocument, 'selectionchange', (e) => {
            inputLatency.onSelectionChange();
            if (!this._hasFocus) {
                return;
            }
            if (this._currentComposition) {
                return;
            }
            if (!this._browser.isChrome) {
                // Support only for Chrome until testing happens on other browsers
                return;
            }
            const now = Date.now();
            const delta1 = now - previousSelectionChangeEventTime;
            previousSelectionChangeEventTime = now;
            if (delta1 < 5) {
                // received another `selectionchange` event within 5ms of the previous `selectionchange` event
                // => ignore it
                return;
            }
            const delta2 = now - this._textArea.getIgnoreSelectionChangeTime();
            this._textArea.resetSelectionChangeTime();
            if (delta2 < 100) {
                // received a `selectionchange` event within 100ms since we touched the textarea
                // => ignore it, since we caused it
                return;
            }
            if (!this._textAreaState.selection) {
                // Cannot correlate a position in the textarea with a position in the editor...
                return;
            }
            const newValue = this._textArea.getValue();
            if (this._textAreaState.value !== newValue) {
                // Cannot correlate a position in the textarea with a position in the editor...
                return;
            }
            const newSelectionStart = this._textArea.getSelectionStart();
            const newSelectionEnd = this._textArea.getSelectionEnd();
            if (this._textAreaState.selectionStart === newSelectionStart && this._textAreaState.selectionEnd === newSelectionEnd) {
                // Nothing to do...
                return;
            }
            const _newSelectionStartPosition = this._textAreaState.deduceEditorPosition(newSelectionStart);
            const newSelectionStartPosition = this._host.deduceModelPosition(_newSelectionStartPosition[0], _newSelectionStartPosition[1], _newSelectionStartPosition[2]);
            const _newSelectionEndPosition = this._textAreaState.deduceEditorPosition(newSelectionEnd);
            const newSelectionEndPosition = this._host.deduceModelPosition(_newSelectionEndPosition[0], _newSelectionEndPosition[1], _newSelectionEndPosition[2]);
            const newSelection = new Selection(newSelectionStartPosition.lineNumber, newSelectionStartPosition.column, newSelectionEndPosition.lineNumber, newSelectionEndPosition.column);
            this._onSelectionChangeRequest.fire(newSelection);
        });
    }
    dispose() {
        super.dispose();
        if (this._selectionChangeListener) {
            this._selectionChangeListener.dispose();
            this._selectionChangeListener = null;
        }
    }
    focusTextArea() {
        // Setting this._hasFocus and writing the screen reader content
        // will result in a focus() and setSelectionRange() in the textarea
        this._setHasFocus(true);
        // If the editor is off DOM, focus cannot be really set, so let's double check that we have managed to set the focus
        this.refreshFocusState();
    }
    isFocused() {
        return this._hasFocus;
    }
    refreshFocusState() {
        this._setHasFocus(this._textArea.hasFocus());
    }
    _setHasFocus(newHasFocus) {
        if (this._hasFocus === newHasFocus) {
            // no change
            return;
        }
        this._hasFocus = newHasFocus;
        if (this._selectionChangeListener) {
            this._selectionChangeListener.dispose();
            this._selectionChangeListener = null;
        }
        if (this._hasFocus) {
            this._selectionChangeListener = this._installSelectionChangeListener();
        }
        if (this._hasFocus) {
            this.writeNativeTextAreaContent('focusgain');
        }
        if (this._hasFocus) {
            this._onFocus.fire();
        }
        else {
            this._onBlur.fire();
        }
    }
    _setAndWriteTextAreaState(reason, textAreaState) {
        if (!this._hasFocus) {
            textAreaState = textAreaState.collapseSelection();
        }
        if (!textAreaState.isWrittenToTextArea(this._textArea, this._hasFocus)) {
            this._logService.trace(`writeTextAreaState(reason: ${reason})`);
        }
        textAreaState.writeToTextArea(reason, this._textArea, this._hasFocus);
        this._textAreaState = textAreaState;
    }
    writeNativeTextAreaContent(reason) {
        if ((!this._accessibilityService.isScreenReaderOptimized() && reason === 'render') || this._currentComposition) {
            // Do not write to the text on render unless a screen reader is being used #192278
            // Do not write to the text area when doing composition
            return;
        }
        this._setAndWriteTextAreaState(reason, this._host.getScreenReaderContent());
    }
    _ensureClipboardGetsEditorSelection(e) {
        const dataToCopy = this._host.getDataToCopy();
        let id = undefined;
        if (this._logService.getLevel() === LogLevel.Trace) {
            id = generateUuid();
        }
        const storedMetadata = {
            version: 1,
            id,
            isFromEmptySelection: dataToCopy.isFromEmptySelection,
            multicursorText: dataToCopy.multicursorText,
            mode: dataToCopy.mode
        };
        InMemoryClipboardMetadataManager.INSTANCE.set(
        // When writing "LINE\r\n" to the clipboard and then pasting,
        // Firefox pastes "LINE\n", so let's work around this quirk
        (this._browser.isFirefox ? dataToCopy.text.replace(/\r\n/g, '\n') : dataToCopy.text), storedMetadata);
        e.preventDefault();
        if (e.clipboardData) {
            ClipboardEventUtils.setTextData(e.clipboardData, dataToCopy.text, dataToCopy.html, storedMetadata);
        }
        this._logService.trace('TextAreaEditContextInput#_ensureClipboardGetsEditorSelection with id : ', id, ' with text.length: ', dataToCopy.text.length);
    }
};
TextAreaInput = __decorate([
    __param(4, IAccessibilityService),
    __param(5, ILogService)
], TextAreaInput);
class TextAreaWrapper extends Disposable {
    get ownerDocument() {
        return this._actual.ownerDocument;
    }
    constructor(_actual) {
        super();
        this._actual = _actual;
        this._onSyntheticTap = this._register(new Emitter());
        this.onSyntheticTap = this._onSyntheticTap.event;
        this._ignoreSelectionChangeTime = 0;
        this.onKeyDown = this._register(new DomEmitter(this._actual, 'keydown')).event;
        this.onKeyPress = this._register(new DomEmitter(this._actual, 'keypress')).event;
        this.onKeyUp = this._register(new DomEmitter(this._actual, 'keyup')).event;
        this.onCompositionStart = this._register(new DomEmitter(this._actual, 'compositionstart')).event;
        this.onCompositionUpdate = this._register(new DomEmitter(this._actual, 'compositionupdate')).event;
        this.onCompositionEnd = this._register(new DomEmitter(this._actual, 'compositionend')).event;
        this.onBeforeInput = this._register(new DomEmitter(this._actual, 'beforeinput')).event;
        this.onInput = this._register(new DomEmitter(this._actual, 'input')).event;
        this.onCut = this._register(new DomEmitter(this._actual, 'cut')).event;
        this.onCopy = this._register(new DomEmitter(this._actual, 'copy')).event;
        this.onPaste = this._register(new DomEmitter(this._actual, 'paste')).event;
        this.onFocus = this._register(new DomEmitter(this._actual, 'focus')).event;
        this.onBlur = this._register(new DomEmitter(this._actual, 'blur')).event;
        this._register(this.onKeyDown(() => inputLatency.onKeyDown()));
        this._register(this.onBeforeInput(() => inputLatency.onBeforeInput()));
        this._register(this.onInput(() => inputLatency.onInput()));
        this._register(this.onKeyUp(() => inputLatency.onKeyUp()));
        this._register(addDisposableListener(this._actual, TextAreaSyntethicEvents.Tap, () => this._onSyntheticTap.fire()));
    }
    hasFocus() {
        const shadowRoot = getShadowRoot(this._actual);
        if (shadowRoot) {
            return shadowRoot.activeElement === this._actual;
        }
        else if (this._actual.isConnected) {
            return getActiveElement() === this._actual;
        }
        else {
            return false;
        }
    }
    setIgnoreSelectionChangeTime(reason) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
        return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
        this._ignoreSelectionChangeTime = 0;
    }
    getValue() {
        // console.log('current value: ' + this._textArea.value);
        return this._actual.value;
    }
    setValue(reason, value) {
        const textArea = this._actual;
        if (textArea.value === value) {
            // No change
            return;
        }
        // console.log('reason: ' + reason + ', current value: ' + textArea.value + ' => new value: ' + value);
        this.setIgnoreSelectionChangeTime('setValue');
        textArea.value = value;
    }
    getSelectionStart() {
        return this._actual.selectionDirection === 'backward' ? this._actual.selectionEnd : this._actual.selectionStart;
    }
    getSelectionEnd() {
        return this._actual.selectionDirection === 'backward' ? this._actual.selectionStart : this._actual.selectionEnd;
    }
    setSelectionRange(reason, selectionStart, selectionEnd) {
        const textArea = this._actual;
        let activeElement = null;
        const shadowRoot = getShadowRoot(textArea);
        if (shadowRoot) {
            activeElement = shadowRoot.activeElement;
        }
        else {
            activeElement = getActiveElement();
        }
        const activeWindow = getWindow(activeElement);
        const currentIsFocused = (activeElement === textArea);
        const currentSelectionStart = textArea.selectionStart;
        const currentSelectionEnd = textArea.selectionEnd;
        if (currentIsFocused && currentSelectionStart === selectionStart && currentSelectionEnd === selectionEnd) {
            // No change
            // Firefox iframe bug https://github.com/microsoft/monaco-editor/issues/643#issuecomment-367871377
            if (isFirefox && activeWindow.parent !== activeWindow) {
                textArea.focus();
            }
            return;
        }
        // console.log('reason: ' + reason + ', setSelectionRange: ' + selectionStart + ' -> ' + selectionEnd);
        if (currentIsFocused) {
            // No need to focus, only need to change the selection range
            this.setIgnoreSelectionChangeTime('setSelectionRange');
            textArea.setSelectionRange(selectionStart, selectionEnd);
            if (isFirefox && activeWindow.parent !== activeWindow) {
                textArea.focus();
            }
            return;
        }
        // If the focus is outside the textarea, browsers will try really hard to reveal the textarea.
        // Here, we try to undo the browser's desperate reveal.
        try {
            const scrollState = saveParentsScrollTop(textArea);
            this.setIgnoreSelectionChangeTime('setSelectionRange');
            textArea.focus();
            textArea.setSelectionRange(selectionStart, selectionEnd);
            restoreParentsScrollTop(textArea, scrollState);
        }
        catch (e) {
            // Sometimes IE throws when setting selection (e.g. textarea is off-DOM)
        }
    }
}

export { TextAreaInput, TextAreaSyntethicEvents, TextAreaWrapper };
