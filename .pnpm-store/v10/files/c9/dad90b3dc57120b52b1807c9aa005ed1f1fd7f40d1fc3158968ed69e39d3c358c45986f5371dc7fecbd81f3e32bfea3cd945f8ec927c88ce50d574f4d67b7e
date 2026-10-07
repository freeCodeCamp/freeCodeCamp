import { cookieStore } from '../cookieStore'
import { getRawSetCookie } from '../HttpResponse/decorators'

export async function storeResponseCookies(
  request: Request,
  response: Response,
): Promise<void> {
  // Grab the raw "Set-Cookie" response header provided
  // in the HeadersInit for this mocked response.
  const responseCookies = getRawSetCookie(response)

  if (responseCookies) {
    await cookieStore.setCookie(responseCookies, request.url)
  }
}
