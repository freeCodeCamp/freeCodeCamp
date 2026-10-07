import type { TSESLint } from '@typescript-eslint/utils';
export type MessageIds = 'angle-bracket' | 'as' | 'never' | 'replaceArrayTypeAssertionWithAnnotation' | 'replaceArrayTypeAssertionWithSatisfies' | 'replaceObjectTypeAssertionWithAnnotation' | 'replaceObjectTypeAssertionWithSatisfies' | 'unexpectedArrayTypeAssertion' | 'unexpectedObjectTypeAssertion';
type OptUnion = {
    assertionStyle: 'angle-bracket' | 'as';
    objectLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
    arrayLiteralTypeAssertions?: 'allow' | 'allow-as-parameter' | 'never';
} | {
    assertionStyle: 'never';
};
export type Options = readonly [OptUnion];
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
