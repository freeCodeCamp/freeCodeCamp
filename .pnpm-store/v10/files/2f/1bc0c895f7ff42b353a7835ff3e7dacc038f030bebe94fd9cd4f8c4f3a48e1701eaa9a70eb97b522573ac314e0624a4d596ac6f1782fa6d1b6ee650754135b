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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithSAMLCommand: () => AssumeRoleWithSAMLCommand,
  AssumeRoleWithSAMLRequestFilterSensitiveLog: () => AssumeRoleWithSAMLRequestFilterSensitiveLog,
  AssumeRoleWithSAMLResponseFilterSensitiveLog: () => AssumeRoleWithSAMLResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  ClientInputEndpointParameters: () => import_EndpointParameters9.ClientInputEndpointParameters,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  DecodeAuthorizationMessageCommand: () => DecodeAuthorizationMessageCommand,
  ExpiredTokenException: () => ExpiredTokenException,
  GetAccessKeyInfoCommand: () => GetAccessKeyInfoCommand,
  GetCallerIdentityCommand: () => GetCallerIdentityCommand,
  GetFederationTokenCommand: () => GetFederationTokenCommand,
  GetFederationTokenResponseFilterSensitiveLog: () => GetFederationTokenResponseFilterSensitiveLog,
  GetSessionTokenCommand: () => GetSessionTokenCommand,
  GetSessionTokenResponseFilterSensitiveLog: () => GetSessionTokenResponseFilterSensitiveLog,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidAuthorizationMessageException: () => InvalidAuthorizationMessageException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  RuntimeExtension: () => import_runtimeExtensions.RuntimeExtension,
  STS: () => STS,
  STSServiceException: () => STSServiceException,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("././STSClient"), module.exports);

// src/STS.ts


// src/commands/AssumeRoleCommand.ts
var import_middleware_endpoint = require("@smithy/middleware-endpoint");
var import_middleware_serde = require("@smithy/middleware-serde");

var import_types = require("@smithy/types");
var import_EndpointParameters = require("./endpoint/EndpointParameters");

// src/models/models_0.ts


// src/models/STSServiceException.ts
var import_smithy_client = require("@smithy/smithy-client");
var _STSServiceException = class _STSServiceException extends import_smithy_client.ServiceException {
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _STSServiceException.prototype);
  }
};
__name(_STSServiceException, "STSServiceException");
var STSServiceException = _STSServiceException;

