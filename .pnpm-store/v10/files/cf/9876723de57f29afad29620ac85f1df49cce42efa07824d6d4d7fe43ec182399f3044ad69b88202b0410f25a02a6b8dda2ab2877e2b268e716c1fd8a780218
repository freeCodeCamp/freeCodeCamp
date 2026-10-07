import * as ts from 'typescript';
import { ParseSettings } from '../parseSettings';
import { ASTAndProgram } from './shared';
declare function useProvidedPrograms(programInstances: Iterable<ts.Program>, parseSettings: ParseSettings): ASTAndProgram | undefined;
/**
 * Utility offered by parser to help consumers construct their own program instance.
 *
 * @param configFile the path to the tsconfig.json file, relative to `projectDirectory`
 * @param projectDirectory the project directory to use as the CWD, defaults to `process.cwd()`
 */
declare function createProgramFromConfigFile(configFile: string, projectDirectory?: string): ts.Program;
export { useProvidedPrograms, createProgramFromConfigFile };
//# sourceMappingURL=useProvidedPrograms.d.ts.map
