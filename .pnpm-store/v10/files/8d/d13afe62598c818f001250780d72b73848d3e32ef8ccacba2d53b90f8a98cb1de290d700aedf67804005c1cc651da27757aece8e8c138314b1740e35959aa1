import type { NodeWithParent, TSESTree } from '@typescript-eslint/types';
import type { Scope } from '../scope';
import type { Variable } from '../variable';
export declare enum ReferenceFlag {
    Read = 1,
    Write = 2,
    ReadWrite = 3
}
export interface ReferenceImplicitGlobal {
    node: NodeWithParent;
    pattern: TSESTree.BindingName;
    ref?: Reference;
}
export declare enum ReferenceTypeFlag {
    Value = 1,
    Type = 2
}
/**
 * A Reference represents a single occurrence of an identifier in code.
 */
export declare class Reference {
    #private;
    /**
     * A unique ID for this instance - primarily used to help debugging and testing
     */
    readonly $id: number;
    /**
     * Reference to the enclosing Scope.
     * @public
     */
    readonly from: Scope;
    /**
     * Identifier syntax node.
     * @public
     */
    readonly identifier: TSESTree.Identifier | TSESTree.JSXIdentifier;
    /**
     * `true` if this writing reference is a variable initializer or a default value.
     * @public
     */
    readonly init?: boolean;
    readonly maybeImplicitGlobal?: ReferenceImplicitGlobal | null;
    /**
     * The {@link Variable} object that this reference refers to. If such variable was not defined, this is `null`.
     * @public
     */
    resolved: Variable | null;
    /**
     * If reference is writeable, this is the node being written to it.
     * @public
     */
    readonly writeExpr?: TSESTree.Node | null;
    constructor(identifier: TSESTree.Identifier | TSESTree.JSXIdentifier, scope: Scope, flag: ReferenceFlag, writeExpr?: TSESTree.Node | null, maybeImplicitGlobal?: ReferenceImplicitGlobal | null, init?: boolean, referenceType?: ReferenceTypeFlag);
    /**
     * True if this reference can reference types
     */
    get isTypeReference(): boolean;
    /**
     * True if this reference can reference values
     */
    get isValueReference(): boolean;
    /**
     * Whether the reference is writeable.
     * @public
     */
    isWrite(): boolean;
    /**
     * Whether the reference is readable.
     * @public
     */
    isRead(): boolean;
    /**
     * Whether the reference is read-only.
     * @public
     */
    isReadOnly(): boolean;
    /**
     * Whether the reference is write-only.
     * @public
     */
    isWriteOnly(): boolean;
    /**
     * Whether the reference is read-write.
     * @public
     */
    isReadWrite(): boolean;
}
