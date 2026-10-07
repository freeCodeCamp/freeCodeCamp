import { timeout } from '../../../base/common/async.js';
import { CancellationTokenSource } from '../../../base/common/cancellation.js';
import { Disposable, DisposableStore, MutableDisposable } from '../../../base/common/lifecycle.js';
import { isFunction } from '../../../base/common/types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var TriggerAction;
(function (TriggerAction) {
    /**
     * Do nothing after the button was clicked.
     */
    TriggerAction[TriggerAction["NO_ACTION"] = 0] = "NO_ACTION";
    /**
     * Close the picker.
     */
    TriggerAction[TriggerAction["CLOSE_PICKER"] = 1] = "CLOSE_PICKER";
    /**
     * Update the results of the picker.
     */
    TriggerAction[TriggerAction["REFRESH_PICKER"] = 2] = "REFRESH_PICKER";
    /**
     * Remove the item from the picker.
     */
    TriggerAction[TriggerAction["REMOVE_ITEM"] = 3] = "REMOVE_ITEM";
})(TriggerAction || (TriggerAction = {}));
function isPicksWithActive(obj) {
    const candidate = obj;
    return Array.isArray(candidate.items);
}
function isFastAndSlowPicks(obj) {
    const candidate = obj;
    return !!candidate.picks && candidate.additionalPicks instanceof Promise;
}
class PickerQuickAccessProvider extends Disposable {
    constructor(prefix, options) {
        super();
        this.prefix = prefix;
        this.options = options;
    }
    provide(picker, token, runOptions) {
        const disposables = new DisposableStore();
        // Apply options if any
        picker.canAcceptInBackground = !!this.options?.canAcceptInBackground;
        // Disable filtering & sorting, we control the results
        picker.matchOnLabel = picker.matchOnDescription = picker.matchOnDetail = picker.sortByLabel = false;
        // Set initial picks and update on type
        let picksCts = undefined;
        const picksDisposable = disposables.add(new MutableDisposable());
        const updatePickerItems = async () => {
            // Cancel any previous ask for picks and busy
            picksCts?.dispose(true);
            picker.busy = false;
            // Setting the .value will call dispose() on the previous value, so we need to do this AFTER cancelling with dispose(true).
            const picksDisposables = picksDisposable.value = new DisposableStore();
            // Create new cancellation source for this run
            picksCts = picksDisposables.add(new CancellationTokenSource(token));
            // Collect picks and support both long running and short or combined
            const picksToken = picksCts.token;
            let picksFilter = picker.value.substring(this.prefix.length);
            if (!this.options?.shouldSkipTrimPickFilter) {
                picksFilter = picksFilter.trim();
            }
            const providedPicks = this._getPicks(picksFilter, picksDisposables, picksToken, runOptions);
            const applyPicks = (picks, skipEmpty) => {
                let items;
                let activeItem = undefined;
                if (isPicksWithActive(picks)) {
                    items = picks.items;
                    activeItem = picks.active;
                }
                else {
                    items = picks;
                }
                if (items.length === 0) {
                    if (skipEmpty) {
                        return false;
                    }
                    // We show the no results pick if we have no input to prevent completely empty pickers #172613
                    if ((picksFilter.length > 0 || picker.hideInput) && this.options?.noResultsPick) {
                        if (isFunction(this.options.noResultsPick)) {
                            items = [this.options.noResultsPick(picksFilter)];
                        }
                        else {
                            items = [this.options.noResultsPick];
                        }
                    }
                }
                picker.items = items;
                if (activeItem) {
                    picker.activeItems = [activeItem];
                }
                return true;
            };
            const applyFastAndSlowPicks = async (fastAndSlowPicks) => {
                let fastPicksApplied = false;
                let slowPicksApplied = false;
                await Promise.all([
                    // Fast Picks: if `mergeDelay` is configured, in order to reduce
                    // amount of flicker, we race against the slow picks over some delay
                    // and then set the fast picks.
                    // If the slow picks are faster, we reduce the flicker by only
                    // setting the items once.
                    (async () => {
                        if (typeof fastAndSlowPicks.mergeDelay === 'number') {
                            await timeout(fastAndSlowPicks.mergeDelay);
                            if (picksToken.isCancellationRequested) {
                                return;
                            }
                        }
                        if (!slowPicksApplied) {
                            fastPicksApplied = applyPicks(fastAndSlowPicks.picks, true /* skip over empty to reduce flicker */);
                        }
                    })(),
                    // Slow Picks: we await the slow picks and then set them at
                    // once together with the fast picks, but only if we actually
                    // have additional results.
                    (async () => {
                        picker.busy = true;
                        try {
                            const awaitedAdditionalPicks = await fastAndSlowPicks.additionalPicks;
                            if (picksToken.isCancellationRequested) {
                                return;
                            }
                            let picks;
                            let activePick = undefined;
                            if (isPicksWithActive(fastAndSlowPicks.picks)) {
                                picks = fastAndSlowPicks.picks.items;
                                activePick = fastAndSlowPicks.picks.active;
                            }
                            else {
                                picks = fastAndSlowPicks.picks;
                            }
                            let additionalPicks;
                            let additionalActivePick = undefined;
                            if (isPicksWithActive(awaitedAdditionalPicks)) {
                                additionalPicks = awaitedAdditionalPicks.items;
                                additionalActivePick = awaitedAdditionalPicks.active;
                            }
                            else {
                                additionalPicks = awaitedAdditionalPicks;
                            }
                            if (additionalPicks.length > 0 || !fastPicksApplied) {
                                // If we do not have any activePick or additionalActivePick
                                // we try to preserve the currently active pick from the
                                // fast results. This fixes an issue where the user might
                                // have made a pick active before the additional results
                                // kick in.
                                // See https://github.com/microsoft/vscode/issues/102480
                                let fallbackActivePick = undefined;
                                if (!activePick && !additionalActivePick) {
                                    const fallbackActivePickCandidate = picker.activeItems[0];
                                    if (fallbackActivePickCandidate && picks.indexOf(fallbackActivePickCandidate) !== -1) {
                                        fallbackActivePick = fallbackActivePickCandidate;
                                    }
                                }
                                applyPicks({
                                    items: [...picks, ...additionalPicks],
                                    active: activePick || additionalActivePick || fallbackActivePick
                                });
                            }
                        }
                        finally {
                            if (!picksToken.isCancellationRequested) {
                                picker.busy = false;
                            }
                            slowPicksApplied = true;
                        }
                    })()
                ]);
            };
            // No Picks
            if (providedPicks === null) ;
            // Fast and Slow Picks
            else if (isFastAndSlowPicks(providedPicks)) {
                await applyFastAndSlowPicks(providedPicks);
            }
            // Fast Picks
            else if (!(providedPicks instanceof Promise)) {
                applyPicks(providedPicks);
            }
            // Slow Picks
            else {
                picker.busy = true;
                try {
                    const awaitedPicks = await providedPicks;
                    if (picksToken.isCancellationRequested) {
                        return;
                    }
                    if (isFastAndSlowPicks(awaitedPicks)) {
                        await applyFastAndSlowPicks(awaitedPicks);
                    }
                    else {
                        applyPicks(awaitedPicks);
                    }
                }
                finally {
                    if (!picksToken.isCancellationRequested) {
                        picker.busy = false;
                    }
                }
            }
        };
        disposables.add(picker.onDidChangeValue(() => updatePickerItems()));
        updatePickerItems();
        // Accept the pick on accept and hide picker
        disposables.add(picker.onDidAccept(event => {
            if (runOptions?.handleAccept) {
                if (!event.inBackground) {
                    picker.hide(); // hide picker unless we accept in background
                }
                runOptions.handleAccept?.(picker.activeItems[0], event.inBackground);
                return;
            }
            const [item] = picker.selectedItems;
            if (typeof item?.accept === 'function') {
                if (!event.inBackground) {
                    picker.hide(); // hide picker unless we accept in background
                }
                item.accept(picker.keyMods, event);
            }
        }));
        const buttonTrigger = async (button, item) => {
            if (typeof item.trigger !== 'function') {
                return;
            }
            const buttonIndex = item.buttons?.indexOf(button) ?? -1;
            if (buttonIndex >= 0) {
                const result = item.trigger(buttonIndex, picker.keyMods);
                const action = (typeof result === 'number') ? result : await result;
                if (token.isCancellationRequested) {
                    return;
                }
                switch (action) {
                    case TriggerAction.NO_ACTION:
                        break;
                    case TriggerAction.CLOSE_PICKER:
                        picker.hide();
                        break;
                    case TriggerAction.REFRESH_PICKER:
                        updatePickerItems();
                        break;
                    case TriggerAction.REMOVE_ITEM: {
                        const index = picker.items.indexOf(item);
                        if (index !== -1) {
                            const items = picker.items.slice();
                            const removed = items.splice(index, 1);
                            const activeItems = picker.activeItems.filter(activeItem => activeItem !== removed[0]);
                            const keepScrollPositionBefore = picker.keepScrollPosition;
                            picker.keepScrollPosition = true;
                            picker.items = items;
                            if (activeItems) {
                                picker.activeItems = activeItems;
                            }
                            picker.keepScrollPosition = keepScrollPositionBefore;
                        }
                        break;
                    }
                }
            }
        };
        // Trigger the pick with button index if button triggered
        disposables.add(picker.onDidTriggerItemButton(({ button, item }) => buttonTrigger(button, item)));
        disposables.add(picker.onDidTriggerSeparatorButton(({ button, separator }) => buttonTrigger(button, separator)));
        return disposables;
    }
}

export { PickerQuickAccessProvider, TriggerAction };
