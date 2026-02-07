import React, { useState } from 'react';
import { convertUnspacedPinyin } from 'pinyin-tone/v2';

/**
 * Converts raw pinyin input (with tone numbers) to pinyin with tone marks.
 *
 * Key behaviors:
 * 1. When a tone digit (1-5) is encountered -> convert syllable to toned pinyin
 * 2. Spaces are preserved in the output
 * 3. Incomplete syllables (without tone numbers) remain as-is
 */
export function convertToPinyinWithTones(raw: string): string {
  if (!raw.trim()) return raw;

  let displayOutput = '';
  let currentSyllable = '';

  // Process each character in the raw input
  for (const character of raw) {
    // Handle spaces: flush current syllable and preserve space
    if (character === ' ') {
      displayOutput += currentSyllable + ' ';
      currentSyllable = '';
      continue;
    }

    // Add character to current syllable
    currentSyllable += character;

    // When a tone digit is encountered, convert the syllable
    if (/[1-5]/.test(character)) {
      // Normalize to lowercase for conversion
      const normalizedSyllable = currentSyllable.toLowerCase();
      const convertedPinyin = convertUnspacedPinyin(normalizedSyllable);

      displayOutput += convertedPinyin;
      currentSyllable = '';
    }
  }

  // Append any unfinished syllable at the end
  return displayOutput + currentSyllable;
}

interface PinyinToneInputProps {
  index: number;
  isCorrect: boolean | null;
  onChange: (index: number, value: string) => void;
  className?: string;
  maxLength: number;
  size: number;
  ariaLabel: string;
}

function PinyinToneInput({
  index,
  isCorrect,
  onChange,
  className,
  maxLength,
  size,
  ariaLabel
}: PinyinToneInputProps): JSX.Element {
  const [rawInput, setRawInput] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const prevLength = displayValue.length;
    const inputLength = inputValue.length;

    const isAppendingAtEnd =
      inputLength > prevLength && inputValue.startsWith(displayValue);
    const isDeletingFromEnd =
      inputLength < prevLength && displayValue.startsWith(inputValue);

    let newRawInput: string;

    if (isAppendingAtEnd) {
      const added = inputValue.substring(prevLength);

      // Handle tone digit replacement
      if (
        added.length === 1 &&
        /[1-5]/.test(added) &&
        /[1-5]$/.test(rawInput)
      ) {
        newRawInput = rawInput.slice(0, -1) + added;
      } else {
        newRawInput = rawInput + added;
      }
    } else if (isDeletingFromEnd) {
      if (inputLength === 0) {
        // When clearing the entire input:
        // - If the previous display was a single character,
        //   assume the user wants to remove the last character from raw input
        //   (e.g., undo the tone digit that converted it, like 'ni3' -> 'ni').
        // - Otherwise, fully clear raw input to an empty string.
        newRawInput = prevLength === 1 ? rawInput.slice(0, -1) : '';
      } else {
        // Remove characters from raw input
        const charsToRemove = prevLength - inputLength;
        newRawInput = rawInput.slice(0, -charsToRemove);
      }
    } else {
      // Mid-string edit - update new raw input directly
      newRawInput = inputValue;
    }

    setRawInput(newRawInput);
    const newDisplayValue = convertToPinyinWithTones(newRawInput);
    setDisplayValue(newDisplayValue);
    onChange(index, newDisplayValue);
  };

  return (
    <input
      type='text'
      value={displayValue}
      onChange={handleChange}
      className={className}
      maxLength={maxLength}
      size={size}
      autoComplete='off'
      aria-label={ariaLabel}
      {...(isCorrect === false ? { 'aria-invalid': 'true' } : {})}
    />
  );
}

PinyinToneInput.displayName = 'PinyinToneInput';

export default PinyinToneInput;
