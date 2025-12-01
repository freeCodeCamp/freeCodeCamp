import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';
import PinyinToHanziInput, { convertToHanzi } from './pinyin-to-hanzi-input';

describe('convertToHanzi', () => {
  test('should convert when tone number appears after final letter', () => {
    // Only the correct tone gets converted to hanzi
    expect(convertToHanzi('shen2', { hanzi: '什', pinyin: 'shén' })).toBe('什');

    // Incorrect tones stay as pinyin
    expect(convertToHanzi('shen1', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shēn'
    );
    expect(convertToHanzi('shen3', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shěn'
    );
    expect(convertToHanzi('shen4', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shèn'
    );
    expect(convertToHanzi('shen5', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shen'
    );
  });

  test('should convert when tone number appears before final letter', () => {
    // Only the correct tone gets converted to hanzi
    expect(convertToHanzi('she2n', { hanzi: '什', pinyin: 'shén' })).toBe('什');

    // Incorrect tones stay as pinyin
    expect(convertToHanzi('she1n', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shēn'
    );
    expect(convertToHanzi('she3n', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shěn'
    );
    expect(convertToHanzi('she4n', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shèn'
    );
    expect(convertToHanzi('she5n', { hanzi: '什', pinyin: 'shén' })).toBe(
      'shen'
    );
  });

  test('should convert both correct syllables to hanzi', () => {
    expect(convertToHanzi('ni3hao3', { hanzi: '你好', pinyin: 'nǐ hǎo' })).toBe(
      '你好'
    );
  });

  test('should handle multiple syllables with space', () => {
    expect(
      convertToHanzi('ni3    hao3', { hanzi: '你好', pinyin: 'nǐ hǎo' })
    ).toBe('你    好');
  });

  test('should allow extra syllables and render them as pinyin', () => {
    expect(
      convertToHanzi('ni3hao3ma3', { hanzi: '你好', pinyin: 'nǐ hǎo' })
    ).toBe('你好mǎ');
  });

  test('should show toned pinyin for wrong syllable and convert correct one', () => {
    expect(convertToHanzi('ni4hao3', { hanzi: '你好', pinyin: 'nǐ hǎo' })).toBe(
      'nì好'
    );

    expect(convertToHanzi('ni3hao4', { hanzi: '你好', pinyin: 'nǐ hǎo' })).toBe(
      '你hào'
    );
  });

  test('should only convert when input has tone 5', () => {
    expect(
      convertToHanzi('shen2me', { hanzi: '什么', pinyin: 'shén me' })
    ).toBe('什me');

    expect(
      convertToHanzi('shen2me5', { hanzi: '什么', pinyin: 'shén me' })
    ).toBe('什么');
  });

  test('should convert long phrase properly', () => {
    const longPhrase = {
      hanzi: '请问你叫什么名字',
      pinyin: 'qǐng wèn nǐ jiào shén me míng zi'
    };
    expect(
      convertToHanzi('qing3 wen4 ni3 jiao4 shen2 me5 ming2 zi5', longPhrase)
    ).toBe('请 问 你 叫 什 么 名 字');
  });

  test('should handle uppercase input case-insensitively', () => {
    expect(convertToHanzi('NI3HAO3', { hanzi: '你好', pinyin: 'nǐ hǎo' })).toBe(
      '你好'
    );
    expect(convertToHanzi('Ni3hAO3', { hanzi: '你好', pinyin: 'nǐ hǎo' })).toBe(
      '你好'
    );
  });
});

describe('PinyinToHanziInput component', () => {
  test.each([
    [null, false],
    [true, false],
    [false, true]
  ])(
    'should have aria-invalid="%s" when isCorrect is %s',
    (isCorrect, expectedAriaInvalid) => {
      const expectedAnswer = { hanzi: '你好', pinyin: 'nǐ hǎo' };
      const mockOnChange = vi.fn();

      render(
        <PinyinToHanziInput
          index={0}
          expectedAnswer={expectedAnswer}
          isCorrect={isCorrect}
          onChange={mockOnChange}
          maxLength={100}
          size={20}
          ariaLabel='blank'
        />
      );

      const input = screen.getByLabelText<HTMLInputElement>('blank');

      if (expectedAriaInvalid) {
        expect(input).toHaveAttribute('aria-invalid', 'true');
      } else {
        expect(input).not.toHaveAttribute('aria-invalid');
      }
    }
  );

  test('should convert when tone number appears before final letter (she2n me5)', async () => {
    const expectedAnswer = { hanzi: '什么', pinyin: 'shén me' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'she2nme');
    expect(input.value).toBe('什me');

    // Type the final tone digit to complete the pinyin
    await userEvent.type(input, '5');
    expect(input.value).toBe('什么');
  });

  test('should convert when tone number appears after final letter (shen2 me)', async () => {
    const expectedAnswer = { hanzi: '什么', pinyin: 'shén me' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'shen2me');
    expect(input.value).toBe('什me');

    // Type the final tone digit to complete the pinyin
    await userEvent.type(input, '5');
    expect(input.value).toBe('什么');
  });

  test('should revert hanzi back to toned pinyin and remove tone when backspacing', async () => {
    const expectedAnswer = { hanzi: '什么', pinyin: 'shén me' };
    const mockOnChange = vi.fn();
    const expectedMap: Record<string, string> = {
      she2nme: '什me',
      she2nm: '什m',
      she2n: '什',
      she2: 'shé',
      she: 'she'
    };

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'she2nme5');
    expect(input.value).toBe('什么');

    const rawSteps = ['she2nme', 'she2nm', 'she2n', 'she2', 'she'];
    for (const step of rawSteps) {
      await userEvent.type(input, '{Backspace}');
      expect(input.value).toBe(expectedMap[step]);
    }
  });

  test('should clear the input when selecting all and pressing backspace', async () => {
    const expectedAnswer = { hanzi: '你好', pinyin: 'nǐ hǎo' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('你好');

    await userEvent.clear(input);
    expect(input.value).toBe('');
  });

  test('should revert a single hanzi character to partial pinyin when backspacing', async () => {
    const expectedAnswer = { hanzi: '你', pinyin: 'nǐ' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3');
    expect(input.value).toBe('你');

    // Backspace to revert the character to partial pinyin
    await userEvent.type(input, '{Backspace}');
    expect(input.value).toBe('ni');
  });

  test('should allow changing the tone digit for a syllable (shen3 -> shěn -> shèn)', async () => {
    const expectedAnswer = { hanzi: '什么', pinyin: 'shén me' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'shen3');
    expect(input.value).toBe('shěn');

    // Replace tone 3 with 4
    await userEvent.type(input, '4');
    expect(input.value).toBe('shèn');
  });

  test('should allow extra syllables beyond expected answer', async () => {
    const expectedAnswer = { hanzi: '你好', pinyin: 'nǐ hǎo' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3ma3');
    expect(input.value).toBe('你好mǎ');
  });

  test('should allow inserting mid-string and preserve converted hanzi', async () => {
    const expectedAnswer = { hanzi: '你好', pinyin: 'nǐ hǎo' };
    const mockOnChange = vi.fn();

    render(
      <PinyinToHanziInput
        index={0}
        expectedAnswer={expectedAnswer}
        isCorrect={null}
        onChange={mockOnChange}
        maxLength={100}
        size={20}
        ariaLabel='blank'
      />
    );

    const input = screen.getByLabelText<HTMLInputElement>('blank');

    await userEvent.type(input, 'ni3hao3');
    expect(input.value).toBe('你好');

    // Simulate mid-string edit: insert 'x' between the characters
    await userEvent.type(input, 'x', {
      initialSelectionStart: 1,
      initialSelectionEnd: 1
    });

    expect(input.value).toBe('你x好');
  });
});
