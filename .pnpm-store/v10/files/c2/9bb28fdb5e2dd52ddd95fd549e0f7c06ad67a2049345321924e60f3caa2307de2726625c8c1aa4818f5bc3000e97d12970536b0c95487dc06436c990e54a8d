import * as _codemirror_state from '@codemirror/state';
import { EditorState, ChangeDesc, TransactionSpec, Transaction, StateCommand, Facet, Extension, StateEffect } from '@codemirror/state';
import { EditorView, Rect, KeyBinding, Command } from '@codemirror/view';
import * as _lezer_common from '@lezer/common';

/**
Objects type used to represent individual completions.
*/
interface Completion {
    /**
    The label to show in the completion picker. This is what input
    is matched against to determine whether a completion matches (and
    how well it matches).
    */
    label: string;
    /**
    An optional override for the completion's visible label. When
    using this, matched characters will only be highlighted if you
    provide a [`getMatch`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.getMatch)
    function.
    */
    displayLabel?: string;
    /**
    An optional short piece of information to show (with a different
    style) after the label.
    */
    detail?: string;
    /**
    Additional info to show when the completion is selected. Can be
    a plain string or a function that'll render the DOM structure to
    show when invoked.
    */
    info?: string | ((completion: Completion) => CompletionInfo | Promise<CompletionInfo>);
    /**
    How to apply the completion. The default is to replace it with
    its [label](https://codemirror.net/6/docs/ref/#autocomplete.Completion.label). When this holds a
    string, the completion range is replaced by that string. When it
    is a function, that function is called to perform the
    completion. If it fires a transaction, it is responsible for
    adding the [`pickedCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.pickedCompletion)
    annotation to it.
    */
    apply?: string | ((view: EditorView, completion: Completion, from: number, to: number) => void);
    /**
    The type of the completion. This is used to pick an icon to show
    for the completion. Icons are styled with a CSS class created by
    appending the type name to `"cm-completionIcon-"`. You can
    define or restyle icons by defining these selectors. The base
    library defines simple icons for `class`, `constant`, `enum`,
    `function`, `interface`, `keyword`, `method`, `namespace`,
    `property`, `text`, `type`, and `variable`.
    
    Multiple types can be provided by separating them with spaces.
    */
    type?: string;
    /**
    When this option is selected, and one of these characters is
    typed, insert the completion before typing the character.
    */
    commitCharacters?: readonly string[];
    /**
    When given, should be a number from -99 to 99 that adjusts how
    this completion is ranked compared to other completions that
    match the input as well as this one. A negative number moves it
    down the list, a positive number moves it up.
    */
    boost?: number;
    /**
    Can be used to divide the completion list into sections.
    Completions in a given section (matched by name) will be grouped
    together, with a heading above them. Options without section
    will appear above all sections. A string value is equivalent to
    a `{name}` object.
    */
    section?: string | CompletionSection;
}
/**
The type returned from
[`Completion.info`](https://codemirror.net/6/docs/ref/#autocomplete.Completion.info). May be a DOM
node, null to indicate there is no info, or an object with an
optional `destroy` method that cleans up the node.
*/
type CompletionInfo = Node | null | {
    dom: Node;
    destroy?(): void;
};
/**
Object used to describe a completion
[section](https://codemirror.net/6/docs/ref/#autocomplete.Completion.section). It is recommended to
create a shared object used by all the completions in a given
section.
*/
interface CompletionSection {
    /**
    The name of the section. If no `render` method is present, this
    will be displayed above the options.
    */
    name: string;
    /**
    An optional function that renders the section header. Since the
    headers are shown inside a list, you should make sure the
    resulting element has a `display: list-item` style.
    */
    header?: (section: CompletionSection) => HTMLElement;
    /**
    By default, sections are ordered alphabetically by name. To
    specify an explicit order, `rank` can be used. Sections with a
    lower rank will be shown above sections with a higher rank.
    
    When set to `"dynamic"`, the section's position compared to
    other dynamic sections depends on the matching score of the
    best-matching option in the sections.
    */
    rank?: number | "dynamic";
}
/**
An instance of this is passed to completion source functions.
*/
declare class CompletionContext {
    /**
    The editor state that the completion happens in.
    */
    readonly state: EditorState;
    /**
    The position at which the completion is happening.
    */
    readonly pos: number;
    /**
    Indicates whether completion was activated explicitly, or
    implicitly by typing. The usual way to respond to this is to
    only return completions when either there is part of a
    completable entity before the cursor, or `explicit` is true.
    */
    readonly explicit: boolean;
    /**
    The editor view. May be undefined if the context was created
    in a situation where there is no such view available, such as
    in synchronous updates via
    [`CompletionResult.update`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.update)
    or when called by test code.
    */
    readonly view?: EditorView | undefined;
    /**
    Create a new completion context. (Mostly useful for testing
    completion sources—in the editor, the extension will create
    these for you.)
    */
    constructor(
    /**
    The editor state that the completion happens in.
    */
    state: EditorState, 
    /**
    The position at which the completion is happening.
    */
    pos: number, 
    /**
    Indicates whether completion was activated explicitly, or
    implicitly by typing. The usual way to respond to this is to
    only return completions when either there is part of a
    completable entity before the cursor, or `explicit` is true.
    */
    explicit: boolean, 
    /**
    The editor view. May be undefined if the context was created
    in a situation where there is no such view available, such as
    in synchronous updates via
    [`CompletionResult.update`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.update)
    or when called by test code.
    */
    view?: EditorView | undefined);
    /**
    Get the extent, content, and (if there is a token) type of the
    token before `this.pos`.
    */
    tokenBefore(types: readonly string[]): {
        from: number;
        to: number;
        text: string;
        type: _lezer_common.NodeType;
    } | null;
    /**
    Get the match of the given expression directly before the
    cursor.
    */
    matchBefore(expr: RegExp): {
        from: number;
        to: number;
        text: string;
    } | null;
    /**
    Yields true when the query has been aborted. Can be useful in
    asynchronous queries to avoid doing work that will be ignored.
    */
    get aborted(): boolean;
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
    addEventListener(type: "abort", listener: () => void, options?: {
        onDocChange: boolean;
    }): void;
}
/**
Given a a fixed array of options, return an autocompleter that
completes them.
*/
declare function completeFromList(list: readonly (string | Completion)[]): CompletionSource;
/**
Wrap the given completion source so that it will only fire when the
cursor is in a syntax node with one of the given names.
*/
declare function ifIn(nodes: readonly string[], source: CompletionSource): CompletionSource;
/**
Wrap the given completion source so that it will not fire when the
cursor is in a syntax node with one of the given names.
*/
declare function ifNotIn(nodes: readonly string[], source: CompletionSource): CompletionSource;
/**
The function signature for a completion source. Such a function
may return its [result](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult)
synchronously or as a promise. Returning null indicates no
completions are available.
*/
type CompletionSource = (context: CompletionContext) => CompletionResult | null | Promise<CompletionResult | null>;
/**
Interface for objects returned by completion sources.
*/
interface CompletionResult {
    /**
    The start of the range that is being completed.
    */
    from: number;
    /**
    The end of the range that is being completed. Defaults to the
    main cursor position.
    */
    to?: number;
    /**
    The completions returned. These don't have to be compared with
    the input by the source—the autocompletion system will do its
    own matching (against the text between `from` and `to`) and
    sorting.
    */
    options: readonly Completion[];
    /**
    When given, further typing or deletion that causes the part of
    the document between ([mapped](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) `from`
    and `to` to match this regular expression or predicate function
    will not query the completion source again, but continue with
    this list of options. This can help a lot with responsiveness,
    since it allows the completion list to be updated synchronously.
    */
    validFor?: RegExp | ((text: string, from: number, to: number, state: EditorState) => boolean);
    /**
    By default, the library filters and scores completions. Set
    `filter` to `false` to disable this, and cause your completions
    to all be included, in the order they were given. When there are
    other sources, unfiltered completions appear at the top of the
    list of completions. `validFor` must not be given when `filter`
    is `false`, because it only works when filtering.
    */
    filter?: boolean;
    /**
    When [`filter`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.filter) is set to
    `false` or a completion has a
    [`displayLabel`](https://codemirror.net/6/docs/ref/#autocomplete.Completion.displayLabel), this
    may be provided to compute the ranges on the label that match
    the input. Should return an array of numbers where each pair of
    adjacent numbers provide the start and end of a range. The
    second argument, the match found by the library, is only passed
    when `filter` isn't `false`.
    */
    getMatch?: (completion: Completion, matched?: readonly number[]) => readonly number[];
    /**
    Synchronously update the completion result after typing or
    deletion. If given, this should not do any expensive work, since
    it will be called during editor state updates. The function
    should make sure (similar to
    [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor)) that the
    completion still applies in the new state.
    */
    update?: (current: CompletionResult, from: number, to: number, context: CompletionContext) => CompletionResult | null;
    /**
    When results contain position-dependent information in, for
    example, `apply` methods, you can provide this method to update
    the result for transactions that happen after the query. It is
    not necessary to update `from` and `to`—those are tracked
    automatically.
    */
    map?: (current: CompletionResult, changes: ChangeDesc) => CompletionResult | null;
    /**
    Set a default set of [commit
    characters](https://codemirror.net/6/docs/ref/#autocomplete.Completion.commitCharacters) for all
    options in this result.
    */
    commitCharacters?: readonly string[];
}
/**
This annotation is added to transactions that are produced by
picking a completion.
*/
declare const pickedCompletion: _codemirror_state.AnnotationType<Completion>;
/**
Helper function that returns a transaction spec which inserts a
completion's text in the main selection range, and any other
selection range that has the same text in front of it.
*/
declare function insertCompletionText(state: EditorState, text: string, from: number, to: number): TransactionSpec;

