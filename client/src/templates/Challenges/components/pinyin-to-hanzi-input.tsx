import React, { useState } from 'react';
import { convertUnspacedPinyin } from 'pinyin-tone/v2';

// Removing tone marks from pinyin for base letter comparison.
// Uses Unicode NFD to decompose accented characters, then removes combining marks
const normalize = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/**
 * Converts raw pinyin input (with tone numbers) to hanzi characters when matching expected answer.
 *
 * Key behaviors:
 * 1. When a complete syllable with tone matches expected pinyin -> convert to hanzi
 * 2. When base letters match but tone differs -> show toned pinyin (incorrect)
 * 3. When syllable is a prefix of expected -> wait for more letters (e.g., 'shé' is prefix of 'shén')
 * 4. Spaces are preserved in the output
 */
export function convertToHanzi(
  raw: string,
  expectedAnswer: { hanzi: string; pinyin: string }
): string {
  if (!raw.trim()) return raw;

  const correctPinyins = expectedAnswer.pinyin.toLowerCase().split(/\s+/);
  const correctHanzi = [...expectedAnswer.hanzi];

  // The final string shown to the user.
  // Example: '你好' for correct input, 'nǐhǎo' for incorrect
  let displayOutput = '';

  // Accumulates characters for the current pinyin syllable.
  // Example: 'ni' while typing 'nǐ'
  let currentPinyin = '';

  // Index of the next expected pinyin syllable.
  // Example: 0 for first syllable, 1 for second
  let currentCorrectPinyinIndex = 0;

  // Pinyin syllable waiting for more input to complete.
  // Example: 'shé' when expecting 'shén' and waiting for 'n'
  let pendingPinyin = '';

  // Process each character in the raw input
  for (const character of raw) {
    // Handle spaces: flush current syllable to output and reset state
    if (character === ' ') {
      displayOutput += currentPinyin + ' ';
      currentPinyin = '';
      pendingPinyin = '';
      continue;
    }

    // Add character to current syllable
    currentPinyin += character;

    // When a tone digit is encountered, process the completed syllable
    if (/[1-5]/.test(character)) {
      // Normalize to lowercase for case-insensitive handling
      currentPinyin = currentPinyin.toLowerCase();

      const diacriticPinyin = convertUnspacedPinyin(currentPinyin); // Add tone mark

      // If all expected syllables have been processed and the user has typed more
      // syllables than the expected answer contains, append the additional pinyin
      // syllables as-is without attempting to convert them to hanzi.
      if (currentCorrectPinyinIndex >= correctPinyins.length) {
        displayOutput += diacriticPinyin;
        currentPinyin = '';
        continue;
      }

      const correctSyllable = correctPinyins[currentCorrectPinyinIndex];

      // Check if the input matches the expected syllable exactly.
      // If so, convert to hanzi.
      if (diacriticPinyin.toLowerCase() === correctSyllable.toLowerCase()) {
        displayOutput += correctHanzi[currentCorrectPinyinIndex]; // Convert to hanzi
        currentCorrectPinyinIndex++;
        currentPinyin = '';
        pendingPinyin = '';
      }
      // Check if base letters match but tone differs.
      // If so, show incorrect toned pinyin.
      else if (normalize(diacriticPinyin) === normalize(correctSyllable)) {
        displayOutput += diacriticPinyin;
        currentCorrectPinyinIndex++;
        currentPinyin = '';
        pendingPinyin = '';
      }
      // Check if input is a prefix of expected (e.g., 'shé' for 'shén').
      // If so, show pinyin and wait for more input.
      else if (
        normalize(correctSyllable).startsWith(normalize(diacriticPinyin))
      ) {
        displayOutput += diacriticPinyin;
        pendingPinyin = diacriticPinyin;
        currentPinyin = '';
      }
      // No match: show pinyin and move to next expected syllable
      else {
        displayOutput += diacriticPinyin;
        currentCorrectPinyinIndex++;
        currentPinyin = '';
        pendingPinyin = '';
      }
    }
    // Handle non-tone characters when there's pending pinyin.
    // Pending pinyin occurs when the user's input is a prefix of the expected syllable
    // (e.g., 'shé' for 'shén'). In this case, combine the pending pinyin with the new
    // non-tone characters and check if it now matches the expected syllable. If it does,
    // replace the pending pinyin in the output with the correct hanzi character.
    else if (
      pendingPinyin &&
      currentCorrectPinyinIndex < correctPinyins.length
    ) {
      const combinedPinyin = pendingPinyin + currentPinyin;
      const correctPinyin = correctPinyins[currentCorrectPinyinIndex];

      // Check if combined input now matches the expected syllable exactly.
      if (combinedPinyin.toLowerCase() === correctPinyin.toLowerCase()) {
        // Replace the pending pinyin at the end of displayOutput with the correct hanzi character
        const endIndex = displayOutput.length - pendingPinyin.length;
        displayOutput =
          displayOutput.slice(0, endIndex) +
          correctHanzi[currentCorrectPinyinIndex];
        currentCorrectPinyinIndex++;
        currentPinyin = '';
        pendingPinyin = '';
      }
      // Check if combined input matches the base letters but tone differs
      else if (normalize(combinedPinyin) === normalize(correctPinyin)) {
        // Replace the pending pinyin at the end of displayOutput with the combined pinyin
        const endIndex = displayOutput.length - pendingPinyin.length;
        displayOutput = displayOutput.slice(0, endIndex) + combinedPinyin;
        currentCorrectPinyinIndex++;
        currentPinyin = '';
        pendingPinyin = '';
      }
    }
  }

  // Append any unfinished syllable at the end
  return displayOutput + currentPinyin;
}

interface PinyinToHanziInputProps {
  index: number;
  expectedAnswer: { hanzi: string; pinyin: string };
  isCorrect: boolean | null;
  onChange: (index: number, value: string) => void;
  className?: string;
  maxLength: number;
  size: number;
  ariaLabel: string;
}

function PinyinToHanziInput({
  index,
  expectedAnswer,
  isCorrect,
  onChange,
  className,
  maxLength,
  size,
  ariaLabel
}: PinyinToHanziInputProps): JSX.Element {
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
    const newDisplayValue = convertToHanzi(newRawInput, expectedAnswer);
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

PinyinToHanziInput.displayName = 'PinyinToHanziInput';

export default PinyinToHanziInput;
