"use strict";
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
  AccessDeniedException: () => AccessDeniedException,
  AuthorizationPendingException: () => AuthorizationPendingException,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
  CreateTokenWithIAMCommand: () => CreateTokenWithIAMCommand,
  CreateTokenWithIAMRequestFilterSensitiveLog: () => CreateTokenWithIAMRequestFilterSensitiveLog,
  CreateTokenWithIAMResponseFilterSensitiveLog: () => CreateTokenWithIAMResponseFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  InternalServerException: () => InternalServerException,
  InvalidClientException: () => InvalidClientException,
  InvalidClientMetadataException: () => InvalidClientMetadataException,
  InvalidGrantException: () => InvalidGrantException,
  InvalidRequestException: () => InvalidRequestException,
  InvalidRequestRegionException: () => InvalidRequestRegionException,
  InvalidScopeException: () => InvalidScopeException,
  RegisterClientCommand: () => RegisterClientCommand,
  RegisterClientResponseFilterSensitiveLog: () => RegisterClientResponseFilterSensitiveLog,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SlowDownException: () => SlowDownException,
  StartDeviceAuthorizationCommand: () => StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationRequestFilterSensitiveLog: () => StartDeviceAuthorizationRequestFilterSensitiveLog,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  __Client: () => import_smithy_client.Client
});
module.exports = __toCommonJS(src_exports);

// src/SSOOIDCClient.ts
var import_middleware_host_header = require("@aws-sdk/middleware-host-header");
var import_middleware_logger = require("@aws-sdk/middleware-logger");
var import_middleware_recursion_detection = require("@aws-sdk/middleware-recursion-detection");
var import_middleware_user_agent = require("@aws-sdk/middleware-user-agent");
var import_config_resolver = require("@smithy/config-resolver");
var import_core = require("@smithy/core");
var import_middleware_content_length = require("@smithy/middleware-content-length");
var import_middleware_endpoint = require("@smithy/middleware-endpoint");
var import_middleware_retry = require("@smithy/middleware-retry");

var import_httpAuthSchemeProvider = require("./auth/httpAuthSchemeProvider");

// src/endpoint/EndpointParameters.ts
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return {
    ...options,
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "sso-oauth"
  };
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// src/SSOOIDCClient.ts
var import_runtimeConfig = require("././runtimeConfig");

// src/runtimeExtensions.ts
var import_region_config_resolver = require("@aws-sdk/region-config-resolver");
var import_protocol_http = require("@smithy/protocol-http");
var import_smithy_client = require("@smithy/smithy-client");

// src/auth/httpAuthExtensionConfiguration.ts
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// src/runtimeExtensions.ts
var asPartial = /* @__PURE__ */ __name((t) => t, "asPartial");
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = {
    ...asPartial((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig)),
    ...asPartial((0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig)),
    ...asPartial((0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
    ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
  };
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return {
    ...runtimeConfig,
    ...(0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
    ...(0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
    ...(0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
    ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
  };
}, "resolveRuntimeExtensions");

// src/SSOOIDCClient.ts
var _SSOOIDCClient = class _SSOOIDCClient extends import_smithy_client.Client {
  constructor(...[configuration]) {
    const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = (0, import_config_resolver.resolveRegionConfig)(_config_1);
    const _config_3 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_2);
    const _config_4 = (0, import_middleware_retry.resolveRetryConfig)(_config_3);
    const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
    const _config_6 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_5);
    const _config_7 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, (configuration == null ? void 0 : configuration.extensions) || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
    this.middlewareStack.use(
      (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
      })
    );
    this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
  }
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy() {
    super.destroy();
  }
  getDefaultHttpAuthSchemeParametersProvider() {
    return import_httpAuthSchemeProvider.defaultSSOOIDCHttpAuthSchemeParametersProvider;
  }
  getIdentityProviderConfigProvider() {
    return async (config) => new import_core.DefaultIdentityProviderConfig({
      "aws.auth#sigv4": config.credentials
    });
  }
};
__name(_SSOOIDCClient, "SSOOIDCClient");
var SSOOIDCClient = _SSOOIDCClient;

