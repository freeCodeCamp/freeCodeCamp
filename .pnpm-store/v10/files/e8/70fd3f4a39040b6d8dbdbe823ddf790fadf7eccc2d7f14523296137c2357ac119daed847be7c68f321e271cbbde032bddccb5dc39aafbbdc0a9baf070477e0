import type { FormDataEncoderHeaders } from "./util/Headers.js";
import type { FormDataLike } from "./FormDataLike.js";
import type { FileLike } from "./FileLike.js";
export interface FormDataEncoderOptions {
    /**
     * When enabled, the encoder will emit additional per part headers, such as `Content-Length`.
     *
     * Please note that the web clients do not include these, so when enabled this option might cause an error if `multipart/form-data` does not consider additional headers.
     *
     * Defaults to `false`.
     */
    enableAdditionalHeaders?: boolean;
}
/**
 * Implements [`multipart/form-data` encoding algorithm](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#multipart/form-data-encoding-algorithm),
 * allowing to add support for spec-comliant [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) to an HTTP client.
 */
export declare class FormDataEncoder {
    #private;
    /**
     * Returns boundary string
     */
    readonly boundary: string;
    /**
     * Returns Content-Type header
     */
    readonly contentType: string;
    /**
     * Returns Content-Length header
     */
    readonly contentLength: string | undefined;
    /**
     * Returns headers object with Content-Type and Content-Length header
     */
    readonly headers: Readonly<FormDataEncoderHeaders>;
    /**
     * Creates a multipart/form-data encoder.
     *
     * @param form FormData object to encode. This object must be a spec-compatible FormData implementation.
     *
     * @example
     *
     * ```js
     * import {Readable} from "stream"
     *
     * import {FormData, File, fileFromPath} from "formdata-node"
     * import {FormDataEncoder} from "form-data-encoder"
     *
     * import fetch from "node-fetch"
     *
     * const form = new FormData()
     *
     * form.set("field", "Just a random string")
     * form.set("file", new File(["Using files is class amazing"], "file.txt"))
     * form.set("fileFromPath", await fileFromPath("path/to/a/file.txt"))
     *
     * const encoder = new FormDataEncoder(form)
     *
     * const options = {
     *   method: "post",
     *   headers: encoder.headers,
     *   body: Readable.from(encoder)
     * }
     *
     * const response = await fetch("https://httpbin.org/post", options)
     *
     * console.log(await response.json())
     * ```
     */
    constructor(form: FormDataLike);
    /**
     * Creates multipart/form-data encoder with custom boundary string.
     *
     * @param form FormData object to encode. This object must be a spec-compatible FormData implementation.
     * @param boundary An optional boundary string that will be used by the encoder. If there's no boundary string is present, Encoder will generate it automatically.
     */
    constructor(form: FormDataLike, boundary: string);
    /**
     * Creates multipart/form-data encoder with additional options.
     *
     * @param form FormData object to encode. This object must be a spec-compatible FormData implementation.
     * @param options Additional options
     */
    constructor(form: FormDataLike, options: FormDataEncoderOptions);
    constructor(form: FormDataLike, boundary: string, options?: FormDataEncoderOptions);
    /**
     * Returns form-data content length
     *
     * @deprecated Use FormDataEncoder.contentLength or FormDataEncoder.headers["Content-Length"] instead
     */
    getContentLength(): number | undefined;
    /**
     * Creates an iterator allowing to go through form-data parts (with metadata).
     * This method **will not** read the files.
     *
     * Using this method, you can convert form-data content into Blob:
     *
     * @example
     *
     * import {Readable} from "stream"
     *
     * import {FormDataEncoder} from "form-data-encoder"
     *
     * import {FormData} from "formdata-polyfill/esm-min.js"
     * import {fileFrom} from "fetch-blob/form.js"
     * import {File} from "fetch-blob/file.js"
     * import {Blob} from "fetch-blob"
     *
     * import fetch from "node-fetch"
     *
     * const form = new FormData()
     *
     * form.set("field", "Just a random string")
     * form.set("file", new File(["Using files is class amazing"]))
     * form.set("fileFromPath", await fileFrom("path/to/a/file.txt"))
     *
     * const encoder = new FormDataEncoder(form)
     *
     * const options = {
     *   method: "post",
     *   body: new Blob(encoder, {type: encoder.contentType})
     * }
     *
     * const response = await fetch("https://httpbin.org/post", options)
     *
     * console.log(await response.json())
     */
    values(): Generator<Uint8Array | FileLike, void, undefined>;
    /**
     * Creates an async iterator allowing to perform the encoding by portions.
     * This method **will** also read files.
     *
     * @example
     *
     * import {Readable} from "stream"
     *
     * import {FormData, File, fileFromPath} from "formdata-node"
     * import {FormDataEncoder} from "form-data-encoder"
     *
     * import fetch from "node-fetch"
     *
     * const form = new FormData()
     *
     * form.set("field", "Just a random string")
     * form.set("file", new File(["Using files is class amazing"], "file.txt"))
     * form.set("fileFromPath", await fileFromPath("path/to/a/file.txt"))
     *
     * const encoder = new FormDataEncoder(form)
     *
     * const options = {
     *   method: "post",
     *   headers: encoder.headers,
     *   body: Readable.from(encoder.encode()) // or Readable.from(encoder)
     * }
     *
     * const response = await fetch("https://httpbin.org/post", options)
     *
     * console.log(await response.json())
     */
    encode(): AsyncGenerator<Uint8Array, void, undefined>;
    /**
     * Creates an iterator allowing to read through the encoder data using for...of loops
     */
    [Symbol.iterator](): Generator<Uint8Array | FileLike, void, undefined>;
    /**
     * Creates an **async** iterator allowing to read through the encoder data using for-await...of loops
     */
    [Symbol.asyncIterator](): AsyncGenerator<Uint8Array, void, undefined>;
}
