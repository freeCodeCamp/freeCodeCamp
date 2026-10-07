import { NodeTypes } from "../constants";
import { SimpleNode, CompositeNode, PartNodeBase, TemplateNodeBase } from "./simple-node";
import { BaseNode } from "./base-node";
export interface DocumentNode extends BaseNode {
    type: NodeTypes.Document;
    children: Array<TextNode | RawContentNode | TagNode | ScriptTagNode | StyleTagNode | CommentNode | DoctypeNode>;
}
export type TextNode = CompositeNode<NodeTypes.Text>;
export type RawContentNode = CompositeNode<NodeTypes.RawContent>;
export interface TagNode extends BaseNode {
    type: NodeTypes.Tag;
    selfClosing: boolean;
    name: string;
    openStart: OpenTagStartNode;
    openEnd: OpenTagEndNode;
    close?: CloseTagNode;
    children: Array<TextNode | TagNode | ScriptTagNode | StyleTagNode | CommentNode | RawContentNode>;
    attributes: Array<AttributeNode>;
}
export type OpenTagStartNode = SimpleNode<NodeTypes.OpenTagStart>;
export type OpenTagEndNode = SimpleNode<NodeTypes.OpenTagEnd>;
export type CloseTagNode = SimpleNode<NodeTypes.CloseTag>;
export interface AttributeNode extends BaseNode {
    type: NodeTypes.Attribute;
    key: AttributeKeyNode;
    value?: AttributeValueNode;
    startWrapper?: AttributeValueWrapperStartNode;
    endWrapper?: AttributeValueWrapperEndNode;
}
export type AttributeKeyNode = CompositeNode<NodeTypes.AttributeKey>;
export type AttributeValueNode = CompositeNode<NodeTypes.AttributeValue>;
export type AttributeValueWrapperStartNode = SimpleNode<NodeTypes.AttributeValueWrapperStart>;
export type AttributeValueWrapperEndNode = SimpleNode<NodeTypes.AttributeValueWrapperEnd>;
export interface ScriptTagNode extends BaseNode {
    type: NodeTypes.ScriptTag;
    attributes: Array<AttributeNode>;
    openStart: OpenScriptTagStartNode;
    openEnd: OpenScriptTagEndNode;
    close: CloseScriptTagNode;
    value?: ScriptTagContentNode;
}
export type OpenScriptTagStartNode = SimpleNode<NodeTypes.OpenScriptTagStart>;
export type CloseScriptTagNode = SimpleNode<NodeTypes.CloseScriptTag>;
export type OpenScriptTagEndNode = SimpleNode<NodeTypes.OpenScriptTagEnd>;
export type ScriptTagContentNode = CompositeNode<NodeTypes.ScriptTagContent>;
export interface StyleTagNode extends BaseNode {
    type: NodeTypes.StyleTag;
    attributes: Array<AttributeNode>;
    openStart: OpenStyleTagStartNode;
    openEnd: OpenStyleTagEndNode;
    close: CloseStyleTagNode;
    value?: StyleTagContentNode;
}
export type OpenStyleTagStartNode = SimpleNode<NodeTypes.OpenStyleTagStart>;
export type OpenStyleTagEndNode = SimpleNode<NodeTypes.OpenStyleTagEnd>;
export type StyleTagContentNode = CompositeNode<NodeTypes.StyleTagContent>;
export type CloseStyleTagNode = SimpleNode<NodeTypes.CloseStyleTag>;
export interface CommentNode extends BaseNode {
    type: NodeTypes.Comment;
    open: CommentOpenNode;
    close: CommentCloseNode;
    value: CommentContentNode;
}
export type CommentOpenNode = SimpleNode<NodeTypes.CommentOpen>;
export type CommentCloseNode = SimpleNode<NodeTypes.CommentClose>;
export type CommentContentNode = CompositeNode<NodeTypes.CommentContent>;
export interface DoctypeNode extends BaseNode {
    type: NodeTypes.Doctype;
    open: DoctypeOpenNode;
    close: DoctypeCloseNode;
    attributes: DoctypeAttributeNode[];
}
export type DoctypeOpenNode = SimpleNode<NodeTypes.DoctypeOpen>;
export type DoctypeCloseNode = SimpleNode<NodeTypes.DoctypeClose>;
export interface DoctypeAttributeNode extends BaseNode {
    type: NodeTypes.DoctypeAttribute;
    startWrapper?: DoctypeAttributeWrapperStartNode;
    value?: DoctypeAttributeValueNode;
    endWrapper?: DoctypeAttributeWrapperEndNode;
}
export type DoctypeAttributeValueNode = SimpleNode<NodeTypes.DoctypeAttributeValue>;
export type DoctypeAttributeWrapperStartNode = SimpleNode<NodeTypes.DoctypeAttributeWrapperStart>;
export type DoctypeAttributeWrapperEndNode = SimpleNode<NodeTypes.DoctypeAttributeWrapperEnd>;
export type OpenTemplateNode = SimpleNode<NodeTypes.OpenTemplate>;
export type CloseTemplateNode = SimpleNode<NodeTypes.CloseTemplate>;
export type TemplateNode = TemplateNodeBase<Exclude<NodeTypes, NodeTypes.Template | NodeTypes.Part>>;
export type PartNode = PartNodeBase<Exclude<NodeTypes, NodeTypes.Part>>;
export type AnyNode = DocumentNode | TextNode | TagNode | OpenTagStartNode | OpenTagEndNode | CloseTagNode | AttributeNode | AttributeKeyNode | AttributeValueNode | AttributeValueWrapperStartNode | AttributeValueWrapperEndNode | ScriptTagNode | OpenScriptTagStartNode | CloseScriptTagNode | OpenScriptTagEndNode | ScriptTagContentNode | StyleTagNode | OpenStyleTagStartNode | OpenStyleTagEndNode | StyleTagContentNode | CloseStyleTagNode | CommentNode | CommentOpenNode | CommentCloseNode | CommentContentNode | DoctypeNode | DoctypeOpenNode | DoctypeCloseNode | DoctypeAttributeNode | DoctypeAttributeValueNode | DoctypeAttributeWrapperStartNode | DoctypeAttributeWrapperEndNode | PartNode | TemplateNode | OpenTemplateNode | CloseTemplateNode;
