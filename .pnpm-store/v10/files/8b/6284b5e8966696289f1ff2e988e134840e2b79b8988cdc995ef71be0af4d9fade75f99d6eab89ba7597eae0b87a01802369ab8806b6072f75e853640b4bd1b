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
export declare function clearRealPathCache(): void;
export declare function getCanonicalRealPath(filePath: string): CanonicalPath;
/**
 * Maps the canonical real path of each directory that is only reachable through
 * a symlink to the path it's referred to by.
 *
 * TypeScript de-duplicates directories by real path when it expands a TSConfig's
 * `include`s, so a directory reachable both directly and through a symlink is
 * only visited once. Files under it then exist in the project solely under
 * whichever of the two paths was visited first.
 * https://github.com/typescript-eslint/typescript-eslint/issues/2987
 */
export declare function createSymlinkedDirectories(fileNames: Iterable<string>): ReadonlyMap<CanonicalPath, string>;
/**
 * Resolves the path a symlinked directory's files are referred to by, for a path
 * that refers to the same file on disk.
 */
export declare function getPathToSameFile(symlinkedDirectories: ReadonlyMap<CanonicalPath, string>, filePath: string): string | undefined;
/**
 * Retrieves a program's source file for a path, including when the program knows
 * the file by a different path that resolves to the same file on disk.
 */
export declare function getSourceFileFromProgram(program: ts.Program, filePath: string): ts.SourceFile | undefined;
export declare function getAstFromProgram(currentProgram: Program, filePath: string): ASTAndDefiniteProgram | undefined;
/**
 * Hash content for compare content.
 * @param content hashed contend
 * @returns hashed result
 */
export declare function createHash(content: string): string;
