export = BasePlugin;
declare class BasePlugin {
    /**
     * @param {string[]} targets
     * @param {string[]} nodeTypes
     * @param {import('postcss').Result=} result
     */
    constructor(targets: string[], nodeTypes: string[], result?: import('postcss').Result | undefined);
    /** @type {NodeWithInfo[]} */
    nodes: NodeWithInfo[];
    targets: Set<string>;
    nodeTypes: Set<string>;
    result: import("postcss").Result | undefined;
    /**
     * @param {import('postcss').Node} node
     * @param {{identifier: string, hack: string}} metadata
     * @return {void}
     */
    push(node: import('postcss').Node, metadata: {
        identifier: string;
        hack: string;
    }): void;
    /**
     * @param {import('postcss').Node} node
     * @return {boolean}
     */
    any(node: import('postcss').Node): boolean;
    /**
     * @param {import('postcss').Node} node
     * @return {void}
     */
    detectAndResolve(node: import('postcss').Node): void;
    /**
     * @param {import('postcss').Node} node
     * @return {void}
     */
    detectAndWarn(node: import('postcss').Node): void;
    /** @param {import('postcss').Node} node */
    detect(node: import('postcss').Node): void;
    /** @return {void} */
    resolve(): void;
    warn(): void;
}
declare namespace BasePlugin {
    export { Plugin, NodeWithInfo };
}
type NodeWithInfo = import('postcss').Node & {
    _stylehacks: {
        message: string;
        browsers: Set<string>;
        identifier: string;
        hack: string;
    };
};
type Plugin = {
    targets: Set<string>;
    nodeTypes: Set<string>;
    detectAndResolve: (node: import('postcss').Node) => void;
    detectAndWarn: (node: import('postcss').Node) => void;
};
