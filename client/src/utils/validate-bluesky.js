// client/src/utils/validate-bluesky.js
const BLUESKY_REGEX = /^https:\/\/bsky\.app\/profile\/[\w.-]+$/;
const CUSTOM_DOMAIN_REGEX = /^https:\/\/bsky\.app\/profile\/[\w.-]+\.[\w.-]+$/;

export const validateBlueskyUrl = (url) => {
  if (!url) return true; // Optional field
  return BLUESKY_REGEX.test(url) || CUSTOM_DOMAIN_REGEX.test(url);
};

export const formatBlueskyUrl = (input) => {
  if (!input) return '';
  if (input.startsWith('https://')) return input;
  return `https://bsky.app/profile/${input}`;
};