import { AvoidOptionalsConfig, RawDocumentsConfig } from '@graphql-codegen/visitor-plugin-common';
/**
 * @description This plugin generates TypeScript types based on your GraphQLSchema _and_ your GraphQL operations and fragments.
 * It generates types for your GraphQL documents: Query, Mutation, Subscription and Fragment.
 *
 * Note: In most configurations, this plugin requires you to use `typescript as well, because it depends on its base types.
 */
export interface TypeScriptDocumentsPluginConfig extends RawDocumentsConfig {
    /**
     * @description The [GraphQL spec](https://spec.graphql.org/draft/#sel-FAHjBJFCAACE_Gh7d)
     * allows arrays and a single primitive value for list input. This allows to
     * deactivate that behavior to only accept arrays instead of single values. If
     * set to `false`, the definition: `query foo(bar: [Int!]!): Foo` will output
     * `bar: Array<Int>` instead of `bar: Array<Int> | Int` for the variable part.
     * @default true
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          arrayInputCoercion: false
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    arrayInputCoercion?: boolean;
    /**
     * @description This will cause the generator to avoid using TypeScript optionals (`?`) on types,
     * so the following definition: `type A { myField: String }` will output `myField: Maybe<string>`
     * instead of `myField?: Maybe<string>`.
     * @default false
     *
     * @exampleMarkdown
     * ## Override all definition types
     *
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          avoidOptionals: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Override only specific definition types
     *
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          avoidOptionals: {
     *            field: true
     *            inputValue: true
     *            object: true
     *            defaultValue: true
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    avoidOptionals?: boolean | AvoidOptionalsConfig;
    /**
     * @description Generates immutable types by adding `readonly` to properties and uses `ReadonlyArray`.
     * @default false
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          immutableTypes: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    immutableTypes?: boolean;
    /**
     * @description Flatten fragment spread and inline fragments into a simple selection set before generating.
     * @default false
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript', 'typescript-operations'],
     *        config: {
     *          flattenGeneratedTypes: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    flattenGeneratedTypes?: boolean;
    /**
     * @description Include all fragments types when flattenGeneratedTypes is enabled.
     * @default false
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript', 'typescript-operations'],
     *        config: {
     *          flattenGeneratedTypes: true,
     *          flattenGeneratedTypesIncludeFragments: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    flattenGeneratedTypesIncludeFragments?: boolean;
    /**
     * @description Set to `true` in order to generate output without `export` modifier.
     * This is useful if you are generating `.d.ts` file and want it to be globally available.
     * @default false
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          noExport: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    noExport?: boolean;
    globalNamespace?: boolean;
    /**
     * @name addOperationExport
     * @type boolean
     * @description Add const export of the operation name to output file. Pay attention that the file should be `d.ts`.
     * You can combine it with `near-operation-file preset` and therefore the types will be generated along with graphql file. Then you need to set extension in `presetConfig` to be `.gql.d.ts` and by that you can import `gql` file in `ts` files.
     * It will allow you to get everything with one import:
     *
     * ```ts
     * import { GetClient, GetClientQuery, GetClientQueryVariables } from './GetClient.gql.js'
     * ```
     * @default false
     * @see https://github.com/dotansimha/graphql-code-generator/issues/3949
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      "./typings/api.ts": {
     *        "plugins": [
     *            "typescript"
     *        ]
     *    },
     *    "./": {
     *        "preset": "near-operation-file",
     *        "presetConfig": {
     *            "baseTypesPath": "./typings/api.ts",
     *            "extension": ".gql.d.ts"
     *        },
     *        "plugins": [
     *            "@graphql-codegen/typescript-operations"
     *        ],
     *        "config": {
     *            "addOperationExport": true
     *        }
     *    }
     *  };
     *  export default config;
     * ```
     */
    addOperationExport?: boolean;
    /**
     * @description Allow to override the type value of `Maybe`.
     * @default T | null
     *
     * @exampleMarkdown
     * ## Allow undefined
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          maybeValue: 'T | null | undefined'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Allow `null` in resolvers:
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file.ts': {
     *        plugins: ['typescript'],
     *        config: {
     *          maybeValue: 'T extends PromiseLike<infer U> ? Promise<U | null> : T | null'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    maybeValue?: string;
}
