import { BSONError } from './error';

type TextDecoder = {
  readonly encoding: string;
  readonly fatal: boolean;
  readonly ignoreBOM: boolean;
  decode(input?: Uint8Array): string;
};
type TextDecoderConstructor = {
  new (label: 'utf8', options: { fatal: boolean; ignoreBOM?: boolean }): TextDecoder;
};

// parse utf8 globals
declare const TextDecoder: TextDecoderConstructor;
let TextDecoderFatal: TextDecoder;
let TextDecoderNonFatal: TextDecoder;

/**
 * Determines if the passed in bytes are valid utf8
 * @param bytes - An array of 8-bit bytes. Must be indexable and have length property
 * @param start - The index to start validating
 * @param end - The index to end validating
 */
export function parseUtf8(buffer: Uint8Array, start: number, end: number, fatal: boolean): string {
  if (fatal) {
    TextDecoderFatal ??= new TextDecoder('utf8', { fatal: true });
    try {
      return TextDecoderFatal.decode(buffer.subarray(start, end));
    } catch (cause) {
      throw new BSONError('Invalid UTF-8 string in BSON document', { cause });
    }
  }
  TextDecoderNonFatal ??= new TextDecoder('utf8', { fatal: false });
  return TextDecoderNonFatal.decode(buffer.subarray(start, end));
}
