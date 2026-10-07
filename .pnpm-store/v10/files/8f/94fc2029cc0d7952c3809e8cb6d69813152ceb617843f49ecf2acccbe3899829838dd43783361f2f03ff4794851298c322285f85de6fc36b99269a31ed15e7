export class BrotliDecompressionStream extends TransformStream {
  constructor() {
    console.warn(
      '[Interceptors]: Brotli decompression of response streams is not supported in the browser'
    )

    super({
      transform(chunk, controller) {
        // Keep the stream as passthrough, it does nothing.
        controller.enqueue(chunk)
      },
    })
  }
}
