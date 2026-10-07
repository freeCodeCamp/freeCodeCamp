import { Emitter } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { observableCodeEditor } from '../../../observableCodeEditor.js';
import { OverviewRulerFeature } from '../features/overviewRulerFeature.js';
import { EditorOptions } from '../../../../common/config/editorOptions.js';
import { Position } from '../../../../common/core/position.js';
import { localize } from '../../../../../nls.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { IContextKeyService } from '../../../../../platform/contextkey/common/contextkey.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derivedOpts, derived } from '../../../../../base/common/observableInternal/observables/derived.js';
import { autorunHandleChanges } from '../../../../../base/common/observableInternal/reactions/autorun.js';

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
let DiffEditorEditors = class DiffEditorEditors extends Disposable {
    get onDidContentSizeChange() { return this._onDidContentSizeChange.event; }
    constructor(originalEditorElement, modifiedEditorElement, _options, _argCodeEditorWidgetOptions, _createInnerEditor, _contextKeyService, _instantiationService, _keybindingService) {
        super();
        this.originalEditorElement = originalEditorElement;
        this.modifiedEditorElement = modifiedEditorElement;
        this._options = _options;
        this._argCodeEditorWidgetOptions = _argCodeEditorWidgetOptions;
        this._createInnerEditor = _createInnerEditor;
        this._contextKeyService = _contextKeyService;
        this._instantiationService = _instantiationService;
        this._keybindingService = _keybindingService;
        this.original = this._register(this._createLeftHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.originalEditor || {}));
        this.modified = this._register(this._createRightHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.modifiedEditor || {}));
        this._onDidContentSizeChange = this._register(new Emitter());
        this.modifiedScrollTop = observableFromEvent(this, this.modified.onDidScrollChange, () => /** @description modified.getScrollTop */ this.modified.getScrollTop());
        this.modifiedScrollHeight = observableFromEvent(this, this.modified.onDidScrollChange, () => /** @description modified.getScrollHeight */ this.modified.getScrollHeight());
        this.modifiedObs = observableCodeEditor(this.modified);
        this.originalObs = observableCodeEditor(this.original);
        this.modifiedModel = this.modifiedObs.model;
        this.modifiedSelections = observableFromEvent(this, this.modified.onDidChangeCursorSelection, () => this.modified.getSelections() ?? []);
        this.modifiedCursor = derivedOpts({ owner: this, equalsFn: Position.equals }, reader => this.modifiedSelections.read(reader)[0]?.getPosition() ?? new Position(1, 1));
        this.originalCursor = observableFromEvent(this, this.original.onDidChangeCursorPosition, () => this.original.getPosition() ?? new Position(1, 1));
        this.isOriginalFocused = observableCodeEditor(this.original).isFocused;
        this.isModifiedFocused = observableCodeEditor(this.modified).isFocused;
        this.isFocused = derived(this, reader => this.isOriginalFocused.read(reader) || this.isModifiedFocused.read(reader));
        // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
        this._argCodeEditorWidgetOptions = null;
        this._register(autorunHandleChanges({
            changeTracker: {
                createChangeSummary: () => ({}),
                handleChange: (ctx, changeSummary) => {
                    if (ctx.didChange(_options.editorOptions)) {
                        Object.assign(changeSummary, ctx.change.changedOptions);
                    }
                    return true;
                }
            }
        }, (reader, changeSummary) => {
            /** @description update editor options */
            _options.editorOptions.read(reader);
            this._options.renderSideBySide.read(reader);
            this.modified.updateOptions(this._adjustOptionsForRightHandSide(reader, changeSummary));
            this.original.updateOptions(this._adjustOptionsForLeftHandSide(reader, changeSummary));
        }));
    }
    _createLeftHandSideEditor(options, codeEditorWidgetOptions) {
        const leftHandSideOptions = this._adjustOptionsForLeftHandSide(undefined, options);
        const editor = this._constructInnerEditor(this._instantiationService, this.originalEditorElement, leftHandSideOptions, codeEditorWidgetOptions);
        const isInDiffLeftEditorKey = this._contextKeyService.createKey('isInDiffLeftEditor', editor.hasWidgetFocus());
        this._register(editor.onDidFocusEditorWidget(() => isInDiffLeftEditorKey.set(true)));
        this._register(editor.onDidBlurEditorWidget(() => isInDiffLeftEditorKey.set(false)));
        return editor;
    }
    _createRightHandSideEditor(options, codeEditorWidgetOptions) {
        const rightHandSideOptions = this._adjustOptionsForRightHandSide(undefined, options);
        const editor = this._constructInnerEditor(this._instantiationService, this.modifiedEditorElement, rightHandSideOptions, codeEditorWidgetOptions);
        const isInDiffRightEditorKey = this._contextKeyService.createKey('isInDiffRightEditor', editor.hasWidgetFocus());
        this._register(editor.onDidFocusEditorWidget(() => isInDiffRightEditorKey.set(true)));
        this._register(editor.onDidBlurEditorWidget(() => isInDiffRightEditorKey.set(false)));
        return editor;
    }
    _constructInnerEditor(instantiationService, container, options, editorWidgetOptions) {
        const editor = this._createInnerEditor(instantiationService, container, options, editorWidgetOptions);
        this._register(editor.onDidContentSizeChange(e => {
            const width = this.original.getContentWidth() + this.modified.getContentWidth() + OverviewRulerFeature.ENTIRE_DIFF_OVERVIEW_WIDTH;
            const height = Math.max(this.modified.getContentHeight(), this.original.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: height,
                contentWidth: width,
                contentHeightChanged: e.contentHeightChanged,
                contentWidthChanged: e.contentWidthChanged
            });
        }));
        return editor;
    }
    _adjustOptionsForLeftHandSide(_reader, changedOptions) {
        const result = this._adjustOptionsForSubEditor(changedOptions);
        if (!this._options.renderSideBySide.get()) {
            // never wrap hidden editor
            result.wordWrapOverride1 = 'off';
            result.wordWrapOverride2 = 'off';
            result.stickyScroll = { enabled: false };
            // Disable unicode highlighting for the original side in inline mode, as they are not shown anyway.
            result.unicodeHighlight = { nonBasicASCII: false, ambiguousCharacters: false, invisibleCharacters: false };
        }
        else {
            result.unicodeHighlight = this._options.editorOptions.get().unicodeHighlight || {};
            result.wordWrapOverride1 = this._options.diffWordWrap.get();
        }
        result.glyphMargin = this._options.renderSideBySide.get();
        if (changedOptions.originalAriaLabel) {
            result.ariaLabel = changedOptions.originalAriaLabel;
        }
        result.ariaLabel = this._updateAriaLabel(result.ariaLabel);
        result.readOnly = !this._options.originalEditable.get();
        result.dropIntoEditor = { enabled: !result.readOnly };
        result.extraEditorClassName = 'original-in-monaco-diff-editor';
        return result;
    }
    _adjustOptionsForRightHandSide(reader, changedOptions) {
        const result = this._adjustOptionsForSubEditor(changedOptions);
        if (changedOptions.modifiedAriaLabel) {
            result.ariaLabel = changedOptions.modifiedAriaLabel;
        }
        result.ariaLabel = this._updateAriaLabel(result.ariaLabel);
        result.wordWrapOverride1 = this._options.diffWordWrap.get();
        result.revealHorizontalRightPadding = EditorOptions.revealHorizontalRightPadding.defaultValue + OverviewRulerFeature.ENTIRE_DIFF_OVERVIEW_WIDTH;
        result.scrollbar.verticalHasArrows = false;
        result.extraEditorClassName = 'modified-in-monaco-diff-editor';
        return result;
    }
    _adjustOptionsForSubEditor(options) {
        const clonedOptions = {
            ...options,
            dimension: {
                height: 0,
                width: 0
            },
        };
        clonedOptions.inDiffEditor = true;
        clonedOptions.automaticLayout = false;
        clonedOptions.allowVariableLineHeights = false;
        clonedOptions.allowVariableFonts = false;
        clonedOptions.allowVariableFontsInAccessibilityMode = false;
        // Clone scrollbar options before changing them
        clonedOptions.scrollbar = { ...(clonedOptions.scrollbar || {}) };
        clonedOptions.folding = false;
        clonedOptions.codeLens = this._options.diffCodeLens.get();
        clonedOptions.fixedOverflowWidgets = true;
        // Clone minimap options before changing them
        clonedOptions.minimap = { ...(clonedOptions.minimap || {}) };
        clonedOptions.minimap.enabled = false;
        if (this._options.hideUnchangedRegions.get()) {
            clonedOptions.stickyScroll = { enabled: false };
        }
        else {
            clonedOptions.stickyScroll = this._options.editorOptions.get().stickyScroll;
        }
        return clonedOptions;
    }
    _updateAriaLabel(ariaLabel) {
        if (!ariaLabel) {
            ariaLabel = '';
        }
        const ariaNavigationTip = localize(111, ' use {0} to open the accessibility help.', this._keybindingService.lookupKeybinding('editor.action.accessibilityHelp')?.getAriaLabel());
        if (this._options.accessibilityVerbose.get()) {
            return ariaLabel + ariaNavigationTip;
        }
        else if (ariaLabel) {
            return ariaLabel.replaceAll(ariaNavigationTip, '');
        }
        return '';
    }
};
DiffEditorEditors = __decorate([
    __param(5, IContextKeyService),
    __param(6, IInstantiationService),
    __param(7, IKeybindingService)
], DiffEditorEditors);

export { DiffEditorEditors };
