import { registerEditorContribution, registerEditorCommand, EditorCommand } from '../../../browser/editorExtensions.js';
import { registerEditorFeature } from '../../../common/editorFeatures.js';
import { DefaultDropProvidersFeature } from './defaultProviders.js';
import { DropIntoEditorController, dropWidgetVisibleCtx, changeDropTypeCommandId } from './dropIntoEditorController.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(DropIntoEditorController.ID, DropIntoEditorController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorFeature(DefaultDropProvidersFeature);
registerEditorCommand(new class extends EditorCommand {
    constructor() {
        super({
            id: changeDropTypeCommandId,
            precondition: dropWidgetVisibleCtx,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */,
                primary: 2048 /* KeyMod.CtrlCmd */ | 89 /* KeyCode.Period */,
            }
        });
    }
    runEditorCommand(_accessor, editor, _args) {
        DropIntoEditorController.get(editor)?.changeDropType();
    }
});
registerEditorCommand(new class extends EditorCommand {
    constructor() {
        super({
            id: 'editor.hideDropWidget',
            precondition: dropWidgetVisibleCtx,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */,
                primary: 9 /* KeyCode.Escape */,
            }
        });
    }
    runEditorCommand(_accessor, editor, _args) {
        DropIntoEditorController.get(editor)?.clearWidgets();
    }
});
