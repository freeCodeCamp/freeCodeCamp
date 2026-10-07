import CommentNode from './nodes/comment';
import HTMLElement, { Options } from './nodes/html';
import Node from './nodes/node';
import TextNode from './nodes/text';
import NodeType from './nodes/type';
import baseParse from './parse';
import valid from './valid';
export { Options } from './nodes/html';
export { parse, HTMLElement, CommentNode, valid, Node, TextNode, NodeType };
declare function parse(data: string, options?: Partial<Options>): HTMLElement;
declare namespace parse {
    var parse: typeof baseParse;
    var HTMLElement: typeof import("./nodes/html").default;
    var CommentNode: typeof import("./nodes/comment").default;
    var valid: typeof import("./valid").default;
    var Node: typeof import("./nodes/node").default;
    var TextNode: typeof import("./nodes/text").default;
    var NodeType: typeof import("./nodes/type").default;
}
export default parse;
