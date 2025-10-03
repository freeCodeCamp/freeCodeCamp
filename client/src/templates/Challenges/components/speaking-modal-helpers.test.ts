import { describe, it, expect } from 'vitest';
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
          { word: 'beautiful', isCorrect: false, isMissing: true },
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

      it('should handle shorter utterance with missing words', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false, isMissing: true },
          { word: 'world', isCorrect: true }
        ]);
      });

      it('should handle longer utterance with extra words', () => {
        const result = compareTexts('Hello world', 'Hello beautiful world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false },
          { word: 'world', isCorrect: true }
        ]);
      });

      it('should handle completely different text', () => {
        const result = compareTexts('Hello world', 'Goodbye universe');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false, isMissing: true },
          { word: 'world', isCorrect: false, isMissing: true },
          { word: 'goodbye', isCorrect: false },
          { word: 'universe', isCorrect: false }
        ]);
      });

      it('should handle repeated words correctly', () => {
        const result = compareTexts(
          'hello hello hello hello hello',
          'hello hello hello hello'
        );
        const correctCount = result.comparison!.filter(w => w.isCorrect).length;
        const missingCount = result.comparison!.filter(w => w.isMissing).length;
        expect(correctCount).toBe(4);
        expect(missingCount).toBe(1);
        expect(result.comparison!.length).toBe(5);
        expect(result.status).toBe('partially-correct');
      });

      it('should handle missing word in middle of sentence', () => {
        const result = compareTexts(
          'The cat sat on the mat',
          'The cat on the mat'
        );
        expect(result.comparison).toEqual([
          { word: 'the', isCorrect: true },
          { word: 'cat', isCorrect: true },
          { word: 'sat', isCorrect: false, isMissing: true },
          { word: 'on', isCorrect: true },
          { word: 'the', isCorrect: true },
          { word: 'mat', isCorrect: true }
        ]);
        expect(result.status).toBe('partially-correct');
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
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false, isMissing: true },
          { word: 'world', isCorrect: false, isMissing: true }
        ]);
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
      it('should calculate accuracy based on correct words', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false, isMissing: true },
          { word: 'world', isCorrect: true }
        ]);
        expect(result.status).toBe('incorrect');
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
