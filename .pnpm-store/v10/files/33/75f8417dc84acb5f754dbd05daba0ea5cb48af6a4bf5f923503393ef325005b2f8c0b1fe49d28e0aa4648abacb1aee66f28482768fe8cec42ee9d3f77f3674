import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
export type MessageIds = 'incorrectGroupOrder' | 'incorrectOrder' | 'incorrectRequiredMembersOrder';
type ReadonlyType = 'readonly-field' | 'readonly-signature';
type MemberKind = 'accessor' | 'call-signature' | 'constructor' | 'field' | 'get' | 'method' | 'set' | 'signature' | 'static-initialization' | ReadonlyType;
type DecoratedMemberKind = 'accessor' | 'field' | 'get' | 'method' | 'set' | Exclude<ReadonlyType, 'readonly-signature'>;
type NonCallableMemberKind = Exclude<MemberKind, 'constructor' | 'readonly-signature' | 'signature'>;
type MemberScope = 'abstract' | 'instance' | 'static';
type Accessibility = '#private' | TSESTree.Accessibility;
type BaseMemberType = `${Accessibility}-${Exclude<MemberKind, 'readonly-signature' | 'signature' | 'static-initialization'>}` | `${Accessibility}-${MemberScope}-${NonCallableMemberKind}` | `${Accessibility}-decorated-${DecoratedMemberKind}` | `${MemberScope}-${NonCallableMemberKind}` | `decorated-${DecoratedMemberKind}` | MemberKind;
type MemberType = BaseMemberType | BaseMemberType[];
type AlphabeticalOrder = 'alphabetically' | 'alphabetically-case-insensitive' | 'natural' | 'natural-case-insensitive';
type Order = 'as-written' | AlphabeticalOrder;
interface SortedOrderConfig {
    memberTypes?: 'never' | MemberType[];
    optionalityOrder?: OptionalityOrder;
    order?: Order;
}
type OrderConfig = 'never' | MemberType[] | SortedOrderConfig;
type OptionalityOrder = 'optional-first' | 'required-first';
export type Options = [
    {
        classes?: OrderConfig;
        classExpressions?: OrderConfig;
        default?: OrderConfig;
        interfaces?: OrderConfig;
        typeLiterals?: OrderConfig;
    }
];
export declare const defaultOrder: MemberType[];
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
