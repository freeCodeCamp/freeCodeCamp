import type { RuleContext, RuleListener, RuleMetaData, RuleMetaDataDocs, RuleModule } from '../ts-eslint/Rule';
export type NamedCreateRuleMetaDocs = Omit<RuleMetaDataDocs, 'url'>;
export type NamedCreateRuleMeta<MessageIds extends string, PluginDocs = unknown, Options extends readonly unknown[] = []> = {
    docs: PluginDocs & RuleMetaDataDocs;
} & Omit<RuleMetaData<MessageIds, PluginDocs, Options>, 'docs'>;
export interface RuleCreateAndOptions<Options extends readonly unknown[], MessageIds extends string> {
    create: (context: Readonly<RuleContext<MessageIds, Options>>, optionsWithDefault: Readonly<Options>) => RuleListener;
    /** @deprecated Use meta.defaultOptions instead */
    defaultOptions?: Readonly<Options>;
}
export interface RuleWithMeta<Options extends readonly unknown[], MessageIds extends string, Docs = unknown> extends RuleCreateAndOptions<Options, MessageIds> {
    meta: RuleMetaData<MessageIds, Docs, Options>;
    name?: string;
}
export interface RuleWithMetaAndName<Options extends readonly unknown[], MessageIds extends string, Docs = unknown> extends RuleCreateAndOptions<Options, MessageIds> {
    meta: NamedCreateRuleMeta<MessageIds, Docs, Options>;
    name: string;
}
type RuleModuleWithName<MessageIds extends string, Options extends readonly unknown[] = [], Docs = unknown, ExtendedRuleListener extends RuleListener = RuleListener> = RuleModule<MessageIds, Options, Docs, ExtendedRuleListener> & {
    name: string;
};
/**
 * Creates reusable function to create rules with default options and docs URLs.
 *
 * @param urlCreator Creates a documentation URL for a given rule name.
 * @returns Function to create a rule with the docs URL format.
 */
export declare function RuleCreator<PluginDocs = unknown>(urlCreator: (ruleName: string) => string): <Options extends readonly unknown[], MessageIds extends string>({ meta, name, ...rule }: Readonly<RuleWithMetaAndName<Options, MessageIds, PluginDocs>>) => RuleModuleWithName<MessageIds, Options, PluginDocs>;
export declare namespace RuleCreator {
    var withoutDocs: <Options extends readonly unknown[], MessageIds extends string>(args: Readonly<RuleWithMeta<Options, MessageIds>>) => RuleModule<MessageIds, Options>;
}
export { type RuleListener, type RuleModule } from '../ts-eslint/Rule';
