import { GraphQLSchema, GraphQLError, ValidationContext, ASTVisitor } from 'graphql';
import { Source } from './loaders.cjs';
export declare type ValidationRule = (context: ValidationContext) => ASTVisitor;
export interface LoadDocumentError {
    readonly filePath?: string;
    readonly errors: ReadonlyArray<GraphQLError>;
}
export declare function validateGraphQlDocuments(schema: GraphQLSchema, documentFiles: Source[], effectiveRules?: ValidationRule[]): Promise<ReadonlyArray<LoadDocumentError>>;
export declare function checkValidationErrors(loadDocumentErrors: ReadonlyArray<LoadDocumentError>): void | never;
export declare function createDefaultRules(): import("graphql").ValidationRule[];
