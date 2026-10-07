import { GraphQLSchema } from 'graphql';
import { PluginFunction, PluginValidateFn } from '@graphql-codegen/plugin-helpers';
/**
 * @description This plugin prints the merged schema as string. If multiple schemas are provided, they will be merged and printed as one schema.
 */
export interface SchemaASTConfig {
    /**
     * @description Include directives to Schema output.
     * @default false
     *
     * @exampleMarkdown
     * ```tsx {9} filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    schema: './src/schema.graphql',
     *    generates: {
     *      'path/to/file.graphql': {
     *        plugins: ['schema-ast'],
     *        config: {
     *          includeDirectives: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    includeDirectives?: boolean;
    /**
     * @description Include introspection types to Schema output.
     * @default false
     *
     * @exampleMarkdown
     * ```tsx {9} filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    schema: './src/schema.graphql',
     *    generates: {
     *      'path/to/file.graphql': {
     *        plugins: ['schema-ast'],
     *        config: {
     *          includeIntrospectionTypes: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    includeIntrospectionTypes?: boolean;
    /**
     * @description Set to true in order to print description as comments (using `#` instead of `"""`)
     * @default false
     *
     * @exampleMarkdown
     * ```tsx {9} filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    schema: './src/schema.graphql',
     *    generates: {
     *      'path/to/file.graphql': {
     *        plugins: ['schema-ast'],
     *        config: {
     *          commentDescriptions: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    commentDescriptions?: boolean;
    /**
     * @description Set to false to disable sorting
     * @default true
     */
    sort?: boolean;
    federation?: boolean;
}
export declare const plugin: PluginFunction<SchemaASTConfig>;
export declare const validate: PluginValidateFn<any>;
export declare function transformSchemaAST(schema: GraphQLSchema, config: {
    [key: string]: any;
}): {
    schema: GraphQLSchema;
    ast: import("graphql").DocumentNode;
};
