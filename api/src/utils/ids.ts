import { customAlphabet } from 'nanoid';

export const nanoidCharSet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const generateNanoId = customAlphabet(nanoidCharSet, 21);

// uppercase, lowercase letters and numbers
export const customNanoid = customAlphabet(
  '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64
);
