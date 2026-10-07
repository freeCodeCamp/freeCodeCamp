import { GraphQLSchema, DocumentNode } from 'graphql';
import { Source } from '@graphql-tools/utils';
import type { Profiler } from './profiler.js';
import type { ApolloEngineOptions } from '@graphql-tools/apollo-engine-loader';
export declare namespace Types {
    interface GenerateOptions {
        filename: string;
        plugins: Types.ConfiguredPlugin[];
        schema: DocumentNode;
        schemaAst?: GraphQLSchema;
        documents: Types.DocumentFile[];
        config: {
            [key: string]: any;
        };
        pluginMap: {
            [name: string]: CodegenPlugin;
        };
        skipDocumentsValidation?: Types.SkipDocumentsValidationOptions;
        pluginContext?: {
            [key: string]: any;
        };
        profiler?: Profiler;
        cache?<T>(namespace: string, key: string, factory: () => Promise<T>): Promise<T>;
    }
    type FileOutput = {
        filename: string;
        content: string;
        hooks?: {
            beforeOneFileWrite?: LifecycleHooksDefinition['beforeOneFileWrite'];
            afterOneFileWrite?: LifecycleHooksDefinition['afterOneFileWrite'];
        };
    };
    interface DocumentFile extends Source {
        hash?: string;
    }
    type Promisable<T> = T | Promise<T>;
    type InstanceOrArray<T> = T | T[];
    /**
     * @additionalProperties false
     * @description Loads schema using a pointer, with a custom loader (code file).
     */
    interface SchemaWithLoaderOptions {
        /**
         * @description Specify a path to a custom code file (local or module) that will handle the schema loading.
         */
        loader: string;
    }
    interface SchemaWithLoader {
        [pointer: string]: SchemaWithLoaderOptions;
    }
    /**
     * @additionalProperties false
     * @description Loads schema using a pointer, without using `require` while looking for schemas in code files.
     */
    interface SchemaFromCodeFileOptions {
        /**
         * @description Set this to `true` in order to tell codegen not to try to `require` files in order to find schema/docs
         */
        noRequire?: boolean;
        /**
         * @description Set this to `true` in order to tell codegen not to try to extract GraphQL AST strings schema/docs
         */
        noPluck?: boolean;
        /**
         * @description Set this to `true` in order to tell codegen to skip documents validation.
         */
        assumeValid?: boolean;
    }
    interface SchemaFromCodeFile {
        [path: string]: SchemaFromCodeFileOptions;
    }
    /**
     * @additionalProperties false
     * @description Loads a schema from remote endpoint, with custom http options.
     */
    interface UrlSchemaOptions {
        /**
         * @description HTTP headers you wish to add to the HTTP request sent by codegen to fetch your GraphQL remote schema.
         */
        headers?: {
            [headerName: string]: string;
        };
        /**
         * @description Specify a Node module name, or a custom file, to be used instead of standard `fetch`
         */
        customFetch?: string;
        /**
         * @description HTTP Method to use, either POST (default) or GET.
         */
        method?: string;
    }
    interface UrlSchemaWithOptions {
        [url: string]: UrlSchemaOptions;
    }
    /**
     * @additionalProperties false
     * @description Loads a schema a local file or files, with customized options for parsing/loading.
     */
    interface LocalSchemaPathOptions {
        /**
         * @description Skips checks for graphql-import syntax and loads the file as-is, without imports support.
         * @default true
         */
        skipGraphQLImport?: boolean;
        /**
         * @description Converts all GraphQL comments (`#` sign) to descriptions during the parse phase, to make it available
         * for plugins later.
         * @default false
         */
        commentDescriptions?: boolean;
        /**
         * Set to true to assume the SDL is valid.
         *
         * @default false
         */
        assumeValidSDL?: boolean;
        /**
         * By default, the parser creates AST nodes that know the location
         * in the source that they correspond to. This configuration flag
         * disables that behavior for performance or testing.
         *
         * @default false
         */
        noLocation?: boolean;
        /**
         * If enabled, the parser will parse empty fields sets in the Schema
         * Definition Language. Otherwise, the parser will follow the current
         * specification.
         *
         * This option is provided to ease adoption of the final SDL specification
         * and will be removed in v16.
         *
         * @default false
         */
        allowLegacySDLEmptyFields?: boolean;
        /**
         * If enabled, the parser will parse implemented interfaces with no `&`
         * character between each interface. Otherwise, the parser will follow the
         * current specification.
         *
         * This option is provided to ease adoption of the final SDL specification
         * and will be removed in v16.
         *
         * @default false
         */
        allowLegacySDLImplementsInterfaces?: boolean;
        /**
         * EXPERIMENTAL:
         *
         * If enabled, the parser will understand and parse variable definitions
         * contained in a fragment definition. They'll be represented in the
         * `variableDefinitions` field of the FragmentDefinitionNode.
         *
         * The syntax is identical to normal, query-defined variables. For example:
         *
         *   fragment A($var: Boolean = false) on T  {
         *     ...
         *   }
         *
         * Note: this feature is experimental and may change or be removed in the
         * future.
         *
         * @default false
         */
        experimentalFragmentVariables?: boolean;
    }
    interface LocalSchemaPathWithOptions {
        [globPath: string]: LocalSchemaPathOptions;
    }
    interface ApolloEngineSchemaOptions {
        'apollo-engine': ApolloEngineOptions;
    }
    type SchemaGlobPath = string;
    /**
     * @description A URL to your GraphQL endpoint, a local path to `.graphql` file, a glob pattern to your GraphQL schema files, or a JavaScript file that exports the schema to generate code from. This can also be an array which specifies multiple schemas to generate code from. You can read more about the supported formats [here](schema-field#available-formats).
     */
    type Schema = string | UrlSchemaWithOptions | ApolloEngineSchemaOptions | LocalSchemaPathWithOptions | SchemaGlobPath | SchemaWithLoader | SchemaFromCodeFile;
    type OperationDocumentGlobPath = string;
    /**
     * @additionalProperties false
     * @description Specify a path to a custom loader for your GraphQL documents.
     */
    interface CustomDocumentLoaderOptions {
        /**
         * @description Specify a path to a custom code file (local or module) that will handle the documents loading.
         */
        loader: string;
    }
    interface CustomDocumentLoader {
        [path: string]: CustomDocumentLoaderOptions;
    }
    type OperationDocument = OperationDocumentGlobPath | CustomDocumentLoader;
    type PluginConfig<T = any> = {
        [key: string]: T;
    };
    interface ConfiguredPlugin {
        [name: string]: PluginConfig;
    }
    type NamedPlugin = string;
    type NamedPreset = string;
    type OutputConfig = NamedPlugin | ConfiguredPlugin;
    type PresetNamesBase = 'client' | 'near-operation-file' | 'gql-tag-operations' | 'graphql-modules' | 'import-types';
    type PresetNames = `${PresetNamesBase}-preset` | PresetNamesBase;
    /**
     * @additionalProperties false
     */
    interface ConfiguredOutput {
        /**
         * @type array
         * @items { "$ref": "#/definitions/GeneratedPluginsMap" }
         * @description List of plugins to apply to this current output file.
         *
         * You can either specify plugins from the community using the NPM package name (after you installed it in your project), or you can use a path to a local file for custom plugins.
         *
         * You can find a list of available plugins here: https://graphql-code-generator.com/docs/plugins/index
         * Need a custom plugin? read this: https://graphql-code-generator.com/docs/custom-codegen/index
         */
        plugins: OutputConfig[];
        /**
         * @description If your setup uses Preset to have a more dynamic setup and output, set the name of your preset here.
         *
         * Presets are a way to have more than one file output, for example: https://graphql-code-generator.com/docs/presets/near-operation-file
         *
         * You can either specify a preset from the community using the NPM package name (after you installed it in your project), or you can use a path to a local file for a custom preset.
         *
         * List of available presets: https://graphql-code-generator.com/docs/presets/presets-index
         */
        preset?: PresetNames | OutputPreset;
        /**
         * @description If your setup uses Preset to have a more dynamic setup and output, set the configuration object of your preset here.
         *
         * List of available presets: https://graphql-code-generator.com/docs/presets/presets-index
         */
        presetConfig?: {
            [key: string]: any;
        };
        /**
         * @description A flag to overwrite files if they already exist when generating code (`true` by default).
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/codegen-config
         */
        overwrite?: boolean;
        /**
         * @description A pointer(s) to your GraphQL documents: query, mutation, subscription and fragment. These documents will be loaded into for all your output files.
         * You can use one of the following:
         *
         * - Path to a local `.graphql` file
         * - Path to a code file (for example: `.js` or `.tsx`) containing GraphQL operation strings.
         * - Glob expression pointing to multiple `.graphql` files
         * - Glob expression pointing to multiple code files
         * - Inline string containing GraphQL SDL operation definition
         *
         * You can specify either a single file, or multiple.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/documents-field
         */
        documents?: InstanceOrArray<OperationDocument>;
        /**
         * @description A pointer(s) to your GraphQL schema. This schema will be available only for this specific `generates` record.
         * You can use one of the following:
         *
         * - URL pointing to a GraphQL endpoint
         * - Path to a local `.json` file
         * - Path to a local `.graphql` file
         * - Glob expression pointing to multiple `.graphql` files
         * - Path to a local code file (for example: `.js`) that exports `GraphQLSchema` object
         * - Inline string containing GraphQL SDL schema definition
         *
         * You can specify either a single schema, or multiple, and GraphQL Code Generator will merge the schemas into a single schema.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/schema-field
         */
        schema?: InstanceOrArray<Schema>;
        /**
         * @description Configuration object containing key => value that will be passes to the plugins.
         * Specifying configuration in this level of your configuration file will pass it to all plugins, in all outputs.
         *
         * The options may vary depends on what plugins you are using.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/config-field
         */
        config?: PluginConfig;
        /**
         * @description Specifies scripts to run when events are happening in the codegen core.
         * Hooks defined on that level will effect only the current output files.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/lifecycle-hooks
         */
        hooks?: Partial<LifecycleHooksDefinition>;
    }
    type PresetFnArgs<Config = any, PluginConfig = {
        [key: string]: any;
    }> = {
        presetConfig: Config;
        baseOutputDir: string;
        plugins: Types.ConfiguredPlugin[];
        schema: DocumentNode;
        schemaAst?: GraphQLSchema;
        documents: Types.DocumentFile[];
        config: PluginConfig;
        pluginMap: {
            [name: string]: CodegenPlugin;
        };
        pluginContext?: {
            [name: string]: any;
        };
        profiler?: Profiler;
        cache?<T>(namespace: string, key: string, factory: () => Promise<T>): Promise<T>;
    };
    type OutputPreset<TPresetConfig = any> = {
        buildGeneratesSection: (options: PresetFnArgs<TPresetConfig>) => Promisable<GenerateOptions[]>;
        prepareDocuments?: (outputFilePath: string, outputSpecificDocuments: Types.OperationDocument[]) => Promisable<Types.OperationDocument[]>;
    };
    type RequireExtension = InstanceOrArray<string>;
    type PackageLoaderFn<TExpectedResult> = (name: string) => Promisable<TExpectedResult>;
    /**
     * @description Represents the root YAML schema for the config file.
     * @additionalProperties false
     */
    interface Config {
        /**
         * @description A pointer(s) to your GraphQL schema. This schema will be the base schema for all your outputs.
         * You can use one of the following:
         *
         * - URL pointing to a GraphQL endpoint
         * - Path to a local `.json` file
         * - Path to a local `.graphql` file
         * - Glob expression pointing to multiple `.graphql` files
         * - Path to a local code file (for example: `.js`) that exports `GraphQLSchema` object
         * - Inline string containing GraphQL SDL schema definition
         *
         * You can specify either a single schema, or multiple, and GraphQL Code Generator will merge the schemas into a single schema.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/schema-field
         */
        schema?: InstanceOrArray<Schema>;
        /**
         * @description A path to a file which defines custom Node.JS require() handlers for custom file extensions.
         * This is essential if the code generator has to go through files which require other files in an unsupported format (by default).
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/require-field
         * See more information about require.extensions: https://gist.github.com/jamestalmage/df922691475cff66c7e6.
         *
         * Note: values that specified in your .yml file will get loaded after loading the config .yml file.
         */
        require?: RequireExtension;
        /**
         * @description Name for a library that implements `fetch`.
         * Use this to tell codegen to use that to fetch schemas in a custom way.
         */
        customFetch?: string;
        /**
         * @description A pointer(s) to your GraphQL documents: query, mutation, subscription and fragment. These documents will be loaded into for all your output files.
         * You can use one of the following:
         *
         * - Path to a local `.graphql` file
         * - Path to a code file (for example: `.js` or `.tsx`) containing GraphQL operation strings.
         * - Glob expression pointing to multiple `.graphql` files
         * - Glob expression pointing to multiple code files
         * - Inline string containing GraphQL SDL operation definition
         *
         * You can specify either a single file, or multiple.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/documents-field
         */
        documents?: InstanceOrArray<OperationDocument>;
        /**
         * @type object
         * @additionalProperties true
         * @description Configuration object containing key => value that will be passes to the plugins.
         * Specifying configuration in this level of your configuration file will pass it to all plugins, in all outputs.
         *
         * The options may vary depends on what plugins you are using.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/config-field
         */
        config?: PluginConfig;
        /**
         * @description A map where the key represents an output path for the generated code and the value represents a set of options which are relevant for that specific file.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/codegen-config
         */
        generates: {
            [outputPath: string]: ConfiguredOutput | ConfiguredPlugin[];
        };
        /**
         * @description A flag to overwrite files if they already exist when generating code (`true` by default).
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/codegen-config
         */
        overwrite?: boolean;
        /**
         * @description A flag to trigger codegen when there are changes in the specified GraphQL schemas.
         *
         * You can either specify a boolean to turn it on/off or specify an array of glob patterns to add custom files to the watch.
         *
         * For more details: https://graphql-code-generator.com/docs/getting-started/development-workflow#watch-mode
         */
        watch?: boolean | string | string[];
        /**
         * @description Allows overriding the behavior of watch to use stat polling over native file watching support.
         *
         * Config fields have the same defaults and sematics as the identically named ones for chokidar.
         *
         * For more details: https://graphql-code-generator.com/docs/getting-started/development-workflow#watch-mode
         */
        watchConfig?: {
            usePolling: boolean;
            interval?: number;
        };
        /**
         * @description A flag to suppress non-zero exit code when there are no documents to generate.
         */
        ignoreNoDocuments?: boolean;
        /**
         * @description A flag to disable adding `.js` extension to the output file. Default: `true`.
         */
        emitLegacyCommonJSImports?: boolean;
        /**
         * @description A flag to suppress printing errors when they occur.
         */
        silent?: boolean;
        /**
         * @description A flag to output more detailed information about tasks
         */
        verbose?: boolean;
        /**
         * @description A flag to output debug logs
         */
        debug?: boolean;
        /**
         * @description A flag to print only errors.
         */
        errorsOnly?: boolean;
        /**
         * @description If you are using the programmatic API in a browser environment, you can override this configuration to load your plugins in a way different than require.
         */
        pluginLoader?: PackageLoaderFn<CodegenPlugin>;
        /**
         * @description Additional context passed to plugins
         */
        pluginContext?: {
            [key: string]: any;
        };
        /**
         * @description Allows you to override the configuration for `@graphql-tools/graphql-tag-pluck`, the tool that extracts your GraphQL operations from your code files.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/documents-field#graphql-tag-pluck
         */
        pluckConfig?: {
            /**
             * @description An array of package name and identifier that will be used to track down your gql usages and imports. Use this if your code files imports gql from another library or you have a custom gql tag. identifier is the named export, so don't provide it if the tag function is imported as default.
             */
            modules?: Array<{
                /**
                 * @description the name of the NPM package name you wish to look for
                 */
                name: string;
                /**
                 * @description the tag identifier name you wish to look for
                 */
                identifier?: string;
            }>;
            /**
             * @description Configures the magic GraphQL comments to look for. The default is `GraphQL`.
             */
            magicComment?: string;
            /**
             * @description Overrides the name of the default GraphQL name identifier.
             */
            globalIdentifier?: string;
        };
        /**
         * @description Specifies scripts to run when events are happening in the codegen core.
         * Hooks defined on that level will effect all output files.
         *
         * For more details: https://graphql-code-generator.com/docs/config-reference/lifecycle-hooks
         */
        hooks?: Partial<LifecycleHooksDefinition>;
    }
    type ComplexPluginOutput = {
        content: string;
        prepend?: string[];
        append?: string[];
    };
    type PluginOutput = string | ComplexPluginOutput;
    type HookFunction = (...args: any[]) => void | Promise<void>;
    /**
     * @description All available lifecycle hooks
     * @additionalProperties false
     */
    type LifecycleHooksDefinition<T = string | HookFunction | (string | HookFunction)[]> = {
        /**
         * @description Triggered with no arguments when the codegen starts (after the `codegen.yml` has beed parsed).
         *
         * Specify a shell command to run.
         */
        afterStart: T;
        /**
         * @description Triggered with no arguments, right before the codegen closes, or when watch mode is stopped.
         *
         * Specify a shell command to run.
         */
        beforeDone: T;
        /**
         * @description Triggered every time a file changes when using watch mode.
         * Triggered with two arguments: the type of the event (for example, `changed`) and the path of the file.
         */
        onWatchTriggered: T;
        /**
         * @description Triggered in case of a general error in the codegen. The argument is a string containing the error.
         */
        onError: T;
        /**
         * @description Triggered after a file is written to the file-system. Executed with the path for the file.
         * If the content of the file hasn't changed since last execution - this hooks won't be triggered.
         *
         * > This is a very useful hook, you can use it for integration with Prettier or other linters.
         */
        afterOneFileWrite: T;
        /**
         * @description Executed after writing all the files to the file-system.
         * Triggered with multiple arguments - paths for all files.
         */
        afterAllFileWrite: T;
        /**
         * @description Triggered before a file is written to the file-system. Executed with the path for the file.
         *
         * If the content of the file hasn't changed since last execution - this hooks won't be triggered.
         */
        beforeOneFileWrite: T;
        /**
         * @description Executed after the codegen has done creating the output and before writing the files to the file-system.
         *
         * Triggered with multiple arguments - paths for all relevant files.
         *
         * > Not all the files will be actually written to the file-system, because this is triggered before checking if the file has changed since last execution.
         */
        beforeAllFileWrite: T;
    };
    type SkipDocumentsValidationOptions = {
        /**
         * @description Allows you to skip specific rules while validating the documents.
         * See all the rules; https://github.com/graphql/graphql-js/tree/main/src/validation/rules
         */
        ignoreRules?: string[];
        /**
         * @description Ignore duplicate documents validation
         */
        skipDuplicateValidation?: boolean;
        /**
         * @description Skip document validation entirely against the schema
         */
        skipValidationAgainstSchema?: boolean;
    } | boolean;
}
export declare function isComplexPluginOutput(obj: Types.PluginOutput): obj is Types.ComplexPluginOutput;
export declare type PluginFunction<T = any, TOutput extends Types.PluginOutput = Types.PluginOutput> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: T, info?: {
    outputFile?: string;
    allPlugins?: Types.ConfiguredPlugin[];
    pluginContext?: {
        [key: string]: any;
    };
    [key: string]: any;
}) => Types.Promisable<TOutput>;
export declare type PluginValidateFn<T = any> = (schema: GraphQLSchema, documents: Types.DocumentFile[], config: T, outputFile: string, allPlugins: Types.ConfiguredPlugin[], pluginContext?: {
    [key: string]: any;
}) => Types.Promisable<void>;
export declare type AddToSchemaResult = string | DocumentNode | undefined;
export interface CodegenPlugin<T = any> {
    plugin: PluginFunction<T>;
    addToSchema?: AddToSchemaResult | ((config: T) => AddToSchemaResult);
    validate?: PluginValidateFn;
}
