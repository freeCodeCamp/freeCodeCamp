/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const SEMANTIC_HIGHLIGHTING_SETTING_ID = 'editor.semanticHighlighting';
function isSemanticColoringEnabled(model, themeService, configurationService) {
    const setting = configurationService.getValue(SEMANTIC_HIGHLIGHTING_SETTING_ID, { overrideIdentifier: model.getLanguageId(), resource: model.uri })?.enabled;
    if (typeof setting === 'boolean') {
        return setting;
    }
    return themeService.getColorTheme().semanticHighlighting;
}

export { SEMANTIC_HIGHLIGHTING_SETTING_ID, isSemanticColoringEnabled };
