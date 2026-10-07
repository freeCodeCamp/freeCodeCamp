import { GraphQLFieldConfigMap, GraphQLFieldConfig, GraphQLSchema } from 'graphql';
export declare function appendObjectFields(schema: GraphQLSchema, typeName: string, additionalFields: GraphQLFieldConfigMap<any, any>): GraphQLSchema;
export declare function removeObjectFields(schema: GraphQLSchema, typeName: string, testFn: (fieldName: string, field: GraphQLFieldConfig<any, any>) => boolean): [GraphQLSchema, GraphQLFieldConfigMap<any, any>];
export declare function selectObjectFields(schema: GraphQLSchema, typeName: string, testFn: (fieldName: string, field: GraphQLFieldConfig<any, any>) => boolean): GraphQLFieldConfigMap<any, any>;
export declare function modifyObjectFields(schema: GraphQLSchema, typeName: string, testFn: (fieldName: string, field: GraphQLFieldConfig<any, any>) => boolean, newFields: GraphQLFieldConfigMap<any, any>): [GraphQLSchema, GraphQLFieldConfigMap<any, any>];
