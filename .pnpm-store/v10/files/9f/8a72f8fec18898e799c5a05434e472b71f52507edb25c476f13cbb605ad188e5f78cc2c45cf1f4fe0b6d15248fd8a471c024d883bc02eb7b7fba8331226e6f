import statuses from '../../../shims/statuses.mjs';
const { message } = statuses;
const kSetCookie = Symbol("kSetCookie");
function normalizeResponseInit(init = {}) {
  const status = init?.status || 200;
  const statusText = init?.statusText || message[status] || "";
  const headers = new Headers(init?.headers);
  return {
    ...init,
    headers,
    status,
    statusText
  };
}
function decorateResponse(response, init) {
  if (init.type) {
    Object.defineProperty(response, "type", {
      value: init.type,
      enumerable: true,
      writable: false
    });
  }
  const responseCookies = init.headers.get("set-cookie");
  if (responseCookies) {
    Object.defineProperty(response, kSetCookie, {
      value: responseCookies,
      enumerable: false,
      writable: false
    });
  }
  return response;
}
function getRawSetCookie(response) {
  return Reflect.get(response, kSetCookie);
}
export {
  decorateResponse,
  getRawSetCookie,
  normalizeResponseInit
};
//# sourceMappingURL=decorators.mjs.map