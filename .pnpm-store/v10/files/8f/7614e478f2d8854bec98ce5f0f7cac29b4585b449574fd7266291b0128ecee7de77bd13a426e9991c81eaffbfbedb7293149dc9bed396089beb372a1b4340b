import { EditorAction, EditorAction2 } from '../../../../browser/editorExtensions.js';
import { localize2, localize } from '../../../../../nls.js';
import { EditorContextKeys } from '../../../../common/editorContextKeys.js';
import { MenuId } from '../../../../../platform/actions/common/actions.js';
import { StandaloneColorPickerController } from './standaloneColorPickerController.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ShowOrFocusStandaloneColorPicker extends EditorAction2 {
    constructor() {
        super({
            id: 'editor.action.showOrFocusStandaloneColorPicker',
            title: {
                ...localize2(889, "Show or Focus Standalone Color Picker"),
                mnemonicTitle: localize(888, "&&Show or Focus Standalone Color Picker"),
            },
            precondition: undefined,
            menu: [
                { id: MenuId.CommandPalette },
            ],
            metadata: {
                description: localize2(890, "Show or focus a standalone color picker which uses the default color provider. It displays hex/rgb/hsl colors."),
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        StandaloneColorPickerController.get(editor)?.showOrFocus();
    }
}
class HideStandaloneColorPicker extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.hideColorPicker',
            label: localize2(891, "Hide the Color Picker"),





            precondition: EditorContextKeys.standaloneColorPickerVisible.isEqualTo(true),
            kbOpts: {
                primary: 9 /* KeyCode.Escape */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(892, "Hide the standalone color picker."),
            }
        });
    }
    run(_accessor, editor) {
        StandaloneColorPickerController.get(editor)?.hide();
    }
}
class InsertColorWithStandaloneColorPicker extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.insertColorWithStandaloneColorPicker',
            label: localize2(893, "Insert Color with Standalone Color Picker"),





            precondition: EditorContextKeys.standaloneColorPickerFocused.isEqualTo(true),
            kbOpts: {
                primary: 3 /* KeyCode.Enter */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: {
                description: localize2(894, "Insert hex/rgb/hsl colors with the focused standalone color picker."),
            }
        });
    }
    run(_accessor, editor) {
        StandaloneColorPickerController.get(editor)?.insertColor();
    }
}

export { HideStandaloneColorPicker, InsertColorWithStandaloneColorPicker, ShowOrFocusStandaloneColorPicker };
