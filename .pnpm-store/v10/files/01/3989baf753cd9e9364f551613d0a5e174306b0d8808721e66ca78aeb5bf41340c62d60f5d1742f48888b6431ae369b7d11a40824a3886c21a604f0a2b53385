export {};

import { webcrypto } from "crypto";

type _Crypto = typeof globalThis extends { onmessage: any } ? {} : webcrypto.Crypto;
type _CryptoKey = typeof globalThis extends { onmessage: any } ? {} : webcrypto.CryptoKey;
type _SubtleCrypto = typeof globalThis extends { onmessage: any } ? {} : webcrypto.SubtleCrypto;

declare global {
    interface Crypto extends _Crypto {}
    var Crypto: typeof globalThis extends { onmessage: any; Crypto: infer T } ? T : {
        prototype: webcrypto.Crypto;
        new(): webcrypto.Crypto;
    };

    interface CryptoKey extends _CryptoKey {}
    var CryptoKey: typeof globalThis extends { onmessage: any; CryptoKey: infer T } ? T : {
        prototype: webcrypto.CryptoKey;
        new(): webcrypto.CryptoKey;
    };

    interface SubtleCrypto extends _SubtleCrypto {}
    var SubtleCrypto: typeof globalThis extends { onmessage: any; SubtleCrypto: infer T } ? T : {
        prototype: webcrypto.SubtleCrypto;
        new(): webcrypto.SubtleCrypto;
        supports(
            operation: string,
            algorithm: webcrypto.AlgorithmIdentifier,
            length?: number,
        ): boolean;
        supports(
            operation: string,
            algorithm: webcrypto.AlgorithmIdentifier,
            additionalAlgorithm: webcrypto.AlgorithmIdentifier,
        ): boolean;
    };

    var crypto: typeof globalThis extends { onmessage: any; crypto: infer T } ? T : webcrypto.Crypto;
}
