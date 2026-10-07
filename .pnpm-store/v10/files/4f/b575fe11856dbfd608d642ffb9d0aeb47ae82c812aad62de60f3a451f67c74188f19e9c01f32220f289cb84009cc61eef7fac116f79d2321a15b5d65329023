import ts from "typescript";

//#region src/tsc/context.d.ts
interface ParsedProject {
  tsconfigPath: string;
  parsedConfig: ts.ParsedCommandLine;
}
type SourceFileToProjectMap = Map<string, ParsedProject>;
interface TscContext {
  programs: ts.Program[];
  files: Map<string, string>;
  projects: Map<string, SourceFileToProjectMap>;
}
declare function createContext(): TscContext;
declare function invalidateContextFile(context: TscContext, file: string): void;
declare const globalContext: TscContext;
//#endregion
export { globalContext as a, createContext as i, SourceFileToProjectMap as n, invalidateContextFile as o, TscContext as r, ParsedProject as t };