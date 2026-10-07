import type * as ts from 'typescript';
import { TypeScriptHostExtension } from '../extension/TypeScriptExtension';
import { ControlledTypeScriptSystem } from './ControlledTypeScriptSystem';
declare function createControlledWatchSolutionBuilderHost<TProgram extends ts.BuilderProgram>(typescript: typeof ts, parsedCommandLine: ts.ParsedCommandLine, system: ControlledTypeScriptSystem, createProgram?: ts.CreateProgram<TProgram>, reportDiagnostic?: ts.DiagnosticReporter, reportWatchStatus?: ts.WatchStatusReporter, reportSolutionBuilderStatus?: (diagnostic: ts.Diagnostic) => void, afterProgramCreate?: (program: TProgram) => void, afterProgramEmitAndDiagnostics?: (program: TProgram) => void, hostExtensions?: TypeScriptHostExtension[]): ts.SolutionBuilderWithWatchHost<TProgram>;
export { createControlledWatchSolutionBuilderHost };
