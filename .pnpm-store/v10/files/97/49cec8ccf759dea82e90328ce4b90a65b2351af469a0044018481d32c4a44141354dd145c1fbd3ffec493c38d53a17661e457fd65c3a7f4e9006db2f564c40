import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
import type { InferMessageIdsTypeFromRule, InferOptionsTypeFromRule } from '../util';
declare const baseRule: TSESLint.RuleModule<"preferDestructuring", [import("eslint/lib/rules/prefer-destructuring").DestructuringTypeConfig | {
    AssignmentExpression?: import("eslint/lib/rules/prefer-destructuring").DestructuringTypeConfig;
    VariableDeclarator?: import("eslint/lib/rules/prefer-destructuring").DestructuringTypeConfig;
}, (import("eslint/lib/rules/prefer-destructuring").Option1 | undefined)?], unknown, {
    AssignmentExpression(node: TSESTree.AssignmentExpression): void;
    VariableDeclarator(node: TSESTree.VariableDeclarator): void;
}>;
type BaseOptions = InferOptionsTypeFromRule<typeof baseRule>;
type EnforcementOptions = {
    enforceForDeclarationWithTypeAnnotation?: boolean;
} & BaseOptions[1];
export type Options = [BaseOptions[0], EnforcementOptions];
export type MessageIds = InferMessageIdsTypeFromRule<typeof baseRule>;
declare const _default: TSESLint.RuleModule<"preferDestructuring", Options, import("../../rules").ESLintPluginDocs, TSESLint.RuleListener> & {
    name: string;
};
export default _default;
