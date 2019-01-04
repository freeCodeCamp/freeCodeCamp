exports.createArticleSlug = ({
  username = '',
  slugPart = '',
  shortId = ''
} = {}) => {
  if (!username || !slugPart || !shortId) {
    throw new Error(`
  createArtcileSlug: One or more properties were missing, all are required

    {
      username: ${username},
      slugPart: ${slugPart},
      shortId: ${shortId}
    }
`);
  }
  return `/news/${username}/${slugPart.concat('--', shortId)}`;
};
