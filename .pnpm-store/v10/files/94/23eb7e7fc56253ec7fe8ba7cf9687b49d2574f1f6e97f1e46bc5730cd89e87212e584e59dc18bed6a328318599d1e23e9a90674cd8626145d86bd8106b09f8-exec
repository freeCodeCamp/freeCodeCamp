export class Sorter<T> {

    /**
     * An array of the topologically sorted nodes. This list is renewed upon each call to topo.add().
     */
    nodes: T[];

    /**
     * Adds a node or list of nodes to be added and topologically sorted
     * 
     * @param nodes - A mixed value or array of mixed values to be added as nodes to the topologically sorted list.
     * @param options - Optional sorting information about the nodes.
     * 
     * @returns Returns an array of the topologically sorted nodes.
     */
    add(nodes: T | T[], options?: Options): T[];

    /**
     * Merges another Sorter object into the current object.
     * 
     * @param others - The other object or array of objects to be merged into the current one.
     * 
     * @returns Returns an array of the topologically sorted nodes.
     */
    merge(others: Sorter<T> | Sorter<T>[]): T[];

    /**
     * Sorts the nodes array (only required if the manual option is used when adding items)
     */
    sort(): T[];
}


export interface Options {

    /**
     * The sorting group the added items belong to
     */
    readonly group?: string;

    /**
     * The group or groups the added items must come before
     */
    readonly before?: string | string[];

    /**
     * The group or groups the added items must come after
     */
    readonly after?: string | string[];

    /**
     * A number used to sort items with equal before/after requirements
     */
    readonly sort?: number;

    /**
     * If true, the array is not sorted automatically until sort() is called
     */
    readonly manual?: boolean;
}
