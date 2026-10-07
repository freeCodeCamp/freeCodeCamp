import { ASTNode, FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
import { FragmentImport, ImportDeclaration } from './imports.cjs';
import { ConvertFn, ConvertOptions, DeclarationKind, LoadedFragment, NamingConvention, NormalizedScalarsMap, ParsedScalarsMap, ScalarsMap } from './types.cjs';
import { DeclarationBlockConfig } from './utils.cjs';
export interface BaseVisitorConvertOptions {
    useTypesPrefix?: boolean;
    useTypesSuffix?: boolean;
}
export declare type InlineFragmentTypeOptions = 'inline' | 'combine' | 'mask';
export interface ParsedConfig {
    scalars: ParsedScalarsMap;
    convert: ConvertFn;
    typesPrefix: string;
    typesSuffix: string;
    addTypename: boolean;
    nonOptionalTypename: boolean;
    externalFragments: LoadedFragment[];
    fragmentImports: ImportDeclaration<FragmentImport>[];
    immutableTypes: boolean;
    useTypeImports: boolean;
    dedupeFragments: boolean;
    allowEnumStringTypes: boolean;
    inlineFragmentTypes: InlineFragmentTypeOptions;
    emitLegacyCommonJSImports: boolean;
}
export interface RawConfig {
    /**
     * @description Makes scalars strict.
     *
     * If scalars are found in the schema that are not defined in `scalars`
     * an error will be thrown during codegen.
     * @default false
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          strictScalars: true,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    strictScalars?: boolean;
    /**
     * @description Allows you to override the type that unknown scalars will have.
     * @default any
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          defaultScalarType: 'unknown'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    defaultScalarType?: string;
    /**
     * @description Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type.
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          scalars: {
     *            DateTime: 'Date',
     *            JSON: '{ [key: string]: any }',
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    scalars?: ScalarsMap;
    /**
     * @default change-case-all#pascalCase
     * @description Allow you to override the naming convention of the output.
     * You can either override all namings, or specify an object with specific custom naming convention per output.
     * The format of the converter must be a valid `module#method`.
     * Allowed values for specific output are: `typeNames`, `enumValues`.
     * You can also use "keep" to keep all GraphQL names as-is.
     * Additionally, you can set `transformUnderscore` to `true` if you want to override the default behavior,
     * which is to preserve underscores.
     *
     * Available case functions in `change-case-all` are `camelCase`, `capitalCase`, `constantCase`, `dotCase`, `headerCase`, `noCase`, `paramCase`, `pascalCase`, `pathCase`, `sentenceCase`, `snakeCase`, `lowerCase`, `localeLowerCase`, `lowerCaseFirst`, `spongeCase`, `titleCase`, `upperCase`, `localeUpperCase` and `upperCaseFirst`
     * [See more](https://github.com/btxtiger/change-case-all)
     *
     * @exampleMarkdown
     * ## Override All Names
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          namingConvention: 'change-case-all#lowerCase',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Upper-case enum values
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          namingConvention: {
     *            typeNames: 'change-case-all#pascalCase',
     *            enumValues: 'change-case-all#upperCase',
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Keep names as is
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *         namingConvention: 'keep',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Remove Underscores
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          namingConvention: {
     *            typeNames: 'change-case-all#pascalCase',
     *            transformUnderscore: true
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    namingConvention?: NamingConvention;
    /**
     * @default ""
     * @description Prefixes all the generated types.
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          typesPrefix: 'I',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    typesPrefix?: string;
    /**
     * @default ""
     * @description Suffixes all the generated types.
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          typesSuffix: 'I',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    typesSuffix?: string;
    /**
     * @default false
     * @description Does not add `__typename` to the generated types, unless it was specified in the selection set.
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          skipTypename: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    skipTypename?: boolean;
    /**
     * @default false
     * @description Automatically adds `__typename` field to the generated types, even when they are not specified
     * in the selection set, and makes it non-optional
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          nonOptionalTypename: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    nonOptionalTypename?: boolean;
    /**
     * @name useTypeImports
     * @type boolean
     * @default false
     * @description Will use `import type {}` rather than `import {}` when importing only types. This gives
     * compatibility with TypeScript's "importsNotUsedAsValues": "error" option
     *
     * @exampleMarkdown
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          useTypeImports: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    useTypeImports?: boolean;
    /**
     * @ignore
     */
    externalFragments?: LoadedFragment[];
    /**
     * @ignore
     */
    fragmentImports?: ImportDeclaration<FragmentImport>[];
    /**
     * @ignore
     */
    globalNamespace?: boolean;
    /**
     * @description  Removes fragment duplicates for reducing data transfer.
     * It is done by removing sub-fragments imports from fragment definition
     * Instead - all of them are imported to the Operation node.
     * @type boolean
     * @default false
     */
    dedupeFragments?: boolean;
    /**
     * @ignore
     */
    allowEnumStringTypes?: boolean;
    /**
     * @description Whether fragment types should be inlined into other operations.
     * "inline" is the default behavior and will perform deep inlining fragment types within operation type definitions.
     * "combine" is the previous behavior that uses fragment type references without inlining the types (and might cause issues with deeply nested fragment that uses list types).
     *
     * @type string
     * @default inline
     */
    inlineFragmentTypes?: InlineFragmentTypeOptions;
    /**
     * @default true
     * @description Emit legacy common js imports.
     * Default it will be `true` this way it ensure that generated code works with [non-compliant bundlers](https://github.com/dotansimha/graphql-code-generator/issues/8065).
     */
    emitLegacyCommonJSImports?: boolean;
}
export declare class BaseVisitor<TRawConfig extends RawConfig = RawConfig, TPluginConfig extends ParsedConfig = ParsedConfig> {
    protected _parsedConfig: TPluginConfig;
    protected _declarationBlockConfig: DeclarationBlockConfig;
    readonly scalars: NormalizedScalarsMap;
    constructor(rawConfig: TRawConfig, additionalConfig: Partial<TPluginConfig>);
    protected getVisitorKindContextFromAncestors(ancestors: ASTNode[]): string[];
    get config(): TPluginConfig;
    convertName(node: ASTNode | string, options?: BaseVisitorConvertOptions & ConvertOptions): string;
    getOperationSuffix(node: FragmentDefinitionNode | OperationDefinitionNode | string, operationType: string): string;
    getFragmentSuffix(node: FragmentDefinitionNode | string): string;
    getFragmentName(node: FragmentDefinitionNode | string): string;
    getFragmentVariableName(node: FragmentDefinitionNode | string): string;
    protected getPunctuation(_declarationKind: DeclarationKind): string;
}
