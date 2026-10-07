import { Emitter } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { isMacintosh } from '../../../../../base/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function hasModifier(e, modifier) {
    return !!e[modifier];
}
/**
 * An event that encapsulates the various trigger modifiers logic needed for go to definition.
 */
class ClickLinkMouseEvent {
    constructor(source, opts) {
        this.target = source.target;
        this.isLeftClick = source.event.leftButton;
        this.isMiddleClick = source.event.middleButton;
        this.isRightClick = source.event.rightButton;
        this.mouseMiddleClickAction = opts.mouseMiddleClickAction;
        this.hasTriggerModifier = hasModifier(source.event, opts.triggerModifier);
        if (this.isMiddleClick && opts.mouseMiddleClickAction === 'ctrlLeftClick') {
            // Redirect middle click to left click with modifier
            this.isMiddleClick = false;
            this.isLeftClick = true;
            this.hasTriggerModifier = true;
        }
        this.hasSideBySideModifier = hasModifier(source.event, opts.triggerSideBySideModifier);
        this.isNoneOrSingleMouseDown = (source.event.detail <= 1);
    }
}
/**
 * An event that encapsulates the various trigger modifiers logic needed for go to definition.
 */
class ClickLinkKeyboardEvent {
    constructor(source, opts) {
        this.keyCodeIsTriggerKey = (source.keyCode === opts.triggerKey);
        this.keyCodeIsSideBySideKey = (source.keyCode === opts.triggerSideBySideKey);
        this.hasTriggerModifier = hasModifier(source, opts.triggerModifier);
    }
}
class ClickLinkOptions {
    constructor(triggerKey, triggerModifier, triggerSideBySideKey, triggerSideBySideModifier, mouseMiddleClickAction) {
        this.mouseMiddleClickAction = mouseMiddleClickAction;
        this.triggerKey = triggerKey;
        this.triggerModifier = triggerModifier;
        this.triggerSideBySideKey = triggerSideBySideKey;
        this.triggerSideBySideModifier = triggerSideBySideModifier;
    }
    equals(other) {
        return (this.triggerKey === other.triggerKey
            && this.triggerModifier === other.triggerModifier
            && this.triggerSideBySideKey === other.triggerSideBySideKey
            && this.triggerSideBySideModifier === other.triggerSideBySideModifier
            && this.mouseMiddleClickAction === other.mouseMiddleClickAction);
    }
}
function createOptions(multiCursorModifier, mouseMiddleClickAction) {
    if (multiCursorModifier === 'altKey') {
        if (isMacintosh) {
            return new ClickLinkOptions(57 /* KeyCode.Meta */, 'metaKey', 6 /* KeyCode.Alt */, 'altKey', mouseMiddleClickAction);
        }
        return new ClickLinkOptions(5 /* KeyCode.Ctrl */, 'ctrlKey', 6 /* KeyCode.Alt */, 'altKey', mouseMiddleClickAction);
    }
    if (isMacintosh) {
        return new ClickLinkOptions(6 /* KeyCode.Alt */, 'altKey', 57 /* KeyCode.Meta */, 'metaKey', mouseMiddleClickAction);
    }
    return new ClickLinkOptions(6 /* KeyCode.Alt */, 'altKey', 5 /* KeyCode.Ctrl */, 'ctrlKey', mouseMiddleClickAction);
}
class ClickLinkGesture extends Disposable {
    constructor(editor, opts) {
        super();
        this._onMouseMoveOrRelevantKeyDown = this._register(new Emitter());
        this.onMouseMoveOrRelevantKeyDown = this._onMouseMoveOrRelevantKeyDown.event;
        this._onExecute = this._register(new Emitter());
        this.onExecute = this._onExecute.event;
        this._onCancel = this._register(new Emitter());
        this.onCancel = this._onCancel.event;
        this._editor = editor;
        this._extractLineNumberFromMouseEvent = opts?.extractLineNumberFromMouseEvent ?? ((e) => e.target.position ? e.target.position.lineNumber : 0);
        this._opts = createOptions(this._editor.getOption(86 /* EditorOption.multiCursorModifier */), this._editor.getOption(87 /* EditorOption.mouseMiddleClickAction */));
        this._lastMouseMoveEvent = null;
        this._hasTriggerKeyOnMouseDown = false;
        this._lineNumberOnMouseDown = 0;
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(86 /* EditorOption.multiCursorModifier */) || e.hasChanged(87 /* EditorOption.mouseMiddleClickAction */)) {
                const newOpts = createOptions(this._editor.getOption(86 /* EditorOption.multiCursorModifier */), this._editor.getOption(87 /* EditorOption.mouseMiddleClickAction */));
                if (this._opts.equals(newOpts)) {
                    return;
                }
                this._opts = newOpts;
                this._lastMouseMoveEvent = null;
                this._hasTriggerKeyOnMouseDown = false;
                this._lineNumberOnMouseDown = 0;
                this._onCancel.fire();
            }
        }));
        this._register(this._editor.onMouseMove((e) => this._onEditorMouseMove(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onMouseDown((e) => this._onEditorMouseDown(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onMouseUp((e) => this._onEditorMouseUp(new ClickLinkMouseEvent(e, this._opts))));
        this._register(this._editor.onKeyDown((e) => this._onEditorKeyDown(new ClickLinkKeyboardEvent(e, this._opts))));
        this._register(this._editor.onKeyUp((e) => this._onEditorKeyUp(new ClickLinkKeyboardEvent(e, this._opts))));
        this._register(this._editor.onMouseDrag(() => this._resetHandler()));
        this._register(this._editor.onDidChangeCursorSelection((e) => this._onDidChangeCursorSelection(e)));
        this._register(this._editor.onDidChangeModel((e) => this._resetHandler()));
        this._register(this._editor.onDidChangeModelContent(() => this._resetHandler()));
        this._register(this._editor.onDidScrollChange((e) => {
            if (e.scrollTopChanged || e.scrollLeftChanged) {
                this._resetHandler();
            }
        }));
    }
    _onDidChangeCursorSelection(e) {
        if (e.selection && e.selection.startColumn !== e.selection.endColumn) {
            this._resetHandler(); // immediately stop this feature if the user starts to select (https://github.com/microsoft/vscode/issues/7827)
        }
    }
    _onEditorMouseMove(mouseEvent) {
        this._lastMouseMoveEvent = mouseEvent;
        this._onMouseMoveOrRelevantKeyDown.fire([mouseEvent, null]);
    }
    _onEditorMouseDown(mouseEvent) {
        // We need to record if we had the trigger key on mouse down because someone might select something in the editor
        // holding the mouse down and then while mouse is down start to press Ctrl/Cmd to start a copy operation and then
        // release the mouse button without wanting to do the navigation.
        // With this flag we prevent goto definition if the mouse was down before the trigger key was pressed.
        this._hasTriggerKeyOnMouseDown = mouseEvent.hasTriggerModifier;
        this._lineNumberOnMouseDown = this._extractLineNumberFromMouseEvent(mouseEvent);
    }
    _onEditorMouseUp(mouseEvent) {
        const currentLineNumber = this._extractLineNumberFromMouseEvent(mouseEvent);
        const lineNumbersCorrect = !!this._lineNumberOnMouseDown && this._lineNumberOnMouseDown === currentLineNumber;
        if (lineNumbersCorrect && (this._hasTriggerKeyOnMouseDown || (mouseEvent.isMiddleClick && mouseEvent.mouseMiddleClickAction === 'openLink'))) {
            this._onExecute.fire(mouseEvent);
        }
    }
    _onEditorKeyDown(e) {
        if (this._lastMouseMoveEvent
            && (e.keyCodeIsTriggerKey // User just pressed Ctrl/Cmd (normal goto definition)
                || (e.keyCodeIsSideBySideKey && e.hasTriggerModifier) // User pressed Ctrl/Cmd+Alt (goto definition to the side)
            )) {
            this._onMouseMoveOrRelevantKeyDown.fire([this._lastMouseMoveEvent, e]);
        }
        else if (e.hasTriggerModifier) {
            this._onCancel.fire(); // remove decorations if user holds another key with ctrl/cmd to prevent accident goto declaration
        }
    }
    _onEditorKeyUp(e) {
        if (e.keyCodeIsTriggerKey) {
            this._onCancel.fire();
        }
    }
    _resetHandler() {
        this._lastMouseMoveEvent = null;
        this._hasTriggerKeyOnMouseDown = false;
        this._onCancel.fire();
    }
}

export { ClickLinkGesture, ClickLinkKeyboardEvent, ClickLinkMouseEvent, ClickLinkOptions };
