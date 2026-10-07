import type { TSESLint } from '@typescript-eslint/utils';
export type Options = [
    {
        checksConditionals?: boolean | ChecksConditionalsOptions;
        checksSpreads?: boolean;
        checksVoidReturn?: boolean | ChecksVoidReturnOptions;
    }
];
export type FlagUnionsOptions = 'all' | 'none' | 'strict';
export interface ChecksConditionalsOptions {
    flagUnions?: FlagUnionsOptions;
}
export interface ChecksVoidReturnOptions {
    arguments?: boolean;
    attributes?: boolean;
    inheritedMethods?: boolean;
    properties?: boolean;
    returns?: boolean;
    variables?: boolean;
}
export type MessageId = 'conditional' | 'predicate' | 'spread' | 'voidReturnArgument' | 'voidReturnAttribute' | 'voidReturnInheritedMethod' | 'voidReturnProperty' | 'voidReturnReturnValue' | 'voidReturnVariable';
declare const _default: TSESLint.RuleModule<MessageId, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
