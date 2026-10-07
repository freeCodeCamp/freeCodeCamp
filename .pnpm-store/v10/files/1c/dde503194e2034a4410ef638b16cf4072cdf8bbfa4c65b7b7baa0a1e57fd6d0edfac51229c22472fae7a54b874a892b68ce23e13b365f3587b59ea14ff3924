import { CryptoOperation } from "./CryptoOperation";
import { Key } from "./Key";
import { KeyOperation } from "./KeyOperation";
export type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "derive" | "wrapKey" | "unwrapKey" | "importKey";
export type EncryptionOrVerificationAlgorithm = "RSAES-PKCS1-v1_5";
export type Ie11EncryptionAlgorithm = "AES-CBC" | "AES-GCM" | "RSA-OAEP" | EncryptionOrVerificationAlgorithm;
export type Ie11DigestAlgorithm = "SHA-1" | "SHA-256" | "SHA-384";
export interface HashAlgorithm {
    name: Ie11DigestAlgorithm;
}
export interface HmacAlgorithm {
    name: "HMAC";
    hash: HashAlgorithm;
}
export type SigningAlgorithm = HmacAlgorithm;
/**
 * Represent ths SubtleCrypto interface as implemented in Internet Explorer 11.
 * This implementation was based on an earlier version of the WebCrypto API and
 * differs from the `window.crypto.subtle` object exposed in Chrome, Safari,
 * Firefox, and MS Edge.
 *
 * @see https://msdn.microsoft.com/en-us/library/dn302325(v=vs.85).aspx
 */
export interface MsSubtleCrypto {
    decrypt(algorithm: Ie11EncryptionAlgorithm, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    digest(algorithm: Ie11DigestAlgorithm, buffer?: ArrayBufferView): CryptoOperation;
    encrypt(algorithm: Ie11EncryptionAlgorithm, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    exportKey(format: string, key: Key): KeyOperation;
    generateKey(algorithm: SigningAlgorithm | Ie11EncryptionAlgorithm, extractable?: boolean, keyUsages?: Array<KeyUsage>): KeyOperation;
    importKey(format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: Array<KeyUsage>): KeyOperation;
    sign(algorithm: SigningAlgorithm, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    verify(algorithm: SigningAlgorithm | EncryptionOrVerificationAlgorithm, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView): CryptoOperation;
}
