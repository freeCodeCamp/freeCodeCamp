'use strict';

var state = require('@codemirror/state');
var view = require('@codemirror/view');
var language = require('@codemirror/language');
var common = require('@lezer/common');

/**
Comment or uncomment the current selection. Will use line comments
if available, otherwise falling back to block comments.
*/
const toggleComment = target => {
    let { state } = target, line = state.doc.lineAt(state.selection.main.from), config = getConfig(target.state, line.from);
    return config.line ? toggleLineComment(target) : config.block ? toggleBlockCommentByLine(target) : false;
};
function command(f, option) {
    return ({ state, dispatch }) => {
        if (state.readOnly)
            return false;
        let tr = f(option, state);
        if (!tr)
            return false;
        dispatch(state.update(tr));
        return true;
    };
}
/**
Comment or uncomment the current selection using line comments.
The line comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
const toggleLineComment = command(changeLineComment, 0 /* CommentOption.Toggle */);
/**
Comment the current selection using line comments.
*/
const lineComment = command(changeLineComment, 1 /* CommentOption.Comment */);
/**
Uncomment the current selection using line comments.
*/
const lineUncomment = command(changeLineComment, 2 /* CommentOption.Uncomment */);
/**
Comment or uncomment the current selection using block comments.
The block comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
const toggleBlockComment = command(changeBlockComment, 0 /* CommentOption.Toggle */);
/**
Comment the current selection using block comments.
*/
const blockComment = command(changeBlockComment, 1 /* CommentOption.Comment */);
/**
Uncomment the current selection using block comments.
*/
const blockUncomment = command(changeBlockComment, 2 /* CommentOption.Uncomment */);
/**
Comment or uncomment the lines around the current selection using
block comments.
*/
const toggleBlockCommentByLine = command((o, s) => changeBlockComment(o, s, selectedLineRanges(s)), 0 /* CommentOption.Toggle */);
function getConfig(state, pos) {
    let data = state.languageDataAt("commentTokens", pos, 1);
    return data.length ? data[0] : {};
}
const SearchMargin = 50;
/**
Determines if the given range is block-commented in the given
state.
*/
function findBlockComment(state, { open, close }, from, to) {
    let textBefore = state.sliceDoc(from - SearchMargin, from);
    let textAfter = state.sliceDoc(to, to + SearchMargin);
    let spaceBefore = /\s*$/.exec(textBefore)[0].length, spaceAfter = /^\s*/.exec(textAfter)[0].length;
    let beforeOff = textBefore.length - spaceBefore;
    if (textBefore.slice(beforeOff - open.length, beforeOff) == open &&
        textAfter.slice(spaceAfter, spaceAfter + close.length) == close) {
        return { open: { pos: from - spaceBefore, margin: spaceBefore && 1 },
            close: { pos: to + spaceAfter, margin: spaceAfter && 1 } };
    }
    let startText, endText;
    if (to - from <= 2 * SearchMargin) {
        startText = endText = state.sliceDoc(from, to);
    }
    else {
        startText = state.sliceDoc(from, from + SearchMargin);
        endText = state.sliceDoc(to - SearchMargin, to);
    }
    let startSpace = /^\s*/.exec(startText)[0].length, endSpace = /\s*$/.exec(endText)[0].length;
    let endOff = endText.length - endSpace - close.length;
    if (startText.slice(startSpace, startSpace + open.length) == open &&
        endText.slice(endOff, endOff + close.length) == close) {
        return { open: { pos: from + startSpace + open.length,
                margin: /\s/.test(startText.charAt(startSpace + open.length)) ? 1 : 0 },
            close: { pos: to - endSpace - close.length,
                margin: /\s/.test(endText.charAt(endOff - 1)) ? 1 : 0 } };
    }
    return null;
}
function selectedLineRanges(state) {
    let ranges = [];
    for (let r of state.selection.ranges) {
        let fromLine = state.doc.lineAt(r.from);
        let toLine = r.to <= fromLine.to ? fromLine : state.doc.lineAt(r.to);
        if (toLine.from > fromLine.from && toLine.from == r.to)
            toLine = r.to == fromLine.to + 1 ? fromLine : state.doc.lineAt(r.to - 1);
        let last = ranges.length - 1;
        if (last >= 0 && ranges[last].to > fromLine.from)
            ranges[last].to = toLine.to;
        else
            ranges.push({ from: fromLine.from + /^\s*/.exec(fromLine.text)[0].length, to: toLine.to });
    }
    return ranges;
}
// Performs toggle, comment and uncomment of block comments in
// languages that support them.
function changeBlockComment(option, state, ranges = state.selection.ranges) {
    let tokens = ranges.map(r => getConfig(state, r.from).block);
    if (!tokens.every(c => c))
        return null;
    let comments = ranges.map((r, i) => findBlockComment(state, tokens[i], r.from, r.to));
    if (option != 2 /* CommentOption.Uncomment */ && !comments.every(c => c)) {
        return { changes: state.changes(ranges.map((range, i) => {
                if (comments[i])
                    return [];
                return [{ from: range.from, insert: tokens[i].open + " " }, { from: range.to, insert: " " + tokens[i].close }];
            })) };
    }
    else if (option != 1 /* CommentOption.Comment */ && comments.some(c => c)) {
        let changes = [];
        for (let i = 0, comment; i < comments.length; i++)
            if (comment = comments[i]) {
                let token = tokens[i], { open, close } = comment;
                changes.push({ from: open.pos - token.open.length, to: open.pos + open.margin }, { from: close.pos - close.margin, to: close.pos + token.close.length });
            }
        return { changes };
    }
    return null;
}
// Performs toggle, comment and uncomment of line comments.
function changeLineComment(option, state, ranges = state.selection.ranges) {
    let lines = [];
    let prevLine = -1;
    for (let { from, to } of ranges) {
        let startI = lines.length, minIndent = 1e9;
        let token = getConfig(state, from).line;
        if (!token)
            continue;
        for (let pos = from; pos <= to;) {
            let line = state.doc.lineAt(pos);
            if (line.from > prevLine && (from == to || to > line.from)) {
                prevLine = line.from;
                let indent = /^\s*/.exec(line.text)[0].length;
                let empty = indent == line.length;
                let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;
                if (indent < line.text.length && indent < minIndent)
                    minIndent = indent;
                lines.push({ line, comment, token, indent, empty, single: false });
            }
            pos = line.to + 1;
        }
        if (minIndent < 1e9)
            for (let i = startI; i < lines.length; i++)
                if (lines[i].indent < lines[i].line.text.length)
                    lines[i].indent = minIndent;
        if (lines.length == startI + 1)
            lines[startI].single = true;
    }
    if (option != 2 /* CommentOption.Uncomment */ && lines.some(l => l.comment < 0 && (!l.empty || l.single))) {
        let changes = [];
        for (let { line, token, indent, empty, single } of lines)
            if (single || !empty)
                changes.push({ from: line.from + indent, insert: token + " " });
        let changeSet = state.changes(changes);
        return { changes: changeSet, selection: state.selection.map(changeSet, 1) };
    }
    else if (option != 1 /* CommentOption.Comment */ && lines.some(l => l.comment >= 0)) {
        let changes = [];
        for (let { line, comment, token } of lines)
            if (comment >= 0) {
                let from = line.from + comment, to = from + token.length;
                if (line.text[to - line.from] == " ")
                    to++;
                changes.push({ from, to });
            }
        return { changes };
    }
    return null;
}

