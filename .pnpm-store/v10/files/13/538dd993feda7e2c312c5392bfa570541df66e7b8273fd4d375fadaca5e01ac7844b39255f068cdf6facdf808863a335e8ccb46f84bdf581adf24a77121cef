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
  GetRoleCredentialsCommand: () => GetRoleCredentialsCommand,
  GetRoleCredentialsRequestFilterSensitiveLog: () => GetRoleCredentialsRequestFilterSensitiveLog,
  GetRoleCredentialsResponseFilterSensitiveLog: () => GetRoleCredentialsResponseFilterSensitiveLog,
  InvalidRequestException: () => InvalidRequestException,
  ListAccountRolesCommand: () => ListAccountRolesCommand,
  ListAccountRolesRequestFilterSensitiveLog: () => ListAccountRolesRequestFilterSensitiveLog,
  ListAccountsCommand: () => ListAccountsCommand,
  ListAccountsRequestFilterSensitiveLog: () => ListAccountsRequestFilterSensitiveLog,
  LogoutCommand: () => LogoutCommand,
  LogoutRequestFilterSensitiveLog: () => LogoutRequestFilterSensitiveLog,
  ResourceNotFoundException: () => ResourceNotFoundException,
  RoleCredentialsFilterSensitiveLog: () => RoleCredentialsFilterSensitiveLog,
  SSO: () => SSO,
  SSOClient: () => SSOClient,
  SSOServiceException: () => SSOServiceException,
  TooManyRequestsException: () => TooManyRequestsException,
  UnauthorizedException: () => UnauthorizedException,
  __Client: () => import_smithy_client.Client,
  paginateListAccountRoles: () => paginateListAccountRoles,
  paginateListAccounts: () => paginateListAccounts
});
module.exports = __toCommonJS(src_exports);

// src/SSOClient.ts
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
    defaultSigningName: "awsssoportal"
  };
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// src/SSOClient.ts
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

// src/SSOClient.ts
var _SSOClient = class _SSOClient extends import_smithy_client.Client {
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
    return import_httpAuthSchemeProvider.defaultSSOHttpAuthSchemeParametersProvider;
  }
  getIdentityProviderConfigProvider() {
    return async (config) => new import_core.DefaultIdentityProviderConfig({
      "aws.auth#sigv4": config.credentials
    });
  }
};
__name(_SSOClient, "SSOClient");
var SSOClient = _SSOClient;

// src/SSO.ts


// src/commands/GetRoleCredentialsCommand.ts

var import_middleware_serde = require("@smithy/middleware-serde");

var import_types = require("@smithy/types");

// src/models/models_0.ts


// src/models/SSOServiceException.ts

var _SSOServiceException = class _SSOServiceException extends import_smithy_client.ServiceException {
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _SSOServiceException.prototype);
  }
};
__name(_SSOServiceException, "SSOServiceException");
var SSOServiceException = _SSOServiceException;

// src/models/models_0.ts
var _InvalidRequestException = class _InvalidRequestException extends SSOServiceException {
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
  }
};
__name(_InvalidRequestException, "InvalidRequestException");
var InvalidRequestException = _InvalidRequestException;
var _ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    this.name = "ResourceNotFoundException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
  }
};
__name(_ResourceNotFoundException, "ResourceNotFoundException");
var ResourceNotFoundException = _ResourceNotFoundException;
var _TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts
    });
    this.name = "TooManyRequestsException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
  }
};
__name(_TooManyRequestsException, "TooManyRequestsException");
var TooManyRequestsException = _TooManyRequestsException;
var _UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts
    });
    this.name = "UnauthorizedException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _UnauthorizedException.prototype);
  }
};
__name(_UnauthorizedException, "UnauthorizedException");
var UnauthorizedException = _UnauthorizedException;
var GetRoleCredentialsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
}), "GetRoleCredentialsRequestFilterSensitiveLog");
var RoleCredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.secretAccessKey && { secretAccessKey: import_smithy_client.SENSITIVE_STRING },
  ...obj.sessionToken && { sessionToken: import_smithy_client.SENSITIVE_STRING }
}), "RoleCredentialsFilterSensitiveLog");
var GetRoleCredentialsResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
}), "GetRoleCredentialsResponseFilterSensitiveLog");
var ListAccountRolesRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
}), "ListAccountRolesRequestFilterSensitiveLog");
var ListAccountsRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
}), "ListAccountsRequestFilterSensitiveLog");
var LogoutRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.accessToken && { accessToken: import_smithy_client.SENSITIVE_STRING }
}), "LogoutRequestFilterSensitiveLog");

// src/protocols/Aws_restJson1.ts


