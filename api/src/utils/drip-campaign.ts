import crypto from 'node:crypto';

/**
 * Assigns a user to variant bucket A or B based on a hash of their userId.
 * This ensures consistent variant assignment for the same userId.
 *
 * @param userId - The user's unique identifier.
 * @returns 'A' or 'B' based on the hash.
 */
export function assignVariantBucket(userId: string): 'A' | 'B' {
  // Create a hash of the userId
  const hash = crypto.createHash('sha256').update(userId).digest('hex');

  // Convert first character of hash to a number (0-15 in hex)
  // Use modulo 2 to determine bucket A or B
  const numericValue = parseInt(hash.charAt(0), 16);

  return numericValue % 2 === 0 ? 'A' : 'B';
}
