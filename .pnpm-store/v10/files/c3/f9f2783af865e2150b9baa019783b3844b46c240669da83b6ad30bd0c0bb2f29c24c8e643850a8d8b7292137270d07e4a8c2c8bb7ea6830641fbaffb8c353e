import * as React from "react"
import { Renderer } from "react-dom"
import { EventEmitter } from "events"
import { WindowLocation, NavigateOptions } from "@reach/router" // These come from `@types/reach__router`
import { Reporter } from "gatsby-cli/lib/reporter/reporter"
import { Span } from "opentracing"
export { Reporter }
import {
  EnumTypeComposerAsObjectDefinition as ComposeEnumTypeConfig,
  InputTypeComposerAsObjectDefinition as ComposeInputObjectTypeConfig,
  InterfaceTypeComposerAsObjectDefinition as ComposeInterfaceTypeConfig,
  ObjectTypeComposerAsObjectDefinition as ComposeObjectTypeConfig,
  ScalarTypeComposerAsObjectDefinition as ComposeScalarTypeConfig,
  UnionTypeComposerAsObjectDefinition as ComposeUnionTypeConfig,
} from "graphql-compose"
import { GraphQLOutputType } from "graphql"
import { PluginOptionsSchemaJoi, ObjectSchema } from "gatsby-plugin-utils"
import { IncomingMessage, ServerResponse } from "http"

export type AvailableFeatures =
  | "image-cdn"
  | "graphql-typegen"
  | "content-file-path"
  | "stateful-source-nodes"
  | "adapters"

export {
  Link,
  GatsbyLinkProps,
  navigate,
  withPrefix,
  withAssetPrefix,
} from "gatsby-link"

export * from "gatsby-script"

export {
  AdapterInit,
  IAdapter,
  IStaticRoute,
  IFunctionRoute,
  IRedirectRoute,
  IFunctionDefinition,
  RoutesManifest,
  HeaderRoutes,
  FunctionsManifest,
  IAdapterConfig,
  ImageCdnUrlGeneratorFn,
  ImageCdnSourceImage,
  ImageCdnTransformArgs,
  FileCdnUrlGeneratorFn,
  FileCdnSourceImage,
  RemoteFileAllowedUrls,
} from "./dist/utils/adapter/types"

export const useScrollRestoration: (key: string) => {
  ref: React.MutableRefObject<HTMLElement | undefined>
  onScroll(): void
}

export class StaticQueryDocument {
  /** Prevents structural type widening. */
  #kind: "StaticQueryDocument"

  /** Allows type-safe access to the static query hash for debugging purposes. */
  toString(): string
}

/**
 * A React Hooks version of StaticQuery.
 *
 * StaticQuery can do most of the things that page query can, including fragments. The main differences are:
 *
 * - page queries can accept variables (via `pageContext`) but can only be added to _page_ components
 * - StaticQuery does not accept variables (hence the name "static"), but can be used in _any_ component, including pages
 *
 * @see https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
export const useStaticQuery: <TData = any>(query: StaticQueryDocument) => TData

export const parsePath: (path: string) => WindowLocation

export const prefetchPathname: (path: string) => void

/**
 * A props object for adding type safety to your Gatsby pages, can be
 * extended with both the query response shape, and the page context.
 *
 * @example
 * // When typing a default page from the ./pages dir
 *
 * import {PageProps} from "gatsby"
 * export default (props: PageProps) => {
 *
 * @example
 * // When adding types for both pageContext (represented by LocaleLookUpInfo)
 * // and GraphQL query data (represented by IndexQueryProps)
 *
 * import {PageProps} from "gatsby"
 *
 * type IndexQueryProps = { downloadCount: number }
 * type LocaleLookUpInfo = { translationStrings: any } & { langKey: string, slug: string }
 * type IndexPageProps = PageProps<IndexQueryProps, LocaleLookUpInfo>
 *
 * export default (props: IndexPageProps) => {
 *   ..
 */
export type PageProps<
  DataType = object,
  PageContextType = object,
  LocationState = WindowLocation["state"],
  ServerDataType = object
> = {
  /** The path for this current page */
  path: string
  /** The URI for the current page */
  uri: string
  /** An extended version of window.document which comes from @react/router */
  location: WindowLocation<LocationState>
  /** You can't get passed children as this is the root user-land component */
  children: undefined
  /** The URL parameters when the page has a `matchPath` */
  params: Record<string, string>
  /** Holds information about the build process for this component */
  pageResources: {
    component: React.Component
    json: {
      data: DataType
      pageContext: PageContextType
    }
    page: {
      componentChunkName: string
      path: string
      webpackCompilationHash: string
      matchPath?: string
    }
  }
  /**
   * Data passed into the page via an exported GraphQL query. To set up this type
   * you need to use [generics](https://www.typescriptlang.org/play/#example/generic-functions),
   * see below for an example
   *
   * @example
   *
   * import {PageProps} from "gatsby"
   *
   * type IndexQueryProps = { downloadCount: number }
   * type IndexPageProps = PageProps<IndexQueryProps>
   *
   * export default (props: IndexPageProps) => {
   *   ..
   *
   */
  data: DataType
  /**
   * A context object which is passed in during the creation of the page. Can be extended if you are using
   * `createPage` yourself using generics:
   *
   * @example
   *
   * import {PageProps} from "gatsby"
   *
   * type IndexQueryProps = { downloadCount: number }
   * type LocaleLookUpInfo = { translationStrings: any } & { langKey: string, slug: string }
   * type IndexPageProps = PageProps<IndexQueryProps, LocaleLookUpInfo>
   *
   * export default (props: IndexPageProps) => {
   *   ..
   */
  pageContext: PageContextType
  /** Data passed into the page via the [getServerData](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/) SSR function. */
  serverData: ServerDataType
}

/**
 * A props object passed into the Head function for [Gatsby Head API](https://gatsby.dev/gatsby-head).
 */
export type HeadProps<
  DataType = object,
  PageContextType = object,
  ServerDataType = object
> = {
  location: {
    /**
     * Returns the Location object's URL's path.
     */
    pathname: string
  }
  /** The URL parameters when the page has a `matchPath` */
  params: Record<string, string>
  /**
   * Data passed into the page via an exported GraphQL query.
   */
  data: DataType
  /**
   * A context object which is passed in during the creation of the page.
   */
  pageContext: PageContextType
  /**
   * Data passed into the page via the [getServerData](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/) SSR function.
   */
  serverData: ServerDataType
}

/**
 * A shorthand type for combining the props and return type for the [Gatsby Head API](https://gatsby.dev/gatsby-head).
 */
export type HeadFC<DataType = object, PageContextType = object> = (
  props: HeadProps<DataType, PageContextType>
) => JSX.Element

type SerializableProps =
  | ISerializableObject
  | Array<SerializableProps>
  | string
  | number
  | boolean
  | null
  | undefined

