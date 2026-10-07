export = sameParent;
/** @typedef {import('postcss').AnyNode & {parent?: Child}} Child */
/**
 * @param {Child} nodeA
 * @param {Child} nodeB
 * @return {boolean}
 */
declare function sameParent(nodeA: Child, nodeB: Child): boolean;
declare namespace sameParent {
    export { Child };
}
type Child = import('postcss').AnyNode & {
    parent?: Child;
};
