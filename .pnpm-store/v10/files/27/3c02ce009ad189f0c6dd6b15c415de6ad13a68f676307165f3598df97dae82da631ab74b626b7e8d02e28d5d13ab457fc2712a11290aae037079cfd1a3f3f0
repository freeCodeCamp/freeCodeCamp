import type { TSESLint } from '@typescript-eslint/utils';
type Types = Record<string, boolean | string | {
    fixWith?: string;
    message: string;
    suggest?: readonly string[];
} | null>;
export type Options = [
    {
        types?: Types;
    }
];
export type MessageIds = 'bannedTypeMessage' | 'bannedTypeReplacement';
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
