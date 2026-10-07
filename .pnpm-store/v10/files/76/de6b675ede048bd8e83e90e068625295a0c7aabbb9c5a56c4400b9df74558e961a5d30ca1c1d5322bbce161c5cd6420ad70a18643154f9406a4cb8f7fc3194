import webpack from 'webpack';
import { ForkTsCheckerWebpackPluginOptions } from './ForkTsCheckerWebpackPluginOptions';
import { IssueConfiguration } from './issue/IssueConfiguration';
import { FormatterConfiguration } from './formatter';
import { TypeScriptReporterConfiguration } from './typescript-reporter/TypeScriptReporterConfiguration';
import { EsLintReporterConfiguration } from './eslint-reporter/EsLintReporterConfiguration';
import { LoggerConfiguration } from './logger/LoggerConfiguration';
interface ForkTsCheckerWebpackPluginConfiguration {
    async: boolean;
    typescript: TypeScriptReporterConfiguration;
    eslint: EsLintReporterConfiguration;
    issue: IssueConfiguration;
    formatter: FormatterConfiguration;
    logger: LoggerConfiguration;
}
declare function createForkTsCheckerWebpackPluginConfiguration(compiler: webpack.Compiler, options?: ForkTsCheckerWebpackPluginOptions): ForkTsCheckerWebpackPluginConfiguration;
export { ForkTsCheckerWebpackPluginConfiguration, createForkTsCheckerWebpackPluginConfiguration };
