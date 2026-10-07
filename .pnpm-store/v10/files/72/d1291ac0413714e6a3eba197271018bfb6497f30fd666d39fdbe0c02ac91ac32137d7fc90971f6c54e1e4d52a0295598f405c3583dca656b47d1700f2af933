import type { NodeWithParent, TSESTree } from '@typescript-eslint/types';
import type { DefinitionType } from './DefinitionType';
export declare abstract class DefinitionBase<Type extends DefinitionType, Node extends NodeWithParent, Parent extends TSESTree.Node | null, Name extends TSESTree.Node> {
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    readonly $id: number;
    readonly type: Type;
    /**
     * The `Identifier` node of this definition
     * @public
     */
    readonly name: Name;
    /**
     * The enclosing node of the name.
     * @public
     */
    readonly node: Node;
    /**
     * the enclosing statement node of the identifier.
     * @public
     */
    readonly parent: Parent;
    constructor(type: Type, name: Name, node: Node, parent: Parent);
    /**
     * `true` if the variable is valid in a type context, false otherwise
     */
    abstract readonly isTypeDefinition: boolean;
    /**
     * `true` if the variable is valid in a value context, false otherwise
     */
    abstract readonly isVariableDefinition: boolean;
}
