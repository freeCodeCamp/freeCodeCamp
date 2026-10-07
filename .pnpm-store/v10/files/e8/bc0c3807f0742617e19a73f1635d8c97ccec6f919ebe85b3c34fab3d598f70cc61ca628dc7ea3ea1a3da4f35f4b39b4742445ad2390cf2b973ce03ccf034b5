import { GraphQLSchema, GraphQLError } from 'graphql';
import { ExecutionRequest, ExecutionResult } from './Interfaces.js';
export declare type ValueVisitor = (value: any) => any;
export declare type ObjectValueVisitor = {
    __enter?: ValueVisitor;
    __leave?: ValueVisitor;
} & Record<string, ValueVisitor>;
export declare type ResultVisitorMap = Record<string, ValueVisitor | ObjectValueVisitor>;
export declare type ErrorVisitor = (error: GraphQLError, pathIndex: number) => GraphQLError;
export declare type ErrorVisitorMap = {
    __unpathed?: (error: GraphQLError) => GraphQLError;
} & Record<string, Record<string, ErrorVisitor>>;
export declare function visitData(data: any, enter?: ValueVisitor, leave?: ValueVisitor): any;
export declare function visitErrors(errors: ReadonlyArray<GraphQLError>, visitor: (error: GraphQLError) => GraphQLError): Array<GraphQLError>;
export declare function visitResult(result: ExecutionResult, request: ExecutionRequest, schema: GraphQLSchema, resultVisitorMap?: ResultVisitorMap, errorVisitorMap?: ErrorVisitorMap): any;
