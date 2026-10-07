import * as _codemirror_state from '@codemirror/state';
import { RangeSet, RangeValue, Range, EditorState, Extension, Transaction, ChangeSet, SelectionRange, ChangeDesc, EditorSelection, EditorStateConfig, StateEffect, TransactionSpec, Line, Facet, StateField } from '@codemirror/state';
import { StyleModule, StyleSpec } from 'style-mod';

/**
Used to indicate [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
*/
declare enum Direction {
    /**
    Left-to-right.
    */
    LTR = 0,
    /**
    Right-to-left.
    */
    RTL = 1
}
/**
Represents a contiguous range of text that has a single direction
(as in left-to-right or right-to-left).
*/
declare class BidiSpan {
    /**
    The start of the span (relative to the start of the line).
    */
    readonly from: number;
    /**
    The end of the span.
    */
    readonly to: number;
    /**
    The ["bidi
    level"](https://unicode.org/reports/tr9/#Basic_Display_Algorithm)
    of the span (in this context, 0 means
    left-to-right, 1 means right-to-left, 2 means left-to-right
    number inside right-to-left text).
    */
    readonly level: number;
    /**
    The direction of this span.
    */
    get dir(): Direction;
}

type Attrs = {
    [name: string]: string;
};

/**
Basic rectangle type.
*/
interface Rect {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
}
type ScrollStrategy = "nearest" | "start" | "end" | "center";

interface MarkDecorationSpec {
    /**
    Whether the mark covers its start and end position or not. This
    influences whether content inserted at those positions becomes
    part of the mark. Defaults to false.
    */
    inclusive?: boolean;
    /**
    Specify whether the start position of the marked range should be
    inclusive. Overrides `inclusive`, when both are present.
    */
    inclusiveStart?: boolean;
    /**
    Whether the end should be inclusive.
    */
    inclusiveEnd?: boolean;
    /**
    Add attributes to the DOM elements that hold the text in the
    marked range.
    */
    attributes?: {
        [key: string]: string;
    };
    /**
    Shorthand for `{attributes: {class: value}}`.
    */
    class?: string;
    /**
    Add a wrapping element around the text in the marked range. Note
    that there will not necessarily be a single element covering the
    entire range—other decorations with lower precedence might split
    this one if they partially overlap it, and line breaks always
    end decoration elements.
    */
    tagName?: string;
    /**
    When using sets of decorations in
    [`bidiIsolatedRanges`](https://codemirror.net/6/docs/ref/##view.EditorView^bidiIsolatedRanges),
    this property provides the direction of the isolates. When null
    or not given, it indicates the range has `dir=auto`, and its
    direction should be derived from the first strong directional
    character in it.
    */
    bidiIsolate?: Direction | null;
    /**
    Decoration specs allow extra properties, which can be retrieved
    through the decoration's [`spec`](https://codemirror.net/6/docs/ref/#view.Decoration.spec)
    property.
    */
    [other: string]: any;
}
interface WidgetDecorationSpec {
    /**
    The type of widget to draw here.
    */
    widget: WidgetType;
    /**
    Which side of the given position the widget is on. When this is
    positive, the widget will be drawn after the cursor if the
    cursor is on the same position. Otherwise, it'll be drawn before
    it. When multiple widgets sit at the same position, their `side`
    values will determine their ordering—those with a lower value
    come first. Defaults to 0. May not be more than 10000 or less
    than -10000.
    */
    side?: number;
    /**
    By default, to avoid unintended mixing of block and inline
    widgets, block widgets with a positive `side` are always drawn
    after all inline widgets at that position, and those with a
    non-positive side before inline widgets. Setting this option to
    `true` for a block widget will turn this off and cause it to be
    rendered between the inline widgets, ordered by `side`.
    */
    inlineOrder?: boolean;
    /**
    Determines whether this is a block widgets, which will be drawn
    between lines, or an inline widget (the default) which is drawn
    between the surrounding text.
    
    Note that block-level decorations should not have vertical
    margins, and if you dynamically change their height, you should
    make sure to call
    [`requestMeasure`](https://codemirror.net/6/docs/ref/#view.EditorView.requestMeasure), so that the
    editor can update its information about its vertical layout.
    */
    block?: boolean;
    /**
    Other properties are allowed.
    */
    [other: string]: any;
}
interface ReplaceDecorationSpec {
    /**
    An optional widget to drawn in the place of the replaced
    content.
    */
    widget?: WidgetType;
    /**
    Whether this range covers the positions on its sides. This
    influences whether new content becomes part of the range and
    whether the cursor can be drawn on its sides. Defaults to false
    for inline replacements, and true for block replacements.
    */
    inclusive?: boolean;
    /**
    Set inclusivity at the start.
    */
    inclusiveStart?: boolean;
    /**
    Set inclusivity at the end.
    */
    inclusiveEnd?: boolean;
    /**
    Whether this is a block-level decoration. Defaults to false.
    */
    block?: boolean;
    /**
    Other properties are allowed.
    */
    [other: string]: any;
}
interface LineDecorationSpec {
    /**
    DOM attributes to add to the element wrapping the line.
    */
    attributes?: {
        [key: string]: string;
    };
    /**
    Shorthand for `{attributes: {class: value}}`.
    */
    class?: string;
    /**
    Other properties are allowed.
    */
    [other: string]: any;
}
/**
Widgets added to the content are described by subclasses of this
class. Using a description object like that makes it possible to
delay creating of the DOM structure for a widget until it is
needed, and to avoid redrawing widgets even if the decorations
that define them are recreated.
*/
declare abstract class WidgetType {
    /**
    Build the DOM structure for this widget instance.
    */
    abstract toDOM(view: EditorView): HTMLElement;
    /**
    Compare this instance to another instance of the same type.
    (TypeScript can't express this, but only instances of the same
    specific class will be passed to this method.) This is used to
    avoid redrawing widgets when they are replaced by a new
    decoration of the same type. The default implementation just
    returns `false`, which will cause new instances of the widget to
    always be redrawn.
    */
    eq(widget: WidgetType): boolean;
    /**
    Update a DOM element created by a widget of the same type (but
    different, non-`eq` content) to reflect this widget. May return
    true to indicate that it could update, false to indicate it
    couldn't (in which case the widget will be redrawn). The default
    implementation just returns false.
    */
    updateDOM(dom: HTMLElement, view: EditorView): boolean;
    /**
    The estimated height this widget will have, to be used when
    estimating the height of content that hasn't been drawn. May
    return -1 to indicate you don't know. The default implementation
    returns -1.
    */
    get estimatedHeight(): number;
    /**
    For inline widgets that are displayed inline (as opposed to
    `inline-block`) and introduce line breaks (through `<br>` tags
    or textual newlines), this must indicate the amount of line
    breaks they introduce. Defaults to 0.
    */
    get lineBreaks(): number;
    /**
    Can be used to configure which kinds of events inside the widget
    should be ignored by the editor. The default is to ignore all
    events.
    */
    ignoreEvent(event: Event): boolean;
    /**
    Override the way screen coordinates for positions at/in the
    widget are found. `pos` will be the offset into the widget, and
    `side` the side of the position that is being queried—less than
    zero for before, greater than zero for after, and zero for
    directly at that position.
    */
    coordsAt(dom: HTMLElement, pos: number, side: number): Rect | null;
    /**
    This is called when the an instance of the widget is removed
    from the editor view.
    */
    destroy(dom: HTMLElement): void;
}
/**
A decoration set represents a collection of decorated ranges,
organized for efficient access and mapping. See
[`RangeSet`](https://codemirror.net/6/docs/ref/#state.RangeSet) for its methods.
*/
type DecorationSet = RangeSet<Decoration>;
/**
The different types of blocks that can occur in an editor view.
*/
declare enum BlockType {
    /**
    A line of text.
    */
    Text = 0,
    /**
    A block widget associated with the position after it.
    */
    WidgetBefore = 1,
    /**
    A block widget associated with the position before it.
    */
    WidgetAfter = 2,
    /**
    A block widget [replacing](https://codemirror.net/6/docs/ref/#view.Decoration^replace) a range of content.
    */
    WidgetRange = 3
}
/**
A decoration provides information on how to draw or style a piece
of content. You'll usually use it wrapped in a
[`Range`](https://codemirror.net/6/docs/ref/#state.Range), which adds a start and end position.
@nonabstract
*/
declare abstract class Decoration extends RangeValue {
    /**
    The config object used to create this decoration. You can
    include additional properties in there to store metadata about
    your decoration.
    */
    readonly spec: any;
    protected constructor(
    /**
    @internal
    */
    startSide: number, 
    /**
    @internal
    */
    endSide: number, 
    /**
    @internal
    */
    widget: WidgetType | null, 
    /**
    The config object used to create this decoration. You can
    include additional properties in there to store metadata about
    your decoration.
    */
    spec: any);
    abstract eq(other: Decoration): boolean;
    /**
    Create a mark decoration, which influences the styling of the
    content in its range. Nested mark decorations will cause nested
    DOM elements to be created. Nesting order is determined by
    precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
    the higher-precedence decorations creating the inner DOM nodes.
    Such elements are split on line boundaries and on the boundaries
    of lower-precedence decorations.
    */
    static mark(spec: MarkDecorationSpec): Decoration;
    /**
    Create a widget decoration, which displays a DOM element at the
    given position.
    */
    static widget(spec: WidgetDecorationSpec): Decoration;
    /**
    Create a replace decoration which replaces the given range with
    a widget, or simply hides it.
    */
    static replace(spec: ReplaceDecorationSpec): Decoration;
    /**
    Create a line decoration, which can add DOM attributes to the
    line starting at the given position.
    */
    static line(spec: LineDecorationSpec): Decoration;
    /**
    Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
    decorated range or ranges. If the ranges aren't already sorted,
    pass `true` for `sort` to make the library sort them for you.
    */
    static set(of: Range<Decoration> | readonly Range<Decoration>[], sort?: boolean): DecorationSet;
    /**
    The empty set of decorations.
    */
    static none: DecorationSet;
}

