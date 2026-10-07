import type { FieldNode, FragmentDefinitionNode, InlineFragmentNode, GraphQLResolveInfo, GraphQLOutputType } from '../graphql';
export declare type ProjectionType = {
    [fieldName: string]: any;
};
export declare type ProjectionNode = {
    [fieldName: string]: any;
};
export declare function getProjectionFromAST(info: GraphQLResolveInfo, fieldNode?: FieldNode | InlineFragmentNode | FragmentDefinitionNode): ProjectionType;
export declare function getProjectionFromASTQuery(info: GraphQLResolveInfo, fieldNode?: FieldNode | InlineFragmentNode | FragmentDefinitionNode): ProjectionType;
export declare const getProjectionFromASTquery: typeof getProjectionFromASTQuery;
export declare function getFlatProjectionFromAST(info: GraphQLResolveInfo, fieldNodes?: FieldNode | InlineFragmentNode | FragmentDefinitionNode): Record<any, any>;
export declare function extendByFieldProjection(returnType: GraphQLOutputType, projection: ProjectionType): ProjectionType;
//# sourceMappingURL=projection.d.ts.map