import {
  normalizeText,
  formatUtterance,
  compareTexts
} from './speaking-modal-helpers';

// Mock react-i18next
const mockTranslations: Record<string, string> = {
  'speaking-modal.correct-congratulations': "That's correct! Congratulations!",
  'speaking-modal.very-good': 'Very good!',
  'speaking-modal.try-again': 'Try again.'
};

const mockT = (key: string): string => mockTranslations[key] || key;

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: mockT
  })
}));

describe('speaking-modal-helpers', () => {
  describe('normalizeText', () => {
    it('should convert text to lowercase and remove punctuation', () => {
      expect(normalizeText('Hello, World!')).toEqual(['hello', 'world']);
    });

    it('should handle multiple spaces and trim whitespace', () => {
      expect(normalizeText('  Hello    World  ')).toEqual(['hello', 'world']);
    });

    it('should remove various punctuation marks', () => {
      expect(normalizeText("Hello! How are you? I'm fine.")).toEqual([
        'hello',
        'how',
        'are',
        'you',
        'im',
        'fine'
      ]);
    });

    it('should handle empty string', () => {
      expect(normalizeText('')).toEqual([]);
    });

    it('should handle string with only punctuation', () => {
      expect(normalizeText('!!!')).toEqual([]);
    });

    it('should handle string with only spaces', () => {
      expect(normalizeText('   ')).toEqual([]);
    });

    it('should preserve numbers and letters', () => {
      expect(normalizeText('Hello123 World456')).toEqual([
        'hello123',
        'world456'
      ]);
    });
  });

  describe('formatUtterance', () => {
    it('should capitalize first letter and add period', () => {
      expect(formatUtterance('hello world')).toBe('Hello world.');
    });

    it('should handle already capitalized text', () => {
      expect(formatUtterance('Hello World')).toBe('Hello world.');
    });

    it('should trim whitespace', () => {
      expect(formatUtterance('  hello world  ')).toBe('Hello world.');
    });

    it('should handle empty string', () => {
      expect(formatUtterance('')).toBe('');
    });

    it('should handle single character', () => {
      expect(formatUtterance('a')).toBe('A.');
    });

    it('should handle mixed case input', () => {
      expect(formatUtterance('hELLO wORLD')).toBe('Hello world.');
    });

    it('should handle string with only spaces', () => {
      expect(formatUtterance('   ')).toBe('');
    });
  });

  describe('compareTexts', () => {
    const getMessages = () => ({
      correctCongratulations: mockT('speaking-modal.correct-congratulations'),
      veryGood: mockT('speaking-modal.very-good'),
      tryAgain: mockT('speaking-modal.try-again')
    });

    describe('exact matches', () => {
      it('should return exact match for identical text', () => {
        const result = compareTexts(
          'Hello world',
          'Hello world',
          getMessages()
        );
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello world',
          message: getMessages().correctCongratulations
        });
      });

      it('should return exact match ignoring punctuation and case', () => {
        const result = compareTexts(
          'Hello, World!',
          'hello world',
          getMessages()
        );
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello, World!',
          message: getMessages().correctCongratulations
        });
      });

      it('should return exact match ignoring extra spaces', () => {
        const result = compareTexts(
          'Hello   world',
          '  hello world  ',
          getMessages()
        );
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello   world',
          message: getMessages().correctCongratulations
        });
      });
    });

    describe('partial matches', () => {
      it('should return high accuracy for mostly correct utterance', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello wonderful world',
          getMessages()
        );
        expect(result.isExact).toBe(false);
        expect(result.accuracy).toBe(67); // 2 out of 3 words correct
        expect(result.message).toBe(getMessages().tryAgain);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'wonderful', isCorrect: false },
          { word: 'world', isCorrect: true }
        ]);
      });

      it('should return good enough message for 80% or higher accuracy', () => {
        const result = compareTexts(
          'Hello beautiful wonderful world amazing',
          'Hello beautiful wonderful world fantastic',
          getMessages()
        );
        expect(result.accuracy).toBe(80); // 4 out of 5 words correct
        expect(result.message).toBe(getMessages().veryGood);
      });

      it('should handle shorter utterance', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello world',
          getMessages()
        );
        expect(result.accuracy).toBe(67); // 2 out of 3 words correct
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'world', isCorrect: false } // 'world' is in position 1, but original position 1 is 'beautiful'
        ]);
      });

      it('should handle longer utterance', () => {
        const result = compareTexts(
          'Hello world',
          'Hello beautiful world',
          getMessages()
        );
        expect(result.accuracy).toBe(100); // 2 out of 2 words correct ('Hello' and 'world' both appear in utterance)
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle completely different text', () => {
        const result = compareTexts(
          'Hello world',
          'Goodbye universe',
          getMessages()
        );
        expect(result.accuracy).toBe(0);
        expect(result.message).toBe(getMessages().tryAgain);
        expect(result.comparison).toEqual([
          { word: 'goodbye', isCorrect: false },
          { word: 'universe', isCorrect: false }
        ]);
      });
    });

    describe('edge cases', () => {
      it('should handle empty original text', () => {
        const result = compareTexts('', 'Hello world', getMessages());
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle empty utterance', () => {
        const result = compareTexts('Hello world', '', getMessages());
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([]);
      });

      it('should handle both empty strings', () => {
        const result = compareTexts('', '', getMessages());
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: '',
          message: getMessages().correctCongratulations
        });
      });

      it('should handle single word comparison', () => {
        const result = compareTexts('Hello', 'Hello', getMessages());
        expect(result.isExact).toBe(true);
        expect(result.accuracy).toBe(100);
      });

      it('should handle punctuation-only original text', () => {
        const result = compareTexts('!!!', 'hello', getMessages());
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false }
        ]);
      });
    });

    describe('accuracy calculations', () => {
      it('should round accuracy to nearest integer', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello world',
          getMessages()
        ); // 2 out of 3 = 66.67%
        expect(result.accuracy).toBe(67);
      });

      it('should handle zero division when original is empty after normalization', () => {
        const result = compareTexts('   ', 'hello', getMessages());
        expect(result.accuracy).toBe(0);
      });
    });
  });
});
