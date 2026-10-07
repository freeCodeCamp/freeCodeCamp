import '../../../../base/common/observableInternal/index.js';
import { IAccessibilityService } from '../../../../platform/accessibility/common/accessibility.js';
import { diffEditorDefaultOptions } from '../../../common/config/diffEditor.js';
import { boolean, clampedInt, stringSet, clampedFloat } from '../../../common/config/editorOptions.js';
import { allowsTrueInlineDiffRendering } from './components/diffEditorViewZones/diffEditorViewZones.js';
import { derivedConstOnceDefined } from '../../../../base/common/observableInternal/experimental/utils.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';

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
let DiffEditorOptions = class DiffEditorOptions {
    get editorOptions() { return this._options; }
    constructor(options, _accessibilityService) {
        this._accessibilityService = _accessibilityService;
        this._diffEditorWidth = observableValue(this, 0);
        this._screenReaderMode = observableFromEvent(this, this._accessibilityService.onDidChangeScreenReaderOptimized, () => this._accessibilityService.isScreenReaderOptimized());
        this.couldShowInlineViewBecauseOfSize = derived(this, reader => this._options.read(reader).renderSideBySide && this._diffEditorWidth.read(reader) <= this._options.read(reader).renderSideBySideInlineBreakpoint);
        this.renderOverviewRuler = derived(this, reader => this._options.read(reader).renderOverviewRuler);
        this.renderSideBySide = derived(this, reader => {
            if (this.compactMode.read(reader)) {
                if (this.shouldRenderInlineViewInSmartMode.read(reader)) {
                    return false;
                }
            }
            return this._options.read(reader).renderSideBySide
                && !(this._options.read(reader).useInlineViewWhenSpaceIsLimited && this.couldShowInlineViewBecauseOfSize.read(reader) && !this._screenReaderMode.read(reader));
        });
        this.readOnly = derived(this, reader => this._options.read(reader).readOnly);
        this.shouldRenderOldRevertArrows = derived(this, reader => {
            if (!this._options.read(reader).renderMarginRevertIcon) {
                return false;
            }
            if (!this.renderSideBySide.read(reader)) {
                return false;
            }
            if (this.readOnly.read(reader)) {
                return false;
            }
            if (this.shouldRenderGutterMenu.read(reader)) {
                return false;
            }
            return true;
        });
        this.shouldRenderGutterMenu = derived(this, reader => this._options.read(reader).renderGutterMenu);
        this.renderIndicators = derived(this, reader => this._options.read(reader).renderIndicators);
        this.enableSplitViewResizing = derived(this, reader => this._options.read(reader).enableSplitViewResizing);
        this.splitViewDefaultRatio = derived(this, reader => this._options.read(reader).splitViewDefaultRatio);
        this.ignoreTrimWhitespace = derived(this, reader => this._options.read(reader).ignoreTrimWhitespace);
        this.maxComputationTimeMs = derived(this, reader => this._options.read(reader).maxComputationTime);
        this.showMoves = derived(this, reader => this._options.read(reader).experimental.showMoves && this.renderSideBySide.read(reader));
        this.isInEmbeddedEditor = derived(this, reader => this._options.read(reader).isInEmbeddedEditor);
        this.diffWordWrap = derived(this, reader => this._options.read(reader).diffWordWrap);
        this.originalEditable = derived(this, reader => this._options.read(reader).originalEditable);
        this.diffCodeLens = derived(this, reader => this._options.read(reader).diffCodeLens);
        this.accessibilityVerbose = derived(this, reader => this._options.read(reader).accessibilityVerbose);
        this.diffAlgorithm = derived(this, reader => this._options.read(reader).diffAlgorithm);
        this.showEmptyDecorations = derived(this, reader => this._options.read(reader).experimental.showEmptyDecorations);
        this.onlyShowAccessibleDiffViewer = derived(this, reader => this._options.read(reader).onlyShowAccessibleDiffViewer);
        this.compactMode = derived(this, reader => this._options.read(reader).compactMode);
        this.trueInlineDiffRenderingEnabled = derived(this, reader => this._options.read(reader).experimental.useTrueInlineView);
        this.useTrueInlineDiffRendering = derived(this, reader => !this.renderSideBySide.read(reader) && this.trueInlineDiffRenderingEnabled.read(reader));
        this.hideUnchangedRegions = derived(this, reader => this._options.read(reader).hideUnchangedRegions.enabled);
        this.hideUnchangedRegionsRevealLineCount = derived(this, reader => this._options.read(reader).hideUnchangedRegions.revealLineCount);
        this.hideUnchangedRegionsContextLineCount = derived(this, reader => this._options.read(reader).hideUnchangedRegions.contextLineCount);
        this.hideUnchangedRegionsMinimumLineCount = derived(this, reader => this._options.read(reader).hideUnchangedRegions.minimumLineCount);
        this._model = observableValue(this, undefined);
        this.shouldRenderInlineViewInSmartMode = this._model
            .map(this, model => derivedConstOnceDefined(this, reader => {
            const diffs = model?.diff.read(reader);
            return diffs ? isSimpleDiff(diffs, this.trueInlineDiffRenderingEnabled.read(reader)) : undefined;
        }))
            .flatten()
            .map(this, v => !!v);
        this.inlineViewHideOriginalLineNumbers = this.compactMode;
        const optionsCopy = { ...options, ...validateDiffEditorOptions(options, diffEditorDefaultOptions) };
        this._options = observableValue(this, optionsCopy);
    }
    updateOptions(changedOptions) {
        const newDiffEditorOptions = validateDiffEditorOptions(changedOptions, this._options.get());
        const newOptions = { ...this._options.get(), ...changedOptions, ...newDiffEditorOptions };
        this._options.set(newOptions, undefined, { changedOptions: changedOptions });
    }
    setWidth(width) {
        this._diffEditorWidth.set(width, undefined);
    }
    setModel(model) {
        this._model.set(model, undefined);
    }
};
DiffEditorOptions = __decorate([
    __param(1, IAccessibilityService)
], DiffEditorOptions);
function isSimpleDiff(diff, supportsTrueDiffRendering) {
    return diff.mappings.every(m => isInsertion(m.lineRangeMapping) || isDeletion(m.lineRangeMapping) || (supportsTrueDiffRendering && allowsTrueInlineDiffRendering(m.lineRangeMapping)));
}
function isInsertion(mapping) {
    return mapping.original.length === 0;
}
function isDeletion(mapping) {
    return mapping.modified.length === 0;
}
function validateDiffEditorOptions(options, defaults) {
    return {
        enableSplitViewResizing: boolean(options.enableSplitViewResizing, defaults.enableSplitViewResizing),
        splitViewDefaultRatio: clampedFloat(options.splitViewDefaultRatio, 0.5, 0.1, 0.9),
        renderSideBySide: boolean(options.renderSideBySide, defaults.renderSideBySide),
        renderMarginRevertIcon: boolean(options.renderMarginRevertIcon, defaults.renderMarginRevertIcon),
        maxComputationTime: clampedInt(options.maxComputationTime, defaults.maxComputationTime, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        maxFileSize: clampedInt(options.maxFileSize, defaults.maxFileSize, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        ignoreTrimWhitespace: boolean(options.ignoreTrimWhitespace, defaults.ignoreTrimWhitespace),
        renderIndicators: boolean(options.renderIndicators, defaults.renderIndicators),
        originalEditable: boolean(options.originalEditable, defaults.originalEditable),
        diffCodeLens: boolean(options.diffCodeLens, defaults.diffCodeLens),
        renderOverviewRuler: boolean(options.renderOverviewRuler, defaults.renderOverviewRuler),
        diffWordWrap: stringSet(options.diffWordWrap, defaults.diffWordWrap, ['off', 'on', 'inherit']),
        diffAlgorithm: stringSet(options.diffAlgorithm, defaults.diffAlgorithm, ['legacy', 'advanced'], { 'smart': 'legacy', 'experimental': 'advanced' }),
        accessibilityVerbose: boolean(options.accessibilityVerbose, defaults.accessibilityVerbose),
        experimental: {
            showMoves: boolean(options.experimental?.showMoves, defaults.experimental.showMoves),
            showEmptyDecorations: boolean(options.experimental?.showEmptyDecorations, defaults.experimental.showEmptyDecorations),
            useTrueInlineView: boolean(options.experimental?.useTrueInlineView, defaults.experimental.useTrueInlineView),
        },
        hideUnchangedRegions: {
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            enabled: boolean(options.hideUnchangedRegions?.enabled ?? options.experimental?.collapseUnchangedRegions, defaults.hideUnchangedRegions.enabled),
            contextLineCount: clampedInt(options.hideUnchangedRegions?.contextLineCount, defaults.hideUnchangedRegions.contextLineCount, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
            minimumLineCount: clampedInt(options.hideUnchangedRegions?.minimumLineCount, defaults.hideUnchangedRegions.minimumLineCount, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
            revealLineCount: clampedInt(options.hideUnchangedRegions?.revealLineCount, defaults.hideUnchangedRegions.revealLineCount, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        },
        isInEmbeddedEditor: boolean(options.isInEmbeddedEditor, defaults.isInEmbeddedEditor),
        onlyShowAccessibleDiffViewer: boolean(options.onlyShowAccessibleDiffViewer, defaults.onlyShowAccessibleDiffViewer),
        renderSideBySideInlineBreakpoint: clampedInt(options.renderSideBySideInlineBreakpoint, defaults.renderSideBySideInlineBreakpoint, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        useInlineViewWhenSpaceIsLimited: boolean(options.useInlineViewWhenSpaceIsLimited, defaults.useInlineViewWhenSpaceIsLimited),
        renderGutterMenu: boolean(options.renderGutterMenu, defaults.renderGutterMenu),
        compactMode: boolean(options.compactMode, defaults.compactMode),
    };
}

export { DiffEditorOptions };
