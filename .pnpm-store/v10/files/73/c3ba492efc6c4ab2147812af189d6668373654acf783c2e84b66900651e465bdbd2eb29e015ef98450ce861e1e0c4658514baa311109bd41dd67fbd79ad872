import type { ParserServicesWithTypeInformation, TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import type { LastChainOperand, ValidOperand } from './gatherLogicalOperands';
import type { PreferOptionalChainMessageIds, PreferOptionalChainOptions } from './PreferOptionalChainOptions';
export declare function analyzeChain(context: RuleContext<PreferOptionalChainMessageIds, [
    PreferOptionalChainOptions
]>, parserServices: ParserServicesWithTypeInformation, options: PreferOptionalChainOptions, node: TSESTree.Node, operator: TSESTree.LogicalExpression['operator'], chain: ValidOperand[], lastChainOperand?: LastChainOperand): void;
