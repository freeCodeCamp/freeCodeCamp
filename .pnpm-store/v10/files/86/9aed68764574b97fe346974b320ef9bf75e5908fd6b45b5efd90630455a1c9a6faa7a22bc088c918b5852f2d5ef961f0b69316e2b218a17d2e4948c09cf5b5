import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError, illegalArgument } from '../../../../base/common/errors.js';
import { IModelService } from '../../../common/services/model.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { DefaultDocumentColorProvider } from './defaultDocumentColorProvider.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
async function getColors(colorProviderRegistry, model, token, defaultColorDecoratorsEnablement = 'auto') {
    return _findColorData(new ColorDataCollector(), colorProviderRegistry, model, token, defaultColorDecoratorsEnablement);
}
function getColorPresentations(model, colorInfo, provider, token) {
    return Promise.resolve(provider.provideColorPresentations(model, colorInfo, token));
}
class ColorDataCollector {
    constructor() { }
    async compute(provider, model, token, colors) {
        const documentColors = await provider.provideDocumentColors(model, token);
        if (Array.isArray(documentColors)) {
            for (const colorInfo of documentColors) {
                colors.push({ colorInfo, provider });
            }
        }
        return Array.isArray(documentColors);
    }
}
class ExtColorDataCollector {
    constructor() { }
    async compute(provider, model, token, colors) {
        const documentColors = await provider.provideDocumentColors(model, token);
        if (Array.isArray(documentColors)) {
            for (const colorInfo of documentColors) {
                colors.push({ range: colorInfo.range, color: [colorInfo.color.red, colorInfo.color.green, colorInfo.color.blue, colorInfo.color.alpha] });
            }
        }
        return Array.isArray(documentColors);
    }
}
class ColorPresentationsCollector {
    constructor(colorInfo) {
        this.colorInfo = colorInfo;
    }
    async compute(provider, model, _token, colors) {
        const documentColors = await provider.provideColorPresentations(model, this.colorInfo, CancellationToken.None);
        if (Array.isArray(documentColors)) {
            colors.push(...documentColors);
        }
        return Array.isArray(documentColors);
    }
}
async function _findColorData(collector, colorProviderRegistry, model, token, defaultColorDecoratorsEnablement) {
    let validDocumentColorProviderFound = false;
    let defaultProvider;
    const colorData = [];
    const documentColorProviders = colorProviderRegistry.ordered(model);
    for (let i = documentColorProviders.length - 1; i >= 0; i--) {
        const provider = documentColorProviders[i];
        if (defaultColorDecoratorsEnablement !== 'always' && provider instanceof DefaultDocumentColorProvider) {
            defaultProvider = provider;
        }
        else {
            try {
                if (await collector.compute(provider, model, token, colorData)) {
                    validDocumentColorProviderFound = true;
                }
            }
            catch (e) {
                onUnexpectedExternalError(e);
            }
        }
    }
    if (validDocumentColorProviderFound) {
        return colorData;
    }
    if (defaultProvider && defaultColorDecoratorsEnablement !== 'never') {
        await collector.compute(defaultProvider, model, token, colorData);
        return colorData;
    }
    return [];
}
function _setupColorCommand(accessor, resource) {
    const { colorProvider: colorProviderRegistry } = accessor.get(ILanguageFeaturesService);
    const model = accessor.get(IModelService).getModel(resource);
    if (!model) {
        throw illegalArgument();
    }
    const defaultColorDecoratorsEnablement = accessor.get(IConfigurationService).getValue('editor.defaultColorDecorators', { resource });
    return { model, colorProviderRegistry, defaultColorDecoratorsEnablement };
}

export { ColorPresentationsCollector, ExtColorDataCollector, _findColorData, _setupColorCommand, getColorPresentations, getColors };
