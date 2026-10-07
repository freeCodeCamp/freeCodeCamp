import { Parser } from './parser/cssParser.js';
import { CSSCompletion } from './services/cssCompletion.js';
import { CSSHover } from './services/cssHover.js';
import { CSSNavigation } from './services/cssNavigation.js';
import { CSSCodeActions } from './services/cssCodeActions.js';
import { CSSValidation } from './services/cssValidation.js';
import { SCSSParser } from './parser/scssParser.js';
import { SCSSCompletion } from './services/scssCompletion.js';
import { LESSParser } from './parser/lessParser.js';
import { LESSCompletion } from './services/lessCompletion.js';
import { getFoldingRanges } from './services/cssFolding.js';
import { format } from './services/cssFormatter.js';
import { CSSDataManager } from './languageFacts/dataManager.js';
import { CSSDataProvider } from './languageFacts/dataProvider.js';
import { getSelectionRanges } from './services/cssSelectionRange.js';
import { SCSSNavigation } from './services/scssNavigation.js';
export { ClientCapabilities, FileType } from './cssLanguageTypes.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function newCSSDataProvider(data) {
    return new CSSDataProvider(data);
}
function createFacade(parser, completion, hover, navigation, codeActions, validation, cssDataManager) {
    return {
        configure: (settings) => {
            validation.configure(settings);
            completion.configure(settings?.completion);
            hover.configure(settings?.hover);
            navigation.configure(settings?.importAliases);
        },
        setDataProviders: cssDataManager.setDataProviders.bind(cssDataManager),
        doValidation: validation.doValidation.bind(validation),
        parseStylesheet: parser.parseStylesheet.bind(parser),
        doComplete: completion.doComplete.bind(completion),
        doComplete2: completion.doComplete2.bind(completion),
        setCompletionParticipants: completion.setCompletionParticipants.bind(completion),
        doHover: hover.doHover.bind(hover),
        format,
        findDefinition: navigation.findDefinition.bind(navigation),
        findReferences: navigation.findReferences.bind(navigation),
        findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
        findDocumentLinks: navigation.findDocumentLinks.bind(navigation),
        findDocumentLinks2: navigation.findDocumentLinks2.bind(navigation),
        findDocumentSymbols: navigation.findSymbolInformations.bind(navigation),
        findDocumentSymbols2: navigation.findDocumentSymbols.bind(navigation),
        doCodeActions: codeActions.doCodeActions.bind(codeActions),
        doCodeActions2: codeActions.doCodeActions2.bind(codeActions),
        findDocumentColors: navigation.findDocumentColors.bind(navigation),
        getColorPresentations: navigation.getColorPresentations.bind(navigation),
        prepareRename: navigation.prepareRename.bind(navigation),
        doRename: navigation.doRename.bind(navigation),
        getFoldingRanges,
        getSelectionRanges
    };
}
const defaultLanguageServiceOptions = {};
function getCSSLanguageService(options = defaultLanguageServiceOptions) {
    const cssDataManager = new CSSDataManager(options);
    return createFacade(new Parser(), new CSSCompletion(null, options, cssDataManager), new CSSHover(options && options.clientCapabilities, cssDataManager), new CSSNavigation(options && options.fileSystemProvider, false), new CSSCodeActions(cssDataManager), new CSSValidation(cssDataManager), cssDataManager);
}
function getSCSSLanguageService(options = defaultLanguageServiceOptions) {
    const cssDataManager = new CSSDataManager(options);
    return createFacade(new SCSSParser(), new SCSSCompletion(options, cssDataManager), new CSSHover(options && options.clientCapabilities, cssDataManager), new SCSSNavigation(options && options.fileSystemProvider), new CSSCodeActions(cssDataManager), new CSSValidation(cssDataManager), cssDataManager);
}
function getLESSLanguageService(options = defaultLanguageServiceOptions) {
    const cssDataManager = new CSSDataManager(options);
    return createFacade(new LESSParser(), new LESSCompletion(options, cssDataManager), new CSSHover(options && options.clientCapabilities, cssDataManager), new CSSNavigation(options && options.fileSystemProvider, true), new CSSCodeActions(cssDataManager), new CSSValidation(cssDataManager), cssDataManager);
}

export { getCSSLanguageService, getLESSLanguageService, getSCSSLanguageService, newCSSDataProvider };
