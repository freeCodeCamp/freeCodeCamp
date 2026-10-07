import type { EncodingName, Match } from '../match';
export interface Recogniser {
    match(input: Context): Match | null;
    name(input?: Context): EncodingName;
    language?(): string | undefined;
}
export interface Context {
    byteStats: number[];
    c1Bytes: boolean;
    rawInput: Uint8Array;
    rawLen: number;
    inputBytes: Uint8Array;
    inputLen: number;
}
