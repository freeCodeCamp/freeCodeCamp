import { Annotation, StateEffect, EditorSelection, codePointAt, codePointSize, fromCodePoint, Facet, combineConfig, StateField, Prec, Text, Transaction, MapMode, RangeValue, RangeSet, CharCategory } from '@codemirror/state';
import { Direction, logException, showTooltip, EditorView, ViewPlugin, getTooltip, Decoration, WidgetType, keymap } from '@codemirror/view';
import { syntaxTree, indentUnit } from '@codemirror/language';

/**
An instance of this is passed to completion source functions.
*/
class CompletionContext {
    /**
    Create a new completion context. (Mostly useful for testing
    completion sources—in the editor, the extension will create
    these for you.)
    */
    constructor(
    /**
    The editor state that the completion happens in.
    */
    state, 
    /**
    The position at which the completion is happening.
    */
    pos, 
    /**
    Indicates whether completion was activated explicitly, or
    implicitly by typing. The usual way to respond to this is to
    only return completions when either there is part of a
    completable entity before the cursor, or `explicit` is true.
    */
    explicit, 
    /**
    The editor view. May be undefined if the context was created
    in a situation where there is no such view available, such as
    in synchronous updates via
    [`CompletionResult.update`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.update)
    or when called by test code.
    */
    view) {
        this.state = state;
        this.pos = pos;
        this.explicit = explicit;
        this.view = view;
        /**
        @internal
        */
        this.abortListeners = [];
        /**
        @internal
        */
        this.abortOnDocChange = false;
    }
    /**
    Get the extent, content, and (if there is a token) type of the
    token before `this.pos`.
    */
    tokenBefore(types) {
        let token = syntaxTree(this.state).resolveInner(this.pos, -1);
        while (token && types.indexOf(token.name) < 0)
            token = token.parent;
        return token ? { from: token.from, to: this.pos,
            text: this.state.sliceDoc(token.from, this.pos),
            type: token.type } : null;
    }
    /**
    Get the match of the given expression directly before the
    cursor.
    */
    matchBefore(expr) {
        let line = this.state.doc.lineAt(this.pos);
        let start = Math.max(line.from, this.pos - 250);
        let str = line.text.slice(start - line.from, this.pos - line.from);
        let found = str.search(ensureAnchor(expr, false));
        return found < 0 ? null : { from: start + found, to: this.pos, text: str.slice(found) };
    }
    /**
    Yields true when the query has been aborted. Can be useful in
    asynchronous queries to avoid doing work that will be ignored.
    */
    get aborted() { return this.abortListeners == null; }
    /**
    Allows you to register abort handlers, which will be called when
    the query is
    [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
    
    By default, running queries will not be aborted for regular
    typing or backspacing, on the assumption that they are likely to
    return a result with a
    [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
    allows the result to be used after all. Passing `onDocChange:
    true` will cause this query to be aborted for any document
    change.
    */
    addEventListener(type, listener, options) {
        if (type == "abort" && this.abortListeners) {
            this.abortListeners.push(listener);
            if (options && options.onDocChange)
                this.abortOnDocChange = true;
        }
    }
}
function toSet(chars) {
    let flat = Object.keys(chars).join("");
    let words = /\w/.test(flat);
    if (words)
        flat = flat.replace(/\w/g, "");
    return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
}
function prefixMatch(options) {
    let first = Object.create(null), rest = Object.create(null);
    for (let { label } of options) {
        first[label[0]] = true;
        for (let i = 1; i < label.length; i++)
            rest[label[i]] = true;
    }
    let source = toSet(first) + toSet(rest) + "*$";
    return [new RegExp("^" + source), new RegExp(source)];
}
/**
Given a a fixed array of options, return an autocompleter that
completes them.
*/
function completeFromList(list) {
    let options = list.map(o => typeof o == "string" ? { label: o } : o);
    let [validFor, match] = options.every(o => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
    return (context) => {
        let token = context.matchBefore(match);
        return token || context.explicit ? { from: token ? token.from : context.pos, options, validFor } : null;
    };
}
/**
Wrap the given completion source so that it will only fire when the
cursor is in a syntax node with one of the given names.
*/
function ifIn(nodes, source) {
    return (context) => {
        for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
            if (nodes.indexOf(pos.name) > -1)
                return source(context);
            if (pos.type.isTop)
                break;
        }
        return null;
    };
}
/**
Wrap the given completion source so that it will not fire when the
cursor is in a syntax node with one of the given names.
*/
function ifNotIn(nodes, source) {
    return (context) => {
        for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
            if (nodes.indexOf(pos.name) > -1)
                return null;
            if (pos.type.isTop)
                break;
        }
        return source(context);
    };
}
class Option {
    constructor(completion, source, match, score) {
        this.completion = completion;
        this.source = source;
        this.match = match;
        this.score = score;
    }
}
function cur(state) { return state.selection.main.from; }
// Make sure the given regexp has a $ at its end and, if `start` is
// true, a ^ at its start.
function ensureAnchor(expr, start) {
    var _a;
    let { source } = expr;
    let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";
    if (!addStart && !addEnd)
        return expr;
    return new RegExp(`${addStart ? "^" : ""}(?:${source})${addEnd ? "$" : ""}`, (_a = expr.flags) !== null && _a !== void 0 ? _a : (expr.ignoreCase ? "i" : ""));
}
/**
This annotation is added to transactions that are produced by
picking a completion.
*/
const pickedCompletion = /*@__PURE__*/Annotation.define();
/**
Helper function that returns a transaction spec which inserts a
completion's text in the main selection range, and any other
selection range that has the same text in front of it.
*/
function insertCompletionText(state, text, from, to) {
    let { main } = state.selection, fromOff = from - main.from, toOff = to - main.from;
    return {
        ...state.changeByRange(range => {
            if (range != main && from != to &&
                state.sliceDoc(range.from + fromOff, range.from + toOff) != state.sliceDoc(from, to))
                return { range };
            let lines = state.toText(text);
            return {
                changes: { from: range.from + fromOff, to: to == main.from ? range.to : range.from + toOff, insert: lines },
                range: EditorSelection.cursor(range.from + fromOff + lines.length)
            };
        }),
        scrollIntoView: true,
        userEvent: "input.complete"
    };
}
const SourceCache = /*@__PURE__*/new WeakMap();
function asSource(source) {
    if (!Array.isArray(source))
        return source;
    let known = SourceCache.get(source);
    if (!known)
        SourceCache.set(source, known = completeFromList(source));
    return known;
}
const startCompletionEffect = /*@__PURE__*/StateEffect.define();
const closeCompletionEffect = /*@__PURE__*/StateEffect.define();

