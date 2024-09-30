import { getFallbackFullStackDate } from './certificate-utils';

const fullStackChallenges = [
  {
    completedDate: 1585210952511,
    id: '5a553ca864b52e1d8bceea14'
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17513bc'
  },
  {
    completedDate: 1588665778679,
    id: '561acd10cb82ac38a17513bc'
  },
  {
    completedDate: 1685210952511,
    id: '561abd10cb81ac38a17513bc'
  },
  {
    completedDate: 1585210952511,
    id: '561add10cb82ac38a17523bc'
  },
  {
    completedDate: 1588665778679,
    id: '561add10cb82ac38a17213bc'
  }
];

describe('helper functions', () => {
  describe('getFallbackFullStackDate', () => {
    it('should return the date of the latest completed challenge', () => {
      expect(getFallbackFullStackDate(fullStackChallenges, 123)).toBe(
        1685210952511
      );
    });

    it('should fall back to completedDate if no certifications are provided', () => {
      expect(getFallbackFullStackDate([], 123)).toBe(123);
    });

    it('should fall back to completedDate if none of the certifications have been completed', () => {
      expect(
        getFallbackFullStackDate([{ completedDate: 567, id: 'abc' }], 123)
      ).toBe(123);
    });
  });
});
