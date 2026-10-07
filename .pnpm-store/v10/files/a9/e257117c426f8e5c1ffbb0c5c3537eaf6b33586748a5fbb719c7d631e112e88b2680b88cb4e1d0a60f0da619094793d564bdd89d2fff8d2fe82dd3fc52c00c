import { Delayer } from '../../../../base/common/async.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { escapeRegExpCharacters } from '../../../../base/common/strings.js';
import { registerMultiEditorAction, MultiEditorAction, registerEditorContribution, registerEditorAction, EditorCommand, registerEditorCommand, EditorAction } from '../../../browser/editorExtensions.js';
import { overviewRulerRangeHighlight } from '../../../common/core/editorColorRegistry.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { OverviewRulerLane } from '../../../common/model.js';
import { CONTEXT_FIND_WIDGET_VISIBLE, CONTEXT_FIND_INPUT_FOCUSED, FindModelBoundToEditorModel, FIND_IDS, ToggleCaseSensitiveKeybinding, ToggleWholeWordKeybinding, ToggleRegexKeybinding, ToggleSearchScopeKeybinding, TogglePreserveCaseKeybinding, CONTEXT_REPLACE_INPUT_FOCUSED } from './findModel.js';
import { FindOptionsWidget } from './findOptionsWidget.js';
import { FindReplaceState } from './findState.js';
import { FindWidget } from './findWidget.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { IClipboardService } from '../../../../platform/clipboard/common/clipboardService.js';
import { IContextKeyService, ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { IContextViewService } from '../../../../platform/contextview/browser/contextView.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { INotificationService, Severity } from '../../../../platform/notification/common/notification.js';
import { IQuickInputService } from '../../../../platform/quickinput/common/quickInput.js';
import { IStorageService } from '../../../../platform/storage/common/storage.js';
import { themeColorFromId } from '../../../../platform/theme/common/themeService.js';
import { IHoverService } from '../../../../platform/hover/browser/hover.js';
import { FindWidgetSearchHistory } from './findWidgetSearchHistory.js';
import { ReplaceWidgetHistory } from './replaceWidgetHistory.js';

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
var CommonFindController_1;
const SEARCH_STRING_MAX_LENGTH = 524288;
function getSelectionSearchString(editor, seedSearchStringFromSelection = 'single', seedSearchStringFromNonEmptySelection = false) {
    if (!editor.hasModel()) {
        return null;
    }
    const selection = editor.getSelection();
    // if selection spans multiple lines, default search string to empty
    if ((seedSearchStringFromSelection === 'single' && selection.startLineNumber === selection.endLineNumber)
        || seedSearchStringFromSelection === 'multiple') {
        if (selection.isEmpty()) {
            const wordAtPosition = editor.getConfiguredWordAtPosition(selection.getStartPosition());
            if (wordAtPosition && (false === seedSearchStringFromNonEmptySelection)) {
                return wordAtPosition.word;
            }
        }
        else {
            if (editor.getModel().getValueLengthInRange(selection) < SEARCH_STRING_MAX_LENGTH) {
                return editor.getModel().getValueInRange(selection);
            }
        }
    }
    return null;
}
let CommonFindController = class CommonFindController extends Disposable {
    static { CommonFindController_1 = this; }
    static { this.ID = 'editor.contrib.findController'; }
    get editor() {
        return this._editor;
    }
    static get(editor) {
        return editor.getContribution(CommonFindController_1.ID);
    }
    constructor(editor, contextKeyService, storageService, clipboardService, notificationService, hoverService) {
        super();
        this._editor = editor;
        this._findWidgetVisible = CONTEXT_FIND_WIDGET_VISIBLE.bindTo(contextKeyService);
        this._contextKeyService = contextKeyService;
        this._storageService = storageService;
        this._clipboardService = clipboardService;
        this._notificationService = notificationService;
        this._hoverService = hoverService;
        this._updateHistoryDelayer = new Delayer(500);
        this._state = this._register(new FindReplaceState());
        this.loadQueryState();
        this._register(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this._model = null;
        this._register(this._editor.onDidChangeModel(() => {
            const shouldRestartFind = (this._editor.getModel() && this._state.isRevealed);
            this.disposeModel();
            this._state.change({
                searchScope: null,
                matchCase: this._storageService.getBoolean('editor.matchCase', 1 /* StorageScope.WORKSPACE */, false),
                wholeWord: this._storageService.getBoolean('editor.wholeWord', 1 /* StorageScope.WORKSPACE */, false),
                isRegex: this._storageService.getBoolean('editor.isRegex', 1 /* StorageScope.WORKSPACE */, false),
                preserveCase: this._storageService.getBoolean('editor.preserveCase', 1 /* StorageScope.WORKSPACE */, false)
            }, false);
            if (shouldRestartFind) {
                this._start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: 'none',
                    seedSearchStringFromNonEmptySelection: false,
                    seedSearchStringFromGlobalClipboard: false,
                    shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                    shouldAnimate: false,
                    updateSearchScope: false,
                    loop: this._editor.getOption(50 /* EditorOption.find */).loop
                });
            }
        }));
    }
    dispose() {
        this.disposeModel();
        super.dispose();
    }
    disposeModel() {
        if (this._model) {
            this._model.dispose();
            this._model = null;
        }
    }
    _onStateChanged(e) {
        this.saveQueryState(e);
        if (e.isRevealed) {
            if (this._state.isRevealed) {
                this._findWidgetVisible.set(true);
            }
            else {
                this._findWidgetVisible.reset();
                this.disposeModel();
            }
        }
        if (e.searchString) {
            this.setGlobalBufferTerm(this._state.searchString);
        }
    }
    saveQueryState(e) {
        if (e.isRegex) {
            this._storageService.store('editor.isRegex', this._state.actualIsRegex, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.wholeWord) {
            this._storageService.store('editor.wholeWord', this._state.actualWholeWord, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.matchCase) {
            this._storageService.store('editor.matchCase', this._state.actualMatchCase, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.preserveCase) {
            this._storageService.store('editor.preserveCase', this._state.actualPreserveCase, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
    }
    loadQueryState() {
        this._state.change({
            matchCase: this._storageService.getBoolean('editor.matchCase', 1 /* StorageScope.WORKSPACE */, this._state.matchCase),
            wholeWord: this._storageService.getBoolean('editor.wholeWord', 1 /* StorageScope.WORKSPACE */, this._state.wholeWord),
            isRegex: this._storageService.getBoolean('editor.isRegex', 1 /* StorageScope.WORKSPACE */, this._state.isRegex),
            preserveCase: this._storageService.getBoolean('editor.preserveCase', 1 /* StorageScope.WORKSPACE */, this._state.preserveCase)
        }, false);
    }
    isFindInputFocused() {
        return !!CONTEXT_FIND_INPUT_FOCUSED.getValue(this._contextKeyService);
    }
    getState() {
        return this._state;
    }
    closeFindWidget() {
        this._state.change({
            isRevealed: false,
            searchScope: null
        }, false);
        this._editor.focus();
    }
    toggleCaseSensitive() {
        this._state.change({ matchCase: !this._state.matchCase }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleWholeWords() {
        this._state.change({ wholeWord: !this._state.wholeWord }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleRegex() {
        this._state.change({ isRegex: !this._state.isRegex }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    togglePreserveCase() {
        this._state.change({ preserveCase: !this._state.preserveCase }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleSearchScope() {
        if (this._state.searchScope) {
            this._state.change({ searchScope: null }, true);
        }
        else {
            if (this._editor.hasModel()) {
                let selections = this._editor.getSelections();
                selections = selections.map(selection => {
                    if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                        selection = selection.setEndPosition(selection.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
                    }
                    if (!selection.isEmpty()) {
                        return selection;
                    }
                    return null;
                }).filter((element) => !!element);
                if (selections.length) {
                    this._state.change({ searchScope: selections }, true);
                }
            }
        }
    }
    setSearchString(searchString) {
        if (this._state.isRegex) {
            searchString = escapeRegExpCharacters(searchString);
        }
        this._state.change({ searchString: searchString }, false);
    }
    highlightFindOptions(ignoreWhenVisible = false) {
        // overwritten in subclass
    }
    async _start(opts, newState) {
        this.disposeModel();
        if (!this._editor.hasModel()) {
            // cannot do anything with an editor that doesn't have a model...
            return;
        }
        const stateChanges = {
            ...newState,
            isRevealed: true
        };
        if (opts.seedSearchStringFromSelection === 'single') {
            const selectionSearchString = getSelectionSearchString(this._editor, opts.seedSearchStringFromSelection, opts.seedSearchStringFromNonEmptySelection);
            if (selectionSearchString) {
                if (this._state.isRegex) {
                    stateChanges.searchString = escapeRegExpCharacters(selectionSearchString);
                }
                else {
                    stateChanges.searchString = selectionSearchString;
                }
            }
        }
        else if (opts.seedSearchStringFromSelection === 'multiple' && !opts.updateSearchScope) {
            const selectionSearchString = getSelectionSearchString(this._editor, opts.seedSearchStringFromSelection);
            if (selectionSearchString) {
                stateChanges.searchString = selectionSearchString;
            }
        }
        if (!stateChanges.searchString && opts.seedSearchStringFromGlobalClipboard) {
            const selectionSearchString = await this.getGlobalBufferTerm();
            if (!this._editor.hasModel()) {
                // the editor has lost its model in the meantime
                return;
            }
            if (selectionSearchString) {
                stateChanges.searchString = selectionSearchString;
            }
        }
        // Overwrite isReplaceRevealed
        if (opts.forceRevealReplace || stateChanges.isReplaceRevealed) {
            stateChanges.isReplaceRevealed = true;
        }
        else if (!this._findWidgetVisible.get()) {
            stateChanges.isReplaceRevealed = false;
        }
        if (opts.updateSearchScope) {
            const currentSelections = this._editor.getSelections();
            if (currentSelections.some(selection => !selection.isEmpty())) {
                stateChanges.searchScope = currentSelections;
            }
        }
        stateChanges.loop = opts.loop;
        this._state.change(stateChanges, false);
        if (!this._model) {
            this._model = new FindModelBoundToEditorModel(this._editor, this._state);
        }
    }
    start(opts, newState) {
        return this._start(opts, newState);
    }
    moveToNextMatch() {
        if (this._model) {
            this._model.moveToNextMatch();
            return true;
        }
        return false;
    }
    moveToPrevMatch() {
        if (this._model) {
            this._model.moveToPrevMatch();
            return true;
        }
        return false;
    }
    goToMatch(index) {
        if (this._model) {
            this._model.moveToMatch(index);
            return true;
        }
        return false;
    }
    replace() {
        if (this._model) {
            this._model.replace();
            return true;
        }
        return false;
    }
    replaceAll() {
        if (this._model) {
            if (this._editor.getModel()?.isTooLargeForHeapOperation()) {
                this._notificationService.warn(localize(940, "The file is too large to perform a replace all operation."));
                return false;
            }
            this._model.replaceAll();
            return true;
        }
        return false;
    }
    selectAllMatches() {
        if (this._model) {
            this._model.selectAllMatches();
            this._editor.focus();
            return true;
        }
        return false;
    }
    async getGlobalBufferTerm() {
        if (this._editor.getOption(50 /* EditorOption.find */).globalFindClipboard
            && this._editor.hasModel()
            && !this._editor.getModel().isTooLargeForSyncing()) {
            return this._clipboardService.readFindText();
        }
        return '';
    }
    setGlobalBufferTerm(text) {
        if (this._editor.getOption(50 /* EditorOption.find */).globalFindClipboard
            && this._editor.hasModel()
            && !this._editor.getModel().isTooLargeForSyncing()) {
            // intentionally not awaited
            this._clipboardService.writeFindText(text);
        }
    }
};
CommonFindController = CommonFindController_1 = __decorate([
    __param(1, IContextKeyService),
    __param(2, IStorageService),
    __param(3, IClipboardService),
    __param(4, INotificationService),
    __param(5, IHoverService)
], CommonFindController);
let FindController = class FindController extends CommonFindController {
    constructor(editor, _contextViewService, _contextKeyService, _keybindingService, notificationService, _storageService, clipboardService, hoverService) {
        super(editor, _contextKeyService, _storageService, clipboardService, notificationService, hoverService);
        this._contextViewService = _contextViewService;
        this._keybindingService = _keybindingService;
        this._widget = null;
        this._findOptionsWidget = null;
        this._findWidgetSearchHistory = FindWidgetSearchHistory.getOrCreate(_storageService);
        this._replaceWidgetHistory = ReplaceWidgetHistory.getOrCreate(_storageService);
    }
    async _start(opts, newState) {
        if (!this._widget) {
            this._createFindWidget();
        }
        const selection = this._editor.getSelection();
        let updateSearchScope = false;
        switch (this._editor.getOption(50 /* EditorOption.find */).autoFindInSelection) {
            case 'always':
                updateSearchScope = true;
                break;
            case 'never':
                updateSearchScope = false;
                break;
            case 'multiline': {
                const isSelectionMultipleLine = !!selection && selection.startLineNumber !== selection.endLineNumber;
                updateSearchScope = isSelectionMultipleLine;
                break;
            }
        }
        opts.updateSearchScope = opts.updateSearchScope || updateSearchScope;
        await super._start(opts, newState);
        if (this._widget) {
            if (opts.shouldFocus === 2 /* FindStartFocusAction.FocusReplaceInput */) {
                this._widget.focusReplaceInput();
            }
            else if (opts.shouldFocus === 1 /* FindStartFocusAction.FocusFindInput */) {
                this._widget.focusFindInput();
            }
        }
    }
    highlightFindOptions(ignoreWhenVisible = false) {
        if (!this._widget) {
            this._createFindWidget();
        }
        if (this._state.isRevealed && !ignoreWhenVisible) {
            this._widget.highlightFindOptions();
        }
        else {
            this._findOptionsWidget.highlightFindOptions();
        }
    }
    _createFindWidget() {
        this._widget = this._register(new FindWidget(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._hoverService, this._findWidgetSearchHistory, this._replaceWidgetHistory));
        this._findOptionsWidget = this._register(new FindOptionsWidget(this._editor, this._state, this._keybindingService));
    }
    saveViewState() {
        return this._widget?.getViewState();
    }
    restoreViewState(state) {
        this._widget?.setViewState(state);
    }
};
FindController = __decorate([
    __param(1, IContextViewService),
    __param(2, IContextKeyService),
    __param(3, IKeybindingService),
    __param(4, INotificationService),
    __param(5, IStorageService),
    __param(6, IClipboardService),
    __param(7, IHoverService)
], FindController);
const StartFindAction = registerMultiEditorAction(new MultiEditorAction({
    id: FIND_IDS.StartFindAction,
    label: localize2(947, "Find"),
    precondition: ContextKeyExpr.or(EditorContextKeys.focus, ContextKeyExpr.has('editorIsOpen')),
    kbOpts: {
        kbExpr: null,
        primary: 2048 /* KeyMod.CtrlCmd */ | 36 /* KeyCode.KeyF */,
        weight: 100 /* KeybindingWeight.EditorContrib */
    },
    menuOpts: {
        menuId: MenuId.MenubarEditMenu,
        group: '3_find',
        title: localize(941, "&&Find"),
        order: 1
    }
}));
StartFindAction.addImplementation(0, (accessor, editor, args) => {
    const controller = CommonFindController.get(editor);
    if (!controller) {
        return false;
    }
    return controller.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
        seedSearchStringFromNonEmptySelection: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
        seedSearchStringFromGlobalClipboard: editor.getOption(50 /* EditorOption.find */).globalFindClipboard,
        shouldFocus: 1 /* FindStartFocusAction.FocusFindInput */,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: editor.getOption(50 /* EditorOption.find */).loop
    });
});
const findArgDescription = {
    description: 'Open a new In-Editor Find Widget.',
    args: [{
            name: 'Open a new In-Editor Find Widget args',
            schema: {
                properties: {
                    searchString: { type: 'string' },
                    replaceString: { type: 'string' },
                    isRegex: { type: 'boolean' },
                    matchWholeWord: { type: 'boolean' },
                    isCaseSensitive: { type: 'boolean' },
                    preserveCase: { type: 'boolean' },
                    findInSelection: { type: 'boolean' },
                }
            }
        }]
};
class StartFindWithArgsAction extends EditorAction {
    constructor() {
        super({
            id: FIND_IDS.StartFindWithArgs,
            label: localize2(948, "Find with Arguments"),
            precondition: undefined,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            metadata: findArgDescription
        });
    }
    async run(accessor, editor, args) {
        const controller = CommonFindController.get(editor);
        if (controller) {
            const newState = args ? {
                searchString: args.searchString,
                replaceString: args.replaceString,
                isReplaceRevealed: args.replaceString !== undefined,
                isRegex: args.isRegex,
                // isRegexOverride: args.regexOverride,
                wholeWord: args.matchWholeWord,
                // wholeWordOverride: args.wholeWordOverride,
                matchCase: args.isCaseSensitive,
                // matchCaseOverride: args.matchCaseOverride,
                preserveCase: args.preserveCase,
                // preserveCaseOverride: args.preserveCaseOverride,
            } : {};
            await controller.start({
                forceRevealReplace: false,
                seedSearchStringFromSelection: (controller.getState().searchString.length === 0) && editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
                seedSearchStringFromNonEmptySelection: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
                seedSearchStringFromGlobalClipboard: true,
                shouldFocus: 1 /* FindStartFocusAction.FocusFindInput */,
                shouldAnimate: true,
                updateSearchScope: args?.findInSelection || false,
                loop: editor.getOption(50 /* EditorOption.find */).loop
            }, newState);
            controller.setGlobalBufferTerm(controller.getState().searchString);
        }
    }
}
class StartFindWithSelectionAction extends EditorAction {
    constructor() {
        super({
            id: FIND_IDS.StartFindWithSelection,
            label: localize2(949, "Find with Selection"),
            precondition: undefined,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 35 /* KeyCode.KeyE */,
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    async run(accessor, editor) {
        const controller = CommonFindController.get(editor);
        if (controller) {
            await controller.start({
                forceRevealReplace: false,
                seedSearchStringFromSelection: 'multiple',
                seedSearchStringFromNonEmptySelection: false,
                seedSearchStringFromGlobalClipboard: false,
                shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                shouldAnimate: true,
                updateSearchScope: false,
                loop: editor.getOption(50 /* EditorOption.find */).loop
            });
            controller.setGlobalBufferTerm(controller.getState().searchString);
        }
    }
}
async function matchFindAction(editor, next) {
    const controller = CommonFindController.get(editor);
    if (!controller) {
        return;
    }
    const runMatch = () => {
        const result = next ? controller.moveToNextMatch() : controller.moveToPrevMatch();
        if (result) {
            controller.editor.pushUndoStop();
            return true;
        }
        return false;
    };
    if (!runMatch()) {
        await controller.start({
            forceRevealReplace: false,
            seedSearchStringFromSelection: (controller.getState().searchString.length === 0) && editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
            seedSearchStringFromNonEmptySelection: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
            seedSearchStringFromGlobalClipboard: true,
            shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
            shouldAnimate: true,
            updateSearchScope: false,
            loop: editor.getOption(50 /* EditorOption.find */).loop
        });
        runMatch();
    }
}
const NextMatchFindAction = registerMultiEditorAction(new MultiEditorAction({
    id: FIND_IDS.NextMatchFindAction,
    label: localize2(950, "Find Next"),
    precondition: undefined,
    kbOpts: [{
            kbExpr: EditorContextKeys.focus,
            primary: 61 /* KeyCode.F3 */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 37 /* KeyCode.KeyG */, secondary: [61 /* KeyCode.F3 */] },
            weight: 100 /* KeybindingWeight.EditorContrib */
        }, {
            kbExpr: ContextKeyExpr.and(EditorContextKeys.focus, CONTEXT_FIND_INPUT_FOCUSED),
            primary: 3 /* KeyCode.Enter */,
            weight: 100 /* KeybindingWeight.EditorContrib */
        }]
}));
NextMatchFindAction.addImplementation(0, async (accessor, editor, args) => {
    return matchFindAction(editor, true);
});
const PreviousMatchFindAction = registerMultiEditorAction(new MultiEditorAction({
    id: FIND_IDS.PreviousMatchFindAction,
    label: localize2(951, "Find Previous"),
    precondition: undefined,
    kbOpts: [{
            kbExpr: EditorContextKeys.focus,
            primary: 1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 37 /* KeyCode.KeyG */, secondary: [1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */] },
            weight: 100 /* KeybindingWeight.EditorContrib */
        }, {
            kbExpr: ContextKeyExpr.and(EditorContextKeys.focus, CONTEXT_FIND_INPUT_FOCUSED),
            primary: 1024 /* KeyMod.Shift */ | 3 /* KeyCode.Enter */,
            weight: 100 /* KeybindingWeight.EditorContrib */
        }]
}));
PreviousMatchFindAction.addImplementation(0, async (accessor, editor, args) => {
    return matchFindAction(editor, false);
});
class MoveToMatchFindAction extends EditorAction {
    constructor() {
        super({
            id: FIND_IDS.GoToMatchFindAction,
            label: localize2(952, "Go to Match..."),
            precondition: CONTEXT_FIND_WIDGET_VISIBLE
        });
        this._highlightDecorations = [];
    }
    run(accessor, editor, args) {
        const controller = CommonFindController.get(editor);
        if (!controller) {
            return;
        }
        const matchesCount = controller.getState().matchesCount;
        if (matchesCount < 1) {
            const notificationService = accessor.get(INotificationService);
            notificationService.notify({
                severity: Severity.Warning,
                message: localize(942, "No matches. Try searching for something else.")
            });
            return;
        }
        const quickInputService = accessor.get(IQuickInputService);
        const disposables = new DisposableStore();
        const inputBox = disposables.add(quickInputService.createInputBox());
        inputBox.placeholder = localize(943, "Type a number to go to a specific match (between 1 and {0})", matchesCount);
        const toFindMatchIndex = (value) => {
            const index = parseInt(value);
            if (isNaN(index)) {
                return undefined;
            }
            const matchCount = controller.getState().matchesCount;
            if (index > 0 && index <= matchCount) {
                return index - 1; // zero based
            }
            else if (index < 0 && index >= -matchCount) {
                return matchCount + index;
            }
            return undefined;
        };
        const updatePickerAndEditor = (value) => {
            const index = toFindMatchIndex(value);
            if (typeof index === 'number') {
                // valid
                inputBox.validationMessage = undefined;
                controller.goToMatch(index);
                const currentMatch = controller.getState().currentMatch;
                if (currentMatch) {
                    this.addDecorations(editor, currentMatch);
                }
            }
            else {
                inputBox.validationMessage = localize(944, "Please type a number between 1 and {0}", controller.getState().matchesCount);
                this.clearDecorations(editor);
            }
        };
        disposables.add(inputBox.onDidChangeValue(value => {
            updatePickerAndEditor(value);
        }));
        disposables.add(inputBox.onDidAccept(() => {
            const index = toFindMatchIndex(inputBox.value);
            if (typeof index === 'number') {
                controller.goToMatch(index);
                inputBox.hide();
            }
            else {
                inputBox.validationMessage = localize(945, "Please type a number between 1 and {0}", controller.getState().matchesCount);
            }
        }));
        disposables.add(inputBox.onDidHide(() => {
            this.clearDecorations(editor);
            disposables.dispose();
        }));
        inputBox.show();
    }
    clearDecorations(editor) {
        editor.changeDecorations(changeAccessor => {
            this._highlightDecorations = changeAccessor.deltaDecorations(this._highlightDecorations, []);
        });
    }
    addDecorations(editor, range) {
        editor.changeDecorations(changeAccessor => {
            this._highlightDecorations = changeAccessor.deltaDecorations(this._highlightDecorations, [
                {
                    range,
                    options: {
                        description: 'find-match-quick-access-range-highlight',
                        className: 'rangeHighlight',
                        isWholeLine: true
                    }
                },
                {
                    range,
                    options: {
                        description: 'find-match-quick-access-range-highlight-overview',
                        overviewRuler: {
                            color: themeColorFromId(overviewRulerRangeHighlight),
                            position: OverviewRulerLane.Full
                        }
                    }
                }
            ]);
        });
    }
}
class SelectionMatchFindAction extends EditorAction {
    async run(accessor, editor) {
        const controller = CommonFindController.get(editor);
        if (!controller) {
            return;
        }
        const selectionSearchString = getSelectionSearchString(editor, 'single', false);
        if (selectionSearchString) {
            controller.setSearchString(selectionSearchString);
        }
        if (!this._run(controller)) {
            await controller.start({
                forceRevealReplace: false,
                seedSearchStringFromSelection: 'none',
                seedSearchStringFromNonEmptySelection: false,
                seedSearchStringFromGlobalClipboard: false,
                shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                shouldAnimate: true,
                updateSearchScope: false,
                loop: editor.getOption(50 /* EditorOption.find */).loop
            });
            this._run(controller);
        }
    }
}
class NextSelectionMatchFindAction extends SelectionMatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.NextSelectionMatchFindAction,
            label: localize2(953, "Find Next Selection"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 61 /* KeyCode.F3 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(controller) {
        return controller.moveToNextMatch();
    }
}
class PreviousSelectionMatchFindAction extends SelectionMatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.PreviousSelectionMatchFindAction,
            label: localize2(954, "Find Previous Selection"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(controller) {
        return controller.moveToPrevMatch();
    }
}
const StartFindReplaceAction = registerMultiEditorAction(new MultiEditorAction({
    id: FIND_IDS.StartFindReplaceAction,
    label: localize2(955, "Replace"),
    precondition: ContextKeyExpr.or(EditorContextKeys.focus, ContextKeyExpr.has('editorIsOpen')),
    kbOpts: {
        kbExpr: null,
        primary: 2048 /* KeyMod.CtrlCmd */ | 38 /* KeyCode.KeyH */,
        mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 36 /* KeyCode.KeyF */ },
        weight: 100 /* KeybindingWeight.EditorContrib */
    },
    menuOpts: {
        menuId: MenuId.MenubarEditMenu,
        group: '3_find',
        title: localize(946, "&&Replace"),
        order: 2
    }
}));
StartFindReplaceAction.addImplementation(0, (accessor, editor, args) => {
    if (!editor.hasModel() || editor.getOption(104 /* EditorOption.readOnly */)) {
        return false;
    }
    const controller = CommonFindController.get(editor);
    if (!controller) {
        return false;
    }
    const currentSelection = editor.getSelection();
    const findInputFocused = controller.isFindInputFocused();
    // we only seed search string from selection when the current selection is single line and not empty,
    // + the find input is not focused
    const seedSearchStringFromSelection = !currentSelection.isEmpty()
        && currentSelection.startLineNumber === currentSelection.endLineNumber
        && (editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection !== 'never')
        && !findInputFocused;
    /*
    * if the existing search string in find widget is empty and we don't seed search string from selection, it means the Find Input is still empty, so we should focus the Find Input instead of Replace Input.

    * findInputFocused true -> seedSearchStringFromSelection false, FocusReplaceInput
    * findInputFocused false, seedSearchStringFromSelection true FocusReplaceInput
    * findInputFocused false seedSearchStringFromSelection false FocusFindInput
    */
    const shouldFocus = (findInputFocused || seedSearchStringFromSelection) ?
        2 /* FindStartFocusAction.FocusReplaceInput */ : 1 /* FindStartFocusAction.FocusFindInput */;
    return controller.start({
        forceRevealReplace: true,
        seedSearchStringFromSelection: seedSearchStringFromSelection ? 'single' : 'none',
        seedSearchStringFromNonEmptySelection: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
        seedSearchStringFromGlobalClipboard: editor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection !== 'never',
        shouldFocus: shouldFocus,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: editor.getOption(50 /* EditorOption.find */).loop
    });
});
registerEditorContribution(CommonFindController.ID, FindController, 0 /* EditorContributionInstantiation.Eager */); // eager because it uses `saveViewState`/`restoreViewState`
registerEditorAction(StartFindWithArgsAction);
registerEditorAction(StartFindWithSelectionAction);
registerEditorAction(MoveToMatchFindAction);
registerEditorAction(NextSelectionMatchFindAction);
registerEditorAction(PreviousSelectionMatchFindAction);
const FindCommand = EditorCommand.bindToContribution(CommonFindController.get);
registerEditorCommand(new FindCommand({
    id: FIND_IDS.CloseFindWidgetCommand,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.closeFindWidget(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: ContextKeyExpr.and(EditorContextKeys.focus, ContextKeyExpr.not('isComposing')),
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ToggleCaseSensitiveCommand,
    precondition: undefined,
    handler: x => x.toggleCaseSensitive(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: ToggleCaseSensitiveKeybinding.primary,
        mac: ToggleCaseSensitiveKeybinding.mac,
        win: ToggleCaseSensitiveKeybinding.win,
        linux: ToggleCaseSensitiveKeybinding.linux
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ToggleWholeWordCommand,
    precondition: undefined,
    handler: x => x.toggleWholeWords(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: ToggleWholeWordKeybinding.primary,
        mac: ToggleWholeWordKeybinding.mac,
        win: ToggleWholeWordKeybinding.win,
        linux: ToggleWholeWordKeybinding.linux
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ToggleRegexCommand,
    precondition: undefined,
    handler: x => x.toggleRegex(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: ToggleRegexKeybinding.primary,
        mac: ToggleRegexKeybinding.mac,
        win: ToggleRegexKeybinding.win,
        linux: ToggleRegexKeybinding.linux
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ToggleSearchScopeCommand,
    precondition: undefined,
    handler: x => x.toggleSearchScope(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: ToggleSearchScopeKeybinding.primary,
        mac: ToggleSearchScopeKeybinding.mac,
        win: ToggleSearchScopeKeybinding.win,
        linux: ToggleSearchScopeKeybinding.linux
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.TogglePreserveCaseCommand,
    precondition: undefined,
    handler: x => x.togglePreserveCase(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: TogglePreserveCaseKeybinding.primary,
        mac: TogglePreserveCaseKeybinding.mac,
        win: TogglePreserveCaseKeybinding.win,
        linux: TogglePreserveCaseKeybinding.linux
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ReplaceOneAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replace(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 22 /* KeyCode.Digit1 */
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ReplaceOneAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replace(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: ContextKeyExpr.and(EditorContextKeys.focus, CONTEXT_REPLACE_INPUT_FOCUSED),
        primary: 3 /* KeyCode.Enter */
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ReplaceAllAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replaceAll(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 3 /* KeyCode.Enter */
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.ReplaceAllAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replaceAll(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: ContextKeyExpr.and(EditorContextKeys.focus, CONTEXT_REPLACE_INPUT_FOCUSED),
        primary: undefined,
        mac: {
            primary: 2048 /* KeyMod.CtrlCmd */ | 3 /* KeyCode.Enter */,
        }
    }
}));
registerEditorCommand(new FindCommand({
    id: FIND_IDS.SelectAllMatchesAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.selectAllMatches(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: EditorContextKeys.focus,
        primary: 512 /* KeyMod.Alt */ | 3 /* KeyCode.Enter */
    }
}));

export { CommonFindController, FindController, MoveToMatchFindAction, NextMatchFindAction, NextSelectionMatchFindAction, PreviousMatchFindAction, PreviousSelectionMatchFindAction, SelectionMatchFindAction, StartFindAction, StartFindReplaceAction, StartFindWithArgsAction, StartFindWithSelectionAction, getSelectionSearchString };
