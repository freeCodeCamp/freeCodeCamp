/**
The [`TreeFragment.applyChanges`](#common.TreeFragment^applyChanges)
method expects changed ranges in this format.
*/
interface ChangedRange {
    /**
    The start of the change in the start document
    */
    fromA: number;
    /**
    The end of the change in the start document
    */
    toA: number;
    /**
    The start of the replacement in the new document
    */
    fromB: number;
    /**
    The end of the replacement in the new document
    */
    toB: number;
}
/**
Tree fragments are used during [incremental
parsing](#common.Parser.startParse) to track parts of old trees
that can be reused in a new parse. An array of fragments is used
to track regions of an old tree whose nodes might be reused in new
parses. Use the static
[`applyChanges`](#common.TreeFragment^applyChanges) method to
update fragments for document changes.
*/
declare class TreeFragment {
    /**
    The start of the unchanged range pointed to by this fragment.
    This refers to an offset in the _updated_ document (as opposed
    to the original tree).
    */
    readonly from: number;
    /**
    The end of the unchanged range.
    */
    readonly to: number;
    /**
    The tree that this fragment is based on.
    */
    readonly tree: Tree;
    /**
    The offset between the fragment's tree and the document that
    this fragment can be used against. Add this when going from
    document to tree positions, subtract it to go from tree to
    document positions.
    */
    readonly offset: number;
    /**
    Construct a tree fragment. You'll usually want to use
    [`addTree`](#common.TreeFragment^addTree) and
    [`applyChanges`](#common.TreeFragment^applyChanges) instead of
    calling this directly.
    */
    constructor(
    /**
    The start of the unchanged range pointed to by this fragment.
    This refers to an offset in the _updated_ document (as opposed
    to the original tree).
    */
    from: number, 
    /**
    The end of the unchanged range.
    */
    to: number, 
    /**
    The tree that this fragment is based on.
    */
    tree: Tree, 
    /**
    The offset between the fragment's tree and the document that
    this fragment can be used against. Add this when going from
    document to tree positions, subtract it to go from tree to
    document positions.
    */
    offset: number, openStart?: boolean, openEnd?: boolean);
    /**
    Whether the start of the fragment represents the start of a
    parse, or the end of a change. (In the second case, it may not
    be safe to reuse some nodes at the start, depending on the
    parsing algorithm.)
    */
    get openStart(): boolean;
    /**
    Whether the end of the fragment represents the end of a
    full-document parse, or the start of a change.
    */
    get openEnd(): boolean;
    /**
    Create a set of fragments from a freshly parsed tree, or update
    an existing set of fragments by replacing the ones that overlap
    with a tree with content from the new tree. When `partial` is
    true, the parse is treated as incomplete, and the resulting
    fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
    true.
    */
    static addTree(tree: Tree, fragments?: readonly TreeFragment[], partial?: boolean): readonly TreeFragment[];
    /**
    Apply a set of edits to an array of fragments, removing or
    splitting fragments as necessary to remove edited ranges, and
    adjusting offsets for fragments that moved.
    */
    static applyChanges(fragments: readonly TreeFragment[], changes: readonly ChangedRange[], minGap?: number): readonly TreeFragment[];
}
/**
Interface used to represent an in-progress parse, which can be
moved forward piece-by-piece.
*/
interface PartialParse {
    /**
    Advance the parse state by some amount. Will return the finished
    syntax tree when the parse completes.
    */
    advance(): Tree | null;
    /**
    The position up to which the document has been parsed. Note
    that, in multi-pass parsers, this will stay back until the last
    pass has moved past a given position.
    */
    readonly parsedPos: number;
    /**
    Tell the parse to not advance beyond the given position.
    `advance` will return a tree when the parse has reached the
    position. Note that, depending on the parser algorithm and the
    state of the parse when `stopAt` was called, that tree may
    contain nodes beyond the position. It is an error to call
    `stopAt` with a higher position than it's [current
    value](#common.PartialParse.stoppedAt).
    */
    stopAt(pos: number): void;
    /**
    Reports whether `stopAt` has been called on this parse.
    */
    readonly stoppedAt: number | null;
}
/**
A superclass that parsers should extend.
*/
declare abstract class Parser {
    /**
    Start a parse for a single tree. This is the method concrete
    parser implementations must implement. Called by `startParse`,
    with the optional arguments resolved.
    */
    abstract createParse(input: Input, fragments: readonly TreeFragment[], ranges: readonly {
        from: number;
        to: number;
    }[]): PartialParse;
    /**
    Start a parse, returning a [partial parse](#common.PartialParse)
    object. [`fragments`](#common.TreeFragment) can be passed in to
    make the parse incremental.
    
    By default, the entire input is parsed. You can pass `ranges`,
    which should be a sorted array of non-empty, non-overlapping
    ranges, to parse only those ranges. The tree returned in that
    case will start at `ranges[0].from`.
    */
    startParse(input: Input | string, fragments?: readonly TreeFragment[], ranges?: readonly {
        from: number;
        to: number;
    }[]): PartialParse;
    /**
    Run a full parse, returning the resulting tree.
    */
    parse(input: Input | string, fragments?: readonly TreeFragment[], ranges?: readonly {
        from: number;
        to: number;
    }[]): Tree;
}
/**
This is the interface parsers use to access the document. To run
Lezer directly on your own document data structure, you have to
write an implementation of it.
*/
interface Input {
    /**
    The length of the document.
    */
    readonly length: number;
    /**
    Get the chunk after the given position. The returned string
    should start at `from` and, if that isn't the end of the
    document, may be of any length greater than zero.
    */
    chunk(from: number): string;
    /**
    Indicates whether the chunks already end at line breaks, so that
    client code that wants to work by-line can avoid re-scanning
    them for line breaks. When this is true, the result of `chunk()`
    should either be a single line break, or the content between
    `from` and the next line break.
    */
    readonly lineChunks: boolean;
    /**
    Read the part of the document between the given positions.
    */
    read(from: number, to: number): string;
}
/**
Parse wrapper functions are supported by some parsers to inject
additional parsing logic.
*/
type ParseWrapper = (inner: PartialParse, input: Input, fragments: readonly TreeFragment[], ranges: readonly {
    from: number;
    to: number;
}[]) => PartialParse;

