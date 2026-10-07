import {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
  onRequestHookHandler,
  preHandlerHookHandler,
  RegisterOptions,
} from 'fastify'

/**
 * Swagger-UI Vendor Extensions
 * @see https://support.smartbear.com/swaggerhub/docs/apis/vendor-extensions.html#api-docs-x-tokenname
 */
declare module 'openapi-types' {
  namespace OpenAPIV3 {
    interface OAuth2SecurityScheme {
      'x-tokenName'?: string;
    }
  }
  namespace OpenAPIV2 {
    interface SecuritySchemeOauth2Base {
      'x-tokenName'?: string;
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    swaggerCSP: {
      script: string[];
      style: string[];
    }
  }
}

type FastifySwaggerUi = FastifyPluginCallback<fastifySwaggerUi.FastifySwaggerUiOptions>

declare namespace fastifySwaggerUi {
  export interface FastifySwaggerUiOptions extends Omit<RegisterOptions, 'prefix' | 'hooks'> {
    baseDir?: string;
    /**
     * Overwrite the swagger url end-point
     * @default /documentation
     */
    routePrefix?: string;
    /**
     * Add an index prefix. This is for when the Fastify server is behind path based routing.  ex. NGINX
     */
    indexPrefix?: string;
    /**
     * Make it explicit that this plugin overrides the prefix value
     */
    prefix?: never;
    /**
     * Swagger UI Config
     */
    uiConfig?: FastifySwaggerUiConfigOptions
    initOAuth?: FastifySwaggerInitOAuthOptions
    /**
     * CSP Config
     */
    staticCSP?: boolean | string | Record<string, string | string[]>
    transformStaticCSP?: (header: string) => string
    /**
     * route hooks
     */
    uiHooks?: FastifySwaggerUiHooksOptions
    /**
     * Make it explicit that this plugin overrides the prefix value
     */
    hooks?: never;

    theme?: FastifySwaggerUiTheme

    logo?: FastifySwaggerUILogo

    transformSpecification?: (swaggerObject: Readonly<Record<string, any>>, request: FastifyRequest, reply: FastifyReply) => Record<string, any>
    transformSpecificationClone?: boolean

    /**
     * Use this parameter to set a validator URL
     *
     * @default false
     */
    validatorUrl?: string | false
  }

  type FastifySwaggerUiTheme = {
    title?: string;
    css?: { filename: string; content: string; }[];
    js?: { filename: string; content: string; }[];
    favicon?: { filename: string; rel: string; type: string; sizes: string; content: string | Buffer; }[];
  }

  type FastifySwaggerUILogo = {
    type: string;
    content: string | Buffer;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
  }

  type SupportedHTTPMethods = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace'

  interface PluginsOptions {
    /**
     * Control behavior of plugins when targeting the same component with wrapComponent.<br/>
     * - `legacy` (default) : last plugin takes precedence over the others<br/>
     * - `chain` : chain wrapComponents when targeting the same core component,
     *  allowing multiple plugins to wrap the same component
     * @default 'legacy'
     */
    pluginLoadType?: PluginLoadType;
  }

  type PluginLoadType = 'legacy' | 'chain'

  type SorterLike =
    | 'alpha'
    | 'method'
    | {
      (name1: string, name2: string): number;
    }

  interface Request {
    [prop: string]: any;
  }

  interface Response {
    [prop: string]: any;
  }

  /**
  * See https://swagger.io/docs/open-source-tools/swagger-ui/customization/plugin-api/
  */
  interface SwaggerUIPlugin {
    (system: any): {
      statePlugins?: {
        [stateKey: string]: {
          actions?: Indexable | undefined;
          reducers?: Indexable | undefined;
          selectors?: Indexable | undefined;
          wrapActions?: Indexable | undefined;
          wrapSelectors?: Indexable | undefined;
        };
      } | undefined;
      components?: Indexable | undefined;
      wrapComponents?: Indexable | undefined;
      rootInjects?: Indexable | undefined;
      afterLoad?: ((system: any) => any) | undefined;
      fn?: Indexable | undefined;
    };
  }

  interface Indexable {
    [index: string]: any;
  }

