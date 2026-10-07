import { Program } from 'typescript';
import * as ts from 'typescript';
import { ModuleResolver } from '../parser-options';
import { ParseSettings } from '../parseSettings';
interface ASTAndProgram {
    ast: ts.SourceFile;
    program: ts.Program;
}
/**
 * Compiler options required to avoid critical functionality issues
 */
declare const CORE_COMPILER_OPTIONS: ts.CompilerOptions;
declare function createDefaultCompilerOptionsFromExtra(parseSettings: ParseSettings): ts.CompilerOptions;
type CanonicalPath = string & {
    __brand: unknown;
};
declare function getCanonicalFileName(filePath: string): CanonicalPath;
declare function ensureAbsolutePath(p: string, tsconfigRootDir: string): string;
declare function canonicalDirname(p: CanonicalPath): CanonicalPath;
declare function getAstFromProgram(currentProgram: Program, parseSettings: ParseSettings): ASTAndProgram | undefined;
declare function getModuleResolver(moduleResolverPath: string): ModuleResolver;
/**
 * Hash content for compare content.
 * @param content hashed contend
 * @returns hashed result
 */
declare function createHash(content: string): string;
export { ASTAndProgram, CORE_COMPILER_OPTIONS, canonicalDirname, CanonicalPath, createDefaultCompilerOptionsFromExtra, createHash, ensureAbsolutePath, getCanonicalFileName, getAstFromProgram, getModuleResolver, };
//# sourceMappingURL=shared.d.ts.map
