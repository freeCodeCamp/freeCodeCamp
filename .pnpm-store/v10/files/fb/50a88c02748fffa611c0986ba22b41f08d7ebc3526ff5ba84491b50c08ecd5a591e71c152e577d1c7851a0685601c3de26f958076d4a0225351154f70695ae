import { NodeTypes } from "../constants";
import { BaseNode } from "./base-node";
export interface SimpleNode<T extends NodeTypes> extends BaseNode {
    type: T;
    value: string;
}
export interface PartNodeBase<T extends Exclude<NodeTypes, NodeTypes.Part>> extends BaseNode {
    type: NodeTypes.Part;
    partOf: T;
    value: string;
}
export interface TemplateNodeBase<T extends Exclude<NodeTypes, NodeTypes.Template | NodeTypes.Part>> extends BaseNode {
    type: NodeTypes.Template;
    partOf: T;
    open?: SimpleNode<NodeTypes.OpenTemplate>;
    close?: SimpleNode<NodeTypes.CloseTemplate>;
}
export interface CompositeNode<T extends Exclude<NodeTypes, NodeTypes.Template | NodeTypes.Part>> extends BaseNode {
    parts: (PartNodeBase<T> | TemplateNodeBase<T>)[];
    value: string;
}
