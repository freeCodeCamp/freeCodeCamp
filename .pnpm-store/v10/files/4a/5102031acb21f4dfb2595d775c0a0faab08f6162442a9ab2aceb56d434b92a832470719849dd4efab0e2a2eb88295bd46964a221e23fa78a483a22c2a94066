import { SHOW_OR_FOCUS_HOVER_ACTION_ID, SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID, HIDE_HOVER_ACTION_ID, SCROLL_UP_HOVER_ACTION_ID, SCROLL_DOWN_HOVER_ACTION_ID, SCROLL_LEFT_HOVER_ACTION_ID, SCROLL_RIGHT_HOVER_ACTION_ID, PAGE_UP_HOVER_ACTION_ID, PAGE_DOWN_HOVER_ACTION_ID, GO_TO_TOP_HOVER_ACTION_ID, GO_TO_BOTTOM_HOVER_ACTION_ID, INCREASE_HOVER_VERBOSITY_ACTION_LABEL, INCREASE_HOVER_VERBOSITY_ACTION_ID, DECREASE_HOVER_VERBOSITY_ACTION_LABEL, DECREASE_HOVER_VERBOSITY_ACTION_ID } from './hoverActionIds.js';
import { KeyChord } from '../../../../base/common/keyCodes.js';
import { EditorAction } from '../../../browser/editorExtensions.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { GotoDefinitionAtPositionEditorContribution } from '../../gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import { ContentHoverController } from './contentHoverController.js';
import { HoverVerbosityAction } from '../../../common/languages.js';
import { localize, localize2 } from '../../../../nls.js';
import './hover.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var HoverFocusBehavior;
(function (HoverFocusBehavior) {
    HoverFocusBehavior["NoAutoFocus"] = "noAutoFocus";
    HoverFocusBehavior["FocusIfVisible"] = "focusIfVisible";
    HoverFocusBehavior["AutoFocusImmediately"] = "autoFocusImmediately";
})(HoverFocusBehavior || (HoverFocusBehavior = {}));
class ShowOrFocusHoverAction extends EditorAction {
    constructor() {
        super({
            id: SHOW_OR_FOCUS_HOVER_ACTION_ID,
            label: localize2(1107, "Show or Focus Hover"),







            metadata: {
                description: localize2(1108, 'Show or focus the editor hover which shows documentation, references, and other content for a symbol at the current cursor position.'),
                args: [{
                        name: 'args',
                        schema: {
                            type: 'object',
                            properties: {
                                'focus': {
                                    description: 'Controls if and when the hover should take focus upon being triggered by this action.',
                                    enum: [HoverFocusBehavior.NoAutoFocus, HoverFocusBehavior.FocusIfVisible, HoverFocusBehavior.AutoFocusImmediately],
                                    enumDescriptions: [
                                        localize(1104, 'The hover will not automatically take focus.'),
                                        localize(1105, 'The hover will take focus only if it is already visible.'),
                                        localize(1106, 'The hover will automatically take focus when it appears.'),
                                    ],
                                    default: HoverFocusBehavior.FocusIfVisible,
                                }
                            },
                        }
                    }]
            },
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        const focusArgument = args?.focus;
        let focusOption = HoverFocusBehavior.FocusIfVisible;
        if (Object.values(HoverFocusBehavior).includes(focusArgument)) {
            focusOption = focusArgument;
        }
        else if (typeof focusArgument === 'boolean' && focusArgument) {
            focusOption = HoverFocusBehavior.AutoFocusImmediately;
        }
        const showContentHover = (focus) => {
            const position = editor.getPosition();
            const range = new Range(position.lineNumber, position.column, position.lineNumber, position.column);
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */, 2 /* HoverStartSource.Keyboard */, focus);
        };
        const accessibilitySupportEnabled = editor.getOption(2 /* EditorOption.accessibilitySupport */) === 2 /* AccessibilitySupport.Enabled */;
        if (controller.isHoverVisible) {
            if (focusOption !== HoverFocusBehavior.NoAutoFocus) {
                controller.focus();
            }
            else {
                showContentHover(accessibilitySupportEnabled);
            }
        }
        else {
            showContentHover(accessibilitySupportEnabled || focusOption === HoverFocusBehavior.AutoFocusImmediately);
        }
    }
}
class ShowDefinitionPreviewHoverAction extends EditorAction {
    constructor() {
        super({
            id: SHOW_DEFINITION_PREVIEW_HOVER_ACTION_ID,
            label: localize2(1109, "Show Definition Preview Hover"),






            precondition: undefined,
            metadata: {
                description: localize2(1110, 'Show the definition preview hover in the editor.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        const position = editor.getPosition();
        if (!position) {
            return;
        }
        const range = new Range(position.lineNumber, position.column, position.lineNumber, position.column);
        const goto = GotoDefinitionAtPositionEditorContribution.get(editor);
        if (!goto) {
            return;
        }
        const promise = goto.startFindDefinitionFromCursor(position);
        promise.then(() => {
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */, 2 /* HoverStartSource.Keyboard */, true);
        });
    }
}
class HideContentHoverAction extends EditorAction {
    constructor() {
        super({
            id: HIDE_HOVER_ACTION_ID,
            label: localize2(1111, "Hide Hover"),



            alias: 'Hide Content Hover',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        ContentHoverController.get(editor)?.hideContentHover();
    }
}
class ScrollUpHoverAction extends EditorAction {
    constructor() {
        super({
            id: SCROLL_UP_HOVER_ACTION_ID,
            label: localize2(1112, "Scroll Up Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 16 /* KeyCode.UpArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1113, 'Scroll up the editor hover.')
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollUp();
    }
}
class ScrollDownHoverAction extends EditorAction {
    constructor() {
        super({
            id: SCROLL_DOWN_HOVER_ACTION_ID,
            label: localize2(1114, "Scroll Down Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 18 /* KeyCode.DownArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1115, 'Scroll down the editor hover.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollDown();
    }
}
class ScrollLeftHoverAction extends EditorAction {
    constructor() {
        super({
            id: SCROLL_LEFT_HOVER_ACTION_ID,
            label: localize2(1116, "Scroll Left Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 15 /* KeyCode.LeftArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1117, 'Scroll left the editor hover.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollLeft();
    }
}
class ScrollRightHoverAction extends EditorAction {
    constructor() {
        super({
            id: SCROLL_RIGHT_HOVER_ACTION_ID,
            label: localize2(1118, "Scroll Right Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 17 /* KeyCode.RightArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1119, 'Scroll right the editor hover.')
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollRight();
    }
}
class PageUpHoverAction extends EditorAction {
    constructor() {
        super({
            id: PAGE_UP_HOVER_ACTION_ID,
            label: localize2(1120, "Page Up Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 11 /* KeyCode.PageUp */,
                secondary: [512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1121, 'Page up the editor hover.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.pageUp();
    }
}
class PageDownHoverAction extends EditorAction {
    constructor() {
        super({
            id: PAGE_DOWN_HOVER_ACTION_ID,
            label: localize2(1122, "Page Down Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 12 /* KeyCode.PageDown */,
                secondary: [512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1123, 'Page down the editor hover.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.pageDown();
    }
}
class GoToTopHoverAction extends EditorAction {
    constructor() {
        super({
            id: GO_TO_TOP_HOVER_ACTION_ID,
            label: localize2(1124, "Go To Top Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 14 /* KeyCode.Home */,
                secondary: [2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1125, 'Go to the top of the editor hover.'),
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.goToTop();
    }
}
class GoToBottomHoverAction extends EditorAction {
    constructor() {
        super({
            id: GO_TO_BOTTOM_HOVER_ACTION_ID,
            label: localize2(1126, "Go To Bottom Hover"),





            precondition: EditorContextKeys.hoverFocused,
            kbOpts: {
                kbExpr: EditorContextKeys.hoverFocused,
                primary: 13 /* KeyCode.End */,
                secondary: [2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1127, 'Go to the bottom of the editor hover.')
            },
        });
    }
    run(accessor, editor) {
        const controller = ContentHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.goToBottom();
    }
}
class IncreaseHoverVerbosityLevel extends EditorAction {
    constructor() {
        super({
            id: INCREASE_HOVER_VERBOSITY_ACTION_ID,
            label: INCREASE_HOVER_VERBOSITY_ACTION_LABEL,
            alias: 'Increase Hover Verbosity Level',
            precondition: EditorContextKeys.hoverVisible
        });
    }
    run(accessor, editor, args) {
        const hoverController = ContentHoverController.get(editor);
        if (!hoverController) {
            return;
        }
        const index = args?.index !== undefined ? args.index : hoverController.focusedHoverPartIndex();
        hoverController.updateHoverVerbosityLevel(HoverVerbosityAction.Increase, index, args?.focus);
    }
}
class DecreaseHoverVerbosityLevel extends EditorAction {
    constructor() {
        super({
            id: DECREASE_HOVER_VERBOSITY_ACTION_ID,
            label: DECREASE_HOVER_VERBOSITY_ACTION_LABEL,
            alias: 'Decrease Hover Verbosity Level',
            precondition: EditorContextKeys.hoverVisible
        });
    }
    run(accessor, editor, args) {
        const hoverController = ContentHoverController.get(editor);
        if (!hoverController) {
            return;
        }
        const index = args?.index !== undefined ? args.index : hoverController.focusedHoverPartIndex();
        ContentHoverController.get(editor)?.updateHoverVerbosityLevel(HoverVerbosityAction.Decrease, index, args?.focus);
    }
}

export { DecreaseHoverVerbosityLevel, GoToBottomHoverAction, GoToTopHoverAction, HideContentHoverAction, IncreaseHoverVerbosityLevel, PageDownHoverAction, PageUpHoverAction, ScrollDownHoverAction, ScrollLeftHoverAction, ScrollRightHoverAction, ScrollUpHoverAction, ShowDefinitionPreviewHoverAction, ShowOrFocusHoverAction };
