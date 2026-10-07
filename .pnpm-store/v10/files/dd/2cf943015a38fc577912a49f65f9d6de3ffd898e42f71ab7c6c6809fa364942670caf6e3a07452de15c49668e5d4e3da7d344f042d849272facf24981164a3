import { createScanner } from './parser/htmlScanner.js';
import { HTMLParser } from './parser/htmlParser.js';
import { HTMLCompletion } from './services/htmlCompletion.js';
import { HTMLHover } from './services/htmlHover.js';
import { format } from './services/htmlFormatter.js';
import { HTMLDocumentLinks } from './services/htmlLinks.js';
import { findDocumentHighlights } from './services/htmlHighlighting.js';
import { findDocumentSymbols2, findDocumentSymbols } from './services/htmlSymbolsProvider.js';
import { doRename } from './services/htmlRename.js';
import { findMatchingTagPosition } from './services/htmlMatchingTagPosition.js';
import { findLinkedEditingRanges } from './services/htmlLinkedEditing.js';
import { HTMLFolding } from './services/htmlFolding.js';
import { HTMLSelectionRange } from './services/htmlSelectionRange.js';
import { HTMLDataProvider } from './languageFacts/dataProvider.js';
import { HTMLDataManager } from './languageFacts/dataManager.js';
export { ClientCapabilities, FileType, ScannerState, TokenType } from './htmlLanguageTypes.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const defaultLanguageServiceOptions = {};
function getLanguageService(options = defaultLanguageServiceOptions) {
    const dataManager = new HTMLDataManager(options);
    const htmlHover = new HTMLHover(options, dataManager);
    const htmlCompletion = new HTMLCompletion(options, dataManager);
    const htmlParser = new HTMLParser(dataManager);
    const htmlSelectionRange = new HTMLSelectionRange(htmlParser);
    const htmlFolding = new HTMLFolding(dataManager);
    const htmlDocumentLinks = new HTMLDocumentLinks(dataManager);
    return {
        setDataProviders: dataManager.setDataProviders.bind(dataManager),
        createScanner,
        parseHTMLDocument: htmlParser.parseDocument.bind(htmlParser),
        doComplete: htmlCompletion.doComplete.bind(htmlCompletion),
        doComplete2: htmlCompletion.doComplete2.bind(htmlCompletion),
        setCompletionParticipants: htmlCompletion.setCompletionParticipants.bind(htmlCompletion),
        doHover: htmlHover.doHover.bind(htmlHover),
        format,
        findDocumentHighlights,
        findDocumentLinks: htmlDocumentLinks.findDocumentLinks.bind(htmlDocumentLinks),
        findDocumentSymbols,
        findDocumentSymbols2,
        getFoldingRanges: htmlFolding.getFoldingRanges.bind(htmlFolding),
        getSelectionRanges: htmlSelectionRange.getSelectionRanges.bind(htmlSelectionRange),
        doQuoteComplete: htmlCompletion.doQuoteComplete.bind(htmlCompletion),
        doTagComplete: htmlCompletion.doTagComplete.bind(htmlCompletion),
        doRename,
        findMatchingTagPosition,
        findOnTypeRenameRanges: findLinkedEditingRanges,
        findLinkedEditingRanges
    };
}
function newHTMLDataProvider(id, customData) {
    return new HTMLDataProvider(id, customData);
}

export { getLanguageService, newHTMLDataProvider };