// src/models/models_0.ts
var _ExpiredTokenException = class _ExpiredTokenException extends STSServiceException {
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
  }
};
__name(_ExpiredTokenException, "ExpiredTokenException");
var ExpiredTokenException = _ExpiredTokenException;
var _MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts
    });
    this.name = "MalformedPolicyDocumentException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
  }
};
__name(_MalformedPolicyDocumentException, "MalformedPolicyDocumentException");
var MalformedPolicyDocumentException = _MalformedPolicyDocumentException;
var _PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "PackedPolicyTooLargeException",
      $fault: "client",
      ...opts
    });
    this.name = "PackedPolicyTooLargeException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
  }
};
__name(_PackedPolicyTooLargeException, "PackedPolicyTooLargeException");
var PackedPolicyTooLargeException = _PackedPolicyTooLargeException;
var _RegionDisabledException = class _RegionDisabledException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "RegionDisabledException",
      $fault: "client",
      ...opts
    });
    this.name = "RegionDisabledException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _RegionDisabledException.prototype);
  }
};
__name(_RegionDisabledException, "RegionDisabledException");
var RegionDisabledException = _RegionDisabledException;
var _IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "IDPRejectedClaimException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPRejectedClaimException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
  }
};
__name(_IDPRejectedClaimException, "IDPRejectedClaimException");
var IDPRejectedClaimException = _IDPRejectedClaimException;
var _InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidIdentityTokenException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidIdentityTokenException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
  }
};
__name(_InvalidIdentityTokenException, "InvalidIdentityTokenException");
var InvalidIdentityTokenException = _InvalidIdentityTokenException;
var _IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "IDPCommunicationErrorException",
      $fault: "client",
      ...opts
    });
    this.name = "IDPCommunicationErrorException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
  }
};
__name(_IDPCommunicationErrorException, "IDPCommunicationErrorException");
var IDPCommunicationErrorException = _IDPCommunicationErrorException;
var _InvalidAuthorizationMessageException = class _InvalidAuthorizationMessageException extends STSServiceException {
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InvalidAuthorizationMessageException",
      $fault: "client",
      ...opts
    });
    this.name = "InvalidAuthorizationMessageException";
    this.$fault = "client";
    Object.setPrototypeOf(this, _InvalidAuthorizationMessageException.prototype);
  }
};
__name(_InvalidAuthorizationMessageException, "InvalidAuthorizationMessageException");
var InvalidAuthorizationMessageException = _InvalidAuthorizationMessageException;
var CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SecretAccessKey && { SecretAccessKey: import_smithy_client.SENSITIVE_STRING }
}), "CredentialsFilterSensitiveLog");
var AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleResponseFilterSensitiveLog");
var AssumeRoleWithSAMLRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.SAMLAssertion && { SAMLAssertion: import_smithy_client.SENSITIVE_STRING }
}), "AssumeRoleWithSAMLRequestFilterSensitiveLog");
var AssumeRoleWithSAMLResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleWithSAMLResponseFilterSensitiveLog");
var AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.WebIdentityToken && { WebIdentityToken: import_smithy_client.SENSITIVE_STRING }
}), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
var AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");
var GetFederationTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "GetFederationTokenResponseFilterSensitiveLog");
var GetSessionTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
}), "GetSessionTokenResponseFilterSensitiveLog");

// src/protocols/Aws_query.ts
var import_protocol_http = require("@smithy/protocol-http");

var import_fast_xml_parser = require("fast-xml-parser");
var se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleRequest(input, context),
    [_A]: _AR,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_AssumeRoleCommand");
var se_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithSAMLRequest(input, context),
    [_A]: _ARWSAML,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_AssumeRoleWithSAMLCommand");
var se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithWebIdentityRequest(input, context),
    [_A]: _ARWWI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_AssumeRoleWithWebIdentityCommand");
var se_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DecodeAuthorizationMessageRequest(input, context),
    [_A]: _DAM,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_DecodeAuthorizationMessageCommand");
var se_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetAccessKeyInfoRequest(input, context),
    [_A]: _GAKI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetAccessKeyInfoCommand");
var se_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetCallerIdentityRequest(input, context),
    [_A]: _GCI,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetCallerIdentityCommand");
var se_GetFederationTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetFederationTokenRequest(input, context),
    [_A]: _GFT,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetFederationTokenCommand");
var se_GetSessionTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_GetSessionTokenRequest(input, context),
    [_A]: _GST,
    [_V]: _
  });
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
}, "se_GetSessionTokenCommand");
var de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleCommand");
var de_AssumeRoleWithSAMLCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleWithSAMLCommand");
var de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_AssumeRoleWithWebIdentityCommand");
var de_DecodeAuthorizationMessageCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_DecodeAuthorizationMessageCommand");
var de_GetAccessKeyInfoCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetAccessKeyInfoCommand");
var de_GetCallerIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetCallerIdentityCommand");
var de_GetFederationTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetFederationTokenCommand");
var de_GetSessionTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents
  };
  return response;
}, "de_GetSessionTokenCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseErrorBody(output.body, context)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    case "IDPCommunicationError":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
    case "InvalidAuthorizationMessageException":
    case "com.amazonaws.sts#InvalidAuthorizationMessageException":
      throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_CommandError");
var de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_ExpiredTokenException(body.Error, context);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_ExpiredTokenExceptionRes");
var de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPCommunicationErrorException(body.Error, context);
  const exception = new IDPCommunicationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_IDPCommunicationErrorExceptionRes");
