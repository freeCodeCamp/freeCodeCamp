declare module "xxhash-wasm" {
  type Exports = {
    h32(input: string, seed?: number): string;
    h32Raw(inputBuffer: Uint8Array, seed?: number): number;
    h64(input: string, seedHigh?: number, seedLow?: number): string;
    h64Raw(
      inputBuffer: Uint8Array,
      seedHigh?: number,
      seedLow?: number
    ): Uint8Array;
  };
  export default function xxhash(): Promise<Exports>;
}
