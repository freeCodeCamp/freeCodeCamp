/**
 * Normalizes whitespace in element text content by replacing multiple whitespace
 * characters (including newlines) with a single space and trimming the result.
 * This is useful for testing element content that may contain unexpected
 * whitespace or newlines.
 *
 * @param text - The text content to normalize
 * @returns The normalized text with consistent whitespace
 *
 * @example
 * ```typescript
 * const spanEl = document.querySelector('span');
 * const normalizedText = normalizeWhitespace(spanEl?.innerText);
 * assert.match(normalizedText, /^[⭐☆]{10}$/);
 * ```
 */
export function normalizeWhitespace(text: string | null | undefined): string {
  if (text == null) return '';
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Normalizes whitespace in element text content and returns the result.
 * This is a convenience function that combines element selection with
 * whitespace normalization.
 *
 * @param element - The DOM element to get normalized text from
 * @param property - The text property to use (defaults to 'innerText')
 * @returns The normalized text content
 *
 * @example
 * ```typescript
 * const spanEl = document.querySelector('span');
 * const normalizedText = getNormalizedText(spanEl);
 * assert.match(normalizedText, /^[⭐☆]{10}$/);
 * ```
 */
export function getNormalizedText(
  element: HTMLElement | null | undefined,
  property: 'innerText' | 'textContent' = 'innerText'
): string {
  if (!element) return '';
  const text =
    property === 'innerText' ? element.innerText : element.textContent;
  return normalizeWhitespace(text);
}
