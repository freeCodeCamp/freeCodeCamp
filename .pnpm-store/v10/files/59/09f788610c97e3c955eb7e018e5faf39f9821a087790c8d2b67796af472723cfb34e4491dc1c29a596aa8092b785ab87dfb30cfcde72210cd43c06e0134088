import { ScopeManager } from '@typescript-eslint/scope-manager';
import { TSESTree } from '@typescript-eslint/types';
import { ParserOptions } from '@typescript-eslint/types';
import { ParserServices } from '@typescript-eslint/typescript-estree';
import { visitorKeys } from '@typescript-eslint/typescript-estree';
interface ParseForESLintResult {
    ast: TSESTree.Program & {
        range?: [
            number,
            number
        ];
        tokens?: TSESTree.Token[];
        comments?: TSESTree.Comment[];
    };
    services: ParserServices;
    visitorKeys: typeof visitorKeys;
    scopeManager: ScopeManager;
}
declare function parse(code: string, options?: ParserOptions): ParseForESLintResult['ast'];
declare function parseForESLint(code: string, options?: ParserOptions | null): ParseForESLintResult;
export { parse, parseForESLint, ParserOptions };
//# sourceMappingURL=parser.d.ts.map
