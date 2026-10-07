import type { Thunk } from './definitions';
import { SchemaComposer } from '../SchemaComposer';
import type { GraphQLFieldConfigMap, GraphQLInputFieldConfigMap, GraphQLFieldMap, GraphQLEnumType, GraphQLEnumValueConfigMap, GraphQLEnumValue, GraphQLObjectType, GraphQLInterfaceType, GraphQLInputObjectType, GraphQLInputFieldMap, ObjectTypeDefinitionNode, InterfaceTypeDefinitionNode, EnumTypeDefinitionNode, InputObjectTypeDefinitionNode } from '../graphql';
import type { InputTypeComposerFieldConfigMap } from '../InputTypeComposer';
import type { EnumTypeComposerValueConfigMap } from '../EnumTypeComposer';
import { ObjectTypeComposerFieldConfigMap, ObjectTypeComposerFieldConfigMapDefinition, ObjectTypeComposerDefinition, ObjectTypeComposerThunked } from '../ObjectTypeComposer';
import { InterfaceTypeComposerDefinition, InterfaceTypeComposerThunked } from '../InterfaceTypeComposer';
export declare function defineFieldMap(config: GraphQLObjectType | GraphQLInterfaceType, fieldMap: GraphQLFieldConfigMap<any, any>, parentAstNode?: ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode | null): GraphQLFieldMap<any, any>;
export declare function convertObjectFieldMapToConfig(fieldMap: Thunk<GraphQLFieldMap<any, any> | ObjectTypeComposerFieldConfigMapDefinition<any, any>>, sc: SchemaComposer<any>): ObjectTypeComposerFieldConfigMap<any, any>;
export declare function defineEnumValues(type: GraphQLEnumType, valueMap: GraphQLEnumValueConfigMap, parentAstNode?: EnumTypeDefinitionNode): Array<GraphQLEnumValue>;
export declare function convertEnumValuesToConfig(values: ReadonlyArray<GraphQLEnumValue>, schemaComposer: SchemaComposer<any>): EnumTypeComposerValueConfigMap;
export declare function defineInputFieldMap(config: GraphQLInputObjectType, fieldMap: GraphQLInputFieldConfigMap, parentAstNode?: InputObjectTypeDefinitionNode | null): GraphQLInputFieldMap;
export declare function convertInputFieldMapToConfig(fieldMap: Thunk<GraphQLInputFieldMap>, sc: SchemaComposer<any>): InputTypeComposerFieldConfigMap;
export declare function convertObjectTypeArrayAsThunk(types: Thunk<ReadonlyArray<GraphQLObjectType | ObjectTypeComposerDefinition<any, any> | ObjectTypeComposerThunked<any, any>>>, sc: SchemaComposer<any>): Array<ObjectTypeComposerThunked<any, any>>;
export declare function convertInterfaceArrayAsThunk(types: Thunk<ReadonlyArray<InterfaceTypeComposerDefinition<any, any> | Readonly<GraphQLInterfaceType> | Readonly<InterfaceTypeComposerThunked<any, any>>>>, sc: SchemaComposer<any>): Array<InterfaceTypeComposerThunked<any, any>>;
//# sourceMappingURL=configToDefine.d.ts.map