  export type FastifySwaggerUiConfigOptions = {
    // Core

    /**
     * URL to fetch external configuration document from.
     */
    configUrl?: string | undefined;

    /**
     * The ID of a DOM element inside which SwaggerUI will put its user interface.
     */
    dom_id?: string | undefined;

    /**
     * A JavaScript object describing the OpenAPI definition. When used, the url parameter will not be parsed. This is useful for testing manually-generated definitions without hosting them
     */
    spec?: { [propName: string]: any } | undefined;

    /**
     * The URL pointing to API definition (normally swagger.json or swagger.yaml). Will be ignored if urls or spec is used.
     */
    url?: string | undefined;

    /**
     * An array of API definition objects ([{url: "<url1>", name: "<name1>"},{url: "<url2>", name: "<name2>"}])
     * used by Topbar plugin. When used and Topbar plugin is enabled, the url parameter will not be parsed.
     * Names and URLs must be unique among all items in this array, since they're used as identifiers.
     */
    urls?: Array<{
      url: string;
      name: string;
    }> | undefined;

    // Plugin system

    /**
     * The name of a component available via the plugin system to use as the top-level layout
     * for Swagger UI.
     */
    layout?: string | undefined;

    /**
     * A Javascript object to configure plugin integration and behaviors
     */
    pluginsOptions?: PluginsOptions;

    /**
     * An array of plugin functions to use in Swagger UI.
     */
    plugins?: SwaggerUIPlugin[] | undefined;

    /**
     * An array of presets to use in Swagger UI.
     * Usually, you'll want to include ApisPreset if you use this option.
     */
    presets?: SwaggerUIPlugin[] | undefined;

    // Display

    /**
     * If set to true, enables deep linking for tags and operations.
     * See the Deep Linking documentation for more information.
     */
    deepLinking?: boolean | undefined;

    /**
     * Controls the display of operationId in operations list. The default is false.
     */
    displayOperationId?: boolean | undefined;

    /**
     * The default expansion depth for models (set to -1 completely hide the models).
     */
    defaultModelsExpandDepth?: number | undefined;

    /**
     * The default expansion depth for the model on the model-example section.
     */
    defaultModelExpandDepth?: number | undefined;

    /**
     * Controls how the model is shown when the API is first rendered.
     * (The user can always switch the rendering for a given model by clicking the
     * 'Model' and 'Example Value' links.)
     */
    defaultModelRendering?: 'example' | 'model' | undefined;

    /**
     * Controls the display of the request duration (in milliseconds) for "Try it out" requests.
     */
    displayRequestDuration?: boolean | undefined;

    /**
     * Controls the default expansion setting for the operations and tags.
     * It can be 'list' (expands only the tags), 'full' (expands the tags and operations)
     * or 'none' (expands nothing).
     */
    docExpansion?: 'list' | 'full' | 'none' | undefined;

    /**
     * If set, enables filtering.
     * The top bar will show an edit box that you can use to filter the tagged operations that are shown.
     * Can be Boolean to enable or disable, or a string, in which case filtering will be enabled
     * using that string as the filter expression.
     * Filtering is case sensitive matching the filter expression anywhere inside the tag.
     */
    filter?: boolean | string | undefined;

    /**
     * If set, limits the number of tagged operations displayed to at most this many.
     * The default is to show all operations.
     */
    maxDisplayedTags?: number | undefined;

    /**
     * Apply a sort to the operation list of each API.
     * It can be 'alpha' (sort by paths alphanumerically),
     * 'method' (sort by HTTP method) or a function (see Array.prototype.sort() to know how sort function works).
     * Default is the order returned by the server unchanged.
     */
    operationsSorter?: SorterLike | undefined;

    /**
     * Controls the display of vendor extension (x-) fields and values for Operations,
     * Parameters, Responses, and Schema.
     */
    showExtensions?: boolean | undefined;

    /**
     * Controls the display of extensions (pattern, maxLength, minLength, maximum, minimum) fields
     * and values for Parameters.
     */
    showCommonExtensions?: boolean | undefined;

    /**
     * Apply a sort to the tag list of each API.
     * It can be 'alpha' (sort by paths alphanumerically)
     * or a function (see Array.prototype.sort() to learn how to write a sort function).
     * Two tag name strings are passed to the sorter for each pass.
     * Default is the order determined by Swagger UI.
     */
    tagsSorter?: SorterLike | undefined;

    /**
     * When enabled, sanitizer will leave style, class and data-* attributes untouched
     * on all HTML Elements declared inside markdown strings.
     * This parameter is Deprecated and will be removed in 4.0.0.
     * @deprecated
     */
    useUnsafeMarkdown?: boolean | undefined;

    /**
     * Provides a mechanism to be notified when Swagger UI has finished rendering a newly provided definition.
     */
    onComplete?: (() => any) | undefined;

    /**
     * Set to false to deactivate syntax highlighting of payloads and cURL command,
     * can be otherwise an object with the activate and theme properties.
     */
    syntaxHighlight?:
    | false
    | {
      /**
       * Whether syntax highlighting should be activated or not.
       */
      activate?: boolean | undefined;
      /**
       * Highlight.js syntax coloring theme to use. (Only these 6 styles are available.)
       */
      theme?: 'agate' | 'arta' | 'monokai' | 'nord' | 'obsidian' | 'tomorrow-night' | undefined;
    } | undefined;
    /**
     * Controls whether the "Try it out" section should be enabled by default.
     */
    tryItOutEnabled?: boolean | undefined;

    /**
     * This is the default configuration section for the the requestSnippets plugin.
     */
    requestSnippets?: {
      generators?: {
        [genName: string]: {
          title: string;
          syntax: string;
        };
      } | undefined;
      defaultExpanded?: boolean | undefined;
      /**
       * e.g. only show curl bash = ["curl_bash"]
       */
      languagesMask?: string[] | undefined;
    } | undefined;

    // Network

    /**
     * OAuth redirect URL.
     */
    oauth2RedirectUrl?: string | undefined;

    /**
     * MUST be a function. Function to intercept remote definition,
     * "Try it out", and OAuth 2.0 requests.
     * Accepts one argument requestInterceptor(request) and must return the modified request,
     * or a Promise that resolves to the modified request.
     */
    requestInterceptor?: ((a: Request) => Request | Promise<Request>) | undefined;

    /**
     * MUST be a function. Function to intercept remote definition,
     * "Try it out", and OAuth 2.0 responses.
     * Accepts one argument responseInterceptor(response) and must return the modified response,
     * or a Promise that resolves to the modified response.
     */
    responseInterceptor?: ((a: Response) => Response | Promise<Response>) | undefined;

    /**
     * If set to true, uses the mutated request returned from a requestInterceptor
     * to produce the curl command in the UI, otherwise the request
     * beforethe requestInterceptor was applied is used.
     */
    showMutatedRequest?: boolean | undefined;

    /**
     * List of HTTP methods that have the "Try it out" feature enabled.
     * An empty array disables "Try it out" for all operations.
     * This does not filter the operations from the display.
     */
    supportedSubmitMethods?: SupportedHTTPMethods[] | undefined;

    /**
     * By default, Swagger UI attempts to validate specs against swagger.io's online validator.
     * You can use this parameter to set a different validator URL,
     * for example for locally deployed validators (Validator Badge).
     * Setting it to either none, 127.0.0.1 or localhost will disable validation.
     */
    validatorUrl?: string | undefined | null;

    /**
     * If set to true, enables passing credentials, as defined in the Fetch standard,
     * in CORS requests that are sent by the browser.
     * Note that Swagger UI cannot currently set cookies cross-domain (see swagger-js#1163)
     * - as a result, you will have to rely on browser-supplied
     * cookies (which this setting enables sending) that Swagger UI cannot control.
     */
    withCredentials?: boolean | undefined;

    // Macros

    /**
     * Function to set default values to each property in model.
     * Accepts one argument modelPropertyMacro(property), property is immutable
     */
    modelPropertyMacro?: ((propName: Readonly<any>) => any) | undefined;

    /**
     * Function to set default value to parameters.
     * Accepts two arguments parameterMacro(operation, parameter).
     * Operation and parameter are objects passed for context, both remain immutable
     */
    parameterMacro?: ((operation: Readonly<any>, parameter: Readonly<any>) => any) | undefined;

    // Authorization

    /**
     * If set to true, it persists authorization data and it would not be lost on browser close/refresh
     */
    persistAuthorization?: boolean | undefined;
  }

