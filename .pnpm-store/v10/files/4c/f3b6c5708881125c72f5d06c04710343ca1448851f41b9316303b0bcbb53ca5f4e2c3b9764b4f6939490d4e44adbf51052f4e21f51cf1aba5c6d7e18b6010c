import { RunOnceScheduler } from '../../../../base/common/async.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import './bracketMatching.css';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { OverviewRulerLane } from '../../../common/model.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuRegistry, MenuId } from '../../../../platform/actions/common/actions.js';
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
import { themeColorFromId } from '../../../../platform/theme/common/themeService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const overviewRulerBracketMatchForeground = registerColor('editorOverviewRuler.bracketMatchForeground', '#A0A0A0', localize(804, 'Overview ruler marker color for matching brackets.'));
class JumpToBracketAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.jumpToBracket',
            label: localize2(806, "Go to Bracket"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 93 /* KeyCode.Backslash */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        BracketMatchingController.get(editor)?.jumpToBracket();
    }
}
class SelectToBracketAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.selectToBracket',
            label: localize2(807, "Select to Bracket"),
            precondition: undefined,
            metadata: {
                description: localize2(808, "Select the text inside and including the brackets or curly braces"),
                args: [{
                        name: 'args',
                        schema: {
                            type: 'object',
                            properties: {
                                'selectBrackets': {
                                    type: 'boolean',
                                    default: true
                                }
                            },
                        }
                    }]
            }
        });
    }
    run(accessor, editor, args) {
        let selectBrackets = true;
        if (args && args.selectBrackets === false) {
            selectBrackets = false;
        }
        BracketMatchingController.get(editor)?.selectToBracket(selectBrackets);
    }
}
class RemoveBracketsAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.removeBrackets',
            label: localize2(809, "Remove Brackets"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 1 /* KeyCode.Backspace */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(accessor, editor) {
        BracketMatchingController.get(editor)?.removeBrackets(this.id);
    }
}
class BracketsData {
    constructor(position, brackets, options) {
        this.position = position;
        this.brackets = brackets;
        this.options = options;
    }
}
class BracketMatchingController extends Disposable {
    static { this.ID = 'editor.contrib.bracketMatchingController'; }
    static get(editor) {
        return editor.getContribution(BracketMatchingController.ID);
    }
    constructor(editor) {
        super();
        this._editor = editor;
        this._lastBracketsData = [];
        this._lastVersionId = 0;
        this._decorations = this._editor.createDecorationsCollection();
        this._updateBracketsSoon = this._register(new RunOnceScheduler(() => this._updateBrackets(), 50));
        this._matchBrackets = this._editor.getOption(80 /* EditorOption.matchBrackets */);
        this._updateBracketsSoon.schedule();
        this._register(editor.onDidChangeCursorPosition((e) => {
            if (this._matchBrackets === 'never') {
                // Early exit if nothing needs to be done!
                // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
                return;
            }
            this._updateBracketsSoon.schedule();
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            this._updateBracketsSoon.schedule();
        }));
        this._register(editor.onDidChangeModel((e) => {
            this._lastBracketsData = [];
            this._updateBracketsSoon.schedule();
        }));
        this._register(editor.onDidChangeModelLanguageConfiguration((e) => {
            this._lastBracketsData = [];
            this._updateBracketsSoon.schedule();
        }));
        this._register(editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(80 /* EditorOption.matchBrackets */)) {
                this._matchBrackets = this._editor.getOption(80 /* EditorOption.matchBrackets */);
                this._decorations.clear();
                this._lastBracketsData = [];
                this._lastVersionId = 0;
                this._updateBracketsSoon.schedule();
            }
        }));
        this._register(editor.onDidBlurEditorWidget(() => {
            this._updateBracketsSoon.schedule();
        }));
        this._register(editor.onDidFocusEditorWidget(() => {
            this._updateBracketsSoon.schedule();
        }));
    }
    jumpToBracket() {
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        const newSelections = this._editor.getSelections().map(selection => {
            const position = selection.getStartPosition();
            // find matching brackets if position is on a bracket
            const brackets = model.bracketPairs.matchBracket(position);
            let newCursorPosition = null;
            if (brackets) {
                if (brackets[0].containsPosition(position) && !brackets[1].containsPosition(position)) {
                    newCursorPosition = brackets[1].getStartPosition();
                }
                else if (brackets[1].containsPosition(position)) {
                    newCursorPosition = brackets[0].getStartPosition();
                }
            }
            else {
                // find the enclosing brackets if the position isn't on a matching bracket
                const enclosingBrackets = model.bracketPairs.findEnclosingBrackets(position);
                if (enclosingBrackets) {
                    newCursorPosition = enclosingBrackets[1].getStartPosition();
                }
                else {
                    // no enclosing brackets, try the very first next bracket
                    const nextBracket = model.bracketPairs.findNextBracket(position);
                    if (nextBracket && nextBracket.range) {
                        newCursorPosition = nextBracket.range.getStartPosition();
                    }
                }
            }
            if (newCursorPosition) {
                return new Selection(newCursorPosition.lineNumber, newCursorPosition.column, newCursorPosition.lineNumber, newCursorPosition.column);
            }
            return new Selection(position.lineNumber, position.column, position.lineNumber, position.column);
        });
        this._editor.setSelections(newSelections);
        this._editor.revealRange(newSelections[0]);
    }
    selectToBracket(selectBrackets) {
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        const newSelections = [];
        this._editor.getSelections().forEach(selection => {
            const position = selection.getStartPosition();
            let brackets = model.bracketPairs.matchBracket(position);
            if (!brackets) {
                brackets = model.bracketPairs.findEnclosingBrackets(position);
                if (!brackets) {
                    const nextBracket = model.bracketPairs.findNextBracket(position);
                    if (nextBracket && nextBracket.range) {
                        brackets = model.bracketPairs.matchBracket(nextBracket.range.getStartPosition());
                    }
                }
            }
            let selectFrom = null;
            let selectTo = null;
            if (brackets) {
                brackets.sort(Range.compareRangesUsingStarts);
                const [open, close] = brackets;
                selectFrom = selectBrackets ? open.getStartPosition() : open.getEndPosition();
                selectTo = selectBrackets ? close.getEndPosition() : close.getStartPosition();
                if (close.containsPosition(position)) {
                    // select backwards if the cursor was on the closing bracket
                    const tmp = selectFrom;
                    selectFrom = selectTo;
                    selectTo = tmp;
                }
            }
            if (selectFrom && selectTo) {
                newSelections.push(new Selection(selectFrom.lineNumber, selectFrom.column, selectTo.lineNumber, selectTo.column));
            }
        });
        if (newSelections.length > 0) {
            this._editor.setSelections(newSelections);
            this._editor.revealRange(newSelections[0]);
        }
    }
    removeBrackets(editSource) {
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        this._editor.getSelections().forEach((selection) => {
            const position = selection.getPosition();
            let brackets = model.bracketPairs.matchBracket(position);
            if (!brackets) {
                brackets = model.bracketPairs.findEnclosingBrackets(position);
            }
            if (brackets) {
                this._editor.pushUndoStop();
                this._editor.executeEdits(editSource, [
                    { range: brackets[0], text: '' },
                    { range: brackets[1], text: '' }
                ]);
                this._editor.pushUndoStop();
            }
        });
    }
    static { this._DECORATION_OPTIONS_WITH_OVERVIEW_RULER = ModelDecorationOptions.register({
        description: 'bracket-match-overview',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        className: 'bracket-match',
        overviewRuler: {
            color: themeColorFromId(overviewRulerBracketMatchForeground),
            position: OverviewRulerLane.Center
        }
    }); }
    static { this._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER = ModelDecorationOptions.register({
        description: 'bracket-match-no-overview',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        className: 'bracket-match'
    }); }
    _updateBrackets() {
        if (this._matchBrackets === 'never') {
            return;
        }
        this._recomputeBrackets();
        const newDecorations = [];
        let newDecorationsLen = 0;
        for (const bracketData of this._lastBracketsData) {
            const brackets = bracketData.brackets;
            if (brackets) {
                newDecorations[newDecorationsLen++] = { range: brackets[0], options: bracketData.options };
                newDecorations[newDecorationsLen++] = { range: brackets[1], options: bracketData.options };
            }
        }
        this._decorations.set(newDecorations);
    }
    _recomputeBrackets() {
        if (!this._editor.hasModel() || !this._editor.hasWidgetFocus()) {
            // no model or no focus => no brackets!
            this._lastBracketsData = [];
            this._lastVersionId = 0;
            return;
        }
        const selections = this._editor.getSelections();
        if (selections.length > 100) {
            // no bracket matching for high numbers of selections
            this._lastBracketsData = [];
            this._lastVersionId = 0;
            return;
        }
        const model = this._editor.getModel();
        const versionId = model.getVersionId();
        let previousData = [];
        if (this._lastVersionId === versionId) {
            // use the previous data only if the model is at the same version id
            previousData = this._lastBracketsData;
        }
        const positions = [];
        let positionsLen = 0;
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (selection.isEmpty()) {
                // will bracket match a cursor only if the selection is collapsed
                positions[positionsLen++] = selection.getStartPosition();
            }
        }
        // sort positions for `previousData` cache hits
        if (positions.length > 1) {
            positions.sort(Position.compare);
        }
        const newData = [];
        let newDataLen = 0;
        let previousIndex = 0;
        const previousLen = previousData.length;
        for (let i = 0, len = positions.length; i < len; i++) {
            const position = positions[i];
            while (previousIndex < previousLen && previousData[previousIndex].position.isBefore(position)) {
                previousIndex++;
            }
            if (previousIndex < previousLen && previousData[previousIndex].position.equals(position)) {
                newData[newDataLen++] = previousData[previousIndex];
            }
            else {
                let brackets = model.bracketPairs.matchBracket(position, 20 /* give at most 20ms to compute */);
                let options = BracketMatchingController._DECORATION_OPTIONS_WITH_OVERVIEW_RULER;
                if (!brackets && this._matchBrackets === 'always') {
                    brackets = model.bracketPairs.findEnclosingBrackets(position, 20 /* give at most 20ms to compute */);
                    options = BracketMatchingController._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER;
                }
                newData[newDataLen++] = new BracketsData(position, brackets, options);
            }
        }
        this._lastBracketsData = newData;
        this._lastVersionId = versionId;
    }
}
registerEditorContribution(BracketMatchingController.ID, BracketMatchingController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
registerEditorAction(SelectToBracketAction);
registerEditorAction(JumpToBracketAction);
registerEditorAction(RemoveBracketsAction);
// Go to menu
MenuRegistry.appendMenuItem(MenuId.MenubarGoMenu, {
    group: '5_infile_nav',
    command: {
        id: 'editor.action.jumpToBracket',
        title: localize(805, "Go to &&Bracket")
    },
    order: 2
});

export { BracketMatchingController };
