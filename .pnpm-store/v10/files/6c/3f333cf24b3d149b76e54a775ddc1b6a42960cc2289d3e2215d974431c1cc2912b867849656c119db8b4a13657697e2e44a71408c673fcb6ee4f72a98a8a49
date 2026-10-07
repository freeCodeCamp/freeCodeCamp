import { GraphQLSchema, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType } from "graphql";
import { InterfaceTypeComposer, NamedTypeComposer, ObjectTypeComposer, SchemaComposer } from "graphql-compose";
import type { IGatsbyNodePartial } from "../datastore/in-memory/indexing";
import { IGatsbyNode } from "../internal";
export declare const toNodeTypeNames: (schema: GraphQLSchema, gqlTypeName: string | GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType) => Array<string>;
export declare function isObjectOrInterfaceTypeComposer(type: NamedTypeComposer<any>): type is ObjectTypeComposer | InterfaceTypeComposer;
export declare const fieldNeedToResolve: ({ schema, gqlType, typeComposer, schemaComposer, fieldName, }: {
    schema: GraphQLSchema;
    gqlType: GraphQLObjectType | GraphQLInterfaceType;
    typeComposer: ObjectTypeComposer<any> | InterfaceTypeComposer<any>;
    schemaComposer: SchemaComposer<any>;
    fieldName: string;
}) => boolean;
export declare const fieldPathNeedToResolve: ({ selector, type, }: {
    selector: string;
    type: string | GraphQLObjectType | GraphQLInterfaceType;
}) => boolean;
export declare function getResolvedFields(node: IGatsbyNode | IGatsbyNodePartial): undefined | Record<string, any>;
type NestedPathStructure = INestedPathStructureNode | true | "ASC" | "DESC";
export interface INestedPathStructureNode {
    [key: string]: NestedPathStructure;
}
export declare function pathObjectToPathString(input: INestedPathStructureNode): {
    path: string;
    leaf: any;
};
export declare function maybeConvertSortInputObjectToSortPath(args: any): any;
export {};