/**
Command functions are used in key bindings and other types of user
actions. Given an editor view, they check whether their effect can
apply to the editor, and if it can, perform it as a side effect
(which usually means [dispatching](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) a
transaction) and return `true`.
*/
type Command = (target: EditorView) => boolean;
declare class ScrollTarget {
    readonly range: SelectionRange;
    readonly y: ScrollStrategy;
    readonly x: ScrollStrategy;
    readonly yMargin: number;
    readonly xMargin: number;
    readonly isSnapshot: boolean;
    constructor(range: SelectionRange, y?: ScrollStrategy, x?: ScrollStrategy, yMargin?: number, xMargin?: number, isSnapshot?: boolean);
    map(changes: ChangeDesc): ScrollTarget;
    clip(state: EditorState): ScrollTarget;
}
/**
Log or report an unhandled exception in client code. Should
probably only be used by extension code that allows client code to
provide functions, and calls those functions in a context where an
exception can't be propagated to calling code in a reasonable way
(for example when in an event handler).

Either calls a handler registered with
[`EditorView.exceptionSink`](https://codemirror.net/6/docs/ref/#view.EditorView^exceptionSink),
`window.onerror`, if defined, or `console.error` (in which case
it'll pass `context`, when given, as first argument).
*/
declare function logException(state: EditorState, exception: any, context?: string): void;
/**
This is the interface plugin objects conform to.
*/
interface PluginValue extends Object {
    /**
    Notifies the plugin of an update that happened in the view. This
    is called _before_ the view updates its own DOM. It is
    responsible for updating the plugin's internal state (including
    any state that may be read by plugin fields) and _writing_ to
    the DOM for the changes in the update. To avoid unnecessary
    layout recomputations, it should _not_ read the DOM layout—use
    [`requestMeasure`](https://codemirror.net/6/docs/ref/#view.EditorView.requestMeasure) to schedule
    your code in a DOM reading phase if you need to.
    */
    update?(update: ViewUpdate): void;
    /**
    Called when the document view is updated (due to content,
    decoration, or viewport changes). Should not try to immediately
    start another view update. Often useful for calling
    [`requestMeasure`](https://codemirror.net/6/docs/ref/#view.EditorView.requestMeasure).
    */
    docViewUpdate?(view: EditorView): void;
    /**
    Called when the plugin is no longer going to be used. Should
    revert any changes the plugin made to the DOM.
    */
    destroy?(): void;
}
/**
Provides additional information when defining a [view
plugin](https://codemirror.net/6/docs/ref/#view.ViewPlugin).
*/
interface PluginSpec<V extends PluginValue> {
    /**
    Register the given [event
    handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers) for the plugin.
    When called, these will have their `this` bound to the plugin
    value.
    */
    eventHandlers?: DOMEventHandlers<V>;
    /**
    Registers [event observers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventObservers)
    for the plugin. Will, when called, have their `this` bound to
    the plugin value.
    */
    eventObservers?: DOMEventHandlers<V>;
    /**
    Specify that the plugin provides additional extensions when
    added to an editor configuration.
    */
    provide?: (plugin: ViewPlugin<V, any>) => Extension;
    /**
    Allow the plugin to provide decorations. When given, this should
    be a function that take the plugin value and return a
    [decoration set](https://codemirror.net/6/docs/ref/#view.DecorationSet). See also the caveat about
    [layout-changing decorations](https://codemirror.net/6/docs/ref/#view.EditorView^decorations) that
    depend on the view.
    */
    decorations?: (value: V) => DecorationSet;
}
/**
View plugins associate stateful values with a view. They can
influence the way the content is drawn, and are notified of things
that happen in the view. They optionally take an argument, in
which case you need to call [`of`](https://codemirror.net/6/docs/ref/#view.ViewPlugin.of) to create
an extension for the plugin. When the argument type is undefined,
you can use the plugin instance as an extension directly.
*/
declare class ViewPlugin<V extends PluginValue, Arg = undefined> {
    /**
    When `Arg` is undefined, instances of this class act as
    extensions. Otherwise, you have to call `of` to create an
    extension value.
    */
    extension: Arg extends undefined ? Extension : null;
    private baseExtensions;
    private constructor();
    /**
    Create an extension for this plugin with the given argument.
    */
    of(arg: Arg): Extension;
    /**
    Define a plugin from a constructor function that creates the
    plugin's value, given an editor view.
    */
    static define<V extends PluginValue, Arg = undefined>(create: (view: EditorView, arg: Arg) => V, spec?: PluginSpec<V>): ViewPlugin<V, Arg>;
    /**
    Create a plugin for a class whose constructor takes a single
    editor view as argument.
    */
    static fromClass<V extends PluginValue, Arg = undefined>(cls: {
        new (view: EditorView, arg: Arg): V;
    }, spec?: PluginSpec<V>): ViewPlugin<V, Arg>;
}
interface MeasureRequest<T> {
    /**
    Called in a DOM read phase to gather information that requires
    DOM layout. Should _not_ mutate the document.
    */
    read(view: EditorView): T;
    /**
    Called in a DOM write phase to update the document. Should _not_
    do anything that triggers DOM layout.
    */
    write?(measure: T, view: EditorView): void;
    /**
    When multiple requests with the same key are scheduled, only the
    last one will actually be run.
    */
    key?: any;
}
type AttrSource = Attrs | ((view: EditorView) => Attrs | null);
/**
View [plugins](https://codemirror.net/6/docs/ref/#view.ViewPlugin) are given instances of this
class, which describe what happened, whenever the view is updated.
*/
declare class ViewUpdate {
    /**
    The editor view that the update is associated with.
    */
    readonly view: EditorView;
    /**
    The new editor state.
    */
    readonly state: EditorState;
    /**
    The transactions involved in the update. May be empty.
    */
    readonly transactions: readonly Transaction[];
    /**
    The changes made to the document by this update.
    */
    readonly changes: ChangeSet;
    /**
    The previous editor state.
    */
    readonly startState: EditorState;
    private constructor();
    /**
    Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
    [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
    update.
    */
    get viewportChanged(): boolean;
    /**
    Returns true when
    [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
    and the viewport change is not just the result of mapping it in
    response to document changes.
    */
    get viewportMoved(): boolean;
    /**
    Indicates whether the height of a block element in the editor
    changed in this update.
    */
    get heightChanged(): boolean;
    /**
    Returns true when the document was modified or the size of the
    editor, or elements within the editor, changed.
    */
    get geometryChanged(): boolean;
    /**
    True when this update indicates a focus change.
    */
    get focusChanged(): boolean;
    /**
    Whether the document changed in this update.
    */
    get docChanged(): boolean;
    /**
    Whether the selection was explicitly set in this update.
    */
    get selectionSet(): boolean;
}

/**
Interface that objects registered with
[`EditorView.mouseSelectionStyle`](https://codemirror.net/6/docs/ref/#view.EditorView^mouseSelectionStyle)
must conform to.
*/
interface MouseSelectionStyle {
    /**
    Return a new selection for the mouse gesture that starts with
    the event that was originally given to the constructor, and ends
    with the event passed here. In case of a plain click, those may
    both be the `mousedown` event, in case of a drag gesture, the
    latest `mousemove` event will be passed.
    
    When `extend` is true, that means the new selection should, if
    possible, extend the start selection. If `multiple` is true, the
    new selection should be added to the original selection.
    */
    get: (curEvent: MouseEvent, extend: boolean, multiple: boolean) => EditorSelection;
    /**
    Called when the view is updated while the gesture is in
    progress. When the document changes, it may be necessary to map
    some data (like the original selection or start position)
    through the changes.
    
    This may return `true` to indicate that the `get` method should
    get queried again after the update, because something in the
    update could change its result. Be wary of infinite loops when
    using this (where `get` returns a new selection, which will
    trigger `update`, which schedules another `get` in response).
    */
    update: (update: ViewUpdate) => boolean | void;
}
type MakeSelectionStyle = (view: EditorView, event: MouseEvent) => MouseSelectionStyle | null;

/**
Record used to represent information about a block-level element
in the editor view.
*/
declare class BlockInfo {
    /**
    The start of the element in the document.
    */
    readonly from: number;
    /**
    The length of the element.
    */
    readonly length: number;
    /**
    The top position of the element (relative to the top of the
    document).
    */
    readonly top: number;
    /**
    Its height.
    */
    readonly height: number;
    /**
    The type of element this is. When querying lines, this may be
    an array of all the blocks that make up the line.
    */
    get type(): BlockType | readonly BlockInfo[];
    /**
    The end of the element as a document position.
    */
    get to(): number;
    /**
    The bottom position of the element.
    */
    get bottom(): number;
    /**
    If this is a widget block, this will return the widget
    associated with it.
    */
    get widget(): WidgetType | null;
    /**
    If this is a textblock, this holds the number of line breaks
    that appear in widgets inside the block.
    */
    get widgetLineBreaks(): number;
}

