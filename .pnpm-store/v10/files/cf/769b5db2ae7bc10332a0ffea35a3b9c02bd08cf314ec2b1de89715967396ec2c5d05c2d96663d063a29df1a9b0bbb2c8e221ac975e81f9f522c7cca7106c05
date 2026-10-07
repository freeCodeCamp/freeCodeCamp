import type { TSESLint } from '@typescript-eslint/utils';
export type Options = [
    {
        /**
         * If `true`, allow `default` cases on switch statements with exhaustive
         * cases.
         *
         * @default true
         */
        allowDefaultCaseForExhaustiveSwitch?: boolean;
        /**
         * If `true`, require a `default` clause for switches on non-union types.
         *
         * @default false
         */
        requireDefaultForNonUnion?: boolean;
        /**
         * Regular expression for a comment that can indicate an intentionally omitted default case.
         */
        defaultCaseCommentPattern?: string;
        /**
         * If `true`, the `default` clause is used to determine whether the switch statement is exhaustive for union types.
         *
         * @default false
         */
        considerDefaultExhaustiveForUnions?: boolean;
    }
];
export type MessageIds = 'addMissingCases' | 'dangerousDefaultCase' | 'switchIsNotExhaustive';
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
