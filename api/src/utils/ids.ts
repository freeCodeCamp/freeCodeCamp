import { customAlphabet } from 'nanoid';

// uppercase, lowercase letters and numbers
export const customNanoid = customAlphabet(
  '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64
);
