import { LanguageFeatureRegistry } from '../languageFeatureRegistry.js';
import { ILanguageFeaturesService } from './languageFeatures.js';
import { registerSingleton } from '../../../platform/instantiation/common/extensions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class LanguageFeaturesService {
    constructor() {
        this.referenceProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.renameProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.newSymbolNamesProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.codeActionProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.definitionProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.typeDefinitionProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.declarationProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.implementationProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentSymbolProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.inlayHintsProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.colorProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.codeLensProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentRangeFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.onTypeFormattingEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.signatureHelpProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.hoverProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentHighlightProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.multiDocumentHighlightProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.selectionRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.foldingRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.linkProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.inlineCompletionsProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.completionProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.linkedEditingRangeProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentRangeSemanticTokensProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentSemanticTokensProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentDropEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
        this.documentPasteEditProvider = new LanguageFeatureRegistry(this._score.bind(this));
    }
    _score(uri) {
        return this._notebookTypeResolver?.(uri);
    }
}
registerSingleton(ILanguageFeaturesService, LanguageFeaturesService, 1 /* InstantiationType.Delayed */);

export { LanguageFeaturesService };
