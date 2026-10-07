import { stripIcons } from '../../../../base/common/iconLabels.js';
import { isLocalizedString } from '../../../../platform/action/common/action.js';
import { AbstractCommandsQuickAccessProvider } from '../../../../platform/quickinput/browser/commandsQuickAccess.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class AbstractEditorCommandsQuickAccessProvider extends AbstractCommandsQuickAccessProvider {
    constructor(options, instantiationService, keybindingService, commandService, telemetryService, dialogService) {
        super(options, instantiationService, keybindingService, commandService, telemetryService, dialogService);
    }
    getCodeEditorCommandPicks() {
        const activeTextEditorControl = this.activeTextEditorControl;
        if (!activeTextEditorControl) {
            return [];
        }
        const editorCommandPicks = [];
        for (const editorAction of activeTextEditorControl.getSupportedActions()) {
            let commandDescription;
            if (editorAction.metadata?.description) {
                if (isLocalizedString(editorAction.metadata.description)) {
                    commandDescription = editorAction.metadata.description;
                }
                else {
                    commandDescription = { original: editorAction.metadata.description, value: editorAction.metadata.description };
                }
            }
            editorCommandPicks.push({
                commandId: editorAction.id,
                commandAlias: editorAction.alias,
                commandDescription,
                label: stripIcons(editorAction.label) || editorAction.id,
            });
        }
        return editorCommandPicks;
    }
}

export { AbstractEditorCommandsQuickAccessProvider };
