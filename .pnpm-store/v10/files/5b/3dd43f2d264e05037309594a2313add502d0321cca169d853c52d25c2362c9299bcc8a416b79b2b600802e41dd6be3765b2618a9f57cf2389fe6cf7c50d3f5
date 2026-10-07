var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  RequestBuilder: () => RequestBuilder,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext3,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider,
  requestBuilder: () => requestBuilder
});
module.exports = __toCommonJS(src_exports);

// src/middleware-http-auth-scheme/httpAuthSchemeMiddleware.ts
var import_util_middleware = require("@smithy/util-middleware");
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
__name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
  var _a;
  const options = config.httpAuthSchemeProvider(
    await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input)
  );
  const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
  const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
  const failureReasons = [];
  for (const option of options) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = ((_a = option.propertiesExtractor) == null ? void 0 : _a.call(option, config, context)) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
}, "httpAuthSchemeMiddleware");

// src/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.ts
var import_middleware_endpoint = require("@smithy/middleware-endpoint");
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: import_middleware_endpoint.endpointMiddlewareOptions.name
};
var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, {
  httpAuthSchemeParametersProvider,
  identityProviderConfigProvider
}) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }),
      httpAuthSchemeEndpointRuleSetMiddlewareOptions
    );
  }
}), "getHttpAuthSchemeEndpointRuleSetPlugin");

// src/middleware-http-auth-scheme/getHttpAuthSchemePlugin.ts
var import_middleware_serde = require("@smithy/middleware-serde");
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
};
var getHttpAuthSchemePlugin = /* @__PURE__ */ __name((config, {
  httpAuthSchemeParametersProvider,
  identityProviderConfigProvider
}) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      httpAuthSchemeMiddleware(config, {
        httpAuthSchemeParametersProvider,
        identityProviderConfigProvider
      }),
      httpAuthSchemeMiddlewareOptions
    );
  }
}), "getHttpAuthSchemePlugin");

// src/middleware-http-signing/httpSigningMiddleware.ts
var import_protocol_http = require("@smithy/protocol-http");

var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error) => {
  throw error;
}, "defaultErrorHandler");
var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
  if (!import_protocol_http.HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = (0, import_util_middleware.getSmithyContext)(context);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const {
    httpAuthOption: { signingProperties = {} },
    identity,
    signer
  } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, "httpSigningMiddleware");

// src/middleware-http-signing/getHttpSigningMiddleware.ts
var import_middleware_retry = require("@smithy/middleware-retry");
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: import_middleware_retry.retryMiddlewareOptions.name
};
var getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
  }
}), "getHttpSigningPlugin");

// src/util-identity-and-auth/DefaultIdentityProviderConfig.ts
var _DefaultIdentityProviderConfig = class _DefaultIdentityProviderConfig {
  /**
   * Creates an IdentityProviderConfig with a record of scheme IDs to identity providers.
   *
   * @param config scheme IDs and identity providers to configure
   */
  constructor(config) {
    this.authSchemes = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(config)) {
      if (value !== void 0) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};
__name(_DefaultIdentityProviderConfig, "DefaultIdentityProviderConfig");
var DefaultIdentityProviderConfig = _DefaultIdentityProviderConfig;

// src/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.ts
var import_types = require("@smithy/types");
var _HttpApiKeyAuthSigner = class _HttpApiKeyAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    if (!signingProperties) {
      throw new Error(
        "request could not be signed with `apiKey` since the `name` and `in` signer properties are missing"
      );
    }
    if (!signingProperties.name) {
      throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
    }
    if (!signingProperties.in) {
      throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
    }
    if (!identity.apiKey) {
      throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
    }
    const clonedRequest = httpRequest.clone();
    if (signingProperties.in === import_types.HttpApiKeyAuthLocation.QUERY) {
      clonedRequest.query[signingProperties.name] = identity.apiKey;
    } else if (signingProperties.in === import_types.HttpApiKeyAuthLocation.HEADER) {
      clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
    } else {
      throw new Error(
        "request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`"
      );
    }
    return clonedRequest;
  }
};
__name(_HttpApiKeyAuthSigner, "HttpApiKeyAuthSigner");
var HttpApiKeyAuthSigner = _HttpApiKeyAuthSigner;