/**
The default maximum length of a `TreeBuffer` node.
*/
declare const DefaultBufferLength = 1024;
/**
Each [node type](#common.NodeType) or [individual tree](#common.Tree)
can have metadata associated with it in props. Instances of this
class represent prop names.
*/
declare class NodeProp<T> {
    /**
    Indicates whether this prop is stored per [node
    type](#common.NodeType) or per [tree node](#common.Tree).
    */
    perNode: boolean;
    /**
    A method that deserializes a value of this prop from a string.
    Can be used to allow a prop to be directly written in a grammar
    file.
    */
    deserialize: (str: string) => T;
    /**
    Create a new node prop type.
    */
    constructor(config?: {
        /**
        The [deserialize](#common.NodeProp.deserialize) function to
        use for this prop, used for example when directly providing
        the prop from a grammar file. Defaults to a function that
        raises an error.
        */
        deserialize?: (str: string) => T;
        /**
        By default, node props are stored in the [node
        type](#common.NodeType). It can sometimes be useful to directly
        store information (usually related to the parsing algorithm)
        in [nodes](#common.Tree) themselves. Set this to true to enable
        that for this prop.
        */
        perNode?: boolean;
    });
    /**
    This is meant to be used with
    [`NodeSet.extend`](#common.NodeSet.extend) or
    [`LRParser.configure`](#lr.ParserConfig.props) to compute
    prop values for each node type in the set. Takes a [match
    object](#common.NodeType^match) or function that returns undefined
    if the node type doesn't get this prop, and the prop's value if
    it does.
    */
    add(match: {
        [selector: string]: T;
    } | ((type: NodeType) => T | undefined)): NodePropSource;
    /**
    Prop that is used to describe matching delimiters. For opening
    delimiters, this holds an array of node names (written as a
    space-separated string when declaring this prop in a grammar)
    for the node types of closing delimiters that match it.
    */
    static closedBy: NodeProp<readonly string[]>;
    /**
    The inverse of [`closedBy`](#common.NodeProp^closedBy). This is
    attached to closing delimiters, holding an array of node names
    of types of matching opening delimiters.
    */
    static openedBy: NodeProp<readonly string[]>;
    /**
    Used to assign node types to groups (for example, all node
    types that represent an expression could be tagged with an
    `"Expression"` group).
    */
    static group: NodeProp<readonly string[]>;
    /**
    Attached to nodes to indicate these should be
    [displayed](https://codemirror.net/docs/ref/#language.syntaxTree)
    in a bidirectional text isolate, so that direction-neutral
    characters on their sides don't incorrectly get associated with
    surrounding text. You'll generally want to set this for nodes
    that contain arbitrary text, like strings and comments, and for
    nodes that appear _inside_ arbitrary text, like HTML tags. When
    not given a value, in a grammar declaration, defaults to
    `"auto"`.
    */
    static isolate: NodeProp<"rtl" | "ltr" | "auto">;
    /**
    The hash of the [context](#lr.ContextTracker.constructor)
    that the node was parsed in, if any. Used to limit reuse of
    contextual nodes.
    */
    static contextHash: NodeProp<number>;
    /**
    The distance beyond the end of the node that the tokenizer
    looked ahead for any of the tokens inside the node. (The LR
    parser only stores this when it is larger than 25, for
    efficiency reasons.)
    */
    static lookAhead: NodeProp<number>;
    /**
    This per-node prop is used to replace a given node, or part of a
    node, with another tree. This is useful to include trees from
    different languages in mixed-language parsers.
    */
    static mounted: NodeProp<MountedTree>;
}
/**
A mounted tree, which can be [stored](#common.NodeProp^mounted) on
a tree node to indicate that parts of its content are
represented by another tree.
*/
declare class MountedTree {
    /**
    The inner tree.
    */
    readonly tree: Tree;
    /**
    If this is null, this tree replaces the entire node (it will
    be included in the regular iteration instead of its host
    node). If not, only the given ranges are considered to be
    covered by this tree. This is used for trees that are mixed in
    a way that isn't strictly hierarchical. Such mounted trees are
    only entered by [`resolveInner`](#common.Tree.resolveInner)
    and [`enter`](#common.SyntaxNode.enter).
    */
    readonly overlay: readonly {
        from: number;
        to: number;
    }[] | null;
    /**
    The parser used to create this subtree.
    */
    readonly parser: Parser;
    constructor(
    /**
    The inner tree.
    */
    tree: Tree, 
    /**
    If this is null, this tree replaces the entire node (it will
    be included in the regular iteration instead of its host
    node). If not, only the given ranges are considered to be
    covered by this tree. This is used for trees that are mixed in
    a way that isn't strictly hierarchical. Such mounted trees are
    only entered by [`resolveInner`](#common.Tree.resolveInner)
    and [`enter`](#common.SyntaxNode.enter).
    */
    overlay: readonly {
        from: number;
        to: number;
    }[] | null, 
    /**
    The parser used to create this subtree.
    */
    parser: Parser);
}
/**
Type returned by [`NodeProp.add`](#common.NodeProp.add). Describes
whether a prop should be added to a given node type in a node set,
and what value it should have.
*/
type NodePropSource = (type: NodeType) => null | [NodeProp<any>, any];
/**
Each node in a syntax tree has a node type associated with it.
*/
declare class NodeType {
    /**
    The name of the node type. Not necessarily unique, but if the
    grammar was written properly, different node types with the
    same name within a node set should play the same semantic
    role.
    */
    readonly name: string;
    /**
    The id of this node in its set. Corresponds to the term ids
    used in the parser.
    */
    readonly id: number;
    /**
    Define a node type.
    */
    static define(spec: {
        /**
        The ID of the node type. When this type is used in a
        [set](#common.NodeSet), the ID must correspond to its index in
        the type array.
        */
        id: number;
        /**
        The name of the node type. Leave empty to define an anonymous
        node.
        */
        name?: string;
        /**
        [Node props](#common.NodeProp) to assign to the type. The value
        given for any given prop should correspond to the prop's type.
        */
        props?: readonly ([NodeProp<any>, any] | NodePropSource)[];
        /**
        Whether this is a [top node](#common.NodeType.isTop).
        */
        top?: boolean;
        /**
        Whether this node counts as an [error
        node](#common.NodeType.isError).
        */
        error?: boolean;
        /**
        Whether this node is a [skipped](#common.NodeType.isSkipped)
        node.
        */
        skipped?: boolean;
    }): NodeType;
    /**
    Retrieves a node prop for this type. Will return `undefined` if
    the prop isn't present on this node.
    */
    prop<T>(prop: NodeProp<T>): T | undefined;
    /**
    True when this is the top node of a grammar.
    */
    get isTop(): boolean;
    /**
    True when this node is produced by a skip rule.
    */
    get isSkipped(): boolean;
    /**
    Indicates whether this is an error node.
    */
    get isError(): boolean;
    /**
    When true, this node type doesn't correspond to a user-declared
    named node, for example because it is used to cache repetition.
    */
    get isAnonymous(): boolean;
    /**
    Returns true when this node's name or one of its
    [groups](#common.NodeProp^group) matches the given string.
    */
    is(name: string | number): boolean;
    /**
    An empty dummy node type to use when no actual type is available.
    */
    static none: NodeType;
    /**
    Create a function from node types to arbitrary values by
    specifying an object whose property names are node or
    [group](#common.NodeProp^group) names. Often useful with
    [`NodeProp.add`](#common.NodeProp.add). You can put multiple
    names, separated by spaces, in a single property name to map
    multiple node names to a single value.
    */
    static match<T>(map: {
        [selector: string]: T;
    }): (node: NodeType) => T | undefined;
}
/**
A node set holds a collection of node types. It is used to
compactly represent trees by storing their type ids, rather than a
full pointer to the type object, in a numeric array. Each parser
[has](#lr.LRParser.nodeSet) a node set, and [tree
buffers](#common.TreeBuffer) can only store collections of nodes
from the same set. A set can have a maximum of 2**16 (65536) node
types in it, so that the ids fit into 16-bit typed array slots.
*/
declare class NodeSet {
    /**
    The node types in this set, by id.
    */
    readonly types: readonly NodeType[];
    /**
    Create a set with the given types. The `id` property of each
    type should correspond to its position within the array.
    */
    constructor(
    /**
    The node types in this set, by id.
    */
    types: readonly NodeType[]);
    /**
    Create a copy of this set with some node properties added. The
    arguments to this method can be created with
    [`NodeProp.add`](#common.NodeProp.add).
    */
    extend(...props: NodePropSource[]): NodeSet;
}
/**
Options that control iteration. Can be combined with the `|`
operator to enable multiple ones.
*/
declare enum IterMode {
    /**
    When enabled, iteration will only visit [`Tree`](#common.Tree)
    objects, not nodes packed into
    [`TreeBuffer`](#common.TreeBuffer)s.
    */
    ExcludeBuffers = 1,
    /**
    Enable this to make iteration include anonymous nodes (such as
    the nodes that wrap repeated grammar constructs into a balanced
    tree).
    */
    IncludeAnonymous = 2,
    /**
    By default, regular [mounted](#common.NodeProp^mounted) nodes
    replace their base node in iteration. Enable this to ignore them
    instead.
    */
    IgnoreMounts = 4,
    /**
    This option only applies in
    [`enter`](#common.SyntaxNode.enter)-style methods. It tells the
    library to not enter mounted overlays if one covers the given
    position.
    */
    IgnoreOverlays = 8
}
/**
A piece of syntax tree. There are two ways to approach these
trees: the way they are actually stored in memory, and the
convenient way.

Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
objects. By packing detail information into `TreeBuffer` leaf
nodes, the representation is made a lot more memory-efficient.

However, when you want to actually work with tree nodes, this
representation is very awkward, so most client code will want to
use the [`TreeCursor`](#common.TreeCursor) or
[`SyntaxNode`](#common.SyntaxNode) interface instead, which provides
a view on some part of this data structure, and can be used to
move around to adjacent nodes.
*/
declare class Tree {
    /**
    The type of the top node.
    */
    readonly type: NodeType;
    /**
    This node's child nodes.
    */
    readonly children: readonly (Tree | TreeBuffer)[];
    /**
    The positions (offsets relative to the start of this tree) of
    the children.
    */
    readonly positions: readonly number[];
    /**
    The total length of this tree
    */
    readonly length: number;
    /**
    Construct a new tree. See also [`Tree.build`](#common.Tree^build).
    */
    constructor(
    /**
    The type of the top node.
    */
    type: NodeType, 
    /**
    This node's child nodes.
    */
    children: readonly (Tree | TreeBuffer)[], 
    /**
    The positions (offsets relative to the start of this tree) of
    the children.
    */
    positions: readonly number[], 
    /**
    The total length of this tree
    */
    length: number, 
    /**
    Per-node [node props](#common.NodeProp) to associate with this node.
    */
    props?: readonly [NodeProp<any> | number, any][]);
    /**
    The empty tree
    */
    static empty: Tree;
    /**
    Get a [tree cursor](#common.TreeCursor) positioned at the top of
    the tree. Mode can be used to [control](#common.IterMode) which
    nodes the cursor visits.
    */
    cursor(mode?: IterMode): TreeCursor;
    /**
    Get a [tree cursor](#common.TreeCursor) pointing into this tree
    at the given position and side (see
    [`moveTo`](#common.TreeCursor.moveTo).
    */
    cursorAt(pos: number, side?: -1 | 0 | 1, mode?: IterMode): TreeCursor;
    /**
    Get a [syntax node](#common.SyntaxNode) object for the top of the
    tree.
    */
    get topNode(): SyntaxNode;
    /**
    Get the [syntax node](#common.SyntaxNode) at the given position.
    If `side` is -1, this will move into nodes that end at the
    position. If 1, it'll move into nodes that start at the
    position. With 0, it'll only enter nodes that cover the position
    from both sides.
    
    Note that this will not enter
    [overlays](#common.MountedTree.overlay), and you often want
    [`resolveInner`](#common.Tree.resolveInner) instead.
    */
    resolve(pos: number, side?: -1 | 0 | 1): SyntaxNode;
    /**
    Like [`resolve`](#common.Tree.resolve), but will enter
    [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
    pointing into the innermost overlaid tree at the given position
    (with parent links going through all parent structure, including
    the host trees).
    */
    resolveInner(pos: number, side?: -1 | 0 | 1): SyntaxNode;
    /**
    In some situations, it can be useful to iterate through all
    nodes around a position, including those in overlays that don't
    directly cover the position. This method gives you an iterator
    that will produce all nodes, from small to big, around the given
    position.
    */
    resolveStack(pos: number, side?: -1 | 0 | 1): NodeIterator;
    /**
    Iterate over the tree and its children, calling `enter` for any
    node that touches the `from`/`to` region (if given) before
    running over such a node's children, and `leave` (if given) when
    leaving the node. When `enter` returns `false`, that node will
    not have its children iterated over (or `leave` called).
    */
    iterate(spec: {
        enter(node: SyntaxNodeRef): boolean | void;
        leave?(node: SyntaxNodeRef): void;
        from?: number;
        to?: number;
        mode?: IterMode;
    }): void;
    /**
    Get the value of the given [node prop](#common.NodeProp) for this
    node. Works with both per-node and per-type props.
    */
    prop<T>(prop: NodeProp<T>): T | undefined;
    /**
    Returns the node's [per-node props](#common.NodeProp.perNode) in a
    format that can be passed to the [`Tree`](#common.Tree)
    constructor.
    */
    get propValues(): readonly [NodeProp<any> | number, any][];
    /**
    Balance the direct children of this tree, producing a copy of
    which may have children grouped into subtrees with type
    [`NodeType.none`](#common.NodeType^none).
    */
    balance(config?: {
        /**
        Function to create the newly balanced subtrees.
        */
        makeTree?: (children: readonly (Tree | TreeBuffer)[], positions: readonly number[], length: number) => Tree;
    }): Tree;
    /**
    Build a tree from a postfix-ordered buffer of node information,
    or a cursor over such a buffer.
    */
    static build(data: BuildData): Tree;
}
/**
Represents a sequence of nodes.
*/
type NodeIterator = {
    node: SyntaxNode;
    next: NodeIterator | null;
};
type BuildData = {
    /**
    The buffer or buffer cursor to read the node data from.
    
    When this is an array, it should contain four values for every
    node in the tree.
    
     - The first holds the node's type, as a node ID pointing into
       the given `NodeSet`.
     - The second holds the node's start offset.
     - The third the end offset.
     - The fourth the amount of space taken up in the array by this
       node and its children. Since there's four values per node,
       this is the total number of nodes inside this node (children
       and transitive children) plus one for the node itself, times
       four.
    
    Parent nodes should appear _after_ child nodes in the array. As
    an example, a node of type 10 spanning positions 0 to 4, with
    two children, of type 11 and 12, might look like this:
    
        [11, 0, 1, 4, 12, 2, 4, 4, 10, 0, 4, 12]
    */
    buffer: BufferCursor | readonly number[];
    /**
    The node types to use.
    */
    nodeSet: NodeSet;
    /**
    The id of the top node type.
    */
    topID: number;
    /**
    The position the tree should start at. Defaults to 0.
    */
    start?: number;
    /**
    The position in the buffer where the function should stop
    reading. Defaults to 0.
    */
    bufferStart?: number;
    /**
    The length of the wrapping node. The end offset of the last
    child is used when not provided.
    */
    length?: number;
    /**
    The maximum buffer length to use. Defaults to
    [`DefaultBufferLength`](#common.DefaultBufferLength).
    */
    maxBufferLength?: number;
    /**
    An optional array holding reused nodes that the buffer can refer
    to.
    */
    reused?: readonly Tree[];
    /**
    The first node type that indicates repeat constructs in this
    grammar.
    */
    minRepeatType?: number;
};
/**
This is used by `Tree.build` as an abstraction for iterating over
a tree buffer. A cursor initially points at the very last element
in the buffer. Every time `next()` is called it moves on to the
previous one.
*/
interface BufferCursor {
    /**
    The current buffer position (four times the number of nodes
    remaining).
    */
    pos: number;
    /**
    The node ID of the next node in the buffer.
    */
    id: number;
    /**
    The start position of the next node in the buffer.
    */
    start: number;
    /**
    The end position of the next node.
    */
    end: number;
    /**
    The size of the next node (the number of nodes inside, counting
    the node itself, times 4).
    */
    size: number;
    /**
    Moves `this.pos` down by 4.
    */
    next(): void;
    /**
    Create a copy of this cursor.
    */
    fork(): BufferCursor;
}
/**
Tree buffers contain (type, start, end, endIndex) quads for each
node. In such a buffer, nodes are stored in prefix order (parents
before children, with the endIndex of the parent indicating which
children belong to it).
*/
declare class TreeBuffer {
    /**
    The buffer's content.
    */
    readonly buffer: Uint16Array;
    /**
    The total length of the group of nodes in the buffer.
    */
    readonly length: number;
    /**
    The node set used in this buffer.
    */
    readonly set: NodeSet;
    /**
    Create a tree buffer.
    */
    constructor(
    /**
    The buffer's content.
    */
    buffer: Uint16Array, 
    /**
    The total length of the group of nodes in the buffer.
    */
    length: number, 
    /**
    The node set used in this buffer.
    */
    set: NodeSet);
}
/**
The set of properties provided by both [`SyntaxNode`](#common.SyntaxNode)
and [`TreeCursor`](#common.TreeCursor). Note that, if you need
an object that is guaranteed to stay stable in the future, you
need to use the [`node`](#common.SyntaxNodeRef.node) accessor.
*/
interface SyntaxNodeRef {
    /**
    The start position of the node.
    */
    readonly from: number;
    /**
    The end position of the node.
    */
    readonly to: number;
    /**
    The type of the node.
    */
    readonly type: NodeType;
    /**
    The name of the node (`.type.name`).
    */
    readonly name: string;
    /**
    Get the [tree](#common.Tree) that represents the current node,
    if any. Will return null when the node is in a [tree
    buffer](#common.TreeBuffer).
    */
    readonly tree: Tree | null;
    /**
    Retrieve a stable [syntax node](#common.SyntaxNode) at this
    position.
    */
    readonly node: SyntaxNode;
    /**
    Test whether the node matches a given context—a sequence of
    direct parent nodes. Empty strings in the context array act as
    wildcards, other strings must match the ancestor node's name.
    */
    matchContext(context: readonly string[]): boolean;
}
/**
A syntax node provides an immutable pointer to a given node in a
tree. When iterating over large amounts of nodes, you may want to
use a mutable [cursor](#common.TreeCursor) instead, which is more
efficient.
*/
interface SyntaxNode extends SyntaxNodeRef {
    /**
    The node's parent node, if any.
    */
    parent: SyntaxNode | null;
    /**
    The first child, if the node has children.
    */
    firstChild: SyntaxNode | null;
    /**
    The node's last child, if available.
    */
    lastChild: SyntaxNode | null;
    /**
    The first child that ends after `pos`.
    */
    childAfter(pos: number): SyntaxNode | null;
    /**
    The last child that starts before `pos`.
    */
    childBefore(pos: number): SyntaxNode | null;
    /**
    Enter the child at the given position. If side is -1 the child
    may end at that position, when 1 it may start there.
    
    This will by default enter
    [overlaid](#common.MountedTree.overlay)
    [mounted](#common.NodeProp^mounted) trees. You can set
    `overlays` to false to disable that.
    
    Similarly, when `buffers` is false this will not enter
    [buffers](#common.TreeBuffer), only [nodes](#common.Tree) (which
    is mostly useful when looking for props, which cannot exist on
    buffer-allocated nodes).
    */
    enter(pos: number, side: -1 | 0 | 1, mode?: IterMode): SyntaxNode | null;
    /**
    This node's next sibling, if any.
    */
    nextSibling: SyntaxNode | null;
    /**
    This node's previous sibling.
    */
    prevSibling: SyntaxNode | null;
    /**
    A [tree cursor](#common.TreeCursor) starting at this node.
    */
    cursor(mode?: IterMode): TreeCursor;
    /**
    Find the node around, before (if `side` is -1), or after (`side`
    is 1) the given position. Will look in parent nodes if the
    position is outside this node.
    */
    resolve(pos: number, side?: -1 | 0 | 1): SyntaxNode;
    /**
    Similar to `resolve`, but enter
    [overlaid](#common.MountedTree.overlay) nodes.
    */
    resolveInner(pos: number, side?: -1 | 0 | 1): SyntaxNode;
    /**
    Move the position to the innermost node before `pos` that looks
    like it is unfinished (meaning it ends in an error node or has a
    child ending in an error node right at its end).
    */
    enterUnfinishedNodesBefore(pos: number): SyntaxNode;
    /**
    Get a [tree](#common.Tree) for this node. Will allocate one if it
    points into a buffer.
    */
    toTree(): Tree;
    /**
    Get the first child of the given type (which may be a [node
    name](#common.NodeType.name) or a [group
    name](#common.NodeProp^group)). If `before` is non-null, only
    return children that occur somewhere after a node with that name
    or group. If `after` is non-null, only return children that
    occur somewhere before a node with that name or group.
    */
    getChild(type: string | number, before?: string | number | null, after?: string | number | null): SyntaxNode | null;
    /**
    Like [`getChild`](#common.SyntaxNode.getChild), but return all
    matching children, not just the first.
    */
    getChildren(type: string | number, before?: string | number | null, after?: string | number | null): SyntaxNode[];
}
/**
A tree cursor object focuses on a given node in a syntax tree, and
allows you to move to adjacent nodes.
*/
declare class TreeCursor implements SyntaxNodeRef {
    /**
    The node's type.
    */
    type: NodeType;
    /**
    Shorthand for `.type.name`.
    */
    get name(): string;
    /**
    The start source offset of this node.
    */
    from: number;
    /**
    The end source offset.
    */
    to: number;
    private stack;
    private bufferNode;
    private yieldNode;
    private yieldBuf;
    /**
    Move the cursor to this node's first child. When this returns
    false, the node has no child, and the cursor has not been moved.
    */
    firstChild(): boolean;
    /**
    Move the cursor to this node's last child.
    */
    lastChild(): boolean;
    /**
    Move the cursor to the first child that ends after `pos`.
    */
    childAfter(pos: number): boolean;
    /**
    Move to the last child that starts before `pos`.
    */
    childBefore(pos: number): boolean;
    /**
    Move the cursor to the child around `pos`. If side is -1 the
    child may end at that position, when 1 it may start there. This
    will also enter [overlaid](#common.MountedTree.overlay)
    [mounted](#common.NodeProp^mounted) trees unless `overlays` is
    set to false.
    */
    enter(pos: number, side: -1 | 0 | 1, mode?: IterMode): boolean;
    /**
    Move to the node's parent node, if this isn't the top node.
    */
    parent(): boolean;
    /**
    Move to this node's next sibling, if any.
    */
    nextSibling(): boolean;
    /**
    Move to this node's previous sibling, if any.
    */
    prevSibling(): boolean;
    private atLastNode;
    private move;
    /**
    Move to the next node in a
    [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
    traversal, going from a node to its first child or, if the
    current node is empty or `enter` is false, its next sibling or
    the next sibling of the first parent node that has one.
    */
    next(enter?: boolean): boolean;
    /**
    Move to the next node in a last-to-first pre-order traversal. A
    node is followed by its last child or, if it has none, its
    previous sibling or the previous sibling of the first parent
    node that has one.
    */
    prev(enter?: boolean): boolean;
    /**
    Move the cursor to the innermost node that covers `pos`. If
    `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    it will enter nodes that start at `pos`.
    */
    moveTo(pos: number, side?: -1 | 0 | 1): this;
    /**
    Get a [syntax node](#common.SyntaxNode) at the cursor's current
    position.
    */
    get node(): SyntaxNode;
    /**
    Get the [tree](#common.Tree) that represents the current node, if
    any. Will return null when the node is in a [tree
    buffer](#common.TreeBuffer).
    */
    get tree(): Tree | null;
    /**
    Iterate over the current node and all its descendants, calling
    `enter` when entering a node and `leave`, if given, when leaving
    one. When `enter` returns `false`, any children of that node are
    skipped, and `leave` isn't called for it.
    */
    iterate(enter: (node: SyntaxNodeRef) => boolean | void, leave?: (node: SyntaxNodeRef) => void): void;
    /**
    Test whether the current node matches a given context—a sequence
    of direct parent node names. Empty strings in the context array
    are treated as wildcards.
    */
    matchContext(context: readonly string[]): boolean;
}
/**
Provides a way to associate values with pieces of trees. As long
as that part of the tree is reused, the associated values can be
retrieved from an updated tree.
*/
declare class NodeWeakMap<T> {
    private map;
    private setBuffer;
    private getBuffer;
    /**
    Set the value for this syntax node.
    */
    set(node: SyntaxNode, value: T): void;
    /**
    Retrieve value for this syntax node, if it exists in the map.
    */
    get(node: SyntaxNode): T | undefined;
    /**
    Set the value for the node that a cursor currently points to.
    */
    cursorSet(cursor: TreeCursor, value: T): void;
    /**
    Retrieve the value for the node that a cursor currently points
    to.
    */
    cursorGet(cursor: TreeCursor): T | undefined;
}

