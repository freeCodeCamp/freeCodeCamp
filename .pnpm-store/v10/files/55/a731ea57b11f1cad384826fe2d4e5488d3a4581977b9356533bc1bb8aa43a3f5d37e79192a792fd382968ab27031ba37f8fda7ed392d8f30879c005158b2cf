/**
 * Return a total byte length of the given request/response body.
 * If the `Content-Length` header is present, it will be used as the byte length.
 */
export async function getBodyByteLength(
  input: Request | Response
): Promise<number> {
  const explicitContentLength = input.headers.get('content-length')

  if (explicitContentLength != null && explicitContentLength !== '') {
    return Number(explicitContentLength)
  }

  const buffer = await input.arrayBuffer()
  return buffer.byteLength
}
