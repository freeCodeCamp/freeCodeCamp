// Type definitions for TweetNaCl.js

export as namespace nacl;

declare var nacl: nacl;
export = nacl;

declare namespace nacl {
    export interface BoxKeyPair {
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    }

    export interface SignKeyPair {
        publicKey: Uint8Array;
        secretKey: Uint8Array;
    }

    export interface secretbox {
        (msg: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array;
        open(box: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array | false;
        readonly keyLength: number;
        readonly nonceLength: number;
        readonly overheadLength: number;
    }

    export interface scalarMult {
        (n: Uint8Array, p: Uint8Array): Uint8Array;
        base(n: Uint8Array): Uint8Array;
        readonly scalarLength: number;
        readonly groupElementLength: number;
    }

    namespace box {
        export interface open {
            (msg: Uint8Array, nonce: Uint8Array, publicKey: Uint8Array, secretKey: Uint8Array): Uint8Array | false;
            after(box: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array | false;
        }

        export interface keyPair {
            (): BoxKeyPair;
            fromSecretKey(secretKey: Uint8Array): BoxKeyPair;
        }
    }

    export interface box {
        (msg: Uint8Array, nonce: Uint8Array, publicKey: Uint8Array, secretKey: Uint8Array): Uint8Array;
        before(publicKey: Uint8Array, secretKey: Uint8Array): Uint8Array;
        after(msg: Uint8Array, nonce: Uint8Array, key: Uint8Array): Uint8Array;
        open: box.open;
        keyPair: box.keyPair;
        readonly publicKeyLength: number;
        readonly secretKeyLength: number;
        readonly sharedKeyLength: number;
        readonly nonceLength: number;
        readonly overheadLength: number;
    }

    namespace sign {
        export interface detached {
            (msg: Uint8Array, secretKey: Uint8Array): Uint8Array;
            verify(msg: Uint8Array, sig: Uint8Array, publicKey: Uint8Array): boolean;
        }

        export interface keyPair {
            (): SignKeyPair;
            fromSecretKey(secretKey: Uint8Array): SignKeyPair;
            fromSeed(secretKey: Uint8Array): SignKeyPair;
        }
    }

    export interface sign {
        (msg: Uint8Array, secretKey: Uint8Array): Uint8Array;
        open(signedMsg: Uint8Array, publicKey: Uint8Array): Uint8Array | null;
        detached: sign.detached;
        keyPair: sign.keyPair;
        readonly publicKeyLength: number;
        readonly secretKeyLength: number;
        readonly seedLength: number;
        readonly signatureLength: number;
    }

    export interface hash {
        (msg: Uint8Array): Uint8Array;
        readonly hashLength: number;
    }
}

declare interface nacl {
    randomBytes(n: number): Uint8Array;
    secretbox: nacl.secretbox;
    scalarMult: nacl.scalarMult;
    box: nacl.box;
    sign: nacl.sign;
    hash: nacl.hash;
    verify(x: Uint8Array, y: Uint8Array): boolean;
    setPRNG(fn: (x: Uint8Array, n: number) => void): void;
}
