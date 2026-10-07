import { GraphQLSchema, OperationDefinitionNode, OperationTypeNode } from 'graphql';
export type Skip = string[];
export type Force = string[];
export type Ignore = string[];
export type SelectedFields = {
    [key: string]: SelectedFields;
} | boolean;
export declare function buildOperationNodeForField({ schema, kind, field, models, ignore, depthLimit, circularReferenceDepth, argNames, selectedFields, }: {
    schema: GraphQLSchema;
    kind: OperationTypeNode;
    field: string;
    models?: string[];
    ignore?: Ignore;
    depthLimit?: number;
    circularReferenceDepth?: number;
    argNames?: string[];
    selectedFields?: SelectedFields;
}): OperationDefinitionNode;
