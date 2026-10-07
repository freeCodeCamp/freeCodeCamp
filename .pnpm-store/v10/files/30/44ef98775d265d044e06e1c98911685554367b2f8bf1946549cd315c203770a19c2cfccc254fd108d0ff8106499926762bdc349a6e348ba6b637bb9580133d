import { TSESLint } from '@typescript-eslint/utils';
export type MessageIds = 'removeUnusedImportDeclaration' | 'removeUnusedVar' | 'unusedVar' | 'usedIgnoredVar' | 'usedOnlyAsType';
export type Options = [
    'all' | 'local' | {
        args?: 'after-used' | 'all' | 'none';
        argsIgnorePattern?: string;
        caughtErrors?: 'all' | 'none';
        caughtErrorsIgnorePattern?: string;
        destructuredArrayIgnorePattern?: string;
        enableAutofixRemoval?: {
            imports?: boolean;
        };
        ignoreClassWithStaticInitBlock?: boolean;
        ignoreRestSiblings?: boolean;
        ignoreUsingDeclarations?: boolean;
        reportUsedIgnorePattern?: boolean;
        vars?: 'all' | 'local';
        varsIgnorePattern?: string;
    }
];
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
