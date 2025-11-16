import { describe, it, expect } from 'vitest';
import { SceneCommand } from '../../../../redux/prop-types';
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
          startTime: 0,
          dialogue: {
            text: 'Hello world',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: Hello world\n');
    });

    it('should build transcript from multiple commands with dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: 'Hello',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 1,
          dialogue: {
            text: 'Hi there',
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
          '\n<strong>Quincy</strong>: Hi there\n' +
          '\n<strong>Naomi</strong>: How are you?\n'
      );
    });

    it('should skip commands without dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
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
          startTime: 0,
          dialogue: {
            text: "I'm fine, thanks! How about you?",
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        "\n<strong>Naomi</strong>: I'm fine, thanks! How about you?\n"
      );
    });

    it('should handle dialogue with punctuation', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: 'What? No way!',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: What? No way!\n');
    });

    it('should handle dialogue with numbers', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: 'I have 3 apples and 5 oranges.',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: I have 3 apples and 5 oranges.\n'
      );
    });

    it('should handle empty dialogue text', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: '',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: \n');
    });

    it('should handle commands with various align values', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: 'Left aligned',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 1,
          dialogue: {
            text: 'Right aligned',
            align: 'right'
          }
        },
        {
          character: 'Naomi',
          startTime: 2,
          dialogue: {
            text: 'Center aligned',
            align: 'center'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Left aligned\n' +
          '\n<strong>Quincy</strong>: Right aligned\n' +
          '\n<strong>Naomi</strong>: Center aligned\n'
      );
    });

    it('should handle commands with additional properties', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          background: 'office.png',
          position: { x: 100, y: 200 },
          opacity: 0.8,
          dialogue: {
            text: 'Hello',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 1,
          finishTime: 5,
          dialogue: {
            text: 'Hi',
            align: 'right'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Hello\n' + '\n<strong>Quincy</strong>: Hi\n'
      );
    });

    it('should preserve order of commands', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 2,
          dialogue: {
            text: 'Third',
            align: 'left'
          }
        },
        {
          character: 'Quincy',
          startTime: 0,
          dialogue: {
            text: 'First',
            align: 'left'
          }
        },
        {
          character: 'Naomi',
          startTime: 1,
          dialogue: {
            text: 'Second',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(
        '\n<strong>Naomi</strong>: Third\n' +
          '\n<strong>Quincy</strong>: First\n' +
          '\n<strong>Naomi</strong>: Second\n'
      );
    });

    it('should handle long dialogue text', () => {
      const longText =
        'This is a very long dialogue that spans multiple words and contains a lot of content that might be used in a scene.';
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: longText,
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe(`\n<strong>Naomi</strong>: ${longText}\n`);
    });

    it('should handle dialogue with newlines and whitespace', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
          dialogue: {
            text: 'Hello  world',
            align: 'left'
          }
        }
      ];
      const result = buildTranscript(commands);
      expect(result).toBe('\n<strong>Naomi</strong>: Hello  world\n');
    });

    it('should handle multiple consecutive commands from same character', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
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

    it('should handle HTML-like content in dialogue', () => {
      const commands: SceneCommand[] = [
        {
          character: 'Naomi',
          startTime: 0,
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
