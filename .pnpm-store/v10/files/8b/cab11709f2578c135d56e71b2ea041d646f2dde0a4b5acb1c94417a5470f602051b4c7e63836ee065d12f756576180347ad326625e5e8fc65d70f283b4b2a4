/**
 * This function is an optimization for small basic latin strings.
 * @internal
 * @remarks
 * ### Important characteristics:
 * - If the uint8array or distance between start and end is 0 this function returns an empty string
 * - If the byteLength of the string is 1, 2, or 3 we invoke String.fromCharCode and manually offset into the buffer
 * - If the byteLength of the string is less than or equal to 20 an array of bytes is built and `String.fromCharCode.apply` is called with the result
 * - If any byte exceeds 128 this function returns null
 *
 * @param uint8array - A sequence of bytes that may contain basic latin characters
 * @param start - The start index from which to search the uint8array
 * @param end - The index to stop searching the uint8array
 * @returns string if all bytes are within the basic latin range, otherwise null
 */
export function tryReadBasicLatin(
  uint8array: Uint8Array,
  start: number,
  end: number
): string | null {
  if (uint8array.length === 0) {
    return '';
  }

  const stringByteLength = end - start;
  if (stringByteLength === 0) {
    return '';
  }

  if (stringByteLength > 20) {
    return null;
  }

  if (stringByteLength === 1 && uint8array[start] < 128) {
    return String.fromCharCode(uint8array[start]);
  }

  if (stringByteLength === 2 && uint8array[start] < 128 && uint8array[start + 1] < 128) {
    return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]);
  }

  if (
    stringByteLength === 3 &&
    uint8array[start] < 128 &&
    uint8array[start + 1] < 128 &&
    uint8array[start + 2] < 128
  ) {
    return (
      String.fromCharCode(uint8array[start]) +
      String.fromCharCode(uint8array[start + 1]) +
      String.fromCharCode(uint8array[start + 2])
    );
  }

  const latinBytes = [];
  for (let i = start; i < end; i++) {
    const byte = uint8array[i];
    if (byte > 127) {
      return null;
    }
    latinBytes.push(byte);
  }

  return String.fromCharCode(...latinBytes);
}

/**
 * This function is an optimization for writing small basic latin strings.
 * @internal
 * @remarks
 * ### Important characteristics:
 * - If the string length is 0 return 0, do not perform any work
 * - If a string is longer than 25 code units return null
 * - If any code unit exceeds 128 this function returns null
 *
 * @param destination - The uint8array to serialize the string to
 * @param source - The string to turn into UTF-8 bytes if it fits in the basic latin range
 * @param offset - The position in the destination to begin writing bytes to
 * @returns the number of bytes written to destination if all code units are below 128, otherwise null
 */
export function tryWriteBasicLatin(
  destination: Uint8Array,
  source: string,
  offset: number
): number | null {
  if (source.length === 0) return 0;

  if (source.length > 25) return null;

  if (destination.length - offset < source.length) return null;

  for (
    let charOffset = 0, destinationOffset = offset;
    charOffset < source.length;
    charOffset++, destinationOffset++
  ) {
    const char = source.charCodeAt(charOffset);
    if (char > 127) return null;

    destination[destinationOffset] = char;
  }

  return source.length;
}
