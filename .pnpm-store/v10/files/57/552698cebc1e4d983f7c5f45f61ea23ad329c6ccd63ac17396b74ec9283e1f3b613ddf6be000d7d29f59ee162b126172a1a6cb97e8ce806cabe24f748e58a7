type Input = string | number[] | ArrayBuffer | Uint8Array;

interface Decode {
  /**
   * Decode base32 string and return string
   *
   * @param base32Str The base32 string you want to decode.
   * @param ascciOnly decode as ASCII or decode as UTF-8 string. Default is false.
   */
  (base32Str: string, asciiOnly?: boolean): string;

  /**
   * Decode base32 string and return byte array
   *
   * @param base32Str The base32 string you want to decode.
   */
  asBytes(base32Str: string): number[];
}

/**
 * Encode to base32 string.
 *
 * @param input The input you want to encode.
 * @param ascciOnly treat string as ASCII or UTF-8 string. Default is false.
 */
export function encode(input: Input, asciiOnly?: boolean): string;
export var decode: Decode;