// A pattern matcher for fuzzy completion matching. Create an instance
// once for a pattern, and then use that to match any number of
// completions.
class FuzzyMatcher {
    constructor(pattern) {
        this.pattern = pattern;
        this.chars = [];
        this.folded = [];
        // Buffers reused by calls to `match` to track matched character
        // positions.
        this.any = [];
        this.precise = [];
        this.byWord = [];
        this.score = 0;
        this.matched = [];
        for (let p = 0; p < pattern.length;) {
            let char = codePointAt(pattern, p), size = codePointSize(char);
            this.chars.push(char);
            let part = pattern.slice(p, p + size), upper = part.toUpperCase();
            this.folded.push(codePointAt(upper == part ? part.toLowerCase() : upper, 0));
            p += size;
        }
        this.astral = pattern.length != this.chars.length;
    }
    ret(score, matched) {
        this.score = score;
        this.matched = matched;
        return this;
    }
    // Matches a given word (completion) against the pattern (input).
    // Will return a boolean indicating whether there was a match and,
    // on success, set `this.score` to the score, `this.matched` to an
    // array of `from, to` pairs indicating the matched parts of `word`.
    //
    // The score is a number that is more negative the worse the match
    // is. See `Penalty` above.
    match(word) {
        if (this.pattern.length == 0)
            return this.ret(-100 /* Penalty.NotFull */, []);
        if (word.length < this.pattern.length)
            return null;
        let { chars, folded, any, precise, byWord } = this;
        // For single-character queries, only match when they occur right
        // at the start
        if (chars.length == 1) {
            let first = codePointAt(word, 0), firstSize = codePointSize(first);
            let score = firstSize == word.length ? 0 : -100 /* Penalty.NotFull */;
            if (first == chars[0]) ;
            else if (first == folded[0])
                score += -200 /* Penalty.CaseFold */;
            else
                return null;
            return this.ret(score, [0, firstSize]);
        }
        let direct = word.indexOf(this.pattern);
        if (direct == 0)
            return this.ret(word.length == this.pattern.length ? 0 : -100 /* Penalty.NotFull */, [0, this.pattern.length]);
        let len = chars.length, anyTo = 0;
        if (direct < 0) {
            for (let i = 0, e = Math.min(word.length, 200); i < e && anyTo < len;) {
                let next = codePointAt(word, i);
                if (next == chars[anyTo] || next == folded[anyTo])
                    any[anyTo++] = i;
                i += codePointSize(next);
            }
            // No match, exit immediately
            if (anyTo < len)
                return null;
        }
        // This tracks the extent of the precise (non-folded, not
        // necessarily adjacent) match
        let preciseTo = 0;
        // Tracks whether there is a match that hits only characters that
        // appear to be starting words. `byWordFolded` is set to true when
        // a case folded character is encountered in such a match
        let byWordTo = 0, byWordFolded = false;
        // If we've found a partial adjacent match, these track its state
        let adjacentTo = 0, adjacentStart = -1, adjacentEnd = -1;
        let hasLower = /[a-z]/.test(word), wordAdjacent = true;
        // Go over the option's text, scanning for the various kinds of matches
        for (let i = 0, e = Math.min(word.length, 200), prevType = 0 /* Tp.NonWord */; i < e && byWordTo < len;) {
            let next = codePointAt(word, i);
            if (direct < 0) {
                if (preciseTo < len && next == chars[preciseTo])
                    precise[preciseTo++] = i;
                if (adjacentTo < len) {
                    if (next == chars[adjacentTo] || next == folded[adjacentTo]) {
                        if (adjacentTo == 0)
                            adjacentStart = i;
                        adjacentEnd = i + 1;
                        adjacentTo++;
                    }
                    else {
                        adjacentTo = 0;
                    }
                }
            }
            let ch, type = next < 0xff
                ? (next >= 48 && next <= 57 || next >= 97 && next <= 122 ? 2 /* Tp.Lower */ : next >= 65 && next <= 90 ? 1 /* Tp.Upper */ : 0 /* Tp.NonWord */)
                : ((ch = fromCodePoint(next)) != ch.toLowerCase() ? 1 /* Tp.Upper */ : ch != ch.toUpperCase() ? 2 /* Tp.Lower */ : 0 /* Tp.NonWord */);
            if (!i || type == 1 /* Tp.Upper */ && hasLower || prevType == 0 /* Tp.NonWord */ && type != 0 /* Tp.NonWord */) {
                if (chars[byWordTo] == next || (folded[byWordTo] == next && (byWordFolded = true)))
                    byWord[byWordTo++] = i;
                else if (byWord.length)
                    wordAdjacent = false;
            }
            prevType = type;
            i += codePointSize(next);
        }
        if (byWordTo == len && byWord[0] == 0 && wordAdjacent)
            return this.result(-100 /* Penalty.ByWord */ + (byWordFolded ? -200 /* Penalty.CaseFold */ : 0), byWord, word);
        if (adjacentTo == len && adjacentStart == 0)
            return this.ret(-200 /* Penalty.CaseFold */ - word.length + (adjacentEnd == word.length ? 0 : -100 /* Penalty.NotFull */), [0, adjacentEnd]);
        if (direct > -1)
            return this.ret(-700 /* Penalty.NotStart */ - word.length, [direct, direct + this.pattern.length]);
        if (adjacentTo == len)
            return this.ret(-200 /* Penalty.CaseFold */ + -700 /* Penalty.NotStart */ - word.length, [adjacentStart, adjacentEnd]);
        if (byWordTo == len)
            return this.result(-100 /* Penalty.ByWord */ + (byWordFolded ? -200 /* Penalty.CaseFold */ : 0) + -700 /* Penalty.NotStart */ +
                (wordAdjacent ? 0 : -1100 /* Penalty.Gap */), byWord, word);
        return chars.length == 2 ? null
            : this.result((any[0] ? -700 /* Penalty.NotStart */ : 0) + -200 /* Penalty.CaseFold */ + -1100 /* Penalty.Gap */, any, word);
    }
    result(score, positions, word) {
        let result = [], i = 0;
        for (let pos of positions) {
            let to = pos + (this.astral ? codePointSize(codePointAt(word, pos)) : 1);
            if (i && result[i - 1] == pos)
                result[i - 1] = to;
            else {
                result[i++] = pos;
                result[i++] = to;
            }
        }
        return this.ret(score - word.length, result);
    }
}
class StrictMatcher {
    constructor(pattern) {
        this.pattern = pattern;
        this.matched = [];
        this.score = 0;
        this.folded = pattern.toLowerCase();
    }
    match(word) {
        if (word.length < this.pattern.length)
            return null;
        let start = word.slice(0, this.pattern.length);
        let match = start == this.pattern ? 0 : start.toLowerCase() == this.folded ? -200 /* Penalty.CaseFold */ : null;
        if (match == null)
            return null;
        this.matched = [0, start.length];
        this.score = match + (word.length == this.pattern.length ? 0 : -100 /* Penalty.NotFull */);
        return this;
    }
}

const completionConfig = /*@__PURE__*/Facet.define({
    combine(configs) {
        return combineConfig(configs, {
            activateOnTyping: true,
            activateOnCompletion: () => false,
            activateOnTypingDelay: 100,
            selectOnOpen: true,
            override: null,
            closeOnBlur: true,
            maxRenderedOptions: 100,
            defaultKeymap: true,
            tooltipClass: () => "",
            optionClass: () => "",
            aboveCursor: false,
            icons: true,
            addToOptions: [],
            positionInfo: defaultPositionInfo,
            filterStrict: false,
            compareCompletions: (a, b) => a.label.localeCompare(b.label),
            interactionDelay: 75,
            updateSyncTime: 100
        }, {
            defaultKeymap: (a, b) => a && b,
            closeOnBlur: (a, b) => a && b,
            icons: (a, b) => a && b,
            tooltipClass: (a, b) => c => joinClass(a(c), b(c)),
            optionClass: (a, b) => c => joinClass(a(c), b(c)),
            addToOptions: (a, b) => a.concat(b),
            filterStrict: (a, b) => a || b,
        });
    }
});
function joinClass(a, b) {
    return a ? b ? a + " " + b : a : b;
}
function defaultPositionInfo(view, list, option, info, space, tooltip) {
    let rtl = view.textDirection == Direction.RTL, left = rtl, narrow = false;
    let side = "top", offset, maxWidth;
    let spaceLeft = list.left - space.left, spaceRight = space.right - list.right;
    let infoWidth = info.right - info.left, infoHeight = info.bottom - info.top;
    if (left && spaceLeft < Math.min(infoWidth, spaceRight))
        left = false;
    else if (!left && spaceRight < Math.min(infoWidth, spaceLeft))
        left = true;
    if (infoWidth <= (left ? spaceLeft : spaceRight)) {
        offset = Math.max(space.top, Math.min(option.top, space.bottom - infoHeight)) - list.top;
        maxWidth = Math.min(400 /* Info.Width */, left ? spaceLeft : spaceRight);
    }
    else {
        narrow = true;
        maxWidth = Math.min(400 /* Info.Width */, (rtl ? list.right : space.right - list.left) - 30 /* Info.Margin */);
        let spaceBelow = space.bottom - list.bottom;
        if (spaceBelow >= infoHeight || spaceBelow > list.top) { // Below the completion
            offset = option.bottom - list.top;
        }
        else { // Above it
            side = "bottom";
            offset = list.bottom - option.top;
        }
    }
    let scaleY = (list.bottom - list.top) / tooltip.offsetHeight;
    let scaleX = (list.right - list.left) / tooltip.offsetWidth;
    return {
        style: `${side}: ${offset / scaleY}px; max-width: ${maxWidth / scaleX}px`,
        class: "cm-completionInfo-" + (narrow ? (rtl ? "left-narrow" : "right-narrow") : left ? "left" : "right")
    };
}

