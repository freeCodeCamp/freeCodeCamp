declare const _exports: typeof Components & {
    detect(rule: any): (context?: any) => {
        [_: string]: Function;
    };
};
export = _exports;
/**
 * Components
 */
declare class Components {
    /**
     * Add a node to the components list, or update it if it's already in the list
     *
     * @param {ASTNode} node The AST node being added.
     * @param {number} confidence Confidence in the component detection (0=banned, 1=maybe, 2=yes)
     * @returns {Object} Added component object
     */
    add(node: ASTNode, confidence: number): any;
    /**
     * Find a component in the list using its node
     *
     * @param {ASTNode} node The AST node being searched.
     * @returns {Object} Component object, undefined if the component is not found or has confidence value of 0.
     */
    get(node: ASTNode): any;
    /**
     * Update a component in the list
     *
     * @param {ASTNode} node The AST node being updated.
     * @param {Object} props Additional properties to add to the component.
     */
    set(node: ASTNode, props: any): void;
    /**
     * Return the components list
     * Components for which we are not confident are not returned
     *
     * @returns {Object} Components list
     */
    list(): any;
    /**
     * Return the length of the components list
     * Components for which we are not confident are not counted
     *
     * @returns {number} Components list length
     */
    length(): number;
    /**
     * Return the node naming the default React import
     * It can be used to determine the local name of import, even if it's imported
     * with an unusual name.
     *
     * @returns {ASTNode} React default import node
     */
    getDefaultReactImports(): ASTNode;
    /**
     * Return the nodes of all React named imports
     *
     * @returns {Object} The list of React named imports
     */
    getNamedReactImports(): any;
    /**
     * Add the default React import specifier to the scope
     *
     * @param {ASTNode} specifier The AST Node of the default React import
     * @returns {void}
     */
    addDefaultReactImport(specifier: ASTNode): void;
    /**
     * Add a named React import specifier to the scope
     *
     * @param {ASTNode} specifier The AST Node of a named React import
     * @returns {void}
     */
    addNamedReactImport(specifier: ASTNode): void;
}
//# sourceMappingURL=Components.d.ts.map