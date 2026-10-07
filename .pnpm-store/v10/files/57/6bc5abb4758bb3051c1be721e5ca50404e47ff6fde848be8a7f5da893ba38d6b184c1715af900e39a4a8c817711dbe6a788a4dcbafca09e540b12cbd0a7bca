import { ParserServices, TSESTreeOptions } from './parser-options';
import { TSESTree } from './ts-estree';
declare function clearProgramCache(): void;
interface EmptyObject {
}
type AST<T extends TSESTreeOptions> = TSESTree.Program & (T['tokens'] extends true ? {
    tokens: TSESTree.Token[];
} : EmptyObject) & (T['comment'] extends true ? {
    comments: TSESTree.Comment[];
} : EmptyObject);
interface ParseAndGenerateServicesResult<T extends TSESTreeOptions> {
    ast: AST<T>;
    services: ParserServices;
}
interface ParseWithNodeMapsResult<T extends TSESTreeOptions> {
    ast: AST<T>;
    esTreeNodeToTSNodeMap: ParserServices['esTreeNodeToTSNodeMap'];
    tsNodeToESTreeNodeMap: ParserServices['tsNodeToESTreeNodeMap'];
}
declare function parse<T extends TSESTreeOptions = TSESTreeOptions>(code: string, options?: T): AST<T>;
declare function parseWithNodeMaps<T extends TSESTreeOptions = TSESTreeOptions>(code: string, options?: T): ParseWithNodeMapsResult<T>;
declare function clearParseAndGenerateServicesCalls(): void;
declare function parseAndGenerateServices<T extends TSESTreeOptions = TSESTreeOptions>(code: string, options: T): ParseAndGenerateServicesResult<T>;
export { AST, parse, parseAndGenerateServices, parseWithNodeMaps, ParseAndGenerateServicesResult, ParseWithNodeMapsResult, clearProgramCache, clearParseAndGenerateServicesCalls, };
//# sourceMappingURL=parser.d.ts.map