function optionContent(config) {
    let content = config.addToOptions.slice();
    if (config.icons)
        content.push({
            render(completion) {
                let icon = document.createElement("div");
                icon.classList.add("cm-completionIcon");
                if (completion.type)
                    icon.classList.add(...completion.type.split(/\s+/g).map(cls => "cm-completionIcon-" + cls));
                icon.setAttribute("aria-hidden", "true");
                return icon;
            },
            position: 20
        });
    content.push({
        render(completion, _s, _v, match) {
            let labelElt = document.createElement("span");
            labelElt.className = "cm-completionLabel";
            let label = completion.displayLabel || completion.label, off = 0;
            for (let j = 0; j < match.length;) {
                let from = match[j++], to = match[j++];
                if (from > off)
                    labelElt.appendChild(document.createTextNode(label.slice(off, from)));
                let span = labelElt.appendChild(document.createElement("span"));
                span.appendChild(document.createTextNode(label.slice(from, to)));
                span.className = "cm-completionMatchedText";
                off = to;
            }
            if (off < label.length)
                labelElt.appendChild(document.createTextNode(label.slice(off)));
            return labelElt;
        },
        position: 50
    }, {
        render(completion) {
            if (!completion.detail)
                return null;
            let detailElt = document.createElement("span");
            detailElt.className = "cm-completionDetail";
            detailElt.textContent = completion.detail;
            return detailElt;
        },
        position: 80
    });
    return content.sort((a, b) => a.position - b.position).map(a => a.render);
}
function rangeAroundSelected(total, selected, max) {
    if (total <= max)
        return { from: 0, to: total };
    if (selected < 0)
        selected = 0;
    if (selected <= (total >> 1)) {
        let off = Math.floor(selected / max);
        return { from: off * max, to: (off + 1) * max };
    }
    let off = Math.floor((total - selected) / max);
    return { from: total - (off + 1) * max, to: total - off * max };
}
class CompletionTooltip {
    constructor(view, stateField, applyCompletion) {
        this.view = view;
        this.stateField = stateField;
        this.applyCompletion = applyCompletion;
        this.info = null;
        this.infoDestroy = null;
        this.placeInfoReq = {
            read: () => this.measureInfo(),
            write: (pos) => this.placeInfo(pos),
            key: this
        };
        this.space = null;
        this.currentClass = "";
        let cState = view.state.field(stateField);
        let { options, selected } = cState.open;
        let config = view.state.facet(completionConfig);
        this.optionContent = optionContent(config);
        this.optionClass = config.optionClass;
        this.tooltipClass = config.tooltipClass;
        this.range = rangeAroundSelected(options.length, selected, config.maxRenderedOptions);
        this.dom = document.createElement("div");
        this.dom.className = "cm-tooltip-autocomplete";
        this.updateTooltipClass(view.state);
        this.dom.addEventListener("mousedown", (e) => {
            let { options } = view.state.field(stateField).open;
            for (let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode) {
                if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {
                    this.applyCompletion(view, options[+match[1]]);
                    e.preventDefault();
                    return;
                }
            }
        });
        this.dom.addEventListener("focusout", (e) => {
            let state = view.state.field(this.stateField, false);
            if (state && state.tooltip && view.state.facet(completionConfig).closeOnBlur &&
                e.relatedTarget != view.contentDOM)
                view.dispatch({ effects: closeCompletionEffect.of(null) });
        });
        this.showOptions(options, cState.id);
    }
    mount() { this.updateSel(); }
    showOptions(options, id) {
        if (this.list)
            this.list.remove();
        this.list = this.dom.appendChild(this.createListBox(options, id, this.range));
        this.list.addEventListener("scroll", () => {
            if (this.info)
                this.view.requestMeasure(this.placeInfoReq);
        });
    }
    update(update) {
        var _a;
        let cState = update.state.field(this.stateField);
        let prevState = update.startState.field(this.stateField);
        this.updateTooltipClass(update.state);
        if (cState != prevState) {
            let { options, selected, disabled } = cState.open;
            if (!prevState.open || prevState.open.options != options) {
                this.range = rangeAroundSelected(options.length, selected, update.state.facet(completionConfig).maxRenderedOptions);
                this.showOptions(options, cState.id);
            }
            this.updateSel();
            if (disabled != ((_a = prevState.open) === null || _a === void 0 ? void 0 : _a.disabled))
                this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!disabled);
        }
    }
    updateTooltipClass(state) {
        let cls = this.tooltipClass(state);
        if (cls != this.currentClass) {
            for (let c of this.currentClass.split(" "))
                if (c)
                    this.dom.classList.remove(c);
            for (let c of cls.split(" "))
                if (c)
                    this.dom.classList.add(c);
            this.currentClass = cls;
        }
    }
    positioned(space) {
        this.space = space;
        if (this.info)
            this.view.requestMeasure(this.placeInfoReq);
    }
    updateSel() {
        let cState = this.view.state.field(this.stateField), open = cState.open;
        if (open.selected > -1 && open.selected < this.range.from || open.selected >= this.range.to) {
            this.range = rangeAroundSelected(open.options.length, open.selected, this.view.state.facet(completionConfig).maxRenderedOptions);
            this.showOptions(open.options, cState.id);
        }
        if (this.updateSelectedOption(open.selected)) {
            this.destroyInfo();
            let { completion } = open.options[open.selected];
            let { info } = completion;
            if (!info)
                return;
            let infoResult = typeof info === "string" ? document.createTextNode(info) : info(completion);
            if (!infoResult)
                return;
            if ("then" in infoResult) {
                infoResult.then(obj => {
                    if (obj && this.view.state.field(this.stateField, false) == cState)
                        this.addInfoPane(obj, completion);
                }).catch(e => logException(this.view.state, e, "completion info"));
            }
            else {
                this.addInfoPane(infoResult, completion);
            }
        }
    }
    addInfoPane(content, completion) {
        this.destroyInfo();
        let wrap = this.info = document.createElement("div");
        wrap.className = "cm-tooltip cm-completionInfo";
        if (content.nodeType != null) {
            wrap.appendChild(content);
            this.infoDestroy = null;
        }
        else {
            let { dom, destroy } = content;
            wrap.appendChild(dom);
            this.infoDestroy = destroy || null;
        }
        this.dom.appendChild(wrap);
        this.view.requestMeasure(this.placeInfoReq);
    }
    updateSelectedOption(selected) {
        let set = null;
        for (let opt = this.list.firstChild, i = this.range.from; opt; opt = opt.nextSibling, i++) {
            if (opt.nodeName != "LI" || !opt.id) {
                i--; // A section header
            }
            else if (i == selected) {
                if (!opt.hasAttribute("aria-selected")) {
                    opt.setAttribute("aria-selected", "true");
                    set = opt;
                }
            }
            else {
                if (opt.hasAttribute("aria-selected"))
                    opt.removeAttribute("aria-selected");
            }
        }
        if (set)
            scrollIntoView(this.list, set);
        return set;
    }
    measureInfo() {
        let sel = this.dom.querySelector("[aria-selected]");
        if (!sel || !this.info)
            return null;
        let listRect = this.dom.getBoundingClientRect();
        let infoRect = this.info.getBoundingClientRect();
        let selRect = sel.getBoundingClientRect();
        let space = this.space;
        if (!space) {
            let docElt = this.dom.ownerDocument.documentElement;
            space = { left: 0, top: 0, right: docElt.clientWidth, bottom: docElt.clientHeight };
        }
        if (selRect.top > Math.min(space.bottom, listRect.bottom) - 10 ||
            selRect.bottom < Math.max(space.top, listRect.top) + 10)
            return null;
        return this.view.state.facet(completionConfig).positionInfo(this.view, listRect, selRect, infoRect, space, this.dom);
    }
    placeInfo(pos) {
        if (this.info) {
            if (pos) {
                if (pos.style)
                    this.info.style.cssText = pos.style;
                this.info.className = "cm-tooltip cm-completionInfo " + (pos.class || "");
            }
            else {
                this.info.style.cssText = "top: -1e6px";
            }
        }
    }
    createListBox(options, id, range) {
        const ul = document.createElement("ul");
        ul.id = id;
        ul.setAttribute("role", "listbox");
        ul.setAttribute("aria-expanded", "true");
        ul.setAttribute("aria-label", this.view.state.phrase("Completions"));
        ul.addEventListener("mousedown", e => {
            // Prevent focus change when clicking the scrollbar
            if (e.target == ul)
                e.preventDefault();
        });
        let curSection = null;
        for (let i = range.from; i < range.to; i++) {
            let { completion, match } = options[i], { section } = completion;
            if (section) {
                let name = typeof section == "string" ? section : section.name;
                if (name != curSection && (i > range.from || range.from == 0)) {
                    curSection = name;
                    if (typeof section != "string" && section.header) {
                        ul.appendChild(section.header(section));
                    }
                    else {
                        let header = ul.appendChild(document.createElement("completion-section"));
                        header.textContent = name;
                    }
                }
            }
            const li = ul.appendChild(document.createElement("li"));
            li.id = id + "-" + i;
            li.setAttribute("role", "option");
            let cls = this.optionClass(completion);
            if (cls)
                li.className = cls;
            for (let source of this.optionContent) {
                let node = source(completion, this.view.state, this.view, match);
                if (node)
                    li.appendChild(node);
            }
        }
        if (range.from)
            ul.classList.add("cm-completionListIncompleteTop");
        if (range.to < options.length)
            ul.classList.add("cm-completionListIncompleteBottom");
        return ul;
    }
    destroyInfo() {
        if (this.info) {
            if (this.infoDestroy)
                this.infoDestroy();
            this.info.remove();
            this.info = null;
        }
    }
    destroy() {
        this.destroyInfo();
    }
}
function completionTooltip(stateField, applyCompletion) {
    return (view) => new CompletionTooltip(view, stateField, applyCompletion);
}
function scrollIntoView(container, element) {
    let parent = container.getBoundingClientRect();
    let self = element.getBoundingClientRect();
    let scaleY = parent.height / container.offsetHeight;
    if (self.top < parent.top)
        container.scrollTop -= (parent.top - self.top) / scaleY;
    else if (self.bottom > parent.bottom)
        container.scrollTop += (self.bottom - parent.bottom) / scaleY;
}