interface CompletionConfig {
    /**
    When enabled (defaults to true), autocompletion will start
    whenever the user types something that can be completed.
    */
    activateOnTyping?: boolean;
    /**
    When given, if a completion that matches the predicate is
    picked, reactivate completion again as if it was typed normally.
    */
    activateOnCompletion?: (completion: Completion) => boolean;
    /**
    The amount of time to wait for further typing before querying
    completion sources via
    [`activateOnTyping`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.activateOnTyping).
    Defaults to 100, which should be fine unless your completion
    source is very slow and/or doesn't use `validFor`.
    */
    activateOnTypingDelay?: number;
    /**
    By default, when completion opens, the first option is selected
    and can be confirmed with
    [`acceptCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.acceptCompletion). When this
    is set to false, the completion widget starts with no completion
    selected, and the user has to explicitly move to a completion
    before you can confirm one.
    */
    selectOnOpen?: boolean;
    /**
    Override the completion sources used. By default, they will be
    taken from the `"autocomplete"` [language
    data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) (which should hold
    [completion sources](https://codemirror.net/6/docs/ref/#autocomplete.CompletionSource) or arrays
    of [completions](https://codemirror.net/6/docs/ref/#autocomplete.Completion)).
    */
    override?: readonly CompletionSource[] | null;
    /**
    Determines whether the completion tooltip is closed when the
    editor loses focus. Defaults to true.
    */
    closeOnBlur?: boolean;
    /**
    The maximum number of options to render to the DOM.
    */
    maxRenderedOptions?: number;
    /**
    Set this to false to disable the [default completion
    keymap](https://codemirror.net/6/docs/ref/#autocomplete.completionKeymap). (This requires you to
    add bindings to control completion yourself. The bindings should
    probably have a higher precedence than other bindings for the
    same keys.)
    */
    defaultKeymap?: boolean;
    /**
    By default, completions are shown below the cursor when there is
    space. Setting this to true will make the extension put the
    completions above the cursor when possible.
    */
    aboveCursor?: boolean;
    /**
    When given, this may return an additional CSS class to add to
    the completion dialog element.
    */
    tooltipClass?: (state: EditorState) => string;
    /**
    This can be used to add additional CSS classes to completion
    options.
    */
    optionClass?: (completion: Completion) => string;
    /**
    By default, the library will render icons based on the
    completion's [type](https://codemirror.net/6/docs/ref/#autocomplete.Completion.type) in front of
    each option. Set this to false to turn that off.
    */
    icons?: boolean;
    /**
    This option can be used to inject additional content into
    options. The `render` function will be called for each visible
    completion, and should produce a DOM node to show. `position`
    determines where in the DOM the result appears, relative to
    other added widgets and the standard content. The default icons
    have position 20, the label position 50, and the detail position
    80.
    */
    addToOptions?: {
        render: (completion: Completion, state: EditorState, view: EditorView) => Node | null;
        position: number;
    }[];
    /**
    By default, [info](https://codemirror.net/6/docs/ref/#autocomplete.Completion.info) tooltips are
    placed to the side of the selected completion. This option can
    be used to override that. It will be given rectangles for the
    list of completions, the selected option, the info element, and
    the availble [tooltip
    space](https://codemirror.net/6/docs/ref/#view.tooltips^config.tooltipSpace), and should return
    style and/or class strings for the info element.
    */
    positionInfo?: (view: EditorView, list: Rect, option: Rect, info: Rect, space: Rect) => {
        style?: string;
        class?: string;
    };
    /**
    The comparison function to use when sorting completions with the same
    match score. Defaults to using
    [`localeCompare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).
    */
    compareCompletions?: (a: Completion, b: Completion) => number;
    /**
    When set to true (the default is false), turn off fuzzy matching
    of completions and only show those that start with the text the
    user typed. Only takes effect for results where
    [`filter`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.filter) isn't false.
    */
    filterStrict?: boolean;
    /**
    By default, commands relating to an open completion only take
    effect 75 milliseconds after the completion opened, so that key
    presses made before the user is aware of the tooltip don't go to
    the tooltip. This option can be used to configure that delay.
    */
    interactionDelay?: number;
    /**
    When there are multiple asynchronous completion sources, this
    controls how long the extension waits for a slow source before
    displaying results from faster sources. Defaults to 100
    milliseconds.
    */
    updateSyncTime?: number;
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
declare function snippet(template: string): (editor: {
    state: EditorState;
    dispatch: (tr: Transaction) => void;
}, completion: Completion | null, from: number, to: number) => void;
/**
A command that clears the active snippet, if any.
*/
declare const clearSnippet: StateCommand;
/**
Move to the next snippet field, if available.
*/
declare const nextSnippetField: StateCommand;
/**
Move to the previous snippet field, if available.
*/
declare const prevSnippetField: StateCommand;
/**
Check if there is an active snippet with a next field for
`nextSnippetField` to move to.
*/
declare function hasNextSnippetField(state: EditorState): boolean;
/**
Returns true if there is an active snippet and a previous field
for `prevSnippetField` to move to.
*/
declare function hasPrevSnippetField(state: EditorState): boolean;
/**
A facet that can be used to configure the key bindings used by
snippets. The default binds Tab to
[`nextSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.nextSnippetField), Shift-Tab to
[`prevSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.prevSnippetField), and Escape
to [`clearSnippet`](https://codemirror.net/6/docs/ref/#autocomplete.clearSnippet).
*/
declare const snippetKeymap: Facet<readonly KeyBinding[], readonly KeyBinding[]>;
/**
Create a completion from a snippet. Returns an object with the
properties from `completion`, plus an `apply` function that
applies the snippet.
*/
declare function snippetCompletion(template: string, completion: Completion): Completion;

/**
Returns a command that moves the completion selection forward or
backward by the given amount.
*/
declare function moveCompletionSelection(forward: boolean, by?: "option" | "page"): Command;
/**
Accept the current completion.
*/
declare const acceptCompletion: Command;
/**
Explicitly start autocompletion.
*/
declare const startCompletion: Command;
/**
Close the currently active completion.
*/
declare const closeCompletion: Command;

/**
A completion source that will scan the document for words (using a
[character categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer)), and
return those as completions.
*/
declare const completeAnyWord: CompletionSource;

/**
Configures bracket closing behavior for a syntax (via
[language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt)) using the `"closeBrackets"`
identifier.
*/
interface CloseBracketConfig {
    /**
    The opening brackets to close. Defaults to `["(", "[", "{", "'",
    '"']`. Brackets may be single characters or a triple of quotes
    (as in `"'''"`).
    */
    brackets?: string[];
    /**
    Characters in front of which newly opened brackets are
    automatically closed. Closing always happens in front of
    whitespace. Defaults to `")]}:;>"`.
    */
    before?: string;
    /**
    When determining whether a given node may be a string, recognize
    these prefixes before the opening quote.
    */
    stringPrefixes?: string[];
}
/**
Extension to enable bracket-closing behavior. When a closeable
bracket is typed, its closing bracket is immediately inserted
after the cursor. When closing a bracket directly in front of a
closing bracket inserted by the extension, the cursor moves over
that bracket.
*/
declare function closeBrackets(): Extension;
/**
Command that implements deleting a pair of matching brackets when
the cursor is between them.
*/
declare const deleteBracketPair: StateCommand;
/**
Close-brackets related key bindings. Binds Backspace to
[`deleteBracketPair`](https://codemirror.net/6/docs/ref/#autocomplete.deleteBracketPair).
*/
declare const closeBracketsKeymap: readonly KeyBinding[];
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
declare function insertBracket(state: EditorState, bracket: string): Transaction | null;

/**
Returns an extension that enables autocompletion.
*/
declare function autocompletion(config?: CompletionConfig): Extension;
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
declare const completionKeymap: readonly KeyBinding[];
/**
Get the current completion status. When completions are available,
this will return `"active"`. When completions are pending (in the
process of being queried), this returns `"pending"`. Otherwise, it
returns `null`.
*/
declare function completionStatus(state: EditorState): null | "active" | "pending";
/**
Returns the available completions as an array.
*/
declare function currentCompletions(state: EditorState): readonly Completion[];
/**
Return the currently selected completion, if any.
*/
declare function selectedCompletion(state: EditorState): Completion | null;
/**
Returns the currently selected position in the active completion
list, or null if no completions are active.
*/
declare function selectedCompletionIndex(state: EditorState): number | null;
/**
Create an effect that can be attached to a transaction to change
the currently selected completion.
*/
declare function setSelectedCompletion(index: number): StateEffect<unknown>;

export { type CloseBracketConfig, type Completion, CompletionContext, type CompletionInfo, type CompletionResult, type CompletionSection, type CompletionSource, acceptCompletion, autocompletion, clearSnippet, closeBrackets, closeBracketsKeymap, closeCompletion, completeAnyWord, completeFromList, completionKeymap, completionStatus, currentCompletions, deleteBracketPair, hasNextSnippetField, hasPrevSnippetField, ifIn, ifNotIn, insertBracket, insertCompletionText, moveCompletionSelection, nextSnippetField, pickedCompletion, prevSnippetField, selectedCompletion, selectedCompletionIndex, setSelectedCompletion, snippet, snippetCompletion, snippetKeymap, startCompletion };
