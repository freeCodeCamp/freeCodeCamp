// Type definitions for Mdast 3.0
// Project: https://github.com/syntax-tree/mdast, https://github.com/wooorm/mdast
// Definitions by: Christian Murphy <https://github.com/ChristianMurphy>
//                 Jun Lu <https://github.com/lujun2>
//                 Remco Haszing <https://github.com/remcohaszing>
//                 Titus Wormer <https://github.com/wooorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Literal as UnistLiteral, Node, Parent as UnistParent } from "unist";

export type AlignType = "left" | "right" | "center" | null;

export type ReferenceType = "shortcut" | "collapsed" | "full";

/**
 * This map registers all node types that may be used where markdown block content is accepted.
 *
 * These types are accepted inside block quotes, list items, footnotes, and roots.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'mdast' {
 *   interface BlockContentMap {
 *     // Allow using math nodes defined by `remark-math`.
 *     math: Math;
 *   }
 * }
 */
export interface BlockContentMap {
    paragraph: Paragraph;
    heading: Heading;
    thematicBreak: ThematicBreak;
    blockquote: Blockquote;
    list: List;
    table: Table;
    html: HTML;
    code: Code;
}

/**
 * This map registers all frontmatter node types.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'mdast' {
 *   interface FrontmatterContentMap {
 *     // Allow using toml nodes defined by `remark-frontmatter`.
 *     toml: TOML;
 *   }
 * }
 */
export interface FrontmatterContentMap {
    yaml: YAML;
}

/**
 * This map registers all node definition types.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'mdast' {
 *   interface DefinitionContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface DefinitionContentMap {
    definition: Definition;
    footnoteDefinition: FootnoteDefinition;
}

/**
 * This map registers all node types that are acceptable in a static phrasing context.
 *
 * This interface can be augmented to register custom node types in a phrasing context, including links and link
 * references.
 *
 * @example
 * declare module 'mdast' {
 *   interface StaticPhrasingContentMap {
 *     mdxJsxTextElement: MDXJSXTextElement;
 *   }
 * }
 */
export interface StaticPhrasingContentMap {
    text: Text;
    emphasis: Emphasis;
    strong: Strong;
    delete: Delete;
    html: HTML;
    inlineCode: InlineCode;
    break: Break;
    image: Image;
    imageReference: ImageReference;
    footnote: Footnote;
    footnoteReference: FootnoteReference;
}

/**
 * This map registers all node types that are acceptable in a (interactive) phrasing context (so not in links).
 *
 * This interface can be augmented to register custom node types in a phrasing context, excluding links and link
 * references.
 *
 * @example
 * declare module 'mdast' {
 *   interface PhrasingContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface PhrasingContentMap extends StaticPhrasingContentMap {
    link: Link;
    linkReference: LinkReference;
}

/**
 * This map registers all node types that are acceptable inside lists.
 *
 * This interface can be augmented to register custom node types that are acceptable inside lists.
 *
 * @example
 * declare module 'mdast' {
 *   interface ListContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface ListContentMap {
    listItem: ListItem;
}

/**
 * This map registers all node types that are acceptable inside tables (not table cells).
 *
 * This interface can be augmented to register custom node types that are acceptable inside tables.
 *
 * @example
 * declare module 'mdast' {
 *   interface TableContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface TableContentMap {
    tableRow: TableRow;
}

/**
 * This map registers all node types that are acceptable inside tables rows (not table cells).
 *
 * This interface can be augmented to register custom node types that are acceptable inside table rows.
 *
 * @example
 * declare module 'mdast' {
 *   interface RowContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface RowContentMap {
    tableCell: TableCell;
}

export type Content = TopLevelContent | ListContent | TableContent | RowContent | PhrasingContent;

export type TopLevelContent = BlockContent | FrontmatterContent | DefinitionContent;

export type BlockContent = BlockContentMap[keyof BlockContentMap];

export type FrontmatterContent = FrontmatterContentMap[keyof FrontmatterContentMap];

export type DefinitionContent = DefinitionContentMap[keyof DefinitionContentMap];

export type ListContent = ListContentMap[keyof ListContentMap];

export type TableContent = TableContentMap[keyof TableContentMap];

export type RowContent = RowContentMap[keyof RowContentMap];

export type PhrasingContent = PhrasingContentMap[keyof PhrasingContentMap];

export type StaticPhrasingContent = StaticPhrasingContentMap[keyof StaticPhrasingContentMap];

export interface Parent extends UnistParent {
    children: Content[];
}

export interface Literal extends UnistLiteral {
    value: string;
}

export interface Root extends Parent {
    type: "root";
}

export interface Paragraph extends Parent {
    type: "paragraph";
    children: PhrasingContent[];
}

export interface Heading extends Parent {
    type: "heading";
    depth: 1 | 2 | 3 | 4 | 5 | 6;
    children: PhrasingContent[];
}

export interface ThematicBreak extends Node {
    type: "thematicBreak";
}

export interface Blockquote extends Parent {
    type: "blockquote";
    children: Array<BlockContent | DefinitionContent>;
}

export interface List extends Parent {
    type: "list";
    ordered?: boolean | null | undefined;
    start?: number | null | undefined;
    spread?: boolean | null | undefined;
    children: ListContent[];
}

export interface ListItem extends Parent {
    type: "listItem";
    checked?: boolean | null | undefined;
    spread?: boolean | null | undefined;
    children: Array<BlockContent | DefinitionContent>;
}

export interface Table extends Parent {
    type: "table";
    align?: AlignType[] | null | undefined;
    children: TableContent[];
}

export interface TableRow extends Parent {
    type: "tableRow";
    children: RowContent[];
}

export interface TableCell extends Parent {
    type: "tableCell";
    children: PhrasingContent[];
}

export interface HTML extends Literal {
    type: "html";
}

export interface Code extends Literal {
    type: "code";
    lang?: string | null | undefined;
    meta?: string | null | undefined;
}

export interface YAML extends Literal {
    type: "yaml";
}

export interface Definition extends Node, Association, Resource {
    type: "definition";
}

export interface FootnoteDefinition extends Parent, Association {
    type: "footnoteDefinition";
    children: Array<BlockContent | DefinitionContent>;
}

export interface Text extends Literal {
    type: "text";
}

export interface Emphasis extends Parent {
    type: "emphasis";
    children: PhrasingContent[];
}

export interface Strong extends Parent {
    type: "strong";
    children: PhrasingContent[];
}

export interface Delete extends Parent {
    type: "delete";
    children: PhrasingContent[];
}

export interface InlineCode extends Literal {
    type: "inlineCode";
}

export interface Break extends Node {
    type: "break";
}

export interface Link extends Parent, Resource {
    type: "link";
    children: StaticPhrasingContent[];
}

export interface Image extends Node, Resource, Alternative {
    type: "image";
}

export interface LinkReference extends Parent, Reference {
    type: "linkReference";
    children: StaticPhrasingContent[];
}

export interface ImageReference extends Node, Reference, Alternative {
    type: "imageReference";
}

export interface Footnote extends Parent {
    type: "footnote";
    children: PhrasingContent[];
}

export interface FootnoteReference extends Node, Association {
    type: "footnoteReference";
}

// Mixin
export interface Resource {
    url: string;
    title?: string | null | undefined;
}

export interface Association {
    identifier: string;
    label?: string | null | undefined;
}

export interface Reference extends Association {
    referenceType: ReferenceType;
}

export interface Alternative {
    alt?: string | null | undefined;
}