var de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_IDPRejectedClaimException(body.Error, context);
  const exception = new IDPRejectedClaimException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_IDPRejectedClaimExceptionRes");
var de_InvalidAuthorizationMessageExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
  const exception = new InvalidAuthorizationMessageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidAuthorizationMessageExceptionRes");
var de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidIdentityTokenException(body.Error, context);
  const exception = new InvalidIdentityTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_InvalidIdentityTokenExceptionRes");
var de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_MalformedPolicyDocumentExceptionRes");
var de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
  const exception = new PackedPolicyTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_PackedPolicyTooLargeExceptionRes");
var de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = de_RegionDisabledException(body.Error, context);
  const exception = new RegionDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  });
  return (0, import_smithy_client.decorateServiceException)(exception, body);
}, "de_RegionDisabledExceptionRes");
var se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
  var _a2, _b, _c, _d;
  const entries = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (((_b = input[_T]) == null ? void 0 : _b.length) === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TTK] != null) {
    const memberEntries = se_tagKeyListType(input[_TTK], context);
    if (((_c = input[_TTK]) == null ? void 0 : _c.length) === 0) {
      entries.TransitiveTagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_PC] != null) {
    const memberEntries = se_ProvidedContextsListType(input[_PC], context);
    if (((_d = input[_PC]) == null ? void 0 : _d.length) === 0) {
      entries.ProvidedContexts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProvidedContexts.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_AssumeRoleRequest");
var se_AssumeRoleWithSAMLRequest = /* @__PURE__ */ __name((input, context) => {
  var _a2;
  const entries = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_PAr] != null) {
    entries[_PAr] = input[_PAr];
  }
  if (input[_SAMLA] != null) {
    entries[_SAMLA] = input[_SAMLA];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  return entries;
}, "se_AssumeRoleWithSAMLRequest");
var se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  var _a2;
  const entries = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_WIT] != null) {
    entries[_WIT] = input[_WIT];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  return entries;
}, "se_AssumeRoleWithWebIdentityRequest");
var se_DecodeAuthorizationMessageRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_EM] != null) {
    entries[_EM] = input[_EM];
  }
  return entries;
}, "se_DecodeAuthorizationMessageRequest");
var se_GetAccessKeyInfoRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_AKI] != null) {
    entries[_AKI] = input[_AKI];
  }
  return entries;
}, "se_GetAccessKeyInfoRequest");
var se_GetCallerIdentityRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  return entries;
}, "se_GetCallerIdentityRequest");
var se_GetFederationTokenRequest = /* @__PURE__ */ __name((input, context) => {
  var _a2, _b;
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (((_a2 = input[_PA]) == null ? void 0 : _a2.length) === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (((_b = input[_T]) == null ? void 0 : _b.length) === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_GetFederationTokenRequest");
var se_GetSessionTokenRequest = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  return entries;
}, "se_GetSessionTokenRequest");
var se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PolicyDescriptorType(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_policyDescriptorListType");
var se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_a] != null) {
    entries[_a] = input[_a];
  }
  return entries;
}, "se_PolicyDescriptorType");
var se_ProvidedContext = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_PAro] != null) {
    entries[_PAro] = input[_PAro];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
}, "se_ProvidedContext");
var se_ProvidedContextsListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ProvidedContext(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_ProvidedContextsListType");
var se_Tag = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
}, "se_Tag");
var se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_tagKeyListType");
var se_tagListType = /* @__PURE__ */ __name((input, context) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_tagListType");
var de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_ARI] != null) {
    contents[_ARI] = (0, import_smithy_client.expectString)(output[_ARI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
  }
  return contents;
}, "de_AssumedRoleUser");
var de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_ARU] != null) {
    contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
  }
  if (output[_SI] != null) {
    contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
  }
  return contents;
}, "de_AssumeRoleResponse");
var de_AssumeRoleWithSAMLResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_ARU] != null) {
    contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
  }
  if (output[_S] != null) {
    contents[_S] = (0, import_smithy_client.expectString)(output[_S]);
  }
  if (output[_ST] != null) {
    contents[_ST] = (0, import_smithy_client.expectString)(output[_ST]);
  }
  if (output[_I] != null) {
    contents[_I] = (0, import_smithy_client.expectString)(output[_I]);
  }
  if (output[_Au] != null) {
    contents[_Au] = (0, import_smithy_client.expectString)(output[_Au]);
  }
  if (output[_NQ] != null) {
    contents[_NQ] = (0, import_smithy_client.expectString)(output[_NQ]);
  }
  if (output[_SI] != null) {
    contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
  }
  return contents;
}, "de_AssumeRoleWithSAMLResponse");
var de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_SFWIT] != null) {
    contents[_SFWIT] = (0, import_smithy_client.expectString)(output[_SFWIT]);
  }
  if (output[_ARU] != null) {
    contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = (0, import_smithy_client.expectString)(output[_Pr]);
  }
  if (output[_Au] != null) {
    contents[_Au] = (0, import_smithy_client.expectString)(output[_Au]);
  }
  if (output[_SI] != null) {
    contents[_SI] = (0, import_smithy_client.expectString)(output[_SI]);
  }
  return contents;
}, "de_AssumeRoleWithWebIdentityResponse");
var de_Credentials = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_AKI] != null) {
    contents[_AKI] = (0, import_smithy_client.expectString)(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = (0, import_smithy_client.expectString)(output[_SAK]);
  }
  if (output[_STe] != null) {
    contents[_STe] = (0, import_smithy_client.expectString)(output[_STe]);
  }
  if (output[_E] != null) {
    contents[_E] = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(output[_E]));
  }
  return contents;
}, "de_Credentials");
var de_DecodeAuthorizationMessageResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_DM] != null) {
    contents[_DM] = (0, import_smithy_client.expectString)(output[_DM]);
  }
  return contents;
}, "de_DecodeAuthorizationMessageResponse");
var de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_ExpiredTokenException");
var de_FederatedUser = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_FUI] != null) {
    contents[_FUI] = (0, import_smithy_client.expectString)(output[_FUI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
  }
  return contents;
}, "de_FederatedUser");
var de_GetAccessKeyInfoResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_Ac] != null) {
    contents[_Ac] = (0, import_smithy_client.expectString)(output[_Ac]);
  }
  return contents;
}, "de_GetAccessKeyInfoResponse");
var de_GetCallerIdentityResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_UI] != null) {
    contents[_UI] = (0, import_smithy_client.expectString)(output[_UI]);
  }
  if (output[_Ac] != null) {
    contents[_Ac] = (0, import_smithy_client.expectString)(output[_Ac]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = (0, import_smithy_client.expectString)(output[_Ar]);
  }
  return contents;
}, "de_GetCallerIdentityResponse");
var de_GetFederationTokenResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_FU] != null) {
    contents[_FU] = de_FederatedUser(output[_FU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = (0, import_smithy_client.strictParseInt32)(output[_PPS]);
  }
  return contents;
}, "de_GetFederationTokenResponse");
var de_GetSessionTokenResponse = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  return contents;
}, "de_GetSessionTokenResponse");
var de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_IDPCommunicationErrorException");
var de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_IDPRejectedClaimException");
var de_InvalidAuthorizationMessageException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidAuthorizationMessageException");
var de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_InvalidIdentityTokenException");
var de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_MalformedPolicyDocumentException");
var de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_PackedPolicyTooLargeException");
var de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
  const contents = {};
  if (output[_m] != null) {
    contents[_m] = (0, import_smithy_client.expectString)(output[_m]);
  }
  return contents;
}, "de_RegionDisabledException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var collectBodyString = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
var throwDefaultError = (0, import_smithy_client.withBaseException)(STSServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new import_protocol_http.HttpRequest(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS = {
  "content-type": "application/x-www-form-urlencoded"
};
var _ = "2011-06-15";
var _A = "Action";
var _AKI = "AccessKeyId";
var _AR = "AssumeRole";
var _ARI = "AssumedRoleId";
var _ARU = "AssumedRoleUser";
var _ARWSAML = "AssumeRoleWithSAML";
var _ARWWI = "AssumeRoleWithWebIdentity";
var _Ac = "Account";
var _Ar = "Arn";
var _Au = "Audience";
var _C = "Credentials";
var _CA = "ContextAssertion";
var _DAM = "DecodeAuthorizationMessage";
var _DM = "DecodedMessage";
var _DS = "DurationSeconds";
var _E = "Expiration";
var _EI = "ExternalId";
var _EM = "EncodedMessage";
var _FU = "FederatedUser";
var _FUI = "FederatedUserId";
var _GAKI = "GetAccessKeyInfo";
var _GCI = "GetCallerIdentity";
var _GFT = "GetFederationToken";
var _GST = "GetSessionToken";
var _I = "Issuer";
var _K = "Key";
var _N = "Name";
var _NQ = "NameQualifier";
var _P = "Policy";
var _PA = "PolicyArns";
var _PAr = "PrincipalArn";
var _PAro = "ProviderArn";
var _PC = "ProvidedContexts";
var _PI = "ProviderId";
var _PPS = "PackedPolicySize";
var _Pr = "Provider";
var _RA = "RoleArn";
var _RSN = "RoleSessionName";
var _S = "Subject";
var _SAK = "SecretAccessKey";
var _SAMLA = "SAMLAssertion";
var _SFWIT = "SubjectFromWebIdentityToken";
var _SI = "SourceIdentity";
var _SN = "SerialNumber";
var _ST = "SubjectType";
var _STe = "SessionToken";
var _T = "Tags";
var _TC = "TokenCode";
var _TTK = "TransitiveTagKeys";
var _UI = "UserId";
var _V = "Version";
var _Va = "Value";
var _WIT = "WebIdentityToken";
var _a = "arn";
var _m = "message";
var parseBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    const parser = new import_fast_xml_parser.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: (_2, val) => val.trim() === "" && val.includes("\n") ? "" : void 0
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    const parsedObj = parser.parse(encoded);
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return (0, import_smithy_client.getValueFromTextNode)(parsedObjToReturn);
  }
  return {};
}), "parseBody");
var parseErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseErrorBody");
var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client.extendedEncodeURIComponent)(value)).join("&"), "buildFormUrlencodedString");
var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
  var _a2;
  if (((_a2 = data.Error) == null ? void 0 : _a2.Code) !== void 0) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadQueryErrorCode");

