import { L as ParseResult$1, R as ParserOptions$1 } from "./shared/binding-zH1vcmbM.mjs";
import { Program } from "@oxc-project/types";

//#region src/parse-ast-index.d.ts
/**
* @hidden
*/
type ParseResult = ParseResult$1;
/**
* @hidden
*/
type ParserOptions = ParserOptions$1;
/**
* Parse code synchronously and return the AST.
*
* This function is similar to Rollup's `parseAst` function.
* Prefer using {@linkcode parseSync} instead of this function as it has more information in the return value.
*
* @category Utilities
*/
declare function parseAst(sourceText: string, options?: ParserOptions | null, filename?: string): Program;
/**
* Parse code asynchronously and return the AST.
*
* This function is similar to Rollup's `parseAstAsync` function.
* Prefer using {@linkcode parseAsync} instead of this function as it has more information in the return value.
*
* @category Utilities
*/
declare function parseAstAsync(sourceText: string, options?: ParserOptions | null, filename?: string): Promise<Program>;
//#endregion
export { ParseResult, ParserOptions, parseAst, parseAstAsync };