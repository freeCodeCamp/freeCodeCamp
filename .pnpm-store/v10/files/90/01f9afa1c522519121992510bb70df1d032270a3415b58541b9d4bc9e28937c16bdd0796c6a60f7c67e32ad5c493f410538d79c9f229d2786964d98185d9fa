import * as ts from 'typescript';
import type { ParseSettings } from '../parseSettings';
import type { ASTAndDefiniteProgram } from './shared';
export declare function useProvidedPrograms(programInstances: Iterable<ts.Program>, parseSettings: ParseSettings): ASTAndDefiniteProgram;
/**
 * Utility offered by parser to help consumers construct their own program instance.
 *
 * @param configFile the path to the tsconfig.json file, relative to `projectDirectory`
 * @param projectDirectory the project directory to use as the CWD, defaults to `process.cwd()`
 */
export declare function createProgramFromConfigFile(configFile: string, projectDirectory?: string): ts.Program;