/**
Objects returned by the function passed to
[`parseMixed`](#common.parseMixed) should conform to this
interface.
*/
interface NestedParse {
    /**
    The parser to use for the inner region.
    */
    parser: Parser;
    /**
    When this property is not given, the entire node is parsed with
    this parser, and it is [mounted](#common.NodeProp^mounted) as a
    non-overlay node, replacing its host node in tree iteration.
    
    When an array of ranges is given, only those ranges are parsed,
    and the tree is mounted as an
    [overlay](#common.MountedTree.overlay).
    
    When a function is given, that function will be called for
    descendant nodes of the target node, not including child nodes
    that are covered by another nested parse, to determine the
    overlay ranges. When it returns true, the entire descendant is
    included, otherwise just the range given. The mixed parser will
    optimize range-finding in reused nodes, which means it's a good
    idea to use a function here when the target node is expected to
    have a large, deep structure.
    */
    overlay?: readonly {
        from: number;
        to: number;
    }[] | ((node: SyntaxNodeRef) => {
        from: number;
        to: number;
    } | boolean);
}
/**
Create a parse wrapper that, after the inner parse completes,
scans its tree for mixed language regions with the `nest`
function, runs the resulting [inner parses](#common.NestedParse),
and then [mounts](#common.NodeProp^mounted) their results onto the
tree.
*/
declare function parseMixed(nest: (node: SyntaxNodeRef, input: Input) => NestedParse | null): ParseWrapper;

export { BufferCursor, ChangedRange, DefaultBufferLength, Input, IterMode, MountedTree, NestedParse, NodeIterator, NodeProp, NodePropSource, NodeSet, NodeType, NodeWeakMap, ParseWrapper, Parser, PartialParse, SyntaxNode, SyntaxNodeRef, Tree, TreeBuffer, TreeCursor, TreeFragment, parseMixed };
