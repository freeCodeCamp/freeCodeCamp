export const normalizeTwitter = (
  handleOrUrl: string | null
): string | undefined => {
  if (!handleOrUrl) return undefined;

  let url;
  try {
    new URL(handleOrUrl);
  } catch {
    url = `https://twitter.com/${handleOrUrl.replace(/^@/, '')}`;
  }
  return url ?? handleOrUrl;
};
