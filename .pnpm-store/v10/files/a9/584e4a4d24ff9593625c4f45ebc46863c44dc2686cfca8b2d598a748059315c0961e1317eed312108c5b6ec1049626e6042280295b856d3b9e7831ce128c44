import { coalesce } from '../../../../base/common/arrays.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { matchesSomeScheme, Schemas } from '../../../../base/common/network.js';
import { registerModelAndPositionCommand } from '../../../browser/editorExtensions.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { ReferencesModel } from './referencesModel.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function shouldIncludeLocationLink(sourceModel, loc) {
    // Always allow the location if the request comes from a document with the same scheme.
    if (loc.uri.scheme === sourceModel.uri.scheme) {
        return true;
    }
    // Otherwise filter out locations from internal schemes
    if (matchesSomeScheme(loc.uri, Schemas.walkThroughSnippet, Schemas.vscodeChatCodeBlock, Schemas.vscodeChatCodeCompareBlock)) {
        return false;
    }
    return true;
}
async function getLocationLinks(model, position, registry, recursive, provide) {
    const provider = registry.ordered(model, recursive);
    // get results
    const promises = provider.map((provider) => {
        return Promise.resolve(provide(provider, model, position)).then(undefined, err => {
            onUnexpectedExternalError(err);
            return undefined;
        });
    });
    const values = await Promise.all(promises);
    return coalesce(values.flat()).filter(loc => shouldIncludeLocationLink(model, loc));
}
function getDefinitionsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position) => {
        return provider.provideDefinition(model, position, token);
    });
}
function getDeclarationsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position) => {
        return provider.provideDeclaration(model, position, token);
    });
}
function getImplementationsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position) => {
        return provider.provideImplementation(model, position, token);
    });
}
function getTypeDefinitionsAtPosition(registry, model, position, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, (provider, model, position) => {
        return provider.provideTypeDefinition(model, position, token);
    });
}
function getReferencesAtPosition(registry, model, position, compact, recursive, token) {
    return getLocationLinks(model, position, registry, recursive, async (provider, model, position) => {
        const result = (await provider.provideReferences(model, position, { includeDeclaration: true }, token))?.filter(ref => shouldIncludeLocationLink(model, ref));
        if (!compact || !result || result.length !== 2) {
            return result;
        }
        const resultWithoutDeclaration = (await provider.provideReferences(model, position, { includeDeclaration: false }, token))?.filter(ref => shouldIncludeLocationLink(model, ref));
        if (resultWithoutDeclaration && resultWithoutDeclaration.length === 1) {
            return resultWithoutDeclaration;
        }
        return result;
    });
}
// -- API commands ----
async function _sortedAndDeduped(callback) {
    const rawLinks = await callback();
    const model = new ReferencesModel(rawLinks, '');
    const modelLinks = model.references.map(ref => ref.link);
    model.dispose();
    return modelLinks;
}
registerModelAndPositionCommand('_executeDefinitionProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getDefinitionsAtPosition(languageFeaturesService.definitionProvider, model, position, false, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeDefinitionProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getDefinitionsAtPosition(languageFeaturesService.definitionProvider, model, position, true, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeTypeDefinitionProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getTypeDefinitionsAtPosition(languageFeaturesService.typeDefinitionProvider, model, position, false, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeTypeDefinitionProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getTypeDefinitionsAtPosition(languageFeaturesService.typeDefinitionProvider, model, position, true, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeDeclarationProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getDeclarationsAtPosition(languageFeaturesService.declarationProvider, model, position, false, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeDeclarationProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getDeclarationsAtPosition(languageFeaturesService.declarationProvider, model, position, true, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeReferenceProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, false, false, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeReferenceProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, false, true, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeImplementationProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getImplementationsAtPosition(languageFeaturesService.implementationProvider, model, position, false, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});
registerModelAndPositionCommand('_executeImplementationProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const promise = getImplementationsAtPosition(languageFeaturesService.implementationProvider, model, position, true, CancellationToken.None);
    return _sortedAndDeduped(() => promise);
});

export { getDeclarationsAtPosition, getDefinitionsAtPosition, getImplementationsAtPosition, getReferencesAtPosition, getTypeDefinitionsAtPosition };
