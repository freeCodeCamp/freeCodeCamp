declare const _exports: <V extends import("unist").Node<import("unist").Data>>(tree: Node, condition: TestStr | TestObj | TestFn) => V | undefined;
export = _exports;
export type Node = import('unist').Node;
/**
 * Finds first node with a truthy property matching string.
 */
export type TestStr = string;
/**
 * Finds first node that has matching values for all properties of object.
 */
export type TestObj = {
    [x: string]: unknown;
};
/**
 * Finds first node for which function returns true when passed node as argument.
 */
export type TestFn = <V extends import("unist").Node<import("unist").Data>>(node: V) => boolean;
