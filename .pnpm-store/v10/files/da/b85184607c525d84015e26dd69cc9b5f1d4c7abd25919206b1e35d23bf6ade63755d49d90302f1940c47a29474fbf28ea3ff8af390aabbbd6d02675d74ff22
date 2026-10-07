import { JSONCompletion } from './services/jsonCompletion.js';
import { JSONHover } from './services/jsonHover.js';
import { JSONValidation } from './services/jsonValidation.js';
import { JSONDocumentSymbols } from './services/jsonDocumentSymbols.js';
import { newJSONDocument, parse } from './parser/jsonParser.js';
import { schemaContributions } from './services/configuration.js';
import { JSONSchemaService } from './services/jsonSchemaService.js';
import { getFoldingRanges } from './services/jsonFolding.js';
import { getSelectionRanges } from './services/jsonSelectionRanges.js';
import { sort } from './utils/sort.js';
import { format } from './utils/format.js';
import { findLinks } from './services/jsonLinks.js';
export { ClientCapabilities, ErrorCode, SchemaDraft } from './jsonLanguageTypes.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getLanguageService(params) {
    const promise = params.promiseConstructor || Promise;
    const jsonSchemaService = new JSONSchemaService(params.schemaRequestService, params.workspaceContext, promise);
    jsonSchemaService.setSchemaContributions(schemaContributions);
    const jsonCompletion = new JSONCompletion(jsonSchemaService, params.contributions, promise, params.clientCapabilities);
    const jsonHover = new JSONHover(jsonSchemaService, params.contributions, promise);
    const jsonDocumentSymbols = new JSONDocumentSymbols(jsonSchemaService);
    const jsonValidation = new JSONValidation(jsonSchemaService, promise);
    return {
        configure: (settings) => {
            jsonSchemaService.clearExternalSchemas();
            settings.schemas?.forEach(jsonSchemaService.registerExternalSchema.bind(jsonSchemaService));
            jsonValidation.configure(settings);
        },
        resetSchema: (uri) => jsonSchemaService.onResourceChange(uri),
        doValidation: jsonValidation.doValidation.bind(jsonValidation),
        getLanguageStatus: jsonValidation.getLanguageStatus.bind(jsonValidation),
        parseJSONDocument: (document) => parse(document, { collectComments: true }),
        newJSONDocument: (root, diagnostics) => newJSONDocument(root, diagnostics),
        getMatchingSchemas: jsonSchemaService.getMatchingSchemas.bind(jsonSchemaService),
        doResolve: jsonCompletion.doResolve.bind(jsonCompletion),
        doComplete: jsonCompletion.doComplete.bind(jsonCompletion),
        findDocumentSymbols: jsonDocumentSymbols.findDocumentSymbols.bind(jsonDocumentSymbols),
        findDocumentSymbols2: jsonDocumentSymbols.findDocumentSymbols2.bind(jsonDocumentSymbols),
        findDocumentColors: jsonDocumentSymbols.findDocumentColors.bind(jsonDocumentSymbols),
        getColorPresentations: jsonDocumentSymbols.getColorPresentations.bind(jsonDocumentSymbols),
        doHover: jsonHover.doHover.bind(jsonHover),
        getFoldingRanges,
        getSelectionRanges,
        findDefinition: () => Promise.resolve([]),
        findLinks,
        format: (document, range, options) => format(document, options, range),
        sort: (document, options) => sort(document, options)
    };
}

export { getLanguageService };
