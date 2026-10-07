/**
 * @internal
 * Removes leading zeros and explicit plus from textual representation of a number.
 */
export function removeLeadingZerosAndExplicitPlus(str: string): string {
  if (str === '') {
    return str;
  }

  let startIndex = 0;

  const isNegative = str[startIndex] === '-';
  const isExplicitlyPositive = str[startIndex] === '+';

  if (isExplicitlyPositive || isNegative) {
    startIndex += 1;
  }

  let foundInsignificantZero = false;

  for (; startIndex < str.length && str[startIndex] === '0'; ++startIndex) {
    foundInsignificantZero = true;
  }

  if (!foundInsignificantZero) {
    return isExplicitlyPositive ? str.slice(1) : str;
  }

  return `${isNegative ? '-' : ''}${str.length === startIndex ? '0' : str.slice(startIndex)}`;
}

/**
 * @internal
 * Returns false for an string that contains invalid characters for its radix, else returns the original string.
 * @param str - The textual representation of the Long
 * @param radix - The radix in which the text is written (2-36), defaults to 10
 */
export function validateStringCharacters(str: string, radix?: number): false | string {
  radix = radix ?? 10;
  const validCharacters = '0123456789abcdefghijklmnopqrstuvwxyz'.slice(0, radix);
  // regex is case insensitive and checks that each character within the string is one of the validCharacters
  const regex = new RegExp(`[^-+${validCharacters}]`, 'i');
  return regex.test(str) ? false : str;
}
