import { DeferredPromise } from '../../../base/common/async.js';
import { CancellationTokenSource } from '../../../base/common/cancellation.js';
import { Event } from '../../../base/common/event.js';
import { Disposable, toDisposable, isDisposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';
import { Extensions, DefaultQuickAccessFilterValue } from '../common/quickAccess.js';
import { IQuickInputService, ItemActivation } from '../common/quickInput.js';
import { Registry } from '../../registry/common/platform.js';

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
let QuickAccessController = class QuickAccessController extends Disposable {
    constructor(quickInputService, instantiationService) {
        super();
        this.quickInputService = quickInputService;
        this.instantiationService = instantiationService;
        this.registry = Registry.as(Extensions.Quickaccess);
        this.mapProviderToDescriptor = new Map();
        this.lastAcceptedPickerValues = new Map();
        this.visibleQuickAccess = undefined;
        this._register(toDisposable(() => {
            for (const provider of this.mapProviderToDescriptor.values()) {
                if (isDisposable(provider)) {
                    provider.dispose();
                }
            }
            this.visibleQuickAccess?.picker.dispose();
        }));
    }
    show(value = '', options) {
        this.doShowOrPick(value, false, options);
    }
    doShowOrPick(value, pick, options) {
        // Find provider for the value to show
        const [provider, descriptor] = this.getOrInstantiateProvider(value, options?.enabledProviderPrefixes);
        // Return early if quick access is already showing on that same prefix
        const visibleQuickAccess = this.visibleQuickAccess;
        const visibleDescriptor = visibleQuickAccess?.descriptor;
        if (visibleQuickAccess && descriptor && visibleDescriptor === descriptor) {
            // Apply value only if it is more specific than the prefix
            // from the provider and we are not instructed to preserve
            if (value !== descriptor.prefix && !options?.preserveValue) {
                visibleQuickAccess.picker.value = value;
            }
            // Always adjust selection
            this.adjustValueSelection(visibleQuickAccess.picker, descriptor, options);
            return;
        }
        // Rewrite the filter value based on certain rules unless disabled
        if (descriptor && !options?.preserveValue) {
            let newValue = undefined;
            // If we have a visible provider with a value, take it's filter value but
            // rewrite to new provider prefix in case they differ
            if (visibleQuickAccess && visibleDescriptor && visibleDescriptor !== descriptor) {
                const newValueCandidateWithoutPrefix = visibleQuickAccess.value.substr(visibleDescriptor.prefix.length);
                if (newValueCandidateWithoutPrefix) {
                    newValue = `${descriptor.prefix}${newValueCandidateWithoutPrefix}`;
                }
            }
            // Otherwise, take a default value as instructed
            if (!newValue) {
                const defaultFilterValue = provider?.defaultFilterValue;
                if (defaultFilterValue === DefaultQuickAccessFilterValue.LAST) {
                    newValue = this.lastAcceptedPickerValues.get(descriptor);
                }
                else if (typeof defaultFilterValue === 'string') {
                    newValue = `${descriptor.prefix}${defaultFilterValue}`;
                }
            }
            if (typeof newValue === 'string') {
                value = newValue;
            }
        }
        // Store the existing selection if there was one.
        const visibleSelection = visibleQuickAccess?.picker?.valueSelection;
        const visibleValue = visibleQuickAccess?.picker?.value;
        // Create a picker for the provider to use with the initial value
        // and adjust the filtering to exclude the prefix from filtering
        const disposables = new DisposableStore();
        const picker = disposables.add(this.quickInputService.createQuickPick({ useSeparators: true }));
        picker.value = value;
        this.adjustValueSelection(picker, descriptor, options);
        picker.placeholder = options?.placeholder ?? descriptor?.placeholder;
        picker.quickNavigate = options?.quickNavigateConfiguration;
        picker.hideInput = !!picker.quickNavigate && !visibleQuickAccess; // only hide input if there was no picker opened already
        if (typeof options?.itemActivation === 'number' || options?.quickNavigateConfiguration) {
            picker.itemActivation = options?.itemActivation ?? ItemActivation.SECOND /* quick nav is always second */;
        }
        picker.contextKey = descriptor?.contextKey;
        picker.filterValue = (value) => value.substring(descriptor ? descriptor.prefix.length : 0);
        // Pick mode: setup a promise that can be resolved
        // with the selected items and prevent execution
        let pickPromise = undefined;
        if (pick) {
            pickPromise = new DeferredPromise();
            disposables.add(Event.once(picker.onWillAccept)(e => {
                e.veto();
                picker.hide();
            }));
        }
        // Register listeners
        disposables.add(this.registerPickerListeners(picker, provider, descriptor, value, options));
        // Ask provider to fill the picker as needed if we have one
        // and pass over a cancellation token that will indicate when
        // the picker is hiding without a pick being made.
        const cts = disposables.add(new CancellationTokenSource());
        if (provider) {
            disposables.add(provider.provide(picker, cts.token, options?.providerOptions));
        }
        // Finally, trigger disposal and cancellation when the picker
        // hides depending on items selected or not.
        Event.once(picker.onDidHide)(() => {
            if (picker.selectedItems.length === 0) {
                cts.cancel();
            }
            // Start to dispose once picker hides
            disposables.dispose();
            // Resolve pick promise with selected items
            pickPromise?.complete(picker.selectedItems.slice(0));
        });
        // Finally, show the picker. This is important because a provider
        // may not call this and then our disposables would leak that rely
        // on the onDidHide event.
        picker.show();
        // If the previous picker had a selection and the value is unchanged, we should set that in the new picker.
        if (visibleSelection && visibleValue === value) {
            picker.valueSelection = visibleSelection;
        }
        // Pick mode: return with promise
        if (pick) {
            return pickPromise?.p;
        }
    }
    adjustValueSelection(picker, descriptor, options) {
        let valueSelection;
        // Preserve: just always put the cursor at the end
        if (options?.preserveValue) {
            valueSelection = [picker.value.length, picker.value.length];
        }
        // Otherwise: select the value up until the prefix
        else {
            valueSelection = [descriptor?.prefix.length ?? 0, picker.value.length];
        }
        picker.valueSelection = valueSelection;
    }
    registerPickerListeners(picker, provider, descriptor, value, options) {
        const disposables = new DisposableStore();
        // Remember as last visible picker and clean up once picker get's disposed
        const visibleQuickAccess = this.visibleQuickAccess = { picker, descriptor, value };
        disposables.add(toDisposable(() => {
            if (visibleQuickAccess === this.visibleQuickAccess) {
                this.visibleQuickAccess = undefined;
            }
        }));
        // Whenever the value changes, check if the provider has
        // changed and if so - re-create the picker from the beginning
        disposables.add(picker.onDidChangeValue(value => {
            const [providerForValue] = this.getOrInstantiateProvider(value, options?.enabledProviderPrefixes);
            if (providerForValue !== provider) {
                this.show(value, {
                    enabledProviderPrefixes: options?.enabledProviderPrefixes,
                    // do not rewrite value from user typing!
                    preserveValue: true,
                    // persist the value of the providerOptions from the original showing
                    providerOptions: options?.providerOptions
                });
            }
            else {
                visibleQuickAccess.value = value; // remember the value in our visible one
            }
        }));
        // Remember picker input for future use when accepting
        if (descriptor) {
            disposables.add(picker.onDidAccept(() => {
                this.lastAcceptedPickerValues.set(descriptor, picker.value);
            }));
        }
        return disposables;
    }
    getOrInstantiateProvider(value, enabledProviderPrefixes) {
        const providerDescriptor = this.registry.getQuickAccessProvider(value);
        if (!providerDescriptor || enabledProviderPrefixes && !enabledProviderPrefixes?.includes(providerDescriptor.prefix)) {
            return [undefined, undefined];
        }
        let provider = this.mapProviderToDescriptor.get(providerDescriptor);
        if (!provider) {
            provider = this.instantiationService.createInstance(providerDescriptor.ctor);
            this.mapProviderToDescriptor.set(providerDescriptor, provider);
        }
        return [provider, providerDescriptor];
    }
};
QuickAccessController = __decorate([
    __param(0, IQuickInputService),
    __param(1, IInstantiationService)
], QuickAccessController);

export { QuickAccessController };
