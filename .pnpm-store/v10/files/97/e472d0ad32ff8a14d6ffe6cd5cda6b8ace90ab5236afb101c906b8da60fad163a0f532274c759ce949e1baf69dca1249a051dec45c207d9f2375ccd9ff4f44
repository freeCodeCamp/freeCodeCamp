import { Readable } from 'stream'
import { Blob } from 'buffer'

export default BodyReadable

declare class BodyReadable extends Readable {
  constructor (opts: {
    resume: (this: Readable, size: number) => void | null;
    abort: () => void | null;
    contentType?: string;
    contentLength?: number;
    highWaterMark?: number;
  })

  /** Consumes and returns the body as a string
   *  https://fetch.spec.whatwg.org/#dom-body-text
   */
  text (): Promise<string>

  /** Consumes and returns the body as a JavaScript Object
   *  https://fetch.spec.whatwg.org/#dom-body-json
   */
  json (): Promise<unknown>

  /** Consumes and returns the body as a Blob
   *  https://fetch.spec.whatwg.org/#dom-body-blob
   */
  blob (): Promise<Blob>

  /** Consumes and returns the body as an Uint8Array
   *  https://fetch.spec.whatwg.org/#dom-body-bytes
   */
  bytes (): Promise<Uint8Array>

  /** Consumes and returns the body as an ArrayBuffer
   *  https://fetch.spec.whatwg.org/#dom-body-arraybuffer
   */
  arrayBuffer (): Promise<ArrayBuffer>

  /** Not implemented
   *
   *  https://fetch.spec.whatwg.org/#dom-body-formdata
   */
  formData (): Promise<never>

  /** Returns true if the body is not null and the body has been consumed
   *
   *  Otherwise, returns false
   *
   * https://fetch.spec.whatwg.org/#dom-body-bodyused
   */
  readonly bodyUsed: boolean

  /**
   * If body is null, it should return null as the body
   *
   *  If body is not null, should return the body as a ReadableStream
   *
   *  https://fetch.spec.whatwg.org/#dom-body-body
   */
  readonly body: never | undefined

  /** Dumps the response body by reading `limit` number of bytes.
   * @param opts.limit Number of bytes to read (optional) - Default: 131072
   * @param opts.signal AbortSignal to cancel the operation (optional)
   */
  dump (opts?: { limit: number; signal?: AbortSignal }): Promise<void>
}
