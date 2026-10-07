import type * as ts from 'typescript';
import { TypeScriptConfigurationOverwrite } from '../TypeScriptConfigurationOverwrite';
import { FilesMatch } from '../../reporter';
declare function parseTypeScriptConfiguration(typescript: typeof ts, configFileName: string, configFileContext: string, configOverwriteJSON: TypeScriptConfigurationOverwrite, parseConfigFileHost: ts.ParseConfigFileHost): ts.ParsedCommandLine;
declare function getDependenciesFromTypeScriptConfiguration(typescript: typeof ts, parsedConfiguration: ts.ParsedCommandLine, configFileContext: string, parseConfigFileHost: ts.ParseConfigFileHost, processedConfigFiles?: string[]): FilesMatch;
export declare function isIncrementalCompilation(options: ts.CompilerOptions): boolean;
declare function getArtifactsFromTypeScriptConfiguration(typescript: typeof ts, parsedConfiguration: ts.ParsedCommandLine, configFileContext: string, parseConfigFileHost: ts.ParseConfigFileHost, processedConfigFiles?: string[]): FilesMatch;
export { parseTypeScriptConfiguration, getDependenciesFromTypeScriptConfiguration, getArtifactsFromTypeScriptConfiguration, };