/**
The type of object given to the [`EditorView`](https://codemirror.net/6/docs/ref/#view.EditorView)
constructor.
*/
interface EditorViewConfig extends EditorStateConfig {
    /**
    The view's initial state. If not given, a new state is created
    by passing this configuration object to
    [`EditorState.create`](https://codemirror.net/6/docs/ref/#state.EditorState^create), using its
    `doc`, `selection`, and `extensions` field (if provided).
    */
    state?: EditorState;
    /**
    When given, the editor is immediately appended to the given
    element on creation. (Otherwise, you'll have to place the view's
    [`dom`](https://codemirror.net/6/docs/ref/#view.EditorView.dom) element in the document yourself.)
    */
    parent?: Element | DocumentFragment;
    /**
    If the view is going to be mounted in a shadow root or document
    other than the one held by the global variable `document` (the
    default), you should pass it here. If you provide `parent`, but
    not this option, the editor will automatically look up a root
    from the parent.
    */
    root?: Document | ShadowRoot;
    /**
    Pass an effect created with
    [`EditorView.scrollIntoView`](https://codemirror.net/6/docs/ref/#view.EditorView^scrollIntoView) or
    [`EditorView.scrollSnapshot`](https://codemirror.net/6/docs/ref/#view.EditorView.scrollSnapshot)
    here to set an initial scroll position.
    */
    scrollTo?: StateEffect<any>;
    /**
    Override the way transactions are
    [dispatched](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) for this editor view.
    Your implementation, if provided, should probably call the
    view's [`update` method](https://codemirror.net/6/docs/ref/#view.EditorView.update).
    */
    dispatchTransactions?: (trs: readonly Transaction[], view: EditorView) => void;
    /**
    **Deprecated** single-transaction version of
    `dispatchTransactions`. Will force transactions to be dispatched
    one at a time when used.
    */
    dispatch?: (tr: Transaction, view: EditorView) => void;
}
/**
An editor view represents the editor's user interface. It holds
the editable DOM surface, and possibly other elements such as the
line number gutter. It handles events and dispatches state
transactions for editing actions.
*/
declare class EditorView {
    /**
    The current editor state.
    */
    get state(): EditorState;
    /**
    To be able to display large documents without consuming too much
    memory or overloading the browser, CodeMirror only draws the
    code that is visible (plus a margin around it) to the DOM. This
    property tells you the extent of the current drawn viewport, in
    document positions.
    */
    get viewport(): {
        from: number;
        to: number;
    };
    /**
    When there are, for example, large collapsed ranges in the
    viewport, its size can be a lot bigger than the actual visible
    content. Thus, if you are doing something like styling the
    content in the viewport, it is preferable to only do so for
    these ranges, which are the subset of the viewport that is
    actually drawn.
    */
    get visibleRanges(): readonly {
        from: number;
        to: number;
    }[];
    /**
    Returns false when the editor is entirely scrolled out of view
    or otherwise hidden.
    */
    get inView(): boolean;
    /**
    Indicates whether the user is currently composing text via
    [IME](https://en.wikipedia.org/wiki/Input_method), and at least
    one change has been made in the current composition.
    */
    get composing(): boolean;
    /**
    Indicates whether the user is currently in composing state. Note
    that on some platforms, like Android, this will be the case a
    lot, since just putting the cursor on a word starts a
    composition there.
    */
    get compositionStarted(): boolean;
    private dispatchTransactions;
    private _root;
    /**
    The document or shadow root that the view lives in.
    */
    get root(): DocumentOrShadowRoot;
    /**
    The DOM element that wraps the entire editor view.
    */
    readonly dom: HTMLElement;
    /**
    The DOM element that can be styled to scroll. (Note that it may
    not have been, so you can't assume this is scrollable.)
    */
    readonly scrollDOM: HTMLElement;
    /**
    The editable DOM element holding the editor content. You should
    not, usually, interact with this content directly though the
    DOM, since the editor will immediately undo most of the changes
    you make. Instead, [dispatch](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch)
    [transactions](https://codemirror.net/6/docs/ref/#state.Transaction) to modify content, and
    [decorations](https://codemirror.net/6/docs/ref/#view.Decoration) to style it.
    */
    readonly contentDOM: HTMLElement;
    private announceDOM;
    private plugins;
    private pluginMap;
    private editorAttrs;
    private contentAttrs;
    private styleModules;
    private bidiCache;
    private destroyed;
    /**
    Construct a new view. You'll want to either provide a `parent`
    option, or put `view.dom` into your document after creating a
    view, so that the user can see the editor.
    */
    constructor(config?: EditorViewConfig);
    /**
    All regular editor state updates should go through this. It
    takes a transaction, array of transactions, or transaction spec
    and updates the view to show the new state produced by that
    transaction. Its implementation can be overridden with an
    [option](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.dispatchTransactions).
    This function is bound to the view instance, so it does not have
    to be called as a method.
    
    Note that when multiple `TransactionSpec` arguments are
    provided, these define a single transaction (the specs will be
    merged), not a sequence of transactions.
    */
    dispatch(tr: Transaction): void;
    dispatch(trs: readonly Transaction[]): void;
    dispatch(...specs: TransactionSpec[]): void;
    /**
    Update the view for the given array of transactions. This will
    update the visible document and selection to match the state
    produced by the transactions, and notify view plugins of the
    change. You should usually call
    [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
    as a primitive.
    */
    update(transactions: readonly Transaction[]): void;
    /**
    Reset the view to the given state. (This will cause the entire
    document to be redrawn and all view plugins to be reinitialized,
    so you should probably only use it when the new state isn't
    derived from the old state. Otherwise, use
    [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
    */
    setState(newState: EditorState): void;
    private updatePlugins;
    private docViewUpdate;
    /**
    Get the CSS classes for the currently active editor themes.
    */
    get themeClasses(): string;
    private updateAttrs;
    private showAnnouncements;
    private mountStyles;
    private readMeasured;
    /**
    Schedule a layout measurement, optionally providing callbacks to
    do custom DOM measuring followed by a DOM write phase. Using
    this is preferable reading DOM layout directly from, for
    example, an event handler, because it'll make sure measuring and
    drawing done by other components is synchronized, avoiding
    unnecessary DOM layout computations.
    */
    requestMeasure<T>(request?: MeasureRequest<T>): void;
    /**
    Get the value of a specific plugin, if present. Note that
    plugins that crash can be dropped from a view, so even when you
    know you registered a given plugin, it is recommended to check
    the return value of this method.
    */
    plugin<T extends PluginValue>(plugin: ViewPlugin<T, any>): T | null;
    /**
    The top position of the document, in screen coordinates. This
    may be negative when the editor is scrolled down. Points
    directly to the top of the first line, not above the padding.
    */
    get documentTop(): number;
    /**
    Reports the padding above and below the document.
    */
    get documentPadding(): {
        top: number;
        bottom: number;
    };
    /**
    If the editor is transformed with CSS, this provides the scale
    along the X axis. Otherwise, it will just be 1. Note that
    transforms other than translation and scaling are not supported.
    */
    get scaleX(): number;
    /**
    Provide the CSS transformed scale along the Y axis.
    */
    get scaleY(): number;
    /**
    Find the text line or block widget at the given vertical
    position (which is interpreted as relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
    */
    elementAtHeight(height: number): BlockInfo;
    /**
    Find the line block (see
    [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
    height, again interpreted relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
    */
    lineBlockAtHeight(height: number): BlockInfo;
    /**
    Get the extent and vertical position of all [line
    blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
    are relative to the [top of the
    document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
    */
    get viewportLineBlocks(): BlockInfo[];
    /**
    Find the line block around the given document position. A line
    block is a range delimited on both sides by either a
    non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
    start/end of the document. It will usually just hold a line of
    text, but may be broken into multiple textblocks by block
    widgets.
    */
    lineBlockAt(pos: number): BlockInfo;
    /**
    The editor's total content height.
    */
    get contentHeight(): number;
    /**
    Move a cursor position by [grapheme
    cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
    the motion is away from the line start, or towards it. In
    bidirectional text, the line is traversed in visual order, using
    the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
    When the start position was the last one on the line, the
    returned position will be across the line break. If there is no
    further line, the original position is returned.
    
    By default, this method moves over a single cluster. The
    optional `by` argument can be used to move across more. It will
    be called with the first cluster as argument, and should return
    a predicate that determines, for each subsequent cluster,
    whether it should also be moved over.
    */
    moveByChar(start: SelectionRange, forward: boolean, by?: (initial: string) => (next: string) => boolean): SelectionRange;
    /**
    Move a cursor position across the next group of either
    [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
    non-whitespace characters.
    */
    moveByGroup(start: SelectionRange, forward: boolean): SelectionRange;
    /**
    Get the cursor position visually at the start or end of a line.
    Note that this may differ from the _logical_ position at its
    start or end (which is simply at `line.from`/`line.to`) if text
    at the start or end goes against the line's base text direction.
    */
    visualLineSide(line: Line, end: boolean): SelectionRange;
    /**
    Move to the next line boundary in the given direction. If
    `includeWrap` is true, line wrapping is on, and there is a
    further wrap point on the current line, the wrap point will be
    returned. Otherwise this function will return the start or end
    of the line.
    */
    moveToLineBoundary(start: SelectionRange, forward: boolean, includeWrap?: boolean): SelectionRange;
    /**
    Move a cursor position vertically. When `distance` isn't given,
    it defaults to moving to the next line (including wrapped
    lines). Otherwise, `distance` should provide a positive distance
    in pixels.
    
    When `start` has a
    [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
    motion will use that as a target horizontal position. Otherwise,
    the cursor's own horizontal position is used. The returned
    cursor will have its goal column set to whichever column was
    used.
    */
    moveVertically(start: SelectionRange, forward: boolean, distance?: number): SelectionRange;
    /**
    Find the DOM parent node and offset (child offset if `node` is
    an element, character offset when it is a text node) at the
    given document position.
    
    Note that for positions that aren't currently in
    `visibleRanges`, the resulting DOM position isn't necessarily
    meaningful (it may just point before or after a placeholder
    element).
    */
    domAtPos(pos: number): {
        node: Node;
        offset: number;
    };
    /**
    Find the document position at the given DOM node. Can be useful
    for associating positions with DOM events. Will raise an error
    when `node` isn't part of the editor content.
    */
    posAtDOM(node: Node, offset?: number): number;
    /**
    Get the document position at the given screen coordinates. For
    positions not covered by the visible viewport's DOM structure,
    this will return null, unless `false` is passed as second
    argument, in which case it'll return an estimated position that
    would be near the coordinates if it were rendered.
    */
    posAtCoords(coords: {
        x: number;
        y: number;
    }, precise: false): number;
    posAtCoords(coords: {
        x: number;
        y: number;
    }): number | null;
    /**
    Get the screen coordinates at the given document position.
    `side` determines whether the coordinates are based on the
    element before (-1) or after (1) the position (if no element is
    available on the given side, the method will transparently use
    another strategy to get reasonable coordinates).
    */
    coordsAtPos(pos: number, side?: -1 | 1): Rect | null;
    /**
    Return the rectangle around a given character. If `pos` does not
    point in front of a character that is in the viewport and
    rendered (i.e. not replaced, not a line break), this will return
    null. For space characters that are a line wrap point, this will
    return the position before the line break.
    */
    coordsForChar(pos: number): Rect | null;
    /**
    The default width of a character in the editor. May not
    accurately reflect the width of all characters (given variable
    width fonts or styling of invididual ranges).
    */
    get defaultCharacterWidth(): number;
    /**
    The default height of a line in the editor. May not be accurate
    for all lines.
    */
    get defaultLineHeight(): number;
    /**
    The text direction
    ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
    CSS property) of the editor's content element.
    */
    get textDirection(): Direction;
    /**
    Find the text direction of the block at the given position, as
    assigned by CSS. If
    [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
    isn't enabled, or the given position is outside of the viewport,
    this will always return the same as
    [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
    this may trigger a DOM layout.
    */
    textDirectionAt(pos: number): Direction;
    /**
    Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
    (as determined by the
    [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
    CSS property of its content element).
    */
    get lineWrapping(): boolean;
    /**
    Returns the bidirectional text structure of the given line
    (which should be in the current document) as an array of span
    objects. The order of these spans matches the [text
    direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
    left-to-right, the leftmost spans come first, otherwise the
    rightmost spans come first.
    */
    bidiSpans(line: Line): readonly BidiSpan[];
    /**
    Check whether the editor has focus.
    */
    get hasFocus(): boolean;
    /**
    Put focus on the editor.
    */
    focus(): void;
    /**
    Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
    necessary when moving the editor's existing DOM to a new window or shadow root.
    */
    setRoot(root: Document | ShadowRoot): void;
    /**
    Clean up this editor view, removing its element from the
    document, unregistering event handlers, and notifying
    plugins. The view instance can no longer be used after
    calling this.
    */
    destroy(): void;
    /**
    Returns an effect that can be
    [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
    cause it to scroll the given position or range into view.
    */
    static scrollIntoView(pos: number | SelectionRange, options?: {
        /**
        By default (`"nearest"`) the position will be vertically
        scrolled only the minimal amount required to move the given
        position into view. You can set this to `"start"` to move it
        to the top of the view, `"end"` to move it to the bottom, or
        `"center"` to move it to the center.
        */
        y?: ScrollStrategy;
        /**
        Effect similar to
        [`y`](https://codemirror.net/6/docs/ref/#view.EditorView^scrollIntoView^options.y), but for the
        horizontal scroll position.
        */
        x?: ScrollStrategy;
        /**
        Extra vertical distance to add when moving something into
        view. Not used with the `"center"` strategy. Defaults to 5.
        Must be less than the height of the editor.
        */
        yMargin?: number;
        /**
        Extra horizontal distance to add. Not used with the `"center"`
        strategy. Defaults to 5. Must be less than the width of the
        editor.
        */
        xMargin?: number;
    }): StateEffect<unknown>;
    /**
    Return an effect that resets the editor to its current (at the
    time this method was called) scroll position. Note that this
    only affects the editor's own scrollable element, not parents.
    See also
    [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
    
    The effect should be used with a document identical to the one
    it was created for. Failing to do so is not an error, but may
    not scroll to the expected position. You can
    [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
    */
    scrollSnapshot(): StateEffect<ScrollTarget>;
    /**
    Enable or disable tab-focus mode, which disables key bindings
    for Tab and Shift-Tab, letting the browser's default
    focus-changing behavior go through instead. This is useful to
    prevent trapping keyboard users in your editor.
    
    Without argument, this toggles the mode. With a boolean, it
    enables (true) or disables it (false). Given a number, it
    temporarily enables the mode until that number of milliseconds
    have passed or another non-Tab key is pressed.
    */
    setTabFocusMode(to?: boolean | number): void;
    /**
    Facet to add a [style
    module](https://github.com/marijnh/style-mod#documentation) to
    an editor view. The view will ensure that the module is
    mounted in its [document
    root](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.root).
    */
    static styleModule: Facet<StyleModule, readonly StyleModule[]>;
    /**
    Returns an extension that can be used to add DOM event handlers.
    The value should be an object mapping event names to handler
    functions. For any given event, such functions are ordered by
    extension precedence, and the first handler to return true will
    be assumed to have handled that event, and no other handlers or
    built-in behavior will be activated for it. These are registered
    on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
    for `scroll` handlers, which will be called any time the
    editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
    its parent nodes is scrolled.
    */
    static domEventHandlers(handlers: DOMEventHandlers<any>): Extension;
    /**
    Create an extension that registers DOM event observers. Contrary
    to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
    observers can't be prevented from running by a higher-precedence
    handler returning true. They also don't prevent other handlers
    and observers from running when they return true, and should not
    call `preventDefault`.
    */
    static domEventObservers(observers: DOMEventHandlers<any>): Extension;
    /**
    An input handler can override the way changes to the editable
    DOM content are handled. Handlers are passed the document
    positions between which the change was found, and the new
    content. When one returns true, no further input handlers are
    called and the default behavior is prevented.
    
    The `insert` argument can be used to get the default transaction
    that would be applied for this input. This can be useful when
    dispatching the custom behavior as a separate transaction.
    */
    static inputHandler: Facet<(view: EditorView, from: number, to: number, text: string, insert: () => Transaction) => boolean, readonly ((view: EditorView, from: number, to: number, text: string, insert: () => Transaction) => boolean)[]>;
    /**
    Functions provided in this facet will be used to transform text
    pasted or dropped into the editor.
    */
    static clipboardInputFilter: Facet<(text: string, state: EditorState) => string, readonly ((text: string, state: EditorState) => string)[]>;
    /**
    Transform text copied or dragged from the editor.
    */
    static clipboardOutputFilter: Facet<(text: string, state: EditorState) => string, readonly ((text: string, state: EditorState) => string)[]>;
    /**
    Scroll handlers can override how things are scrolled into view.
    If they return `true`, no further handling happens for the
    scrolling. If they return false, the default scroll behavior is
    applied. Scroll handlers should never initiate editor updates.
    */
    static scrollHandler: Facet<(view: EditorView, range: SelectionRange, options: {
        x: ScrollStrategy;
        y: ScrollStrategy;
        xMargin: number;
        yMargin: number;
    }) => boolean, readonly ((view: EditorView, range: SelectionRange, options: {
        x: ScrollStrategy;
        y: ScrollStrategy;
        xMargin: number;
        yMargin: number;
    }) => boolean)[]>;
    /**
    This facet can be used to provide functions that create effects
    to be dispatched when the editor's focus state changes.
    */
    static focusChangeEffect: Facet<(state: EditorState, focusing: boolean) => StateEffect<any> | null, readonly ((state: EditorState, focusing: boolean) => StateEffect<any> | null)[]>;
    /**
    By default, the editor assumes all its content has the same
    [text direction](https://codemirror.net/6/docs/ref/#view.Direction). Configure this with a `true`
    value to make it read the text direction of every (rendered)
    line separately.
    */
    static perLineTextDirection: Facet<boolean, boolean>;
    /**
    Allows you to provide a function that should be called when the
    library catches an exception from an extension (mostly from view
    plugins, but may be used by other extensions to route exceptions
    from user-code-provided callbacks). This is mostly useful for
    debugging and logging. See [`logException`](https://codemirror.net/6/docs/ref/#view.logException).
    */
    static exceptionSink: Facet<(exception: any) => void, readonly ((exception: any) => void)[]>;
    /**
    A facet that can be used to register a function to be called
    every time the view updates.
    */
    static updateListener: Facet<(update: ViewUpdate) => void, readonly ((update: ViewUpdate) => void)[]>;
    /**
    Facet that controls whether the editor content DOM is editable.
    When its highest-precedence value is `false`, the element will
    not have its `contenteditable` attribute set. (Note that this
    doesn't affect API calls that change the editor content, even
    when those are bound to keys or buttons. See the
    [`readOnly`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) facet for that.)
    */
    static editable: Facet<boolean, boolean>;
    /**
    Allows you to influence the way mouse selection happens. The
    functions in this facet will be called for a `mousedown` event
    on the editor, and can return an object that overrides the way a
    selection is computed from that mouse click or drag.
    */
    static mouseSelectionStyle: Facet<MakeSelectionStyle, readonly MakeSelectionStyle[]>;
    /**
    Facet used to configure whether a given selection drag event
    should move or copy the selection. The given predicate will be
    called with the `mousedown` event, and can return `true` when
    the drag should move the content.
    */
    static dragMovesSelection: Facet<(event: MouseEvent) => boolean, readonly ((event: MouseEvent) => boolean)[]>;
    /**
    Facet used to configure whether a given selecting click adds a
    new range to the existing selection or replaces it entirely. The
    default behavior is to check `event.metaKey` on macOS, and
    `event.ctrlKey` elsewhere.
    */
    static clickAddsSelectionRange: Facet<(event: MouseEvent) => boolean, readonly ((event: MouseEvent) => boolean)[]>;
    /**
    A facet that determines which [decorations](https://codemirror.net/6/docs/ref/#view.Decoration)
    are shown in the view. Decorations can be provided in two
    ways—directly, or via a function that takes an editor view.
    
    Only decoration sets provided directly are allowed to influence
    the editor's vertical layout structure. The ones provided as
    functions are called _after_ the new viewport has been computed,
    and thus **must not** introduce block widgets or replacing
    decorations that cover line breaks.
    
    If you want decorated ranges to behave like atomic units for
    cursor motion and deletion purposes, also provide the range set
    containing the decorations to
    [`EditorView.atomicRanges`](https://codemirror.net/6/docs/ref/#view.EditorView^atomicRanges).
    */
    static decorations: Facet<DecorationSet | ((view: EditorView) => DecorationSet), readonly (DecorationSet | ((view: EditorView) => DecorationSet))[]>;
    /**
    Facet that works much like
    [`decorations`](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), but puts its
    inputs at the very bottom of the precedence stack, meaning mark
    decorations provided here will only be split by other, partially
    overlapping \`outerDecorations\` ranges, and wrap around all
    regular decorations. Use this for mark elements that should, as
    much as possible, remain in one piece.
    */
    static outerDecorations: Facet<DecorationSet | ((view: EditorView) => DecorationSet), readonly (DecorationSet | ((view: EditorView) => DecorationSet))[]>;
    /**
    Used to provide ranges that should be treated as atoms as far as
    cursor motion is concerned. This causes methods like
    [`moveByChar`](https://codemirror.net/6/docs/ref/#view.EditorView.moveByChar) and
    [`moveVertically`](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) (and the
    commands built on top of them) to skip across such regions when
    a selection endpoint would enter them. This does _not_ prevent
    direct programmatic [selection
    updates](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) from moving into such
    regions.
    */
    static atomicRanges: Facet<(view: EditorView) => _codemirror_state.RangeSet<any>, readonly ((view: EditorView) => _codemirror_state.RangeSet<any>)[]>;
    /**
    When range decorations add a `unicode-bidi: isolate` style, they
    should also include a
    [`bidiIsolate`](https://codemirror.net/6/docs/ref/#view.MarkDecorationSpec.bidiIsolate) property
    in their decoration spec, and be exposed through this facet, so
    that the editor can compute the proper text order. (Other values
    for `unicode-bidi`, except of course `normal`, are not
    supported.)
    */
    static bidiIsolatedRanges: Facet<DecorationSet | ((view: EditorView) => DecorationSet), readonly (DecorationSet | ((view: EditorView) => DecorationSet))[]>;
    /**
    Facet that allows extensions to provide additional scroll
    margins (space around the sides of the scrolling element that
    should be considered invisible). This can be useful when the
    plugin introduces elements that cover part of that element (for
    example a horizontally fixed gutter).
    */
    static scrollMargins: Facet<(view: EditorView) => Partial<Rect> | null, readonly ((view: EditorView) => Partial<Rect> | null)[]>;
    /**
    Create a theme extension. The first argument can be a
    [`style-mod`](https://github.com/marijnh/style-mod#documentation)
    style spec providing the styles for the theme. These will be
    prefixed with a generated class for the style.
    
    Because the selectors will be prefixed with a scope class, rule
    that directly match the editor's [wrapper
    element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
    added—need to be explicitly differentiated by adding an `&` to
    the selector for that element—for example
    `&.cm-focused`.
    
    When `dark` is set to true, the theme will be marked as dark,
    which will cause the `&dark` rules from [base
    themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
    `&light` when a light theme is active).
    */
    static theme(spec: {
        [selector: string]: StyleSpec;
    }, options?: {
        dark?: boolean;
    }): Extension;
    /**
    This facet records whether a dark theme is active. The extension
    returned by [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme) automatically
    includes an instance of this when the `dark` option is set to
    true.
    */
    static darkTheme: Facet<boolean, boolean>;
    /**
    Create an extension that adds styles to the base theme. Like
    with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
    place of the editor wrapper element when directly targeting
    that. You can also use `&dark` or `&light` instead to only
    target editors with a dark or light theme.
    */
    static baseTheme(spec: {
        [selector: string]: StyleSpec;
    }): Extension;
    /**
    Provides a Content Security Policy nonce to use when creating
    the style sheets for the editor. Holds the empty string when no
    nonce has been provided.
    */
    static cspNonce: Facet<string, string>;
    /**
    Facet that provides additional DOM attributes for the editor's
    editable DOM element.
    */
    static contentAttributes: Facet<AttrSource, readonly AttrSource[]>;
    /**
    Facet that provides DOM attributes for the editor's outer
    element.
    */
    static editorAttributes: Facet<AttrSource, readonly AttrSource[]>;
    /**
    An extension that enables line wrapping in the editor (by
    setting CSS `white-space` to `pre-wrap` in the content).
    */
    static lineWrapping: Extension;
    /**
    State effect used to include screen reader announcements in a
    transaction. These will be added to the DOM in a visually hidden
    element with `aria-live="polite"` set, and should be used to
    describe effects that are visually obvious but may not be
    noticed by screen reader users (such as moving to the next
    search match).
    */
    static announce: _codemirror_state.StateEffectType<string>;
    /**
    Retrieve an editor view instance from the view's DOM
    representation.
    */
    static findFromDOM(dom: HTMLElement): EditorView | null;
}
/**
Helper type that maps event names to event object types, or the
`any` type for unknown events.
*/
interface DOMEventMap extends HTMLElementEventMap {
    [other: string]: any;
}
/**
Event handlers are specified with objects like this. For event
types known by TypeScript, this will infer the event argument type
to hold the appropriate event object type. For unknown events, it
is inferred to `any`, and should be explicitly set if you want type
checking.
*/
type DOMEventHandlers<This> = {
    [event in keyof DOMEventMap]?: (this: This, event: DOMEventMap[event], view: EditorView) => boolean | void;
};

