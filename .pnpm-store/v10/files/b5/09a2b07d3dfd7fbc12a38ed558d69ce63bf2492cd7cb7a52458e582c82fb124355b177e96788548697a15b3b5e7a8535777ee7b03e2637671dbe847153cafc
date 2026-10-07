import { localize } from '../../../nls.js';
import { Registry } from '../../registry/common/platform.js';
import { DisposableStore } from '../../../base/common/lifecycle.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { Extensions } from '../common/quickAccess.js';
import { IQuickInputService } from '../common/quickInput.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HelpQuickAccessProvider_1;
let HelpQuickAccessProvider = class HelpQuickAccessProvider {
    static { HelpQuickAccessProvider_1 = this; }
    static { this.PREFIX = '?'; }
    constructor(quickInputService, keybindingService) {
        this.quickInputService = quickInputService;
        this.keybindingService = keybindingService;
        this.registry = Registry.as(Extensions.Quickaccess);
    }
    provide(picker) {
        const disposables = new DisposableStore();
        // Open a picker with the selected value if picked
        disposables.add(picker.onDidAccept(() => {
            const [item] = picker.selectedItems;
            if (item) {
                this.quickInputService.quickAccess.show(item.prefix, { preserveValue: true });
            }
        }));
        // Also open a picker when we detect the user typed the exact
        // name of a provider (e.g. `?term` for terminals)
        disposables.add(picker.onDidChangeValue(value => {
            const providerDescriptor = this.registry.getQuickAccessProvider(value.substr(HelpQuickAccessProvider_1.PREFIX.length));
            if (providerDescriptor && providerDescriptor.prefix && providerDescriptor.prefix !== HelpQuickAccessProvider_1.PREFIX) {
                this.quickInputService.quickAccess.show(providerDescriptor.prefix, { preserveValue: true });
            }
        }));
        // Fill in all providers
        picker.items = this.getQuickAccessProviders().filter(p => p.prefix !== HelpQuickAccessProvider_1.PREFIX);
        return disposables;
    }
    getQuickAccessProviders() {
        const providers = this.registry
            .getQuickAccessProviders()
            .sort((providerA, providerB) => providerA.prefix.localeCompare(providerB.prefix))
            .flatMap(provider => this.createPicks(provider));
        return providers;
    }
    createPicks(provider) {
        return provider.helpEntries.map(helpEntry => {
            const prefix = helpEntry.prefix || provider.prefix;
            const label = prefix || '\u2026' /* ... */;
            return {
                prefix,
                label,
                keybinding: helpEntry.commandId ? this.keybindingService.lookupKeybinding(helpEntry.commandId) : undefined,
                ariaLabel: localize(1747, "{0}, {1}", label, helpEntry.description),
                description: helpEntry.description
            };
        });
    }
};
HelpQuickAccessProvider = HelpQuickAccessProvider_1 = __decorate([
    __param(0, IQuickInputService),
    __param(1, IKeybindingService)
], HelpQuickAccessProvider);

export { HelpQuickAccessProvider };
