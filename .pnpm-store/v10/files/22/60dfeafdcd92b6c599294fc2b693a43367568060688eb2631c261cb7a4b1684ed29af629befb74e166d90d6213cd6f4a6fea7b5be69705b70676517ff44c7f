"use strict";

exports.__esModule = true;
exports.ProgramStatus = exports.HTTP_STATUS_CODE = void 0;
let ProgramStatus;
exports.ProgramStatus = ProgramStatus;
(function (ProgramStatus) {
  ProgramStatus["BOOTSTRAP_FINISHED"] = "BOOTSTRAP_FINISHED";
  ProgramStatus["BOOTSTRAP_QUERY_RUNNING_FINISHED"] = "BOOTSTRAP_QUERY_RUNNING_FINISHED";
})(ProgramStatus || (exports.ProgramStatus = ProgramStatus = {}));
const HTTP_STATUS_CODE = {
  /**
   * The server has received the request headers and the client should proceed to send the request body
   * (in the case of a request for which a body needs to be sent; for example, a POST request).
   * Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient.
   * To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request
   * and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.
   */
  CONTINUE_100: 100,
  /**
   * The requester has asked the server to switch protocols and the server has agreed to do so.
   */
  SWITCHING_PROTOCOLS_101: 101,
  /**
   * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request.
   * This code indicates that the server has received and is processing the request, but no response is available yet.
   * This prevents the client from timing out and assuming the request was lost.
   */
  PROCESSING_102: 102,
  /**
   * Standard response for successful HTTP requests.
   * The actual response will depend on the request method used.
   * In a GET request, the response will contain an entity corresponding to the requested resource.
   * In a POST request, the response will contain an entity describing or containing the result of the action.
   */
  OK_200: 200,
  /**
   * The request has been fulfilled, resulting in the creation of a new resource.
   */
  CREATED_201: 201,
  /**
   * The request has been accepted for processing, but the processing has not been completed.
   * The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
   */
  ACCEPTED_202: 202,
  /**
   * SINCE HTTP/1.1
   * The server is a transforming proxy that received a 200 OK from its origin,
   * but is returning a modified version of the origin's response.
   */
  NON_AUTHORITATIVE_INFORMATION_203: 203,
  /**
   * The server successfully processed the request and is not returning any content.
   */
  NO_CONTENT_204: 204,
  /**
   * The server successfully processed the request, but is not returning any content.
   * Unlike a 204 response, this response requires that the requester reset the document view.
   */
  RESET_CONTENT_205: 205,
  /**
   * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
   * The range header is used by HTTP clients to enable resuming of interrupted downloads,
   * or split a download into multiple simultaneous streams.
   */
  PARTIAL_CONTENT_206: 206,
  /**
   * The message body that follows is an XML message and can contain a number of separate response codes,
   * depending on how many sub-requests were made.
   */
  MULTI_STATUS_207: 207,
  /**
   * The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response,
   * and are not being included again.
   */
  ALREADY_REPORTED_208: 208,
  /**
   * The server has fulfilled a request for the resource,
   * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   */
  IM_USED_226: 226,
  /**
   * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).
   * For example, this code could be used to present multiple video format options,
   * to list files with different filename extensions, or to suggest word-sense disambiguation.
   */
  MULTIPLE_CHOICES_300: 300,
  /**
   * This and all future requests should be directed to the given URI.
   */
  MOVED_PERMANENTLY_301: 301,
  /**
   * This is an example of industry practice contradicting the standard.
   * The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
   * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
   * with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
   * to distinguish between the two behaviours. However, some Web applications and frameworks
   * use the 302 status code as if it were the 303.
   */
  FOUND_302: 302,
  /**
   * SINCE HTTP/1.1
   * The response to the request can be found under another URI using a GET method.
   * When received in response to a POST (or PUT/DELETE), the client should presume that
   * the server has received the data and should issue a redirect with a separate GET message.
   */
  SEE_OTHER_303: 303,
  /**
   * Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
   * In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
   */
  NOT_MODIFIED_304: 304,
  /**
   * SINCE HTTP/1.1
   * The requested resource is available only through a proxy, the address for which is provided in the response.
   * Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.
   */
  USE_PROXY_305: 305,
  /**
   * No longer used. Originally meant "Subsequent requests should use the specified proxy."
   */
  SWITCH_PROXY_306: 306,
  /**
   * SINCE HTTP/1.1
   * In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
   * In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request.
   * For example, a POST request should be repeated using another POST request.
   */
  TEMPORARY_REDIRECT_307: 307,
  /**
   * The request and all future requests should be repeated using another URI.
   * 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
   * So, for example, submitting a form to a permanently redirected resource may continue smoothly.
   */
  PERMANENT_REDIRECT_308: 308,
  /**
   * The server cannot or will not process the request due to an apparent client error
   * (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
   */
  BAD_REQUEST_400: 400,
  /**
   * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
   * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
   * requested resource. See Basic access authentication and Digest access authentication. 401 semantically means
   * "unauthenticated",i.e. the user does not have the necessary credentials.
   */
  UNAUTHORIZED_401: 401,
  /**
   * Reserved for future use. The original intention was that this code might be used as part of some form of digital
   * cash or micro payment scheme, but that has not happened, and this code is not usually used.
   * Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.
   */
  PAYMENT_REQUIRED_402: 402,
  /**
   * The request was valid, but the server is refusing action.
   * The user might not have the necessary permissions for a resource.
   */
  FORBIDDEN_403: 403,
  /**
   * The requested resource could not be found but may be available in the future.
   * Subsequent requests by the client are permissible.
   */
  NOT_FOUND_404: 404,
  /**
   * A request method is not supported for the requested resource;
   * for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
   */
  METHOD_NOT_ALLOWED_405: 405,
  /**
   * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
   */
  NOT_ACCEPTABLE_406: 406,
  /**
   * The client must first authenticate itself with the proxy.
   */
  PROXY_AUTHENTICATION_REQUIRED_407: 407,
  /**
   * The server timed out waiting for the request.
   * According to HTTP specifications:
   * "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."
   */
  REQUEST_TIMEOUT_408: 408,
  /**
   * Indicates that the request could not be processed because of conflict in the request,
   * such as an edit conflict between multiple simultaneous updates.
   */
  CONFLICT_409: 409,
  /**
   * Indicates that the resource requested is no longer available and will not be available again.
   * This should be used when a resource has been intentionally removed and the resource should be purged.
   * Upon receiving a 410 status code, the client should not request the resource in the future.
   * Clients such as search engines should remove the resource from their indices.
   * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
   */
  GONE_410: 410,
  /**
   * The request did not specify the length of its content, which is required by the requested resource.
   */
  LENGTH_REQUIRED_411: 411,
  /**
   * The server does not meet one of the preconditions that the requester put on the request.
   */
  PRECONDITION_FAILED_412: 412,
  /**
   * The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
   */
  PAYLOAD_TOO_LARGE_413: 413,
  /**
   * The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request,
   * in which case it should be converted to a POST request.
   * Called "Request-URI Too Long" previously.
   */
  URI_TOO_LONG_414: 414,
  /**
   * The request entity has a media type which the server or resource does not support.
   * For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
   */
  UNSUPPORTED_MEDIA_TYPE_415: 415,
  /**
   * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
   * For example, if the client asked for a part of the file that lies beyond the end of the file.
   * Called "Requested Range Not Satisfiable" previously.
   */
  RANGE_NOT_SATISFIABLE_416: 416,
  /**
   * The server cannot meet the requirements of the Expect request-header field.
   */
  EXPECTATION_FAILED_417: 417,
  /**
   * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
   * and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by
   * teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
   */
  I_AM_A_TEAPOT_418: 418,
  /**
   * The request was directed at a server that is not able to produce a response (for example because a connection reuse).
   */
  MISDIRECTED_REQUEST_421: 421,
  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  UNPROCESSABLE_ENTITY_422: 422,
  /**
   * The resource that is being accessed is locked.
   */
  LOCKED_423: 423,
  /**
   * The request failed due to failure of a previous request (e.g., a PROPPATCH).
   */
  FAILED_DEPENDENCY_424: 424,
  /**
   * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
   */
  UPGRADE_REQUIRED_426: 426,
  /**
   * The origin server requires the request to be conditional.
   * Intended to prevent "the 'lost update' problem, where a client
   * GETs a resource's state, modifies it, and PUTs it back to the server,
   * when meanwhile a third party has modified the state on the server, leading to a conflict."
   */
  PRECONDITION_REQUIRED_428: 428,
  /**
   * The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
   */
  TOO_MANY_REQUESTS_429: 429,
  /**
   * The server is unwilling to process the request because either an individual header field,
   * or all the header fields collectively, are too large.
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE_431: 431,
  /**
   * A server operator has received a legal demand to deny access to a resource or to a set of resources
   * that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.
   */
  UNAVAILABLE_FOR_LEGAL_REASONS_451: 451,
  /**
   * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
   */
  INTERNAL_SERVER_ERROR_500: 500,
  /**
   * The server either does not recognize the request method, or it lacks the ability to fulfill the request.
   * Usually this implies future availability (e.g., a new feature of a web-service API).
   */
  NOT_IMPLEMENTED_501: 501,
  /**
   * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
   */
  BAD_GATEWAY_502: 502,
  /**
   * The server is currently unavailable (because it is overloaded or down for maintenance).
   * Generally, this is a temporary state.
   */
  SERVICE_UNAVAILABLE_503: 503,
  /**
   * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
   */
  GATEWAY_TIMEOUT_504: 504,
  /**
   * The server does not support the HTTP protocol version used in the request
   */
  HTTP_VERSION_NOT_SUPPORTED_505: 505,
  /**
   * Transparent content negotiation for the request results in a circular reference.
   */
  VARIANT_ALSO_NEGOTIATES_506: 506,
  /**
   * The server is unable to store the representation needed to complete the request.
   */
  INSUFFICIENT_STORAGE_507: 507,
  /**
   * The server detected an infinite loop while processing the request.
   */
  LOOP_DETECTED_508: 508,
  /**
   * Further extensions to the request are required for the server to fulfill it.
   */
  NOT_EXTENDED_510: 510,
  /**
   * The client needs to authenticate to gain network access.
   * Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used
   * to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
   */
  NETWORK_AUTHENTICATION_REQUIRED_511: 511
};
exports.HTTP_STATUS_CODE = HTTP_STATUS_CODE;
//# sourceMappingURL=types.js.map