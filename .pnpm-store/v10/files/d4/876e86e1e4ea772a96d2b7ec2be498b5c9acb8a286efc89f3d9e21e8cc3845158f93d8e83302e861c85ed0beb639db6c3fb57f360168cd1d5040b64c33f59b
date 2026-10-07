import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { Delayer, first } from '../../../../base/common/async.js';
import { CancellationTokenSource, CancellationToken } from '../../../../base/common/cancellation.js';
import { Color } from '../../../../base/common/color.js';
import { isCancellationError, onUnexpectedError, onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { Event } from '../../../../base/common/event.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { commonPrefixLength, commonSuffixLength } from '../../../../base/common/strings.js';
import { URI } from '../../../../base/common/uri.js';
import { EditorCommand, registerEditorCommand, registerModelAndPositionCommand, registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js';
import { localize, localize2 } from '../../../../nls.js';
import { RawContextKey, IContextKeyService, ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { registerColor } from '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { ILanguageFeatureDebounceService } from '../../../common/services/languageFeatureDebounce.js';
import { StopWatch } from '../../../../base/common/stopwatch.js';
import './linkedEditing.css';

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
var LinkedEditingContribution_1;
const CONTEXT_ONTYPE_RENAME_INPUT_VISIBLE = new RawContextKey('LinkedEditingInputVisible', false);
const DECORATION_CLASS_NAME = 'linked-editing-decoration';
let LinkedEditingContribution = class LinkedEditingContribution extends Disposable {
    static { LinkedEditingContribution_1 = this; }
    static { this.ID = 'editor.contrib.linkedEditing'; }
    static { this.DECORATION = ModelDecorationOptions.register({
        description: 'linked-editing',
        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
        className: DECORATION_CLASS_NAME
    }); }
    static get(editor) {
        return editor.getContribution(LinkedEditingContribution_1.ID);
    }
    constructor(editor, contextKeyService, languageFeaturesService, languageConfigurationService, languageFeatureDebounceService) {
        super();
        this.languageConfigurationService = languageConfigurationService;
        this._syncRangesToken = 0;
        this._localToDispose = this._register(new DisposableStore());
        this._editor = editor;
        this._providers = languageFeaturesService.linkedEditingRangeProvider;
        this._enabled = false;
        this._visibleContextKey = CONTEXT_ONTYPE_RENAME_INPUT_VISIBLE.bindTo(contextKeyService);
        this._debounceInformation = languageFeatureDebounceService.for(this._providers, 'Linked Editing', { max: 200 });
        this._currentDecorations = this._editor.createDecorationsCollection();
        this._languageWordPattern = null;
        this._currentWordPattern = null;
        this._ignoreChangeEvent = false;
        this._localToDispose = this._register(new DisposableStore());
        this._rangeUpdateTriggerPromise = null;
        this._rangeSyncTriggerPromise = null;
        this._currentRequestCts = null;
        this._currentRequestPosition = null;
        this._currentRequestModelVersion = null;
        this._register(this._editor.onDidChangeModel(() => this.reinitialize(true)));
        this._register(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(78 /* EditorOption.linkedEditing */) || e.hasChanged(106 /* EditorOption.renameOnType */)) {
                this.reinitialize(false);
            }
        }));
        this._register(this._providers.onDidChange(() => this.reinitialize(false)));
        this._register(this._editor.onDidChangeModelLanguage(() => this.reinitialize(true)));
        this.reinitialize(true);
    }
    reinitialize(forceRefresh) {
        const model = this._editor.getModel();
        const isEnabled = model !== null && (this._editor.getOption(78 /* EditorOption.linkedEditing */) || this._editor.getOption(106 /* EditorOption.renameOnType */)) && this._providers.has(model);
        if (isEnabled === this._enabled && !forceRefresh) {
            return;
        }
        this._enabled = isEnabled;
        this.clearRanges();
        this._localToDispose.clear();
        if (!isEnabled || model === null) {
            return;
        }
        this._localToDispose.add(Event.runAndSubscribe(model.onDidChangeLanguageConfiguration, () => {
            this._languageWordPattern = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
        }));
        const rangeUpdateScheduler = new Delayer(this._debounceInformation.get(model));
        const triggerRangeUpdate = () => {
            this._rangeUpdateTriggerPromise = rangeUpdateScheduler.trigger(() => this.updateRanges(), this._debounceDuration ?? this._debounceInformation.get(model));
        };
        const rangeSyncScheduler = new Delayer(0);
        const triggerRangeSync = (token) => {
            this._rangeSyncTriggerPromise = rangeSyncScheduler.trigger(() => this._syncRanges(token));
        };
        this._localToDispose.add(this._editor.onDidChangeCursorPosition(() => {
            triggerRangeUpdate();
        }));
        this._localToDispose.add(this._editor.onDidChangeModelContent((e) => {
            if (!this._ignoreChangeEvent) {
                if (this._currentDecorations.length > 0) {
                    const referenceRange = this._currentDecorations.getRange(0);
                    if (referenceRange && e.changes.every(c => referenceRange.intersectRanges(c.range))) {
                        triggerRangeSync(this._syncRangesToken);
                        return;
                    }
                }
            }
            triggerRangeUpdate();
        }));
        this._localToDispose.add({
            dispose: () => {
                rangeUpdateScheduler.dispose();
                rangeSyncScheduler.dispose();
            }
        });
        this.updateRanges();
    }
    _syncRanges(token) {
        // delayed invocation, make sure we're still on
        if (!this._editor.hasModel() || token !== this._syncRangesToken || this._currentDecorations.length === 0) {
            // nothing to do
            return;
        }
        const model = this._editor.getModel();
        const referenceRange = this._currentDecorations.getRange(0);
        if (!referenceRange || referenceRange.startLineNumber !== referenceRange.endLineNumber) {
            return this.clearRanges();
        }
        const referenceValue = model.getValueInRange(referenceRange);
        if (this._currentWordPattern) {
            const match = referenceValue.match(this._currentWordPattern);
            const matchLength = match ? match[0].length : 0;
            if (matchLength !== referenceValue.length) {
                return this.clearRanges();
            }
        }
        const edits = [];
        for (let i = 1, len = this._currentDecorations.length; i < len; i++) {
            const mirrorRange = this._currentDecorations.getRange(i);
            if (!mirrorRange) {
                continue;
            }
            if (mirrorRange.startLineNumber !== mirrorRange.endLineNumber) {
                edits.push({
                    range: mirrorRange,
                    text: referenceValue
                });
            }
            else {
                let oldValue = model.getValueInRange(mirrorRange);
                let newValue = referenceValue;
                let rangeStartColumn = mirrorRange.startColumn;
                let rangeEndColumn = mirrorRange.endColumn;
                const commonPrefixLength$1 = commonPrefixLength(oldValue, newValue);
                rangeStartColumn += commonPrefixLength$1;
                oldValue = oldValue.substr(commonPrefixLength$1);
                newValue = newValue.substr(commonPrefixLength$1);
                const commonSuffixLength$1 = commonSuffixLength(oldValue, newValue);
                rangeEndColumn -= commonSuffixLength$1;
                oldValue = oldValue.substr(0, oldValue.length - commonSuffixLength$1);
                newValue = newValue.substr(0, newValue.length - commonSuffixLength$1);
                if (rangeStartColumn !== rangeEndColumn || newValue.length !== 0) {
                    edits.push({
                        range: new Range(mirrorRange.startLineNumber, rangeStartColumn, mirrorRange.endLineNumber, rangeEndColumn),
                        text: newValue
                    });
                }
            }
        }
        if (edits.length === 0) {
            return;
        }
        try {
            this._editor.popUndoStop();
            this._ignoreChangeEvent = true;
            const prevEditOperationType = this._editor._getViewModel().getPrevEditOperationType();
            this._editor.executeEdits('linkedEditing', edits);
            this._editor._getViewModel().setPrevEditOperationType(prevEditOperationType);
        }
        finally {
            this._ignoreChangeEvent = false;
        }
    }
    dispose() {
        this.clearRanges();
        super.dispose();
    }
    clearRanges() {
        this._visibleContextKey.set(false);
        this._currentDecorations.clear();
        if (this._currentRequestCts) {
            this._currentRequestCts.cancel();
            this._currentRequestCts = null;
            this._currentRequestPosition = null;
        }
    }
    async updateRanges(force = false) {
        if (!this._editor.hasModel()) {
            this.clearRanges();
            return;
        }
        const position = this._editor.getPosition();
        if (!this._enabled && !force || this._editor.getSelections().length > 1) {
            // disabled or multicursor
            this.clearRanges();
            return;
        }
        const model = this._editor.getModel();
        const modelVersionId = model.getVersionId();
        if (this._currentRequestPosition && this._currentRequestModelVersion === modelVersionId) {
            if (position.equals(this._currentRequestPosition)) {
                return; // same position
            }
            if (this._currentDecorations.length > 0) {
                const range = this._currentDecorations.getRange(0);
                if (range && range.containsPosition(position)) {
                    return; // just moving inside the existing primary range
                }
            }
        }
        if (!this._currentRequestPosition?.equals(position)) {
            // Get the current range of the first decoration (reference range)
            const currentRange = this._currentDecorations.getRange(0);
            // If there is no current range or the current range does not contain the new position, clear the ranges
            if (!currentRange?.containsPosition(position)) {
                // Clear existing decorations while we compute new ones
                this.clearRanges();
            }
        }
        this._currentRequestPosition = position;
        this._currentRequestModelVersion = modelVersionId;
        const currentRequestCts = this._currentRequestCts = new CancellationTokenSource();
        try {
            const sw = new StopWatch(false);
            const response = await getLinkedEditingRanges(this._providers, model, position, currentRequestCts.token);
            this._debounceInformation.update(model, sw.elapsed());
            if (currentRequestCts !== this._currentRequestCts) {
                return;
            }
            this._currentRequestCts = null;
            if (modelVersionId !== model.getVersionId()) {
                return;
            }
            let ranges = [];
            if (response?.ranges) {
                ranges = response.ranges;
            }
            this._currentWordPattern = response?.wordPattern || this._languageWordPattern;
            let foundReferenceRange = false;
            for (let i = 0, len = ranges.length; i < len; i++) {
                if (Range.containsPosition(ranges[i], position)) {
                    foundReferenceRange = true;
                    if (i !== 0) {
                        const referenceRange = ranges[i];
                        ranges.splice(i, 1);
                        ranges.unshift(referenceRange);
                    }
                    break;
                }
            }
            if (!foundReferenceRange) {
                // Cannot do linked editing if the ranges are not where the cursor is...
                this.clearRanges();
                return;
            }
            const decorations = ranges.map(range => ({ range: range, options: LinkedEditingContribution_1.DECORATION }));
            this._visibleContextKey.set(true);
            this._currentDecorations.set(decorations);
            this._syncRangesToken++; // cancel any pending syncRanges call
        }
        catch (err) {
            if (!isCancellationError(err)) {
                onUnexpectedError(err);
            }
            if (this._currentRequestCts === currentRequestCts || !this._currentRequestCts) {
                // stop if we are still the latest request
                this.clearRanges();
            }
        }
    }
};
LinkedEditingContribution = LinkedEditingContribution_1 = __decorate([
    __param(1, IContextKeyService),
    __param(2, ILanguageFeaturesService),
    __param(3, ILanguageConfigurationService),
    __param(4, ILanguageFeatureDebounceService)
], LinkedEditingContribution);
class LinkedEditingAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.linkedEditing',
            label: localize2(1276, "Start Linked Editing"),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasRenameProvider),
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 60 /* KeyCode.F2 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    runCommand(accessor, args) {
        const editorService = accessor.get(ICodeEditorService);
        const [uri, pos] = Array.isArray(args) && args || [undefined, undefined];
        if (URI.isUri(uri) && Position.isIPosition(pos)) {
            return editorService.openCodeEditor({ resource: uri }, editorService.getActiveCodeEditor()).then(editor => {
                if (!editor) {
                    return;
                }
                editor.setPosition(pos);
                editor.invokeWithinContext(accessor => {
                    this.reportTelemetry(accessor, editor);
                    return this.run(accessor, editor);
                });
            }, onUnexpectedError);
        }
        return super.runCommand(accessor, args);
    }
    run(_accessor, editor) {
        const controller = LinkedEditingContribution.get(editor);
        if (controller) {
            return Promise.resolve(controller.updateRanges(true));
        }
        return Promise.resolve();
    }
}
const LinkedEditingCommand = EditorCommand.bindToContribution(LinkedEditingContribution.get);
registerEditorCommand(new LinkedEditingCommand({
    id: 'cancelLinkedEditingInput',
    precondition: CONTEXT_ONTYPE_RENAME_INPUT_VISIBLE,
    handler: x => x.clearRanges(),
    kbOpts: {
        kbExpr: EditorContextKeys.editorTextFocus,
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
function getLinkedEditingRanges(providers, model, position, token) {
    const orderedByScore = providers.ordered(model);
    // in order of score ask the linked editing range provider
    // until someone response with a good result
    // (good = not null)
    return first(orderedByScore.map(provider => async () => {
        try {
            return await provider.provideLinkedEditingRanges(model, position, token);
        }
        catch (e) {
            onUnexpectedExternalError(e);
            return undefined;
        }
    }), result => !!result && isNonEmptyArray(result?.ranges));
}
registerColor('editor.linkedEditingBackground', { dark: Color.fromHex('#f00').transparent(0.3), light: Color.fromHex('#f00').transparent(0.3), hcDark: Color.fromHex('#f00').transparent(0.3), hcLight: Color.white }, localize(1275, 'Background color when the editor auto renames on type.'));
registerModelAndPositionCommand('_executeLinkedEditingProvider', (_accessor, model, position) => {
    const { linkedEditingRangeProvider } = _accessor.get(ILanguageFeaturesService);
    return getLinkedEditingRanges(linkedEditingRangeProvider, model, position, CancellationToken.None);
});
registerEditorContribution(LinkedEditingContribution.ID, LinkedEditingContribution, 1 /* EditorContributionInstantiation.AfterFirstRender */);
registerEditorAction(LinkedEditingAction);

export { CONTEXT_ONTYPE_RENAME_INPUT_VISIBLE, LinkedEditingAction, LinkedEditingContribution };
