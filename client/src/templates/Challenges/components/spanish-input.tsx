import React, { useState } from 'react';

export function convertToSpanishWithAccents(raw: string): string {
  if (!raw) return raw;

  let result = '';
  let i = 0;

  while (i < raw.length) {
    const char = raw[i];

    if (char === "'" && i + 1 < raw.length) {
      const nextChar = raw[i + 1].toLowerCase();
      if (nextChar === 'a') {
        result += 'á';
        i += 2;
        continue;
      } else if (nextChar === 'e') {
        result += 'é';
        i += 2;
        continue;
      } else if (nextChar === 'i') {
        result += 'í';
        i += 2;
        continue;
      } else if (nextChar === 'o') {
        result += 'ó';
        i += 2;
        continue;
      } else if (nextChar === 'u') {
        result += 'ú';
        i += 2;
        continue;
      }
      result += "'";
      i++;
    } else if (char === '~' && i + 1 < raw.length) {
      const nextChar = raw[i + 1].toLowerCase();
      if (nextChar === 'n') {
        result += 'ñ';
        i += 2;
        continue;
      } else if (nextChar === 'a') {
        result += 'ã';
        i += 2;
        continue;
      } else if (nextChar === 'o') {
        result += 'õ';
        i += 2;
        continue;
      }
      result += '~';
      i++;
    } else if (char === '`' && i + 1 < raw.length) {
      const nextChar = raw[i + 1].toLowerCase();
      if (nextChar === 'a') {
        result += 'à';
        i += 2;
        continue;
      } else if (nextChar === 'e') {
        result += 'è';
        i += 2;
        continue;
      } else if (nextChar === 'i') {
        result += 'ì';
        i += 2;
        continue;
      } else if (nextChar === 'o') {
        result += 'ò';
        i += 2;
        continue;
      } else if (nextChar === 'u') {
        result += 'ù';
        i += 2;
        continue;
      }
      result += '`';
      i++;
    } else if (char === '"' && i + 1 < raw.length) {
      const nextChar = raw[i + 1].toLowerCase();
      if (nextChar === 'a') {
        result += 'ä';
        i += 2;
        continue;
      } else if (nextChar === 'e') {
        result += 'ë';
        i += 2;
        continue;
      } else if (nextChar === 'i') {
        result += 'ï';
        i += 2;
        continue;
      } else if (nextChar === 'o') {
        result += 'ö';
        i += 2;
        continue;
      } else if (nextChar === 'u') {
        result += 'ü';
        i += 2;
        continue;
      }
      result += '"';
      i++;
    } else if (char === '^' && i + 1 < raw.length) {
      const nextChar = raw[i + 1].toLowerCase();
      if (nextChar === 'a') {
        result += 'â';
        i += 2;
        continue;
      } else if (nextChar === 'e') {
        result += 'ê';
        i += 2;
        continue;
      } else if (nextChar === 'i') {
        result += 'î';
        i += 2;
        continue;
      } else if (nextChar === 'o') {
        result += 'ô';
        i += 2;
        continue;
      } else if (nextChar === 'u') {
        result += 'û';
        i += 2;
        continue;
      }
      result += '^';
      i++;
    } else {
      result += char;
      i++;
    }
  }

  return result;
}

interface SpanishInputProps {
  index: number;
  isCorrect: boolean | null;
  onChange: (index: number, value: string) => void;
  className?: string;
  maxLength: number;
  size: number;
  ariaLabel: string;
}

function SpanishInput({
  index,
  isCorrect,
  onChange,
  className,
  maxLength,
  size,
  ariaLabel
}: SpanishInputProps): JSX.Element {
  const [rawInput, setRawInput] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const prevDisplayLength = displayValue.length;
    const inputLength = inputValue.length;

    const isAppendingAtEnd =
      inputLength > prevDisplayLength &&
      inputValue.startsWith(displayValue);
    const isDeletingFromEnd =
      inputLength < prevDisplayLength && displayValue.startsWith(inputValue);

    let newRawInput: string;

    if (isAppendingAtEnd) {
      const added = inputValue.substring(prevDisplayLength);

      const accentedToSequence: Record<string, string> = {
        á: "'a",
        é: "'e",
        í: "'i",
        ó: "'o",
        ú: "'u",
        ñ: '~n',
        à: '`a',
        è: '`e',
        ì: '`i',
        ò: '`o',
        ù: '`u',
        ä: '"a',
        ë: '"e',
        ï: '"i',
        ö: '"o',
        ü: '"u',
        â: '^a',
        ê: '^e',
        î: '^i',
        ô: '^o',
        û: '^u',
        ã: '~a',
        õ: '~o'
      };

      if (added.length === 1 && accentedToSequence[added]) {
        newRawInput = rawInput + accentedToSequence[added];
      } else {
        newRawInput = rawInput + added;
      }
    } else if (isDeletingFromEnd) {
      if (inputLength === 0) {
        newRawInput = '';
      } else {
        const charsToRemove = prevDisplayLength - inputLength;
        newRawInput = rawInput.slice(0, -charsToRemove);
      }
    } else {
      newRawInput = inputValue;
    }

    setRawInput(newRawInput);
    const newDisplayValue = convertToSpanishWithAccents(newRawInput);
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

SpanishInput.displayName = 'SpanishInput';

export default SpanishInput;

