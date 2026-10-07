type LegacyAllowConstantLoopConditions = boolean;
type AllowConstantLoopConditions = 'always' | 'never' | 'only-allowed-literals';
export type Options = [
    {
        allowConstantLoopConditions?: AllowConstantLoopConditions | LegacyAllowConstantLoopConditions;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
        checkTypePredicates?: boolean;
    }
];
export type MessageId = 'alwaysFalsy' | 'alwaysFalsyFunc' | 'alwaysNullish' | 'alwaysTruthy' | 'alwaysTruthyFunc' | 'comparisonBetweenLiteralTypes' | 'never' | 'neverNullish' | 'neverOptionalChain' | 'noOverlapBooleanExpression' | 'noStrictNullCheck' | 'suggestRemoveOptionalChain' | 'typeGuardAlreadyIsType';
declare const _default: import("@typescript-eslint/utils/ts-eslint").RuleModule<MessageId, Options, import("../../rules").ESLintPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener> & {
    name: string;
};
export default _default;
