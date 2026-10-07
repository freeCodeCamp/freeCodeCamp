import { DirectiveDefinitionNode, DirectiveNode, EnumTypeDefinitionNode, EnumValueDefinitionNode, FieldDefinitionNode, GraphQLSchema, InputObjectTypeDefinitionNode, InputValueDefinitionNode, InterfaceTypeDefinitionNode, ListTypeNode, NamedTypeNode, NameNode, NonNullTypeNode, ObjectTypeDefinitionNode, ScalarTypeDefinitionNode, StringValueNode, UnionTypeDefinitionNode } from 'graphql';
import { BaseVisitor, ParsedConfig, RawConfig } from './base-visitor.cjs';
import { DeclarationKind, DeclarationKindConfig, DirectiveArgumentAndInputFieldMappings, EnumValuesMap, NormalizedScalarsMap, ParsedDirectiveArgumentAndInputFieldMappings, ParsedEnumValuesMap } from './types.cjs';
import { DeclarationBlock, DeclarationBlockConfig } from './utils.cjs';
import { OperationVariablesToObject } from './variables-to-object.cjs';
export interface ParsedTypesConfig extends ParsedConfig {
    enumValues: ParsedEnumValuesMap;
    declarationKind: DeclarationKindConfig;
    addUnderscoreToArgsType: boolean;
    onlyEnums: boolean;
    onlyOperationTypes: boolean;
    enumPrefix: boolean;
    fieldWrapperValue: string;
    wrapFieldDefinitions: boolean;
    entireFieldWrapperValue: string;
    wrapEntireDefinitions: boolean;
    ignoreEnumValuesFromSchema: boolean;
    directiveArgumentAndInputFieldMappings: ParsedDirectiveArgumentAndInputFieldMappings;
}
export interface RawTypesConfig extends RawConfig {
    /**
     * @description Adds `_` to generated `Args` types in order to avoid duplicate identifiers.
     *
     * @exampleMarkdown
     * ## With Custom Values
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
     *          addUnderscoreToArgsType: true
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    addUnderscoreToArgsType?: boolean;
    /**
     * @description Overrides the default value of enum values declared in your GraphQL schema.
     * You can also map the entire enum to an external type by providing a string that of `module#type`.
     *
     * @exampleMarkdown
     * ## With Custom Values
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          enumValues: {
     *            MyEnum: {
     *              A: 'foo'
     *            }
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## With External Enum
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          enumValues: {
     *            MyEnum: './my-file#MyCustomEnum',
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Import All Enums from a file
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          enumValues: {
     *            MyEnum: './my-file',
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    enumValues?: EnumValuesMap;
    /**
     * @description Overrides the default output for various GraphQL elements.
     *
     * @exampleMarkdown
     * ## Override all declarations
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
     *          declarationKind: 'interface'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     *
     * ## Override only specific declarations
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
     *          declarationKind: {
     *            type: 'interface',
     *            input: 'interface'
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    declarationKind?: DeclarationKind | DeclarationKindConfig;
    /**
     * @default true
     * @description Allow you to disable prefixing for generated enums, works in combination with `typesPrefix`.
     *
     * @exampleMarkdown
     * ## Disable enum prefixes
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
     *          typesPrefix: 'I',
     *          enumPrefix: false
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    enumPrefix?: boolean;
    /**
     * @description Allow you to add wrapper for field type, use T as the generic value. Make sure to set `wrapFieldDefinitions` to `true` in order to make this flag work.
     * @default T
     *
     * @exampleMarkdown
     * ## Allow Promise
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
     *          wrapFieldDefinitions: true,
     *          fieldWrapperValue: 'T | Promise<T>',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    fieldWrapperValue?: string;
    /**
     * @description Set to `true` in order to wrap field definitions with `FieldWrapper`.
     * This is useful to allow return types such as Promises and functions.
     * @default false
     *
     * @exampleMarkdown
     * ## Enable wrapping fields
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
     *          wrapFieldDefinitions: true,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    wrapFieldDefinitions?: boolean;
    /**
     * @description This will cause the generator to emit types for enums only
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
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          onlyEnums: true,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    onlyEnums?: boolean;
    /**
     * @description This will cause the generator to emit types for operations only (basically only enums and scalars)
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
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          onlyOperationTypes: true,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    onlyOperationTypes?: boolean;
    /**
     * @description This will cause the generator to ignore enum values defined in GraphQLSchema
     * @default false
     *
     * @exampleMarkdown
     * ## Ignore enum values from schema
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
     *          ignoreEnumValuesFromSchema: true,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    ignoreEnumValuesFromSchema?: boolean;
    /**
     * @name wrapEntireFieldDefinitions
     * @type boolean
     * @description Set to `true` in order to wrap field definitions with `EntireFieldWrapper`.
     * This is useful to allow return types such as Promises and functions for fields.
     * Differs from `wrapFieldDefinitions` in that this wraps the entire field definition if i.e. the field is an Array, while
     * `wrapFieldDefinitions` will wrap every single value inside the array.
     * @default true
     *
     * @example Enable wrapping entire fields
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          wrapEntireFieldDefinitions: false,
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    wrapEntireFieldDefinitions?: boolean;
    /**
     * @name entireFieldWrapperValue
     * @type string
     * @description Allow to override the type value of `EntireFieldWrapper`. This wrapper applies outside of Array and Maybe
     * unlike `fieldWrapperValue`, that will wrap the inner type.
     * @default T | Promise<T> | (() => T | Promise<T>)
     *
     * @example Only allow values
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          entireFieldWrapperValue: 'T',
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    entireFieldWrapperValue?: string;
    /**
     * @description Replaces a GraphQL scalar with a custom type based on the applied directive on an argument or input field.
     *
     * You can use both `module#type` and `module#namespace#type` syntax.
     * Will NOT work with introspected schemas since directives are not exported.
     * Only works with directives on ARGUMENT_DEFINITION or INPUT_FIELD_DEFINITION.
     *
     * **WARNING:** Using this option does only change the type definitions.
     *
     * For actually ensuring that a type is correct at runtime you will have to use schema transforms (e.g. with [@graphql-tools/utils mapSchema](https://graphql-tools.com/docs/schema-directives)) that apply those rules!
     * Otherwise, you might end up with a runtime type mismatch which could cause unnoticed bugs or runtime errors.
     *
     * Please use this configuration option with care!
     *
     * @exampleMarkdown
     * ## Custom Context Type\
     * ```ts filename="codegen.ts"
     *  import type { CodegenConfig } from '@graphql-codegen/cli';
     *
     *  const config: CodegenConfig = {
     *    // ...
     *    generates: {
     *      'path/to/file': {
     *        // plugins...
     *        config: {
     *          directiveArgumentAndInputFieldMappings: {
     *            AsNumber: 'number',
     *            AsComplex: './my-models#Complex',
     *          }
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    directiveArgumentAndInputFieldMappings?: DirectiveArgumentAndInputFieldMappings;
    /**
     * @description Adds a suffix to the imported names to prevent name clashes.
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
     *          directiveArgumentAndInputFieldMappings: 'Model'
     *        },
     *      },
     *    },
     *  };
     *  export default config;
     * ```
     */
    directiveArgumentAndInputFieldMappingTypeSuffix?: string;
}
export declare class BaseTypesVisitor<TRawConfig extends RawTypesConfig = RawTypesConfig, TPluginConfig extends ParsedTypesConfig = ParsedTypesConfig> extends BaseVisitor<TRawConfig, TPluginConfig> {
    protected _schema: GraphQLSchema;
    protected _argumentsTransformer: OperationVariablesToObject;
    constructor(_schema: GraphQLSchema, rawConfig: TRawConfig, additionalConfig: TPluginConfig, defaultScalars?: NormalizedScalarsMap);
    protected getExportPrefix(): string;
    getFieldWrapperValue(): string;
    getEntireFieldWrapperValue(): string;
    getScalarsImports(): string[];
    getDirectiveArgumentAndInputFieldMappingsImports(): string[];
    get scalarsDefinition(): string;
    get directiveArgumentAndInputFieldMappingsDefinition(): string;
    setDeclarationBlockConfig(config: DeclarationBlockConfig): void;
    setArgumentsTransformer(argumentsTransfomer: OperationVariablesToObject): void;
    NonNullType(node: NonNullTypeNode): string;
    getInputObjectDeclarationBlock(node: InputObjectTypeDefinitionNode): DeclarationBlock;
    getInputObjectOneOfDeclarationBlock(node: InputObjectTypeDefinitionNode): DeclarationBlock;
    InputObjectTypeDefinition(node: InputObjectTypeDefinitionNode): string;
    InputValueDefinition(node: InputValueDefinitionNode): string;
    Name(node: NameNode): string;
    FieldDefinition(node: FieldDefinitionNode): string;
    UnionTypeDefinition(node: UnionTypeDefinitionNode, key: string | number | undefined, parent: any): string;
    protected mergeInterfaces(interfaces: string[], hasOtherFields: boolean): string;
    appendInterfacesAndFieldsToBlock(block: DeclarationBlock, interfaces: string[], fields: string[]): void;
    getObjectTypeDeclarationBlock(node: ObjectTypeDefinitionNode, originalNode: ObjectTypeDefinitionNode): DeclarationBlock;
    protected mergeAllFields(allFields: string[], _hasInterfaces: boolean): string;
    ObjectTypeDefinition(node: ObjectTypeDefinitionNode, key: number | string, parent: any): string;
    getInterfaceTypeDeclarationBlock(node: InterfaceTypeDefinitionNode, _originalNode: InterfaceTypeDefinitionNode): DeclarationBlock;
    InterfaceTypeDefinition(node: InterfaceTypeDefinitionNode, key: number | string, parent: any): string;
    ScalarTypeDefinition(_node: ScalarTypeDefinitionNode): string;
    protected _buildTypeImport(identifier: string, source: string, asDefault?: boolean): string;
    protected handleEnumValueMapper(typeIdentifier: string, importIdentifier: string | null, sourceIdentifier: string | null, sourceFile: string | null): string[];
    getEnumsImports(): string[];
    EnumTypeDefinition(node: EnumTypeDefinitionNode): string;
    StringValue(node: StringValueNode): string;
    protected makeValidEnumIdentifier(identifier: string): string;
    protected buildEnumValuesBlock(typeName: string, values: ReadonlyArray<EnumValueDefinitionNode>): string;
    DirectiveDefinition(_node: DirectiveDefinitionNode): string;
    getArgumentsObjectDeclarationBlock(node: InterfaceTypeDefinitionNode | ObjectTypeDefinitionNode, name: string, field: FieldDefinitionNode): DeclarationBlock;
    getArgumentsObjectTypeDefinition(node: InterfaceTypeDefinitionNode | ObjectTypeDefinitionNode, name: string, field: FieldDefinitionNode): string;
    protected buildArgumentsBlock(node: InterfaceTypeDefinitionNode | ObjectTypeDefinitionNode): string;
    protected _getScalar(name: string): string;
    protected _getDirectiveArgumentNadInputFieldMapping(name: string): string;
    protected _getDirectiveOverrideType(directives: ReadonlyArray<DirectiveNode>): string | null;
    protected _getTypeForNode(node: NamedTypeNode): string;
    NamedType(node: NamedTypeNode, key: any, parent: any, path: any, ancestors: any): string;
    ListType(node: ListTypeNode, _key: any, _parent: any, _path: any, _ancestors: any): string;
    SchemaDefinition(): any;
    getNodeComment(node: FieldDefinitionNode | EnumValueDefinitionNode | InputValueDefinitionNode): string;
    protected getDeprecationReason(directive: DirectiveNode): string | void;
    protected wrapWithListType(str: string): string;
}
