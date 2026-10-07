export namespace util {
  /**
   * Retrieves a header name and returns its lowercase value.
   * @param value Header name
   */
  export function headerNameToString (value: string | Buffer): string

  /**
   * Receives a header object and returns the parsed value.
   * @param headers Header object
   * @param obj Object to specify a proxy object. Used to assign parsed values.
   * @returns If `obj` is specified, it is equivalent to `obj`.
   */
  export function parseHeaders (
    headers: (Buffer | string | (Buffer | string)[])[],
    obj?: Record<string, string | string[]>
  ): Record<string, string | string[]>
}
