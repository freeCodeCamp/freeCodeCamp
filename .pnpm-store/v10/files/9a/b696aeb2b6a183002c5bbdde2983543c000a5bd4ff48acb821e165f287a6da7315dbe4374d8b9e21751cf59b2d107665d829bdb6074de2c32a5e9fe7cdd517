import * as _lezer_common from '@lezer/common';
import { NodeType, Tree, SyntaxNodeRef } from '@lezer/common';

/**
Highlighting tags are markers that denote a highlighting category.
They are [associated](#highlight.styleTags) with parts of a syntax
tree by a language mode, and then mapped to an actual CSS style by
a [highlighter](#highlight.Highlighter).

Because syntax tree node types and highlight styles have to be
able to talk the same language, CodeMirror uses a mostly _closed_
[vocabulary](#highlight.tags) of syntax tags (as opposed to
traditional open string-based systems, which make it hard for
highlighting themes to cover all the tokens produced by the
various languages).

It _is_ possible to [define](#highlight.Tag^define) your own
highlighting tags for system-internal use (where you control both
the language package and the highlighter), but such tags will not
be picked up by regular highlighters (though you can derive them
from standard tags to allow highlighters to fall back to those).
*/
declare class Tag {
    /**
    The set of this tag and all its parent tags, starting with
    this one itself and sorted in order of decreasing specificity.
    */
    readonly set: Tag[];
    toString(): string;
    /**
    Define a new tag. If `parent` is given, the tag is treated as a
    sub-tag of that parent, and
    [highlighters](#highlight.tagHighlighter) that don't mention
    this tag will try to fall back to the parent tag (or grandparent
    tag, etc).
    */
    static define(name?: string, parent?: Tag): Tag;
    static define(parent?: Tag): Tag;
    /**
    Define a tag _modifier_, which is a function that, given a tag,
    will return a tag that is a subtag of the original. Applying the
    same modifier to a twice tag will return the same value (`m1(t1)
    == m1(t1)`) and applying multiple modifiers will, regardless or
    order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
    
    When multiple modifiers are applied to a given base tag, each
    smaller set of modifiers is registered as a parent, so that for
    example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
    `m1(m3(t1)`, and so on.
    */
    static defineModifier(name?: string): (tag: Tag) => Tag;
}
/**
This function is used to add a set of tags to a language syntax
via [`NodeSet.extend`](#common.NodeSet.extend) or
[`LRParser.configure`](#lr.LRParser.configure).

The argument object maps node selectors to [highlighting
tags](#highlight.Tag) or arrays of tags.

Node selectors may hold one or more (space-separated) node paths.
Such a path can be a [node name](#common.NodeType.name), or
multiple node names (or `*` wildcards) separated by slash
characters, as in `"Block/Declaration/VariableName"`. Such a path
matches the final node but only if its direct parent nodes are the
other nodes mentioned. A `*` in such a path matches any parent,
but only a single level—wildcards that match multiple parents
aren't supported, both for efficiency reasons and because Lezer
trees make it rather hard to reason about what they would match.)

A path can be ended with `/...` to indicate that the tag assigned
to the node should also apply to all child nodes, even if they
match their own style (by default, only the innermost style is
used).

When a path ends in `!`, as in `Attribute!`, no further matching
happens for the node's child nodes, and the entire node gets the
given style.

In this notation, node names that contain `/`, `!`, `*`, or `...`
must be quoted as JSON strings.

For example:

```javascript
parser.withProps(
  styleTags({
    // Style Number and BigNumber nodes
    "Number BigNumber": tags.number,
    // Style Escape nodes whose parent is String
    "String/Escape": tags.escape,
    // Style anything inside Attributes nodes
    "Attributes!": tags.meta,
    // Add a style to all content inside Italic nodes
    "Italic/...": tags.emphasis,
    // Style InvalidString nodes as both `string` and `invalid`
    "InvalidString": [tags.string, tags.invalid],
    // Style the node named "/" as punctuation
    '"/"': tags.punctuation
  })
)
```
*/
declare function styleTags(spec: {
    [selector: string]: Tag | readonly Tag[];
}): _lezer_common.NodePropSource;
/**
A highlighter defines a mapping from highlighting tags and
language scopes to CSS class names. They are usually defined via
[`tagHighlighter`](#highlight.tagHighlighter) or some wrapper
around that, but it is also possible to implement them from
scratch.
*/
interface Highlighter {
    /**
    Get the set of classes that should be applied to the given set
    of highlighting tags, or null if this highlighter doesn't assign
    a style to the tags.
    */
    style(tags: readonly Tag[]): string | null;
    /**
    When given, the highlighter will only be applied to trees on
    whose [top](#common.NodeType.isTop) node this predicate returns
    true.
    */
    scope?(node: NodeType): boolean;
}
/**
Define a [highlighter](#highlight.Highlighter) from an array of
tag/class pairs. Classes associated with more specific tags will
take precedence.
*/
declare function tagHighlighter(tags: readonly {
    tag: Tag | readonly Tag[];
    class: string;
}[], options?: {
    /**
    By default, highlighters apply to the entire document. You can
    scope them to a single language by providing the tree's
    [top](#common.NodeType.isTop) node type here.
    */
    scope?: (node: NodeType) => boolean;
    /**
    Add a style to _all_ tokens. Probably only useful in combination
    with `scope`.
    */
    all?: string;
}): Highlighter;
/**
Highlight the given [tree](#common.Tree) with the given
[highlighter](#highlight.Highlighter). Often, the higher-level
[`highlightCode`](#highlight.highlightCode) function is easier to
use.
*/
declare function highlightTree(tree: Tree, highlighter: Highlighter | readonly Highlighter[], 
/**
Assign styling to a region of the text. Will be called, in order
of position, for any ranges where more than zero classes apply.
`classes` is a space separated string of CSS classes.
*/
putStyle: (from: number, to: number, classes: string) => void, 
/**
The start of the range to highlight.
*/
from?: number, 
/**
The end of the range.
*/
to?: number): void;
/**
Highlight the given tree with the given highlighter, calling
`putText` for every piece of text, either with a set of classes or
with the empty string when unstyled, and `putBreak` for every line
break.
*/
declare function highlightCode(code: string, tree: Tree, highlighter: Highlighter | readonly Highlighter[], putText: (code: string, classes: string) => void, putBreak: () => void, from?: number, to?: number): void;
/**
Match a syntax node's [highlight rules](#highlight.styleTags). If
there's a match, return its set of tags, and whether it is
opaque (uses a `!`) or applies to all child nodes (`/...`).
*/
declare function getStyleTags(node: SyntaxNodeRef): {
    tags: readonly Tag[];
    opaque: boolean;
    inherit: boolean;
} | null;
/**
The default set of highlighting [tags](#highlight.Tag).

This collection is heavily biased towards programming languages,
and necessarily incomplete. A full ontology of syntactic
constructs would fill a stack of books, and be impractical to
write themes for. So try to make do with this set. If all else
fails, [open an
issue](https://github.com/codemirror/codemirror.next) to propose a
new tag, or [define](#highlight.Tag^define) a local custom tag for
your use case.

Note that it is not obligatory to always attach the most specific
tag possible to an element—if your grammar can't easily
distinguish a certain type of element (such as a local variable),
it is okay to style it as its more general variant (a variable).

For tags that extend some parent tag, the documentation links to
the parent.
*/
declare const tags: {
    /**
    A comment.
    */
    comment: Tag;
    /**
    A line [comment](#highlight.tags.comment).
    */
    lineComment: Tag;
    /**
    A block [comment](#highlight.tags.comment).
    */
    blockComment: Tag;
    /**
    A documentation [comment](#highlight.tags.comment).
    */
    docComment: Tag;
    /**
    Any kind of identifier.
    */
    name: Tag;
    /**
    The [name](#highlight.tags.name) of a variable.
    */
    variableName: Tag;
    /**
    A type [name](#highlight.tags.name).
    */
    typeName: Tag;
    /**
    A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
    */
    tagName: Tag;
    /**
    A property or field [name](#highlight.tags.name).
    */
    propertyName: Tag;
    /**
    An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
    */
    attributeName: Tag;
    /**
    The [name](#highlight.tags.name) of a class.
    */
    className: Tag;
    /**
    A label [name](#highlight.tags.name).
    */
    labelName: Tag;
    /**
    A namespace [name](#highlight.tags.name).
    */
    namespace: Tag;
    /**
    The [name](#highlight.tags.name) of a macro.
    */
    macroName: Tag;
    /**
    A literal value.
    */
    literal: Tag;
    /**
    A string [literal](#highlight.tags.literal).
    */
    string: Tag;
    /**
    A documentation [string](#highlight.tags.string).
    */
    docString: Tag;
    /**
    A character literal (subtag of [string](#highlight.tags.string)).
    */
    character: Tag;
    /**
    An attribute value (subtag of [string](#highlight.tags.string)).
    */
    attributeValue: Tag;
    /**
    A number [literal](#highlight.tags.literal).
    */
    number: Tag;
    /**
    An integer [number](#highlight.tags.number) literal.
    */
    integer: Tag;
    /**
    A floating-point [number](#highlight.tags.number) literal.
    */
    float: Tag;
    /**
    A boolean [literal](#highlight.tags.literal).
    */
    bool: Tag;
    /**
    Regular expression [literal](#highlight.tags.literal).
    */
    regexp: Tag;
    /**
    An escape [literal](#highlight.tags.literal), for example a
    backslash escape in a string.
    */
    escape: Tag;
    /**
    A color [literal](#highlight.tags.literal).
    */
    color: Tag;
    /**
    A URL [literal](#highlight.tags.literal).
    */
    url: Tag;
    /**
    A language keyword.
    */
    keyword: Tag;
    /**
    The [keyword](#highlight.tags.keyword) for the self or this
    object.
    */
    self: Tag;
    /**
    The [keyword](#highlight.tags.keyword) for null.
    */
    null: Tag;
    /**
    A [keyword](#highlight.tags.keyword) denoting some atomic value.
    */
    atom: Tag;
    /**
    A [keyword](#highlight.tags.keyword) that represents a unit.
    */
    unit: Tag;
    /**
    A modifier [keyword](#highlight.tags.keyword).
    */
    modifier: Tag;
    /**
    A [keyword](#highlight.tags.keyword) that acts as an operator.
    */
    operatorKeyword: Tag;
    /**
    A control-flow related [keyword](#highlight.tags.keyword).
    */
    controlKeyword: Tag;
    /**
    A [keyword](#highlight.tags.keyword) that defines something.
    */
    definitionKeyword: Tag;
    /**
    A [keyword](#highlight.tags.keyword) related to defining or
    interfacing with modules.
    */
    moduleKeyword: Tag;
    /**
    An operator.
    */
    operator: Tag;
    /**
    An [operator](#highlight.tags.operator) that dereferences something.
    */
    derefOperator: Tag;
    /**
    Arithmetic-related [operator](#highlight.tags.operator).
    */
    arithmeticOperator: Tag;
    /**
    Logical [operator](#highlight.tags.operator).
    */
    logicOperator: Tag;
    /**
    Bit [operator](#highlight.tags.operator).
    */
    bitwiseOperator: Tag;
    /**
    Comparison [operator](#highlight.tags.operator).
    */
    compareOperator: Tag;
    /**
    [Operator](#highlight.tags.operator) that updates its operand.
    */
    updateOperator: Tag;
    /**
    [Operator](#highlight.tags.operator) that defines something.
    */
    definitionOperator: Tag;
    /**
    Type-related [operator](#highlight.tags.operator).
    */
    typeOperator: Tag;
    /**
    Control-flow [operator](#highlight.tags.operator).
    */
    controlOperator: Tag;
    /**
    Program or markup punctuation.
    */
    punctuation: Tag;
    /**
    [Punctuation](#highlight.tags.punctuation) that separates
    things.
    */
    separator: Tag;
    /**
    Bracket-style [punctuation](#highlight.tags.punctuation).
    */
    bracket: Tag;
    /**
    Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
    tokens).
    */
    angleBracket: Tag;
    /**
    Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
    tokens).
    */
    squareBracket: Tag;
    /**
    Parentheses (usually `(` and `)` tokens). Subtag of
    [bracket](#highlight.tags.bracket).
    */
    paren: Tag;
    /**
    Braces (usually `{` and `}` tokens). Subtag of
    [bracket](#highlight.tags.bracket).
    */
    brace: Tag;
    /**
    Content, for example plain text in XML or markup documents.
    */
    content: Tag;
    /**
    [Content](#highlight.tags.content) that represents a heading.
    */
    heading: Tag;
    /**
    A level 1 [heading](#highlight.tags.heading).
    */
    heading1: Tag;
    /**
    A level 2 [heading](#highlight.tags.heading).
    */
    heading2: Tag;
    /**
    A level 3 [heading](#highlight.tags.heading).
    */
    heading3: Tag;
    /**
    A level 4 [heading](#highlight.tags.heading).
    */
    heading4: Tag;
    /**
    A level 5 [heading](#highlight.tags.heading).
    */
    heading5: Tag;
    /**
    A level 6 [heading](#highlight.tags.heading).
    */
    heading6: Tag;
    /**
    A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
    */
    contentSeparator: Tag;
    /**
    [Content](#highlight.tags.content) that represents a list.
    */
    list: Tag;
    /**
    [Content](#highlight.tags.content) that represents a quote.
    */
    quote: Tag;
    /**
    [Content](#highlight.tags.content) that is emphasized.
    */
    emphasis: Tag;
    /**
    [Content](#highlight.tags.content) that is styled strong.
    */
    strong: Tag;
    /**
    [Content](#highlight.tags.content) that is part of a link.
    */
    link: Tag;
    /**
    [Content](#highlight.tags.content) that is styled as code or
    monospace.
    */
    monospace: Tag;
    /**
    [Content](#highlight.tags.content) that has a strike-through
    style.
    */
    strikethrough: Tag;
    /**
    Inserted text in a change-tracking format.
    */
    inserted: Tag;
    /**
    Deleted text.
    */
    deleted: Tag;
    /**
    Changed text.
    */
    changed: Tag;
    /**
    An invalid or unsyntactic element.
    */
    invalid: Tag;
    /**
    Metadata or meta-instruction.
    */
    meta: Tag;
    /**
    [Metadata](#highlight.tags.meta) that applies to the entire
    document.
    */
    documentMeta: Tag;
    /**
    [Metadata](#highlight.tags.meta) that annotates or adds
    attributes to a given syntactic element.
    */
    annotation: Tag;
    /**
    Processing instruction or preprocessor directive. Subtag of
    [meta](#highlight.tags.meta).
    */
    processingInstruction: Tag;
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates that a
    given element is being defined. Expected to be used with the
    various [name](#highlight.tags.name) tags.
    */
    definition: (tag: Tag) => Tag;
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates that
    something is constant. Mostly expected to be used with
    [variable names](#highlight.tags.variableName).
    */
    constant: (tag: Tag) => Tag;
    /**
    [Modifier](#highlight.Tag^defineModifier) used to indicate that
    a [variable](#highlight.tags.variableName) or [property
    name](#highlight.tags.propertyName) is being called or defined
    as a function.
    */
    function: (tag: Tag) => Tag;
    /**
    [Modifier](#highlight.Tag^defineModifier) that can be applied to
    [names](#highlight.tags.name) to indicate that they belong to
    the language's standard environment.
    */
    standard: (tag: Tag) => Tag;
    /**
    [Modifier](#highlight.Tag^defineModifier) that indicates a given
    [names](#highlight.tags.name) is local to some scope.
    */
    local: (tag: Tag) => Tag;
    /**
    A generic variant [modifier](#highlight.Tag^defineModifier) that
    can be used to tag language-specific alternative variants of
    some common tag. It is recommended for themes to define special
    forms of at least the [string](#highlight.tags.string) and
    [variable name](#highlight.tags.variableName) tags, since those
    come up a lot.
    */
    special: (tag: Tag) => Tag;
};
/**
This is a highlighter that adds stable, predictable classes to
tokens, for styling with external CSS.

The following tags are mapped to their name prefixed with `"tok-"`
(for example `"tok-comment"`):

* [`link`](#highlight.tags.link)
* [`heading`](#highlight.tags.heading)
* [`emphasis`](#highlight.tags.emphasis)
* [`strong`](#highlight.tags.strong)
* [`keyword`](#highlight.tags.keyword)
* [`atom`](#highlight.tags.atom)
* [`bool`](#highlight.tags.bool)
* [`url`](#highlight.tags.url)
* [`labelName`](#highlight.tags.labelName)
* [`inserted`](#highlight.tags.inserted)
* [`deleted`](#highlight.tags.deleted)
* [`literal`](#highlight.tags.literal)
* [`string`](#highlight.tags.string)
* [`number`](#highlight.tags.number)
* [`variableName`](#highlight.tags.variableName)
* [`typeName`](#highlight.tags.typeName)
* [`namespace`](#highlight.tags.namespace)
* [`className`](#highlight.tags.className)
* [`macroName`](#highlight.tags.macroName)
* [`propertyName`](#highlight.tags.propertyName)
* [`operator`](#highlight.tags.operator)
* [`comment`](#highlight.tags.comment)
* [`meta`](#highlight.tags.meta)
* [`punctuation`](#highlight.tags.punctuation)
* [`invalid`](#highlight.tags.invalid)

In addition, these mappings are provided:

* [`regexp`](#highlight.tags.regexp),
  [`escape`](#highlight.tags.escape), and
  [`special`](#highlight.tags.special)[`(string)`](#highlight.tags.string)
  are mapped to `"tok-string2"`
* [`special`](#highlight.tags.special)[`(variableName)`](#highlight.tags.variableName)
  to `"tok-variableName2"`
* [`local`](#highlight.tags.local)[`(variableName)`](#highlight.tags.variableName)
  to `"tok-variableName tok-local"`
* [`definition`](#highlight.tags.definition)[`(variableName)`](#highlight.tags.variableName)
  to `"tok-variableName tok-definition"`
* [`definition`](#highlight.tags.definition)[`(propertyName)`](#highlight.tags.propertyName)
  to `"tok-propertyName tok-definition"`
*/
declare const classHighlighter: Highlighter;

export { Highlighter, Tag, classHighlighter, getStyleTags, highlightCode, highlightTree, styleTags, tagHighlighter, tags };
