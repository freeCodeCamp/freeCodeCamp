import { EnumTypeDefinitionNode, GraphQLNamedType, GraphQLSchema, ObjectTypeDefinitionNode } from 'graphql';
import { TypeScriptPluginConfig } from './config.cjs';
import { TsVisitor } from './visitor.cjs';
export declare class TsIntrospectionVisitor extends TsVisitor {
    private typesToInclude;
    constructor(schema: GraphQLSchema, pluginConfig: TypeScriptPluginConfig, typesToInclude: GraphQLNamedType[]);
    DirectiveDefinition(): any;
    ObjectTypeDefinition(node: ObjectTypeDefinitionNode, key: string | number, parent: any): string;
    EnumTypeDefinition(node: EnumTypeDefinitionNode): string;
}