// src/commands/AssumeRoleCommand.ts
var _AssumeRoleCommand = class _AssumeRoleCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
};
__name(_AssumeRoleCommand, "AssumeRoleCommand");
var AssumeRoleCommand = _AssumeRoleCommand;

// src/commands/AssumeRoleWithSAMLCommand.ts




var import_EndpointParameters2 = require("./endpoint/EndpointParameters");
var _AssumeRoleWithSAMLCommand = class _AssumeRoleWithSAMLCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters2.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog).ser(se_AssumeRoleWithSAMLCommand).de(de_AssumeRoleWithSAMLCommand).build() {
};
__name(_AssumeRoleWithSAMLCommand, "AssumeRoleWithSAMLCommand");
var AssumeRoleWithSAMLCommand = _AssumeRoleWithSAMLCommand;

// src/commands/AssumeRoleWithWebIdentityCommand.ts




var import_EndpointParameters3 = require("./endpoint/EndpointParameters");
var _AssumeRoleWithWebIdentityCommand = class _AssumeRoleWithWebIdentityCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters3.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
};
__name(_AssumeRoleWithWebIdentityCommand, "AssumeRoleWithWebIdentityCommand");
var AssumeRoleWithWebIdentityCommand = _AssumeRoleWithWebIdentityCommand;