const fromHistory = state.Annotation.define();
/**
Transaction annotation that will prevent that transaction from
being combined with other transactions in the undo history. Given
`"before"`, it'll prevent merging with previous transactions. With
`"after"`, subsequent transactions won't be combined with this
one. With `"full"`, the transaction is isolated on both sides.
*/
const isolateHistory = state.Annotation.define();
/**
This facet provides a way to register functions that, given a
transaction, provide a set of effects that the history should
store when inverting the transaction. This can be used to
integrate some kinds of effects in the history, so that they can
be undone (and redone again).
*/
const invertedEffects = state.Facet.define();
const historyConfig = state.Facet.define({
    combine(configs) {
        return state.combineConfig(configs, {
            minDepth: 100,
            newGroupDelay: 500,
            joinToEvent: (_t, isAdjacent) => isAdjacent,
        }, {
            minDepth: Math.max,
            newGroupDelay: Math.min,
            joinToEvent: (a, b) => (tr, adj) => a(tr, adj) || b(tr, adj)
        });
    }
});
const historyField_ = state.StateField.define({
    create() {
        return HistoryState.empty;
    },
    update(state$1, tr) {
        let config = tr.state.facet(historyConfig);
        let fromHist = tr.annotation(fromHistory);
        if (fromHist) {
            let item = HistEvent.fromTransaction(tr, fromHist.selection), from = fromHist.side;
            let other = from == 0 /* BranchName.Done */ ? state$1.undone : state$1.done;
            if (item)
                other = updateBranch(other, other.length, config.minDepth, item);
            else
                other = addSelection(other, tr.startState.selection);
            return new HistoryState(from == 0 /* BranchName.Done */ ? fromHist.rest : other, from == 0 /* BranchName.Done */ ? other : fromHist.rest);
        }
        let isolate = tr.annotation(isolateHistory);
        if (isolate == "full" || isolate == "before")
            state$1 = state$1.isolate();
        if (tr.annotation(state.Transaction.addToHistory) === false)
            return !tr.changes.empty ? state$1.addMapping(tr.changes.desc) : state$1;
        let event = HistEvent.fromTransaction(tr);
        let time = tr.annotation(state.Transaction.time), userEvent = tr.annotation(state.Transaction.userEvent);
        if (event)
            state$1 = state$1.addChanges(event, time, userEvent, config, tr);
        else if (tr.selection)
            state$1 = state$1.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay);
        if (isolate == "full" || isolate == "after")
            state$1 = state$1.isolate();
        return state$1;
    },
    toJSON(value) {
        return { done: value.done.map(e => e.toJSON()), undone: value.undone.map(e => e.toJSON()) };
    },
    fromJSON(json) {
        return new HistoryState(json.done.map(HistEvent.fromJSON), json.undone.map(HistEvent.fromJSON));
    }
});
/**
Create a history extension with the given configuration.
*/
function history(config = {}) {
    return [
        historyField_,
        historyConfig.of(config),
        view.EditorView.domEventHandlers({
            beforeinput(e, view) {
                let command = e.inputType == "historyUndo" ? undo : e.inputType == "historyRedo" ? redo : null;
                if (!command)
                    return false;
                e.preventDefault();
                return command(view);
            }
        })
    ];
}
/**
The state field used to store the history data. Should probably
only be used when you want to
[serialize](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) or
[deserialize](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) state objects in a way
that preserves history.
*/
const historyField = historyField_;
function cmd(side, selection) {
    return function ({ state, dispatch }) {
        if (!selection && state.readOnly)
            return false;
        let historyState = state.field(historyField_, false);
        if (!historyState)
            return false;
        let tr = historyState.pop(side, state, selection);
        if (!tr)
            return false;
        dispatch(tr);
        return true;
    };
}
/**
Undo a single group of history events. Returns false if no group
was available.
*/
const undo = cmd(0 /* BranchName.Done */, false);
/**
Redo a group of history events. Returns false if no group was
available.
*/
const redo = cmd(1 /* BranchName.Undone */, false);
/**
Undo a change or selection change.
*/
const undoSelection = cmd(0 /* BranchName.Done */, true);
/**
Redo a change or selection change.
*/
const redoSelection = cmd(1 /* BranchName.Undone */, true);
function depth(side) {
    return function (state) {
        let histState = state.field(historyField_, false);
        if (!histState)
            return 0;
        let branch = side == 0 /* BranchName.Done */ ? histState.done : histState.undone;
        return branch.length - (branch.length && !branch[0].changes ? 1 : 0);
    };
}
/**
The amount of undoable change events available in a given state.
*/
const undoDepth = depth(0 /* BranchName.Done */);
/**
The amount of redoable change events available in a given state.
*/
const redoDepth = depth(1 /* BranchName.Undone */);
// History events store groups of changes or effects that need to be
// undone/redone together.
class HistEvent {
    constructor(
    // The changes in this event. Normal events hold at least one
    // change or effect. But it may be necessary to store selection
    // events before the first change, in which case a special type of
    // instance is created which doesn't hold any changes, with
    // changes == startSelection == undefined
    changes, 
    // The effects associated with this event
    effects, 
    // Accumulated mapping (from addToHistory==false) that should be
    // applied to events below this one.
    mapped, 
    // The selection before this event
    startSelection, 
    // Stores selection changes after this event, to be used for
    // selection undo/redo.
    selectionsAfter) {
        this.changes = changes;
        this.effects = effects;
        this.mapped = mapped;
        this.startSelection = startSelection;
        this.selectionsAfter = selectionsAfter;
    }
    setSelAfter(after) {
        return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
    }
    toJSON() {
        var _a, _b, _c;
        return {
            changes: (_a = this.changes) === null || _a === void 0 ? void 0 : _a.toJSON(),
            mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
            startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
            selectionsAfter: this.selectionsAfter.map(s => s.toJSON())
        };
    }
    static fromJSON(json) {
        return new HistEvent(json.changes && state.ChangeSet.fromJSON(json.changes), [], json.mapped && state.ChangeDesc.fromJSON(json.mapped), json.startSelection && state.EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(state.EditorSelection.fromJSON));
    }
    // This does not check `addToHistory` and such, it assumes the
    // transaction needs to be converted to an item. Returns null when
    // there are no changes or effects in the transaction.
    static fromTransaction(tr, selection) {
        let effects = none;
        for (let invert of tr.startState.facet(invertedEffects)) {
            let result = invert(tr);
            if (result.length)
                effects = effects.concat(result);
        }
        if (!effects.length && tr.changes.empty)
            return null;
        return new HistEvent(tr.changes.invert(tr.startState.doc), effects, undefined, selection || tr.startState.selection, none);
    }
    static selection(selections) {
        return new HistEvent(undefined, none, undefined, undefined, selections);
    }
}
function updateBranch(branch, to, maxLen, newEvent) {
    let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
    let newBranch = branch.slice(start, to);
    newBranch.push(newEvent);
    return newBranch;
}
function isAdjacent(a, b) {
    let ranges = [], isAdjacent = false;
    a.iterChangedRanges((f, t) => ranges.push(f, t));
    b.iterChangedRanges((_f, _t, f, t) => {
        for (let i = 0; i < ranges.length;) {
            let from = ranges[i++], to = ranges[i++];
            if (t >= from && f <= to)
                isAdjacent = true;
        }
    });
    return isAdjacent;
}
function eqSelectionShape(a, b) {
    return a.ranges.length == b.ranges.length &&
        a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;
}
function conc(a, b) {
    return !a.length ? b : !b.length ? a : a.concat(b);
}
const none = [];
const MaxSelectionsPerEvent = 200;
function addSelection(branch, selection) {
    if (!branch.length) {
        return [HistEvent.selection([selection])];
    }
    else {
        let lastEvent = branch[branch.length - 1];
        let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
        if (sels.length && sels[sels.length - 1].eq(selection))
            return branch;
        sels.push(selection);
        return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
    }
}
// Assumes the top item has one or more selectionAfter values
function popSelection(branch) {
    let last = branch[branch.length - 1];
    let newBranch = branch.slice();
    newBranch[branch.length - 1] = last.setSelAfter(last.selectionsAfter.slice(0, last.selectionsAfter.length - 1));
    return newBranch;
}
// Add a mapping to the top event in the given branch. If this maps
// away all the changes and effects in that item, drop it and
// propagate the mapping to the next item.
function addMappingToBranch(branch, mapping) {
    if (!branch.length)
        return branch;
    let length = branch.length, selections = none;
    while (length) {
        let event = mapEvent(branch[length - 1], mapping, selections);
        if (event.changes && !event.changes.empty || event.effects.length) { // Event survived mapping
            let result = branch.slice(0, length);
            result[length - 1] = event;
            return result;
        }
        else { // Drop this event, since there's no changes or effects left
            mapping = event.mapped;
            length--;
            selections = event.selectionsAfter;
        }
    }
    return selections.length ? [HistEvent.selection(selections)] : none;
}
function mapEvent(event, mapping, extraSelections) {
    let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map(s => s.map(mapping)) : none, extraSelections);
    // Change-less events don't store mappings (they are always the last event in a branch)
    if (!event.changes)
        return HistEvent.selection(selections);
    let mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
    let fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
    return new HistEvent(mappedChanges, state.StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before), selections);
}
const joinableUserEvent = /^(input\.type|delete)($|\.)/;
class HistoryState {
    constructor(done, undone, prevTime = 0, prevUserEvent = undefined) {
        this.done = done;
        this.undone = undone;
        this.prevTime = prevTime;
        this.prevUserEvent = prevUserEvent;
    }
    isolate() {
        return this.prevTime ? new HistoryState(this.done, this.undone) : this;
    }
    addChanges(event, time, userEvent, config, tr) {
        let done = this.done, lastEvent = done[done.length - 1];
        if (lastEvent && lastEvent.changes && !lastEvent.changes.empty && event.changes &&
            (!userEvent || joinableUserEvent.test(userEvent)) &&
            ((!lastEvent.selectionsAfter.length &&
                time - this.prevTime < config.newGroupDelay &&
                config.joinToEvent(tr, isAdjacent(lastEvent.changes, event.changes))) ||
                // For compose (but not compose.start) events, always join with previous event
                userEvent == "input.type.compose")) {
            done = updateBranch(done, done.length - 1, config.minDepth, new HistEvent(event.changes.compose(lastEvent.changes), conc(state.StateEffect.mapEffects(event.effects, lastEvent.changes), lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none));
        }
        else {
            done = updateBranch(done, done.length, config.minDepth, event);
        }
        return new HistoryState(done, none, time, userEvent);
    }
    addSelection(selection, time, userEvent, newGroupDelay) {
        let last = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none;
        if (last.length > 0 &&
            time - this.prevTime < newGroupDelay &&
            userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) &&
            eqSelectionShape(last[last.length - 1], selection))
            return this;
        return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
    }
    addMapping(mapping) {
        return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
    }
    pop(side, state, onlySelection) {
        let branch = side == 0 /* BranchName.Done */ ? this.done : this.undone;
        if (branch.length == 0)
            return null;
        let event = branch[branch.length - 1], selection = event.selectionsAfter[0] || state.selection;
        if (onlySelection && event.selectionsAfter.length) {
            return state.update({
                selection: event.selectionsAfter[event.selectionsAfter.length - 1],
                annotations: fromHistory.of({ side, rest: popSelection(branch), selection }),
                userEvent: side == 0 /* BranchName.Done */ ? "select.undo" : "select.redo",
                scrollIntoView: true
            });
        }
        else if (!event.changes) {
            return null;
        }
        else {
            let rest = branch.length == 1 ? none : branch.slice(0, branch.length - 1);
            if (event.mapped)
                rest = addMappingToBranch(rest, event.mapped);
            return state.update({
                changes: event.changes,
                selection: event.startSelection,
                effects: event.effects,
                annotations: fromHistory.of({ side, rest, selection }),
                filter: false,
                userEvent: side == 0 /* BranchName.Done */ ? "undo" : "redo",
                scrollIntoView: true
            });
        }
    }
}
HistoryState.empty = new HistoryState(none, none);
/**
Default key bindings for the undo history.

- Mod-z: [`undo`](https://codemirror.net/6/docs/ref/#commands.undo).
- Mod-y (Mod-Shift-z on macOS) + Ctrl-Shift-z on Linux: [`redo`](https://codemirror.net/6/docs/ref/#commands.redo).
- Mod-u: [`undoSelection`](https://codemirror.net/6/docs/ref/#commands.undoSelection).
- Alt-u (Mod-Shift-u on macOS): [`redoSelection`](https://codemirror.net/6/docs/ref/#commands.redoSelection).
*/
const historyKeymap = [
    { key: "Mod-z", run: undo, preventDefault: true },
    { key: "Mod-y", mac: "Mod-Shift-z", run: redo, preventDefault: true },
    { linux: "Ctrl-Shift-z", run: redo, preventDefault: true },
    { key: "Mod-u", run: undoSelection, preventDefault: true },
    { key: "Alt-u", mac: "Mod-Shift-u", run: redoSelection, preventDefault: true }
];

