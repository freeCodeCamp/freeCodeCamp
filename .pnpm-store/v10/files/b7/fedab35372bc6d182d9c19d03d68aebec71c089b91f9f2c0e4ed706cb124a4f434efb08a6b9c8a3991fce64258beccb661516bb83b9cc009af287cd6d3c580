import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectString as __expectString, parseEpochTimestamp as __parseEpochTimestamp, take, withBaseException, } from "@smithy/smithy-client";
import { CognitoIdentityServiceException as __BaseException } from "../models/CognitoIdentityServiceException";
import { ConcurrentModificationException, DeveloperUserAlreadyRegisteredException, ExternalServiceException, InternalErrorException, InvalidIdentityPoolConfigurationException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceConflictException, ResourceNotFoundException, TooManyRequestsException, } from "../models/models_0";
export const se_CreateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("CreateIdentityPool");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentities");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentityPool");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentityPool");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetCredentialsForIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetCredentialsForIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetIdCommand = async (input, context) => {
    const headers = sharedHeaders("GetId");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("GetIdentityPoolRoles");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetOpenIdTokenCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdToken");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdTokenForDeveloperIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("GetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentities");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListIdentityPoolsCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentityPools");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_LookupDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("LookupDeveloperIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_MergeDeveloperIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("MergeDeveloperIdentities");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("SetIdentityPoolRoles");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("SetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UnlinkDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkDeveloperIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UnlinkIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkIdentity");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateIdentityPool");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_CreateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DeleteIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DeleteIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_DescribeIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_IdentityDescription(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_DescribeIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetCredentialsForIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCredentialsForIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetOpenIdTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_GetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListIdentityPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_LookupDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_MergeDeveloperIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_SetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_SetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UnlinkDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UnlinkIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
export const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
export const de_UpdateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_DeveloperUserAlreadyRegisteredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new DeveloperUserAlreadyRegisteredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ExternalServiceExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ExternalServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InternalErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidIdentityPoolConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidIdentityPoolConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_Credentials = (output, context) => {
    return take(output, {
        AccessKeyId: __expectString,
        Expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        SecretKey: __expectString,
        SessionToken: __expectString,
    });
};
const de_GetCredentialsForIdentityResponse = (output, context) => {
    return take(output, {
        Credentials: (_) => de_Credentials(_, context),
        IdentityId: __expectString,
    });
};
const de_IdentitiesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_IdentityDescription(entry, context);
    });
    return retVal;
};
const de_IdentityDescription = (output, context) => {
    return take(output, {
        CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        IdentityId: __expectString,
        LastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Logins: _json,
    });
};
const de_ListIdentitiesResponse = (output, context) => {
    return take(output, {
        Identities: (_) => de_IdentitiesList(_, context),
        IdentityPoolId: __expectString,
        NextToken: __expectString,
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AWSCognitoIdentityService.${operation}`,
    };
}
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
