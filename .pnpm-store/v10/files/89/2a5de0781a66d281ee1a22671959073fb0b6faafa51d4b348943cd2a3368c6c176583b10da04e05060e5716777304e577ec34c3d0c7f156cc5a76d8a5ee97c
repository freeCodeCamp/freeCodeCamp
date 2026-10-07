function getRequestOptions(request) {
  const hostWithPort = request.host || "";
  const portInHost = /^(.*):(\d+)$/.exec(hostWithPort);
  const hostname = portInHost ? portInHost[1] : hostWithPort;
  const port = request.port ?? (portInHost ? Number(portInHost[2]) : void 0);
  return {
    method: request.method,
    port,
    protocol: request.protocol,
    host: request.host,
    hostname,
    path: request.path,
    headers: request.getHeaders()
  };
}
function getRequestUrl(requestOptions) {
  return String(getRequestUrlObject(requestOptions));
}
function getRequestUrlObject(requestOptions) {
  const protocol = requestOptions.protocol || "http:";
  const hostHeader = requestOptions.headers?.host && String(requestOptions.headers?.host);
  const hostname = hostHeader || requestOptions.hostname || requestOptions.host || "";
  const port = !requestOptions.port || requestOptions.port === 80 || requestOptions.port === 443 || /^(.*):(\d+)$/.test(hostname) ? "" : `:${requestOptions.port}`;
  const path = requestOptions.path ? requestOptions.path : "/";
  return new URL(path, `${protocol}//${hostname}${port}`);
}
function getRequestUrlFromClientRequest(request) {
  return String(getRequestUrl(getRequestOptions(request)));
}

export { getRequestOptions, getRequestUrl, getRequestUrlFromClientRequest, getRequestUrlObject };
//# sourceMappingURL=get-request-url.js.map
