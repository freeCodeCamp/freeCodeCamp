import { requestBuilder as rb } from "@smithy/core";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectObject as __expectObject, expectString as __expectString, map, take, withBaseException, } from "@smithy/smithy-client";
import { AccessDeniedException, AuthorizationPendingException, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidClientMetadataException, InvalidGrantException, InvalidRequestException, InvalidRequestRegionException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException, } from "../models/models_0";
import { SSOOIDCServiceException as __BaseException } from "../models/SSOOIDCServiceException";
export const se_CreateTokenCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    let body;
    body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => _json(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_CreateTokenWithIAMCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    const query = map({
        [_ai]: [, "t"],
    });
    let body;
    body = JSON.stringify(take(input, {
        assertion: [],
        clientId: [],
        code: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: (_) => _json(_),
        subjectToken: [],
        subjectTokenType: [],
    }));
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
export const se_RegisterClientCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/client/register");
    let body;
    body = JSON.stringify(take(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => _json(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const se_StartDeviceAuthorizationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/device_authorization");
    let body;
    body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
export const de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        accessToken: __expectString,
        expiresIn: __expectInt32,
        idToken: __expectString,
        refreshToken: __expectString,
        tokenType: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_CreateTokenWithIAMCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        accessToken: __expectString,
        expiresIn: __expectInt32,
        idToken: __expectString,
        issuedTokenType: __expectString,
        refreshToken: __expectString,
        scope: _json,
        tokenType: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        authorizationEndpoint: __expectString,
        clientId: __expectString,
        clientIdIssuedAt: __expectLong,
        clientSecret: __expectString,
        clientSecretExpiresAt: __expectLong,
        tokenEndpoint: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
export const de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        deviceCode: __expectString,
        expiresIn: __expectInt32,
        interval: __expectInt32,
        userCode: __expectString,
        verificationUri: __expectString,
        verificationUriComplete: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
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
                errorCode,
            });
    }
};
const throwDefaultError = withBaseException(__BaseException);
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRequestRegionExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        endpoint: __expectString,
        error: __expectString,
        error_description: __expectString,
        region: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestRegionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: __expectString,
        error_description: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _ai = "aws_iam";
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
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
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