// Used to pick a preferred option when two options with the same
// label occur in the result.
function score(option) {
    return (option.boost || 0) * 100 + (option.apply ? 10 : 0) + (option.info ? 5 : 0) +
        (option.type ? 1 : 0);
}
function sortOptions(active, state) {
    let options = [];
    let sections = null, dynamicSectionScore = null;
    let addOption = (option) => {
        options.push(option);
        let { section } = option.completion;
        if (section) {
            if (!sections)
                sections = [];
            let name = typeof section == "string" ? section : section.name;
            if (!sections.some(s => s.name == name))
                sections.push(typeof section == "string" ? { name } : section);
        }
    };
    let conf = state.facet(completionConfig);
    for (let a of active)
        if (a.hasResult()) {
            let getMatch = a.result.getMatch;
            if (a.result.filter === false) {
                for (let option of a.result.options) {
                    addOption(new Option(option, a.source, getMatch ? getMatch(option) : [], 1e9 - options.length));
                }
            }
            else {
                let pattern = state.sliceDoc(a.from, a.to), match;
                let matcher = conf.filterStrict ? new StrictMatcher(pattern) : new FuzzyMatcher(pattern);
                for (let option of a.result.options)
                    if (match = matcher.match(option.label)) {
                        let matched = !option.displayLabel ? match.matched : getMatch ? getMatch(option, match.matched) : [];
                        let score = match.score + (option.boost || 0);
                        addOption(new Option(option, a.source, matched, score));
                        if (typeof option.section == "object" && option.section.rank === "dynamic") {
                            let { name } = option.section;
                            if (!dynamicSectionScore)
                                dynamicSectionScore = Object.create(null);
                            dynamicSectionScore[name] = Math.max(score, dynamicSectionScore[name] || -1e9);
                        }
                    }
            }
        }
    if (sections) {
        let sectionOrder = Object.create(null), pos = 0;
        let cmp = (a, b) => {
            return (a.rank === "dynamic" && b.rank === "dynamic" ? dynamicSectionScore[b.name] - dynamicSectionScore[a.name] : 0) ||
                (typeof a.rank == "number" ? a.rank : 1e9) - (typeof b.rank == "number" ? b.rank : 1e9) ||
                (a.name < b.name ? -1 : 1);
        };
        for (let s of sections.sort(cmp)) {
            pos -= 1e5;
            sectionOrder[s.name] = pos;
        }
        for (let option of options) {
            let { section } = option.completion;
            if (section)
                option.score += sectionOrder[typeof section == "string" ? section : section.name];
        }
    }
    let result = [], prev = null;
    let compare = conf.compareCompletions;
    for (let opt of options.sort((a, b) => (b.score - a.score) || compare(a.completion, b.completion))) {
        let cur = opt.completion;
        if (!prev || prev.label != cur.label || prev.detail != cur.detail ||
            (prev.type != null && cur.type != null && prev.type != cur.type) ||
            prev.apply != cur.apply || prev.boost != cur.boost)
            result.push(opt);
        else if (score(opt.completion) > score(prev))
            result[result.length - 1] = opt;
        prev = opt.completion;
    }
    return result;
}
class CompletionDialog {
    constructor(options, attrs, tooltip, timestamp, selected, disabled) {
        this.options = options;
        this.attrs = attrs;
        this.tooltip = tooltip;
        this.timestamp = timestamp;
        this.selected = selected;
        this.disabled = disabled;
    }
    setSelected(selected, id) {
        return selected == this.selected || selected >= this.options.length ? this
            : new CompletionDialog(this.options, makeAttrs(id, selected), this.tooltip, this.timestamp, selected, this.disabled);
    }
    static build(active, state, id, prev, conf, didSetActive) {
        if (prev && !didSetActive && active.some(s => s.isPending))
            return prev.setDisabled();
        let options = sortOptions(active, state);
        if (!options.length)
            return prev && active.some(a => a.isPending) ? prev.setDisabled() : null;
        let selected = state.facet(completionConfig).selectOnOpen ? 0 : -1;
        if (prev && prev.selected != selected && prev.selected != -1) {
            let selectedValue = prev.options[prev.selected].completion;
            for (let i = 0; i < options.length; i++)
                if (options[i].completion == selectedValue) {
                    selected = i;
                    break;
                }
        }
        return new CompletionDialog(options, makeAttrs(id, selected), {
            pos: active.reduce((a, b) => b.hasResult() ? Math.min(a, b.from) : a, 1e8),
            create: createTooltip,
            above: conf.aboveCursor,
        }, prev ? prev.timestamp : Date.now(), selected, false);
    }
    map(changes) {
        return new CompletionDialog(this.options, this.attrs, { ...this.tooltip, pos: changes.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
        return new CompletionDialog(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
    }
}
class CompletionState {
    constructor(active, id, open) {
        this.active = active;
        this.id = id;
        this.open = open;
    }
    static start() {
        return new CompletionState(none, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(tr) {
        let { state } = tr, conf = state.facet(completionConfig);
        let sources = conf.override ||
            state.languageDataAt("autocomplete", cur(state)).map(asSource);
        let active = sources.map(source => {
            let value = this.active.find(s => s.source == source) ||
                new ActiveSource(source, this.active.some(a => a.state != 0 /* State.Inactive */) ? 1 /* State.Pending */ : 0 /* State.Inactive */);
            return value.update(tr, conf);
        });
        if (active.length == this.active.length && active.every((a, i) => a == this.active[i]))
            active = this.active;
        let open = this.open, didSet = tr.effects.some(e => e.is(setActiveEffect));
        if (open && tr.docChanged)
            open = open.map(tr.changes);
        if (tr.selection || active.some(a => a.hasResult() && tr.changes.touchesRange(a.from, a.to)) ||
            !sameResults(active, this.active) || didSet)
            open = CompletionDialog.build(active, state, this.id, open, conf, didSet);
        else if (open && open.disabled && !active.some(a => a.isPending))
            open = null;
        if (!open && active.every(a => !a.isPending) && active.some(a => a.hasResult()))
            active = active.map(a => a.hasResult() ? new ActiveSource(a.source, 0 /* State.Inactive */) : a);
        for (let effect of tr.effects)
            if (effect.is(setSelectedEffect))
                open = open && open.setSelected(effect.value, this.id);
        return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);
    }
    get tooltip() { return this.open ? this.open.tooltip : null; }
    get attrs() { return this.open ? this.open.attrs : this.active.length ? baseAttrs : noAttrs; }
}
function sameResults(a, b) {
    if (a == b)
        return true;
    for (let iA = 0, iB = 0;;) {
        while (iA < a.length && !a[iA].hasResult())
            iA++;
        while (iB < b.length && !b[iB].hasResult())
            iB++;
        let endA = iA == a.length, endB = iB == b.length;
        if (endA || endB)
            return endA == endB;
        if (a[iA++].result != b[iB++].result)
            return false;
    }
}
const baseAttrs = {
    "aria-autocomplete": "list"
};
const noAttrs = {};
function makeAttrs(id, selected) {
    let result = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": id
    };
    if (selected > -1)
        result["aria-activedescendant"] = id + "-" + selected;
    return result;
}
const none = [];
function getUpdateType(tr, conf) {
    if (tr.isUserEvent("input.complete")) {
        let completion = tr.annotation(pickedCompletion);
        if (completion && conf.activateOnCompletion(completion))
            return 4 /* UpdateType.Activate */ | 8 /* UpdateType.Reset */;
    }
    let typing = tr.isUserEvent("input.type");
    return typing && conf.activateOnTyping ? 4 /* UpdateType.Activate */ | 1 /* UpdateType.Typing */
        : typing ? 1 /* UpdateType.Typing */
            : tr.isUserEvent("delete.backward") ? 2 /* UpdateType.Backspacing */
                : tr.selection ? 8 /* UpdateType.Reset */
                    : tr.docChanged ? 16 /* UpdateType.ResetIfTouching */ : 0 /* UpdateType.None */;
}
class ActiveSource {
    constructor(source, state, explicit = false) {
        this.source = source;
        this.state = state;
        this.explicit = explicit;
    }
    hasResult() { return false; }
    get isPending() { return this.state == 1 /* State.Pending */; }
    update(tr, conf) {
        let type = getUpdateType(tr, conf), value = this;
        if ((type & 8 /* UpdateType.Reset */) || (type & 16 /* UpdateType.ResetIfTouching */) && this.touches(tr))
            value = new ActiveSource(value.source, 0 /* State.Inactive */);
        if ((type & 4 /* UpdateType.Activate */) && value.state == 0 /* State.Inactive */)
            value = new ActiveSource(this.source, 1 /* State.Pending */);
        value = value.updateFor(tr, type);
        for (let effect of tr.effects) {
            if (effect.is(startCompletionEffect))
                value = new ActiveSource(value.source, 1 /* State.Pending */, effect.value);
            else if (effect.is(closeCompletionEffect))
                value = new ActiveSource(value.source, 0 /* State.Inactive */);
            else if (effect.is(setActiveEffect))
                for (let active of effect.value)
                    if (active.source == value.source)
                        value = active;
        }
        return value;
    }
    updateFor(tr, type) { return this.map(tr.changes); }
    map(changes) { return this; }
    touches(tr) {
        return tr.changes.touchesRange(cur(tr.state));
    }
}
class ActiveResult extends ActiveSource {
    constructor(source, explicit, limit, result, from, to) {
        super(source, 3 /* State.Result */, explicit);
        this.limit = limit;
        this.result = result;
        this.from = from;
        this.to = to;
    }
    hasResult() { return true; }
    updateFor(tr, type) {
        var _a;
        if (!(type & 3 /* UpdateType.SimpleInteraction */))
            return this.map(tr.changes);
        let result = this.result;
        if (result.map && !tr.changes.empty)
            result = result.map(result, tr.changes);
        let from = tr.changes.mapPos(this.from), to = tr.changes.mapPos(this.to, 1);
        let pos = cur(tr.state);
        if (pos > to || !result ||
            (type & 2 /* UpdateType.Backspacing */) && (cur(tr.startState) == this.from || pos < this.limit))
            return new ActiveSource(this.source, type & 4 /* UpdateType.Activate */ ? 1 /* State.Pending */ : 0 /* State.Inactive */);
        let limit = tr.changes.mapPos(this.limit);
        if (checkValid(result.validFor, tr.state, from, to))
            return new ActiveResult(this.source, this.explicit, limit, result, from, to);
        if (result.update &&
            (result = result.update(result, from, to, new CompletionContext(tr.state, pos, false))))
            return new ActiveResult(this.source, this.explicit, limit, result, result.from, (_a = result.to) !== null && _a !== void 0 ? _a : cur(tr.state));
        return new ActiveSource(this.source, 1 /* State.Pending */, this.explicit);
    }
    map(mapping) {
        if (mapping.empty)
            return this;
        let result = this.result.map ? this.result.map(this.result, mapping) : this.result;
        if (!result)
            return new ActiveSource(this.source, 0 /* State.Inactive */);
        return new ActiveResult(this.source, this.explicit, mapping.mapPos(this.limit), this.result, mapping.mapPos(this.from), mapping.mapPos(this.to, 1));
    }
    touches(tr) {
        return tr.changes.touchesRange(this.from, this.to);
    }
}
function checkValid(validFor, state, from, to) {
    if (!validFor)
        return false;
    let text = state.sliceDoc(from, to);
    return typeof validFor == "function" ? validFor(text, from, to, state) : ensureAnchor(validFor, true).test(text);
}
const setActiveEffect = /*@__PURE__*/StateEffect.define({
    map(sources, mapping) { return sources.map(s => s.map(mapping)); }
});
const setSelectedEffect = /*@__PURE__*/StateEffect.define();
const completionState = /*@__PURE__*/StateField.define({
    create() { return CompletionState.start(); },
    update(value, tr) { return value.update(tr); },
    provide: f => [
        showTooltip.from(f, val => val.tooltip),
        EditorView.contentAttributes.from(f, state => state.attrs)
    ]
});
function applyCompletion(view, option) {
    const apply = option.completion.apply || option.completion.label;
    let result = view.state.field(completionState).active.find(a => a.source == option.source);
    if (!(result instanceof ActiveResult))
        return false;
    if (typeof apply == "string")
        view.dispatch({
            ...insertCompletionText(view.state, apply, result.from, result.to),
            annotations: pickedCompletion.of(option.completion)
        });
    else
        apply(view, option.completion, result.from, result.to);
    return true;
}
const createTooltip = /*@__PURE__*/completionTooltip(completionState, applyCompletion);

/**
Returns a command that moves the completion selection forward or
backward by the given amount.
*/
function moveCompletionSelection(forward, by = "option") {
    return (view) => {
        let cState = view.state.field(completionState, false);
        if (!cState || !cState.open || cState.open.disabled ||
            Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay)
            return false;
        let step = 1, tooltip;
        if (by == "page" && (tooltip = getTooltip(view, cState.open.tooltip)))
            step = Math.max(2, Math.floor(tooltip.dom.offsetHeight /
                tooltip.dom.querySelector("li").offsetHeight) - 1);
        let { length } = cState.open.options;
        let selected = cState.open.selected > -1 ? cState.open.selected + step * (forward ? 1 : -1) : forward ? 0 : length - 1;
        if (selected < 0)
            selected = by == "page" ? 0 : length - 1;
        else if (selected >= length)
            selected = by == "page" ? length - 1 : 0;
        view.dispatch({ effects: setSelectedEffect.of(selected) });
        return true;
    };
}
/**
Accept the current completion.
*/
const acceptCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (view.state.readOnly || !cState || !cState.open || cState.open.selected < 0 || cState.open.disabled ||
        Date.now() - cState.open.timestamp < view.state.facet(completionConfig).interactionDelay)
        return false;
    return applyCompletion(view, cState.open.options[cState.open.selected]);
};
/**
Explicitly start autocompletion.
*/
const startCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (!cState)
        return false;
    view.dispatch({ effects: startCompletionEffect.of(true) });
    return true;
};
/**
Close the currently active completion.
*/
const closeCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (!cState || !cState.active.some(a => a.state != 0 /* State.Inactive */))
        return false;
    view.dispatch({ effects: closeCompletionEffect.of(null) });
    return true;
};
class RunningQuery {
    constructor(active, context) {
        this.active = active;
        this.context = context;
        this.time = Date.now();
        this.updates = [];
        // Note that 'undefined' means 'not done yet', whereas 'null' means
        // 'query returned null'.
        this.done = undefined;
    }
}
const MaxUpdateCount = 50, MinAbortTime = 1000;
const completionPlugin = /*@__PURE__*/ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.debounceUpdate = -1;
        this.running = [];
        this.debounceAccept = -1;
        this.pendingStart = false;
        this.composing = 0 /* CompositionState.None */;
        for (let active of view.state.field(completionState).active)
            if (active.isPending)
                this.startQuery(active);
    }
    update(update) {
        let cState = update.state.field(completionState);
        let conf = update.state.facet(completionConfig);
        if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState)
            return;
        let doesReset = update.transactions.some(tr => {
            let type = getUpdateType(tr, conf);
            return (type & 8 /* UpdateType.Reset */) || (tr.selection || tr.docChanged) && !(type & 3 /* UpdateType.SimpleInteraction */);
        });
        for (let i = 0; i < this.running.length; i++) {
            let query = this.running[i];
            if (doesReset ||
                query.context.abortOnDocChange && update.docChanged ||
                query.updates.length + update.transactions.length > MaxUpdateCount && Date.now() - query.time > MinAbortTime) {
                for (let handler of query.context.abortListeners) {
                    try {
                        handler();
                    }
                    catch (e) {
                        logException(this.view.state, e);
                    }
                }
                query.context.abortListeners = null;
                this.running.splice(i--, 1);
            }
            else {
                query.updates.push(...update.transactions);
            }
        }
        if (this.debounceUpdate > -1)
            clearTimeout(this.debounceUpdate);
        if (update.transactions.some(tr => tr.effects.some(e => e.is(startCompletionEffect))))
            this.pendingStart = true;
        let delay = this.pendingStart ? 50 : conf.activateOnTypingDelay;
        this.debounceUpdate = cState.active.some(a => a.isPending && !this.running.some(q => q.active.source == a.source))
            ? setTimeout(() => this.startUpdate(), delay) : -1;
        if (this.composing != 0 /* CompositionState.None */)
            for (let tr of update.transactions) {
                if (tr.isUserEvent("input.type"))
                    this.composing = 2 /* CompositionState.Changed */;
                else if (this.composing == 2 /* CompositionState.Changed */ && tr.selection)
                    this.composing = 3 /* CompositionState.ChangedAndMoved */;
            }
    }
    startUpdate() {
        this.debounceUpdate = -1;
        this.pendingStart = false;
        let { state } = this.view, cState = state.field(completionState);
        for (let active of cState.active) {
            if (active.isPending && !this.running.some(r => r.active.source == active.source))
                this.startQuery(active);
        }
        if (this.running.length && cState.open && cState.open.disabled)
            this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
    }
    startQuery(active) {
        let { state } = this.view, pos = cur(state);
        let context = new CompletionContext(state, pos, active.explicit, this.view);
        let pending = new RunningQuery(active, context);
        this.running.push(pending);
        Promise.resolve(active.source(context)).then(result => {
            if (!pending.context.aborted) {
                pending.done = result || null;
                this.scheduleAccept();
            }
        }, err => {
            this.view.dispatch({ effects: closeCompletionEffect.of(null) });
            logException(this.view.state, err);
        });
    }
    scheduleAccept() {
        if (this.running.every(q => q.done !== undefined))
            this.accept();
        else if (this.debounceAccept < 0)
            this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(completionConfig).updateSyncTime);
    }
    // For each finished query in this.running, try to create a result
    // or, if appropriate, restart the query.
    accept() {
        var _a;
        if (this.debounceAccept > -1)
            clearTimeout(this.debounceAccept);
        this.debounceAccept = -1;
        let updated = [];
        let conf = this.view.state.facet(completionConfig), cState = this.view.state.field(completionState);
        for (let i = 0; i < this.running.length; i++) {
            let query = this.running[i];
            if (query.done === undefined)
                continue;
            this.running.splice(i--, 1);
            if (query.done) {
                let pos = cur(query.updates.length ? query.updates[0].startState : this.view.state);
                let limit = Math.min(pos, query.done.from + (query.active.explicit ? 0 : 1));
                let active = new ActiveResult(query.active.source, query.active.explicit, limit, query.done, query.done.from, (_a = query.done.to) !== null && _a !== void 0 ? _a : pos);
                // Replay the transactions that happened since the start of
                // the request and see if that preserves the result
                for (let tr of query.updates)
                    active = active.update(tr, conf);
                if (active.hasResult()) {
                    updated.push(active);
                    continue;
                }
            }
            let current = cState.active.find(a => a.source == query.active.source);
            if (current && current.isPending) {
                if (query.done == null) {
                    // Explicitly failed. Should clear the pending status if it
                    // hasn't been re-set in the meantime.
                    let active = new ActiveSource(query.active.source, 0 /* State.Inactive */);
                    for (let tr of query.updates)
                        active = active.update(tr, conf);
                    if (!active.isPending)
                        updated.push(active);
                }
                else {
                    // Cleared by subsequent transactions. Restart.
                    this.startQuery(current);
                }
            }
        }
        if (updated.length || cState.open && cState.open.disabled)
            this.view.dispatch({ effects: setActiveEffect.of(updated) });
    }
}, {
    eventHandlers: {
        blur(event) {
            let state = this.view.state.field(completionState, false);
            if (state && state.tooltip && this.view.state.facet(completionConfig).closeOnBlur) {
                let dialog = state.open && getTooltip(this.view, state.open.tooltip);
                if (!dialog || !dialog.dom.contains(event.relatedTarget))
                    setTimeout(() => this.view.dispatch({ effects: closeCompletionEffect.of(null) }), 10);
            }
        },
        compositionstart() {
            this.composing = 1 /* CompositionState.Started */;
        },
        compositionend() {
            if (this.composing == 3 /* CompositionState.ChangedAndMoved */) {
                // Safari fires compositionend events synchronously, possibly
                // from inside an update, so dispatch asynchronously to avoid reentrancy
                setTimeout(() => this.view.dispatch({ effects: startCompletionEffect.of(false) }), 20);
            }
            this.composing = 0 /* CompositionState.None */;
        }
    }
});
const windows = typeof navigator == "object" && /*@__PURE__*//Win/.test(navigator.platform);
const commitCharacters = /*@__PURE__*/Prec.highest(/*@__PURE__*/EditorView.domEventHandlers({
    keydown(event, view) {
        let field = view.state.field(completionState, false);
        if (!field || !field.open || field.open.disabled || field.open.selected < 0 ||
            event.key.length > 1 || event.ctrlKey && !(windows && event.altKey) || event.metaKey)
            return false;
        let option = field.open.options[field.open.selected];
        let result = field.active.find(a => a.source == option.source);
        let commitChars = option.completion.commitCharacters || result.result.commitCharacters;
        if (commitChars && commitChars.indexOf(event.key) > -1)
            applyCompletion(view, option);
        return false;
    }
}));

