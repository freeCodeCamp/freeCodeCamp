import zlib from 'node:zlib'

export class BrotliDecompressionStream extends TransformStream {
  constructor() {
    const decompress = zlib.createBrotliDecompress({
      flush: zlib.constants.BROTLI_OPERATION_FLUSH,
      finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH,
    })

    super({
      async transform(chunk, controller) {
        const buffer = Buffer.from(chunk)

        const decompressed = await new Promise<Buffer>((resolve, reject) => {
          decompress.write(buffer, (error) => {
            if (error) reject(error)
          })

          decompress.flush()
          decompress.once('data', (data) => resolve(data))
          decompress.once('error', (error) => reject(error))
          decompress.once('end', () => controller.terminate())
        }).catch((error) => {
          controller.error(error)
        })

        controller.enqueue(decompressed)
      },
    })
  }
}
