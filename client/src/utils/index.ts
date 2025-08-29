/*
 * This regex is not for validation, it is purely to see
 * if we are looking at something like what we want to validate
 * before we try to validate.
 */
export const maybeEmailRE = /.*@.*\.\w\w/;
export const maybeUrlRE = /https?:\/\/.*\..*/;
export const hasProtocolRE = /^http/;

// Utility functions for normalizing whitespace in element content
export { normalizeWhitespace, getNormalizedText } from './normalize-whitespace';
