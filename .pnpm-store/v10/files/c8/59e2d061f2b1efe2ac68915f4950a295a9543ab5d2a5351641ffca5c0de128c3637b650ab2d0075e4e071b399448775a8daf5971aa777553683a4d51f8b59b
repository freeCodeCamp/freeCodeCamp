import type { TSESLint } from '@typescript-eslint/utils';
import type { RuleListener } from '@typescript-eslint/utils/eslint-utils';
type Prefer = 'no-type-imports' | 'type-imports';
type FixStyle = 'inline-type-imports' | 'separate-type-imports';
export type Options = [
    {
        disallowTypeAnnotations?: boolean;
        fixStyle?: FixStyle;
        prefer?: Prefer;
    }
];
export type MessageIds = 'avoidImportType' | 'noImportTypeAnnotations' | 'someImportsAreOnlyTypes' | 'typeOverValue';
declare const _default: TSESLint.RuleModule<MessageIds, Options, import("../../rules").ESLintPluginDocs, RuleListener> & {
    name: string;
};
export default _default;