function updateSel(sel, by) {
    return state.EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
}
function setSel(state, selection) {
    return state.update({ selection, scrollIntoView: true, userEvent: "select" });
}
function moveSel({ state, dispatch }, how) {
    let selection = updateSel(state.selection, how);
    if (selection.eq(state.selection, true))
        return false;
    dispatch(setSel(state, selection));
    return true;
}
function rangeEnd(range, forward) {
    return state.EditorSelection.cursor(forward ? range.to : range.from);
}
function cursorByChar(view, forward) {
    return moveSel(view, range => range.empty ? view.moveByChar(range, forward) : rangeEnd(range, forward));
}
function ltrAtCursor(view$1) {
    return view$1.textDirectionAt(view$1.state.selection.main.head) == view.Direction.LTR;
}
/**
Move the selection one character to the left (which is backward in
left-to-right text, forward in right-to-left text).
*/
const cursorCharLeft = view => cursorByChar(view, !ltrAtCursor(view));
/**
Move the selection one character to the right.
*/
const cursorCharRight = view => cursorByChar(view, ltrAtCursor(view));
/**
Move the selection one character forward.
*/
const cursorCharForward = view => cursorByChar(view, true);
/**
Move the selection one character backward.
*/
const cursorCharBackward = view => cursorByChar(view, false);
function byCharLogical(state$1, range, forward) {
    let pos = range.head, line = state$1.doc.lineAt(pos);
    if (pos == (forward ? line.to : line.from))
        pos = forward ? Math.min(state$1.doc.length, line.to + 1) : Math.max(0, line.from - 1);
    else
        pos = line.from + state.findClusterBreak(line.text, pos - line.from, forward);
    return state.EditorSelection.cursor(pos, forward ? -1 : 1);
}
function moveByCharLogical(target, forward) {
    return moveSel(target, range => range.empty ? byCharLogical(target.state, range, forward) : rangeEnd(range, forward));
}
/**
Move the selection one character forward, in logical
(non-text-direction-aware) string index order.
*/
const cursorCharForwardLogical = target => moveByCharLogical(target, true);
/**
Move the selection one character backward, in logical string index
order.
*/
const cursorCharBackwardLogical = target => moveByCharLogical(target, false);
function cursorByGroup(view, forward) {
    return moveSel(view, range => range.empty ? view.moveByGroup(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection to the left across one group of word or
non-word (but also non-space) characters.
*/
const cursorGroupLeft = view => cursorByGroup(view, !ltrAtCursor(view));
/**
Move the selection one group to the right.
*/
const cursorGroupRight = view => cursorByGroup(view, ltrAtCursor(view));
/**
Move the selection one group forward.
*/
const cursorGroupForward = view => cursorByGroup(view, true);
/**
Move the selection one group backward.
*/
const cursorGroupBackward = view => cursorByGroup(view, false);
function toGroupStart(view, pos, start) {
    let categorize = view.state.charCategorizer(pos);
    let cat = categorize(start), initial = cat != state.CharCategory.Space;
    return (next) => {
        let nextCat = categorize(next);
        if (nextCat != state.CharCategory.Space)
            return initial && nextCat == cat;
        initial = false;
        return true;
    };
}
/**
Move the cursor one group forward in the default Windows style,
where it moves to the start of the next group.
*/
const cursorGroupForwardWin = view => {
    return moveSel(view, range => range.empty
        ? view.moveByChar(range, true, start => toGroupStart(view, range.head, start))
        : rangeEnd(range, true));
};
const segmenter = typeof Intl != "undefined" && Intl.Segmenter ?
    new (Intl.Segmenter)(undefined, { granularity: "word" }) : null;
function moveBySubword(view, range, forward) {
    let categorize = view.state.charCategorizer(range.from);
    let cat = state.CharCategory.Space, pos = range.from, steps = 0;
    let done = false, sawUpper = false, sawLower = false;
    let step = (next) => {
        if (done)
            return false;
        pos += forward ? next.length : -next.length;
        let nextCat = categorize(next), ahead;
        if (nextCat == state.CharCategory.Word && next.charCodeAt(0) < 128 && /[\W_]/.test(next))
            nextCat = -1; // Treat word punctuation specially
        if (cat == state.CharCategory.Space)
            cat = nextCat;
        if (cat != nextCat)
            return false;
        if (cat == state.CharCategory.Word) {
            if (next.toLowerCase() == next) {
                if (!forward && sawUpper)
                    return false;
                sawLower = true;
            }
            else if (sawLower) {
                if (forward)
                    return false;
                done = true;
            }
            else {
                if (sawUpper && forward && categorize(ahead = view.state.sliceDoc(pos, pos + 1)) == state.CharCategory.Word &&
                    ahead.toLowerCase() == ahead)
                    return false;
                sawUpper = true;
            }
        }
        steps++;
        return true;
    };
    let end = view.moveByChar(range, forward, start => {
        step(start);
        return step;
    });
    if (segmenter && cat == state.CharCategory.Word && end.from == range.from + steps * (forward ? 1 : -1)) {
        let from = Math.min(range.head, end.head), to = Math.max(range.head, end.head);
        let skipped = view.state.sliceDoc(from, to);
        if (skipped.length > 1 && /[\u4E00-\uffff]/.test(skipped)) {
            let segments = Array.from(segmenter.segment(skipped));
            if (segments.length > 1) {
                if (forward)
                    return state.EditorSelection.cursor(range.head + segments[1].index, -1);
                return state.EditorSelection.cursor(end.head + segments[segments.length - 1].index, 1);
            }
        }
    }
    return end;
}
function cursorBySubword(view, forward) {
    return moveSel(view, range => range.empty ? moveBySubword(view, range, forward) : rangeEnd(range, forward));
}
/**
Move the selection one group or camel-case subword forward.
*/
const cursorSubwordForward = view => cursorBySubword(view, true);
/**
Move the selection one group or camel-case subword backward.
*/
const cursorSubwordBackward = view => cursorBySubword(view, false);
function interestingNode(state, node, bracketProp) {
    if (node.type.prop(bracketProp))
        return true;
    let len = node.to - node.from;
    return len && (len > 2 || /[^\s,.;:]/.test(state.sliceDoc(node.from, node.to))) || node.firstChild;
}
function moveBySyntax(state$1, start, forward) {
    let pos = language.syntaxTree(state$1).resolveInner(start.head);
    let bracketProp = forward ? common.NodeProp.closedBy : common.NodeProp.openedBy;
    // Scan forward through child nodes to see if there's an interesting
    // node ahead.
    for (let at = start.head;;) {
        let next = forward ? pos.childAfter(at) : pos.childBefore(at);
        if (!next)
            break;
        if (interestingNode(state$1, next, bracketProp))
            pos = next;
        else
            at = forward ? next.to : next.from;
    }
    let bracket = pos.type.prop(bracketProp), match, newPos;
    if (bracket && (match = forward ? language.matchBrackets(state$1, pos.from, 1) : language.matchBrackets(state$1, pos.to, -1)) && match.matched)
        newPos = forward ? match.end.to : match.end.from;
    else
        newPos = forward ? pos.to : pos.from;
    return state.EditorSelection.cursor(newPos, forward ? -1 : 1);
}
/**
Move the cursor over the next syntactic element to the left.
*/
const cursorSyntaxLeft = view => moveSel(view, range => moveBySyntax(view.state, range, !ltrAtCursor(view)));
/**
Move the cursor over the next syntactic element to the right.
*/
const cursorSyntaxRight = view => moveSel(view, range => moveBySyntax(view.state, range, ltrAtCursor(view)));
function cursorByLine(view, forward) {
    return moveSel(view, range => {
        if (!range.empty)
            return rangeEnd(range, forward);
        let moved = view.moveVertically(range, forward);
        return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);
    });
}
/**
Move the selection one line up.
*/
const cursorLineUp = view => cursorByLine(view, false);
/**
Move the selection one line down.
*/
const cursorLineDown = view => cursorByLine(view, true);
function pageInfo(view$1) {
    let selfScroll = view$1.scrollDOM.clientHeight < view$1.scrollDOM.scrollHeight - 2;
    let marginTop = 0, marginBottom = 0, height;
    if (selfScroll) {
        for (let source of view$1.state.facet(view.EditorView.scrollMargins)) {
            let margins = source(view$1);
            if (margins === null || margins === void 0 ? void 0 : margins.top)
                marginTop = Math.max(margins === null || margins === void 0 ? void 0 : margins.top, marginTop);
            if (margins === null || margins === void 0 ? void 0 : margins.bottom)
                marginBottom = Math.max(margins === null || margins === void 0 ? void 0 : margins.bottom, marginBottom);
        }
        height = view$1.scrollDOM.clientHeight - marginTop - marginBottom;
    }
    else {
        height = (view$1.dom.ownerDocument.defaultView || window).innerHeight;
    }
    return { marginTop, marginBottom, selfScroll,
        height: Math.max(view$1.defaultLineHeight, height - 5) };
}
function cursorByPage(view$1, forward) {
    let page = pageInfo(view$1);
    let { state } = view$1, selection = updateSel(state.selection, range => {
        return range.empty ? view$1.moveVertically(range, forward, page.height)
            : rangeEnd(range, forward);
    });
    if (selection.eq(state.selection))
        return false;
    let effect;
    if (page.selfScroll) {
        let startPos = view$1.coordsAtPos(state.selection.main.head);
        let scrollRect = view$1.scrollDOM.getBoundingClientRect();
        let scrollTop = scrollRect.top + page.marginTop, scrollBottom = scrollRect.bottom - page.marginBottom;
        if (startPos && startPos.top > scrollTop && startPos.bottom < scrollBottom)
            effect = view.EditorView.scrollIntoView(selection.main.head, { y: "start", yMargin: startPos.top - scrollTop });
    }
    view$1.dispatch(setSel(state, selection), { effects: effect });
    return true;
}
/**
Move the selection one page up.
*/
const cursorPageUp = view => cursorByPage(view, false);
/**
Move the selection one page down.
*/
const cursorPageDown = view => cursorByPage(view, true);
function moveByLineBoundary(view, start, forward) {
    let line = view.lineBlockAt(start.head), moved = view.moveToLineBoundary(start, forward);
    if (moved.head == start.head && moved.head != (forward ? line.to : line.from))
        moved = view.moveToLineBoundary(start, forward, false);
    if (!forward && moved.head == line.from && line.length) {
        let space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
        if (space && start.head != line.from + space)
            moved = state.EditorSelection.cursor(line.from + space);
    }
    return moved;
}
/**
Move the selection to the next line wrap point, or to the end of
the line if there isn't one left on this line.
*/
const cursorLineBoundaryForward = view => moveSel(view, range => moveByLineBoundary(view, range, true));
/**
Move the selection to previous line wrap point, or failing that to
the start of the line. If the line is indented, and the cursor
isn't already at the end of the indentation, this will move to the
end of the indentation instead of the start of the line.
*/
const cursorLineBoundaryBackward = view => moveSel(view, range => moveByLineBoundary(view, range, false));
/**
Move the selection one line wrap point to the left.
*/
const cursorLineBoundaryLeft = view => moveSel(view, range => moveByLineBoundary(view, range, !ltrAtCursor(view)));
/**
Move the selection one line wrap point to the right.
*/
const cursorLineBoundaryRight = view => moveSel(view, range => moveByLineBoundary(view, range, ltrAtCursor(view)));
/**
Move the selection to the start of the line.
*/
const cursorLineStart = view => moveSel(view, range => state.EditorSelection.cursor(view.lineBlockAt(range.head).from, 1));
/**
Move the selection to the end of the line.
*/
const cursorLineEnd = view => moveSel(view, range => state.EditorSelection.cursor(view.lineBlockAt(range.head).to, -1));
function toMatchingBracket(state$1, dispatch, extend) {
    let found = false, selection = updateSel(state$1.selection, range => {
        let matching = language.matchBrackets(state$1, range.head, -1)
            || language.matchBrackets(state$1, range.head, 1)
            || (range.head > 0 && language.matchBrackets(state$1, range.head - 1, 1))
            || (range.head < state$1.doc.length && language.matchBrackets(state$1, range.head + 1, -1));
        if (!matching || !matching.end)
            return range;
        found = true;
        let head = matching.start.from == range.head ? matching.end.to : matching.end.from;
        return extend ? state.EditorSelection.range(range.anchor, head) : state.EditorSelection.cursor(head);
    });
    if (!found)
        return false;
    dispatch(setSel(state$1, selection));
    return true;
}
/**
Move the selection to the bracket matching the one it is currently
on, if any.
*/
const cursorMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, false);
/**
Extend the selection to the bracket matching the one the selection
head is currently on, if any.
*/
const selectMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, true);
function extendSel(target, how) {
    let selection = updateSel(target.state.selection, range => {
        let head = how(range);
        return state.EditorSelection.range(range.anchor, head.head, head.goalColumn, head.bidiLevel || undefined);
    });
    if (selection.eq(target.state.selection))
        return false;
    target.dispatch(setSel(target.state, selection));
    return true;
}
function selectByChar(view, forward) {
    return extendSel(view, range => view.moveByChar(range, forward));
}
/**
Move the selection head one character to the left, while leaving
the anchor in place.
*/
const selectCharLeft = view => selectByChar(view, !ltrAtCursor(view));
/**
Move the selection head one character to the right.
*/
const selectCharRight = view => selectByChar(view, ltrAtCursor(view));
/**
Move the selection head one character forward.
*/
const selectCharForward = view => selectByChar(view, true);
/**
Move the selection head one character backward.
*/
const selectCharBackward = view => selectByChar(view, false);
/**
Move the selection head one character forward by logical
(non-direction aware) string index order.
*/
const selectCharForwardLogical = target => extendSel(target, range => byCharLogical(target.state, range, true));
/**
Move the selection head one character backward by logical string
index order.
*/
const selectCharBackwardLogical = target => extendSel(target, range => byCharLogical(target.state, range, false));
function selectByGroup(view, forward) {
    return extendSel(view, range => view.moveByGroup(range, forward));
}
/**
Move the selection head one [group](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) to
the left.
*/
const selectGroupLeft = view => selectByGroup(view, !ltrAtCursor(view));
/**
Move the selection head one group to the right.
*/
const selectGroupRight = view => selectByGroup(view, ltrAtCursor(view));
/**
Move the selection head one group forward.
*/
const selectGroupForward = view => selectByGroup(view, true);
/**
Move the selection head one group backward.
*/
const selectGroupBackward = view => selectByGroup(view, false);
/**
Move the selection head one group forward in the default Windows
style, skipping to the start of the next group.
*/
const selectGroupForwardWin = view => {
    return extendSel(view, range => view.moveByChar(range, true, start => toGroupStart(view, range.head, start)));
};
function selectBySubword(view, forward) {
    return extendSel(view, range => moveBySubword(view, range, forward));
}
/**
Move the selection head one group or camel-case subword forward.
*/
const selectSubwordForward = view => selectBySubword(view, true);
/**
Move the selection head one group or subword backward.
*/
const selectSubwordBackward = view => selectBySubword(view, false);
/**
Move the selection head over the next syntactic element to the left.
*/
const selectSyntaxLeft = view => extendSel(view, range => moveBySyntax(view.state, range, !ltrAtCursor(view)));
/**
Move the selection head over the next syntactic element to the right.
*/
const selectSyntaxRight = view => extendSel(view, range => moveBySyntax(view.state, range, ltrAtCursor(view)));
function selectByLine(view, forward) {
    return extendSel(view, range => view.moveVertically(range, forward));
}
/**
Move the selection head one line up.
*/
const selectLineUp = view => selectByLine(view, false);
/**
Move the selection head one line down.
*/
const selectLineDown = view => selectByLine(view, true);
function selectByPage(view, forward) {
    return extendSel(view, range => view.moveVertically(range, forward, pageInfo(view).height));
}
/**
Move the selection head one page up.
*/
const selectPageUp = view => selectByPage(view, false);
/**
Move the selection head one page down.
*/
const selectPageDown = view => selectByPage(view, true);
/**
Move the selection head to the next line boundary.
*/
const selectLineBoundaryForward = view => extendSel(view, range => moveByLineBoundary(view, range, true));
/**
Move the selection head to the previous line boundary.
*/
const selectLineBoundaryBackward = view => extendSel(view, range => moveByLineBoundary(view, range, false));
/**
Move the selection head one line boundary to the left.
*/
const selectLineBoundaryLeft = view => extendSel(view, range => moveByLineBoundary(view, range, !ltrAtCursor(view)));
/**
Move the selection head one line boundary to the right.
*/
const selectLineBoundaryRight = view => extendSel(view, range => moveByLineBoundary(view, range, ltrAtCursor(view)));
/**
Move the selection head to the start of the line.
*/
const selectLineStart = view => extendSel(view, range => state.EditorSelection.cursor(view.lineBlockAt(range.head).from));
/**
Move the selection head to the end of the line.
*/
const selectLineEnd = view => extendSel(view, range => state.EditorSelection.cursor(view.lineBlockAt(range.head).to));
/**
Move the selection to the start of the document.
*/
const cursorDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: 0 }));
    return true;
};
/**
Move the selection to the end of the document.
*/
const cursorDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.doc.length }));
    return true;
};
/**
Move the selection head to the start of the document.
*/
const selectDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: 0 }));
    return true;
};
/**
Move the selection head to the end of the document.
*/
const selectDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: state.doc.length }));
    return true;
};
/**
Select the entire document.
*/
const selectAll = ({ state, dispatch }) => {
    dispatch(state.update({ selection: { anchor: 0, head: state.doc.length }, userEvent: "select" }));
    return true;
};
/**
Expand the selection to cover entire lines.
*/
const selectLine = ({ state: state$1, dispatch }) => {
    let ranges = selectedLineBlocks(state$1).map(({ from, to }) => state.EditorSelection.range(from, Math.min(to + 1, state$1.doc.length)));
    dispatch(state$1.update({ selection: state.EditorSelection.create(ranges), userEvent: "select" }));
    return true;
};
/**
Select the next syntactic construct that is larger than the
selection. Note that this will only work insofar as the language
[provider](https://codemirror.net/6/docs/ref/#language.language) you use builds up a full
syntax tree.
*/
const selectParentSyntax = ({ state: state$1, dispatch }) => {
    let selection = updateSel(state$1.selection, range => {
        let tree = language.syntaxTree(state$1), stack = tree.resolveStack(range.from, 1);
        if (range.empty) {
            let stackBefore = tree.resolveStack(range.from, -1);
            if (stackBefore.node.from >= stack.node.from && stackBefore.node.to <= stack.node.to)
                stack = stackBefore;
        }
        for (let cur = stack; cur; cur = cur.next) {
            let { node } = cur;
            if (((node.from < range.from && node.to >= range.to) ||
                (node.to > range.to && node.from <= range.from)) &&
                cur.next)
                return state.EditorSelection.range(node.to, node.from);
        }
        return range;
    });
    if (selection.eq(state$1.selection))
        return false;
    dispatch(setSel(state$1, selection));
    return true;
};
/**
Simplify the current selection. When multiple ranges are selected,
reduce it to its main range. Otherwise, if the selection is
non-empty, convert it to a cursor selection.
*/
const simplifySelection = ({ state: state$1, dispatch }) => {
    let cur = state$1.selection, selection = null;
    if (cur.ranges.length > 1)
        selection = state.EditorSelection.create([cur.main]);
    else if (!cur.main.empty)
        selection = state.EditorSelection.create([state.EditorSelection.cursor(cur.main.head)]);
    if (!selection)
        return false;
    dispatch(setSel(state$1, selection));
    return true;
};
function deleteBy(target, by) {
    if (target.state.readOnly)
        return false;
    let event = "delete.selection", { state: state$1 } = target;
    let changes = state$1.changeByRange(range => {
        let { from, to } = range;
        if (from == to) {
            let towards = by(range);
            if (towards < from) {
                event = "delete.backward";
                towards = skipAtomic(target, towards, false);
            }
            else if (towards > from) {
                event = "delete.forward";
                towards = skipAtomic(target, towards, true);
            }
            from = Math.min(from, towards);
            to = Math.max(to, towards);
        }
        else {
            from = skipAtomic(target, from, false);
            to = skipAtomic(target, to, true);
        }
        return from == to ? { range } : { changes: { from, to }, range: state.EditorSelection.cursor(from, from < range.head ? -1 : 1) };
    });
    if (changes.changes.empty)
        return false;
    target.dispatch(state$1.update(changes, {
        scrollIntoView: true,
        userEvent: event,
        effects: event == "delete.selection" ? view.EditorView.announce.of(state$1.phrase("Selection deleted")) : undefined
    }));
    return true;
}
function skipAtomic(target, pos, forward) {
    if (target instanceof view.EditorView)
        for (let ranges of target.state.facet(view.EditorView.atomicRanges).map(f => f(target)))
            ranges.between(pos, pos, (from, to) => {
                if (from < pos && to > pos)
                    pos = forward ? to : from;
            });
    return pos;
}
const deleteByChar = (target, forward, byIndentUnit) => deleteBy(target, range => {
    let pos = range.from, { state: state$1 } = target, line = state$1.doc.lineAt(pos), before, targetPos;
    if (byIndentUnit && !forward && pos > line.from && pos < line.from + 200 &&
        !/[^ \t]/.test(before = line.text.slice(0, pos - line.from))) {
        if (before[before.length - 1] == "\t")
            return pos - 1;
        let col = state.countColumn(before, state$1.tabSize), drop = col % language.getIndentUnit(state$1) || language.getIndentUnit(state$1);
        for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++)
            pos--;
        targetPos = pos;
    }
    else {
        targetPos = state.findClusterBreak(line.text, pos - line.from, forward, forward) + line.from;
        if (targetPos == pos && line.number != (forward ? state$1.doc.lines : 1))
            targetPos += forward ? 1 : -1;
        else if (!forward && /[\ufe00-\ufe0f]/.test(line.text.slice(targetPos - line.from, pos - line.from)))
            targetPos = state.findClusterBreak(line.text, targetPos - line.from, false, false) + line.from;
    }
    return targetPos;
});
/**
Delete the selection, or, for cursor selections, the character or
indentation unit before the cursor.
*/
const deleteCharBackward = view => deleteByChar(view, false, true);
/**
Delete the selection or the character before the cursor. Does not
implement any extended behavior like deleting whole indentation
units in one go.
*/
const deleteCharBackwardStrict = view => deleteByChar(view, false, false);
/**
Delete the selection or the character after the cursor.
*/
const deleteCharForward = view => deleteByChar(view, true, false);
const deleteByGroup = (target, forward) => deleteBy(target, range => {
    let pos = range.head, { state: state$1 } = target, line = state$1.doc.lineAt(pos);
    let categorize = state$1.charCategorizer(pos);
    for (let cat = null;;) {
        if (pos == (forward ? line.to : line.from)) {
            if (pos == range.head && line.number != (forward ? state$1.doc.lines : 1))
                pos += forward ? 1 : -1;
            break;
        }
        let next = state.findClusterBreak(line.text, pos - line.from, forward) + line.from;
        let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
        let nextCat = categorize(nextChar);
        if (cat != null && nextCat != cat)
            break;
        if (nextChar != " " || pos != range.head)
            cat = nextCat;
        pos = next;
    }
    return pos;
});
/**
Delete the selection or backward until the end of the next
[group](https://codemirror.net/6/docs/ref/#view.EditorView.moveByGroup), only skipping groups of
whitespace when they consist of a single space.
*/
const deleteGroupBackward = target => deleteByGroup(target, false);
/**
Delete the selection or forward until the end of the next group.
*/
const deleteGroupForward = target => deleteByGroup(target, true);
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line. If the cursor is directly at the end of the
line, delete the line break after it.
*/
const deleteToLineEnd = view => deleteBy(view, range => {
    let lineEnd = view.lineBlockAt(range.head).to;
    return range.head < lineEnd ? lineEnd : Math.min(view.state.doc.length, range.head + 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line. If the cursor is directly at the start of the
line, delete the line break before it.
*/
const deleteToLineStart = view => deleteBy(view, range => {
    let lineStart = view.lineBlockAt(range.head).from;
    return range.head > lineStart ? lineStart : Math.max(0, range.head - 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line or the next line wrap before the cursor.
*/
const deleteLineBoundaryBackward = view => deleteBy(view, range => {
    let lineStart = view.moveToLineBoundary(range, false).head;
    return range.head > lineStart ? lineStart : Math.max(0, range.head - 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line or the next line wrap after the cursor.
*/
const deleteLineBoundaryForward = view => deleteBy(view, range => {
    let lineStart = view.moveToLineBoundary(range, true).head;
    return range.head < lineStart ? lineStart : Math.min(view.state.doc.length, range.head + 1);
});
/**
Delete all whitespace directly before a line end from the
document.
*/
const deleteTrailingWhitespace = ({ state, dispatch }) => {
    if (state.readOnly)
        return false;
    let changes = [];
    for (let pos = 0, prev = "", iter = state.doc.iter();;) {
        iter.next();
        if (iter.lineBreak || iter.done) {
            let trailing = prev.search(/\s+$/);
            if (trailing > -1)
                changes.push({ from: pos - (prev.length - trailing), to: pos });
            if (iter.done)
                break;
            prev = "";
        }
        else {
            prev = iter.value;
        }
        pos += iter.value.length;
    }
    if (!changes.length)
        return false;
    dispatch(state.update({ changes, userEvent: "delete" }));
    return true;
};
/**
Replace each selection range with a line break, leaving the cursor
on the line before the break.
*/
const splitLine = ({ state: state$1, dispatch }) => {
    if (state$1.readOnly)
        return false;
    let changes = state$1.changeByRange(range => {
        return { changes: { from: range.from, to: range.to, insert: state.Text.of(["", ""]) },
            range: state.EditorSelection.cursor(range.from) };
    });
    dispatch(state$1.update(changes, { scrollIntoView: true, userEvent: "input" }));
    return true;
};
/**
Flip the characters before and after the cursor(s).
*/
const transposeChars = ({ state: state$1, dispatch }) => {
    if (state$1.readOnly)
        return false;
    let changes = state$1.changeByRange(range => {
        if (!range.empty || range.from == 0 || range.from == state$1.doc.length)
            return { range };
        let pos = range.from, line = state$1.doc.lineAt(pos);
        let from = pos == line.from ? pos - 1 : state.findClusterBreak(line.text, pos - line.from, false) + line.from;
        let to = pos == line.to ? pos + 1 : state.findClusterBreak(line.text, pos - line.from, true) + line.from;
        return { changes: { from, to, insert: state$1.doc.slice(pos, to).append(state$1.doc.slice(from, pos)) },
            range: state.EditorSelection.cursor(to) };
    });
    if (changes.changes.empty)
        return false;
    dispatch(state$1.update(changes, { scrollIntoView: true, userEvent: "move.character" }));
    return true;
};
function selectedLineBlocks(state) {
    let blocks = [], upto = -1;
    for (let range of state.selection.ranges) {
        let startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
        if (!range.empty && range.to == endLine.from)
            endLine = state.doc.lineAt(range.to - 1);
        if (upto >= startLine.number) {
            let prev = blocks[blocks.length - 1];
            prev.to = endLine.to;
            prev.ranges.push(range);
        }
        else {
            blocks.push({ from: startLine.from, to: endLine.to, ranges: [range] });
        }
        upto = endLine.number + 1;
    }
    return blocks;
}
function moveLine(state$1, dispatch, forward) {
    if (state$1.readOnly)
        return false;
    let changes = [], ranges = [];
    for (let block of selectedLineBlocks(state$1)) {
        if (forward ? block.to == state$1.doc.length : block.from == 0)
            continue;
        let nextLine = state$1.doc.lineAt(forward ? block.to + 1 : block.from - 1);
        let size = nextLine.length + 1;
        if (forward) {
            changes.push({ from: block.to, to: nextLine.to }, { from: block.from, insert: nextLine.text + state$1.lineBreak });
            for (let r of block.ranges)
                ranges.push(state.EditorSelection.range(Math.min(state$1.doc.length, r.anchor + size), Math.min(state$1.doc.length, r.head + size)));
        }
        else {
            changes.push({ from: nextLine.from, to: block.from }, { from: block.to, insert: state$1.lineBreak + nextLine.text });
            for (let r of block.ranges)
                ranges.push(state.EditorSelection.range(r.anchor - size, r.head - size));
        }
    }
    if (!changes.length)
        return false;
    dispatch(state$1.update({
        changes,
        scrollIntoView: true,
        selection: state.EditorSelection.create(ranges, state$1.selection.mainIndex),
        userEvent: "move.line"
    }));
    return true;
}
/**
Move the selected lines up one line.
*/
const moveLineUp = ({ state, dispatch }) => moveLine(state, dispatch, false);
/**
Move the selected lines down one line.
*/
const moveLineDown = ({ state, dispatch }) => moveLine(state, dispatch, true);
function copyLine(state, dispatch, forward) {
    if (state.readOnly)
        return false;
    let changes = [];
    for (let block of selectedLineBlocks(state)) {
        if (forward)
            changes.push({ from: block.from, insert: state.doc.slice(block.from, block.to) + state.lineBreak });
        else
            changes.push({ from: block.to, insert: state.lineBreak + state.doc.slice(block.from, block.to) });
    }
    dispatch(state.update({ changes, scrollIntoView: true, userEvent: "input.copyline" }));
    return true;
}
/**
Create a copy of the selected lines. Keep the selection in the top copy.
*/
const copyLineUp = ({ state, dispatch }) => copyLine(state, dispatch, false);
/**
Create a copy of the selected lines. Keep the selection in the bottom copy.
*/
const copyLineDown = ({ state, dispatch }) => copyLine(state, dispatch, true);
/**
Delete selected lines.
*/
const deleteLine = view => {
    if (view.state.readOnly)
        return false;
    let { state } = view, changes = state.changes(selectedLineBlocks(state).map(({ from, to }) => {
        if (from > 0)
            from--;
        else if (to < state.doc.length)
            to++;
        return { from, to };
    }));
    let selection = updateSel(state.selection, range => {
        let dist = undefined;
        if (view.lineWrapping) {
            let block = view.lineBlockAt(range.head), pos = view.coordsAtPos(range.head, range.assoc || 1);
            if (pos)
                dist = (block.bottom + view.documentTop) - pos.bottom + view.defaultLineHeight / 2;
        }
        return view.moveVertically(range, true, dist);
    }).map(changes);
    view.dispatch({ changes, selection, scrollIntoView: true, userEvent: "delete.line" });
    return true;
};
/**
Replace the selection with a newline.
*/
const insertNewline = ({ state, dispatch }) => {
    dispatch(state.update(state.replaceSelection(state.lineBreak), { scrollIntoView: true, userEvent: "input" }));
    return true;
};
/**
Replace the selection with a newline and the same amount of
indentation as the line above.
*/
const insertNewlineKeepIndent = ({ state: state$1, dispatch }) => {
    dispatch(state$1.update(state$1.changeByRange(range => {
        let indent = /^\s*/.exec(state$1.doc.lineAt(range.from).text)[0];
        return {
            changes: { from: range.from, to: range.to, insert: state$1.lineBreak + indent },
            range: state.EditorSelection.cursor(range.from + indent.length + 1)
        };
    }), { scrollIntoView: true, userEvent: "input" }));
    return true;
};
function isBetweenBrackets(state, pos) {
    if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1)))
        return { from: pos, to: pos };
    let context = language.syntaxTree(state).resolveInner(pos);
    let before = context.childBefore(pos), after = context.childAfter(pos), closedBy;
    if (before && after && before.to <= pos && after.from >= pos &&
        (closedBy = before.type.prop(common.NodeProp.closedBy)) && closedBy.indexOf(after.name) > -1 &&
        state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from &&
        !/\S/.test(state.sliceDoc(before.to, after.from)))
        return { from: before.to, to: after.from };
    return null;
}
/**
Replace the selection with a newline and indent the newly created
line(s). If the current line consists only of whitespace, this
will also delete that whitespace. When the cursor is between
matching brackets, an additional newline will be inserted after
the cursor.
*/
const insertNewlineAndIndent = newlineAndIndent(false);
/**
Create a blank, indented line below the current line.
*/
const insertBlankLine = newlineAndIndent(true);
function newlineAndIndent(atEof) {
    return ({ state: state$1, dispatch }) => {
        if (state$1.readOnly)
            return false;
        let changes = state$1.changeByRange(range => {
            let { from, to } = range, line = state$1.doc.lineAt(from);
            let explode = !atEof && from == to && isBetweenBrackets(state$1, from);
            if (atEof)
                from = to = (to <= line.to ? line : state$1.doc.lineAt(to)).to;
            let cx = new language.IndentContext(state$1, { simulateBreak: from, simulateDoubleBreak: !!explode });
            let indent = language.getIndentation(cx, from);
            if (indent == null)
                indent = state.countColumn(/^\s*/.exec(state$1.doc.lineAt(from).text)[0], state$1.tabSize);
            while (to < line.to && /\s/.test(line.text[to - line.from]))
                to++;
            if (explode)
                ({ from, to } = explode);
            else if (from > line.from && from < line.from + 100 && !/\S/.test(line.text.slice(0, from)))
                from = line.from;
            let insert = ["", language.indentString(state$1, indent)];
            if (explode)
                insert.push(language.indentString(state$1, cx.lineIndent(line.from, -1)));
            return { changes: { from, to, insert: state.Text.of(insert) },
                range: state.EditorSelection.cursor(from + 1 + insert[1].length) };
        });
        dispatch(state$1.update(changes, { scrollIntoView: true, userEvent: "input" }));
        return true;
    };
}
function changeBySelectedLine(state$1, f) {
    let atLine = -1;
    return state$1.changeByRange(range => {
        let changes = [];
        for (let pos = range.from; pos <= range.to;) {
            let line = state$1.doc.lineAt(pos);
            if (line.number > atLine && (range.empty || range.to > line.from)) {
                f(line, changes, range);
                atLine = line.number;
            }
            pos = line.to + 1;
        }
        let changeSet = state$1.changes(changes);
        return { changes,
            range: state.EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1)) };
    });
}
/**
Auto-indent the selected lines. This uses the [indentation service
facet](https://codemirror.net/6/docs/ref/#language.indentService) as source for auto-indent
information.
*/
const indentSelection = ({ state, dispatch }) => {
    if (state.readOnly)
        return false;
    let updated = Object.create(null);
    let context = new language.IndentContext(state, { overrideIndentation: start => {
            let found = updated[start];
            return found == null ? -1 : found;
        } });
    let changes = changeBySelectedLine(state, (line, changes, range) => {
        let indent = language.getIndentation(context, line.from);
        if (indent == null)
            return;
        if (!/\S/.test(line.text))
            indent = 0;
        let cur = /^\s*/.exec(line.text)[0];
        let norm = language.indentString(state, indent);
        if (cur != norm || range.from < line.from + cur.length) {
            updated[line.from] = indent;
            changes.push({ from: line.from, to: line.from + cur.length, insert: norm });
        }
    });
    if (!changes.changes.empty)
        dispatch(state.update(changes, { userEvent: "indent" }));
    return true;
};
/**
Add a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation to all selected
lines.
*/
const indentMore = ({ state, dispatch }) => {
    if (state.readOnly)
        return false;
    dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
        changes.push({ from: line.from, insert: state.facet(language.indentUnit) });
    }), { userEvent: "input.indent" }));
    return true;
};
/**
Remove a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation from all
selected lines.
*/
const indentLess = ({ state: state$1, dispatch }) => {
    if (state$1.readOnly)
        return false;
    dispatch(state$1.update(changeBySelectedLine(state$1, (line, changes) => {
        let space = /^\s*/.exec(line.text)[0];
        if (!space)
            return;
        let col = state.countColumn(space, state$1.tabSize), keep = 0;
        let insert = language.indentString(state$1, Math.max(0, col - language.getIndentUnit(state$1)));
        while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))
            keep++;
        changes.push({ from: line.from + keep, to: line.from + space.length, insert: insert.slice(keep) });
    }), { userEvent: "delete.dedent" }));
    return true;
};
/**
Enables or disables
[tab-focus mode](https://codemirror.net/6/docs/ref/#view.EditorView.setTabFocusMode). While on, this
prevents the editor's key bindings from capturing Tab or
Shift-Tab, making it possible for the user to move focus out of
the editor with the keyboard.
*/
const toggleTabFocusMode = view => {
    view.setTabFocusMode();
    return true;
};
/**
Temporarily enables [tab-focus
mode](https://codemirror.net/6/docs/ref/#view.EditorView.setTabFocusMode) for two seconds or until
another key is pressed.
*/
const temporarilySetTabFocusMode = view => {
    view.setTabFocusMode(2000);
    return true;
};
/**
Insert a tab character at the cursor or, if something is selected,
use [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore) to indent the entire
selection.
*/
const insertTab = ({ state, dispatch }) => {
    if (state.selection.ranges.some(r => !r.empty))
        return indentMore({ state, dispatch });
    dispatch(state.update(state.replaceSelection("\t"), { scrollIntoView: true, userEvent: "input" }));
    return true;
};
/**
Array of key bindings containing the Emacs-style bindings that are
available on macOS by default.

 - Ctrl-b: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - Ctrl-f: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-p: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - Ctrl-n: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Ctrl-a: [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Ctrl-e: [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - Ctrl-d: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-h: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
 - Ctrl-k: [`deleteToLineEnd`](https://codemirror.net/6/docs/ref/#commands.deleteToLineEnd)
 - Ctrl-Alt-h: [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-o: [`splitLine`](https://codemirror.net/6/docs/ref/#commands.splitLine)
 - Ctrl-t: [`transposeChars`](https://codemirror.net/6/docs/ref/#commands.transposeChars)
 - Ctrl-v: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown)
 - Alt-v: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp)
*/
const emacsStyleKeymap = [
    { key: "Ctrl-b", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Ctrl-f", run: cursorCharRight, shift: selectCharRight },
    { key: "Ctrl-p", run: cursorLineUp, shift: selectLineUp },
    { key: "Ctrl-n", run: cursorLineDown, shift: selectLineDown },
    { key: "Ctrl-a", run: cursorLineStart, shift: selectLineStart },
    { key: "Ctrl-e", run: cursorLineEnd, shift: selectLineEnd },
    { key: "Ctrl-d", run: deleteCharForward },
    { key: "Ctrl-h", run: deleteCharBackward },
    { key: "Ctrl-k", run: deleteToLineEnd },
    { key: "Ctrl-Alt-h", run: deleteGroupBackward },
    { key: "Ctrl-o", run: splitLine },
    { key: "Ctrl-t", run: transposeChars },
    { key: "Ctrl-v", run: cursorPageDown },
];
/**
An array of key bindings closely sticking to platform-standard or
widely used bindings. (This includes the bindings from
[`emacsStyleKeymap`](https://codemirror.net/6/docs/ref/#commands.emacsStyleKeymap), with their `key`
property changed to `mac`.)

 - ArrowLeft: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - ArrowRight: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): [`cursorGroupLeft`](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) ([`selectGroupLeft`](https://codemirror.net/6/docs/ref/#commands.selectGroupLeft) with Shift)
 - Ctrl-ArrowRight (Alt-ArrowRight on macOS): [`cursorGroupRight`](https://codemirror.net/6/docs/ref/#commands.cursorGroupRight) ([`selectGroupRight`](https://codemirror.net/6/docs/ref/#commands.selectGroupRight) with Shift)
 - Cmd-ArrowLeft (on macOS): [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Cmd-ArrowRight (on macOS): [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - ArrowUp: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - ArrowDown: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Cmd-ArrowUp (on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Cmd-ArrowDown (on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Ctrl-ArrowUp (on macOS): [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - Ctrl-ArrowDown (on macOS): [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - PageUp: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - PageDown: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - Home: [`cursorLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryBackward) ([`selectLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryBackward) with Shift)
 - End: [`cursorLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryForward) ([`selectLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryForward) with Shift)
 - Ctrl-Home (Cmd-Home on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Ctrl-End (Cmd-Home on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Enter and Shift-Enter: [`insertNewlineAndIndent`](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent)
 - Ctrl-a (Cmd-a on macOS): [`selectAll`](https://codemirror.net/6/docs/ref/#commands.selectAll)
 - Backspace: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
 - Delete: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-Backspace (Alt-Backspace on macOS): [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-Delete (Alt-Delete on macOS): [`deleteGroupForward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupForward)
 - Cmd-Backspace (macOS): [`deleteLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryBackward).
 - Cmd-Delete (macOS): [`deleteLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryForward).
*/
const standardKeymap = [
    { key: "ArrowLeft", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cursorGroupLeft, shift: selectGroupLeft, preventDefault: true },
    { mac: "Cmd-ArrowLeft", run: cursorLineBoundaryLeft, shift: selectLineBoundaryLeft, preventDefault: true },
    { key: "ArrowRight", run: cursorCharRight, shift: selectCharRight, preventDefault: true },
    { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: cursorGroupRight, shift: selectGroupRight, preventDefault: true },
    { mac: "Cmd-ArrowRight", run: cursorLineBoundaryRight, shift: selectLineBoundaryRight, preventDefault: true },
    { key: "ArrowUp", run: cursorLineUp, shift: selectLineUp, preventDefault: true },
    { mac: "Cmd-ArrowUp", run: cursorDocStart, shift: selectDocStart },
    { mac: "Ctrl-ArrowUp", run: cursorPageUp, shift: selectPageUp },
    { key: "ArrowDown", run: cursorLineDown, shift: selectLineDown, preventDefault: true },
    { mac: "Cmd-ArrowDown", run: cursorDocEnd, shift: selectDocEnd },
    { mac: "Ctrl-ArrowDown", run: cursorPageDown, shift: selectPageDown },
    { key: "PageUp", run: cursorPageUp, shift: selectPageUp },
    { key: "PageDown", run: cursorPageDown, shift: selectPageDown },
    { key: "Home", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward, preventDefault: true },
    { key: "Mod-Home", run: cursorDocStart, shift: selectDocStart },
    { key: "End", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward, preventDefault: true },
    { key: "Mod-End", run: cursorDocEnd, shift: selectDocEnd },
    { key: "Enter", run: insertNewlineAndIndent, shift: insertNewlineAndIndent },
    { key: "Mod-a", run: selectAll },
    { key: "Backspace", run: deleteCharBackward, shift: deleteCharBackward },
    { key: "Delete", run: deleteCharForward },
    { key: "Mod-Backspace", mac: "Alt-Backspace", run: deleteGroupBackward },
    { key: "Mod-Delete", mac: "Alt-Delete", run: deleteGroupForward },
    { mac: "Mod-Backspace", run: deleteLineBoundaryBackward },
    { mac: "Mod-Delete", run: deleteLineBoundaryForward }
].concat(emacsStyleKeymap.map(b => ({ mac: b.key, run: b.run, shift: b.shift })));
/**
The default keymap. Includes all bindings from
[`standardKeymap`](https://codemirror.net/6/docs/ref/#commands.standardKeymap) plus the following:

- Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): [`cursorSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxLeft) ([`selectSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxLeft) with Shift)
- Alt-ArrowRight (Ctrl-ArrowRight on macOS): [`cursorSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxRight) ([`selectSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxRight) with Shift)
- Alt-ArrowUp: [`moveLineUp`](https://codemirror.net/6/docs/ref/#commands.moveLineUp)
- Alt-ArrowDown: [`moveLineDown`](https://codemirror.net/6/docs/ref/#commands.moveLineDown)
- Shift-Alt-ArrowUp: [`copyLineUp`](https://codemirror.net/6/docs/ref/#commands.copyLineUp)
- Shift-Alt-ArrowDown: [`copyLineDown`](https://codemirror.net/6/docs/ref/#commands.copyLineDown)
- Escape: [`simplifySelection`](https://codemirror.net/6/docs/ref/#commands.simplifySelection)
- Ctrl-Enter (Cmd-Enter on macOS): [`insertBlankLine`](https://codemirror.net/6/docs/ref/#commands.insertBlankLine)
- Alt-l (Ctrl-l on macOS): [`selectLine`](https://codemirror.net/6/docs/ref/#commands.selectLine)
- Ctrl-i (Cmd-i on macOS): [`selectParentSyntax`](https://codemirror.net/6/docs/ref/#commands.selectParentSyntax)
- Ctrl-[ (Cmd-[ on macOS): [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess)
- Ctrl-] (Cmd-] on macOS): [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore)
- Ctrl-Alt-\\ (Cmd-Alt-\\ on macOS): [`indentSelection`](https://codemirror.net/6/docs/ref/#commands.indentSelection)
- Shift-Ctrl-k (Shift-Cmd-k on macOS): [`deleteLine`](https://codemirror.net/6/docs/ref/#commands.deleteLine)
- Shift-Ctrl-\\ (Shift-Cmd-\\ on macOS): [`cursorMatchingBracket`](https://codemirror.net/6/docs/ref/#commands.cursorMatchingBracket)
- Ctrl-/ (Cmd-/ on macOS): [`toggleComment`](https://codemirror.net/6/docs/ref/#commands.toggleComment).
- Shift-Alt-a: [`toggleBlockComment`](https://codemirror.net/6/docs/ref/#commands.toggleBlockComment).
- Ctrl-m (Alt-Shift-m on macOS): [`toggleTabFocusMode`](https://codemirror.net/6/docs/ref/#commands.toggleTabFocusMode).
*/
const defaultKeymap = [
    { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: cursorSyntaxLeft, shift: selectSyntaxLeft },
    { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: cursorSyntaxRight, shift: selectSyntaxRight },
    { key: "Alt-ArrowUp", run: moveLineUp },
    { key: "Shift-Alt-ArrowUp", run: copyLineUp },
    { key: "Alt-ArrowDown", run: moveLineDown },
    { key: "Shift-Alt-ArrowDown", run: copyLineDown },
    { key: "Escape", run: simplifySelection },
    { key: "Mod-Enter", run: insertBlankLine },
    { key: "Alt-l", mac: "Ctrl-l", run: selectLine },
    { key: "Mod-i", run: selectParentSyntax, preventDefault: true },
    { key: "Mod-[", run: indentLess },
    { key: "Mod-]", run: indentMore },
    { key: "Mod-Alt-\\", run: indentSelection },
    { key: "Shift-Mod-k", run: deleteLine },
    { key: "Shift-Mod-\\", run: cursorMatchingBracket },
    { key: "Mod-/", run: toggleComment },
    { key: "Alt-A", run: toggleBlockComment },
    { key: "Ctrl-m", mac: "Shift-Alt-m", run: toggleTabFocusMode },
].concat(standardKeymap);
/**
A binding that binds Tab to [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore) and
Shift-Tab to [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess).
Please see the [Tab example](../../examples/tab/) before using
this.
*/
const indentWithTab = { key: "Tab", run: indentMore, shift: indentLess };

exports.blockComment = blockComment;
exports.blockUncomment = blockUncomment;
exports.copyLineDown = copyLineDown;
exports.copyLineUp = copyLineUp;
exports.cursorCharBackward = cursorCharBackward;
exports.cursorCharBackwardLogical = cursorCharBackwardLogical;
exports.cursorCharForward = cursorCharForward;
exports.cursorCharForwardLogical = cursorCharForwardLogical;
exports.cursorCharLeft = cursorCharLeft;
exports.cursorCharRight = cursorCharRight;
exports.cursorDocEnd = cursorDocEnd;
exports.cursorDocStart = cursorDocStart;
exports.cursorGroupBackward = cursorGroupBackward;
exports.cursorGroupForward = cursorGroupForward;
exports.cursorGroupForwardWin = cursorGroupForwardWin;
exports.cursorGroupLeft = cursorGroupLeft;
exports.cursorGroupRight = cursorGroupRight;
exports.cursorLineBoundaryBackward = cursorLineBoundaryBackward;
exports.cursorLineBoundaryForward = cursorLineBoundaryForward;
exports.cursorLineBoundaryLeft = cursorLineBoundaryLeft;
exports.cursorLineBoundaryRight = cursorLineBoundaryRight;
exports.cursorLineDown = cursorLineDown;
exports.cursorLineEnd = cursorLineEnd;
exports.cursorLineStart = cursorLineStart;
exports.cursorLineUp = cursorLineUp;
exports.cursorMatchingBracket = cursorMatchingBracket;
exports.cursorPageDown = cursorPageDown;
exports.cursorPageUp = cursorPageUp;
exports.cursorSubwordBackward = cursorSubwordBackward;
exports.cursorSubwordForward = cursorSubwordForward;
exports.cursorSyntaxLeft = cursorSyntaxLeft;
exports.cursorSyntaxRight = cursorSyntaxRight;
exports.defaultKeymap = defaultKeymap;
exports.deleteCharBackward = deleteCharBackward;
exports.deleteCharBackwardStrict = deleteCharBackwardStrict;
exports.deleteCharForward = deleteCharForward;
exports.deleteGroupBackward = deleteGroupBackward;
exports.deleteGroupForward = deleteGroupForward;
exports.deleteLine = deleteLine;
exports.deleteLineBoundaryBackward = deleteLineBoundaryBackward;
exports.deleteLineBoundaryForward = deleteLineBoundaryForward;
exports.deleteToLineEnd = deleteToLineEnd;
exports.deleteToLineStart = deleteToLineStart;
exports.deleteTrailingWhitespace = deleteTrailingWhitespace;
exports.emacsStyleKeymap = emacsStyleKeymap;
exports.history = history;
exports.historyField = historyField;
exports.historyKeymap = historyKeymap;
exports.indentLess = indentLess;
exports.indentMore = indentMore;
exports.indentSelection = indentSelection;
exports.indentWithTab = indentWithTab;
exports.insertBlankLine = insertBlankLine;
exports.insertNewline = insertNewline;
exports.insertNewlineAndIndent = insertNewlineAndIndent;
exports.insertNewlineKeepIndent = insertNewlineKeepIndent;
exports.insertTab = insertTab;
exports.invertedEffects = invertedEffects;
exports.isolateHistory = isolateHistory;
exports.lineComment = lineComment;
exports.lineUncomment = lineUncomment;
exports.moveLineDown = moveLineDown;
exports.moveLineUp = moveLineUp;
exports.redo = redo;
exports.redoDepth = redoDepth;
exports.redoSelection = redoSelection;
exports.selectAll = selectAll;
exports.selectCharBackward = selectCharBackward;
exports.selectCharBackwardLogical = selectCharBackwardLogical;
exports.selectCharForward = selectCharForward;
exports.selectCharForwardLogical = selectCharForwardLogical;
exports.selectCharLeft = selectCharLeft;
exports.selectCharRight = selectCharRight;
exports.selectDocEnd = selectDocEnd;
exports.selectDocStart = selectDocStart;
exports.selectGroupBackward = selectGroupBackward;
exports.selectGroupForward = selectGroupForward;
exports.selectGroupForwardWin = selectGroupForwardWin;
exports.selectGroupLeft = selectGroupLeft;
exports.selectGroupRight = selectGroupRight;
exports.selectLine = selectLine;
exports.selectLineBoundaryBackward = selectLineBoundaryBackward;
exports.selectLineBoundaryForward = selectLineBoundaryForward;
exports.selectLineBoundaryLeft = selectLineBoundaryLeft;
exports.selectLineBoundaryRight = selectLineBoundaryRight;
exports.selectLineDown = selectLineDown;
exports.selectLineEnd = selectLineEnd;
exports.selectLineStart = selectLineStart;
exports.selectLineUp = selectLineUp;
exports.selectMatchingBracket = selectMatchingBracket;
exports.selectPageDown = selectPageDown;
exports.selectPageUp = selectPageUp;
exports.selectParentSyntax = selectParentSyntax;
exports.selectSubwordBackward = selectSubwordBackward;
exports.selectSubwordForward = selectSubwordForward;
exports.selectSyntaxLeft = selectSyntaxLeft;
exports.selectSyntaxRight = selectSyntaxRight;
exports.simplifySelection = simplifySelection;
exports.splitLine = splitLine;
exports.standardKeymap = standardKeymap;
exports.temporarilySetTabFocusMode = temporarilySetTabFocusMode;
exports.toggleBlockComment = toggleBlockComment;
exports.toggleBlockCommentByLine = toggleBlockCommentByLine;
exports.toggleComment = toggleComment;
exports.toggleLineComment = toggleLineComment;
exports.toggleTabFocusMode = toggleTabFocusMode;
exports.transposeChars = transposeChars;
exports.undo = undo;
exports.undoDepth = undoDepth;
exports.undoSelection = undoSelection;