interface ISerializableObject {
  [key: string]: SerializableProps
}

/**
 * A props object for [slice placholder](https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice/)
 */
export interface SlicePlaceholderProps {
  alias: string
  allowEmpty?: boolean
  children?: React.ReactNode
  [key: string]: SerializableProps | React.ReactNode
}

/**
 * Component used as a slice placholder, to mark a place in the page where a [slice](https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice/) should be inserted.
 */
export declare function Slice(props: SlicePlaceholderProps): JSX.Element

/**
 * A props object for [slice component](https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice/)
 */
export type SliceComponentProps<
  DataType = object,
  SliceContextType = object,
  AdditionalSerializableProps extends ISerializableObject = object
> = {
  data: DataType
  sliceContext: SliceContextType
  children?: React.ReactNode
} & AdditionalSerializableProps

/**
 * Props object passed into the [getServerData](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/) function.
 */
export type GetServerDataProps = {
  headers: Map<string, unknown>
  method: string
  url: string
  query?: Record<string, unknown>
  params?: Record<string, unknown>
  pageContext: Record<string, unknown>
}

/**
 * The return type (promise payload) from the [getServerData](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/) function.
 */
export type GetServerDataReturn<ServerDataType = Record<string, unknown>> =
  Promise<{
    headers?: Record<string, unknown>
    props?: ServerDataType
    status?: number
  }>

/**
 * A shorthand type for combining the props and return type for the [getServerData](https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/) function.
 */
export type GetServerData<ServerDataType> = (
  props: GetServerDataProps
) => GetServerDataReturn<ServerDataType>

/**
 * Constructor arguments for the PageRenderer.
 */
export interface PageRendererProps {
  location: WindowLocation
}

/**
 * PageRenderer's constructor [loads the page resources](https://www.gatsbyjs.com/docs/production-app/#load-page-resources) for the path.
 *
 * On first load though, these will have already been requested from the server by `<link rel="preload" ... />` in the page's original HTML (see [Link Preloads](https://www.gatsbyjs.com/docs/how-code-splitting-works/#construct-link-and-script-tags-for-current-page) in HTML Generation Docs).
 * The loaded page resources includes the imported component, with which we create the actual page component using [React.createElement()](https://reactjs.org/docs/react-api.html). This element is returned to our RouteHandler which hands it off to Reach Router for rendering.
 *
 * @see https://www.gatsbyjs.com/docs/production-app/#page-rendering
 */
export class PageRenderer extends React.Component<PageRendererProps> {}

type RenderCallback<T = any> = (data: T) => React.ReactNode

export interface StaticQueryProps<T = any> {
  query: StaticQueryDocument
  render?: RenderCallback<T>
  children?: RenderCallback<T>
}

/**
 * StaticQuery can do most of the things that page query can, including fragments. The main differences are:
 *
 * - page queries can accept variables (via `pageContext`) but can only be added to _page_ components
 * - StaticQuery does not accept variables (hence the name "static"), but can be used in _any_ component, including pages
 * - StaticQuery does not work with raw React.createElement calls; please use JSX, e.g. `<StaticQuery />`
 *
 * @see https://www.gatsbyjs.com/docs/static-query/
 */

export class StaticQuery<T = any> extends React.Component<
  StaticQueryProps<T>
> {}

/**
 * graphql is a tag function. Behind the scenes Gatsby handles these tags in a particular way
 *
 * During the Gatsby build process, GraphQL queries are pulled out of the original source for parsing.
 *
 * @see https://www.gatsbyjs.com/docs/page-query#how-does-the-graphql-tag-work
 */
export const graphql: (query: TemplateStringsArray) => StaticQueryDocument

export interface GraphQLTypegenOptions {
  typesOutputPath?: string
  documentSearchPaths?: string[]
  generateOnBuild?: boolean
}

type Proxy = {
  prefix: string
  url: string
}

type Header = {
  /**
   * The path to match requests against.
   */
  source: string
  /**
   * Your custom response headers.
   */
  headers: Array<{
    key: string
    value: string
  }>
}

/**
 * Gatsby configuration API.
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
export interface GatsbyConfig {
  /** When you want to reuse common pieces of data across the site (for example, your site title), you can store that here. */
  siteMetadata?: Record<string, unknown>
  /** Plugins are Node.js packages that implement Gatsby APIs. The config file accepts an array of plugins. Some plugins may need only to be listed by name, while others may take options. */
  plugins?: Array<PluginRef>
  /** You can activate and deactivate current experiments here. These are experimental features that are currently under development and need testing. When opting in to an experiment you'll receive a console message with more information of what it does and a link to an umbrella discussion. */
  flags?: Record<string, boolean>
  /** It’s common for sites to be hosted somewhere other than the root of their domain. Say we have a Gatsby site at `example.com/blog/`. In this case, we would need a prefix (`/blog`) added to all paths on the site. */
  pathPrefix?: string
  /** `never` removes all trailing slashes, `always` adds it, and `ignore` doesn't automatically change anything and it's in user hands to keep things consistent. By default `always` is used. */
  trailingSlash?: "always" | "never" | "ignore"
  /** In some circumstances you may want to deploy assets (non-HTML resources such as JavaScript, CSS, etc.) to a separate domain. `assetPrefix` allows you to use Gatsby with assets hosted from a separate domain */
  assetPrefix?: string
  /** More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense. If set to true, the default GraphQLTypegenOptions are used. See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/ for all options. */
  graphqlTypegen?: boolean | GraphQLTypegenOptions
  /** Gatsby uses the ES6 Promise API. Because some browsers don't support this, Gatsby includes a Promise polyfill by default. If you'd like to provide your own Promise polyfill, you can set `polyfill` to false.*/
  polyfill?: boolean
  mapping?: Record<string, string>
  jsxRuntime?: "automatic" | "classic"
  jsxImportSource?: string
  /**
   * Setting the proxy config option will tell the develop server to proxy any unknown requests to your specified server.
   * @see https://www.gatsbyjs.com/docs/api-proxy/
   * */
  proxy?: Proxy | Proxy[]
  /**
   * A list of trusted URLs that will be proxied for use with the gatsby-script off-main-thread strategy.
   * @see https://gatsby.dev/gatsby-script
   */
  partytownProxiedURLs?: Array<string>
  /** Sometimes you need more granular/flexible access to the development server. Gatsby exposes the Express.js development server to your site’s gatsby-config.js where you can add Express middleware as needed. */
  developMiddleware?(app: any): void
  /**
   * You can set custom HTTP headers on the response of a given path. This allows you to, e.g. modify the caching behavior or configure access control. You can apply HTTP headers to static routes and redirects.
   * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/headers/
   */
  headers?: Array<Header>
  /**
   * Adapters are responsible for taking the production output from Gatsby and turning it into something your deployment platform understands. They make it easier to build and deploy Gatsby on any deployment platform.
   * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/adapters/
   */
  adapter?: IAdapter
}

