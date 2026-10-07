import type { ScopeManager } from '@typescript-eslint/scope-manager';
import type { TSESTree } from '@typescript-eslint/utils';
import type { ClassNode, Key, MemberNode } from './types';
export declare class Member {
    /**
     * The node that declares this member
     */
    readonly node: MemberNode;
    /**
     * The resolved, unique key for this member.
     */
    readonly key: Key;
    /**
     * The member name, as given in the source code.
     */
    readonly name: string;
    /**
     * The node that represents the member name in the source code.
     * Used for reporting errors.
     */
    readonly nameNode: TSESTree.Node;
    /**
     * The number of writes to this member.
     */
    writeCount: number;
    /**
     * The number of reads from this member.
     */
    readCount: number;
    private constructor();
    static create(node: MemberNode): Member | null;
    isAccessor(): boolean;
    isHashPrivate(): boolean;
    isPrivate(): boolean;
    isStatic(): boolean;
    isUsed(): boolean;
}
export interface ClassScopeResult {
    /**
     * The classes name as given in the source code.
     * If this is `null` then the class is an anonymous class.
     */
    readonly className: string | null;
    /**
     * The class's members, keyed by their name
     */
    readonly members: {
        readonly instance: Map<Key, Member>;
        readonly static: Map<Key, Member>;
    };
}
export declare function analyzeClassMemberUsage(program: TSESTree.Program, scopeManager: ScopeManager): ReadonlyMap<ClassNode, ClassScopeResult>;