const baseTheme = /*@__PURE__*/EditorView.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
        "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "hidden auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            minWidth: "250px",
            maxHeight: "10em",
            height: "100%",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li, & > completion-section": {
                padding: "1px 3px",
                lineHeight: 1.2
            },
            "& > li": {
                overflowX: "hidden",
                textOverflow: "ellipsis",
                cursor: "pointer"
            },
            "& > completion-section": {
                display: "list-item",
                borderBottom: "1px solid silver",
                paddingLeft: "0.5em",
                opacity: 0.7
            }
        }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#17c",
        color: "white",
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
        background: "#777",
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#347",
        color: "white",
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
        background: "#444",
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
        content: '"···"',
        opacity: 0.5,
        display: "block",
        textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
        position: "absolute",
        padding: "3px 9px",
        width: "max-content",
        maxWidth: `${400 /* Info.Width */}px`,
        boxSizing: "border-box",
        whiteSpace: "pre-line"
    },
    ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
    ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
    ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30 /* Info.Margin */}px` },
    ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30 /* Info.Margin */}px` },
    "&light .cm-snippetField": { backgroundColor: "#00000022" },
    "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
    ".cm-snippetFieldPosition": {
        verticalAlign: "text-top",
        width: 0,
        height: "1.15em",
        display: "inline-block",
        margin: "0 -0.7px -.7em",
        borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
        textDecoration: "underline"
    },
    ".cm-completionDetail": {
        marginLeft: "0.5em",
        fontStyle: "italic"
    },
    ".cm-completionIcon": {
        fontSize: "90%",
        width: ".8em",
        display: "inline-block",
        textAlign: "center",
        paddingRight: ".6em",
        opacity: "0.6",
        boxSizing: "content-box"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
        "&:after": { content: "'ƒ'" }
    },
    ".cm-completionIcon-class": {
        "&:after": { content: "'○'" }
    },
    ".cm-completionIcon-interface": {
        "&:after": { content: "'◌'" }
    },
    ".cm-completionIcon-variable": {
        "&:after": { content: "'𝑥'" }
    },
    ".cm-completionIcon-constant": {
        "&:after": { content: "'𝐶'" }
    },
    ".cm-completionIcon-type": {
        "&:after": { content: "'𝑡'" }
    },
    ".cm-completionIcon-enum": {
        "&:after": { content: "'∪'" }
    },
    ".cm-completionIcon-property": {
        "&:after": { content: "'□'" }
    },
    ".cm-completionIcon-keyword": {
        "&:after": { content: "'🔑\uFE0E'" } // Disable emoji rendering
    },
    ".cm-completionIcon-namespace": {
        "&:after": { content: "'▢'" }
    },
    ".cm-completionIcon-text": {
        "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
    }
});

