import type { TSESTree } from '@typescript-eslint/types';
import type { DefinitionType } from './DefinitionType';
declare abstract class DefinitionBase<TType extends DefinitionType, TNode extends TSESTree.Node, TParent extends TSESTree.Node | null, TName extends TSESTree.Node = TSESTree.BindingName> {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    readonly $id: number;
    /**
     * The type of the definition
     * @public
     */
    readonly type: TType;
    /**
     * The `Identifier` node of this definition
     * @public
     */
    readonly name: TName;
    /**
     * The enclosing node of the name.
     * @public
     */
    readonly node: TNode;
    /**
     * the enclosing statement node of the identifier.
     * @public
     */
    readonly parent: TParent;
    constructor(type: TType, name: TName, node: TNode, parent: TParent);
    /**
     * `true` if the variable is valid in a type context, false otherwise
     */
    abstract readonly isTypeDefinition: boolean;
    /**
     * `true` if the variable is valid in a value context, false otherwise
     */
    abstract readonly isVariableDefinition: boolean;
}
export { DefinitionBase };
//# sourceMappingURL=DefinitionBase.d.ts.map