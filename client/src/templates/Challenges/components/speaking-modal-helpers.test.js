import {
  normalizeText,
  formatUtterance,
  calculateAverageVolume,
  checkSilenceDetection,
  compareTexts
} from './speaking-modal-helpers';

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

  describe('calculateAverageVolume', () => {
    it('should calculate correct average for array of numbers', () => {
      const dataArray = new Uint8Array([10, 20, 30, 40]);
      expect(calculateAverageVolume(dataArray)).toBe(25);
    });

    it('should handle empty array', () => {
      const dataArray = new Uint8Array([]);
      expect(calculateAverageVolume(dataArray)).toBe(0);
    });

    it('should handle null/undefined input', () => {
      expect(calculateAverageVolume(null)).toBe(0);
      expect(calculateAverageVolume(undefined)).toBe(0);
    });

    it('should handle single value array', () => {
      const dataArray = new Uint8Array([15]);
      expect(calculateAverageVolume(dataArray)).toBe(15);
    });

    it('should handle array with zeros', () => {
      const dataArray = new Uint8Array([0, 0, 0, 0]);
      expect(calculateAverageVolume(dataArray)).toBe(0);
    });
  });

  describe('checkSilenceDetection', () => {
    const mockDate = new Date('2023-01-01T00:00:00.000Z');
    const baseTime = mockDate.getTime();

    beforeEach(() => {
      jest.spyOn(Date, 'now').mockReturnValue(baseTime);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should detect speech when volume is above threshold', () => {
      const result = checkSilenceDetection(25, baseTime - 1000, 20, 2000);
      expect(result).toEqual({
        isSpeechDetected: true,
        shouldStopRecording: false,
        newLastSpeechTime: baseTime
      });
    });

    it('should not stop recording when silence duration is below timeout', () => {
      const lastSpeechTime = baseTime - 1000; // 1 second ago
      const result = checkSilenceDetection(15, lastSpeechTime, 20, 2000);
      expect(result).toEqual({
        isSpeechDetected: false,
        shouldStopRecording: false,
        newLastSpeechTime: lastSpeechTime,
        silenceDuration: 1000
      });
    });

    it('should stop recording when silence duration exceeds timeout', () => {
      const lastSpeechTime = baseTime - 3000; // 3 seconds ago
      const result = checkSilenceDetection(15, lastSpeechTime, 20, 2000);
      expect(result).toEqual({
        isSpeechDetected: false,
        shouldStopRecording: true,
        newLastSpeechTime: lastSpeechTime,
        silenceDuration: 3000
      });
    });

    it('should use default thresholds when not provided', () => {
      const lastSpeechTime = baseTime - 2500; // 2.5 seconds ago
      const result = checkSilenceDetection(15, lastSpeechTime);
      expect(result.shouldStopRecording).toBe(true);
    });

    it('should respect custom thresholds', () => {
      const lastSpeechTime = baseTime - 1500; // 1.5 seconds ago
      const result = checkSilenceDetection(15, lastSpeechTime, 10, 1000);
      expect(result.shouldStopRecording).toBe(true);
    });

    it('should handle volume exactly at threshold', () => {
      const result = checkSilenceDetection(20, baseTime - 1000, 20, 2000);
      expect(result.isSpeechDetected).toBe(false);
    });
  });

  describe('compareTexts', () => {
    describe('exact matches', () => {
      it('should return exact match for identical text', () => {
        const result = compareTexts('Hello world', 'Hello world');
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello world',
          message: "That's correct! Congratulations!"
        });
      });

      it('should return exact match ignoring punctuation and case', () => {
        const result = compareTexts('Hello, World!', 'hello world');
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello, World!',
          message: "That's correct! Congratulations!"
        });
      });

      it('should return exact match ignoring extra spaces', () => {
        const result = compareTexts('Hello   world', '  hello world  ');
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: 'Hello   world',
          message: "That's correct! Congratulations!"
        });
      });
    });

    describe('partial matches', () => {
      it('should return high accuracy for mostly correct utterance', () => {
        const result = compareTexts(
          'Hello beautiful world',
          'Hello wonderful world'
        );
        expect(result.isExact).toBe(false);
        expect(result.accuracy).toBe(67); // 2 out of 3 words correct
        expect(result.message).toBe('Try again.');
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'wonderful', isCorrect: false },
          { word: 'world', isCorrect: true }
        ]);
      });

      it('should return good enough message for 80% or higher accuracy', () => {
        const result = compareTexts(
          'Hello beautiful wonderful world amazing',
          'Hello beautiful wonderful world fantastic'
        );
        expect(result.accuracy).toBe(80); // 4 out of 5 words correct
        expect(result.message).toBe('Very good!');
      });

      it('should handle shorter utterance', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world');
        expect(result.accuracy).toBe(67); // 2 out of 3 words correct
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'world', isCorrect: false } // 'world' is in position 1, but original position 1 is 'beautiful'
        ]);
      });

      it('should handle longer utterance', () => {
        const result = compareTexts('Hello world', 'Hello beautiful world');
        expect(result.accuracy).toBe(50); // 1 out of 2 words correct ('Hello' matches, 'beautiful' does not match 'world', 'world' has no match)
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: true },
          { word: 'beautiful', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle completely different text', () => {
        const result = compareTexts('Hello world', 'Goodbye universe');
        expect(result.accuracy).toBe(0);
        expect(result.message).toBe('Try again.');
        expect(result.comparison).toEqual([
          { word: 'goodbye', isCorrect: false },
          { word: 'universe', isCorrect: false }
        ]);
      });
    });

    describe('edge cases', () => {
      it('should handle empty original text', () => {
        const result = compareTexts('', 'Hello world');
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false },
          { word: 'world', isCorrect: false }
        ]);
      });

      it('should handle empty utterance', () => {
        const result = compareTexts('Hello world', '');
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([]);
      });

      it('should handle both empty strings', () => {
        const result = compareTexts('', '');
        expect(result).toEqual({
          isExact: true,
          accuracy: 100,
          highlightedText: '',
          message: "That's correct! Congratulations!"
        });
      });

      it('should handle single word comparison', () => {
        const result = compareTexts('Hello', 'Hello');
        expect(result.isExact).toBe(true);
        expect(result.accuracy).toBe(100);
      });

      it('should handle punctuation-only original text', () => {
        const result = compareTexts('!!!', 'hello');
        expect(result.accuracy).toBe(0);
        expect(result.comparison).toEqual([
          { word: 'hello', isCorrect: false }
        ]);
      });
    });

    describe('accuracy calculations', () => {
      it('should round accuracy to nearest integer', () => {
        const result = compareTexts('Hello beautiful world', 'Hello world'); // 1 out of 3 = 33.33%
        expect(result.accuracy).toBe(33);
      });

      it('should handle zero division when original is empty after normalization', () => {
        const result = compareTexts('   ', 'hello');
        expect(result.accuracy).toBe(0);
      });
    });
  });
});