/**
Key bindings associate key names with
[command](https://codemirror.net/6/docs/ref/#view.Command)-style functions.

Key names may be strings like `"Shift-Ctrl-Enter"`—a key identifier
prefixed with zero or more modifiers. Key identifiers are based on
the strings that can appear in
[`KeyEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).
Use lowercase letters to refer to letter keys (or uppercase letters
if you want shift to be held). You may use `"Space"` as an alias
for the `" "` name.

Modifiers can be given in any order. `Shift-` (or `s-`), `Alt-` (or
`a-`), `Ctrl-` (or `c-` or `Control-`) and `Cmd-` (or `m-` or
`Meta-`) are recognized.

When a key binding contains multiple key names separated by
spaces, it represents a multi-stroke binding, which will fire when
the user presses the given keys after each other.

You can use `Mod-` as a shorthand for `Cmd-` on Mac and `Ctrl-` on
other platforms. So `Mod-b` is `Ctrl-b` on Linux but `Cmd-b` on
macOS.
*/
interface KeyBinding {
    /**
    The key name to use for this binding. If the platform-specific
    property (`mac`, `win`, or `linux`) for the current platform is
    used as well in the binding, that one takes precedence. If `key`
    isn't defined and the platform-specific binding isn't either,
    a binding is ignored.
    */
    key?: string;
    /**
    Key to use specifically on macOS.
    */
    mac?: string;
    /**
    Key to use specifically on Windows.
    */
    win?: string;
    /**
    Key to use specifically on Linux.
    */
    linux?: string;
    /**
    The command to execute when this binding is triggered. When the
    command function returns `false`, further bindings will be tried
    for the key.
    */
    run?: Command;
    /**
    When given, this defines a second binding, using the (possibly
    platform-specific) key name prefixed with `Shift-` to activate
    this command.
    */
    shift?: Command;
    /**
    When this property is present, the function is called for every
    key that is not a multi-stroke prefix.
    */
    any?: (view: EditorView, event: KeyboardEvent) => boolean;
    /**
    By default, key bindings apply when focus is on the editor
    content (the `"editor"` scope). Some extensions, mostly those
    that define their own panels, might want to allow you to
    register bindings local to that panel. Such bindings should use
    a custom scope name. You may also assign multiple scope names to
    a binding, separating them by spaces.
    */
    scope?: string;
    /**
    When set to true (the default is false), this will always
    prevent the further handling for the bound key, even if the
    command(s) return false. This can be useful for cases where the
    native behavior of the key is annoying or irrelevant but the
    command doesn't always apply (such as, Mod-u for undo selection,
    which would cause the browser to view source instead when no
    selection can be undone).
    */
    preventDefault?: boolean;
    /**
    When set to true, `stopPropagation` will be called on keyboard
    events that have their `preventDefault` called in response to
    this key binding (see also
    [`preventDefault`](https://codemirror.net/6/docs/ref/#view.KeyBinding.preventDefault)).
    */
    stopPropagation?: boolean;
}
/**
Facet used for registering keymaps.

You can add multiple keymaps to an editor. Their priorities
determine their precedence (the ones specified early or with high
priority get checked first). When a handler has returned `true`
for a given key, no further handlers are called.
*/
declare const keymap: Facet<readonly KeyBinding[], readonly (readonly KeyBinding[])[]>;
/**
Run the key handlers registered for a given scope. The event
object should be a `"keydown"` event. Returns true if any of the
handlers handled it.
*/
declare function runScopeHandlers(view: EditorView, event: KeyboardEvent, scope: string): boolean;

