export const normalizeTwitter = (
  handleOrUrl: string | null
): { twitter?: string } => {
  if (!handleOrUrl) return {};

  let url;
  try {
    new URL(handleOrUrl);
  } catch {
    url = `https://twitter.com/${handleOrUrl.replace(/^@/, '')}`;
  }
  return { twitter: url ?? handleOrUrl };
};
