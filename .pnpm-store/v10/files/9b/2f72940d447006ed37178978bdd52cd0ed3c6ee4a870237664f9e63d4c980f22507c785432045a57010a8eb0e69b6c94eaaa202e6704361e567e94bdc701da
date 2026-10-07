import { GraphQLOutputType, GraphQLNamedType, GraphQLNonNull, GraphQLList } from 'graphql';
import { Types } from './types.js';
export declare function mergeOutputs(content: Types.PluginOutput | Array<Types.PluginOutput>): string;
export declare function isWrapperType(t: GraphQLOutputType): t is GraphQLNonNull<any> | GraphQLList<any>;
export declare function getBaseType(type: GraphQLOutputType): GraphQLNamedType;
export declare function removeNonNullWrapper(type: GraphQLOutputType): GraphQLOutputType;
