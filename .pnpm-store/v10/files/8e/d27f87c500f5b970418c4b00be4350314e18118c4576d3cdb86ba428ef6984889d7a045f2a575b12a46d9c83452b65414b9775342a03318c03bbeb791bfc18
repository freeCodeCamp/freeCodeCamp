import { Types, CodegenPlugin, Profiler } from '@graphql-codegen/plugin-helpers';
import { DocumentNode, GraphQLSchema } from 'graphql';
export interface ExecutePluginOptions {
    name: string;
    config: Types.PluginConfig;
    parentConfig: Types.PluginConfig;
    schema: DocumentNode;
    schemaAst?: GraphQLSchema;
    documents: Types.DocumentFile[];
    outputFilename: string;
    allPlugins: Types.ConfiguredPlugin[];
    skipDocumentsValidation?: Types.SkipDocumentsValidationOptions;
    pluginContext?: {
        [key: string]: any;
    };
    profiler?: Profiler;
}
export declare function executePlugin(options: ExecutePluginOptions, plugin: CodegenPlugin): Promise<Types.PluginOutput>;
