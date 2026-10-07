import { headersToObject } from 'headers-polyfill'
import { HttpResponse, http } from 'msw'

export type Post = {
  id: number
  title: string
  body: string
}

export const posts: Record<string, Post> = {
  1: { id: 1, title: 'hello', body: 'extra body!' },
}

export const handlers = [
  http.get(
    'https://example.com',
    async ({ request, params, cookies, requestId }) => {
      HttpResponse.json({ value: 'success' })
    },
  ),
  http.get(
    'https://example.com/echo',
    async ({ request, params, cookies, requestId }) => {
      return HttpResponse.json({
        ...request,
        params,
        cookies,
        requestId,
        url: new URL(request.url),
        headers: headersToObject(request.headers),
      })
    },
  ),

  http.post(
    'https://example.com/echo',
    async ({ request, cookies, params, requestId }) => {
      let body

      try {
        body =
          headersToObject(request.headers)['content-type'] === 'text/html'
            ? await request.text()
            : await request.json()
      } catch (err) {
        body = request.body
      }

      return HttpResponse.json({
        ...request,
        cookies,
        params,
        requestId,
        body,
        url: new URL(request.url),
        headers: headersToObject(request.headers),
      })
    },
  ),

  http.get('https://example.com/success', () =>
    HttpResponse.json({ value: 'success' }),
  ),

  http.post('https://example.com/success', () =>
    HttpResponse.json({ value: 'success' }),
  ),

  http.get('https://example.com/empty', () => new HttpResponse('')),

  http.get('https://example.com/error', () =>
    HttpResponse.json({ value: 'error' }, { status: 500 }),
  ),

  http.post('https://example.com/error', () =>
    HttpResponse.json({ value: 'error' }, { status: 500 }),
  ),

  http.get('https://example.com/nonstandard-error', () =>
    HttpResponse.json(
      {
        success: false,
        message: 'This returns a 200 but is really an error',
      },
      { status: 200 },
    ),
  ),

  http.get('https://example.com/mirror', ({ params }) =>
    HttpResponse.json(params),
  ),

  http.post('https://example.com/mirror', ({ params }) =>
    HttpResponse.json(params),
  ),

  http.get('https://example.com/posts/random', () => {
    // just simulate an api that returned a random ID
    const { id } = posts[1]
    return HttpResponse.json({ id })
  }),

  http.get<{ id: string }, any, Pick<Post, 'id'>>(
    'https://example.com/post/:id',
    ({ params }) => HttpResponse.json(posts[params.id]),
  ),
]
