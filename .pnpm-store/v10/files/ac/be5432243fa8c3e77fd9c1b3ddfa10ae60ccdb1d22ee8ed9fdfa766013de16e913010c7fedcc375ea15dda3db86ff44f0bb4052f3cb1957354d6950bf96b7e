import type * as ts from 'typescript';
import type { ParserServices, TSESTreeOptions } from './parser-options';
import type { TSESTree } from './ts-estree';
export declare function clearProgramCache(): void;
export declare function clearDefaultProjectMatchedFiles(): void;
export type AST<T extends TSESTreeOptions> = (T['comment'] extends true ? {
    comments: TSESTree.Comment[];
} : {}) & (T['tokens'] extends true ? {
    tokens: TSESTree.Token[];
} : {}) & TSESTree.Program;
export interface ParseAndGenerateServicesResult<T extends TSESTreeOptions> {
    ast: AST<T>;
    services: ParserServices;
}
export declare function parse<T extends TSESTreeOptions = TSESTreeOptions>(code: string, options?: T): AST<T>;
export declare function clearParseAndGenerateServicesCalls(): void;
export declare function parseAndGenerateServices<T extends TSESTreeOptions = TSESTreeOptions>(code: string | ts.SourceFile, tsestreeOptions: T): ParseAndGenerateServicesResult<T>;
