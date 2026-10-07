import * as Parser from "es-html-parser";
import { AnyCssNode, CssStyleSheet } from "./css-ast";

export interface Document extends Parser.DocumentNode {
  parent: null;
  children: Array<Tag | Text | Comment | Doctype | ScriptTag | StyleTag>;
}

export type Text = Parser.TextNode & {
  parent: Tag | Document | null;
};

export interface Doctype extends Parser.DoctypeNode {
  parent: Document | Tag;
  open: DoctypeOpen;
  close: DoctypeClose;
  attributes: Array<DoctypeAttribute>;
}

export interface DoctypeOpen extends Parser.DoctypeOpenNode {
  parent: Doctype;
}

export interface DoctypeClose extends Parser.DoctypeCloseNode {
  parent: Doctype;
}

export interface DoctypeAttribute extends Parser.DoctypeAttributeNode {
  parent: Doctype;
  startWrapper?: DoctypeAttributeWrapperStart;
  value?: DoctypeAttributeValue;
  endWrapper?: DoctypeAttributeWrapperEnd;
}

export interface DoctypeAttributeValue
  extends Parser.DoctypeAttributeValueNode {
  parent: DoctypeAttribute;
}

export interface DoctypeAttributeWrapperStart
  extends Parser.DoctypeAttributeWrapperStartNode {
  parent: DoctypeAttribute;
}

export interface DoctypeAttributeWrapperEnd
  extends Parser.DoctypeAttributeWrapperEndNode {
  parent: DoctypeAttribute;
}

export interface Comment extends Parser.CommentNode {
  parent: Tag | Document;
  open: CommentOpen;
  close: CommentClose;
  value: CommentContent;
}

export interface CommentOpen extends Parser.CommentOpenNode {
  parent: Comment;
}

export interface CommentClose extends Parser.CommentCloseNode {
  parent: Comment;
}

export interface CommentContent extends Parser.CommentContentNode {
  parent: Comment;
}

export interface Tag extends Parser.TagNode {
  parent: Document | Tag;
  openStart: OpenTagStart;
  openEnd: OpenTagEnd;
  attributes: Array<Attribute>;
  close?: CloseTag;
  children: Array<Tag | Text | StyleTag | ScriptTag>;
}

export interface OpenTagStart extends Parser.OpenTagStartNode {
  parent: Tag;
}

export interface OpenTagEnd extends Parser.OpenTagEndNode {
  parent: Tag;
}

export interface CloseTag extends Parser.CloseTagNode {
  parent: Tag;
}

export interface ScriptTag extends Parser.ScriptTagNode {
  parent: Document | Tag;
  attributes: Array<Attribute>;
  openStart: OpenScriptTagStart;
  openEnd: OpenScriptTagEnd;
  value?: ScriptTagContent;
}

export interface OpenScriptTagStart extends Parser.OpenScriptTagStartNode {
  parent: ScriptTag;
}

export interface OpenScriptTagEnd extends Parser.OpenScriptTagEndNode {
  parent: ScriptTag;
}

export interface CloseScriptTag extends Parser.CloseScriptTagNode {
  parent: ScriptTag;
}

export interface ScriptTagContent extends Parser.ScriptTagContentNode {
  parent: ScriptTag;
  stylesheet?: AnyCssNode;
}

export interface StyleTag extends Parser.StyleTagNode {
  parent: Document | Tag;
  attributes: Array<Attribute>;
  openStart: OpenStyleTagStart;
  openEnd: OpenStyleTagEnd;
  value?: StyleTagContent;
}

export interface OpenStyleTagStart extends Parser.OpenStyleTagStartNode {
  parent: StyleTag;
}

export interface OpenStyleTagEnd extends Parser.OpenStyleTagEndNode {
  parent: StyleTag;
}

export interface CloseStyleTag extends Parser.CloseStyleTagNode {
  parent: StyleTag;
}

export interface StyleTagContent extends Parser.StyleTagContentNode {
  parent: StyleTag;
  stylesheet?: CssStyleSheet;
}

export interface Attribute extends Parser.AttributeNode {
  parent: Tag;
  key: AttributeKey;
  value?: AttributeValue;
  startWrapper?: AttributeValueWrapperStart;
  endWrapper?: AttributeValueWrapperEnd;
}

export interface AttributeKey extends Parser.AttributeKeyNode {
  parent: Attribute;
}

export interface AttributeValue extends Parser.AttributeValueNode {
  parent: Attribute;
}

export interface AttributeValueWrapperStart
  extends Parser.AttributeValueWrapperStartNode {
  parent: Attribute;
}

export interface AttributeValueWrapperEnd
  extends Parser.AttributeValueWrapperEndNode {
  parent: Attribute;
}

export type TemplateText = Text["parts"][number];

export type OpenTemplate = Parser.OpenTemplateNode;
export type CloseTemplate = Parser.CloseTemplateNode;

export type AnyHTMLNode =
  | Document
  | Doctype
  | DoctypeOpen
  | DoctypeClose
  | DoctypeAttribute
  | DoctypeAttributeValue
  | Comment
  | CommentOpen
  | CommentClose
  | CommentContent
  | Tag
  | OpenTagStart
  | OpenTagEnd
  | CloseTag
  | ScriptTag
  | OpenScriptTagStart
  | OpenScriptTagEnd
  | ScriptTagContent
  | CloseScriptTag
  | StyleTag
  | OpenStyleTagStart
  | OpenStyleTagEnd
  | StyleTagContent
  | CloseStyleTag
  | Attribute
  | AttributeKey
  | AttributeValue
  | AttributeValueWrapperEnd
  | AttributeValueWrapperStart
  | Text;
