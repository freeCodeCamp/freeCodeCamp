import { Types } from './types.js';
import { DocumentNode, GraphQLSchema, GraphQLOutputType } from 'graphql';
export declare function isOutputConfigArray(type: any): type is Types.OutputConfig[];
export declare function isConfiguredOutput(type: any): type is Types.ConfiguredOutput;
export declare function normalizeOutputParam(config: Types.OutputConfig | Types.ConfiguredPlugin[] | Types.ConfiguredOutput): Types.ConfiguredOutput;
export declare function normalizeInstanceOrArray<T>(type: T | T[]): T[];
export declare function normalizeConfig(config: Types.OutputConfig | Types.OutputConfig[]): Types.ConfiguredPlugin[];
export declare function hasNullableTypeRecursively(type: GraphQLOutputType): boolean;
export declare function isUsingTypes(document: DocumentNode, externalFragments: string[], schema?: GraphQLSchema): boolean;
