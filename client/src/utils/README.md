690690# Utils Directory

This directory contains utility functions for the freeCodeCamp client application.

## normalize-whitespace.ts

This module provides utility functions to normalize whitespace in element text content, which is useful for testing element content that may contain unexpected whitespace or newlines.

### Problem Solved

The issue described in task #60690: "new lines cause failures in tests checking element content" occurs when tests compare element text (like `innerText`) against expected strings using assertions. Newlines and other whitespace characters can cause these tests to fail unexpectedly.

### Functions

#### `normalizeWhitespace(text: string | null | undefined): string`

Normalizes whitespace in text content by:

- Replacing multiple whitespace characters (including newlines, tabs, spaces) with a single space
- Trimming leading and trailing whitespace
- Handling null/undefined values gracefully

#### `getNormalizedText(element: HTMLElement | null | undefined, property?: 'innerText' | 'textContent'): string`

A convenience function that combines element selection with whitespace normalization.

### Usage Examples

#### Before (Problematic Code)

```typescript
const spanEl = document.querySelector('span');
assert.match(spanEl?.innerText, /^[⭐☆]{10}$/);
```

#### After (Fixed Code)

```typescript
import { getNormalizedText } from '../utils/normalize-whitespace';

const spanEl = document.querySelector('span');
const normalizedText = getNormalizedText(spanEl);
assert.match(normalizedText, /^[⭐☆]{10}$/);
```

#### Alternative Approach

```typescript
import { normalizeWhitespace } from '../utils/normalize-whitespace';

const spanEl = document.querySelector('span');
const actual = normalizeWhitespace(spanEl?.innerText);
assert.match(actual, /^[⭐☆]{10}$/);
```

### When to Use

Use these functions when:

- Testing element content that may contain unexpected whitespace
- Comparing element text against regex patterns
- Working with user-generated content that may have inconsistent formatting
- Writing tests that need to be robust against whitespace variations

### Benefits

- **Robust Testing**: Tests become more reliable and less prone to whitespace-related failures
- **Consistent Behavior**: Normalized text provides predictable results for assertions
- **Better User Experience**: Handles cases where content may have been formatted with extra whitespace
- **Maintainable Code**: Centralized whitespace normalization logic