var se_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
    [_xasbt]: input[_aT]
  });
  b.bp("/federation/credentials");
  const query = (0, import_smithy_client.map)({
    [_rn]: [, (0, import_smithy_client.expectNonNull)(input[_rN], `roleName`)],
    [_ai]: [, (0, import_smithy_client.expectNonNull)(input[_aI], `accountId`)]
  });
  let body;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
}, "se_GetRoleCredentialsCommand");
var se_ListAccountRolesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
    [_xasbt]: input[_aT]
  });
  b.bp("/assignment/roles");
  const query = (0, import_smithy_client.map)({
    [_nt]: [, input[_nT]],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    [_ai]: [, (0, import_smithy_client.expectNonNull)(input[_aI], `accountId`)]
  });
  let body;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
}, "se_ListAccountRolesCommand");
var se_ListAccountsCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
    [_xasbt]: input[_aT]
  });
  b.bp("/assignment/accounts");
  const query = (0, import_smithy_client.map)({
    [_nt]: [, input[_nT]],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
  });
  let body;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
}, "se_ListAccountsCommand");
var se_LogoutCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, isSerializableHeaderValue, {
    [_xasbt]: input[_aT]
  });
  b.bp("/logout");
  let body;
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_LogoutCommand");
var de_GetRoleCredentialsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    roleCredentials: import_smithy_client._json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_GetRoleCredentialsCommand");
var de_ListAccountRolesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    nextToken: import_smithy_client.expectString,
    roleList: import_smithy_client._json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_ListAccountRolesCommand");
var de_ListAccountsCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await parseBody(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    accountList: import_smithy_client._json,
    nextToken: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_ListAccountsCommand");
var de_LogoutCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  await (0, import_smithy_client.collectBody)(output.body, context);
  return contents;
}, "de_LogoutCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.sso#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sso#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.sso#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.sso#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var throwDefaultError = (0, import_smithy_client.withBaseException)(SSOServiceException);
var de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InvalidRequestExceptionRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ResourceNotFoundExceptionRes");
var de_TooManyRequestsExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_TooManyRequestsExceptionRes");
var de_UnauthorizedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_UnauthorizedExceptionRes");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var isSerializableHeaderValue = /* @__PURE__ */ __name((value) => value !== void 0 && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0), "isSerializableHeaderValue");
var _aI = "accountId";
var _aT = "accessToken";
var _ai = "account_id";
var _mR = "maxResults";
var _mr = "max_result";
var _nT = "nextToken";
var _nt = "next_token";
var _rN = "roleName";
var _rn = "role_name";
var _xasbt = "x-amz-sso_bearer_token";
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

// src/commands/GetRoleCredentialsCommand.ts
var _GetRoleCredentialsCommand = class _GetRoleCredentialsCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
};
__name(_GetRoleCredentialsCommand, "GetRoleCredentialsCommand");
var GetRoleCredentialsCommand = _GetRoleCredentialsCommand;

// src/commands/ListAccountRolesCommand.ts




var _ListAccountRolesCommand = class _ListAccountRolesCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
};
__name(_ListAccountRolesCommand, "ListAccountRolesCommand");
var ListAccountRolesCommand = _ListAccountRolesCommand;

// src/commands/ListAccountsCommand.ts




var _ListAccountsCommand = class _ListAccountsCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
};
__name(_ListAccountsCommand, "ListAccountsCommand");
var ListAccountsCommand = _ListAccountsCommand;

// src/commands/LogoutCommand.ts




var _LogoutCommand = class _LogoutCommand extends import_smithy_client.Command.classBuilder().ep({
  ...commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
};
__name(_LogoutCommand, "LogoutCommand");
var LogoutCommand = _LogoutCommand;

// src/SSO.ts
var commands = {
  GetRoleCredentialsCommand,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand
};
var _SSO = class _SSO extends SSOClient {
};
__name(_SSO, "SSO");
var SSO = _SSO;
(0, import_smithy_client.createAggregatedClient)(commands, SSO);

// src/pagination/ListAccountRolesPaginator.ts

var paginateListAccountRoles = (0, import_core.createPaginator)(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");

// src/pagination/ListAccountsPaginator.ts

var paginateListAccounts = (0, import_core.createPaginator)(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");

// src/index.ts
var import_util_endpoints = require("@aws-sdk/util-endpoints");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  SSOServiceException,
  __Client,
  SSOClient,
  SSO,
  $Command,
  GetRoleCredentialsCommand,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand,
  paginateListAccountRoles,
  paginateListAccounts,
  InvalidRequestException,
  ResourceNotFoundException,
  TooManyRequestsException,
  UnauthorizedException,
  GetRoleCredentialsRequestFilterSensitiveLog,
  RoleCredentialsFilterSensitiveLog,
  GetRoleCredentialsResponseFilterSensitiveLog,
  ListAccountRolesRequestFilterSensitiveLog,
  ListAccountsRequestFilterSensitiveLog,
  LogoutRequestFilterSensitiveLog
});