class FieldPos {
    constructor(field, line, from, to) {
        this.field = field;
        this.line = line;
        this.from = from;
        this.to = to;
    }
}
class FieldRange {
    constructor(field, from, to) {
        this.field = field;
        this.from = from;
        this.to = to;
    }
    map(changes) {
        let from = changes.mapPos(this.from, -1, MapMode.TrackDel);
        let to = changes.mapPos(this.to, 1, MapMode.TrackDel);
        return from == null || to == null ? null : new FieldRange(this.field, from, to);
    }
}
class Snippet {
    constructor(lines, fieldPositions) {
        this.lines = lines;
        this.fieldPositions = fieldPositions;
    }
    instantiate(state, pos) {
        let text = [], lineStart = [pos];
        let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
        for (let line of this.lines) {
            if (text.length) {
                let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
                for (let i = 0; i < tabs; i++)
                    indent += state.facet(indentUnit);
                lineStart.push(pos + indent.length - tabs);
                line = indent + line.slice(tabs);
            }
            text.push(line);
            pos += line.length + 1;
        }
        let ranges = this.fieldPositions.map(pos => new FieldRange(pos.field, lineStart[pos.line] + pos.from, lineStart[pos.line] + pos.to));
        return { text, ranges };
    }
    static parse(template) {
        let fields = [];
        let lines = [], positions = [], m;
        for (let line of template.split(/\r\n?|\n/)) {
            while (m = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(line)) {
                let seq = m[1] ? +m[1] : null, rawName = m[2] || m[3] || "", found = -1;
                let name = rawName.replace(/\\[{}]/g, m => m[1]);
                for (let i = 0; i < fields.length; i++) {
                    if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false)
                        found = i;
                }
                if (found < 0) {
                    let i = 0;
                    while (i < fields.length && (seq == null || (fields[i].seq != null && fields[i].seq < seq)))
                        i++;
                    fields.splice(i, 0, { seq, name });
                    found = i;
                    for (let pos of positions)
                        if (pos.field >= found)
                            pos.field++;
                }
                for (let pos of positions)
                    if (pos.line == lines.length && pos.from > m.index) {
                        let snip = m[2] ? 3 + (m[1] || "").length : 2;
                        pos.from -= snip;
                        pos.to -= snip;
                    }
                positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
                line = line.slice(0, m.index) + rawName + line.slice(m.index + m[0].length);
            }
            line = line.replace(/\\([{}])/g, (_, brace, index) => {
                for (let pos of positions)
                    if (pos.line == lines.length && pos.from > index) {
                        pos.from--;
                        pos.to--;
                    }
                return brace;
            });
            lines.push(line);
        }
        return new Snippet(lines, positions);
    }
}
let fieldMarker = /*@__PURE__*/Decoration.widget({ widget: /*@__PURE__*/new class extends WidgetType {
        toDOM() {
            let span = document.createElement("span");
            span.className = "cm-snippetFieldPosition";
            return span;
        }
        ignoreEvent() { return false; }
    } });
let fieldRange = /*@__PURE__*/Decoration.mark({ class: "cm-snippetField" });
class ActiveSnippet {
    constructor(ranges, active) {
        this.ranges = ranges;
        this.active = active;
        this.deco = Decoration.set(ranges.map(r => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)), true);
    }
    map(changes) {
        let ranges = [];
        for (let r of this.ranges) {
            let mapped = r.map(changes);
            if (!mapped)
                return null;
            ranges.push(mapped);
        }
        return new ActiveSnippet(ranges, this.active);
    }
    selectionInsideField(sel) {
        return sel.ranges.every(range => this.ranges.some(r => r.field == this.active && r.from <= range.from && r.to >= range.to));
    }
}
const setActive = /*@__PURE__*/StateEffect.define({
    map(value, changes) { return value && value.map(changes); }
});
const moveToField = /*@__PURE__*/StateEffect.define();
const snippetState = /*@__PURE__*/StateField.define({
    create() { return null; },
    update(value, tr) {
        for (let effect of tr.effects) {
            if (effect.is(setActive))
                return effect.value;
            if (effect.is(moveToField) && value)
                return new ActiveSnippet(value.ranges, effect.value);
        }
        if (value && tr.docChanged)
            value = value.map(tr.changes);
        if (value && tr.selection && !value.selectionInsideField(tr.selection))
            value = null;
        return value;
    },
    provide: f => EditorView.decorations.from(f, val => val ? val.deco : Decoration.none)
});
function fieldSelection(ranges, field) {
    return EditorSelection.create(ranges.filter(r => r.field == field).map(r => EditorSelection.range(r.from, r.to)));
}
/**
Convert a snippet template to a function that can
[apply](https://codemirror.net/6/docs/ref/#autocomplete.Completion.apply) it. Snippets are written
using syntax like this:

    "for (let ${index} = 0; ${index} < ${end}; ${index}++) {\n\t${}\n}"

Each `${}` placeholder (you may also use `#{}`) indicates a field
that the user can fill in. Its name, if any, will be the default
content for the field.

When the snippet is activated by calling the returned function,
the code is inserted at the given position. Newlines in the
template are indented by the indentation of the start line, plus
one [indent unit](https://codemirror.net/6/docs/ref/#language.indentUnit) per tab character after
the newline.

On activation, (all instances of) the first field are selected.
The user can move between fields with Tab and Shift-Tab as long as
the fields are active. Moving to the last field or moving the
cursor out of the current field deactivates the fields.

The order of fields defaults to textual order, but you can add
numbers to placeholders (`${1}` or `${1:defaultText}`) to provide
a custom order.

To include a literal `{` or `}` in your template, put a backslash
in front of it. This will be removed and the brace will not be
interpreted as indicating a placeholder.
*/
function snippet(template) {
    let snippet = Snippet.parse(template);
    return (editor, completion, from, to) => {
        let { text, ranges } = snippet.instantiate(editor.state, from);
        let { main } = editor.state.selection;
        let spec = {
            changes: { from, to: to == main.from ? main.to : to, insert: Text.of(text) },
            scrollIntoView: true,
            annotations: completion ? [pickedCompletion.of(completion), Transaction.userEvent.of("input.complete")] : undefined
        };
        if (ranges.length)
            spec.selection = fieldSelection(ranges, 0);
        if (ranges.some(r => r.field > 0)) {
            let active = new ActiveSnippet(ranges, 0);
            let effects = spec.effects = [setActive.of(active)];
            if (editor.state.field(snippetState, false) === undefined)
                effects.push(StateEffect.appendConfig.of([snippetState, addSnippetKeymap, snippetPointerHandler, baseTheme]));
        }
        editor.dispatch(editor.state.update(spec));
    };
}
function moveField(dir) {
    return ({ state, dispatch }) => {
        let active = state.field(snippetState, false);
        if (!active || dir < 0 && active.active == 0)
            return false;
        let next = active.active + dir, last = dir > 0 && !active.ranges.some(r => r.field == next + dir);
        dispatch(state.update({
            selection: fieldSelection(active.ranges, next),
            effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next)),
            scrollIntoView: true
        }));
        return true;
    };
}
/**
A command that clears the active snippet, if any.
*/
const clearSnippet = ({ state, dispatch }) => {
    let active = state.field(snippetState, false);
    if (!active)
        return false;
    dispatch(state.update({ effects: setActive.of(null) }));
    return true;
};
/**
Move to the next snippet field, if available.
*/
const nextSnippetField = /*@__PURE__*/moveField(1);
/**
Move to the previous snippet field, if available.
*/
const prevSnippetField = /*@__PURE__*/moveField(-1);
/**
Check if there is an active snippet with a next field for
`nextSnippetField` to move to.
*/
function hasNextSnippetField(state) {
    let active = state.field(snippetState, false);
    return !!(active && active.ranges.some(r => r.field == active.active + 1));
}
/**
Returns true if there is an active snippet and a previous field
for `prevSnippetField` to move to.
*/
function hasPrevSnippetField(state) {
    let active = state.field(snippetState, false);
    return !!(active && active.active > 0);
}
const defaultSnippetKeymap = [
    { key: "Tab", run: nextSnippetField, shift: prevSnippetField },
    { key: "Escape", run: clearSnippet }
];
/**
A facet that can be used to configure the key bindings used by
snippets. The default binds Tab to
[`nextSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.nextSnippetField), Shift-Tab to
[`prevSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.prevSnippetField), and Escape
to [`clearSnippet`](https://codemirror.net/6/docs/ref/#autocomplete.clearSnippet).
*/
const snippetKeymap = /*@__PURE__*/Facet.define({
    combine(maps) { return maps.length ? maps[0] : defaultSnippetKeymap; }
});
const addSnippetKeymap = /*@__PURE__*/Prec.highest(/*@__PURE__*/keymap.compute([snippetKeymap], state => state.facet(snippetKeymap)));
/**
Create a completion from a snippet. Returns an object with the
properties from `completion`, plus an `apply` function that
applies the snippet.
*/
function snippetCompletion(template, completion) {
    return { ...completion, apply: snippet(template) };
}
const snippetPointerHandler = /*@__PURE__*/EditorView.domEventHandlers({
    mousedown(event, view) {
        let active = view.state.field(snippetState, false), pos;
        if (!active || (pos = view.posAtCoords({ x: event.clientX, y: event.clientY })) == null)
            return false;
        let match = active.ranges.find(r => r.from <= pos && r.to >= pos);
        if (!match || match.field == active.active)
            return false;
        view.dispatch({
            selection: fieldSelection(active.ranges, match.field),
            effects: setActive.of(active.ranges.some(r => r.field > match.field)
                ? new ActiveSnippet(active.ranges, match.field) : null),
            scrollIntoView: true
        });
        return true;
    }
});

