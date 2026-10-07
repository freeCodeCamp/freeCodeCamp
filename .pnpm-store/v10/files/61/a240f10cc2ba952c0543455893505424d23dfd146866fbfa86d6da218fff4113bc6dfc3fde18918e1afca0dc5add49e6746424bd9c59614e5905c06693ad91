# ES HTML Parser

<p align="left">
<img src="https://github.com/yeonjuan/es-html-parser/actions/workflows/main.yml/badge.svg?branch=main" alt="CI Badge" />
<a href="https://codecov.io/gh/yeonjuan/es-html-parser" >
<img src="https://codecov.io/gh/yeonjuan/es-html-parser/branch/main/graph/badge.svg?token=LNYPD2GOJR"/>
</a>
<a href="https://www.npmjs.com/package/es-html-parser">
<img src="https://img.shields.io/npm/v/es-html-parser"/>
</a>
<a href="https://www.npmjs.com/package/es-html-parser">
<img src="https://img.shields.io/npm/dw/es-html-parser"/>
</a>
</p>

ES HTML Parser is a HTML parser that generates an abstract syntax tree similar to the ESTree specification.

This project began as a fork of [hyntax](https://github.com/mykolaharmash/hyntax) and is developed to follow [ESTree](https://github.com/estree/estree)-like ast specification.

See [online demo](https://yeonjuan.github.io/es-html-parser/).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API Reference](#api-reference)
- [AST Format](#ast-format)
- [License](#license)

## Install

```
npm install es-html-parser
```

## Usage

```js
import { parse } from "es-html-parser";

const input = `
<html>
  <body>
    <button type="button"> press here </button>
  </body>
</html>
`;

const { ast, tokens } = parse(input);
```

## API Reference

- [Functions](#functions)
- [Types](#types)
- [Constants](#constants)

### Functions

#### parse

```ts
parse(html: string, options?: Options): ParseResult;
```

**Arguments**

- `html`: HTML string to parse.
- `options (optional)`
  - `tokenAdapter`: The adapter option for changing tokens information.
  - `rawContentTags` (string[]) : Specifies tag names whose child contents should be treated as raw text, meaning the parser will not interpret characters like < and > as HTML syntax inside these tags.

**Returns**

- `ParseResult`: Result of parsing

### Types

#### ParseResult

```ts
interface ParseResult {
  ast: DocumentNode;
  tokens: AnyToken[];
}
```

- `ast`: The root node of the ast.
- `tokens`: An array of resulting tokens.

#### AnyNode

The `AnyNode` is an union type of all nodes.

```ts
type AnyNode =
  | DocumentNode
  | TextNode
  | TagNode
  | OpenTagStartNode
  | OpenTagEndNode
  | CloseTagNode
  | AttributeNode
  | AttributeKeyNode
  | AttributeValueNode
  | AttributeValueWrapperStartNode
  | AttributeValueWrapperEndNode
  | ScriptTagNode
  | OpenScriptTagStartNode
  | CloseScriptTagNode
  | OpenScriptTagEndNode
  | ScriptTagContentNode
  | StyleTagNode
  | OpenStyleTagStartNode
  | OpenStyleTagEndNode
  | StyleTagContentNode
  | CloseStyleTagNode
  | CommentNode
  | CommentOpenNode
  | CommentCloseNode
  | CommentContentNode
  | DoctypeNode
  | DoctypeOpenNode
  | DoctypeCloseNode
  | DoctypeAttributeNode
  | DoctypeAttributeValueNode
  | DoctypeAttributeWrapperStartNode
  | DoctypeAttributeWrapperEndNode;
```

#### AnyToken

The `AnyToken` is an union type all tokens.

```ts
type AnyToken =
  | Token<TokenTypes.Text>
  | Token<TokenTypes.OpenTagStart>
  | Token<TokenTypes.OpenTagEnd>
  | Token<TokenTypes.CloseTag>
  | Token<TokenTypes.AttributeKey>
  | Token<TokenTypes.AttributeAssignment>
  | Token<TokenTypes.AttributeValueWrapperStart>
  | Token<TokenTypes.AttributeValue>
  | Token<TokenTypes.AttributeValueWrapperEnd>
  | Token<TokenTypes.DoctypeOpen>
  | Token<TokenTypes.DoctypeAttributeValue>
  | Token<TokenTypes.DoctypeAttributeWrapperStart>
  | Token<TokenTypes.DoctypeAttributeWrapperEnd>
  | Token<TokenTypes.DoctypeClose>
  | Token<TokenTypes.CommentOpen>
  | Token<TokenTypes.CommentContent>
  | Token<TokenTypes.CommentClose>
  | Token<TokenTypes.OpenScriptTagStart>
  | Token<TokenTypes.OpenScriptTagEnd>
  | Token<TokenTypes.ScriptTagContent>
  | Token<TokenTypes.CloseScriptTag>
  | Token<TokenTypes.OpenStyleTagStart>
  | Token<TokenTypes.OpenStyleTagEnd>
  | Token<TokenTypes.StyleTagContent>
  | Token<TokenTypes.CloseStyleTag>;
```

### Constants

#### TokenTypes

```ts
enum TokenTypes {
  Text = "Text",
  OpenTagStart = "OpenTagStart",
  OpenTagEnd = "OpenTagEnd",
  CloseTag = "CloseTag",
  AttributeKey = "AttributeKey",
  AttributeAssignment = "AttributeAssignment",
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValue = "AttributeValue",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  DoctypeOpen = "DoctypeOpen",
  DoctypeAttributeValue = "DoctypeAttributeValue",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
  DoctypeClose = "DoctypeClose",
  CommentOpen = "CommentOpen",
  CommentContent = "CommentContent",
  CommentClose = "CommentClose",
  OpenScriptTagStart = "OpenScriptTagStart",
  OpenScriptTagEnd = "OpenScriptTagEnd",
  ScriptTagContent = "ScriptTagContent",
  CloseScriptTag = "CloseScriptTag",
  OpenStyleTagStart = "OpenStyleTagStart",
  OpenStyleTagEnd = "OpenStyleTagEnd",
  StyleTagContent = "StyleTagContent",
  CloseStyleTag = "CloseStyleTag",
}
```

#### NodeTypes

```ts
enum NodeTypes {
  Document = "Document",
  Tag = "Tag",
  Text = "Text",
  Doctype = "Doctype",
  Comment = "Comment",
  CommentOpen = "CommentOpen",
  CommentClose = "CommentClose",
  CommentContent = "CommentContent",
  Attribute = "Attribute",
  AttributeKey = "AttributeKey",
  AttributeValue = "AttributeValue",
  AttributeValueWrapperStart = "AttributeValueWrapperStart",
  AttributeValueWrapperEnd = "AttributeValueWrapperEnd",
  CloseTag = "CloseTag",
  OpenTagEnd = "OpenTagEnd",
  OpenTagStart = "OpenTagStart",
  DoctypeOpen = "DoctypeOpen",
  DoctypeAttribute = "DoctypeAttribute",
  DoctypeClose = "DoctypeClose",
  ScriptTag = "ScriptTag",
  OpenScriptTagStart = "OpenScriptTagStart",
  OpenScriptTagEnd = "OpenScriptTagEnd",
  ScriptTagContent = "ScriptTagContent",
  StyleTag = "StyleTag",
  OpenStyleTagStart = "OpenStyleTagStart",
  OpenStyleTagEnd = "OpenStyleTagEnd",
  StyleTagContent = "StyleTagContent",
  CloseStyleTag = "CloseStyleTag",
  CloseScriptTag = "CloseScriptTag",
  DoctypeAttributeValue = "DoctypeAttributeValue",
  DoctypeAttributeWrapperStart = "DoctypeAttributeWrapperStart",
  DoctypeAttributeWrapperEnd = "DoctypeAttributeWrapperEnd",
}
```

## AST Format

- [Common](#common)

  - [BaseNode](#basenode)
  - [SourceLocation](#sourcelocation)
  - [Position](#position)
  - [Token](#token)

- [DocumentNode](#documentnode)
- [TextNode](#textnode)
- [TagNode](#tagnode)
  - [OpenTagStartNode](#opentagstartnode)
  - [OpenTagEndNode](#opentagendnode)
  - [CloseTagNode](#closetagnode)
- [AttributeNode](#attributenode)
  - [AttributeKeyNode](#attributekeynode)
  - [AttributeValueWrapperStartNode](#attributevaluewrapperstartnode)
  - [AttributeValueWrapperEndNode](#attributevaluewrapperendnode)
  - [AttributeValueNode](#attributevaluenode)
- [ScriptTagNode](#scripttagnode)
  - [OpenScriptTagStartNode](#openscripttagstartnode)
  - [OpenScriptTagEndNode](#openscripttagendnode)
  - [CloseScriptTagNode](#closescripttagnode)
  - [ScriptTagContentNode](#scripttagcontentnode)
- [StyleTagNode](#styletagnode)
  - [OpenStyleTagStartNode](#openstyletagstartnode)
  - [OpenStyleTagEndNode](#openstyletagendnode)
  - [CloseStyleTagNode](#closestyletagnode)
  - [StyleTagContentNode](#styletagcontentnode)
- [CommentNode](#commentnode)
  - [CommentOpenNode](#commentopennode)
  - [CommentCloseNode](#commentclosenode)
  - [CommentContentNode](#commentcontentnode)
- [DoctypeNode](#doctypenode)
  - [DoctypeOpenNode](#doctypeopennode)
  - [DoctypeCloseNode](#doctypeclosenode)
- [DoctypeAttributeNode](#doctypeattributenode)
  - [DoctypeAttributeValueNode](#doctypeattributevaluenode)
  - [DoctypeAttributeWrapperStartNode](#doctypeattributewrapperstartnode)
  - [DoctypeAttributeWrapperEndNode](#doctypeattributewrapperendnode)

### Common

#### BaseNode

Every AST node and token implements the `BaseNode` interface.

```ts
interface BaseNode {
  type: string;
  loc: SourceLocation;
  range: [number, number];
}
```

The `type` field is representing the AST type. Its value is one of the `NodeTypes` or `TokenTypes`.
The `loc` and `range` fields represent the source location of the node.

#### SourceLocation

```ts
interface SourceLocation {
  start: Position;
  end: Position;
}
```

The `start` field represents the start location of the node.

The `end` field represents the end location of the node.

#### Position

```ts
interface Position {
  line: number; // >= 1
  column: number; // >= 0
}
```

The `line` field is a number representing the line number where the node positioned. (1-based index).

The `column` field is a number representing the offset in the line. (0-based index).

#### Token

All tokens implement the `Token` interface.

```ts
interface Token<T extends TokenTypes> extends BaseNode {
  type: T;
  value: string;
}
```

### DocumentNode

`DocumentNode` represents a whole parsed document. It's a root node of the AST.

```ts
interface DocumentNode extends BaseNode {
  type: "Document";
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
}
```

### TextNode

`TextNode` represents any plain text in HTML.

```ts
interface TextNode extends BaseNode {
  type: "Text";
  value: string;
}
```

### TagNode

`TagNode` represents all kinds of tag nodes in HTML except for doctype, script, style, and comment. (e.g. `<div></div>`, `<span></span>` ...)

```ts
interface TagNode extends BaseNode {
  type: "Tag";
  selfClosing: boolean;
  name: string;
  openStart: OpenTagStartNode;
  openEnd: OpenTagEndNode;
  close?: CloseTagNode;
  children: Array<TextNode | TagNode | ScriptNode | StyleNode | CommentNode>;
  attributes: Array<AttributeNode>;
}
```

#### OpenTagStartNode

`OpenTagStartNode` represents the opening part of the [Start tags](https://www.w3.org/TR/2011/WD-html5-20110405/syntax.html#start-tags). (e.g. `<div`)

```ts
interface OpenTagStartNode extends BaseNode {
  type: "OpenTagStart";
  value: string;
}
```

#### OpenTagEndNode

`OpenTagEndNode` represents the closing part of the [Start tags](https://www.w3.org/TR/2011/WD-html5-20110405/syntax.html#start-tags). (e.g. `>`, `/>`)

```ts
interface OpenTagEndNode extends BaseNode {
  type: "OpenTagEnd";
  value: string;
}
```

#### CloseTagNode

`ClosingTagNode` represents the [End tags](https://www.w3.org/TR/2011/WD-html5-20110405/syntax.html#end-tags). (e.g. `</div>`)

```ts
interface CloseTagNode extends BaseNode {
  type: "CloseTag";
  value: string;
}
```

### AttributeNode

`AttributeNode` represents an attribute. (e.g. `id="foo"`)

```ts
interface AttributeNode extends BaseNode {
  type: "Attribute";
  key: AttributeKeyNode;
  value?: AttributeValueNode;
  startWrapper?: AttributeValueWrapperStartNode;
  endWrapper?: AttributeValueWrapperEndNode;
}
```

#### AttributeKeyNode

`AttributeKeyNode` represents a key part of an attribute. (e.g. `id`)

```ts
interface AttributeKeyNode extends BaseNode {
  type: "AttributeKey";
  value: string;
}
```

#### AttributeValueWrapperStartNode

`AttributeValueWrapperStartNode` represents the left side character that wraps the value of the attribute. (e.g. `"`, `'`)

```ts
interface AttributeValueWrapperStartNode extends BaseNode {
  type: "AttributeValueWrapperStart";
  value: string;
}
```

#### AttributeValueWrapperEndNode

`AttributeValueWrapperEndNode` represents the right side character that wraps the value of the attribute. (e.g. `"`, `'`)

```ts
interface AttributeValueWrapperEndNode extends BaseNode {
  type: "AttributeValueWrapperEnd";
  value: string;
}
```

#### AttributeValueNode

`AttributeValueNode` represents the value part of the attribute. It does not include wrapper characters. (e.g. `foo`)

```ts
interface AttributeValueNode extends BaseNode {
  type: "AttributeValue";
  value: string;
}
```

### ScriptTagNode

The `ScriptTagNode` represents a script tags in the HTML. (e.g.` <script> console.log('hello'); </script>`).

```ts
interface ScriptTagNode extends BaseNode {
  type: "ScriptTag";
  attributes: Array<AttributeNode>;
  openStart: OpenScriptTagStartNode;
  openEnd: OpenScriptTagEndNode;
  close: CloseScriptTagNode;
  value?: ScriptTagContentNode;
}
```

#### OpenScriptTagStartNode

`OpenScriptTagStartNode` represents an opening part of a start script tag. (e.g. `<script`)

```ts
interface OpenScriptTagStartNode extends BaseNode {
  type: "OpenScriptTagStart";
  value: string;
}
```

#### OpenScriptTagEndNode

`OpenScriptTagEndNode` represents a closing part of a start script tag. (e.g. `>`)

```ts
interface OpenScriptTagEndNode extends BaseNode {
  type: "OpenScriptTagEnd";
  value: string;
}
```

#### CloseScriptTagNode

`CloseScriptTagNode` represents a close script tag. (e.g. `</script>`)

```ts
interface CloseScriptTagNode extends BaseNode {
  type: "CloseScriptTag";
  value: string;
}
```

#### ScriptTagContentNode

`ScriptTagContentNode` represents a script content in script tag. (e.g. `console.log('hello');`)

```ts
interface ScriptTagContentNode extends BaseNode {
  type: "ScriptTagContent";
  value: string;
}
```

### StyleTagNode

`StyleTagNode` represents style tags. (e.g. `<style> .foo {} </style>`)

```ts
interface StyleTagNode extends BaseNode {
  type: "StyleTag";
  attributes: Array<AttributeNode>;
  openStart: OpenStyleTagStartNode;
  openEnd: OpenStyleTagEndNode;
  close: CloseStyleTagNode;
  value?: StyleTagContentNode;
}
```

#### OpenStyleTagStartNode

`OpenStyleTagStartNode` represents an opening part of a start style tag. (e.g. `<style`)

```ts
interface OpenStyleTagStartNode extends BaseNode {
  type: "OpenStyleTagStart";
  value: string;
}
```

#### OpenStyleTagEndNode

`OpenStyleTagEndNode` represents a closing part of a start style tag. (e.g. `>`)

```ts
interface OpenStyleTagEndNode extends BaseNode {
  type: "OpenStyleTagEnd";
  value: string;
}
```

#### CloseStyleTagNode

`CloseStyleTagNode` represents a close style tag. (e.g. `</style>`)

```ts
interface CloseStyleTagNode extends BaseNode {
  type: "CloseStyleTag";
  value: string;
}
```

#### StyleTagContentNode

`StyleTagContentNode` represents a style content in style tag.

```ts
interface StyleTagContentNode extends BaseNode {
  type: "StyleTagContent";
  value: string;
}
```

### CommentNode

`CommentNode` represents comment in HTML. (e.g. `<!-- content --> `)

```ts
interface CommentNode extends BaseNode {
  type: "Comment";
  open: CommentOpenNode;
  close: CommentCloseNode;
  value: CommentContentNode;
}
```

#### CommentOpenNode

`CommentOpenNode` represents comment start character sequence. (e.g. `<!--`)

```ts
interface CommentOpenNode extends BaseNode {
  type: "CommentOpen";
  value: string;
}
```

#### CommentCloseNode

`CommentCloseNode` represents comment end character sequence. (e.g. `-->`)

```ts
interface CommentCloseNode extends BaseNode {
  type: "CommentClose";
  value: string;
}
```

#### CommentContentNode

The `CommentContentNode` represents text in the comment.

```ts
interface CommentContentNode extends BaseNode {
  type: "CommentContent";
  value: string;
}
```

### DoctypeNode

`DoctypeNode` represents the [DOCTYPE](https://www.w3.org/TR/2011/WD-html5-20110525/syntax.html#the-doctype) in html.

```ts
interface DoctypeNode extends BaseNode {
  type: "Doctype";
  attributes: Array<DoctypeAttributeNode>;
  open: DoctypeOpenNode;
  close: DoctypeCloseNode;
}
```

#### DoctypeOpenNode

`DoctypeOpenNode` represents character sequence of doctype start . (`<!DOCTYPE`)

```ts
interface DoctypeOpenNode extends BaseNode {
  type: "DoctypeOpen";
  value: string;
}
```

#### DoctypeCloseNode

`DoctypeCloseNode` represents the doctype end character sequence (e.g. `>`)

```ts
interface DoctypeCloseNode extends BaseNode {
  type: "DoctypeClose";
  value: string;
}
```

### DoctypeAttributeNode

`DoctypeAttributeNode` represents an attribute of doctype node. (e.g. `html`, `"-//W3C//DTD HTML 4.01 Transitional//EN"`)

```ts
interface DoctypeAttributeNode extends BaseNode {
  type: "DoctypeAttribute";
  key: DoctypeAttributeKey;
}
```

#### DoctypeAttributeValueNode

`DoctypeAttributeValueNode` represents a value of doctype node's attribute. (e.g. `html`, `-//W3C//DTD HTML 4.01 Transitional//EN`)
. It does not include wrapper characters (`'`, `"`)

```ts
interface DoctypeAttributeValueNode extends BaseNode {
  type: "DoctypeAttributeValue";
  value: string;
}
```

#### DoctypeAttributeWrapperStartNode

`DoctypeAttributeWrapperStartNode` represents a left side character that wraps the value of the attribute. (e.g. `"`, `'`)

```ts
interface DoctypeAttributeWrapperStartNode extends BaseNode {
  type: "DoctypeAttributeWrapperStart";
  value: string;
}
```

#### DoctypeAttributeWrapperEndNode

`DoctypeAttributeWrapperEndNode` represents a right side character that wraps the value of the attribute. (e.g. `"`, `'`)

```ts
interface DoctypeAttributeWrapperEndNode extends BaseNode {
  type: "DoctypeAttributeWrapperEnd";
  value: string;
}
```

## License

[MIT](./LICENSE.md)
