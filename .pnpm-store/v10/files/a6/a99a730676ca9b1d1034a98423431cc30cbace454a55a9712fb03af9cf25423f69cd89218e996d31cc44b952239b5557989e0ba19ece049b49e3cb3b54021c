import { TypeScriptDiagnosticsOptions } from './TypeScriptDiagnosticsOptions';
import { TypeScriptVueExtensionOptions } from './extension/vue/TypeScriptVueExtensionOptions';
import { TypeScriptConfigurationOverwrite } from './TypeScriptConfigurationOverwrite';
declare type TypeScriptReporterOptions = boolean | {
    enabled?: boolean;
    memoryLimit?: number;
    configFile?: string;
    configOverwrite?: TypeScriptConfigurationOverwrite;
    context?: string;
    build?: boolean;
    mode?: 'readonly' | 'write-tsbuildinfo' | 'write-dts' | 'write-references';
    diagnosticOptions?: Partial<TypeScriptDiagnosticsOptions>;
    extensions?: {
        vue?: TypeScriptVueExtensionOptions;
    };
    profile?: boolean;
    typescriptPath?: string;
};
export { TypeScriptReporterOptions };