// src/SSOOIDC.ts


// src/commands/CreateTokenCommand.ts

var import_middleware_serde = require("@smithy/middleware-serde");

var import_types = require("@smithy/types");

// src/models/models_0.ts


// src/models/SSOOIDCServiceException.ts

var _SSOOIDCServiceException = class _SSOOIDCServiceException extends import_smithy_client.ServiceException {
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
  }
};
__name(_SSOOIDCServiceException, "SSOOIDCServiceException");
var SSOOIDCServiceException = _SSOOIDCServiceException;

// src/models/models_0.ts
var _AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts
    });
    this.name = "AccessDeniedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _AccessDeniedException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_AccessDeniedException, "AccessDeniedException");
var AccessDeniedException = _AccessDeniedException;
var _AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts
    });
    this.name = "AuthorizationPendingException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_AuthorizationPendingException, "AuthorizationPendingException");
var AuthorizationPendingException = _AuthorizationPendingException;
var _ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "ExpiredTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_ExpiredTokenException, "ExpiredTokenException");
var ExpiredTokenException = _ExpiredTokenException;
var _InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts
    });
    this.name = "InternalServerException";
    this.$fault = "server";
    Object.setPrototypeOf(this, _InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InternalServerException, "InternalServerException");
var InternalServerException = _InternalServerException;
var _InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InvalidClientException, "InvalidClientException");
var InvalidClientException = _InvalidClientException;
var _InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidGrantException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InvalidGrantException, "InvalidGrantException");
var InvalidGrantException = _InvalidGrantException;
var _InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidRequestException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InvalidRequestException, "InvalidRequestException");
var InvalidRequestException = _InvalidRequestException;
var _InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidScopeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InvalidScopeException, "InvalidScopeException");
var InvalidScopeException = _InvalidScopeException;
var _SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts
    });
    this.name = "SlowDownException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_SlowDownException, "SlowDownException");
var SlowDownException = _SlowDownException;
var _UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedClientException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_UnauthorizedClientException, "UnauthorizedClientException");
var UnauthorizedClientException = _UnauthorizedClientException;
var _UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts
    });
    this.name = "UnsupportedGrantTypeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_UnsupportedGrantTypeException, "UnsupportedGrantTypeException");
var UnsupportedGrantTypeException = _UnsupportedGrantTypeException;
var _InvalidRequestRegionException = class _InvalidRequestRegionException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidRequestRegionException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidRequestRegionException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidRequestRegionException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
    this.endpoint = opts.endpoint;
    this.region = opts.region;
  }
};
__name(_InvalidRequestRegionException, "InvalidRequestRegionException");
var InvalidRequestRegionException = _InvalidRequestRegionException;
var _InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidClientMetadataException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidClientMetadataException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
};
__name(_InvalidClientMetadataException, "InvalidClientMetadataException");
var InvalidClientMetadataException = _InvalidClientMetadataException;
var CreateTokenRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING },
  ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING }
}), "CreateTokenRequestFilterSensitiveLog");
var CreateTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING },
  ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
  ...obj.idToken && { idToken: import_smithy_client.SENSITIVE_STRING }
}), "CreateTokenResponseFilterSensitiveLog");
var CreateTokenWithIAMRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
  ...obj.assertion && { assertion: import_smithy_client.SENSITIVE_STRING },
  ...obj.subjectToken && { subjectToken: import_smithy_client.SENSITIVE_STRING }
}), "CreateTokenWithIAMRequestFilterSensitiveLog");
var CreateTokenWithIAMResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING },
  ...obj.refreshToken && { refreshToken: import_smithy_client.SENSITIVE_STRING },
  ...obj.idToken && { idToken: import_smithy_client.SENSITIVE_STRING }
}), "CreateTokenWithIAMResponseFilterSensitiveLog");
var RegisterClientResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING }
}), "RegisterClientResponseFilterSensitiveLog");
var StartDeviceAuthorizationRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.clientSecret && { clientSecret: import_smithy_client.SENSITIVE_STRING }
}), "StartDeviceAuthorizationRequestFilterSensitiveLog");

