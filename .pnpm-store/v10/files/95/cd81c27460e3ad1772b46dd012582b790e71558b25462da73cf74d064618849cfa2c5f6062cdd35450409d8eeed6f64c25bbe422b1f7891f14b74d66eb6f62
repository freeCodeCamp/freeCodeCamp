import type { TSESTree } from '@typescript-eslint/types';
import type { Definition } from '../definition';
import type { Reference } from '../referencer/Reference';
import type { Scope } from '../scope';
declare class VariableBase {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    readonly $id: number;
    /**
     * The array of the definitions of this variable.
     * @public
     */
    readonly defs: Definition[];
    /**
     * True if the variable is considered used for the purposes of `no-unused-vars`, false otherwise.
     * @public
     */
    eslintUsed: boolean;
    /**
     * The array of `Identifier` nodes which define this variable.
     * If this variable is redeclared, this array includes two or more nodes.
     * @public
     */
    readonly identifiers: TSESTree.Identifier[];
    /**
     * The variable name, as given in the source code.
     * @public
     */
    readonly name: string;
    /**
     * List of {@link Reference} of this variable (excluding parameter entries)  in its defining scope and all nested scopes.
     * For defining occurrences only see {@link Variable#defs}.
     * @public
     */
    readonly references: Reference[];
    /**
     * Reference to the enclosing Scope.
     */
    readonly scope: Scope;
    constructor(name: string, scope: Scope);
}
export { VariableBase };
//# sourceMappingURL=VariableBase.d.ts.map