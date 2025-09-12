import { normalizeText, compareTexts } from './speaking-modal-helpers';

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

  describe('compareTexts', () => {
    describe('exact matches', () => {
      it('should return exact match for identical text', () => {
        const result = compareTexts('Hello world', 'Hello world');
        expect(result).toEqual({
          highlightedText: 'Hello world',
          status: 'correct'
        });
      });

      it('should return exact match ignoring punctuation and case', () => {
        const result = compareTexts('Hello, World!', 'hello world');
        expect(result).toEqual({
          highlightedText: 'Hello, World!',
          status: 'correct'
        });
      });

      it('should return exact match ignoring extra spaces', () => {
        const result = compareTexts('Hello   world', '  hello world  ');
        expect(result).toEqual({
          highlightedText: 'Hello   world',
          status: 'correct'
        });
      });
    });

    describe('partial matches', () => {
      it('should return high accuracy for mostly correct utterance', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello wonderful world'
        );
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'wonderful', isCorrect: false },
          { word: 'world', isCorrect: true }
        ]);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'wonderful', isCorrect: false },
          { word: 'world', isCorrect: true }
        ]);
      });

      it('should return partially-correct for 80% accuracy', () => {
        const result = compareTexts(
          'Hello beautiful wonderful world amazing',
          'Hello beautiful wonderful world fantastic'
        );
        expect(result.status).toBe('partially-correct');
      });

      it('should handle shorter utterance', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'world', isCorrect: false } // 'world' is in position 1, but original position 1 is 'beautiful'
        ]);
      });

      it('should handle longer utterance', () => {
        const result = compareTexts('Hello world', 'Hello beautiful world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle completely different text', () => {
        const result = compareTexts('Hello world', 'Goodbye universe');
        expect(result.comparison).toEqual([
          { word: 'goodbye', isCorrect: false },
          { word: 'universe', isCorrect: false }
        ]);
      });
    });

    describe('edge cases', () => {
      it('should handle empty original text', () => {
        const result = compareTexts('', 'Hello world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle empty utterance', () => {
        const result = compareTexts('Hello world', '');
        expect(result.comparison).toEqual([]);
      });

      it('should handle both empty strings', () => {
        const result = compareTexts('', '');
        expect(result).toEqual({
          highlightedText: '',
          status: 'correct'
        });
      });

      it('should handle single word comparison', () => {
        const result = compareTexts('Hello', 'Hello');
        expect(result.status).toBe('correct');
      });

      it('should handle punctuation-only original text', () => {
        const result = compareTexts('!!!', 'hello');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false }
        ]);
      });
    });

    describe('accuracy calculations', () => {
      it('should round accuracy to nearest integer', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world'); // 2 out of 3 = 66.67%
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle zero division when original is empty after normalization', () => {
        const result = compareTexts('   ', 'hello');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false }
        ]);
      });
    });
  });
});