// src/protocols/Aws_restJson1.ts


var se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/token");
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      clientId: [],
      clientSecret: [],
      code: [],
      deviceCode: [],
      grantType: [],
      redirectUri: [],
      refreshToken: [],
      scope: (_) => (0, import_smithy_client._json)(_)
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_CreateTokenCommand");
var se_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/token");
  const query = (0, import_smithy_client.map)({
    [_ai]: [, "t"]
  });
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      assertion: [],
      clientId: [],
      code: [],
      grantType: [],
      redirectUri: [],
      refreshToken: [],
      requestedTokenType: [],
      scope: (_) => (0, import_smithy_client._json)(_),
      subjectToken: [],
      subjectTokenType: []
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
}, "se_CreateTokenWithIAMCommand");
var se_RegisterClientCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/client/register");
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      clientName: [],
      clientType: [],
      scopes: (_) => (0, import_smithy_client._json)(_)
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_RegisterClientCommand");
var se_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/device_authorization");
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      clientId: [],
      clientSecret: [],
      startUrl: []
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_StartDeviceAuthorizationCommand");
var de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    accessToken: import_smithy_client.expectString,
    expiresIn: import_smithy_client.expectInt32,
    idToken: import_smithy_client.expectString,
    refreshToken: import_smithy_client.expectString,
    tokenType: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_CreateTokenCommand");
var de_CreateTokenWithIAMCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    accessToken: import_smithy_client.expectString,
    expiresIn: import_smithy_client.expectInt32,
    idToken: import_smithy_client.expectString,
    issuedTokenType: import_smithy_client.expectString,
    refreshToken: import_smithy_client.expectString,
    scope: import_smithy_client._json,
    tokenType: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_CreateTokenWithIAMCommand");
var de_RegisterClientCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    authorizationEndpoint: import_smithy_client.expectString,
    clientId: import_smithy_client.expectString,
    clientIdIssuedAt: import_smithy_client.expectLong,
    clientSecret: import_smithy_client.expectString,
    clientSecretExpiresAt: import_smithy_client.expectLong,
    tokenEndpoint: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_RegisterClientCommand");
var de_StartDeviceAuthorizationCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    deviceCode: import_smithy_client.expectString,
    expiresIn: import_smithy_client.expectInt32,
    interval: import_smithy_client.expectInt32,
    userCode: import_smithy_client.expectString,
    verificationUri: import_smithy_client.expectString,
    verificationUriComplete: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_StartDeviceAuthorizationCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssooidc#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AuthorizationPendingException":
    case "com.amazonaws.ssooidc#AuthorizationPendingException":
      throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.ssooidc#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "InvalidGrantException":
    case "com.amazonaws.ssooidc#InvalidGrantException":
      throw await de_InvalidGrantExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      throw await de_InvalidScopeExceptionRes(parsedOutput, context);
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      throw await de_SlowDownExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
      throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
    case "InvalidRequestRegionException":
    case "com.amazonaws.ssooidc#InvalidRequestRegionException":
      throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
    case "InvalidClientMetadataException":
    case "com.amazonaws.ssooidc#InvalidClientMetadataException":
      throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var throwDefaultError = (0, import_smithy_client.withBaseException)(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_AccessDeniedExceptionRes");
var de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new AuthorizationPendingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_AuthorizationPendingExceptionRes");
var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ExpiredTokenExceptionRes");
var de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InternalServerExceptionRes");
var de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidClientExceptionRes");
var de_InvalidClientMetadataExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientMetadataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidClientMetadataExceptionRes");
var de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidGrantException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidGrantExceptionRes");
var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_InvalidRequestRegionExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    endpoint: import_smithy_client.expectString,
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString,
    region: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidRequestRegionExceptionRes");
var de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidScopeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidScopeExceptionRes");
var de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new SlowDownException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_SlowDownExceptionRes");
var de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_UnauthorizedClientExceptionRes");
var de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    error: import_smithy_client.expectString,
    error_description: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedGrantTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_UnsupportedGrantTypeExceptionRes");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var _ai = "aws_iam";
var parseBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    return JSON.parse(encoded);
  }
  return {};
}), "parseBody");
var parseErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
}, "parseErrorBody");
var loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
  const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase()), "findKey");
  const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  }, "sanitizeErrorCode");
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data.code !== void 0) {
    return sanitizeErrorCode(data.code);
  }
  if (data["__type"] !== void 0) {
    return sanitizeErrorCode(data["__type"]);
  }
}, "loadRestJsonErrorCode");