type SelectionConfig = {
    /**
    The length of a full cursor blink cycle, in milliseconds.
    Defaults to 1200. Can be set to 0 to disable blinking.
    */
    cursorBlinkRate?: number;
    /**
    Whether to show a cursor for non-empty ranges. Defaults to
    true.
    */
    drawRangeCursor?: boolean;
};
/**
Returns an extension that hides the browser's native selection and
cursor, replacing the selection with a background behind the text
(with the `cm-selectionBackground` class), and the
cursors with elements overlaid over the code (using
`cm-cursor-primary` and `cm-cursor-secondary`).

This allows the editor to display secondary selection ranges, and
tends to produce a type of selection more in line with that users
expect in a text editor (the native selection styling will often
leave gaps between lines and won't fill the horizontal space after
a line when the selection continues past it).

It does have a performance cost, in that it requires an extra DOM
layout cycle for many updates (the selection is drawn based on DOM
layout information that's only available after laying out the
content).
*/
declare function drawSelection(config?: SelectionConfig): Extension;
/**
Retrieve the [`drawSelection`](https://codemirror.net/6/docs/ref/#view.drawSelection) configuration
for this state. (Note that this will return a set of defaults even
if `drawSelection` isn't enabled.)
*/
declare function getDrawSelectionConfig(state: EditorState): SelectionConfig;

