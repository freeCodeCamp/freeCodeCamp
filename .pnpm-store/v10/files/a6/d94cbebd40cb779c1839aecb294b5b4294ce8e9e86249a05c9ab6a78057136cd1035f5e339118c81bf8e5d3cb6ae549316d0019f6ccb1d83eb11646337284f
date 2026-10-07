/// <reference types="node" />

import { KeyObject } from "crypto";

export class JsonWebTokenError extends Error {
    inner: Error;

    constructor(message: string, error?: Error);
}

export class TokenExpiredError extends JsonWebTokenError {
    expiredAt: Date;

    constructor(message: string, expiredAt: Date);
}

/**
 * Thrown if current time is before the nbf claim.
 */
export class NotBeforeError extends JsonWebTokenError {
    date: Date;

    constructor(message: string, date: Date);
}

export interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: Algorithm | undefined;
    keyid?: string | undefined;
    /** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    expiresIn?: string | number | undefined;
    /** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    notBefore?: string | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
    mutatePayload?: boolean | undefined;
    noTimestamp?: boolean | undefined;
    header?: JwtHeader | undefined;
    encoding?: string | undefined;
    allowInsecureKeySizes?: boolean | undefined;
    allowInvalidAsymmetricKeyTypes?: boolean | undefined;
}

export interface VerifyOptions {
    algorithms?: Algorithm[] | undefined;
    audience?: string | RegExp | Array<string | RegExp> | undefined;
    clockTimestamp?: number | undefined;
    clockTolerance?: number | undefined;
    /** return an object with the decoded `{ payload, header, signature }` instead of only the usual content of the payload. */
    complete?: boolean | undefined;
    issuer?: string | string[] | undefined;
    ignoreExpiration?: boolean | undefined;
    ignoreNotBefore?: boolean | undefined;
    jwtid?: string | undefined;
    /**
     * If you want to check `nonce` claim, provide a string value here.
     * It is used on Open ID for the ID Tokens. ([Open ID implementation notes](https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes))
     */
    nonce?: string | undefined;
    subject?: string | undefined;
    maxAge?: string | number | undefined;
    allowInvalidAsymmetricKeyTypes?: boolean | undefined;
}

export interface DecodeOptions {
    complete?: boolean | undefined;
    json?: boolean | undefined;
}
export type VerifyErrors =
    | JsonWebTokenError
    | NotBeforeError
    | TokenExpiredError;
export type VerifyCallback<T = Jwt | JwtPayload | string> = (
    error: VerifyErrors | null,
    decoded: T | undefined,
) => void;

export type SignCallback = (
    error: Error | null,
    encoded: string | undefined,
) => void;

// standard names https://www.rfc-editor.org/rfc/rfc7515.html#section-4.1
export interface JwtHeader {
    alg: string | Algorithm;
    typ?: string | undefined;
    cty?: string | undefined;
    crit?: Array<string | Exclude<keyof JwtHeader, "crit">> | undefined;
    kid?: string | undefined;
    jku?: string | undefined;
    x5u?: string | string[] | undefined;
    "x5t#S256"?: string | undefined;
    x5t?: string | undefined;
    x5c?: string | string[] | undefined;
}

// standard claims https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
export interface JwtPayload {
    [key: string]: any;
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: string | string[] | undefined;
    exp?: number | undefined;
    nbf?: number | undefined;
    iat?: number | undefined;
    jti?: string | undefined;
}

export interface Jwt {
    header: JwtHeader;
    payload: JwtPayload | string;
    signature: string;
}

// https://github.com/auth0/node-jsonwebtoken#algorithms-supported
export type Algorithm =
    | "HS256"
    | "HS384"
    | "HS512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "none";

export type SigningKeyCallback = (
    error: Error | null,
    signingKey?: Secret,
) => void;

export type GetPublicKeyOrSecret = (
    header: JwtHeader,
    callback: SigningKeyCallback,
) => void;

export type Secret =
    | string
    | Buffer
    | KeyObject
    | { key: string | Buffer; passphrase: string };

/**
 * Synchronously sign the given payload into a JSON Web Token string
 * payload - Payload to sign, could be an literal, buffer or string
 * secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * [options] - Options for the signature
 * returns - The JSON Web Token string
 */
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
): string;
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: null,
    options?: SignOptions & { algorithm: "none" },
): string;

/**
 * Sign the given payload into a JSON Web Token string
 * payload - Payload to sign, could be an literal, buffer or string
 * secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * [options] - Options for the signature
 * callback - Callback to get the encoded token on
 */
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    callback: SignCallback,
): void;
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options: SignOptions,
    callback: SignCallback,
): void;
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: null,
    options: SignOptions & { algorithm: "none" },
    callback: SignCallback,
): void;

/**
 * Synchronously verify given token using a secret or a public key to get a decoded token
 * token - JWT string to verify
 * secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
 * [options] - Options for the verification
 * returns - The decoded token.
 */
export function verify(token: string, secretOrPublicKey: Secret, options: VerifyOptions & { complete: true }): Jwt;
export function verify(
    token: string,
    secretOrPublicKey: Secret,
    options?: VerifyOptions & { complete?: false },
): JwtPayload | string;
export function verify(token: string, secretOrPublicKey: Secret, options?: VerifyOptions): Jwt | JwtPayload | string;

/**
 * Asynchronously verify given token using a secret or a public key to get a decoded token
 * token - JWT string to verify
 * secretOrPublicKey - A string or buffer containing either the secret for HMAC algorithms,
 * or the PEM encoded public key for RSA and ECDSA. If jwt.verify is called asynchronous,
 * secretOrPublicKey can be a function that should fetch the secret or public key
 * [options] - Options for the verification
 * callback - Callback to get the decoded token on
 */
export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    callback?: VerifyCallback<JwtPayload | string>,
): void;
export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    options: VerifyOptions & { complete: true },
    callback?: VerifyCallback<Jwt>,
): void;
export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    options?: VerifyOptions & { complete?: false },
    callback?: VerifyCallback<JwtPayload | string>,
): void;
export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    options?: VerifyOptions,
    callback?: VerifyCallback,
): void;

/**
 * Returns the decoded payload without verifying if the signature is valid.
 * token - JWT string to decode
 * [options] - Options for decoding
 * returns - The decoded Token
 */
export function decode(token: string, options: DecodeOptions & { complete: true }): null | Jwt;
export function decode(token: string, options: DecodeOptions & { json: true }): null | JwtPayload;
export function decode(token: string, options?: DecodeOptions): null | JwtPayload | string;