function wordRE(wordChars) {
    let escaped = wordChars.replace(/[\]\-\\]/g, "\\$&");
    try {
        return new RegExp(`[\\p{Alphabetic}\\p{Number}_${escaped}]+`, "ug");
    }
    catch (_a) {
        return new RegExp(`[\w${escaped}]`, "g");
    }
}
function mapRE(re, f) {
    return new RegExp(f(re.source), re.unicode ? "u" : "");
}
const wordCaches = /*@__PURE__*/Object.create(null);
function wordCache(wordChars) {
    return wordCaches[wordChars] || (wordCaches[wordChars] = new WeakMap);
}
function storeWords(doc, wordRE, result, seen, ignoreAt) {
    for (let lines = doc.iterLines(), pos = 0; !lines.next().done;) {
        let { value } = lines, m;
        wordRE.lastIndex = 0;
        while (m = wordRE.exec(value)) {
            if (!seen[m[0]] && pos + m.index != ignoreAt) {
                result.push({ type: "text", label: m[0] });
                seen[m[0]] = true;
                if (result.length >= 2000 /* C.MaxList */)
                    return;
            }
        }
        pos += value.length + 1;
    }
}
function collectWords(doc, cache, wordRE, to, ignoreAt) {
    let big = doc.length >= 1000 /* C.MinCacheLen */;
    let cached = big && cache.get(doc);
    if (cached)
        return cached;
    let result = [], seen = Object.create(null);
    if (doc.children) {
        let pos = 0;
        for (let ch of doc.children) {
            if (ch.length >= 1000 /* C.MinCacheLen */) {
                for (let c of collectWords(ch, cache, wordRE, to - pos, ignoreAt - pos)) {
                    if (!seen[c.label]) {
                        seen[c.label] = true;
                        result.push(c);
                    }
                }
            }
            else {
                storeWords(ch, wordRE, result, seen, ignoreAt - pos);
            }
            pos += ch.length + 1;
        }
    }
    else {
        storeWords(doc, wordRE, result, seen, ignoreAt);
    }
    if (big && result.length < 2000 /* C.MaxList */)
        cache.set(doc, result);
    return result;
}
/**
A completion source that will scan the document for words (using a
[character categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer)), and
return those as completions.
*/
const completeAnyWord = context => {
    let wordChars = context.state.languageDataAt("wordChars", context.pos).join("");
    let re = wordRE(wordChars);
    let token = context.matchBefore(mapRE(re, s => s + "$"));
    if (!token && !context.explicit)
        return null;
    let from = token ? token.from : context.pos;
    let options = collectWords(context.state.doc, wordCache(wordChars), re, 50000 /* C.Range */, from);
    return { from, options, validFor: mapRE(re, s => "^" + s) };
};

