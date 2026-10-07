declare const REQUEST_INTENTION_HEADER_NAME = "x-msw-intention";
declare enum RequestIntention {
    passthrough = "passthrough"
}
declare function shouldBypassRequest(request: Request): boolean;
declare function isPassthroughResponse(response: Response): boolean;
/**
 * Remove the internal passthrough instruction from the request's `Accept` header.
 */
declare function deleteRequestPassthroughHeader(request: Request): void;

export { REQUEST_INTENTION_HEADER_NAME, RequestIntention, deleteRequestPassthroughHeader, isPassthroughResponse, shouldBypassRequest };