/**
 * Gatsby API for Node.js.
 *
 * @see https://www.gatsbyjs.com/docs/node-apis/
 */
export interface GatsbyNode<
  TNode extends Record<string, unknown> = Record<string, unknown>,
  TContext = Record<string, unknown>
> {
  /**
   * Tell plugins to add pages. This extension point is called only after the initial
   * sourcing and transformation of nodes plus creation of the GraphQL schema are
   * complete so you can query your data in order to create pages.
   *
   * @see https://www.gatsbyjs.com/docs/node-apis/#createPages
   */
  createPages?(
    args: CreatePagesArgs & {
      traceId: "initial-createPages"
    },
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Like `createPages` but for plugins who want to manage creating and removing
   * pages themselves in response to changes in data *not* managed by Gatsby.
   * Plugins implementing `createPages` will get called regularly to recompute
   * page information as Gatsby's data changes but those implementing
   * `createPagesStatefully` will not.
   *
   * An example of a plugin that uses this extension point is the plugin
   * [gatsby-plugin-page-creator](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-page-creator)
   * which monitors the `src/pages` directory for the adding and removal of JS
   * pages. As its source of truth, files in the pages directory, is not known by
   * Gatsby, it needs to keep its own state about its world to know when to
   * add and remove pages.
   */
  createPagesStatefully?(
    args: CreatePagesArgs & {
      traceId: "initial-createPagesStatefully"
    },
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Let plugins extend/mutate the site's Babel configuration.
   * This API will change before 2.0 as it needs still to be converted to use
   * Redux actions.
   */
  onCreateBabelConfig?(
    args: CreateBabelConfigArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Run when gatsby develop server is started, its useful to add proxy and middleware
   * to the dev server app
   * @param {object} $0
   * @param {Express} $0.app The [Express app](https://expressjs.com/en/4x/api.html#app) used to run the dev server
   *
   * @example
   *
   * exports.onCreateDevServer = ({ app }) => {
   *   app.get('/hello', function (req, res) {
   *     res.send('hello world')
   *   })
   * }
   */
  onCreateDevServer?(
    args: CreateDevServerArgs,
    options: PluginOptions,
    calllback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Called when a new node is created. Plugins wishing to extend or
   * transform nodes created by other plugins should implement this API.
   *
   * See also the documentation for `createNode`
   * and [`createNodeField`](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNodeField)
   * @param {object} $0
   * @param {object} $0.node A node object.
   * @param {object} $0.actions
   * @param {function} $0.actions.createNode Create a new node.
   * @param {function} $0.actions.createNodeField Extend another node. The new node field is placed under the fields key on the extended node object.
   * @example
   * exports.onCreateNode = ({ node, getNode, actions }) => {
   *   const { createNodeField } = actions
   *
   *   if (node.internal.type === `MarkdownRemark`) {
   *     const nodePath = node.fileAbsolutePath
   *
   *     if (nodePath.match(/\/blog\//)) {
   *       const postSlug = createFilePath({
   *         node,
   *         getNode,
   *         basePath: `src/content`,
   *         trailingSlash: true,
   *       })
   *
   *       createNodeField({
   *         node,
   *         name: `slug`,
   *         value: `/blog/${postSlug}/`,
   *       })
   *     }
   *   }
   * }
   */
  onCreateNode?(
    args: CreateNodeArgs<TNode>,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Called before scheduling a `onCreateNode` callback for a plugin. If it returns falsy
   * then Gatsby will not schedule the `onCreateNode` callback for this node for this plugin.
   * Note: this API does not receive the regular `api` that other callbacks get as first arg.
   *
   * @gatsbyVersion 2.24.80
   * @example
   * exports.shouldOnCreateNode = ({node}, pluginOptions) => node.internal.type === 'Image'
   */
  shouldOnCreateNode?(args: { node: TNode }, options: PluginOptions): boolean

  /**
   * Called when a new page is created. This extension API is useful
   * for programmatically manipulating pages created by other plugins e.g.
   * if you want paths without trailing slashes.
   *
   * See the guide [Creating and Modifying Pages](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/)
   * for more on this API.
   */
  onCreatePage?(
    args: CreatePageArgs<TContext>,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Let plugins extend/mutate the site's webpack configuration.
   * @see https://www.gatsbyjs.com/docs/node-apis/#onCreateWebpackConfig
   */
  onCreateWebpackConfig?(
    args: CreateWebpackConfigArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** Called at the end of the bootstrap process after all other extension APIs have been called. */
  onPostBootstrap?(
    args: ParentSpanPluginArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** The last extension point called after all other parts of the build process are complete. */
  onPostBuild?(
    args: BuildArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** Called at the end of the bootstrap process after all other extension APIs have been called. If you indend to use this API in a plugin, use "onPluginInit" instead. */
  onPreBootstrap?(
    args: ParentSpanPluginArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** The first extension point called during the build process. Called after the bootstrap has completed but before the build steps start. */
  onPreBuild?(
    args: BuildArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** Called once Gatsby has initialized itself and is ready to bootstrap your site. */
  onPreExtractQueries?(
    args: ParentSpanPluginArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Lifecycle executed in each process (one time per process). Used to store actions, etc. for later use. Plugins should use this over other APIs like "onPreBootstrap" or "onPreInit" since onPluginInit will run in main process + all workers to support Parallel Query Running.
   * @gatsbyVersion 3.9.0
   * @example
   * let createJobV2
   * exports.onPluginInit = ({ actions }) => {
   *   // Store job creation action to use it later
   *   createJobV2 = actions.createJobV2
   * }
   */
  onPluginInit?(
    args: ParentSpanPluginArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /** The first API called during Gatsby execution, runs as soon as plugins are loaded, before cache initialization and bootstrap preparation. If you indend to use this API in a plugin, use "onPluginInit" instead. */
  onPreInit?(
    args: PreInitArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Ask compile-to-js plugins to process source to JavaScript so the query
   * runner can extract out GraphQL queries for running.
   */
  preprocessSource?(
    args: PreprocessSourceArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | string | Promise<void | string>

  /**
   * Lets plugins implementing support for other compile-to-js add to the list of "resolvable" file extensions. Gatsby supports `.js` and `.jsx` by default.
   */
  resolvableExtensions?(
    args: ResolvableExtensionsArgs,
    options: PluginOptions,
    callback: PluginCallback<Array<string>>
  ): Array<string> | Promise<Array<string>>

  /**
   * Called during the creation of the GraphQL schema. Allows plugins
   * to add new fields to the types created from data nodes. It will be called
   * separately for each type.
   *
   * This function should return an object in the shape of
   * [GraphQLFieldConfigMap](https://graphql.org/graphql-js/type/#graphqlobjecttype)
   * which will be appended to fields inferred by Gatsby from data nodes.
   *
   * *Note:* Import GraphQL types from `gatsby/graphql` and don't add the `graphql`
   * package to your project/plugin dependencies to avoid Schema must
   * contain unique named types but contains multiple types named errors.
   * `gatsby/graphql` exports all builtin GraphQL types as well as the `graphQLJSON`
   * type.
   *
   * Many transformer plugins use this to add fields that take arguments.
   *
   * @see https://www.gatsbyjs.com/docs/node-apis/#setFieldsOnGraphQLNodeType
   */
  setFieldsOnGraphQLNodeType?(
    args: SetFieldsOnGraphQLNodeTypeArgs,
    options: PluginOptions,
    callback: PluginCallback<any>
  ): any

  /**
   * Extension point to tell plugins to source nodes. This API is called during
   * the Gatsby bootstrap sequence. Source plugins use this hook to create nodes.
   * This API is called exactly once per plugin (and once for your site's
   * `gatsby-config.js` file). If you define this hook in `gatsby-node.js` it
   * will be called exactly once after all of your source plugins have finished
   * creating nodes.
   *
   * @see https://www.gatsbyjs.com/docs/node-apis/#sourceNodes
   */
  sourceNodes?(
    args: SourceNodesArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Add custom field resolvers to the GraphQL schema.
   *
   * Allows adding new fields to types by providing field configs, or adding resolver
   * functions to existing fields.
   *
   * Things to note:
   * * Overriding field types is disallowed, instead use the `createTypes`
   *   action. In case of types added from third-party schemas, where this is not
   *   possible, overriding field types is allowed.
   * * New fields will not be available on `filter` and `sort` input types. Extend
   *   types defined with `createTypes` if you need this.
   * * In field configs, types can be referenced as strings.
   * * When extending a field with an existing field resolver, the original
   *   resolver function is available from `info.originalResolver`.
   * * The `createResolvers` API is called as the last step in schema generation.
   *   Thus, an intermediate schema is made available on the `schema` property.
   *   In resolver functions themselves, it is recommended to access the final
   *   built schema from `info.schema`.
   * * Gatsby's data layer, including all internal query capabilities, is
   *   exposed on [`context.nodeModel`](/docs/node-model/). The node store can be
   *   queried directly with `findOne`, `getNodeById` and `getNodesByIds`,
   *   while more advanced queries can be composed with `findAll`.
   * * It is possible to add fields to the root `Query` type.
   * * When using the first resolver argument (`source` in the example below,
   *   often also called `parent` or `root`), take care of the fact that field
   *   resolvers can be called more than once in a query, e.g. when the field is
   *   present both in the input filter and in the selection set. This means that
   *   foreign-key fields on `source` can be either resolved or not-resolved.
   *
   * For fuller examples, see [`using-type-definitions`](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-type-definitions).
   *
   * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createResolvers
   */
  createResolvers?(
    args: CreateResolversArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Customize Gatsby’s GraphQL schema by creating type definitions, field extensions or adding third-party schemas.
   * The createTypes, createFieldExtension and addThirdPartySchema actions are only available in this API.
   *
   * For details on their usage please refer to the actions documentation.
   *
   * This API runs immediately before schema generation. For modifications of the generated schema, e.g.
   * to customize added third-party types, use the createResolvers API.
   * @see https://www.gatsbyjs.com/docs/node-apis/#createSchemaCustomization
   */
  createSchemaCustomization?(
    args: CreateSchemaCustomizationArgs,
    options: PluginOptions,
    callback: PluginCallback<void>
  ): void | Promise<void>

  /**
   * Add a Joi schema for the possible options of your plugin.
   * Currently experimental and not enabled by default.
   */
  pluginOptionsSchema?(args: PluginOptionsSchemaArgs): ObjectSchema
}

/**
 * Gatsby browser API.
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 */
export interface GatsbyBrowser<
  DataType = Record<string, unknown>,
  PageContext = Record<string, unknown>,
  LocationState = WindowLocation["state"]
> {
  disableCorePrefetching?(
    args: BrowserPluginArgs,
    options: PluginOptions
  ): boolean
  onClientEntry?(args: BrowserPluginArgs, options: PluginOptions): void
  onInitialClientRender?(args: BrowserPluginArgs, options: PluginOptions): void
  onPostPrefetchPathname?(
    args: PrefetchPathnameArgs,
    options: PluginOptions
  ): void
  onPreRouteUpdate?(args: RouteUpdateArgs, options: PluginOptions): void
  onPrefetchPathname?(args: PrefetchPathnameArgs, options: PluginOptions): void
  onRouteUpdate?(args: RouteUpdateArgs, options: PluginOptions): void
  onRouteUpdateDelayed?(
    args: RouteUpdateDelayedArgs,
    options: PluginOptions
  ): void
  onServiceWorkerActive?(args: ServiceWorkerArgs, options: PluginOptions): void
  onServiceWorkerInstalled?(
    args: ServiceWorkerArgs,
    options: PluginOptions
  ): void
  onServiceWorkerRedundant?(
    args: ServiceWorkerArgs,
    options: PluginOptions
  ): void
  onServiceWorkerUpdateFound?(
    args: ServiceWorkerArgs,
    options: PluginOptions
  ): void
  onServiceWorkerUpdateReady?(
    args: ServiceWorkerArgs,
    options: PluginOptions
  ): void
  registerServiceWorker?(
    args: BrowserPluginArgs,
    options: PluginOptions
  ): boolean
  replaceHydrateFunction?(
    args: BrowserPluginArgs,
    options: PluginOptions
  ): Renderer
  shouldUpdateScroll?(
    args: ShouldUpdateScrollArgs,
    options: PluginOptions
  ): boolean | [number, number] | string
  wrapPageElement?(
    args: WrapPageElementBrowserArgs<DataType, PageContext, LocationState>,
    options: PluginOptions
  ): React.ReactElement
  wrapRootElement?(
    args: WrapRootElementBrowserArgs,
    options: PluginOptions
  ): React.ReactElement
}

/**
 * Gatsby server-side rendering API.
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 */
export interface GatsbySSR<
  DataSet = Record<string, unknown>,
  PageContext = Record<string, unknown>
> {
  /**
   * Called after every page Gatsby server renders while building HTML so you can
   * replace head components to be rendered in your `html.js`. This is useful if
   * you need to reorder scripts or styles added by other plugins.
   * @example
   * // Move Typography.js styles to the top of the head section so they're loaded first.
   * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
   *   const headComponents = getHeadComponents()
   *   headComponents.sort((x, y) => {
   *     if (x.key === 'TypographyStyle') {
   *       return -1
   *     } else if (y.key === 'TypographyStyle') {
   *       return 1
   *     }
   *     return 0
   *   })
   *   replaceHeadComponents(headComponents)
   * }
   */
  onPreRenderHTML?(args: PreRenderHTMLArgs, options: PluginOptions): void

  /**
   * Called after every page Gatsby server renders while building HTML so you can
   * set head and body components to be rendered in your `html.js`.
   *
   * Gatsby does a two-pass render for HTML. It loops through your pages first
   * rendering only the body and then takes the result body HTML string and
   * passes it as the `body` prop to your `html.js` to complete the render.
   *
   * It's often handy to be able to send custom components to your `html.js`.
   * For example, it's a very common pattern for React.js libraries that
   * support server rendering to pull out data generated during the render to
   * add to your HTML.
   *
   * Using this API over `replaceRenderer` is preferable as
   * multiple plugins can implement this API where only one plugin can take
   * over server rendering. However, if your plugin requires taking over server
   * rendering then that's the one to use
   * @example
   * const { Helmet } = require("react-helmet")
   *
   * exports.onRenderBody = (
   *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
   *   pluginOptions
   * ) => {
   *   const helmet = Helmet.renderStatic()
   *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
   *   setBodyAttributes(helmet.bodyAttributes.toComponent())
   *   setHeadComponents([
   *     helmet.title.toComponent(),
   *     helmet.link.toComponent(),
   *     helmet.meta.toComponent(),
   *     helmet.noscript.toComponent(),
   *     helmet.script.toComponent(),
   *     helmet.style.toComponent(),
   *   ])
   * }
   */
  onRenderBody?(args: RenderBodyArgs, options: PluginOptions): void

  /**
   * Replace the default server renderer. This is useful for integration with
   * Redux, css-in-js libraries, etc. that need custom setups for server
   * rendering.
   * @example
   * // From gatsby-plugin-glamor
   * const { renderToString } = require("react-dom/server")
   * const inline = require("glamor-inline")
   *
   * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
   *   const bodyHTML = renderToString(bodyComponent)
   *   const inlinedHTML = inline(bodyHTML)
   *
   *   replaceBodyHTMLString(inlinedHTML)
   * }
   */
  replaceRenderer?(
    args: ReplaceRendererArgs,
    options: PluginOptions
  ): void | Promise<void>

  /**
   * Allow a plugin to wrap the page element.
   *
   * This is useful for setting wrapper component around pages that won't get
   * unmounted on page change. For setting Provider components use `wrapRootElement`.
   *
   * _Note:_ [There is equivalent hook in Browser API](https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement)
   * @example
   * const React = require("react")
   * const Layout = require("./src/components/layout")
   *
   * exports.wrapPageElement = ({ element, props }) => {
   *   // props provide same data to Layout as Page element will get
   *   // including location, data, etc - you don't need to pass it
   *   return <Layout {...props}>{element}</Layout>
   * }
   */
  wrapPageElement?(
    args: WrapPageElementNodeArgs<DataSet, PageContext>,
    options: PluginOptions
  ): React.ReactElement

  /**
   * Allow a plugin to wrap the root element.
   *
   * This is useful to setup any Providers component that will wrap your application.
   * For setting persistent UI elements around pages use `wrapPageElement`.
   *
   * _Note:_ [There is equivalent hook in Browser API](https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement)
   * @example
   * const React = require("react")
   * const { Provider } = require("react-redux")
   *
   * const createStore = require("./src/state/createStore")
   * const store = createStore()
   *
   * exports.wrapRootElement = ({ element }) => {
   *   return (
   *     <Provider store={store}>
   *       {element}
   *     </Provider>
   *   )
   * }
   */
  wrapRootElement?(
    args: WrapRootElementNodeArgs,
    options: PluginOptions
  ): React.ReactElement
}

export interface PluginOptions {
  plugins: unknown[]
  [key: string]: unknown
}

export type PluginCallback<R = any> = (err: Error | null, result?: R) => void

export interface CreatePagesArgs extends ParentSpanPluginArgs {
  graphql<TData, TVariables = any>(
    query: string,
    variables?: TVariables
  ): Promise<{
    errors?: any
    data?: TData
  }>
  traceId: string
  waitForCascadingActions: boolean
}

type GatsbyStages =
  | "develop"
  | "develop-html"
  | "build-javascript"
  | "build-html"

export interface CreateBabelConfigArgs extends ParentSpanPluginArgs {
  stage: GatsbyStages
}

export interface CreateDevServerArgs extends ParentSpanPluginArgs {
  app: any
}

export interface CreateNodeArgs<
  TNode extends Record<string, unknown> = Record<string, unknown>
> extends ParentSpanPluginArgs {
  node: Node & TNode
  traceId: string
  traceTags: {
    nodeId: string
    nodeType: string
  }
}

export interface CreatePageArgs<TContext = Record<string, unknown>>
  extends ParentSpanPluginArgs {
  page: Page<TContext>
  traceId: string
}

export interface CreateWebpackConfigArgs extends ParentSpanPluginArgs {
  getConfig: Function
  stage: GatsbyStages
  rules: WebpackRules
  loaders: WebpackLoaders
  plugins: WebpackPlugins
}

export interface PreprocessSourceArgs extends ParentSpanPluginArgs {
  filename: string
  contents: string
}

export interface ResolvableExtensionsArgs extends ParentSpanPluginArgs {
  traceId: "initial-resolvableExtensions"
}

export interface SetFieldsOnGraphQLNodeTypeArgs extends ParentSpanPluginArgs {
  type: {
    name: string
    nodes: any[]
  }
  traceId: "initial-setFieldsOnGraphQLNodeType"
}

export interface GatsbyGraphQLObjectType {
  kind: "OBJECT"
  config: ComposeObjectTypeConfig<any, any>
}

export interface GatsbyGraphQLInputObjectType {
  kind: "INPUT_OBJECT"
  config: ComposeInputObjectTypeConfig
}

export interface GatsbyGraphQLUnionType {
  kind: "UNION"
  config: ComposeUnionTypeConfig<any, any>
}

export interface GatsbyGraphQLInterfaceType {
  kind: "INTERFACE"
  config: ComposeInterfaceTypeConfig<any, any>
}

export interface GatsbyGraphQLEnumType {
  kind: "ENUM"
  config: ComposeEnumTypeConfig
}

export interface GatsbyGraphQLScalarType {
  kind: "SCALAR"
  config: ComposeScalarTypeConfig
}

export type GatsbyGraphQLType =
  | GatsbyGraphQLObjectType
  | GatsbyGraphQLInputObjectType
  | GatsbyGraphQLUnionType
  | GatsbyGraphQLInterfaceType
  | GatsbyGraphQLEnumType
  | GatsbyGraphQLScalarType

export interface NodePluginSchema {
  buildObjectType(
    config: ComposeObjectTypeConfig<any, any>
  ): GatsbyGraphQLObjectType
  buildUnionType(
    config: ComposeUnionTypeConfig<any, any>
  ): GatsbyGraphQLUnionType
  buildInterfaceType(
    config: ComposeInterfaceTypeConfig<any, any>
  ): GatsbyGraphQLInterfaceType
  buildInputObjectType(
    config: ComposeInputObjectTypeConfig
  ): GatsbyGraphQLInputObjectType
  buildEnumType(config: ComposeEnumTypeConfig): GatsbyGraphQLEnumType
  buildScalarType(config: ComposeScalarTypeConfig): GatsbyGraphQLScalarType
}
export interface PreInitArgs extends ParentSpanPluginArgs {
  actions: Actions
}

export interface SourceNodesArgs extends ParentSpanPluginArgs {
  traceId: "initial-sourceNodes"
  waitForCascadingActions: boolean
  webhookBody: any
}

export interface CreateResolversArgs extends ParentSpanPluginArgs {
  intermediateSchema: object
  createResolvers: Function
  traceId: "initial-createResolvers"
}

export interface CreateSchemaCustomizationArgs extends ParentSpanPluginArgs {
  traceId: "initial-createSchemaCustomization"
}

export interface PreRenderHTMLArgs {
  getHeadComponents: () => React.ReactNode[]
  replaceHeadComponents: (comp: React.ReactNode[]) => void
  getPreBodyComponents: () => React.ReactNode[]
  replacePreBodyComponents: (comp: React.ReactNode[]) => void
  getPostBodyComponents: () => React.ReactNode[]
  replacePostBodyComponents: (comp: React.ReactNode[]) => void
  pathname: string
}

type ReactProps<T extends Element> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>
export interface RenderBodyArgs {
  loadPageDataSync: (pathname: string) => { result: Record<string, unknown> }
  pathname: string
  setHeadComponents: (comp: React.ReactNode[]) => void
  setHtmlAttributes: (attr: ReactProps<HTMLHtmlElement>) => void
  setBodyAttributes: (attr: ReactProps<HTMLBodyElement>) => void
  setPreBodyComponents: (comp: React.ReactNode[]) => void
  setPostBodyComponents: (comp: React.ReactNode[]) => void
  setBodyProps: Function
}

export interface ReplaceRendererArgs {
  replaceBodyHTMLString: (str: string) => void
  bodyComponent: React.ReactNode
  setHeadComponents: (comp: React.ReactNode[]) => void
  setHtmlAttributes: (attr: ReactProps<HTMLHtmlElement>) => void
  setBodyAttributes: (attr: ReactProps<HTMLBodyElement>) => void
  setPreBodyComponents: (comp: React.ReactNode[]) => void
  setPostBodyComponents: (comp: React.ReactNode[]) => void
  setBodyProps: Function
  pathname: string
}

export interface WrapPageElementNodeArgs<
  DataType = Record<string, unknown>,
  PageContextType = Record<string, unknown>
> {
  element: React.ReactElement
  props: PageProps<DataType, PageContextType>
}

export interface WrapRootElementNodeArgs {
  element: React.ReactElement
  pathname: string
}

export interface ParentSpanPluginArgs extends NodePluginArgs {
  parentSpan: Span
}

export interface NodePluginArgs {
  /**
   * Use to prefix resources URLs. `pathPrefix` will be either empty string or
   * path that starts with slash and doesn't end with slash. `pathPrefix` also
   * becomes `<assetPrefix>/<pathPrefix>` when you pass both `assetPrefix` and
   * `pathPrefix` in your `gatsby-config.js`.
   *
   * See [Adding a Path Prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)
   * page for details about path prefixing.
   */
  pathPrefix: string

  /**
   * This is the same as `pathPrefix` passed in `gatsby-config.js`.
   * It's an empty string if you don't pass `pathPrefix`.
   * When using assetPrefix, you can use this instead of pathPrefix to recieve the string you set in `gatsby-config.js`.
   * It won't include the `assetPrefix`.
   */
  basePath: string

  /**
   * Collection of functions used to programmatically modify Gatsby’s internal state.
   */
  actions: Actions

  /**
   * Get content for a node from the plugin that created it.
   *
   * @example
   * module.exports = async function onCreateNode(
   *   { node, loadNodeContent, actions, createNodeId }
   * ) {
   *   if (node.internal.mediaType === 'text/markdown') {
   *     const { createNode, createParentChildLink } = actions
   *     const textContent = await loadNodeContent(node)
   *     // process textContent and create child nodes
   *   }
   * }
   */
  loadNodeContent(this: void, node: Node): Promise<string>

  /**
   * Internal redux state used for application state. Do not use, unless you
   * absolutely must. Store is considered a private API and can change with
   * any version.
   */
  store: Store

  /**
   * Internal event emitter / listener.  Do not use, unless you absolutely
   * must. Emitter is considered a private API and can change with any version.
   */
  emitter: EventEmitter

  /**
   * Get array of all nodes.
   *
   * @returns Array of nodes.
   * @example
   * const allNodes = getNodes()
   */
  getNodes(this: void): Node[]

  /**
   * Get single node by given ID.
   * Don't use this in graphql resolvers - see
   * `getNodeAndSavePathDependency`
   *
   * @param id id of the node.
   * @returns Single node instance.
   * @example
   * const node = getNode(id)
   */
  getNode(this: void, id: string): Node | undefined

  /**
   * Get array of nodes of given type.
   * @param type Type of nodes
   * @returns Array of nodes.
   *
   * @example
   * const markdownNodes = getNodesByType(`MarkdownRemark`)
   */
  getNodesByType(this: void, type: string): Node[]

  /**
   * Set of utilities to output information to user
   */
  reporter: Reporter

  /**
   * Get single node by given ID and create dependency for given path.
   * This should be used instead of `getNode` in graphql resolvers to enable
   * tracking dependencies for query results. If it's not used Gatsby will
   * not rerun query if node changes leading to stale query results. See
   * [Page -> Node Dependency Tracking](/docs/page-node-dependencies/)
   * for more details.
   * @param id id of the node.
   * @param path of the node.
   * @returns Single node instance.
   */
  getNodeAndSavePathDependency(this: void, id: string, path: string): Node

  /**
   * Key-value store used to persist results of time/memory/cpu intensive
   * tasks. All functions are async and return promises.
   */
  cache: GatsbyCache

  /**
   * Get cache instance by name - this should only be used by plugins that accept subplugins.
   * @param id id of the node
   * @returns See [cache](https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/#cache) section for reference.
   */
  getCache(this: void, id: string): GatsbyCache

  /**
   * Utility function useful to generate globally unique and stable node IDs.
   * It will generate different IDs for different plugins if they use same
   * input.
   *
   * @returns UUIDv5 ID string
   * @example
   * const node = {
   *   id: createNodeId(`${backendData.type}${backendData.id}`),
   *   ...restOfNodeData
   * }
   */
  createNodeId(this: void, input: string): string

  /**
   * Create a stable content digest from a string or object, you can use the
   * result of this function to set the `internal.contentDigest` field
   * on nodes. Gatsby uses the value of this field to invalidate stale data
   * when your content changes.
   * @param input
   * @returns Hash string
   * @example
   * const node = {
   *   ...nodeData,
   *   internal: {
   *     type: `TypeOfNode`,
   *     contentDigest: createContentDigest(nodeData)
   *   }
   * }
   */
  createContentDigest(this: void, input: string | object): string

  /**
   * Set of utilities that allow adding more detailed tracing for plugins.
   * Check
   * [Performance tracing](https://www.gatsbyjs.com/docs/performance-tracing)
   * page for more details.
   */
  tracing: Tracing
  schema: NodePluginSchema
  [key: string]: unknown
}

interface ActionPlugin {
  name: string
}

interface CreateNodeFieldArgs {
  node: Node
  name: string
  value: string
}

interface ActionOptions {
  [key: string]: unknown
}

export interface BuildArgs extends ParentSpanPluginArgs {
  graphql<TData, TVariables = any>(
    query: string,
    variables?: TVariables
  ): Promise<{
    errors?: any
    data?: TData
  }>
}

export interface Actions {
  /** @see https://www.gatsbyjs.com/docs/actions/#deletePage */
  deletePage(this: void, args: { path: string; component: string }): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createPage */
  createPage<TContext = Record<string, unknown>>(
    this: void,
    args: Page<TContext>,
    plugin?: ActionPlugin,
    option?: ActionOptions
  ): void

  /** @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#createSlice */
  createSlice<TContext = Record<string, unknown>>(
    this: void,
    args: SliceInput<TContext>,
    plugin?: ActionPlugin,
    option?: ActionOptions
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#deleteNode */
  deleteNode(node: NodeInput, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createNode */
  createNode<TNode = Record<string, unknown>>(
    this: void,
    node: NodeInput & TNode,
    plugin?: ActionPlugin,
    options?: ActionOptions
  ): void | Promise<void>

  /** @see https://www.gatsbyjs.com/docs/actions/#touchNode */
  touchNode(node: NodeInput, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createNodeField */
  createNodeField(
    this: void,
    args: {
      node: Node
      name?: string
      value: any
    },
    plugin?: ActionPlugin,
    options?: ActionOptions
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createParentChildLink */
  createParentChildLink(
    this: void,
    args: { parent: Node; child: NodeInput },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#unstable_createNodeManifest */
  unstable_createNodeManifest(
    this: void,
    args: {
      manifestId: string
      node: Node
      updatedAtUTC?: string | number
    },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setRequestHeaders */
  setRequestHeaders(
    this: void,
    args: { domain: string; headers: Record<string, string> },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setWebpackConfig */
  setWebpackConfig(this: void, config: object, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#replaceWebpackConfig */
  replaceWebpackConfig(this: void, config: object, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setBabelOptions */
  setBabelOptions(this: void, options: object, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setBabelPlugin */
  setBabelPlugin(
    this: void,
    config: { name: string; options: object },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setBabelPreset */
  setBabelPreset(
    this: void,
    config: { name: string; options: object },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createJob */
  createJob(
    this: void,
    job: Record<string, unknown> & { id: string },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createJobV2 */
  createJobV2(
    this: void,
    job: {
      name: string
      inputPaths: string[]
      outputDir: string
      args: Record<string, unknown>
    },
    plugin?: ActionPlugin
  ): Promise<unknown>

  /** @see https://www.gatsbyjs.com/docs/actions/#addGatsbyImageSourceUrl */
  addGatsbyImageSourceUrl(this: void, sourceUrl: string): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setJob */
  setJob(
    this: void,
    job: Record<string, unknown> & { id: string },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#endJob */
  endJob(this: void, job: { id: string }, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#setPluginStatus */
  setPluginStatus(
    this: void,
    status: Record<string, unknown>,
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createRedirect */
  createRedirect(
    this: void,
    redirect: {
      fromPath: string
      isPermanent?: boolean
      toPath: string
      redirectInBrowser?: boolean
      force?: boolean
      statusCode?: number
      ignoreCase?: boolean
      [key: string]: unknown
    },
    plugin?: ActionPlugin
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#addThirdPartySchema */
  addThirdPartySchema(
    this: void,
    args: { schema: object },
    plugin?: ActionPlugin,
    traceId?: string
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createTypes */
  createTypes(
    this: void,
    types:
      | string
      | GraphQLOutputType
      | GatsbyGraphQLType
      | Array<string | GraphQLOutputType | GatsbyGraphQLType>,
    plugin?: ActionPlugin,
    traceId?: string
  ): void

  /** @see https://www.gatsbyjs.com/docs/actions/#createFieldExtension */
  createFieldExtension(
    this: void,
    extension: object,
    plugin?: ActionPlugin,
    traceId?: string
  ): void

  printTypeDefinitions(
    this: void,
    options: {
      path?: string
      include?: { types?: Array<string>; plugins?: Array<string> }
      exclude?: { types?: Array<string>; plugins?: Array<string> }
      withFieldTypes?: boolean
    },
    plugin?: ActionPlugin,
    traceId?: string
  ): void

  /**
   * Marks the source plugin that called this function as stateful. Gatsby will not check for stale nodes for any plugin that calls this.
   */
  enableStatefulSourceNodes?(this: void, plugin?: ActionPlugin): void

  /** @see https://www.gatsbyjs.com/docs/actions/#addRemoteFileAllowedUrl */
  addRemoteFileAllowedUrl?(
    this: void,
    url: string | Array<string>,
    plugin?: ActionPlugin,
    traceId?: string
  ): void
}

export interface Store {
  dispatch: Function
  subscribe: Function
  getState: Function
  replaceReducer: Function
}

export type ActivityTracker = {
  start(): () => void
  end(): () => void
  span: Object
  setStatus(status: string): void
  panic: (errorMeta: string | Object, error?: Object) => never
  panicOnBuild: (errorMeta: string | Object, error?: Object) => void
}

export type ProgressActivityTracker = Omit<ActivityTracker, "end"> & {
  tick(increment?: number): void
  done(): void
  total: number
}

export type ActivityArgs = {
  parentSpan?: Object
  id?: string
}

/**
 * @deprecated Use `GatsbyCache` instead
 */
export interface Cache {
  name: string
  store: {
    create: Function
  }
  cache: {
    getAndPassUp: Function
    wrap: Function
    set: Function
    mset: Function
    get: Function
    mget: Function
    del: Function
    reset: Function
  }
}

export interface GatsbyCache {
  name: string
  directory: string
  /**
   * Retrieve cached value
   * @param key Cache key
   * @returns Promise resolving to cached value
   * @example
   * const value = await cache.get(`unique-key`)
   */
  get(key: string): Promise<any>

  /**
   * Cache value
   * @param key Cache key
   * @param value Value to be cached
   * @returns Promise resolving to cached value
   * @example
   * await cache.set(`unique-key`, value)
   */
  set(key: string, value: any): Promise<any>

  /**
   * Deletes cached value
   * @param {string} key Cache key
   * @returns {Promise<void>} Promise resolving once key is deleted from cache
   * @example
   * await cache.del(`unique-key`)
   */
  del(key: string): Promise<void>
}

export interface Tracing {
  tracer: object
  parentSpan: object
  startSpan: Function
}

export interface PackageJson {
  name?: string
  description?: string
  version?: string
  main?: string
  author?:
    | string
    | {
        name: string
        email: string
      }
  license?: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  bundledDependencies?: Array<string>
  keywords?: string[]
}

export interface WebpackRules {
  js: Function
  mjs: Function
  eslint: Function
  yaml: Function
  fonts: Function
  images: Function
  media: Function
  miscAssets: Function
  css: Function
  cssModules: Function
  postcss: Function
  [key: string]: Function
}

export interface WebpackLoaders {
  json: Function
  yaml: Function
  null: Function
  raw: Function
  style: Function
  miniCssExtract: Function
  css: Function
  postcss: Function
  file: Function
  url: Function
  js: Function
  eslint: Function
  imports: Function
  exports: Function
  [key: string]: Function
}

export interface WebpackPlugins {
  normalModuleReplacement: Function
  contextReplacement: Function
  ignore: Function
  watchIgnore: Function
  banner: Function
  prefetch: Function
  automaticPrefetch: Function
  define: Function
  provide: Function
  hotModuleReplacement: Function
  sourceMapDevTool: Function
  evalSourceMapDevTool: Function
  evalDevToolModule: Function
  cache: Function
  extendedAPI: Function
  externals: Function
  jsonpTemplate: Function
  libraryTemplate: Function
  loaderTarget: Function
  memoryOutputFile: Function
  progress: Function
  setVarMainTemplate: Function
  umdMainTemplate: Function
  noErrors: Function
  noEmitOnErrors: Function
  newWatching: Function
  environment: Function
  dll: Function
  dllReference: Function
  loaderOptions: Function
  namedModules: Function
  namedChunks: Function
  hashedModuleIds: Function
  moduleFilenameH: Function
  aggressiveMerging: Function
  aggressiveSplitting: Function
  splitChunks: Function
  chunkModuleIdRange: Function
  dedupe: Function
  limitChunkCount: Function
  minChunkSize: Function
  occurrenceOrder: Function
  moduleConcatenation: Function
  minifyJs: Function
  minifyCss: Function
  extractText: Function
  moment: Function
  [key: string]: Function
}

export interface PrefetchPathnameArgs extends BrowserPluginArgs {
  pathname: string
}

export interface RouteUpdateArgs extends BrowserPluginArgs {
  location: Location
  prevLocation: Location | null
}

export interface ShouldUpdateScrollArgs extends BrowserPluginArgs {
  prevRouterProps?: {
    location: Location
  }
  pathname: string
  routerProps: {
    location: Location & NavigateOptions<any>
  }
  getSavedScrollPosition: Function
}

export interface WrapPageElementBrowserArgs<
  DataType = Record<string, unknown>,
  PageContextType = Record<string, unknown>,
  LocationState = WindowLocation["state"]
> extends BrowserPluginArgs {
  element: React.ReactElement
  props: PageProps<DataType, PageContextType, LocationState>
}

export interface WrapRootElementBrowserArgs extends BrowserPluginArgs {
  element: React.ReactElement
  pathname: string
}

export interface BrowserPluginArgs {
  getResourceURLsForPathname: Function
  [key: string]: unknown
}

export interface RouteUpdateDelayedArgs extends BrowserPluginArgs {
  location: Location
}

export interface ServiceWorkerArgs extends BrowserPluginArgs {
  serviceWorker: ServiceWorkerRegistration
}

export interface NodeInput {
  id: string
  parent?: string | null
  children?: string[]
  internal: {
    type: string
    mediaType?: string
    content?: string
    contentDigest: string
    description?: string
    contentFilePath?: string
  }
  [key: string]: unknown
}

export interface Node extends NodeInput {
  parent: string | null
  children: string[]
  internal: NodeInput["internal"] & {
    owner: string
  }
  [key: string]: unknown
}

export interface Page<TContext = Record<string, unknown>> {
  path: string
  matchPath?: string
  component: string
  context?: TContext
  ownerNodeId?: string
  defer?: boolean
  slices?: Record<string, string>
}

export interface SliceInput<TContext = Record<string, unknown>> {
  id: string
  component: string
  context?: TContext
}

export interface IPluginRefObject {
  resolve: string
  options?: IPluginRefOptions
  parentDir?: string
  /** @private Internal key used by create-gatsby during plugin installation. Not necessary to define and can be removed. */
  __key?: string
}

export type PluginRef = string | IPluginRefObject

export interface IPluginRefOptions {
  plugins?: PluginRef[]
  path?: string
  [option: string]: unknown
}

export interface PluginOptionsSchemaArgs {
  Joi: PluginOptionsSchemaJoi
}

/**
 * Send body of response
 */
type Send<T> = (body: T) => void

/**
 * Gatsby Function route response
 */
export interface GatsbyFunctionResponse<T = any> extends ServerResponse {
  /**
   * Send `any` data in response
   */
  send: Send<T>
  /**
   * Send `JSON` data in response
   */
  json: Send<T>
  /**
   * Set the HTTP status code of the response
   */
  status: (statusCode: number) => GatsbyFunctionResponse<T>
  redirect(url: string): GatsbyFunctionResponse<T>
  redirect(status: number, url: string): GatsbyFunctionResponse<T>
}

/**
 * Gatsby function route request
 */
export interface GatsbyFunctionRequest<ReqBody = any> extends IncomingMessage {
  /**
   * Object of values from URL query parameters (after the ? in the URL)
   */
  query: Record<string, string>

  /**
   * Object of values from route parameters
   */
  params: Record<string, string>
  body: ReqBody
  /**
   * Object of `cookies` from header
   */
  cookies: Record<string, string>
  /**
   * Optional field to store the full raw URL by adapters
   */
  rawUrl?: string
}

export interface GatsbyFunctionBodyParserCommonMiddlewareConfig {
  type?: string
  limit?: string | number
}

export interface GatsbyFunctionBodyParserUrlencodedConfig
  extends GatsbyFunctionBodyParserCommonMiddlewareConfig {
  extended: boolean
}

export interface GatsbyFunctionBodyParserConfig {
  json?: GatsbyFunctionBodyParserCommonMiddlewareConfig
  raw?: GatsbyFunctionBodyParserCommonMiddlewareConfig
  text?: GatsbyFunctionBodyParserCommonMiddlewareConfig
  urlencoded?: GatsbyFunctionBodyParserUrlencodedConfig
}

export interface GatsbyFunctionConfig {
  bodyParser?: GatsbyFunctionBodyParserConfig
}

declare module NodeJS {
  interface Global {
    __GATSBY: {
      buildId: string
      root: string
    }
  }
}
