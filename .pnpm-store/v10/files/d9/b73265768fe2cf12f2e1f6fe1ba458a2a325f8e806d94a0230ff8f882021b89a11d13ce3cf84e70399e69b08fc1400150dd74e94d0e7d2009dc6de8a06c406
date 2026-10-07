import { Decoration, showPanel, EditorView, ViewPlugin, gutter, showTooltip, hoverTooltip, getPanel, logException, WidgetType, GutterMarker } from '@codemirror/view';
import { StateEffect, StateField, Facet, combineConfig, RangeSet, RangeSetBuilder } from '@codemirror/state';
import elt from 'crelt';

class SelectedDiagnostic {
    constructor(from, to, diagnostic) {
        this.from = from;
        this.to = to;
        this.diagnostic = diagnostic;
    }
}
class LintState {
    constructor(diagnostics, panel, selected) {
        this.diagnostics = diagnostics;
        this.panel = panel;
        this.selected = selected;
    }
    static init(diagnostics, panel, state) {
        // Filter the list of diagnostics for which to create markers
        let diagnosticFilter = state.facet(lintConfig).markerFilter;
        if (diagnosticFilter)
            diagnostics = diagnosticFilter(diagnostics, state);
        let sorted = diagnostics.slice().sort((a, b) => a.from - b.from || a.to - b.to);
        let deco = new RangeSetBuilder(), active = [], pos = 0;
        for (let i = 0;;) {
            let next = i == sorted.length ? null : sorted[i];
            if (!next && !active.length)
                break;
            let from, to;
            if (active.length) {
                from = pos;
                to = active.reduce((p, d) => Math.min(p, d.to), next && next.from > from ? next.from : 1e8);
            }
            else {
                from = next.from;
                to = next.to;
                active.push(next);
                i++;
            }
            while (i < sorted.length) {
                let next = sorted[i];
                if (next.from == from && (next.to > next.from || next.to == from)) {
                    active.push(next);
                    i++;
                    to = Math.min(next.to, to);
                }
                else {
                    to = Math.min(next.from, to);
                    break;
                }
            }
            let sev = maxSeverity(active);
            if (active.some(d => d.from == d.to || (d.from == d.to - 1 && state.doc.lineAt(d.from).to == d.from))) {
                deco.add(from, from, Decoration.widget({
                    widget: new DiagnosticWidget(sev),
                    diagnostics: active.slice()
                }));
            }
            else {
                let markClass = active.reduce((c, d) => d.markClass ? c + " " + d.markClass : c, "");
                deco.add(from, to, Decoration.mark({
                    class: "cm-lintRange cm-lintRange-" + sev + markClass,
                    diagnostics: active.slice(),
                    inclusiveEnd: active.some(a => a.to > to)
                }));
            }
            pos = to;
            for (let i = 0; i < active.length; i++)
                if (active[i].to <= pos)
                    active.splice(i--, 1);
        }
        let set = deco.finish();
        return new LintState(set, panel, findDiagnostic(set));
    }
}
function findDiagnostic(diagnostics, diagnostic = null, after = 0) {
    let found = null;
    diagnostics.between(after, 1e9, (from, to, { spec }) => {
        if (diagnostic && spec.diagnostics.indexOf(diagnostic) < 0)
            return;
        if (!found)
            found = new SelectedDiagnostic(from, to, diagnostic || spec.diagnostics[0]);
        else if (spec.diagnostics.indexOf(found.diagnostic) < 0)
            return false;
        else
            found = new SelectedDiagnostic(found.from, to, found.diagnostic);
    });
    return found;
}
function hideTooltip(tr, tooltip) {
    let from = tooltip.pos, to = tooltip.end || from;
    let result = tr.state.facet(lintConfig).hideOn(tr, from, to);
    if (result != null)
        return result;
    let line = tr.startState.doc.lineAt(tooltip.pos);
    return !!(tr.effects.some(e => e.is(setDiagnosticsEffect)) || tr.changes.touchesRange(line.from, Math.max(line.to, to)));
}
function maybeEnableLint(state, effects) {
    return state.field(lintState, false) ? effects : effects.concat(StateEffect.appendConfig.of(lintExtensions));
}
/**
Returns a transaction spec which updates the current set of
diagnostics, and enables the lint extension if if wasn't already
active.
*/
function setDiagnostics(state, diagnostics) {
    return {
        effects: maybeEnableLint(state, [setDiagnosticsEffect.of(diagnostics)])
    };
}
/**
The state effect that updates the set of active diagnostics. Can
be useful when writing an extension that needs to track these.
*/
const setDiagnosticsEffect = /*@__PURE__*/StateEffect.define();
const togglePanel = /*@__PURE__*/StateEffect.define();
const movePanelSelection = /*@__PURE__*/StateEffect.define();
const lintState = /*@__PURE__*/StateField.define({
    create() {
        return new LintState(Decoration.none, null, null);
    },
    update(value, tr) {
        if (tr.docChanged && value.diagnostics.size) {
            let mapped = value.diagnostics.map(tr.changes), selected = null, panel = value.panel;
            if (value.selected) {
                let selPos = tr.changes.mapPos(value.selected.from, 1);
                selected = findDiagnostic(mapped, value.selected.diagnostic, selPos) || findDiagnostic(mapped, null, selPos);
            }
            if (!mapped.size && panel && tr.state.facet(lintConfig).autoPanel)
                panel = null;
            value = new LintState(mapped, panel, selected);
        }
        for (let effect of tr.effects) {
            if (effect.is(setDiagnosticsEffect)) {
                let panel = !tr.state.facet(lintConfig).autoPanel ? value.panel : effect.value.length ? LintPanel.open : null;
                value = LintState.init(effect.value, panel, tr.state);
            }
            else if (effect.is(togglePanel)) {
                value = new LintState(value.diagnostics, effect.value ? LintPanel.open : null, value.selected);
            }
            else if (effect.is(movePanelSelection)) {
                value = new LintState(value.diagnostics, value.panel, effect.value);
            }
        }
        return value;
    },
    provide: f => [showPanel.from(f, val => val.panel),
        EditorView.decorations.from(f, s => s.diagnostics)]
});
/**
Returns the number of active lint diagnostics in the given state.
*/
function diagnosticCount(state) {
    let lint = state.field(lintState, false);
    return lint ? lint.diagnostics.size : 0;
}
const activeMark = /*@__PURE__*/Decoration.mark({ class: "cm-lintRange cm-lintRange-active" });
function lintTooltip(view, pos, side) {
    let { diagnostics } = view.state.field(lintState);
    let found, start = -1, end = -1;
    diagnostics.between(pos - (side < 0 ? 1 : 0), pos + (side > 0 ? 1 : 0), (from, to, { spec }) => {
        if (pos >= from && pos <= to &&
            (from == to || ((pos > from || side > 0) && (pos < to || side < 0)))) {
            found = spec.diagnostics;
            start = from;
            end = to;
            return false;
        }
    });
    let diagnosticFilter = view.state.facet(lintConfig).tooltipFilter;
    if (found && diagnosticFilter)
        found = diagnosticFilter(found, view.state);
    if (!found)
        return null;
    return {
        pos: start,
        end: end,
        above: view.state.doc.lineAt(start).to < end,
        create() {
            return { dom: diagnosticsTooltip(view, found) };
        }
    };
}
function diagnosticsTooltip(view, diagnostics) {
    return elt("ul", { class: "cm-tooltip-lint" }, diagnostics.map(d => renderDiagnostic(view, d, false)));
}
/**
Command to open and focus the lint panel.
*/
const openLintPanel = (view) => {
    let field = view.state.field(lintState, false);
    if (!field || !field.panel)
        view.dispatch({ effects: maybeEnableLint(view.state, [togglePanel.of(true)]) });
    let panel = getPanel(view, LintPanel.open);
    if (panel)
        panel.dom.querySelector(".cm-panel-lint ul").focus();
    return true;
};
/**
Command to close the lint panel, when open.
*/
const closeLintPanel = (view) => {
    let field = view.state.field(lintState, false);
    if (!field || !field.panel)
        return false;
    view.dispatch({ effects: togglePanel.of(false) });
    return true;
};
/**
Move the selection to the next diagnostic.
*/
const nextDiagnostic = (view) => {
    let field = view.state.field(lintState, false);
    if (!field)
        return false;
    let sel = view.state.selection.main, next = field.diagnostics.iter(sel.to + 1);
    if (!next.value) {
        next = field.diagnostics.iter(0);
        if (!next.value || next.from == sel.from && next.to == sel.to)
            return false;
    }
    view.dispatch({ selection: { anchor: next.from, head: next.to }, scrollIntoView: true });
    return true;
};
/**
Move the selection to the previous diagnostic.
*/
const previousDiagnostic = (view) => {
    let { state } = view, field = state.field(lintState, false);
    if (!field)
        return false;
    let sel = state.selection.main;
    let prevFrom, prevTo, lastFrom, lastTo;
    field.diagnostics.between(0, state.doc.length, (from, to) => {
        if (to < sel.to && (prevFrom == null || prevFrom < from)) {
            prevFrom = from;
            prevTo = to;
        }
        if (lastFrom == null || from > lastFrom) {
            lastFrom = from;
            lastTo = to;
        }
    });
    if (lastFrom == null || prevFrom == null && lastFrom == sel.from)
        return false;
    view.dispatch({ selection: { anchor: prevFrom !== null && prevFrom !== void 0 ? prevFrom : lastFrom, head: prevTo !== null && prevTo !== void 0 ? prevTo : lastTo }, scrollIntoView: true });
    return true;
};
/**
A set of default key bindings for the lint functionality.

- Ctrl-Shift-m (Cmd-Shift-m on macOS): [`openLintPanel`](https://codemirror.net/6/docs/ref/#lint.openLintPanel)
- F8: [`nextDiagnostic`](https://codemirror.net/6/docs/ref/#lint.nextDiagnostic)
*/
const lintKeymap = [
    { key: "Mod-Shift-m", run: openLintPanel, preventDefault: true },
    { key: "F8", run: nextDiagnostic }
];
const lintPlugin = /*@__PURE__*/ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.timeout = -1;
        this.set = true;
        let { delay } = view.state.facet(lintConfig);
        this.lintTime = Date.now() + delay;
        this.run = this.run.bind(this);
        this.timeout = setTimeout(this.run, delay);
    }
    run() {
        clearTimeout(this.timeout);
        let now = Date.now();
        if (now < this.lintTime - 10) {
            this.timeout = setTimeout(this.run, this.lintTime - now);
        }
        else {
            this.set = false;
            let { state } = this.view, { sources } = state.facet(lintConfig);
            if (sources.length)
                batchResults(sources.map(s => Promise.resolve(s(this.view))), annotations => {
                    if (this.view.state.doc == state.doc)
                        this.view.dispatch(setDiagnostics(this.view.state, annotations.reduce((a, b) => a.concat(b))));
                }, error => { logException(this.view.state, error); });
        }
    }
    update(update) {
        let config = update.state.facet(lintConfig);
        if (update.docChanged || config != update.startState.facet(lintConfig) ||
            config.needsRefresh && config.needsRefresh(update)) {
            this.lintTime = Date.now() + config.delay;
            if (!this.set) {
                this.set = true;
                this.timeout = setTimeout(this.run, config.delay);
            }
        }
    }
    force() {
        if (this.set) {
            this.lintTime = Date.now();
            this.run();
        }
    }
    destroy() {
        clearTimeout(this.timeout);
    }
});
function batchResults(promises, sink, error) {
    let collected = [], timeout = -1;
    for (let p of promises)
        p.then(value => {
            collected.push(value);
            clearTimeout(timeout);
            if (collected.length == promises.length)
                sink(collected);
            else
                timeout = setTimeout(() => sink(collected), 200);
        }, error);
}
const lintConfig = /*@__PURE__*/Facet.define({
    combine(input) {
        return Object.assign({ sources: input.map(i => i.source).filter(x => x != null) }, combineConfig(input.map(i => i.config), {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null,
            hideOn: () => null,
        }, {
            needsRefresh: (a, b) => !a ? b : !b ? a : u => a(u) || b(u)
        }));
    }
});
/**
Given a diagnostic source, this function returns an extension that
enables linting with that source. It will be called whenever the
editor is idle (after its content changed). If `null` is given as
source, this only configures the lint extension.
*/
function linter(source, config = {}) {
    return [
        lintConfig.of({ source, config }),
        lintPlugin,
        lintExtensions
    ];
}
/**
Forces any linters [configured](https://codemirror.net/6/docs/ref/#lint.linter) to run when the
editor is idle to run right away.
*/
function forceLinting(view) {
    let plugin = view.plugin(lintPlugin);
    if (plugin)
        plugin.force();
}
function assignKeys(actions) {
    let assigned = [];
    if (actions)
        actions: for (let { name } of actions) {
            for (let i = 0; i < name.length; i++) {
                let ch = name[i];
                if (/[a-zA-Z]/.test(ch) && !assigned.some(c => c.toLowerCase() == ch.toLowerCase())) {
                    assigned.push(ch);
                    continue actions;
                }
            }
            assigned.push("");
        }
    return assigned;
}
function renderDiagnostic(view, diagnostic, inPanel) {
    var _a;
    let keys = inPanel ? assignKeys(diagnostic.actions) : [];
    return elt("li", { class: "cm-diagnostic cm-diagnostic-" + diagnostic.severity }, elt("span", { class: "cm-diagnosticText" }, diagnostic.renderMessage ? diagnostic.renderMessage(view) : diagnostic.message), (_a = diagnostic.actions) === null || _a === void 0 ? void 0 : _a.map((action, i) => {
        let fired = false, click = (e) => {
            e.preventDefault();
            if (fired)
                return;
            fired = true;
            let found = findDiagnostic(view.state.field(lintState).diagnostics, diagnostic);
            if (found)
                action.apply(view, found.from, found.to);
        };
        let { name } = action, keyIndex = keys[i] ? name.indexOf(keys[i]) : -1;
        let nameElt = keyIndex < 0 ? name : [name.slice(0, keyIndex),
            elt("u", name.slice(keyIndex, keyIndex + 1)),
            name.slice(keyIndex + 1)];
        return elt("button", {
            type: "button",
            class: "cm-diagnosticAction",
            onclick: click,
            onmousedown: click,
            "aria-label": ` Action: ${name}${keyIndex < 0 ? "" : ` (access key "${keys[i]})"`}.`
        }, nameElt);
    }), diagnostic.source && elt("div", { class: "cm-diagnosticSource" }, diagnostic.source));
}
class DiagnosticWidget extends WidgetType {
    constructor(sev) {
        super();
        this.sev = sev;
    }
    eq(other) { return other.sev == this.sev; }
    toDOM() {
        return elt("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
    }
}
class PanelItem {
    constructor(view, diagnostic) {
        this.diagnostic = diagnostic;
        this.id = "item_" + Math.floor(Math.random() * 0xffffffff).toString(16);
        this.dom = renderDiagnostic(view, diagnostic, true);
        this.dom.id = this.id;
        this.dom.setAttribute("role", "option");
    }
}
class LintPanel {
    constructor(view) {
        this.view = view;
        this.items = [];
        let onkeydown = (event) => {
            if (event.keyCode == 27) { // Escape
                closeLintPanel(this.view);
                this.view.focus();
            }
            else if (event.keyCode == 38 || event.keyCode == 33) { // ArrowUp, PageUp
                this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
            }
            else if (event.keyCode == 40 || event.keyCode == 34) { // ArrowDown, PageDown
                this.moveSelection((this.selectedIndex + 1) % this.items.length);
            }
            else if (event.keyCode == 36) { // Home
                this.moveSelection(0);
            }
            else if (event.keyCode == 35) { // End
                this.moveSelection(this.items.length - 1);
            }
            else if (event.keyCode == 13) { // Enter
                this.view.focus();
            }
            else if (event.keyCode >= 65 && event.keyCode <= 90 && this.selectedIndex >= 0) { // A-Z
                let { diagnostic } = this.items[this.selectedIndex], keys = assignKeys(diagnostic.actions);
                for (let i = 0; i < keys.length; i++)
                    if (keys[i].toUpperCase().charCodeAt(0) == event.keyCode) {
                        let found = findDiagnostic(this.view.state.field(lintState).diagnostics, diagnostic);
                        if (found)
                            diagnostic.actions[i].apply(view, found.from, found.to);
                    }
            }
            else {
                return;
            }
            event.preventDefault();
        };
        let onclick = (event) => {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].dom.contains(event.target))
                    this.moveSelection(i);
            }
        };
        this.list = elt("ul", {
            tabIndex: 0,
            role: "listbox",
            "aria-label": this.view.state.phrase("Diagnostics"),
            onkeydown,
            onclick
        });
        this.dom = elt("div", { class: "cm-panel-lint" }, this.list, elt("button", {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: () => closeLintPanel(this.view)
        }, "×"));
        this.update();
    }
    get selectedIndex() {
        let selected = this.view.state.field(lintState).selected;
        if (!selected)
            return -1;
        for (let i = 0; i < this.items.length; i++)
            if (this.items[i].diagnostic == selected.diagnostic)
                return i;
        return -1;
    }
    update() {
        let { diagnostics, selected } = this.view.state.field(lintState);
        let i = 0, needsSync = false, newSelectedItem = null;
        let seen = new Set();
        diagnostics.between(0, this.view.state.doc.length, (_start, _end, { spec }) => {
            for (let diagnostic of spec.diagnostics) {
                if (seen.has(diagnostic))
                    continue;
                seen.add(diagnostic);
                let found = -1, item;
                for (let j = i; j < this.items.length; j++)
                    if (this.items[j].diagnostic == diagnostic) {
                        found = j;
                        break;
                    }
                if (found < 0) {
                    item = new PanelItem(this.view, diagnostic);
                    this.items.splice(i, 0, item);
                    needsSync = true;
                }
                else {
                    item = this.items[found];
                    if (found > i) {
                        this.items.splice(i, found - i);
                        needsSync = true;
                    }
                }
                if (selected && item.diagnostic == selected.diagnostic) {
                    if (!item.dom.hasAttribute("aria-selected")) {
                        item.dom.setAttribute("aria-selected", "true");
                        newSelectedItem = item;
                    }
                }
                else if (item.dom.hasAttribute("aria-selected")) {
                    item.dom.removeAttribute("aria-selected");
                }
                i++;
            }
        });
        while (i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0)) {
            needsSync = true;
            this.items.pop();
        }
        if (this.items.length == 0) {
            this.items.push(new PanelItem(this.view, {
                from: -1, to: -1,
                severity: "info",
                message: this.view.state.phrase("No diagnostics")
            }));
            needsSync = true;
        }
        if (newSelectedItem) {
            this.list.setAttribute("aria-activedescendant", newSelectedItem.id);
            this.view.requestMeasure({
                key: this,
                read: () => ({ sel: newSelectedItem.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
                write: ({ sel, panel }) => {
                    let scaleY = panel.height / this.list.offsetHeight;
                    if (sel.top < panel.top)
                        this.list.scrollTop -= (panel.top - sel.top) / scaleY;
                    else if (sel.bottom > panel.bottom)
                        this.list.scrollTop += (sel.bottom - panel.bottom) / scaleY;
                }
            });
        }
        else if (this.selectedIndex < 0) {
            this.list.removeAttribute("aria-activedescendant");
        }
        if (needsSync)
            this.sync();
    }
    sync() {
        let domPos = this.list.firstChild;
        function rm() {
            let prev = domPos;
            domPos = prev.nextSibling;
            prev.remove();
        }
        for (let item of this.items) {
            if (item.dom.parentNode == this.list) {
                while (domPos != item.dom)
                    rm();
                domPos = item.dom.nextSibling;
            }
            else {
                this.list.insertBefore(item.dom, domPos);
            }
        }
        while (domPos)
            rm();
    }
    moveSelection(selectedIndex) {
        if (this.selectedIndex < 0)
            return;
        let field = this.view.state.field(lintState);
        let selection = findDiagnostic(field.diagnostics, this.items[selectedIndex].diagnostic);
        if (!selection)
            return;
        this.view.dispatch({
            selection: { anchor: selection.from, head: selection.to },
            scrollIntoView: true,
            effects: movePanelSelection.of(selection)
        });
    }
    static open(view) { return new LintPanel(view); }
}
function svg(content, attrs = `viewBox="0 0 40 40"`) {
    return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${attrs}>${encodeURIComponent(content)}</svg>')`;
}
function underline(color) {
    return svg(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${color}" fill="none" stroke-width=".7"/>`, `width="6" height="3"`);
}
const baseTheme = /*@__PURE__*/EditorView.baseTheme({
    ".cm-diagnostic": {
        padding: "3px 6px 3px 8px",
        marginLeft: "-1px",
        display: "block",
        whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
    ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
    ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
    ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
    ".cm-diagnosticAction": {
        font: "inherit",
        border: "none",
        padding: "2px 4px",
        backgroundColor: "#444",
        color: "white",
        borderRadius: "3px",
        marginLeft: "8px",
        cursor: "pointer"
    },
    ".cm-diagnosticSource": {
        fontSize: "70%",
        opacity: .7
    },
    ".cm-lintRange": {
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        paddingBottom: "0.7px",
    },
    ".cm-lintRange-error": { backgroundImage: /*@__PURE__*/underline("#d11") },
    ".cm-lintRange-warning": { backgroundImage: /*@__PURE__*/underline("orange") },
    ".cm-lintRange-info": { backgroundImage: /*@__PURE__*/underline("#999") },
    ".cm-lintRange-hint": { backgroundImage: /*@__PURE__*/underline("#66d") },
    ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
    ".cm-tooltip-lint": {
        padding: 0,
        margin: 0
    },
    ".cm-lintPoint": {
        position: "relative",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "-2px",
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderBottom: "4px solid #d11"
        }
    },
    ".cm-lintPoint-warning": {
        "&:after": { borderBottomColor: "orange" }
    },
    ".cm-lintPoint-info": {
        "&:after": { borderBottomColor: "#999" }
    },
    ".cm-lintPoint-hint": {
        "&:after": { borderBottomColor: "#66d" }
    },
    ".cm-panel.cm-panel-lint": {
        position: "relative",
        "& ul": {
            maxHeight: "100px",
            overflowY: "auto",
            "& [aria-selected]": {
                backgroundColor: "#ddd",
                "& u": { textDecoration: "underline" }
            },
            "&:focus [aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText"
            },
            "& u": { textDecoration: "none" },
            padding: 0,
            margin: 0
        },
        "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "2px",
            background: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
        }
    }
});
function severityWeight(sev) {
    return sev == "error" ? 4 : sev == "warning" ? 3 : sev == "info" ? 2 : 1;
}
function maxSeverity(diagnostics) {
    let sev = "hint", weight = 1;
    for (let d of diagnostics) {
        let w = severityWeight(d.severity);
        if (w > weight) {
            weight = w;
            sev = d.severity;
        }
    }
    return sev;
}
class LintGutterMarker extends GutterMarker {
    constructor(diagnostics) {
        super();
        this.diagnostics = diagnostics;
        this.severity = maxSeverity(diagnostics);
    }
    toDOM(view) {
        let elt = document.createElement("div");
        elt.className = "cm-lint-marker cm-lint-marker-" + this.severity;
        let diagnostics = this.diagnostics;
        let diagnosticsFilter = view.state.facet(lintGutterConfig).tooltipFilter;
        if (diagnosticsFilter)
            diagnostics = diagnosticsFilter(diagnostics, view.state);
        if (diagnostics.length)
            elt.onmouseover = () => gutterMarkerMouseOver(view, elt, diagnostics);
        return elt;
    }
}
function trackHoverOn(view, marker) {
    let mousemove = (event) => {
        let rect = marker.getBoundingClientRect();
        if (event.clientX > rect.left - 10 /* Hover.Margin */ && event.clientX < rect.right + 10 /* Hover.Margin */ &&
            event.clientY > rect.top - 10 /* Hover.Margin */ && event.clientY < rect.bottom + 10 /* Hover.Margin */)
            return;
        for (let target = event.target; target; target = target.parentNode) {
            if (target.nodeType == 1 && target.classList.contains("cm-tooltip-lint"))
                return;
        }
        window.removeEventListener("mousemove", mousemove);
        if (view.state.field(lintGutterTooltip))
            view.dispatch({ effects: setLintGutterTooltip.of(null) });
    };
    window.addEventListener("mousemove", mousemove);
}
function gutterMarkerMouseOver(view, marker, diagnostics) {
    function hovered() {
        let line = view.elementAtHeight(marker.getBoundingClientRect().top + 5 - view.documentTop);
        const linePos = view.coordsAtPos(line.from);
        if (linePos) {
            view.dispatch({ effects: setLintGutterTooltip.of({
                    pos: line.from,
                    above: false,
                    clip: false,
                    create() {
                        return {
                            dom: diagnosticsTooltip(view, diagnostics),
                            getCoords: () => marker.getBoundingClientRect()
                        };
                    }
                }) });
        }
        marker.onmouseout = marker.onmousemove = null;
        trackHoverOn(view, marker);
    }
    let { hoverTime } = view.state.facet(lintGutterConfig);
    let hoverTimeout = setTimeout(hovered, hoverTime);
    marker.onmouseout = () => {
        clearTimeout(hoverTimeout);
        marker.onmouseout = marker.onmousemove = null;
    };
    marker.onmousemove = () => {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(hovered, hoverTime);
    };
}
function markersForDiagnostics(doc, diagnostics) {
    let byLine = Object.create(null);
    for (let diagnostic of diagnostics) {
        let line = doc.lineAt(diagnostic.from);
        (byLine[line.from] || (byLine[line.from] = [])).push(diagnostic);
    }
    let markers = [];
    for (let line in byLine) {
        markers.push(new LintGutterMarker(byLine[line]).range(+line));
    }
    return RangeSet.of(markers, true);
}
const lintGutterExtension = /*@__PURE__*/gutter({
    class: "cm-gutter-lint",
    markers: view => view.state.field(lintGutterMarkers),
    widgetMarker: (view, widget, block) => {
        let diagnostics = [];
        view.state.field(lintGutterMarkers).between(block.from, block.to, (from, to, value) => {
            if (from > block.from && from < block.to)
                diagnostics.push(...value.diagnostics);
        });
        return diagnostics.length ? new LintGutterMarker(diagnostics) : null;
    }
});
const lintGutterMarkers = /*@__PURE__*/StateField.define({
    create() {
        return RangeSet.empty;
    },
    update(markers, tr) {
        markers = markers.map(tr.changes);
        let diagnosticFilter = tr.state.facet(lintGutterConfig).markerFilter;
        for (let effect of tr.effects) {
            if (effect.is(setDiagnosticsEffect)) {
                let diagnostics = effect.value;
                if (diagnosticFilter)
                    diagnostics = diagnosticFilter(diagnostics || [], tr.state);
                markers = markersForDiagnostics(tr.state.doc, diagnostics.slice(0));
            }
        }
        return markers;
    }
});
const setLintGutterTooltip = /*@__PURE__*/StateEffect.define();
const lintGutterTooltip = /*@__PURE__*/StateField.define({
    create() { return null; },
    update(tooltip, tr) {
        if (tooltip && tr.docChanged)
            tooltip = hideTooltip(tr, tooltip) ? null : Object.assign(Object.assign({}, tooltip), { pos: tr.changes.mapPos(tooltip.pos) });
        return tr.effects.reduce((t, e) => e.is(setLintGutterTooltip) ? e.value : t, tooltip);
    },
    provide: field => showTooltip.from(field)
});
const lintGutterTheme = /*@__PURE__*/EditorView.baseTheme({
    ".cm-gutter-lint": {
        width: "1.4em",
        "& .cm-gutterElement": {
            padding: ".2em"
        }
    },
    ".cm-lint-marker": {
        width: "1em",
        height: "1em"
    },
    ".cm-lint-marker-info": {
        content: /*@__PURE__*/svg(`<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>`)
    },
    ".cm-lint-marker-warning": {
        content: /*@__PURE__*/svg(`<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>`),
    },
    ".cm-lint-marker-error": {
        content: /*@__PURE__*/svg(`<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>`)
    },
});
const lintExtensions = [
    lintState,
    /*@__PURE__*/EditorView.decorations.compute([lintState], state => {
        let { selected, panel } = state.field(lintState);
        return !selected || !panel || selected.from == selected.to ? Decoration.none : Decoration.set([
            activeMark.range(selected.from, selected.to)
        ]);
    }),
    /*@__PURE__*/hoverTooltip(lintTooltip, { hideOn: hideTooltip }),
    baseTheme
];
const lintGutterConfig = /*@__PURE__*/Facet.define({
    combine(configs) {
        return combineConfig(configs, {
            hoverTime: 300 /* Hover.Time */,
            markerFilter: null,
            tooltipFilter: null
        });
    }
});
/**
Returns an extension that installs a gutter showing markers for
each line that has diagnostics, which can be hovered over to see
the diagnostics.
*/
function lintGutter(config = {}) {
    return [lintGutterConfig.of(config), lintGutterMarkers, lintGutterExtension, lintGutterTheme, lintGutterTooltip];
}
/**
Iterate over the marked diagnostics for the given editor state,
calling `f` for each of them. Note that, if the document changed
since the diagnostics were created, the `Diagnostic` object will
hold the original outdated position, whereas the `to` and `from`
arguments hold the diagnostic's current position.
*/
function forEachDiagnostic(state, f) {
    let lState = state.field(lintState, false);
    if (lState && lState.diagnostics.size) {
        let pending = [], pendingStart = [], lastEnd = -1;
        for (let iter = RangeSet.iter([lState.diagnostics]);; iter.next()) {
            for (let i = 0; i < pending.length; i++)
                if (!iter.value || iter.value.spec.diagnostics.indexOf(pending[i]) < 0) {
                    f(pending[i], pendingStart[i], lastEnd);
                    pending.splice(i, 1);
                    pendingStart.splice(i--, 1);
                }
            if (!iter.value)
                break;
            for (let d of iter.value.spec.diagnostics)
                if (pending.indexOf(d) < 0) {
                    pending.push(d);
                    pendingStart.push(iter.from);
                }
            lastEnd = iter.to;
        }
    }
}

export { closeLintPanel, diagnosticCount, forEachDiagnostic, forceLinting, lintGutter, lintKeymap, linter, nextDiagnostic, openLintPanel, previousDiagnostic, setDiagnostics, setDiagnosticsEffect };
