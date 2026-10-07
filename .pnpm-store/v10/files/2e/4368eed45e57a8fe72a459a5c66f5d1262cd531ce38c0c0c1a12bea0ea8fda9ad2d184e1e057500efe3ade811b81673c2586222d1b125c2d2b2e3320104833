import { registerEditorContribution, registerEditorAction, registerEditorCommand } from '../../../browser/editorExtensions.js';
import { editorConfigurationBaseNode } from '../../../common/config/editorConfigurationSchema.js';
import { QuickFixAction, RefactorAction, SourceAction, OrganizeImportsAction, AutoFixAction, FixAllAction, CodeActionCommand } from './codeActionCommands.js';
import { CodeActionController } from './codeActionController.js';
import { LightBulbWidget } from './lightBulbWidget.js';
import { localize } from '../../../../nls.js';
import { Extensions } from '../../../../platform/configuration/common/configurationRegistry.js';
import { Registry } from '../../../../platform/registry/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
registerEditorContribution(CodeActionController.ID, CodeActionController, 3 /* EditorContributionInstantiation.Eventually */);
registerEditorContribution(LightBulbWidget.ID, LightBulbWidget, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(QuickFixAction);
registerEditorAction(RefactorAction);
registerEditorAction(SourceAction);
registerEditorAction(OrganizeImportsAction);
registerEditorAction(AutoFixAction);
registerEditorAction(FixAllAction);
registerEditorCommand(new CodeActionCommand());
Registry.as(Extensions.Configuration).registerConfiguration({
    ...editorConfigurationBaseNode,
    properties: {
        'editor.codeActionWidget.showHeaders': {
            type: 'boolean',
            scope: 6 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            description: localize(860, "Enable/disable showing group headers in the Code Action menu."),
            default: true,
        },
    }
});
Registry.as(Extensions.Configuration).registerConfiguration({
    ...editorConfigurationBaseNode,
    properties: {
        'editor.codeActionWidget.includeNearbyQuickFixes': {
            type: 'boolean',
            scope: 6 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            description: localize(861, "Enable/disable showing nearest Quick Fix within a line when not currently on a diagnostic."),
            default: true,
        },
    }
});
Registry.as(Extensions.Configuration).registerConfiguration({
    ...editorConfigurationBaseNode,
    properties: {
        'editor.codeActions.triggerOnFocusChange': {
            type: 'boolean',
            scope: 6 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            markdownDescription: localize(862, 'Enable triggering {0} when {1} is set to {2}. Code Actions must be set to {3} to be triggered for window and focus changes.', '`#editor.codeActionsOnSave#`', '`#files.autoSave#`', '`afterDelay`', '`always`'),
            default: false,
        },
    }
});
