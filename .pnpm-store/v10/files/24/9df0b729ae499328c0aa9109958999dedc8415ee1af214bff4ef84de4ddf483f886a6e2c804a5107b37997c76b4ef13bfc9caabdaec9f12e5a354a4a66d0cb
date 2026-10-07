import { trackFocus, getTotalWidth, getDomNodePagePosition, getTopLeftOffset, getComputedStyle } from '../../../../base/browser/dom.js';
import { alert } from '../../../../base/browser/ui/aria/aria.js';
import { Toggle } from '../../../../base/browser/ui/toggle/toggle.js';
import { Sash } from '../../../../base/browser/ui/sash/sash.js';
import { Widget } from '../../../../base/browser/ui/widget.js';
import { Delayer } from '../../../../base/common/async.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { toDisposable } from '../../../../base/common/lifecycle.js';
import { isLinux, isMacintosh } from '../../../../base/common/platform.js';
import { format } from '../../../../base/common/strings.js';
import './findWidget.css';
import { Range } from '../../../common/core/range.js';
import { MATCHES_LIMIT, CONTEXT_FIND_INPUT_FOCUSED, CONTEXT_REPLACE_INPUT_FOCUSED, FIND_IDS } from './findModel.js';
import { localize } from '../../../../nls.js';
import { ContextScopedFindInput, ContextScopedReplaceInput } from '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import { showHistoryKeybindingHint } from '../../../../platform/history/browser/historyWidgetKeybindingHint.js';
import { asCssVariable } from '../../../../platform/theme/common/colorUtils.js';
import { contrastBorder } from '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorFindMatchHighlightBorder, editorFindRangeHighlightBorder, editorFindMatchForeground, editorFindMatchHighlightForeground } from '../../../../platform/theme/common/colors/editorColors.js';
import { inputActiveOptionForeground, inputActiveOptionBorder, inputActiveOptionBackground } from '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { registerIcon, widgetClose } from '../../../../platform/theme/common/iconRegistry.js';
import { registerThemingParticipant } from '../../../../platform/theme/common/themeService.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import { isHighContrast } from '../../../../platform/theme/common/theme.js';
import { assertReturnsDefined } from '../../../../base/common/types.js';
import { defaultToggleStyles, defaultInputBoxStyles } from '../../../../platform/theme/browser/defaultStyles.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const findCollapsedIcon = registerIcon('find-collapsed', Codicon.chevronRight, localize(956, 'Icon to indicate that the editor find widget is collapsed.'));
const findExpandedIcon = registerIcon('find-expanded', Codicon.chevronDown, localize(957, 'Icon to indicate that the editor find widget is expanded.'));
const findSelectionIcon = registerIcon('find-selection', Codicon.selection, localize(958, 'Icon for \'Find in Selection\' in the editor find widget.'));
const findReplaceIcon = registerIcon('find-replace', Codicon.replace, localize(959, 'Icon for \'Replace\' in the editor find widget.'));
const findReplaceAllIcon = registerIcon('find-replace-all', Codicon.replaceAll, localize(960, 'Icon for \'Replace All\' in the editor find widget.'));
const findPreviousMatchIcon = registerIcon('find-previous-match', Codicon.arrowUp, localize(961, 'Icon for \'Find Previous\' in the editor find widget.'));
const findNextMatchIcon = registerIcon('find-next-match', Codicon.arrowDown, localize(962, 'Icon for \'Find Next\' in the editor find widget.'));
const NLS_FIND_DIALOG_LABEL = localize(963, "Find / Replace");
const NLS_FIND_INPUT_LABEL = localize(964, "Find");
const NLS_FIND_INPUT_PLACEHOLDER = localize(965, "Find");
const NLS_PREVIOUS_MATCH_BTN_LABEL = localize(966, "Previous Match");
const NLS_NEXT_MATCH_BTN_LABEL = localize(967, "Next Match");
const NLS_TOGGLE_SELECTION_FIND_TITLE = localize(968, "Find in Selection");
const NLS_CLOSE_BTN_LABEL = localize(969, "Close");
const NLS_REPLACE_INPUT_LABEL = localize(970, "Replace");
const NLS_REPLACE_INPUT_PLACEHOLDER = localize(971, "Replace");
const NLS_REPLACE_BTN_LABEL = localize(972, "Replace");
const NLS_REPLACE_ALL_BTN_LABEL = localize(973, "Replace All");
const NLS_TOGGLE_REPLACE_MODE_BTN_LABEL = localize(974, "Toggle Replace");
const NLS_MATCHES_COUNT_LIMIT_TITLE = localize(975, "Only the first {0} results are highlighted, but all find operations work on the entire text.", MATCHES_LIMIT);
const NLS_MATCHES_LOCATION = localize(976, "{0} of {1}");
const NLS_NO_RESULTS = localize(977, "No results");
const FIND_WIDGET_INITIAL_WIDTH = 419;
const PART_WIDTH = 275;
const FIND_INPUT_AREA_WIDTH = PART_WIDTH - 54;
let MAX_MATCHES_COUNT_WIDTH = 69;
// let FIND_ALL_CONTROLS_WIDTH = 17/** Find Input margin-left */ + (MAX_MATCHES_COUNT_WIDTH + 3 + 1) /** Match Results */ + 23 /** Button */ * 4 + 2/** sash */;
const FIND_INPUT_AREA_HEIGHT = 33; // The height of Find Widget when Replace Input is not visible.
const ctrlKeyMod = (isMacintosh ? 256 /* KeyMod.WinCtrl */ : 2048 /* KeyMod.CtrlCmd */);
class FindWidgetViewZone {
    constructor(afterLineNumber) {
        this.afterLineNumber = afterLineNumber;
        this.heightInPx = FIND_INPUT_AREA_HEIGHT;
        this.suppressMouseDown = false;
        this.domNode = document.createElement('div');
        this.domNode.className = 'dock-find-viewzone';
    }
}
function stopPropagationForMultiLineUpwards(event, value, textarea) {
    const isMultiline = !!value.match(/\n/);
    if (textarea && isMultiline && textarea.selectionStart > 0) {
        event.stopPropagation();
        return;
    }
}
function stopPropagationForMultiLineDownwards(event, value, textarea) {
    const isMultiline = !!value.match(/\n/);
    if (textarea && isMultiline && textarea.selectionEnd < textarea.value.length) {
        event.stopPropagation();
        return;
    }
}
class FindWidget extends Widget {
    static { this.ID = 'editor.contrib.findWidget'; }
    constructor(codeEditor, controller, state, contextViewProvider, keybindingService, contextKeyService, _hoverService, _findWidgetSearchHistory, _replaceWidgetHistory) {
        super();
        this._hoverService = _hoverService;
        this._findWidgetSearchHistory = _findWidgetSearchHistory;
        this._replaceWidgetHistory = _replaceWidgetHistory;
        this._cachedHeight = null;
        this._revealTimeouts = [];
        this._codeEditor = codeEditor;
        this._controller = controller;
        this._state = state;
        this._contextViewProvider = contextViewProvider;
        this._keybindingService = keybindingService;
        this._contextKeyService = contextKeyService;
        this._isVisible = false;
        this._isReplaceVisible = false;
        this._ignoreChangeEvent = false;
        this._updateHistoryDelayer = new Delayer(500);
        this._register(toDisposable(() => this._updateHistoryDelayer.cancel()));
        this._register(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this._buildDomNode();
        this._updateButtons();
        this._tryUpdateWidgetWidth();
        this._findInput.inputBox.layout();
        this._register(this._codeEditor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(104 /* EditorOption.readOnly */)) {
                if (this._codeEditor.getOption(104 /* EditorOption.readOnly */)) {
                    // Hide replace part if editor becomes read only
                    this._state.change({ isReplaceRevealed: false }, false);
                }
                this._updateButtons();
            }
            if (e.hasChanged(165 /* EditorOption.layoutInfo */)) {
                this._tryUpdateWidgetWidth();
            }
            if (e.hasChanged(2 /* EditorOption.accessibilitySupport */)) {
                this.updateAccessibilitySupport();
            }
            if (e.hasChanged(50 /* EditorOption.find */)) {
                const supportLoop = this._codeEditor.getOption(50 /* EditorOption.find */).loop;
                this._state.change({ loop: supportLoop }, false);
                const addExtraSpaceOnTop = this._codeEditor.getOption(50 /* EditorOption.find */).addExtraSpaceOnTop;
                if (addExtraSpaceOnTop && !this._viewZone) {
                    this._viewZone = new FindWidgetViewZone(0);
                    this._showViewZone();
                }
                if (!addExtraSpaceOnTop && this._viewZone) {
                    this._removeViewZone();
                }
            }
        }));
        this.updateAccessibilitySupport();
        this._register(this._codeEditor.onDidChangeCursorSelection(() => {
            if (this._isVisible) {
                this._updateToggleSelectionFindButton();
            }
        }));
        this._register(this._codeEditor.onDidFocusEditorWidget(async () => {
            if (this._isVisible) {
                const globalBufferTerm = await this._controller.getGlobalBufferTerm();
                if (globalBufferTerm && globalBufferTerm !== this._state.searchString) {
                    this._state.change({ searchString: globalBufferTerm }, false);
                    this._findInput.select();
                }
            }
        }));
        this._findInputFocused = CONTEXT_FIND_INPUT_FOCUSED.bindTo(contextKeyService);
        this._findFocusTracker = this._register(trackFocus(this._findInput.inputBox.inputElement));
        this._register(this._findFocusTracker.onDidFocus(() => {
            this._findInputFocused.set(true);
            this._updateSearchScope();
        }));
        this._register(this._findFocusTracker.onDidBlur(() => {
            this._findInputFocused.set(false);
        }));
        this._replaceInputFocused = CONTEXT_REPLACE_INPUT_FOCUSED.bindTo(contextKeyService);
        this._replaceFocusTracker = this._register(trackFocus(this._replaceInput.inputBox.inputElement));
        this._register(this._replaceFocusTracker.onDidFocus(() => {
            this._replaceInputFocused.set(true);
            this._updateSearchScope();
        }));
        this._register(this._replaceFocusTracker.onDidBlur(() => {
            this._replaceInputFocused.set(false);
        }));
        this._codeEditor.addOverlayWidget(this);
        if (this._codeEditor.getOption(50 /* EditorOption.find */).addExtraSpaceOnTop) {
            this._viewZone = new FindWidgetViewZone(0); // Put it before the first line then users can scroll beyond the first line.
        }
        this._register(this._codeEditor.onDidChangeModel(() => {
            if (!this._isVisible) {
                return;
            }
            this._viewZoneId = undefined;
        }));
        this._register(this._codeEditor.onDidScrollChange((e) => {
            if (e.scrollTopChanged) {
                this._layoutViewZone();
                return;
            }
            // for other scroll changes, layout the viewzone in next tick to avoid ruining current rendering.
            setTimeout(() => {
                this._layoutViewZone();
            }, 0);
        }));
    }
    // ----- IOverlayWidget API
    getId() {
        return FindWidget.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        if (this._isVisible) {
            return {
                preference: 0 /* OverlayWidgetPositionPreference.TOP_RIGHT_CORNER */
            };
        }
        return null;
    }
    // ----- React to state changes
    _onStateChanged(e) {
        if (e.searchString) {
            try {
                this._ignoreChangeEvent = true;
                this._findInput.setValue(this._state.searchString);
            }
            finally {
                this._ignoreChangeEvent = false;
            }
            this._updateButtons();
        }
        if (e.replaceString) {
            this._replaceInput.inputBox.value = this._state.replaceString;
        }
        if (e.isRevealed) {
            if (this._state.isRevealed) {
                this._reveal();
            }
            else {
                this._hide(true);
            }
        }
        if (e.isReplaceRevealed) {
            if (this._state.isReplaceRevealed) {
                if (!this._codeEditor.getOption(104 /* EditorOption.readOnly */) && !this._isReplaceVisible) {
                    this._isReplaceVisible = true;
                    this._replaceInput.width = getTotalWidth(this._findInput.domNode);
                    this._updateButtons();
                    this._replaceInput.inputBox.layout();
                }
            }
            else {
                if (this._isReplaceVisible) {
                    this._isReplaceVisible = false;
                    this._updateButtons();
                }
            }
        }
        if ((e.isRevealed || e.isReplaceRevealed) && (this._state.isRevealed || this._state.isReplaceRevealed)) {
            if (this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }
        if (e.isRegex) {
            this._findInput.setRegex(this._state.isRegex);
        }
        if (e.wholeWord) {
            this._findInput.setWholeWords(this._state.wholeWord);
        }
        if (e.matchCase) {
            this._findInput.setCaseSensitive(this._state.matchCase);
        }
        if (e.preserveCase) {
            this._replaceInput.setPreserveCase(this._state.preserveCase);
        }
        if (e.searchScope) {
            if (this._state.searchScope) {
                this._toggleSelectionFind.checked = true;
            }
            else {
                this._toggleSelectionFind.checked = false;
            }
            this._updateToggleSelectionFindButton();
        }
        if (e.searchString || e.matchesCount || e.matchesPosition) {
            const showRedOutline = (this._state.searchString.length > 0 && this._state.matchesCount === 0);
            this._domNode.classList.toggle('no-results', showRedOutline);
            this._updateMatchesCount();
            this._updateButtons();
        }
        if (e.searchString || e.currentMatch) {
            this._layoutViewZone();
        }
        if (e.updateHistory) {
            this._delayedUpdateHistory();
        }
        if (e.loop) {
            this._updateButtons();
        }
    }
    _delayedUpdateHistory() {
        this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(undefined, onUnexpectedError);
    }
    _updateHistory() {
        if (this._state.searchString) {
            this._findInput.inputBox.addToHistory();
        }
        if (this._state.replaceString) {
            this._replaceInput.inputBox.addToHistory();
        }
    }
    _updateMatchesCount() {
        this._matchesCount.style.minWidth = MAX_MATCHES_COUNT_WIDTH + 'px';
        if (this._state.matchesCount >= MATCHES_LIMIT) {
            this._matchesCount.title = NLS_MATCHES_COUNT_LIMIT_TITLE;
        }
        else {
            this._matchesCount.title = '';
        }
        // remove previous content
        this._matchesCount.firstChild?.remove();
        let label;
        if (this._state.matchesCount > 0) {
            let matchesCount = String(this._state.matchesCount);
            if (this._state.matchesCount >= MATCHES_LIMIT) {
                matchesCount += '+';
            }
            let matchesPosition = String(this._state.matchesPosition);
            if (matchesPosition === '0') {
                matchesPosition = '?';
            }
            label = format(NLS_MATCHES_LOCATION, matchesPosition, matchesCount);
        }
        else {
            label = NLS_NO_RESULTS;
        }
        this._matchesCount.appendChild(document.createTextNode(label));
        alert(this._getAriaLabel(label, this._state.currentMatch, this._state.searchString));
        MAX_MATCHES_COUNT_WIDTH = Math.max(MAX_MATCHES_COUNT_WIDTH, this._matchesCount.clientWidth);
    }
    // ----- actions
    _getAriaLabel(label, currentMatch, searchString) {
        if (label === NLS_NO_RESULTS) {
            return searchString === ''
                ? localize(978, "{0} found", label)
                : localize(979, "{0} found for '{1}'", label, searchString);
        }
        if (currentMatch) {
            const ariaLabel = localize(980, "{0} found for '{1}', at {2}", label, searchString, currentMatch.startLineNumber + ':' + currentMatch.startColumn);
            const model = this._codeEditor.getModel();
            if (model && (currentMatch.startLineNumber <= model.getLineCount()) && (currentMatch.startLineNumber >= 1)) {
                const lineContent = model.getLineContent(currentMatch.startLineNumber);
                return `${lineContent}, ${ariaLabel}`;
            }
            return ariaLabel;
        }
        return localize(981, "{0} found for '{1}'", label, searchString);
    }
    /**
     * If 'selection find' is ON we should not disable the button (its function is to cancel 'selection find').
     * If 'selection find' is OFF we enable the button only if there is a selection.
     */
    _updateToggleSelectionFindButton() {
        const selection = this._codeEditor.getSelection();
        const isSelection = selection ? (selection.startLineNumber !== selection.endLineNumber || selection.startColumn !== selection.endColumn) : false;
        const isChecked = this._toggleSelectionFind.checked;
        if (this._isVisible && (isChecked || isSelection)) {
            this._toggleSelectionFind.enable();
        }
        else {
            this._toggleSelectionFind.disable();
        }
    }
    _updateButtons() {
        this._findInput.setEnabled(this._isVisible);
        this._replaceInput.setEnabled(this._isVisible && this._isReplaceVisible);
        this._updateToggleSelectionFindButton();
        this._closeBtn.setEnabled(this._isVisible);
        const findInputIsNonEmpty = (this._state.searchString.length > 0);
        const matchesCount = this._state.matchesCount ? true : false;
        this._prevBtn.setEnabled(this._isVisible && findInputIsNonEmpty && matchesCount && this._state.canNavigateBack());
        this._nextBtn.setEnabled(this._isVisible && findInputIsNonEmpty && matchesCount && this._state.canNavigateForward());
        this._replaceBtn.setEnabled(this._isVisible && this._isReplaceVisible && findInputIsNonEmpty);
        this._replaceAllBtn.setEnabled(this._isVisible && this._isReplaceVisible && findInputIsNonEmpty);
        this._domNode.classList.toggle('replaceToggled', this._isReplaceVisible);
        this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        const canReplace = !this._codeEditor.getOption(104 /* EditorOption.readOnly */);
        this._toggleReplaceBtn.setEnabled(this._isVisible && canReplace);
    }
    _reveal() {
        this._revealTimeouts.forEach(e => {
            clearTimeout(e);
        });
        this._revealTimeouts = [];
        if (!this._isVisible) {
            this._isVisible = true;
            const selection = this._codeEditor.getSelection();
            switch (this._codeEditor.getOption(50 /* EditorOption.find */).autoFindInSelection) {
                case 'always':
                    this._toggleSelectionFind.checked = true;
                    break;
                case 'never':
                    this._toggleSelectionFind.checked = false;
                    break;
                case 'multiline': {
                    const isSelectionMultipleLine = !!selection && selection.startLineNumber !== selection.endLineNumber;
                    this._toggleSelectionFind.checked = isSelectionMultipleLine;
                    break;
                }
            }
            this._tryUpdateWidgetWidth();
            this._updateButtons();
            this._revealTimeouts.push(setTimeout(() => {
                this._domNode.classList.add('visible');
                this._domNode.setAttribute('aria-hidden', 'false');
            }, 0));
            // validate query again as it's being dismissed when we hide the find widget.
            this._revealTimeouts.push(setTimeout(() => {
                this._findInput.validate();
            }, 200));
            this._codeEditor.layoutOverlayWidget(this);
            let adjustEditorScrollTop = true;
            if (this._codeEditor.getOption(50 /* EditorOption.find */).seedSearchStringFromSelection && selection) {
                const domNode = this._codeEditor.getDomNode();
                if (domNode) {
                    const editorCoords = getDomNodePagePosition(domNode);
                    const startCoords = this._codeEditor.getScrolledVisiblePosition(selection.getStartPosition());
                    const startLeft = editorCoords.left + (startCoords ? startCoords.left : 0);
                    const startTop = startCoords ? startCoords.top : 0;
                    if (this._viewZone && startTop < this._viewZone.heightInPx) {
                        if (selection.endLineNumber > selection.startLineNumber) {
                            adjustEditorScrollTop = false;
                        }
                        const leftOfFindWidget = getTopLeftOffset(this._domNode).left;
                        if (startLeft > leftOfFindWidget) {
                            adjustEditorScrollTop = false;
                        }
                        const endCoords = this._codeEditor.getScrolledVisiblePosition(selection.getEndPosition());
                        const endLeft = editorCoords.left + (endCoords ? endCoords.left : 0);
                        if (endLeft > leftOfFindWidget) {
                            adjustEditorScrollTop = false;
                        }
                    }
                }
            }
            this._showViewZone(adjustEditorScrollTop);
        }
    }
    _hide(focusTheEditor) {
        this._revealTimeouts.forEach(e => {
            clearTimeout(e);
        });
        this._revealTimeouts = [];
        if (this._isVisible) {
            this._isVisible = false;
            this._updateButtons();
            this._domNode.classList.remove('visible');
            this._domNode.setAttribute('aria-hidden', 'true');
            this._findInput.clearMessage();
            if (focusTheEditor) {
                this._codeEditor.focus();
            }
            this._codeEditor.layoutOverlayWidget(this);
            this._removeViewZone();
        }
    }
    _layoutViewZone(targetScrollTop) {
        const addExtraSpaceOnTop = this._codeEditor.getOption(50 /* EditorOption.find */).addExtraSpaceOnTop;
        if (!addExtraSpaceOnTop) {
            this._removeViewZone();
            return;
        }
        if (!this._isVisible) {
            return;
        }
        const viewZone = this._viewZone;
        if (this._viewZoneId !== undefined || !viewZone) {
            return;
        }
        this._codeEditor.changeViewZones((accessor) => {
            viewZone.heightInPx = this._getHeight();
            this._viewZoneId = accessor.addZone(viewZone);
            // scroll top adjust to make sure the editor doesn't scroll when adding viewzone at the beginning.
            this._codeEditor.setScrollTop(targetScrollTop || this._codeEditor.getScrollTop() + viewZone.heightInPx);
        });
    }
    _showViewZone(adjustScroll = true) {
        if (!this._isVisible) {
            return;
        }
        const addExtraSpaceOnTop = this._codeEditor.getOption(50 /* EditorOption.find */).addExtraSpaceOnTop;
        if (!addExtraSpaceOnTop) {
            return;
        }
        if (this._viewZone === undefined) {
            this._viewZone = new FindWidgetViewZone(0);
        }
        const viewZone = this._viewZone;
        this._codeEditor.changeViewZones((accessor) => {
            if (this._viewZoneId !== undefined) {
                // the view zone already exists, we need to update the height
                const newHeight = this._getHeight();
                if (newHeight === viewZone.heightInPx) {
                    return;
                }
                const scrollAdjustment = newHeight - viewZone.heightInPx;
                viewZone.heightInPx = newHeight;
                accessor.layoutZone(this._viewZoneId);
                if (adjustScroll) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + scrollAdjustment);
                }
                return;
            }
            else {
                let scrollAdjustment = this._getHeight();
                // if the editor has top padding, factor that into the zone height
                scrollAdjustment -= this._codeEditor.getOption(96 /* EditorOption.padding */).top;
                if (scrollAdjustment <= 0) {
                    return;
                }
                viewZone.heightInPx = scrollAdjustment;
                this._viewZoneId = accessor.addZone(viewZone);
                if (adjustScroll) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + scrollAdjustment);
                }
            }
        });
    }
    _removeViewZone() {
        this._codeEditor.changeViewZones((accessor) => {
            if (this._viewZoneId !== undefined) {
                accessor.removeZone(this._viewZoneId);
                this._viewZoneId = undefined;
                if (this._viewZone) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() - this._viewZone.heightInPx);
                    this._viewZone = undefined;
                }
            }
        });
    }
    _tryUpdateWidgetWidth() {
        if (!this._isVisible) {
            return;
        }
        if (!this._domNode.isConnected) {
            // the widget is not in the DOM
            return;
        }
        const layoutInfo = this._codeEditor.getLayoutInfo();
        const editorContentWidth = layoutInfo.contentWidth;
        if (editorContentWidth <= 0) {
            // for example, diff view original editor
            this._domNode.classList.add('hiddenEditor');
            return;
        }
        else if (this._domNode.classList.contains('hiddenEditor')) {
            this._domNode.classList.remove('hiddenEditor');
        }
        const editorWidth = layoutInfo.width;
        const minimapWidth = layoutInfo.minimap.minimapWidth;
        let collapsedFindWidget = false;
        let reducedFindWidget = false;
        let narrowFindWidget = false;
        if (this._resized) {
            const widgetWidth = getTotalWidth(this._domNode);
            if (widgetWidth > FIND_WIDGET_INITIAL_WIDTH) {
                // as the widget is resized by users, we may need to change the max width of the widget as the editor width changes.
                this._domNode.style.maxWidth = `${editorWidth - 28 - minimapWidth - 15}px`;
                this._replaceInput.width = getTotalWidth(this._findInput.domNode);
                return;
            }
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth >= editorWidth) {
            reducedFindWidget = true;
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth - MAX_MATCHES_COUNT_WIDTH >= editorWidth) {
            narrowFindWidget = true;
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth - MAX_MATCHES_COUNT_WIDTH >= editorWidth + 50) {
            collapsedFindWidget = true;
        }
        this._domNode.classList.toggle('collapsed-find-widget', collapsedFindWidget);
        this._domNode.classList.toggle('narrow-find-widget', narrowFindWidget);
        this._domNode.classList.toggle('reduced-find-widget', reducedFindWidget);
        if (!narrowFindWidget && !collapsedFindWidget) {
            // the minimal left offset of findwidget is 15px.
            this._domNode.style.maxWidth = `${editorWidth - 28 - minimapWidth - 15}px`;
        }
        this._findInput.layout({ collapsedFindWidget, narrowFindWidget, reducedFindWidget });
        if (this._resized) {
            const findInputWidth = this._findInput.inputBox.element.clientWidth;
            if (findInputWidth > 0) {
                this._replaceInput.width = findInputWidth;
            }
        }
        else if (this._isReplaceVisible) {
            this._replaceInput.width = getTotalWidth(this._findInput.domNode);
        }
    }
    _getHeight() {
        let totalheight = 0;
        // find input margin top
        totalheight += 4;
        // find input height
        totalheight += this._findInput.inputBox.height + 2 /** input box border */;
        if (this._isReplaceVisible) {
            // replace input margin
            totalheight += 4;
            totalheight += this._replaceInput.inputBox.height + 2 /** input box border */;
        }
        // margin bottom
        totalheight += 4;
        return totalheight;
    }
    _tryUpdateHeight() {
        const totalHeight = this._getHeight();
        if (this._cachedHeight !== null && this._cachedHeight === totalHeight) {
            return false;
        }
        this._cachedHeight = totalHeight;
        this._domNode.style.height = `${totalHeight}px`;
        return true;
    }
    // ----- Public
    focusFindInput() {
        this._findInput.select();
        // Edge browser requires focus() in addition to select()
        this._findInput.focus();
    }
    focusReplaceInput() {
        this._replaceInput.select();
        // Edge browser requires focus() in addition to select()
        this._replaceInput.focus();
    }
    highlightFindOptions() {
        this._findInput.highlightFindOptions();
    }
    _updateSearchScope() {
        if (!this._codeEditor.hasModel()) {
            return;
        }
        if (this._toggleSelectionFind.checked) {
            const selections = this._codeEditor.getSelections();
            selections.map(selection => {
                if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                    selection = selection.setEndPosition(selection.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
                }
                const currentMatch = this._state.currentMatch;
                if (selection.startLineNumber !== selection.endLineNumber) {
                    if (!Range.equalsRange(selection, currentMatch)) {
                        return selection;
                    }
                }
                return null;
            }).filter(element => !!element);
            if (selections.length) {
                this._state.change({ searchScope: selections }, true);
            }
        }
    }
    _onFindInputMouseDown(e) {
        // on linux, middle key does pasting.
        if (e.middleButton) {
            e.stopPropagation();
        }
    }
    _onFindInputKeyDown(e) {
        if (e.equals(ctrlKeyMod | 3 /* KeyCode.Enter */)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            else {
                this._findInput.inputBox.insertAtCursor('\n');
                e.preventDefault();
                return;
            }
        }
        if (e.equals(2 /* KeyCode.Tab */)) {
            if (this._isReplaceVisible) {
                this._replaceInput.focus();
            }
            else {
                this._findInput.focusOnCaseSensitive();
            }
            e.preventDefault();
            return;
        }
        if (e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)) {
            this._codeEditor.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(16 /* KeyCode.UpArrow */)) {
            // eslint-disable-next-line no-restricted-syntax
            return stopPropagationForMultiLineUpwards(e, this._findInput.getValue(), this._findInput.domNode.querySelector('textarea'));
        }
        if (e.equals(18 /* KeyCode.DownArrow */)) {
            // eslint-disable-next-line no-restricted-syntax
            return stopPropagationForMultiLineDownwards(e, this._findInput.getValue(), this._findInput.domNode.querySelector('textarea'));
        }
    }
    _onReplaceInputKeyDown(e) {
        if (e.equals(ctrlKeyMod | 3 /* KeyCode.Enter */)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            else {
                this._replaceInput.inputBox.insertAtCursor('\n');
                e.preventDefault();
                return;
            }
        }
        if (e.equals(2 /* KeyCode.Tab */)) {
            this._findInput.focusOnCaseSensitive();
            e.preventDefault();
            return;
        }
        if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
            this._findInput.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)) {
            this._codeEditor.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(16 /* KeyCode.UpArrow */)) {
            // eslint-disable-next-line no-restricted-syntax
            return stopPropagationForMultiLineUpwards(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector('textarea'));
        }
        if (e.equals(18 /* KeyCode.DownArrow */)) {
            // eslint-disable-next-line no-restricted-syntax
            return stopPropagationForMultiLineDownwards(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector('textarea'));
        }
    }
    // ----- sash
    getVerticalSashLeft(_sash) {
        return 0;
    }
    // ----- initialization
    _keybindingLabelFor(actionId) {
        const kb = this._keybindingService.lookupKeybinding(actionId);
        if (!kb) {
            return '';
        }
        return ` (${kb.getLabel()})`;
    }
    _buildDomNode() {
        const flexibleHeight = true;
        const flexibleWidth = true;
        // Find input
        const findSearchHistoryConfig = this._codeEditor.getOption(50 /* EditorOption.find */).history;
        const replaceHistoryConfig = this._codeEditor.getOption(50 /* EditorOption.find */).replaceHistory;
        this._findInput = this._register(new ContextScopedFindInput(null, this._contextViewProvider, {
            width: FIND_INPUT_AREA_WIDTH,
            label: NLS_FIND_INPUT_LABEL,
            placeholder: NLS_FIND_INPUT_PLACEHOLDER,
            appendCaseSensitiveLabel: this._keybindingLabelFor(FIND_IDS.ToggleCaseSensitiveCommand),
            appendWholeWordsLabel: this._keybindingLabelFor(FIND_IDS.ToggleWholeWordCommand),
            appendRegexLabel: this._keybindingLabelFor(FIND_IDS.ToggleRegexCommand),
            validation: (value) => {
                if (value.length === 0 || !this._findInput.getRegex()) {
                    return null;
                }
                try {
                    // use `g` and `u` which are also used by the TextModel search
                    new RegExp(value, 'gu');
                    return null;
                }
                catch (e) {
                    return { content: e.message };
                }
            },
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight: 118,
            showCommonFindToggles: true,
            showHistoryHint: () => showHistoryKeybindingHint(this._keybindingService),
            inputBoxStyles: defaultInputBoxStyles,
            toggleStyles: defaultToggleStyles,
            history: findSearchHistoryConfig === 'workspace' ? this._findWidgetSearchHistory : new Set([]),
        }, this._contextKeyService));
        this._findInput.setRegex(!!this._state.isRegex);
        this._findInput.setCaseSensitive(!!this._state.matchCase);
        this._findInput.setWholeWords(!!this._state.wholeWord);
        this._register(this._findInput.onKeyDown((e) => {
            if (e.equals(3 /* KeyCode.Enter */) && !this._codeEditor.getOption(50 /* EditorOption.find */).findOnType) {
                this._state.change({ searchString: this._findInput.getValue() }, true);
            }
            this._onFindInputKeyDown(e);
        }));
        this._register(this._findInput.inputBox.onDidChange(() => {
            if (this._ignoreChangeEvent || !this._codeEditor.getOption(50 /* EditorOption.find */).findOnType) {
                return;
            }
            this._state.change({ searchString: this._findInput.getValue() }, true);
        }));
        this._register(this._findInput.onDidOptionChange(() => {
            this._state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, true);
        }));
        this._register(this._findInput.onCaseSensitiveKeyDown((e) => {
            if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
                if (this._isReplaceVisible) {
                    this._replaceInput.focus();
                    e.preventDefault();
                }
            }
        }));
        this._register(this._findInput.onRegexKeyDown((e) => {
            if (e.equals(2 /* KeyCode.Tab */)) {
                if (this._isReplaceVisible) {
                    this._replaceInput.focusOnPreserve();
                    e.preventDefault();
                }
            }
        }));
        this._register(this._findInput.inputBox.onDidHeightChange((e) => {
            if (this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }));
        if (isLinux) {
            this._register(this._findInput.onMouseDown((e) => this._onFindInputMouseDown(e)));
        }
        this._matchesCount = document.createElement('div');
        this._matchesCount.className = 'matchesCount';
        this._updateMatchesCount();
        const hoverLifecycleOptions = { groupId: 'find-widget' };
        // Previous button
        this._prevBtn = this._register(new SimpleButton({
            label: NLS_PREVIOUS_MATCH_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.PreviousMatchFindAction),
            icon: findPreviousMatchIcon,
            hoverLifecycleOptions,
            onTrigger: () => {
                assertReturnsDefined(this._codeEditor.getAction(FIND_IDS.PreviousMatchFindAction)).run().then(undefined, onUnexpectedError);
            }
        }, this._hoverService));
        // Next button
        this._nextBtn = this._register(new SimpleButton({
            label: NLS_NEXT_MATCH_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.NextMatchFindAction),
            icon: findNextMatchIcon,
            hoverLifecycleOptions,
            onTrigger: () => {
                assertReturnsDefined(this._codeEditor.getAction(FIND_IDS.NextMatchFindAction)).run().then(undefined, onUnexpectedError);
            }
        }, this._hoverService));
        const findPart = document.createElement('div');
        findPart.className = 'find-part';
        findPart.appendChild(this._findInput.domNode);
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'find-actions';
        findPart.appendChild(actionsContainer);
        actionsContainer.appendChild(this._matchesCount);
        actionsContainer.appendChild(this._prevBtn.domNode);
        actionsContainer.appendChild(this._nextBtn.domNode);
        // Toggle selection button
        this._toggleSelectionFind = this._register(new Toggle({
            icon: findSelectionIcon,
            title: NLS_TOGGLE_SELECTION_FIND_TITLE + this._keybindingLabelFor(FIND_IDS.ToggleSearchScopeCommand),
            isChecked: false,
            hoverLifecycleOptions,
            inputActiveOptionBackground: asCssVariable(inputActiveOptionBackground),
            inputActiveOptionBorder: asCssVariable(inputActiveOptionBorder),
            inputActiveOptionForeground: asCssVariable(inputActiveOptionForeground),
        }));
        this._register(this._toggleSelectionFind.onChange(() => {
            if (this._toggleSelectionFind.checked) {
                if (this._codeEditor.hasModel()) {
                    let selections = this._codeEditor.getSelections();
                    selections = selections.map(selection => {
                        if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                            selection = selection.setEndPosition(selection.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
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
            else {
                this._state.change({ searchScope: null }, true);
            }
        }));
        actionsContainer.appendChild(this._toggleSelectionFind.domNode);
        // Close button
        this._closeBtn = this._register(new SimpleButton({
            label: NLS_CLOSE_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.CloseFindWidgetCommand),
            icon: widgetClose,
            hoverLifecycleOptions,
            onTrigger: () => {
                this._state.change({ isRevealed: false, searchScope: null }, false);
            },
            onKeyDown: (e) => {
                if (e.equals(2 /* KeyCode.Tab */)) {
                    if (this._isReplaceVisible) {
                        if (this._replaceBtn.isEnabled()) {
                            this._replaceBtn.focus();
                        }
                        else {
                            this._codeEditor.focus();
                        }
                        e.preventDefault();
                    }
                }
            }
        }, this._hoverService));
        // Replace input
        this._replaceInput = this._register(new ContextScopedReplaceInput(null, undefined, {
            label: NLS_REPLACE_INPUT_LABEL,
            placeholder: NLS_REPLACE_INPUT_PLACEHOLDER,
            appendPreserveCaseLabel: this._keybindingLabelFor(FIND_IDS.TogglePreserveCaseCommand),
            history: replaceHistoryConfig === 'workspace' ? this._replaceWidgetHistory : new Set([]),
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight: 118,
            showHistoryHint: () => showHistoryKeybindingHint(this._keybindingService),
            inputBoxStyles: defaultInputBoxStyles,
            toggleStyles: defaultToggleStyles,
            hoverLifecycleOptions,
        }, this._contextKeyService, true));
        this._replaceInput.setPreserveCase(!!this._state.preserveCase);
        this._register(this._replaceInput.onKeyDown((e) => this._onReplaceInputKeyDown(e)));
        this._register(this._replaceInput.inputBox.onDidChange(() => {
            this._state.change({ replaceString: this._replaceInput.inputBox.value }, false);
        }));
        this._register(this._replaceInput.inputBox.onDidHeightChange((e) => {
            if (this._isReplaceVisible && this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }));
        this._register(this._replaceInput.onDidOptionChange(() => {
            this._state.change({
                preserveCase: this._replaceInput.getPreserveCase()
            }, true);
        }));
        this._register(this._replaceInput.onPreserveCaseKeyDown((e) => {
            if (e.equals(2 /* KeyCode.Tab */)) {
                if (this._prevBtn.isEnabled()) {
                    this._prevBtn.focus();
                }
                else if (this._nextBtn.isEnabled()) {
                    this._nextBtn.focus();
                }
                else if (this._toggleSelectionFind.enabled) {
                    this._toggleSelectionFind.focus();
                }
                else if (this._closeBtn.isEnabled()) {
                    this._closeBtn.focus();
                }
                e.preventDefault();
            }
        }));
        // Replace one button
        this._replaceBtn = this._register(new SimpleButton({
            label: NLS_REPLACE_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.ReplaceOneAction),
            icon: findReplaceIcon,
            hoverLifecycleOptions,
            onTrigger: () => {
                this._controller.replace();
            },
            onKeyDown: (e) => {
                if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
                    this._closeBtn.focus();
                    e.preventDefault();
                }
            }
        }, this._hoverService));
        // Replace all button
        this._replaceAllBtn = this._register(new SimpleButton({
            label: NLS_REPLACE_ALL_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.ReplaceAllAction),
            icon: findReplaceAllIcon,
            hoverLifecycleOptions,
            onTrigger: () => {
                this._controller.replaceAll();
            }
        }, this._hoverService));
        const replacePart = document.createElement('div');
        replacePart.className = 'replace-part';
        replacePart.appendChild(this._replaceInput.domNode);
        const replaceActionsContainer = document.createElement('div');
        replaceActionsContainer.className = 'replace-actions';
        replacePart.appendChild(replaceActionsContainer);
        replaceActionsContainer.appendChild(this._replaceBtn.domNode);
        replaceActionsContainer.appendChild(this._replaceAllBtn.domNode);
        // Toggle replace button
        this._toggleReplaceBtn = this._register(new SimpleButton({
            label: NLS_TOGGLE_REPLACE_MODE_BTN_LABEL,
            className: 'codicon toggle left',
            onTrigger: () => {
                this._state.change({ isReplaceRevealed: !this._isReplaceVisible }, false);
                if (this._isReplaceVisible) {
                    this._replaceInput.width = getTotalWidth(this._findInput.domNode);
                    this._replaceInput.inputBox.layout();
                }
                this._showViewZone();
            }
        }, this._hoverService));
        this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        // Widget
        this._domNode = document.createElement('div');
        this._domNode.className = 'editor-widget find-widget';
        this._domNode.setAttribute('aria-hidden', 'true');
        this._domNode.ariaLabel = NLS_FIND_DIALOG_LABEL;
        this._domNode.role = 'dialog';
        // We need to set this explicitly, otherwise on IE11, the width inheritence of flex doesn't work.
        this._domNode.style.width = `${FIND_WIDGET_INITIAL_WIDTH}px`;
        this._domNode.appendChild(this._toggleReplaceBtn.domNode);
        this._domNode.appendChild(findPart);
        this._domNode.appendChild(this._closeBtn.domNode);
        this._domNode.appendChild(replacePart);
        this._resizeSash = this._register(new Sash(this._domNode, this, { orientation: 0 /* Orientation.VERTICAL */, size: 2 }));
        this._resized = false;
        let originalWidth = FIND_WIDGET_INITIAL_WIDTH;
        this._register(this._resizeSash.onDidStart(() => {
            originalWidth = getTotalWidth(this._domNode);
        }));
        this._register(this._resizeSash.onDidChange((evt) => {
            this._resized = true;
            const width = originalWidth + evt.startX - evt.currentX;
            if (width < FIND_WIDGET_INITIAL_WIDTH) {
                // narrow down the find widget should be handled by CSS.
                return;
            }
            const maxWidth = parseFloat(getComputedStyle(this._domNode).maxWidth) || 0;
            if (width > maxWidth) {
                return;
            }
            this._domNode.style.width = `${width}px`;
            if (this._isReplaceVisible) {
                this._replaceInput.width = getTotalWidth(this._findInput.domNode);
            }
            this._findInput.inputBox.layout();
            this._tryUpdateHeight();
        }));
        this._register(this._resizeSash.onDidReset(() => {
            // users double click on the sash
            const currentWidth = getTotalWidth(this._domNode);
            if (currentWidth < FIND_WIDGET_INITIAL_WIDTH) {
                // The editor is narrow and the width of the find widget is controlled fully by CSS.
                return;
            }
            let width = FIND_WIDGET_INITIAL_WIDTH;
            if (!this._resized || currentWidth === FIND_WIDGET_INITIAL_WIDTH) {
                // 1. never resized before, double click should maximizes it
                // 2. users resized it already but its width is the same as default
                const layoutInfo = this._codeEditor.getLayoutInfo();
                width = layoutInfo.width - 28 - layoutInfo.minimap.minimapWidth - 15;
                this._resized = true;
            }
            this._domNode.style.width = `${width}px`;
            if (this._isReplaceVisible) {
                this._replaceInput.width = getTotalWidth(this._findInput.domNode);
            }
            this._findInput.inputBox.layout();
        }));
    }
    updateAccessibilitySupport() {
        const value = this._codeEditor.getOption(2 /* EditorOption.accessibilitySupport */);
        this._findInput.setFocusInputOnOptionClick(value !== 2 /* AccessibilitySupport.Enabled */);
    }
    getViewState() {
        let widgetViewZoneVisible = false;
        if (this._viewZone && this._viewZoneId) {
            widgetViewZoneVisible = this._viewZone.heightInPx > this._codeEditor.getScrollTop();
        }
        return {
            widgetViewZoneVisible,
            scrollTop: this._codeEditor.getScrollTop()
        };
    }
    setViewState(state) {
        if (!state) {
            return;
        }
        if (state.widgetViewZoneVisible) {
            // we should add the view zone
            this._layoutViewZone(state.scrollTop);
        }
    }
}
class SimpleButton extends Widget {
    constructor(opts, hoverService) {
        super();
        this._opts = opts;
        let className = 'button';
        if (this._opts.className) {
            className = className + ' ' + this._opts.className;
        }
        if (this._opts.icon) {
            className = className + ' ' + ThemeIcon.asClassName(this._opts.icon);
        }
        this._domNode = document.createElement('div');
        this._domNode.tabIndex = 0;
        this._domNode.className = className;
        this._domNode.setAttribute('role', 'button');
        this._domNode.setAttribute('aria-label', this._opts.label);
        this._register(hoverService.setupDelayedHover(this._domNode, {
            content: this._opts.label,
            style: 1 /* HoverStyle.Pointer */,
        }, opts.hoverLifecycleOptions));
        this.onclick(this._domNode, (e) => {
            this._opts.onTrigger();
            e.preventDefault();
        });
        this.onkeydown(this._domNode, (e) => {
            if (e.equals(10 /* KeyCode.Space */) || e.equals(3 /* KeyCode.Enter */)) {
                this._opts.onTrigger();
                e.preventDefault();
                return;
            }
            this._opts.onKeyDown?.(e);
        });
    }
    get domNode() {
        return this._domNode;
    }
    isEnabled() {
        return (this._domNode.tabIndex >= 0);
    }
    focus() {
        this._domNode.focus();
    }
    setEnabled(enabled) {
        this._domNode.classList.toggle('disabled', !enabled);
        this._domNode.setAttribute('aria-disabled', String(!enabled));
        this._domNode.tabIndex = enabled ? 0 : -1;
    }
    setExpanded(expanded) {
        this._domNode.setAttribute('aria-expanded', String(!!expanded));
        if (expanded) {
            this._domNode.classList.remove(...ThemeIcon.asClassNameArray(findCollapsedIcon));
            this._domNode.classList.add(...ThemeIcon.asClassNameArray(findExpandedIcon));
        }
        else {
            this._domNode.classList.remove(...ThemeIcon.asClassNameArray(findExpandedIcon));
            this._domNode.classList.add(...ThemeIcon.asClassNameArray(findCollapsedIcon));
        }
    }
}
// theming
registerThemingParticipant((theme, collector) => {
    const findMatchHighlightBorder = theme.getColor(editorFindMatchHighlightBorder);
    if (findMatchHighlightBorder) {
        collector.addRule(`.monaco-editor .findMatch { border: 1px ${isHighContrast(theme.type) ? 'dotted' : 'solid'} ${findMatchHighlightBorder}; box-sizing: border-box; }`);
    }
    const findRangeHighlightBorder = theme.getColor(editorFindRangeHighlightBorder);
    if (findRangeHighlightBorder) {
        collector.addRule(`.monaco-editor .findScope { border: 1px ${isHighContrast(theme.type) ? 'dashed' : 'solid'} ${findRangeHighlightBorder}; }`);
    }
    const hcBorder = theme.getColor(contrastBorder);
    if (hcBorder) {
        collector.addRule(`.monaco-editor .find-widget { border: 1px solid ${hcBorder}; }`);
    }
    const findMatchForeground = theme.getColor(editorFindMatchForeground);
    if (findMatchForeground) {
        collector.addRule(`.monaco-editor .findMatchInline { color: ${findMatchForeground}; }`);
    }
    const findMatchHighlightForeground = theme.getColor(editorFindMatchHighlightForeground);
    if (findMatchHighlightForeground) {
        collector.addRule(`.monaco-editor .currentFindMatchInline { color: ${findMatchHighlightForeground}; }`);
    }
});

export { FindWidget, FindWidgetViewZone, NLS_MATCHES_LOCATION, NLS_NO_RESULTS, SimpleButton, findNextMatchIcon, findPreviousMatchIcon, findReplaceAllIcon, findReplaceIcon, findSelectionIcon };
