Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticAttributes = require('../../semanticAttributes.js');
const url = require('../../utils/url.js');
const getRequestUrl = require('./get-request-url.js');

function getOutgoingRequestSpanData(request) {
  const url$1 = getRequestUrl.getRequestUrlFromClientRequest(request);
  const [name, attributes] = url.getHttpSpanDetailsFromUrlObject(
    url.parseStringToURLObject(url$1),
    "client",
    "auto.http.client",
    request
  );
  const userAgent = request.getHeader("user-agent");
  return {
    name,
    attributes: {
      // TODO(v11): Update these to the Sentry semantic attributes for urls.
      // https://getsentry.github.io/sentry-conventions/attributes/
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
      "otel.kind": "CLIENT",
      "http.url": url$1,
      "http.method": request.method,
      "http.target": request.path || "/",
      "net.peer.name": request.host,
      "http.host": request.getHeader("host"),
      ...userAgent ? { "user_agent.original": userAgent } : {},
      ...attributes
    },
    onlyIfParent: true
  };
}
function setIncomingResponseSpanData(response, span) {
  const { statusCode, statusMessage, httpVersion, socket } = response;
  const transport = httpVersion?.toUpperCase() !== "QUIC" ? "ip_tcp" : "ip_udp";
  span.setAttributes({
    "http.response.status_code": statusCode,
    "network.protocol.version": httpVersion,
    // TODO(v11): Update these to the Sentry semantic attributes for urls.
    // https://getsentry.github.io/sentry-conventions/attributes/
    "http.flavor": httpVersion,
    "network.transport": transport,
    "net.transport": transport,
    "http.status_text": statusMessage?.toUpperCase(),
    "http.status_code": statusCode,
    ...getResponseContentLengthAttributes(response),
    ...getSocketAttrs(socket)
  });
}
function getSocketAttrs(socket) {
  if (!socket) return {};
  const { remoteAddress, remotePort } = socket;
  return {
    "network.peer.address": remoteAddress,
    "network.peer.port": remotePort,
    "net.peer.ip": remoteAddress,
    "net.peer.port": remotePort
  };
}
function getResponseContentLengthAttributes(response) {
  const { headers } = response;
  const contentLengthHeader = headers["content-length"];
  const length = contentLengthHeader ? parseInt(String(contentLengthHeader), 10) : -1;
  const encoding = headers["content-encoding"];
  return length >= 0 ? encoding && encoding !== "identity" ? { "http.response_content_length": length } : { "http.response_content_length_uncompressed": length } : {};
}

exports.getOutgoingRequestSpanData = getOutgoingRequestSpanData;
exports.setIncomingResponseSpanData = setIncomingResponseSpanData;
//# sourceMappingURL=get-outgoing-span-data.js.map
