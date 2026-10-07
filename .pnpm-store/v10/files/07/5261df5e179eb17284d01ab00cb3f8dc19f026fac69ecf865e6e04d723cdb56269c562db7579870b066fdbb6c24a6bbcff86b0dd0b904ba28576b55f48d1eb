const REQUEST_INTENTION_HEADER_NAME = "x-msw-intention";
var RequestIntention = /* @__PURE__ */ ((RequestIntention2) => {
  RequestIntention2["passthrough"] = "passthrough";
  return RequestIntention2;
})(RequestIntention || {});
function shouldBypassRequest(request) {
  return !!request.headers.get("accept")?.includes("msw/passthrough");
}
function isPassthroughResponse(response) {
  return response.status === 302 && response.headers.get(REQUEST_INTENTION_HEADER_NAME) === "passthrough" /* passthrough */;
}
function deleteRequestPassthroughHeader(request) {
  const acceptHeader = request.headers.get("accept");
  if (acceptHeader) {
    const nextAcceptHeader = acceptHeader.replace(/(,\s+)?msw\/passthrough/, "");
    if (nextAcceptHeader) {
      request.headers.set("accept", nextAcceptHeader);
    } else {
      request.headers.delete("accept");
    }
  }
}
export {
  REQUEST_INTENTION_HEADER_NAME,
  RequestIntention,
  deleteRequestPassthroughHeader,
  isPassthroughResponse,
  shouldBypassRequest
};
//# sourceMappingURL=request-utils.mjs.map