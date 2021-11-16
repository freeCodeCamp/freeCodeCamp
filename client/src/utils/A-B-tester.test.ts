import { emailToAVariant } from './A-B-tester';

describe('client/src is-email-variation-a', () => {
  it('consistently returns the same result for the same input', () => {
    const preSavedResult = {
      hash: '23e3cacb302b0c759531faa8b414b23709c26029',
      isAVriant: true,
      simplifiedInt: 14
    };
    const result = emailToAVariant('foo@freecodecamp.org');
    expect(result).toEqual(preSavedResult);
  });
});
