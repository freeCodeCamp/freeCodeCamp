declare module 'dependency-graph' {
  export interface Options {
    circular?: boolean;
  }

  export class DepGraph<T> {
    /**
     * Creates an instance of DepGraph with optional Options.
     */
    constructor(opts?: Options);

    /**
     * The number of nodes in the graph.
     */
    size(): number;

    /**
     * Add a node in the graph with optional data. If data is not given, name will be used as data.
     * @param {string} name
     * @param data
     */
    addNode(name: string, data?: T): void;

    /**
     * Remove a node from the graph.
     * @param {string} name
     */
    removeNode(name: string): void;

    /**
     * Check if a node exists in the graph.
     * @param {string} name
     */
    hasNode(name: string): boolean;

    /**
     * Get the data associated with a node (will throw an Error if the node does not exist).
     * @param {string} name
     */
    getNodeData(name: string): T;

    /**
     * Set the data for an existing node (will throw an Error if the node does not exist).
     * @param {string} name
     * @param data
     */
    setNodeData(name: string, data?: T): void;

    /**
     * Add a dependency between two nodes (will throw an Error if one of the nodes does not exist).
     * @param {string} from
     * @param {string} to
     */
    addDependency(from: string, to: string): void;

    /**
     * Remove a dependency between two nodes.
     * @param {string} from
     * @param {string} to
     */
    removeDependency(from: string, to: string): void;

    /**
     * Return a clone of the dependency graph (If any custom data is attached
     * to the nodes, it will only be shallow copied).
     */
    clone(): DepGraph<T>;

    /**
     * Get an array containing the direct dependency nodes of the specified node.
     * @param name
     */
    directDependenciesOf(name: string): string[];

    /**
     * Get an array containing the nodes that directly depend on the specified node.
     * @param name
     */
    directDependantsOf(name: string): string[];

    /**
     * Alias of `directDependantsOf`
     *
     * @see directDependantsOf
     * @param {string} name
     */
    directDependentsOf(name: string): string[];

    /**
     * Get an array containing the nodes that the specified node depends on (transitively). If leavesOnly is true, only nodes that do not depend on any other nodes will be returned in the array.
     * @param {string} name
     * @param {boolean} leavesOnly
     */
    dependenciesOf(name: string, leavesOnly?: boolean): string[];

    /**
     * Get an array containing the nodes that depend on the specified node (transitively). If leavesOnly is true, only nodes that do not have any dependants will be returned in the array.
     * @param {string} name
     * @param {boolean} leavesOnly
     */
    dependantsOf(name: string, leavesOnly?: boolean): string[];

    /**
     * Alias of `dependantsOf`
     *
     * @see dependantsOf
     * @param name
     * @param leavesOnly
     */
    dependentsOf(name: string, leavesOnly?: boolean): string[];

    /**
     * Get an array of nodes that have no dependants (i.e. nothing depends on them).
     */
    entryNodes(): string[];

    /**
     * Construct the overall processing order for the dependency graph. If leavesOnly is true, only nodes that do not depend on any other nodes will be returned.
     * @param {boolean} leavesOnly
     */
    overallOrder(leavesOnly?: boolean): string[];
  }

  export class DepGraphCycleError extends Error {
    cyclePath: string[];
  }
}
