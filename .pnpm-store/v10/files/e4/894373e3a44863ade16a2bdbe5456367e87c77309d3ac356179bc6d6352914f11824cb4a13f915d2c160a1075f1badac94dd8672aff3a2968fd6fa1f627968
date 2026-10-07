import { AsyncIterableProducer } from '../../../../base/common/async.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { registerModelAndPositionCommand } from '../../../browser/editorExtensions.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HoverProviderResult {
    constructor(provider, hover, ordinal) {
        this.provider = provider;
        this.hover = hover;
        this.ordinal = ordinal;
    }
}
/**
 * Does not throw or return a rejected promise (returns undefined instead).
 */
async function executeProvider(provider, ordinal, model, position, token) {
    const result = await Promise
        .resolve(provider.provideHover(model, position, token))
        .catch(onUnexpectedExternalError);
    if (!result || !isValid(result)) {
        return undefined;
    }
    return new HoverProviderResult(provider, result, ordinal);
}
function getHoverProviderResultsAsAsyncIterable(registry, model, position, token, recursive = false) {
    const providers = registry.ordered(model, recursive);
    const promises = providers.map((provider, index) => executeProvider(provider, index, model, position, token));
    return AsyncIterableProducer.fromPromisesResolveOrder(promises).coalesce();
}
async function getHoversPromise(registry, model, position, token, recursive = false) {
    const out = [];
    for await (const item of getHoverProviderResultsAsAsyncIterable(registry, model, position, token, recursive)) {
        out.push(item.hover);
    }
    return out;
}
registerModelAndPositionCommand('_executeHoverProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    return getHoversPromise(languageFeaturesService.hoverProvider, model, position, CancellationToken.None);
});
registerModelAndPositionCommand('_executeHoverProvider_recursive', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    return getHoversPromise(languageFeaturesService.hoverProvider, model, position, CancellationToken.None, true);
});
function isValid(result) {
    const hasRange = (typeof result.range !== 'undefined');
    const hasHtmlContent = typeof result.contents !== 'undefined' && result.contents && result.contents.length > 0;
    return hasRange && hasHtmlContent;
}

export { HoverProviderResult, getHoverProviderResultsAsAsyncIterable, getHoversPromise };