/**
Draws a cursor at the current drop position when something is
dragged over the editor.
*/
declare function dropCursor(): Extension;

interface SpecialCharConfig {
    /**
    An optional function that renders the placeholder elements.
    
    The `description` argument will be text that clarifies what the
    character is, which should be provided to screen readers (for
    example with the
    [`aria-label`](https://www.w3.org/TR/wai-aria/#aria-label)
    attribute) and optionally shown to the user in other ways (such
    as the
    [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
    attribute).
    
    The given placeholder string is a suggestion for how to display
    the character visually.
    */
    render?: ((code: number, description: string | null, placeholder: string) => HTMLElement) | null;
    /**
    Regular expression that matches the special characters to
    highlight. Must have its 'g'/global flag set.
    */
    specialChars?: RegExp;
    /**
    Regular expression that can be used to add characters to the
    default set of characters to highlight.
    */
    addSpecialChars?: RegExp | null;
}
/**
Returns an extension that installs highlighting of special
characters.
*/
declare function highlightSpecialChars(
/**
Configuration options.
*/
config?: SpecialCharConfig): Extension;

/**
Returns an extension that makes sure the content has a bottom
margin equivalent to the height of the editor, minus one line
height, so that every line in the document can be scrolled to the
top of the editor.

This is only meaningful when the editor is scrollable, and should
not be enabled in editors that take the size of their content.
*/
declare function scrollPastEnd(): Extension;

/**
Mark lines that have a cursor on them with the `"cm-activeLine"`
DOM class.
*/
declare function highlightActiveLine(): Extension;

/**
Extension that enables a placeholder—a piece of example content
to show when the editor is empty.
*/
declare function placeholder(content: string | HTMLElement | ((view: EditorView) => HTMLElement)): Extension;

/**
Markers shown in a [layer](https://codemirror.net/6/docs/ref/#view.layer) must conform to this
interface. They are created in a measuring phase, and have to
contain all their positioning information, so that they can be
drawn without further DOM layout reading.

Markers are automatically absolutely positioned. Their parent
element has the same top-left corner as the document, so they
should be positioned relative to the document.
*/
interface LayerMarker {
    /**
    Compare this marker to a marker of the same type. Used to avoid
    unnecessary redraws.
    */
    eq(other: LayerMarker): boolean;
    /**
    Draw the marker to the DOM.
    */
    draw(): HTMLElement;
    /**
    Update an existing marker of this type to this marker.
    */
    update?(dom: HTMLElement, oldMarker: LayerMarker): boolean;
}
/**
Implementation of [`LayerMarker`](https://codemirror.net/6/docs/ref/#view.LayerMarker) that creates
a rectangle at a given set of coordinates.
*/
declare class RectangleMarker implements LayerMarker {
    private className;
    /**
    The left position of the marker (in pixels, document-relative).
    */
    readonly left: number;
    /**
    The top position of the marker.
    */
    readonly top: number;
    /**
    The width of the marker, or null if it shouldn't get a width assigned.
    */
    readonly width: number | null;
    /**
    The height of the marker.
    */
    readonly height: number;
    /**
    Create a marker with the given class and dimensions. If `width`
    is null, the DOM element will get no width style.
    */
    constructor(className: string, 
    /**
    The left position of the marker (in pixels, document-relative).
    */
    left: number, 
    /**
    The top position of the marker.
    */
    top: number, 
    /**
    The width of the marker, or null if it shouldn't get a width assigned.
    */
    width: number | null, 
    /**
    The height of the marker.
    */
    height: number);
    draw(): HTMLDivElement;
    update(elt: HTMLElement, prev: RectangleMarker): boolean;
    private adjust;
    eq(p: RectangleMarker): boolean;
    /**
    Create a set of rectangles for the given selection range,
    assigning them theclass`className`. Will create a single
    rectangle for empty ranges, and a set of selection-style
    rectangles covering the range's content (in a bidi-aware
    way) for non-empty ones.
    */
    static forRange(view: EditorView, className: string, range: SelectionRange): readonly RectangleMarker[];
}
interface LayerConfig {
    /**
    Determines whether this layer is shown above or below the text.
    */
    above: boolean;
    /**
    When given, this class is added to the DOM element that will
    wrap the markers.
    */
    class?: string;
    /**
    Called on every view update. Returning true triggers a marker
    update (a call to `markers` and drawing of those markers).
    */
    update(update: ViewUpdate, layer: HTMLElement): boolean;
    /**
    Whether to update this layer every time the document view
    changes. Defaults to true.
    */
    updateOnDocViewUpdate?: boolean;
    /**
    Build a set of markers for this layer, and measure their
    dimensions.
    */
    markers(view: EditorView): readonly LayerMarker[];
    /**
    If given, this is called when the layer is created.
    */
    mount?(layer: HTMLElement, view: EditorView): void;
    /**
    If given, called when the layer is removed from the editor or
    the entire editor is destroyed.
    */
    destroy?(layer: HTMLElement, view: EditorView): void;
}
/**
Define a layer.
*/
declare function layer(config: LayerConfig): Extension;