// src/commands/CreateTokenCommand.ts
var _CreateTokenCommand = class _CreateTokenCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
};
__name(_CreateTokenCommand, "CreateTokenCommand");
var CreateTokenCommand = _CreateTokenCommand;

// src/commands/CreateTokenWithIAMCommand.ts




var _CreateTokenWithIAMCommand = class _CreateTokenWithIAMCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSSOOIDCService", "CreateTokenWithIAM", {}).n("SSOOIDCClient", "CreateTokenWithIAMCommand").f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog).ser(se_CreateTokenWithIAMCommand).de(de_CreateTokenWithIAMCommand).build() {
};
__name(_CreateTokenWithIAMCommand, "CreateTokenWithIAMCommand");
var CreateTokenWithIAMCommand = _CreateTokenWithIAMCommand;

// src/commands/RegisterClientCommand.ts




var _RegisterClientCommand = class _RegisterClientCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSSOOIDCService", "RegisterClient", {}).n("SSOOIDCClient", "RegisterClientCommand").f(void 0, RegisterClientResponseFilterSensitiveLog).ser(se_RegisterClientCommand).de(de_RegisterClientCommand).build() {
};
__name(_RegisterClientCommand, "RegisterClientCommand");
var RegisterClientCommand = _RegisterClientCommand;

// src/commands/StartDeviceAuthorizationCommand.ts




var _StartDeviceAuthorizationCommand = class _StartDeviceAuthorizationCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSSOOIDCService", "StartDeviceAuthorization", {}).n("SSOOIDCClient", "StartDeviceAuthorizationCommand").f(StartDeviceAuthorizationRequestFilterSensitiveLog, void 0).ser(se_StartDeviceAuthorizationCommand).de(de_StartDeviceAuthorizationCommand).build() {
};
__name(_StartDeviceAuthorizationCommand, "StartDeviceAuthorizationCommand");
var StartDeviceAuthorizationCommand = _StartDeviceAuthorizationCommand;

// src/SSOOIDC.ts
var commands = {
  CreateTokenCommand,
  CreateTokenWithIAMCommand,
  RegisterClientCommand,
  StartDeviceAuthorizationCommand
};
var _SSOOIDC = class _SSOOIDC extends SSOOIDCClient {
};
__name(_SSOOIDC, "SSOOIDC");
var SSOOIDC = _SSOOIDC;
(0, import_smithy_client.createAggregatedClient)(commands, SSOOIDC);

// src/index.ts
var import_util_endpoints = require("@aws-sdk/util-endpoints");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  SSOOIDCServiceException,
  __Client,
  SSOOIDCClient,
  SSOOIDC,
  $Command,
  CreateTokenCommand,
  CreateTokenWithIAMCommand,
  RegisterClientCommand,
  StartDeviceAuthorizationCommand,
  AccessDeniedException,
  AuthorizationPendingException,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidGrantException,
  InvalidRequestException,
  InvalidScopeException,
  SlowDownException,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
  InvalidRequestRegionException,
  InvalidClientMetadataException,
  CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog,
  CreateTokenWithIAMRequestFilterSensitiveLog,
  CreateTokenWithIAMResponseFilterSensitiveLog,
  RegisterClientResponseFilterSensitiveLog,
  StartDeviceAuthorizationRequestFilterSensitiveLog
});

