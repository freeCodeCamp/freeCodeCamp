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
      expect(result).toBe('<p><b>Naomi</b>: Hello world, I have 5 cats</p>');
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
        '<p><b>Naomi</b>: Hello</p>' +
          '<p><b>Quincy</b>: Hi there, I found 3 bugs</p>' +
          '<p><b>Naomi</b>: How are you?</p>'
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
        '<p><b>Naomi</b>: Hello</p>' + '<p><b>Naomi</b>: How are you?</p>'
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
        '<p><b>Naomi</b>: He said "I love TypeScript!" & she replied, \'I prefer Ruby! #ruby #rubyonrails\'</p>'
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
      expect(result).toBe('<p><b>Naomi</b>: </p>');
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
      expect(result).toBe('<p><b>Naomi</b>: Hello\nworld</p>');
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
        '<p><b>Naomi</b>: First line</p>' +
          '<p><b>Naomi</b>: Second line</p>' +
          '<p><b>Naomi</b>: Third line</p>'
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
      expect(result).toBe('<p><b>Naomi</b>: Use <div> and <span> tags</p>');
    });

    it('should preserve Chinese dialogue with ruby annotations', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: '<ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>世界<rp>(</rp><rt>shì jiè</rt><rp>)</rp></ruby>。',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '<p><b>Naomi</b>: <ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>世界<rp>(</rp><rt>shì jiè</rt><rp>)</rp></ruby>。</p>'
      );
    });

    it('should wrap dialogue lines in p tags and speakers in b tags', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Alice',
          startTime: 1,
          dialogue: {
            text: 'Hello',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toContain('<p>');
      expect(result).toContain('</p>');
      expect(result).toContain('<b>Alice</b>');
    });
  });
});
