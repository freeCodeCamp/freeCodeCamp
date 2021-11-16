import sha1 from 'sha-1';

// This function turns an email to a hash and decides if it should be
// an A or B variant for A/B testing

export function emailToAVariant(email: string): {
  hash: string;
  isAVriant: boolean;
  simplifiedInt: number;
} {
  // turn the email into a number
  const hash: string = sha1(email);
  const hashInt = parseInt(hash, 16);

  // turn the number to A or B variant
  const maxhash = 16 ** 40;
  const maxDivisor = maxhash / 100;
  const simplifiedInt = Number((hashInt / maxDivisor).toFixed());
  const isAVriant = simplifiedInt % 2 === 0;

  return {
    hash,
    isAVriant,
    simplifiedInt
  };
}
