import { decorateServiceException } from "./exceptions";
export const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
export const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
