// TODO: port to new API!

const MS_LEARN_DOMAIN = 'learn.microsoft.com';
const mSLearnRegex = /^\/[^/]+\/training\/achievements\/([^/]+)$/;

export const getApiUrlFromTrophy = trophyUrlString => {
  if (!trophyUrlString) return null;

  let mSLearnUrl;
  try {
    mSLearnUrl = new URL(trophyUrlString);
  } catch {
    return null;
  }

  if (mSLearnUrl.protocol !== 'https:') return null;
  if (mSLearnUrl.hostname !== MS_LEARN_DOMAIN) return null;
  const match = mSLearnUrl.pathname.match(mSLearnRegex);
  if (!match) return null;

  const apiUrl = new URL(
    `https://${MS_LEARN_DOMAIN}/api/gamestatus/achievements/${match[1]}`
  );

  apiUrl.searchParams.set('username', mSLearnUrl.searchParams.get('username'));
  return apiUrl.href;
};
