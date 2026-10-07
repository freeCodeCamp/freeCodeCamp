/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {RelayConcreteNode} = require('relay-runtime');

import type {
  IsGeneratedFileFn,
  KeepExtraFileFn,
} from '../codegen/CodegenRunner';
import type {IRTransform} from '../core/CompilerContext';
import type {GeneratedDefinition, Root, Fragment} from '../core/IR';
import type {GetFileFilter} from '../core/RelaySourceModuleParser';
import type {Schema} from '../core/Schema';
import type {ScalarTypeMapping} from './javascript/RelayFlowTypeTransformers';
import type {GeneratedNode} from 'relay-runtime';

/**
 * A language plugin allows relay-compiler to both read and write files for any
 * language.
 *
 * When reading, the plugin is expected to parse and return GraphQL tags; and
 * when writing the plugin is responsible for generating type information about
 * the GraphQL selections made as well as generating the contents of the
 * artifact file.
 *
 * This interface describes the details relay-compiler requires to be able to
 * use the plugin and is expected to be returned by a {PluginInitializer}.
 */
export type PluginInterface = {
  inputExtensions: string[],
  outputExtension: string,
  findGraphQLTags: GraphQLTagFinder,
  formatModule: FormatModule,
  typeGenerator: TypeGenerator,
  isGeneratedFile?: IsGeneratedFileFn,
  keepExtraFile?: KeepExtraFileFn,
  schemaExtensions?: $ReadOnlyArray<string>,
  getModuleName?: (operationName: string) => string,
  getFileFilter?: GetFileFilter,
  ...
};

/**
 * The plugin is expected to have as its main default export a function that
 * returns an object conforming to the plugin interface.
 *
 * For now a plugin doesn’t take any arguments, but may do so in the future.
 */
export type PluginInitializer = () => PluginInterface;

export type GraphQLTag = {
  /**
   * Should hold the string content of the `graphql` tagged template literal,
   * which is either an operation or fragment.
   *
   * @example
   *
   *  grapqhl`query MyQuery { … }`
   *  grapqhl`fragment MyFragment on MyType { … }`
   */
  template: string,
  /**
   * In the case this tag was part of a fragment container and it used a node
   * map as fragment spec, rather than a single tagged node, this should hold
   * the prop key to which the node is assigned.
   *
   * @example
   *
   *  createFragmentContainer(
   *    MyComponent,
   *    {
   *      keyName: graphql`fragment MyComponent_keyName { … }`
   *    }
   *  )
   *
   */
  keyName: ?string,
  /**
   * The location in the source file that the tag is placed at.
   */
  sourceLocationOffset: {|
    /**
     * The line in the source file that the tag is placed on.
     *
     * Lines use 1-based indexing.
     */
    line: number,

    /**
     * The column in the source file that the tag starts on.
     *
     * Columns use 1-based indexing.
     */
    column: number,
  |},
  ...
};

/**
 * This function is responsible for extracting `GraphQLTag` objects from source
 * files.
 *
 * @param  {string} text       The source file contents.
 * @param  {string} filePath   The path to the source file on disk.
 * @return {Array<GraphQLTag>} All extracted `GraphQLTag` objects.
 *
 * @see {@link javascript/FindGraphQLTags.js}
 */
export type GraphQLTagFinder = (
  text: string,
  filePath: string,
) => $ReadOnlyArray<GraphQLTag>;

/**
 * The function that is responsible for generating the contents of the artifact
 * file.
 *
 * @see {@link javascript/formatGeneratedModule.js}
 */
export type FormatModule = ({|
  /**
   * The filename of the module.
   */
  moduleName: string,

  /**
   * The type of artifact that this module represents.
   *
   * @todo Document when this can be `empty`.
   */
  documentType:
    | typeof RelayConcreteNode.FRAGMENT
    | typeof RelayConcreteNode.REQUEST
    | null,

  /**
   * The actual document that this module represents.
   */
  docText: ?string,

  /**
   * The IR for the document that this module represents.
   */
  concreteText: string,

  /**
   * The type information generated for the GraphQL selections made.
   */
  typeText: string,

  /**
   * A hash of the concrete node including the query text.
   *
   * @todo Document how this is different from `sourceHash`.
   */
  hash: ?string,

  /**
   * The 'kind' of the generated node.
   */
  kind: string,

  /**
   * The IR node from which the generated node is derived.
   */
  definition: GeneratedDefinition,

  /**
   * A hash of the document, which is used by relay-compiler to know if it needs
   * to write a new version of the artifact.
   *
   * @todo Is this correct? And document how this is different from `hash`.
   */
  sourceHash: string,

  /**
   * The generated node being written.
   */
  node: GeneratedNode,

  /**
   * GraphQL Schema Interface
   */
  schema: Schema,
|}) => string;

/**
 * The options that will be passed to the `generate` function of your plugin’s
 * type generator.
 */
export type TypeGeneratorOptions = {|
  /**
   * A map of custom scalars to scalars that the plugin knows about and emits
   * type information for.
   *
   * @example
   *
   *  // The URL custom scalar is essentially a string and should be treated as
   *  // such by the language’s type system.
   *  { URL: 'String' }
   */
  +customScalars: ScalarTypeMapping,

  /**
   * Whether or not relay-compiler will store artifacts next to the module that
   * they originate from or all together in a single directory.
   *
   * Storing all artifacts in a single directory makes it easy to import and
   * reference fragments defined in other artifacts without needing to use the
   * Haste module system.
   *
   * This defaults to `false`.
   */
  +useSingleArtifactDirectory: boolean,

  /**
   * This option controls whether or not a catch-all entry is added to enum type
   * definitions for values that may be added in the future. Enabling this means
   * you will have to update your application whenever the GraphQL server schema
   * adds new enum values to prevent it from breaking.
   *
   * This defaults to `false`.
   */
  +noFutureProofEnums: boolean,

  /**
   * @todo Document this.
   */
  +optionalInputFields: $ReadOnlyArray<string>,

  /**
   * Whether or not the Haste module system is being used. This will currently
   * always be `false` for OSS users.
   */
  +useHaste: boolean,

  /**
   * Import flow types from the Haste-style global module name or per-enum
   * global module name given by the function variant.
   */
  +enumsHasteModule?: string | ((enumName: string) => string),

  /**
   * Optional normalization IR for generating raw response
   */
  +normalizationIR?: Root,
|};

/**
 * This object should hold the implementation required to generate types for the
 * GraphQL selections made.
 *
 * @see {@link javascript/RelayFlowGenerator.js}
 */
export type TypeGenerator = {
  /**
   * Transforms that should be applied to the intermediate representation of the
   * GraphQL document before passing to the `generate` function.
   */
  transforms: $ReadOnlyArray<IRTransform>,
  /**
   * Given GraphQL document IR, this function should generate type information
   * for e.g. the selections made. It can, however, also generate any other
   * content such as importing other files, including other artifacts.
   */
  generate: (
    schema: Schema,
    node: Root | Fragment,
    options: TypeGeneratorOptions,
  ) => string,
  ...
};
