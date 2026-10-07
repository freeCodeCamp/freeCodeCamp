import type { GraphQLSchema } from "graphql";
import { IDefinitionMeta } from "../../redux/types";
type DefinitionName = string;
type DefinitionMap = Map<DefinitionName, IDefinitionMeta>;
/**
 * Makes the schema deterministic by sorting it (so on new saves the whole file doesn't change, only the change that was made). It can be used for e.g. tests when two schema diffs should be compared.
 */
export declare function stabilizeSchema(schema: GraphQLSchema): GraphQLSchema;
export declare function sortDefinitions(a: IDefinitionMeta, b: IDefinitionMeta): number;
export declare function filterTargetDefinitions(defMap: DefinitionMap): Map<string, IDefinitionMeta>;
export {};
