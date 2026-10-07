import type { TSESTree } from '@typescript-eslint/utils';
import type { InferMessageIdsTypeFromRule, InferOptionsTypeFromRule } from '../util';
declare const baseRule: import("@typescript-eslint/utils/ts-eslint").RuleModule<"missingReturn" | "missingReturnValue" | "unexpectedReturnValue", [({
    treatUndefinedAsUnspecified?: boolean;
} | undefined)?], unknown, {
    'ArrowFunctionExpression:exit'(node: TSESTree.ArrowFunctionExpression): void;
    'FunctionDeclaration:exit'(node: TSESTree.FunctionDeclaration): void;
    'FunctionExpression:exit'(node: TSESTree.FunctionExpression): void;
    ReturnStatement(node: TSESTree.ReturnStatement): void;
}>;
export type Options = InferOptionsTypeFromRule<typeof baseRule>;
export type MessageIds = InferMessageIdsTypeFromRule<typeof baseRule>;
declare const _default: import("@typescript-eslint/utils/ts-eslint").RuleModule<"missingReturn" | "missingReturnValue" | "unexpectedReturnValue", [({
    treatUndefinedAsUnspecified?: boolean;
} | undefined)?], import("../../rules").ESLintPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener> & {
    name: string;
};
export default _default;
