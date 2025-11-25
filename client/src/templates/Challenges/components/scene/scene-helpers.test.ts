import { describe, it, expect } from 'vitest';
import { type SceneCommand } from '../../../../redux/prop-types';
import { buildTranscript } from './scene-helpers';

describe('scene-helpers', () => {
  describe('buildTranscript', () => {
    it('should return empty string for empty commands array', () => {
      const commands: SceneCommand[] = [];
      const result = buildTranscript(commands);
      expect(result).toBe('');
    });

    it('should build transcript from single command with dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Hello world, I have 5 cats',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Hello world, I have 5 cats\n'
      );
    });

    it('should build transcript from multiple commands with dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Hello',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 1,
          dialogue: {
            text: 'Hi there, I found 3 bugs',
            align: 'right'
          }
        },
        {
          character: 'Naomi',
          startTime: 2,
          dialogue: {
            text: 'How are you?',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Hello\n' +
          '\n<strong>Quincy</strong>: Hi there, I found 3 bugs\n' +
          '\n<strong>Naomi</strong>: How are you?\n'
      );
    });

    it('should skip commands without dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Hello',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 1
          // No dialogue
        },
        {
          character: 'Naomi',
          startTime: 2,
          dialogue: {
            text: 'How are you?',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Hello\n' +
          '\n<strong>Naomi</strong>: How are you?\n'
      );
    });

    it('should handle dialogue with special characters', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'He said "I love TypeScript!" & she replied, \'I prefer Ruby! #ruby #rubyonrails\'',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: He said "I love TypeScript!" & she replied, \'I prefer Ruby! #ruby #rubyonrails\'\n'
      );
    });

    it('should handle empty dialogue text', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: '',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: \n');
    });

    it('should handle dialogue with newlines', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Hello\nworld',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: Hello\nworld\n');
    });

    it('should handle multiple consecutive commands from same character', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'First line',
            align: 'left'
          }
        },
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Second line',
            align: 'left'
          }
        },
        {
          character: 'Naomi',
          startTime: 2,
          dialogue: {
            text: 'Third line',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: First line\n' +
          '\n<strong>Naomi</strong>: Second line\n' +
          '\n<strong>Naomi</strong>: Third line\n'
      );
    });

    it('should preserve HTML content', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Use <div> and <span> tags',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Use <div> and <span> tags\n'
      );
    });
  });
});
