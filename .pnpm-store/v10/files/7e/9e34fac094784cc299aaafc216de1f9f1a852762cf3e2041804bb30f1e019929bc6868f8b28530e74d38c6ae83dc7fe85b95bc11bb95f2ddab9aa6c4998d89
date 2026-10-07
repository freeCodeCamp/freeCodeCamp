import { DeferredPromise } from '../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { pieceToQuery, scoreFuzzy2, prepareQuery } from '../../../../base/common/fuzzyScorer.js';
import { Disposable, DisposableStore, toDisposable, MutableDisposable } from '../../../../base/common/lifecycle.js';
import { trim, format } from '../../../../base/common/strings.js';
import { Range } from '../../../common/core/range.js';
import { SymbolKinds, getAriaLabelForSymbol } from '../../../common/languages.js';
import { IOutlineModelService } from '../../documentSymbols/browser/outlineModel.js';
import { AbstractEditorNavigationQuickAccessProvider } from './editorNavigationQuickAccess.js';
import { localize } from '../../../../nls.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { findLast } from '../../../../base/common/arraysFind.js';

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
var AbstractGotoSymbolQuickAccessProvider_1;
let AbstractGotoSymbolQuickAccessProvider = class AbstractGotoSymbolQuickAccessProvider extends AbstractEditorNavigationQuickAccessProvider {
    static { AbstractGotoSymbolQuickAccessProvider_1 = this; }
    static { this.PREFIX = '@'; }
    static { this.SCOPE_PREFIX = ':'; }
    static { this.PREFIX_BY_CATEGORY = `${this.PREFIX}${this.SCOPE_PREFIX}`; }
    constructor(_languageFeaturesService, _outlineModelService, options = Object.create(null)) {
        super(options);
        this._languageFeaturesService = _languageFeaturesService;
        this._outlineModelService = _outlineModelService;
        this.options = options;
        this.options.canAcceptInBackground = true;
    }
    provideWithoutTextEditor(picker) {
        this.provideLabelPick(picker, localize(1345, "To go to a symbol, first open a text editor with symbol information."));
        return Disposable.None;
    }
    provideWithTextEditor(context, picker, token, runOptions) {
        const editor = context.editor;
        const model = this.getModel(editor);
        if (!model) {
            return Disposable.None;
        }
        // Provide symbols from model if available in registry
        if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
            return this.doProvideWithEditorSymbols(context, model, picker, token, runOptions);
        }
        // Otherwise show an entry for a model without registry
        // But give a chance to resolve the symbols at a later
        // point if possible
        return this.doProvideWithoutEditorSymbols(context, model, picker, token);
    }
    doProvideWithoutEditorSymbols(context, model, picker, token) {
        const disposables = new DisposableStore();
        // Generic pick for not having any symbol information
        this.provideLabelPick(picker, localize(1346, "The active text editor does not provide symbol information."));
        // Wait for changes to the registry and see if eventually
        // we do get symbols. This can happen if the picker is opened
        // very early after the model has loaded but before the
        // language registry is ready.
        // https://github.com/microsoft/vscode/issues/70607
        (async () => {
            const result = await this.waitForLanguageSymbolRegistry(model, disposables);
            if (!result || token.isCancellationRequested) {
                return;
            }
            disposables.add(this.doProvideWithEditorSymbols(context, model, picker, token));
        })();
        return disposables;
    }
    provideLabelPick(picker, label) {
        picker.items = [{ label, index: 0, kind: 14 /* SymbolKind.String */ }];
        picker.ariaLabel = label;
    }
    async waitForLanguageSymbolRegistry(model, disposables) {
        if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
            return true;
        }
        const symbolProviderRegistryPromise = new DeferredPromise();
        // Resolve promise when registry knows model
        const symbolProviderListener = disposables.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => {
            if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
                symbolProviderListener.dispose();
                symbolProviderRegistryPromise.complete(true);
            }
        }));
        // Resolve promise when we get disposed too
        disposables.add(toDisposable(() => symbolProviderRegistryPromise.complete(false)));
        return symbolProviderRegistryPromise.p;
    }
    doProvideWithEditorSymbols(context, model, picker, token, runOptions) {
        const editor = context.editor;
        const disposables = new DisposableStore();
        // Goto symbol once picked
        disposables.add(picker.onDidAccept(event => {
            const [item] = picker.selectedItems;
            if (item && item.range) {
                this.gotoLocation(context, { range: item.range.selection, keyMods: picker.keyMods, preserveFocus: event.inBackground });
                runOptions?.handleAccept?.(item, event.inBackground);
                if (!event.inBackground) {
                    picker.hide();
                }
            }
        }));
        // Goto symbol side by side if enabled
        disposables.add(picker.onDidTriggerItemButton(({ item }) => {
            if (item && item.range) {
                this.gotoLocation(context, { range: item.range.selection, keyMods: picker.keyMods, forceSideBySide: true });
                picker.hide();
            }
        }));
        // Resolve symbols from document once and reuse this
        // request for all filtering and typing then on
        const symbolsPromise = this.getDocumentSymbols(model, token);
        // Set initial picks and update on type
        const picksCts = disposables.add(new MutableDisposable());
        const updatePickerItems = async (positionToEnclose) => {
            // Cancel any previous ask for picks and busy
            picksCts?.value?.cancel();
            picker.busy = false;
            // Create new cancellation source for this run
            picksCts.value = new CancellationTokenSource();
            // Collect symbol picks
            picker.busy = true;
            try {
                const query = prepareQuery(picker.value.substr(AbstractGotoSymbolQuickAccessProvider_1.PREFIX.length).trim());
                const items = await this.doGetSymbolPicks(symbolsPromise, query, undefined, picksCts.value.token, model);
                if (token.isCancellationRequested) {
                    return;
                }
                if (items.length > 0) {
                    picker.items = items;
                    if (positionToEnclose && query.original.length === 0) {
                        const candidate = findLast(items, item => Boolean(item.type !== 'separator' && item.range && Range.containsPosition(item.range.decoration, positionToEnclose)));
                        if (candidate) {
                            picker.activeItems = [candidate];
                        }
                    }
                }
                else {
                    if (query.original.length > 0) {
                        this.provideLabelPick(picker, localize(1347, "No matching editor symbols"));
                    }
                    else {
                        this.provideLabelPick(picker, localize(1348, "No editor symbols"));
                    }
                }
            }
            finally {
                if (!token.isCancellationRequested) {
                    picker.busy = false;
                }
            }
        };
        disposables.add(picker.onDidChangeValue(() => updatePickerItems(undefined)));
        updatePickerItems(editor.getSelection()?.getPosition());
        // Reveal and decorate when active item changes
        disposables.add(picker.onDidChangeActive(() => {
            const [item] = picker.activeItems;
            if (item && item.range) {
                // Reveal
                editor.revealRangeInCenter(item.range.selection, 0 /* ScrollType.Smooth */);
                // Decorate
                this.addDecorations(editor, item.range.decoration);
            }
        }));
        return disposables;
    }
    async doGetSymbolPicks(symbolsPromise, query, options, token, model) {
        const symbols = await symbolsPromise;
        if (token.isCancellationRequested) {
            return [];
        }
        const filterBySymbolKind = query.original.indexOf(AbstractGotoSymbolQuickAccessProvider_1.SCOPE_PREFIX) === 0;
        const filterPos = filterBySymbolKind ? 1 : 0;
        // Split between symbol and container query
        let symbolQuery;
        let containerQuery;
        if (query.values && query.values.length > 1) {
            symbolQuery = pieceToQuery(query.values[0]); // symbol: only match on first part
            containerQuery = pieceToQuery(query.values.slice(1)); // container: match on all but first parts
        }
        else {
            symbolQuery = query;
        }
        // Convert to symbol picks and apply filtering
        let buttons;
        const openSideBySideDirection = this.options?.openSideBySideDirection?.();
        if (openSideBySideDirection) {
            buttons = [{
                    iconClass: openSideBySideDirection === 'right' ? ThemeIcon.asClassName(Codicon.splitHorizontal) : ThemeIcon.asClassName(Codicon.splitVertical),
                    tooltip: openSideBySideDirection === 'right' ? localize(1349, "Open to the Side") : localize(1350, "Open to the Bottom")
                }];
        }
        const filteredSymbolPicks = [];
        for (let index = 0; index < symbols.length; index++) {
            const symbol = symbols[index];
            const symbolLabel = trim(symbol.name);
            const symbolLabelWithIcon = `$(${SymbolKinds.toIcon(symbol.kind).id}) ${symbolLabel}`;
            const symbolLabelIconOffset = symbolLabelWithIcon.length - symbolLabel.length;
            let containerLabel = symbol.containerName;
            if (options?.extraContainerLabel) {
                if (containerLabel) {
                    containerLabel = `${options.extraContainerLabel} • ${containerLabel}`;
                }
                else {
                    containerLabel = options.extraContainerLabel;
                }
            }
            let symbolScore = undefined;
            let symbolMatches = undefined;
            let containerScore = undefined;
            let containerMatches = undefined;
            if (query.original.length > filterPos) {
                // First: try to score on the entire query, it is possible that
                // the symbol matches perfectly (e.g. searching for "change log"
                // can be a match on a markdown symbol "change log"). In that
                // case we want to skip the container query altogether.
                let skipContainerQuery = false;
                if (symbolQuery !== query) {
                    [symbolScore, symbolMatches] = scoreFuzzy2(symbolLabelWithIcon, { ...query, values: undefined /* disable multi-query support */ }, filterPos, symbolLabelIconOffset);
                    if (typeof symbolScore === 'number') {
                        skipContainerQuery = true; // since we consumed the query, skip any container matching
                    }
                }
                // Otherwise: score on the symbol query and match on the container later
                if (typeof symbolScore !== 'number') {
                    [symbolScore, symbolMatches] = scoreFuzzy2(symbolLabelWithIcon, symbolQuery, filterPos, symbolLabelIconOffset);
                    if (typeof symbolScore !== 'number') {
                        continue;
                    }
                }
                // Score by container if specified
                if (!skipContainerQuery && containerQuery) {
                    if (containerLabel && containerQuery.original.length > 0) {
                        [containerScore, containerMatches] = scoreFuzzy2(containerLabel, containerQuery);
                    }
                    if (typeof containerScore !== 'number') {
                        continue;
                    }
                    if (typeof symbolScore === 'number') {
                        symbolScore += containerScore; // boost symbolScore by containerScore
                    }
                }
            }
            const deprecated = symbol.tags && symbol.tags.indexOf(1 /* SymbolTag.Deprecated */) >= 0;
            filteredSymbolPicks.push({
                index,
                kind: symbol.kind,
                score: symbolScore,
                label: symbolLabelWithIcon,
                ariaLabel: getAriaLabelForSymbol(symbol.name, symbol.kind),
                description: containerLabel,
                highlights: deprecated ? undefined : {
                    label: symbolMatches,
                    description: containerMatches
                },
                range: {
                    selection: Range.collapseToStart(symbol.selectionRange),
                    decoration: symbol.range
                },
                uri: model.uri,
                symbolName: symbolLabel,
                strikethrough: deprecated,
                buttons
            });
        }
        // Sort by score
        const sortedFilteredSymbolPicks = filteredSymbolPicks.sort((symbolA, symbolB) => filterBySymbolKind ?
            this.compareByKindAndScore(symbolA, symbolB) :
            this.compareByScore(symbolA, symbolB));
        // Add separator for types
        // - @  only total number of symbols
        // - @: grouped by symbol kind
        let symbolPicks = [];
        if (filterBySymbolKind) {
            let lastSymbolKind = undefined;
            let lastSeparator = undefined;
            let lastSymbolKindCounter = 0;
            function updateLastSeparatorLabel() {
                if (lastSeparator && typeof lastSymbolKind === 'number' && lastSymbolKindCounter > 0) {
                    lastSeparator.label = format(NLS_SYMBOL_KIND_CACHE[lastSymbolKind] || FALLBACK_NLS_SYMBOL_KIND, lastSymbolKindCounter);
                }
            }
            for (const symbolPick of sortedFilteredSymbolPicks) {
                // Found new kind
                if (lastSymbolKind !== symbolPick.kind) {
                    // Update last separator with number of symbols we found for kind
                    updateLastSeparatorLabel();
                    lastSymbolKind = symbolPick.kind;
                    lastSymbolKindCounter = 1;
                    // Add new separator for new kind
                    lastSeparator = { type: 'separator' };
                    symbolPicks.push(lastSeparator);
                }
                // Existing kind, keep counting
                else {
                    lastSymbolKindCounter++;
                }
                // Add to final result
                symbolPicks.push(symbolPick);
            }
            // Update last separator with number of symbols we found for kind
            updateLastSeparatorLabel();
        }
        else if (sortedFilteredSymbolPicks.length > 0) {
            symbolPicks = [
                { label: localize(1351, "symbols ({0})", filteredSymbolPicks.length), type: 'separator' },
                ...sortedFilteredSymbolPicks
            ];
        }
        return symbolPicks;
    }
    compareByScore(symbolA, symbolB) {
        if (typeof symbolA.score !== 'number' && typeof symbolB.score === 'number') {
            return 1;
        }
        else if (typeof symbolA.score === 'number' && typeof symbolB.score !== 'number') {
            return -1;
        }
        if (typeof symbolA.score === 'number' && typeof symbolB.score === 'number') {
            if (symbolA.score > symbolB.score) {
                return -1;
            }
            else if (symbolA.score < symbolB.score) {
                return 1;
            }
        }
        if (symbolA.index < symbolB.index) {
            return -1;
        }
        else if (symbolA.index > symbolB.index) {
            return 1;
        }
        return 0;
    }
    compareByKindAndScore(symbolA, symbolB) {
        const kindA = NLS_SYMBOL_KIND_CACHE[symbolA.kind] || FALLBACK_NLS_SYMBOL_KIND;
        const kindB = NLS_SYMBOL_KIND_CACHE[symbolB.kind] || FALLBACK_NLS_SYMBOL_KIND;
        // Sort by type first if scoped search
        const result = kindA.localeCompare(kindB);
        if (result === 0) {
            return this.compareByScore(symbolA, symbolB);
        }
        return result;
    }
    async getDocumentSymbols(document, token) {
        const model = await this._outlineModelService.getOrCreate(document, token);
        return token.isCancellationRequested ? [] : model.asListOfDocumentSymbols();
    }
};
AbstractGotoSymbolQuickAccessProvider = AbstractGotoSymbolQuickAccessProvider_1 = __decorate([
    __param(0, ILanguageFeaturesService),
    __param(1, IOutlineModelService)
], AbstractGotoSymbolQuickAccessProvider);
// #region NLS Helpers
const FALLBACK_NLS_SYMBOL_KIND = localize(1352, "properties ({0})");
const NLS_SYMBOL_KIND_CACHE = {
    [5 /* SymbolKind.Method */]: localize(1353, "methods ({0})"),
    [11 /* SymbolKind.Function */]: localize(1354, "functions ({0})"),
    [8 /* SymbolKind.Constructor */]: localize(1355, "constructors ({0})"),
    [12 /* SymbolKind.Variable */]: localize(1356, "variables ({0})"),
    [4 /* SymbolKind.Class */]: localize(1357, "classes ({0})"),
    [22 /* SymbolKind.Struct */]: localize(1358, "structs ({0})"),
    [23 /* SymbolKind.Event */]: localize(1359, "events ({0})"),
    [24 /* SymbolKind.Operator */]: localize(1360, "operators ({0})"),
    [10 /* SymbolKind.Interface */]: localize(1361, "interfaces ({0})"),
    [2 /* SymbolKind.Namespace */]: localize(1362, "namespaces ({0})"),
    [3 /* SymbolKind.Package */]: localize(1363, "packages ({0})"),
    [25 /* SymbolKind.TypeParameter */]: localize(1364, "type parameters ({0})"),
    [1 /* SymbolKind.Module */]: localize(1365, "modules ({0})"),
    [6 /* SymbolKind.Property */]: localize(1366, "properties ({0})"),
    [9 /* SymbolKind.Enum */]: localize(1367, "enumerations ({0})"),
    [21 /* SymbolKind.EnumMember */]: localize(1368, "enumeration members ({0})"),
    [14 /* SymbolKind.String */]: localize(1369, "strings ({0})"),
    [0 /* SymbolKind.File */]: localize(1370, "files ({0})"),
    [17 /* SymbolKind.Array */]: localize(1371, "arrays ({0})"),
    [15 /* SymbolKind.Number */]: localize(1372, "numbers ({0})"),
    [16 /* SymbolKind.Boolean */]: localize(1373, "booleans ({0})"),
    [18 /* SymbolKind.Object */]: localize(1374, "objects ({0})"),
    [19 /* SymbolKind.Key */]: localize(1375, "keys ({0})"),
    [7 /* SymbolKind.Field */]: localize(1376, "fields ({0})"),
    [13 /* SymbolKind.Constant */]: localize(1377, "constants ({0})")
};
//#endregion

export { AbstractGotoSymbolQuickAccessProvider };
