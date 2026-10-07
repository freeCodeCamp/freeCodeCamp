import { GraphQLSchema, GraphQLOutputType } from "graphql";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { GatsbyGraphQLType } from "../../schema/types/type-builders";
import { IGatsbyPlugin, ActionsUnion, IAddThirdPartySchema, ICreateTypes, IGatsbyState, ICreateFieldExtension, IPrintTypeDefinitions, ICreateResolverContext, IGatsbyPluginContext, ICreateSliceAction, IAddImageCdnAllowedUrl } from "../types";
type RestrictionActionNames = "createFieldExtension" | "createTypes" | "createResolverContext" | "addThirdPartySchema" | "printTypeDefinitions" | "createSlice" | "addRemoteFileAllowedUrl";
type SomeActionCreator = ActionCreator<ActionsUnion> | ActionCreator<ThunkAction<any, IGatsbyState, any, ActionsUnion>>;
export interface ICreateSliceInput {
    id: string;
    component: string;
    context: Record<string, unknown>;
}
export declare const actions: {
    /**
     * Add a third-party schema to be merged into main schema. Schema has to be a
     * graphql-js GraphQLSchema object.
     *
     * This schema is going to be merged as-is. Merging it in this way will
     * easily break the main Gatsby Schema. Since we do not want that, therefore
     * it is the user's responsibility to make sure that it does not happen.
     * One such way of avoiding it is by namespacing the schema.
     *
     * @availableIn [createSchemaCustomization, sourceNodes]
     *
     * @param {Object} $0
     * @param {GraphQLSchema} $0.schema GraphQL schema to add
     */
    addThirdPartySchema: ({ schema }: {
        schema: GraphQLSchema;
    }, plugin: IGatsbyPlugin, traceId?: string) => IAddThirdPartySchema;
    /**
     * Add type definitions to the GraphQL schema.
     *
     * @availableIn [createSchemaCustomization, sourceNodes]
     *
     * @param {string | GraphQLOutputType | GatsbyGraphQLType | string[] | GraphQLOutputType[] | GatsbyGraphQLType[]} types Type definitions
     *
     * Type definitions can be provided either as
     * [`graphql-js` types](https://graphql.org/graphql-js/), in
     * [GraphQL schema definition language (SDL)](https://graphql.org/learn/)
     * or using Gatsby Type Builders available on the `schema` API argument.
     *
     * Things to note:
     * * type definitions targeting node types, i.e. `MarkdownRemark` and others
     *   added in `sourceNodes` or `onCreateNode` APIs, need to implement the
     *   `Node` interface. Interface fields will be added automatically, but it
     *   is mandatory to label those types with `implements Node`.
     * * by default, explicit type definitions from `createTypes` will be merged
     *   with inferred field types, and default field resolvers for `Date` (which
     *   adds formatting options) and `File` (which resolves the field value as
     *   a `relativePath` foreign-key field) are added. This behavior can be
     *   customised with `@infer`, `@dontInfer` directives or extensions. Fields
     *   may be assigned resolver (and other option like args) with additional
     *   directives. Currently `@dateformat`, `@link`, `@fileByRelativePath` and
     *   `@proxy` are available.
     *
     *
     * Schema customization controls:
     * * `@infer` - run inference on the type and add fields that don't exist on the
     * defined type to it.
     * * `@dontInfer` - don't run any inference on the type
     *
     * Extensions to add resolver options:
     * * `@dateformat` - add date formatting arguments. Accepts `formatString` and
     *   `locale` options that sets the defaults for this field
     * * `@link` - connect to a different Node. Arguments `by` and `from`, which
     *   define which field to compare to on a remote node and which field to use on
     *   the source node
     * * `@fileByRelativePath` - connect to a File node. Same arguments. The
     *   difference from link is that this normalizes the relative path to be
     *   relative from the path where source node is found.
     * * `@proxy` - in case the underlying node data contains field names with
     *   characters that are invalid in GraphQL, `proxy` allows to explicitly
     *   proxy those properties to fields with valid field names. Takes a `from` arg.
     *
     *
     * @example
     * exports.createSchemaCustomization = ({ actions }) => {
     *   const { createTypes } = actions
     *   const typeDefs = `
     *     """
     *     Markdown Node
     *     """
     *     type MarkdownRemark implements Node @infer {
     *       frontmatter: Frontmatter!
     *     }
     *
     *     """
     *     Markdown Frontmatter
     *     """
     *     type Frontmatter @infer {
     *       title: String!
     *       author: AuthorJson! @link
     *       date: Date! @dateformat
     *       published: Boolean!
     *       tags: [String!]!
     *     }
     *
     *     """
     *     Author information
     *     """
     *     # Does not include automatically inferred fields
     *     type AuthorJson implements Node @dontInfer {
     *       name: String!
     *       birthday: Date! @dateformat(locale: "ru")
     *     }
     *   `
     *   createTypes(typeDefs)
     * }
     *
     * // using Gatsby Type Builder API
     * exports.createSchemaCustomization = ({ actions, schema }) => {
     *   const { createTypes } = actions
     *   const typeDefs = [
     *     schema.buildObjectType({
     *       name: 'MarkdownRemark',
     *       fields: {
     *         frontmatter: 'Frontmatter!'
     *       },
     *       interfaces: ['Node'],
     *       extensions: {
     *         infer: true,
     *       },
     *     }),
     *     schema.buildObjectType({
     *       name: 'Frontmatter',
     *       fields: {
     *         title: {
     *           type: 'String!',
     *           resolve(parent) {
     *             return parent.title || '(Untitled)'
     *           }
     *         },
     *         author: {
     *           type: 'AuthorJson'
     *           extensions: {
     *             link: {},
     *           },
     *         }
     *         date: {
     *           type: 'Date!'
     *           extensions: {
     *             dateformat: {},
     *           },
     *         },
     *         published: 'Boolean!',
     *         tags: '[String!]!',
     *       }
     *     }),
     *     schema.buildObjectType({
     *       name: 'AuthorJson',
     *       fields: {
     *         name: 'String!'
     *         birthday: {
     *           type: 'Date!'
     *           extensions: {
     *             dateformat: {
     *               locale: 'ru',
     *             },
     *           },
     *         },
     *       },
     *       interfaces: ['Node'],
     *       extensions: {
     *         infer: false,
     *       },
     *     }),
     *   ]
     *   createTypes(typeDefs)
     * }
     */
    createTypes: (types: string | GraphQLOutputType | GatsbyGraphQLType<any, any> | Array<string | GraphQLOutputType | GatsbyGraphQLType<any, any>>, plugin: IGatsbyPlugin, traceId?: string) => ICreateTypes;
    /**
     * Add a field extension to the GraphQL schema.
     *
     * Extensions allow defining custom behavior which can be added to fields
     * via directive (in SDL) or on the `extensions` prop (with Type Builders).
     *
     * The extension definition takes a `name`, an `extend` function, and optional
     * extension `args` for options. The `extend` function has to return a (partial)
     * field config, and receives the extension options and the previous field config
     * as arguments.
     *
     * @availableIn [createSchemaCustomization, sourceNodes]
     *
     * @param {GraphQLFieldExtensionDefinition} extension The field extension definition
     * @example
     * exports.createSchemaCustomization = ({ actions }) => {
     *   const { createFieldExtension } = actions
     *   createFieldExtension({
     *     name: 'motivate',
     *     args: {
     *       caffeine: 'Int'
     *     },
     *     extend(options, prevFieldConfig) {
     *       return {
     *         type: 'String',
     *         args: {
     *           sunshine: {
     *             type: 'Int',
     *             defaultValue: 0,
     *           },
     *         },
     *         resolve(source, args, context, info) {
     *           const motivation = (options.caffeine || 0) - args.sunshine
     *           if (motivation > 5) return 'Work! Work! Work!'
     *           return 'Maybe tomorrow.'
     *         },
     *       }
     *     },
     *   })
     * }
     */
    createFieldExtension: (extension: GraphQLFieldExtensionDefinition, plugin: IGatsbyPlugin, traceId?: string) => ThunkAction<void, IGatsbyState, Record<string, unknown>, ICreateFieldExtension>;
    /**
     * Write GraphQL schema to file
     *
     * Writes out inferred and explicitly specified type definitions. This is not
     * the full GraphQL schema, but only the types necessary to recreate all type
     * definitions, i.e. it does not include directives, built-ins, and derived
     * types for filtering, sorting, pagination etc. Optionally, you can define a
     * list of types to include/exclude. This is recommended to avoid including
     * definitions for plugin-created types.
     *
     * The first object parameter is required, however all the fields in the object are optional.
     *
     * @availableIn [createSchemaCustomization]
     *
     * @param {object} $0
     * @param {string} [$0.path] The path to the output file, defaults to `schema.gql`
     * @param {object} [$0.include] Configure types to include
     * @param {string[]} [$0.include.types] Only include these types
     * @param {string[]} [$0.include.plugins] Only include types owned by these plugins
     * @param {object} [$0.exclude] Configure types to exclude
     * @param {string[]} [$0.exclude.types] Do not include these types
     * @param {string[]} [$0.exclude.plugins] Do not include types owned by these plugins
     * @param {boolean} [$0.withFieldTypes] Include field types, defaults to `true`
     * @example
     * exports.createSchemaCustomization = ({ actions }) => {
     *   // This code writes a GraphQL schema to a file named `schema.gql`.
     *   actions.printTypeDefinitions({})
     * }
     * @example
     * exports.createSchemaCustomization = ({ actions }) => {
     *   // This code writes a GraphQL schema to a file named `schema.gql`, but this time it does not include field types.
     *   actions.printTypeDefinitions({ withFieldTypes: false })
     * }
     */
    printTypeDefinitions: ({ path, include, exclude, withFieldTypes, }: {
        path?: string | undefined;
        include?: {
            types?: string[] | undefined;
            plugins?: string[] | undefined;
        } | undefined;
        exclude?: {
            types?: string[] | undefined;
            plugins?: string[] | undefined;
        } | undefined;
        withFieldTypes?: boolean | undefined;
    }, plugin: IGatsbyPlugin, traceId?: string) => IPrintTypeDefinitions;
    /**
     * Make functionality available on field resolver `context`
     *
     * @availableIn [createSchemaCustomization]
     *
     * @param {object} context Object to make available on `context`.
     * When called from a plugin, the context value will be namespaced under
     * the camel-cased plugin name without the "gatsby-" prefix
     * @example
     * const getHtml = md => remark().use(html).process(md)
     * exports.createSchemaCustomization = ({ actions }) => {
     *   actions.createResolverContext({ getHtml })
     * }
     * // The context value can then be accessed in any field resolver like this:
     * exports.createSchemaCustomization = ({ actions, schema }) => {
     *   actions.createTypes(schema.buildObjectType({
     *     name: 'Test',
     *     interfaces: ['Node'],
     *     fields: {
     *       md: {
     *         type: 'String!',
     *         async resolve(source, args, context, info) {
     *           const processed = await context.transformerRemark.getHtml(source.internal.contents)
     *           return processed.contents
     *         }
     *       }
     *     }
     *   }))
     * }
     */
    createResolverContext: (context: IGatsbyPluginContext, plugin: IGatsbyPlugin, traceId?: string) => ThunkAction<void, IGatsbyState, Record<string, unknown>, ICreateResolverContext>;
    /**
     * Create a new Slice. See the technical docs for the [Gatsby Slice API](/docs/reference/built-in-components/gatsby-slice).
     *
     * @availableIn [createPages]
     *
     * @param {object} $0
     * @param {Object} slice a slice object
     * @param {string} slice.id The unique ID for this slice
     * @param {string} slice.component The absolute path to the component for this slice
     * @param {Object} slice.context Context data for this slice. Passed as props
     * to the component `this.props.sliceContext` as well as to the graphql query
     * as graphql arguments.
     * @example
     * exports.createPages = ({ actions }) => {
     *   actions.createSlice({
     *     id: `navigation-bar`,
     *     component: path.resolve(`./src/components/navigation-bar.js`),
     *   })
     * }
     */
    createSlice: (payload: ICreateSliceInput, plugin: IGatsbyPlugin, traceId?: string) => ICreateSliceAction;
    /**
     * Declares URL Pattern that should be allowed to be used for Image or File CDN to prevent using of unexpected RemoteFile URLs.
     *
     * @availableIn [onPreInit, onPreBootstrap, onPluginInit, createSchemaCustomization]
     *
     * @param {string | string []} url URLPattern or Array of URL Patternss that should be allowed.
     * URLPattern is a string that can contain wildcards (*) or parameter placeholders (e.g. :id).
     * @example
     * exports.onPreInit = ({ actions }) => {
     *   actions.addRemoteFileAllowedUrl(`https://your-wordpress-instance.com/*`)
     * }
     */
    addRemoteFileAllowedUrl: (url: string | Array<string>, plugin: IGatsbyPlugin, traceId?: string) => IAddImageCdnAllowedUrl;
};
type API = string;
type AvailableActionsByAPI = Record<API, {
    [K in RestrictionActionNames]: SomeActionCreator;
}>;
export declare const availableActionsByAPI: AvailableActionsByAPI;
export {};
