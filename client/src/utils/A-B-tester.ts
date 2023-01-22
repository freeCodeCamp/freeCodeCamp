import sha1 from 'sha-1';

// This function turns an email to a hash and decides if it should be
// an A or B variant for A/B testing

export function emailToABVariant(email: string): {
  hash: string;
  isVariantA: boolean;
  hashInt: number;
} {
  // turn the email into a number
  const hash: string = sha1(email);
  const hashInt = parseInt(hash.slice(0, 1), 16);
  // turn the number to A or B variant
  const isVariantA = hashInt % 2 === 0;
  return {
    hash,
    isVariantA,
    hashInt
  };
}
