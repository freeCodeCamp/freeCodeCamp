import type { Hooked } from './RequireInTheMiddleSingleton';
export declare const ModuleNameSeparator = "/";
type ModuleNameTrieSearchOptions = {
    /**
     * Whether to return the results in insertion order
     */
    maintainInsertionOrder?: boolean;
    /**
     * Whether to return only full matches
     */
    fullOnly?: boolean;
};
/**
 * Trie containing nodes that represent a part of a module name (i.e. the parts separated by forward slash)
 */
export declare class ModuleNameTrie {
    private _trie;
    private _counter;
    /**
     * Insert a module hook into the trie
     *
     * @param {Hooked} hook Hook
     */
    insert(hook: Hooked): void;
    /**
     * Search for matching hooks in the trie
     *
     * @param {string} moduleName Module name
     * @param {boolean} maintainInsertionOrder Whether to return the results in insertion order
     * @param {boolean} fullOnly Whether to return only full matches
     * @returns {Hooked[]} Matching hooks
     */
    search(moduleName: string, { maintainInsertionOrder, fullOnly }?: ModuleNameTrieSearchOptions): Hooked[];
}
export {};
//# sourceMappingURL=ModuleNameTrie.d.ts.map