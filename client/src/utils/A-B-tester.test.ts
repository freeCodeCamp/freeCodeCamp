import faker from 'faker';
import { emailToABVariant } from './A-B-tester';

describe('client/src is-email-variation-a', () => {
  it('Consistently returns the same result for the same input', () => {
    const preSavedResult = {
      hash: '23e3cacb302b0c759531faa8b414b23709c26029',
      isVariantA: true,
      hashInt: 2
    };
    const result = emailToABVariant('foo@freecodecamp.org');
    expect(result).toEqual(preSavedResult);
  });
  it('Distributes A and B variations equaly for 100K random emails', () => {
    let A = 0;
    let B = 0;
    const sampleSize = 100000;
    faker.seed(123);

    for (let i = 0; i < sampleSize; i++) {
      if (emailToABVariant(faker.internet.email()).isVariantA) A++;
      else B++;
    }

    const isBucketWellDistributed = (variant: number): boolean =>
      variant > 0.99 * (sampleSize / 2);

    expect(isBucketWellDistributed(A) && isBucketWellDistributed(B)).toEqual(
      true
    );
  });
});
