export {};

import { webcrypto } from "crypto";

declare global {
    var Crypto: typeof globalThis extends { onmessage: any; Crypto: infer T } ? T : {
        prototype: webcrypto.Crypto;
        new(): webcrypto.Crypto;
    };

    var CryptoKey: typeof globalThis extends { onmessage: any; CryptoKey: infer T } ? T : {
        prototype: webcrypto.CryptoKey;
        new(): webcrypto.CryptoKey;
    };

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
