import { isMacintosh } from '../../../base/common/platform.js';
import { localize } from '../../../nls.js';
import { ContextKeyExpr } from '../../contextkey/common/contextkey.js';
import { InputFocusedContext } from '../../contextkey/common/contextkeys.js';
import { KeybindingsRegistry } from '../../keybinding/common/keybindingsRegistry.js';
import { quickInputTypeContextKeyValue, inQuickInputContext, endOfQuickInputBoxContext } from './quickInput.js';
import { QuickPickFocus, IQuickInputService } from '../common/quickInput.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function registerQuickInputCommandAndKeybindingRule(rule, options = {}) {
    KeybindingsRegistry.registerCommandAndKeybindingRule({
        weight: 200 /* KeybindingWeight.WorkbenchContrib */,
        when: inQuickInputContext,
        metadata: { description: localize(1758, "Used while in the context of any kind of quick input. If you change one keybinding for this command, you should change all of the other keybindings (modifier variants) of this command as well.") },
        ...rule,
        secondary: getSecondary(rule.primary, rule.secondary ?? [], options)
    });
}
function registerQuickPickCommandAndKeybindingRule(rule, options = {}) {
    KeybindingsRegistry.registerCommandAndKeybindingRule({
        weight: 200 /* KeybindingWeight.WorkbenchContrib */,
        when: ContextKeyExpr.and(ContextKeyExpr.or(
        // Only things that use Tree widgets
        ContextKeyExpr.equals(quickInputTypeContextKeyValue, "quickPick" /* QuickInputType.QuickPick */), ContextKeyExpr.equals(quickInputTypeContextKeyValue, "quickTree" /* QuickInputType.QuickTree */)), inQuickInputContext),
        metadata: { description: localize(1759, "Used while in the context of the quick pick. If you change one keybinding for this command, you should change all of the other keybindings (modifier variants) of this command as well.") },
        ...rule,
        secondary: getSecondary(rule.primary, rule.secondary ?? [], options)
    });
}
const ctrlKeyMod = isMacintosh ? 256 /* KeyMod.WinCtrl */ : 2048 /* KeyMod.CtrlCmd */;
// This function will generate all the combinations of keybindings for the given primary keybinding
function getSecondary(primary, secondary, options = {}) {
    if (options.withAltMod) {
        secondary.push(512 /* KeyMod.Alt */ + primary);
    }
    if (options.withCtrlMod) {
        secondary.push(ctrlKeyMod + primary);
        if (options.withAltMod) {
            secondary.push(512 /* KeyMod.Alt */ + ctrlKeyMod + primary);
        }
    }
    if (options.withCmdMod && isMacintosh) {
        secondary.push(2048 /* KeyMod.CtrlCmd */ + primary);
        if (options.withCtrlMod) {
            secondary.push(2048 /* KeyMod.CtrlCmd */ + 256 /* KeyMod.WinCtrl */ + primary);
        }
        if (options.withAltMod) {
            secondary.push(2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + primary);
            if (options.withCtrlMod) {
                secondary.push(2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + 256 /* KeyMod.WinCtrl */ + primary);
            }
        }
    }
    return secondary;
}
//#region Navigation
function focusHandler(focus, focusOnQuickNatigate) {
    return accessor => {
        // Assuming this is a quick pick due to above when clause
        const currentQuickPick = accessor.get(IQuickInputService).currentQuickInput;
        if (!currentQuickPick) {
            return;
        }
        if (focusOnQuickNatigate && currentQuickPick.quickNavigate) {
            return currentQuickPick.focus(focusOnQuickNatigate);
        }
        return currentQuickPick.focus(focus);
    };
}
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.pageNext', primary: 12 /* KeyCode.PageDown */, handler: focusHandler(QuickPickFocus.NextPage) }, { withAltMod: true, withCtrlMod: true, withCmdMod: true });
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.pagePrevious', primary: 11 /* KeyCode.PageUp */, handler: focusHandler(QuickPickFocus.PreviousPage) }, { withAltMod: true, withCtrlMod: true, withCmdMod: true });
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.first', primary: ctrlKeyMod + 14 /* KeyCode.Home */, handler: focusHandler(QuickPickFocus.First) }, { withAltMod: true, withCmdMod: true });
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.last', primary: ctrlKeyMod + 13 /* KeyCode.End */, handler: focusHandler(QuickPickFocus.Last) }, { withAltMod: true, withCmdMod: true });
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.next', primary: 18 /* KeyCode.DownArrow */, handler: focusHandler(QuickPickFocus.Next) }, { withCtrlMod: true });
registerQuickPickCommandAndKeybindingRule({ id: 'quickInput.previous', primary: 16 /* KeyCode.UpArrow */, handler: focusHandler(QuickPickFocus.Previous) }, { withCtrlMod: true });
// The next & previous separator commands are interesting because if we are in quick access mode, we are already holding a modifier key down.
// In this case, we want that modifier key+up/down to navigate to the next/previous item, not the next/previous separator.
// To handle this, we have a separate command for navigating to the next/previous separator when we are not in quick access mode.
// If, however, we are in quick access mode, and you hold down an additional modifier key, we will navigate to the next/previous separator.
const nextSeparatorFallbackDesc = localize(1760, "If we're in quick access mode, this will navigate to the next item. If we are not in quick access mode, this will navigate to the next separator.");
const prevSeparatorFallbackDesc = localize(1761, "If we're in quick access mode, this will navigate to the previous item. If we are not in quick access mode, this will navigate to the previous separator.");
if (isMacintosh) {
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.nextSeparatorWithQuickAccessFallback',
        primary: 2048 /* KeyMod.CtrlCmd */ + 18 /* KeyCode.DownArrow */,
        handler: focusHandler(QuickPickFocus.NextSeparator, QuickPickFocus.Next),
        metadata: { description: nextSeparatorFallbackDesc }
    });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.nextSeparator',
        primary: 2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + 18 /* KeyCode.DownArrow */,
        // Since macOS has the cmd key as the primary modifier, we need to add this additional
        // keybinding to capture cmd+ctrl+upArrow
        secondary: [2048 /* KeyMod.CtrlCmd */ + 256 /* KeyMod.WinCtrl */ + 18 /* KeyCode.DownArrow */],
        handler: focusHandler(QuickPickFocus.NextSeparator)
    }, { withCtrlMod: true });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.previousSeparatorWithQuickAccessFallback',
        primary: 2048 /* KeyMod.CtrlCmd */ + 16 /* KeyCode.UpArrow */,
        handler: focusHandler(QuickPickFocus.PreviousSeparator, QuickPickFocus.Previous),
        metadata: { description: prevSeparatorFallbackDesc }
    });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.previousSeparator',
        primary: 2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + 16 /* KeyCode.UpArrow */,
        // Since macOS has the cmd key as the primary modifier, we need to add this additional
        // keybinding to capture cmd+ctrl+upArrow
        secondary: [2048 /* KeyMod.CtrlCmd */ + 256 /* KeyMod.WinCtrl */ + 16 /* KeyCode.UpArrow */],
        handler: focusHandler(QuickPickFocus.PreviousSeparator)
    }, { withCtrlMod: true });
}
else {
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.nextSeparatorWithQuickAccessFallback',
        primary: 512 /* KeyMod.Alt */ + 18 /* KeyCode.DownArrow */,
        handler: focusHandler(QuickPickFocus.NextSeparator, QuickPickFocus.Next),
        metadata: { description: nextSeparatorFallbackDesc }
    });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.nextSeparator',
        primary: 2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + 18 /* KeyCode.DownArrow */,
        handler: focusHandler(QuickPickFocus.NextSeparator)
    });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.previousSeparatorWithQuickAccessFallback',
        primary: 512 /* KeyMod.Alt */ + 16 /* KeyCode.UpArrow */,
        handler: focusHandler(QuickPickFocus.PreviousSeparator, QuickPickFocus.Previous),
        metadata: { description: prevSeparatorFallbackDesc }
    });
    registerQuickPickCommandAndKeybindingRule({
        id: 'quickInput.previousSeparator',
        primary: 2048 /* KeyMod.CtrlCmd */ + 512 /* KeyMod.Alt */ + 16 /* KeyCode.UpArrow */,
        handler: focusHandler(QuickPickFocus.PreviousSeparator)
    });
}
//#endregion
//#region Accept
KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: 'quickInput.accept',
    primary: 3 /* KeyCode.Enter */,
    weight: 200 /* KeybindingWeight.WorkbenchContrib */,
    when: ContextKeyExpr.and(
    // All other kinds of Quick things handle Accept, except Widget. In other words, Accepting is a detail on the things
    // that extend IQuickInput
    ContextKeyExpr.notEquals(quickInputTypeContextKeyValue, "quickWidget" /* QuickInputType.QuickWidget */), inQuickInputContext, ContextKeyExpr.not('isComposing')),
    metadata: { description: localize(1762, "Used while in the context of some quick input. If you change one keybinding for this command, you should change all of the other keybindings (modifier variants) of this command as well.") },
    handler: (accessor) => {
        const currentQuickPick = accessor.get(IQuickInputService).currentQuickInput;
        currentQuickPick?.accept();
    },
    secondary: getSecondary(3 /* KeyCode.Enter */, [], { withAltMod: true, withCtrlMod: true, withCmdMod: true })
});
registerQuickPickCommandAndKeybindingRule({
    id: 'quickInput.acceptInBackground',
    // If we are in the quick pick but the input box is not focused or our cursor is at the end of the input box
    when: ContextKeyExpr.and(inQuickInputContext, ContextKeyExpr.equals(quickInputTypeContextKeyValue, "quickPick" /* QuickInputType.QuickPick */), ContextKeyExpr.or(InputFocusedContext.negate(), endOfQuickInputBoxContext)),
    primary: 17 /* KeyCode.RightArrow */,
    // Need a little extra weight to ensure this keybinding is preferred over the default cmd+alt+right arrow keybinding
    // https://github.com/microsoft/vscode/blob/1451e4fbbbf074a4355cc537c35b547b80ce1c52/src/vs/workbench/browser/parts/editor/editorActions.ts#L1178-L1195
    weight: 200 /* KeybindingWeight.WorkbenchContrib */ + 50,
    handler: (accessor) => {
        const currentQuickPick = accessor.get(IQuickInputService).currentQuickInput;
        currentQuickPick?.accept(true);
    },
}, { withAltMod: true, withCtrlMod: true, withCmdMod: true });
//#endregion
//#region Hide
registerQuickInputCommandAndKeybindingRule({
    id: 'quickInput.hide',
    primary: 9 /* KeyCode.Escape */,
    handler: (accessor) => {
        const currentQuickPick = accessor.get(IQuickInputService).currentQuickInput;
        currentQuickPick?.hide();
    }
}, { withAltMod: true, withCtrlMod: true, withCmdMod: true });
//#endregion
//#region Toggle Hover
registerQuickPickCommandAndKeybindingRule({
    id: 'quickInput.toggleHover',
    primary: ctrlKeyMod | 10 /* KeyCode.Space */,
    handler: accessor => {
        const quickInputService = accessor.get(IQuickInputService);
        quickInputService.toggleHover();
    }
});
//#endregion
