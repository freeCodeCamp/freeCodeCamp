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
          status: 'correct'
        });
      });

      it('should return exact match ignoring punctuation and case', () => {
        const result = compareTexts('Hello, World!', 'hello world');
        expect(result).toEqual({
          status: 'correct'
        });
      });

      it('should return exact match ignoring extra spaces', () => {
        const result = compareTexts('Hello   world', '  hello world  ');
        expect(result).toEqual({
          status: 'correct'
        });
      });
    });

    describe('partial matches', () => {
      it('should mark individual wrong words as incorrect', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello wonderful world'
        );
        expect(result.comparison).toEqual([
          { expected: 'hello', actual: 'hello' },
          { expected: 'beautiful', actual: 'wonderful' },
          { expected: 'world', actual: 'world' }
        ]);
      });

      it('should handle shorter utterance with a missing word', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.comparison).toEqual([
          { expected: 'hello', actual: 'hello' },
          { expected: 'beautiful' },
          { expected: 'world', actual: 'world' }
        ]);
      });

      it('should handle consecutive missing words', () => {
        const result = compareTexts('a b c d', 'a d');
        expect(result.comparison).toEqual([
          { expected: 'a', actual: 'a' },
          { expected: 'b' },
          { expected: 'c' },
          { expected: 'd', actual: 'd' }
        ]);
      });

      it('should handle consecutive extra words', () => {
        const result = compareTexts('a d', 'a b c d');
        expect(result.comparison).toEqual([
          { expected: 'a', actual: 'a' },
          { actual: 'b' },
          { actual: 'c' },
          { expected: 'd', actual: 'd' }
        ]);
      });

      it('should handle missing words in longer sentences', () => {
        const result = compareTexts('a b c d e f g', 'a b c e f g');
        expect(result.comparison).toEqual([
          { expected: 'a', actual: 'a' },
          { expected: 'b', actual: 'b' },
          { expected: 'c', actual: 'c' },
          { expected: 'd' },
          { expected: 'e', actual: 'e' },
          { expected: 'f', actual: 'f' },
          { expected: 'g', actual: 'g' }
        ]);
      });

      it('should pad shorter utterance with undefined for alignment', () => {
        const result = compareTexts('a b c', 'b c');
        expect(result.comparison).toEqual([
          { expected: 'a' },
          { expected: 'b', actual: 'b' },
          { expected: 'c', actual: 'c' }
        ]);
      });

      it('should handle completely different texts that are longer than the original', () => {
        const result = compareTexts('a b', 'c d e');
        expect(result.comparison).toEqual([
          { expected: 'a', actual: 'c' },
          { expected: 'b', actual: 'd' },
          { actual: 'e' }
        ]);
      });

      it('should handle completely different texts that are shorter than the original', () => {
        const result = compareTexts('a b c', 'd e');
        expect(result.comparison).toEqual([
          { expected: 'a', actual: 'd' },
          { expected: 'b', actual: 'e' },
          { expected: 'c' }
        ]);
      });

      it('should handle repeated words correctly', () => {
        const result = compareTexts(
          'hello hello hello hello hello',
          'hello hello hello hello'
        );

        expect(result.comparison).toEqual([
          { expected: 'hello', actual: 'hello' },
          { expected: 'hello', actual: 'hello' },
          { expected: 'hello', actual: 'hello' },
          { expected: 'hello', actual: 'hello' },
          { expected: 'hello' }
        ]);
      });

      it('should not ignore incorrect words in the middle of the sentence', () => {
        const result = compareTexts(
          'The cat sat on the mat',
          'The black cat sat on the mat'
        );
        expect(result.comparison).toEqual([
          { expected: 'the', actual: 'the' },
          { actual: 'black' },
          { expected: 'cat', actual: 'cat' },
          { expected: 'sat', actual: 'sat' },
          { expected: 'on', actual: 'on' },
          { expected: 'the', actual: 'the' },
          { expected: 'mat', actual: 'mat' }
        ]);
      });
    });

    describe('edge cases', () => {
      it('should handle empty utterance', () => {
        const result = compareTexts('Hello world', '');
        expect(result.comparison).toEqual([
          { expected: 'hello' },
          { expected: 'world' }
        ]);
      });

      it('should handle single word comparison', () => {
        const result = compareTexts('Hello', 'Hello');
        expect(result.status).toBe('correct');
      });

      it('should treat punctuation-only original text as if it was empty', () => {
        const result = compareTexts('!!!', 'hello');
        expect(result.comparison).toEqual([
          {
            actual: 'hello'
          }
        ]);
      });
    });

    describe('accuracy calculations', () => {
      it('should calculate accuracy based on correct words', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.status).toBe('incorrect');
      });

      it('should handle zero division when original is empty after normalization', () => {
        const result = compareTexts('   ', 'hello');
        expect(result.status).toBe('incorrect');
      });

      it('should return partially-correct for 80% accuracy', () => {
        const result = compareTexts(
          'Hello beautiful wonderful world amazing',
          'Hello beautiful wonderful world fantastic'
        );
        expect(result.status).toBe('partially-correct');
      });

      it('should handle both empty strings', () => {
        const result = compareTexts('', '');
        expect(result).toEqual({
          status: 'correct'
        });
      });
    });
  });
});
