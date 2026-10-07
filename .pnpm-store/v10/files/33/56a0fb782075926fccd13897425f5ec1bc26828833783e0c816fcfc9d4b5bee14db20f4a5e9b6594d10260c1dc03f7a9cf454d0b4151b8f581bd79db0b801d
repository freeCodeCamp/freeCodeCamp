import { alert } from '../../../../base/browser/ui/aria/aria.js';
import { TabFocus } from '../../../browser/config/tabFocus.js';
import { localize2, localize } from '../../../../nls.js';
import { Action2, registerAction2 } from '../../../../platform/actions/common/actions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ToggleTabFocusModeAction extends Action2 {
    static { this.ID = 'editor.action.toggleTabFocusMode'; }
    constructor() {
        super({
            id: ToggleTabFocusModeAction.ID,
            title: localize2(1530, 'Toggle Tab Key Moves Focus'),
            precondition: undefined,
            keybinding: {
                primary: 2048 /* KeyMod.CtrlCmd */ | 43 /* KeyCode.KeyM */,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 43 /* KeyCode.KeyM */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(1531, "Determines whether the tab key moves focus around the workbench or inserts the tab character in the current editor. This is also called tab trapping, tab navigation, or tab focus mode."),
            },
            f1: true
        });
    }
    run() {
        const oldValue = TabFocus.getTabFocusMode();
        const newValue = !oldValue;
        TabFocus.setTabFocusMode(newValue);
        if (newValue) {
            alert(localize(1528, "Pressing Tab will now move focus to the next focusable element"));
        }
        else {
            alert(localize(1529, "Pressing Tab will now insert the tab character"));
        }
    }
}
registerAction2(ToggleTabFocusModeAction);

export { ToggleTabFocusModeAction };
