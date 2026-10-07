import { invariant } from "outvariant";
function bypass(input, init) {
  const request = new Request(
    // If given a Request instance, clone it not to exhaust
    // the original request's body.
    input instanceof Request ? input.clone() : input,
    init
  );
  invariant(
    !request.bodyUsed,
    'Failed to create a bypassed request to "%s %s": given request instance already has its body read. Make sure to clone the intercepted request if you wish to read its body before bypassing it.',
    request.method,
    request.url
  );
  const requestClone = request.clone();
  requestClone.headers.append("accept", "msw/passthrough");
  return requestClone;
}
export {
  bypass
};
//# sourceMappingURL=bypass.mjs.map