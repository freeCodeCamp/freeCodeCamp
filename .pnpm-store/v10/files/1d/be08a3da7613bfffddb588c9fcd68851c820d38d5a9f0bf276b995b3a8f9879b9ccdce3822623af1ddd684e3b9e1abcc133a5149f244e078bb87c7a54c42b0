import { stringToHeaders } from 'headers-polyfill'
import { type DefaultRequestMultipartBody } from '../../handlers/RequestHandler'

interface ParsedContentHeaders {
  name: string
  filename?: string
  contentType: string
}

interface ContentDispositionDirective {
  [key: string]: string | undefined
  name: string
  filename?: string
  'form-data': string
}

function parseContentHeaders(headersString: string): ParsedContentHeaders {
  const headers = stringToHeaders(headersString)
  const contentType = headers.get('content-type') || 'text/plain'
  const disposition = headers.get('content-disposition')

  if (!disposition) {
    throw new Error('"Content-Disposition" header is required.')
  }

  const directives = disposition.split(';').reduce((acc, chunk) => {
    const [name, ...rest] = chunk.trim().split('=')
    acc[name] = rest.join('=')
    return acc
  }, {} as ContentDispositionDirective)

  const name = directives.name?.slice(1, -1)
  const filename = directives.filename?.slice(1, -1)

  return {
    name,
    filename,
    contentType,
  }
}

/**
 * Parses a given string as a multipart/form-data.
 * Does not throw an exception on an invalid multipart string.
 */
export function parseMultipartData<T extends DefaultRequestMultipartBody>(
  data: string,
  headers?: Headers,
): T | undefined {
  const contentType = headers?.get('content-type')

  if (!contentType) {
    return undefined
  }

  const [, ...directives] = contentType.split(/; */)
  const boundary = directives
    .filter((d) => d.startsWith('boundary='))
    .map((s) => s.replace(/^boundary=/, ''))[0]

  if (!boundary) {
    return undefined
  }

  const boundaryRegExp = new RegExp(
    `--+${boundary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
  )
  const fields = data
    .split(boundaryRegExp)
    .filter((chunk) => chunk.startsWith('\r\n') && chunk.endsWith('\r\n'))
    .map((chunk) => chunk.trimStart().replace(/\r\n$/, ''))

  if (!fields.length) {
    return undefined
  }

  const parsedBody: DefaultRequestMultipartBody = {}

  try {
    for (const field of fields) {
      const [contentHeaders, ...rest] = field.split('\r\n\r\n')
      const contentBody = rest.join('\r\n\r\n')
      const { contentType, filename, name } =
        parseContentHeaders(contentHeaders)

      const value =
        filename === undefined
          ? contentBody
          : new File([contentBody], filename, { type: contentType })

      const parsedValue = parsedBody[name]

      if (parsedValue === undefined) {
        parsedBody[name] = value
      } else if (Array.isArray(parsedValue)) {
        parsedBody[name] = [...parsedValue, value]
      } else {
        parsedBody[name] = [parsedValue, value]
      }
    }

    return parsedBody as T
  } catch {
    return undefined
  }
}
