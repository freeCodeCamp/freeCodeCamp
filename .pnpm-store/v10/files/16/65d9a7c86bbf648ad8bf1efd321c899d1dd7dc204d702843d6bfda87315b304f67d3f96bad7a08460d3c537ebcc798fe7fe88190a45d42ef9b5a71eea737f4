import { coalesce } from '../../../base/common/arrays.js';
import { toDisposable } from '../../../base/common/lifecycle.js';
import { Registry } from '../../registry/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var DefaultQuickAccessFilterValue;
(function (DefaultQuickAccessFilterValue) {
    /**
     * Keep the value as it is given to quick access.
     */
    DefaultQuickAccessFilterValue[DefaultQuickAccessFilterValue["PRESERVE"] = 0] = "PRESERVE";
    /**
     * Use the value that was used last time something was accepted from the picker.
     */
    DefaultQuickAccessFilterValue[DefaultQuickAccessFilterValue["LAST"] = 1] = "LAST";
})(DefaultQuickAccessFilterValue || (DefaultQuickAccessFilterValue = {}));
const Extensions = {
    Quickaccess: 'workbench.contributions.quickaccess'
};
class QuickAccessRegistry {
    constructor() {
        this.providers = [];
        this.defaultProvider = undefined;
    }
    registerQuickAccessProvider(provider) {
        // Extract the default provider when no prefix is present
        if (provider.prefix.length === 0) {
            this.defaultProvider = provider;
        }
        else {
            this.providers.push(provider);
        }
        // sort the providers by decreasing prefix length, such that longer
        // prefixes take priority: 'ext' vs 'ext install' - the latter should win
        this.providers.sort((providerA, providerB) => providerB.prefix.length - providerA.prefix.length);
        return toDisposable(() => {
            this.providers.splice(this.providers.indexOf(provider), 1);
            if (this.defaultProvider === provider) {
                this.defaultProvider = undefined;
            }
        });
    }
    getQuickAccessProviders() {
        return coalesce([this.defaultProvider, ...this.providers]);
    }
    getQuickAccessProvider(prefix) {
        const result = prefix ? (this.providers.find(provider => prefix.startsWith(provider.prefix)) || undefined) : undefined;
        return result || this.defaultProvider;
    }
}
Registry.add(Extensions.Quickaccess, new QuickAccessRegistry());

export { DefaultQuickAccessFilterValue, Extensions, QuickAccessRegistry };
