import { GraphQLSchema, FieldDefinitionNode, GraphQLNamedType } from 'graphql';
/**
 * Federation Spec
 */
export declare const federationSpec: import("graphql").DocumentNode;
/**
 * Adds `__resolveReference` in each ObjectType involved in Federation.
 * @param schema
 */
export declare function addFederationReferencesToSchema(schema: GraphQLSchema): GraphQLSchema;
/**
 * Removes Federation Spec from GraphQL Schema
 * @param schema
 * @param config
 */
export declare function removeFederation(schema: GraphQLSchema): GraphQLSchema;
export declare class ApolloFederation {
    private enabled;
    private schema;
    private providesMap;
    constructor({ enabled, schema }: {
        enabled: boolean;
        schema: GraphQLSchema;
    });
    /**
     * Excludes types definde by Federation
     * @param typeNames List of type names
     */
    filterTypeNames(typeNames: string[]): string[];
    /**
     * Excludes `__resolveReference` fields
     * @param fieldNames List of field names
     */
    filterFieldNames(fieldNames: string[]): string[];
    /**
     * Decides if directive should not be generated
     * @param name directive's name
     */
    skipDirective(name: string): boolean;
    /**
     * Decides if scalar should not be generated
     * @param name directive's name
     */
    skipScalar(name: string): boolean;
    /**
     * Decides if field should not be generated
     * @param data
     */
    skipField({ fieldNode, parentType }: {
        fieldNode: FieldDefinitionNode;
        parentType: GraphQLNamedType;
    }): boolean;
    isResolveReferenceField(fieldNode: FieldDefinitionNode): boolean;
    /**
     * Transforms ParentType signature in ObjectTypes involved in Federation
     * @param data
     */
    transformParentType({ fieldNode, parentType, parentTypeSignature, }: {
        fieldNode: FieldDefinitionNode;
        parentType: GraphQLNamedType;
        parentTypeSignature: string;
    }): string;
    private isExternalAndNotProvided;
    private isExternal;
    private hasProvides;
    private translateFieldSet;
    private extractKeyOrRequiresFieldSet;
    private extractProvidesFieldSet;
    private createMapOfProvides;
}