/**
Helper class used to make it easier to maintain decorations on
visible code that matches a given regular expression. To be used
in a [view plugin](https://codemirror.net/6/docs/ref/#view.ViewPlugin). Instances of this object
represent a matching configuration.
*/
declare class MatchDecorator {
    private regexp;
    private addMatch;
    private boundary;
    private maxLength;
    /**
    Create a decorator.
    */
    constructor(config: {
        /**
        The regular expression to match against the content. Will only
        be matched inside lines (not across them). Should have its 'g'
        flag set.
        */
        regexp: RegExp;
        /**
        The decoration to apply to matches, either directly or as a
        function of the match.
        */
        decoration?: Decoration | ((match: RegExpExecArray, view: EditorView, pos: number) => Decoration | null);
        /**
        Customize the way decorations are added for matches. This
        function, when given, will be called for matches and should
        call `add` to create decorations for them. Note that the
        decorations should appear *in* the given range, and the
        function should have no side effects beyond calling `add`.
        
        The `decoration` option is ignored when `decorate` is
        provided.
        */
        decorate?: (add: (from: number, to: number, decoration: Decoration) => void, from: number, to: number, match: RegExpExecArray, view: EditorView) => void;
        /**
        By default, changed lines are re-matched entirely. You can
        provide a boundary expression, which should match single
        character strings that can never occur in `regexp`, to reduce
        the amount of re-matching.
        */
        boundary?: RegExp;
        /**
        Matching happens by line, by default, but when lines are
        folded or very long lines are only partially drawn, the
        decorator may avoid matching part of them for speed. This
        controls how much additional invisible content it should
        include in its matches. Defaults to 1000.
        */
        maxLength?: number;
    });
    /**
    Compute the full set of decorations for matches in the given
    view's viewport. You'll want to call this when initializing your
    plugin.
    */
    createDeco(view: EditorView): _codemirror_state.RangeSet<Decoration>;
    /**
    Update a set of decorations for a view update. `deco` _must_ be
    the set of decorations produced by _this_ `MatchDecorator` for
    the view state before the update.
    */
    updateDeco(update: ViewUpdate, deco: DecorationSet): DecorationSet;
    private updateRange;
}

/**
Create an extension that enables rectangular selections. By
default, it will react to left mouse drag with the Alt key held
down. When such a selection occurs, the text within the rectangle
that was dragged over will be selected, as one selection
[range](https://codemirror.net/6/docs/ref/#state.SelectionRange) per line.
*/
declare function rectangularSelection(options?: {
    /**
    A custom predicate function, which takes a `mousedown` event and
    returns true if it should be used for rectangular selection.
    */
    eventFilter?: (event: MouseEvent) => boolean;
}): Extension;
/**
Returns an extension that turns the pointer cursor into a
crosshair when a given modifier key, defaulting to Alt, is held
down. Can serve as a visual hint that rectangular selection is
going to happen when paired with
[`rectangularSelection`](https://codemirror.net/6/docs/ref/#view.rectangularSelection).
*/
declare function crosshairCursor(options?: {
    key?: "Alt" | "Control" | "Shift" | "Meta";
}): Extension;

/**
Creates an extension that configures tooltip behavior.
*/
declare function tooltips(config?: {
    /**
    By default, tooltips use `"fixed"`
    [positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position),
    which has the advantage that tooltips don't get cut off by
    scrollable parent elements. However, CSS rules like `contain:
    layout` can break fixed positioning in child nodes, which can be
    worked about by using `"absolute"` here.
    
    On iOS, which at the time of writing still doesn't properly
    support fixed positioning, the library always uses absolute
    positioning.
    
    If the tooltip parent element sits in a transformed element, the
    library also falls back to absolute positioning.
    */
    position?: "fixed" | "absolute";
    /**
    The element to put the tooltips into. By default, they are put
    in the editor (`cm-editor`) element, and that is usually what
    you want. But in some layouts that can lead to positioning
    issues, and you need to use a different parent to work around
    those.
    */
    parent?: HTMLElement;
    /**
    By default, when figuring out whether there is room for a
    tooltip at a given position, the extension considers the entire
    space between 0,0 and
    `documentElement.clientWidth`/`clientHeight` to be available for
    showing tooltips. You can provide a function here that returns
    an alternative rectangle.
    */
    tooltipSpace?: (view: EditorView) => Rect;
}): Extension;
/**
Describes a tooltip. Values of this type, when provided through
the [`showTooltip`](https://codemirror.net/6/docs/ref/#view.showTooltip) facet, control the
individual tooltips on the editor.
*/
interface Tooltip {
    /**
    The document position at which to show the tooltip.
    */
    pos: number;
    /**
    The end of the range annotated by this tooltip, if different
    from `pos`.
    */
    end?: number;
    /**
    A constructor function that creates the tooltip's [DOM
    representation](https://codemirror.net/6/docs/ref/#view.TooltipView).
    */
    create(view: EditorView): TooltipView;
    /**
    Whether the tooltip should be shown above or below the target
    position. Not guaranteed to be respected for hover tooltips
    since all hover tooltips for the same range are always
    positioned together. Defaults to false.
    */
    above?: boolean;
    /**
    Whether the `above` option should be honored when there isn't
    enough space on that side to show the tooltip inside the
    viewport. Defaults to false.
    */
    strictSide?: boolean;
    /**
    When set to true, show a triangle connecting the tooltip element
    to position `pos`.
    */
    arrow?: boolean;
    /**
    By default, tooltips are hidden when their position is outside
    of the visible editor content. Set this to false to turn that
    off.
    */
    clip?: boolean;
}
/**
Describes the way a tooltip is displayed.
*/
interface TooltipView {
    /**
    The DOM element to position over the editor.
    */
    dom: HTMLElement;
    /**
    Adjust the position of the tooltip relative to its anchor
    position. A positive `x` value will move the tooltip
    horizontally along with the text direction (so right in
    left-to-right context, left in right-to-left). A positive `y`
    will move the tooltip up when it is above its anchor, and down
    otherwise.
    */
    offset?: {
        x: number;
        y: number;
    };
    /**
    By default, a tooltip's screen position will be based on the
    text position of its `pos` property. This method can be provided
    to make the tooltip view itself responsible for finding its
    screen position.
    */
    getCoords?: (pos: number) => Rect;
    /**
    By default, tooltips are moved when they overlap with other
    tooltips. Set this to `true` to disable that behavior for this
    tooltip.
    */
    overlap?: boolean;
    /**
    Called after the tooltip is added to the DOM for the first time.
    */
    mount?(view: EditorView): void;
    /**
    Update the DOM element for a change in the view's state.
    */
    update?(update: ViewUpdate): void;
    /**
    Called when the tooltip is removed from the editor or the editor
    is destroyed.
    */
    destroy?(): void;
    /**
    Called when the tooltip has been (re)positioned. The argument is
    the [space](https://codemirror.net/6/docs/ref/#view.tooltips^config.tooltipSpace) available to the
    tooltip.
    */
    positioned?(space: Rect): void;
    /**
    By default, the library will restrict the size of tooltips so
    that they don't stick out of the available space. Set this to
    false to disable that.
    */
    resize?: boolean;
}
/**
Facet to which an extension can add a value to show a tooltip.
*/
declare const showTooltip: Facet<Tooltip | null, readonly (Tooltip | null)[]>;
/**
The type of function that can be used as a [hover tooltip
source](https://codemirror.net/6/docs/ref/#view.hoverTooltip^source).
*/
type HoverTooltipSource = (view: EditorView, pos: number, side: -1 | 1) => Tooltip | readonly Tooltip[] | null | Promise<Tooltip | readonly Tooltip[] | null>;
/**
Set up a hover tooltip, which shows up when the pointer hovers
over ranges of text. The callback is called when the mouse hovers
over the document text. It should, if there is a tooltip
associated with position `pos`, return the tooltip description
(either directly or in a promise). The `side` argument indicates
on which side of the position the pointer is—it will be -1 if the
pointer is before the position, 1 if after the position.

Note that all hover tooltips are hosted within a single tooltip
container element. This allows multiple tooltips over the same
range to be "merged" together without overlapping.

The return value is a valid [editor extension](https://codemirror.net/6/docs/ref/#state.Extension)
but also provides an `active` property holding a state field that
can be used to read the currently active tooltips produced by this
extension.
*/
declare function hoverTooltip(source: HoverTooltipSource, options?: {
    /**
    Controls whether a transaction hides the tooltip. The default
    is to not hide.
    */
    hideOn?: (tr: Transaction, tooltip: Tooltip) => boolean;
    /**
    When enabled (this defaults to false), close the tooltip
    whenever the document changes or the selection is set.
    */
    hideOnChange?: boolean | "touch";
    /**
    Hover time after which the tooltip should appear, in
    milliseconds. Defaults to 300ms.
    */
    hoverTime?: number;
}): Extension & {
    active: StateField<readonly Tooltip[]>;
};
/**
Get the active tooltip view for a given tooltip, if available.
*/
declare function getTooltip(view: EditorView, tooltip: Tooltip): TooltipView | null;
/**
Returns true if any hover tooltips are currently active.
*/
declare function hasHoverTooltips(state: EditorState): boolean;
/**
Transaction effect that closes all hover tooltips.
*/
declare const closeHoverTooltips: StateEffect<null>;
/**
Tell the tooltip extension to recompute the position of the active
tooltips. This can be useful when something happens (such as a
re-positioning or CSS change affecting the editor) that could
invalidate the existing tooltip positions.
*/
declare function repositionTooltips(view: EditorView): void;

