import webpack from 'webpack';
import { EsLintReporterOptions } from './EsLintReporterOptions';
import { CLIEngineOptions } from './types/eslint';
interface EsLintReporterConfiguration {
    enabled: boolean;
    memoryLimit: number;
    options: CLIEngineOptions;
    files: string[];
}
declare function createEsLintReporterConfiguration(compiler: webpack.Compiler, options: EsLintReporterOptions | undefined): EsLintReporterConfiguration;
export { EsLintReporterConfiguration, createEsLintReporterConfiguration };
