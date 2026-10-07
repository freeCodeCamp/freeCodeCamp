import type * as ts from 'typescript';
import { TypeScriptHostExtension } from '../extension/TypeScriptExtension';
import { ControlledTypeScriptSystem } from './ControlledTypeScriptSystem';
declare function createControlledWatchCompilerHost<TProgram extends ts.BuilderProgram>(typescript: typeof ts, parsedCommandLine: ts.ParsedCommandLine, system: ControlledTypeScriptSystem, createProgram?: ts.CreateProgram<TProgram>, reportDiagnostic?: ts.DiagnosticReporter, reportWatchStatus?: ts.WatchStatusReporter, afterProgramCreate?: (program: TProgram) => void, hostExtensions?: TypeScriptHostExtension[]): ts.WatchCompilerHostOfFilesAndCompilerOptions<TProgram>;
export { createControlledWatchCompilerHost };