type PanelConfig = {
    /**
    By default, panels will be placed inside the editor's DOM
    structure. You can use this option to override where panels with
    `top: true` are placed.
    */
    topContainer?: HTMLElement;
    /**
    Override where panels with `top: false` are placed.
    */
    bottomContainer?: HTMLElement;
};
/**
Configures the panel-managing extension.
*/
declare function panels(config?: PanelConfig): Extension;
/**
Object that describes an active panel.
*/
interface Panel {
    /**
    The element representing this panel. The library will add the
    `"cm-panel"` DOM class to this.
    */
    dom: HTMLElement;
    /**
    Optionally called after the panel has been added to the editor.
    */
    mount?(): void;
    /**
    Update the DOM for a given view update.
    */
    update?(update: ViewUpdate): void;
    /**
    Called when the panel is removed from the editor or the editor
    is destroyed.
    */
    destroy?(): void;
    /**
    Whether the panel should be at the top or bottom of the editor.
    Defaults to false.
    */
    top?: boolean;
}
/**
Get the active panel created by the given constructor, if any.
This can be useful when you need access to your panels' DOM
structure.
*/
declare function getPanel(view: EditorView, panel: PanelConstructor): Panel | null;
/**
A function that initializes a panel. Used in
[`showPanel`](https://codemirror.net/6/docs/ref/#view.showPanel).
*/
type PanelConstructor = (view: EditorView) => Panel;
/**
Opening a panel is done by providing a constructor function for
the panel through this facet. (The panel is closed again when its
constructor is no longer provided.) Values of `null` are ignored.
*/
declare const showPanel: Facet<PanelConstructor | null, readonly (PanelConstructor | null)[]>;

type DialogConfig = {
    /**
    A function to render the content of the dialog. The result
    should contain at least one `<form>` element. Submit handlers a
    handler for the Escape key will be added to the form.
    
    If this is not given, the `label`, `input`, and `submitLabel`
    fields will be used to create a simple form for you.
    */
    content?: (view: EditorView, close: () => void) => HTMLElement;
    /**
    When `content` isn't given, this provides the text shown in the
    dialog.
    */
    label?: string;
    /**
    The attributes for an input element shown next to the label. If
    not given, no input element is added.
    */
    input?: {
        [attr: string]: string;
    };
    /**
    The label for the button that submits the form. Defaults to
    `"OK"`.
    */
    submitLabel?: string;
    /**
    Extra classes to add to the panel.
    */
    class?: string;
    /**
    A query selector to find the field that should be focused when
    the dialog is opened. When set to true, this picks the first
    `<input>` or `<button>` element in the form.
    */
    focus?: string | boolean;
    /**
    By default, dialogs are shown below the editor. Set this to
    `true` to have it show up at the top.
    */
    top?: boolean;
};
/**
Show a panel above or below the editor to show the user a message
or prompt them for input. Returns an effect that can be dispatched
to close the dialog, and a promise that resolves when the dialog
is closed or a form inside of it is submitted.

You are encouraged, if your handling of the result of the promise
dispatches a transaction, to include the `close` effect in it. If
you don't, this function will automatically dispatch a separate
transaction right after.
*/
declare function showDialog(view: EditorView, config: DialogConfig): {
    close: StateEffect<unknown>;
    result: Promise<HTMLFormElement | null>;
};
/**
Find the [`Panel`](https://codemirror.net/6/docs/ref/#view.Panel) for an open dialog, using a class
name as identifier.
*/
declare function getDialog(view: EditorView, className: string): Panel | null;

/**
A gutter marker represents a bit of information attached to a line
in a specific gutter. Your own custom markers have to extend this
class.
*/
declare abstract class GutterMarker extends RangeValue {
    /**
    Compare this marker to another marker of the same type.
    */
    eq(other: GutterMarker): boolean;
    /**
    Render the DOM node for this marker, if any.
    */
    toDOM?(view: EditorView): Node;
    /**
    This property can be used to add CSS classes to the gutter
    element that contains this marker.
    */
    elementClass: string;
    /**
    Called if the marker has a `toDOM` method and its representation
    was removed from a gutter.
    */
    destroy(dom: Node): void;
}
/**
Facet used to add a class to all gutter elements for a given line.
Markers given to this facet should _only_ define an
[`elementclass`](https://codemirror.net/6/docs/ref/#view.GutterMarker.elementClass), not a
[`toDOM`](https://codemirror.net/6/docs/ref/#view.GutterMarker.toDOM) (or the marker will appear
in all gutters for the line).
*/
declare const gutterLineClass: Facet<RangeSet<GutterMarker>, readonly RangeSet<GutterMarker>[]>;
/**
Facet used to add a class to all gutter elements next to a widget.
Should not provide widgets with a `toDOM` method.
*/
declare const gutterWidgetClass: Facet<(view: EditorView, widget: WidgetType, block: BlockInfo) => GutterMarker | null, readonly ((view: EditorView, widget: WidgetType, block: BlockInfo) => GutterMarker | null)[]>;
type Handlers = {
    [event: string]: (view: EditorView, line: BlockInfo, event: Event) => boolean;
};
interface GutterConfig {
    /**
    An extra CSS class to be added to the wrapper (`cm-gutter`)
    element.
    */
    class?: string;
    /**
    Controls whether empty gutter elements should be rendered.
    Defaults to false.
    */
    renderEmptyElements?: boolean;
    /**
    Retrieve a set of markers to use in this gutter.
    */
    markers?: (view: EditorView) => (RangeSet<GutterMarker> | readonly RangeSet<GutterMarker>[]);
    /**
    Can be used to optionally add a single marker to every line.
    */
    lineMarker?: (view: EditorView, line: BlockInfo, otherMarkers: readonly GutterMarker[]) => GutterMarker | null;
    /**
    Associate markers with block widgets in the document.
    */
    widgetMarker?: (view: EditorView, widget: WidgetType, block: BlockInfo) => GutterMarker | null;
    /**
    If line or widget markers depend on additional state, and should
    be updated when that changes, pass a predicate here that checks
    whether a given view update might change the line markers.
    */
    lineMarkerChange?: null | ((update: ViewUpdate) => boolean);
    /**
    Add a hidden spacer element that gives the gutter its base
    width.
    */
    initialSpacer?: null | ((view: EditorView) => GutterMarker);
    /**
    Update the spacer element when the view is updated.
    */
    updateSpacer?: null | ((spacer: GutterMarker, update: ViewUpdate) => GutterMarker);
    /**
    Supply event handlers for DOM events on this gutter.
    */
    domEventHandlers?: Handlers;
    /**
    By default, gutters are shown horizontally before the editor
    content (to the left in a left-to-right layout). Set this to
    `"after"` to show a gutter on the other side of the content.
    */
    side?: "before" | "after";
}
/**
Define an editor gutter. The order in which the gutters appear is
determined by their extension priority.
*/
declare function gutter(config: GutterConfig): Extension;
/**
The gutter-drawing plugin is automatically enabled when you add a
gutter, but you can use this function to explicitly configure it.

Unless `fixed` is explicitly set to `false`, the gutters are
fixed, meaning they don't scroll along with the content
horizontally (except on Internet Explorer, which doesn't support
CSS [`position:
sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)).
*/
declare function gutters(config?: {
    fixed?: boolean;
}): Extension;
interface LineNumberConfig {
    /**
    How to display line numbers. Defaults to simply converting them
    to string.
    */
    formatNumber?: (lineNo: number, state: EditorState) => string;
    /**
    Supply event handlers for DOM events on this gutter.
    */
    domEventHandlers?: Handlers;
}
/**
Facet used to provide markers to the line number gutter.
*/
declare const lineNumberMarkers: Facet<RangeSet<GutterMarker>, readonly RangeSet<GutterMarker>[]>;
/**
Facet used to create markers in the line number gutter next to widgets.
*/
declare const lineNumberWidgetMarker: Facet<(view: EditorView, widget: WidgetType, block: BlockInfo) => GutterMarker | null, readonly ((view: EditorView, widget: WidgetType, block: BlockInfo) => GutterMarker | null)[]>;
/**
Create a line number gutter extension.
*/
declare function lineNumbers(config?: LineNumberConfig): Extension;
/**
Returns an extension that adds a `cm-activeLineGutter` class to
all gutter elements on the [active
line](https://codemirror.net/6/docs/ref/#view.highlightActiveLine).
*/
declare function highlightActiveLineGutter(): Extension;

/**
Returns an extension that highlights whitespace, adding a
`cm-highlightSpace` class to stretches of spaces, and a
`cm-highlightTab` class to individual tab characters. By default,
the former are shown as faint dots, and the latter as arrows.
*/
declare function highlightWhitespace(): Extension;
/**
Returns an extension that adds a `cm-trailingSpace` class to all
trailing whitespace.
*/
declare function highlightTrailingWhitespace(): Extension;

export { BidiSpan, BlockInfo, BlockType, type Command, type DOMEventHandlers, type DOMEventMap, Decoration, type DecorationSet, Direction, EditorView, type EditorViewConfig, GutterMarker, type HoverTooltipSource, type KeyBinding, type LayerMarker, MatchDecorator, type MouseSelectionStyle, type Panel, type PanelConstructor, type PluginSpec, type PluginValue, type Rect, RectangleMarker, type Tooltip, type TooltipView, ViewPlugin, ViewUpdate, WidgetType, closeHoverTooltips, crosshairCursor, drawSelection, dropCursor, getDialog, getDrawSelectionConfig, getPanel, getTooltip, gutter, gutterLineClass, gutterWidgetClass, gutters, hasHoverTooltips, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, highlightTrailingWhitespace, highlightWhitespace, hoverTooltip, keymap, layer, lineNumberMarkers, lineNumberWidgetMarker, lineNumbers, logException, panels, placeholder, rectangularSelection, repositionTooltips, runScopeHandlers, scrollPastEnd, showDialog, showPanel, showTooltip, tooltips };
