import { coalesce } from '../../../../base/common/arrays.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { DisposableStore, isDisposable } from '../../../../base/common/lifecycle.js';
import { assertType } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';
import { Range } from '../../../common/core/range.js';
import { IModelService } from '../../../common/services/model.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Link {
    constructor(link, provider) {
        this._link = link;
        this._provider = provider;
    }
    toJSON() {
        return {
            range: this.range,
            url: this.url,
            tooltip: this.tooltip
        };
    }
    get range() {
        return this._link.range;
    }
    get url() {
        return this._link.url;
    }
    get tooltip() {
        return this._link.tooltip;
    }
    async resolve(token) {
        if (this._link.url) {
            return this._link.url;
        }
        if (typeof this._provider.resolveLink === 'function') {
            return Promise.resolve(this._provider.resolveLink(this._link, token)).then(value => {
                this._link = value || this._link;
                if (this._link.url) {
                    // recurse
                    return this.resolve(token);
                }
                return Promise.reject(new Error('missing'));
            });
        }
        return Promise.reject(new Error('missing'));
    }
}
class LinksList {
    static { this.Empty = new LinksList([]); }
    constructor(tuples) {
        this._disposables = new DisposableStore();
        let links = [];
        for (const [list, provider] of tuples) {
            // merge all links
            const newLinks = list.links.map(link => new Link(link, provider));
            links = LinksList._union(links, newLinks);
            // register disposables
            if (isDisposable(list)) {
                this._disposables ??= new DisposableStore();
                this._disposables.add(list);
            }
        }
        this.links = links;
    }
    dispose() {
        this._disposables?.dispose();
        this.links.length = 0;
    }
    static _union(oldLinks, newLinks) {
        // reunite oldLinks with newLinks and remove duplicates
        const result = [];
        let oldIndex;
        let oldLen;
        let newIndex;
        let newLen;
        for (oldIndex = 0, newIndex = 0, oldLen = oldLinks.length, newLen = newLinks.length; oldIndex < oldLen && newIndex < newLen;) {
            const oldLink = oldLinks[oldIndex];
            const newLink = newLinks[newIndex];
            if (Range.areIntersectingOrTouching(oldLink.range, newLink.range)) {
                // Remove the oldLink
                oldIndex++;
                continue;
            }
            const comparisonResult = Range.compareRangesUsingStarts(oldLink.range, newLink.range);
            if (comparisonResult < 0) {
                // oldLink is before
                result.push(oldLink);
                oldIndex++;
            }
            else {
                // newLink is before
                result.push(newLink);
                newIndex++;
            }
        }
        for (; oldIndex < oldLen; oldIndex++) {
            result.push(oldLinks[oldIndex]);
        }
        for (; newIndex < newLen; newIndex++) {
            result.push(newLinks[newIndex]);
        }
        return result;
    }
}
async function getLinks(providers, model, token) {
    const lists = [];
    // ask all providers for links in parallel
    const promises = providers.ordered(model).reverse().map(async (provider, i) => {
        try {
            const result = await provider.provideLinks(model, token);
            if (result) {
                lists[i] = [result, provider];
            }
        }
        catch (err) {
            onUnexpectedExternalError(err);
        }
    });
    await Promise.all(promises);
    let res = new LinksList(coalesce(lists));
    if (token.isCancellationRequested) {
        res.dispose();
        res = LinksList.Empty;
    }
    return res;
}
CommandsRegistry.registerCommand('_executeLinkProvider', async (accessor, ...args) => {
    let [uri, resolveCount] = args;
    assertType(uri instanceof URI);
    if (typeof resolveCount !== 'number') {
        resolveCount = 0;
    }
    const { linkProvider } = accessor.get(ILanguageFeaturesService);
    const model = accessor.get(IModelService).getModel(uri);
    if (!model) {
        return [];
    }
    const list = await getLinks(linkProvider, model, CancellationToken.None);
    if (!list) {
        return [];
    }
    // resolve links
    for (let i = 0; i < Math.min(resolveCount, list.links.length); i++) {
        await list.links[i].resolve(CancellationToken.None);
    }
    const result = list.links.slice(0);
    list.dispose();
    return result;
});

export { Link, LinksList, getLinks };
