import { Types } from '@graphql-codegen/plugin-helpers';
import { DocumentNode, FragmentDefinitionNode, GraphQLSchema, OperationDefinitionNode } from 'graphql';
import { BaseVisitor, ParsedConfig, RawConfig } from './base-visitor.cjs';
import { LoadedFragment, ParsedImport } from './types.cjs';
export declare enum DocumentMode {
    graphQLTag = "graphQLTag",
    documentNode = "documentNode",
    documentNodeImportFragments = "documentNodeImportFragments",
    external = "external",
    string = "string"
}
export interface RawClientSideBasePluginConfig extends RawConfig {
    /**
     * @description Deprecated. Changes the documentMode to `documentNode`.
     * @default false
     */
    noGraphQLTag?: boolean;
    /**
     * @default graphql-tag#gql
     * @description Customize from which module will `gql` be imported from.
     * This is useful if you want to use modules other than `graphql-tag`, e.g. `graphql.macro`.
     *
     * @exampleMarkdown
     * ## graphql.macro
     *
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          gqlImport: 'graphql.macro#gql'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Gatsby
     *
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          gqlImport: 'gatsby#graphql'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    gqlImport?: string;
    /**
     * @default graphql#DocumentNode
     * @description Customize from which module will `DocumentNode` be imported from.
     * This is useful if you want to use modules other than `graphql`, e.g. `@graphql-typed-document-node`.
     */
    documentNodeImport?: string;
    /**
     * @default false
     * @description Set this configuration to `true` if you wish to tell codegen to generate code with no `export` identifier.
     */
    noExport?: boolean;
    /**
     * @default false
     * @description Set this configuration to `true` if you wish to make sure to remove duplicate operation name suffix.
     */
    dedupeOperationSuffix?: boolean;
    /**
     * @default false
     * @description Set this configuration to `true` if you wish to disable auto add suffix of operation name, like `Query`, `Mutation`, `Subscription`, `Fragment`.
     */
    omitOperationSuffix?: boolean;
    /**
     * @default ""
     * @description Adds a suffix to generated operation result type names
     */
    operationResultSuffix?: string;
    /**
     * @default ""
     * @description Changes the GraphQL operations variables prefix.
     */
    documentVariablePrefix?: string;
    /**
     * @default Document
     * @description Changes the GraphQL operations variables suffix.
     */
    documentVariableSuffix?: string;
    /**
     * @default ""
     * @description Changes the GraphQL fragments variables prefix.
     */
    fragmentVariablePrefix?: string;
    /**
     * @default FragmentDoc
     * @description Changes the GraphQL fragments variables suffix.
     */
    fragmentVariableSuffix?: string;
    /**
     * @default graphQLTag
     * @description Declares how DocumentNode are created:
     *
     * - `graphQLTag`: `graphql-tag` or other modules (check `gqlImport`) will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client
     * - `documentNode`: document nodes will be generated as objects when we generate the templates.
     * - `documentNodeImportFragments`: Similar to documentNode except it imports external fragments instead of embedding them.
     * - `external`: document nodes are imported from an external file. To be used with `importDocumentNodeExternallyFrom`
     *
     * Note that some plugins (like `typescript-graphql-request`) also supports `string` for this parameter.
     *
     */
    documentMode?: DocumentMode;
    /**
     * @default true
     * @description If you are using `documentNode: documentMode | documentNodeImportFragments`, you can set this to `true` to apply document optimizations for your GraphQL document.
     * This will remove all "loc" and "description" fields from the compiled document, and will remove all empty arrays (such as `directives`, `arguments` and `variableDefinitions`).
     */
    optimizeDocumentNode?: boolean;
    /**
     * @default ""
     * @description This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.
     * This is useful if you wish to generate base types from `typescript-operations` plugin into a different file, and import it from there.
     */
    importOperationTypesFrom?: string;
    /**
     * @default ""
     * @description This config should be used if `documentMode` is `external`. This has 2 usage:
     *
     * - any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use `graphql-tag` in a separate file and export the generated document
     * - 'near-operation-file': This is a special mode that is intended to be used with `near-operation-file` preset to import document nodes from those files. If these files are `.graphql` files, we make use of webpack loader.
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
     *          documentMode: 'external',
     *          importDocumentNodeExternallyFrom: 'path/to/document-node-file',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          documentMode: 'external',
     *          importDocumentNodeExternallyFrom: 'near-operation-file',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     */
    importDocumentNodeExternallyFrom?: string;
    /**
     * @default false
     * @description This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler.
     */
    pureMagicComment?: boolean;
    /**
     * @default false
     * @description If set to true, it will enable support for parsing variables on fragments.
     */
    experimentalFragmentVariables?: boolean;
}
export interface ClientSideBasePluginConfig extends ParsedConfig {
    gqlImport: string;
    documentNodeImport: string;
    operationResultSuffix: string;
    dedupeOperationSuffix: boolean;
    omitOperationSuffix: boolean;
    noExport: boolean;
    documentVariablePrefix: string;
    documentVariableSuffix: string;
    fragmentVariablePrefix: string;
    fragmentVariableSuffix: string;
    documentMode?: DocumentMode;
    importDocumentNodeExternallyFrom?: 'near-operation-file' | string;
    importOperationTypesFrom?: string;
    globalNamespace?: boolean;
    pureMagicComment?: boolean;
    optimizeDocumentNode: boolean;
    experimentalFragmentVariables?: boolean;
    unstable_onExecutableDocumentNode?: Unstable_OnExecutableDocumentNode;
    unstable_omitDefinitions?: boolean;
}
declare type ExecutableDocumentNodeMeta = Record<string, unknown>;
declare type Unstable_OnExecutableDocumentNode = (documentNode: DocumentNode) => void | ExecutableDocumentNodeMeta;
export declare class ClientSideBaseVisitor<TRawConfig extends RawClientSideBasePluginConfig = RawClientSideBasePluginConfig, TPluginConfig extends ClientSideBasePluginConfig = ClientSideBasePluginConfig> extends BaseVisitor<TRawConfig, TPluginConfig> {
    protected _schema: GraphQLSchema;
    protected _collectedOperations: OperationDefinitionNode[];
    protected _documents: Types.DocumentFile[];
    protected _additionalImports: string[];
    protected _imports: Set<string>;
    private _onExecutableDocumentNode?;
    private _omitDefinitions?;
    private _fragments;
    constructor(_schema: GraphQLSchema, fragments: LoadedFragment[], rawConfig: TRawConfig, additionalConfig: Partial<TPluginConfig>, documents?: Types.DocumentFile[]);
    protected _extractFragments(document: FragmentDefinitionNode | OperationDefinitionNode, withNested?: boolean): string[];
    protected _transformFragments(fragmentNames: Array<string>): string[];
    protected _includeFragments(fragments: string[], nodeKind: 'FragmentDefinition' | 'OperationDefinition'): string;
    protected _prepareDocument(documentStr: string): string;
    private _generateDocumentNodeMeta;
    protected _gql(node: FragmentDefinitionNode | OperationDefinitionNode): string;
    protected _generateFragment(fragmentDocument: FragmentDefinitionNode): string | void;
    private get fragmentsGraph();
    get fragments(): string;
    protected _parseImport(importStr: string): ParsedImport;
    protected _generateImport({ moduleName, propName }: ParsedImport, varName: string, isTypeImport: boolean): string | null;
    private clearExtension;
    getImports(options?: {
        excludeFragments?: boolean;
    }): string[];
    protected buildOperation(_node: OperationDefinitionNode, _documentVariableName: string, _operationType: string, _operationResultType: string, _operationVariablesTypes: string, _hasRequiredVariables: boolean): string;
    protected getDocumentNodeSignature(_resultType: string, _variablesTypes: string, _node: FragmentDefinitionNode | OperationDefinitionNode): string;
    /**
     * Checks if the specific operation has variables that are non-null (required), and also doesn't have default.
     * This is useful for deciding of `variables` should be optional or not.
     * @param node
     */
    protected checkVariablesRequirements(node: OperationDefinitionNode): boolean;
    getOperationVariableName(node: OperationDefinitionNode): string;
    OperationDefinition(node: OperationDefinitionNode): string;
}
export {};
