import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PinyinToneInput, { convertToPinyinWithTones } from './pinyin-tone-input';

describe('convertToPinyinWithTones', () => {
  test('should convert single syllable with tone number to pinyin with tone mark', () => {
    expect(convertToPinyinWithTones('ni3')).toBe('nǐ');
    expect(convertToPinyinWithTones('hao3')).toBe('hǎo');
  });

  test('should handle all five tones correctly', () => {
    expect(convertToPinyinWithTones('ma1')).toBe('mā');
    expect(convertToPinyinWithTones('ma2')).toBe('má');
    expect(convertToPinyinWithTones('ma3')).toBe('mǎ');
    expect(convertToPinyinWithTones('ma4')).toBe('mà');
    expect(convertToPinyinWithTones('ma5')).toBe('ma');

    expect(convertToPinyinWithTones('v1')).toBe('ǖ');
    expect(convertToPinyinWithTones('v2')).toBe('ǘ');
    expect(convertToPinyinWithTones('v3')).toBe('ǚ');
    expect(convertToPinyinWithTones('v4')).toBe('ǜ');
    expect(convertToPinyinWithTones('v5')).toBe('ü');
  });

  test('should convert tone number before final letter', () => {
    expect(convertToPinyinWithTones('she2n')).toBe('shén');
  });

  test('should convert tone number after final letter', () => {
    expect(convertToPinyinWithTones('shen2')).toBe('shén');
    expect(convertToPinyinWithTones('dian3')).toBe('diǎn');
  });

  test('should chain multiple syllables without spaces', () => {
    expect(convertToPinyinWithTones('qing3wen4ni3jiao4shen2me5ming2zi5')).toBe(
      'qǐngwènnǐjiàoshénmemíngzi'
    );
  });

  test('should preserve spaces between syllables', () => {
    expect(
      convertToPinyinWithTones('qing3 wen4 ni3 jiao4 shen2 me5 ming2 zi5')
    ).toBe('qǐng wèn nǐ jiào shén me míng zi');
    expect(convertToPinyinWithTones('ni3    hao3')).toBe('nǐ    hǎo');
  });

  test('should handle uppercase input case-insensitively', () => {
    expect(convertToPinyinWithTones('NI3HAO3')).toBe('nǐhǎo');
    expect(convertToPinyinWithTones('Ni3hAO3')).toBe('nǐhǎo');
  });

  test('should handle incomplete syllables without tone numbers', () => {
    expect(convertToPinyinWithTones('ni')).toBe('ni');
    expect(convertToPinyinWithTones('niha')).toBe('niha');
  });

  test('should handle mixed complete and incomplete syllables', () => {
    expect(convertToPinyinWithTones('ni3ha')).toBe('nǐha');
    expect(convertToPinyinWithTones('ni3hao')).toBe('nǐhao');
  });
});

describe('PinyinToneInput component', () => {
  test('should convert syllable when tone number is typed', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3');
    expect(input.value).toBe('nǐ');
  });

  test('should chain multiple syllables without spaces', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('nǐhǎo');
  });

  test('should convert syllables with spaces', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3 hao3');
    expect(input.value).toBe('nǐ hǎo');
  });

  test('should allow changing the tone digit for a syllable', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3');
    expect(input.value).toBe('nǐ');

    // Replace tone 3 with tone 4
    await userEvent.type(input, '4');
    expect(input.value).toBe('nì');
  });

  test('should clear the input when selecting all and pressing backspace', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('nǐhǎo');

    await userEvent.clear(input);
    expect(input.value).toBe('');
  });

  test('should handle tone number before final letter', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'she2n');
    expect(input.value).toBe('shén');
  });

  test('should remove tone mark when backspacing', async () => {
    const mockOnChange = vi.fn();
    const expectedMap: Record<string, string> = {
      ni3hao: 'nǐhao',
      ni3ha: 'nǐha',
      ni3h: 'nǐh',
      ni3: 'nǐ',
      ni: 'ni',
      n: 'n'
    };

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('nǐhǎo');

    const rawSteps = ['ni3hao', 'ni3ha', 'ni3h', 'ni3', 'ni', 'n'];
    for (const step of rawSteps) {
      await userEvent.type(input, '{Backspace}');
      expect(input.value).toBe(expectedMap[step]);
    }
  });

  test('should remove final letter before tone mark when backspacing syllables with tone before final letter', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    // Type 'she2n' - tone digit before final letter
    await userEvent.type(input, 'she2n');
    expect(input.value).toBe('shén');

    // First backspace removes the final letter 'n'
    await userEvent.type(input, '{Backspace}');
    expect(input.value).toBe('shé');

    // Second backspace removes the tone mark
    await userEvent.type(input, '{Backspace}');
    expect(input.value).toBe('she');
  });

  test('should allow inserting mid-string', async () => {
    const mockOnChange = vi.fn();

    render(
      <PinyinToneInput
        index={0}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('nǐhǎo');

    // Simulate mid-string edit: insert 'x' between the syllables
    await userEvent.type(input, 'x', {
      initialSelectionStart: 1,
      initialSelectionEnd: 1
    });

    expect(input.value).toBe('nxǐhǎo');
  });
});
