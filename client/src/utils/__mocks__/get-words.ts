import { vi } from 'vitest';

export const randomQuote = vi.fn(() => ({
  quote: 'Test quote',
  author: 'Test author'
}));
export const randomCompliment = vi.fn(() => 'Great job!');
