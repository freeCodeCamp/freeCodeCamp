import {
  deleteRequestPassthroughHeader,
  isPassthroughResponse,
  REQUEST_INTENTION_HEADER_NAME,
  RequestIntention,
  shouldBypassRequest,
} from './request-utils'

describe(shouldBypassRequest, () => {
  it('returns true for a request with bypass header', () => {
    expect(
      shouldBypassRequest(
        new Request('http://example.com', {
          headers: {
            accept: 'msw/passthrough',
          },
        }),
      ),
    ).toBe(true)
  })

  it('returns false for a regular request', () => {
    expect(shouldBypassRequest(new Request('http://example.com'))).toBe(false)
  })
})

describe(isPassthroughResponse, () => {
  it('returns true for a passthrough response', () => {
    expect(
      isPassthroughResponse(
        new Response(null, {
          status: 302,
          headers: {
            [REQUEST_INTENTION_HEADER_NAME]: RequestIntention.passthrough,
          },
        }),
      ),
    ).toBe(true)
  })

  it('returns false for a regular response', () => {
    expect(isPassthroughResponse(new Response(null))).toBe(false)
    expect(isPassthroughResponse(new Response(null, { status: 302 }))).toBe(
      false,
    )
  })
})

describe(deleteRequestPassthroughHeader, () => {
  it('removes the bypass header from the request', () => {
    const request = new Request('http://example.com', {
      headers: {
        accept: 'msw/passthrough',
      },
    })
    deleteRequestPassthroughHeader(request)
    expect(request.headers.get('accept')).toBeNull()
  })

  it('does not remove other headers', () => {
    const request = new Request('http://example.com', {
      headers: {
        accept: 'msw/passthrough',
        'content-type': 'application/json',
      },
    })
    deleteRequestPassthroughHeader(request)
    expect(request.headers.get('content-type')).toBe('application/json')
  })
})
