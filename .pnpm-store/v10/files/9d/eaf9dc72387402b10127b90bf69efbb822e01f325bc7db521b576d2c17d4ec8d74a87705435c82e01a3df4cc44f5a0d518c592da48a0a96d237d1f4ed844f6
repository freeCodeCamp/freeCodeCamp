export interface FileLike {
    /**
     * Name of the file referenced by the File object.
     */
    readonly name: string;
    /**
     * Returns the media type ([`MIME`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) of the file represented by a `File` object.
     */
    readonly type: string;
    /**
     * Size of the file parts in bytes
     */
    readonly size: number;
    /**
     * The last modified date of the file as the number of milliseconds since the Unix epoch (January 1, 1970 at midnight). Files without a known last modified date return the current date.
     */
    readonly lastModified: number;
    /**
     * Returns a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) which upon reading returns the data contained within the [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    stream(): AsyncIterable<Uint8Array>;
    readonly [Symbol.toStringTag]: string;
}
