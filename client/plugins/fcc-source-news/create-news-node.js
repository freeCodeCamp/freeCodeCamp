const crypto = require('crypto');

function createNewsNode(article) {
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(article))
    .digest('hex');

  const internal = {
    contentDigest,
    type: 'NewsArticleNode'
  };

  return JSON.parse(
    JSON.stringify({
      ...article,
      id: article._id + ' >>>>>>> ' + internal.type,
      children: [],
      parent: null,
      internal,
      sourceInstanceName: 'article'
    })
  );
}

exports.createNewsNode = createNewsNode;
