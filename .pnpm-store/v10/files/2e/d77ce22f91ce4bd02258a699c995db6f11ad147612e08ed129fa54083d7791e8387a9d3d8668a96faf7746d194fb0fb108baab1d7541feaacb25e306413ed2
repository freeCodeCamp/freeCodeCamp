import { h, getWindow } from '../../../../base/browser/dom.js';
import { findLast } from '../../../../base/common/arraysFind.js';
import { onUnexpectedError, BugIndicatingError } from '../../../../base/common/errors.js';
import { Event } from '../../../../base/common/event.js';
import { readHotReloadableExport } from '../../../../base/common/hotReloadHelpers.js';
import { toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { IAccessibilitySignalService, AccessibilitySignal } from '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { ServiceCollection } from '../../../../platform/instantiation/common/serviceCollection.js';
import { bindContextKey } from '../../../../platform/observable/common/platformObservableUtils.js';
import { IEditorProgressService } from '../../../../platform/progress/common/progress.js';
import { LineRange } from '../../../common/core/ranges/lineRange.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { EditorType } from '../../../common/editorCommon.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { EditorExtensionsRegistry } from '../../editorExtensions.js';
import { ICodeEditorService } from '../../services/codeEditorService.js';
import { StableEditorScrollState } from '../../stableEditorScroll.js';
import { CodeEditorWidget } from '../codeEditor/codeEditorWidget.js';
import { AccessibleDiffViewer, AccessibleDiffViewerModelFromEditors } from './components/accessibleDiffViewer.js';
import { DiffEditorDecorations } from './components/diffEditorDecorations.js';
import { DiffEditorEditors } from './components/diffEditorEditors.js';
import { SashLayout, DiffEditorSash } from './components/diffEditorSash.js';
import { DiffEditorViewZones } from './components/diffEditorViewZones/diffEditorViewZones.js';
import { DelegatingEditor } from './delegatingEditorImpl.js';
import { DiffEditorOptions } from './diffEditorOptions.js';
import { DiffEditorViewModel } from './diffEditorViewModel.js';
import { DiffEditorGutter } from './features/gutterFeature.js';
import { HideUnchangedRegionsFeature } from './features/hideUnchangedRegionsFeature.js';
import { MovedBlocksLinesFeature } from './features/movedBlocksLinesFeature.js';
import { OverviewRulerFeature } from './features/overviewRulerFeature.js';
import { RevertButtonsFeature } from './features/revertButtonsFeature.js';
import './style.css';
import { ObservableElementSizeObserver, applyViewZones, applyStyle, RefCounted, translatePosition } from './utils.js';
import { disposableObservableValue, observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { derived, derivedDisposable } from '../../../../base/common/observableInternal/observables/derived.js';
import { autorun, autorunWithStore } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { recomputeInitiallyAndOnChange } from '../../../../base/common/observableInternal/utils/utils.js';
import { subtransaction, transaction } from '../../../../base/common/observableInternal/transaction.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let DiffEditorWidget = class DiffEditorWidget extends DelegatingEditor {
    get onDidContentSizeChange() { return this._editors.onDidContentSizeChange; }
    constructor(_domElement, options, codeEditorWidgetOptions, _parentContextKeyService, _parentInstantiationService, _codeEditorService, _accessibilitySignalService, _editorProgressService) {
        super();
        this._domElement = _domElement;
        this._parentContextKeyService = _parentContextKeyService;
        this._parentInstantiationService = _parentInstantiationService;
        this._codeEditorService = _codeEditorService;
        this._accessibilitySignalService = _accessibilitySignalService;
        this._editorProgressService = _editorProgressService;
        this.elements = h('div.monaco-diff-editor.side-by-side', { style: { position: 'relative', height: '100%' } }, [
            h('div.editor.original@original', { style: { position: 'absolute', height: '100%', } }),
            h('div.editor.modified@modified', { style: { position: 'absolute', height: '100%', } }),
            h('div.accessibleDiffViewer@accessibleDiffViewer', { style: { position: 'absolute', height: '100%' } }),
        ]);
        this._diffModelSrc = this._register(disposableObservableValue(this, undefined));
        this._diffModel = derived(this, reader => this._diffModelSrc.read(reader)?.object);
        this.onDidChangeModel = Event.fromObservableLight(this._diffModel);
        this._contextKeyService = this._register(this._parentContextKeyService.createScoped(this._domElement));
        this._instantiationService = this._register(this._parentInstantiationService.createChild(new ServiceCollection([IContextKeyService, this._contextKeyService])));
        this._boundarySashes = observableValue(this, undefined);
        this._accessibleDiffViewerShouldBeVisible = observableValue(this, false);
        this._accessibleDiffViewerVisible = derived(this, reader => this._options.onlyShowAccessibleDiffViewer.read(reader)
            ? true
            : this._accessibleDiffViewerShouldBeVisible.read(reader));
        this._movedBlocksLinesPart = observableValue(this, undefined);
        this._layoutInfo = derived(this, reader => {
            const fullWidth = this._rootSizeObserver.width.read(reader);
            const fullHeight = this._rootSizeObserver.height.read(reader);
            if (this._rootSizeObserver.automaticLayout) {
                this.elements.root.style.height = '100%';
            }
            else {
                this.elements.root.style.height = fullHeight + 'px';
            }
            const sash = this._sash.read(reader);
            const gutter = this._gutter.read(reader);
            const gutterWidth = gutter?.width.read(reader) ?? 0;
            const overviewRulerPartWidth = this._overviewRulerPart.read(reader)?.width ?? 0;
            let originalLeft, originalWidth, modifiedLeft, modifiedWidth, gutterLeft;
            const sideBySide = !!sash;
            if (sideBySide) {
                const sashLeft = sash.sashLeft.read(reader);
                const movedBlocksLinesWidth = this._movedBlocksLinesPart.read(reader)?.width.read(reader) ?? 0;
                originalLeft = 0;
                originalWidth = sashLeft - gutterWidth - movedBlocksLinesWidth;
                gutterLeft = sashLeft - gutterWidth;
                modifiedLeft = sashLeft;
                modifiedWidth = fullWidth - modifiedLeft - overviewRulerPartWidth;
            }
            else {
                gutterLeft = 0;
                const shouldHideOriginalLineNumbers = this._options.inlineViewHideOriginalLineNumbers.read(reader);
                originalLeft = gutterWidth;
                if (shouldHideOriginalLineNumbers) {
                    originalWidth = 0;
                }
                else {
                    originalWidth = Math.max(5, this._editors.originalObs.layoutInfoDecorationsLeft.read(reader));
                }
                modifiedLeft = gutterWidth + originalWidth;
                modifiedWidth = fullWidth - modifiedLeft - overviewRulerPartWidth;
            }
            this.elements.original.style.left = originalLeft + 'px';
            this.elements.original.style.width = originalWidth + 'px';
            this._editors.original.layout({ width: originalWidth, height: fullHeight }, true);
            gutter?.layout(gutterLeft);
            this.elements.modified.style.left = modifiedLeft + 'px';
            this.elements.modified.style.width = modifiedWidth + 'px';
            this._editors.modified.layout({ width: modifiedWidth, height: fullHeight }, true);
            return {
                modifiedEditor: this._editors.modified.getLayoutInfo(),
                originalEditor: this._editors.original.getLayoutInfo(),
            };
        });
        this._diffValue = this._diffModel.map((m, r) => m?.diff.read(r));
        this.onDidUpdateDiff = Event.fromObservableLight(this._diffValue);
        this._codeEditorService.willCreateDiffEditor();
        this._contextKeyService.createKey('isInDiffEditor', true);
        this._domElement.appendChild(this.elements.root);
        this._register(toDisposable(() => this.elements.root.remove()));
        this._rootSizeObserver = this._register(new ObservableElementSizeObserver(this.elements.root, options.dimension));
        this._rootSizeObserver.setAutomaticLayout(options.automaticLayout ?? false);
        this._options = this._instantiationService.createInstance(DiffEditorOptions, options);
        this._register(autorun(reader => {
            this._options.setWidth(this._rootSizeObserver.width.read(reader));
        }));
        this._contextKeyService.createKey(EditorContextKeys.isEmbeddedDiffEditor.key, false);
        this._register(bindContextKey(EditorContextKeys.isEmbeddedDiffEditor, this._contextKeyService, reader => this._options.isInEmbeddedEditor.read(reader)));
        this._register(bindContextKey(EditorContextKeys.comparingMovedCode, this._contextKeyService, reader => !!this._diffModel.read(reader)?.movedTextToCompare.read(reader)));
        this._register(bindContextKey(EditorContextKeys.diffEditorRenderSideBySideInlineBreakpointReached, this._contextKeyService, reader => this._options.couldShowInlineViewBecauseOfSize.read(reader)));
        this._register(bindContextKey(EditorContextKeys.diffEditorInlineMode, this._contextKeyService, reader => !this._options.renderSideBySide.read(reader)));
        this._register(bindContextKey(EditorContextKeys.hasChanges, this._contextKeyService, reader => (this._diffModel.read(reader)?.diff.read(reader)?.mappings.length ?? 0) > 0));
        this._editors = this._register(this._instantiationService.createInstance(DiffEditorEditors, this.elements.original, this.elements.modified, this._options, codeEditorWidgetOptions, (i, c, o, o2) => this._createInnerEditor(i, c, o, o2)));
        this._register(bindContextKey(EditorContextKeys.diffEditorOriginalWritable, this._contextKeyService, reader => this._options.originalEditable.read(reader)));
        this._register(bindContextKey(EditorContextKeys.diffEditorModifiedWritable, this._contextKeyService, reader => !this._options.readOnly.read(reader)));
        this._register(bindContextKey(EditorContextKeys.diffEditorOriginalUri, this._contextKeyService, reader => this._diffModel.read(reader)?.model.original.uri.toString() ?? ''));
        this._register(bindContextKey(EditorContextKeys.diffEditorModifiedUri, this._contextKeyService, reader => this._diffModel.read(reader)?.model.modified.uri.toString() ?? ''));
        this._overviewRulerPart = derivedDisposable(this, reader => !this._options.renderOverviewRuler.read(reader)
            ? undefined
            : this._instantiationService.createInstance(readHotReloadableExport(OverviewRulerFeature), this._editors, this.elements.root, this._diffModel, this._rootSizeObserver.width, this._rootSizeObserver.height, this._layoutInfo.map(i => i.modifiedEditor))).recomputeInitiallyAndOnChange(this._store);
        const dimensions = {
            height: this._rootSizeObserver.height,
            width: this._rootSizeObserver.width.map((w, reader) => w - (this._overviewRulerPart.read(reader)?.width ?? 0)),
        };
        this._sashLayout = new SashLayout(this._options, dimensions);
        this._sash = derivedDisposable(this, reader => {
            const showSash = this._options.renderSideBySide.read(reader);
            this.elements.root.classList.toggle('side-by-side', showSash);
            return !showSash ? undefined : new DiffEditorSash(this.elements.root, dimensions, this._options.enableSplitViewResizing, this._boundarySashes, this._sashLayout.sashLeft, () => this._sashLayout.resetSash());
        }).recomputeInitiallyAndOnChange(this._store);
        const unchangedRangesFeature = derivedDisposable(this, reader => /** @description UnchangedRangesFeature */ this._instantiationService.createInstance(readHotReloadableExport(HideUnchangedRegionsFeature), this._editors, this._diffModel, this._options)).recomputeInitiallyAndOnChange(this._store);
        derivedDisposable(this, reader => /** @description DiffEditorDecorations */ this._instantiationService.createInstance(readHotReloadableExport(DiffEditorDecorations), this._editors, this._diffModel, this._options, this)).recomputeInitiallyAndOnChange(this._store);
        const origViewZoneIdsToIgnore = new Set();
        const modViewZoneIdsToIgnore = new Set();
        let isUpdatingViewZones = false;
        const viewZoneManager = derivedDisposable(this, reader => /** @description ViewZoneManager */ this._instantiationService.createInstance(readHotReloadableExport(DiffEditorViewZones), getWindow(this._domElement), this._editors, this._diffModel, this._options, this, () => isUpdatingViewZones || unchangedRangesFeature.read(undefined).isUpdatingHiddenAreas, origViewZoneIdsToIgnore, modViewZoneIdsToIgnore)).recomputeInitiallyAndOnChange(this._store);
        const originalViewZones = derived(this, (reader) => {
            const orig = viewZoneManager.read(reader).viewZones.read(reader).orig;
            const orig2 = unchangedRangesFeature.read(reader).viewZones.read(reader).origViewZones;
            return orig.concat(orig2);
        });
        const modifiedViewZones = derived(this, (reader) => {
            const mod = viewZoneManager.read(reader).viewZones.read(reader).mod;
            const mod2 = unchangedRangesFeature.read(reader).viewZones.read(reader).modViewZones;
            return mod.concat(mod2);
        });
        this._register(applyViewZones(this._editors.original, originalViewZones, isUpdatingOrigViewZones => {
            isUpdatingViewZones = isUpdatingOrigViewZones;
        }, origViewZoneIdsToIgnore));
        let scrollState;
        this._register(applyViewZones(this._editors.modified, modifiedViewZones, isUpdatingModViewZones => {
            isUpdatingViewZones = isUpdatingModViewZones;
            if (isUpdatingViewZones) {
                scrollState = StableEditorScrollState.capture(this._editors.modified);
            }
            else {
                scrollState?.restore(this._editors.modified);
                scrollState = undefined;
            }
        }, modViewZoneIdsToIgnore));
        this._accessibleDiffViewer = derivedDisposable(this, reader => this._instantiationService.createInstance(readHotReloadableExport(AccessibleDiffViewer), this.elements.accessibleDiffViewer, this._accessibleDiffViewerVisible, (visible, tx) => this._accessibleDiffViewerShouldBeVisible.set(visible, tx), this._options.onlyShowAccessibleDiffViewer.map(v => !v), this._rootSizeObserver.width, this._rootSizeObserver.height, this._diffModel.map((m, r) => m?.diff.read(r)?.mappings.map(m => m.lineRangeMapping)), new AccessibleDiffViewerModelFromEditors(this._editors))).recomputeInitiallyAndOnChange(this._store);
        const visibility = this._accessibleDiffViewerVisible.map(v => v ? 'hidden' : 'visible');
        this._register(applyStyle(this.elements.modified, { visibility }));
        this._register(applyStyle(this.elements.original, { visibility }));
        this._createDiffEditorContributions();
        this._codeEditorService.addDiffEditor(this);
        this._register(toDisposable(() => {
            this._codeEditorService.removeDiffEditor(this);
        }));
        this._gutter = derivedDisposable(this, reader => {
            return this._options.shouldRenderGutterMenu.read(reader)
                ? this._instantiationService.createInstance(readHotReloadableExport(DiffEditorGutter), this.elements.root, this._diffModel, this._editors, this._options, this._sashLayout, this._boundarySashes)
                : undefined;
        });
        this._register(recomputeInitiallyAndOnChange(this._layoutInfo));
        derivedDisposable(this, reader => /** @description MovedBlocksLinesPart */ new (readHotReloadableExport(MovedBlocksLinesFeature))(this.elements.root, this._diffModel, this._layoutInfo.map(i => i.originalEditor), this._layoutInfo.map(i => i.modifiedEditor), this._editors)).recomputeInitiallyAndOnChange(this._store, value => {
            // This is to break the layout info <-> moved blocks lines part dependency cycle.
            this._movedBlocksLinesPart.set(value, undefined);
        });
        this._register(Event.runAndSubscribe(this._editors.modified.onDidChangeCursorPosition, e => this._handleCursorPositionChange(e, true)));
        this._register(Event.runAndSubscribe(this._editors.original.onDidChangeCursorPosition, e => this._handleCursorPositionChange(e, false)));
        const isInitializingDiff = this._diffModel.map(this, (m, reader) => {
            /** @isInitializingDiff isDiffUpToDate */
            if (!m) {
                return undefined;
            }
            return m.diff.read(reader) === undefined && !m.isDiffUpToDate.read(reader);
        });
        this._register(autorunWithStore((reader, store) => {
            /** @description DiffEditorWidgetHelper.ShowProgress */
            if (isInitializingDiff.read(reader) === true) {
                const r = this._editorProgressService.show(true, 1000);
                store.add(toDisposable(() => r.done()));
            }
        }));
        this._register(autorunWithStore((reader, store) => {
            store.add(new (readHotReloadableExport(RevertButtonsFeature))(this._editors, this._diffModel, this._options, this));
        }));
        this._register(autorunWithStore((reader, store) => {
            const model = this._diffModel.read(reader);
            if (!model) {
                return;
            }
            for (const m of [model.model.original, model.model.modified]) {
                store.add(m.onWillDispose(e => {
                    onUnexpectedError(new BugIndicatingError('TextModel got disposed before DiffEditorWidget model got reset'));
                    this.setModel(null);
                }));
            }
        }));
        this._register(autorun(reader => {
            this._options.setModel(this._diffModel.read(reader));
        }));
    }
    _createInnerEditor(instantiationService, container, options, editorWidgetOptions) {
        const editor = instantiationService.createInstance(CodeEditorWidget, container, options, editorWidgetOptions);
        return editor;
    }
    _createDiffEditorContributions() {
        const contributions = EditorExtensionsRegistry.getDiffEditorContributions();
        for (const desc of contributions) {
            try {
                this._register(this._instantiationService.createInstance(desc.ctor, this));
            }
            catch (err) {
                onUnexpectedError(err);
            }
        }
    }
    get _targetEditor() { return this._editors.modified; }
    getEditorType() { return EditorType.IDiffEditor; }
    layout(dimension) {
        this._rootSizeObserver.observe(dimension);
    }
    hasTextFocus() { return this._editors.original.hasTextFocus() || this._editors.modified.hasTextFocus(); }
    saveViewState() {
        const originalViewState = this._editors.original.saveViewState();
        const modifiedViewState = this._editors.modified.saveViewState();
        return {
            original: originalViewState,
            modified: modifiedViewState,
            modelState: this._diffModel.get()?.serializeState(),
        };
    }
    restoreViewState(s) {
        if (s && s.original && s.modified) {
            const diffEditorState = s;
            this._editors.original.restoreViewState(diffEditorState.original);
            this._editors.modified.restoreViewState(diffEditorState.modified);
            if (diffEditorState.modelState) {
                // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
                this._diffModel.get()?.restoreSerializedState(diffEditorState.modelState);
            }
        }
    }
    handleInitialized() {
        this._editors.original.handleInitialized();
        this._editors.modified.handleInitialized();
    }
    createViewModel(model) {
        return this._instantiationService.createInstance(DiffEditorViewModel, model, this._options);
    }
    getModel() { return this._diffModel.get()?.model ?? null; }
    setModel(model) {
        const vm = !model ? null
            : ('model' in model) ? RefCounted.create(model).createNewRef(this)
                : RefCounted.create(this.createViewModel(model), this);
        this.setDiffModel(vm);
    }
    setDiffModel(viewModel, tx) {
        const currentModel = this._diffModel.get();
        if (!viewModel && currentModel) {
            // Transitioning from a model to no-model
            this._accessibleDiffViewer.get().close();
        }
        if (this._diffModel.get() !== viewModel?.object) {
            subtransaction(tx, tx => {
                const vm = viewModel?.object;
                /** @description DiffEditorWidget.setModel */
                observableFromEvent.batchEventsGlobally(tx, () => {
                    this._editors.original.setModel(vm ? vm.model.original : null);
                    this._editors.modified.setModel(vm ? vm.model.modified : null);
                });
                const prevValueRef = this._diffModelSrc.get()?.createNewRef(this);
                this._diffModelSrc.set(viewModel?.createNewRef(this), tx);
                setTimeout(() => {
                    // async, so that this runs after the transaction finished.
                    // TODO: use the transaction to schedule disposal
                    prevValueRef?.dispose();
                }, 0);
            });
        }
    }
    /**
     * @param changedOptions Only has values for top-level options that have actually changed.
     */
    updateOptions(changedOptions) {
        this._options.updateOptions(changedOptions);
    }
    getContainerDomNode() { return this._domElement; }
    getOriginalEditor() { return this._editors.original; }
    getModifiedEditor() { return this._editors.modified; }
    /**
     * @deprecated Use `this.getDiffComputationResult().changes2` instead.
     */
    getLineChanges() {
        const diffState = this._diffModel.get()?.diff.get();
        if (!diffState) {
            return null;
        }
        return toLineChanges(diffState);
    }
    getDiffComputationResult() {
        const diffState = this._diffModel.get()?.diff.get();
        if (!diffState) {
            return null;
        }
        return {
            changes: this.getLineChanges(),
            changes2: diffState.mappings.map(m => m.lineRangeMapping),
            identical: diffState.identical,
            quitEarly: diffState.quitEarly,
        };
    }
    revert(diff) {
        const model = this._diffModel.get();
        if (!model || !model.isDiffUpToDate.get()) {
            return;
        }
        this._editors.modified.pushUndoStop();
        this._editors.modified.executeEdits('diffEditor', [
            {
                range: diff.modified.toExclusiveRange(),
                text: model.model.original.getValueInRange(diff.original.toExclusiveRange())
            }
        ]);
        this._editors.modified.pushUndoStop();
    }
    revertRangeMappings(diffs) {
        const model = this._diffModel.get();
        if (!model || !model.isDiffUpToDate.get()) {
            return;
        }
        const changes = diffs.map(c => ({
            range: c.modifiedRange,
            text: model.model.original.getValueInRange(c.originalRange)
        }));
        this._editors.modified.pushUndoStop();
        this._editors.modified.executeEdits('diffEditor', changes);
        this._editors.modified.pushUndoStop();
    }
    revertFocusedRangeMappings() {
        const model = this._diffModel.get();
        if (!model || !model.isDiffUpToDate.get()) {
            return;
        }
        const diffs = this._diffModel.get()?.diff.get()?.mappings;
        if (!diffs || diffs.length === 0) {
            return;
        }
        const modifiedEditor = this._editors.modified;
        if (!modifiedEditor.hasTextFocus()) {
            return;
        }
        const curLineNumber = modifiedEditor.getPosition().lineNumber;
        const selection = modifiedEditor.getSelection();
        const selectedRange = LineRange.fromRange(selection || new Range(curLineNumber, 0, curLineNumber, 0));
        const diffsToRevert = diffs.filter(d => {
            return d.lineRangeMapping.modified.intersect(selectedRange);
        });
        modifiedEditor.pushUndoStop();
        modifiedEditor.executeEdits('diffEditor', diffsToRevert.map(d => ({
            range: d.lineRangeMapping.modified.toExclusiveRange(),
            text: model.model.original.getValueInRange(d.lineRangeMapping.original.toExclusiveRange())
        })));
        modifiedEditor.pushUndoStop();
    }
    _goTo(diff) {
        this._editors.modified.setPosition(new Position(diff.lineRangeMapping.modified.startLineNumber, 1));
        this._editors.modified.revealRangeInCenter(diff.lineRangeMapping.modified.toExclusiveRange());
    }
    goToDiff(target) {
        const diffs = this._diffModel.get()?.diff.get()?.mappings;
        if (!diffs || diffs.length === 0) {
            return;
        }
        const curLineNumber = this._editors.modified.getPosition().lineNumber;
        let diff;
        if (target === 'next') {
            const modifiedLineCount = this._editors.modified.getModel().getLineCount();
            if (modifiedLineCount === curLineNumber) {
                diff = diffs[0];
            }
            else {
                diff = diffs.find(d => d.lineRangeMapping.modified.startLineNumber > curLineNumber) ?? diffs[0];
            }
        }
        else {
            diff = findLast(diffs, d => d.lineRangeMapping.modified.startLineNumber < curLineNumber) ?? diffs[diffs.length - 1];
        }
        this._goTo(diff);
        if (diff.lineRangeMapping.modified.isEmpty) {
            this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineDeleted, { source: 'diffEditor.goToDiff' });
        }
        else if (diff.lineRangeMapping.original.isEmpty) {
            this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineInserted, { source: 'diffEditor.goToDiff' });
        }
        else if (diff) {
            this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineModified, { source: 'diffEditor.goToDiff' });
        }
    }
    revealFirstDiff() {
        const diffModel = this._diffModel.get();
        if (!diffModel) {
            return;
        }
        // wait for the diff computation to finish
        this.waitForDiff().then(() => {
            const diffs = diffModel.diff.get()?.mappings;
            if (!diffs || diffs.length === 0) {
                return;
            }
            this._goTo(diffs[0]);
        });
    }
    accessibleDiffViewerNext() { this._accessibleDiffViewer.get().next(); }
    accessibleDiffViewerPrev() { this._accessibleDiffViewer.get().prev(); }
    async waitForDiff() {
        const diffModel = this._diffModel.get();
        if (!diffModel) {
            return;
        }
        await diffModel.waitForDiff();
    }
    mapToOtherSide() {
        const isModifiedFocus = this._editors.modified.hasWidgetFocus();
        const source = isModifiedFocus ? this._editors.modified : this._editors.original;
        const destination = isModifiedFocus ? this._editors.original : this._editors.modified;
        let destinationSelection;
        const sourceSelection = source.getSelection();
        if (sourceSelection) {
            const mappings = this._diffModel.get()?.diff.get()?.mappings.map(m => isModifiedFocus ? m.lineRangeMapping.flip() : m.lineRangeMapping);
            if (mappings) {
                const newRange1 = translatePosition(sourceSelection.getStartPosition(), mappings);
                const newRange2 = translatePosition(sourceSelection.getEndPosition(), mappings);
                destinationSelection = Range.plusRange(newRange1, newRange2);
            }
        }
        return { destination, destinationSelection };
    }
    switchSide() {
        const { destination, destinationSelection } = this.mapToOtherSide();
        destination.focus();
        if (destinationSelection) {
            destination.setSelection(destinationSelection);
        }
    }
    exitCompareMove() {
        const model = this._diffModel.get();
        if (!model) {
            return;
        }
        model.movedTextToCompare.set(undefined, undefined);
    }
    collapseAllUnchangedRegions() {
        const unchangedRegions = this._diffModel.get()?.unchangedRegions.get();
        if (!unchangedRegions) {
            return;
        }
        transaction(tx => {
            for (const region of unchangedRegions) {
                region.collapseAll(tx);
            }
        });
    }
    showAllUnchangedRegions() {
        const unchangedRegions = this._diffModel.get()?.unchangedRegions.get();
        if (!unchangedRegions) {
            return;
        }
        transaction(tx => {
            for (const region of unchangedRegions) {
                region.showAll(tx);
            }
        });
    }
    _handleCursorPositionChange(e, isModifiedEditor) {
        if (e?.reason === 3 /* CursorChangeReason.Explicit */) {
            const diff = this._diffModel.get()?.diff.get()?.mappings.find(m => isModifiedEditor ? m.lineRangeMapping.modified.contains(e.position.lineNumber) : m.lineRangeMapping.original.contains(e.position.lineNumber));
            if (diff?.lineRangeMapping.modified.isEmpty) {
                this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineDeleted, { source: 'diffEditor.cursorPositionChanged' });
            }
            else if (diff?.lineRangeMapping.original.isEmpty) {
                this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineInserted, { source: 'diffEditor.cursorPositionChanged' });
            }
            else if (diff) {
                this._accessibilitySignalService.playSignal(AccessibilitySignal.diffLineModified, { source: 'diffEditor.cursorPositionChanged' });
            }
        }
    }
};
DiffEditorWidget = __decorate([
    __param(3, IContextKeyService),
    __param(4, IInstantiationService),
    __param(5, ICodeEditorService),
    __param(6, IAccessibilitySignalService),
    __param(7, IEditorProgressService)
], DiffEditorWidget);
function toLineChanges(state) {
    return state.mappings.map(x => {
        const m = x.lineRangeMapping;
        let originalStartLineNumber;
        let originalEndLineNumber;
        let modifiedStartLineNumber;
        let modifiedEndLineNumber;
        let innerChanges = m.innerChanges;
        if (m.original.isEmpty) {
            // Insertion
            originalStartLineNumber = m.original.startLineNumber - 1;
            originalEndLineNumber = 0;
            innerChanges = undefined;
        }
        else {
            originalStartLineNumber = m.original.startLineNumber;
            originalEndLineNumber = m.original.endLineNumberExclusive - 1;
        }
        if (m.modified.isEmpty) {
            // Deletion
            modifiedStartLineNumber = m.modified.startLineNumber - 1;
            modifiedEndLineNumber = 0;
            innerChanges = undefined;
        }
        else {
            modifiedStartLineNumber = m.modified.startLineNumber;
            modifiedEndLineNumber = m.modified.endLineNumberExclusive - 1;
        }
        return {
            originalStartLineNumber,
            originalEndLineNumber,
            modifiedStartLineNumber,
            modifiedEndLineNumber,
            charChanges: innerChanges?.map(m => ({
                originalStartLineNumber: m.originalRange.startLineNumber,
                originalStartColumn: m.originalRange.startColumn,
                originalEndLineNumber: m.originalRange.endLineNumber,
                originalEndColumn: m.originalRange.endColumn,
                modifiedStartLineNumber: m.modifiedRange.startLineNumber,
                modifiedStartColumn: m.modifiedRange.startColumn,
                modifiedEndLineNumber: m.modifiedRange.endLineNumber,
                modifiedEndColumn: m.modifiedRange.endColumn,
            }))
        };
    });
}

export { DiffEditorWidget, toLineChanges };
