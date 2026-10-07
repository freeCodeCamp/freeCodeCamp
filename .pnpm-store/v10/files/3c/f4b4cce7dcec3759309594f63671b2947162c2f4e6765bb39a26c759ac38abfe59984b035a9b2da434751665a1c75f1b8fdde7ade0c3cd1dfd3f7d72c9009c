import type { TSESLint } from '@typescript-eslint/utils';
export type DirectiveConfig = boolean | 'allow-with-description' | {
    descriptionFormat: string;
};
export interface OptionsShape {
    minimumDescriptionLength?: number;
    'ts-check'?: DirectiveConfig;
    'ts-expect-error'?: DirectiveConfig;
    'ts-ignore'?: DirectiveConfig;
    'ts-nocheck'?: DirectiveConfig;
}
export type Options = [OptionsShape];
export type MessageIds = 'replaceTsIgnoreWithTsExpectError' | 'tsDirectiveComment' | 'tsDirectiveCommentDescriptionNotMatchPattern' | 'tsDirectiveCommentRequiresDescription' | 'tsIgnoreInsteadOfExpectError';
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
