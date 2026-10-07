export declare type Selector = PseudoSelector | PseudoElement | AttributeSelector | TagSelector | UniversalSelector | Traversal;
export declare enum SelectorType {
    Attribute = "attribute",
    Pseudo = "pseudo",
    PseudoElement = "pseudo-element",
    Tag = "tag",
    Universal = "universal",
    Adjacent = "adjacent",
    Child = "child",
    Descendant = "descendant",
    Parent = "parent",
    Sibling = "sibling",
    ColumnCombinator = "column-combinator"
}
/**
 * Modes for ignore case.
 *
 * This could be updated to an enum, and the object is
 * the current stand-in that will allow code to be updated
 * without big changes.
 */
export declare const IgnoreCaseMode: {
    readonly Unknown: null;
    readonly QuirksMode: "quirks";
    readonly IgnoreCase: true;
    readonly CaseSensitive: false;
};
export interface AttributeSelector {
    type: SelectorType.Attribute;
    name: string;
    action: AttributeAction;
    value: string;
    ignoreCase: "quirks" | boolean | null;
    namespace: string | null;
}
export declare type DataType = Selector[][] | null | string;
export interface PseudoSelector {
    type: SelectorType.Pseudo;
    name: string;
    data: DataType;
}
export interface PseudoElement {
    type: SelectorType.PseudoElement;
    name: string;
    data: string | null;
}
export interface TagSelector {
    type: SelectorType.Tag;
    name: string;
    namespace: string | null;
}
export interface UniversalSelector {
    type: SelectorType.Universal;
    namespace: string | null;
}
export interface Traversal {
    type: TraversalType;
}
export declare enum AttributeAction {
    Any = "any",
    Element = "element",
    End = "end",
    Equals = "equals",
    Exists = "exists",
    Hyphen = "hyphen",
    Not = "not",
    Start = "start"
}
export declare type TraversalType = SelectorType.Adjacent | SelectorType.Child | SelectorType.Descendant | SelectorType.Parent | SelectorType.Sibling | SelectorType.ColumnCombinator;
//# sourceMappingURL=types.d.ts.map