  export type FastifySwaggerInitOAuthOptions = {
    /**
     * Default clientId.
     */
    clientId?: string;

    /**
     * Never use this parameter in your production environment.
     * It exposes crucial security information. This feature is intended for
     * dev/test environments only.
     * Default clientSecret.
     */
    clientSecret?: string,

    /**
     * realm query parameter (for oauth1) added to authorizationUrl and tokenUrl.
     */
    realm?: string;

    /**
     * application name, displayed in authorization popup.
     */
    appName?: string;

    /**
     * scope separator for passing scopes, encoded before calling, default
     * value is a space (encoded value %20).
     *
     * @default ' '
     */
    scopeSeparator?: string;

    /**
     * string array or scope separator (i.e. space) separated string of
     * initially selected oauth scopes
     *
     * @default []
     */
    scopes?: string | string[];

    /**
     * Additional query parameters added to authorizationUrl and tokenUrl.
     * MUST be an object
     */
    additionalQueryStringParams?: { [key: string]: any };

    /**
     * Only activated for the accessCode flow. During the authorization_code
     * request to the tokenUrl, pass the Client Password using the HTTP Basic
     * Authentication scheme (Authorization header with Basic
     * base64encode(client_id + client_secret)).
     *
     * @default false
     */
    useBasicAuthenticationWithAccessCodeGrant?: boolean;

    /**
     * Only applies to Authorization Code flows. Proof Key for Code Exchange
     * brings enhanced security for OAuth public clients.
     *
     * @default false
     */
    usePkceWithAuthorizationCodeGrant?: boolean
  }

  export type FastifySwaggerUiHooksOptions = Partial<{
    onRequest?: onRequestHookHandler,
    preHandler?: preHandlerHookHandler,
  }>

  export const fastifySwaggerUi: FastifySwaggerUi
  export { fastifySwaggerUi as default }
}
declare function fastifySwaggerUi (...params: Parameters<FastifySwaggerUi>): ReturnType<FastifySwaggerUi>

export = fastifySwaggerUi