// src/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.ts
var _HttpBearerAuthSigner = class _HttpBearerAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    const clonedRequest = httpRequest.clone();
    if (!identity.token) {
      throw new Error("request could not be signed with `token` since the `token` is not defined");
    }
    clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
    return clonedRequest;
  }
};
__name(_HttpBearerAuthSigner, "HttpBearerAuthSigner");
var HttpBearerAuthSigner = _HttpBearerAuthSigner;

// src/util-identity-and-auth/httpAuthSchemes/noAuth.ts
var _NoAuthSigner = class _NoAuthSigner {
  async sign(httpRequest, identity, signingProperties) {
    return httpRequest;
  }
};
__name(_NoAuthSigner, "NoAuthSigner");
var NoAuthSigner = _NoAuthSigner;

// src/util-identity-and-auth/memoizeIdentityProvider.ts
var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || (options == null ? void 0 : options.forceRefresh)) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, "memoizeIdentityProvider");

// src/getSmithyContext.ts

var getSmithyContext3 = /* @__PURE__ */ __name((context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");

// src/normalizeProvider.ts
var normalizeProvider = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// src/protocols/requestBuilder.ts

var import_smithy_client = require("@smithy/smithy-client");
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
__name(requestBuilder, "requestBuilder");
var _RequestBuilder = class _RequestBuilder {
  constructor(input, context) {
    this.input = input;
    this.context = context;
    this.query = {};
    this.method = "";
    this.headers = {};
    this.path = "";
    this.body = null;
    this.hostname = "";
    this.resolvePathStack = [];
  }
  async build() {
    const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
    this.path = basePath;
    for (const resolvePath of this.resolvePathStack) {
      resolvePath(this.path);
    }
    return new import_protocol_http.HttpRequest({
      protocol,
      hostname: this.hostname || hostname,
      port,
      method: this.method,
      path: this.path,
      query: this.query,
      body: this.body,
      headers: this.headers
    });
  }
  /**
   * Brevity setter for "hostname".
   */
  hn(hostname) {
    this.hostname = hostname;
    return this;
  }
  /**
   * Brevity initial builder for "basepath".
   */
  bp(uriLabel) {
    this.resolvePathStack.push((basePath) => {
      this.path = `${(basePath == null ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
    });
    return this;
  }
  /**
   * Brevity incremental builder for "path".
   */
  p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
    this.resolvePathStack.push((path) => {
      this.path = (0, import_smithy_client.resolvedPath)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
    });
    return this;
  }
  /**
   * Brevity setter for "headers".
   */
  h(headers) {
    this.headers = headers;
    return this;
  }
  /**
   * Brevity setter for "query".
   */
  q(query) {
    this.query = query;
    return this;
  }
  /**
   * Brevity setter for "body".
   */
  b(body) {
    this.body = body;
    return this;
  }
  /**
   * Brevity setter for "method".
   */
  m(method) {
    this.method = method;
    return this;
  }
};
__name(_RequestBuilder, "RequestBuilder");
var RequestBuilder = _RequestBuilder;

// src/pagination/createPaginator.ts
var makePagedClientRequest = /* @__PURE__ */ __name(async (CommandCtor, client, input, ...args) => {
  return await client.send(new CommandCtor(input), ...args);
}, "makePagedClientRequest");
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return /* @__PURE__ */ __name(async function* paginateOperation(config, input, ...additionalArguments) {
    let token = config.startingToken || void 0;
    let hasNext = true;
    let page;
    while (hasNext) {
      input[inputTokenName] = token;
      if (pageSizeTokenName) {
        input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  }, "paginateOperation");
}
__name(createPaginator, "createPaginator");
var get = /* @__PURE__ */ __name((fromObject, path) => {
  let cursor = fromObject;
  const pathComponents = path.split(".");
  for (const step of pathComponents) {
    if (!cursor || typeof cursor !== "object") {
      return void 0;
    }
    cursor = cursor[step];
  }
  return cursor;
}, "get");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  createPaginator,
  httpAuthSchemeMiddleware,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  httpAuthSchemeMiddlewareOptions,
  getHttpAuthSchemePlugin,
  httpSigningMiddleware,
  httpSigningMiddlewareOptions,
  getHttpSigningPlugin,
  DefaultIdentityProviderConfig,
  HttpApiKeyAuthSigner,
  HttpBearerAuthSigner,
  NoAuthSigner,
  createIsIdentityExpiredFunction,
  EXPIRATION_MS,
  isIdentityExpired,
  doesIdentityRequireRefresh,
  memoizeIdentityProvider,
  getSmithyContext,
  normalizeProvider,
  requestBuilder,
  RequestBuilder
});

