// Import from an internal alias that resolves to different modules
// depending on the environment. This way, we can keep the fetch interceptor
// intact while using different strategies for Brotli decompression.
import { BrotliDecompressionStream } from 'internal:brotli-decompress'

class PipelineStream extends TransformStream {
  constructor(
    transformStreams: Array<TransformStream>,
    ...strategies: Array<QueuingStrategy>
  ) {
    super({}, ...strategies)

    const readable = [super.readable as any, ...transformStreams].reduce(
      (readable, transform) => readable.pipeThrough(transform)
    )

    Object.defineProperty(this, 'readable', {
      get() {
        return readable
      },
    })
  }
}

export function parseContentEncoding(contentEncoding: string): Array<string> {
  return contentEncoding
    .toLowerCase()
    .split(',')
    .map((coding) => coding.trim())
}

function createDecompressionStream(
  contentEncoding: string
): TransformStream | null {
  if (contentEncoding === '') {
    return null
  }

  const codings = parseContentEncoding(contentEncoding)

  if (codings.length === 0) {
    return null
  }

  const transformers = codings.reduceRight<Array<TransformStream>>(
    (transformers, coding) => {
      if (coding === 'gzip' || coding === 'x-gzip') {
        return transformers.concat(new DecompressionStream('gzip'))
      } else if (coding === 'deflate') {
        return transformers.concat(new DecompressionStream('deflate'))
      } else if (coding === 'br') {
        return transformers.concat(new BrotliDecompressionStream())
      } else {
        transformers.length = 0
      }

      return transformers
    },
    []
  )

  return new PipelineStream(transformers)
}

export function decompressResponse(
  response: Response
): ReadableStream<any> | null {
  if (response.body === null) {
    return null
  }

  const decompressionStream = createDecompressionStream(
    response.headers.get('content-encoding') || ''
  )

  if (!decompressionStream) {
    return null
  }

  // Use `pipeTo` and return the decompression stream's readable
  // instead of `pipeThrough` because that will lock the original
  // response stream, making it unusable as the input to Response.
  response.body.pipeTo(decompressionStream.writable)
  return decompressionStream.readable
}
