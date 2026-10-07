import { cookieStore } from '../cookieStore.mjs';
import { getRawSetCookie } from '../HttpResponse/decorators.mjs';
async function storeResponseCookies(request, response) {
  const responseCookies = getRawSetCookie(response);
  if (responseCookies) {
    await cookieStore.setCookie(responseCookies, request.url);
  }
}
export {
  storeResponseCookies
};
//# sourceMappingURL=storeResponseCookies.mjs.map