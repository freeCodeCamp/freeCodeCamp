import type { TSESLint } from '@typescript-eslint/utils';
export declare function getFixOrSuggest<MessageId extends string>({ fixOrSuggest, suggestion, }: {
    fixOrSuggest: 'fix' | 'none' | 'suggest';
    suggestion: TSESLint.SuggestionReportDescriptor<MessageId>;
}): {
    fix: TSESLint.ReportFixFunction;
} | {
    suggest: TSESLint.SuggestionReportDescriptor<MessageId>[];
} | undefined;