const defaults = {
    brackets: ["(", "[", "{", "'", '"'],
    before: ")]}:;>",
    stringPrefixes: []
};
const closeBracketEffect = /*@__PURE__*/StateEffect.define({
    map(value, mapping) {
        let mapped = mapping.mapPos(value, -1, MapMode.TrackAfter);
        return mapped == null ? undefined : mapped;
    }
});
const closedBracket = /*@__PURE__*/new class extends RangeValue {
};
closedBracket.startSide = 1;
closedBracket.endSide = -1;
const bracketState = /*@__PURE__*/StateField.define({
    create() { return RangeSet.empty; },
    update(value, tr) {
        value = value.map(tr.changes);
        if (tr.selection) {
            let line = tr.state.doc.lineAt(tr.selection.main.head);
            value = value.update({ filter: from => from >= line.from && from <= line.to });
        }
        for (let effect of tr.effects)
            if (effect.is(closeBracketEffect))
                value = value.update({ add: [closedBracket.range(effect.value, effect.value + 1)] });
        return value;
    }
});
/**
Extension to enable bracket-closing behavior. When a closeable
bracket is typed, its closing bracket is immediately inserted
after the cursor. When closing a bracket directly in front of a
closing bracket inserted by the extension, the cursor moves over
that bracket.
*/
function closeBrackets() {
    return [inputHandler, bracketState];
}
const definedClosing = "()[]{}<>«»»«［］｛｝";
function closing(ch) {
    for (let i = 0; i < definedClosing.length; i += 2)
        if (definedClosing.charCodeAt(i) == ch)
            return definedClosing.charAt(i + 1);
    return fromCodePoint(ch < 128 ? ch : ch + 1);
}
function config(state, pos) {
    return state.languageDataAt("closeBrackets", pos)[0] || defaults;
}
const android = typeof navigator == "object" && /*@__PURE__*//Android\b/.test(navigator.userAgent);
const inputHandler = /*@__PURE__*/EditorView.inputHandler.of((view, from, to, insert) => {
    if ((android ? view.composing : view.compositionStarted) || view.state.readOnly)
        return false;
    let sel = view.state.selection.main;
    if (insert.length > 2 || insert.length == 2 && codePointSize(codePointAt(insert, 0)) == 1 ||
        from != sel.from || to != sel.to)
        return false;
    let tr = insertBracket(view.state, insert);
    if (!tr)
        return false;
    view.dispatch(tr);
    return true;
});
/**
Command that implements deleting a pair of matching brackets when
the cursor is between them.
*/
const deleteBracketPair = ({ state, dispatch }) => {
    if (state.readOnly)
        return false;
    let conf = config(state, state.selection.main.head);
    let tokens = conf.brackets || defaults.brackets;
    let dont = null, changes = state.changeByRange(range => {
        if (range.empty) {
            let before = prevChar(state.doc, range.head);
            for (let token of tokens) {
                if (token == before && nextChar(state.doc, range.head) == closing(codePointAt(token, 0)))
                    return { changes: { from: range.head - token.length, to: range.head + token.length },
                        range: EditorSelection.cursor(range.head - token.length) };
            }
        }
        return { range: dont = range };
    });
    if (!dont)
        dispatch(state.update(changes, { scrollIntoView: true, userEvent: "delete.backward" }));
    return !dont;
};
/**
Close-brackets related key bindings. Binds Backspace to
[`deleteBracketPair`](https://codemirror.net/6/docs/ref/#autocomplete.deleteBracketPair).
*/
const closeBracketsKeymap = [
    { key: "Backspace", run: deleteBracketPair }
];
/**
Implements the extension's behavior on text insertion. If the
given string counts as a bracket in the language around the
selection, and replacing the selection with it requires custom
behavior (inserting a closing version or skipping past a
previously-closed bracket), this function returns a transaction
representing that custom behavior. (You only need this if you want
to programmatically insert brackets—the
[`closeBrackets`](https://codemirror.net/6/docs/ref/#autocomplete.closeBrackets) extension will
take care of running this for user input.)
*/
function insertBracket(state, bracket) {
    let conf = config(state, state.selection.main.head);
    let tokens = conf.brackets || defaults.brackets;
    for (let tok of tokens) {
        let closed = closing(codePointAt(tok, 0));
        if (bracket == tok)
            return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf)
                : handleOpen(state, tok, closed, conf.before || defaults.before);
        if (bracket == closed && closedBracketAt(state, state.selection.main.from))
            return handleClose(state, tok, closed);
    }
    return null;
}
function closedBracketAt(state, pos) {
    let found = false;
    state.field(bracketState).between(0, state.doc.length, from => {
        if (from == pos)
            found = true;
    });
    return found;
}
function nextChar(doc, pos) {
    let next = doc.sliceString(pos, pos + 2);
    return next.slice(0, codePointSize(codePointAt(next, 0)));
}
function prevChar(doc, pos) {
    let prev = doc.sliceString(pos - 2, pos);
    return codePointSize(codePointAt(prev, 0)) == prev.length ? prev : prev.slice(1);
}
function handleOpen(state, open, close, closeBefore) {
    let dont = null, changes = state.changeByRange(range => {
        if (!range.empty)
            return { changes: [{ insert: open, from: range.from }, { insert: close, from: range.to }],
                effects: closeBracketEffect.of(range.to + open.length),
                range: EditorSelection.range(range.anchor + open.length, range.head + open.length) };
        let next = nextChar(state.doc, range.head);
        if (!next || /\s/.test(next) || closeBefore.indexOf(next) > -1)
            return { changes: { insert: open + close, from: range.head },
                effects: closeBracketEffect.of(range.head + open.length),
                range: EditorSelection.cursor(range.head + open.length) };
        return { range: dont = range };
    });
    return dont ? null : state.update(changes, {
        scrollIntoView: true,
        userEvent: "input.type"
    });
}
function handleClose(state, _open, close) {
    let dont = null, changes = state.changeByRange(range => {
        if (range.empty && nextChar(state.doc, range.head) == close)
            return { changes: { from: range.head, to: range.head + close.length, insert: close },
                range: EditorSelection.cursor(range.head + close.length) };
        return dont = { range };
    });
    return dont ? null : state.update(changes, {
        scrollIntoView: true,
        userEvent: "input.type"
    });
}
// Handles cases where the open and close token are the same, and
// possibly triple quotes (as in `"""abc"""`-style quoting).
function handleSame(state, token, allowTriple, config) {
    let stringPrefixes = config.stringPrefixes || defaults.stringPrefixes;
    let dont = null, changes = state.changeByRange(range => {
        if (!range.empty)
            return { changes: [{ insert: token, from: range.from }, { insert: token, from: range.to }],
                effects: closeBracketEffect.of(range.to + token.length),
                range: EditorSelection.range(range.anchor + token.length, range.head + token.length) };
        let pos = range.head, next = nextChar(state.doc, pos), start;
        if (next == token) {
            if (nodeStart(state, pos)) {
                return { changes: { insert: token + token, from: pos },
                    effects: closeBracketEffect.of(pos + token.length),
                    range: EditorSelection.cursor(pos + token.length) };
            }
            else if (closedBracketAt(state, pos)) {
                let isTriple = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token;
                let content = isTriple ? token + token + token : token;
                return { changes: { from: pos, to: pos + content.length, insert: content },
                    range: EditorSelection.cursor(pos + content.length) };
            }
        }
        else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token &&
            (start = canStartStringAt(state, pos - 2 * token.length, stringPrefixes)) > -1 &&
            nodeStart(state, start)) {
            return { changes: { insert: token + token + token + token, from: pos },
                effects: closeBracketEffect.of(pos + token.length),
                range: EditorSelection.cursor(pos + token.length) };
        }
        else if (state.charCategorizer(pos)(next) != CharCategory.Word) {
            if (canStartStringAt(state, pos, stringPrefixes) > -1 && !probablyInString(state, pos, token, stringPrefixes))
                return { changes: { insert: token + token, from: pos },
                    effects: closeBracketEffect.of(pos + token.length),
                    range: EditorSelection.cursor(pos + token.length) };
        }
        return { range: dont = range };
    });
    return dont ? null : state.update(changes, {
        scrollIntoView: true,
        userEvent: "input.type"
    });
}
function nodeStart(state, pos) {
    let tree = syntaxTree(state).resolveInner(pos + 1);
    return tree.parent && tree.from == pos;
}
function probablyInString(state, pos, quoteToken, prefixes) {
    let node = syntaxTree(state).resolveInner(pos, -1);
    let maxPrefix = prefixes.reduce((m, p) => Math.max(m, p.length), 0);
    for (let i = 0; i < 5; i++) {
        let start = state.sliceDoc(node.from, Math.min(node.to, node.from + quoteToken.length + maxPrefix));
        let quotePos = start.indexOf(quoteToken);
        if (!quotePos || quotePos > -1 && prefixes.indexOf(start.slice(0, quotePos)) > -1) {
            let first = node.firstChild;
            while (first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos) {
                if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken)
                    return false;
                first = first.firstChild;
            }
            return true;
        }
        let parent = node.to == pos && node.parent;
        if (!parent)
            break;
        node = parent;
    }
    return false;
}
function canStartStringAt(state, pos, prefixes) {
    let charCat = state.charCategorizer(pos);
    if (charCat(state.sliceDoc(pos - 1, pos)) != CharCategory.Word)
        return pos;
    for (let prefix of prefixes) {
        let start = pos - prefix.length;
        if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != CharCategory.Word)
            return start;
    }
    return -1;
}

/**
Returns an extension that enables autocompletion.
*/
function autocompletion(config = {}) {
    return [
        commitCharacters,
        completionState,
        completionConfig.of(config),
        completionPlugin,
        completionKeymapExt,
        baseTheme
    ];
}
/**
Basic keybindings for autocompletion.

 - Ctrl-Space (and Alt-\` or Alt-i on macOS): [`startCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.startCompletion)
 - Escape: [`closeCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.closeCompletion)
 - ArrowDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true)`
 - ArrowUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false)`
 - PageDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true, "page")`
 - PageUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false, "page")`
 - Enter: [`acceptCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.acceptCompletion)
*/
const completionKeymap = [
    { key: "Ctrl-Space", run: startCompletion },
    { mac: "Alt-`", run: startCompletion },
    { mac: "Alt-i", run: startCompletion },
    { key: "Escape", run: closeCompletion },
    { key: "ArrowDown", run: /*@__PURE__*/moveCompletionSelection(true) },
    { key: "ArrowUp", run: /*@__PURE__*/moveCompletionSelection(false) },
    { key: "PageDown", run: /*@__PURE__*/moveCompletionSelection(true, "page") },
    { key: "PageUp", run: /*@__PURE__*/moveCompletionSelection(false, "page") },
    { key: "Enter", run: acceptCompletion }
];
const completionKeymapExt = /*@__PURE__*/Prec.highest(/*@__PURE__*/keymap.computeN([completionConfig], state => state.facet(completionConfig).defaultKeymap ? [completionKeymap] : []));
/**
Get the current completion status. When completions are available,
this will return `"active"`. When completions are pending (in the
process of being queried), this returns `"pending"`. Otherwise, it
returns `null`.
*/
function completionStatus(state) {
    let cState = state.field(completionState, false);
    return cState && cState.active.some(a => a.isPending) ? "pending"
        : cState && cState.active.some(a => a.state != 0 /* State.Inactive */) ? "active" : null;
}
const completionArrayCache = /*@__PURE__*/new WeakMap;
/**
Returns the available completions as an array.
*/
function currentCompletions(state) {
    var _a;
    let open = (_a = state.field(completionState, false)) === null || _a === void 0 ? void 0 : _a.open;
    if (!open || open.disabled)
        return [];
    let completions = completionArrayCache.get(open.options);
    if (!completions)
        completionArrayCache.set(open.options, completions = open.options.map(o => o.completion));
    return completions;
}
/**
Return the currently selected completion, if any.
*/
function selectedCompletion(state) {
    var _a;
    let open = (_a = state.field(completionState, false)) === null || _a === void 0 ? void 0 : _a.open;
    return open && !open.disabled && open.selected >= 0 ? open.options[open.selected].completion : null;
}
/**
Returns the currently selected position in the active completion
list, or null if no completions are active.
*/
function selectedCompletionIndex(state) {
    var _a;
    let open = (_a = state.field(completionState, false)) === null || _a === void 0 ? void 0 : _a.open;
    return open && !open.disabled && open.selected >= 0 ? open.selected : null;
}
/**
Create an effect that can be attached to a transaction to change
the currently selected completion.
*/
function setSelectedCompletion(index) {
    return setSelectedEffect.of(index);
}

export { CompletionContext, acceptCompletion, autocompletion, clearSnippet, closeBrackets, closeBracketsKeymap, closeCompletion, completeAnyWord, completeFromList, completionKeymap, completionStatus, currentCompletions, deleteBracketPair, hasNextSnippetField, hasPrevSnippetField, ifIn, ifNotIn, insertBracket, insertCompletionText, moveCompletionSelection, nextSnippetField, pickedCompletion, prevSnippetField, selectedCompletion, selectedCompletionIndex, setSelectedCompletion, snippet, snippetCompletion, snippetKeymap, startCompletion };