// src/commands/DecodeAuthorizationMessageCommand.ts




var import_EndpointParameters4 = require("./endpoint/EndpointParameters");
var _DecodeAuthorizationMessageCommand = class _DecodeAuthorizationMessageCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters4.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").f(void 0, void 0).ser(se_DecodeAuthorizationMessageCommand).de(de_DecodeAuthorizationMessageCommand).build() {
};
__name(_DecodeAuthorizationMessageCommand, "DecodeAuthorizationMessageCommand");
var DecodeAuthorizationMessageCommand = _DecodeAuthorizationMessageCommand;

// src/commands/GetAccessKeyInfoCommand.ts




var import_EndpointParameters5 = require("./endpoint/EndpointParameters");
var _GetAccessKeyInfoCommand = class _GetAccessKeyInfoCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters5.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").f(void 0, void 0).ser(se_GetAccessKeyInfoCommand).de(de_GetAccessKeyInfoCommand).build() {
};
__name(_GetAccessKeyInfoCommand, "GetAccessKeyInfoCommand");
var GetAccessKeyInfoCommand = _GetAccessKeyInfoCommand;

// src/commands/GetCallerIdentityCommand.ts




var import_EndpointParameters6 = require("./endpoint/EndpointParameters");
var _GetCallerIdentityCommand = class _GetCallerIdentityCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters6.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").f(void 0, void 0).ser(se_GetCallerIdentityCommand).de(de_GetCallerIdentityCommand).build() {
};
__name(_GetCallerIdentityCommand, "GetCallerIdentityCommand");
var GetCallerIdentityCommand = _GetCallerIdentityCommand;

