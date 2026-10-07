import { RuleContext, RuleListener, RuleMetaData, RuleMetaDataDocs, RuleModule } from '../ts-eslint/Rule';
export type NamedCreateRuleMetaDocs = Pick<RuleMetaDataDocs, Exclude<keyof RuleMetaDataDocs, 'url'>>;
export type NamedCreateRuleMeta<TMessageIds extends string> = {
    docs: NamedCreateRuleMetaDocs;
} & Pick<RuleMetaData<TMessageIds>, Exclude<keyof RuleMetaData<TMessageIds>, 'docs'>>;
export interface RuleCreateAndOptions<TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends RuleListener> {
    create: (context: Readonly<RuleContext<TMessageIds, TOptions>>, optionsWithDefault: Readonly<TOptions>) => TRuleListener;
    defaultOptions: Readonly<TOptions>;
}
export interface RuleWithMeta<TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends RuleListener> extends RuleCreateAndOptions<TOptions, TMessageIds, TRuleListener> {
    meta: RuleMetaData<TMessageIds>;
}
export interface RuleWithMetaAndName<TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends RuleListener> extends RuleCreateAndOptions<TOptions, TMessageIds, TRuleListener> {
    meta: NamedCreateRuleMeta<TMessageIds>;
    name: string;
}
/**
 * Creates reusable function to create rules with default options and docs URLs.
 *
 * @param urlCreator Creates a documentation URL for a given rule name.
 * @returns Function to create a rule with the docs URL format.
 */
export declare function RuleCreator(urlCreator: (ruleName: string) => string): <TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends RuleListener = RuleListener>({ name, meta, ...rule }: Readonly<RuleWithMetaAndName<TOptions, TMessageIds, TRuleListener>>) => RuleModule<TMessageIds, TOptions, TRuleListener>;
export declare namespace RuleCreator {
    var withoutDocs: typeof createRule;
}
/**
 * Creates a well-typed TSESLint custom ESLint rule without a docs URL.
 *
 * @returns Well-typed TSESLint custom ESLint rule.
 * @remarks It is generally better to provide a docs URL function to RuleCreator.
 */
declare function createRule<TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends RuleListener = RuleListener>({ create, defaultOptions, meta, }: Readonly<RuleWithMeta<TOptions, TMessageIds, TRuleListener>>): RuleModule<TMessageIds, TOptions, TRuleListener>;
export {};
//# sourceMappingURL=RuleCreator.d.ts.map
