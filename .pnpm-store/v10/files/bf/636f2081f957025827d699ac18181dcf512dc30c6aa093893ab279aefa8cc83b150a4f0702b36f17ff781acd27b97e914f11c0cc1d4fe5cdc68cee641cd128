import { CancellationToken } from '../../../../base/common/cancellation.js';
import { illegalArgument, onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { isDisposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { assertType } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';
import { IModelService } from '../../../common/services/model.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CodeLensModel {
    constructor() {
        this.lenses = [];
    }
    static { this.Empty = new CodeLensModel(); }
    dispose() {
        this._store?.dispose();
    }
    get isDisposed() {
        return this._store?.isDisposed ?? false;
    }
    add(list, provider) {
        if (isDisposable(list)) {
            this._store ??= new DisposableStore();
            this._store.add(list);
        }
        for (const symbol of list.lenses) {
            this.lenses.push({ symbol, provider });
        }
    }
}
async function getCodeLensModel(registry, model, token) {
    const provider = registry.ordered(model);
    const providerRanks = new Map();
    const result = new CodeLensModel();
    const promises = provider.map(async (provider, i) => {
        providerRanks.set(provider, i);
        try {
            const list = await Promise.resolve(provider.provideCodeLenses(model, token));
            if (list) {
                result.add(list, provider);
            }
        }
        catch (err) {
            onUnexpectedExternalError(err);
        }
    });
    await Promise.all(promises);
    if (token.isCancellationRequested) {
        result.dispose();
        return CodeLensModel.Empty;
    }
    result.lenses = result.lenses.sort((a, b) => {
        // sort by lineNumber, provider-rank, and column
        if (a.symbol.range.startLineNumber < b.symbol.range.startLineNumber) {
            return -1;
        }
        else if (a.symbol.range.startLineNumber > b.symbol.range.startLineNumber) {
            return 1;
        }
        else if ((providerRanks.get(a.provider)) < (providerRanks.get(b.provider))) {
            return -1;
        }
        else if ((providerRanks.get(a.provider)) > (providerRanks.get(b.provider))) {
            return 1;
        }
        else if (a.symbol.range.startColumn < b.symbol.range.startColumn) {
            return -1;
        }
        else if (a.symbol.range.startColumn > b.symbol.range.startColumn) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return result;
}
CommandsRegistry.registerCommand('_executeCodeLensProvider', function (accessor, ...args) {
    let [uri, itemResolveCount] = args;
    assertType(URI.isUri(uri));
    assertType(typeof itemResolveCount === 'number' || !itemResolveCount);
    const { codeLensProvider } = accessor.get(ILanguageFeaturesService);
    const model = accessor.get(IModelService).getModel(uri);
    if (!model) {
        throw illegalArgument();
    }
    const result = [];
    const disposables = new DisposableStore();
    return getCodeLensModel(codeLensProvider, model, CancellationToken.None).then(value => {
        disposables.add(value);
        const resolve = [];
        for (const item of value.lenses) {
            if (itemResolveCount === undefined || itemResolveCount === null || Boolean(item.symbol.command)) {
                result.push(item.symbol);
            }
            else if (itemResolveCount-- > 0 && item.provider.resolveCodeLens) {
                resolve.push(Promise.resolve(item.provider.resolveCodeLens(model, item.symbol, CancellationToken.None)).then(symbol => result.push(symbol || item.symbol)));
            }
        }
        return Promise.all(resolve);
    }).then(() => {
        return result;
    }).finally(() => {
        // make sure to return results, then (on next tick)
        // dispose the results
        setTimeout(() => disposables.dispose(), 100);
    });
});

export { CodeLensModel, getCodeLensModel };
