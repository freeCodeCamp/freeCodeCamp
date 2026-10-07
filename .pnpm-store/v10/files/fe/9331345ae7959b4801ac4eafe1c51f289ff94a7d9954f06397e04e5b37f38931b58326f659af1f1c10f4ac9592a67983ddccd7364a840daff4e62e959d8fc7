import { isNonEmptyArray, equals } from '../../../../base/common/arrays.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { BracketSelectionRangeProvider } from './bracketSelections.js';
import { WordSelectionRangeProvider } from './wordSelections.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { ITextModelService } from '../../../common/services/resolverService.js';
import { assertType, isArrayOf } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';

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
var SmartSelectController_1;
class SelectionRanges {
    constructor(index, ranges) {
        this.index = index;
        this.ranges = ranges;
    }
    mov(fwd) {
        const index = this.index + (fwd ? 1 : -1);
        if (index < 0 || index >= this.ranges.length) {
            return this;
        }
        const res = new SelectionRanges(index, this.ranges);
        if (res.ranges[index].equalsRange(this.ranges[this.index])) {
            // next range equals this range, retry with next-next
            return res.mov(fwd);
        }
        return res;
    }
}
let SmartSelectController = class SmartSelectController {
    static { SmartSelectController_1 = this; }
    static { this.ID = 'editor.contrib.smartSelectController'; }
    static get(editor) {
        return editor.getContribution(SmartSelectController_1.ID);
    }
    constructor(_editor, _languageFeaturesService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._ignoreSelection = false;
    }
    dispose() {
        this._selectionListener?.dispose();
    }
    async run(forward) {
        if (!this._editor.hasModel()) {
            return;
        }
        const selections = this._editor.getSelections();
        const model = this._editor.getModel();
        if (!this._state) {
            await provideSelectionRanges(this._languageFeaturesService.selectionRangeProvider, model, selections.map(s => s.getPosition()), this._editor.getOption(129 /* EditorOption.smartSelect */), CancellationToken.None).then(ranges => {
                if (!isNonEmptyArray(ranges) || ranges.length !== selections.length) {
                    // invalid result
                    return;
                }
                if (!this._editor.hasModel() || !equals(this._editor.getSelections(), selections, (a, b) => a.equalsSelection(b))) {
                    // invalid editor state
                    return;
                }
                for (let i = 0; i < ranges.length; i++) {
                    ranges[i] = ranges[i].filter(range => {
                        // filter ranges inside the selection
                        return range.containsPosition(selections[i].getStartPosition()) && range.containsPosition(selections[i].getEndPosition());
                    });
                    // prepend current selection
                    ranges[i].unshift(selections[i]);
                }
                this._state = ranges.map(ranges => new SelectionRanges(0, ranges));
                // listen to caret move and forget about state
                this._selectionListener?.dispose();
                this._selectionListener = this._editor.onDidChangeCursorPosition(() => {
                    if (!this._ignoreSelection) {
                        this._selectionListener?.dispose();
                        this._state = undefined;
                    }
                });
            });
        }
        if (!this._state) {
            // no state
            return;
        }
        this._state = this._state.map(state => state.mov(forward));
        const newSelections = this._state.map(state => Selection.fromPositions(state.ranges[state.index].getStartPosition(), state.ranges[state.index].getEndPosition()));
        this._ignoreSelection = true;
        try {
            this._editor.setSelections(newSelections);
        }
        finally {
            this._ignoreSelection = false;
        }
    }
};
SmartSelectController = SmartSelectController_1 = __decorate([
    __param(1, ILanguageFeaturesService)
], SmartSelectController);
class AbstractSmartSelect extends EditorAction {
    constructor(forward, opts) {
        super(opts);
        this._forward = forward;
    }
    async run(_accessor, editor) {
        const controller = SmartSelectController.get(editor);
        if (controller) {
            await controller.run(this._forward);
        }
    }
}
class GrowSelectionAction extends AbstractSmartSelect {
    constructor() {
        super(true, {
            id: 'editor.action.smartSelect.expand',
            label: localize2(1400, "Expand Selection"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 17 /* KeyCode.RightArrow */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */,
                    secondary: [256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */],
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '1_basic',
                title: localize(1398, "&&Expand Selection"),
                order: 2
            }
        });
    }
}
// renamed command id
CommandsRegistry.registerCommandAlias('editor.action.smartSelect.grow', 'editor.action.smartSelect.expand');
class ShrinkSelectionAction extends AbstractSmartSelect {
    constructor() {
        super(false, {
            id: 'editor.action.smartSelect.shrink',
            label: localize2(1401, "Shrink Selection"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 15 /* KeyCode.LeftArrow */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */,
                    secondary: [256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */],
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '1_basic',
                title: localize(1399, "&&Shrink Selection"),
                order: 3
            }
        });
    }
}
registerEditorContribution(SmartSelectController.ID, SmartSelectController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(GrowSelectionAction);
registerEditorAction(ShrinkSelectionAction);
async function provideSelectionRanges(registry, model, positions, options, token) {
    const providers = registry.all(model)
        .concat(new WordSelectionRangeProvider(options.selectSubwords)); // ALWAYS have word based selection range
    if (providers.length === 1) {
        // add word selection and bracket selection when no provider exists
        providers.unshift(new BracketSelectionRangeProvider());
    }
    const work = [];
    const allRawRanges = [];
    for (const provider of providers) {
        work.push(Promise.resolve(provider.provideSelectionRanges(model, positions, token)).then(allProviderRanges => {
            if (isNonEmptyArray(allProviderRanges) && allProviderRanges.length === positions.length) {
                for (let i = 0; i < positions.length; i++) {
                    if (!allRawRanges[i]) {
                        allRawRanges[i] = [];
                    }
                    for (const oneProviderRanges of allProviderRanges[i]) {
                        if (Range.isIRange(oneProviderRanges.range) && Range.containsPosition(oneProviderRanges.range, positions[i])) {
                            allRawRanges[i].push(Range.lift(oneProviderRanges.range));
                        }
                    }
                }
            }
        }, onUnexpectedExternalError));
    }
    await Promise.all(work);
    return allRawRanges.map(oneRawRanges => {
        if (oneRawRanges.length === 0) {
            return [];
        }
        // sort all by start/end position
        oneRawRanges.sort((a, b) => {
            if (Position.isBefore(a.getStartPosition(), b.getStartPosition())) {
                return 1;
            }
            else if (Position.isBefore(b.getStartPosition(), a.getStartPosition())) {
                return -1;
            }
            else if (Position.isBefore(a.getEndPosition(), b.getEndPosition())) {
                return -1;
            }
            else if (Position.isBefore(b.getEndPosition(), a.getEndPosition())) {
                return 1;
            }
            else {
                return 0;
            }
        });
        // remove ranges that don't contain the former range or that are equal to the
        // former range
        const oneRanges = [];
        let last;
        for (const range of oneRawRanges) {
            if (!last || (Range.containsRange(range, last) && !Range.equalsRange(range, last))) {
                oneRanges.push(range);
                last = range;
            }
        }
        if (!options.selectLeadingAndTrailingWhitespace) {
            return oneRanges;
        }
        // add ranges that expand trivia at line starts and ends whenever a range
        // wraps onto the a new line
        const oneRangesWithTrivia = [oneRanges[0]];
        for (let i = 1; i < oneRanges.length; i++) {
            const prev = oneRanges[i - 1];
            const cur = oneRanges[i];
            if (cur.startLineNumber !== prev.startLineNumber || cur.endLineNumber !== prev.endLineNumber) {
                // add line/block range without leading/failing whitespace
                const rangeNoWhitespace = new Range(prev.startLineNumber, model.getLineFirstNonWhitespaceColumn(prev.startLineNumber), prev.endLineNumber, model.getLineLastNonWhitespaceColumn(prev.endLineNumber));
                if (rangeNoWhitespace.containsRange(prev) && !rangeNoWhitespace.equalsRange(prev) && cur.containsRange(rangeNoWhitespace) && !cur.equalsRange(rangeNoWhitespace)) {
                    oneRangesWithTrivia.push(rangeNoWhitespace);
                }
                // add line/block range
                const rangeFull = new Range(prev.startLineNumber, 1, prev.endLineNumber, model.getLineMaxColumn(prev.endLineNumber));
                if (rangeFull.containsRange(prev) && !rangeFull.equalsRange(rangeNoWhitespace) && cur.containsRange(rangeFull) && !cur.equalsRange(rangeFull)) {
                    oneRangesWithTrivia.push(rangeFull);
                }
            }
            oneRangesWithTrivia.push(cur);
        }
        return oneRangesWithTrivia;
    });
}
CommandsRegistry.registerCommand('_executeSelectionRangeProvider', async function (accessor, ...args) {
    const [resource, positions] = args;
    assertType(URI.isUri(resource));
    assertType(isArrayOf(positions, p => Position.isIPosition(p)));
    const registry = accessor.get(ILanguageFeaturesService).selectionRangeProvider;
    const reference = await accessor.get(ITextModelService).createModelReference(resource);
    try {
        return provideSelectionRanges(registry, reference.object.textEditorModel, positions.map(Position.lift), { selectLeadingAndTrailingWhitespace: true, selectSubwords: true }, CancellationToken.None);
    }
    finally {
        reference.dispose();
    }
});

export { SmartSelectController, provideSelectionRanges };
