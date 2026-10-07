import webpack from 'webpack';
import { TypeScriptDiagnosticsOptions } from './TypeScriptDiagnosticsOptions';
import { TypeScriptReporterOptions } from './TypeScriptReporterOptions';
import { TypeScriptVueExtensionConfiguration } from './extension/vue/TypeScriptVueExtensionConfiguration';
import { TypeScriptConfigurationOverwrite } from './TypeScriptConfigurationOverwrite';
interface TypeScriptReporterConfiguration {
    enabled: boolean;
    memoryLimit: number;
    configFile: string;
    configOverwrite: TypeScriptConfigurationOverwrite;
    build: boolean;
    context: string;
    mode: 'readonly' | 'write-tsbuildinfo' | 'write-dts' | 'write-references';
    diagnosticOptions: TypeScriptDiagnosticsOptions;
    extensions: {
        vue: TypeScriptVueExtensionConfiguration;
    };
    profile: boolean;
    typescriptPath: string;
}
declare function createTypeScriptReporterConfiguration(compiler: webpack.Compiler, options: TypeScriptReporterOptions | undefined): TypeScriptReporterConfiguration;
export { createTypeScriptReporterConfiguration, TypeScriptReporterConfiguration };