// src/commands/GetFederationTokenCommand.ts




var import_EndpointParameters7 = require("./endpoint/EndpointParameters");
var _GetFederationTokenCommand = class _GetFederationTokenCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters7.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").f(void 0, GetFederationTokenResponseFilterSensitiveLog).ser(se_GetFederationTokenCommand).de(de_GetFederationTokenCommand).build() {
};
__name(_GetFederationTokenCommand, "GetFederationTokenCommand");
var GetFederationTokenCommand = _GetFederationTokenCommand;

// src/commands/GetSessionTokenCommand.ts




var import_EndpointParameters8 = require("./endpoint/EndpointParameters");
var _GetSessionTokenCommand = class _GetSessionTokenCommand extends import_smithy_client.Command.classBuilder().ep({
  ...import_EndpointParameters8.commonParams
}).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").f(void 0, GetSessionTokenResponseFilterSensitiveLog).ser(se_GetSessionTokenCommand).de(de_GetSessionTokenCommand).build() {
};
__name(_GetSessionTokenCommand, "GetSessionTokenCommand");
var GetSessionTokenCommand = _GetSessionTokenCommand;

// src/STS.ts
var import_STSClient = require("././STSClient");
var commands = {
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand
};
var _STS = class _STS extends import_STSClient.STSClient {
};
__name(_STS, "STS");
var STS = _STS;
(0, import_smithy_client.createAggregatedClient)(commands, STS);

// src/index.ts
var import_EndpointParameters9 = require("./endpoint/EndpointParameters");
var import_runtimeExtensions = require("././runtimeExtensions");
var import_util_endpoints = require("@aws-sdk/util-endpoints");

