import { RuleCreateFunction, RuleModule } from '../ts-eslint';
/**
 * Uses type inference to fetch the TOptions type from the given RuleModule
 */
type InferOptionsTypeFromRule<T> = T extends RuleModule<infer _TMessageIds, infer TOptions> ? TOptions : T extends RuleCreateFunction<infer _TMessageIds, infer TOptions> ? TOptions : unknown;
/**
 * Uses type inference to fetch the TMessageIds type from the given RuleModule
 */
type InferMessageIdsTypeFromRule<T> = T extends RuleModule<infer TMessageIds, infer _TOptions> ? TMessageIds : T extends RuleCreateFunction<infer TMessageIds, infer _TOptions> ? TMessageIds : unknown;
export { InferOptionsTypeFromRule, InferMessageIdsTypeFromRule };
//# sourceMappingURL=InferTypesFromRule.d.ts.map
