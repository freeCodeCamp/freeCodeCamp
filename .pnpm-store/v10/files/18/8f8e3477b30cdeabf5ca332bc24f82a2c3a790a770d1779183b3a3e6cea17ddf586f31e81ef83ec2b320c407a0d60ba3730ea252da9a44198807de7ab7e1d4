import type { Program } from 'typescript';
import * as ts from 'typescript';
import type { ParseSettings } from '../parseSettings';
export interface ASTAndNoProgram {
    ast: ts.SourceFile;
    program: null;
}
export interface ASTAndDefiniteProgram {
    ast: ts.SourceFile;
    program: ts.Program;
}
export type ASTAndProgram = ASTAndDefiniteProgram | ASTAndNoProgram;
export declare const DEFAULT_EXTRA_FILE_EXTENSIONS: Set<string>;
export declare function createDefaultCompilerOptionsFromExtra(parseSettings: ParseSettings): ts.CompilerOptions;
export type CanonicalPath = {
    __brand: unknown;
} & string;
export declare function getCanonicalFileName(filePath: string): CanonicalPath;
export declare function ensureAbsolutePath(p: string, tsconfigRootDir: string): string;
export declare function canonicalDirname(p: CanonicalPath): CanonicalPath;
export declare function getAstFromProgram(currentProgram: Program, filePath: string): ASTAndDefiniteProgram | undefined;
/**
 * Hash content for compare content.
 * @param content hashed contend
 * @returns hashed result
 */
export declare function createHash(content: string): string;
