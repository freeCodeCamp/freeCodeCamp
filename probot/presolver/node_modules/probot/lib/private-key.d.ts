/// <reference types="node" />
/**
 * Finds a private key through various user-(un)specified methods.
 * Order of precedence:
 * 1. Explicit path (CLI option)
 * 2. `PRIVATE_KEY` env var
 * 3. `PRIVATE_KEY_PATH` env var
 * 4. Any file w/ `.pem` extension in current working dir
 * @param filepath - Explicit, user-defined path to keyfile
 * @returns Private key
 * @private
 */
export declare function findPrivateKey(filepath?: string): Buffer | string | null;