// src/defaultStsRoleAssumers.ts
var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
var resolveRegion = /* @__PURE__ */ __name(async (_region, _parentRegion, credentialProviderLogger) => {
  var _a2;
  const region = typeof _region === "function" ? await _region() : _region;
  const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
  (_a2 = credentialProviderLogger == null ? void 0 : credentialProviderLogger.debug) == null ? void 0 : _a2.call(
    credentialProviderLogger,
    "@aws-sdk/client-sts::resolveRegion",
    "accepting first of:",
    `${region} (provider)`,
    `${parentRegion} (parent client)`,
    `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`
  );
  return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
}, "resolveRegion");
var getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  let closureSourceCreds;
  return async (sourceCreds, params) => {
    var _a2, _b, _c;
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const {
        logger = (_a2 = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _a2.logger,
        region,
        requestHandler = (_b = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _b.requestHandler,
        credentialProviderLogger
      } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        (_c = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _c.region,
        credentialProviderLogger
      );
      stsClient = new stsClientCtor({
        // A hack to make sts client uses the credential in current closure.
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: resolvedRegion,
        requestHandler,
        logger
      });
    }
    const { Credentials: Credentials2 } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials2 || !Credentials2.AccessKeyId || !Credentials2.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials2.AccessKeyId,
      secretAccessKey: Credentials2.SecretAccessKey,
      sessionToken: Credentials2.SessionToken,
      expiration: Credentials2.Expiration,
      // TODO(credentialScope): access normally when shape is updated.
      credentialScope: Credentials2.CredentialScope
    };
  };
}, "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, stsClientCtor) => {
  let stsClient;
  return async (params) => {
    var _a2, _b, _c;
    if (!stsClient) {
      const {
        logger = (_a2 = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _a2.logger,
        region,
        requestHandler = (_b = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _b.requestHandler,
        credentialProviderLogger
      } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        (_c = stsOptions == null ? void 0 : stsOptions.parentClientConfig) == null ? void 0 : _c.region,
        credentialProviderLogger
      );
      stsClient = new stsClientCtor({
        region: resolvedRegion,
        requestHandler,
        logger
      });
    }
    const { Credentials: Credentials2 } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
    if (!Credentials2 || !Credentials2.AccessKeyId || !Credentials2.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials2.AccessKeyId,
      secretAccessKey: Credentials2.SecretAccessKey,
      sessionToken: Credentials2.SessionToken,
      expiration: Credentials2.Expiration,
      // TODO(credentialScope): access normally when shape is updated.
      credentialScope: Credentials2.CredentialScope
    };
  };
}, "getDefaultRoleAssumerWithWebIdentity");

// src/defaultRoleAssumers.ts
var import_STSClient2 = require("././STSClient");
var getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
  var _a2;
  if (!customizations)
    return baseCtor;
  else
    return _a2 = class extends baseCtor {
      constructor(config) {
        super(config);
        for (const customization of customizations) {
          this.middlewareStack.use(customization);
        }
      }
    }, __name(_a2, "CustomizableSTSClient"), _a2;
}, "getCustomizableStsClientCtor");
var getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(import_STSClient2.STSClient, stsPlugins)), "getDefaultRoleAssumer");
var getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(import_STSClient2.STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
var decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
  roleAssumer: getDefaultRoleAssumer2(input),
  roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
  ...input
}), "decorateDefaultCredentialProvider");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  STSServiceException,
  __Client,
  STSClient,
  STS,
  $Command,
  AssumeRoleCommand,
  AssumeRoleWithSAMLCommand,
  AssumeRoleWithWebIdentityCommand,
  DecodeAuthorizationMessageCommand,
  GetAccessKeyInfoCommand,
  GetCallerIdentityCommand,
  GetFederationTokenCommand,
  GetSessionTokenCommand,
  ExpiredTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  IDPRejectedClaimException,
  InvalidIdentityTokenException,
  IDPCommunicationErrorException,
  InvalidAuthorizationMessageException,
  CredentialsFilterSensitiveLog,
  AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithSAMLRequestFilterSensitiveLog,
  AssumeRoleWithSAMLResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  GetFederationTokenResponseFilterSensitiveLog,
  GetSessionTokenResponseFilterSensitiveLog,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
  decorateDefaultCredentialProvider
});

