import type { Context, Recogniser } from '.';
import { type Match, type EncodingName } from '../match';
declare class IteratedChar {
    charValue: number;
    index: number;
    nextIndex: number;
    error: boolean;
    done: boolean;
    constructor();
    reset(): void;
    nextByte(det: Context): number;
}
declare class mbcs implements Recogniser {
    commonChars: number[];
    name(): EncodingName;
    match(det: Context): Match | null;
    nextChar(_iter: IteratedChar, _det: Context): boolean;
}
export declare class sjis extends mbcs {
    name(): EncodingName;
    language(): string;
    commonChars: number[];
    nextChar(iter: IteratedChar, det: Context): boolean;
}
export declare class big5 extends mbcs {
    name(): EncodingName;
    language(): string;
    commonChars: number[];
    nextChar(iter: IteratedChar, det: Context): boolean;
}
declare function eucNextChar(iter: IteratedChar, det: Context): boolean;
export declare class euc_jp extends mbcs {
    name(): EncodingName;
    language(): string;
    commonChars: number[];
    nextChar: typeof eucNextChar;
}
export declare class euc_kr extends mbcs {
    name(): EncodingName;
    language(): string;
    commonChars: number[];
    nextChar: typeof eucNextChar;
}
export declare class gb_18030 extends mbcs {
    name(): EncodingName;
    language(): string;
    nextChar(iter: IteratedChar, det: Context): boolean;
    commonChars: number[];
}
export {};
