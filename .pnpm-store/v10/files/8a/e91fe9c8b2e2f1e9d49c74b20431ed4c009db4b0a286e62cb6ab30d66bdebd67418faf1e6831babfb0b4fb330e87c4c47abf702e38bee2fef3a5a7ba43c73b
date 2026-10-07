interface TokensConstructor {
  (options?: Tokens.Options & { userInfo: true }): Tokens.TokensUserinfo;
  (options?: Tokens.Options): Tokens.TokensSimple;

  new(options?: Tokens.Options & { userInfo: true }): Tokens.TokensUserinfo;
  new(options?: Tokens.Options): Tokens.TokensSimple;
}

declare namespace Tokens {
  interface TokensBase {
    /**
     * Create a new secret key.
     */
    secret(callback: SecretCallback): void;
    secret(): Promise<string>;

    /**
     * Create a new secret key synchronously.
     */
    secretSync(): string;
  }

  export interface TokensSimple extends TokensBase {
    /**
     * Create a new CSRF token.
     */
    create(secret: string): string;

    /**
     * Verify if a given token is valid for a given secret.
     */
    verify(secret: string, token: string): boolean;
  }

  export interface TokensUserinfo extends TokensBase {
    /**
     * Create a new CSRF token.
     */
    create(secret: string, userInfo: string): string;

    /**
     * Verify if a given token is valid for a given secret.
     */
    verify(secret: string, token: string, userInfo: string): boolean;
  }

  export type SecretCallback = (err: Error | null, secret: string) => void

  export interface Options {
    /**
     * The algorithm used to generate the token
     * @default sha256
     */
    algorithm?: string;

    /**
     * The string length of the salt
     *
     * @default 8
     */
    saltLength?: number;
    /**
     * The byte length of the secret key
     *
     * @default 18
     */
    secretLength?: number;

    /**
     * The maximum milliseconds of validity of this token. 0 disables the check.
     *
     * @default 0
     */
    validity?: number;

    /**
     * Require userInfo on create() and verify()
     *
     * @default false
     */
    userInfo?: boolean;

    /**
     * The HMAC key used to generate the cryptographic HMAC hash
     *
     */
    hmacKey?: string | ArrayBuffer | Buffer | TypedArray | DataView | CryptoKey;
  }

  export const Tokens: TokensConstructor
  export { Tokens as default }
}

type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array

declare function Tokens (...params: Parameters<TokensConstructor>): ReturnType<TokensConstructor>
export = Tokens
