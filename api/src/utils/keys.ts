import { hkdfSync } from 'node:crypto';

const HKDF_DIGEST = 'sha512';
const HKDF_KEY_LENGTH = 64; // 512 bits, matches HS512

/**
 * Derives a signing key from a master secret using HKDF.
 * Each purpose string produces a unique, deterministic key.
 *
 * @param masterSecret - The master secret (e.g. JWT_SECRET).
 * @param purpose - A unique label for the key's purpose (e.g. 'fcc:access-token').
 * @returns A 64-byte Buffer suitable for HMAC-SHA512 signing.
 */
export function deriveSigningKey(
  masterSecret: string,
  purpose: string
): Buffer {
  return Buffer.from(
    hkdfSync(HKDF_DIGEST, masterSecret, '', purpose, HKDF_KEY_LENGTH)
  );
}
