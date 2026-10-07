import * as _codemirror_state from '@codemirror/state';
import { EditorState, TransactionSpec, Extension, Transaction } from '@codemirror/state';
import { EditorView, Command, KeyBinding, ViewUpdate } from '@codemirror/view';

type Severity = "hint" | "info" | "warning" | "error";
/**
Describes a problem or hint for a piece of code.
*/
interface Diagnostic {
    /**
    The start position of the relevant text.
    */
    from: number;
    /**
    The end position. May be equal to `from`, though actually
    covering text is preferable.
    */
    to: number;
    /**
    The severity of the problem. This will influence how it is
    displayed.
    */
    severity: Severity;
    /**
    When given, add an extra CSS class to parts of the code that
    this diagnostic applies to.
    */
    markClass?: string;
    /**
    An optional source string indicating where the diagnostic is
    coming from. You can put the name of your linter here, if
    applicable.
    */
    source?: string;
    /**
    The message associated with this diagnostic.
    */
    message: string;
    /**
    An optional custom rendering function that displays the message
    as a DOM node.
    */
    renderMessage?: (view: EditorView) => Node;
    /**
    An optional array of actions that can be taken on this
    diagnostic.
    */
    actions?: readonly Action[];
}
/**
An action associated with a diagnostic.
*/
interface Action {
    /**
    The label to show to the user. Should be relatively short.
    */
    name: string;
    /**
    The function to call when the user activates this action. Is
    given the diagnostic's _current_ position, which may have
    changed since the creation of the diagnostic, due to editing.
    */
    apply: (view: EditorView, from: number, to: number) => void;
}
type DiagnosticFilter = (diagnostics: readonly Diagnostic[], state: EditorState) => Diagnostic[];
interface LintConfig {
    /**
    Time to wait (in milliseconds) after a change before running
    the linter. Defaults to 750ms.
    */
    delay?: number;
    /**
    Optional predicate that can be used to indicate when diagnostics
    need to be recomputed. Linting is always re-done on document
    changes.
    */
    needsRefresh?: null | ((update: ViewUpdate) => boolean);
    /**
    Optional filter to determine which diagnostics produce markers
    in the content.
    */
    markerFilter?: null | DiagnosticFilter;
    /**
    Filter applied to a set of diagnostics shown in a tooltip. No
    tooltip will appear if the empty set is returned.
    */
    tooltipFilter?: null | DiagnosticFilter;
    /**
    Can be used to control what kind of transactions cause lint
    hover tooltips associated with the given document range to be
    hidden. By default any transactions that changes the line
    around the range will hide it. Returning null falls back to this
    behavior.
    */
    hideOn?: (tr: Transaction, from: number, to: number) => boolean | null;
    /**
    When enabled (defaults to off), this will cause the lint panel
    to automatically open when diagnostics are found, and close when
    all diagnostics are resolved or removed.
    */
    autoPanel?: boolean;
}
interface LintGutterConfig {
    /**
    The delay before showing a tooltip when hovering over a lint gutter marker.
    */
    hoverTime?: number;
    /**
    Optional filter determining which diagnostics show a marker in
    the gutter.
    */
    markerFilter?: null | DiagnosticFilter;
    /**
    Optional filter for diagnostics displayed in a tooltip, which
    can also be used to prevent a tooltip appearing.
    */
    tooltipFilter?: null | DiagnosticFilter;
}
/**
Returns a transaction spec which updates the current set of
diagnostics, and enables the lint extension if if wasn't already
active.
*/
declare function setDiagnostics(state: EditorState, diagnostics: readonly Diagnostic[]): TransactionSpec;
/**
The state effect that updates the set of active diagnostics. Can
be useful when writing an extension that needs to track these.
*/
declare const setDiagnosticsEffect: _codemirror_state.StateEffectType<readonly Diagnostic[]>;
/**
Returns the number of active lint diagnostics in the given state.
*/
declare function diagnosticCount(state: EditorState): number;
/**
Command to open and focus the lint panel.
*/
declare const openLintPanel: Command;
/**
Command to close the lint panel, when open.
*/
declare const closeLintPanel: Command;
/**
Move the selection to the next diagnostic.
*/
declare const nextDiagnostic: Command;
/**
Move the selection to the previous diagnostic.
*/
declare const previousDiagnostic: Command;
/**
A set of default key bindings for the lint functionality.

- Ctrl-Shift-m (Cmd-Shift-m on macOS): [`openLintPanel`](https://codemirror.net/6/docs/ref/#lint.openLintPanel)
- F8: [`nextDiagnostic`](https://codemirror.net/6/docs/ref/#lint.nextDiagnostic)
*/
declare const lintKeymap: readonly KeyBinding[];
/**
The type of a function that produces diagnostics.
*/
type LintSource = (view: EditorView) => readonly Diagnostic[] | Promise<readonly Diagnostic[]>;
/**
Given a diagnostic source, this function returns an extension that
enables linting with that source. It will be called whenever the
editor is idle (after its content changed). If `null` is given as
source, this only configures the lint extension.
*/
declare function linter(source: LintSource | null, config?: LintConfig): Extension;
/**
Forces any linters [configured](https://codemirror.net/6/docs/ref/#lint.linter) to run when the
editor is idle to run right away.
*/
declare function forceLinting(view: EditorView): void;
/**
Returns an extension that installs a gutter showing markers for
each line that has diagnostics, which can be hovered over to see
the diagnostics.
*/
declare function lintGutter(config?: LintGutterConfig): Extension;
/**
Iterate over the marked diagnostics for the given editor state,
calling `f` for each of them. Note that, if the document changed
since the diagnostics were created, the `Diagnostic` object will
hold the original outdated position, whereas the `to` and `from`
arguments hold the diagnostic's current position.
*/
declare function forEachDiagnostic(state: EditorState, f: (d: Diagnostic, from: number, to: number) => void): void;

export { type Action, type Diagnostic, type LintSource, closeLintPanel, diagnosticCount, forEachDiagnostic, forceLinting, lintGutter, lintKeymap, linter, nextDiagnostic, openLintPanel, previousDiagnostic, setDiagnostics, setDiagnosticsEffect };
